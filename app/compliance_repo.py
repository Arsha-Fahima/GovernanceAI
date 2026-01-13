
from app.supabase_client import supabase

def upsert_compliance(payload):
    return supabase.table("compliance").upsert(
        payload,
        on_conflict="gstin"
    ).execute()
