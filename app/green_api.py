import requests
import http.client
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

    # Decide which return to talk about (priority to pending)
    if g3["pending_count"] > 0 and g1["pending_count"] > 0:
        rt3 = g3["return_type"]
        status = "pending"
        due3 = g3["due_date"]
        rt1 = g1["return_type"]
        status = "pending"
        due1 = g1["due_date"]

    elif g3["pending_count"] > 0 and g1["pending_count"] <= 0:
        rt3 = g3["return_type"]
        status = "pending"
        due3 = g3["due_date"]
        rt1 = g1["return_type"]
        status = "filed"
        due1 = g1["due_date"]

    elif g1["pending_count"] > 0 and g3["pending_count"] <= 0:
        rt1 = g1["return_type"]
        status = "pending"
        due1 = g1["due_date"]
        rt3 = g3["return_type"]
        status = "filed"
        due3 = g3["due_date"]

    else:
        rt1 = g1["return_type"]
        status = "filed"
        due1 = g1["due_date"]
        rt3 = g3["return_type"]
        status = "filed"
        due3 = g3["due_date"]

    msg = f"""
Filing Confirmation
Hello {payload['legalname']},

Your {rt1} for GSTIN {payload['gstin']} is {status}.
Due Date: {due1}

Your {rt3} for GSTIN {payload['gstin']} is {status}.
#Due Date: {due3}

Thank you.
{payload['legalname']}
"""

    return msg.strip()


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


clients = get_all_clients()

for c in clients:
    print("Processing:", c["gstin"])

    api_response = fetch_gst_data(c["gstin"])
    gst_details = extract_gst_details(api_response)
    gst_payload = main_pending_calculater(gst_details)

    whatsapp_msg = build_whatsapp_message(gst_payload)

    send_whatsapp(c["phone"], whatsapp_msg)
