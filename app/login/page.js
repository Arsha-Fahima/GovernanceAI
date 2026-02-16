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

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

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
            <h1
              onClick={() => router.push("/")}
              className="text-2xl font-bold text-blue-700 cursor-pointer"
            >
              GST<span className="text-gray-800">Insight</span>
            </h1>

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
              src="/"
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
              due dates, turnover classification, and complete return analytics
              — all in structured professional tables powered by intelligent
              automation.
            </p>

            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Access Your GST Dashboard
            </button>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h3 className="text-3xl font-bold mb-16 text-gray-800">
              We Help You Stay 100% GST Compliant
            </h3>

            <div className="grid md:grid-cols-3 gap-10">
              {/* BOX 1 */}
              <div className="bg-white border rounded-2xl p-10 shadow-sm hover:shadow-xl transition duration-300">
                <Image
                  src=""
                  alt="GST Return Details"
                  width={70}
                  height={70}
                  className="mx-auto mb-6"
                />

                <h4 className="text-xl font-semibold mb-4 text-gray-800">
                  View Complete GST Return Details
                </h4>

                <p className="text-gray-600 text-sm">
                  Instantly access GSTR1, GSTR3B, and GSTR9 filings with
                  structured data tables, return history, and compliance status.
                </p>
              </div>

              {/* BOX 2 */}
              <div className="bg-white border rounded-2xl p-10 shadow-sm hover:shadow-xl transition duration-300">
                <Image
                  src="/app/alert.jpeg"
                  alt="Compliance Alerts"
                  width={70}
                  height={70}
                  className="mx-auto mb-6"
                />

                <h4 className="text-xl font-semibold mb-4 text-gray-800">
                  Receive Smart Compliance Alerts
                </h4>

                <p className="text-gray-600 text-sm">
                  Get proactive notifications for upcoming due dates, missed
                  filings, and compliance risks before penalties apply.
                </p>
              </div>

              {/* BOX 3 */}
              <div className="bg-white border rounded-2xl p-10 shadow-sm hover:shadow-xl transition duration-300">
                <Image
                  src="/features/penalty-reduction.png"
                  alt="Penalty Reduction"
                  width={70}
                  height={70}
                  className="mx-auto mb-6"
                />

                <h4 className="text-xl font-semibold mb-4 text-gray-800">
                  Reduce Late Fees & Penalties
                </h4>

                <p className="text-gray-600 text-sm">
                  Identify filing gaps early and take corrective action to
                  minimize interest charges and unnecessary penalties.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
