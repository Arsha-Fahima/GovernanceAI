
from user_repo import upsert_user
from compliance_repo import upsert_compliance
from fastapi import FastAPI
import os
from api_results import (
    fetch_gst_data,
    extract_gst_details,
    build_compliance_db_payload,
    main_pending_calculater,
    print_main_pending_calculator
)
from utils import is_valid_gstin   # 👈 import your validator

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Backend running on Render 🚀"}

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

        # ================= 6️⃣ Save User ================= #
        upsert_user(
            email="arsha.tajdeen23@gmail.com",
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
    main()
