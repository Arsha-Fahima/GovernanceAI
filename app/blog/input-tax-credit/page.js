"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InputTaxCreditBlog() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO SECTION */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/headeritc.png"
          alt="Input Tax Credit"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Complete Guide to Input Tax Credit (ITC)
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Understand how ITC reduces your GST liability and improves cash flow legally.
            </p>
          </motion.div>
        </div>
      </div>

      {/* BLOG CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          {/* WHAT IS ITC */}
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What is Input Tax Credit?
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Input Tax Credit (ITC) allows businesses to reduce the GST paid
            on purchases from the GST payable on sales. This prevents double
            taxation and improves working capital.
          </p>

          {/* EXAMPLE IMAGE */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl mb-12">
            <Image
              src="/images/ict.png"
              alt="ITC Example"
              fill
              className="object-cover"
            />
          </div>

          {/* HOW IT WORKS */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">How ITC Works</h3>
            <p className="text-slate-600 leading-relaxed">
              Suppose you purchase goods worth ₹1,00,000 and pay ₹18,000 GST.
              Later, you sell goods worth ₹2,00,000 and collect ₹36,000 GST.
              You only pay the difference (₹18,000) to the government.
            </p>
          </div>

          {/* CONDITIONS */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Conditions to Claim ITC</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Valid tax invoice</li>
              <li>Supplier must file GSTR-1</li>
              <li>Goods or services received</li>
              <li>GST must be paid to the government</li>
              <li>You must file GSTR-3B</li>
            </ul>
          </div>

          {/* BLOCKED CREDITS */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Blocked Credits</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Personal expenses</li>
              <li>Motor vehicles (mostly restricted)</li>
              <li>Food & beverages</li>
              <li>Club memberships</li>
              <li>Construction of buildings</li>
            </ul>
          </div>

          {/* CTA SECTION */}
          <div className="mt-16 bg-gradient-to-r from-[#1b69a1] to-indigo-600 text-white p-10 rounded-2xl text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Manage ITC Smartly with GSTInsight
            </h3>
            <p className="mb-6 text-gray-200">
              Automate reconciliation, avoid mismatches and eliminate compliance risks.
            </p>
            <button className="bg-white text-[#1b69a1] px-8 py-3 rounded-full font-bold hover:scale-105 transition">
              Try Dashboard
            </button>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
