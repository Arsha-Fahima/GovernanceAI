"use client";

import { useState, useRef, useCallback } from "react";

// ─── UTILS ───────────────────────────────────────────────────────────────────
const INR = (n) =>
  "₹" + Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 });

// ─── DROP BOX ────────────────────────────────────────────────────────────────
function DropBox({ label, sublabel, file, onFile, icon }) {
  const [drag, setDrag] = useState(false);
  const ref = useRef(null);
  const pick = useCallback((f) => { if (f) onFile(f); }, [onFile]);

  return (
    <div
      onClick={() => ref.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => { e.preventDefault(); setDrag(false); pick(e.dataTransfer.files[0]); }}
      className={`relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-200
        min-h-[156px] flex flex-col items-center justify-center text-center px-6 py-8
        ${file  ? "border-[#1b69a1] bg-[#1b69a1]/5"
        : drag  ? "border-[#1b69a1] bg-[#1b69a1]/4 scale-[1.01]"
                : "border-slate-200 bg-slate-50 hover:border-slate-300"}`}
    >
      <input ref={ref} type="file" accept=".xlsx,.xls" className="hidden"
        onChange={(e) => pick(e.target.files[0])} />

      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all
        ${file ? "bg-[#1b69a1]" : "bg-white border border-slate-200"}`}>
        {file
          ? <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
            </svg>
          : <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d={icon}/>
            </svg>
        }
      </div>

      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{sublabel}</p>
      <p className={`text-sm font-bold ${file ? "text-[#1b69a1]" : "text-slate-700"}`}>{label}</p>

      {file
        ? <p className="text-xs font-semibold text-slate-500 mt-1 max-w-[180px] truncate">{file.name}</p>
        : <p className="text-xs text-slate-400 mt-1">Drop or click to browse</p>
      }

      {file && (
        <button
          onClick={(e) => { e.stopPropagation(); onFile(null); }}
          className="absolute top-3 right-3 text-[10px] font-black uppercase px-2 py-0.5 rounded-md
            bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200 transition-all"
        >
          Change
        </button>
      )}
    </div>
  );
}

// ─── COLLAPSIBLE SECTION ─────────────────────────────────────────────────────
const COLORS = {
  red:   { wrap:"border-red-200",   icon:"bg-red-100 text-red-700",   badge:"bg-red-100 text-red-700",   div:"border-red-100"   },
  amber: { wrap:"border-amber-200", icon:"bg-amber-100 text-amber-700", badge:"bg-amber-100 text-amber-700", div:"border-amber-100" },
  blue:  { wrap:"border-blue-200",  icon:"bg-blue-100 text-blue-700",  badge:"bg-blue-100 text-blue-700",  div:"border-blue-100"  },
  green: { wrap:"border-green-200", icon:"bg-green-100 text-green-700", badge:"bg-green-100 text-green-700", div:"border-green-100" },
};

function Section({ color, title, badge, desc, count, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const c = COLORS[color];
  return (
    <div className={`rounded-2xl border bg-white overflow-hidden ${c.wrap}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 hover:bg-slate-50/60 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </button>

      {open && (
        <div className={`border-t px-6 pb-6 pt-4 ${c.div}`}>
          {children}
        </div>
      )}
    </div>
  );
}

// ─── INVOICE TABLE ────────────────────────────────────────────────────────────
function InvTable({ cols, rows }) {
  if (!rows?.length) return <p className="text-sm text-slate-400 py-2">No records.</p>;
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
            <tr key={i} className="hover:bg-slate-50/70 transition-colors group">
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

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function GSTReconcile() {
  const [file2b,  setFile2b]  = useState(null);
  const [fileLog, setFileLog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result,  setResult]  = useState(null);
  const [error,   setError]   = useState(null);

  const ready = file2b && fileLog && !loading;

  // ── API CALL ──────────────────────────────────────────────────────────────
  const handleRun = async () => {
    if (!file2b || !fileLog) { setError("Please upload both files first."); return; }
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const form = new FormData();
      form.append("gstr2b",            file2b);
      form.append("purchase_register", fileLog);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/gst-reconcile/`,
        { method: "POST", body: form }
      );

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();

      if (data.status !== "success") throw new Error(data.message || "Reconciliation failed");

      setResult(data.report);

      // scroll to dashboard
      setTimeout(() => {
        document.getElementById("recon-dashboard")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);

    } catch (err) {
      setError(err.message || "Could not connect to backend. Check your API URL.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setFile2b(null); setFileLog(null); setResult(null); setError(null); };

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white">

      {/* dot bg — same as your existing pages */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(#1b69a1 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-24 pt-10">

        {/* ── PAGE HEADER ── */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b69a1]/5 border border-[#1b69a1]/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1b69a1] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1b69a1]">ITC Reconciliation</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">GSTR-2B vs Your Books</h1>
          <p className="text-slate-500 font-medium text-base max-w-xl">
            Upload both Excel files and run — get a full invoice-level breakdown below.
          </p>
        </div>

        {/* ── UPLOAD CARD ── */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 mb-5">

          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-6">
            Step 1 — Upload Files
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <DropBox
              label="GSTR-2B"
              sublabel="Govt. Auto-Draft"
              file={file2b}
              onFile={setFile2b}
              icon="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
            <DropBox
              label="Purchase Register"
              sublabel="Your Internal Books"
              file={fileLog}
              onFile={setFileLog}
              icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </div>

          {/* progress bars */}
          <div className="flex gap-2 mb-6">
            {[file2b, fileLog].map((f, i) => (
              <div key={i} className="flex-1 h-1 rounded-full bg-slate-100 overflow-hidden">
                <div className={`h-full rounded-full bg-[#1b69a1] transition-all duration-500 ${f ? "w-full" : "w-0"}`} />
              </div>
            ))}
          </div>

          {/* error */}
          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-semibold">
              ⚠ {error}
            </div>
          )}

          {/* run row */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleRun}
              disabled={!file2b || !fileLog || loading}
              className={`flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-black text-sm transition-all duration-200
                ${file2b && fileLog && !loading
                  ? "bg-[#1b69a1] text-white hover:bg-[#155685] shadow-lg shadow-[#1b69a1]/20 cursor-pointer active:scale-95"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </>
              )}
            </button>

            {(file2b || fileLog || result) && !loading && (
              <button onClick={reset} className="text-sm font-semibold text-slate-400 hover:text-slate-700 transition-colors">
                Clear
              </button>
            )}
          </div>

          <p className="mt-4 text-xs font-medium text-slate-400">
            Accepts .xlsx only · Matching key: GSTIN + Invoice No · ₹1 rounding tolerance applied
          </p>
        </div>

        {/* ── DASHBOARD ── */}
        {result && (
          <div id="recon-dashboard" className="space-y-3">

            {/* header row */}
            <div className="flex items-end justify-between py-2 flex-wrap gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-1">
                  Reconciliation Report · {result.meta}
                </p>
                <p className="text-2xl font-black text-slate-900 tracking-tight">
                  {result.stats.match_pct}% match rate
                  <span className="text-base font-semibold text-slate-400 ml-2">
                    across {result.stats.total} invoices
                  </span>
                </p>
              </div>
              <button
                onClick={reset}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:border-[#1b69a1] hover:text-[#1b69a1] transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                New
              </button>
            </div>

            {/* ── 4 STAT BOXES ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { val: result.stats.matched,    lbl: "Matched",        sub: `${result.stats.match_pct}% rate`,              cls: "border-green-200 bg-green-50",  vc: "text-green-700" },
                { val: result.stats.mismatch,   lbl: "Mismatch",       sub: `${INR(result.stats.mismatch_amt)} diff`,        cls: "border-amber-200 bg-amber-50",  vc: "text-amber-700" },
                { val: result.stats.missing_2b, lbl: "Missing in 2B",  sub: `${INR(result.stats.itc_at_risk)} at risk`,      cls: "border-red-200 bg-red-50",      vc: "text-red-700"   },
                { val: result.stats.extra_2b,   lbl: "Extra in 2B",    sub: "Not in your books",                             cls: "border-blue-200 bg-blue-50",    vc: "text-blue-700"  },
              ].map((s) => (
                <div key={s.lbl} className={`rounded-2xl border p-5 ${s.cls}`}>
                  <p className={`text-3xl font-black leading-none mb-2 ${s.vc}`}>{s.val}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 mb-1">{s.lbl}</p>
                  <p className={`text-xs font-semibold ${s.vc} opacity-75`}>{s.sub}</p>
                </div>
              ))}
            </div>

            {/* ── ITC DARK BAR ── */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 px-7 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { lbl: "ITC as per Books",   val: INR(result.stats.itc_books), cls: "text-white" },
                { lbl: "ITC as per GSTR-2B", val: INR(result.stats.itc_2b),    cls: "text-white" },
                {
                  lbl: "Net Variance",
                  val: INR(result.stats.itc_diff),
                  cls: Math.abs(result.stats.itc_diff) <= 1 ? "text-emerald-400" : "text-amber-400",
                  badge: Math.abs(result.stats.itc_diff) <= 1 ? "Reconciled" : "Difference Exists",
                  badgeCls: Math.abs(result.stats.itc_diff) <= 1
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-amber-500/20 text-amber-400",
                },
              ].map((item) => (
                <div key={item.lbl}>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 mb-2">{item.lbl}</p>
                  <p className={`text-xl font-black ${item.cls}`}>{item.val}</p>
                  {item.badge && (
                    <span className={`inline-block mt-2 text-[9px] font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded-md ${item.badgeCls}`}>
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* ── ACTION BOX ── */}
            {(result.stats.missing_2b > 0 || result.stats.mismatch > 0 || result.stats.extra_2b > 0) && (
              <div className="rounded-2xl border border-[#1b69a1]/15 bg-[#1b69a1]/5 px-7 py-6">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1b69a1] mb-4">What to do next</p>
                <div className="space-y-3">
                  {[
                    result.stats.missing_2b > 0 &&
                      `Contact ${result.stats.missing_2b} supplier(s) to file their pending GSTR-1. ${INR(result.stats.itc_at_risk)} of ITC is blocked.`,
                    result.stats.mismatch > 0 &&
                      `Resolve ${result.stats.mismatch} invoice(s) with amount differences. Claim only the 2B amount — not books amount.`,
                    result.stats.extra_2b > 0 &&
                      `Book ${result.stats.extra_2b} invoice(s) present in 2B but missing from your register. This is unclaimed ITC.`,
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
            )}

            {/* ── MISSING IN 2B ── */}
            {result.missing_2b?.length > 0 && (
              <Section color="red" title="Missing in GSTR-2B" badge="ITC at Risk"
                count={result.missing_2b.length} defaultOpen={true}
                desc={`Supplier has NOT filed GSTR-1 · Blocked: ${INR(result.stats.itc_at_risk)}`}>
                <InvTable rows={result.missing_2b} cols={[
                  { key:"gstin",     label:"GSTIN",       mono:true },
                  { key:"supplier",  label:"Supplier" },
                  { key:"invoice",   label:"Invoice No",  mono:true },
                  { key:"date",      label:"Date" },
                  { key:"itc_books", label:"ITC at Risk",
                    render:(v) => <span className="font-black text-red-600">{INR(v)}</span> },
                ]}/>
              </Section>
            )}

            {/* ── MISMATCH ── */}
            {result.mismatch?.length > 0 && (
              <Section color="amber" title="Amount Mismatch" badge="Verify Now"
                count={result.mismatch.length} defaultOpen={true}
                desc={`Invoice in both · amounts differ · Discrepancy: ${INR(result.stats.mismatch_amt)}`}>
                <InvTable rows={result.mismatch} cols={[
                  { key:"gstin",     label:"GSTIN",      mono:true },
                  { key:"invoice",   label:"Invoice No", mono:true },
                  { key:"supplier",  label:"Supplier" },
                  { key:"itc_books", label:"Books ITC",  render:(v) => INR(v) },
                  { key:"itc_2b",    label:"2B ITC",     render:(v) => INR(v) },
                  { key:"diff",      label:"Difference",
                    render:(v) => (
                      <span className={`font-black ${v > 0 ? "text-amber-600" : "text-blue-700"}`}>
                        {v > 0 ? "+" : ""}{INR(v)}
                      </span>
                    )},
                  { key:"remark",    label:"Remark",
                    render:(v) => <span className="text-slate-400 text-xs font-medium">{v}</span> },
                ]}/>
              </Section>
            )}

            {/* ── EXTRA IN 2B ── */}
            {result.extra_2b?.length > 0 && (
              <Section color="blue" title="Extra in GSTR-2B" badge="Unclaimed ITC"
                count={result.extra_2b.length} defaultOpen={false}
                desc="In 2B but not in your books — verify & book to claim ITC">
                <InvTable rows={result.extra_2b} cols={[
                  { key:"gstin",    label:"GSTIN",      mono:true },
                  { key:"supplier", label:"Supplier" },
                  { key:"invoice",  label:"Invoice No", mono:true },
                  { key:"date",     label:"Date" },
                  { key:"itc_2b",   label:"ITC in 2B",
                    render:(v) => <span className="font-black text-blue-700">{INR(v)}</span> },
                ]}/>
              </Section>
            )}

            {/* ── MATCHED ── */}
            {result.matched?.length > 0 && (
              <Section color="green" title="Matched" badge="All Clear"
                count={result.matched.length} defaultOpen={false}
                desc="Fully reconciled between GSTR-2B and books — no action needed">
                <InvTable rows={result.matched} cols={[
                  { key:"gstin",     label:"GSTIN",      mono:true },
                  { key:"supplier",  label:"Supplier" },
                  { key:"invoice",   label:"Invoice No", mono:true },
                  { key:"date",      label:"Date" },
                  { key:"itc_books", label:"ITC",
                    render:(v) => <span className="font-black text-green-700">{INR(v)}</span> },
                ]}/>
              </Section>
            )}

          </div>
        )}

      </div>
    </div>
  );
}








// "use client";

// import { useState } from "react";

// export default function GSTReconcile() {

//   const [file2b, setFile2b] = useState(null);
//   const [fileBooks, setFileBooks] = useState(null);

//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleRun = async () => {

//     if (!file2b || !fileBooks) {
//       setError("Please upload both files");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {

//       const formData = new FormData();

//       formData.append("gstr2b", file2b);
//       formData.append("purchase_register", fileBooks);

//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/gst-reconcile/`,
//         {
//           method: "POST",
//           body: formData
//         }
//       );

//       const data = await res.json();

//       if (data.status !== "success") {
//         throw new Error(data.message);
//       }

//       setResult(data.report);

//     } catch (err) {

//       setError(err.message);

//     } finally {

//       setLoading(false);

//     }

//   };

//   return (

//     <div className="max-w-6xl mx-auto p-10">

//       <h1 className="text-3xl font-bold mb-8">
//         GST ITC Reconciliation
//       </h1>

//       <div className="grid grid-cols-2 gap-6 mb-6">

//         <div className="border p-6 rounded-xl">

//           <p className="font-semibold mb-3">
//             Upload GSTR-2B
//           </p>

//           <input
//             type="file"
//             accept=".xlsx"
//             onChange={(e)=>setFile2b(e.target.files[0])}
//           />

//         </div>

//         <div className="border p-6 rounded-xl">

//           <p className="font-semibold mb-3">
//             Upload Purchase Register
//           </p>

//           <input
//             type="file"
//             accept=".xlsx"
//             onChange={(e)=>setFileBooks(e.target.files[0])}
//           />

//         </div>

//       </div>

//       <button
//         onClick={handleRun}
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg"
//       >

//         {loading ? "Running..." : "Run Reconciliation"}

//       </button>

//       {error && (
//         <p className="text-red-500 mt-4">{error}</p>
//       )}

//       {result && (

//         <div className="mt-10">

//           <h2 className="text-2xl font-bold mb-6">
//             Reconciliation Dashboard
//           </h2>

//           <div className="grid grid-cols-4 gap-4 mb-10">

//             <div className="p-4 border rounded-lg">
//               <p>Total</p>
//               <p className="text-xl font-bold">{result.stats.total}</p>
//             </div>

//             <div className="p-4 border rounded-lg">
//               <p>Matched</p>
//               <p className="text-xl font-bold">{result.stats.matched}</p>
//             </div>

//             <div className="p-4 border rounded-lg">
//               <p>Mismatch</p>
//               <p className="text-xl font-bold">{result.stats.mismatch}</p>
//             </div>

//             <div className="p-4 border rounded-lg">
//               <p>Missing in 2B</p>
//               <p className="text-xl font-bold">{result.stats.missing_2b}</p>
//             </div>

//           </div>

//           <pre className="bg-gray-100 p-6 rounded-xl overflow-x-auto">

// {JSON.stringify(result,null,2)}

//           </pre>

//         </div>

//       )}

//     </div>

//   );

// }















// // "use client";

// // import { useState, useRef, useCallback } from "react";

// // const INR = (n) =>
// //   "₹" + Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 });

// // export default function GSTReconcilePage() {
// //   const [file2b, setFile2b] = useState(null);
// //   const [fileLog, setFileLog] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [result, setResult] = useState(null);
// //   const [error, setError] = useState(null);

// //   const ready = file2b && fileLog;

// //   const handleRun = async () => {

// //   if (!ready || loading) return;

// //   setLoading(true);
// //   setError(null);

// //   try {

// //     const formData = new FormData();

// //     formData.append("gstr2b", file2b);
// //     formData.append("purchase_register", fileLog);

// //     const res = await fetch(
// //       `${process.env.NEXT_PUBLIC_API_BASE_URL}/gst_reconcile/`,
// //       {
// //         method: "POST",
// //         body: formData
// //       }
// //     );

// //     const data = await res.json();

// //     if (data.status !== "success") {
// //       throw new Error(data.message || "Reconciliation failed");
// //     }

// //     setResult(data.report);

// //   } catch (err) {

// //     setError(err.message);

// //   } finally {

// //     setLoading(false);

// //   }

// // };



// //   const reset = () => {
// //     setFile2b(null);
// //     setFileLog(null);
// //     setResult(null);
// //     setError(null);
// //   };

// //   return (
// //     <div className='min-h-screen bg-white'>
// //       <div className='max-w-4xl mx-auto px-6 pb-24 pt-10'>
// //         <h1 className='text-3xl font-bold mb-6'>
// //           GSTR-2B vs Purchase Register Reconciliation
// //         </h1>

// //         <div className='bg-white border p-6 rounded-xl mb-6'>
// //           <input
// //             type='file'
// //             accept='.xlsx,.xls'
// //             onChange={(e) => setFile2b(e.target.files[0])}
// //             className='mb-4'
// //           />

// //           <input
// //             type='file'
// //             accept='.xlsx,.xls'
// //             onChange={(e) => setFileLog(e.target.files[0])}
// //             className='mb-4'
// //           />

// //           {error && (
// //             <div className='text-red-600 font-semibold mb-3'>{error}</div>
// //           )}

// //           <button
// //             onClick={handleRun}
// //             disabled={!ready || loading}
// //             className='px-6 py-2 bg-blue-600 text-white rounded'
// //           >
// //             {loading ? "Reconciling..." : "Run Reconciliation"}
// //           </button>

// //           <button onClick={reset} className='ml-4 px-6 py-2 border rounded'>
// //             Clear
// //           </button>
// //         </div>

// //         {result && (
// //           <div>
// //             <h2 className='text-xl font-bold mb-3'>
// //               Match Rate: {result.stats.match_pct}% ({result.stats.total}{" "}
// //               invoices)
// //             </h2>

// //             <div className='grid grid-cols-2 gap-4 mb-6'>
// //               <div>Matched: {result.stats.matched}</div>
// //               <div>Mismatch: {result.stats.mismatch}</div>
// //               <div>Missing in 2B: {result.stats.missing_2b}</div>
// //               <div>Extra in 2B: {result.stats.extra_2b}</div>
// //             </div>

// //             <div className='mb-6'>
// //               <div>ITC Books: {INR(result.stats.itc_books)}</div>
// //               <div>ITC 2B: {INR(result.stats.itc_2b)}</div>
// //               <div>Difference: {INR(result.stats.itc_diff)}</div>
// //             </div>

// //             {/* MISSING */}
// //             {result.missing_2b.length > 0 && (
// //               <>
// //                 <h3 className='font-bold text-red-600 mb-2'>Missing in 2B</h3>
// //                 {result.missing_2b.map((r, i) => (
// //                   <div key={i}>
// //                     {r.gstin} — {r.invoice} — {INR(r.itc_books)}
// //                   </div>
// //                 ))}
// //               </>
// //             )}

// //             {/* MISMATCH */}
// //             {result.mismatch.length > 0 && (
// //               <>
// //                 <h3 className='font-bold text-amber-600 mt-6 mb-2'>
// //                   Amount Mismatch
// //                 </h3>
// //                 {result.mismatch.map((r, i) => (
// //                   <div key={i}>
// //                     {r.gstin} — {r.invoice} — Diff: {INR(r.diff)}
// //                   </div>
// //                 ))}
// //               </>
// //             )}

// //             {/* EXTRA */}
// //             {result.extra_2b.length > 0 && (
// //               <>
// //                 <h3 className='font-bold text-blue-600 mt-6 mb-2'>
// //                   Extra in 2B
// //                 </h3>
// //                 {result.extra_2b.map((r, i) => (
// //                   <div key={i}>
// //                     {r.gstin} — {r.invoice} — {INR(r.itc_2b)}
// //                   </div>
// //                 ))}
// //               </>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
