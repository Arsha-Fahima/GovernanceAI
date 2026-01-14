from supabase import create_client
from dotenv import load_dotenv
import os

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def get_all_clients():
    res = supabase.table("users") \
        .select("name, gstin, phone") \
        .eq("is_active", True) \
        .execute()
    return res.data