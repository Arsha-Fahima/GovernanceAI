"use client";

const COMPLIANCE_MAP = {
  green: {
    label: "Green",
    badge: "bg-green-500 text-white",
    description:
      "This GSTIN has filed the last 4 GSTR-1 returns on or before the due date.",
  },
  yellow: {
    label: "Yellow",
    badge: "bg-yellow-400 text-black",
    description: "This GSTIN has filed GSTR-1 returns, but after the due date.",
  },
  red: {
    label: "Red",
    badge: "bg-red-500 text-white",
    description: "This GSTIN has not yet filed the last 2 GSTR-1 returns.",
  },
  orange: {
    label: "Orange",
    badge: "bg-orange-500 text-white",
    description:
      "This GSTIN is either deactivated, cancelled, or registered as a Composition taxpayer.",
  },
  black: {
    label: "Unknown",
    badge: "bg-gray-900 text-white",
    description:
      "We cannot determine the compliance classification at the moment due to lack of sufficient data.",
  },
};

export default function ComplianceClassification({ data }) {
  const categoryKey = data?.compcategory?.toLowerCase();
  const category = COMPLIANCE_MAP[categoryKey] || COMPLIANCE_MAP.black;

  /** ✅ Dynamic values **/
  const hsnList = Array.isArray(data?.hsn) ? data.hsn : [];

  const businessActivities = (() => {
    try {
      return Array.isArray(data?.nba)
        ? data.nba
        : JSON.parse(data?.nba || "[]");
    } catch {
      return [];
    }
  })();

  const filingFrequency = data?.filingFreq || {};

  return (
    <div className="bg-[#faf9f6] rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
          Compliance Classification
        </h3>

        <span
          className={`inline-block px-4 sm:px-6 py-2 rounded-xl font-semibold text-sm sm:text-base ${category.badge}`}
        >
          {category.label}
        </span>

        <p className="text-sm text-gray-700 mt-4 max-w-2xl">
          {category.description}
        </p>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-6">
          {/* HSN / SAC */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">HSN / SAC</h4>
            {hsnList.length > 0 ? (
              <ul className="text-sm text-gray-700 space-y-1">
                {hsnList.map((code, idx) => (
                  <li key={idx}>{code}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Not available</p>
            )}
          </div>

          {/* Business Activities */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Business Activities
            </h4>
            {businessActivities.length > 0 ? (
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {businessActivities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Not available</p>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Return Periodicity */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">
              Return Periodicity
            </h4>

            {Object.keys(filingFrequency).length > 0 ? (
              <ul className="text-sm text-gray-700 space-y-1">
                {Object.entries(filingFrequency).map(([period, freq]) => (
                  <li key={period}>
                    {period.replace("_", " ")} —{" "}
                    <span className="font-medium">
                      {freq === "M" ? "Monthly" : "Quarterly"}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Not available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
