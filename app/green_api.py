
import os
import requests
from datetime import date,datetime
from dotenv import load_dotenv
from supabase import create_client
from app.compliance_repo import update_compliance_derived_fields


# ================= LOAD ENV =================
load_dotenv()

GREEN_API_URL = os.getenv("GREEN_API_URL")
ID_INSTANCE = os.getenv("ID_INSTANCE")
API_TOKEN_INSTANCE = os.getenv("API_TOKEN_INSTANCE")

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

# ================= UTILS =================
def days_left(due_date):
    if not due_date:
        return None

    # If it's a string, convert to date
    if isinstance(due_date, str):
        due_date = datetime.strptime(due_date, "%Y-%m-%d").date()

    return (due_date - date.today()).days

# ================= WHATSAPP =================
def send_whatsapp(phone, message):
    payload = {
        "chatId": f"91{phone}@c.us",
        "message": message
    }
    response = requests.post(GREEN_API_URL, json=payload)
    print(f"📤 WhatsApp → {phone} | {response.status_code}")

# ================= MAIN MESSAGE =================
def build_main_message(payload):
    g1 = payload["gtsr1"]
    g3 = payload["gtsr3b"]

    return f"""
*GST Filing Status*

Hello {payload['legalname']},

GSTIN: *{payload['gstin']}*

----------------------------
*{g1['return_type']}*
Status: {"PENDING" if g1["pending_count"] > 0 else "FILED"}
Latest Filed Period: {payload.get('latestgstr1')}
Pending Months: {g1.get('pending_months') or '0'}
Pending Count: {g1.get('pending_count')}
Due Date: {g1.get('due_date')}

----------------------------
*{g3['return_type']}*
Status: {"PENDING" if g3["pending_count"] > 0 else "FILED"}
Latest Filed Period: {payload.get('latestgstr3b')}
Pending Months: {g3.get('pending_months') or '0'}
Pending Count: {g3.get('pending_count')}
Due Date: {g3.get('due_date')}

----------------------------

Please ensure all pending returns are filed before the due date to avoid penalties.

Thank you.
""".strip()

# ================= REMINDER MESSAGE =================
def build_reminder_message(client, return_type, days):
    return f"""
*GST Filing Reminder*

Hello {client['legalname']},

Your *{return_type.upper()}* return is due in *{days} days*.

GSTIN: {client['gstin']}
Due Date: {client.get(f"{return_type}_due_date")}

Please file on time to avoid late fees.

Thank you.
""".strip()

# ================= DB HELPERS =================
def get_all_clients():
    # Fetch all compliance entries
    compliance_clients = supabase.table("compliance").select("*").execute().data

    full_clients = []
    for c in compliance_clients:
        # Fetch the user by GSTIN
        user = supabase.table("users").select("phone").eq("gstin", c["gstin"]).execute().data
        if user:
            c["phone"] = user[0]["phone"]
            full_clients.append(c)
        else:
            print(f"⚠ No phone found for GSTIN {c['gstin']}, skipping...")
    return full_clients

# ================= UI FLOW =================
def send_main_message_from_ui(client, gst_payload):
    message = build_main_message(gst_payload)
    send_whatsapp(client["phone"], message)
    
    # Save derived fields
    update_payload = {
        "gstr1_due_date": gst_payload["gtsr1"]["due_date"],
        "gstr1_pending_count": gst_payload["gtsr1"]["pending_count"],
        "gstr3b_due_date": gst_payload["gtsr3b"]["due_date"],
        "gstr3b_pending_count": gst_payload["gtsr3b"]["pending_count"],
    }
    update_compliance_derived_fields(client["gstin"], update_payload)


def mark_reminder_sent(gstin, return_type, days):
    supabase.table("compliance").update({
        f"{return_type}_reminder_{days}_sent": True
    }).eq("gstin", gstin).execute()

# ================= CRON LOGIC =================
def process_return(client, return_type):
    pending = client.get(f"{return_type}_pending_count", 0)
    due_date = client.get(f"{return_type}_due_date")

    if not pending or pending <= 0 or not due_date:
        return

    days = days_left(due_date)

    if days is None:
        return

    # 5-day reminder
    if days == 5 and not client.get(f"{return_type}_reminder_5_sent", False):
        msg = build_reminder_message(client, return_type, 5)
        send_whatsapp(client["phone"], msg)
        mark_reminder_sent(client["gstin"], return_type, 5)
    

    # 2-day reminder
    if days == 2 and not client.get(f"{return_type}_reminder_2_sent", False):
        msg = build_reminder_message(client, return_type, 2)
        send_whatsapp(client["phone"], msg)
        mark_reminder_sent(client["gstin"], return_type, 2)

def run_daily_cron():
    print(" GST Reminder Cron Started")

    clients = get_all_clients()

    for client in clients:
        process_return(client, "gstr1")
        process_return(client, "gstr3b")

    print("✅ GST Reminder Cron Completed")

# ================= ENTRY =================
# if __name__ == "__main__":
#     run_daily_cron()

