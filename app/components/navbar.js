"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { status } = useSession();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const handleNavigate = (path) => {
    router.push(path);
    setMobileMenuOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
          <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">        <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="
          pointer-events-auto
          w-full 
          h-[72px]
          bg-white/70 backdrop-blur-2xl
          border border-white/40
          rounded-none
          px-4 md:px-8
          flex justify-between items-center
          shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]
          relative
        "
      >
        {/* Left: Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-3 md:gap-4 cursor-pointer group min-w-0"
        >
          <div className="relative shrink-0">
            <div className="w-10 h-10 bg-[#1b69a1] rounded-2xl flex items-center justify-center shadow-lg shadow-[#1b69a1]/20 group-hover:rotate-[15deg] transition-all duration-500">
              <span className="text-white font-black text-lg">G</span>
            </div>
            <div className="absolute -inset-1 bg-[#1b69a1]/10 rounded-2xl blur-md group-hover:bg-[#1b69a1]/20 transition-all"></div>
          </div>

          <h1 className="text-lg md:text-xl font-black tracking-tighter text-slate-900 truncate">
            GST<span className="text-[#1b69a1]">Insight</span>
          </h1>
        </div>

        {/* Desktop Center Nav */}
        <div className="hidden lg:flex gap-1 items-center bg-slate-50/50 p-1.5 rounded-full border border-slate-100">
          <NavDropdown title="Products">
            <DropdownItem
              title="GST Dashboard"
              desc="Compliance at a glance"
              href="/gstinsight"
              icon="📊"
            />
            <DropdownItem
              title="AI Risk Analyzer"
              desc="Pattern detection engine"
              href="/gstinsight"
              icon="🧠"
            />
            <DropdownItem
              title="Reports"
              desc="Export professional audits"
              href="/gstinsight"
              icon="📄"
            />
          </NavDropdown>

          <NavDropdown title="API Docs">
            <DropdownItem
              title="Auth Nodes"
              desc="Secure OAuth integration"
              href="/"
              icon="🔐"
            />
            <DropdownItem
              title="Raw Access"
              desc="Fetch JSON filing data"
              href="/"
              icon="⚡"
            />
          </NavDropdown>

          <NavDropdown title="Resources">
            <DropdownItem
              title="GST Returns"
              desc="Core filing guidance"
              href="/blog/gst-returns"
              icon="📚"
            />
            <DropdownItem
              title="ITC Breakdown"
              desc="Maximizing tax credits"
              href="/blog/input-tax-credit"
              icon="💎"
            />
          </NavDropdown>

          <NavDropdown title="Enterprise">
            <DropdownItem
              title="SaaS Plans"
              desc="Scalable pricing tiers"
              href="/"
              icon="🏢"
            />
            <DropdownItem
              title="Security"
              desc="Protocols & Encryption"
              href="/"
              icon="🛡️"
            />
          </NavDropdown>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-3">
          {status === "authenticated" ? (
            <>
              {/* Desktop authenticated actions */}
              <div className="hidden lg:flex items-center gap-4">
               
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="h-11 px-6 rounded-full bg-slate-900 text-white font-bold text-[13px] hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-950/10"
                >
                  Sign Out
                </button>
              </div>

              {/* Mobile authenticated actions */}
              <div className="flex lg:hidden items-center gap-2">
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="h-10 px-4 rounded-full bg-slate-900 text-white font-bold text-[12px] hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-950/10"
                >
                  Sign Out
                </button>

                <button
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-800 shadow-sm"
                  aria-label="Toggle menu"
                >
                  <motion.div
                    animate={mobileMenuOpen ? "open" : "closed"}
                    className="flex flex-col justify-center items-center gap-1"
                  >
                    <motion.span
                      variants={{
                        closed: { rotate: 0, y: 0, width: 18 },
                        open: { rotate: 45, y: 6, width: 18 },
                      }}
                      className="block h-[2px] bg-current rounded-full"
                    />
                    <motion.span
                      variants={{
                        closed: { opacity: 1, width: 18 },
                        open: { opacity: 0, width: 18 },
                      }}
                      className="block h-[2px] bg-current rounded-full"
                    />
                    <motion.span
                      variants={{
                        closed: { rotate: 0, y: 0, width: 18 },
                        open: { rotate: -45, y: -6, width: 18 },
                      }}
                      className="block h-[2px] bg-current rounded-full"
                    />
                  </motion.div>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Desktop guest actions */}
              <div className="hidden lg:flex items-center gap-2">
                <button
                  onClick={() => router.push("/login")}
                  className="px-6 h-11 rounded-full text-slate-500 font-bold text-[13px] hover:text-slate-900 transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => router.push("/login")}
                  className="
                    px-7 h-11 rounded-full bg-[#1b69a1] text-white font-bold text-[13px]
                    hover:bg-[#155685] hover:shadow-xl hover:shadow-[#1b69a1]/25
                    transition-all active:scale-95
                  "
                >
                  Get Started
                </button>
              </div>

              {/* Mobile guest actions */}
              <div className="flex lg:hidden items-center gap-2">
                <button
                  onClick={() => router.push("/login")}
                  className="h-10 px-4 rounded-full bg-[#1b69a1] text-white font-bold text-[12px] hover:bg-[#155685] transition-all active:scale-95"
                >
                  Log In
                </button>

                <button
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-800 shadow-sm"
                  aria-label="Toggle menu"
                >
                  <motion.div
                    animate={mobileMenuOpen ? "open" : "closed"}
                    className="flex flex-col justify-center items-center gap-1"
                  >
                    <motion.span
                      variants={{
                        closed: { rotate: 0, y: 0, width: 18 },
                        open: { rotate: 45, y: 6, width: 18 },
                      }}
                      className="block h-[2px] bg-current rounded-full"
                    />
                    <motion.span
                      variants={{
                        closed: { opacity: 1, width: 18 },
                        open: { opacity: 0, width: 18 },
                      }}
                      className="block h-[2px] bg-current rounded-full"
                    />
                    <motion.span
                      variants={{
                        closed: { rotate: 0, y: 0, width: 18 },
                        open: { rotate: -45, y: -6, width: 18 },
                      }}
                      className="block h-[2px] bg-current rounded-full"
                    />
                  </motion.div>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden absolute top-[calc(100%+12px)] left-0 right-0"
            >
              <div className="bg-white rounded-[1.75rem] border border-slate-100 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.15)] p-3 overflow-hidden">
                <div className="space-y-2">
                  <MobileAccordion
                    title="Products"
                    isOpen={openSection === "products"}
                    onToggle={() => toggleSection("products")}
                  >
                    <MobileLink
                      title="GST Dashboard"
                      desc="Compliance at a glance"
                      icon="📊"
                      onClick={() => handleNavigate("/gstinsight")}
                    />
                    <MobileLink
                      title="AI Risk Analyzer"
                      desc="Pattern detection engine"
                      icon="🧠"
                      onClick={() => handleNavigate("/gstinsight")}
                    />
                    <MobileLink
                      title="Reports"
                      desc="Export professional audits"
                      icon="📄"
                      onClick={() => handleNavigate("/gstinsight")}
                    />
                  </MobileAccordion>

                  <MobileAccordion
                    title="API Docs"
                    isOpen={openSection === "api"}
                    onToggle={() => toggleSection("api")}
                  >
                    <MobileLink
                      title="Auth Nodes"
                      desc="Secure OAuth integration"
                      icon="🔐"
                      onClick={() => handleNavigate("/")}
                    />
                    <MobileLink
                      title="Raw Access"
                      desc="Fetch JSON filing data"
                      icon="⚡"
                      onClick={() => handleNavigate("/")}
                    />
                  </MobileAccordion>

                  <MobileAccordion
                    title="Resources"
                    isOpen={openSection === "resources"}
                    onToggle={() => toggleSection("resources")}
                  >
                    <MobileLink
                      title="GST Returns"
                      desc="Core filing guidance"
                      icon="📚"
                      onClick={() => handleNavigate("/blog/gst-returns")}
                    />
                    <MobileLink
                      title="ITC Breakdown"
                      desc="Maximizing tax credits"
                      icon="💎"
                      onClick={() => handleNavigate("/blog/input-tax-credit")}
                    />
                  </MobileAccordion>

                  <MobileAccordion
                    title="Enterprise"
                    isOpen={openSection === "enterprise"}
                    onToggle={() => toggleSection("enterprise")}
                  >
                    <MobileLink
                      title="SaaS Plans"
                      desc="Scalable pricing tiers"
                      icon="🏢"
                      onClick={() => handleNavigate("/")}
                    />
                    <MobileLink
                      title="Security"
                      desc="Protocols & Encryption"
                      icon="🛡️"
                      onClick={() => handleNavigate("/")}
                    />
                  </MobileAccordion>

                 
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

/* Desktop Dropdown */
function NavDropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="
          px-5 py-2 rounded-full flex items-center gap-1.5
          text-[12px] font-bold uppercase tracking-[0.1em] text-slate-500
          hover:bg-white hover:text-[#1b69a1] transition-all duration-300
          group-hover:text-[#1b69a1]
        "
      >
        {title}
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72
              pointer-events-auto z-10
            "
          >
            <div
              className="
                bg-white rounded-[2rem] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.15)]
                border border-slate-100 p-3 overflow-hidden
              "
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Desktop Dropdown Item */
function DropdownItem({ title, desc, href = "/", icon }) {
  return (
    <Link
      href={href}
      className="
        flex items-start gap-4 p-4 rounded-2xl
        hover:bg-slate-50 transition-all duration-200 group/item
      "
    >
      <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-lg group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
        {icon}
      </div>
      <div>
        <p className="text-[14px] font-bold text-slate-900 leading-tight mb-0.5 group-hover/item:text-[#1b69a1] transition-colors">
          {title}
        </p>
        <p className="text-[12px] font-medium text-slate-500 leading-tight">
          {desc}
        </p>
      </div>
    </Link>
  );
}

/* Mobile Accordion */
function MobileAccordion({ title, isOpen, onToggle, children }) {
  return (
    <div className="rounded-2xl border border-slate-100 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 h-14 text-left hover:bg-slate-50 transition-all"
      >
        <span className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-slate-700">
          {title}
        </span>

        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 text-slate-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-2 pb-2 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Mobile Link */
function MobileLink({ title, desc, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all text-left"
    >
      <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-slate-900 leading-tight">{title}</p>
        <p className="text-xs font-medium text-slate-500 leading-tight mt-1">
          {desc}
        </p>
      </div>
    </button>
  );
}