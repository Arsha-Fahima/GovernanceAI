from supabase_client import supabase

def upsert_compliance(payload):
    return supabase.table("compliance").upsert(
        payload,
        on_conflict="gstin"
    ).execute()

def delete_compliance_by_gstin(gstin):
    return (
        supabase
        .table("compliance")
        .delete()
        .eq("gstin", gstin)
        .execute()
    )
