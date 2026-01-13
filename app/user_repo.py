from app.supabase_client import supabase

def upsert_user(email, name, phone, gstin):
    return supabase.table("users").upsert({
        "email": email,
        "name": name,
        "phone": phone,
        "gstin": gstin
    }).execute()
