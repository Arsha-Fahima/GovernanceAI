"use client";

import { useState } from "react";
import GSTDetailsCard from "./GSTDetailsCard";
import RecentGSTReturns from "./RecentGSTReturns";
import ComplianceClassification from "./ComplianceClassification";

const TABS = ["Details", "Recent GST Returns", "Compliance Classification"];

export default function GSTProfileTabs({
  gstin,
  tradeName,
  state,
  gstData,
  dbRecord,
}) {
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <div className='rounded-xl p-6 sm:p-8 bg-white shadow-lg border border-gray-100'>
      <div className='flex items-center justify-between gap-4 mb-8'>
        <div>
          <h2 className='text-2xl font-bold text-gray-900'>
            {tradeName || gstin}
          </h2>
          <p className='text-sm text-gray-600 mt-1'>{gstin || state || ""}</p>
        </div>
        <div className='text-sm text-gray-500'>
          <span className='inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium'>
            GST Profile
          </span>
        </div>
      </div>

      <nav className='flex gap-1 mb-8 bg-gray-100 p-1 rounded-lg'>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 rounded-md text-sm font-medium whitespace-nowrap flex-1 transition-all ${
              activeTab === tab
                ? "bg-white text-indigo-600 shadow-sm font-semibold"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className='space-y-8'>
        {activeTab === "Details" && (
          <GSTDetailsCard data={gstData} dbRecord={dbRecord} />
        )}
        {activeTab === "Recent GST Returns" && (
          <RecentGSTReturns data={gstData} dbRecord={dbRecord} />
        )}
        {activeTab === "Compliance Classification" && (
          <ComplianceClassification data={gstData} dbRecord={dbRecord} />
        )}
      </div>
    </div>
  );
}
