"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/navbar";
import { supabase } from "@/lib/supabase";
// import ComplianceChart from "@/components/ComplianceChart";

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
        setGstResult({
          ...data.gst_report,
          gtsr1: data.gst_report.gtsr1 ?? null,
          gtsr3b: data.gst_report.gtsr3b ?? null,
        });
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
    if (!gstResult) return null;
    const { gtsr1, gtsr3b } = gstResult;
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  User Dashboard
                </h1>
                <button
                  onClick={() => setShowDashboard(false)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Edit Profile
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Name</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {userData.name}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {userData.email}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {userData.phone}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">GSTIN</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {userData.gstin}
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <button
                  onClick={handleCheckGST}
                  disabled={checkingGST}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {checkingGST ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Checking GST...
                    </span>
                  ) : (
                    "Check GST Compliance"
                  )}
                </button>
              </div>
            </div>

            {/* Compliance History Chart
            {complianceHistory.length > 0 && (
              <ComplianceChart
                title='GST Filing Compliance History'
                data={complianceHistory}
              />
            )} */}

            {/* GST Result */}
            {gstResult && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  GST Compliance Result
                </h2>
                {gstResult.error ? (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">{gstResult.error}</p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-600">Legal Name</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {gstResult.legalname}
                        </p>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-600">GSTIN</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {gstResult.gstin}
                        </p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">
                          Latest GSTR-1 Filed
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                          {gstResult.latestgstr1}
                        </p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">
                          Latest GSTR-3B Filed
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                          {gstResult.latestgstr3b}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* GSTR1 Card */}
                      {gtsr1 && typeof gtsr1 === "object" && (
                        <div className="p-6 border rounded-xl shadow-sm">
                          <h3 className="text-xl font-bold mb-4">
                            GSTR-1 Status
                          </h3>

                          <p>
                            <strong>Status:</strong>
                            <span
                              className={`ml-2 px-2 py-1 rounded text-sm ${
                                gtsr1.status === "FILED"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {gtsr1.status}
                            </span>
                          </p>

                          <p>
                            <strong>Frequency:</strong> {gtsr1.frequency}
                          </p>
                          <p>
                            <strong>Pending Returns:</strong>{" "}
                            {gtsr1.pending_count}
                          </p>

                          {gtsr1.pending_months?.length > 0 && (
                            <p className="text-red-600 mt-2">
                              Pending Months: {gtsr1.pending_months.join(", ")}
                            </p>
                          )}

                          <p>
                            <strong>Due Date:</strong>{" "}
                            {gtsr1.due_date ?? "All Clear"}
                          </p>
                        </div>
                      )}

                      {/* GSTR3B Card */}
                      {gtsr3b && typeof gtsr3b === "object" && (
                        <div className="p-6 border rounded-xl shadow-sm">
                          <h3 className="text-xl font-bold mb-4">
                            GSTR-3B Status
                          </h3>

                          <p>
                            <strong>Status:</strong>
                            <span
                              className={`ml-2 px-2 py-1 rounded text-sm ${
                                gtsr3b.status === "FILED"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {gtsr3b.status}
                            </span>
                          </p>

                          <p>
                            <strong>Frequency:</strong> {gtsr3b.frequency}
                          </p>

                          <p>
                            <strong>Pending Returns:</strong>{" "}
                            {gtsr3b.pending_count}
                          </p>

                          {gtsr3b.pending_months?.length > 0 && (
                            <p className="text-red-600 mt-2">
                              Pending Months: {gtsr3b.pending_months.join(", ")}
                            </p>
                          )}

                          <p>
                            <strong>Due Date:</strong>{" "}
                            {gtsr3b.due_date ?? "All Clear"}
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Compliance History Section */}
            {complianceHistory.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Compliance History
                </h2>

                <div className="space-y-4">
                  {complianceHistory.map((record, index) => (
                    <div
                      key={record.id || index}
                      className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            GSTIN: {record.gstin}
                          </h3>
                          <p className="text-sm text-gray-500">
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-600">Legal Name</p>
                          <p className="font-semibold">
                            {record.legal_name || "N/A"}
                          </p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-600">Trade Name</p>
                          <p className="font-semibold">
                            {record.trade_name || "N/A"}
                          </p>
                        </div>
                      </div>

                      {/* GSTR1 Details */}
                      {record.gstr1_records && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            GSTR-1 Status
                          </h4>
                          <div className="bg-blue-50 p-4 rounded">
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
                              <p className="text-red-600 mt-2">
                                <strong>Pending Returns:</strong>{" "}
                                {record.gstr1_pending_count}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* GSTR3B Details */}
                      {record.gstr3b_records && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            GSTR-3B Status
                          </h4>
                          <div className="bg-purple-50 p-4 rounded">
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
                              <p className="text-red-600 mt-2">
                                <strong>Pending Returns:</strong>{" "}
                                {record.gstr3b_pending_count}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Raw JSON Data (Collapsible) */}
                      <details className="mt-4">
                        <summary className="cursor-pointer text-sm text-blue-600 hover:text-blue-800">
                          View Full Details
                        </summary>
                        <div className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto max-h-96">
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
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  GST Compliance Checker
                </h1>
                <p className="text-gray-600">
                  Verify your GST compliance status quickly and easily
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your business name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your WhatsApp number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="gstin"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    GSTIN
                  </label>
                  <input
                    id="gstin"
                    name="gstin"
                    type="text"
                    placeholder="Enter your GSTIN"
                    value={form.gstin}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>

              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex">
                    <div className="shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-800">{error}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Result */}
            <div className="space-y-8">
              {result ? (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">
                    Profile Updated
                  </h3>

                  <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                    <div className="flex">
                      <div className="shrink-0">
                        <svg
                          className="h-5 w-5 text-green-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-800">
                          {result.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8 h-full min-h-32 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ready to submit?
                  </h3>
                  <p className="text-gray-500 max-w-sm">
                    Fill in your details and click submit to update your
                    profile.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
