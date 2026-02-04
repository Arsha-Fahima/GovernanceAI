# import http.client
# import json
# from datetime import date
# import calendar
# from app.config import RAPIDAPI_KEY

# # ================= CONFIG ================= #

# HOST = "gst-return-status.p.rapidapi.com"

# MONTH_MAP = {
#     "January": 1, "February": 2, "March": 3,
#     "April": 4, "May": 5, "June": 6,
#     "July": 7, "August": 8, "September": 9,
#     "October": 10, "November": 11, "December": 12
# }

# MONTH_NAME = {v: k for k, v in MONTH_MAP.items()}

# # ================= API FETCH ================= #

# def fetch_gst_data(gstin: str):
#     conn = http.client.HTTPSConnection(HOST)
#     headers = {
#         "x-rapidapi-key": RAPIDAPI_KEY,
#         "x-rapidapi-host": HOST
#     }
#     conn.request("GET", f"/free/gstin/{gstin}", headers=headers)
#     res = conn.getresponse()

#     if res.status != 200:
#         raise Exception("GST API failed")

#     return json.loads(res.read().decode())

# # ================= EXTRACTION ================= #

# def extract_gst_details(api_response: dict):
#     data = api_response["data"]

#     gstr1_returns = []
#     gstr3b_returns = []

#     for r in data.get("returns", []):
#         item = {
#             "fy": r["fy"],
#             "taxp": r["taxp"],
#             "dof": r["dof"]
#         }

#         if r["rtntype"] == "GSTR1":
#             gstr1_returns.append(item)

#         elif r["rtntype"] == "GSTR3B":
#             gstr3b_returns.append(item)

#     return {
#         "lgnm": data.get("lgnm"),
#         "sts": data.get("sts"),
#         "gstin": data.get("gstin"),
#         "rgdt": data.get("rgdt"),
#         "meta": data.get("meta", {}),
#         "fillingFreq": data.get("fillingFreq", {}),
#         "gstr1_returns": gstr1_returns,
#         "gstr3b_returns": gstr3b_returns
#     }


# # ---------- helpers ---------- #

# def parse_meta_period(value):
#     # "November 2025-2026"
#     month, fy = value.split(" ")
#     m = MONTH_MAP[month]
#     fy_start = int(fy.split("-")[0])
#     year = fy_start if m >= 4 else fy_start + 1
#     return year, m


# def get_expected_period():
#     today = date.today()
#     y, m = today.year, today.month - 1
#     if m == 0:
#         m = 12
#         y -= 1
#     return y, m


# # ---------- monthly logic ---------- #

# def pending_months(last_year, last_month):
#     exp_year, exp_month = get_expected_period()
#     pending = []

#     y, m = last_year, last_month + 1
#     if m > 12:
#         m = 1
#         y += 1

#     while (y < exp_year) or (y == exp_year and m <= exp_month):
#         pending.append((y, m))
#         m += 1
#         if m > 12:
#             m = 1
#             y += 1

#     return pending


# # ---------- quarterly logic ---------- #

# def pending_quarters(last_year, last_month):
#     exp_year, exp_month = get_expected_period()
#     pending = []

#     # quarter end months
#     q_ends = [3, 6, 9, 12]

#     next_q = next((q for q in q_ends if q > last_month), None)
#     if not next_q:
#         next_q = 3
#         last_year += 1

#     y, m = last_year, next_q

#     while (y < exp_year) or (y == exp_year and m <= exp_month):
#         pending.append((y, m))  # store quarter-end month
#         m += 3
#         if m > 12:
#             m = 3
#             y += 1

#     return pending


# # ---------- due date ---------- #

# def due_date(year, month, return_type, frequency):
#     if return_type == "GSTR1":
#         day = 11 if frequency == "M" else 13
#     else:  # GSTR3B
#         day = 20

#     # due in next month
#     if month == 12:
#         return date(year + 1, 1, day)
#     return date(year, month + 1, day)

# # ---------- formatter ---------- #

# def format_months(months):
#     return ", ".join(f"{MONTH_NAME[m]} {y}" for y, m in months)

# # ---------- PENDING CALCULATION ---------- #

# def calculate_gstr1_pending(meta_key, frequency):
#     """
#     Returns compliance payload info for GSTR-1
#     """
#     if not meta_key:
#         return {
#             "pending_months": [],
#             "pending_count": 0,
#             "due_date": None,
#             "status": "UNKNOWN"
#         }

#     last_year, last_month = parse_meta_period(meta_key)

#     if frequency == "M":
#         pendings = pending_months(last_year, last_month)
#     else:
#         pendings = pending_quarters(last_year, last_month)

#     if not pendings:
#         return {
#             "pending_months": [],
#             "pending_count": 0,
#             "due_date": None,
#             "status": "FILED"
#         }

#     # Due date logic for GSTR-1
#     due = due_date(*pendings[-1], "GSTR1", frequency)

#     return {
#         "pending_months": format_months(pendings),
#         "pending_count": len(pendings),
#         "due_date": str(due),
#         "status": "PENDING"
#     }


# def calculate_gstr3b_pending(meta_key, frequency):
#     """
#     Returns compliance payload info for GSTR-3B
#     """
#     if not meta_key:
#         return {
#             "pending_months": [],
#             "pending_count": 0,
#             "due_date": None,
#             "status": "UNKNOWN"
#         }

#     last_year, last_month = parse_meta_period(meta_key)

#     # Both M and Q use same due date logic
#     pendings = pending_months(last_year, last_month) if frequency == "M" else pending_quarters(last_year, last_month)

#     if not pendings:
#         return {
#             "pending_months": [],
#             "pending_count": 0,
#             "due_date": None,
#             "status": "FILED"
#         }

#     # Due date is always 20 for GSTR-3B
#     due = due_date(*pendings[-1], "GSTR3B", frequency)

#     return {
#         "pending_months": format_months(pendings),
#         "pending_count": len(pendings),
#         "due_date": str(due),
#         "status": "PENDING"
#     }


# # ---------- COMPLIANCE PAYLOAD ---------- #

# def build_compliance_db_payload(gst_details):
#     meta = gst_details.get("meta", {})
#     filling_freq = gst_details.get("fillingFreq", {})

#     return {
#         "gstin": gst_details["gstin"],
#         "legalname": gst_details["lgnm"],
#         "latestgstr1": meta.get("latestgtsr1"),
#         "latestgstr3b": meta.get("latestgtsr3b"),
#         "compcategory": "GST",

#         # JSONB column — FULL RETURN HISTORY
#         "gtsr1": {
#             "frequency": filling_freq.get("gstr1", "M"),
#             "due_day": 11 if filling_freq.get("gstr1") == "M" else 13,
#             "returns": gst_details["gstr1_returns"]
#         },

#         # JSONB column — FULL RETURN HISTORY
#         "gtsr3b": {
#             "frequency": filling_freq.get("gstr3b", "M"),
#             "due_day": 20,
#             "returns": gst_details["gstr3b_returns"]
#         }
#     }

# def main_pending_calculater(gst_details):
#     filling_freq = gst_details.get("fillingFreq", {})
#     meta = gst_details.get("meta", {})

#     gstr1_freq = filling_freq.get("gstr1", "M")
#     gstr3b_freq = filling_freq.get("gstr3b", "M")

#     gstr1_data = calculate_gstr1_pending(meta.get("latestgtsr1"), gstr1_freq)
#     gstr3b_data = calculate_gstr3b_pending(meta.get("latestgtsr3b"), gstr3b_freq)

#     return {
#         "legalname": gst_details["lgnm"],
#         "gstin": gst_details["gstin"],

#         "latestgstr1": meta.get("latestgtsr1"),
#         "latestgstr3b": meta.get("latestgtsr3b"),

#         "compcategory": "GST",

#         "gtsr1": {
#             "frequency": gstr1_freq,
#             "return_type": "GSTR1",
#             **gstr1_data
#         },

#         "gtsr3b": {
#             "frequency": gstr3b_freq,
#             "return_type": "GSTR3B",
#             **gstr3b_data
#         }
#     }

# def extract_derived_update_payload(pending_result):
#     return {
#         "gstr1_due_date": pending_result["gtsr1"]["due_date"],
#         "gstr1_pending_count": pending_result["gtsr1"]["pending_count"],
#         "gstr3b_due_date": pending_result["gtsr3b"]["due_date"],
#         "gstr3b_pending_count": pending_result["gtsr3b"]["pending_count"],
#     }



# def print_main_pending_calculator(payload):
#     print("\n================ GST COMPLIANCE REPORT ================\n")
#     print(f"Legal Name : {payload['legalname']}")
#     print(f"GSTIN      : {payload['gstin']}")
#     print(f"Category   : {payload['compcategory']}\n")

#     # ----- GTSR-1 -----
#     g1 = payload['gtsr1']
#     print(" GTSR-1 ")
#     print("--------------------------------")
#     print(f"Frequency           : {g1['frequency']}")
#     print(f"Return Type         : {g1['return_type']}")
#     print(f"Latest Filed Period : {payload['latestgstr1']}")
#     print(f"Pending Months      : {g1['pending_months'] or 'None'}")
#     print(f"Pending Count       : {g1['pending_count']}")
#     print(f"Next Due Date       : {g1['due_date'] or 'N/A'}")
#     print(f"Status              : {g1['status']}\n")

#     # ----- GTSR-3B -----
#     g3 = payload['gtsr3b']
#     print(" GTSR-3B ")
#     print("--------------------------------")
#     print(f"Frequency           : {g3['frequency']}")
#     print(f"Return Type         : {g3['return_type']}")
#     print(f"Latest Filed Period : {payload['latestgstr3b']}")
#     print(f"Pending Months      : {g3['pending_months'] or 'None'}")
#     print(f"Pending Count       : {g3['pending_count']}")
#     print(f"Next Due Date       : {g3['due_date'] or 'N/A'}")
#     print(f"Status              : {g3['status']}\n")

#     print("======================================================\n")

# if __name__ == "__main__":
#     gstin = input("Enter GSTIN: ")
#     api_response = fetch_gst_data(gstin)
#     print(api_response)
#     gst_details = extract_gst_details(api_response)
#     print(gst_details)

import http.client
import json
from datetime import date
from app.config import RAPIDAPI_KEY

HOST = "gst-return-status.p.rapidapi.com"

MONTH_MAP = {
    "January": 1, "February": 2, "March": 3,
    "April": 4, "May": 5, "June": 6,
    "July": 7, "August": 8, "September": 9,
    "October": 10, "November": 11, "December": 12
}
MONTH_NAME = {v: k for k, v in MONTH_MAP.items()}


# ================= API FETCH =================
def fetch_gst_data(gstin: str):
    conn = http.client.HTTPSConnection(HOST)
    headers = {
        "x-rapidapi-key": RAPIDAPI_KEY,
        "x-rapidapi-host": HOST
    }
    conn.request("GET", f"/free/gstin/{gstin}", headers=headers)
    res = conn.getresponse()

    if res.status != 200:
        conn.close()
        raise Exception("GST API failed")

    data = json.loads(res.read().decode())
    conn.close()
    return data


# ================= DATA EXTRACTION =================
def extract_gst_details(api_response: dict):
    data = api_response["data"]

    gstr1_returns, gstr3b_returns = [], []

    for r in data.get("returns", []):
        item = {"fy": r["fy"], "taxp": r["taxp"], "dof": r["dof"]}

        if r["rtntype"] == "GSTR1":
            gstr1_returns.append(item)
        elif r["rtntype"] == "GSTR3B":
            gstr3b_returns.append(item)

    return {
        "lgnm": data.get("lgnm"),
        "gstin": data.get("gstin"),
        "compcategory": data.get("compCategory"),
        "sts": data.get("sts"),
        "TradeName":data.get("tradeName"),
        "pincode":data.get("pincode"),
        "pan":data.get("pan"),
        "mandatedeInvoice":data.get("mandatedeInvoice"),
        "einvoiceStatus":data.get("einvoiceStatus"),
        "ctb":data.get("ctb"),
        "rgdt": data.get("rgdt"),
        "ctj": data.get("ctj"),
        "stj": data.get("stj"),
        "adr": data.get("adr"),
        "meta": data.get("meta", {}),
        "nba":data.get("nba", {}),
        "fillingFreq": data.get("fillingFreq", {}),
        "gstr1_returns": gstr1_returns,
        "gstr3b_returns": gstr3b_returns
    }


# ================= FREQUENCY LOGIC =================
def get_fy_quarter_key(year, month):
    fy_start = year if month >= 4 else year - 1
    if month in [4,5,6]: q = "Q1"
    elif month in [7,8,9]: q = "Q2"
    elif month in [10,11,12]: q = "Q3"
    else: q = "Q4"
    return f"{fy_start}_{q}"


def get_latest_frequency(last_year, last_month, filling_freq):
    key = get_fy_quarter_key(last_year, last_month)
    return filling_freq.get(key, "M")


def get_filing_pattern(filling_freq: dict):
    values = set(filling_freq.values())
    if len(values) == 1:
        return "Monthly Only" if "M" in values else "Quarterly Only"
    return f"Switched Filling Pattern: {dict(filling_freq)}"
# ================= CURRENT FREQUENCY LOGIC =================
def get_current_filing_frequency(meta, filling_freq):
    latest_period = meta.get("latestgtsr1") or meta.get("latestgtsr3b")
    if not latest_period:
        return "Unknown"

    year, month = parse_meta_period(latest_period)
    key = get_fy_quarter_key(year, month)

    freq = filling_freq.get(key, "M")
    return "Monthly" if freq == "M" else "Quarterly"

# ================= DATE HELPERS =================
def parse_meta_period(value):
    month, fy = value.split(" ")
    m = MONTH_MAP[month]
    fy_start = int(fy.split("-")[0])
    year = fy_start if m >= 4 else fy_start + 1
    return year, m


def get_expected_period():
    today = date.today()
    y, m = today.year, today.month - 1
    if m == 0:
        m = 12
        y -= 1
    return y, m


def pending_months(last_year, last_month):
    exp_year, exp_month = get_expected_period()
    pending = []
    y, m = last_year, last_month + 1

    if m > 12:
        m = 1
        y += 1

    while (y < exp_year) or (y == exp_year and m <= exp_month):
        pending.append((y, m))
        m += 1
        if m > 12:
            m = 1
            y += 1

    return pending


def pending_quarters(last_year, last_month):
    exp_year, exp_month = get_expected_period()
    pending = []
    q_ends = [3, 6, 9, 12]

    next_q = next((q for q in q_ends if q > last_month), None)
    if not next_q:
        next_q = 3
        last_year += 1

    y, m = last_year, next_q

    while (y < exp_year) or (y == exp_year and m <= exp_month):
        pending.append((y, m))
        m += 3
        if m > 12:
            m = 3
            y += 1

    return pending


def due_date(year, month, return_type, frequency):
    if return_type == "GSTR1":
        day = 11 if frequency == "M" else 13
    else:
        day = 20

    # move to next month
    if month == 12:
        year += 1
        month = 1
    else:
        month += 1

    return date(year, month, day)


def format_months(months):
    return ", ".join(f"{MONTH_NAME[m]} {y}" for y, m in months)


# ================= PENDING CALCULATION =================
def calculate_gstr1_pending(meta_key, filling_freq):
    if not meta_key:
        return {"pending_months": [], "pending_count": 0, "due_date": None, "status": "UNKNOWN"}

    last_year, last_month = parse_meta_period(meta_key)
    filing_type = get_latest_frequency(last_year, last_month, filling_freq)

    periods = pending_months(last_year, last_month)

    if filing_type == "Q":
        periods = [(y, m) for y, m in periods if m in [3,6,9,12]]

    if not periods:
        return {"pending_months": [], "pending_count": 0, "due_date": None, "status": "FILED"}

    due = due_date(*periods[-1], "GSTR1", filing_type)

    return {
        "pending_months": format_months(periods),
        "pending_count": len(periods),
        "due_date": str(due),
        "status": "PENDING"
    }


def calculate_gstr3b_pending(meta_key, filling_freq):
    if not meta_key:
        return {"pending_months": [], "pending_count": 0, "due_date": None, "status": "UNKNOWN"}

    last_year, last_month = parse_meta_period(meta_key)
    filing_type = get_latest_frequency(last_year, last_month, filling_freq)

    periods = pending_months(last_year, last_month)

    if filing_type == "Q":
        periods = [(y, m) for y, m in periods if m in [3,6,9,12]]

    if not periods:
        return {"pending_months": [], "pending_count": 0, "due_date": None, "status": "FILED"}

    due = due_date(*periods[-1], "GSTR3B", filing_type)

    return {
        "pending_months": format_months(periods),
        "pending_count": len(periods),
        "due_date": str(due),
        "status": "PENDING"
    }

# ---------- COMPLIANCE PAYLOAD ---------- #
def build_compliance_db_payload(gst_details):
    meta = gst_details.get("meta", {})
    filling_freq = gst_details.get("fillingFreq", {})

    gstr1_data = calculate_gstr1_pending(meta.get("latestgtsr1"), filling_freq)
    gstr3b_data = calculate_gstr3b_pending(meta.get("latestgtsr3b"), filling_freq)

    latest_period = meta.get("latestgtsr1") or meta.get("latestgtsr3b")

    if latest_period:
        last_year, last_month = parse_meta_period(latest_period)
        latest_freq = get_latest_frequency(last_year, last_month, filling_freq)
    else:
        latest_freq = "M"

    return {
        "gstin": gst_details["gstin"],
        "legalname": gst_details["lgnm"],
        "compcategory": gst_details.get("compCategory", "Unknown"),
        "latestgstr1": meta.get("latestgtsr1"),
        "latestgstr3b": meta.get("latestgtsr3b"),

        # JSONB — always safe
        "gstr1": {
        "frequency": latest_freq,
        "due_day": 11 if latest_freq == "M" else 13,
        "returns": gst_details.get("gstr1_returns", [])
        },
        "gstr3b": {
        "frequency": latest_freq,
        "due_day": 20,
        "returns": gst_details.get("gstr3b_returns", [])
        }
    }




def main_pending_calculator(gst_details):
    meta = gst_details.get("meta", {})
    filling_freq = gst_details.get("fillingFreq", {})

    gstr1_data = calculate_gstr1_pending(meta.get("latestgtsr1"), filling_freq)
    gstr3b_data = calculate_gstr3b_pending(meta.get("latestgtsr3b"), filling_freq)

    latest_period = meta.get("latestgtsr1") or meta.get("latestgtsr3b")

    if latest_period:
        y, m = parse_meta_period(latest_period)
        latest_freq = get_latest_frequency(y, m, filling_freq)
    else:
        latest_freq = "M"

    return {
        "gstr1": {
            "frequency": latest_freq,
            "due_date": gstr1_data["due_date"],
            "pending_count": gstr1_data["pending_count"]
        },
        "gstr3b": {
            "frequency": latest_freq,
            "due_date": gstr3b_data["due_date"],
            "pending_count": gstr3b_data["pending_count"]
        }
    }

def extract_derived_update_payload(pending_result):
    return {
        "gstr1_due_date": pending_result.get("gstr1", {}).get("due_date"),
        "gstr1_pending_count": pending_result.get("gstr1", {}).get("pending_count", 0),
        "gstr3b_due_date": pending_result.get("gstr3b", {}).get("due_date"),
        "gstr3b_pending_count": pending_result.get("gstr3b", {}).get("pending_count", 0),
    }

# ================= MAIN REPORT =================
def build_compliance_report(gst_details):
    meta = gst_details.get("meta", {})
    filling_freq = gst_details.get("fillingFreq", {})

    gstr1_data = calculate_gstr1_pending(meta.get("latestgtsr1"), filling_freq)
    gstr3b_data = calculate_gstr3b_pending(meta.get("latestgtsr3b"), filling_freq)
    current_freq = get_current_filing_frequency(meta, filling_freq)



    return {
        "legalname": gst_details["lgnm"],
        "gstin": gst_details["gstin"],
        "compcategory": gst_details.get("compCategory", "Unknown"),
        "tradeName": gst_details["TradeName"],
        "pincode": gst_details["pincode"],
        "pan": gst_details["pan"],
        "mandatedeInvoice": gst_details["mandatedeInvoice"],
        "einvoiceStatus": gst_details["einvoiceStatus"],
        "ctb": gst_details["ctb"],
        "nba": gst_details["nba"],
        "rgdt": gst_details["rgdt"],
        "ctj": gst_details["ctj"],
        "stj": gst_details["stj"],
        "adr": gst_details["adr"],
        "filing_pattern": get_filing_pattern(filling_freq),
        "current_filing_frequency": current_freq,
        "gstr1": {"return_type": "GSTR1", **gstr1_data},
        "gstr3b": {"return_type": "GSTR3B", **gstr3b_data}
    }


def print_report(payload):
    print("\n=========== GST COMPLIANCE REPORT ===========")
    print(f"Legal Name : {payload['legalname']}")
    print(f"Trade Name : {payload['tradeName']}")
    print(f"CompCategory   : {payload['compcategory']}")
    print(f"PAN        : {payload['pan']}")
    print(f"Pincode    : {payload['pincode']}")
    print(f"ManDatedeInvoice  : {payload['mandatedeInvoice']} ")
    print(f"EInvoice Status   : {payload['einvoiceStatus']} ")
    print(f"CTB        : {payload['ctb']}")
    print(f"RGDT      : {payload['rgdt']}")
    print(f"NBA        : {payload['nba']}")
    print(f"CTJ       : {payload['ctj']}")
    print(f"STJ       : {payload['stj']}")
    print(f"ADR       : {payload['adr']}")
    print(f"GSTIN      : {payload['gstin']}")
    print(f"Pattern    : {payload['filing_pattern']}\n")
    

    for key in ["gstr1", "gstr3b"]:
        r = payload[key]
        print(f"{r['return_type']}")
        print("-----------------------------------")
        print(f"Pending    : {r['pending_months'] or 'None'}")
        print(f"Count      : {r['pending_count']}")
        print(f"Current Filing Frequency : {payload['current_filing_frequency']}")
        print(f"Due Date   : {r['due_date'] or 'ALL Clear'}")
        print(f"Status     : {r['status']}\n")


# ================= RUN =================
if __name__ == "__main__":
    gstin = input("Enter GSTIN: ")
    api_data = fetch_gst_data(gstin)
    details = extract_gst_details(api_data)
    report = build_compliance_report(details)
    print_report(report)
