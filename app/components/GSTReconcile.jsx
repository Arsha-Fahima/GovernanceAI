"use client";

import { useState, useRef, useCallback } from "react";

const INR = (n) =>
  "₹" + Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 });

export default function GSTReconcilePage() {
  const [file2b, setFile2b] = useState(null);
  const [fileLog, setFileLog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const ready = file2b && fileLog;

  const handleRun = async () => {
    if (!ready || loading) return;

    setLoading(true);
    setError(null);

    try {
      const form = new FormData();
      form.append("gstr2b", file2b);
      form.append("purchase_register", fileLog);

      const res = await fetch("http://localhost:8000/gst-reconcile/", {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        throw new Error("Server error. Check backend.");
      }

      const data = await res.json();

      if (data.status !== "success") {
        throw new Error(data.message || "Reconciliation failed");
      }

      setResult(data.report);
    } catch (err) {
      setError(err.message || "Something went wrong.");
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
    <div className='min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto px-6 pb-24 pt-10'>
        <h1 className='text-3xl font-bold mb-6'>
          GSTR-2B vs Purchase Register Reconciliation
        </h1>

        <div className='bg-white border p-6 rounded-xl mb-6'>
          <input
            type='file'
            accept='.xlsx,.xls'
            onChange={(e) => setFile2b(e.target.files[0])}
            className='mb-4'
          />

          <input
            type='file'
            accept='.xlsx,.xls'
            onChange={(e) => setFileLog(e.target.files[0])}
            className='mb-4'
          />

          {error && (
            <div className='text-red-600 font-semibold mb-3'>{error}</div>
          )}

          <button
            onClick={handleRun}
            disabled={!ready || loading}
            className='px-6 py-2 bg-blue-600 text-white rounded'
          >
            {loading ? "Reconciling..." : "Run Reconciliation"}
          </button>

          <button onClick={reset} className='ml-4 px-6 py-2 border rounded'>
            Clear
          </button>
        </div>

        {result && (
          <div>
            <h2 className='text-xl font-bold mb-3'>
              Match Rate: {result.stats.match_pct}% ({result.stats.total}{" "}
              invoices)
            </h2>

            <div className='grid grid-cols-2 gap-4 mb-6'>
              <div>Matched: {result.stats.matched}</div>
              <div>Mismatch: {result.stats.mismatch}</div>
              <div>Missing in 2B: {result.stats.missing_2b}</div>
              <div>Extra in 2B: {result.stats.extra_2b}</div>
            </div>

            <div className='mb-6'>
              <div>ITC Books: {INR(result.stats.itc_books)}</div>
              <div>ITC 2B: {INR(result.stats.itc_2b)}</div>
              <div>Difference: {INR(result.stats.itc_diff)}</div>
            </div>

            {/* MISSING */}
            {result.missing_2b.length > 0 && (
              <>
                <h3 className='font-bold text-red-600 mb-2'>Missing in 2B</h3>
                {result.missing_2b.map((r, i) => (
                  <div key={i}>
                    {r.gstin} — {r.invoice} — {INR(r.itc_books)}
                  </div>
                ))}
              </>
            )}

            {/* MISMATCH */}
            {result.mismatch.length > 0 && (
              <>
                <h3 className='font-bold text-amber-600 mt-6 mb-2'>
                  Amount Mismatch
                </h3>
                {result.mismatch.map((r, i) => (
                  <div key={i}>
                    {r.gstin} — {r.invoice} — Diff: {INR(r.diff)}
                  </div>
                ))}
              </>
            )}

            {/* EXTRA */}
            {result.extra_2b.length > 0 && (
              <>
                <h3 className='font-bold text-blue-600 mt-6 mb-2'>
                  Extra in 2B
                </h3>
                {result.extra_2b.map((r, i) => (
                  <div key={i}>
                    {r.gstin} — {r.invoice} — {INR(r.itc_2b)}
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
