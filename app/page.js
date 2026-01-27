"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gstin: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/submit-gst/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );
      console.log("API BASE URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
      const data = await res.json();

      if (!res.ok || data.status !== "success") {
        throw new Error(data.message || "Failed to fetch GST report");
      }

      setResult(data.gst_report);
    } catch (err) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 500, margin: "40px auto" }}>
      <h1>GST Compliance Checker</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="WhatsApp Number"
          onChange={handleChange}
          required
        />
        <input
          name="gstin"
          placeholder="GSTIN"
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Check GST Status"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>GST Report</h3>
          <p>
            <b>Legal Name:</b> {result.legalname}
          </p>
          <p>
            <b>GSTIN:</b> {result.gstin}
          </p>
          <h4>GSTR-1</h4>
          <p>Status: {result.gtsr1.status}</p>
          <p>Pending Count: {result.gtsr1.pending_count}</p>
          <p>Due Date: {result.gtsr1.due_date || "N/A"}</p>

          <h4>GSTR-3B</h4>
          <p>Status: {result.gtsr3b.status}</p>
          <p>Pending Count: {result.gtsr3b.pending_count}</p>
          <p>Due Date: {result.gtsr3b.due_date || "N/A"}</p>
        </div>
      )}
    </main>
  );
}
