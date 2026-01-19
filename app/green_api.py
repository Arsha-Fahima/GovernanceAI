import requests
import http.client
import time
from dotenv import load_dotenv
import os
from app.config import GREEN_API_URL
from app.supabase_client import get_all_clients
from app.api_results import (
    fetch_gst_data,
    extract_gst_details,
    main_pending_calculater,
   
)

load_dotenv()



def build_whatsapp_message(payload):
    g1 = payload["gtsr1"]
    g3 = payload["gtsr3b"]

    gstin = payload["gstin"]
    name = payload["legalname"]

    # Status text
    g1_status = "PENDING " if g1["pending_count"] > 0 else "FILED "
    g3_status = "PENDING " if g3["pending_count"] > 0 else "FILED "

    msg = f"""
 GST Filing Status

Hello {name},

GSTIN: *{gstin}*

----------------------------
 {g1['return_type']}
Status: {g1_status}
latest Filed Period : {payload['latestgstr1']}
pending Months : {g1['pending_months'] or '0'}
pending Count : {g1['pending_count']}
Due Date: {g1['due_date']}

----------------------------
 {g3['return_type']}
Status: {g3_status}
latest Filed Period : {payload['latestgstr3b']}
pending Months : {g3['pending_months'] or '0'}
pending Count : {g3['pending_count']}
Due Date: {g3['due_date']}

----------------------------

Please ensure all pending returns are filed before the due date to avoid penalties.

Thank you.
"""

    return msg.strip()


# def build_reminder_message(payload):
#     g1 = payload["gtsr1"]
#     g3 = payload["gtsr3b"]

#     reminder_lines = []

#     if g1["pending_count"] > 0:
#         reminder_lines.append(
#             f"""
# This is a reminder to file your *{g1['return_type']}*
# GSTIN: {payload['gstin']}
# Due Date: {g1['due_date']}
# """
#         )

#     if g3["pending_count"] > 0:
#         reminder_lines.append(
#             f"""
# This is a reminder to file your *{g3['return_type']}*
# GSTIN: {payload['gstin']}
# Due Date: {g3['due_date']}
# """
#         )

#     # Safety check (should not happen, but good practice)
#     if not reminder_lines:
#         return None

#     msg = f"""
#  *GST Filing Reminder*

# Hello {payload['legalname']},
# {''.join(reminder_lines)}

# Please ensure timely filing to avoid late fees.

# Thank you.
# """
#     return msg.strip()


# def has_pending(payload):
#     return (
#         payload["gtsr1"]["pending_count"] > 0 or
#         payload["gtsr3b"]["pending_count"] > 0
#     )



ID_INSTANCE = os.getenv("ID_INSTANCE")
API_TOKEN_INSTANCE = os.getenv("API_TOKEN_INSTANCE")

def send_whatsapp(phone, message):
    chatId = phone + "@c.us"

    url = f"https://api.green-api.com/waInstance{ID_INSTANCE}/sendMessage/{API_TOKEN_INSTANCE}"

    payload = {
        "chatId": chatId,
        "message": message
    }

    response = requests.post(GREEN_API_URL, json=payload)
    print("WhatsApp:", phone, response.status_code)



# ================= UI FLOW (INSTANT) =================
def send_main_message_from_ui(client, gst_payload):
    main_msg = build_whatsapp_message(gst_payload)
    send_whatsapp(client["phone"], main_msg)
    # save_main_payload(client["id"], gst_payload)


# clients = get_all_clients()

# for c in clients:
#     print("Processing:", c["gstin"])

#     api_response = fetch_gst_data(c["gstin"])
#     gst_details = extract_gst_details(api_response)
#     gst_payload = main_pending_calculater(gst_details)

#     # 1️⃣ Send main message
#     main_msg = build_whatsapp_message(gst_payload)
#     send_whatsapp(c["phone"], main_msg)
#     print(main_msg)

#     # 2️⃣ Send reminder ONLY if pending exists
#     if has_pending(gst_payload):
#         print("Pending found. Waiting 2 minutes for reminder...")
#         time.sleep(10)  # 2 minutes delay

#         reminder_msg = build_reminder_message(gst_payload)
#         if reminder_msg:
#             send_whatsapp(c["phone"], reminder_msg)
#             print(reminder_msg)


