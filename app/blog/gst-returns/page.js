"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GstReturnsBlog() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO SECTION */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/gstreturns.png"
          alt="GST Returns"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Complete Guide to GST Returns
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Understand GSTR-1, GSTR-3B and GSTR-2A with real examples,
              compliance tips and business insights.
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

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What is a GST Return?
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            A GST return is a document that contains details of income,
            purchases, tax collected and tax paid. Registered businesses
            must file GST returns monthly or quarterly depending on their
            turnover.
          </p>

          {/* FEATURE IMAGE BLOCK */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl mb-12">
            <Image
              src="/images/gst-returns.jpg"
              alt="GST Filing"
              fill
              className="object-cover"
            />
          </div>

          {/* GSTR-1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">📤 GSTR-1</h3>
            <p className="text-slate-600 leading-relaxed">
              GSTR-1 includes details of outward supplies (sales). It is
              filed monthly or quarterly and contains invoice-level data.
              It directly affects your buyer’s ITC.
            </p>
          </div>

          {/* GSTR-3B */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">📊 GSTR-3B</h3>
            <p className="text-slate-600 leading-relaxed">
              GSTR-3B is a summary return where businesses declare total
              sales, purchases, and pay GST after adjusting Input Tax Credit.
            </p>
          </div>

          {/* GSTR-2A */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">🔍 GSTR-2A</h3>
            <p className="text-slate-600 leading-relaxed">
              GSTR-2A is auto-generated based on supplier filings.
              Businesses use it to verify purchase invoices before claiming ITC.
            </p>
          </div>

          {/* CTA SECTION */}
          <div className="mt-16 bg-gradient-to-r from-[#1b69a1] to-indigo-600 text-white p-10 rounded-2xl text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Stay Compliant. Stay Confident.
            </h3>
            <p className="mb-6 text-gray-200">
              Automate your GST filings and eliminate compliance risks with GSTInsight.
            </p>
            <button className="bg-white text-[#1b69a1] px-8 py-3 rounded-full font-bold hover:scale-105 transition">
              Explore Dashboard
            </button>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
