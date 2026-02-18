"use client";

import { motion } from "framer-motion";

export default function GstReturnsBlog() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Know About GST Returns
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mb-10"
        >
          Understand GSTR-1, GSTR-3B, and GSTR-2A in a simple startup-style breakdown.
        </motion.p>

        {/* GSTR-1 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">📤 GSTR-1</h2>
          <p className="text-gray-600">
            GSTR-1 is a monthly or quarterly return where businesses report 
            all outward supplies (sales). It contains invoice-level details.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600">
            <li>Filed monthly or quarterly</li>
            <li>Includes B2B & B2C sales</li>
            <li>Auto-populates in buyer’s 2A</li>
          </ul>
        </motion.div>

        {/* GSTR-3B */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">📊 GSTR-3B</h2>
          <p className="text-gray-600">
            GSTR-3B is a summary return where businesses declare total sales,
            purchases, and pay GST after adjusting Input Tax Credit.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600">
            <li>Filed monthly</li>
            <li>Used to pay tax</li>
            <li>Includes ITC claim</li>
          </ul>
        </motion.div>

        {/* GSTR-2A */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">🔍 GSTR-2A</h2>
          <p className="text-gray-600">
            GSTR-2A is auto-generated based on suppliers’ GSTR-1 filings.
            It helps businesses verify purchase invoices before claiming ITC.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600">
            <li>Auto-generated</li>
            <li>Helps ITC reconciliation</li>
            <li>Reduces mismatch risk</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
