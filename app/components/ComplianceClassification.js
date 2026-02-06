"use client";

export default function ComplianceClassification({ data }) {
  return (
    <div className="bg-[#faf9f6] rounded-2xl shadow-sm p-8 space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Compliance Classification
        </h3>

        <span className="inline-block px-6 py-2 rounded-xl bg-yellow-400 text-black font-semibold">
          {data?.compcategory || "N/A"}
        </span>

        <p className="text-sm text-gray-700 mt-4 max-w-2xl">
          Yellow compliance classification indicates that this GSTIN has filed
          GSTR1, but after the due date.
        </p>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">HSN / SAC</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>81</li>
              <li>73269099</li>
              <li>2517</li>
              <li>998622</li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Other GSTIN of the PAN
            </h4>
            <p className="text-sm text-gray-700">
              No other GSTIN found for this PAN
            </p>
          </div> */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Business Activities
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Factory / Manufacturing</li>
              <li>Office / Sale Office</li>
              <li>Wholesale Business</li>
            </ul>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-6">
              Return Periodicity
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>2025 Q1 M</li>
              <li>2025 Q2 M</li>
              <li>2025 Q3 M</li>
              <li>2025 Q4 M</li>
              <li>2024 Q1 M</li>
              <li>2024 Q2 M</li>
              <li>2024 Q3 M</li>
              <li>2024 Q4 M</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
