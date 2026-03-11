// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function InputTaxCreditBlog() {
//   return (
//     <div className="bg-white min-h-screen">

//       {/* HERO SECTION */}
//       <div className="relative h-[60vh] w-full">
//         <Image
//           src="/images/headeritc.png"
//           alt="Input Tax Credit"
//           fill
//           className="object-cover"
//           priority
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         <div className="absolute inset-0 flex items-center justify-center text-center px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
//               Complete Guide to Input Tax Credit (ITC)
//             </h1>
//             <p className="text-lg text-gray-200 max-w-2xl mx-auto">
//               Understand how ITC reduces your GST liability and improves cash flow legally.
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

//           {/* WHAT IS ITC */}
//           <h2 className="text-3xl font-bold text-slate-900 mb-6">
//             What is Input Tax Credit?
//           </h2>

//           <p className="text-lg text-slate-600 leading-relaxed mb-10">
//             Input Tax Credit (ITC) allows businesses to reduce the GST paid
//             on purchases from the GST payable on sales. This prevents double
//             taxation and improves working capital.
//           </p>

//           {/* EXAMPLE IMAGE */}
//           <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl mb-12">
//             <Image
//               src="/images/ict.png"
//               alt="ITC Example"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* HOW IT WORKS */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-semibold mb-4">How ITC Works</h3>
//             <p className="text-slate-600 leading-relaxed">
//               Suppose you purchase goods worth ₹1,00,000 and pay ₹18,000 GST.
//               Later, you sell goods worth ₹2,00,000 and collect ₹36,000 GST.
//               You only pay the difference (₹18,000) to the government.
//             </p>
//           </div>

//           {/* CONDITIONS */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-semibold mb-4">Conditions to Claim ITC</h3>
//             <ul className="list-disc pl-6 text-slate-600 space-y-2">
//               <li>Valid tax invoice</li>
//               <li>Supplier must file GSTR-1</li>
//               <li>Goods or services received</li>
//               <li>GST must be paid to the government</li>
//               <li>You must file GSTR-3B</li>
//             </ul>
//           </div>

//           {/* BLOCKED CREDITS */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-semibold mb-4">Blocked Credits</h3>
//             <ul className="list-disc pl-6 text-slate-600 space-y-2">
//               <li>Personal expenses</li>
//               <li>Motor vehicles (mostly restricted)</li>
//               <li>Food & beverages</li>
//               <li>Club memberships</li>
//               <li>Construction of buildings</li>
//             </ul>
//           </div>

//           {/* CTA SECTION */}
//           <div className="mt-16 bg-gradient-to-r from-[#1b69a1] to-indigo-600 text-white p-10 rounded-2xl text-center shadow-2xl">
//             <h3 className="text-2xl font-bold mb-4">
//               Manage ITC Smartly with GSTInsight
//             </h3>
//             <p className="mb-6 text-gray-200">
//               Automate reconciliation, avoid mismatches and eliminate compliance risks.
//             </p>
//             <button className="bg-white text-[#1b69a1] px-8 py-3 rounded-full font-bold hover:scale-105 transition">
//               Try Dashboard
//             </button>
//           </div>

//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

// ─── SHARED STYLES (same theme as GST Returns page) ──────────────────
const s = {
  body: { fontFamily: "'Inter','Segoe UI',sans-serif", background: "#fff", color: "#0f1923", lineHeight: "1.7", margin: 0, padding: 0 },
  container: { maxWidth: 1140, margin: "0 auto", padding: "0 28px" },

  // HERO
  hero: { background: "#0a1628", padding: "90px 0 80px", position: "relative", overflow: "hidden" },
  heroBadge: { display: "inline-block", background: "#1e3a5f", color: "#7eb8f7", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 4, marginBottom: 24 },
  heroH1: { fontFamily: "'Georgia',serif", fontSize: "clamp(2.2rem,5vw,3.8rem)", lineHeight: 1.12, marginBottom: 20, maxWidth: 780, color: "#fff", fontWeight: 700 },
  heroSpan: { color: "#7eb8f7" },
  heroP: { fontSize: "1rem", color: "#8fa3be", maxWidth: 580, marginBottom: 36, fontWeight: 300, lineHeight: 1.75 },
  heroUpdate: { display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,183,0,.08)", border: "1px solid rgba(255,183,0,.2)", padding: "10px 18px", borderRadius: 8, fontSize: ".82rem", color: "#ffd666", marginBottom: 48 },
  heroStats: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 14, overflow: "hidden", maxWidth: 720 },
  heroStat: { background: "#0d1f3c", padding: "22px 16px", textAlign: "center" },
  heroStatNum: { display: "block", fontFamily: "'Georgia',serif", fontSize: "1.9rem", fontWeight: 700, color: "#7eb8f7", marginBottom: 4 },
  heroStatLabel: { fontSize: ".73rem", color: "#6b7a8d", letterSpacing: .3 },

  // LABELS & TITLES
  secLabel: { display: "block", fontSize: ".7rem", fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "#1e3a5f", marginBottom: 10 },
  secTitle: { fontFamily: "'Georgia',serif", fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", lineHeight: 1.15, marginBottom: 14, color: "#0a1628" },
  secSub: { color: "#6b7a8d", fontSize: ".95rem", maxWidth: 540, fontWeight: 400, lineHeight: 1.7 },

  // CARDS & CONTAINERS
  card: { background: "#fff", border: "1px solid #dde3ec", borderRadius: 14, padding: 24 },
  cardSm: { background: "#f8fafd", border: "1px solid #dde3ec", borderRadius: 10, padding: 18 },
  cardBlue: { background: "#0a1628", borderRadius: 16, padding: 32, position: "relative", overflow: "hidden" },
  cardH: { fontSize: ".7rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#1e3a5f", marginBottom: 18, paddingBottom: 12, borderBottom: "1px solid #dde3ec" },

  // GRIDS
  twoCol: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 },
  threeCol: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 },
  fourCol: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 },
  stepsGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 },

  // CHECK LIST
  checkList: { listStyle: "none", padding: 0 },
  checkItem: { display: "flex", gap: 10, alignItems: "flex-start", padding: "9px 0", borderBottom: "1px solid #f0f4f8", fontSize: ".86rem", color: "#4a5568" },
  checkDot: { width: 18, height: 18, borderRadius: 4, background: "#e8f0fe", border: "1px solid #c5d5f0", flexShrink: 0, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#1e3a5f", fontWeight: 700 },
  xDot: { width: 18, height: 18, borderRadius: 4, background: "#fdf0f0", border: "1px solid #f5c6c6", flexShrink: 0, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#c0392b", fontWeight: 700 },

  // TABLE
  table: { width: "100%", borderCollapse: "collapse", fontSize: ".85rem" },
  th: { padding: "9px 13px", background: "#f0f4f8", color: "#6b7a8d", fontWeight: 700, fontSize: ".72rem", letterSpacing: .5, textTransform: "uppercase", textAlign: "left", borderBottom: "2px solid #dde3ec" },
  td: { padding: "11px 13px", borderBottom: "1px solid #f0f4f8", color: "#4a5568" },
  tdBold: { padding: "11px 13px", borderBottom: "1px solid #f0f4f8", color: "#0a1628", fontWeight: 700 },
  tdBlue: { padding: "11px 13px", borderBottom: "1px solid #f0f4f8", color: "#1e3a5f", fontWeight: 700 },
  tdRed: { padding: "11px 13px", borderBottom: "1px solid #f0f4f8", color: "#c0392b", fontWeight: 700 },
  tdGreen: { padding: "11px 13px", borderBottom: "1px solid #f0f4f8", color: "#0d5e3f", fontWeight: 700 },

  // ALERT BOXES
  warnBox: { background: "#fff8f8", border: "1px solid #f5c6c6", borderRadius: 10, padding: 16, display: "flex", gap: 12, marginTop: 14 },
  warnH4: { fontSize: ".82rem", fontWeight: 700, color: "#c0392b", marginBottom: 3 },
  infoBox: { background: "#f0f7ff", border: "1px solid #c5d5f0", borderRadius: 10, padding: 16, display: "flex", gap: 12, marginTop: 10 },
  infoH4: { fontSize: ".82rem", fontWeight: 700, color: "#1e3a5f", marginBottom: 3 },
  greenBox: { background: "#eaf7f0", border: "1px solid #a8d9bc", borderRadius: 10, padding: 16, display: "flex", gap: 12, marginTop: 10 },
  greenH4: { fontSize: ".82rem", fontWeight: 700, color: "#0d5e3f", marginBottom: 3 },
  amberBox: { background: "#fef9ec", border: "1px solid #f0d98a", borderRadius: 10, padding: 16, display: "flex", gap: 12, marginTop: 10 },
  amberH4: { fontSize: ".82rem", fontWeight: 700, color: "#92650a", marginBottom: 3 },
  alertP: { fontSize: ".8rem", color: "#4a5568", lineHeight: 1.55 },

  // STEP CARD
  stepCard: { border: "1px solid #dde3ec", background: "#f8fafd", borderRadius: 10, padding: 18 },
  stepNum: { width: 28, height: 28, borderRadius: 6, background: "#0a1628", color: "#7eb8f7", fontSize: ".72rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 },
  stepH4: { fontSize: ".85rem", fontWeight: 700, color: "#0a1628", marginBottom: 5 },
  stepP: { fontSize: ".78rem", color: "#6b7a8d", lineHeight: 1.5 },

  // TIP CARD
  tipCard: (bg, border) => ({ padding: 18, borderRadius: 10, display: "flex", gap: 12, background: bg, border: `1px solid ${border}` }),
  tipH4: { fontSize: ".83rem", fontWeight: 700, color: "#0a1628", marginBottom: 4 },
  tipP: { fontSize: ".78rem", color: "#4a5568", lineHeight: 1.45 },

  // FLOW (dark box)
  flowTopLine: { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,#7eb8f7,transparent)" },
  flowItem: { display: "flex", gap: 16, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,.08)" },
  flowItemLast: { display: "flex", gap: 16, padding: "14px 0" },
  flowNum: { width: 32, height: 32, borderRadius: 8, background: "#1e3a5f", border: "1px solid #2d5a9e", color: "#7eb8f7", fontWeight: 800, fontSize: ".75rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  flowH5: { fontSize: ".88rem", fontWeight: 700, color: "#fff", marginBottom: 3 },
  flowP: { fontSize: ".8rem", color: "#8fa3be", lineHeight: 1.5 },

  // TABS
  tabsRow: { display: "flex", border: "1px solid #dde3ec", borderRadius: 12, overflow: "hidden", marginBottom: 40, background: "#f8fafd" },
  tabBtn: (active) => ({ flex: 1, padding: "16px 14px", background: active ? "#0a1628" : "none", border: "none", borderRight: "1px solid #dde3ec", cursor: "pointer", fontFamily: "'Inter',sans-serif", fontSize: ".83rem", fontWeight: 500, color: active ? "#7eb8f7" : "#6b7a8d", transition: "all .2s", textAlign: "center" }),
  tabName: (active) => ({ display: "block", fontFamily: "'Georgia',serif", fontWeight: 700, fontSize: "1rem", marginBottom: 3, color: active ? "#fff" : "#0a1628" }),

  // PANEL HEADER
  panelHdr: { display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center", background: "#f8fafd", border: "1px solid #dde3ec", borderRadius: 16, padding: 28, marginBottom: 28, position: "relative", overflow: "hidden" },
  formBadge: (color) => ({ fontFamily: "'Georgia',serif", fontSize: "1.3rem", fontWeight: 700, border: `2px solid ${color}`, borderRadius: 12, padding: "12px 16px", color: color, textAlign: "center", minWidth: 110, lineHeight: 1.2 }),
  formBadgeSmall: { display: "block", fontSize: ".58rem", color: "#9aa5b4", fontWeight: 400, letterSpacing: 1, marginTop: 4, fontFamily: "'Inter',sans-serif" },
  panelH2: { fontFamily: "'Georgia',serif", fontSize: "1.45rem", fontWeight: 700, marginBottom: 6, color: "#0a1628" },
  panelP: { fontSize: ".88rem", color: "#4a5568", lineHeight: 1.65 },
  tagRow: { display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" },
  rtag: (bg, color) => ({ display: "inline-block", padding: "5px 12px", borderRadius: 20, fontSize: ".7rem", fontWeight: 700, letterSpacing: .5, textTransform: "uppercase", background: bg, color: color, border: `1px solid ${color}33` }),

  // UPDATE BANNER
  updateBanner: { background: "rgba(255,183,0,.04)", border: "1px solid rgba(255,183,0,.18)", borderRadius: 12, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 40 },
  ubTitle: { fontSize: ".87rem", fontWeight: 700, color: "#b8860b", marginBottom: 8 },
  ubItem: { fontSize: ".82rem", color: "#5a6474", marginBottom: 6, display: "flex", gap: 10, lineHeight: 1.55 },
  ubArrow: { color: "#b8860b", fontWeight: 700, flexShrink: 0 },

  // BLOG
  blogCard: { background: "#fff", border: "1px solid #dde3ec", borderRadius: 14, overflow: "hidden", transition: "transform .25s,box-shadow .25s", cursor: "pointer" },
  blogBanner: (bg) => ({ height: 110, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.2rem", background: bg }),
  blogBody: { padding: 20 },
  blogTag: (bg, color) => ({ display: "inline-block", fontSize: ".68rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", padding: "3px 10px", borderRadius: 4, marginBottom: 10, background: bg, color: color }),
  blogH3: { fontFamily: "'Georgia',serif", fontSize: ".98rem", fontWeight: 700, lineHeight: 1.35, marginBottom: 8, color: "#0a1628" },
  blogP: { fontSize: ".8rem", color: "#6b7a8d", lineHeight: 1.6, marginBottom: 14 },
  blogFoot: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  blogMeta: { fontSize: ".73rem", color: "#9aa5b4" },
  blogLink: { fontSize: ".79rem", fontWeight: 700, color: "#1e3a5f", textDecoration: "none" },

  // FAQ
  faqGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 40 },
  faqCard: { background: "#f8fafd", border: "1px solid #dde3ec", borderRadius: 12, padding: 22 },
  faqH4: { fontSize: ".9rem", fontWeight: 700, color: "#0a1628", marginBottom: 10, display: "flex", gap: 10 },
  faqQmark: { color: "#1e3a5f", fontFamily: "'Georgia',serif", fontWeight: 700, flexShrink: 0 },
  faqP: { fontSize: ".84rem", color: "#4a5568", lineHeight: 1.65, paddingLeft: 22 },

  // CTA
  ctaWrap: { background: "#0a1628", borderRadius: 24, padding: 64, textAlign: "center", position: "relative", overflow: "hidden" },
  ctaTopLine: { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,#7eb8f7,transparent)" },
  ctaH2: { fontFamily: "'Georgia',serif", fontSize: "2.2rem", fontWeight: 700, color: "#fff", marginBottom: 14 },
  ctaP: { color: "#8fa3be", fontSize: ".97rem", maxWidth: 460, margin: "0 auto 36px" },
  ctaBtns: { display: "flex", gap: 14, justifyContent: "center" },
  btnPrimary: { background: "#1e3a5f", color: "#7eb8f7", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: ".9rem", border: "1px solid #2d5a9e", display: "inline-block" },
  btnGhost: { background: "transparent", color: "#fff", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: ".9rem", border: "1px solid rgba(255,255,255,.2)", display: "inline-block" },
};

// ─── REUSABLE COMPONENTS ────────────────────────────────────────────

function CheckList({ items, cross = false }) {
  return (
    <ul style={s.checkList}>
      {items.map(([bold, rest], i) => (
        <li key={i} style={{ ...s.checkItem, borderBottom: i === items.length - 1 ? "none" : "1px solid #f0f4f8" }}>
          <span style={cross ? s.xDot : s.checkDot}>{cross ? "✕" : "✓"}</span>
          <span><strong style={{ color: "#0a1628" }}>{bold}</strong>{rest ? " — " + rest : ""}</span>
        </li>
      ))}
    </ul>
  );
}

function StepsGrid({ steps, cols = 3 }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols},1fr)`, gap: 14 }}>
      {steps.map((step, i) => (
        <div key={i} style={s.stepCard}>
          <div style={s.stepNum}>{step.num}</div>
          <h4 style={s.stepH4}>{step.title}</h4>
          <p style={s.stepP}>{step.desc}</p>
        </div>
      ))}
    </div>
  );
}

function TipsRow({ tips }) {
  const configs = [
    { bg: "#f0f4ff", border: "#c5d5f0" },
    { bg: "#eaf7f0", border: "#a8d9bc" },
    { bg: "#fef9ec", border: "#f0d98a" },
  ];
  return (
    <div style={s.threeCol}>
      {tips.map((t, i) => (
        <div key={i} style={s.tipCard(configs[i % 3].bg, configs[i % 3].border)}>
          <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{t.icon}</span>
          <div>
            <h4 style={s.tipH4}>{t.title}</h4>
            <p style={s.tipP}>{t.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────

const CONDITIONS = [
  ["Valid Tax Invoice or Debit Note", "You must hold a GST-compliant tax invoice from a registered supplier, or a valid debit note. Without an invoice, ITC cannot be claimed — even if GST was actually paid."],
  ["Supplier Must File GSTR-1", "The supplier's invoice must appear in your GSTR-2B. If the supplier fails to file GSTR-1, the invoice won't appear and you cannot claim ITC for that period."],
  ["Goods or Services Must Be Received", "ITC can be claimed only when goods are actually delivered or services are actually rendered. For goods in instalments, ITC is allowed when the last instalment is received."],
  ["GST Must Be Paid to the Government", "The supplier must have paid the collected GST to the government. If supplier defaults, buyer may have to reverse ITC by 30th November of the following FY."],
  ["GSTR-3B Must Be Filed", "You must have filed your GSTR-3B return for the tax period. ITC can only be availed in the return — no return filed means no ITC claim for that period."],
  ["Invoice in GSTR-2B (Rule 36(4))", "From January 2022, provisional ITC of 5% is no longer available. ITC claims in GSTR-3B must strictly match invoices appearing in GSTR-2B. No GSTR-2B entry = no ITC."],
  ["Used for Business Purposes Only", "ITC is allowed only for goods/services used in furtherance of business. Personal consumption is not eligible — even partially personal use requires proportionate reversal."],
  ["Claim Within Time Limit", "ITC on an invoice must be claimed before the earlier of: (a) filing GSTR-9 annual return for that FY, or (b) 30th November of the following FY. For FY 2024–25, the last date is 30th November 2025."],
];

const BLOCKED = [
  ["Motor Vehicles (≤13 seats)", "Cars, bikes, SUVs — blocked unless used for resale, transport of passengers (taxi/bus), driving school, or goods transport. ITC on insurance & repairs also blocked for these."],
  ["Vessels, Ships & Aircraft", "Blocked unless used for passenger transport service, goods transportation, or training schools for flying/navigating."],
  ["Food, Beverages & Outdoor Catering", "Meals, catering, outdoor parties — blocked unless providing the same category of taxable supply (e.g., a restaurant chain)."],
  ["Health & Fitness Services", "Gym membership, spa, beauty services, health services — blocked unless providing the same category of taxable supply."],
  ["Club Membership Fees", "Memberships of clubs, sports facilities, or recreational centres — fully blocked. No exceptions."],
  ["Life Insurance & Health Insurance", "Blocked unless mandated by law (e.g., ESIC, group insurance required under labour laws)."],
  ["Works Contract Services (Construction)", "GST on construction, renovation, or repair of immovable property (buildings) is blocked. Exception: if you are a builder/developer selling units after construction."],
  ["Construction of Immovable Property", "ITC on materials or services used in the construction of own office/factory that is capitalised is blocked. Plant and machinery is allowed (not buildings)."],
  ["Goods/Services for Personal Use", "Anything bought for personal consumption — fully blocked. Partial personal use requires proportionate reversal under Rules 42 & 43."],
  ["Goods Lost, Stolen, Destroyed or Gifted", "ITC must be reversed if goods are lost, stolen, destroyed, written off, or given as free samples or gifts to anyone."],
  ["CSR Expenditure", "GST paid on Corporate Social Responsibility (CSR) expenses under Section 135 of the Companies Act is blocked from April 2023 onwards."],
  ["Fraud / Suppression Demands (up to FY 2023–24)", "ITC blocked on demands under Section 74 (fraud, willful misstatement) for periods up to FY 2023–24. Budget 2025 proposed restricting this block to pre-FY 2024 demands only."],
];

const ALLOWED_EXCEPTIONS = [
  ["Motor Vehicles Used for Taxi / Cab Services", "ITC allowed if vehicle is used for transporting passengers commercially."],
  ["Motor Vehicles for Driving Schools", "Schools teaching driving are eligible to claim ITC on vehicles used for training."],
  ["Motor Vehicles for Goods Transport", "Trucks, lorries, and vehicles used for transporting goods qualify for ITC."],
  ["Buses for Employee Transport (>13 seats)", "If the employer provides bus service with seating capacity exceeding 13, ITC is allowed."],
  ["Insurance if Mandated by Law", "Group accident insurance or insurance required by law (e.g., Workmen's Compensation Act) is eligible for ITC."],
  ["Construction by Builders / Developers", "Builders constructing units for sale can claim ITC on works contract, construction materials, and services."],
  ["Plant and Machinery (Not Buildings)", "ITC on plant and machinery used in the course of business is fully allowed. Budget 2025 clarified 'plant and machinery' definition."],
  ["Food / Catering by Same-Category Business", "A hotel or restaurant providing food services can claim ITC on food/catering inputs used in making taxable supplies."],
];

const REVERSAL_SCENARIOS = [
  { num: "01", title: "Non-Payment to Supplier (Rule 37)", desc: "If you don't pay your supplier within 180 days from invoice date, reverse ITC + 18% interest. ITC can be re-claimed after payment is made to the supplier." },
  { num: "02", title: "Supplier Defaults on GST Payment", desc: "If your supplier collects GST but fails to pay it to the government by 30th September of the following FY, you must reverse the ITC by 30th November. Re-claim once supplier pays." },
  { num: "03", title: "Partial Use for Exempt Supplies (Rule 42)", desc: "If inputs or input services are used for both taxable and exempt supplies, ITC must be reversed proportionately. Formula: ITC × (Exempt Turnover / Total Turnover)." },
  { num: "04", title: "Partial Use for Personal Purposes (Rule 43)", desc: "If capital goods are partly used for personal/exempt purposes, proportionate ITC reversal is mandatory. Calculate annually using the prescribed formula." },
  { num: "05", title: "Credit Note Issued by Supplier", desc: "When your supplier issues a credit note (reducing their tax liability), you must reverse the corresponding ITC already availed. Applicable from Budget 2025 — Section 34 amendment." },
  { num: "06", title: "Capital Goods — Depreciation Claimed", desc: "If depreciation is claimed on the tax portion of capital goods under the Income Tax Act, ITC on that portion cannot be claimed under GST. Choose one or the other." },
];

const ITC_OFFSET_ORDER = [
  { from: "IGST Credit", to: ["IGST Output Tax", "CGST Output Tax", "SGST/UTGST Output Tax"], color: "#1e3a5f" },
  { from: "CGST Credit", to: ["CGST Output Tax", "IGST Output Tax", "⛔ Cannot offset SGST"], color: "#0d5e3f" },
  { from: "SGST Credit", to: ["SGST Output Tax", "IGST Output Tax", "⛔ Cannot offset CGST"], color: "#92650a" },
];

const COMPARE_ITC = [
  ["Eligible for ITC?", "Yes — all conditions met", "No — Section 17(5) blocked", "Conditional — partial reversal"],
  ["Example", "Raw materials, office supplies, professional services", "Company car, gym membership, building construction", "Goods partly for business + personal use"],
  ["GSTR-3B Table", "Table 4(A) — claim here", "Table 4(B) — reverse here", "Table 4(B) — proportionate reversal"],
  ["Interest if Wrong Claim", "N/A", "24% p.a. from date of claim", "24% p.a. on excess amount"],
  ["IMS Action", "Accept invoice in IMS", "Reject / Mark pending in IMS", "Accept with proportionate claim"],
];

const BLOGS = [
  { banner: "📋", bg: "#e8f0fe", tag: "Conditions to Claim", tagBg: "#e8f0fe", tagColor: "#1e3a5f", title: "ITC Under GST: 8 Conditions You Must Satisfy Before Claiming Credit", desc: "Section 16 lays down strict conditions — from holding a valid invoice to supplier GSTR-2B matching. One missed condition and your entire ITC claim becomes wrongful availment.", time: "7 min · ClearTax", url: "https://cleartax.in/s/input-tax-credit-under-gst" },
  { banner: "🚫", bg: "#fdf0f0", tag: "Blocked Credits", tagBg: "#fdf0f0", tagColor: "#c0392b", title: "Section 17(5) CGST: Complete List of Blocked Credits & 2025 Budget Amendments", desc: "The full 11-clause breakdown of blocked ITC — motor vehicles, food, construction, memberships and more. Budget 2025 amended Sections 17(5)(d) and 17(5)(i). Know what changed.", time: "9 min · ClearTax", url: "https://cleartax.in/s/section-175-of-cgst-act" },
  { banner: "🔄", bg: "#eaf7f0", tag: "ITC Reversal", tagBg: "#eaf7f0", tagColor: "#0d5e3f", title: "ITC Reversal Under GST: When to Reverse, How to Calculate & Where to Report", desc: "Rule 37, 37A, 42, and 43 — each triggers a different reversal scenario. From non-payment to supplier to proportionate exempt supply reversal. Complete guide with examples.", time: "8 min · ClearTax", url: "https://cleartax.in/s/reversal-input-tax-credit" },
  { banner: "📊", bg: "#fef9ec", tag: "GSTR-2B & ITC", tagBg: "#fef9ec", tagColor: "#92650a", title: "How GSTR-2B Determines Your ITC Eligibility — Rule 36(4) Explained for 2025", desc: "From January 2022, provisional ITC of 5% is gone. GSTR-2B is now the only basis for ITC claims. IMS changes from October 2024 also affect how your GSTR-2B is built.", time: "8 min · ClearTax", url: "https://cleartax.in/s/gstr-2b" },
  { banner: "⏰", bg: "#f0f4ff", tag: "Time Limit", tagBg: "#e8f0fe", tagColor: "#1e3a5f", title: "ITC Time Limit: Last Date to Claim ITC for FY 2024–25 is 30th November 2025", desc: "Section 16(4) strictly limits ITC claims to before the annual return filing or 30th November, whichever is earlier. After that date, the credit is permanently lost.", time: "5 min · TaxGuru", url: "https://taxguru.in/goods-and-service-tax/itc-time-limit-annual-return-gst.html" },
  { banner: "⚠️", bg: "#fdf0f0", tag: "Common Mistakes", tagBg: "#fdf0f0", tagColor: "#c0392b", title: "Top 7 ITC Mistakes That Trigger GST Notices — and How to Avoid Them", desc: "Claiming ITC beyond GSTR-2B, not reversing 180-day non-payment ITC, ignoring exempt supply reversals — these are the most common errors that invite scrutiny notices.", time: "7 min · TaxGuru", url: "https://taxguru.in/goods-and-service-tax/top-itc-mistakes-gst-notices.html" },
];

const FAQS = [
  { q: "Can I claim ITC if my supplier hasn't filed GSTR-1?", a: "No. From January 2022, provisional ITC is no longer available. Your supplier's invoice must appear in your GSTR-2B for you to claim ITC. If the supplier doesn't file GSTR-1, the invoice won't appear in GSTR-2B and you lose ITC for that period. Follow up with non-compliant suppliers immediately." },
  { q: "What is the last date to claim ITC for FY 2024–25?", a: "The last date to claim ITC for FY 2024–25 is 30th November 2025 or the date of filing GSTR-9 annual return for FY 2024–25, whichever is earlier. After this date, the credit is permanently lost and cannot be claimed in any subsequent return." },
  { q: "What is the interest rate if I wrongfully claim blocked credit?", a: "If you claim ITC that is blocked under Section 17(5) or claim excess ITC beyond GSTR-2B, interest is charged at 24% per annum (not 18%) from the date of wrong availment to the date of reversal. Additionally, you may receive SCN (Show Cause Notice) from GST officers." },
  { q: "Can I claim ITC on a company car used by my employee?", a: "Generally no — ITC on motor vehicles with seating capacity of 13 or less is blocked under Section 17(5)(a). However, if the vehicle is used for transporting passengers (taxi/cab service), goods transport, or at a driving school — ITC is allowed. ITC on insurance and repairs is also blocked in most cases." },
  { q: "What happens if I don't pay my supplier within 180 days?", a: "Under Rule 37, you must reverse the ITC claimed on that invoice along with applicable interest at 18% p.a. from the date of original claim. However, once you make the payment to the supplier, you can re-claim the ITC in the GSTR-3B for the period in which payment is made." },
  { q: "Can ITC be claimed on construction of own office building?", a: "No. ITC on construction, renovation, or repair of immovable property (buildings) is blocked under Section 17(5)(c) and (d). However, ITC is allowed on plant and machinery. Budget 2025 amended Section 17(5)(d) to replace 'plant or machinery' with 'plant and machinery' to align with the explanation." },
];

// ─── TAB PANELS ─────────────────────────────────────────────────────

function ConditionsPanel() {
  return (
    <div>
      <div style={s.panelHdr}>
        <div style={s.formBadge("#1e3a5f")}>
          Section 16<small style={s.formBadgeSmall}>CGST ACT</small>
        </div>
        <div>
          <h2 style={s.panelH2}>Conditions to Claim ITC — Section 16</h2>
          <p style={s.panelP}>Section 16 of the CGST Act lays down 8 conditions that must <strong>all</strong> be met before claiming Input Tax Credit. Failure to satisfy even one condition makes the ITC claim wrongful and liable for reversal with 24% interest. From January 2022, provisional ITC of 5% is no longer available — GSTR-2B match is mandatory.</p>
        </div>
        <div style={s.tagRow}>
          <span style={s.rtag("#e8f0fe", "#1e3a5f")}>Section 16 CGST</span>
          <span style={s.rtag("#eaf7f0", "#0d5e3f")}>All 8 Must Be Met</span>
          <span style={s.rtag("#fdf0f0", "#c0392b")}>24% Interest if Wrong</span>
        </div>
      </div>

      <div style={s.twoCol}>
        <div style={s.card}>
          <h3 style={s.cardH}>All 8 Conditions (Section 16)</h3>
          <CheckList items={CONDITIONS} />
        </div>
        <div>
          <div style={s.card}>
            <h3 style={s.cardH}>ITC Time Limits — FY-wise</h3>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>Financial Year</th>
                  <th style={s.th}>Last Date to Claim ITC</th>
                  <th style={s.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={s.td}>FY 2022–23</td>
                  <td style={s.tdRed}>30 Nov 2023 or GSTR-9 filing</td>
                  <td style={s.tdRed}>⛔ Expired</td>
                </tr>
                <tr>
                  <td style={s.td}>FY 2023–24</td>
                  <td style={s.tdRed}>30 Nov 2024 or GSTR-9 filing</td>
                  <td style={s.tdRed}>⛔ Expired</td>
                </tr>
                <tr>
                  <td style={s.td}>FY 2024–25</td>
                  <td style={s.tdBlue}>30 Nov 2025 or GSTR-9 filing</td>
                  <td style={s.tdBlue}>⚠️ Check Now</td>
                </tr>
                <tr>
                  <td style={{ ...s.td, borderBottom: "none" }}>FY 2025–26</td>
                  <td style={{ ...s.tdGreen, borderBottom: "none" }}>30 Nov 2026 or GSTR-9 filing</td>
                  <td style={{ ...s.tdGreen, borderBottom: "none" }}>✅ Active</td>
                </tr>
              </tbody>
            </table>
            <div style={s.warnBox}>
              <span>🚨</span>
              <div>
                <h4 style={s.warnH4}>ITC for FY 2024–25 — Deadline was 30 Nov 2025</h4>
                <p style={s.alertP}>If you missed any invoices for FY 2024–25, the ITC is permanently lost. No extension has been notified. File any pending GSTR-3B amendments immediately for FY 2025–26 purchases.</p>
              </div>
            </div>
          </div>
          <div style={{ ...s.card, marginTop: 20 }}>
            <h3 style={s.cardH}>Documents Needed to Support ITC</h3>
            <CheckList items={[
              ["Tax Invoice", "GSTIN, invoice no., date, taxable value, GST rate, CGST/SGST/IGST amounts — mandatory"],
              ["Debit Note", "Issued by supplier for upward revision of price/tax. Treated like an invoice for ITC."],
              ["Bill of Entry", "For import of goods. Customs duty-paid IGST qualifies as ITC."],
              ["ISD Invoice/Credit Note", "Issued by Input Service Distributor (ISD) to distribute ITC among branches."],
              ["Supplier's GSTR-1 Filing", "Invoice must appear in your GSTR-2B. Soft copy of invoice alone is not enough."],
            ]} />
          </div>
        </div>
      </div>

      <div style={{ ...s.card, marginBottom: 20 }}>
        <h3 style={{ fontFamily: "'Georgia',serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: 22, color: "#0a1628" }}>Provisional ITC: Before vs After January 2022</h3>
        <div style={s.twoCol}>
          <div>
            <div style={{ ...s.cardSm, borderLeft: "3px solid #c0392b", marginBottom: 12 }}>
              <p style={{ fontSize: ".8rem", color: "#6b7a8d", fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Before 1 Jan 2022 (Old Rule)</p>
              <p style={{ fontSize: ".85rem", color: "#4a5568", lineHeight: 1.6 }}>You could claim ITC up to <strong>105% of GSTR-2B</strong> — i.e., actual GSTR-2B ITC plus an extra 5% as provisional credit for invoices not yet reflected in GSTR-2B. This gave flexibility for delayed supplier filings.</p>
            </div>
          </div>
          <div>
            <div style={{ ...s.cardSm, borderLeft: "3px solid #0d5e3f", marginBottom: 12 }}>
              <p style={{ fontSize: ".8rem", color: "#6b7a8d", fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>After 1 Jan 2022 (Current Rule)</p>
              <p style={{ fontSize: ".85rem", color: "#4a5568", lineHeight: 1.6 }}>Provisional ITC of 5% is <strong>no longer available</strong>. ITC claims in GSTR-3B must exactly match invoices in GSTR-2B. If an invoice is not in GSTR-2B, you must wait for the supplier to file — or lose that ITC.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...s.card, marginBottom: 20 }}>
        <h3 style={{ fontFamily: "'Georgia',serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: 22, color: "#0a1628" }}>Expert Tips — Maximising Eligible ITC</h3>
        <TipsRow tips={[
          { icon: "📅", title: "Reconcile GSTR-2B Monthly", desc: "Don't wait until year-end. Match every purchase invoice against GSTR-2B monthly to catch supplier non-filings before the 30th November time limit." },
          { icon: "🤝", title: "Contract Clause with Vendors", desc: "Add a GST compliance clause in purchase agreements. Require suppliers to file GSTR-1 by the 11th. Any ITC loss due to their delay should be recoverable from them." },
          { icon: "⏰", title: "Never Miss the 30th Nov Deadline", desc: "For FY purchases, ITC must be claimed by 30th November of the next FY or GSTR-9 filing, whichever is earlier. There is no extension — deadline is absolute." },
        ]} />
      </div>
    </div>
  );
}

function BlockedPanel() {
  return (
    <div>
      <div style={s.panelHdr}>
        <div style={s.formBadge("#c0392b")}>
          Section 17(5)<small style={s.formBadgeSmall}>BLOCKED CREDITS</small>
        </div>
        <div>
          <h2 style={s.panelH2}>Blocked Credits — Section 17(5) CGST Act</h2>
          <p style={s.panelP}>Section 17(5) contains 11 clauses listing purchases on which GST has been paid but ITC cannot be claimed — even if used for business. These are called "blocked credits". If wrongly claimed, reversal is mandatory with <strong>24% p.a. interest</strong>. Budget 2025 amended two clauses — Section 17(5)(d) (plant and machinery) and Section 17(5)(i) (fraud demand scope).</p>
        </div>
        <div style={s.tagRow}>
          <span style={s.rtag("#fdf0f0", "#c0392b")}>11 Clauses</span>
          <span style={s.rtag("#fef9ec", "#92650a")}>Budget 2025 Amended</span>
          <span style={s.rtag("#e8f0fe", "#1e3a5f")}>24% Interest if Claimed</span>
        </div>
      </div>

      <div style={s.twoCol}>
        <div style={s.card}>
          <h3 style={s.cardH}>Blocked Credits — Cannot Claim ITC</h3>
          <CheckList items={BLOCKED} cross={true} />
        </div>
        <div>
          <div style={s.card}>
            <h3 style={s.cardH}>Exceptions — ITC Allowed Despite Section 17(5)</h3>
            <CheckList items={ALLOWED_EXCEPTIONS} />
          </div>
          <div style={s.warnBox}>
            <span>⚠️</span>
            <div>
              <h4 style={s.warnH4}>Budget 2025 — Key Amendment to Section 17(5)</h4>
              <p style={s.alertP}><strong>Section 17(5)(d):</strong> "Plant or machinery" replaced with "plant and machinery" — aligning with the Explanation which defines plant and machinery. This clarifies that ITC is allowed on plant and machinery but not buildings.<br /><br /><strong>Section 17(5)(i):</strong> Blockage of ITC on fraud demands under Section 74 restricted only to FY 2023–24 and earlier. Demands for FY 2024–25 onwards are not blocked.</p>
            </div>
          </div>
          <div style={{ ...s.infoBox, marginTop: 14 }}>
            <span>💡</span>
            <div>
              <h4 style={s.infoH4}>IMS — Check Blocked Credits in GSTR-2B</h4>
              <p style={s.alertP}>GSTR-2B now shows both eligible and ineligible ITC separately. Use IMS (Invoice Management System) to reject invoices for blocked credits before they flow into GSTR-2B. Rejected invoices won't create erroneous claims.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...s.card, marginBottom: 20 }}>
        <h3 style={{ fontFamily: "'Georgia',serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: 22, color: "#0a1628" }}>Common Scenarios — Blocked vs Allowed</h3>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Expense Type</th>
              <th style={s.th}>Blocked?</th>
              <th style={s.th}>Exception / When Allowed</th>
              <th style={s.th}>Interest if Wrongly Claimed</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Office Car (≤13 seats)", "Yes", "Allowed if used for taxi/cab service or goods transport", "24% p.a."],
              ["Employee Cab Hire", "Yes", "Allowed if bus > 13 seats or mandated by law", "24% p.a."],
              ["Employee Air Tickets", "No", "Fully allowed for business travel", "N/A"],
              ["Office Renovation / Construction", "Yes", "Allowed for builders / developers selling units", "24% p.a."],
              ["Plant & Machinery Purchase", "No", "Fully allowed. Budget 2025 clarified definition", "N/A"],
              ["Employee Group Accident Insurance", "No", "Allowed — mandated by Workmen's Compensation Act", "N/A"],
              ["Employee Health Insurance (ESIC)", "No", "Allowed — mandated by law", "N/A"],
              ["Restaurant Meals for Employees", "Yes", "Allowed only if you run a restaurant / catering business", "24% p.a."],
              ["CSR Expenses", "Yes", "Blocked since April 2023. No exceptions.", "24% p.a."],
              ["Import of Goods (IGST)", "No", "IGST on imports is fully eligible for ITC via Bill of Entry", "N/A"],
            ].map(([exp, blocked, note, interest], i, arr) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fbfcfe" }}>
                <td style={{ ...s.tdBold, borderBottom: i === arr.length - 1 ? "none" : "1px solid #f0f4f8" }}>{exp}</td>
                <td style={{ ...s.td, borderBottom: i === arr.length - 1 ? "none" : "1px solid #f0f4f8", color: blocked === "Yes" ? "#c0392b" : "#0d5e3f", fontWeight: 700 }}>{blocked === "Yes" ? "❌ Blocked" : "✅ Allowed"}</td>
                <td style={{ ...s.td, borderBottom: i === arr.length - 1 ? "none" : "1px solid #f0f4f8" }}>{note}</td>
                <td style={{ ...s.td, borderBottom: i === arr.length - 1 ? "none" : "1px solid #f0f4f8", color: interest === "N/A" ? "#0d5e3f" : "#c0392b", fontWeight: 600 }}>{interest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ ...s.card, marginBottom: 20 }}>
        <h3 style={{ fontFamily: "'Georgia',serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: 22, color: "#0a1628" }}>Expert Tips — Handling Blocked Credits</h3>
        <TipsRow tips={[
          { icon: "📋", title: "Check GSTR-2B for Ineligible ITC", desc: "GSTR-2B separates eligible and ineligible ITC. Review the ineligible section before filing GSTR-3B to avoid claiming blocked credits accidentally." },
          { icon: "🚫", title: "Never Claim Section 17(5) Credits", desc: "Interest at 24% plus scrutiny notices make the risk not worth it. When in doubt about any expense, verify with a GST consultant before claiming." },
          { icon: "📁", title: "Maintain Expense Classification", desc: "Maintain a clear chart of accounts separating blocked and eligible expenses. This makes GSTR-3B Table 4(B) reversal calculations accurate and audit-ready." },
        ]} />
      </div>
    </div>
  );
}

function ReversalPanel() {
  return (
    <div>
      <div style={s.panelHdr}>
        <div style={s.formBadge("#0d5e3f")}>
          Rules 37–43<small style={s.formBadgeSmall}>ITC REVERSAL</small>
        </div>
        <div>
          <h2 style={s.panelH2}>ITC Reversal — When & How to Reverse</h2>
          <p style={s.panelP}>ITC claimed legitimately may still need to be reversed if certain events occur afterwards — non-payment to supplier, supplier default, partial personal use, or credit notes. Reversal is done in Table 4(B) of GSTR-3B. Delayed reversal attracts interest at <strong>18% p.a.</strong> (24% for fraudulent claims).</p>
        </div>
        <div style={s.tagRow}>
          <span style={s.rtag("#eaf7f0", "#0d5e3f")}>Table 4(B) of GSTR-3B</span>
          <span style={s.rtag("#fdf0f0", "#c0392b")}>18% / 24% Interest</span>
          <span style={s.rtag("#e8f0fe", "#1e3a5f")}>Re-claimable in Some Cases</span>
        </div>
      </div>

      <div style={{ ...s.card, marginBottom: 20 }}>
        <h3 style={{ fontFamily: "'Georgia',serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: 22, color: "#0a1628" }}>6 Scenarios That Trigger ITC Reversal</h3>
        <StepsGrid steps={REVERSAL_SCENARIOS} cols={3} />
      </div>

      <div style={s.twoCol}>
        <div style={s.card}>
          <h3 style={s.cardH}>Rule 42 — Proportionate Reversal (Inputs)</h3>
          <p style={{ fontSize: ".88rem", color: "#4a5568", lineHeight: 1.7, marginBottom: 16 }}>When inputs or input services are used for both taxable and exempt supplies, ITC must be split and reversed proportionately every month, with final reconciliation in September of the following year.</p>
          <div style={{ background: "#0a1628", borderRadius: 10, padding: 20, fontFamily: "monospace", fontSize: ".82rem", color: "#7eb8f7", lineHeight: 1.8 }}>
            <div style={{ color: "#8fa3be", marginBottom: 8, fontFamily: "'Inter',sans-serif", fontSize: ".72rem", letterSpacing: 1 }}>REVERSAL FORMULA — RULE 42</div>
            <div>D1 = (T1 + T2 + T3) × E / F</div>
            <div style={{ color: "#8fa3be", marginTop: 8, fontSize: ".75rem" }}>
              D1 = ITC to reverse<br />
              T1+T2+T3 = Total ITC claimed<br />
              E = Exempt + Non-Business Turnover<br />
              F = Total Aggregate Turnover
            </div>
          </div>
          <div style={s.infoBox}>
            <span>💡</span>
            <div>
              <h4 style={s.infoH4}>Annual Reconciliation Required</h4>
              <p style={s.alertP}>Monthly provisional reversal must be reconciled with actual figures annually. Final adjustment made in September return of the following FY.</p>
            </div>
          </div>
        </div>
        <div style={s.card}>
          <h3 style={s.cardH}>Rule 43 — Capital Goods Reversal</h3>
          <p style={{ fontSize: ".88rem", color: "#4a5568", lineHeight: 1.7, marginBottom: 16 }}>For capital goods used partly for exempt supplies or personal use, ITC reversal is spread over 60 months (5 years). The life of capital goods is deemed to be 5 years for GST purposes.</p>
          <div style={{ background: "#0a1628", borderRadius: 10, padding: 20, fontFamily: "monospace", fontSize: ".82rem", color: "#7eb8f7", lineHeight: 1.8 }}>
            <div style={{ color: "#8fa3be", marginBottom: 8, fontFamily: "'Inter',sans-serif", fontSize: ".72rem", letterSpacing: 1 }}>REVERSAL FORMULA — RULE 43</div>
            <div>Tc = (Tm / 60) × E / F</div>
            <div style={{ color: "#8fa3be", marginTop: 8, fontSize: ".75rem" }}>
              Tc = Monthly ITC to reverse<br />
              Tm = Total ITC on capital goods<br />
              E = Exempt + Non-Business Turnover<br />
              F = Total Aggregate Turnover
            </div>
          </div>
          <div style={s.amberBox}>
            <span>⚠️</span>
            <div>
              <h4 style={s.amberH4}>No ITC on Tax Portion if Depreciated</h4>
              <p style={s.alertP}>If you claim depreciation under Income Tax Act on the GST portion of capital goods, you cannot claim ITC on that portion under GST. Decide upfront — pick one benefit only.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...s.card, marginTop: 20, marginBottom: 20 }}>
        <h3 style={{ fontFamily: "'Georgia',serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: 22, color: "#0a1628" }}>ITC Offset Order — Mandatory Sequence (IGST First Rule)</h3>
        <div style={s.threeCol}>
          {ITC_OFFSET_ORDER.map((row, i) => (
            <div key={i} style={{ ...s.cardSm, borderTop: `3px solid ${row.color}` }}>
              <p style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: row.color, marginBottom: 12 }}>{row.from}</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {row.to.map((item, j) => (
                  <li key={j} style={{ display: "flex", gap: 8, alignItems: "center", padding: "7px 0", borderBottom: j < row.to.length - 1 ? "1px solid #f0f4f8" : "none", fontSize: ".83rem", color: item.startsWith("⛔") ? "#c0392b" : "#4a5568" }}>
                    <span style={{ color: item.startsWith("⛔") ? "#c0392b" : row.color, fontSize: ".9rem" }}>{item.startsWith("⛔") ? "⛔" : `${j + 1}.`}</span>
                    <span>{item.startsWith("⛔") ? item.replace("⛔ ", "") : item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={s.infoBox}>
          <span>💡</span>
          <div>
            <h4 style={s.infoH4}>IGST Credit Has Maximum Flexibility</h4>
            <p style={s.alertP}>IGST credit can be used to set off IGST, CGST, and SGST output tax — in that priority order. CGST and SGST credits are restricted to their respective heads (plus IGST). Cross-utilisation of CGST against SGST (or vice versa) is strictly not allowed.</p>
          </div>
        </div>
      </div>

      <div style={{ ...s.card, marginBottom: 20 }}>
        <h3 style={{ fontFamily: "'Georgia',serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: 22, color: "#0a1628" }}>Expert Tips — ITC Reversal</h3>
        <TipsRow tips={[
          { icon: "⏱️", title: "Track 180-Day Supplier Payments", desc: "Maintain a payment tracker by invoice date. Any invoice unpaid after 180 days must trigger an ITC reversal in that month's GSTR-3B. Set up automated payment reminders." },
          { icon: "📊", title: "Calculate Rule 42 Monthly", desc: "Don't defer proportionate reversal calculations. Provisional monthly reversal must be done in each GSTR-3B, with final adjustment in September of the following year." },
          { icon: "🔁", title: "Re-claim After Payment", desc: "Reversed ITC under Rule 37 (supplier non-payment) is recoverable. Once you pay the supplier, re-claim the reversed ITC in that month's GSTR-3B. Don't lose it permanently." },
        ]} />
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────

export default function ITCBreakdownPage() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Conditions to Claim", "Blocked Credits", "Reversal Rules"];
  const tabSub = ["Section 16 CGST", "Section 17(5) CGST", "Rules 37, 42 & 43"];
  const panels = [<ConditionsPanel key="c" />, <BlockedPanel key="b" />, <ReversalPanel key="r" />];

  return (
    <div style={s.body}>

      {/* ── HERO ── */}
      <section style={s.hero}>
        <div style={s.container}>
          <div style={s.heroBadge}>Resource Centre · ITC Guide 2025–26</div>
          <h1 style={s.heroH1}>
            Complete Guide to{" "}
            <span style={s.heroSpan}>Input Tax Credit</span>
          </h1>
          <p style={s.heroP}>
            Understand how ITC reduces your GST liability, the 8 conditions to claim it, every blocked credit under Section 17(5), reversal rules, offset order — all updated with 2025 Budget amendments and GSTR-2B changes.
          </p>
          <div style={s.heroUpdate}>
            <strong>🔔 Budget 2025 Update:&nbsp;</strong>
            Section 17(5)(d) amended — "plant or machinery" replaced with "plant and machinery". Section 17(5)(i) fraud demand block restricted to FY 2023–24 and earlier only.
          </div>
          <div style={s.heroStats}>
            {[
              ["Section 16", "Conditions to Claim"],
              ["Section 17(5)", "Blocked Credits"],
              ["24% p.a.", "Interest on Wrong Claim"],
              ["30 Nov", "ITC Deadline (FY 2024–25)"],
            ].map(([num, label]) => (
              <div key={label} style={s.heroStat}>
                <strong style={s.heroStatNum}>{num}</strong>
                <span style={s.heroStatLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS ITC ── */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div style={s.container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              <span style={s.secLabel}>The Basics</span>
              <h2 style={s.secTitle}>What is Input Tax Credit?</h2>
              <p style={{ color: "#4a5568", fontSize: ".94rem", marginBottom: 14, lineHeight: 1.75 }}>
                Input Tax Credit (ITC) is the mechanism under GST that allows registered businesses to deduct the tax paid on purchases (inputs) from the tax collected on sales (output). This eliminates the cascading effect of taxes — where tax is levied on tax — and ensures GST applies only to the <strong>value added</strong> at each stage of the supply chain.
              </p>
              <p style={{ color: "#4a5568", fontSize: ".94rem", marginBottom: 14, lineHeight: 1.75 }}>
                For example: you purchase raw materials worth ₹1,00,000 and pay ₹18,000 GST. You manufacture goods and sell them for ₹2,00,000, collecting ₹36,000 GST. Your net GST payable to the government is only <strong>₹18,000</strong> (₹36,000 output tax − ₹18,000 ITC). The remaining ₹18,000 stays as working capital.
              </p>
              <p style={{ color: "#4a5568", fontSize: ".94rem", marginBottom: 24, lineHeight: 1.75 }}>
                Not all purchases qualify. ITC is governed by <strong>Section 16</strong> (conditions), <strong>Section 17</strong> (apportionment & blocked credits), and <strong>Rules 36–43</strong> of CGST Rules. From January 2022, all ITC claims must match GSTR-2B exactly — no provisional credit.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  ["💰 Reduces Tax Liability", "Directly offsets output GST — reduces your cash outflow to the government."],
                  ["🔄 Improves Cash Flow", "ITC stays as working capital instead of being paid as tax at each supply stage."],
                  ["⛓️ Eliminates Cascading", "Prevents tax-on-tax — GST is paid only on the value added at your stage."],
                  ["📋 Compliance Incentive", "Encourages suppliers to file returns on time — your ITC depends on their GSTR-1 filing."],
                ].map(([h, p]) => (
                  <div key={h} style={{ ...s.cardSm, borderLeft: "3px solid #1e3a5f" }}>
                    <h4 style={{ fontSize: ".84rem", fontWeight: 700, marginBottom: 4, color: "#0a1628" }}>{h}</h4>
                    <p style={{ fontSize: ".78rem", color: "#6b7a8d", lineHeight: 1.5 }}>{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FLOW BOX */}
            <div style={s.cardBlue}>
              <div style={s.flowTopLine} />
              <p style={{ fontSize: ".7rem", color: "#6b7a8d", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20, fontWeight: 700 }}>ITC Flow — How It Works in Practice</p>
              {[
                ["1", "Manufacturer buys raw materials", "Pays ₹18,000 GST on ₹1,00,000 purchase. This becomes Input Tax Credit — a credit in the Electronic Credit Ledger on the GST portal."],
                ["2", "Manufacturer sells finished goods", "Charges ₹36,000 GST on ₹2,00,000 sales. This output tax liability is entered in GSTR-3B Table 3.1."],
                ["3", "ITC offset against output tax", "₹36,000 output − ₹18,000 ITC = ₹18,000 net payable. Only ₹18,000 is paid to the government in cash. ITC is used first — mandatory order: IGST → CGST → SGST."],
                ["4", "Buyer claims the ITC further", "The buyer who purchases from the manufacturer gets their GSTR-2B populated with the manufacturer's invoice — enabling them to claim ITC and continue the credit chain."],
              ].map(([num, title, desc], i, arr) => (
                <div key={num} style={i === arr.length - 1 ? s.flowItemLast : s.flowItem}>
                  <div style={s.flowNum}>{num}</div>
                  <div>
                    <h5 style={s.flowH5}>{title}</h5>
                    <p style={s.flowP}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEEP DIVE TABS ── */}
      <section style={{ padding: "0 0 80px", background: "#f8fafd" }}>
        <div style={s.container}>
          <div style={{ paddingTop: 80, marginBottom: 40 }}>
            <span style={s.secLabel}>Deep Dive</span>
            <h2 style={s.secTitle}>ITC Rules — Conditions, Blocks & Reversals</h2>
            <p style={{ ...s.secSub, marginBottom: 0 }}>Every aspect of claiming, blocking, and reversing ITC — updated for FY 2025–26.</p>
          </div>

          {/* UPDATE BANNER */}
          <div style={s.updateBanner}>
            <span style={{ fontSize: "1.4rem", flexShrink: 0, marginTop: 2 }}>⚡</span>
            <div>
              <div style={s.ubTitle}>KEY 2025 CHANGES — ITC Rules Updated</div>
              {[
                ["Section 16(4) Time Limit:", "ITC for FY 2024–25 must be claimed by 30th November 2025 or GSTR-9 filing, whichever is earlier. No extension expected."],
                ["Budget 2025 — Section 17(5)(d):", "\"Plant or machinery\" replaced with \"plant and machinery\" — aligning with the Explanation definition. ITC on plant and machinery remains allowed; buildings remain blocked."],
                ["Budget 2025 — Section 17(5)(i):", "ITC blockage on demands under Section 74 (fraud) restricted to FY 2023–24 and earlier. New fraud demands from FY 2024–25 will not block ITC."],
                ["Budget 2025 — Section 34 Amendment:", "If a supplier issues a credit note to reduce tax liability, the recipient must reverse the corresponding ITC already availed. New statutory requirement."],
                ["IMS — Invoice Management System (Oct 2024):", "Taxpayers can now accept, reject, or defer supplier invoices in GSTR-2B. Rejected invoices are removed from ITC statement. Import BoE added from Oct 2025."],
              ].map(([bold, text]) => (
                <div key={bold} style={s.ubItem}>
                  <span style={s.ubArrow}>→</span>
                  <span><strong style={{ color: "#7a5a0a" }}>{bold}</strong> {text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TABS */}
          <div style={s.tabsRow}>
            {tabs.map((t, i) => (
              <button key={t} style={{ ...s.tabBtn(activeTab === i), borderRight: i < tabs.length - 1 ? "1px solid #dde3ec" : "none" }} onClick={() => setActiveTab(i)}>
                <span style={s.tabName(activeTab === i)}>{t}</span>
                {tabSub[i]}
              </button>
            ))}
          </div>
          {panels[activeTab]}
        </div>
      </section>

      {/* ── ELIGIBLE vs INELIGIBLE vs REVERSAL TABLE ── */}
      <section style={{ padding: "0 0 80px", background: "#fff" }}>
        <div style={s.container}>
          <div style={{ paddingTop: 80, marginBottom: 28 }}>
            <span style={s.secLabel}>Quick Reference</span>
            <h2 style={s.secTitle}>Eligible vs Blocked vs Reversal ITC</h2>
            <p style={{ ...s.secSub, marginBottom: 0 }}>Side-by-side comparison — know where each credit type sits in GSTR-3B.</p>
          </div>
          <div style={{ border: "1px solid #dde3ec", borderRadius: 16, overflow: "hidden" }}>
            <table style={{ ...s.table, fontSize: ".85rem" }}>
              <thead>
                <tr>
                  <th style={{ ...s.th, background: "#f0f4f8", color: "#9aa5b4" }}>Criteria</th>
                  <th style={{ ...s.th, background: "#eaf7f0", color: "#0d5e3f" }}>Eligible ITC</th>
                  <th style={{ ...s.th, background: "#fdf0f0", color: "#c0392b" }}>Blocked Credit (Sec 17(5))</th>
                  <th style={{ ...s.th, background: "#fef9ec", color: "#92650a" }}>Reversal ITC</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ITC.map(([criteria, c1, c2, c3], i, arr) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fbfcfe" }}>
                    <td style={{ ...s.td, fontWeight: 700, color: "#9aa5b4", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: .5, borderBottom: i === arr.length - 1 ? "none" : "1px solid #f0f4f8" }}>{criteria}</td>
                    <td style={{ ...s.td, borderBottom: i === arr.length - 1 ? "none" : "1px solid #f0f4f8" }}>{c1}</td>
                    <td style={{ ...s.td, borderBottom: i === arr.length - 1 ? "none" : "1px solid #f0f4f8" }}>{c2}</td>
                    <td style={{ ...s.td, borderBottom: i === arr.length - 1 ? "none" : "1px solid #f0f4f8" }}>{c3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION ── */}
      <section style={{ padding: "0 0 90px", background: "#f8fafd" }}>
        <div style={s.container}>
          <div style={{ paddingTop: 80, marginBottom: 44 }}>
            <span style={s.secLabel}>Curated Resources</span>
            <h2 style={s.secTitle}>Latest ITC Articles from GST Experts</h2>
            <p style={{ ...s.secSub, marginBottom: 0 }}>Real articles from ClearTax, TaxGuru, and official CBIC sources — updated for FY 2025–26.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {BLOGS.map((b, i) => (
              <a key={i} href={b.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={s.blogCard}>
                  <div style={s.blogBanner(b.bg)}>{b.banner}</div>
                  <div style={s.blogBody}>
                    <span style={s.blogTag(b.tagBg, b.tagColor)}>{b.tag}</span>
                    <h3 style={s.blogH3}>{b.title}</h3>
                    <p style={s.blogP}>{b.desc}</p>
                    <div style={s.blogFoot}>
                      <span style={s.blogMeta}>⏱ {b.time}</span>
                      <span style={s.blogLink}>Read Article ↗</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div style={s.container}>
          <span style={s.secLabel}>FAQs</span>
          <h2 style={s.secTitle}>Frequently Asked Questions</h2>
          <div style={s.faqGrid}>
            {FAQS.map((f, i) => (
              <div key={i} style={s.faqCard}>
                <h4 style={s.faqH4}>
                  <span style={s.faqQmark}>Q.</span>
                  {f.q}
                </h4>
                <p style={s.faqP}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 0 100px", background: "#fff" }}>
        <div style={s.container}>
          <div style={s.ctaWrap}>
            <div style={s.ctaTopLine} />
            <h2 style={s.ctaH2}>Maximise Your ITC.<br />Stay Fully Compliant.</h2>
            <p style={s.ctaP}>Our GST experts review your purchase register, identify missed ITC, handle blocked credit reversals, and ensure your GSTR-3B is always accurate.</p>
            <div style={s.ctaBtns}>
              <a href="#" style={s.btnPrimary}>Get ITC Review →</a>
              <a href="#" style={s.btnGhost}>Download ITC Checklist</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}