// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function GstReturnsBlog() {
//   return (
//     <div className="bg-white min-h-screen">

//       {/* HERO SECTION */}
//       <div className="relative h-[60vh] w-full">
//         <Image
//           src="/images/gstreturns.png"
//           alt="GST Returns"
//           fill
//           className="object-cover"
//           priority
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Hero Content */}
//         <div className="absolute inset-0 flex items-center justify-center text-center px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
//               Complete Guide to GST Returns
//             </h1>
//             <p className="text-lg text-gray-200 max-w-2xl mx-auto">
//               Understand GSTR-1, GSTR-3B and GSTR-2A with real examples,
//               compliance tips and business insights.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* BLOG CONTENT */}
//       <div className="max-w-4xl mx-auto px-6 py-20">

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >

//           <h2 className="text-3xl font-bold text-slate-900 mb-6">
//             What is a GST Return?
//           </h2>

//           <p className="text-lg text-slate-600 leading-relaxed mb-10">
//             A GST return is a document that contains details of income,
//             purchases, tax collected and tax paid. Registered businesses
//             must file GST returns monthly or quarterly depending on their
//             turnover.
//           </p>

//           {/* FEATURE IMAGE BLOCK */}
//           <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl mb-12">
//             <Image
//               src="/images/gst-returns.jpg"
//               alt="GST Filing"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* GSTR-1 */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-semibold mb-4">GSTR-1</h3>
//             <p className="text-slate-600 leading-relaxed">
//               GSTR-1 includes details of outward supplies (sales). It is
//               filed monthly or quarterly and contains invoice-level data.
//               It directly affects your buyer’s ITC.
//             </p>
//           </div>

//           {/* GSTR-3B */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-semibold mb-4">GSTR-3B</h3>
//             <p className="text-slate-600 leading-relaxed">
//               GSTR-3B is a summary return where businesses declare total
//               sales, purchases, and pay GST after adjusting Input Tax Credit.
//             </p>
//           </div>

//           {/* GSTR-2A */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-semibold mb-4">GSTR-2A</h3>
//             <p className="text-slate-600 leading-relaxed">
//               GSTR-2A is auto-generated based on supplier filings.
//               Businesses use it to verify purchase invoices before claiming ITC.
//             </p>
//           </div>

//           {/* CTA SECTION */}
//           <div className="mt-16 bg-gradient-to-r from-[#1b69a1] to-indigo-600 text-white p-10 rounded-2xl text-center shadow-2xl">
//             <h3 className="text-2xl font-bold mb-4">
//               Stay Compliant. Stay Confident.
//             </h3>
//             <p className="mb-6 text-gray-200">
//               Automate your GST filings and eliminate compliance risks with GSTInsight.
//             </p>
//             <button className="bg-white text-[#1b69a1] px-8 py-3 rounded-full font-bold hover:scale-105 transition">
//               Explore Dashboard
//             </button>
//           </div>

//         </motion.div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";

const styles = {
  // BASE
  body: { fontFamily: "'Inter', 'Segoe UI', sans-serif", background: "#fff", color: "#0f1923", lineHeight: "1.7", margin: 0, padding: 0 },
  container: { maxWidth: 1140, margin: "0 auto", padding: "0 28px" },

  // HERO
  hero: { background: "#0a1628", padding: "90px 0 80px", position: "relative", overflow: "hidden" },
  heroBadge: { display: "inline-block", background: "#1e3a5f", color: "#7eb8f7", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 4, marginBottom: 24 },
  heroH1: { fontFamily: "'Georgia', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.12, marginBottom: 20, maxWidth: 780, color: "#fff", fontWeight: 700 },
  heroSpan: { color: "#7eb8f7" },
  heroP: { fontSize: "1rem", color: "#8fa3be", maxWidth: 580, marginBottom: 36, fontWeight: 300, lineHeight: 1.75 },
  heroUpdate: { display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,183,0,.08)", border: "1px solid rgba(255,183,0,.2)", padding: "10px 18px", borderRadius: 8, fontSize: ".82rem", color: "#ffd666", marginBottom: 48 },
  heroStats: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 14, overflow: "hidden", maxWidth: 720 },
  heroStat: { background: "#0d1f3c", padding: "22px 16px", textAlign: "center" },
  heroStatNum: { display: "block", fontFamily: "'Georgia', serif", fontSize: "1.9rem", fontWeight: 700, color: "#7eb8f7", marginBottom: 4 },
  heroStatLabel: { fontSize: ".73rem", color: "#6b7fa3", letterSpacing: .3 },

  // SECTION
  secLabel: { display: "block", fontSize: ".7rem", fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "#1e3a5f", marginBottom: 10 },
  secTitle: { fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", lineHeight: 1.15, marginBottom: 14, color: "#0a1628" },
  secSub: { color: "#6b7a8d", fontSize: ".95rem", maxWidth: 520, fontWeight: 400, lineHeight: 1.7 },

  // WHAT IS
  whatSection: { padding: "80px 0", background: "#fff" },
  whatGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" },
  whatP: { color: "#4a5568", fontSize: ".94rem", marginBottom: 14, lineHeight: 1.75 },
  pillars: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 28 },
  pillarCard: { border: "1px solid #dde3ec", background: "#f8fafd", borderRadius: 10, padding: 18, borderLeft: "3px solid #1e3a5f" },
  pillarH4: { fontSize: ".84rem", fontWeight: 700, marginBottom: 4, color: "#0a1628" },
  pillarP: { fontSize: ".78rem", color: "#6b7a8d", lineHeight: 1.5 },

  // FLOW BOX
  flowBox: { background: "#0a1628", borderRadius: 16, padding: 32, position: "relative", overflow: "hidden" },
  flowTopLine: { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #7eb8f7, transparent)" },
  flowItem: { display: "flex", gap: 16, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,.08)" },
  flowItemLast: { display: "flex", gap: 16, padding: "14px 0" },
  flowNum: { width: 32, height: 32, borderRadius: 8, background: "#1e3a5f", border: "1px solid #2d5a9e", color: "#7eb8f7", fontWeight: 800, fontSize: ".75rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  flowH5: { fontSize: ".88rem", fontWeight: 700, color: "#fff", marginBottom: 3 },
  flowP: { fontSize: ".8rem", color: "#8fa3be", lineHeight: 1.5 },

  // UPDATE BANNER
  updateBanner: { background: "rgba(255,183,0,.04)", border: "1px solid rgba(255,183,0,.18)", borderRadius: 12, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 44 },
  ubTitle: { fontSize: ".87rem", fontWeight: 700, color: "#b8860b", marginBottom: 8 },
  ubItem: { fontSize: ".82rem", color: "#5a6474", marginBottom: 6, display: "flex", gap: 10, lineHeight: 1.55 },
  ubArrow: { color: "#b8860b", fontWeight: 700, flexShrink: 0 },

  // TABS
  tabsRow: { display: "flex", border: "1px solid #dde3ec", borderRadius: 12, overflow: "hidden", marginBottom: 40, background: "#f8fafd" },
  tabBtn: (active) => ({ flex: 1, padding: "16px 14px", background: active ? "#0a1628" : "none", border: "none", borderRight: "1px solid #dde3ec", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: ".83rem", fontWeight: 500, color: active ? "#7eb8f7" : "#6b7a8d", transition: "all .2s", textAlign: "center" }),
  tabName: (active) => ({ display: "block", fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: "1rem", marginBottom: 3, color: active ? "#fff" : "#0a1628" }),

  // PANEL HEADER
  panelHdr: { display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center", background: "#f8fafd", border: "1px solid #dde3ec", borderRadius: 16, padding: 28, marginBottom: 28, position: "relative", overflow: "hidden" },
  formBadge: (color) => ({ fontFamily: "'Georgia', serif", fontSize: "1.4rem", fontWeight: 700, border: `2px solid ${color}`, borderRadius: 12, padding: "12px 18px", color: color, textAlign: "center", minWidth: 110, lineHeight: 1 }),
  formBadgeSmall: { display: "block", fontSize: ".58rem", color: "#9aa5b4", fontWeight: 400, letterSpacing: 1, marginTop: 4, fontFamily: "'Inter',sans-serif" },
  panelH2: { fontFamily: "'Georgia', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: 6, color: "#0a1628" },
  panelP: { fontSize: ".88rem", color: "#4a5568", lineHeight: 1.65 },
  tagRow: { display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" },
  rtag: (bg, color) => ({ display: "inline-block", padding: "5px 12px", borderRadius: 20, fontSize: ".7rem", fontWeight: 700, letterSpacing: .5, textTransform: "uppercase", background: bg, color: color, border: `1px solid ${color}33` }),

  // DATA CARDS
  twoCol: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 },
  dataCard: { background: "#fff", border: "1px solid #dde3ec", borderRadius: 14, padding: 24 },
  dataCardH3: { fontSize: ".7rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#1e3a5f", marginBottom: 18, paddingBottom: 12, borderBottom: "1px solid #dde3ec" },
  checkList: { listStyle: "none", padding: 0 },
  checkItem: { display: "flex", gap: 10, alignItems: "flex-start", padding: "9px 0", borderBottom: "1px solid #f0f4f8", fontSize: ".86rem", color: "#4a5568" },
  checkDot: { width: 18, height: 18, borderRadius: 4, background: "#e8f0fe", border: "1px solid #c5d5f0", flexShrink: 0, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#1e3a5f", fontWeight: 700 },

  // TABLE
  table: { width: "100%", borderCollapse: "collapse", fontSize: ".84rem" },
  th: { padding: "9px 12px", background: "#f0f4f8", color: "#6b7a8d", fontWeight: 700, fontSize: ".72rem", letterSpacing: .5, textTransform: "uppercase", textAlign: "left", borderBottom: "2px solid #dde3ec" },
  td: { padding: "11px 12px", borderBottom: "1px solid #f0f4f8", color: "#4a5568" },
  tdHL: { padding: "11px 12px", borderBottom: "1px solid #f0f4f8", color: "#1e3a5f", fontWeight: 700 },

  // WARN BOX
  warnBox: { background: "#fff8f8", border: "1px solid #f5c6c6", borderRadius: 10, padding: 16, display: "flex", gap: 12, marginTop: 14 },
  warnH4: { fontSize: ".82rem", fontWeight: 700, color: "#c0392b", marginBottom: 3 },
  warnP: { fontSize: ".8rem", color: "#6b7a8d", lineHeight: 1.55 },
  infoBox: { background: "#f0f7ff", border: "1px solid #c5d5f0", borderRadius: 10, padding: 16, display: "flex", gap: 12, marginTop: 10 },
  infoH4: { fontSize: ".82rem", fontWeight: 700, color: "#1e3a5f", marginBottom: 3 },

  // FULL CARD
  fullCard: { background: "#fff", border: "1px solid #dde3ec", borderRadius: 14, padding: 28, marginBottom: 20 },
  fullCardH3: { fontFamily: "'Georgia', serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: 22, color: "#0a1628" },
  stepsRow: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 },
  stepCard: { border: "1px solid #dde3ec", background: "#f8fafd", borderRadius: 10, padding: 18 },
  stepNum: { width: 28, height: 28, borderRadius: 6, background: "#0a1628", color: "#7eb8f7", fontSize: ".72rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 },
  stepH4: { fontSize: ".85rem", fontWeight: 700, color: "#0a1628", marginBottom: 5 },
  stepP: { fontSize: ".78rem", color: "#6b7a8d", lineHeight: 1.5 },
  tipsRow: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 },
  tipCard: (bg, border) => ({ padding: 18, borderRadius: 10, display: "flex", gap: 12, background: bg, border: `1px solid ${border}` }),
  tipH4: { fontSize: ".83rem", fontWeight: 700, color: "#0a1628", marginBottom: 4 },
  tipP: { fontSize: ".78rem", color: "#4a5568", lineHeight: 1.45 },

  // COMPARE
  compareSection: { padding: "0 0 80px", background: "#fff" },
  compareWrap: { border: "1px solid #dde3ec", borderRadius: 16, overflow: "hidden" },
  cmpTh: (bg, color) => ({ padding: "17px 20px", textAlign: "left", fontSize: ".78rem", fontWeight: 700, letterSpacing: .5, textTransform: "uppercase", borderBottom: "2px solid #dde3ec", background: bg, color: color }),
  cmpTd: { padding: "14px 20px", borderBottom: "1px solid #f0f4f8", fontSize: ".84rem", color: "#4a5568", verticalAlign: "top" },
  cmpTdFirst: { padding: "14px 20px", borderBottom: "1px solid #f0f4f8", fontSize: ".74rem", fontWeight: 700, color: "#9aa5b4", textTransform: "uppercase", letterSpacing: .5, verticalAlign: "top" },

  // BLOG
  blogSection: { padding: "0 0 90px", background: "#f8fafd" },
  blogHeader: { marginBottom: 44, paddingTop: 80 },
  blogGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 },
  blogCard: { background: "#fff", border: "1px solid #dde3ec", borderRadius: 14, overflow: "hidden", transition: "transform .25s, box-shadow .25s", cursor: "pointer" },
  blogBanner: (bg) => ({ height: 120, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.4rem", background: bg }),
  blogBody: { padding: 22 },
  blogTag: (bg, color) => ({ display: "inline-block", fontSize: ".68rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", padding: "3px 10px", borderRadius: 4, marginBottom: 10, background: bg, color: color }),
  blogH3: { fontFamily: "'Georgia', serif", fontSize: "1rem", fontWeight: 700, lineHeight: 1.35, marginBottom: 8, color: "#0a1628" },
  blogP: { fontSize: ".81rem", color: "#6b7a8d", lineHeight: 1.6, marginBottom: 16 },
  blogFoot: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  blogMeta: { fontSize: ".73rem", color: "#9aa5b4" },
  blogLink: { fontSize: ".79rem", fontWeight: 700, color: "#1e3a5f", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 },

  // FAQ
  faqSection: { padding: "80px 0", background: "#fff" },
  faqGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 40 },
  faqCard: { background: "#f8fafd", border: "1px solid #dde3ec", borderRadius: 12, padding: 22 },
  faqH4: { fontSize: ".9rem", fontWeight: 700, color: "#0a1628", marginBottom: 10, display: "flex", gap: 10 },
  faqQmark: { color: "#1e3a5f", fontFamily: "'Georgia', serif", fontWeight: 700, flexShrink: 0 },
  faqP: { fontSize: ".84rem", color: "#4a5568", lineHeight: 1.65, paddingLeft: 22 },

  // CTA
  ctaSection: { padding: "0 0 100px", background: "#fff" },
  ctaWrap: { background: "#0a1628", borderRadius: 24, padding: 64, textAlign: "center", position: "relative", overflow: "hidden" },
  ctaTopLine: { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #7eb8f7, transparent)" },
  ctaH2: { fontFamily: "'Georgia', serif", fontSize: "2.2rem", fontWeight: 700, color: "#fff", marginBottom: 14 },
  ctaP: { color: "#8fa3be", fontSize: ".97rem", maxWidth: 460, margin: "0 auto 36px" },
  ctaBtns: { display: "flex", gap: 14, justifyContent: "center" },
  btnPrimary: { background: "#1e3a5f", color: "#7eb8f7", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: ".9rem", border: "1px solid #2d5a9e", display: "inline-block" },
  btnGhost: { background: "transparent", color: "#fff", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: ".9rem", border: "1px solid rgba(255,255,255,.2)", display: "inline-block" },
};

// ─── DATA ───────────────────────────────────────────────────────────

const GSTR1_FIELDS = [
  ["B2B Invoices", "With buyer's GSTIN, invoice no., date, taxable value, IGST/CGST/SGST breakup"],
  ["B2C Large", "Inter-state invoices above ₹2.5 lakh to unregistered buyers (Table 5)"],
  ["B2C Small", "All remaining B2C sales consolidated state-wise (Table 7)"],
  ["Export Invoices", "With/without payment of IGST; include shipping bill and port details"],
  ["Credit & Debit Notes", "Against B2B or B2C invoices; directly affects buyer's ITC in GSTR-2B"],
  ["Advances Received", "For future supplies where invoice hasn't been issued yet"],
  ["HSN Summary (Table 12)", "From May 2025: separate B2B and B2C sections. B2B HSN mandatory."],
  ["Nil-Rated / Exempt", "Nil-rated, exempt, and non-GST supplies reported in Table 8"],
];

const GSTR3B_FIELDS = [
  ["Table 3.1 — Outward Supplies", "Taxable, nil-rated, exempt, exports, and supplies under reverse charge"],
  ["Table 3.2 — Inter-State Supplies", "To unregistered, composition taxpayers, UIN holders. Non-editable from Nov 2025."],
  ["Table 4 — Eligible ITC", "ITC on imports, reverse charge, all other ITC from GSTR-2B (IGST/CGST/SGST)"],
  ["Table 4(B) — ITC Reversal", "Rule 42/43 (exempt supply), Section 17(5) (blocked), Rule 37 (180-day non-payment)"],
  ["Table 5 — Exempt Supplies", "Details of nil-rated, non-GST, and exempt outward supplies"],
  ["Table 6 — TDS/TCS Credit", "TDS under Section 51 and TCS collected by e-commerce operators under Section 52"],
];

const GSTR2B_FIELDS = [
  ["B2B Inward Supplies", "Invoices filed by your registered suppliers in their GSTR-1 for the period"],
  ["Import of Goods", "From ICEGATE (Customs); Bill of Entry auto-populated. BoE in IMS from Oct 2025."],
  ["Import of Services", "From GSTR-5A filings of OIDAR (Online Information Database Access) providers"],
  ["Credit Notes from Suppliers", "Reduces available ITC when suppliers issue credit notes against your purchases"],
  ["ISD Credits", "Input Service Distributor credits distributed to your GSTIN"],
  ["TDS Credit (Section 51)", "TDS deducted by govt. entities/notified persons on payments made to you"],
  ["TCS Credit (Section 52)", "TCS collected by e-commerce operators on supplies through their platform"],
];

const COMPARE_ROWS = [
  ["Purpose", "Report outward supplies (sales invoices)", "Declare tax liability & pay GST", "View & claim eligible ITC from purchases"],
  ["Filed By", "Seller / Supplier", "Every registered taxpayer", "Auto-generated (read-only)"],
  ["Frequency", "Monthly (11th) or Quarterly (13th)", "Monthly (20th) or Quarterly (22nd/24th)", "Auto-locked on 14th each month"],
  ["Data Level", "Invoice-level (granular)", "Summary-level only", "Invoice-level (from suppliers' GSTR-1)"],
  ["ITC Impact", "Populates buyer's GSTR-2B directly", "ITC claimed and tax paid here", "Sole valid basis for ITC claim (Rule 36(4))"],
  ["Can Be Revised?", "Yes — via Table 9/10 or GSTR-1A", "No — correct in next month's return", "Not applicable (system-generated)"],
  ["2025 Key Change", "Table 12 split: B2B & B2C HSN sections from May 2025", "Table-3 hard-locked July 2025; Table 3.2 non-editable Nov 2025", "IMS includes import of goods (BoE) from Oct 2025"],
  ["Late Fee", "₹50/day (₹20 NIL) — Max ₹10,000", "₹50/day + 18% interest on tax dues", "No filing required"],
  ["Time Limit", "3 years from due date (July 2025)", "3 years from due date (July 2025)", "N/A"],
];

const BLOGS = [
  { banner: "📋", bg: "#e8f0fe", tag: "CBIC Update 2025", tagBg: "#e8f0fe", tagColor: "#1e3a5f", title: "GSTR-3B Hard-Lock & 3-Year Time Bar: What Changes from July 2025", desc: "Table-3 values in GSTR-3B are now auto-locked from GSTR-1. Returns older than 3 years from due date can no longer be filed. Full compliance impact analysis.", time: "8 min · ClearTax", url: "https://cleartax.in/s/gst-return-filing-rule-changes-from-july-2025" },
  { banner: "🔗", bg: "#eaf7f0", tag: "GSTR-3B", tagBg: "#eaf7f0", tagColor: "#1a6b3c", title: "GSTR-3B vs GSTR-1 Mismatch: Rule 88C, DRC-01B & How to Respond", desc: "When GSTR-1 and GSTR-3B figures don't match, GSTN auto-sends a DRC-01B notice. Failure to respond blocks your next GSTR-1 filing. Here's how to handle it.", time: "7 min · ClearTax", url: "https://cleartax.in/s/gstr-3b-vs-gstr-1-comparison" },
  { banner: "📊", bg: "#fef9ec", tag: "GSTR-2B", tagBg: "#fef9ec", tagColor: "#92650a", title: "ITC Mismatch in GSTR-2B vs GSTR-3B: How to Reconcile & Fix It", desc: "Complete guide to GSTR-2B reconciliation under Rule 36(4), how to identify excess ITC claims, and how to reverse with interest before a notice arrives.", time: "9 min · ClearTax", url: "https://cleartax.in/s/itc-mismatch-gstr-2b-vs-gstr-3b" },
  { banner: "⚖️", bg: "#fdf0f0", tag: "TaxGuru · FY 2025", tagBg: "#fdf0f0", tagColor: "#c0392b", title: "Key GST Return Changes: GSTR-1 Table 12 B2B/B2C Split & 3B Hard-Lock", desc: "From May 2025, GSTR-1 Table 12 has separate sections for B2B and B2C HSN. Combined with GSTR-3B hard-locking, this is the biggest compliance overhaul in years.", time: "6 min · TaxGuru", url: "https://taxguru.in/goods-and-service-tax/key-important-gst-return-gstr-1-gstr-3b.html" },
  { banner: "📅", bg: "#f0f4ff", tag: "FY 2025–26", tagBg: "#e8f0fe", tagColor: "#1e3a5f", title: "GST Return Amendments for FY 2024-25: ITC Corrections, RCM & Deadlines", desc: "Sales corrections via GSTR-1 must be done by October 2025 return. ITC reversals under Rule 37, 42 & 43 must be settled before October 2025 GSTR-3B due date.", time: "10 min · TaxGuru", url: "https://taxguru.in/goods-and-service-tax/gst-return-amendments-fy-2024-25-corrections-itc-rcm-deadlines.html" },
  { banner: "🧾", bg: "#eaf7f0", tag: "GSTR-2B Deep Dive", tagBg: "#eaf7f0", tagColor: "#1a6b3c", title: "Complete Guide to GSTR-2B: Auto-Drafted ITC Statement, IMS & Filing Rules 2025", desc: "GSTR-2B is generated on the 14th of each month. IMS now lets you accept, reject, or defer supplier invoices. Understand the full ITC workflow for 2025.", time: "8 min · ClearTax", url: "https://cleartax.in/s/gstr-2b" },
];

const FAQS = [
  { q: "Can GSTR-3B be edited after July 2025?", a: "From July 2025, Table-3 values auto-filled from GSTR-1/IFF in GSTR-3B are hard-locked and cannot be manually edited. To correct wrong outward supply figures, file GSTR-1A for the same period before submitting GSTR-3B. Other tables like ITC in Table 4 can still be manually filled." },
  { q: "Can I still file old GST returns that were pending?", a: "From July 2025, GST returns cannot be filed after 3 years from the original due date. For example, GSTR-3B for October 2022 and GSTR-1/3B for July–September 2022 could not be filed after 1st December 2025. File all pending returns immediately to avoid permanent loss." },
  { q: "What is the difference between GSTR-2A and GSTR-2B?", a: "GSTR-2A updates in real-time and is used only for reference and supplier follow-up. GSTR-2B is locked on the 14th of each month and is the only valid basis for ITC claims in GSTR-3B as per Rule 36(4) from January 2022. Always use GSTR-2B for your actual ITC claims." },
  { q: "What is IMS and how does it affect my ITC?", a: "Launched in October 2024, IMS (Invoice Management System) lets you accept, reject, or mark supplier invoices pending on the GST portal. Accepted invoices flow into GSTR-2B as eligible ITC. Rejected invoices are removed from GSTR-2B. From October 2025, import of goods (Bill of Entry) is also available in IMS." },
  { q: "What happens if my GSTR-1 and GSTR-3B figures don't match?", a: "Under Rule 88C, GSTN automatically compares GSTR-1 and GSTR-3B. If a significant mismatch is found, Form DRC-01B is sent. You must respond within the specified time — either paying the difference or explaining the gap. Not responding leads to blocking of GSTR-1 for the subsequent period." },
  { q: "What is the penalty for not filing GSTR-1 on time?", a: "Late fee is ₹50 per day (₹25 CGST + ₹25 SGST) for returns with taxable supplies, capped at ₹10,000 per return. For NIL returns, the fee is ₹20 per day. Additionally, if GSTR-3B is unfiled for 2 consecutive months, GSTR-1 filing gets automatically blocked by the GST portal." },
];

// ─── SUB-COMPONENTS (inline, no imports) ────────────────────────────

function CheckList({ items }) {
  return (
    <ul style={styles.checkList}>
      {items.map(([bold, rest], i) => (
        <li key={i} style={{ ...styles.checkItem, borderBottom: i === items.length - 1 ? "none" : "1px solid #f0f4f8" }}>
          <span style={styles.checkDot}>✓</span>
          <span><strong style={{ color: "#0a1628" }}>{bold}</strong>{rest ? " — " + rest : ""}</span>
        </li>
      ))}
    </ul>
  );
}

function StepsGrid({ steps }) {
  return (
    <div style={styles.stepsRow}>
      {steps.map((s, i) => (
        <div key={i} style={styles.stepCard}>
          <div style={styles.stepNum}>{s.num}</div>
          <h4 style={styles.stepH4}>{s.title}</h4>
          <p style={styles.stepP}>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

function TipsGrid({ tips }) {
  const configs = [
    { bg: "#f0f4ff", border: "#c5d5f0" },
    { bg: "#eaf7f0", border: "#a8d9bc" },
    { bg: "#fef9ec", border: "#f0d98a" },
  ];
  return (
    <div style={styles.tipsRow}>
      {tips.map((t, i) => (
        <div key={i} style={styles.tipCard(configs[i].bg, configs[i].border)}>
          <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{t.icon}</span>
          <div>
            <h4 style={styles.tipH4}>{t.title}</h4>
            <p style={styles.tipP}>{t.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── TAB PANELS ─────────────────────────────────────────────────────

function GSTR1Panel() {
  return (
    <div>
      <div style={styles.panelHdr}>
        <div style={styles.formBadge("#1e3a5f")}>
          GSTR-1<small style={styles.formBadgeSmall}>FORM</small>
        </div>
        <div>
          <h2 style={styles.panelH2}>Statement of Outward Supplies</h2>
          <p style={styles.panelP}>The primary return where every registered taxpayer reports invoice-level details of all outward supplies — B2B, B2C, exports, debit/credit notes, and advances received. Your GSTR-1 directly determines your buyer's ITC eligibility in their GSTR-2B.</p>
        </div>
        <div style={styles.tagRow}>
          <span style={styles.rtag("#e8f0fe", "#1e3a5f")}>Invoice-Level Data</span>
          <span style={styles.rtag("#eaf7f0", "#1a6b3c")}>Monthly / Quarterly</span>
          <span style={styles.rtag("#fef9ec", "#92650a")}>Can Be Amended</span>
        </div>
      </div>

      <div style={styles.twoCol}>
        <div style={styles.dataCard}>
          <h3 style={styles.dataCardH3}>What Must Be Reported</h3>
          <CheckList items={GSTR1_FIELDS} />
        </div>
        <div style={styles.dataCard}>
          <h3 style={styles.dataCardH3}>Due Dates & Filing Mode</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Taxpayer Category</th>
                <th style={styles.th}>Frequency</th>
                <th style={styles.th}>Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={styles.td}>Turnover &gt; ₹5 Crore</td><td style={styles.td}>Monthly</td><td style={styles.tdHL}>11th of next month</td></tr>
              <tr><td style={styles.td}>QRMP (≤ ₹5 Crore)</td><td style={styles.td}>Quarterly</td><td style={styles.tdHL}>13th after quarter end</td></tr>
              <tr><td style={{ ...styles.td, borderBottom: "none" }}>IFF (optional)</td><td style={{ ...styles.td, borderBottom: "none" }}>Monthly</td><td style={{ ...styles.tdHL, borderBottom: "none" }}>13th of each month</td></tr>
            </tbody>
          </table>
          <div style={styles.warnBox}>
            <span>⚠️</span>
            <div>
              <h4 style={styles.warnH4}>Late Filing Penalty</h4>
              <p style={styles.warnP}>₹50/day (₹25 CGST + ₹25 SGST) for returns with tax. ₹20/day for NIL returns. Max ₹10,000. If GSTR-3B is unpaid for 2 months, GSTR-1 gets blocked (Rule 59(6)).</p>
            </div>
          </div>
          <div style={styles.infoBox}>
            <span>💡</span>
            <div>
              <h4 style={styles.infoH4}>NIL Return via SMS</h4>
              <p style={{ ...styles.warnP, color: "#1e3a5f" }}>No transactions? File NIL GSTR-1 by SMS — send <strong>NIL R1 [GSTIN] [Tax Period]</strong> to 14409.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.fullCard}>
        <h3 style={styles.fullCardH3}>Step-by-Step: How to File GSTR-1</h3>
        <StepsGrid steps={[
          { num: "01", title: "Login to GST Portal", desc: "Visit gst.gov.in → Services → Returns → Returns Dashboard. Select FY and tax period." },
          { num: "02", title: "Choose GSTR-1", desc: "Click on GSTR-1 tile → Prepare Online or upload via offline JSON/Excel." },
          { num: "03", title: "Upload B2B Invoices (Table 4)", desc: "Add all registered buyer invoices with GSTIN, invoice no., date, taxable value, and tax breakup." },
          { num: "04", title: "Add B2C & Exports", desc: "Enter B2C Large (Table 5), B2C Small (Table 7), and export invoices (Table 6) separately." },
          { num: "05", title: "Credit / Debit Notes", desc: "Add all CDNs in Table 9 (B2B) and Table 10 (B2C). Amendments to previous period invoices go in Table 9A/9B/10." },
          { num: "06", title: "HSN Summary (Table 12)", desc: "From May 2025: fill B2B and B2C sections separately. B2B HSN mandatory at 4/6/8 digits based on turnover." },
        ]} />
      </div>

      <div style={styles.fullCard}>
        <h3 style={styles.fullCardH3}>Expert Tips for GSTR-1 (2025)</h3>
        <TipsGrid tips={[
          { icon: "⚡", title: "e-Invoice Auto-Populates GSTR-1", desc: "If you're e-invoicing eligible (turnover > ₹5 Cr), IRN data auto-flows into GSTR-1. Verify on portal before submission — don't re-enter manually." },
          { icon: "📅", title: "File Early — Your Buyer Depends on It", desc: "Your GSTR-1 must be filed before your buyer can see invoices in GSTR-2B. A single delay affects their cash flow for the entire month." },
          { icon: "✏️", title: "Correct Errors via GSTR-1A", desc: "From July 2025, errors in GSTR-1 that affect GSTR-3B auto-fill must be corrected via GSTR-1A (same period) before filing GSTR-3B." },
        ]} />
      </div>
    </div>
  );
}

function GSTR3BPanel() {
  return (
    <div>
      <div style={styles.panelHdr}>
        <div style={styles.formBadge("#0d5e3f")}>
          GSTR-3B<small style={styles.formBadgeSmall}>FORM</small>
        </div>
        <div>
          <h2 style={styles.panelH2}>Monthly Summary & Tax Payment</h2>
          <p style={styles.panelP}>GSTR-3B is a self-declared summary return where you declare total outward supplies, eligible ITC, and net tax payable — then make the actual GST payment. From July 2025, Table-3 is hard-locked from GSTR-1 data. This return <strong>cannot be revised</strong> once filed.</p>
        </div>
        <div style={styles.tagRow}>
          <span style={styles.rtag("#eaf7f0", "#0d5e3f")}>Tax Payment</span>
          <span style={styles.rtag("#fdf0f0", "#c0392b")}>Cannot Be Revised</span>
          <span style={styles.rtag("#fef9ec", "#92650a")}>Hard-Locked Jul 2025</span>
        </div>
      </div>

      <div style={styles.twoCol}>
        <div style={styles.dataCard}>
          <h3 style={styles.dataCardH3}>What to Declare in GSTR-3B</h3>
          <CheckList items={GSTR3B_FIELDS} />
        </div>
        <div style={styles.dataCard}>
          <h3 style={styles.dataCardH3}>Due Dates by Category (FY 2025–26)</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Taxpayer</th>
                <th style={styles.th}>States</th>
                <th style={styles.th}>Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={styles.td}>Monthly (&gt; ₹5 Cr)</td><td style={styles.td}>All India</td><td style={styles.tdHL}>20th of next month</td></tr>
              <tr><td style={styles.td}>QRMP — Group A</td><td style={styles.td}>15 States (Delhi, MH, GJ…)</td><td style={styles.tdHL}>22nd after quarter end</td></tr>
              <tr><td style={{ ...styles.td, borderBottom: "none" }}>QRMP — Group B</td><td style={{ ...styles.td, borderBottom: "none" }}>Remaining States/UTs</td><td style={{ ...styles.tdHL, borderBottom: "none" }}>24th after quarter end</td></tr>
            </tbody>
          </table>
          <div style={styles.warnBox}>
            <span>🚨</span>
            <div>
              <h4 style={styles.warnH4}>Interest on Late Tax Payment</h4>
              <p style={styles.warnP}><strong>18% p.a.</strong> on unpaid tax from due date. ₹50/day late fee. Filing return without paying tax is treated as non-filing. Continuing non-filing for 6 months triggers cancellation.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.fullCard}>
        <h3 style={styles.fullCardH3}>ITC Offset Order — Mandatory Sequence</h3>
        <StepsGrid steps={[
          { num: "A", title: "Available ITC (from GSTR-2B)", desc: "Sum of IGST + CGST + SGST credit from supplier invoices in your GSTR-2B for the period. Excess beyond GSTR-2B cannot be claimed." },
          { num: "B", title: "Reverse Ineligible ITC", desc: "Block credits under Section 17(5): motor vehicles (except specified), food & beverages, memberships, life/health insurance, works contracts." },
          { num: "C", title: "180-Day Reversal Check", desc: "If you haven't paid your supplier within 180 days from invoice date, reverse that ITC + 18% interest. Re-claim after payment is made." },
          { num: "D", title: "IGST Credit First — Mandatory", desc: "IGST credit sets off IGST first, then CGST, then SGST/UTGST. CGST → CGST, then IGST. SGST → SGST, then IGST. Cross CGST/SGST is not allowed." },
          { num: "E", title: "Pay Balance Tax in Cash", desc: "Remaining liability after ITC offset must be paid via Electronic Cash Ledger through challan (NEFT/RTGS/Internet Banking)." },
          { num: "F", title: "File with DSC or EVC", desc: "Companies and LLPs must use DSC. Individuals, proprietors, and others may use EVC (OTP to registered mobile)." },
        ]} />
      </div>

      <div style={styles.fullCard}>
        <h3 style={styles.fullCardH3}>Expert Tips for GSTR-3B (2025)</h3>
        <TipsGrid tips={[
          { icon: "🔒", title: "Table-3 is Hard-Locked (July 2025)", desc: "Outward supply figures auto-filled from GSTR-1/IFF cannot be manually edited. Fix errors using GSTR-1A before filing GSTR-3B for the same period." },
          { icon: "📊", title: "Claim Only What's in GSTR-2B", desc: "Rule 36(4) restricts ITC to GSTR-2B figures. Excess ITC claimed is wrongful availment — reverse with 24% interest (not 18%)." },
          { icon: "📌", title: "Respond to Rule 88C Notices", desc: "GSTR-1 vs GSTR-3B mismatches auto-generate DRC-01B notices. Respond within the time limit or your GSTR-1 for the next period gets blocked." },
        ]} />
      </div>
    </div>
  );
}

function GSTR2BPanel() {
  return (
    <div>
      <div style={styles.panelHdr}>
        <div style={styles.formBadge("#7a5c0a")}>
          GSTR-2B<small style={styles.formBadgeSmall}>FORM</small>
        </div>
        <div>
          <h2 style={styles.panelH2}>Static ITC Statement & Purchase Reconciliation</h2>
          <p style={styles.panelP}>GSTR-2B is a static, system-generated ITC statement locked on the 14th of each month. Since January 2022, it is the <strong>only valid basis</strong> for ITC claims in GSTR-3B as per Rule 36(4). GSTR-2A is its real-time counterpart — used for reference and supplier follow-up only.</p>
        </div>
        <div style={styles.tagRow}>
          <span style={styles.rtag("#fef9ec", "#92650a")}>Auto-Generated</span>
          <span style={styles.rtag("#eaf7f0", "#0d5e3f")}>ITC Basis (Rule 36(4))</span>
          <span style={styles.rtag("#e8f0fe", "#1e3a5f")}>Locked on 14th</span>
        </div>
      </div>

      <div style={styles.twoCol}>
        <div style={styles.dataCard}>
          <h3 style={styles.dataCardH3}>What GSTR-2B Contains</h3>
          <CheckList items={GSTR2B_FIELDS} />
        </div>
        <div style={styles.dataCard}>
          <h3 style={styles.dataCardH3}>GSTR-2A vs GSTR-2B — Full Comparison</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Feature</th>
                <th style={styles.th}>GSTR-2A</th>
                <th style={styles.th}>GSTR-2B</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={styles.td}>Nature</td><td style={styles.td}>Dynamic (live)</td><td style={styles.tdHL}>Static (locked)</td></tr>
              <tr><td style={styles.td}>Updates</td><td style={styles.td}>Real-time</td><td style={styles.tdHL}>14th each month</td></tr>
              <tr><td style={styles.td}>ITC Claim Basis</td><td style={styles.td}>❌ Reference only</td><td style={styles.tdHL}>✅ Official (Rule 36(4))</td></tr>
              <tr><td style={styles.td}>Covers</td><td style={styles.td}>Current period</td><td style={styles.tdHL}>All pending periods</td></tr>
              <tr><td style={{ ...styles.td, borderBottom: "none" }}>Use For</td><td style={{ ...styles.td, borderBottom: "none" }}>Supplier follow-up</td><td style={{ ...styles.tdHL, borderBottom: "none" }}>3B filing & recon</td></tr>
            </tbody>
          </table>
          <div style={{ ...styles.warnBox, background: "#fef9ec", borderColor: "#f0d98a" }}>
            <span>⚠️</span>
            <div>
              <h4 style={{ ...styles.warnH4, color: "#92650a" }}>Excess ITC = 24% Interest</h4>
              <p style={styles.warnP}>ITC claimed beyond GSTR-2B limits attracts 24% p.a. interest (not 18%). Always reconcile before filing GSTR-3B.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.fullCard}>
        <h3 style={styles.fullCardH3}>How to Reconcile GSTR-2B with Your Purchase Register</h3>
        <StepsGrid steps={[
          { num: "01", title: "Download GSTR-2B", desc: "GST Portal → Returns Dashboard → Select month → GSTR-2B tile → Download Excel or JSON. Available from 14th of following month." },
          { num: "02", title: "Export Purchase Register", desc: "Pull inward supply data from Tally / Zoho / QuickBooks for the same period — GSTIN, invoice no., date, taxable value, tax amount." },
          { num: "03", title: "Match by GSTIN + Invoice No.", desc: "Match each entry by Supplier GSTIN + Invoice Number + Date. Small value differences may still qualify — verify carefully." },
          { num: "04", title: "Identify Mismatches", desc: "In 2B but not in books → verify with supplier. In books but not in 2B → supplier hasn't filed GSTR-1 yet; follow up immediately." },
          { num: "05", title: "Use IMS for Invoice Control", desc: "From Oct 2024, use Invoice Management System on GST portal to accept, reject, or mark invoices pending. Rejected invoices exit GSTR-2B." },
          { num: "06", title: "Reverse Blocked Credits", desc: "Remove Section 17(5) blocked credits, ITC on exempt supplies, and credit from unregistered suppliers before claiming in GSTR-3B." },
        ]} />
      </div>

      <div style={styles.fullCard}>
        <h3 style={styles.fullCardH3}>Expert Tips for GSTR-2B Reconciliation (2025)</h3>
        <TipsGrid tips={[
          { icon: "🤝", title: "Make GSTR-1 Filing Contractual", desc: "Add a clause in vendor agreements requiring timely GSTR-1 filing. Their delay directly costs you ITC — one missed filing means a full month's credit gap." },
          { icon: "🔄", title: "Reconcile Monthly, Not at Year-End", desc: "Year-end reconciliation often surfaces massive ITC reversals with interest. Monthly matching takes 30 minutes but saves lakhs in interest at year-end." },
          { icon: "📱", title: "Use GSTN's Free Offline Tool", desc: "GSTN provides a free Offline Matching Tool to compare your purchase register with GSTR-2B in Excel — no third-party software needed." },
        ]} />
      </div>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────

export default function GSTReturnsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["GSTR-1", "GSTR-3B", "GSTR-2B"];
  const tabSub = ["Outward Supplies", "Summary & Tax Payment", "ITC Statement"];
  const panels = [<GSTR1Panel key="1" />, <GSTR3BPanel key="2" />, <GSTR2BPanel key="3" />];

  return (
    <div style={styles.body}>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroBadge}>Resource Centre · GST Returns 2025–26</div>
          <h1 style={styles.heroH1}>
            Complete Guide to{" "}
            <span style={styles.heroSpan}>GST Returns</span>
          </h1>
          <p style={styles.heroP}>
            GSTR-1, GSTR-3B, and GSTR-2B explained in full — with the latest 2025 rule changes,
            real due dates, penalty calculations, ITC rules, and filing tips for Indian businesses.
          </p>
          <div style={styles.heroUpdate}>
            <strong>🔔 July 2025 Update:&nbsp;</strong>
            GSTR-3B Table-3 is now hard-locked — outward supply figures auto-filled from GSTR-1 cannot be manually edited.
            Correct errors via GSTR-1A before filing 3B.
          </div>
          <div style={styles.heroStats}>
            {[["3+","Return Types Explained"],["₹50/day","Late Fee (with Tax)"],["18% p.a.","Interest on Tax Dues"],["3 Years","Filing Time Limit"]].map(([num, label]) => (
              <div key={label} style={styles.heroStat}>
                <strong style={styles.heroStatNum}>{num}</strong>
                <span style={styles.heroStatLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS A GST RETURN ── */}
      <section style={styles.whatSection}>
        <div style={styles.container}>
          <div style={styles.whatGrid}>
            <div>
              <span style={styles.secLabel}>The Basics</span>
              <h2 style={styles.secTitle}>What is a GST Return?</h2>
              <p style={styles.whatP}>A GST Return is a formal document filed by every registered taxpayer, summarising their business transactions — sales, purchases, output tax collected, and Input Tax Credit (ITC) claimed — for a specific tax period.</p>
              <p style={styles.whatP}>The government uses these returns to cross-verify tax liabilities, validate ITC claims, and ensure compliance. Filing errors, mismatches, or delays can trigger automated notices, ITC reversals, and even suspension of GST registration.</p>
              <p style={styles.whatP}><strong>GSTR-1</strong> captures outward supplies, <strong>GSTR-3B</strong> is where you actually pay tax, and <strong>GSTR-2B</strong> is your auto-generated ITC statement based on supplier filings.</p>
              <div style={styles.pillars}>
                {[
                  ["📋 Who Must File?", "All GST-registered businesses except Composition dealers (who file GSTR-4 annually)."],
                  ["📅 When to File?", "Monthly or quarterly based on turnover under the QRMP scheme (≤ ₹5 Crore)."],
                  ["🔗 Why It Matters?", "Your GSTR-1 directly populates your buyer's ITC statement. Errors cascade across the supply chain."],
                  ["⏰ 3-Year Time Limit", "From July 2025, GST returns cannot be filed after 3 years from the original due date."],
                ].map(([h, p]) => (
                  <div key={h} style={styles.pillarCard}>
                    <h4 style={styles.pillarH4}>{h}</h4>
                    <p style={styles.pillarP}>{p}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={styles.flowBox}>
              <div style={styles.flowTopLine} />
              <p style={{ fontSize: ".7rem", color: "#6b7a8d", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20, fontWeight: 700 }}>How GST Returns Interconnect</p>
              {[
                ["1", "You raise invoices → File GSTR-1", "Report all outward supplies (B2B invoices, exports, credit notes). This auto-populates your buyer's GSTR-2A and locks into GSTR-2B on the 14th."],
                ["2", "Suppliers file their GSTR-1 → View GSTR-2B", "On the 14th of each month, GSTR-2B is locked with eligible ITC from all supplier invoices. This is the only valid basis for ITC claims from Jan 2022 onwards."],
                ["3", "Pay net tax → File GSTR-3B", "Output GST minus ITC from GSTR-2B = tax payable. Pay via Electronic Cash Ledger. From July 2025, Table-3 values are auto-locked from GSTR-1."],
                ["4", "System reconciles → Notices if mismatch", "GSTN auto-compares GSTR-1 vs GSTR-3B via Rule 88C. Mismatches trigger Form DRC-01B notices. No response can block your next GSTR-1 filing."],
              ].map(([num, title, desc], i, arr) => (
                <div key={num} style={i === arr.length - 1 ? styles.flowItemLast : styles.flowItem}>
                  <div style={styles.flowNum}>{num}</div>
                  <div>
                    <h5 style={styles.flowH5}>{title}</h5>
                    <p style={styles.flowP}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RETURNS DEEP DIVE ── */}
      <section style={{ padding: "0 0 80px", background: "#f8fafd" }}>
        <div style={styles.container}>
          <div style={{ paddingTop: 80, marginBottom: 44 }}>
            <span style={styles.secLabel}>Deep Dive</span>
            <h2 style={styles.secTitle}>The Three Core GST Returns</h2>
            <p style={styles.secSub}>Full details, current due dates, penalties, and expert filing tips — updated for 2025–26.</p>
          </div>

          {/* 2025 UPDATE BANNER */}
          <div style={styles.updateBanner}>
            <span style={{ fontSize: "1.4rem", flexShrink: 0, marginTop: 2 }}>⚡</span>
            <div>
              <div style={styles.ubTitle}>KEY 2025 CHANGES — Know Before You File</div>
              {[
                ["GSTR-3B Hard-Lock (July 2025):", "Table-3 outward supplies auto-filled from GSTR-1/IFF are now non-editable. Use GSTR-1A to correct errors before filing 3B."],
                ["Table 3.2 Non-Editable (Nov 2025):", "Inter-state supplies to unregistered persons, composition taxpayers, and UIN holders are system-generated only."],
                ["3-Year Filing Limit (July 2025):", "GST returns (GSTR-1, 3B, 9, etc.) cannot be filed after 3 years from the original due date."],
                ["IMS — Invoice Management System (Oct 2024):", "Taxpayers can now accept, reject, or mark invoices as pending in GSTR-2B via IMS. Import of goods BoE added from Oct 2025."],
                ["GSTR-1 Table 12 Revised (May 2025):", "Separate B2B and B2C HSN sections. HSN mandatory for B2B; optional for B2C if previous year turnover < ₹5 Crore."],
              ].map(([bold, text]) => (
                <div key={bold} style={styles.ubItem}>
                  <span style={styles.ubArrow}>→</span>
                  <span><strong style={{ color: "#7a5a0a" }}>{bold}</strong> {text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TABS */}
          <div style={styles.tabsRow}>
            {tabs.map((t, i) => (
              <button key={t} style={{ ...styles.tabBtn(activeTab === i), borderRight: i < tabs.length - 1 ? "1px solid #dde3ec" : "none" }} onClick={() => setActiveTab(i)}>
                <span style={styles.tabName(activeTab === i)}>{t}</span>
                {tabSub[i]}
              </button>
            ))}
          </div>

          {panels[activeTab]}
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={styles.compareSection}>
        <div style={styles.container}>
          <div style={{ paddingTop: 80, marginBottom: 28 }}>
            <span style={styles.secLabel}>Quick Reference</span>
            <h2 style={styles.secTitle}>GSTR-1 vs GSTR-3B vs GSTR-2B</h2>
            <p style={styles.secSub}>Side-by-side comparison — updated for 2025 rule changes.</p>
          </div>
          <div style={styles.compareWrap}>
            <table style={{ ...styles.table, fontSize: ".85rem" }}>
              <thead>
                <tr>
                  <th style={styles.cmpTh("#f0f4f8", "#9aa5b4")}>Criteria</th>
                  <th style={styles.cmpTh("#e8f0fe", "#1e3a5f")}>GSTR-1</th>
                  <th style={styles.cmpTh("#eaf7f0", "#0d5e3f")}>GSTR-3B</th>
                  <th style={styles.cmpTh("#fef9ec", "#92650a")}>GSTR-2B</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([criteria, c1, c2, c3], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fbfcfe" }}>
                    <td style={styles.cmpTdFirst}>{criteria}</td>
                    <td style={styles.cmpTd}>{c1}</td>
                    <td style={styles.cmpTd}>{c2}</td>
                    <td style={styles.cmpTd}>{c3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION ── */}
      <section style={styles.blogSection}>
        <div style={styles.container}>
          <div style={styles.blogHeader}>
            <span style={styles.secLabel}>Curated Resources</span>
            <h2 style={styles.secTitle}>Latest from GST Portals & Experts</h2>
            <p style={styles.secSub}>Real articles from ClearTax, TaxGuru, and CBIC advisories — updated for FY 2025–26.</p>
          </div>
          <div style={styles.blogGrid}>
            {BLOGS.map((b, i) => (
              <a key={i} href={b.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={styles.blogCard}>
                  <div style={styles.blogBanner(b.bg)}>{b.banner}</div>
                  <div style={styles.blogBody}>
                    <span style={styles.blogTag(b.tagBg, b.tagColor)}>{b.tag}</span>
                    <h3 style={styles.blogH3}>{b.title}</h3>
                    <p style={styles.blogP}>{b.desc}</p>
                    <div style={styles.blogFoot}>
                      <span style={styles.blogMeta}>⏱ {b.time}</span>
                      <span style={styles.blogLink}>Read Article ↗</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={styles.faqSection}>
        <div style={styles.container}>
          <span style={styles.secLabel}>FAQs</span>
          <h2 style={styles.secTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqGrid}>
            {FAQS.map((f, i) => (
              <div key={i} style={styles.faqCard}>
                <h4 style={styles.faqH4}>
                  <span style={styles.faqQmark}>Q.</span>
                  {f.q}
                </h4>
                <p style={styles.faqP}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={styles.ctaWrap}>
            <div style={styles.ctaTopLine} />
            <h2 style={styles.ctaH2}>Stay GST Compliant.<br />File On Time, Every Time.</h2>
            <p style={styles.ctaP}>Our GST experts handle your GSTR-1, GSTR-3B, and reconciliation — so you never miss a deadline or lose ITC again.</p>
            <div style={styles.ctaBtns}>
              <a href="#" style={styles.btnPrimary}>Get Expert Help →</a>
              <a href="#" style={styles.btnGhost}>Download 2025 Due Date Calendar</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
