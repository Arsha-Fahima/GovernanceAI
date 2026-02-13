"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(null);

  // Redirect after login
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveMenu(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <Head>
        <title>GSTInsight – Intelligent GST Compliance Platform</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

        {/* ================= NAVBAR ================= */}
        <nav className="bg-white shadow-md relative z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

            {/* Logo */}
            <h1
              onClick={() => router.push("/")}
              className="text-2xl font-bold text-blue-700 cursor-pointer"
            >
              GST<span className="text-gray-800">Insight</span>
            </h1>

            <div className="flex gap-8 items-center">

              {/* ================= GST SERVICES ================= */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu("services");
                  }}
                  className="font-medium text-gray-700 hover:text-blue-600"
                >
                  GST Services ▾
                </button>

                {activeMenu === "services" && (
                  <div className="absolute left-0 mt-6 w-[750px] bg-white shadow-2xl rounded-2xl p-10 grid grid-cols-3 gap-10 animate-fadeIn">

                    <div>
                      <h4 className="font-bold text-blue-700 mb-4">
                        Compliance Solutions
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Check GST Return Status</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">View Filing History</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Track Upcoming Due Dates</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Identify Missed Filings</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">GSTIN Registration Details</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-blue-700 mb-4">
                        Return Intelligence
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">GSTR1 Filing Tables</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">GSTR3B Monthly Analysis</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">GSTR9 Annual Review</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Year-wise Summary Reports</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Turnover Classification</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-blue-700 mb-4">
                        Tools & Support
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">GST Calculator</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Late Fee Estimator</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Compliance Checklist</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Help Center</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Enterprise Solutions</li>
                      </ul>
                    </div>

                  </div>
                )}
              </div>

              {/* ================= RESOURCES ================= */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu("resources");
                  }}
                  className="font-medium text-gray-700 hover:text-blue-600"
                >
                  Resources ▾
                </button>

                {activeMenu === "resources" && (
                  <div className="absolute left-0 mt-6 w-[650px] bg-white shadow-2xl rounded-2xl p-10 grid grid-cols-2 gap-10 animate-fadeIn">

                    <div>
                      <h4 className="font-bold text-blue-700 mb-4">
                        Learning Center
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">GST Filing Guide</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Monthly vs Quarterly Filing</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Penalty & Interest Guide</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Compliance Best Practices</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Return Filing Tutorials</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-blue-700 mb-4">
                        Business Solutions
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">For Chartered Accountants</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">For MSMEs</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">For Startups</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Enterprise Plans</li>
                        <li className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">Pricing Overview</li>
                      </ul>
                    </div>

                  </div>
                )}
              </div>

            </div>

            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign in
            </button>

          </div>
        </nav>

        {/* ================= HERO SECTION ================= */}
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-8 py-20">

          <div>
            <Image
              src="/dashboard-preview.png"
              alt="GST Dashboard"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text">
              GST Done 100% Right — Every Filing, Every Time
            </h2>

            <p className="text-gray-600 mb-6">
              Access real-time GST status, filing history, compliance category,
              due dates, turnover classification, and complete return analytics —
              all in structured professional tables powered by intelligent automation.
            </p>

            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Access Your GST Dashboard
            </button>
          </div>

        </section>

      </div>
    </>
  );
}