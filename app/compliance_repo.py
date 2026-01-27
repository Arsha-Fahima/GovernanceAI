
from app.supabase_client import supabase

def upsert_compliance(payload):
    return supabase.table("compliance").upsert(
        payload,
        on_conflict="gstin"
    ).execute()


def update_compliance_derived_fields(gstin, update_payload):
    return supabase.table("compliance") \
        .update(update_payload) \
        .eq("gstin", gstin) \
        .execute()