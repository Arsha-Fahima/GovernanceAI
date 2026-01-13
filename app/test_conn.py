from supabase_client import supabase
try:
    print("Testing connection...")
    res = supabase.table("users").select("*").limit(1).execute()
    print("Connection success:", res)
except Exception as e:
    print("Connection failed:", e)
