"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
// ...existing code...
import { supabase } from "@/lib/supabase";
import GSTDetailsCard from "./components/GSTDetailsCard";
import ReturnsTable from "./components/ReturnsTable";
import ComplianceChart from "./components/ComplianceChart";
import ComplianceClassification from "./components/ComplianceClassification";
import GSTProfileTabs from "./components/GSTProfileTabs";
import Navbar from "./components/navbar";
// ...existing code...

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
        router.push("/");
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
        <Navbar />
        {/* spacer to compensate for fixed header height */}
        <div className='h-24'></div>

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
              {/* Smart Navigation Buttons */}
              <>
                <div className='flex items-center gap-4'>
                  {/* Check Compliance */}

                  <button
                    onClick={() => {
                      if (status === "authenticated") {
                        router.push("/gstinsight");
                      } else {
                        router.push("/login");
                      }
                    }}
                    className='px-6 py-2 rounded-full bg-[#1b69a1] 
               text-white font-semibold text-sm 
               hover:bg-[#155685] 
               transition-all shadow-md 
               active:scale-95'
                  >
                    Check Compliance
                  </button>

                  {/* ITC Button */}
                  <button
                    onClick={() => {
                      if (status === "authenticated") {
                        router.push("/gstinsight"); // change if ITC has separate page
                      } else {
                        router.push("/login");
                      }
                    }}
                    className='px-6 py-2 rounded-full border border-[#1b69a1] 
               text-[#1b69a1] font-semibold text-sm 
               hover:bg-[#1b69a1] hover:text-white
               transition-all 
               active:scale-95'
                  >
                    ITC
                  </button>
                </div>
              </>

              {/* <div
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
              </div> */}
              <br></br>
              <br></br>

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
                  src='/images/headeritc.png'
                  alt='Data Analytics Dashboard'
                  width={800}
                  height={600}
                  className='rounded-[2.8rem] opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-linear-to-tr from-[#1b69a1]/40 via-transparent to-transparent'></div>
              </div>

              {/* Floating Data Card 1 */}
              {/* Premium Analytics Panel */}
              <div className='relative hidden xl:block'>
                {/* Ambient Background Glow */}
                <div className='absolute -inset-20 bg-gradient-to-br from-[#1b69a1]/20 via-blue-400/10 to-transparent blur-3xl opacity-60'></div>

                {/* Main Glass Container */}
                <div className='relative backdrop-blur-2xl bg-white/70 border border-white/40 rounded-[32px] p-10 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.25)] w-[520px]'>
                  {/* Header */}
                  <div className='flex items-center justify-between mb-8'>
                    <div>
                      <p className='text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold'>
                        GST Intelligence
                      </p>
                      <h3 className='text-2xl font-semibold text-slate-900 tracking-tight'>
                        Entity Overview
                      </h3>
                    </div>

                    <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1b69a1] to-blue-500 flex items-center justify-center shadow-lg shadow-[#1b69a1]/30'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2.5'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className='grid grid-cols-2 gap-8'>
                    {/* Verification Status */}
                    <div className='space-y-2'>
                      <p className='text-xs uppercase tracking-widest text-slate-400 font-medium'>
                        Verification Status
                      </p>
                      <p className='text-lg font-semibold text-emerald-600'>
                        Verified & Active
                      </p>
                    </div>

                    {/* Compliance Score */}
                    <div className='space-y-2'>
                      <p className='text-xs uppercase tracking-widest text-slate-400 font-medium'>
                        Compliance Score
                      </p>
                      <p className='text-lg font-semibold text-[#1b69a1]'>
                        98.4%
                      </p>
                    </div>
                  </div>

                  {/* Premium Progress Bar */}
                  <div className='mt-8'>
                    <div className='w-full h-3 bg-slate-200/60 rounded-full overflow-hidden'>
                      <div className='h-full w-[98.4%] bg-gradient-to-r from-[#1b69a1] to-blue-400 rounded-full transition-all duration-1000'></div>
                    </div>
                  </div>

                  {/* Bottom Subtext */}
                  <div className='mt-6 text-sm text-slate-500'>
                    Last evaluated on{" "}
                    <span className='font-medium text-slate-700'>
                      Today, 10:42 AM
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Data Card 2 */}
              {/* Premium Compliance Card */}
              <div className='absolute -bottom-10 -right-10 hidden xl:block'>
                {/* Ambient Glow */}
                <div className='absolute inset-0 bg-gradient-to-br from-[#1b69a1]/30 to-blue-500/20 blur-2xl opacity-60 rounded-[28px]'></div>

                {/* Main Card */}
                <div
                  className='relative backdrop-blur-2xl bg-slate-900/80 border border-slate-700/40 rounded-[28px] p-9 w-[260px]
                  shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)]'
                >
                  {/* Header */}
                  <div className='flex justify-between items-center mb-6'>
                    <div>
                      <p className='text-[11px] uppercase tracking-[0.25em] text-slate-400 font-semibold'>
                        Compliance Score
                      </p>
                      <p className='text-2xl font-semibold text-white mt-1 tracking-tight'>
                        98.4%
                      </p>
                    </div>

                    {/* Status Dot */}
                    <div className='w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]'></div>
                  </div>

                  {/* Progress Track */}
                  <div className='relative w-full h-3 bg-slate-800/70 rounded-full overflow-hidden'>
                    {/* Progress Fill */}
                    <div className='h-full w-[98.4%] bg-gradient-to-r from-[#1b69a1] to-blue-400 rounded-full transition-all duration-1000'></div>

                    {/* Soft Shine Effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer'></div>
                  </div>

                  {/* Footer */}
                  <div className='mt-5 text-xs text-slate-400'>
                    Excellent compliance standing
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
        {/* <section className='py-16 border-y border-slate-100 bg-slate-50/30'>
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
        </section> */}

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

            {/* <div className='grid md:grid-cols-3 gap-10'>
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
            </div> */}
          </div>
        </section>

        {/* ================= STEP SECTION ================= */}
        <section className='py-40 relative overflow-hidden bg-slate-950'>
          {/* Ambient Background Glows */}
          <div className='absolute top-0 right-0 w-[60%] h-full bg-[#1b69a1]/5 rounded-l-full blur-[120px] animate-pulse'></div>
          <div className='absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]'></div>

          <div className='max-w-7xl mx-auto px-6 relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='flex flex-col lg:flex-row gap-24 items-center'
            >
              <div className='lg:w-1/2'>
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b69a1]/10 border border-[#1b69a1]/20 mb-10'>
                  <span className='w-1.5 h-1.5 rounded-full bg-[#1b69a1] animate-ping'></span>
                  <span className='text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[10px] font-mono'>
                    Execution Protocol
                  </span>
                </div>

                <h2 className='text-6xl md:text-8xl font-black text-white mb-16 leading-[0.9] tracking-tighter'>
                  Precision data <br />
                  <span className='text-[#1b69a1]'>in moments.</span>
                </h2>

                <div className='relative space-y-12 ml-4'>
                  {/* Vertical Progress Line */}
                  <div className='absolute left-[21px] top-6 bottom-6 w-[2px] bg-linear-to-b from-[#1b69a1] via-[#1b69a1]/20 to-transparent'></div>

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
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      className='flex gap-12 group relative'
                    >
                      <div className='relative shrink-0'>
                        <div className='w-[44px] h-[44px] rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-lg font-black text-white group-hover:border-[#1b69a1] group-hover:text-[#1b69a1] transition-all duration-500 z-10 relative bg-slate-950'>
                          {step.s}
                        </div>
                        {/* Glow behind number */}
                        <div className='absolute inset-0 bg-[#1b69a1]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                      </div>

                      <div className='pt-1'>
                        <h4 className='text-2xl font-bold text-white mb-3 group-hover:text-[#1b69a1] transition-colors duration-300'>
                          {step.t}
                        </h4>
                        <p className='text-slate-400 font-medium leading-relaxed text-lg max-w-md group-hover:text-slate-300 transition-colors duration-300'>
                          {step.d}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className='relative lg:w-1/2'
              >
                {/* Decorative Grid Pattern */}
                <div className='absolute -inset-20 bg-[radial-gradient(#1b69a1_1px,transparent_1px)] [background-size:32px_32px] opacity-10 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]'></div>

                {/* Ambient Background Glow */}
                <div className='absolute -inset-10 bg-gradient-to-br from-[#1b69a1]/40 via-blue-500/10 to-transparent blur-3xl opacity-50 animate-pulse'></div>

                {/* Glass Frame Wrapper */}
                <div className='relative p-1 bg-linear-to-br from-white/20 to-transparent rounded-[48px] shadow-2xl'>
                  <div
                    className='relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 
                    rounded-[44px] p-4 overflow-hidden'
                  >
                    {/* Image Container */}
                    <div className='relative rounded-[32px] overflow-hidden min-h-[560px] group'>
                      <Image
                        src='/images/gst2.jpg'
                        alt='GST Compliance Intelligence'
                        fill
                        className='object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110'
                      />

                      {/* Advanced Gradient Overlays */}
                      <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80'></div>
                      <div className='absolute inset-0 bg-linear-to-tr from-[#1b69a1]/30 via-transparent to-transparent opacity-40'></div>
                    </div>

                    {/* Floating UI Elements */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className='absolute bottom-10 left-10 backdrop-blur-2xl bg-white/5 
                      border border-white/10 rounded-3xl p-6 
                      shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] group/metric'
                    >
                      <div className='flex items-center gap-4 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse'></div>
                        <div className='text-xs uppercase tracking-[0.3em] text-white/50 font-black'>
                          System Accuracy
                        </div>
                      </div>
                      <div className='text-4xl font-black text-white tracking-tighter flex items-end gap-1'>
                        100<span className='text-[#1b69a1] text-2xl'>%</span>
                      </div>
                    </motion.div>

                    {/* Sub-card: Latency */}
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className='absolute top-10 right-10 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl px-5 py-3 shadow-xl'
                    >
                      <div className='text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1'>
                        Data Latency
                      </div>
                      <div className='text-lg font-black text-white'>18ms</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= GST COMPLIANCE BENEFITS SECTION ================= */}
        <section className='py-48 bg-white relative overflow-hidden'>
          {/* Subtle Decorative Elements */}
          <div className='absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent'></div>

          <div className='max-w-7xl mx-auto px-6 text-center relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='mb-24'
            >
              <div className='inline-flex items-center px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full mb-8'>
                <span className='text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[10px]'>
                  Compliance Intelligence
                </span>
              </div>

              <h2 className='text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none'>
                Stay 100% GST <span className='text-[#1b69a1]'>Compliant</span>
              </h2>
            </motion.div>

            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  t: "Complete Return Visibility",
                  d: "View GSTR-1, GSTR-3B, GSTR-9 history, filing frequency, and compliance records instantly in structured format.",
                  icon: "M9 17v-6h13M9 7h13M5 7h.01M5 17h.01",
                  color: "bg-blue-500",
                },
                {
                  t: "Deadline & Risk Alerts",
                  d: "Detect missed filings, upcoming due dates, and compliance risks before penalties or legal notices occur.",
                  icon: "M12 8v4l3 3M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z",
                  color: "bg-indigo-500",
                },
                {
                  t: "Avoid Penalties & Fees",
                  d: "Identify compliance gaps early and take corrective action to prevent late fees, penalties, and GST notices.",
                  icon: "M5 13l4 4L19 7",
                  color: "bg-[#1b69a1]",
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className='group relative'
                >
                  {/* Premium Glowing Border Effect */}
                  <div className='absolute -inset-[1px] bg-linear-to-br from-slate-200 to-transparent rounded-[3rem] group-hover:from-[#1b69a1]/40 group-hover:to-[#1b69a1]/10 transition-all duration-500 mt-0'></div>

                  <div className='relative bg-white rounded-[3rem] p-12 h-full flex flex-col items-center text-center shadow-sm group-hover:shadow-[0_40px_80px_-20px_rgba(27,105,161,0.12)] transition-all duration-500 border border-slate-50'>
                    {/* Icon Container with Gradient */}
                    <div className='w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 relative'>
                      <div className='absolute inset-0 bg-linear-to-br from-[#1b69a1]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity'></div>
                      <svg
                        className='w-10 h-10 text-[#1b69a1]'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d={benefit.icon}
                        />
                      </svg>
                    </div>

                    <h3 className='text-2xl font-black text-slate-900 mb-6 tracking-tight'>
                      {benefit.t}
                    </h3>

                    <p className='text-slate-500 font-medium leading-relaxed text-lg'>
                      {benefit.d}
                    </p>

                    {/* Subtle Decorative Line */}
                    <div className='mt-10 w-12 h-1 bg-slate-100 rounded-full group-hover:w-20 group-hover:bg-[#1b69a1]/30 transition-all duration-500'></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= USE CASES SECTION ================= */}
        <section className='py-40 bg-slate-950 relative overflow-hidden'>
          <div className='absolute inset-0 opacity-20 bg-[radial-gradient(#1b69a1_1px,transparent_1px)] [background-size:40px_40px]'></div>

          <div className='max-w-7xl mx-auto px-6 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-24 items-center'>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className='grid grid-cols-2 gap-6'
              >
                {[
                  {
                    t: "E-commerce",
                    d: "Automate vendor onboarding for digital marketplaces.",
                    icon: "🛍️",
                  },
                  {
                    t: "Banking",
                    d: "Verify business identities for loan approvals instantly.",
                    icon: "🏦",
                  },
                  {
                    t: "Supply Chain",
                    d: "Monitor compliance across 10,000+ tier-2 suppliers.",
                    icon: "🚛",
                  },
                  {
                    t: "Accounting",
                    d: "Consolidate GSTR status for bulk auditing reports.",
                    icon: "📈",
                  },
                ].map((use, i) => (
                  <div
                    key={i}
                    className='bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-colors group'
                  >
                    <div className='text-4xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                      {use.icon}
                    </div>
                    <h4 className='text-lg font-bold text-white mb-2'>
                      {use.t}
                    </h4>
                    <p className='text-slate-400 text-sm font-medium leading-relaxed'>
                      {use.d}
                    </p>
                  </div>
                ))}
              </motion.div>

              <div>
                <span className='text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[11px] mb-8 block'>
                  Tailored Solutions
                </span>
                <h2 className='text-5xl md:text-7xl font-black text-white mb-10 leading-[1] tracking-tight'>
                  Built for your <br />
                  <span className='text-[#1b69a1]'>Workflow.</span>
                </h2>
                <p className='text-lg text-slate-400 font-medium leading-relaxed mb-12'>
                  Whether you are a startup verifying your first supplier or a
                  Fortune 500 company managing a global supply chain, our
                  infrastructure scales with your regulatory requirements.
                </p>
                <div className='space-y-6'>
                  {[
                    "Zero-config API integration",
                    "Custom risk threshold alerts",
                    "Exportable PDF compliance audits",
                    "Single Sign-On (SSO) Support",
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className='flex items-center gap-4 text-white font-bold tracking-tight'
                    >
                      <div className='w-5 h-5 rounded-full bg-[#1b69a1]/20 flex items-center justify-center'>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#1b69a1]'></div>
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECURITY & INFRASTRUCTURE ================= */}
        <section className='py-40 bg-slate-50 relative overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent'></div>

          <div className='max-w-7xl mx-auto px-6'>
            <div className='flex flex-col lg:flex-row gap-24 items-center'>
              <div className='lg:w-1/2'>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className='text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[11px] mb-8 block'>
                    Security Architecture
                  </span>
                  <h2 className='text-5xl md:text-7xl font-black text-slate-900 mb-12 leading-[1] tracking-tight'>
                    Bank-grade <br />
                    Data Sovereignty.
                  </h2>
                  <p className='text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-lg'>
                    Our infrastructure is engineered to meet the highest
                    security standards required by financial institutions and
                    government agencies. Every request is isolated, encrypted,
                    and processed in secure enclaves.
                  </p>

                  <div className='grid grid-cols-2 gap-10'>
                    {[
                      { label: "Encryption", val: "AES-256" },
                      { label: "Compliance", val: "SOC2 Type II" },
                      { label: "Uptime", val: "99.99%" },
                      { label: "Data Residency", val: "Local" },
                    ].map((m, i) => (
                      <div key={i} className='border-l-4 border-[#1b69a1] pl-6'>
                        <div className='text-xs uppercase tracking-widest text-slate-400 font-bold mb-1'>
                          {m.label}
                        </div>
                        <div className='text-2xl font-black text-slate-900'>
                          {m.val}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className='lg:w-1/2 relative'>
                {/* Visualizing Data Streams */}
                <div className='bg-slate-900 rounded-[3rem] p-10 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-800 relative group overflow-hidden'>
                  <div className='absolute inset-0 bg-linear-to-br from-[#1b69a1]/20 via-transparent to-transparent opacity-50'></div>

                  <div className='relative z-10 space-y-6'>
                    {[
                      {
                        l: "Secure Gateway Authorization",
                        s: "Verified",
                        w: "100%",
                      },
                      {
                        l: "End-to-End Packet Encryption",
                        s: "Active",
                        w: "94%",
                      },
                      {
                        l: "Multi-Node Identity Check",
                        s: "Complete",
                        w: "100%",
                      },
                      { l: "Risk Signature Validation", s: "Locked", w: "88%" },
                    ].map((job, idx) => (
                      <div key={idx} className='space-y-3'>
                        <div className='flex justify-between text-[11px] font-black uppercase tracking-widest'>
                          <span className='text-white/60'>{job.l}</span>
                          <span className='text-[#1b69a1]'>{job.s}</span>
                        </div>
                        <div className='h-1.5 w-full bg-slate-800 rounded-full overflow-hidden'>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: job.w }}
                            transition={{ duration: 1.5, delay: idx * 0.2 }}
                            className='h-full bg-[#1b69a1] rounded-full'
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='mt-12 flex justify-center'>
                    <div className='px-8 py-3 rounded-full bg-white/5 border border-white/10 text-[11px] font-black text-white/40 uppercase tracking-[0.3em]'>
                      Audit Log • Terminal 042
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className='py-40 bg-white relative'>
          <div className='max-w-4xl mx-auto px-6'>
            <div className='text-center mb-24'>
              <h2 className='text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8'>
                Common <span className='text-[#1b69a1]'>Inquiries</span>
              </h2>
              <p className='text-xl text-slate-500 font-medium'>
                Everything you need to know about the GSTInsight protocol.
              </p>
            </div>

            <div className='space-y-6'>
              {[
                {
                  q: "How real-time is the verification data?",
                  a: "Our engine interfaces directly with GSTN secondary nodes, providing sub-second retrieval of the current legal status, ensuring your data is never older than 60 seconds.",
                },
                {
                  q: "Is Google OAuth required for every search?",
                  a: "Auth is required for enterprise auditing and profile monitoring. Anonymous lookups are available in limited capacity, but authenticated sessions unlock full risk-profile reports.",
                },
                {
                  q: "Can I monitor multiple GSTINs simultaneously?",
                  a: "Yes. Our 'Watchtower' protocol allows businesses to upload a global list of GSTINs for automated daily compliance monitoring and delta alerts.",
                },
                {
                  q: "What does the Compliance Score indicate?",
                  a: "The score is a proprietary calculation based on 24 months of filing history, on-time frequency, and legal status stability, helping you assess vendor risk instantly.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className='group'
                >
                  <div className='bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-[#1b69a1]/30 transition-all duration-300'>
                    <h4 className='text-xl font-bold text-slate-900 mb-4 flex items-center gap-4'>
                      <span className='w-8 h-8 rounded-lg bg-[#1b69a1] flex items-center justify-center text-white text-xs font-black shrink-0'>
                        Q
                      </span>
                      {faq.q}
                    </h4>
                    <p className='text-slate-500 leading-relaxed font-semibold pl-12 line-clamp-2 group-hover:line-clamp-none transition-all duration-500'>
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              ))}
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
                  onClick={() => signIn("google", { callbackUrl: "/" })}
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
                {/* <div className='flex gap-6 mt-12'>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className='w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-[#1b69a1] hover:text-white transition-all cursor-pointer group shadow-sm'
                    >
                      <div className='w-5 h-5 border-2 border-current rounded-sm opacity-40 group-hover:opacity-100 transition-opacity'></div>
                    </div>
                  ))}
                </div> */}
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
