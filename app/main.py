# from fastapi import FastAPI
# import os
# from app.user_repo import upsert_user
# from app.compliance_repo import upsert_compliance
# from app.supabase_client import get_all_clients
# from app.api_results import (
#     fetch_gst_data,
#     extract_gst_details,
#     build_compliance_db_payload,
#     main_pending_calculater,
#     print_main_pending_calculator
# )
# from app.utils import is_valid_gstin   # 👈 import your validator
# from app.green_api import send_whatsapp, build_whatsapp_message

# app = FastAPI()

# @app.get("/")
# def read_root():
#     return {"message": "Backend running on Render 🚀"}

# def main():
#     # ================= INPUT + VALIDATION ================= #
#     while True:
#         gstin = input("Enter GSTIN: ").strip().upper()

#         if is_valid_gstin(gstin):
#             print("✅ GSTIN format is valid\n")
#             break
#         else:
#             print("❌ Invalid GSTIN. Please enter a valid GSTIN.\n")

#     try:
#         # ================= 1️⃣ Fetch from GST API ================= #
#         api_response = fetch_gst_data(gstin)

#         # ================= 2️⃣ Normalize API data ================= #
#         gst_details = extract_gst_details(api_response)

#         # ================= 6️⃣ Save User ================= #
#         upsert_user(
#             email="abc@gmail.com",
#             name=gst_details["lgnm"],
#             phone="917868886600",
#             gstin=gst_details["gstin"]
#         )

#         print("🎯 User Saved ")


# # ================= 3️⃣ Build DB payload (FULL JSON) ================= #


#         compliance_db_payload = build_compliance_db_payload(gst_details)

#         print("📦 Saving compliance data to database...")
#         db_result = upsert_compliance(compliance_db_payload)

#         if db_result.data:
#             print("✅ Compliance data stored successfully")
#         else:
#             print("⚠️ Compliance insert issue:", db_result)

#         # ================= 4️⃣ Build pending report ================= #
#         compliance_report_payload = main_pending_calculater(gst_details)

#         # ================= 5️⃣ Show report ================= #
#         print_main_pending_calculator(compliance_report_payload)
        
#     except Exception as e:
#         print("❌ System Error:", str(e))


# #  # ================= 7️⃣ SEND WHATSAPP TO ALL CLIENTS ================= #

# #     print("\n📲 Starting WhatsApp Broadcast...\n")

# #     clients = get_all_clients()

# #     if not clients:
# #         print("⚠ No active clients found")
# #         return

# #     for c in clients:
# #         try:
# #             print("Processing:", c["gstin"])

# #             api_response = fetch_gst_data(c["gstin"])
# #             gst_details = extract_gst_details(api_response)
# #             gst_payload = main_pending_calculater(gst_details)

# #             whatsapp_msg = build_whatsapp_message(gst_payload)

# #             send_whatsapp(c["phone"], whatsapp_msg)

# #             print("✅ Message sent to", c["phone"])
# #             print("-----------------------------------")

# #         except Exception as e:
# #             print("❌ Error for GSTIN", c.get("gstin"), ":", str(e))


# if __name__ == "__main__":
#     main()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from app.user_repo import upsert_user
from app.compliance_repo import upsert_compliance
from app.api_results import (
    fetch_gst_data,
    extract_gst_details,
    build_compliance_db_payload,
    main_pending_calculater
)
from app.utils import is_valid_gstin
from app.green_api import build_main_message, send_whatsapp
from app.compliance_repo import update_compliance_derived_fields
from app.api_results import extract_derived_update_payload
from app.green_api import run_daily_cron


app = FastAPI()

# ✅ CORS FIX
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # use specific domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= POST MODEL =================
class GSTForm(BaseModel):
    name: str
    email: str
    phone: str
    gstin: str = Field(..., description="GSTIN of the user")

# ================= ROOT =================
@app.get("/")
def read_root():
    return {"message": "Backend running on Render 🚀"}

# ================= FORM SUBMISSION =================

@app.post("/submit-gst/")
def submit_gst(form: GSTForm):
    gstin = form.gstin.strip().upper()

    if not is_valid_gstin(gstin):
        return {"status": "error", "message": "Invalid GSTIN"}

    try:
        api_response = fetch_gst_data(gstin)
        gst_details = extract_gst_details(api_response)

        upsert_user(
            email=form.email,
            name=gst_details["lgnm"],
            phone=form.phone,
            gstin=gst_details["gstin"]
        )

        #  RAW DATA
        upsert_compliance(build_compliance_db_payload(gst_details))

        #  DERIVED DATA
        pending_result = main_pending_calculater(gst_details)
        update_payload = extract_derived_update_payload(pending_result)

        update_compliance_derived_fields(
            gst_details["gstin"],
            update_payload
        )

        #  WHATSAPP
        whatsapp_msg = build_main_message(pending_result)
        send_whatsapp(form.phone, whatsapp_msg)

        #reminder 
        run_daily_cron()

        return {
            "status": "success",
            "gst_report": pending_result
        }

    except Exception as e:
        return {"status": "error", "message": str(e)}