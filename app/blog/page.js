"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black text-slate-900"
        >
          GST Insight Blog
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg"
        >
          Deep insights on GST returns, ITC reconciliation, compliance strategy
          and risk management for modern businesses.
        </motion.p>
      </section>

      {/* BLOG CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-10">
        <BlogCard
          title="Know About GST Returns"
          desc="Complete breakdown of GSTR-1, GSTR-2A and GSTR-3B with reconciliation strategies."
          href="/blog/gst-returns"
        />

        <BlogCard
          title="Input Tax Credit (ITC)"
          desc="Understand eligibility, compliance risks and how to avoid ITC reversals."
          href="/blog/input-tax-credit"
        />
      </section>
    </div>
  );
}

function BlogCard({ title, desc, href }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group"
    >
      <Link
        href={href}
        className="block bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#1b69a1] transition">
          {title}
        </h2>

        <p className="text-slate-600 mt-4 leading-relaxed">
          {desc}
        </p>

        <div className="mt-8 text-[#1b69a1] font-semibold">
          Read Full Article →
        </div>
      </Link>
    </motion.div>
  );
}
