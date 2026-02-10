import email
from app.supabase_client import supabase



# ================= UPSERT COMPLIANCE =================
# def upsert_compliance(payload,email):
#     """
#     Insert or update compliance record
#     Unique key: email
#     """

#     if "email" not in payload:
#         raise ValueError("Payload must contain 'email' field.")
    
#     payload["email"]= email

#     return supabase.table("compliance").upsert(
#         payload,
#         on_conflict="email"
#     ).execute()

def upsert_compliance(payload, email):
    payload["email"] = email  # inject email here

    return supabase.table("compliance").upsert(
        payload,
        on_conflict="email"
    ).execute()



# ================= UPDATE DERIVED FIELDS =================
def update_compliance_derived_fields(email,update_payload):

    return supabase.table("compliance") \
        .update(update_payload) \
        .eq("email", email) \
        .execute()