"use client";

import { motion } from "framer-motion";

export default function InputTaxCreditBlog() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Hero Section */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Understanding Input Tax Credit (ITC)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mb-10"
        >
          Learn how businesses reduce GST liability legally using ITC and 
          improve cash flow with smart compliance.
        </motion.p>

        {/* How ITC Works */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">🔄 How ITC Works</h2>
          <p className="text-gray-600">
            When you purchase goods or services and pay GST,
            you can claim that tax as credit against your output GST liability.
          </p>
          <div className="mt-4 bg-blue-50 p-4 rounded-lg text-blue-800">
            Example:  
            Output GST = ₹36,000  
            Input GST = ₹18,000  
            Tax Payable = ₹18,000
          </div>
        </motion.div>

        {/* Conditions */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">📋 Conditions to Claim ITC</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Valid tax invoice</li>
            <li>Supplier must file GSTR-1</li>
            <li>You must file GSTR-3B</li>
            <li>Goods/services received</li>
            <li>Tax paid to government</li>
          </ul>
        </motion.div>

        {/* Blocked Credits */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">🚫 Blocked Credits</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Personal expenses</li>
            <li>Motor vehicles (most cases)</li>
            <li>Food & beverages</li>
            <li>Club memberships</li>
            <li>Construction of buildings</li>
          </ul>
        </motion.div>

        {/* Why ITC Matters */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">⚡ Why ITC is Powerful</h2>
          <p>
            Correct ITC management improves working capital,
            reduces tax burden, and prevents GST notices.
            Modern SaaS GST platforms automate reconciliation
            to avoid mismatches and penalties.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
