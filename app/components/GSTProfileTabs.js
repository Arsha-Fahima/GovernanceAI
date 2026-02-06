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
    <div className="rounded-xl bg-white shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            {tradeName || gstin}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 break-all">
            {gstin || state || ""}
          </p>
        </div>

        <span className="self-start sm:self-auto inline-block bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
          GST Profile
        </span>
      </div>

      {/* Tabs */}
      <nav className="mb-6">
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-h-[40px] px-2 py-2 rounded-md text-xs sm:text-sm font-medium text-center transition-all ${
                activeTab === tab
                  ? "bg-indigo-600 text-white shadow"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="space-y-6 sm:space-y-8">
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
