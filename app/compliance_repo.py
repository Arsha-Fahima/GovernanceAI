from app.supabase_client import supabase

def upsert_compliance(payload):
    return supabase.table("compliance").upsert(
        payload,  # 🔥 changed
    ).execute()


def update_compliance_derived_fields(email, update_payload):
    return supabase.table("compliance") \
        .update(update_payload) \
        .eq("email", email) \
        .execute()