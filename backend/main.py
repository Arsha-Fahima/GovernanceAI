import os
import uvicorn
from typing import List, Optional, Dict
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv
from supabase import create_client, Client

# --- 1. CONFIGURATION ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, "..", ".env.local"))

app = FastAPI(
    title="GovernanceAI Backend",
    description="Clean, modular engine for GST reminders",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- 2. DATABASE CLIENT ---
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("⚠️ WARNING: Supabase credentials missing from environment.")
    supabase = None
else:
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# --- 3. DATA MODELS ---
class GSTProfile(BaseModel):
    whatsapp_number: str
    gstin: str = Field(..., min_length=15, max_length=15)
    business_name: str
    state: str
    filing_type: str

# --- 4. UTILITY METHODS ---
def get_system_config() -> Dict[str, str]:
    """Retrieves global settings (API keys, etc.) from the database."""
    if not supabase: return {}
    try:
        response = supabase.table("system_settings").select("*").execute()
        return {item['key']: item['value'] for item in response.data}
    except:
        return {}

# --- 5. API ENDPOINTS ---

@app.get("/health")
def health_check():
    return {"status": "healthy", "db": "connected" if supabase else "error"}

@app.post("/api/gst/upsert")
async def upsert_client_gst(data: GSTProfile):
    """Handles GST registration and automatic PAN extraction."""
    if not supabase: raise HTTPException(status_code=500, detail="Database not configured")
    
    try:
        # Business Logic: Extract PAN from GSTIN (Indices 2 to 12)
        extracted_pan = data.gstin[2:12].upper()
        
        profile = {
            "whatsapp_number": data.whatsapp_number,
            "gstin": data.gstin.upper(),
            "pan": extracted_pan,
            "business_name": data.business_name,
            "state": data.state,
            "filing_type": data.filing_type
        }

        response = supabase.table("gst_details").upsert(profile).execute()
        return {"success": True, "data": response.data}
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/admin/send-whatsapp")
async def send_notification(whatsapp_number: str):
    """
    Triggers a WhatsApp message.
    Fetches Meta credentials dynamically from the system_settings table.
    """
    if not supabase: raise HTTPException(status_code=500, detail="Database not configured")

    # 1. Fetch live API credentials from Control Panel settings
    config = get_system_config()
    phone_id = config.get("whatsapp_phone_id")
    access_token = config.get("whatsapp_access_token")

    # 2. Placeholder for Meta API call
    # Note: In a real scenario, you'd use 'requests' or 'httpx' to POST to:
    # https://graph.facebook.com/v17.0/{phone_id}/messages
    
    print(f"🚀 [WHATSAPP PROVIDER] Using Phone ID: {phone_id}")
    print(f"🚀 [WHATSAPP PROVIDER] Sending to: {whatsapp_number}")

    try:
        # 3. Log the attempt in Supabase
        log_entry = {
            "whatsapp_number": whatsapp_number,
            "status": "success" if phone_id and access_token else "pending_config"
        }
        supabase.table("reminder_logs").insert(log_entry).execute()
        
        return {
            "success": True, 
            "status": log_entry["status"],
            "message": "Reminder logged and transmission simulated"
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Log update failed: {str(e)}")

# --- 6. SERVER BOOT ---
if __name__ == "__main__":
    # If run from root, we need to add the backend folder to sys.path or use backend.main:app
    # Using the app object directly for simplicity, though reload will be disabled
    print("✨ GovernanceAI Backend starting on http://127.0.0.1:8000")
    uvicorn.run(app, host="127.0.0.1", port=8000)
