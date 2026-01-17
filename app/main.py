from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, ValidationError
from typing import Optional

from user_repo import upsert_user
from compliance_repo import upsert_compliance, delete_compliance_by_gstin
from api_results import fetch_gst_data, extract_gst_details, build_compliance_db_payload
from utils import is_valid_gstin
from supabase_client import supabase

app = FastAPI()

# ---------------- MIDDLEWARE ---------------- #

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- MODELS ---------------- #

class GSTRequest(BaseModel):
    gstin: str

class UpsertGST(BaseModel):
    email: str                    # ✅ REQUIRED
    whatsapp_number: str
    gstin: str
    pan: Optional[str] = None
    business_name: Optional[str] = None
    trade_name: Optional[str] = None
    state: Optional[str] = None
    filing_type: Optional[str] = None

# ---------------- ENDPOINTS ---------------- #

@app.post("/api/fetch-gst-details")
async def get_gst_details(request: GSTRequest):
    gstin = request.gstin.strip().upper()

    if not is_valid_gstin(gstin):
        raise HTTPException(status_code=400, detail="Invalid GSTIN")

    try:
        api_response = fetch_gst_data(gstin)
        details = extract_gst_details(api_response)
        return details
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/gst/upsert")
async def upsert_gst_endpoint(request: Request):
    try:
        # ---------- READ BODY ----------
        try:
            raw_body = await request.json()
        except Exception:
            raise HTTPException(status_code=400, detail="Invalid JSON body")

        print("DEBUG BODY:", raw_body)

        # ---------- VALIDATE ----------
        try:
            data = UpsertGST(**raw_body)
        except ValidationError as ve:
            raise HTTPException(status_code=422, detail=ve.errors())

        email = data.email.strip().lower()
        gstin = data.gstin.strip().upper()

        if not is_valid_gstin(gstin):
            raise HTTPException(status_code=400, detail="Invalid GSTIN")

        # ---------- FETCH GST DATA ----------
        api_response = fetch_gst_data(gstin)
        gst_details = extract_gst_details(api_response)

        # ---------- USERS TABLE (ONLY ONCE) ----------
        upsert_user(
            email=email,
            name=data.business_name or gst_details.get("lgnm"),
            phone=data.whatsapp_number,
            gstin=gstin
        )

        # ---------- COMPLIANCE TABLE ----------
        delete_compliance_by_gstin(gstin)

        compliance_payload = build_compliance_db_payload(gst_details)

        if data.business_name:
            compliance_payload["legalname"] = data.business_name

        upsert_compliance(compliance_payload)

        return {
            "success": True,
            "message": "User and compliance stored successfully"
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/compliance/{gstin}")
async def get_compliance_record(gstin: str):
    gstin = gstin.strip().upper()
    try:
        res = supabase.table("compliance").select("*").eq("gstin", gstin).execute()
        return {"success": True, "data": res.data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/")
async def root():
    return {"message": "Governance AI Backend is running"}
