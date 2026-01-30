from app.supabase_client import supabase

def upsert_user(email, name, phone, gstin):
    return supabase.table("users").upsert({
        "email": email,
        "name": name,
        "phone": phone,
        "gstin": gstin
    }).execute()


def fetch_user_by_email(email: str):
    try:
        response = (
            supabase
            .table("users")
            .select("*")
            .eq("email", email)
            .maybe_single()
            .execute()
        )

        # If user exists
        if response.data:
            return {
                "status": "success",
                "data": response.data
            }

        # If no user found
        return {
            "status": "error",
            "message": "User not found"
        }

    except Exception as e:
        # Any Supabase or query failure
        return {
            "status": "error",
            "message": f"Database error: {str(e)}"
        }
