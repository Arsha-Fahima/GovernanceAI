"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/navbar";
import { supabase } from "@/lib/supabase";
import GSTProfileTabs from "./components/GSTProfileTabs";
import ComplianceChart from "./components/ComplianceChart";
import ComplianceClassification from "./components/ComplianceClassification";
import RecentGSTReturns from "./components/RecentGSTReturns";
import GSTDetailsCard from "./components/GSTDetailsCard";
import ReturnsTable from "./components/ReturnsTable";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    gstin: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      // Fetch user data from database
      fetchUserData();
    }
  }, [session]);

  // const fetchUserData = async () => {
  //   if (!session?.user?.email) return;

  //   const { data, error } = await supabase
  //     .from("users")
  //     .select("*")
  //     .eq("email", session.user.email)
  //     .maybe_single();

  //   if (data) {
  //     setUserData(data);
  //     setForm({
  //       name: data.name || "",
  //       phone: data.phone || "",
  //       gstin: data.gstin || "",
  //     });
  //     // // If user has phone and gstin filled, show dashboard
  //     // if (data.phone && data.gstin) {
  //     //   setShowDashboard(true);
  //     //   fetchComplianceHistory(data.gstin);
  //     // }
  //   }
  // };

  const fetchUserData = async () => {
    if (!session?.user?.email) return;

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", session.user.email)
      .single();

    if (data) {
      setUserData(data);
      // Don't show temporary GSTIN in form
      const gstinValue = data.gstin?.startsWith("TEMP_")
        ? ""
        : data.gstin || "";
      setForm({
        name: data.name || "",
        phone: data.phone || "",
        gstin: gstinValue,
      });
      // If user has phone and gstin filled, show dashboard and fetch compliance
      if (data.phone && data.gstin && !data.gstin.startsWith("TEMP_")) {
        setShowDashboard(true);
        fetchComplianceHistory(data.gstin);
      }
    }
  };

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [userData, setUserData] = useState(null);
  const [checkingGST, setCheckingGST] = useState(false);
  const [gstResult, setGstResult] = useState(null);
  const [complianceHistory, setComplianceHistory] = useState([]);

  const fetchComplianceHistory = async (gstin) => {
    try {
      const { data, error } = await supabase
        .from("compliance")
        .select("*")
        .eq("gstin", gstin)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching compliance history:", error);
        return;
      }

      if (data && data.length > 0) {
        setComplianceHistory(data);
      }
    } catch (err) {
      console.error("Error processing compliance history:", err);
    }
  };
  //           });
  //         });
  //       }

  //       setComplianceHistory(chartData);
  //     }
  //   } catch (err) {
  //     console.error("Error processing compliance history:", err);
  //   }
  // };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Update user details (user already exists from Google login)
      const { data, error } = await supabase
        .from("users")
        .update({
          name: form.name,
          phone: form.phone,
          gstin: form.gstin,
        })
        .eq("email", session.user.email)
        .select();

      if (error) {
        throw new Error(error.message);
      }

      setResult({ success: true, message: "Profile updated successfully!" });
      setUserData(data[0]);
      // Show dashboard after successful submission
      setTimeout(() => {
        setShowDashboard(true);
      }, 1500);
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckGST = async () => {
    setCheckingGST(true);
    setGstResult(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/check-status/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            gstin: userData.gstin,
          }),
        },
      );

      const data = await response.json();

      if (data.status === "success") {
        console.log("FULL GST RESULT:", data.gst_report);
        setGstResult(data.gst_report);
      } else {
        setGstResult({ error: data.message || "Failed to check GST" });
      }
    } catch (err) {
      console.error("Error checking GST:", err);
      setGstResult({ error: "Failed to check GST. Please try again." });
    } finally {
      setCheckingGST(false);
    }
  };

  // Dashboard View
  if (showDashboard && userData) {
    return (
      <>
        <Navbar />
        <main className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 px-3 sm:px-6 lg:px-6'>
          <div className='max-w-screen-xl mx-auto px-4'>
            <div className='bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6'>
              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold'>
                    {userData?.name?.charAt(0) || "U"}
                  </div>
                  <div>
                    <h1 className='text-2xl font-semibold text-gray-900'>
                      {userData.name}
                    </h1>
                    <p className='text-sm text-gray-500'>{userData.email}</p>
                    <div className='mt-2 flex items-center gap-2'>
                      <span className='text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full'>
                        GSTIN: {userData.gstin}
                      </span>
                      <span className='text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full'>
                        Phone: {userData.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <button
                    onClick={() => setShowDashboard(false)}
                    className='text-sm text-gray-700 px-3 py-2 rounded-md border hover:bg-gray-50'
                  >
                    Edit Profile
                  </button>

                  <button
                    onClick={handleCheckGST}
                    disabled={checkingGST}
                    className='inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium'
                  >
                    {checkingGST ? (
                      <svg
                        className='animate-spin h-4 w-4'
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        />
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
                        />
                      </svg>
                    ) : null}
                    Check Compliance
                  </button>

                  <button
                    onClick={() => window.location.reload()}
                    className='text-sm text-gray-700 px-3 py-2 rounded-md border hover:bg-gray-50'
                  >
                    Refresh
                  </button>
                </div>
              </div>

              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                <div className='bg-gray-50 rounded-lg p-4 text-sm'>
                  <p className='text-xs text-gray-500'>Profile Verified</p>
                  <p className='text-base font-semibold text-gray-900'>
                    {userData?.email ? "Yes" : "No"}
                  </p>
                </div>

                <div className='bg-gray-50 rounded-lg p-4 text-sm'>
                  <p className='text-xs text-gray-500'>Last Checked</p>
                  <p className='text-base font-semibold text-gray-900'>
                    {(() => {
                      const last =
                        complianceHistory?.[0]?.created_at ||
                        gstResult?.checked_at ||
                        null;
                      return last
                        ? new Date(last).toLocaleDateString()
                        : "Unknown";
                    })()}
                  </p>
                </div>

                <div className='bg-gray-50 rounded-lg p-4 text-sm'>
                  <p className='text-xs text-gray-500'>Pending GSTR-1</p>
                  <p
                    className={`text-base font-semibold ${(complianceHistory?.[0]?.gstr1_pending_count ?? gstResult?.gstr1?.pending_count ?? 0) > 0 ? "text-red-600" : "text-gray-700"}`}
                  >
                    {complianceHistory?.[0]?.gstr1_pending_count ??
                      gstResult?.gstr1?.pending_count ??
                      0}
                  </p>
                  <p className='text-xs text-gray-500 mt-1'>
                    Due:{" "}
                    {complianceHistory?.[0]?.g1_summary?.due_date ??
                      gstResult?.gstr1?.due_date ??
                      gstResult?.g3bSummary?.due_date ??
                      "Unknown"}
                  </p>
                </div>

                <div className='bg-gray-50 rounded-lg p-4 text-sm'>
                  <p className='text-xs text-gray-500'>Pending GSTR-3B</p>
                  <p
                    className={`text-base font-semibold ${(complianceHistory?.[0]?.gstr3b_pending_count ?? gstResult?.gstr3b?.pending_count ?? 0) > 0 ? "text-red-600" : "text-gray-700"}`}
                  >
                    {complianceHistory?.[0]?.gstr3b_pending_count ??
                      gstResult?.gstr3b?.pending_count ??
                      0}
                  </p>
                  <p className='text-xs text-gray-500 mt-1'>
                    Due:{" "}
                    {complianceHistory?.[0]?.g3b_summary?.due_date ??
                      gstResult?.gstr3b?.due_date ??
                      "Unknown"}
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance History Chart
            {complianceHistory.length > 0 && (
              <ComplianceChart
                title='GST Filing Compliance History'
                data={complianceHistory}
              />
            )} */}

            {/*GSTResult Tabs*/}
            {gstResult && !gstResult.error && (
              <div className='mt-6'>
                <GSTProfileTabs
                  gstin={gstResult.gstin}
                  tradeName={gstResult.legalname}
                  state={gstResult.state}
                  gstData={gstResult} // 👈 PASS FULL DATA
                />
              </div>
            )}

            {gstResult?.error && (
              <div className='mt-6 bg-red-50 border border-red-200 p-4 rounded-lg text-red-700'>
                {gstResult.error}
              </div>
            )}

            {/* Compliance History Section */}
            {complianceHistory.length > 0 && (
              <div className='bg-white rounded-xl shadow-lg p-6 mt-6'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                  Compliance History
                </h2>

                <div className='space-y-4'>
                  {complianceHistory.map((record, index) => (
                    <div
                      key={record.id || index}
                      className='border rounded-lg p-4 hover:shadow-md transition-shadow'
                    >
                      <div className='flex justify-between items-start mb-4'>
                        <div>
                          <h3 className='text-lg font-semibold text-gray-900'>
                            GSTIN: {record.gstin}
                          </h3>
                          <p className='text-sm text-gray-500'>
                            Checked on:{" "}
                            {new Date(record.created_at).toLocaleDateString(
                              "en-IN",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                          </p>
                        </div>
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <div className='p-3 bg-gray-50 rounded'>
                          <p className='text-sm text-gray-600'>Legal Name</p>
                          <p className='font-semibold'>
                            {record.legal_name || "N/A"}
                          </p>
                        </div>
                        <div className='p-3 bg-gray-50 rounded'>
                          <p className='text-sm text-gray-600'>Trade Name</p>
                          <p className='font-semibold'>
                            {record.trade_name || "N/A"}
                          </p>
                        </div>
                      </div>

                      {/* GSTR1 Details */}
                      {record.gstr1_records && (
                        <div className='mb-4'>
                          <h4 className='font-semibold text-gray-800 mb-2'>
                            GSTR-1 Status
                          </h4>
                          <div className='bg-blue-50 p-4 rounded'>
                            <p>
                              <strong>Status:</strong>{" "}
                              <span
                                className={`px-2 py-1 rounded text-sm ${record.gstr1_status === "FILED" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                              >
                                {record.gstr1_status || "Unknown"}
                              </span>
                            </p>
                            <p>
                              <strong>Latest Filed:</strong>{" "}
                              {record.latest_gstr1 || "N/A"}
                            </p>
                            {record.gstr1_pending_count > 0 && (
                              <p className='text-red-600 mt-2'>
                                <strong>Pending Returns:</strong>{" "}
                                {record.gstr1_pending_count}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* GSTR3B Details */}
                      {record.gstr3b_records && (
                        <div className='mb-4'>
                          <h4 className='font-semibold text-gray-800 mb-2'>
                            GSTR-3B Status
                          </h4>
                          <div className='bg-purple-50 p-4 rounded'>
                            <p>
                              <strong>Status:</strong>{" "}
                              <span
                                className={`px-2 py-1 rounded text-sm ${record.gstr3b_status === "FILED" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                              >
                                {record.gstr3b_status || "Unknown"}
                              </span>
                            </p>
                            <p>
                              <strong>Latest Filed:</strong>{" "}
                              {record.latest_gstr3b || "N/A"}
                            </p>
                            {record.gstr3b_pending_count > 0 && (
                              <p className='text-red-600 mt-2'>
                                <strong>Pending Returns:</strong>{" "}
                                {record.gstr3b_pending_count}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Raw JSON Data (Collapsible) */}
                      <details className='mt-4'>
                        <summary className='cursor-pointer text-sm text-blue-600 hover:text-blue-800'>
                          View Full Details
                        </summary>
                        <div className='mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto max-h-96'>
                          <pre>{JSON.stringify(record, null, 2)}</pre>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </>
    );
  }

  // Form View

  return (
    <>
      <Navbar />
      <main className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
            {/* Left Column: Form */}
            <div className='bg-white rounded-lg shadow-sm p-6 sm:p-8'>
              <div className='mb-6'>
                <h1 className='text-2xl font-bold text-gray-900'>
                  GST Compliance Checker
                </h1>
                <p className='text-sm text-gray-500 mt-1'>
                  Quickly verify GST filing status and pending returns
                </p>
              </div>

              <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-xs font-medium text-gray-700 mb-1'
                    >
                      Full Name
                    </label>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      placeholder='Business name'
                      value={form.name}
                      onChange={handleChange}
                      required
                      className='w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-xs font-medium text-gray-700 mb-1'
                    >
                      WhatsApp Number
                    </label>
                    <input
                      id='phone'
                      name='phone'
                      type='tel'
                      placeholder='WhatsApp'
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className='w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='gstin'
                    className='block text-xs font-medium text-gray-700 mb-1'
                  >
                    GSTIN
                  </label>
                  <input
                    id='gstin'
                    name='gstin'
                    type='text'
                    placeholder='12ABCDE1234F1Z5'
                    value={form.gstin}
                    onChange={handleChange}
                    required
                    className='w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500'
                  />
                </div>

                <div className='flex items-center gap-3'>
                  <button
                    type='submit'
                    disabled={loading}
                    className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium'
                  >
                    {loading ? "Submitting..." : "Save & Show Dashboard"}
                  </button>

                  <button
                    type='button'
                    onClick={() => {
                      setForm({ name: "", phone: "", gstin: "" });
                      setResult(null);
                    }}
                    className='text-sm px-3 py-2 rounded-md border'
                  >
                    Reset
                  </button>
                </div>
              </form>

              {error && (
                <div className='mt-4 p-3 bg-red-50 border border-red-100 rounded text-red-700 text-sm'>
                  {error}
                </div>
              )}
            </div>

            {/* Right Column: Result */}
            <div className='space-y-8'>
              {result ? (
                <div className='bg-white rounded-xl shadow-lg p-8'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-6 border-b pb-4'>
                    Profile Updated
                  </h3>

                  <div className='p-4 rounded-lg bg-green-50 border border-green-100'>
                    <div className='flex'>
                      <div className='shrink-0'>
                        <svg
                          className='h-5 w-5 text-green-400'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                      <div className='ml-3'>
                        <p className='text-sm text-green-800'>
                          {result.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='bg-white rounded-xl shadow-lg p-8 h-full min-h-32 flex flex-col items-center justify-center text-center'>
                  <div className='w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6'>
                    <svg
                      className='w-10 h-10 text-blue-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    Ready to submit?
                  </h3>
                  <p className='text-gray-500 max-w-sm'>
                    Fill in your details and click submit to update your
                    profile.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <br></br>
      </main>
    </>
  );
}
