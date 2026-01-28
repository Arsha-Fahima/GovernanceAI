
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
# app/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

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
from app.green_api import build_main_message, send_whatsapp, run_daily_cron

app = FastAPI()

# ✅ CORS FIX
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # use specific domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= POST MODELS =================
class GSTForm(BaseModel):
    name: str
    email: str
    phone: str
    gstin: str = Field(..., description="GSTIN of the user")

class EmailForm(BaseModel):
    email: str

# ================= ROOT =================
@app.get("/")
def read_root():
    return {"message": "Backend running 🚀"}

# ================= USER SUBMISSION =================
@app.post("/submit-user/")
def submit_user(form: GSTForm):
    """
    Called when user clicks the Submit button in UI
    Stores/updates user data in users table
    """
    try:
        # Upsert user data
        upsert_user(
            email=form.email,
            name=form.name,
            phone=form.phone,
            gstin=form.gstin.strip().upper()
        )
        return {"status": "success", "message": "User profile saved successfully!"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

# ================= CHECK GST STATUS =================
@app.post("/check-status/")
def check_status(form: EmailForm):
    """
    Called when user clicks Check Status button in UI
    Fetches user, runs GST compliance logic, updates compliance table, and returns result
    """
    try:
        # 1️⃣ Fetch user by email
        user = fetch_user_by_email(form.email)
        if not user:
            return {"status": "error", "message": "User not found"}

        gstin = user["gstin"].strip().upper()
        if not is_valid_gstin(gstin):
            return {"status": "error", "message": "Invalid GSTIN in user profile"}

        # 2️⃣ Fetch GST data and extract details
        api_response = fetch_gst_data(gstin)
        gst_details = extract_gst_details(api_response)

        # 3️⃣ Update compliance table (raw data)
        upsert_compliance(build_compliance_db_payload(gst_details))

        # 4️⃣ Update compliance table (derived fields)
        pending_result = main_pending_calculater(gst_details)
        update_payload = extract_derived_update_payload(pending_result)
        update_compliance_derived_fields(gst_details["gstin"], update_payload)

        # 5️⃣ Send WhatsApp message (optional)
        whatsapp_msg = build_main_message(pending_result)
        send_whatsapp(user["phone"], whatsapp_msg)

        # 6️⃣ Run daily cron jobs if needed
        run_daily_cron()

        # 7️⃣ Return result to UI
        return {"status": "success", "gst_report": pending_result}

    except Exception as e:
        return {"status": "error", "message": str(e)}
