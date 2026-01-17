from supabase_client import supabase

def upsert_user(email: str, name: str | None, phone: str | None, gstin: str | None):
    if not email:
        raise ValueError("Email is required")

    payload = {
        "email": email,
        "name": name,
        "phone": phone,
        "gstin": gstin
    }

    # One user per phone number
    return supabase.table("users").upsert(
        payload,
        on_conflict="phone"
    ).execute()
