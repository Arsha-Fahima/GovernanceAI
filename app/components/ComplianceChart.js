"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Dot,
  ReferenceLine,
} from "recharts";

const CustomDot = (props) => {
  const { cx, cy, payload } = props;
  const isLate = payload.value < 0;
  return (
    <Dot
      {...props}
      cx={cx}
      cy={cy}
      r={6}
      fill={isLate ? "#ef4444" : "#10b981"}
      strokeWidth={2}
      stroke='#fff'
    />
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isAdvanced = data.value > 0;
    const isLate = data.value < 0;
    const isOnTime = data.value === 0;

    return (
      <div className='bg-white p-4 border rounded shadow-lg'>
        <p className='font-bold text-gray-900 border-b pb-1 mb-2'>
          {data.period}
        </p>
        <p
          className={`text-sm font-semibold ${isLate ? "text-red-600" : "text-green-600"}`}
        >
          Status:{" "}
          {isAdvanced
            ? `Advanced (${data.value} days)`
            : isLate
              ? `Late (${Math.abs(data.value)} days)`
              : "On Time"}
        </p>
        <p className='text-xs text-gray-600'>Filing Date: {data.filingDate}</p>
        <p className='text-xs text-gray-600'>Due Date: {data.dueDate}</p>
      </div>
    );
  }
  return null;
};

export default function ComplianceChart({ title, data }) {
  const chartData = [...data]
    .sort((a, b) => {
      return 0;
    })
    .map((record) => {
      const fDate = new Date(record.filingDate.split("/").reverse().join("-"));
      const dDate = new Date(record.dueDate.split("/").reverse().join("-"));

      // Calculate difference in days: Positive is Advanced, Negative is Late
      const diffTime = dDate.getTime() - fDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return {
        ...record,
        value: diffDays,
      };
    })
    .reverse();

  return (
    <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
      <h3 className='text-lg font-bold text-gray-900 mb-6'>{title}</h3>
      <div className='h-[300px] w-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray='3 3'
              vertical={false}
              stroke='#f0f0f0'
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
              label={{
                value: "Days deviation",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 10, fill: "#6b7280" },
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              y={0}
              stroke='#9ca3af'
              strokeWidth={2}
              label={{
                position: "right",
                value: "On Time",
                fill: "#9ca3af",
                fontSize: 10,
              }}
            />
            <Line
              type='monotone'
              dataKey='value'
              stroke='#6366f1'
              strokeWidth={3}
              dot={<CustomDot />}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
