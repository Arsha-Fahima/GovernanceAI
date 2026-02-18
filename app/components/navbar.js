"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) return null;

  return (
    <nav className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <div
          onClick={() => router.push("/gstinsight")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#1b69a1] rounded-xl flex items-center justify-center shadow-lg shadow-[#1b69a1]/20 group-hover:rotate-6 transition-all duration-500">
            <span className="text-white font-black text-lg">G</span>
          </div>
          <h1 className="text-xl font-black tracking-tight text-slate-900">
            GST<span className="text-[#1b69a1]">Insight</span>
          </h1>
        </div>

        {/* CENTER MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-700">

          {/* PRODUCTS */}
          <NavDropdown title="PRODUCTS">
            <DropdownItem title="GST Dashboard" desc="Real-time compliance overview" href="/dashboard" />
            <DropdownItem title="AI Risk Analyzer" desc="Detect filing inconsistencies" href="/ai-risk" />
            <DropdownItem title="Automated Reports" desc="Export smart summaries" href="/reports" />
          </NavDropdown>

          {/* API DOCS */}
          <NavDropdown title="API DOCS">
            <DropdownItem title="Authentication" desc="Secure OAuth access" href="/docs/authentication" />
            <DropdownItem title="GST API" desc="Fetch filing data" href="/docs/gst-api" />
            <DropdownItem title="Webhooks" desc="Realtime notifications" href="/docs/webhooks" />
          </NavDropdown>

          {/* RESOURCES */}
          <NavDropdown title="RESOURCES">
            <DropdownItem
              title="Know About GST Returns"
              desc="Understand GSTR-1, GSTR-2A & GSTR-3B filing process"
              href="/blog/gst-returns"
            />
            <DropdownItem
              title="Input Credit Tax (ITC)"
              desc="Eligibility, conditions & reconciliation rules"
              href="/blog/input-tax-credit"
            />
            <DropdownItem
              title="Support"
              desc="Help center & docs"
              href="/support"
            />
          </NavDropdown>

          {/* ENTERPRISE */}
          <NavDropdown title="ENTERPRISE">
            <DropdownItem title="Pricing" desc="Flexible SaaS plans" href="/pricing" />
            <DropdownItem title="Security" desc="Enterprise-grade protection" href="/security" />
            <DropdownItem title="Contact Sales" desc="Talk to our team" href="/contact" />
          </NavDropdown>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">
          <span className="hidden sm:block text-xs font-black text-slate-400 uppercase tracking-widest">
            {session.user?.name}
          </span>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-[13px] hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-95"
          >
            Log Out
          </button>
        </div>

      </div>
    </nav>
  );
}

/* Reusable Dropdown Wrapper */
function NavDropdown({ title, children }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 hover:text-[#1b69a1] transition-colors">
        {title}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className="
        absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64
        rounded-2xl bg-white/95 backdrop-blur-xl
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]
        border border-slate-100
        p-4
        opacity-0 invisible translate-y-4 scale-95
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100
        transition-all duration-300 ease-out
      ">
        {children}
      </div>
    </div>
  );
}

/* Dropdown Item */
function DropdownItem({ title, desc, href = "/" }) {
  return (
    <Link
      href={href}
      className="block p-3 rounded-xl hover:bg-slate-50 transition-all duration-200"
    >
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="text-xs text-slate-500">{desc}</p>
    </Link>
  );
}
