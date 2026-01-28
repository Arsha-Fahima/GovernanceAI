
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel, Field

# from app.user_repo import upsert_user
# from app.compliance_repo import upsert_compliance
# from app.api_results import (
#     fetch_gst_data,
#     extract_gst_details,
#     build_compliance_db_payload,
#     main_pending_calculater
# )
# from app.utils import is_valid_gstin
# from app.green_api import build_main_message, send_whatsapp
# from app.compliance_repo import update_compliance_derived_fields
# from app.api_results import extract_derived_update_payload
# from app.green_api import run_daily_cron


# app = FastAPI()

# # ✅ CORS FIX
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],   # use specific domain in production
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # ================= POST MODEL =================
# class GSTForm(BaseModel):
#     name: str
#     email: str
#     phone: str
#     gstin: str = Field(..., description="GSTIN of the user")

# # ================= ROOT =================
# @app.get("/")
# def read_root():
#     return {"message": "Backend running on Render 🚀"}

# # ================= FORM SUBMISSION =================

# # @app.post("/submit-gst/")
# # def submit_gst(form: GSTForm):
# #     gstin = form.gstin.strip().upper()

# #     if not is_valid_gstin(gstin):
# #         return {"status": "error", "message": "Invalid GSTIN"}

# #     try:
# #         api_response = fetch_gst_data(gstin)
# #         gst_details = extract_gst_details(api_response)

# #         upsert_user(
# #             email=form.email,
# #             name=gst_details["lgnm"],
# #             phone=form.phone,
# #             gstin=gst_details["gstin"]
# #         )

# #         #  RAW DATA
# #         upsert_compliance(build_compliance_db_payload(gst_details))

# #         #  DERIVED DATA
# #         pending_result = main_pending_calculater(gst_details)
# #         update_payload = extract_derived_update_payload(pending_result)

# #         update_compliance_derived_fields(
# #             gst_details["gstin"],
# #             update_payload
# #         )

# #         #  WHATSAPP
# #         whatsapp_msg = build_main_message(pending_result)
# #         send_whatsapp(form.phone, whatsapp_msg)

# #         #reminder 
# #         run_daily_cron()

# #         return {
# #             "status": "success",
# #             "gst_report": pending_result
# #         }

# #     except Exception as e:
# #         return {"status": "error", "message": str(e)}


# @app.post("/submit-gst/")
# def submit_gst(form: GSTForm):
#     gstin = form.gstin.strip().upper()

#     if not is_valid_gstin(gstin):
#         return {"status": "error", "message": "Invalid GSTIN"}

#     try:
#         api_response = fetch_gst_data(gstin)
#         gst_details = extract_gst_details(api_response)

#         upsert_user(
#             email=form.email,
#             name=gst_details["lgnm"],
#             phone=form.phone,
#             gstin=gst_details["gstin"]
#         )

#         #  RAW DATA
#         upsert_compliance(build_compliance_db_payload(gst_details))

#         #  DERIVED DATA
#         pending_result = main_pending_calculater(gst_details)
#         update_payload = extract_derived_update_payload(pending_result)

#         update_compliance_derived_fields(
#             gst_details["gstin"],
#             update_payload
#         )

#         #  WHATSAPP
#         whatsapp_msg = build_main_message(pending_result)
#         send_whatsapp(form.phone, whatsapp_msg)

#         #reminder 
#         run_daily_cron()

#         return {
#             "status": "success",
#             "gst_report": pending_result
#         }

#     except Exception as e:
#         return {"status": "error", "message": str(e)}

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from supabase import create_client

from app.user_repo import upsert_user
from app.compliance_repo import upsert_compliance, update_compliance_derived_fields
from app.api_results import (
    fetch_gst_data,
    extract_gst_details,
    build_compliance_db_payload,
    main_pending_calculater,
    extract_derived_update_payload
)
from app.utils import is_valid_gstin
from app.green_api import build_main_message, send_whatsapp
from app.supabase_client import SUPABASE_URL, SUPABASE_KEY

# ================= INIT =================
app = FastAPI()

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= MODEL =================
class GSTForm(BaseModel):
    name: str
    email: str
    phone: str
    gstin: str = Field(..., description="GSTIN of the user")

# ================= ROOT =================
@app.get("/")
def read_root():
    return {"message": "Backend running on Render 🚀"}

# ================= MAIN API =================
@app.post("/submit-gst/")
def submit_gst(form: GSTForm):
    try:
        # 🔹 STEP 1: Store / Update user
        upsert_user(
            email=form.email,
            name=form.name,
            phone=form.phone,
            gstin=form.gstin.strip().upper()
        )

        # 🔹 STEP 2: Fetch GSTIN FROM USERS TABLE (DB = source of truth)
        user_res = supabase.table("users").select("*").eq("email", form.email).execute()

        if not user_res.data:
            return {"status": "error", "message": "User not found"}

        user = user_res.data[0]
        gstin = user["gstin"]

        if not is_valid_gstin(gstin):
            return {"status": "error", "message": "Invalid GSTIN in database"}

        # 🔹 STEP 3: Call GST API
        api_response = fetch_gst_data(gstin)
        gst_details = extract_gst_details(api_response)

        # 🔹 STEP 4: Store RAW GST data in compliance table
        raw_payload = build_compliance_db_payload(gst_details)
        upsert_compliance(raw_payload)

        # 🔹 STEP 5: Run Pending Logic
        pending_result = main_pending_calculater(gst_details)

        # 🔹 STEP 6: Update DERIVED compliance fields
        update_payload = extract_derived_update_payload(pending_result)
        update_compliance_derived_fields(gstin, update_payload)

        # 🔹 STEP 7: Send WhatsApp
        whatsapp_msg = build_main_message(pending_result)
        send_whatsapp(user["phone"], whatsapp_msg)

        # 🔹 STEP 8: Return result to UI
        return {
            "status": "success",
            "gst_report": pending_result
        }

    except Exception as e:
        return {"status": "error", "message": str(e)}
