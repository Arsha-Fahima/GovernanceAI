"use client";

import React, { useMemo, useState } from "react";
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Dot,
  ReferenceLine,
} from "recharts";

// Parse date in dd/mm/yyyy to Date
const parseDMY = (s) => {
  if (!s) return null;
  try {
    const [d, m, y] = s.split("/");
    return new Date(parseInt(y, 10), parseInt(m, 10) - 1, parseInt(d, 10));
  } catch (e) {
    return null;
  }
};

const CustomDot = (props) => {
  const { cx, cy, payload } = props;
  const isLate = payload.value < 0;
  const isAdvanced = payload.value > 0;
  const fill = isLate ? "#ef4444" : isAdvanced ? "#10b981" : "#fbbf24";

  return (
    <Dot
      {...props}
      cx={cx}
      cy={cy}
      r={6}
      fill={fill}
      strokeWidth={2}
      stroke='#fff'
      style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}
    />
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isAdvanced = data.value > 0;
    const isLate = data.value < 0;

    const statusText = isAdvanced
      ? `Advanced (${data.value} days)`
      : isLate
        ? `Late (${Math.abs(data.value)} days)`
        : "On Time";

    return (
      <div className='bg-white p-4 border rounded shadow-lg min-w-[220px]'>
        <p className='font-bold text-gray-900 border-b pb-1 mb-2'>
          {data.period}
        </p>
        <p
          className={`text-sm font-semibold ${isLate ? "text-red-600" : "text-green-600"}`}
        >
          {statusText}
        </p>
        <div className='mt-2 text-xs text-gray-600'>
          <div>Filing Date: {data.filingDate}</div>
          <div>Due Date: {data.dueDate}</div>
        </div>
      </div>
    );
  }
  return null;
};

export default function ComplianceChart({ title, data = [] }) {
  // Normalize and compute diffs
  const chartData = useMemo(() => {
    const list = (Array.isArray(data) ? data : []).map((record) => {
      const fDate = parseDMY(
        record.filingDate || record.filing_date || record.filing,
      );
      const dDate = parseDMY(record.dueDate || record.due_date || record.due);

      // Positive = filed before due (Advanced), Negative = late
      let diffDays = 0;
      if (fDate && dDate) {
        const diffTime = dDate.getTime() - fDate.getTime();
        diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
      }

      return {
        period:
          record.period ||
          record.taxp ||
          record.period_name ||
          record.period ||
          "-",
        filingDate:
          record.filingDate || record.filing_date || record.filing || "-",
        dueDate: record.dueDate || record.due_date || record.due || "-",
        value: diffDays,
      };
    });

    // Sort by due date ascending if possible
    list.sort((a, b) => {
      const da = parseDMY(a.dueDate);
      const db = parseDMY(b.dueDate);
      if (!da && !db) return 0;
      if (!da) return 1;
      if (!db) return -1;
      return da - db;
    });

    return list;
  }, [data]);

  // Summary metrics
  const stats = useMemo(() => {
    const total = chartData.length;
    const onTime = chartData.filter((r) => r.value === 0).length;
    const late = chartData.filter((r) => r.value < 0).length;
    const advanced = chartData.filter((r) => r.value > 0).length;
    const avg = total
      ? Math.round(chartData.reduce((s, r) => s + r.value, 0) / total)
      : 0;
    return { total, onTime, late, advanced, avg };
  }, [chartData]);

  // Controls: range and export
  const [range, setRange] = useState("all");
  const now = new Date();
  const filtered = useMemo(() => {
    if (range === "all") return chartData;
    const months = range === "6m" ? 6 : 12;
    const cutoff = new Date(
      now.getFullYear(),
      now.getMonth() - months,
      now.getDate(),
    );
    return chartData.filter((r) => {
      const d = parseDMY(r.dueDate);
      return d ? d >= cutoff : true;
    });
  }, [chartData, range]);

  const exportCSV = () => {
    const rows = [
      ["period", "filingDate", "dueDate", "diffDays"],
      ...filtered.map((r) => [r.period, r.filingDate, r.dueDate, r.value]),
    ];
    const csv = rows
      .map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","),
      )
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/\s+/g, "_").toLowerCase()}_data.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className='bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-xl shadow-sm mb-8 border border-gray-100'>
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4'>
        <div>
          <h3 className='text-lg font-bold text-gray-900'>{title}</h3>
          <p className='text-xs text-gray-500'>Filing deviation vs due dates</p>
        </div>

        <div className='flex items-center gap-3'>
          <div className='inline-flex items-center gap-2 bg-white border rounded-md p-1'>
            <button
              onClick={() => setRange("6m")}
              className={`text-xs px-2 py-1 rounded ${range === "6m" ? "bg-indigo-600 text-white" : "text-gray-600"}`}
            >
              6m
            </button>
            <button
              onClick={() => setRange("12m")}
              className={`text-xs px-2 py-1 rounded ${range === "12m" ? "bg-indigo-600 text-white" : "text-gray-600"}`}
            >
              12m
            </button>
            <button
              onClick={() => setRange("all")}
              className={`text-xs px-2 py-1 rounded ${range === "all" ? "bg-indigo-600 text-white" : "text-gray-600"}`}
            >
              All
            </button>
          </div>

          <div className='hidden sm:flex items-center gap-4'>
            <div className='text-center'>
              <div className='text-sm font-semibold'>{stats.total}</div>
              <div className='text-xs text-gray-500'>Returns</div>
            </div>
            <div className='text-center'>
              <div className='text-sm font-semibold'>{stats.onTime}</div>
              <div className='text-xs text-gray-500'>On time</div>
            </div>
            <div className='text-center'>
              <div className='text-sm font-semibold text-red-600'>
                {stats.late}
              </div>
              <div className='text-xs text-gray-500'>Late</div>
            </div>
            <div className='text-center'>
              <div className='text-sm font-semibold text-green-600'>
                {stats.advanced}
              </div>
              <div className='text-xs text-gray-500'>Advanced</div>
            </div>
            <button
              onClick={exportCSV}
              className='text-xs bg-indigo-600 text-white px-3 py-1 rounded'
            >
              Export CSV
            </button>
          </div>
        </div>
      </div>

      <div className='mb-3 flex items-center gap-3 text-xs text-gray-600'>
        <div className='inline-flex items-center gap-2'>
          <span className='w-3 h-3 bg-green-600 rounded-full' /> On time
        </div>
        <div className='inline-flex items-center gap-2'>
          <span className='w-3 h-3 bg-red-600 rounded-full' /> Late
        </div>
        <div className='inline-flex items-center gap-2'>
          <span className='w-3 h-3 bg-yellow-400 rounded-full' /> Advanced
        </div>
      </div>

      <div className='h-[300px] w-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={filtered}
            margin={{ top: 12, right: 16, left: 0, bottom: 6 }}
          >
            <defs>
              <linearGradient id='areaGradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#6366f1' stopOpacity={0.18} />
                <stop offset='100%' stopColor='#6366f1' stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray='3 3'
              vertical={false}
              stroke='#f3f4f6'
            />
            <XAxis
              dataKey='period'
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6b7280" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={0} stroke='#9ca3af' strokeWidth={2} />
            <Area
              type='monotone'
              dataKey='value'
              stroke='none'
              fill='url(#areaGradient)'
            />
            <Line
              type='monotone'
              dataKey='value'
              stroke='#6366f1'
              strokeWidth={3}
              dot={<CustomDot />}
              activeDot={{ r: 8 }}
              animationDuration={800}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
