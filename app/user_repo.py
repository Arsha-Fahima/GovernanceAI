from app.supabase_client import supabase

def upsert_user(email, name, phone, gstin):
    return supabase.table("users").upsert({
        "email": email,
        "name": name,
        "phone": phone,
        "gstin": gstin
    }).execute()


def fetch_user_by_email(email: str):
    """
    Fetch a user record by email from 'users' table
    """
    response = supabase.table("users").select("*").eq("email", email).single()
    if response.get("data"):
        return response["data"]
    return None