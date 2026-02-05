"use client";

import ReturnsTable from "./ReturnsTable";

export default function RecentGSTReturns({ data }) {
  // data may contain:
  // - data.returns: [{ fy, taxp, dof, rtntype }]
  // - data.gstr1 / data.gstr3b (objects) with `returns` arrays
  // Normalize into an array of items with { fy, period, date, rtntype }
  const extractReturns = (d) => {
    if (!d) return [];
    // If top-level `returns` (API raw response)
    if (Array.isArray(d.returns)) {
      return d.returns.map((r) => ({
        fy: r.fy || r.fy || "-",
        period: r.taxp || r.period || r.period || "-",
        date: r.dof || r.date || r.dof || "-",
        rtntype: r.rtntype || r.return_type || r.rtntype || "UNKNOWN",
      }));
    }

    // If data.gstr1 / data.gstr3b each have returns arrays
    const out = [];
    if (d.gstr1 && Array.isArray(d.gstr1.returns)) {
      d.gstr1.returns.forEach((r) =>
        out.push({
          fy: r.fy || "-",
          period: r.taxp || r.period || "-",
          date: r.dof || r.date || "-",
          rtntype: r.rtntype || "GSTR1",
        }),
      );
    }

    if (d.gstr3b && Array.isArray(d.gstr3b.returns)) {
      d.gstr3b.returns.forEach((r) =>
        out.push({
          fy: r.fy || "-",
          period: r.taxp || r.period || "-",
          date: r.dof || r.date || "-",
          rtntype: r.rtntype || "GSTR3B",
        }),
      );
    }

    return out;
  };

  const allReturns = extractReturns(data);

  // Group by rtntype
  const grouped = allReturns.reduce((acc, item) => {
    const key = (item.rtntype || "UNKNOWN").toUpperCase();
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  // Helper to map group to table rows with consistent field names
  const toTableRows = (arr) =>
    arr.map((r) => ({ fy: r.fy, period: r.period, date: r.date }));

  // Prefer explicit arrays returned by backend: returns_gstr1 and returns_gstr3b
  const normalizeBackendArray = (arr) => {
    if (!Array.isArray(arr)) return [];
    return arr.map((r) => ({
      fy: r.fy || "-",
      period: r.taxp || r.period || "-",
      date: r.dof || r.date || "-",
    }));
  };

  const backendGstr1 = normalizeBackendArray(data?.returns_gstr1);
  const backendGstr3b = normalizeBackendArray(data?.returns_gstr3b);

  const gstr3bRows = backendGstr3b.length
    ? backendGstr3b
    : grouped.GSTR3B
      ? toTableRows(grouped.GSTR3B)
      : [];
  const gstr1Rows = backendGstr1.length
    ? backendGstr1
    : grouped.GSTR1
      ? toTableRows(grouped.GSTR1)
      : [];
  const otherKeys = Object.keys(grouped).filter(
    (k) => !["GSTR1", "GSTR3B"].includes(k),
  );

  // Pending summaries (if provided by backend in data.gstr1 / data.gstr3b)
  const g1Summary = data?.gstr1 || null;
  const g3bSummary = data?.gstr3b || null;

  const formatMonths = (m) => {
    if (!m) return "-";
    if (Array.isArray(m)) return m.map(([y, mo]) => `${mo}-${y}`).join(", ");
    if (typeof m === "string") return m;
    return String(m);
  };

  const statusClass = (status) => {
    if (!status) return "bg-gray-100 text-gray-800";
    if (status.toUpperCase() === "FILED") return "bg-green-100 text-green-700";
    if (status.toUpperCase() === "PENDING") return "bg-red-100 text-red-700";
    if (status.toUpperCase() === "UNKNOWN")
      return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className='space-y-5'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-base font-semibold text-gray-900'>
            Recent GST Returns
          </h3>
          <p className='text-xs text-gray-500'>
            As on {data?.rgdt || "Latest"}
          </p>
        </div>
      </div>

      {/* Pending summary cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        <div className='bg-white p-3 rounded-lg shadow-sm flex items-start gap-3'>
          <div>
            <p className='text-xs text-gray-500'>GSTR‑1</p>
            <div className='mt-1 flex items-center gap-2'>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClass(g1Summary?.status)}`}
              >
                {g1Summary?.status || "Unknown"}
              </span>
              <div className='text-sm font-semibold text-gray-800'>
                {g1Summary?.pending_count ?? 0} pending
              </div>
            </div>
            <div className='mt-1 text-xs text-gray-500'>
              Months: {g1Summary?.pending_months || "-"}
            </div>
            <div className='mt-1 text-xs text-gray-500'>
              Due: {g1Summary?.due_date || "Unknown"}
            </div>
          </div>
        </div>

        <div className='bg-white p-3 rounded-lg shadow-sm flex items-start gap-3'>
          <div>
            <p className='text-xs text-gray-500'>GSTR‑3B</p>
            <div className='mt-1 flex items-center gap-2'>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClass(g3bSummary?.status)}`}
              >
                {g3bSummary?.status || "Unknown"}
              </span>
              <div className='text-sm font-semibold text-gray-800'>
                {g3bSummary?.pending_count ?? 0} pending
              </div>
            </div>
            <div className='mt-1 text-xs text-gray-500'>
              Months: {g3bSummary?.pending_months || "-"}
            </div>
            <div className='mt-1 text-xs text-gray-500'>
              Due: {g3bSummary?.due_date || "Unknown"}
            </div>
          </div>
        </div>
      </div>

      {/* Returns lists (compact table design) */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden'>
          <div className='bg-gray-50 px-4 py-3 border-b border-gray-100'>
            <h4 className='text-sm font-semibold text-gray-800'>
              GSTR‑3B Returns
            </h4>
          </div>
          <div className='max-h-64 overflow-y-auto'>
            {gstr3bRows.length > 0 ? (
              <div className='divide-y divide-gray-100'>
                {gstr3bRows.map((r, i) => (
                  <div
                    key={i}
                    className='flex justify-between items-center py-2 px-4 hover:bg-gray-50 text-sm'
                  >
                    <span className='font-medium text-gray-800'>
                      {r.period}
                    </span>
                    <span className='text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded'>
                      {r.date}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-sm text-gray-500 py-8 text-center'>
                No records available
              </div>
            )}
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden'>
          <div className='bg-gray-50 px-4 py-3 border-b border-gray-100'>
            <h4 className='text-sm font-semibold text-gray-800'>
              GSTR‑1 Returns
            </h4>
          </div>
          <div className='max-h-64 overflow-y-auto'>
            {gstr1Rows.length > 0 ? (
              <div className='divide-y divide-gray-100'>
                {gstr1Rows.map((r, i) => (
                  <div
                    key={i}
                    className='flex justify-between items-center py-2 px-4 hover:bg-gray-50 text-sm'
                  >
                    <span className='font-medium text-gray-800'>
                      {r.period}
                    </span>
                    <span className='text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded'>
                      {r.date}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-sm text-gray-500 py-8 text-center'>
                No records available
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Other return types */}
      {otherKeys.length > 0 && (
        <div className='bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden'>
          <div className='bg-gray-50 px-4 py-3 border-b border-gray-100'>
            <h4 className='text-sm font-semibold text-gray-800'>
              Other Returns
            </h4>
          </div>
          <div className='max-h-48 overflow-y-auto'>
            {otherKeys.map((key) => (
              <div
                key={key}
                className='border-b border-gray-100 last:border-b-0'
              >
                <div className='px-4 py-2 bg-gray-25'>
                  <span className='text-xs font-medium text-gray-600'>
                    {key}
                  </span>
                </div>
                <div className='divide-y divide-gray-100'>
                  {toTableRows(grouped[key]).map((r, i) => (
                    <div
                      key={i}
                      className='flex justify-between items-center py-2 px-4 hover:bg-gray-50 text-sm'
                    >
                      <span className='font-medium text-gray-800'>
                        {r.period}
                      </span>
                      <span className='text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded'>
                        {r.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* {allReturns.length === 0 && (
        <div className='text-sm text-gray-500'>
          No return records available from the backend.
        </div>
      )} */}
    </div>
  );
}
