"use client";

import { useState } from "react";
import GSTDetailsCard from "./GSTDetailsCard";
import RecentGSTReturns from "./RecentGSTReturns";
import ComplianceClassification from "./ComplianceClassification";

const TABS = ["Details", "Recent GST Returns", "Compliance Classification"];

export default function GSTProfileTabs({ gstin, tradeName, state, gstData }) {
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        GST Details of <span className="font-bold">{tradeName}</span>
        <span className="text-gray-600">({gstin})</span>
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === tab
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "Details" && <GSTDetailsCard data={gstData} />}
      {activeTab === "Recent GST Returns" && (
        <RecentGSTReturns data={gstData} />
      )}
      {activeTab === "Compliance Classification" && (
        <ComplianceClassification data={gstData} />
      )}

      <p className="text-sm text-gray-500 italic mt-6">
        GSTIN profile last fetched on Mon Aug 25 2025 and GST Returns status
        last fetched on Mon Feb 02 2026.
      </p>
    </div>
  );
}
