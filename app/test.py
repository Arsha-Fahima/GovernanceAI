from app.api_results import (
    fetch_gst_data,
    extract_gst_details,
    build_compliance_db_payload,
    main_pending_calculator,
    extract_derived_update_payload,
    build_compliance_report
)

from app.user_repo import fetch_user_by_email
from app.compliance_repo import upsert_compliance, update_compliance_derived_fields
from app.utils import is_valid_gstin   # adjust import if different

import traceback


def debug_check_status(email):
    try:
        print("\nSTEP 1 — FETCH USER")
        user_result = fetch_user_by_email(email)
        print(user_result)

        user = user_result["data"]
        gstin = user.get("gstin", "").strip().upper()
        print("GSTIN:", gstin)

        if not is_valid_gstin(gstin):
            raise Exception("Invalid GSTIN")

        print("\nSTEP 2 — FETCH GST API")
        api_response = fetch_gst_data(gstin)
        print("API OK")

        print("\nSTEP 3 — EXTRACT GST DETAILS")
        gst_details = extract_gst_details(api_response)
        print("Extracted keys:", gst_details.keys())

        print("\nSTEP 4 — BUILD RAW DB PAYLOAD")
        raw_payload = build_compliance_db_payload(gst_details)
        print(raw_payload)

        print("\nSTEP 5 — SAVE RAW DATA")
        upsert_compliance(raw_payload)
        print("Saved")

        print("\nSTEP 6 — DERIVED CALCULATION")
        pending_result = main_pending_calculator(gst_details)
        print(pending_result)

        print("\nSTEP 7 — UPDATE DERIVED DB")
        update_payload = extract_derived_update_payload(pending_result)
        print(update_payload)
        update_compliance_derived_fields(gstin, update_payload)

        print("\nSTEP 8 — BUILD REPORT")
        report = build_compliance_report(gst_details)
        print(report)

        print("\n✅ ALL STEPS SUCCESS")

    except Exception as e:
        print("\n❌ ERROR OCCURRED")
        traceback.print_exc()


if __name__ == "__main__":
    debug_check_status("abc@gmail.com")   # put real email
