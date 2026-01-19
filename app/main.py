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
from pydantic import BaseModel, Field
from app.user_repo import upsert_user
from app.compliance_repo import upsert_compliance
from app.api_results import (
    fetch_gst_data,
    extract_gst_details,
    build_compliance_db_payload,
    main_pending_calculater,
    print_main_pending_calculator
)
from app.utils import is_valid_gstin
from app.green_api import send_whatsapp, build_whatsapp_message

app = FastAPI()

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

    # ✅ Validate GSTIN
    if not is_valid_gstin(gstin):
        return {"status": "error", "message": "Invalid GSTIN"}

    try:
        # 1️⃣ Fetch GST data from API
        api_response = fetch_gst_data(gstin)

        # 2️⃣ Extract & normalize
        gst_details = extract_gst_details(api_response)

        # 3️⃣ Save user to DB
        upsert_user(
            email=form.email,
            name=gst_details["lgnm"],
            phone=form.phone,
            gstin=gst_details["gstin"]
        )

        # 4️⃣ Save compliance data
        compliance_db_payload = build_compliance_db_payload(gst_details)
        db_result = upsert_compliance(compliance_db_payload)

        # 5️⃣ Build pending report
        gst_payload = main_pending_calculater(gst_details)

        # 6️⃣ Send MAIN WhatsApp message immediately
        whatsapp_msg = build_whatsapp_message(gst_payload)
        send_whatsapp(form.phone, whatsapp_msg)

        return {
            "status": "success",
            "message": "GST data saved and WhatsApp sent",
            "gst_report": gst_payload
        }

    except Exception as e:
        return {"status": "error", "message": str(e)}
