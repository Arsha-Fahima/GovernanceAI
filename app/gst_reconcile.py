"""
GST Reconciliation Backend
--------------------------
Usage:
    python gst_reconcile.py <gstr2b.xlsx> <purchase_register.xlsx>

Output:
    gst_recon_output.txt
"""

import sys
import pandas as pd
from datetime import datetime


# ─────────────────────────────────────────────
# 1. COLUMN NAME DETECTOR
# ─────────────────────────────────────────────

COLUMN_MAP = {
    "gstin":    ["gstin", "suppliergstin", "gstno", "gstnumber", "vendorgstin"],
    "supplier": ["tradename", "suppliername", "supplier", "vendorname", "party", "name"],
    "invoice":  ["invoiceno", "invno", "billno", "documentno", "docno", "invoicenumber"],
    "date":     ["invoicedate", "invdate", "billdate", "date", "docdate"],
    "taxable":  ["taxablevalue", "taxable", "taxableamount", "baseamount"],
    "igst":     ["igst", "igstamount", "igsttax", "integratedtax"],
    "cgst":     ["cgst", "cgstamount", "cgsttax", "centraltax"],
    "sgst":     ["sgst", "sgstamount", "sgsttax", "statetax", "utax"],
    "itc":      ["itcavailable", "itc", "totalitc", "itcclaimed", "taxamount"],
}

def clean(name):
    return (str(name).lower()
            .replace("\n","").replace(" ","").replace("_","")
            .replace(".","").replace("(₹)","").replace("(rs)","")
            .replace("(","").replace(")","").strip())

def find_column(df_columns, targets):
    cleaned = {clean(c): c for c in df_columns}
    for t in targets:
        tc = clean(t)
        if tc in cleaned:
            return cleaned[tc]
        for cc, orig in cleaned.items():
            if tc in cc:
                return orig
    return None

def detect_header_row(filepath):
    """
    Find the real header row — it's the one with the MOST non-null columns.
    Title blocks always have 1 merged cell. Data headers have many columns.
    """
    df_raw = pd.read_excel(filepath, sheet_name=0, header=None, nrows=15, dtype=str)
    best_row, best_count = 0, 0
    for i, row in df_raw.iterrows():
        count = row.dropna().count()
        if count > best_count:
            best_count = count
            best_row = i
    return best_row

def normalize(df, source_label):
    records = []
    col_map = {field: find_column(df.columns, targets) for field, targets in COLUMN_MAP.items()}

    for _, row in df.iterrows():
        def get(field):
            col = col_map.get(field)
            if not col or col not in df.columns or pd.isna(row[col]):
                return ""
            return str(row[col]).strip()

        def get_num(field):
            col = col_map.get(field)
            if not col or col not in df.columns or pd.isna(row[col]):
                return 0.0
            try:
                return float(str(row[col]).replace(",","").replace("₹","").replace("Rs.","").strip())
            except:
                return 0.0

        gstin   = get("gstin").upper()
        invoice = get("invoice").upper().replace(" ","").replace("-","").replace("/","")

        import re
        if not re.match(r"^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]$", gstin) and not invoice:
            continue
        # Skip rows where GSTIN doesn't look like a real GSTIN (15-char alphanumeric)
        import re
        gstin_valid = bool(re.match(r"^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]$", gstin))
        if not gstin_valid and not invoice:
            continue
        if not gstin_valid:
            continue   # drop legend/note rows that leaked in

        igst    = get_num("igst")
        cgst    = get_num("cgst")
        sgst    = get_num("sgst")
        itc_raw = get_num("itc")
        itc     = itc_raw if itc_raw > 0 else (igst + cgst + sgst)

        records.append({
            "gstin":    gstin,
            "supplier": get("supplier"),
            "invoice":  invoice,
            "date":     get("date"),
            "taxable":  get_num("taxable"),
            "igst":     igst,
            "cgst":     cgst,
            "sgst":     sgst,
            "itc":      itc,
            "_source":  source_label,
        })

    return records


# ─────────────────────────────────────────────
# 2. KEY  →  GSTIN + Invoice Number
# ─────────────────────────────────────────────

def make_key(r):
    return f"{r['gstin']}||{r['invoice']}"


# ─────────────────────────────────────────────
# 3. RECONCILIATION ENGINE
# ─────────────────────────────────────────────

def reconcile(list_2b, list_log):
    map_2b  = {make_key(r): r for r in list_2b}
    map_log = {make_key(r): r for r in list_log}

    all_keys = set(map_2b.keys()) | set(map_log.keys())
    results  = []

    for key in all_keys:
        r2b  = map_2b.get(key)
        rlog = map_log.get(key)

        if r2b and rlog:
            diff = rlog["itc"] - r2b["itc"]
            if abs(diff) <= 1.0:
                status = "MATCHED"
                remark = "Fully reconciled"
            elif diff > 0:
                status = "MISMATCH"
                remark = f"Books higher by Rs.{abs(diff):,.2f}"
            else:
                status = "MISMATCH"
                remark = f"2B higher by Rs.{abs(diff):,.2f}"
            base = rlog

        elif rlog and not r2b:
            diff   = -rlog["itc"]
            status = "MISSING_IN_2B"
            remark = "Supplier has NOT filed GSTR-1 — ITC blocked"
            base   = rlog

        else:
            diff   = r2b["itc"]
            status = "EXTRA_IN_2B"
            remark = "In 2B but not in books — verify and book"
            base   = r2b

        results.append({
            **base,
            "itc_2b":    r2b["itc"]  if r2b  else 0.0,
            "itc_books": rlog["itc"] if rlog else 0.0,
            "diff":      diff,
            "status":    status,
            "remark":    remark,
        })

    order = {"MISSING_IN_2B": 0, "MISMATCH": 1, "EXTRA_IN_2B": 2, "MATCHED": 3}
    results.sort(key=lambda r: order.get(r["status"], 9))
    return results


# ─────────────────────────────────────────────
# 4. STATS
# ─────────────────────────────────────────────

def compute_stats(results, list_2b, list_log):
    matched    = [r for r in results if r["status"] == "MATCHED"]
    mismatch   = [r for r in results if r["status"] == "MISMATCH"]
    missing_2b = [r for r in results if r["status"] == "MISSING_IN_2B"]
    extra_2b   = [r for r in results if r["status"] == "EXTRA_IN_2B"]
    itc_books   = sum(r["itc"] for r in list_log)
    itc_2b      = sum(r["itc"] for r in list_2b)
    itc_at_risk = sum(r["itc_books"] for r in missing_2b)
    mismatch_amt= sum(abs(r["diff"]) for r in mismatch)
    return {
        "total":         len(results),
        "matched":       len(matched),
        "mismatch":      len(mismatch),
        "missing_2b":    len(missing_2b),
        "extra_2b":      len(extra_2b),
        "itc_books":     itc_books,
        "itc_2b":        itc_2b,
        "itc_diff":      itc_books - itc_2b,
        "itc_at_risk":   itc_at_risk,
        "mismatch_amt":  mismatch_amt,
        "match_pct":     round(len(matched)/len(results)*100, 1) if results else 0,
    }


# ─────────────────────────────────────────────
# 5. REPORT WRITER
# ─────────────────────────────────────────────

LINE  = "─" * 92
DLINE = "═" * 92

def f(n):
    return f"Rs. {n:>13,.2f}"

def col(text, width, align="left"):
    text = str(text) if text else "—"
    if len(text) > width:
        text = text[:width-1] + "…"
    return text.ljust(width) if align == "left" else text.rjust(width)

def write_report(results, stats, file_2b, file_log, output_path):
    lines = []
    add = lambda *args: lines.append("".join(str(a) for a in args))
    now = datetime.now().strftime("%d-%b-%Y  %H:%M:%S")

    # HEADER
    add(DLINE)
    add()
    add("       GST RECONCILIATION REPORT")
    add(f"       Generated  :  {now}")
    add(f"       GSTR-2B    :  {file_2b}")
    add(f"       Books      :  {file_log}")
    add()
    add(DLINE)

    # SUMMARY
    add()
    add("  SUMMARY")
    add(LINE)
    add(f"  Total Invoices Analysed  :  {stats['total']}")
    add(f"  Matched                  :  {stats['matched']}   ({stats['match_pct']}% match rate)")
    add(f"  Amount Mismatch          :  {stats['mismatch']}")
    add(f"  Missing in GSTR-2B       :  {stats['missing_2b']}   (supplier did not file GSTR-1)")
    add(f"  Extra in GSTR-2B         :  {stats['extra_2b']}   (not in your books)")
    add(LINE)
    add(f"  ITC as per Books         :  {f(stats['itc_books'])}")
    add(f"  ITC as per GSTR-2B       :  {f(stats['itc_2b'])}")
    net = "FULLY RECONCILED" if abs(stats['itc_diff']) <= 1 else "DIFFERENCE EXISTS"
    add(f"  Net ITC Variance         :  {f(stats['itc_diff'])}   [{net}]")
    add(f"  ITC at Risk              :  {f(stats['itc_at_risk'])}   (supplier GSTR-1 not filed)")
    add(f"  Total Mismatch Amount    :  {f(stats['mismatch_amt'])}")
    add(LINE)

    # SECTION 1 — MISSING IN 2B
    missing = [r for r in results if r["status"] == "MISSING_IN_2B"]
    if missing:
        add()
        add(f"  SECTION 1 — MISSING IN GSTR-2B   [{len(missing)} invoice(s)]")
        add(f"  Total ITC at Risk : {f(sum(r['itc_books'] for r in missing))}")
        add()
        add("  These invoices are in your books but the supplier has NOT filed GSTR-1.")
        add("  The government has no record of this ITC. You cannot claim it until supplier files.")
        add("  RISK: If you already claimed this ITC, it will be reversed with 18% interest.")
        add()
        add(LINE)
        add("  " + col("#",4) + col("GSTIN",20) + col("Supplier",28) + col("Invoice",20) + col("Date",13) + col("ITC at Risk",14,"right"))
        add("  " + "─"*90)
        for i, r in enumerate(missing, 1):
            add("  " + col(i,4) + col(r["gstin"],20) + col(r["supplier"],28) + col(r["invoice"],20) + col(r["date"],13) + col(f"Rs.{r['itc_books']:>12,.2f}",14,"right"))
        add(LINE)

    # SECTION 2 — MISMATCH
    mismatch = [r for r in results if r["status"] == "MISMATCH"]
    if mismatch:
        add()
        add(f"  SECTION 2 — AMOUNT MISMATCH   [{len(mismatch)} invoice(s)]")
        add(f"  Total Discrepancy : {f(stats['mismatch_amt'])}")
        add()
        add("  Invoice found in both GSTR-2B and books, but ITC values differ.")
        add("  You can only claim the 2B amount — not your books amount.")
        add()
        add(LINE)
        add("  " + col("#",4) + col("GSTIN",20) + col("Invoice",20) + col("Books ITC",15,"right") + col("2B ITC",15,"right") + col("Difference",14,"right"))
        add("  " + "─"*90)
        for i, r in enumerate(mismatch, 1):
            sign = "+" if r["diff"] > 0 else ""
            add("  " + col(i,4) + col(r["gstin"],20) + col(r["invoice"],20) + col(f"Rs.{r['itc_books']:>11,.2f}",15,"right") + col(f"Rs.{r['itc_2b']:>11,.2f}",15,"right") + col(f"{sign}Rs.{r['diff']:>8,.2f}",14,"right"))
            add("       Remark : " + r["remark"])
            add()
        add(LINE)

    # SECTION 3 — EXTRA IN 2B
    extra = [r for r in results if r["status"] == "EXTRA_IN_2B"]
    if extra:
        add()
        add(f"  SECTION 3 — EXTRA IN GSTR-2B   [{len(extra)} invoice(s)]")
        add()
        add("  These are in GSTR-2B but NOT recorded in your purchase register.")
        add("  Verify if you received goods/services. If yes, book it — this is ITC you can claim.")
        add()
        add(LINE)
        add("  " + col("#",4) + col("GSTIN",20) + col("Supplier",28) + col("Invoice",20) + col("Date",13) + col("ITC in 2B",14,"right"))
        add("  " + "─"*90)
        for i, r in enumerate(extra, 1):
            add("  " + col(i,4) + col(r["gstin"],20) + col(r["supplier"],28) + col(r["invoice"],20) + col(r["date"],13) + col(f"Rs.{r['itc_2b']:>11,.2f}",14,"right"))
        add(LINE)

    # SECTION 4 — MATCHED
    matched = [r for r in results if r["status"] == "MATCHED"]
    if matched:
        add()
        add(f"  SECTION 4 — MATCHED   [{len(matched)} invoice(s)]")
        add()
        add("  All values reconciled between GSTR-2B and books. No action needed.")
        add()
        add(LINE)
        add("  " + col("#",4) + col("GSTIN",20) + col("Supplier",28) + col("Invoice",20) + col("Date",13) + col("ITC",12,"right"))
        add("  " + "─"*90)
        for i, r in enumerate(matched, 1):
            add("  " + col(i,4) + col(r["gstin"],20) + col(r["supplier"],28) + col(r["invoice"],20) + col(r["date"],13) + col(f"Rs.{r['itc_books']:>9,.2f}",12,"right"))
        add(LINE)

    # ACTION ITEMS
    add()
    add("  WHAT TO DO NEXT")
    add(LINE)
    n = 1
    if missing:
        add(f"  {n}. URGENT — Contact {len(missing)} supplier(s) to file their pending GSTR-1.")
        add(f"     ITC of {f(stats['itc_at_risk'])} is blocked. Delayed filing = ITC reversal + 18% interest.")
        n += 1
    if mismatch:
        add(f"  {n}. Resolve {len(mismatch)} invoice(s) with amount differences.")
        add(f"     Get correct invoice/credit note from supplier. Claim only the 2B amount.")
        n += 1
    if extra:
        add(f"  {n}. Book {len(extra)} invoice(s) that are in 2B but missing from your register.")
        add(f"     This ITC is claimable — don't leave it unclaimed.")
        n += 1
    if not missing and not mismatch and not extra:
        add("  Nothing to do. All invoices fully reconciled. Proceed to file your GSTR-3B.")
    add(LINE)

    # FOOTER
    add()
    add(f"  GST Reconciliation Engine  |  {now}")
    add(DLINE)
    add()

    report = "\n".join(lines)
    with open(output_path, "w", encoding="utf-8") as fh:
        fh.write(report)
    return report


def run_reconciliation(file_2b_path, file_log_path):

    h2b  = detect_header_row(file_2b_path)
    hlog = detect_header_row(file_log_path)

    df_2b  = pd.read_excel(file_2b_path,  sheet_name=0, header=h2b,  dtype=str).dropna(how="all")
    df_log = pd.read_excel(file_log_path, sheet_name=0, header=hlog, dtype=str).dropna(how="all")

    list_2b  = normalize(df_2b,  "GSTR-2B")
    list_log = normalize(df_log, "Books")

    results = reconcile(list_2b, list_log)
    stats   = compute_stats(results, list_2b, list_log)

    missing   = [r for r in results if r["status"] == "MISSING_IN_2B"]
    mismatch  = [r for r in results if r["status"] == "MISMATCH"]
    extra     = [r for r in results if r["status"] == "EXTRA_IN_2B"]
    matched   = [r for r in results if r["status"] == "MATCHED"]

    return {
        "meta": "Current Run",
        "stats": stats,
        "missing_2b": missing,
        "mismatch": mismatch,
        "extra_2b": extra,
        "matched": matched,
    }
    

# ─────────────────────────────────────────────
# 6. MAIN
# ─────────────────────────────────────────────

def main():
    file_2b  = sys.argv[1] if len(sys.argv) >= 2 else "GSTR2B_Apr2024.xlsx"
    file_log = sys.argv[2] if len(sys.argv) >= 3 else "PurchaseRegister_Apr2024.xlsx"
    output_path = "gst_recon_output.txt"

    print(f"\n  Reading GSTR-2B     : {file_2b}")
    print(f"  Reading Books       : {file_log}")

    try:
        h2b  = detect_header_row(file_2b)
        hlog = detect_header_row(file_log)
        print(f"  Header row (2B)     : {h2b}")
        print(f"  Header row (Books)  : {hlog}")
        df_2b  = pd.read_excel(file_2b,  sheet_name=0, header=h2b,  dtype=str).dropna(how="all")
        df_log = pd.read_excel(file_log, sheet_name=0, header=hlog, dtype=str).dropna(how="all")
    except FileNotFoundError as e:
        print(f"\n  ERROR: {e}")
        print("  Usage: python gst_reconcile.py gstr2b.xlsx purchase_register.xlsx")
        sys.exit(1)

    list_2b  = normalize(df_2b,  "GSTR-2B")
    list_log = normalize(df_log, "Books")

    print(f"\n  Invoices found (2B)   : {len(list_2b)}")
    print(f"  Invoices found (Books): {len(list_log)}")

    results = reconcile(list_2b, list_log)
    stats   = compute_stats(results, list_2b, list_log)

    print(f"\n  Results:")
    print(f"    Matched        : {stats['matched']}  ({stats['match_pct']}%)")
    print(f"    Mismatch       : {stats['mismatch']}")
    print(f"    Missing in 2B  : {stats['missing_2b']}")
    print(f"    Extra in 2B    : {stats['extra_2b']}")
    print(f"\n  ITC in Books    : Rs. {stats['itc_books']:,.2f}")
    print(f"  ITC in 2B       : Rs. {stats['itc_2b']:,.2f}")
    print(f"  ITC at Risk     : Rs. {stats['itc_at_risk']:,.2f}")

    write_report(results, stats, file_2b, file_log, output_path)

    print(f"\n  Output saved → {output_path}\n")


if __name__ == "__main__":
    main()
