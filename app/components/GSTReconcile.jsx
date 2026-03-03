"use client";

import { useState, useRef, useCallback } from "react";

// ─── HELPERS ────────────────────────────────────────────────────────────────
const INR = (n) =>
  "₹" + Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 });

// ─── MOCK DATA — swap with real API response ─────────────────────────────────
// When your backend is ready, delete this and use the real fetch in handleRun()
const MOCK_RESULT = {
  meta: "April 2024",
  stats: {
    total: 22, matched: 15, mismatch: 3, missing_2b: 2, extra_2b: 2,
    match_pct: 68.2,
    itc_books: 366870, itc_2b: 387630, itc_diff: -20760,
    itc_at_risk: 38340, mismatch_amt: 7500,
  },
  missing_2b: [
    { gstin: "27AADCJ4411W1Z6", supplier: "Janata Hardware",      invoice: "JH/APR/24/55",  date: "21-04-2024", itc_books: 6840  },
    { gstin: "34AABCN3300M1Z2", supplier: "Nandi Steel & Alloys", invoice: "NSA/APR/24/19", date: "20-04-2024", itc_books: 31500 },
  ],
  mismatch: [
    { gstin: "19AABCG2211D1Z6", invoice: "GPI-0419",      supplier: "GreenPack Industries", itc_books: 10800, itc_2b: 9900,  diff: 900  },
    { gstin: "22AABCE6677N1ZF", invoice: "EC/24/APR/554", supplier: "Electra Components",   itc_books: 36000, itc_2b: 33300, diff: 2700 },
    { gstin: "33AAEPM0860Q1ZJ", invoice: "PE-1101",       supplier: "Prime Electronics",    itc_books: 30000, itc_2b: 26100, diff: 3900 },
  ],
  extra_2b: [
    { gstin: "20AABCR2255Y1Z9", supplier: "Regal Auto Parts",        invoice: "RAP-APR-2024",  date: "23-04-2024", itc_2b: 28800 },
    { gstin: "27AABCS1199P1ZV", supplier: "Sigma Chemicals Pvt Ltd", invoice: "SC/APR/24/887", date: "25-04-2024", itc_2b: 37800 },
  ],
  matched: [
    { gstin: "27AABCT1332L1ZS", supplier: "Tech Solutions Pvt Ltd",   invoice: "TS/2024/0401",   date: "01-04-2024", itc_books: 21600 },
    { gstin: "29AADCB2230M1Z3", supplier: "BuildMart India Pvt Ltd",  invoice: "BMI/INV/0421",   date: "03-04-2024", itc_books: 11250 },
    { gstin: "09AAACR5055K1Z5", supplier: "Royal Traders",            invoice: "RT-APR-889",     date: "05-04-2024", itc_books: 43200 },
    { gstin: "06AADCC1234A1Z1", supplier: "Capitol Freight Co",       invoice: "CF/24-25/221",   date: "07-04-2024", itc_books: 8640  },
    { gstin: "24AAFCT2394K1ZG", supplier: "Sunrise Supplies",         invoice: "SS/APR/772",     date: "11-04-2024", itc_books: 6480  },
    { gstin: "27AADCF1122B1Z8", supplier: "FastMove Logistics",       invoice: "FML/2024/047",   date: "14-04-2024", itc_books: 12960 },
    { gstin: "07AAACT5678P1Z2", supplier: "TechPrint Solutions",      invoice: "TPS/APR/88",     date: "17-04-2024", itc_books: 19800 },
    { gstin: "36AAHCF9900K1Z1", supplier: "Futura Office Supplies",   invoice: "FOS-2024-311",   date: "18-04-2024", itc_books: 5130  },
    { gstin: "27AAGCM3344R1ZT", supplier: "MetalWorks Corp",          invoice: "MW/APR/24/019",  date: "19-04-2024", itc_books: 57600 },
    { gstin: "32AADCP1111H1Z5", supplier: "Pooja Chemicals",          invoice: "PC/24/APR/441",  date: "22-04-2024", itc_books: 15300 },
    { gstin: "08AAACH4433Z1ZK", supplier: "Horizon Hotels & Resorts", invoice: "HHR/2024/0421",  date: "24-04-2024", itc_books: 7560  },
    { gstin: "29AAFCP3322M1ZB", supplier: "PaperPlus India",          invoice: "PPI/0424/061",   date: "26-04-2024", itc_books: 5580  },
    { gstin: "27AADCV5566T1ZA", supplier: "Vikram Paints",            invoice: "VP-APR24-199",   date: "28-04-2024", itc_books: 12150 },
    { gstin: "27AABCF8800L1Z3", supplier: "Flexo Polymers",           invoice: "FP/APR/24/028",  date: "30-04-2024", itc_books: 16560 },
    { gstin: "07AADCS9911V1Z7", supplier: "Saathi Distributors",      invoice: "SD/APR/2024/71", date: "30-04-2024", itc_books: 7920  },
  ],
};

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function DropBox({ label, sublabel, file, onFile }) {
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);

  const set = useCallback((f) => { if (f) onFile(f); }, [onFile]);

  return (
    <div
      onClick={() => ref.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => { e.preventDefault(); setDragging(false); set(e.dataTransfer.files[0]); }}
      className={`relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-200 p-8 flex flex-col items-center justify-center min-h-[160px] text-center
        ${file
          ? "border-[#1b69a1] bg-[#1b69a1]/5"
          : dragging
            ? "border-[#1b69a1] bg-[#1b69a1]/5"
            : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100/60"
        }`}
    >
      <input ref={ref} type="file" accept=".xlsx,.xls" className="hidden"
        onChange={(e) => set(e.target.files[0])} />

      {/* Icon box */}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all
        ${file ? "bg-[#1b69a1]" : "bg-white border border-slate-200"}`}>
        {file ? (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        )}
      </div>

      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{sublabel}</p>
      <p className={`text-base font-bold ${file ? "text-[#1b69a1]" : "text-slate-700"}`}>{label}</p>

      {file
        ? <p className="text-xs font-semibold text-slate-500 mt-1 max-w-[180px] truncate">{file.name}</p>
        : <p className="text-xs text-slate-400 mt-1">Drop file or click to browse</p>
      }

      {file && (
        <button
          onClick={(e) => { e.stopPropagation(); onFile(null); }}
          className="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wide px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200 transition-all"
        >
          Replace
        </button>
      )}
    </div>
  );
}

function SectionBlock({ id, title, badge, badgeColor, desc, count, defaultOpen, borderColor, headerBg, children }) {
  const [open, setOpen] = useState(defaultOpen);

  const colors = {
    red:   { border: "border-red-200",   hbg: "bg-red-50",   badge: "bg-red-100 text-red-600",   icon: "bg-red-100 text-red-600",   div: "border-red-100" },
    amber: { border: "border-amber-200", hbg: "bg-amber-50", badge: "bg-amber-100 text-amber-700", icon: "bg-amber-100 text-amber-700", div: "border-amber-100" },
    blue:  { border: "border-blue-200",  hbg: "bg-blue-50",  badge: "bg-blue-100 text-blue-700",  icon: "bg-blue-100 text-blue-700",  div: "border-blue-100" },
    green: { border: "border-green-200", hbg: "bg-green-50", badge: "bg-green-100 text-green-700", icon: "bg-green-100 text-green-700", div: "border-green-100" },
  };
  const c = colors[badgeColor] || colors.green;

  return (
    <div className={`rounded-2xl border bg-white overflow-hidden ${c.border}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-5 hover:bg-slate-50/60 transition-colors text-left`}
      >
        <div className="flex items-center gap-4">
          {/* count box */}
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 ${c.icon}`}>
            {count}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-sm font-black text-slate-900">{title}</span>
              <span className={`text-[9px] font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded-md ${c.badge}`}>{badge}</span>
            </div>
            <p className="text-xs font-medium text-slate-400">{desc}</p>
          </div>
        </div>
        <div className={`w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {open && (
        <div className={`border-t px-6 pb-6 pt-5 ${c.div}`}>
          {children}
        </div>
      )}
    </div>
  );
}

function InvTable({ cols, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            {cols.map((c) => (
              <th key={c.key} className="pb-3 pr-6 text-left text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 whitespace-nowrap border-b border-slate-100">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50/70 transition-colors">
              {cols.map((c) => (
                <td key={c.key} className={`py-3.5 pr-6 border-b border-slate-50 text-sm whitespace-nowrap
                  ${c.mono ? "font-mono text-xs text-slate-500" : "font-semibold text-slate-700"}`}>
                  {c.render ? c.render(row[c.key], row) : (row[c.key] ?? "—")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── MAIN PAGE COMPONENT ─────────────────────────────────────────────────────
export default function GSTReconcilePage() {
  const [file2b,  setFile2b]  = useState(null);
  const [fileLog, setFileLog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result,  setResult]  = useState(null);
  const [error,   setError]   = useState(null);

  const ready = file2b && fileLog;

  const handleRun = async () => {
    if (!ready || loading) return;
    setLoading(true);
    setError(null);

    try {
      // ── REAL API CALL (uncomment when backend is ready) ──────────────────
      // const form = new FormData();
      // form.append("gstr2b", file2b);
      // form.append("purchase_register", fileLog);
      // const res  = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/gst-reconcile/`, { method: "POST", body: form });
      // if (!res.ok) throw new Error(`Server error ${res.status}`);
      // const data = await res.json();
      // if (data.status !== "success") throw new Error(data.message || "Reconciliation failed");
      // setResult(data.report);
      // ────────────────────────────────────────────────────────────────────

      // MOCK — remove this when real API is connected
      await new Promise((r) => setTimeout(r, 1600));
      setResult(MOCK_RESULT);

    } catch (err) {
      setError(err.message || "Something went wrong. Check your file format.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setFile2b(null);
    setFileLog(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* subtle dot grid matching your existing pages */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(#1b69a1 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-24 pt-10">

        {/* ── PAGE TITLE ─────────────────────────────────────────────────── */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b69a1]/5 border border-[#1b69a1]/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1b69a1] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1b69a1]">ITC Reconciliation</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">GSTR-2B vs Your Books</h1>
          <p className="text-slate-500 font-medium text-base">
            Upload both files and run — get a full invoice-level reconciliation report below.
          </p>
        </div>

        {/* ── UPLOAD BOX ─────────────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 mb-6 shadow-sm">

          {/* files row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <DropBox
              label="GSTR-2B"
              sublabel="Govt. Auto-Draft"
              file={file2b}
              onFile={setFile2b}
            />
            <DropBox
              label="Purchase Register"
              sublabel="Your Internal Books"
              file={fileLog}
              onFile={setFileLog}
            />
          </div>

          {/* progress bars */}
          <div className="flex gap-2 mb-6">
            <div className="flex-1 h-1 rounded-full bg-slate-100 overflow-hidden">
              <div className={`h-full rounded-full bg-[#1b69a1] transition-all duration-500 ${file2b ? "w-full" : "w-0"}`} />
            </div>
            <div className="flex-1 h-1 rounded-full bg-slate-100 overflow-hidden">
              <div className={`h-full rounded-full bg-[#1b69a1] transition-all duration-500 ${fileLog ? "w-full" : "w-0"}`} />
            </div>
          </div>

          {/* error */}
          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-semibold">
              {error}
            </div>
          )}

          {/* run button */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleRun}
              disabled={!ready || loading}
              className={`flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-black text-sm transition-all duration-200
                ${ready && !loading
                  ? "bg-[#1b69a1] text-white hover:bg-[#155685] shadow-lg shadow-[#1b69a1]/20 cursor-pointer"
                  : "bg-slate-100 text-slate-300 cursor-not-allowed"
                }`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Reconciling...
                </>
              ) : (
                <>
                  Run Reconciliation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>

            {(file2b || fileLog) && !loading && (
              <button onClick={reset} className="text-sm font-semibold text-slate-400 hover:text-slate-700 transition-colors">
                Clear
              </button>
            )}
          </div>
        </div>

        {/* ── DASHBOARD ──────────────────────────────────────────────────── */}
        {result && (
          <div className="space-y-4">

            {/* dash header row */}
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-1">Reconciliation Report · {result.meta}</p>
                <p className="text-2xl font-black text-slate-900 tracking-tight">
                  {result.stats.match_pct}% match rate
                  <span className="text-base font-semibold text-slate-400 ml-2">across {result.stats.total} invoices</span>
                </p>
              </div>
              <button
                onClick={reset}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:border-[#1b69a1] hover:text-[#1b69a1] transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                New
              </button>
            </div>

            {/* ── STAT BOXES ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { val: result.stats.matched,    label: "Matched",       sub: `${result.stats.match_pct}% rate`,            cls: "border-green-200 bg-green-50",  vc: "text-green-700"  },
                { val: result.stats.mismatch,   label: "Mismatch",      sub: `${INR(result.stats.mismatch_amt)} diff`,      cls: "border-amber-200 bg-amber-50",  vc: "text-amber-700"  },
                { val: result.stats.missing_2b, label: "Missing in 2B", sub: `${INR(result.stats.itc_at_risk)} at risk`,    cls: "border-red-200 bg-red-50",      vc: "text-red-700"    },
                { val: result.stats.extra_2b,   label: "Extra in 2B",   sub: "Not in your books",                           cls: "border-blue-200 bg-blue-50",    vc: "text-blue-700"   },
              ].map((s) => (
                <div key={s.label} className={`rounded-2xl border p-5 ${s.cls}`}>
                  <p className={`text-3xl font-black leading-none mb-2 ${s.vc}`}>{s.val}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 mb-1">{s.label}</p>
                  <p className={`text-xs font-semibold ${s.vc} opacity-80`}>{s.sub}</p>
                </div>
              ))}
            </div>

            {/* ── ITC SUMMARY BOX ── */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 px-7 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 mb-2">ITC as per Books</p>
                <p className="text-xl font-black text-white">{INR(result.stats.itc_books)}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 mb-2">ITC as per GSTR-2B</p>
                <p className="text-xl font-black text-white">{INR(result.stats.itc_2b)}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 mb-2">Net Variance</p>
                <p className={`text-xl font-black ${Math.abs(result.stats.itc_diff) <= 1 ? "text-emerald-400" : "text-amber-400"}`}>
                  {INR(result.stats.itc_diff)}
                </p>
                <span className={`inline-block mt-1.5 text-[9px] font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded-md
                  ${Math.abs(result.stats.itc_diff) <= 1 ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {Math.abs(result.stats.itc_diff) <= 1 ? "Reconciled" : "Difference Exists"}
                </span>
              </div>
            </div>

            {/* ── WHAT TO DO BOX ── */}
            <div className="rounded-2xl border border-[#1b69a1]/15 bg-[#1b69a1]/5 px-7 py-6">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1b69a1] mb-4">What to do next</p>
              <div className="space-y-3">
                {[
                  result.stats.missing_2b > 0 && `Contact ${result.stats.missing_2b} supplier(s) to file their pending GSTR-1. ${INR(result.stats.itc_at_risk)} of ITC is blocked.`,
                  result.stats.mismatch > 0   && `Resolve ${result.stats.mismatch} invoice(s) with amount differences. Get correct invoice/credit note. Claim only the 2B amount.`,
                  result.stats.extra_2b > 0   && `Book ${result.stats.extra_2b} invoice(s) present in 2B but missing from your register. This ITC is claimable.`,
                ].filter(Boolean).map((txt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#1b69a1] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-sm font-semibold text-slate-700 leading-relaxed">{txt}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SECTION: MISSING IN 2B ── */}
            {result.missing_2b.length > 0 && (
              <SectionBlock
                title="Missing in GSTR-2B"
                badge="ITC at Risk"
                badgeColor="red"
                count={result.missing_2b.length}
                desc={`Supplier has NOT filed GSTR-1 · Total blocked: ${INR(result.stats.itc_at_risk)}`}
                defaultOpen={true}
              >
                <InvTable
                  rows={result.missing_2b}
                  cols={[
                    { key: "gstin",     label: "GSTIN",       mono: true },
                    { key: "supplier",  label: "Supplier" },
                    { key: "invoice",   label: "Invoice No",  mono: true },
                    { key: "date",      label: "Date" },
                    { key: "itc_books", label: "ITC at Risk",
                      render: (v) => <span className="font-black text-red-600">{INR(v)}</span> },
                  ]}
                />
              </SectionBlock>
            )}

            {/* ── SECTION: MISMATCH ── */}
            {result.mismatch.length > 0 && (
              <SectionBlock
                title="Amount Mismatch"
                badge="Verify Now"
                badgeColor="amber"
                count={result.mismatch.length}
                desc={`Invoice in both · amounts differ · Total discrepancy: ${INR(result.stats.mismatch_amt)}`}
                defaultOpen={true}
              >
                <InvTable
                  rows={result.mismatch}
                  cols={[
                    { key: "gstin",     label: "GSTIN",      mono: true },
                    { key: "invoice",   label: "Invoice No", mono: true },
                    { key: "supplier",  label: "Supplier" },
                    { key: "itc_books", label: "Books ITC",  render: (v) => INR(v) },
                    { key: "itc_2b",    label: "2B ITC",     render: (v) => INR(v) },
                    { key: "diff",      label: "Difference",
                      render: (v) => (
                        <span className={`font-black ${v > 0 ? "text-amber-600" : "text-blue-600"}`}>
                          {v > 0 ? "+" : ""}{INR(v)}
                        </span>
                      )},
                  ]}
                />
              </SectionBlock>
            )}

            {/* ── SECTION: EXTRA IN 2B ── */}
            {result.extra_2b.length > 0 && (
              <SectionBlock
                title="Extra in GSTR-2B"
                badge="Unclaimed ITC"
                badgeColor="blue"
                count={result.extra_2b.length}
                desc="In 2B but not in your books — verify & book to claim ITC"
                defaultOpen={false}
              >
                <InvTable
                  rows={result.extra_2b}
                  cols={[
                    { key: "gstin",    label: "GSTIN",      mono: true },
                    { key: "supplier", label: "Supplier" },
                    { key: "invoice",  label: "Invoice No", mono: true },
                    { key: "date",     label: "Date" },
                    { key: "itc_2b",   label: "ITC in 2B",
                      render: (v) => <span className="font-black text-blue-700">{INR(v)}</span> },
                  ]}
                />
              </SectionBlock>
            )}

            {/* ── SECTION: MATCHED ── */}
            {result.matched.length > 0 && (
              <SectionBlock
                title="Matched"
                badge="All Clear"
                badgeColor="green"
                count={result.matched.length}
                desc="Fully reconciled between GSTR-2B and books — no action needed"
                defaultOpen={false}
              >
                <InvTable
                  rows={result.matched}
                  cols={[
                    { key: "gstin",     label: "GSTIN",      mono: true },
                    { key: "supplier",  label: "Supplier" },
                    { key: "invoice",   label: "Invoice No", mono: true },
                    { key: "date",      label: "Date" },
                    { key: "itc_books", label: "ITC",
                      render: (v) => <span className="font-black text-green-700">{INR(v)}</span> },
                  ]}
                />
              </SectionBlock>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
