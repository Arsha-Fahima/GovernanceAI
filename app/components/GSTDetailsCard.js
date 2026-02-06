export default function GSTDetailsCard({ data, dbRecord }) {
  // Prefer dbRecord when available, fallback to gst API data
  const rows = [
    ["Legal Name", dbRecord?.legal_name || data?.legalname || "Unknown"],
    ["Trade Name", dbRecord?.trade_name || data?.tradeName || "Unknown"],
    ["GSTIN", dbRecord?.gstin || data?.gstin || "Unknown"],
    ["PAN", dbRecord?.pan || data?.pan || "Unknown"],
    ["Registration Date", dbRecord?.rgdt || data?.rgdt || "Unknown"],
    ["Status", dbRecord?.sts || data?.sts || "Unknown"],
    ["Place of Business", dbRecord?.adr || data?.adr || "Unknown"],
    ["Central Jurisdiction", dbRecord?.ctj || data?.ctj || "Unknown"],
    ["State Jurisdiction", dbRecord?.stj || data?.stj || "Unknown"],
    ["Pincode", dbRecord?.pincode || data?.pincode || "Unknown"],
    ["Tax Type", dbRecord?.dty || data?.dty || "Unknown"],
    [
      "E-Invoice mandatory?",
      dbRecord?.mandatedeInvoice != null
        ? dbRecord.mandatedeInvoice
          ? "Yes"
          : "No"
        : data?.mandatedeInvoice != null
          ? data.mandatedeInvoice
            ? "Yes"
            : "No"
          : "Unknown",
    ],
    ["Entity Type", dbRecord?.ctb || data?.ctb || "Unknown"],
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <header className="mb-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-0">
          Business Information
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Complete GST registration details - concise view
        </p>
      </header>

      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="bg-gray-50 rounded-md border border-gray-100 p-3 flex flex-col"
          >
            <dt className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
              {label}
            </dt>
            <dd className="text-sm  text-gray-900 mt-1 break-words">
              {label === "GSTIN" || label === "PAN" ? (
                <span className="font-mono text-sm font-semibold text-gray-900">
                  {value}
                </span>
              ) : (
                <span className="text-sm font- text-gray-900">{value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
