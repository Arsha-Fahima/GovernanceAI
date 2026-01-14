
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from user_repo import upsert_user
from compliance_repo import upsert_compliance, delete_compliance_by_gstin
from api_results import (
    fetch_gst_data,
    extract_gst_details,
    build_compliance_db_payload,
    main_pending_calculater,
    print_main_pending_calculator
)
from utils import is_valid_gstin   # 👈 import your validator

from typing import Optional
from supabase_client import supabase

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GSTRequest(BaseModel):
    gstin: str

class UpsertGST(BaseModel):
    whatsapp_number: str
    gstin: str
    pan: str
    business_name: str
    trade_name: Optional[str] = None
    state: str
    filing_type: str

class UpdateReminder(BaseModel):
    whatsapp_number: str
    reminder_days: Optional[list[int]] = None
    reminder_time: Optional[str] = None
    frequency: Optional[str] = None
    consent_given: Optional[bool] = None
    is_active: Optional[bool] = None

@app.post("/api/fetch-gst-details")
async def get_gst_details(request: GSTRequest):
    gstin = request.gstin.strip().upper()
    
    if not is_valid_gstin(gstin):
        raise HTTPException(status_code=400, detail="Invalid GSTIN format")

    try:
        api_response = fetch_gst_data(gstin)
        details = extract_gst_details(api_response)
        
        # Calculate Pending Report for UI display
        compliance_report = main_pending_calculater(details)
        
        # Add report to response
        details["compliance_report"] = compliance_report
        
        return details
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/gst/upsert")
async def upsert_gst_endpoint(data: UpsertGST):
    try:
        gstin = data.gstin.strip().upper()
        if not is_valid_gstin(gstin):
            raise HTTPException(status_code=400, detail="Invalid GSTIN")

        # 1️⃣ Save USER (email REQUIRED)
        upsert_user(
            email=data.email,
            name=data.business_name,
            phone=data.whatsapp_number,
            gstin=gstin
        )

        # 2️⃣ Fetch GST data
        api_response = fetch_gst_data(gstin)
        gst_details = extract_gst_details(api_response)

        # 3️⃣ Save COMPLIANCE (no email)
        compliance_payload = build_compliance_db_payload(gst_details)
        upsert_compliance(compliance_payload)

        return {
            "success": True,
            "message": "User & Compliance stored successfully"
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/reminders/update")
async def update_reminders_endpoint(data: UpdateReminder):
    try:
        payload = data.dict(exclude_unset=True)
        # remove whatsapp_number from payload if it's the key, but upsert needs it
        # Assuming whatsapp_number is the key in reminder_settings
        res = supabase.table("reminder_settings").upsert(payload).execute()
        return {"success": True, "data": res.data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {"message": "Governance AI Backend is running"}


def main():
    # ================= INPUT + VALIDATION ================= #
    while True:
        gstin = input("Enter GSTIN: ").strip().upper()

        if is_valid_gstin(gstin):
            print("✅ GSTIN format is valid\n")
            break
        else:
            print("❌ Invalid GSTIN. Please enter a valid GSTIN.\n")

    try:
        # ================= 1️⃣ Fetch from GST API ================= #
        api_response = fetch_gst_data(gstin)

        # ================= 2️⃣ Normalize API data ================= #
        gst_details = extract_gst_details(api_response)

        # ================= Delete existing compliance records ================= #
        delete_compliance_by_gstin(gst_details["gstin"])

        # ================= 6️⃣ Save User ================= #
        upsert_user(
            email="test@mail.com",
            name=gst_details["lgnm"],
            phone="9876543210",
            gstin=gst_details["gstin"]
        )

        print("🎯 User Saved ")


        # ================= 3️⃣ Build DB payload (FULL JSON) ================= #
        compliance_db_payload = build_compliance_db_payload(gst_details)

        print("📦 Saving compliance data to database...")
        db_result = upsert_compliance(compliance_db_payload)

        if db_result.data:
            print("✅ Compliance data stored successfully")
        else:
            print("⚠️ Compliance insert issue:", db_result)

        # ================= 4️⃣ Build pending report ================= #
        compliance_report_payload = main_pending_calculater(gst_details)

        # ================= 5️⃣ Show report ================= #
        print_main_pending_calculator(compliance_report_payload)

        
    except Exception as e:
        print("❌ System Error:", str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
