
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

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from app.user_repo import upsert_user
from app.compliance_repo import upsert_compliance, update_compliance_derived_fields
from app.api_results import fetch_gst_data, extract_gst_details, build_compliance_db_payload, main_pending_calculater, extract_derived_update_payload
from app.utils import is_valid_gstin
from app.green_api import build_main_message, send_whatsapp, run_daily_cron

app = FastAPI()

# ✅ CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= POST MODELS =================
class UserForm(BaseModel):
    name: str
    email: str
    phone: str
    gstin: str = Field(..., description="GSTIN of the user")


class GSTCheckForm(BaseModel):
    name: str
    email: str
    phone: str
    gstin: str = Field(..., description="GSTIN of the user")


# ================= ROOT =================
@app.get("/")
def read_root():
    return {"message": "Backend running 🚀"}


# ================= Submit User =================
@app.post("/submit-user/")
def submit_user(form: UserForm):
    """Triggered when the frontend Submit button is clicked.
    Only updates the user table.
    """
    try:
        upsert_user(
            email=form.email,
            name=form.name,
            phone=form.phone,
            gstin=form.gstin.upper()
        )
        return {"status": "success", "message": "User profile saved successfully!"}
    except Exception as e:
        return {"status": "error", "message": str(e)}


# ================= Check GST Compliance =================
@app.post("/check-gst/")
def check_gst(form: GSTCheckForm):
    """Triggered when the frontend Check Status button is clicked.
    Runs full backend logic: GST fetch, compliance upsert, derived fields, WhatsApp.
    """
    gstin = form.gstin.strip().upper()
    if not is_valid_gstin(gstin):
        return {"status": "error", "message": "Invalid GSTIN"}

    try:
        # Fetch GST data from API
        api_response = fetch_gst_data(gstin)
        gst_details = extract_gst_details(api_response)

        # Update user table in case details changed
        upsert_user(
            email=form.email,
            name=form.name or gst_details.get("lgnm"),
            phone=form.phone,
            gstin=gst_details.get("gstin")
        )

        # Upsert compliance table (creates new or updates existing)
        upsert_compliance(build_compliance_db_payload(gst_details))

        # Derived calculations
        pending_result = main_pending_calculater(gst_details)
        update_payload = extract_derived_update_payload(pending_result)

        update_compliance_derived_fields(
            gst_details["gstin"],
            update_payload
        )

        # Send WhatsApp
        whatsapp_msg = build_main_message(pending_result)
        send_whatsapp(form.phone, whatsapp_msg)

        # Daily reminder cron
        run_daily_cron()

        return {"status": "success", "gst_report": pending_result}

    except Exception as e:
        return {"status": "error", "message": str(e)}


# ================= START SERVER (if running python main.py directly) =================
if __name__ == "__main__":
    import os, uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 8000)),
        reload=True
    )
