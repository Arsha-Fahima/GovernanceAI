"use client";

export default function ComplianceClassification({ data }) {
  const categoryRaw = data?.compcategory || "";
  const cat = String(categoryRaw).toLowerCase();

  const classificationMap = {
    green: {
      className:
        "inline-block px-6 py-2 rounded-xl bg-green-400 text-black font-semibold",
      desc: "This GSTIN has filed last 4 GSTR1 on or before due date.",
    },
    yellow: {
      className:
        "inline-block px-6 py-2 rounded-xl bg-yellow-400 text-black font-semibold",
      desc: "This GSTIN has filed GSTR1, but after the due date.",
    },
    red: {
      className:
        "inline-block px-6 py-2 rounded-xl bg-red-400 text-white font-semibold",
      desc: "This GSTIN has not yet filed last 2 GSTR1.",
    },
    orange: {
      className:
        "inline-block px-6 py-2 rounded-xl bg-orange-400 text-black font-semibold",
      desc: "This GSTIN is either deactivated/cancelled or is registered as Composition.",
    },
    black: {
      className:
        "inline-block px-6 py-2 rounded-xl bg-black text-white font-semibold",
      desc: "We cannot determine classification at the moment. This is most likely due to lack of data availability.",
    },
  };

  const classification = classificationMap[cat] || {
    className:
      "inline-block px-6 py-2 rounded-xl bg-gray-200 text-gray-800 font-semibold",
    desc: "No classification data available.",
  };

  return (
    <div className='bg-[#faf9f6] rounded-2xl shadow-sm p-6 space-y-6'>
      {/* Header */}
      <div>
        <h3 className='text-base font-semibold text-gray-800 mb-2'>
          Compliance Classification
        </h3>

        <span className={classification.className}>
          {categoryRaw ? String(categoryRaw) : "N/A"}
        </span>

        <p className='text-sm text-gray-600 mt-3 max-w-2xl'>
          {classification.desc}
        </p>

        {(() => {
          const raw = data?.rgdt;
          let rgdtStr = null;
          if (raw) {
            const parts = String(raw).split("/");
            if (parts.length === 3) {
              const d = new Date(
                parseInt(parts[2], 10),
                parseInt(parts[1], 10) - 1,
                parseInt(parts[0], 10),
              );
              rgdtStr = d.toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
            } else {
              rgdtStr = String(raw);
            }
          }

          return rgdtStr ? (
            <p className='text-sm text-gray-600 mt-2'>
              <strong>Registration Date:</strong>{" "}
              <span className='font-medium'>{rgdtStr}</span>
            </p>
          ) : null;
        })()}
      </div>

      {/* Two column layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Left column */}
        <div className='space-y-6'>
          <div>
            <h4 className='font-semibold text-gray-800 mb-2'>HSN / SAC</h4>
            <ul className='text-sm text-gray-700 space-y-1'>
              {(() => {
                const raw = data?.hsn || [];
                let arr = [];
                if (!raw) arr = [];
                else if (Array.isArray(raw)) arr = raw;
                else if (typeof raw === "string") {
                  try {
                    arr = JSON.parse(raw);
                  } catch (e) {
                    arr = raw.split(/[,\s]+/).filter(Boolean);
                  }
                } else if (typeof raw === "object") {
                  arr = Object.values(raw).flat
                    ? Object.values(raw).flat()
                    : Object.values(raw);
                }

                if (arr.length === 0)
                  return (
                    <li className='text-sm text-gray-500'>
                      No HSN data available
                    </li>
                  );

                return arr.map((h) => <li key={h}>{h}</li>);
              })()}
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-gray-800 mb-2'>
              Other GSTIN of the PAN
            </h4>
            <p className='text-sm text-gray-700'>
              No other GSTIN found for this PAN
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className='space-y-6'>
          <div>
            <h4 className='font-semibold text-gray-800 mb-2'>
              Return Periodicity
            </h4>
            <ul className='text-sm text-gray-700 space-y-1'>
              {(() => {
                const ff =
                  data?.filingFreq ||
                  data?.filingfreq ||
                  data?.fillingFreq ||
                  {};
                const entries = Object.entries(ff || {});
                if (entries.length === 0)
                  return (
                    <li className='text-sm text-gray-500'>
                      No filing frequency data
                    </li>
                  );

                const mapVal = (v) =>
                  v === "M" ? "Monthly" : v === "Q" ? "Quarterly" : String(v);

                return entries.map(([k, v]) => (
                  <li key={k}>
                    {k.replace("_", " ")} — {mapVal(v)}
                  </li>
                ));
              })()}
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-gray-800 mb-2'>
              Business Activities
            </h4>
            <ul className='list-disc list-inside text-sm text-gray-700 space-y-1'>
              {(() => {
                const raw = data?.nba || data?.activities || [];
                let items = [];
                if (!raw) items = [];
                else if (Array.isArray(raw)) items = raw;
                else if (typeof raw === "string") {
                  try {
                    items = JSON.parse(raw);
                  } catch (e) {
                    items = raw
                      .split(/[,;]+/)
                      .map((s) => s.trim())
                      .filter(Boolean);
                  }
                } else if (typeof raw === "object") {
                  items = Object.values(raw).flat
                    ? Object.values(raw).flat()
                    : Object.values(raw);
                }

                if (items.length === 0)
                  return (
                    <li className='text-sm text-gray-500'>
                      No business activities data
                    </li>
                  );

                return items.map((a) => <li key={a}>{a}</li>);
              })()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
