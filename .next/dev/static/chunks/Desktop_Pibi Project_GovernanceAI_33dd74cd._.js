(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Pibi Project/GovernanceAI/lib/supabase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://weebcrbajmpynfdfkzcx.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlZWJjcmJham1weW5mZGZremN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5MjY0NzcsImV4cCI6MjA4MzUwMjQ3N30.WTw0KSpbScI3nFMoNiDS-MYdTMiaNpqv6q-YwQiKMBQ");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GSTDetailsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function GSTDetailsCard({ data, dbRecord }) {
    // Prefer dbRecord when available, fallback to gst API data
    const rows = [
        [
            "Legal Name",
            dbRecord?.legal_name || data?.legalname || "Unknown"
        ],
        [
            "Trade Name",
            dbRecord?.trade_name || data?.tradeName || "Unknown"
        ],
        [
            "GSTIN",
            dbRecord?.gstin || data?.gstin || "Unknown"
        ],
        [
            "PAN",
            dbRecord?.pan || data?.pan || "Unknown"
        ],
        [
            "Registration Date",
            dbRecord?.rgdt || data?.rgdt || "Unknown"
        ],
        [
            "Status",
            dbRecord?.sts || data?.sts || "Unknown"
        ],
        [
            "Place of Business",
            dbRecord?.adr || data?.adr || "Unknown"
        ],
        [
            "Central Jurisdiction",
            dbRecord?.ctj || data?.ctj || "Unknown"
        ],
        [
            "State Jurisdiction",
            dbRecord?.stj || data?.stj || "Unknown"
        ],
        [
            "Pincode",
            dbRecord?.pincode || data?.pincode || "Unknown"
        ],
        [
            "Tax Type",
            dbRecord?.dty || data?.dty || "Unknown"
        ],
        [
            "E-Invoice mandatory?",
            dbRecord?.mandatedeInvoice != null ? dbRecord.mandatedeInvoice ? "Yes" : "No" : data?.mandatedeInvoice != null ? data.mandatedeInvoice ? "Yes" : "No" : "Unknown"
        ],
        [
            "Entity Type",
            dbRecord?.ctb || data?.ctb || "Unknown"
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-0",
                        children: "Business Information"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mt-1",
                        children: "Complete GST registration details - concise view"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
                children: rows.map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 rounded-md border border-gray-100 p-3 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                className: "text-sm font-semibold text-gray-800 uppercase tracking-wide",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                className: "text-sm  text-gray-900 mt-1 break-words",
                                children: label === "GSTIN" || label === "PAN" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-sm font-semibold text-gray-900",
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font- text-gray-900",
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = GSTDetailsCard;
var _c;
__turbopack_context__.k.register(_c, "GSTDetailsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReturnsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ReturnsTable({ title, rows }) {
    const safeRows = Array.isArray(rows) ? rows : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-lg font-semibold text-gray-800 mb-3",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#faf9f6] rounded-2xl p-4 overflow-x-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:grid grid-cols-3 text-sm font-medium text-gray-600 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "FY"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Period"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Filing Date"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: safeRows.length > 0 ? safeRows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 text-sm text-gray-900 gap-1 sm:gap-0 bg-white p-2 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden text-xs text-gray-500 block",
                                                children: "FY"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                                lineNumber: 24,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: row.fy
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                                lineNumber: 27,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                        lineNumber: 23,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden text-xs text-gray-500 block",
                                                children: "Period"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                                lineNumber: 31,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: row.period
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden text-xs text-gray-500 block",
                                                children: "Filing Date"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: row.date
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                                lineNumber: 19,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500",
                            children: "No returns available."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = ReturnsTable;
var _c;
__turbopack_context__.k.register(_c, "ReturnsTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComplianceChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/recharts/es6/shape/Dot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Parse date in dd/mm/yyyy to Date
const parseDMY = (s)=>{
    if (!s) return null;
    try {
        const [d, m, y] = s.split("/");
        return new Date(parseInt(y, 10), parseInt(m, 10) - 1, parseInt(d, 10));
    } catch (e) {
        return null;
    }
};
const CustomDot = (props)=>{
    const { cx, cy, payload } = props;
    const isLate = payload.value < 0;
    const isAdvanced = payload.value > 0;
    const fill = isLate ? "#ef4444" : isAdvanced ? "#10b981" : "#fbbf24";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dot"], {
        ...props,
        cx: cx,
        cy: cy,
        r: 6,
        fill: fill,
        strokeWidth: 2,
        stroke: "#fff",
        style: {
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
        }
    }, void 0, false, {
        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomDot;
const CustomTooltip = ({ active, payload })=>{
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        const isAdvanced = data.value > 0;
        const isLate = data.value < 0;
        const statusText = isAdvanced ? `Advanced (${data.value} days)` : isLate ? `Late (${Math.abs(data.value)} days)` : "On Time";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-4 border rounded shadow-lg min-w-[220px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-bold text-gray-900 border-b pb-1 mb-2",
                    children: data.period
                }, void 0, false, {
                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-sm font-semibold ${isLate ? "text-red-600" : "text-green-600"}`,
                    children: statusText
                }, void 0, false, {
                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 text-xs text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "Filing Date: ",
                                data.filingDate
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "Due Date: ",
                                data.dueDate
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                            lineNumber: 72,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return null;
};
_c1 = CustomTooltip;
function ComplianceChart({ title, data = [] }) {
    _s();
    // Normalize and compute diffs
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComplianceChart.useMemo[chartData]": ()=>{
            const list = (Array.isArray(data) ? data : []).map({
                "ComplianceChart.useMemo[chartData].list": (record)=>{
                    const fDate = parseDMY(record.filingDate || record.filing_date || record.filing);
                    const dDate = parseDMY(record.dueDate || record.due_date || record.due);
                    // Positive = filed before due (Advanced), Negative = late
                    let diffDays = 0;
                    if (fDate && dDate) {
                        const diffTime = dDate.getTime() - fDate.getTime();
                        diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
                    }
                    return {
                        period: record.period || record.taxp || record.period_name || record.period || "-",
                        filingDate: record.filingDate || record.filing_date || record.filing || "-",
                        dueDate: record.dueDate || record.due_date || record.due || "-",
                        value: diffDays
                    };
                }
            }["ComplianceChart.useMemo[chartData].list"]);
            // Sort by due date ascending if possible
            list.sort({
                "ComplianceChart.useMemo[chartData]": (a, b)=>{
                    const da = parseDMY(a.dueDate);
                    const db = parseDMY(b.dueDate);
                    if (!da && !db) return 0;
                    if (!da) return 1;
                    if (!db) return -1;
                    return da - db;
                }
            }["ComplianceChart.useMemo[chartData]"]);
            return list;
        }
    }["ComplianceChart.useMemo[chartData]"], [
        data
    ]);
    // Summary metrics
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComplianceChart.useMemo[stats]": ()=>{
            const total = chartData.length;
            const onTime = chartData.filter({
                "ComplianceChart.useMemo[stats]": (r)=>r.value === 0
            }["ComplianceChart.useMemo[stats]"]).length;
            const late = chartData.filter({
                "ComplianceChart.useMemo[stats]": (r)=>r.value < 0
            }["ComplianceChart.useMemo[stats]"]).length;
            const advanced = chartData.filter({
                "ComplianceChart.useMemo[stats]": (r)=>r.value > 0
            }["ComplianceChart.useMemo[stats]"]).length;
            const avg = total ? Math.round(chartData.reduce({
                "ComplianceChart.useMemo[stats]": (s, r)=>s + r.value
            }["ComplianceChart.useMemo[stats]"], 0) / total) : 0;
            return {
                total,
                onTime,
                late,
                advanced,
                avg
            };
        }
    }["ComplianceChart.useMemo[stats]"], [
        chartData
    ]);
    // Controls: range and export
    const [range, setRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const now = new Date();
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComplianceChart.useMemo[filtered]": ()=>{
            if (range === "all") return chartData;
            const months = range === "6m" ? 6 : 12;
            const cutoff = new Date(now.getFullYear(), now.getMonth() - months, now.getDate());
            return chartData.filter({
                "ComplianceChart.useMemo[filtered]": (r)=>{
                    const d = parseDMY(r.dueDate);
                    return d ? d >= cutoff : true;
                }
            }["ComplianceChart.useMemo[filtered]"]);
        }
    }["ComplianceChart.useMemo[filtered]"], [
        chartData,
        range
    ]);
    const exportCSV = ()=>{
        const rows = [
            [
                "period",
                "filingDate",
                "dueDate",
                "diffDays"
            ],
            ...filtered.map((r)=>[
                    r.period,
                    r.filingDate,
                    r.dueDate,
                    r.value
                ])
        ];
        const csv = rows.map((row)=>row.map((cell)=>`"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
        const blob = new Blob([
            csv
        ], {
            type: "text/csv"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${title.replace(/\s+/g, "_").toLowerCase()}_data.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-xl shadow-sm mb-8 border border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-gray-900",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: "Filing deviation vs due dates"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 bg-white border rounded-md p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setRange("6m"),
                                        className: `text-xs px-2 py-1 rounded ${range === "6m" ? "bg-indigo-600 text-white" : "text-gray-600"}`,
                                        children: "6m"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setRange("12m"),
                                        className: `text-xs px-2 py-1 rounded ${range === "12m" ? "bg-indigo-600 text-white" : "text-gray-600"}`,
                                        children: "12m"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setRange("all"),
                                        className: `text-xs px-2 py-1 rounded ${range === "all" ? "bg-indigo-600 text-white" : "text-gray-600"}`,
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold",
                                                children: stats.total
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: "Returns"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold",
                                                children: stats.onTime
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: "On time"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold text-red-600",
                                                children: stats.late
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: "Late"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold text-green-600",
                                                children: stats.advanced
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: "Advanced"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: exportCSV,
                                        className: "text-xs bg-indigo-600 text-white px-3 py-1 rounded",
                                        children: "Export CSV"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center gap-3 text-xs text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3 h-3 bg-green-600 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            " On time"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3 h-3 bg-red-600 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            " Late"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3 h-3 bg-yellow-400 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            " Advanced"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[300px] w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                        data: filtered,
                        margin: {
                            top: 12,
                            right: 16,
                            left: 0,
                            bottom: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "areaGradient",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#6366f1",
                                            stopOpacity: 0.18
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#6366f1",
                                            stopOpacity: 0
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                vertical: false,
                                stroke: "#f3f4f6"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "period",
                                axisLine: false,
                                tickLine: false,
                                tick: {
                                    fontSize: 12,
                                    fill: "#6b7280"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                axisLine: false,
                                tickLine: false,
                                tick: {
                                    fontSize: 10,
                                    fill: "#6b7280"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                    lineNumber: 272,
                                    columnNumber: 31
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                y: 0,
                                stroke: "#9ca3af",
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                type: "monotone",
                                dataKey: "value",
                                stroke: "none",
                                fill: "url(#areaGradient)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                type: "monotone",
                                dataKey: "value",
                                stroke: "#6366f1",
                                strokeWidth: 3,
                                dot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomDot, {}, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                    lineNumber: 285,
                                    columnNumber: 20
                                }, void 0),
                                activeDot: {
                                    r: 8
                                },
                                animationDuration: 800
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s(ComplianceChart, "4GePOen75X0TJMCMfWSfIB+c+o0=");
_c2 = ComplianceChart;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CustomDot");
__turbopack_context__.k.register(_c1, "CustomTooltip");
__turbopack_context__.k.register(_c2, "ComplianceChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComplianceClassification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const COMPLIANCE_MAP = {
    green: {
        label: "Green",
        badge: "bg-green-500 text-white",
        description: "This GSTIN has filed the last 4 GSTR-1 returns on or before the due date."
    },
    yellow: {
        label: "Yellow",
        badge: "bg-yellow-400 text-black",
        description: "This GSTIN has filed GSTR-1 returns, but after the due date."
    },
    red: {
        label: "Red",
        badge: "bg-red-500 text-white",
        description: "This GSTIN has not yet filed the last 2 GSTR-1 returns."
    },
    orange: {
        label: "Orange",
        badge: "bg-orange-500 text-white",
        description: "This GSTIN is either deactivated, cancelled, or registered as a Composition taxpayer."
    },
    black: {
        label: "Unknown",
        badge: "bg-gray-900 text-white",
        description: "We cannot determine the compliance classification at the moment due to lack of sufficient data."
    }
};
function ComplianceClassification({ data }) {
    const categoryKey = data?.compcategory?.toLowerCase();
    const category = COMPLIANCE_MAP[categoryKey] || COMPLIANCE_MAP.black;
    /** ✅ Dynamic values **/ const hsnList = Array.isArray(data?.hsn) ? data.hsn : [];
    const businessActivities = (()=>{
        try {
            return Array.isArray(data?.nba) ? data.nba : JSON.parse(data?.nba || "[]");
        } catch  {
            return [];
        }
    })();
    const filingFrequency = data?.filingFreq || {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#faf9f6] rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg sm:text-xl font-semibold text-gray-800 mb-3",
                        children: "Compliance Classification"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-block px-4 sm:px-6 py-2 rounded-xl font-semibold text-sm sm:text-base ${category.badge}`,
                        children: category.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-700 mt-4 max-w-2xl",
                        children: category.description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-gray-800 mb-2",
                                        children: "HSN / SAC"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    hsnList.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "text-sm text-gray-700 space-y-1",
                                        children: hsnList.map((code, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: code
                                            }, idx, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: "Not available"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-gray-800 mb-2",
                                        children: "Business Activities"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    businessActivities.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-inside text-sm text-gray-700 space-y-1",
                                        children: businessActivities.map((activity, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: activity
                                            }, idx, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: "Not available"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gray-800 mb-4",
                                    children: "Return Periodicity"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                Object.keys(filingFrequency).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-gray-700 space-y-1",
                                    children: Object.entries(filingFrequency).map(([period, freq])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                period.replace("_", " "),
                                                " —",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: freq === "M" ? "Monthly" : "Quarterly"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, period, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: "Not available"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c = ComplianceClassification;
var _c;
__turbopack_context__.k.register(_c, "ComplianceClassification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentGSTReturns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$ReturnsTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js [app-client] (ecmascript)");
"use client";
;
;
function RecentGSTReturns({ data }) {
    // data may contain:
    // - data.returns: [{ fy, taxp, dof, rtntype }]
    // - data.gstr1 / data.gstr3b (objects) with `returns` arrays
    // Normalize into an array of items with { fy, period, date, rtntype }
    const extractReturns = (d)=>{
        if (!d) return [];
        // If top-level `returns` (API raw response)
        if (Array.isArray(d.returns)) {
            return d.returns.map((r)=>({
                    fy: r.fy || r.fy || "-",
                    period: r.taxp || r.period || r.period || "-",
                    date: r.dof || r.date || r.dof || "-",
                    rtntype: r.rtntype || r.return_type || r.rtntype || "UNKNOWN"
                }));
        }
        // If data.gstr1 / data.gstr3b each have returns arrays
        const out = [];
        if (d.gstr1 && Array.isArray(d.gstr1.returns)) {
            d.gstr1.returns.forEach((r)=>out.push({
                    fy: r.fy || "-",
                    period: r.taxp || r.period || "-",
                    date: r.dof || r.date || "-",
                    rtntype: r.rtntype || "GSTR1"
                }));
        }
        if (d.gstr3b && Array.isArray(d.gstr3b.returns)) {
            d.gstr3b.returns.forEach((r)=>out.push({
                    fy: r.fy || "-",
                    period: r.taxp || r.period || "-",
                    date: r.dof || r.date || "-",
                    rtntype: r.rtntype || "GSTR3B"
                }));
        }
        return out;
    };
    const allReturns = extractReturns(data);
    // Group by rtntype
    const grouped = allReturns.reduce((acc, item)=>{
        const key = (item.rtntype || "UNKNOWN").toUpperCase();
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
    // Helper to map group to table rows with consistent field names
    const toTableRows = (arr)=>arr.map((r)=>({
                fy: r.fy,
                period: r.period,
                date: r.date
            }));
    // Prefer explicit arrays returned by backend: returns_gstr1 and returns_gstr3b
    const normalizeBackendArray = (arr)=>{
        if (!Array.isArray(arr)) return [];
        return arr.map((r)=>({
                fy: r.fy || "-",
                period: r.taxp || r.period || "-",
                date: r.dof || r.date || "-"
            }));
    };
    const backendGstr1 = normalizeBackendArray(data?.returns_gstr1);
    const backendGstr3b = normalizeBackendArray(data?.returns_gstr3b);
    const gstr3bRows = backendGstr3b.length ? backendGstr3b : grouped.GSTR3B ? toTableRows(grouped.GSTR3B) : [];
    const gstr1Rows = backendGstr1.length ? backendGstr1 : grouped.GSTR1 ? toTableRows(grouped.GSTR1) : [];
    const otherKeys = Object.keys(grouped).filter((k)=>![
            "GSTR1",
            "GSTR3B"
        ].includes(k));
    // Pending summaries (if provided by backend in data.gstr1 / data.gstr3b)
    const g1Summary = data?.gstr1 || null;
    const g3bSummary = data?.gstr3b || null;
    const formatMonths = (m)=>{
        if (!m) return "-";
        if (Array.isArray(m)) return m.map(([y, mo])=>`${mo}-${y}`).join(", ");
        if (typeof m === "string") return m;
        return String(m);
    };
    const statusClass = (status)=>{
        if (!status) return "bg-gray-100 text-gray-800";
        if (status.toUpperCase() === "FILED") return "bg-green-100 text-green-700";
        if (status.toUpperCase() === "PENDING") return "bg-red-100 text-red-700";
        if (status.toUpperCase() === "UNKNOWN") return "bg-yellow-100 text-yellow-700";
        return "bg-gray-100 text-gray-800";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-semibold text-gray-900",
                            children: "Recent GST Returns"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500",
                            children: [
                                "As on ",
                                data?.rgdt || "Latest"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-3 rounded-lg shadow-sm flex items-start gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: "GSTR‑1"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClass(g1Summary?.status)}`,
                                            children: g1Summary?.status || "Unknown"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-gray-800",
                                            children: [
                                                g1Summary?.pending_count ?? 0,
                                                " pending"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-xs text-gray-500",
                                    children: [
                                        "Months: ",
                                        g1Summary?.pending_months || "-"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-xs text-gray-500",
                                    children: [
                                        "Due: ",
                                        g1Summary?.due_date || "Unknown"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-3 rounded-lg shadow-sm flex items-start gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: "GSTR‑3B"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClass(g3bSummary?.status)}`,
                                            children: g3bSummary?.status || "Unknown"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-gray-800",
                                            children: [
                                                g3bSummary?.pending_count ?? 0,
                                                " pending"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-xs text-gray-500",
                                    children: [
                                        "Months: ",
                                        g3bSummary?.pending_months || "-"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-xs text-gray-500",
                                    children: [
                                        "Due: ",
                                        g3bSummary?.due_date || "Unknown"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 px-4 py-3 border-b border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-semibold text-gray-800",
                                    children: "GSTR‑3B Returns"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-64 overflow-y-auto",
                                children: gstr3bRows.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divide-y divide-gray-100",
                                    children: gstr3bRows.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center py-2 px-4 hover:bg-gray-50 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-800",
                                                    children: r.period
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded",
                                                    children: r.date
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-500 py-8 text-center",
                                    children: "No records available"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 px-4 py-3 border-b border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-semibold text-gray-800",
                                    children: "GSTR‑1 Returns"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-64 overflow-y-auto",
                                children: gstr1Rows.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divide-y divide-gray-100",
                                    children: gstr1Rows.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center py-2 px-4 hover:bg-gray-50 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-800",
                                                    children: r.period
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded",
                                                    children: r.date
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                                    lineNumber: 220,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-500 py-8 text-center",
                                    children: "No records available"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            otherKeys.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 px-4 py-3 border-b border-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-sm font-semibold text-gray-800",
                            children: "Other Returns"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-48 overflow-y-auto",
                        children: otherKeys.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-gray-100 last:border-b-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 bg-gray-25",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-gray-600",
                                            children: key
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                            lineNumber: 250,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divide-y divide-gray-100",
                                        children: toTableRows(grouped[key]).map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center py-2 px-4 hover:bg-gray-50 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-gray-800",
                                                        children: r.period
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                                        lineNumber: 260,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded",
                                                        children: r.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                                        lineNumber: 263,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                                lineNumber: 256,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                                lineNumber: 245,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
                lineNumber: 237,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c = RecentGSTReturns;
var _c;
__turbopack_context__.k.register(_c, "RecentGSTReturns");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GSTProfileTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$GSTDetailsCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$RecentGSTReturns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/app/components/RecentGSTReturns.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$ComplianceClassification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TABS = [
    "Details",
    "Recent GST Returns",
    "Compliance Classification"
];
function GSTProfileTabs({ gstin, tradeName, state, gstData, dbRecord }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Details");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-white shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg sm:text-xl lg:text-2xl font-bold text-gray-900",
                                children: tradeName || gstin
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-gray-600 mt-1 break-all",
                                children: gstin || state || ""
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "self-start sm:self-auto inline-block bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium",
                        children: "GST Profile"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1 bg-gray-100 p-1 rounded-lg",
                    children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab),
                            className: `flex-1 min-h-[40px] px-2 py-2 rounded-md text-xs sm:text-sm font-medium text-center transition-all ${activeTab === tab ? "bg-indigo-600 text-white shadow" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"}`,
                            children: tab
                        }, tab, false, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 sm:space-y-8",
                children: [
                    activeTab === "Details" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$GSTDetailsCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        data: gstData,
                        dbRecord: dbRecord
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    activeTab === "Recent GST Returns" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$RecentGSTReturns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        data: gstData,
                        dbRecord: dbRecord
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    activeTab === "Compliance Classification" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$ComplianceClassification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        data: gstData,
                        dbRecord: dbRecord
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(GSTProfileTabs, "8KUHqJazM9B/leOI+QFurNIIBTU=");
_c = GSTProfileTabs;
var _c;
__turbopack_context__.k.register(_c, "GSTProfileTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar() {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
            initial: {
                y: -20,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            transition: {
                duration: 0.6,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            },
            className: "   pointer-events-auto   w-full max-w-7xl    bg-white/70 backdrop-blur-2xl    border border-white/40   rounded-[2.5rem]    px-8 py-3    flex justify-between items-center    shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]   relative   ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>router.push("/"),
                    className: "flex items-center gap-4 cursor-pointer group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-[#1b69a1] rounded-2xl flex items-center justify-center shadow-lg shadow-[#1b69a1]/20 group-hover:rotate-[15deg] transition-all duration-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-black text-lg",
                                        children: "G"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -inset-1 bg-[#1b69a1]/10 rounded-2xl blur-md group-hover:bg-[#1b69a1]/20 transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-black tracking-tighter text-slate-900",
                            children: [
                                "GST",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#1b69a1]",
                                    children: "Insight"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 44,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex gap-1 items-center bg-slate-50/50 p-1.5 rounded-full border border-slate-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavDropdown, {
                            title: "Products",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownItem, {
                                    title: "GST Dashboard",
                                    desc: "Compliance at a glance",
                                    href: "/gstinsight",
                                    icon: "📊"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownItem, {
                                    title: "AI Risk Analyzer",
                                    desc: "Pattern detection engine",
                                    href: "/gstinsight",
                                    icon: "🧠"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownItem, {
                                    title: "Reports",
                                    desc: "Export professional audits",
                                    href: "/gstinsight",
                                    icon: "📄"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavDropdown, {
                            title: "API Docs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownItem, {
                                    title: "Auth Nodes",
                                    desc: "Secure OAuth integration",
                                    href: "/",
                                    icon: "🔐"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownItem, {
                                    title: "Raw Access",
                                    desc: "Fetch JSON filing data",
                                    href: "/",
                                    icon: "⚡"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavDropdown, {
                            title: "Resources",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownItem, {
                                    title: "GST Returns",
                                    desc: "Core filing guidance",
                                    href: "/blog/gst-returns",
                                    icon: "📚"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownItem, {
                                    title: "ITC Breakdown",
                                    desc: "Maximizing tax credits",
                                    href: "/blog/input-tax-credit",
                                    icon: "💎"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavDropdown, {
                            title: "Enterprise",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownItem, {
                                    title: "SaaS Plans",
                                    desc: "Scalable pricing tiers",
                                    href: "/",
                                    icon: "🏢"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownItem, {
                                    title: "Security",
                                    desc: "Protocols & Encryption",
                                    href: "/",
                                    icon: "🛡️"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: status === "authenticated" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/gstinsight"),
                                className: "hidden xl:flex items-center gap-2 px-5 py-2 rounded-full border border-[#1b69a1]/10 text-[#1b69a1] font-bold text-[13px] hover:bg-[#1b69a1]/5 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-[#1b69a1] animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    "Live Console"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                        callbackUrl: "/"
                                    }),
                                className: "h-11 px-6 rounded-full bg-slate-900 text-white font-bold text-[13px] hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-950/10",
                                children: "Sign Out"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                        lineNumber: 120,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/login"),
                                className: "px-6 py-2.5 rounded-full text-slate-500 font-bold text-[13px] hover:text-slate-900 transition-colors",
                                children: "Log In"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/login"),
                                className: "   px-7 py-3 rounded-full bg-[#1b69a1] text-white font-bold text-[13px]    hover:bg-[#155685] hover:shadow-xl hover:shadow-[#1b69a1]/25   transition-all active:scale-95   ",
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(Navbar, "MjqiMjtatd9LiD3Cp5ZtwJSts4s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
/* Reusable Dropdown Wrapper */ function NavDropdown({ title, children }) {
    _s1();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group",
        onMouseEnter: ()=>setIsOpen(true),
        onMouseLeave: ()=>setIsOpen(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "   px-5 py-2 rounded-full flex items-center gap-1.5    text-[12px] font-bold uppercase tracking-[0.1em] text-slate-500   hover:bg-white hover:text-[#1b69a1] transition-all duration-300   group-hover:text-[#1b69a1]   ",
                children: [
                    title,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                        animate: {
                            rotate: isOpen ? 180 : 0
                        },
                        className: "w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "3",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 15,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 10,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.2,
                        ease: "easeOut"
                    },
                    className: "   absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72    pointer-events-auto z-10   ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   bg-white rounded-[2rem] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.15)]    border border-slate-100 p-3 overflow-hidden   ",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                        lineNumber: 209,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                    lineNumber: 199,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
_s1(NavDropdown, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c1 = NavDropdown;
/* Dropdown Item */ function DropdownItem({ title, desc, href = "/", icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "   flex items-start gap-4 p-4 rounded-2xl   hover:bg-slate-50 transition-all duration-200 group/item   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-lg group-hover/item:bg-white group-hover/item:shadow-sm transition-all",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[14px] font-bold text-slate-900 leading-tight mb-0.5 group-hover/item:text-[#1b69a1] transition-colors",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] font-medium text-slate-500 leading-tight",
                        children: desc
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
                lineNumber: 237,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_c2 = DropdownItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Navbar");
__turbopack_context__.k.register(_c1, "NavDropdown");
__turbopack_context__.k.register(_c2, "DropdownItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Pibi Project/GovernanceAI/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GSTInsightPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
// ...existing code...
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/lib/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$GSTDetailsCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTDetailsCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$ReturnsTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/app/components/ReturnsTable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$ComplianceChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$ComplianceClassification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/app/components/ComplianceClassification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$GSTProfileTabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/app/components/GSTProfileTabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Pibi Project/GovernanceAI/app/components/navbar.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function GSTInsightPage() {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [gstQuery, setGstQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchResult, setSearchResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        gstin: ""
    });
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const y1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        500
    ], [
        0,
        200
    ]);
    const y2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        500
    ], [
        0,
        -150
    ]);
    const yImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        500
    ], [
        0,
        -50
    ]);
    const rotateImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        500
    ], [
        0,
        -5
    ]);
    const yCard1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        500
    ], [
        0,
        -80
    ]);
    const yCard2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        500
    ], [
        0,
        -120
    ]);
    // Fetch profile if authenticated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GSTInsightPage.useEffect": ()=>{
            if (status === "authenticated" && session?.user?.email) {
                fetchUserData();
            }
        }
    }["GSTInsightPage.useEffect"], [
        status,
        session
    ]);
    const fetchUserData = async ()=>{
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("*").eq("email", session.user.email).single();
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GSTInsightPage.useEffect": ()=>{
            const handleClickOutside = {
                "GSTInsightPage.useEffect.handleClickOutside": ()=>setActiveMenu(null)
            }["GSTInsightPage.useEffect.handleClickOutside"];
            window.addEventListener("click", handleClickOutside);
            return ({
                "GSTInsightPage.useEffect": ()=>window.removeEventListener("click", handleClickOutside)
            })["GSTInsightPage.useEffect"];
        }
    }["GSTInsightPage.useEffect"], []);
    const toggleMenu = (menu)=>{
        setActiveMenu(activeMenu === menu ? null : menu);
    };
    const scrollToSearch = ()=>{
        setShowForm(true);
        setTimeout(()=>{
            document.getElementById("setup-form-section")?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 100);
    };
    const handleProfileSubmit = async (e)=>{
        e.preventDefault();
        setIsSearching(true);
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").update({
                name: form.name,
                phone: form.phone,
                gstin: form.gstin
            }).eq("email", session.user.email).select();
            if (data) {
                setUserData(data[0]);
                setGstQuery(form.gstin);
                setShowForm(false);
                // Redirect to landing page as requested
                router.push("/");
            }
        } catch (err) {
            console.error(err);
        } finally{
            setIsSearching(false);
        }
    };
    const handleSearch = async (e)=>{
        if (e) e.preventDefault();
        if (!gstQuery) return;
        setIsSearching(true);
        setSearchResult(null);
        try {
            // Direct Lookup simulation (similar to app/page.js logic)
            const response = await fetch(`${("TURBOPACK compile-time value", "https://governanceai-1-o8th.onrender.com")}/check-status/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    gstin: gstQuery,
                    name: "Search Lookup",
                    email: session?.user?.email || "anonymous",
                    phone: session?.user?.phone || "0000000000"
                })
            });
            const data = await response.json();
            if (data.status === "success" && data.gst_report) {
                setSearchResult(data.gst_report);
                // Smooth scroll to results if needed
                setTimeout(()=>{
                    document.getElementById("results-section")?.scrollIntoView({
                        behavior: "smooth"
                    });
                }, 100);
            } else {
                alert(data.message || "No data found for this GSTIN");
            }
        } catch (err) {
            console.error("Search error:", err);
            alert("Failed to connect to verification nodes.");
        } finally{
            setIsSearching(false);
        }
    };
    if (status === "loading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#1b69a1]"
            }, void 0, false, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                lineNumber: 160,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
            lineNumber: 159,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "GST Search & Compliance – GSTInsight"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white font-sans text-slate-800 selection:bg-[#1b69a1]/20 selection:text-[#1b69a1] relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 pointer-events-none opacity-[0.03]",
                        style: {
                            backgroundImage: "radial-gradient(#1b69a1 1px, transparent 1px)",
                            backgroundSize: "40px 40px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        ref: heroRef,
                        className: "relative pt-24 pb-40 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-full h-full -z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        style: {
                                            y: y1
                                        },
                                        className: "absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#1b69a1]/5 rounded-full blur-[120px]"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        style: {
                                            y: y2
                                        },
                                        className: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#1b69a1]/5 rounded-full blur-[120px]"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "max-w-2xl",
                                        initial: {
                                            opacity: 0,
                                            y: 40
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: false,
                                            amount: 0.3
                                        },
                                        transition: {
                                            duration: 0.8,
                                            ease: "easeOut"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#1b69a1]/5 border border-[#1b69a1]/10 text-[#1b69a1] text-[11px] font-black mb-10 uppercase tracking-[0.2em]",
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.8
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                viewport: {
                                                    once: false
                                                },
                                                transition: {
                                                    delay: 0.2,
                                                    duration: 0.5
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-2 w-2 rounded-full bg-[#1b69a1] animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 212,
                                                        columnNumber: 17
                                                    }, this),
                                                    status === "authenticated" ? `Welcome, ${session.user.name}` : "Real-Time Compliance Engine"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                                className: "text-6xl md:text-8xl font-black mb-6 leading-[0.95] text-slate-900 tracking-tight",
                                                initial: {
                                                    opacity: 0,
                                                    x: -30
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                viewport: {
                                                    once: false
                                                },
                                                transition: {
                                                    delay: 0.3,
                                                    duration: 0.6
                                                },
                                                children: [
                                                    "GST Done",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-transparent bg-clip-text bg-linear-to-r from-[#1b69a1] to-blue-400",
                                                        children: "100% Right"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 226,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                                className: "text-xl md:text-2xl font-bold text-[#1b69a1] mb-10 tracking-tight uppercase tracking-[0.2em]",
                                                initial: {
                                                    opacity: 0,
                                                    x: -20
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                viewport: {
                                                    once: false
                                                },
                                                transition: {
                                                    delay: 0.4,
                                                    duration: 0.6
                                                },
                                                children: "Every Filing, Every Time"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                className: "text-lg md:text-xl text-slate-500 mb-14 leading-relaxed font-medium max-w-lg",
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                viewport: {
                                                    once: false
                                                },
                                                transition: {
                                                    delay: 0.5,
                                                    duration: 0.6
                                                },
                                                children: "Access real-time GST status, filing history, compliance category, due dates, turnover classification, and complete return analytics — all in structured professional tables powered by intelligent automation."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                            onClick: ()=>{
                                                                if (status === "authenticated") {
                                                                    router.push("/gstinsight");
                                                                } else {
                                                                    router.push("/login");
                                                                }
                                                            },
                                                            whileHover: {
                                                                scale: 1.05
                                                            },
                                                            whileTap: {
                                                                scale: 0.95
                                                            },
                                                            className: "px-6 py-2 rounded-full bg-[#1b69a1]    text-white font-semibold text-sm    hover:bg-[#155685]    transition-all shadow-md ",
                                                            children: "Check Compliance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 258,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                            onClick: ()=>{
                                                                if (status === "authenticated") {
                                                                    router.push("/itc-reconcile"); // change if ITC has separate page
                                                                } else {
                                                                    router.push("/login");
                                                                }
                                                            },
                                                            whileHover: {
                                                                scale: 1.05
                                                            },
                                                            whileTap: {
                                                                scale: 0.95
                                                            },
                                                            className: "px-6 py-2 rounded-full border border-[#1b69a1]    text-[#1b69a1] font-semibold text-sm    hover:bg-[#1b69a1] hover:text-white   transition-all ",
                                                            children: "ITCCC"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 277,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 255,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 358,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/50 backdrop-blur-sm border border-slate-100 rounded-[2rem] p-6 max-w-md hidden sm:block animate-fadeIn shadow-2xl shadow-slate-200/50",
                                                style: {
                                                    animationDelay: "0.4s"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                                children: "Network status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 366,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-1.5 h-1.5 rounded-full bg-green-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 370,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold text-slate-900",
                                                                        children: "Operational • 24ms"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 371,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 369,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 365,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            {
                                                                t: "Verified GSTR History: 27A...",
                                                                s: "Success",
                                                                c: "text-green-600"
                                                            },
                                                            {
                                                                t: "Risk Score: Amazon Trans.",
                                                                s: "Active",
                                                                c: "text-[#1b69a1]"
                                                            },
                                                            {
                                                                t: "Bulk API Request: 5,000",
                                                                s: "Processing",
                                                                c: "text-amber-500"
                                                            }
                                                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "flex items-center justify-between text-[13px] font-bold",
                                                                initial: {
                                                                    opacity: 0,
                                                                    x: -10
                                                                },
                                                                whileInView: {
                                                                    opacity: 1,
                                                                    x: 0
                                                                },
                                                                viewport: {
                                                                    once: false
                                                                },
                                                                transition: {
                                                                    delay: 0.2 + i * 0.1,
                                                                    duration: 0.5
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-slate-500",
                                                                        children: item.t
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 402,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: item.c,
                                                                        children: item.s
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 403,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 394,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 376,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 361,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-12 border-t border-slate-100 pt-10 mt-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "",
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: false
                                                        },
                                                        transition: {
                                                            delay: 0.2,
                                                            duration: 0.6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-3xl font-black text-slate-900 mb-1",
                                                                        children: "1.2M+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 418,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-1.5 py-0.5 rounded-md bg-green-100 text-[9px] font-black text-green-700 animate-pulse",
                                                                        children: "LIVE"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 421,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 417,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]",
                                                                children: "GSTINs Verified"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 425,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "",
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: false
                                                        },
                                                        transition: {
                                                            delay: 0.4,
                                                            duration: 0.6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-3xl font-black text-slate-900 mb-1",
                                                                children: "< 45ms"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 436,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]",
                                                                children: "API Latency"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 439,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 429,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "hidden sm:block",
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: false
                                                        },
                                                        transition: {
                                                            delay: 0.6,
                                                            duration: 0.6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-3xl font-black text-slate-900 mb-1",
                                                                        children: "99.9%"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 451,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-2 h-2 rounded-full bg-green-500 animate-ping"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 454,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 450,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]",
                                                                children: "System Uptime"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 456,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 443,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "relative",
                                        style: {
                                            y: yImage
                                        },
                                        initial: {
                                            opacity: 0,
                                            scale: 0.9
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        viewport: {
                                            once: false,
                                            amount: 0.2
                                        },
                                        transition: {
                                            duration: 0.8,
                                            ease: "easeOut"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 bg-slate-900 p-2.5 rounded-[3rem] shadow-[0_60px_100px_-20px_rgba(27,105,161,0.25)] border border-slate-800 overflow-hidden transform hover:scale-[1.02] transition-all duration-700 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/headeritc.png",
                                                        alt: "Data Analytics Dashboard",
                                                        width: 800,
                                                        height: 600,
                                                        className: "rounded-[2.8rem] opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 472,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-linear-to-tr from-[#1b69a1]/40 via-transparent to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 479,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 471,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute -top-20 -left-20 hidden xl:block z-20",
                                                style: {
                                                    y: yCard1
                                                },
                                                initial: {
                                                    opacity: 0,
                                                    x: -50
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                viewport: {
                                                    once: false
                                                },
                                                transition: {
                                                    duration: 1,
                                                    delay: 0.2
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -inset-10 bg-gradient-to-br from-[#1b69a1]/20 via-blue-400/10 to-transparent blur-3xl opacity-60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 493,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative backdrop-blur-2xl bg-white/70 border border-white/40 rounded-[32px] p-8 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.25)] w-[400px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold",
                                                                                children: "GST Intelligence"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 500,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-xl font-semibold text-slate-900 tracking-tight",
                                                                                children: "Entity Overview"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 503,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 499,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-10 h-10 rounded-xl bg-gradient-to-br from-[#1b69a1] to-blue-500 flex items-center justify-center shadow-lg shadow-[#1b69a1]/30",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5 text-white",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "2.5",
                                                                                d: "M5 13l4 4L19 7"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 515,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                            lineNumber: 509,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 508,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 498,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] uppercase tracking-widest text-slate-400 font-medium",
                                                                                children: "Status"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 529,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-semibold text-emerald-600",
                                                                                children: "Verified & Active"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 532,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 528,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] uppercase tracking-widest text-slate-400 font-medium",
                                                                                children: "Compliance"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 539,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-semibold text-[#1b69a1]",
                                                                                children: "98.4%"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 542,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 538,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 526,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-6",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full h-2 bg-slate-200/60 rounded-full overflow-hidden",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        initial: {
                                                                            width: 0
                                                                        },
                                                                        whileInView: {
                                                                            width: "98.4%"
                                                                        },
                                                                        viewport: {
                                                                            once: false
                                                                        },
                                                                        transition: {
                                                                            duration: 1.5,
                                                                            ease: "easeOut"
                                                                        },
                                                                        className: "h-full bg-gradient-to-r from-[#1b69a1] to-blue-400 rounded-full"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 551,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                    lineNumber: 550,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 549,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 496,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 484,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute -bottom-10 -right-10 hidden xl:block z-20",
                                                style: {
                                                    y: yCard2
                                                },
                                                initial: {
                                                    opacity: 0,
                                                    x: 50
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                viewport: {
                                                    once: false
                                                },
                                                transition: {
                                                    duration: 1,
                                                    delay: 0.4
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-br from-[#1b69a1]/30 to-blue-500/20 blur-2xl opacity-60 rounded-[28px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 574,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative backdrop-blur-2xl bg-slate-900/80 border border-slate-700/40 rounded-[28px] p-7 w-[240px] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center mb-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold",
                                                                                children: "Score"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 581,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xl font-semibold text-white mt-0.5 tracking-tight",
                                                                                children: "98.4%"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 584,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 580,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 590,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 579,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative w-full h-2 bg-slate-800/70 rounded-full overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        width: 0
                                                                    },
                                                                    whileInView: {
                                                                        width: "98.4%"
                                                                    },
                                                                    viewport: {
                                                                        once: false
                                                                    },
                                                                    transition: {
                                                                        duration: 1.5,
                                                                        ease: "easeOut"
                                                                    },
                                                                    className: "h-full bg-gradient-to-r from-[#1b69a1] to-blue-400 rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                    lineNumber: 596,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 594,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 text-[10px] text-slate-400",
                                                                children: "Excellent compliance standing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 606,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 577,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 565,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 463,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "setup-form-section",
                        className: "py-20 bg-slate-50 border-y border-slate-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-black text-slate-900 mb-4",
                                                children: "GST Compliance Checker"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 624,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 font-bold",
                                                children: "Configure your business profile for automated monitoring."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 627,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 623,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleProfileSubmit,
                                        className: "space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid md:grid-cols-2 gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[11px] font-black uppercase tracking-widest text-slate-400 ml-4",
                                                                children: "Full Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 635,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "John Doe",
                                                                required: true,
                                                                value: form.name,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        name: e.target.value
                                                                    }),
                                                                className: "w-full bg-slate-50 border-2 border-slate-50 px-6 py-4 rounded-2xl font-bold focus:border-[#1b69a1] focus:bg-white outline-hidden transition-all"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 638,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 634,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[11px] font-black uppercase tracking-widest text-slate-400 ml-4",
                                                                children: "WhatsApp Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 650,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                placeholder: "+91 98765 43210",
                                                                required: true,
                                                                value: form.phone,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        phone: e.target.value
                                                                    }),
                                                                className: "w-full bg-slate-50 border-2 border-slate-50 px-6 py-4 rounded-2xl font-bold focus:border-[#1b69a1] focus:bg-white outline-hidden transition-all"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 653,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 649,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 633,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[11px] font-black uppercase tracking-widest text-slate-400 ml-4",
                                                        children: "GSTIN (Identification Number)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 666,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "15-digit code",
                                                        required: true,
                                                        value: form.gstin,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                gstin: e.target.value.toUpperCase()
                                                            }),
                                                        className: "w-full bg-slate-50 border-2 border-slate-50 px-6 py-4 rounded-2xl font-bold focus:border-[#1b69a1] focus:bg-white outline-hidden transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 669,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 665,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: isSearching,
                                                        className: "flex-1 bg-[#1b69a1] text-white py-5 rounded-2xl font-black hover:bg-[#155685] transition-all shadow-xl shadow-[#1b69a1]/20 disabled:opacity-50",
                                                        children: isSearching ? "Processing..." : "Save & Verify"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 684,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowForm(false),
                                                        className: "px-10 py-5 rounded-2xl font-black text-slate-400 hover:text-slate-900 transition-all border-2 border-transparent hover:border-slate-100",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 691,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 683,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 632,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 622,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                            lineNumber: 621,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 617,
                        columnNumber: 11
                    }, this),
                    searchResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "results-section",
                        className: "py-24 bg-white relative border-b border-slate-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[11px] mb-4 block",
                                                    children: "Verification Node Output"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 714,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-5xl font-black text-slate-900 tracking-tight",
                                                    children: [
                                                        "GST Analytics: ",
                                                        searchResult.gstin
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 717,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 713,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSearchResult(null),
                                            className: "bg-slate-50 text-slate-400 hover:text-slate-900 w-14 h-14 rounded-full flex items-center justify-center transition-all",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 721,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 712,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-[3.5rem] overflow-hidden shadow-[0_100px_150px_-50px_rgba(0,0,0,0.1)] border border-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$app$2f$components$2f$GSTProfileTabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        gstin: searchResult.gstin,
                                        tradeName: searchResult.legalname,
                                        state: searchResult.state,
                                        gstData: searchResult
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 730,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 729,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                            lineNumber: 711,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 707,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 border-y border-slate-100 bg-slate-50/50 relative overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex gap-24 items-center whitespace-nowrap",
                                initial: {
                                    x: "0%"
                                },
                                animate: {
                                    x: "-50%"
                                },
                                transition: {
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                children: [
                                    ...Array(2)
                                ].map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-24 items-center",
                                        children: [
                                            "MICROSOFT",
                                            "AIRTEL",
                                            "AMAZON",
                                            "RELIANCE",
                                            "ZOMATO"
                                        ].map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-black tracking-tighter text-slate-300 hover:text-[#1b69a1] cursor-default transition-colors grayscale hover:grayscale-0",
                                                children: brand
                                            }, brand, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 759,
                                                columnNumber: 23
                                            }, this))
                                    }, idx, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 756,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 745,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                            lineNumber: 744,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 743,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-40 bg-white relative overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: false
                                    },
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#1b69a1]/5 border border-[#1b69a1]/10 text-[#1b69a1] text-[11px] font-black mb-10 uppercase tracking-[0.2em]",
                                            children: "Verification Taxonomy"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 782,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-6xl md:text-8xl font-black text-slate-900 mb-10 leading-[0.9] tracking-tighter",
                                            children: [
                                                "Granular Audit ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 786,
                                                    columnNumber: 32
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#1b69a1]",
                                                    children: "Points."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 787,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 785,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-lg",
                                            children: "We don't just check 'Active' status. Our engine parses the entire GSTN metadata to provide deep legal insights."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 789,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                "GSTR-1 & 3B Frequency Matching",
                                                "ITC Mismatch Probability Scores",
                                                "Legal Name vs Trade Name History",
                                                "State-level Jurisdiction Mapping"
                                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all font-bold group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#1b69a1] group-hover:bg-[#1b69a1] group-hover:text-white transition-colors shadow-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-5 h-5",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2.5",
                                                                    d: "M5 13l4 4L19 7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                    lineNumber: 812,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 806,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 805,
                                                            columnNumber: 21
                                                        }, this),
                                                        item
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 801,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 794,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 776,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    viewport: {
                                        once: false,
                                        amount: 0.3
                                    },
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -inset-20 bg-linear-to-tr from-[#1b69a1]/10 via-transparent to-transparent rounded-full blur-[100px]"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 832,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative bg-slate-900 rounded-[3rem] p-12 shadow-2xl overflow-hidden border border-slate-800 h-[600px] flex flex-col justify-center gap-12 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] uppercase tracking-[0.3em] font-black text-white/30",
                                                            children: "Live Processing Node"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 835,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-3 h-3 rounded-full bg-blue-500 animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                    lineNumber: 839,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-mono text-sm overflow-hidden whitespace-nowrap opacity-60",
                                                                    children: "$ gst-verify --target 27AA... --depth deep"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                    lineNumber: 840,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 838,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 834,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-8",
                                                    children: [
                                                        {
                                                            l: "Parsing Engines",
                                                            v: "14 Nodes"
                                                        },
                                                        {
                                                            l: "Metadata Points",
                                                            v: "248+"
                                                        },
                                                        {
                                                            l: "Signature Version",
                                                            v: "4.2.0"
                                                        },
                                                        {
                                                            l: "Checksum",
                                                            v: "Verified"
                                                        }
                                                    ].map((job, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] uppercase tracking-widest text-[#1b69a1] font-black",
                                                                    children: job.l
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                    lineNumber: 854,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl font-black text-white",
                                                                    children: job.v
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                    lineNumber: 857,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-1 w-full bg-slate-800 rounded-full overflow-hidden",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        initial: {
                                                                            width: 0
                                                                        },
                                                                        whileInView: {
                                                                            width: "80%"
                                                                        },
                                                                        viewport: {
                                                                            once: false
                                                                        },
                                                                        transition: {
                                                                            duration: 2,
                                                                            delay: i * 0.2
                                                                        },
                                                                        className: "h-full bg-[#1b69a1]/40"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 861,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                    lineNumber: 860,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 853,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 846,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-12 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-[10px] uppercase tracking-widest",
                                                        children: "Secure Transmission Isolated"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 874,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 873,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 833,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 826,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                            lineNumber: 775,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 774,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-40 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid lg:grid-cols-2 gap-20 items-end mb-32",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[11px] mb-6 block",
                                                children: "Core Capabilities"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 888,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight",
                                                children: [
                                                    "Enterprise-grade ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 892,
                                                        columnNumber: 36
                                                    }, this),
                                                    "GST verification."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 891,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 887,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-slate-500 font-medium leading-relaxed max-w-md",
                                        children: "Engineered for speed and reliability, our engine provides a complete 360° view of any tax-registered entity in India."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 896,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 886,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                            lineNumber: 885,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 884,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-40 relative overflow-hidden bg-slate-950",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-[60%] h-full bg-[#1b69a1]/5 rounded-l-full blur-[120px] animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 980,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 981,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto px-6 relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 40
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: false
                                    },
                                    transition: {
                                        duration: 0.8,
                                        ease: "easeOut"
                                    },
                                    className: "flex flex-col lg:flex-row gap-24 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b69a1]/10 border border-[#1b69a1]/20 mb-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-[#1b69a1] animate-ping"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 993,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[10px] font-mono",
                                                            children: "Execution Protocol"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 994,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 992,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-6xl md:text-8xl font-black text-white mb-16 leading-[0.9] tracking-tighter",
                                                    children: [
                                                        "Precision data ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1000,
                                                            columnNumber: 34
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#1b69a1]",
                                                            children: "in moments."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1001,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 999,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative space-y-12 ml-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                scaleY: 0
                                                            },
                                                            whileInView: {
                                                                scaleY: 1
                                                            },
                                                            viewport: {
                                                                once: false
                                                            },
                                                            transition: {
                                                                duration: 1.5,
                                                                ease: "easeInOut"
                                                            },
                                                            className: "absolute left-[21px] top-6 bottom-6 w-[2px] bg-[#1b69a1] origin-top"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1006,
                                                            columnNumber: 19
                                                        }, this),
                                                        [
                                                            {
                                                                s: "01",
                                                                t: "Secure Handshake",
                                                                d: "Establish a secure session through Google OAuth 2.0 with military-grade encryption."
                                                            },
                                                            {
                                                                s: "02",
                                                                t: "Identity Injection",
                                                                d: "Inject any 15-digit GST identifier into our global parser for immediate processing."
                                                            },
                                                            {
                                                                s: "03",
                                                                t: "Intelligence Output",
                                                                d: "Receive a comprehensive risk-profile, filing history, and legal validation report."
                                                            }
                                                        ].map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    x: -20
                                                                },
                                                                whileInView: {
                                                                    opacity: 1,
                                                                    x: 0
                                                                },
                                                                viewport: {
                                                                    once: false
                                                                },
                                                                transition: {
                                                                    delay: i * 0.2,
                                                                    duration: 0.5
                                                                },
                                                                className: "flex gap-12 group relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative shrink-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-[44px] h-[44px] rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-lg font-black text-white group-hover:border-[#1b69a1] group-hover:text-[#1b69a1] transition-all duration-500 z-10 relative bg-slate-950",
                                                                                children: step.s
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 1040,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 bg-[#1b69a1]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 1044,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1039,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "text-2xl font-bold text-white mb-3 group-hover:text-[#1b69a1] transition-colors duration-300",
                                                                                children: step.t
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 1048,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-400 font-medium leading-relaxed text-lg max-w-md group-hover:text-slate-300 transition-colors duration-300",
                                                                                children: step.d
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 1051,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1047,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1031,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1004,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 991,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.95
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            viewport: {
                                                once: false
                                            },
                                            transition: {
                                                duration: 1,
                                                ease: "easeOut"
                                            },
                                            className: "relative lg:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -inset-20 bg-[radial-gradient(#1b69a1_1px,transparent_1px)] [background-size:32px_32px] opacity-10 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1068,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -inset-10 bg-gradient-to-br from-[#1b69a1]/40 via-blue-500/10 to-transparent blur-3xl opacity-50 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1071,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative p-1 bg-linear-to-br from-white/20 to-transparent rounded-[48px] shadow-2xl",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative bg-slate-900/40 backdrop-blur-3xl border border-white/10    rounded-[44px] p-4 overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative rounded-[32px] overflow-hidden min-h-[560px] group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/images/gst2.jpg",
                                                                        alt: "GST Compliance Intelligence",
                                                                        fill: true,
                                                                        className: "object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1081,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1089,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 bg-linear-to-tr from-[#1b69a1]/30 via-transparent to-transparent opacity-40"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1090,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1080,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    x: 20,
                                                                    opacity: 0
                                                                },
                                                                whileInView: {
                                                                    x: 0,
                                                                    opacity: 1
                                                                },
                                                                viewport: {
                                                                    once: false
                                                                },
                                                                transition: {
                                                                    delay: 0.5
                                                                },
                                                                className: "absolute bottom-10 left-10 backdrop-blur-2xl bg-white/5    border border-white/10 rounded-3xl p-6    shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] group/metric",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-4 mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 1104,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs uppercase tracking-[0.3em] text-white/50 font-black",
                                                                                children: "System Accuracy"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 1105,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1103,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-4xl font-black text-white tracking-tighter flex items-end gap-1",
                                                                        children: [
                                                                            "100",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[#1b69a1] text-2xl",
                                                                                children: "%"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 1110,
                                                                                columnNumber: 28
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1109,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1094,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    y: -20,
                                                                    opacity: 0
                                                                },
                                                                whileInView: {
                                                                    y: 0,
                                                                    opacity: 1
                                                                },
                                                                viewport: {
                                                                    once: false
                                                                },
                                                                transition: {
                                                                    delay: 0.7
                                                                },
                                                                className: "absolute top-10 right-10 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl px-5 py-3 shadow-xl",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1",
                                                                        children: "Data Latency"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1122,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-lg font-black text-white",
                                                                        children: "18ms"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1125,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1115,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1075,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1074,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1060,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 984,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 983,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 978,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-48 bg-white relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 1137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto px-6 text-center relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: false
                                        },
                                        className: "mb-24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full mb-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[10px]",
                                                    children: "Compliance Intelligence"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1147,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 1146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none",
                                                children: [
                                                    "Stay 100% GST ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#1b69a1]",
                                                        children: "Compliant"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1153,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 1152,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 1140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-3 gap-8",
                                        children: [
                                            {
                                                t: "Complete Return Visibility",
                                                d: "View GSTR-1, GSTR-3B, GSTR-9 history, filing frequency, and compliance records instantly in structured format.",
                                                icon: "M9 17v-6h13M9 7h13M5 7h.01M5 17h.01",
                                                color: "bg-blue-500"
                                            },
                                            {
                                                t: "Deadline & Risk Alerts",
                                                d: "Detect missed filings, upcoming due dates, and compliance risks before penalties or legal notices occur.",
                                                icon: "M12 8v4l3 3M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z",
                                                color: "bg-indigo-500"
                                            },
                                            {
                                                t: "Avoid Penalties & Fees",
                                                d: "Identify compliance gaps early and take corrective action to prevent late fees, penalties, and GST notices.",
                                                icon: "M5 13l4 4L19 7",
                                                color: "bg-[#1b69a1]"
                                            }
                                        ].map((benefit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 30
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                viewport: {
                                                    once: false
                                                },
                                                transition: {
                                                    delay: i * 0.15,
                                                    duration: 0.6
                                                },
                                                className: "group relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -inset-[1px] bg-linear-to-br from-slate-200 to-transparent rounded-[3rem] group-hover:from-[#1b69a1]/40 group-hover:to-[#1b69a1]/10 transition-all duration-500 mt-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1187,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative bg-white rounded-[3rem] p-12 h-full flex flex-col items-center text-center shadow-sm group-hover:shadow-[0_40px_80px_-20px_rgba(27,105,161,0.12)] transition-all duration-500 border border-slate-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 bg-linear-to-br from-[#1b69a1]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1192,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-10 h-10 text-[#1b69a1]",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            d: benefit.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                            lineNumber: 1199,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1193,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1191,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-2xl font-black text-slate-900 mb-6 tracking-tight",
                                                                children: benefit.t
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1208,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-500 font-medium leading-relaxed text-lg",
                                                                children: benefit.d
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1212,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-10 w-12 h-1 bg-slate-100 rounded-full group-hover:w-20 group-hover:bg-[#1b69a1]/30 transition-all duration-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1217,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1189,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 1178,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                        lineNumber: 1157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 1139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 1135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-40 bg-slate-950 relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-20 bg-[radial-gradient(#1b69a1_1px,transparent_1px)] [background-size:40px_40px]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 1227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto px-6 relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid lg:grid-cols-2 gap-24 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            viewport: {
                                                once: false
                                            },
                                            className: "grid grid-cols-2 gap-6",
                                            children: [
                                                {
                                                    t: "E-commerce",
                                                    d: "Automate vendor onboarding for digital marketplaces.",
                                                    icon: "🛍️"
                                                },
                                                {
                                                    t: "Banking",
                                                    d: "Verify business identities for loan approvals instantly.",
                                                    icon: "🏦"
                                                },
                                                {
                                                    t: "Supply Chain",
                                                    d: "Monitor compliance across 10,000+ tier-2 suppliers.",
                                                    icon: "🚛"
                                                },
                                                {
                                                    t: "Accounting",
                                                    d: "Consolidate GSTR status for bulk auditing reports.",
                                                    icon: "📈"
                                                }
                                            ].map((use, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-colors group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-4xl mb-6 group-hover:scale-110 transition-transform duration-300",
                                                            children: use.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1263,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-lg font-bold text-white mb-2",
                                                            children: use.t
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1266,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-400 text-sm font-medium leading-relaxed",
                                                            children: use.d
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1269,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1259,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[11px] mb-8 block",
                                                    children: "Tailored Solutions"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1277,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-5xl md:text-7xl font-black text-white mb-10 leading-[1] tracking-tight",
                                                    children: [
                                                        "Built for your ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1281,
                                                            columnNumber: 34
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#1b69a1]",
                                                            children: "Workflow."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1282,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1280,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-slate-400 font-medium leading-relaxed mb-12",
                                                    children: "Whether you are a startup verifying your first supplier or a Fortune 500 company managing a global supply chain, our infrastructure scales with your regulatory requirements."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1284,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-6",
                                                    children: [
                                                        "Zero-config API integration",
                                                        "Custom risk threshold alerts",
                                                        "Exportable PDF compliance audits",
                                                        "Single Sign-On (SSO) Support"
                                                    ].map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4 text-white font-bold tracking-tight",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-5 h-5 rounded-full bg-[#1b69a1]/20 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-1.5 h-1.5 rounded-full bg-[#1b69a1]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1301,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                    lineNumber: 1300,
                                                                    columnNumber: 23
                                                                }, this),
                                                                feature
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1296,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1289,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1276,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1230,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 1229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 1226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-40 bg-slate-50 relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 1314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col lg:flex-row gap-24 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:w-1/2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -30
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                viewport: {
                                                    once: false
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[11px] mb-8 block",
                                                        children: "Security Architecture"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1324,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-5xl md:text-7xl font-black text-slate-900 mb-12 leading-[1] tracking-tight",
                                                        children: [
                                                            "Bank-grade ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1328,
                                                                columnNumber: 32
                                                            }, this),
                                                            "Data Sovereignty."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1327,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-lg",
                                                        children: "Our infrastructure is engineered to meet the highest security standards required by financial institutions and government agencies. Every request is isolated, encrypted, and processed in secure enclaves."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1331,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-10",
                                                        children: [
                                                            {
                                                                label: "Encryption",
                                                                val: "AES-256"
                                                            },
                                                            {
                                                                label: "Compliance",
                                                                val: "SOC2 Type II"
                                                            },
                                                            {
                                                                label: "Uptime",
                                                                val: "99.99%"
                                                            },
                                                            {
                                                                label: "Data Residency",
                                                                val: "Local"
                                                            }
                                                        ].map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-l-4 border-[#1b69a1] pl-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs uppercase tracking-widest text-slate-400 font-bold mb-1",
                                                                        children: m.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1346,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-black text-slate-900",
                                                                        children: m.val
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1349,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1345,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1338,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 1319,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:w-1/2 relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-900 rounded-[3rem] p-10 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-800 relative group overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-linear-to-br from-[#1b69a1]/20 via-transparent to-transparent opacity-50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1361,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative z-10 space-y-6",
                                                        children: [
                                                            {
                                                                l: "Secure Gateway Authorization",
                                                                s: "Verified",
                                                                w: "100%"
                                                            },
                                                            {
                                                                l: "End-to-End Packet Encryption",
                                                                s: "Active",
                                                                w: "94%"
                                                            },
                                                            {
                                                                l: "Multi-Node Identity Check",
                                                                s: "Complete",
                                                                w: "100%"
                                                            },
                                                            {
                                                                l: "Risk Signature Validation",
                                                                s: "Locked",
                                                                w: "88%"
                                                            }
                                                        ].map((job, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between text-[11px] font-black uppercase tracking-widest",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-white/60",
                                                                                children: job.l
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 1384,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[#1b69a1]",
                                                                                children: job.s
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                                lineNumber: 1385,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1383,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-1.5 w-full bg-slate-800 rounded-full overflow-hidden",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                            initial: {
                                                                                width: 0
                                                                            },
                                                                            whileInView: {
                                                                                width: job.w
                                                                            },
                                                                            viewport: {
                                                                                once: false
                                                                            },
                                                                            transition: {
                                                                                duration: 1.5,
                                                                                delay: idx * 0.2
                                                                            },
                                                                            className: "h-full bg-[#1b69a1] rounded-full"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                            lineNumber: 1388,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                        lineNumber: 1387,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1382,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1363,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-12 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-8 py-3 rounded-full bg-white/5 border border-white/10 text-[11px] font-black text-white/40 uppercase tracking-[0.3em]",
                                                            children: "Audit Log • Terminal 042"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1401,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1400,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 1360,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1358,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1317,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 1316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 1313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-40 bg-white relative overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[11px] mb-6 block font-mono",
                                            children: "Ecosystem Modules"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1415,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-5xl md:text-7xl font-black text-slate-900 tracking-tighter",
                                            children: [
                                                "Beyond Simple",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#1b69a1]",
                                                    children: "Verification."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1420,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1418,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1414,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-4 gap-6",
                                    children: [
                                        {
                                            t: "Watchtower",
                                            d: "24/7 automated monitoring of your entire vendor list with delta change alerts.",
                                            icon: "🔭",
                                            bg: "bg-blue-50"
                                        },
                                        {
                                            t: "Audit Engine",
                                            d: "Generate deep-dive PDF reports for bank audits and legal due diligence.",
                                            icon: "📋",
                                            bg: "bg-indigo-50"
                                        },
                                        {
                                            t: "Risk Mapper",
                                            d: "Visualize supply chain compliance hotspots on an interactive dashboard.",
                                            icon: "🗺️",
                                            bg: "bg-slate-50"
                                        },
                                        {
                                            t: "FastPass API",
                                            d: "Enterprise-grade endpoints for high-volume identity validation nodes.",
                                            icon: "⚡",
                                            bg: "bg-emerald-50"
                                        }
                                    ].map((tool, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            viewport: {
                                                once: false
                                            },
                                            transition: {
                                                delay: i * 0.1
                                            },
                                            whileHover: {
                                                y: -10
                                            },
                                            className: `${tool.bg} p-10 rounded-[3rem] border border-transparent hover:border-[#1b69a1]/20 transition-all group`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-8 group-hover:scale-110 transition-transform",
                                                    children: tool.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1460,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xl font-bold text-slate-900 mb-4",
                                                    children: tool.t
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1463,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 font-semibold text-sm leading-relaxed",
                                                    children: tool.d
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1466,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1451,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1424,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                            lineNumber: 1413,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 1412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-40 bg-slate-50 relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-[50%] h-[50%] bg-[#1b69a1]/5 rounded-full blur-[120px]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 1477,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto px-6 relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-slate-100 flex flex-col lg:flex-row items-center gap-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#1b69a1] font-black uppercase tracking-[0.3em] text-[11px] mb-8 block",
                                                    children: "Stay Current"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1481,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-5xl md:text-6xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight",
                                                    children: [
                                                        "GST Laws evolve. ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1485,
                                                            columnNumber: 36
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#1b69a1]",
                                                            children: "We keep you ahead."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1486,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1484,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl text-slate-500 font-medium leading-relaxed mb-12",
                                                    children: 'Join 50,000+ professionals who receive our weekly "Compliance Pulse" — a briefing on GSTN changes, due date reminders, and regulatory shifts.'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1488,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    className: "flex flex-col sm:flex-row gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            placeholder: "Enter your email address",
                                                            className: "flex-1 bg-slate-50 border-2 border-slate-50 px-8 py-5 rounded-[2rem] font-bold focus:border-[#1b69a1] focus:bg-white outline-hidden transition-all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1494,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "bg-[#1b69a1] text-white px-10 py-5 rounded-[2rem] font-black hover:bg-[#155685] transition-all shadow-xl shadow-[#1b69a1]/20",
                                                            children: "Subscribe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1499,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1493,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1480,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:w-1/2 grid grid-cols-2 gap-6",
                                            children: [
                                                {
                                                    l: "Notifications",
                                                    v: "2.4k Monthly"
                                                },
                                                {
                                                    l: "Legislation Tracked",
                                                    v: "100%"
                                                },
                                                {
                                                    l: "Accuracy Rate",
                                                    v: "99.9%"
                                                },
                                                {
                                                    l: "Support Response",
                                                    v: "< 2 Hours"
                                                }
                                            ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] uppercase tracking-widest text-slate-400 font-black mb-2",
                                                            children: stat.l
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1516,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-black text-slate-900",
                                                            children: stat.v
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1519,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1512,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1505,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1479,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                lineNumber: 1478,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 1476,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-40 bg-white relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8",
                                            children: [
                                                "Common ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#1b69a1]",
                                                    children: "Inquiries"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1534,
                                                    columnNumber: 24
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1533,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-slate-500 font-medium",
                                            children: "Everything you need to know about the GSTInsight protocol."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1536,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1532,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        {
                                            q: "How real-time is the verification data?",
                                            a: "Our engine interfaces directly with GSTN secondary nodes, providing sub-second retrieval of the current legal status, ensuring your data is never older than 60 seconds."
                                        },
                                        {
                                            q: "Is Google OAuth required for every search?",
                                            a: "Auth is required for enterprise auditing and profile monitoring. Anonymous lookups are available in limited capacity, but authenticated sessions unlock full risk-profile reports."
                                        },
                                        {
                                            q: "Can I monitor multiple GSTINs simultaneously?",
                                            a: "Yes. Our 'Watchtower' protocol allows businesses to upload a global list of GSTINs for automated daily compliance monitoring and delta alerts."
                                        },
                                        {
                                            q: "What does the Compliance Score indicate?",
                                            a: "The score is a proprietary calculation based on 24 months of filing history, on-time frequency, and legal status stability, helping you assess vendor risk instantly."
                                        }
                                    ].map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            viewport: {
                                                once: false
                                            },
                                            transition: {
                                                delay: i * 0.1
                                            },
                                            className: "group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-[#1b69a1]/30 transition-all duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xl font-bold text-slate-900 mb-4 flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-8 h-8 rounded-lg bg-[#1b69a1] flex items-center justify-center text-white text-xs font-black shrink-0",
                                                                children: "Q"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                                lineNumber: 1570,
                                                                columnNumber: 23
                                                            }, this),
                                                            faq.q
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1569,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-500 leading-relaxed font-semibold pl-12 line-clamp-2 group-hover:line-clamp-none transition-all duration-500",
                                                        children: faq.a
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                        lineNumber: 1575,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                lineNumber: 1568,
                                                columnNumber: 19
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1560,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1541,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                            lineNumber: 1531,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 1530,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-6 py-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9,
                                y: 50
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20
                                }
                            },
                            viewport: {
                                once: false,
                                amount: 0.2
                            },
                            className: "bg-linear-to-br from-[#1b69a1] via-[#155685] to-slate-900 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-[0_80px_120px_-30px_rgba(27,105,161,0.3)] group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px] opacity-10"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1602,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-[120px]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1603,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1604,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-[0.3em] mb-10",
                                            children: "Ready to scale?"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1607,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-6xl md:text-9xl font-black mb-14 leading-[0.85] tracking-tight",
                                            children: [
                                                "Own your ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1611,
                                                    columnNumber: 26
                                                }, this),
                                                "compliance."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1610,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap justify-center gap-6",
                                            children: [
                                                status === "authenticated" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    onClick: ()=>{
                                                        document.getElementById("search-section")?.scrollIntoView({
                                                            behavior: "smooth"
                                                        });
                                                    },
                                                    className: "bg-white text-[#1b69a1] px-12 py-6 rounded-2xl font-black transition-all shadow-2xl text-xl",
                                                    children: "Start New Search"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1616,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("google", {
                                                            callbackUrl: "/"
                                                        }),
                                                    className: "bg-white text-[#1b69a1] px-12 py-6 rounded-2xl font-black transition-all shadow-2xl text-xl",
                                                    children: "Get Started Free"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1629,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    className: "bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-2xl font-black hover:bg-white hover:text-slate-900 transition-all text-xl",
                                                    children: "Schedule Demo"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1638,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1614,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1606,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                            lineNumber: 1587,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 1586,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "bg-white pt-40 pb-20 px-6 border-t border-slate-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-5 gap-24 mb-32",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2 md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 mb-10 group cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 bg-linear-to-tr from-[#1b69a1] to-blue-500 rounded-2xl flex items-center justify-center font-black text-white shadow-xl shadow-[#1b69a1]/20",
                                                            children: "G"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1656,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-900 font-black text-3xl tracking-tighter uppercase",
                                                            children: "GSTInsight"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1659,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1655,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 font-semibold leading-relaxed max-w-sm text-lg",
                                                    children: "The definitive source for Indian tax entity intelligence. Built for scale, security, and surgical precision."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1663,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1654,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-slate-900 font-black mb-10 text-[11px] uppercase tracking-[0.3em]",
                                                    children: "Protocol"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1680,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-6 text-[15px] font-bold text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "Lookup Node"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1684,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "Audit API"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1687,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "Risk Scoring"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1690,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "Watchtower"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1693,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1683,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1679,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-slate-900 font-black mb-10 text-[11px] uppercase tracking-[0.3em]",
                                                    children: "Integrations"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1700,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-6 text-[15px] font-bold text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "Documentation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1704,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "System Health"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1707,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "Webhooks"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1710,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "Open Access"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1713,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1703,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1699,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-slate-900 font-black mb-10 text-[11px] uppercase tracking-[0.3em]",
                                                    children: "Organization"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1720,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-6 text-[15px] font-bold text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "Architecture"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1724,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "Public Assets"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1727,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "Security Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1730,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "hover:text-[#1b69a1] cursor-pointer transition-colors",
                                                            children: "Privacy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                            lineNumber: 1733,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1723,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1719,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1653,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row justify-between items-center text-[13px] font-bold text-slate-400 border-t border-slate-100 pt-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "© 2026 GSTInsight Technologies. Precision compliance infrastructure."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1741,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-12 mt-8 md:mt-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hover:text-slate-900 cursor-pointer transition-colors",
                                                    children: "Network Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1746,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hover:text-slate-900 cursor-pointer transition-colors",
                                                    children: "Legal Handshake"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                                    lineNumber: 1749,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                            lineNumber: 1745,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                                    lineNumber: 1740,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                            lineNumber: 1652,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                        lineNumber: 1651,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Pibi Project/GovernanceAI/app/page.js",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(GSTInsightPage, "/3VXoTqOekFXHg/Gac2mRe7/BaQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Pibi__Project$2f$GovernanceAI$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = GSTInsightPage;
var _c;
__turbopack_context__.k.register(_c, "GSTInsightPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Pibi%20Project_GovernanceAI_33dd74cd._.js.map