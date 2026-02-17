"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { supabase } from "@/lib/supabase";
import GSTDetailsCard from "../components/GSTDetailsCard";
import ReturnsTable from "../components/ReturnsTable";
import ComplianceChart from "../components/ComplianceChart";
import ComplianceClassification from "../components/ComplianceClassification";
import GSTProfileTabs from "../components/GSTProfileTabs";

export default function GSTInsightPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(null);
  const [gstQuery, setGstQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [userData, setUserData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", gstin: "" });

  // Fetch profile if authenticated
  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      fetchUserData();
    }
  }, [status, session]);

  const fetchUserData = async () => {
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("email", session.user.email)
      .single();

    if (data) {
      setUserData(data);
      // if (data.gstin && !data.gstin.startsWith("TEMP_")) {
      //   // If they have a gstin, they are already "onboarded"
      //   // Let's redirect them to the dashboard as requested for a "normal" experience
      //   router.push("/");
      // }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveMenu(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const scrollToSearch = () => {
    setShowForm(true);
    setTimeout(() => {
      document
        .getElementById("setup-form-section")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    try {
      const { data, error } = await supabase
        .from("users")
        .update({
          name: form.name,
          phone: form.phone,
          gstin: form.gstin,
        })
        .eq("email", session.user.email)
        .select();

      if (data) {
        setUserData(data[0]);
        setGstQuery(form.gstin);
        setShowForm(false);
        // Redirect to landing page as requested
        router.push("/gstinsight");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!gstQuery) return;
    setIsSearching(true);
    setSearchResult(null);

    try {
      // Direct Lookup simulation (similar to app/page.js logic)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/check-status/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gstin: gstQuery,
            name: "Search Lookup", // Default for direct search
            email: session?.user?.email || "anonymous",
            phone: session?.user?.phone || "0000000000",
          }),
        },
      );

      const data = await response.json();
      if (data.status === "success" && data.gst_report) {
        setSearchResult(data.gst_report);
        // Smooth scroll to results if needed
        setTimeout(() => {
          document
            .getElementById("results-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        alert(data.message || "No data found for this GSTIN");
      }
    } catch (err) {
      console.error("Search error:", err);
      alert("Failed to connect to verification nodes.");
    } finally {
      setIsSearching(false);
    }
  };

  if (status === "loading") {
    return (
      <div className='min-h-screen flex items-center justify-center bg-white'>
        <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#1b69a1]'></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>GST Search & Compliance – GSTInsight</title>
      </Head>

      <div className='min-h-screen bg-white font-sans text-slate-800 selection:bg-[#1b69a1]/20 selection:text-[#1b69a1]'>
        {/* ================= NAVBAR ================= */}
        <nav className='bg-white/90 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100'>
          <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
            {/* Logo */}
            <div
              onClick={() => router.push("/gstinsight")}
              className='flex items-center gap-3 cursor-pointer group'
            >
              <div className='w-11 h-11 bg-[#1b69a1] rounded-xl flex items-center justify-center shadow-lg shadow-[#1b69a1]/20 group-hover:rotate-6 transition-all duration-500'>
                <span className='text-white font-black text-xl'>G</span>
              </div>
              <h1 className='text-2xl font-black tracking-tighter text-slate-900'>
                GST<span className='text-[#1b69a1]'>Insight</span>
              </h1>
            </div>

            <div className='hidden lg:flex gap-12 items-center'>
              {["Products", "API Docs", "Resources", "Enterprise"].map(
                (item) => (
                  <button
                    key={item}
                    className='font-bold text-[13px] uppercase tracking-widest text-slate-500 hover:text-[#1b69a1] transition-all relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#1b69a1] hover:after:w-full after:transition-all'
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            <div className='flex items-center gap-6'>
              {status === "authenticated" ? (
                <>
                  <button
                    onClick={() => router.push("/")}
                    className='text-slate-600 font-bold text-[14px] hover:text-[#1b69a1] transition-colors hidden sm:block'
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => router.push("/?edit=true")}
                    className='text-[#1b69a1] font-black text-[12px] uppercase tracking-wider hover:text-[#155685] transition-colors hidden sm:block border-b-2 border-[#1b69a1]/20 pb-0.5'
                  >
                    Check Your Compliance
                  </button>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className='bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-[14px] hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-95'
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => router.push("/login")}
                    className='text-slate-600 font-bold text-[14px] hover:text-[#1b69a1] transition-colors hidden sm:block'
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => router.push("/login")}
                    className='bg-[#1b69a1] text-white px-8 py-3 rounded-full font-bold text-[14px] hover:bg-[#155685] transition-all shadow-xl shadow-[#1b69a1]/20 active:scale-95'
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* ================= HERO SECTION ================= */}
        <section className='relative pt-24 pb-40 overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-full -z-10'>
            <div className='absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#1b69a1]/5 rounded-full blur-[120px]'></div>
            <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#1b69a1]/5 rounded-full blur-[120px]'></div>
          </div>

          <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center'>
            <div className='max-w-2xl animate-fadeIn'>
              <div className='inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#1b69a1]/5 border border-[#1b69a1]/10 text-[#1b69a1] text-[11px] font-black mb-10 uppercase tracking-[0.2em]'>
                <span className='flex h-2 w-2 rounded-full bg-[#1b69a1] animate-pulse'></span>
                {status === "authenticated"
                  ? `Welcome, ${session.user.name}`
                  : "Real-Time Compliance Engine"}
              </div>

              <h2 className='text-6xl md:text-8xl font-black mb-6 leading-[0.95] text-slate-900 tracking-tight'>
                GST Done{" "}
                <span className='text-transparent bg-clip-text bg-linear-to-r from-[#1b69a1] to-blue-400'>
                  100% Right
                </span>
              </h2>

              <h3 className='text-xl md:text-2xl font-bold text-[#1b69a1] mb-10 tracking-tight uppercase tracking-[0.2em]'>
                Every Filing, Every Time
              </h3>

              <p className='text-lg md:text-xl text-slate-500 mb-14 leading-relaxed font-medium max-w-lg'>
                Access real-time GST status, filing history, compliance
                category, due dates, turnover classification, and complete
                return analytics — all in structured professional tables powered
                by intelligent automation.
              </p>

              <div
                className='flex flex-col sm:flex-row gap-6 mb-20'
                id='search-section'
              >
                {status === "authenticated" ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSearch();
                    }}
                    className='relative w-full max-w-xl group'
                  >
                    <input
                      type='text'
                      placeholder='Search GSTIN (e.g., 27AAACN...)'
                      value={gstQuery}
                      onChange={(e) =>
                        setGstQuery(e.target.value.toUpperCase())
                      }
                      className='w-full bg-white border-2 border-slate-100 px-8 py-6 rounded-[2rem] text-lg font-bold text-slate-900 focus:outline-hidden focus:border-[#1b69a1] transition-all shadow-2xl shadow-slate-200/50 placeholder:text-slate-300'
                    />
                    <button
                      type='submit'
                      disabled={isSearching}
                      className='absolute right-3 top-3 bottom-3 bg-[#1b69a1] text-white px-10 rounded-[1.5rem] font-black hover:bg-[#155685] transition-all flex items-center gap-3 disabled:opacity-50'
                    >
                      {isSearching ? (
                        <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                      ) : (
                        <>
                          Verify
                          <span className='group-hover:translate-x-1 transition-transform'>
                            →
                          </span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => router.push("/login")}
                    className='bg-slate-900 text-white px-12 py-6 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20 text-lg flex items-center justify-center gap-4 group'
                  >
                    Start Verification
                    <span className='group-hover:translate-x-2 transition-transform duration-300'>
                      →
                    </span>
                  </button>
                )}
                {!session && (
                  <div className='relative group'>
                    <button className='bg-white text-slate-900 px-12 py-6 rounded-2xl font-black hover:bg-slate-50 border-2 border-slate-100 transition-all text-lg flex items-center justify-center gap-3'>
                      <div className='w-8 h-8 rounded-full bg-[#1b69a1]/10 flex items-center justify-center'>
                        <div className='w-2 h-2 rounded-full bg-[#1b69a1]'></div>
                      </div>
                      View Demo
                    </button>
                  </div>
                )}
              </div>

              {/* Added Real-time Activity Feed */}
              <div
                className='bg-white/50 backdrop-blur-sm border border-slate-100 rounded-[2rem] p-6 max-w-md hidden sm:block animate-fadeIn shadow-2xl shadow-slate-200/50'
                style={{ animationDelay: "0.4s" }}
              >
                <div className='flex items-center justify-between mb-5'>
                  <span className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>
                    Network status
                  </span>
                  <div className='flex items-center gap-2'>
                    <span className='w-1.5 h-1.5 rounded-full bg-green-500'></span>
                    <span className='text-[10px] font-bold text-slate-900'>
                      Operational • 24ms
                    </span>
                  </div>
                </div>
                <div className='space-y-4'>
                  {[
                    {
                      t: "Verified GSTR History: 27A...",
                      s: "Success",
                      c: "text-green-600",
                    },
                    {
                      t: "Risk Score: Amazon Trans.",
                      s: "Active",
                      c: "text-[#1b69a1]",
                    },
                    {
                      t: "Bulk API Request: 5,000",
                      s: "Processing",
                      c: "text-amber-500",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className='flex items-center justify-between text-[13px] font-bold'
                    >
                      <div className='text-slate-500'>{item.t}</div>
                      <div className={item.c}>{item.s}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex flex-wrap items-center gap-12 border-t border-slate-100 pt-10 mt-10'>
                <div>
                  <div className='flex items-center gap-2'>
                    <div className='text-3xl font-black text-slate-900 mb-1'>
                      1.2M+
                    </div>
                    <span className='px-1.5 py-0.5 rounded-md bg-green-100 text-[9px] font-black text-green-700 animate-pulse'>
                      LIVE
                    </span>
                  </div>
                  <div className='text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]'>
                    GSTINs Verified
                  </div>
                </div>
                <div>
                  <div className='text-3xl font-black text-slate-900 mb-1'>
                    &lt; 45ms
                  </div>
                  <div className='text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]'>
                    API Latency
                  </div>
                </div>
                <div className='hidden sm:block'>
                  <div className='flex items-center gap-2'>
                    <div className='text-3xl font-black text-slate-900 mb-1'>
                      99.9%
                    </div>
                    <div className='w-2 h-2 rounded-full bg-green-500 animate-ping'></div>
                  </div>
                  <div className='text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]'>
                    System Uptime
                  </div>
                </div>
              </div>
            </div>

            <div className='relative animate-slideUp'>
              <div className='relative z-10 bg-slate-900 p-2.5 rounded-[3rem] shadow-[0_60px_100px_-20px_rgba(27,105,161,0.25)] border border-slate-800 overflow-hidden transform hover:scale-[1.02] transition-all duration-700 group'>
                <Image
                  src='/images/gst1.jpg'
                  alt='Data Analytics Dashboard'
                  width={800}
                  height={600}
                  className='rounded-[2.8rem] opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-linear-to-tr from-[#1b69a1]/40 via-transparent to-transparent'></div>
              </div>

              {/* Floating Data Card 1 */}
              <div className='absolute -top-12 -left-12 bg-white p-7 rounded-3xl shadow-2xl border border-slate-100 hidden xl:block animate-bounce-slow'>
                <div className='flex items-center gap-5'>
                  <div className='w-14 h-14 bg-[#1b69a1] rounded-2xl flex items-center justify-center shadow-lg shadow-[#1b69a1]/30'>
                    <svg
                      className='w-7 h-7 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='3'
                        d='L5 13l4 4L19 7'
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1'>
                      Entity Verification
                    </div>
                    <div className='text-lg font-black text-slate-900'>
                      Verified Active
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Data Card 2 */}
              <div className='absolute -bottom-12 -right-12 bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800 hidden xl:block animate-pulse-slow'>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center gap-12'>
                    <div className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>
                      Compliance Score
                    </div>
                    <div className='text-xs font-black text-[#1b69a1]'>
                      98.4%
                    </div>
                  </div>
                  <div className='w-48 h-2 bg-slate-800 rounded-full overflow-hidden'>
                    <div className='w-[98.4%] h-full bg-linear-to-r from-[#1b69a1] to-blue-400'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  
    {/* ================= SETUP FORM SECTION ================= */}
            {showForm && (
            <section
                id='setup-form-section'
                className='py-20 bg-slate-50 border-y border-slate-100'
            >
                <div className='max-w-3xl mx-auto px-6'>
                <div className='bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100'>
                    <div className='text-center mb-12'>
                    <h3 className='text-3xl font-black text-slate-900 mb-4'>
                        GST Compliance Checker
                    </h3>
                    <p className='text-slate-500 font-bold'>
                        Configure your business profile for automated monitoring.
                    </p>
                    </div>

                    <form onSubmit={handleProfileSubmit} className='space-y-8'>
                    <div className='grid md:grid-cols-2 gap-8'>
                        <div className='space-y-3'>
                        <label className='text-[11px] font-black uppercase tracking-widest text-slate-400 ml-4'>
                            Full Name
                        </label>
                        <input
                            type='text'
                            placeholder='John Doe'
                            required
                            value={form.name}
                            onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                            }
                            className='w-full bg-slate-50 border-2 border-slate-50 px-6 py-4 rounded-2xl font-bold focus:border-[#1b69a1] focus:bg-white outline-hidden transition-all'
                        />
                        </div>
                        <div className='space-y-3'>
                        <label className='text-[11px] font-black uppercase tracking-widest text-slate-400 ml-4'>
                            WhatsApp Number
                        </label>
                        <input
                            type='tel'
                            placeholder='+91 98765 43210'
                            required
                            value={form.phone}
                            onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                            }
                            className='w-full bg-slate-50 border-2 border-slate-50 px-6 py-4 rounded-2xl font-bold focus:border-[#1b69a1] focus:bg-white outline-hidden transition-all'
                        />
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <label className='text-[11px] font-black uppercase tracking-widest text-slate-400 ml-4'>
                        GSTIN (Identification Number)
                        </label>
                        <input
                        type='text'
                        placeholder='15-digit code'
                        required
                        value={form.gstin}
                        onChange={(e) =>
                            setForm({
                            ...form,
                            gstin: e.target.value.toUpperCase(),
                            })
                        }
                        className='w-full bg-slate-50 border-2 border-slate-50 px-6 py-4 rounded-2xl font-bold focus:border-[#1b69a1] focus:bg-white outline-hidden transition-all'
                        />
                    </div>
                    <div className='flex gap-4 pt-4'>
                        <button
                        type='submit'
                        disabled={isSearching}
                        className='flex-1 bg-[#1b69a1] text-white py-5 rounded-2xl font-black hover:bg-[#155685] transition-all shadow-xl shadow-[#1b69a1]/20 disabled:opacity-50'
                        >
                        {isSearching ? "Processing..." : "Save & Verify"}
                        </button>
                        <button
                        type='button'
                        onClick={() => setShowForm(false)}
                        className='px-10 py-5 rounded-2xl font-black text-slate-400 hover:text-slate-900 transition-all border-2 border-transparent hover:border-slate-100'
                        >
                        Cancel
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </section>
            )}

            {/* ================= RESULTS SECTION ================= */}
            {searchResult && (
            <section
                id='results-section'
                className='py-24 bg-white relative border-b border-slate-100'
            >
                <div className='max-w-7xl mx-auto px-6'>
                <div className='flex items-center justify-between mb-20'>
                    <div>
                    <span className='text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[11px] mb-4 block'>
                        Verification Node Output
                    </span>
                    <h2 className='text-5xl font-black text-slate-900 tracking-tight'>
                        GST Analytics: {searchResult.gstin}
                    </h2>
                    </div>
                    <button
                    onClick={() => setSearchResult(null)}
                    className='bg-slate-50 text-slate-400 hover:text-slate-900 w-14 h-14 rounded-full flex items-center justify-center transition-all'
                    >
                    ✕
                    </button>
                </div>

                <div className='bg-white rounded-[3.5rem] overflow-hidden shadow-[0_100px_150px_-50px_rgba(0,0,0,0.1)] border border-slate-100'>
                    <GSTProfileTabs
                    gstin={searchResult.gstin}
                    tradeName={searchResult.legalname}
                    state={searchResult.state}
                    gstData={searchResult}
                    />
                </div>
                </div>
            </section>
            )}

            {/* ================= LOGO CLOUD ================= */}
            <section className='py-16 border-y border-slate-100 bg-slate-50/30'>
            <div className='max-w-7xl mx-auto px-6 overflow-hidden'>
                <div className='flex flex-wrap justify-center md:justify-between items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000'>
                <span className='text-2xl font-black tracking-tighter'>
                    MICROSOFT
                </span>
                <span className='text-2xl font-black tracking-tighter'>
                    AIRTEL
                </span>
                <span className='text-2xl font-black tracking-tighter'>
                    AMAZON
                </span>
                <span className='text-2xl font-black tracking-tighter'>
                    RELIANCE
                </span>
                <span className='text-2xl font-black tracking-tighter'>
                    ZOMATO
                </span>
                </div>
            </div>
            </section>

            {/* ================= FEATURES SECTION ================= */}
            <section className='py-40 bg-white'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='grid lg:grid-cols-2 gap-20 items-end mb-32'>
                <div>
                    <span className='text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[11px] mb-6 block'>
                    Core Capabilities
                    </span>
                    <h2 className='text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight'>
                    Enterprise-grade <br />
                    GST verification.
                    </h2>
                </div>
                <p className='text-xl text-slate-500 font-medium leading-relaxed max-w-md'>
                    Engineered for speed and reliability, our engine provides a
                    complete 360° view of any tax-registered entity in India.
                </p>
                </div>

                <div className='grid md:grid-cols-3 gap-10'>
                {[
                    {
                    title: "Direct Port Access",
                    desc: "Low-latency integration with GSTN nodes ensures sub-second retrieval of legal data.",
                    img: "/images/gst1.jpg",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    },
                    {
                    title: "Risk Calibration",
                    desc: "Proprietary AI filters 24 months of filing history to generate automated compliance scores.",
                    img: "/images/gst1.jpg",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    },
                    {
                    title: "Historical Audits",
                    desc: "Access granular filing records for the last 5 financial years with detailed GSTR status.",
                    img: "/images/gst1.jpg",
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    },
                ].map((item, i) => (
                    <div
                    key={i}
                    className='group bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden hover:bg-white hover:shadow-[0_50px_100px_-20px_rgba(27,105,161,0.15)] transition-all duration-700 p-2'
                    >
                    <div className='h-64 overflow-hidden relative rounded-[2rem]'>
                        <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className='object-cover group-hover:scale-110 transition-transform duration-1000'
                        />
                        <div className='absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors'></div>
                        <div className='absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center text-[#1b69a1] shadow-xl'>
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2.5'
                            d={item.icon}
                            ></path>
                        </svg>
                        </div>
                    </div>
                    <div className='p-8'>
                        <h3 className='text-2xl font-black text-slate-900 mb-4 tracking-tight'>
                        {item.title}
                        </h3>
                        <p className='text-slate-500 leading-relaxed font-semibold text-[15px]'>
                        {item.desc}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </section>

            {/* ================= STEP SECTION ================= */}
            <section className='py-40 bg-slate-900 relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-[50%] h-full bg-[#1b69a1]/10 rounded-l-full blur-[120px]'></div>

            <div className='max-w-7xl mx-auto px-6 relative z-10'>
                <div className='flex flex-col lg:flex-row gap-32 items-center'>
                <div className='lg:w-1/2'>
                    <span className='text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[11px] mb-8 block font-mono'>
                    Step-by-step
                    </span>
                    <h2 className='text-5xl md:text-7xl font-black text-white mb-14 leading-[1.05] tracking-tight'>
                    Precision data <br />
                    in moments.
                    </h2>

                    <div className='space-y-16'>
                    {[
                        {
                        s: "01",
                        t: "Secure Handshake",
                        d: "Establish a secure session through Google OAuth 2.0 with military-grade encryption.",
                        },
                        {
                        s: "02",
                        t: "Identity Injection",
                        d: "Inject any 15-digit GST identifier into our global parser for immediate processing.",
                        },
                        {
                        s: "03",
                        t: "Intelligence Output",
                        d: "Receive a comprehensive risk-profile, filing history, and legal validation report.",
                        },
                    ].map((step, i) => (
                        <div key={i} className='flex gap-10 group'>
                        <div className='text-4xl font-black text-[#1b69a1]/30 group-hover:text-[#1b69a1] transition-all duration-500 font-mono'>
                            {step.s}
                        </div>
                        <div>
                            <h4 className='text-2xl font-bold text-white mb-3'>
                            {step.t}
                            </h4>
                            <p className='text-slate-400 font-medium leading-relaxed text-lg'>
                            {step.d}
                            </p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                <div className='lg:w-1/2 bg-slate-800 rounded-[3.5rem] p-5 border border-slate-700/50 shadow-[0_80px_120px_-30px_rgba(0,0,0,0.5)] relative'>
                    <div className='rounded-[3rem] overflow-hidden relative min-h-[500px]'>
                    <Image
                        src='/images/gst1.jpg'
                        alt='Process'
                        fill
                        className='opacity-70 object-cover group-hover:scale-105 transition-transform duration-1000'
                    />
                    <div className='absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-900/80'></div>
                    </div>

                    <div className='absolute -top-10 -right-10 w-40 h-40 bg-linear-to-br from-[#1b69a1] to-blue-500 rounded-full flex flex-col items-center justify-center shadow-3xl border-[8px] border-slate-900'>
                    <div className='text-3xl font-black text-white leading-none'>
                        100%
                    </div>
                    <div className='text-[10px] font-black text-white/90 uppercase mt-2 tracking-widest'>
                        Precision
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* ================= CTA SECTION ================= */}
            {/* <section className='max-w-7xl mx-auto px-6 py-40'>
            <div className='bg-linear-to-br from-[#1b69a1] via-[#155685] to-slate-900 rounded-[4rem] p-20 md:p-32 text-center text-white relative overflow-hidden shadow-[0_80px_120px_-30px_rgba(27,105,161,0.3)] group'>
                <div className='absolute inset-0 bg-[url("https://www.transparenttextures.com/patterns/carbon-fibre.png")] opacity-10'></div>
                <div className='absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[100px] group-hover:bg-[#1b69a1]/10 transition-colors duration-1000'></div>

                <h2 className='text-5xl md:text-8xl font-black mb-14 relative z-10 leading-[0.95] tracking-tight'>
                Own your <br />
                compliance.
                </h2>
                <div className='flex flex-wrap justify-center gap-8 relative z-10'>
                {status === "authenticated" ? (
                    <button
                    onClick={() => {
                        document
                        .getElementById("search-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className='bg-white text-[#1b69a1] px-14 py-7 rounded-2xl font-black hover:scale-105 transition-all shadow-2xl text-xl'
                    >
                    Start New Search
                    </button>
                ) : (
                    <button
                    onClick={() => signIn("google", { callbackUrl: "/gstinsight" })}
                    className='bg-white text-[#1b69a1] px-14 py-7 rounded-2xl font-black hover:scale-105 transition-all shadow-2xl text-xl'
                    >
                    Access Platform
                    </button>
                )}
                <button className='bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-14 py-7 rounded-2xl font-black hover:bg-white hover:text-slate-900 transition-all text-xl'>
                    Schedule Demo
                </button>
                </div>
            </div>
            </section> */}

            {/* ================= FOOTER ================= */}
            <footer className='bg-white pt-40 pb-20 px-6 border-t border-slate-100'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-24 mb-32'>
                <div className='col-span-2 md:col-span-2'>
                    <div className='flex items-center gap-4 mb-10 group cursor-pointer'>
                    <div className='w-12 h-12 bg-linear-to-tr from-[#1b69a1] to-blue-500 rounded-2xl flex items-center justify-center font-black text-white shadow-xl shadow-[#1b69a1]/20'>
                        G
                    </div>
                    <span className='text-slate-900 font-black text-3xl tracking-tighter uppercase'>
                        GSTInsight
                    </span>
                    </div>
                    <p className='text-slate-500 font-semibold leading-relaxed max-w-sm text-lg'>
                    The definitive source for Indian tax entity intelligence.
                    Built for scale, security, and surgical precision.
                    </p>
                    <div className='flex gap-6 mt-12'>
                    {[1, 2, 3, 4].map((i) => (
                        <div
                        key={i}
                        className='w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-[#1b69a1] hover:text-white transition-all cursor-pointer group shadow-sm'
                        >
                        <div className='w-5 h-5 border-2 border-current rounded-sm opacity-40 group-hover:opacity-100 transition-opacity'></div>
                        </div>
                    ))}
                    </div>
                </div>

                <div>
                    <h4 className='text-slate-900 font-black mb-10 text-[11px] uppercase tracking-[0.3em]'>
                    Protocol
                    </h4>
                    <ul className='space-y-6 text-[15px] font-bold text-slate-500'>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        Lookup Node
                    </li>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        Audit API
                    </li>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        Risk Scoring
                    </li>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        Watchtower
                    </li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-slate-900 font-black mb-10 text-[11px] uppercase tracking-[0.3em]'>
                    Integrations
                    </h4>
                    <ul className='space-y-6 text-[15px] font-bold text-slate-500'>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        Documentation
                    </li>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        System Health
                    </li>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        Webhooks
                    </li>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        Open Access
                    </li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-slate-900 font-black mb-10 text-[11px] uppercase tracking-[0.3em]'>
                    Organization
                    </h4>
                    <ul className='space-y-6 text-[15px] font-bold text-slate-500'>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        Architecture
                    </li>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        Public Assets
                    </li>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        Security Policy
                    </li>
                    <li className='hover:text-[#1b69a1] cursor-pointer transition-colors'>
                        Privacy
                    </li>
                    </ul>
                </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center text-[13px] font-bold text-slate-400 border-t border-slate-100 pt-12'>
                <p>
                    © 2026 GSTInsight Technologies. Precision compliance
                    infrastructure.
                </p>
                <div className='flex gap-12 mt-8 md:mt-0'>
                    <span className='hover:text-slate-900 cursor-pointer transition-colors'>
                    Network Policy
                    </span>
                    <span className='hover:text-slate-900 cursor-pointer transition-colors'>
                    Legal Handshake
                    </span>
                </div>
                </div>
            </div>
            </footer>
        </div>
        </>
    );
    }
