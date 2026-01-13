import http.client
import json
from datetime import date
import calendar
from config import RAPIDAPI_KEY

# ================= CONFIG ================= #

HOST = "gst-return-status.p.rapidapi.com"

MONTH_MAP = {
    "January": 1, "February": 2, "March": 3,
    "April": 4, "May": 5, "June": 6,
    "July": 7, "August": 8, "September": 9,
    "October": 10, "November": 11, "December": 12
}

MONTH_NAME = {v: k for k, v in MONTH_MAP.items()}

# ================= API FETCH ================= #

def fetch_gst_data(gstin: str):
    conn = http.client.HTTPSConnection(HOST)
    headers = {
        "x-rapidapi-key": RAPIDAPI_KEY,
        "x-rapidapi-host": HOST
    }
    conn.request("GET", f"/free/gstin/{gstin}", headers=headers)
    res = conn.getresponse()

    if res.status != 200:
        raise Exception("GST API failed")

    return json.loads(res.read().decode())

# ================= EXTRACTION ================= #

def extract_gst_details(api_response: dict):
    data = api_response["data"]

    gstr1_returns = []
    gstr3b_returns = []

    for r in data.get("returns", []):
        item = {
            "fy": r["fy"],
            "taxp": r["taxp"],
            "dof": r["dof"]
        }

        if r["rtntype"] == "GSTR1":
            gstr1_returns.append(item)

        elif r["rtntype"] == "GSTR3B":
            gstr3b_returns.append(item)

    return {
        "lgnm": data.get("lgnm"),
        "tradeNam": data.get("tradeNam"),
        "sts": data.get("sts"),
        "gstin": data.get("gstin"),
        "rgdt": data.get("rgdt"),
        "meta": data.get("meta", {}),
        "fillingFreq": data.get("fillingFreq", {}),
        "gstr1_returns": gstr1_returns,
        "gstr3b_returns": gstr3b_returns
    }


# ---------- helpers ---------- #

def parse_meta_period(value):
    # "November 2025-2026"
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


# ---------- monthly logic ---------- #

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


# ---------- quarterly logic ---------- #

def pending_quarters(last_year, last_month):
    exp_year, exp_month = get_expected_period()
    pending = []

    # quarter end months
    q_ends = [3, 6, 9, 12]

    next_q = next((q for q in q_ends if q > last_month), None)
    if not next_q:
        next_q = 3
        last_year += 1

    y, m = last_year, next_q

    while (y < exp_year) or (y == exp_year and m <= exp_month):
        pending.append((y, m))  # store quarter-end month
        m += 3
        if m > 12:
            m = 3
            y += 1

    return pending


# ---------- due date ---------- #

def due_date(year, month, return_type, frequency):
    if return_type == "GSTR1":
        day = 11 if frequency == "M" else 13
    else:  # GSTR3B
        day = 20

    # due in next month
    if month == 12:
        return date(year + 1, 1, day)
    return date(year, month + 1, day)

# ---------- formatter ---------- #

def format_months(months):
    return ", ".join(f"{MONTH_NAME[m]} {y}" for y, m in months)

# ---------- PENDING CALCULATION ---------- #

def calculate_gstr1_pending(meta_key, frequency):
    """
    Returns compliance payload info for GSTR-1
    """
    if not meta_key:
        return {
            "pending_months": [],
            "pending_count": 0,
            "due_date": None,
            "status": "UNKNOWN"
        }

    last_year, last_month = parse_meta_period(meta_key)

    if frequency == "M":
        pendings = pending_months(last_year, last_month)
    else:
        pendings = pending_quarters(last_year, last_month)

    if not pendings:
        return {
            "pending_months": [],
            "pending_count": 0,
            "due_date": None,
            "status": "FILED"
        }

    # Due date logic for GSTR-1
    due = due_date(*pendings[-1], "GSTR1", frequency)

    return {
        "pending_months": format_months(pendings),
        "pending_count": len(pendings),
        "due_date": str(due),
        "status": "PENDING"
    }


def calculate_gstr3b_pending(meta_key, frequency):
    """
    Returns compliance payload info for GSTR-3B
    """
    if not meta_key:
        return {
            "pending_months": [],
            "pending_count": 0,
            "due_date": None,
            "status": "UNKNOWN"
        }

    last_year, last_month = parse_meta_period(meta_key)

    # Both M and Q use same due date logic
    pendings = pending_months(last_year, last_month) if frequency == "M" else pending_quarters(last_year, last_month)

    if not pendings:
        return {
            "pending_months": [],
            "pending_count": 0,
            "due_date": None,
            "status": "FILED"
        }

    # Due date is always 20 for GSTR-3B
    due = due_date(*pendings[-1], "GSTR3B", frequency)

    return {
        "pending_months": format_months(pendings),
        "pending_count": len(pendings),
        "due_date": str(due),
        "status": "PENDING"
    }


# ---------- COMPLIANCE PAYLOAD ---------- #

def build_compliance_db_payload(gst_details):
    meta = gst_details.get("meta", {})
    filling_freq = gst_details.get("fillingFreq", {})

    return {
        "gstin": gst_details["gstin"],
        "legalname": gst_details["lgnm"],
        "latestgstr1": meta.get("latestgtsr1"),
        "latestgstr3b": meta.get("latestgtsr3b"),
        "compcategory": "GST",

        # JSONB column — FULL RETURN HISTORY
        "gtsr1": {
            "frequency": filling_freq.get("gstr1", "M"),
            "due_day": 11 if filling_freq.get("gstr1") == "M" else 13,
            "returns": gst_details["gstr1_returns"]
        },

        # JSONB column — FULL RETURN HISTORY
        "gtsr3b": {
            "frequency": filling_freq.get("gstr3b", "M"),
            "due_day": 20,
            "returns": gst_details["gstr3b_returns"]
        }
    }

def main_pending_calculater(gst_details):
    filling_freq = gst_details.get("fillingFreq", {})
    meta = gst_details.get("meta", {})

    gstr1_freq = filling_freq.get("gstr1", "M")
    gstr3b_freq = filling_freq.get("gstr3b", "M")

    gstr1_data = calculate_gstr1_pending(meta.get("latestgtsr1"), gstr1_freq)
    gstr3b_data = calculate_gstr3b_pending(meta.get("latestgtsr3b"), gstr3b_freq)

    return {
        "legalname": gst_details["lgnm"],
        "gstin": gst_details["gstin"],

        "latestgstr1": meta.get("latestgtsr1"),
        "latestgstr3b": meta.get("latestgtsr3b"),

        "compcategory": "GST",

        "gtsr1": {
            "frequency": gstr1_freq,
            "return_type": "GSTR1",
            **gstr1_data
        },

        "gtsr3b": {
            "frequency": gstr3b_freq,
            "return_type": "GSTR3B",
            **gstr3b_data
        }
    }

def print_main_pending_calculator(payload):
    print("\n================ GST COMPLIANCE REPORT ================\n")
    print(f"Legal Name : {payload['legalname']}")
    print(f"GSTIN      : {payload['gstin']}")
    print(f"Category   : {payload['compcategory']}\n")

    # ----- GTSR-1 -----
    g1 = payload['gtsr1']
    print(" GTSR-1 ")
    print("--------------------------------")
    print(f"Frequency           : {g1['frequency']}")
    print(f"Return Type         : {g1['return_type']}")
    print(f"Latest Filed Period : {payload['latestgstr1']}")
    print(f"Pending Months      : {g1['pending_months'] or 'None'}")
    print(f"Pending Count       : {g1['pending_count']}")
    print(f"Next Due Date       : {g1['due_date'] or 'N/A'}")
    print(f"Status              : {g1['status']}\n")

    # ----- GTSR-3B -----
    g3 = payload['gtsr3b']
    print(" GTSR-3B ")
    print("--------------------------------")
    print(f"Frequency           : {g3['frequency']}")
    print(f"Return Type         : {g3['return_type']}")
    print(f"Latest Filed Period : {payload['latestgstr3b']}")
    print(f"Pending Months      : {g3['pending_months'] or 'None'}")
    print(f"Pending Count       : {g3['pending_count']}")
    print(f"Next Due Date       : {g3['due_date'] or 'N/A'}")
    print(f"Status              : {g3['status']}\n")

    print("======================================================\n")
