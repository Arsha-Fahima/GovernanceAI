"use client";

import ReturnsTable from "./ReturnsTable";

export default function RecentGSTReturns() {
  const data = {
    gstr3b: Array(9).fill({
      fy: "2025-2026",
      period: "December",
      date: "20 Jan 2026",
    }),
    gstr1: Array(9).fill({
      fy: "2025-2026",
      period: "December",
      date: "20 Jan 2026",
    }),
    gstr1a: [
      {
        fy: "2025-2026",
        period: "December",
        date: "20 Jan 2026",
      },
    ],
    gstr9: [
      {
        fy: "2025-2026",
        period: "December",
        date: "20 Jan 2026",
      },
    ],
  };

  return (
    <div className='space-y-10'>
      <div>
        <h3 className='text-xl font-semibold text-gray-800'>
          Recent GST Returns
        </h3>
        <p className='text-sm text-gray-500'>As on Mon Feb 02 2026</p>
        <p className='text-sm text-gray-700 mt-2'>
          The latest GSTR3B was filed for the period December 2025-2026.
        </p>
      </div>

      <ReturnsTable title='GSTR3B' rows={data.gstr3b} />
      <ReturnsTable title='GSTR1' rows={data.gstr1} />
      <ReturnsTable title='GSTR1A' rows={data.gstr1a} />
      <ReturnsTable title='GSTR9' rows={data.gstr9} />
    </div>
  );
}
