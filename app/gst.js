"use client";

import Navbar from "@/app/components/navbar";
import GSTDetailsCard from "@/app/components/GSTDetailsCard";

export default function GSTProfilePage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />

      <main className='max-w-5xl mx-auto px-6 py-8'>
        <h2 className='text-lg font-semibold text-gray-800 mb-6'>
          GST Details of <span className='font-bold'>PURUSHOTHAM K</span>{" "}
          <span className='text-gray-600'>(33AEHFS7915K1ZN, Tamil Nadu)</span>
        </h2>

        {/* Tabs */}
        <div className='flex gap-4 mb-6'>
          {["Details", "Recent GST Returns", "Compliance Classification"].map(
            (tab) => (
              <button
                key={tab}
                className='px-5 py-2 rounded-full bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 transition'
              >
                {tab}
              </button>
            ),
          )}
        </div>

        <GSTDetailsCard />

        <p className='text-sm text-gray-500 italic mt-6'>
          GSTIN profile last fetched on Mon Aug 25 2025 and GST Returns status
          last fetched on Mon Feb 02 2026.
        </p>
      </main>
    </div>
  );
}
