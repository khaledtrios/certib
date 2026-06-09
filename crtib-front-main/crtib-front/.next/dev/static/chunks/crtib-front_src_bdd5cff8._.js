(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/crtib-front/src/components/ui/buttonStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buttonBase",
    ()=>buttonBase,
    "buttonSizes",
    ()=>buttonSizes,
    "buttonVariants",
    ()=>buttonVariants
]);
const buttonBase = "inline-flex items-center justify-center select-none " + "rounded-[2px] border font-sans font-semibold uppercase tracking-[0.08em] " + "transition-colors duration-150 focus-visible:outline-none " + "focus-visible:ring-2 focus-visible:ring-offset-2";
const buttonSizes = {
    sm: "h-10 px-6 text-[12px]",
    md: "h-11 px-7 text-[13px]"
};
const buttonVariants = {
    primary: "bg-[#37C2A2] border-[#37C2A2] text-white " + "hover:bg-white hover:text-[#37C2A2] hover:border-[#E6E6E6] " + "focus-visible:ring-[#37C2A2]",
    dark: "bg-[#303E48] border-[#303E48] text-white " + "hover:bg-white hover:text-[#303E48] hover:border-[#E6E6E6] " + "focus-visible:ring-[#303E48]",
    ghost: "bg-transparent text-white border-white/40 " + "hover:bg-white/10 focus-visible:ring-white/70",
    gray: "bg-crtib-gray-dark border-crtib-gray-dark text-white " + "hover:bg-[#555555] hover:border-[#555555] " + "focus-visible:ring-crtib-gray-dark"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/ui/buttonStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "e37e09f23b26156c5eb8561990683922ce4202ac4334c347f7ee47772aa22b5b") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e37e09f23b26156c5eb8561990683922ce4202ac4334c347f7ee47772aa22b5b";
    }
    let children;
    let label;
    let props;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ children, label, variant: t1, size: t2, className: t3, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = label;
        $[4] = props;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        children = $[2];
        label = $[3];
        props = $[4];
        t1 = $[5];
        t2 = $[6];
        t3 = $[7];
    }
    const variant = t1 === undefined ? "primary" : t1;
    const size = t2 === undefined ? "md" : t2;
    const className = t3 === undefined ? "" : t3;
    const content = children ?? label;
    const t4 = `${__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonBase"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonSizes"][size]} ${__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"][variant]} ${className}`;
    let t5;
    if ($[8] !== t4) {
        t5 = t4.trim();
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const classes = t5;
    if ("href" in props && props.href) {
        let t6;
        if ($[10] !== classes || $[11] !== content || $[12] !== props.href) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: props.href,
                className: classes,
                children: content
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/ui/Button.tsx",
                lineNumber: 80,
                columnNumber: 12
            }, this);
            $[10] = classes;
            $[11] = content;
            $[12] = props.href;
            $[13] = t6;
        } else {
            t6 = $[13];
        }
        return t6;
    }
    const { type: t6, onClick, disabled } = props;
    const type = t6 === undefined ? "button" : t6;
    let t7;
    if ($[14] !== classes || $[15] !== content || $[16] !== disabled || $[17] !== onClick || $[18] !== type) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            onClick: onClick,
            disabled: disabled,
            className: classes,
            children: content
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/ui/Button.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[14] = classes;
        $[15] = content;
        $[16] = disabled;
        $[17] = onClick;
        $[18] = type;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    return t7;
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/ui/ButtonLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonLink",
    ()=>ButtonLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/ui/buttonStyles.ts [app-client] (ecmascript)");
;
;
;
;
function ButtonLink(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "7219bea06e7a1c113be9f517509398f24e7b58c5973203461eeb89bbd47ccc08") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7219bea06e7a1c113be9f517509398f24e7b58c5973203461eeb89bbd47ccc08";
    }
    const { href, label, variant: t1, size: t2, className: t3, ariaLabel } = t0;
    const variant = t1 === undefined ? "primary" : t1;
    const size = t2 === undefined ? "md" : t2;
    const className = t3 === undefined ? "" : t3;
    const t4 = ariaLabel || label;
    const t5 = `${__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonBase"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonSizes"][size]} ${__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"][variant]} ${className}`;
    let t6;
    if ($[1] !== href || $[2] !== label || $[3] !== t4 || $[4] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            "aria-label": t4,
            className: t5,
            children: label
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/ui/ButtonLink.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[1] = href;
        $[2] = label;
        $[3] = t4;
        $[4] = t5;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    return t6;
}
_c = ButtonLink;
var _c;
__turbopack_context__.k.register(_c, "ButtonLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PdfViewerModal",
    ()=>PdfViewerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$ButtonLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/ui/ButtonLink.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PdfViewerModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "d14958243206989d582536e70eb158101893031bf64a47a248d8b66695d3d111") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d14958243206989d582536e70eb158101893031bf64a47a248d8b66695d3d111";
    }
    const { title, pdfUrl, triggerLabel: t1, className: t2 } = t0;
    const triggerLabel = t1 === undefined ? "Voir le PDF" : t1;
    const className = t2 === undefined ? "" : t2;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const headingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let t3;
    let t4;
    if ($[1] !== open) {
        t3 = ({
            "PdfViewerModal[useEffect()]": ()=>{
                if (!open) {
                    return;
                }
                const onKeyDown = {
                    "PdfViewerModal[useEffect() > onKeyDown]": (event)=>{
                        if (event.key === "Escape") {
                            setOpen(false);
                        }
                    }
                }["PdfViewerModal[useEffect() > onKeyDown]"];
                document.addEventListener("keydown", onKeyDown);
                document.body.classList.add("overflow-hidden");
                return ()=>{
                    document.removeEventListener("keydown", onKeyDown);
                    document.body.classList.remove("overflow-hidden");
                };
            }
        })["PdfViewerModal[useEffect()]"];
        t4 = [
            open
        ];
        $[1] = open;
        $[2] = t3;
        $[3] = t4;
    } else {
        t3 = $[2];
        t4 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "PdfViewerModal[<Button>.onClick]": ()=>setOpen(true)
        })["PdfViewerModal[<Button>.onClick]"];
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] !== triggerLabel) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            label: triggerLabel,
            onClick: t5,
            size: "sm",
            className: "bg-crtib-green-blue border-crtib-green-blue text-white hover:bg-white hover:text-crtib-green-blue hover:border-[#E6E6E6] focus-visible:ring-crtib-green-blue"
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[5] = triggerLabel;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== className || $[8] !== headingId || $[9] !== open || $[10] !== pdfUrl || $[11] !== title) {
        t7 = open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": headingId,
            onClick: {
                "PdfViewerModal[<div>.onClick]": ()=>setOpen(false)
            }["PdfViewerModal[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: [
                    "relative w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl",
                    "border border-black/10",
                    className
                ].join(" "),
                onClick: _PdfViewerModalDivOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-black/10 bg-crtib-gray-light px-5 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] font-semibold uppercase tracking-[0.2em] text-crtib-green-blue",
                                        children: "Actualités"
                                    }, void 0, false, {
                                        fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 349
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: headingId,
                                        className: "truncate text-[18px] font-semibold text-crtib-gray-dark",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 453
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
                                lineNumber: 84,
                                columnNumber: 324
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$ButtonLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                        href: pdfUrl,
                                        label: "Ouvrir",
                                        size: "sm",
                                        className: "h-10 px-5 text-[12px]",
                                        ariaLabel: `Ouvrir le PDF: ${title}`
                                    }, void 0, false, {
                                        fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 599
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        label: "Fermer",
                                        onClick: {
                                            "PdfViewerModal[<Button>.onClick]": ()=>setOpen(false)
                                        }["PdfViewerModal[<Button>.onClick]"],
                                        size: "sm",
                                        className: "bg-crtib-gray-back border-crtib-gray-back text-white hover:bg-crtib-gray-back/90 focus-visible:ring-crtib-gray-back"
                                    }, void 0, false, {
                                        fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 724
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
                                lineNumber: 84,
                                columnNumber: 558
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
                        lineNumber: 84,
                        columnNumber: 218
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[70vh] w-full bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: pdfUrl,
                            title: title,
                            className: "h-full w-full"
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
                            lineNumber: 86,
                            columnNumber: 246
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
                        lineNumber: 86,
                        columnNumber: 204
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
                lineNumber: 84,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/pdf/PdfViewerModal.tsx",
            lineNumber: 82,
            columnNumber: 17
        }, this) : null;
        $[7] = className;
        $[8] = headingId;
        $[9] = open;
        $[10] = pdfUrl;
        $[11] = title;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t6 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t6,
                t7
            ]
        }, void 0, true);
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
}
_s(PdfViewerModal, "CfrxCAERwnXsIqrLsWZDIu+FAQk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = PdfViewerModal;
function _PdfViewerModalDivOnClick(event_0) {
    return event_0.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "PdfViewerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/video/VideoViewerModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoViewerModal",
    ()=>VideoViewerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function VideoViewerModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "3ac42724a5454070604e22481d413e1415baff953c434a9aa8b166c67054bbb0") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3ac42724a5454070604e22481d413e1415baff953c434a9aa8b166c67054bbb0";
    }
    const { title, videoUrl, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    if ($[1] !== className) {
        t2 = [
            "w-full overflow-hidden rounded-lg border border-black/10 bg-black shadow-lg",
            className
        ];
        $[1] = className;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const t3 = t2.join(" ");
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[12px] font-semibold uppercase tracking-[0.2em] text-crtib-green-blue",
            children: "Actualités"
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/video/VideoViewerModal.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-crtib-gray-light px-5 py-4",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "truncate text-[18px] font-semibold text-crtib-gray-dark",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/crtib-front/src/components/video/VideoViewerModal.tsx",
                    lineNumber: 41,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/video/VideoViewerModal.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[4] = title;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== title || $[7] !== videoUrl) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-video w-full bg-black",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                src: videoUrl,
                title: title,
                className: "h-full w-full",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/video/VideoViewerModal.tsx",
                lineNumber: 49,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/video/VideoViewerModal.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[6] = title;
        $[7] = videoUrl;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t3 || $[10] !== t5 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/video/VideoViewerModal.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    return t7;
}
_c = VideoViewerModal;
var _c;
__turbopack_context__.k.register(_c, "VideoViewerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/calculator/CalculatorSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalculatorSection",
    ()=>CalculatorSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const defaultOptions = [
    "Génie civil",
    "Gros-oeuvre",
    "Second-oeuvre"
];
const defaultResults = [
    {
        label: "de chiffre d'affaires annuel minimum",
        value: "24.00 M€"
    },
    {
        label: "d'effectif minimum",
        value: "261 PERSONNES"
    }
];
function CalculatorSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "18469eac68cc1badf3e73515895731d26c388babc88f8c3d9504eba7bff21194") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "18469eac68cc1badf3e73515895731d26c388babc88f8c3d9504eba7bff21194";
    }
    const { title: t1, options: t2, results: t3 } = t0;
    const title = t1 === undefined ? "Calculateur" : t1;
    const options = t2 === undefined ? defaultOptions : t2;
    const results = t3 === undefined ? defaultResults : t3;
    const [trade, setTrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(options[0] || "");
    const [marketValue, setMarketValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showResults, setShowResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const canSubmit = trade.trim() && marketValue.trim() && duration.trim();
    let t4;
    if ($[1] !== title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-center text-[18px] font-semibold uppercase tracking-[0.25em] text-crtib-gray-dark",
            children: title
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    let t5;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "CalculatorSection[<select>.onChange]": (event)=>setTrade(event.target.value)
        })["CalculatorSection[<select>.onChange]"];
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    let t6;
    if ($[4] !== options) {
        t6 = options.map(_CalculatorSectionOptionsMap);
        $[4] = options;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] !== t6 || $[7] !== trade) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: trade,
            onChange: t5,
            className: "w-full border border-[#E4E4E4] bg-white px-3 py-2 text-[15px] outline-none focus:border-[#37C2A2]",
            children: t6
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[6] = t6;
        $[7] = trade;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "group relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EFEFEF] text-[12px] text-[#7A7A7A]",
            children: [
                "?",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "pointer-events-none absolute right-full top-1/2 z-10 mr-3 w-56 -translate-y-1/2 rounded-md bg-[#F0F0F0] px-3 py-2 text-[12px] text-[#3B3B3B] opacity-0 shadow-md transition-opacity duration-200 ease-out group-hover:opacity-100",
                    children: "Tous les corps de métiers ne sont pas repris dans cette liste."
                }, void 0, false, {
                    fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                    lineNumber: 80,
                    columnNumber: 145
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "grid gap-2 text-[16px] text-crtib-gray-dark",
            children: [
                "Corps de métier *",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        t7,
                        t8
                    ]
                }, void 0, true, {
                    fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                    lineNumber: 87,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[10] = t7;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "CalculatorSection[<input>.onChange]": (event_0)=>setMarketValue(event_0.target.value)
        })["CalculatorSection[<input>.onChange]"];
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== marketValue) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            inputMode: "decimal",
            value: marketValue,
            onChange: t10,
            className: "w-full border border-[#E4E4E4] bg-white px-3 py-2 text-[15px] outline-none focus:border-[#37C2A2]",
            placeholder: "0"
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[13] = marketValue;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "whitespace-nowrap text-[15px] text-[#6B6B6B]",
            children: "en mio. d'€"
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "group relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EFEFEF] text-[12px] text-[#7A7A7A]",
            children: [
                "?",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "pointer-events-none absolute right-full top-1/2 z-10 mr-3 w-60 -translate-y-1/2 rounded-md bg-[#F0F0F0] px-3 py-2 text-[12px] text-[#3B3B3B] opacity-0 shadow-md transition-opacity duration-200 ease-out group-hover:opacity-100",
                    children: "La valeur du marché doit être estimée aussi précisément que possible."
                }, void 0, false, {
                    fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                    lineNumber: 119,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== t11) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "grid gap-2 text-[16px] text-crtib-gray-dark",
            children: [
                "Valeur du marché *",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        t11,
                        t12,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                    lineNumber: 126,
                    columnNumber: 92
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "CalculatorSection[<input>.onChange]": (event_1)=>setDuration(event_1.target.value)
        })["CalculatorSection[<input>.onChange]"];
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== duration) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            inputMode: "numeric",
            value: duration,
            onChange: t15,
            className: "w-full border border-[#E4E4E4] bg-white px-3 py-2 text-[15px] outline-none focus:border-[#37C2A2]",
            placeholder: "0"
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[20] = duration;
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    let t17;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "whitespace-nowrap text-[15px] text-[#6B6B6B]",
            children: "mois"
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "group relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EFEFEF] text-[12px] text-[#7A7A7A]",
            children: [
                "?",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "pointer-events-none absolute right-full top-1/2 z-10 mr-3 w-60 -translate-y-1/2 rounded-md bg-[#F0F0F0] px-3 py-2 text-[12px] text-[#3B3B3B] opacity-0 shadow-md transition-opacity duration-200 ease-out group-hover:opacity-100",
                    children: "La durée du marché doit être estimée aussi précisément que possible."
                }, void 0, false, {
                    fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                    lineNumber: 158,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] !== t16) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "grid gap-2 text-[16px] text-crtib-gray-dark",
            children: [
                "Durée du marché *",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        t16,
                        t17,
                        t18
                    ]
                }, void 0, true, {
                    fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                    lineNumber: 165,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[24] = t16;
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] !== t14 || $[27] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 md:grid-cols-2",
            children: [
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t19;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "CalculatorSection[<Button>.onClick]": ()=>setShowResults(true)
        })["CalculatorSection[<Button>.onClick]"];
        $[29] = t21;
    } else {
        t21 = $[29];
    }
    const t22 = !canSubmit ? "opacity-60 cursor-not-allowed" : "";
    let t23;
    if ($[30] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                label: "VALIDER",
                onClick: t21,
                size: "md",
                variant: "dark",
                className: t22
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                lineNumber: 192,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[30] = t22;
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    let t24;
    if ($[32] !== t20 || $[33] !== t23 || $[34] !== t9) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6",
                children: [
                    t9,
                    t20,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                lineNumber: 200,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[32] = t20;
        $[33] = t23;
        $[34] = t9;
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    let t25;
    if ($[36] !== t24 || $[37] !== t4) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-5xl px-6 py-12",
            children: [
                t4,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[36] = t24;
        $[37] = t4;
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    let t26;
    if ($[39] !== results || $[40] !== showResults) {
        t26 = showResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#37C2A2] py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid w-full max-w-5xl gap-6 px-6 md:grid-cols-2",
                children: results.map(_CalculatorSectionResultsMap)
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                lineNumber: 219,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 219,
            columnNumber: 25
        }, this) : null;
        $[39] = results;
        $[40] = showResults;
        $[41] = t26;
    } else {
        t26 = $[41];
    }
    let t27;
    if ($[42] !== t25 || $[43] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full bg-[#F5F5F5]",
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[42] = t25;
        $[43] = t26;
        $[44] = t27;
    } else {
        t27 = $[44];
    }
    return t27;
}
_s(CalculatorSection, "zDgKMQmut6kWnI04Maur2OcbhhU=");
_c = CalculatorSection;
function _CalculatorSectionResultsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-[180px] flex-col items-center justify-center rounded-md bg-white/15 px-6 text-center text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg font-semibold",
                children: "="
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                lineNumber: 238,
                columnNumber: 151
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-3xl font-semibold",
                children: item.value
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                lineNumber: 238,
                columnNumber: 197
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-sm",
                children: item.label
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
                lineNumber: 238,
                columnNumber: 260
            }, this)
        ]
    }, item.label, true, {
        fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
        lineNumber: 238,
        columnNumber: 10
    }, this);
}
function _CalculatorSectionOptionsMap(option) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: option,
        children: option
    }, option, false, {
        fileName: "[project]/crtib-front/src/components/calculator/CalculatorSection.tsx",
        lineNumber: 241,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CalculatorSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/reports/ActivityReportsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityReportsSection",
    ()=>ActivityReportsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/ui/buttonStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ActivityReportsSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "d305af2094646695087598ff3374f35089721e618d32e650407121d3c6225436") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d305af2094646695087598ff3374f35089721e618d32e650407121d3c6225436";
    }
    const { title: t1, reports } = t0;
    const title = t1 === undefined ? "Rapport d'activit\xE9" : t1;
    let t2;
    if ($[1] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-[14px] font-semibold uppercase tracking-[0.2em] text-crtib-gray-dark",
            children: title
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/reports/ActivityReportsSection.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== reports) {
        t3 = reports.map(_ActivityReportsSectionReportsMap);
        $[3] = reports;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex flex-wrap gap-4",
            children: t3
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/reports/ActivityReportsSection.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t2 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full bg-[#F5F5F5]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-6xl px-6 py-12",
                children: [
                    t2,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/reports/ActivityReportsSection.tsx",
                lineNumber: 53,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/reports/ActivityReportsSection.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_c = ActivityReportsSection;
function _ActivityReportsSectionReportsMap(report) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: report.pdfUrl,
        download: true,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonBase"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonSizes"].md} ${__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"].primary}`,
        children: report.year
    }, report.id, false, {
        fileName: "[project]/crtib-front/src/components/reports/ActivityReportsSection.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ActivityReportsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/organogram/OrganogramNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrganogramNode",
    ()=>OrganogramNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
const PHOTO_SIZE = 64;
function OrganogramNode(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "ebfedf7cd51dfef0a336c39b001d84b99ed3df01d99cbdb641308ed2cfa8341b") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ebfedf7cd51dfef0a336c39b001d84b99ed3df01d99cbdb641308ed2cfa8341b";
    }
    const { name, photoUrl, role } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            width: PHOTO_SIZE,
            height: PHOTO_SIZE
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== name || $[3] !== photoUrl) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative shrink-0 overflow-hidden rounded-full bg-crtib-gray-light ring-2 ring-crtib-green-blue/30",
            style: t1,
            children: photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: photoUrl,
                alt: "",
                fill: true,
                sizes: `${PHOTO_SIZE}px`,
                className: "object-cover object-center",
                unoptimized: true
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/organogram/OrganogramNode.tsx",
                lineNumber: 36,
                columnNumber: 149
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full w-full items-center justify-center text-lg font-semibold text-crtib-green-blue/70",
                "aria-hidden": true,
                children: name.charAt(0).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/organogram/OrganogramNode.tsx",
                lineNumber: 36,
                columnNumber: 279
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/organogram/OrganogramNode.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[2] = name;
        $[3] = photoUrl;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-center text-[10px] font-semibold uppercase tracking-wide text-crtib-gray-dark leading-tight",
            children: name
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/organogram/OrganogramNode.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[5] = name;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== role) {
        t4 = role ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-0.5 text-center text-[9px] text-crtib-gray-dark/70 leading-tight",
            children: role
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/organogram/OrganogramNode.tsx",
            lineNumber: 53,
            columnNumber: 17
        }, this) : null;
        $[7] = role;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t2 || $[10] !== t3 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center rounded-lg border border-crtib-gray-dark/15 bg-crtib-white p-3 shadow-sm transition-shadow hover:shadow-md min-w-[110px] max-w-[140px]",
            "data-organogram-node": true,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/organogram/OrganogramNode.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_c = OrganogramNode;
var _c;
__turbopack_context__.k.register(_c, "OrganogramNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/organogram/OrganogramChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrganogramChart",
    ()=>OrganogramChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$organogram$2f$OrganogramNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/organogram/OrganogramNode.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const CONNECTOR_HEIGHT = 28;
const LINE_COLOR = "#37C2A2"; // crtib-green-blue
const LINE_WIDTH = 1;
function OrganogramChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "2b1d2f1f8b1396df8b726d9fafcb69efbc737b263da041f66e289cd3eeb3d3d0") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b1d2f1f8b1396df8b726d9fafcb69efbc737b263da041f66e289cd3eeb3d3d0";
    }
    const { root, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    if (!root) {
        return null;
    }
    const t2 = `flex flex-col items-center gap-0 font-sans ${className}`;
    let t3;
    if ($[1] !== root) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HierarchyLevel, {
            node: root
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[1] = root;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== t2 || $[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            role: "img",
            "aria-label": "Organograma de funcion\xE1rios",
            children: t3
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = OrganogramChart;
function HierarchyLevel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "2b1d2f1f8b1396df8b726d9fafcb69efbc737b263da041f66e289cd3eeb3d3d0") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b1d2f1f8b1396df8b726d9fafcb69efbc737b263da041f66e289cd3eeb3d3d0";
    }
    const { node } = t0;
    const hasChildren = node.children && node.children.length > 0;
    let t1;
    if ($[1] !== node.children) {
        t1 = node.children ?? [];
        $[1] = node.children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const children = t1;
    let t2;
    if ($[3] !== node.name || $[4] !== node.photoUrl || $[5] !== node.role) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$organogram$2f$OrganogramNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrganogramNode"], {
            name: node.name,
            photoUrl: node.photoUrl,
            role: node.role
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[3] = node.name;
        $[4] = node.photoUrl;
        $[5] = node.role;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== children || $[8] !== hasChildren) {
        t3 = hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex flex-col items-stretch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectorLines, {
                        childCount: children.length
                    }, void 0, false, {
                        fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
                        lineNumber: 86,
                        columnNumber: 121
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: children.map(_HierarchyLevelChildrenMap)
                    }, void 0, false, {
                        fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
                        lineNumber: 86,
                        columnNumber: 168
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
                lineNumber: 86,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
            lineNumber: 86,
            columnNumber: 25
        }, this);
        $[7] = children;
        $[8] = hasChildren;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== t2 || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c1 = HierarchyLevel;
/** Desenha o braço em SVG (vertical do pai + horizontal + verticais até cada filho) para garantir junção perfeita. */ function _HierarchyLevelChildrenMap(child) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-w-0 flex-1 flex-col items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HierarchyLevel, {
            node: child
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
            lineNumber: 107,
            columnNumber: 84
        }, this)
    }, child.id, false, {
        fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
        lineNumber: 107,
        columnNumber: 10
    }, this);
}
function ConnectorLines(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "2b1d2f1f8b1396df8b726d9fafcb69efbc737b263da041f66e289cd3eeb3d3d0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b1d2f1f8b1396df8b726d9fafcb69efbc737b263da041f66e289cd3eeb3d3d0";
    }
    const { childCount } = t0;
    const half = LINE_WIDTH / 2;
    let pathD;
    if ($[1] !== childCount) {
        const centers = childCount === 1 ? [
            50
        ] : Array.from({
            length: childCount
        }, {
            "ConnectorLines[Array.from()]": (_, i)=>50 / childCount * (2 * i + 1)
        }["ConnectorLines[Array.from()]"]);
        if (childCount === 1) {
            pathD = `M ${50} ${half} V ${56}`;
        } else {
            const [first, ...rest] = centers;
            pathD = `M ${50} ${half} V ${28} L ${first} ${28} V ${56}`;
            rest.forEach({
                "ConnectorLines[rest.forEach()]": (cx)=>{
                    pathD = pathD + ` M ${50} ${28} L ${cx} ${28} V ${56}`;
                    pathD;
                }
            }["ConnectorLines[rest.forEach()]"]);
        }
        $[1] = childCount;
        $[2] = pathD;
    } else {
        pathD = $[2];
    }
    let t1;
    if ($[3] !== pathD) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: 56,
            viewBox: "0 0 100 56",
            preserveAspectRatio: "none",
            className: "overflow-visible",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: pathD,
                fill: "none",
                stroke: LINE_COLOR,
                strokeWidth: LINE_WIDTH,
                strokeLinecap: "butt",
                strokeLinejoin: "round",
                vectorEffect: "non-scaling-stroke"
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
                lineNumber: 147,
                columnNumber: 136
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/organogram/OrganogramChart.tsx",
            lineNumber: 147,
            columnNumber: 10
        }, this);
        $[3] = pathD;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = ConnectorLines;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "OrganogramChart");
__turbopack_context__.k.register(_c1, "HierarchyLevel");
__turbopack_context__.k.register(_c2, "ConnectorLines");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/timeline/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeline",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function Timeline(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "853e52c9a30641d6708e1ba4d5b7988097af510a60a215cc1443631b8796f498") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "853e52c9a30641d6708e1ba4d5b7988097af510a60a215cc1443631b8796f498";
    }
    const { items, className: t1, highlightLast: t2 } = t0;
    const className = t1 === undefined ? "" : t1;
    const highlightLast = t2 === undefined ? true : t2;
    if (!items || items.length === 0) {
        return null;
    }
    const t3 = `w-full ${className}`;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-crtib-green-blue",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/timeline/Timeline.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[1] = t4;
    } else {
        t4 = $[1];
    }
    let t5;
    if ($[2] !== highlightLast || $[3] !== items) {
        let t6;
        if ($[5] !== highlightLast || $[6] !== items.length) {
            t6 = ({
                "Timeline[items.map()]": (item, index)=>{
                    const isLast = highlightLast && index === items.length - 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 flex-1 flex-col items-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex h-8 items-center justify-center",
                                children: [
                                    !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-px bg-crtib-green-blue",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/crtib-front/src/components/timeline/Timeline.tsx",
                                        lineNumber: 48,
                                        columnNumber: 178
                                    }, this),
                                    isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-4 rounded-full border border-crtib-green-blue bg-crtib-white",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/crtib-front/src/components/timeline/Timeline.tsx",
                                        lineNumber: 48,
                                        columnNumber: 257
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crtib-front/src/components/timeline/Timeline.tsx",
                                lineNumber: 48,
                                columnNumber: 103
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 text-sm font-semibold text-crtib-gray-dark",
                                children: item.year
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/timeline/Timeline.tsx",
                                lineNumber: 48,
                                columnNumber: 369
                            }, this),
                            item.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-0.5 line-clamp-2 text-xs text-crtib-gray-dark/80",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/timeline/Timeline.tsx",
                                lineNumber: 48,
                                columnNumber: 467
                            }, this) : null
                        ]
                    }, item.id, true, {
                        fileName: "[project]/crtib-front/src/components/timeline/Timeline.tsx",
                        lineNumber: 48,
                        columnNumber: 18
                    }, this);
                }
            })["Timeline[items.map()]"];
            $[5] = highlightLast;
            $[6] = items.length;
            $[7] = t6;
        } else {
            t6 = $[7];
        }
        t5 = items.map(t6);
        $[2] = highlightLast;
        $[3] = items;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto max-w-5xl",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center justify-between gap-4",
                    children: t5
                }, void 0, false, {
                    fileName: "[project]/crtib-front/src/components/timeline/Timeline.tsx",
                    lineNumber: 66,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/timeline/Timeline.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t3 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t6
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/timeline/Timeline.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    return t7;
}
_c = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/DownloadFormatButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadFormatButton",
    ()=>DownloadFormatButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const buttonClasses = "rounded-md border border-[#303e48] bg-[#303e48] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#4a5a66] hover:border-[#4a5a66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#303e48] focus-visible:ring-offset-2";
function DownloadFormatButton({ extension, url, ariaLabel, onClick }) {
    const label = extension.toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: buttonClasses,
        "aria-label": ariaLabel ?? `Baixar ${label}`,
        onClick: async ()=>{
            if (onClick) {
                onClick();
                return;
            }
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Download failed");
                }
                const blob = await response.blob();
                const objectUrl = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = objectUrl;
                link.download = `${label}.${extension.toLowerCase()}`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(objectUrl);
            } catch  {
                window.open(url, "_blank");
            }
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/crtib-front/src/components/DownloadFormatButton.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c = DownloadFormatButton;
var _c;
__turbopack_context__.k.register(_c, "DownloadFormatButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClausesGrid",
    ()=>ClausesGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$DownloadFormatButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/DownloadFormatButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/ui/Button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function ClausesGrid(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "ef2f2a105f0da3340ceb467529f9371431fc4eb7f2c5d0512112276ac8aa9f4b") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ef2f2a105f0da3340ceb467529f9371431fc4eb7f2c5d0512112276ac8aa9f4b";
    }
    const { title, rows, redirectLabel, redirectHref } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mb-4 font-clauses text-2xl font-bold uppercase tracking-tight text-crtib-gray-dark",
            children: title
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
            lineNumber: 23,
            columnNumber: 19
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "bg-crtib-gray-light",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-4 py-3 text-center text-sm font-bold uppercase tracking-tight text-crtib-gray-dark",
                        scope: "col",
                        children: "N°"
                    }, void 0, false, {
                        fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                        lineNumber: 31,
                        columnNumber: 53
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-4 py-3 text-center text-sm font-bold uppercase tracking-tight text-crtib-gray-dark",
                        scope: "col",
                        children: "Titre"
                    }, void 0, false, {
                        fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                        lineNumber: 31,
                        columnNumber: 174
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-4 py-3 text-center text-sm font-bold uppercase tracking-tight text-crtib-gray-dark",
                        scope: "col",
                        children: "Date"
                    }, void 0, false, {
                        fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                        lineNumber: 31,
                        columnNumber: 298
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                lineNumber: 31,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== rows) {
        t3 = rows.map(_ClausesGridRowsMap);
        $[4] = rows;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full border-collapse",
                role: "grid",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "bg-crtib-gray-light",
                        children: t3
                    }, void 0, false, {
                        fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                        lineNumber: 46,
                        columnNumber: 112
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                lineNumber: 46,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== redirectHref || $[9] !== redirectLabel) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            href: redirectHref,
            variant: "gray",
            className: "mt-4",
            children: redirectLabel
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[8] = redirectHref;
        $[9] = redirectLabel;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t1 || $[12] !== t4 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full rounded-lg bg-crtib-gray-light p-6",
            children: [
                t1,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[11] = t1;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_c = ClausesGrid;
function _ClausesGridRowsMap(row, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "group relative border-b border-crtib-gray-dark/15 last:border-b-0 transition-colors duration-150 hover:bg-crtib-gray-dark/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3 text-center text-sm text-crtib-gray-dark",
                children: row.number
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                lineNumber: 74,
                columnNumber: 182
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3 text-center text-sm text-crtib-gray-dark",
                children: row.title
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                lineNumber: 74,
                columnNumber: 266
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3 text-center text-sm text-crtib-gray-dark",
                children: row.date
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                lineNumber: 74,
                columnNumber: 349
            }, this),
            row.pdfUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "pointer-events-none absolute inset-0 flex items-center justify-center gap-4 bg-crtib-gray-light/98 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium uppercase tracking-wide text-crtib-gray-dark/80",
                        children: "Télécharger la clause"
                    }, void 0, false, {
                        fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                        lineNumber: 74,
                        columnNumber: 665
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$DownloadFormatButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DownloadFormatButton"], {
                            extension: "pdf",
                            url: row.pdfUrl,
                            ariaLabel: "T\xE9l\xE9charger la clause en PDF"
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                            lineNumber: 74,
                            columnNumber: 817
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                        lineNumber: 74,
                        columnNumber: 779
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
                lineNumber: 74,
                columnNumber: 446
            }, this)
        ]
    }, `${row.number}-${index}`, true, {
        fileName: "[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx",
        lineNumber: 74,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ClausesGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicGrid",
    ()=>DynamicGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/date-fns/isValid.js [app-client] (ecmascript)");
"use client";
;
;
;
function formatCellValue(value, column) {
    if (value == null || value === "") return "";
    const precision = column.config?.precision ?? 2;
    switch(column.type){
        case "text":
            return String(value);
        case "number":
            {
                const num = Number(value);
                if (Number.isNaN(num)) return String(value);
                const formatted = num.toFixed(precision);
                if (column.config?.currency) {
                    return `${formatted} ${column.config.currency}`;
                }
                return formatted.replace(".", ",");
            }
        case "percentage":
            {
                const num = Number(value);
                if (Number.isNaN(num)) return String(value);
                return `${num.toFixed(precision).replace(".", ",")}%`;
            }
        case "date":
            {
                if (typeof value === "string") {
                    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(value);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValid"])(parsed)) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(parsed, "dd.MM.yyyy");
                    }
                    return value;
                }
                if (value instanceof Date && (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValid"])(value)) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(value, "dd.MM.yyyy");
                }
                return String(value);
            }
        default:
            return String(value);
    }
}
function getAlignmentClass(column) {
    switch(column.type){
        case "number":
        case "percentage":
            return "text-right";
        case "date":
            return "text-center";
        case "text":
        default:
            return "text-left";
    }
}
function DynamicGrid(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "c69e8a92ef442bac9771631d3e251eff080548a182012e408b8d6b72d72ceb0e") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c69e8a92ef442bac9771631d3e251eff080548a182012e408b8d6b72d72ceb0e";
    }
    const { columns, rows, title } = t0;
    let t1;
    if ($[1] !== columns) {
        t1 = columns.map(_DynamicGridColumnsMap);
        $[1] = columns;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "bg-[#37c2a2]",
                children: t1
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx",
                lineNumber: 82,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== columns || $[6] !== rows) {
        let t4;
        if ($[8] !== columns) {
            t4 = ({
                "DynamicGrid[rows.map()]": (row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: rowIndex % 2 === 0 ? "bg-crtib-white" : "bg-crtib-gray-light",
                        children: columns.map({
                            "DynamicGrid[rows.map() > columns.map()]": (col_0)=>{
                                const isInteretsMoratoires_0 = col_0.id === "interetsMoratoires" || col_0.label.toLowerCase().includes("int\xE9r\xEAts moratoires");
                                const widthClass_0 = isInteretsMoratoires_0 ? "w-24" : "";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: `border border-crtib-gray-dark/15 px-5 py-4 text-base font-bold text-[#828282] text-left ${widthClass_0}`,
                                    children: formatCellValue(row.values[col_0.id], col_0)
                                }, col_0.id, false, {
                                    fileName: "[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx",
                                    lineNumber: 97,
                                    columnNumber: 22
                                }, this);
                            }
                        }["DynamicGrid[rows.map() > columns.map()]"])
                    }, row.id, false, {
                        fileName: "[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx",
                        lineNumber: 93,
                        columnNumber: 55
                    }, this)
            })["DynamicGrid[rows.map()]"];
            $[8] = columns;
            $[9] = t4;
        } else {
            t4 = $[9];
        }
        t3 = rows.map(t4);
        $[5] = columns;
        $[6] = rows;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[10] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: t3
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t2 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-grid overflow-x-auto rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full border-collapse border border-crtib-gray-dark/15",
                role: "grid",
                children: [
                    t2,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx",
                lineNumber: 123,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[12] = t2;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const tableContent = t5;
    if (title) {
        let t6;
        if ($[15] !== title) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-xl font-bold text-crtib-gray-dark",
                children: title
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx",
                lineNumber: 134,
                columnNumber: 12
            }, this);
            $[15] = title;
            $[16] = t6;
        } else {
            t6 = $[16];
        }
        let t7;
        if ($[17] !== t6 || $[18] !== tableContent) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-grid w-full rounded-lg bg-crtib-gray-light p-6",
                children: [
                    t6,
                    tableContent
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx",
                lineNumber: 142,
                columnNumber: 12
            }, this);
            $[17] = t6;
            $[18] = tableContent;
            $[19] = t7;
        } else {
            t7 = $[19];
        }
        return t7;
    }
    let t6;
    if ($[20] !== tableContent) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-grid w-full",
            children: tableContent
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[20] = tableContent;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    return t6;
}
_c = DynamicGrid;
function _DynamicGridColumnsMap(col) {
    const isInteretsMoratoires = col.id === "interetsMoratoires" || col.label.toLowerCase().includes("int\xE9r\xEAts moratoires");
    const widthClass = isInteretsMoratoires ? "w-24" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        className: `border border-[#37c2a2] px-5 py-4 text-base font-bold text-crtib-white text-center ${widthClass}`,
        scope: "col",
        children: col.label
    }, col.id, false, {
        fileName: "[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx",
        lineNumber: 164,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "DynamicGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/DataGridDownloads.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataGridDownloads",
    ()=>DataGridDownloads
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$DownloadFormatButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/DownloadFormatButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function formatDate(value) {
    if (value instanceof Date) return value.toLocaleDateString("pt-BR");
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString("pt-BR");
}
function DataGridDownloads(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(93);
    if ($[0] !== "a2a1ae44d1ec7d5c2257f686803c2917bbf1b7ab89ef39d4ff1923bed97a57be") {
        for(let $i = 0; $i < 93; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a2a1ae44d1ec7d5c2257f686803c2917bbf1b7ab89ef39d4ff1923bed97a57be";
    }
    const { documents, pageSize: t1, onDownload } = t0;
    const pageSize = t1 === undefined ? 10 : t1;
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("asc");
    let result;
    if ($[1] !== documents || $[2] !== searchTerm || $[3] !== sortDirection || $[4] !== sortField) {
        const term = searchTerm.trim().toLowerCase();
        result = [
            ...documents
        ];
        if (term) {
            result = result.filter({
                "DataGridDownloads[result.filter()]": (doc)=>{
                    const numero = String(doc.numero ?? "").toLowerCase();
                    const titulo = String(doc.titulo ?? "").toLowerCase();
                    return numero.includes(term) || titulo.includes(term);
                }
            }["DataGridDownloads[result.filter()]"]);
        }
        if (sortField) {
            let t2;
            if ($[6] !== sortDirection || $[7] !== sortField) {
                t2 = ({
                    "DataGridDownloads[result.sort()]": (a, b)=>{
                        if (sortField === "data") {
                            const aTime = new Date(a.data).getTime() || 0;
                            const bTime = new Date(b.data).getTime() || 0;
                            return sortDirection === "asc" ? aTime - bTime : bTime - aTime;
                        }
                        const aStr = sortField === "numero" ? String(a.numero ?? "") : String(a.titulo ?? "");
                        const bStr = sortField === "numero" ? String(b.numero ?? "") : String(b.titulo ?? "");
                        const compare = aStr.localeCompare(bStr, "pt-BR", {
                            numeric: true
                        });
                        return sortDirection === "asc" ? compare : -compare;
                    }
                })["DataGridDownloads[result.sort()]"];
                $[6] = sortDirection;
                $[7] = sortField;
                $[8] = t2;
            } else {
                t2 = $[8];
            }
            result.sort(t2);
        }
        $[1] = documents;
        $[2] = searchTerm;
        $[3] = sortDirection;
        $[4] = sortField;
        $[5] = result;
    } else {
        result = $[5];
    }
    const filteredAndSorted = result;
    const totalPages = Math.max(1, Math.ceil(filteredAndSorted.length / pageSize));
    const safePage = Math.min(currentPage, totalPages);
    const startIndex = (safePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    let handleChangePage;
    let showingFrom;
    let showingTo;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[9] !== endIndex || $[10] !== filteredAndSorted || $[11] !== onDownload || $[12] !== searchTerm || $[13] !== sortDirection || $[14] !== sortField || $[15] !== startIndex || $[16] !== totalPages) {
        const pageItems = filteredAndSorted.slice(startIndex, endIndex);
        showingFrom = filteredAndSorted.length === 0 ? 0 : startIndex + 1;
        showingTo = Math.min(endIndex, filteredAndSorted.length);
        let t8;
        if ($[26] !== totalPages) {
            t8 = ({
                "DataGridDownloads[handleChangePage]": (page)=>{
                    if (page < 1 || page > totalPages) {
                        return;
                    }
                    setCurrentPage(page);
                }
            })["DataGridDownloads[handleChangePage]"];
            $[26] = totalPages;
            $[27] = t8;
        } else {
            t8 = $[27];
        }
        handleChangePage = t8;
        let t9;
        if ($[28] !== sortField) {
            t9 = ({
                "DataGridDownloads[handleSort]": (field)=>{
                    if (sortField === field) {
                        setSortDirection(_DataGridDownloadsHandleSortSetSortDirection);
                    } else {
                        setSortField(field);
                        setSortDirection("asc");
                    }
                    setCurrentPage(1);
                }
            })["DataGridDownloads[handleSort]"];
            $[28] = sortField;
            $[29] = t9;
        } else {
            t9 = $[29];
        }
        const handleSort = t9;
        let t10;
        if ($[30] !== sortDirection || $[31] !== sortField) {
            t10 = ({
                "DataGridDownloads[renderSortIcon]": (field_0)=>{
                    const isActive = sortField === field_0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex flex-col leading-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[10px] ${isActive && sortDirection === "asc" ? "opacity-100" : "opacity-60"}`,
                                children: "▲"
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                                lineNumber: 146,
                                columnNumber: 63
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[10px] ${isActive && sortDirection === "desc" ? "opacity-100" : "opacity-60"}`,
                                children: "▼"
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                                lineNumber: 146,
                                columnNumber: 173
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                        lineNumber: 146,
                        columnNumber: 18
                    }, this);
                }
            })["DataGridDownloads[renderSortIcon]"];
            $[30] = sortDirection;
            $[31] = sortField;
            $[32] = t10;
        } else {
            t10 = $[32];
        }
        const renderSortIcon = t10;
        const handleDownload = {
            "DataGridDownloads[handleDownload]": (doc_0, extension, url)=>{
                if (onDownload) {
                    return onDownload(doc_0, extension, url);
                }
                if (url) {
                    window.open(url, "_blank");
                }
            }
        }["DataGridDownloads[handleDownload]"];
        t6 = "w-full rounded-md border border-gray-200 bg-crtib-white shadow-sm";
        let t11;
        if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-semibold text-crtib-gray-dark sm:whitespace-nowrap",
                children: "Rechercher un document"
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 169,
                columnNumber: 13
            }, this);
            $[33] = t11;
        } else {
            t11 = $[33];
        }
        let t12;
        if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Rechercher un document"
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 176,
                columnNumber: 13
            }, this);
            $[34] = t12;
        } else {
            t12 = $[34];
        }
        let t13;
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = ({
                "DataGridDownloads[<input>.onChange]": (event)=>{
                    setSearchTerm(event.target.value);
                    setCurrentPage(1);
                }
            })["DataGridDownloads[<input>.onChange]"];
            $[35] = t13;
        } else {
            t13 = $[35];
        }
        if ($[36] !== searchTerm) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-full max-w-[140rem] flex-col items-center gap-4 border-b border-gray-200 p-4 sm:flex-row sm:justify-center",
                children: [
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full sm:max-w-xs sm:ml-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "relative block",
                            children: [
                                t12,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-crtib-gray-dark placeholder:text-gray-400 focus:border-crtib-green focus:outline-none focus:ring-1 focus:ring-crtib-green",
                                    placeholder: "N\xB0 ou titre du document...",
                                    value: searchTerm,
                                    onChange: t13
                                }, void 0, false, {
                                    fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                                    lineNumber: 194,
                                    columnNumber: 239
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                            lineNumber: 194,
                            columnNumber: 200
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                        lineNumber: 194,
                        columnNumber: 156
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 194,
                columnNumber: 12
            }, this);
            $[36] = searchTerm;
            $[37] = t7;
        } else {
            t7 = $[37];
        }
        t5 = "overflow-x-auto";
        t3 = "min-w-full border-collapse";
        let t14;
        if ($[38] !== handleSort) {
            t14 = ({
                "DataGridDownloads[<button>.onClick]": ()=>handleSort("numero")
            })["DataGridDownloads[<button>.onClick]"];
            $[38] = handleSort;
            $[39] = t14;
        } else {
            t14 = $[39];
        }
        let t15;
        if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "N°"
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 214,
                columnNumber: 13
            }, this);
            $[40] = t15;
        } else {
            t15 = $[40];
        }
        let t16;
        if ($[41] !== renderSortIcon) {
            t16 = renderSortIcon("numero");
            $[41] = renderSortIcon;
            $[42] = t16;
        } else {
            t16 = $[42];
        }
        let t17;
        if ($[43] !== t14 || $[44] !== t16) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "bg-[#37c2a2] px-4 py-2 text-left text-sm font-semibold text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: t14,
                    className: "flex w-full items-center justify-between",
                    children: [
                        t15,
                        t16
                    ]
                }, void 0, true, {
                    fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                    lineNumber: 229,
                    columnNumber: 95
                }, this)
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 229,
                columnNumber: 13
            }, this);
            $[43] = t14;
            $[44] = t16;
            $[45] = t17;
        } else {
            t17 = $[45];
        }
        let t18;
        if ($[46] !== handleSort) {
            t18 = ({
                "DataGridDownloads[<button>.onClick]": ()=>handleSort("titulo")
            })["DataGridDownloads[<button>.onClick]"];
            $[46] = handleSort;
            $[47] = t18;
        } else {
            t18 = $[47];
        }
        let t19;
        if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Titre"
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 248,
                columnNumber: 13
            }, this);
            $[48] = t19;
        } else {
            t19 = $[48];
        }
        let t20;
        if ($[49] !== renderSortIcon) {
            t20 = renderSortIcon("titulo");
            $[49] = renderSortIcon;
            $[50] = t20;
        } else {
            t20 = $[50];
        }
        let t21;
        if ($[51] !== t18 || $[52] !== t20) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "bg-[#37c2a2] px-4 py-2 text-left text-sm font-semibold text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: t18,
                    className: "flex w-full items-center justify-between",
                    children: [
                        t19,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                    lineNumber: 263,
                    columnNumber: 95
                }, this)
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 263,
                columnNumber: 13
            }, this);
            $[51] = t18;
            $[52] = t20;
            $[53] = t21;
        } else {
            t21 = $[53];
        }
        let t22;
        if ($[54] !== handleSort) {
            t22 = ({
                "DataGridDownloads[<button>.onClick]": ()=>handleSort("data")
            })["DataGridDownloads[<button>.onClick]"];
            $[54] = handleSort;
            $[55] = t22;
        } else {
            t22 = $[55];
        }
        let t23;
        if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Date"
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 282,
                columnNumber: 13
            }, this);
            $[56] = t23;
        } else {
            t23 = $[56];
        }
        let t24;
        if ($[57] !== renderSortIcon) {
            t24 = renderSortIcon("data");
            $[57] = renderSortIcon;
            $[58] = t24;
        } else {
            t24 = $[58];
        }
        let t25;
        if ($[59] !== t22 || $[60] !== t24) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "bg-[#37c2a2] px-4 py-2 text-left text-sm font-semibold text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: t22,
                    className: "flex w-full items-center justify-between",
                    children: [
                        t23,
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                    lineNumber: 297,
                    columnNumber: 95
                }, this)
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 297,
                columnNumber: 13
            }, this);
            $[59] = t22;
            $[60] = t24;
            $[61] = t25;
        } else {
            t25 = $[61];
        }
        let t26;
        let t27;
        if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "bg-[#37c2a2] px-4 py-2 text-left text-sm font-semibold text-white",
                children: "Version"
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 307,
                columnNumber: 13
            }, this);
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "bg-[#37c2a2] px-4 py-2 text-left text-sm font-semibold text-white",
                children: "Télécharger"
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 308,
                columnNumber: 13
            }, this);
            $[62] = t26;
            $[63] = t27;
        } else {
            t26 = $[62];
            t27 = $[63];
        }
        if ($[64] !== t17 || $[65] !== t21 || $[66] !== t25) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    children: [
                        t17,
                        t21,
                        t25,
                        t26,
                        t27
                    ]
                }, void 0, true, {
                    fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                    lineNumber: 316,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 316,
                columnNumber: 12
            }, this);
            $[64] = t17;
            $[65] = t21;
            $[66] = t25;
            $[67] = t4;
        } else {
            t4 = $[67];
        }
        t2 = pageItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 5,
                className: "px-4 py-6 text-center text-sm text-gray-600",
                children: "Nenhum documento encontrado."
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                lineNumber: 324,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
            lineNumber: 324,
            columnNumber: 35
        }, this) : pageItems.map({
            "DataGridDownloads[pageItems.map()]": (doc_1)=>{
                const key = doc_1.id ?? `${doc_1.numero}-${doc_1.versao}`;
                const linksEntries = Object.entries(doc_1.links ?? {}).filter(_DataGridDownloadsPageItemsMapAnonymous);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    className: "odd:bg-white even:bg-crtib-gray-light/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-3 text-sm text-black",
                            children: doc_1.numero
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                            lineNumber: 328,
                            columnNumber: 83
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-3 text-sm text-black",
                            children: doc_1.titulo
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                            lineNumber: 328,
                            columnNumber: 147
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-3 text-sm text-black",
                            children: formatDate(doc_1.data)
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                            lineNumber: 328,
                            columnNumber: 211
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-3 text-sm text-black",
                            children: doc_1.versao
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                            lineNumber: 328,
                            columnNumber: 285
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-3 text-sm text-black",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: linksEntries.map({
                                    "DataGridDownloads[pageItems.map() > linksEntries.map()]": (t28)=>{
                                        const [ext, url_1] = t28;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$DownloadFormatButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DownloadFormatButton"], {
                                            extension: ext,
                                            url: url_1 ?? "",
                                            ariaLabel: `Baixar ${ext.toUpperCase()} de ${doc_1.titulo}`,
                                            onClick: url_1 ? ()=>handleDownload(doc_1, ext, url_1) : undefined
                                        }, ext, false, {
                                            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                                            lineNumber: 331,
                                            columnNumber: 26
                                        }, this);
                                    }
                                }["DataGridDownloads[pageItems.map() > linksEntries.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                                lineNumber: 328,
                                columnNumber: 394
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                            lineNumber: 328,
                            columnNumber: 349
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                    lineNumber: 328,
                    columnNumber: 16
                }, this);
            }
        }["DataGridDownloads[pageItems.map()]"]);
        $[9] = endIndex;
        $[10] = filteredAndSorted;
        $[11] = onDownload;
        $[12] = searchTerm;
        $[13] = sortDirection;
        $[14] = sortField;
        $[15] = startIndex;
        $[16] = totalPages;
        $[17] = handleChangePage;
        $[18] = showingFrom;
        $[19] = showingTo;
        $[20] = t2;
        $[21] = t3;
        $[22] = t4;
        $[23] = t5;
        $[24] = t6;
        $[25] = t7;
    } else {
        handleChangePage = $[17];
        showingFrom = $[18];
        showingTo = $[19];
        t2 = $[20];
        t3 = $[21];
        t4 = $[22];
        t5 = $[23];
        t6 = $[24];
        t7 = $[25];
    }
    let t8;
    if ($[68] !== t2) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: t2
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
            lineNumber: 366,
            columnNumber: 10
        }, this);
        $[68] = t2;
        $[69] = t8;
    } else {
        t8 = $[69];
    }
    let t9;
    if ($[70] !== t3 || $[71] !== t4 || $[72] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: t3,
            children: [
                t4,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
            lineNumber: 374,
            columnNumber: 10
        }, this);
        $[70] = t3;
        $[71] = t4;
        $[72] = t8;
        $[73] = t9;
    } else {
        t9 = $[73];
    }
    let t10;
    if ($[74] !== t5 || $[75] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t9
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[74] = t5;
        $[75] = t9;
        $[76] = t10;
    } else {
        t10 = $[76];
    }
    let t11;
    if ($[77] !== filteredAndSorted.length || $[78] !== showingFrom || $[79] !== showingTo) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-crtib-gray-dark",
            children: [
                showingFrom,
                "-",
                showingTo,
                " sur",
                " ",
                filteredAndSorted.length,
                " documents"
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[77] = filteredAndSorted.length;
        $[78] = showingFrom;
        $[79] = showingTo;
        $[80] = t11;
    } else {
        t11 = $[80];
    }
    let t12;
    if ($[81] !== handleChangePage || $[82] !== safePage || $[83] !== totalPages) {
        t12 = totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-end gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-crtib-gray-dark",
                    children: [
                        "Página ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: safePage
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                            lineNumber: 403,
                            columnNumber: 136
                        }, this),
                        " /",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: totalPages
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                            lineNumber: 403,
                            columnNumber: 192
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                    lineNumber: 403,
                    columnNumber: 82
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "DataGridDownloads[<button>.onClick]": ()=>handleChangePage(safePage - 1)
                            }["DataGridDownloads[<button>.onClick]"],
                            disabled: safePage <= 1,
                            className: "rounded-md border border-[#303e48] bg-[#303e48] px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#303e48] disabled:cursor-not-allowed disabled:opacity-40",
                            children: "Anterior"
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                            lineNumber: 403,
                            columnNumber: 291
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "DataGridDownloads[<button>.onClick]": ()=>handleChangePage(safePage + 1)
                            }["DataGridDownloads[<button>.onClick]"],
                            disabled: safePage >= totalPages,
                            className: "rounded-md border border-[#303e48] bg-[#303e48] px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#303e48] disabled:cursor-not-allowed disabled:opacity-40",
                            children: "Próxima"
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                            lineNumber: 405,
                            columnNumber: 298
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
                    lineNumber: 403,
                    columnNumber: 250
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
            lineNumber: 403,
            columnNumber: 29
        }, this);
        $[81] = handleChangePage;
        $[82] = safePage;
        $[83] = totalPages;
        $[84] = t12;
    } else {
        t12 = $[84];
    }
    let t13;
    if ($[85] !== t11 || $[86] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 border-t border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[85] = t11;
        $[86] = t12;
        $[87] = t13;
    } else {
        t13 = $[87];
    }
    let t14;
    if ($[88] !== t10 || $[89] !== t13 || $[90] !== t6 || $[91] !== t7) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t6,
            children: [
                t7,
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/DataGridDownloads.tsx",
            lineNumber: 426,
            columnNumber: 11
        }, this);
        $[88] = t10;
        $[89] = t13;
        $[90] = t6;
        $[91] = t7;
        $[92] = t14;
    } else {
        t14 = $[92];
    }
    return t14;
}
_s(DataGridDownloads, "1ZouFaHSM/XWXdKjNx37iSLyuAs=");
_c = DataGridDownloads;
function _DataGridDownloadsPageItemsMapAnonymous(t0) {
    const [, url_0] = t0;
    return Boolean(url_0);
}
function _DataGridDownloadsHandleSortSetSortDirection(prev) {
    return prev === "asc" ? "desc" : "asc";
}
var _c;
__turbopack_context__.k.register(_c, "DataGridDownloads");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/ui/DownloadLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadLink",
    ()=>DownloadLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const baseClasses = "font-download font-bold text-[#37c2a2] hover:underline underline-offset-2 transition-colors";
function getLabel(props) {
    if (props.variant === "custom") {
        return props.title;
    }
    const { name, version, fileSize, extension } = props;
    const versionPart = version ? `, version ${version}` : "";
    return `${name}${versionPart} (${fileSize}, .${extension})`;
}
function DownloadLink(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "21fdac5ff44675bd8c75ee14ecbcb400593ceb901dd1b39e48d534322f8e3f0a") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21fdac5ff44675bd8c75ee14ecbcb400593ceb901dd1b39e48d534322f8e3f0a";
    }
    let className;
    let download;
    let href;
    let rel;
    let t1;
    let target;
    if ($[1] !== t0) {
        const { href: t2, download: t3, target: t4, rel: t5, className: t6, ...variantProps } = t0;
        href = t2;
        download = t3;
        target = t4;
        rel = t5;
        className = t6 === undefined ? "" : t6;
        t1 = getLabel({
            href,
            ...variantProps
        });
        $[1] = t0;
        $[2] = className;
        $[3] = download;
        $[4] = href;
        $[5] = rel;
        $[6] = t1;
        $[7] = target;
    } else {
        className = $[2];
        download = $[3];
        href = $[4];
        rel = $[5];
        t1 = $[6];
        target = $[7];
    }
    const label = t1;
    const t2 = `${baseClasses} ${className}`;
    let t3;
    if ($[8] !== t2) {
        t3 = t2.trim();
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const classes = t3;
    const linkRel = target === "_blank" ? "noopener noreferrer" : rel;
    let t4;
    if ($[10] !== classes || $[11] !== download || $[12] !== href || $[13] !== label || $[14] !== linkRel || $[15] !== target) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            download: download,
            target: target,
            rel: linkRel,
            className: classes,
            children: label
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/ui/DownloadLink.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[10] = classes;
        $[11] = download;
        $[12] = href;
        $[13] = label;
        $[14] = linkRel;
        $[15] = target;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    return t4;
}
_c = DownloadLink;
var _c;
__turbopack_context__.k.register(_c, "DownloadLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoHeroCarousel",
    ()=>PhotoHeroCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PhotoHeroCarousel(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "79e421f8ff31a2be76b0c5601d2695656c6556415495240f9446523af6195247") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "79e421f8ff31a2be76b0c5601d2695656c6556415495240f9446523af6195247";
    }
    const { slides, className: t1, autoPlayMs: t2 } = t0;
    const className = t1 === undefined ? "" : t1;
    const autoPlayMs = t2 === undefined ? 5000 : t2;
    let t3;
    if ($[1] !== slides) {
        t3 = slides.filter(_PhotoHeroCarouselSlidesFilter);
        $[1] = slides;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const safeSlides = t3;
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t4;
    let t5;
    if ($[3] !== autoPlayMs || $[4] !== safeSlides.length) {
        t4 = ({
            "PhotoHeroCarousel[useEffect()]": ()=>{
                if (safeSlides.length <= 1) {
                    return;
                }
                const timer = setInterval({
                    "PhotoHeroCarousel[useEffect() > setInterval()]": ()=>{
                        setActiveIndex({
                            "PhotoHeroCarousel[useEffect() > setInterval() > setActiveIndex()]": (prev)=>(prev + 1) % safeSlides.length
                        }["PhotoHeroCarousel[useEffect() > setInterval() > setActiveIndex()]"]);
                    }
                }["PhotoHeroCarousel[useEffect() > setInterval()]"], autoPlayMs);
                return ()=>clearInterval(timer);
            }
        })["PhotoHeroCarousel[useEffect()]"];
        t5 = [
            autoPlayMs,
            safeSlides.length
        ];
        $[3] = autoPlayMs;
        $[4] = safeSlides.length;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    if (safeSlides.length === 0) {
        return null;
    }
    const activeSlide = safeSlides[activeIndex];
    let t6;
    if ($[7] !== className) {
        t6 = [
            "relative h-[300px] w-full overflow-hidden",
            className
        ];
        $[7] = className;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = t6.join(" ");
    let t8;
    if ($[9] !== activeIndex || $[10] !== safeSlides) {
        let t9;
        if ($[12] !== activeIndex) {
            t9 = ({
                "PhotoHeroCarousel[safeSlides.map()]": (slide_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: [
                            "absolute inset-0 transition-opacity duration-700 ease-in-out",
                            index === activeIndex ? "opacity-100" : "opacity-0"
                        ].join(" "),
                        "aria-hidden": index !== activeIndex,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: slide_0.imageUrl,
                                alt: slide_0.alt,
                                className: "absolute inset-0 h-full w-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx",
                                lineNumber: 88,
                                columnNumber: 266
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[#5f736d]/72"
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx",
                                lineNumber: 88,
                                columnNumber: 370
                            }, this)
                        ]
                    }, slide_0.id, true, {
                        fileName: "[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx",
                        lineNumber: 88,
                        columnNumber: 68
                    }, this)
            })["PhotoHeroCarousel[safeSlides.map()]"];
            $[12] = activeIndex;
            $[13] = t9;
        } else {
            t9 = $[13];
        }
        t8 = safeSlides.map(t9);
        $[9] = activeIndex;
        $[10] = safeSlides;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[14] !== activeSlide.eyebrow) {
        t9 = activeSlide.eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-[4px] text-[26px] font-[300] uppercase leading-[1] tracking-[-0.03em] text-white",
            children: activeSlide.eyebrow
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx",
            lineNumber: 104,
            columnNumber: 32
        }, this) : null;
        $[14] = activeSlide.eyebrow;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== activeSlide.title) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "max-w-[980px] text-[46px] font-[300] uppercase leading-[0.98] tracking-[-0.04em] text-white",
            children: activeSlide.title
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[16] = activeSlide.title;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 h-full w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[17.2%] top-[39.5%] -translate-y-1/2 text-left",
                children: [
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx",
                lineNumber: 120,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t9;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== activeIndex || $[22] !== safeSlides) {
        t12 = safeSlides.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-[22px] left-1/2 z-20 flex -translate-x-1/2 items-center gap-[10px]",
            children: safeSlides.map({
                "PhotoHeroCarousel[safeSlides.map()]": (slide_1, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "PhotoHeroCarousel[safeSlides.map() > <button>.onClick]": ()=>setActiveIndex(index_0)
                        }["PhotoHeroCarousel[safeSlides.map() > <button>.onClick]"],
                        className: [
                            "h-[14px] w-[14px] rounded-full transition-all duration-200",
                            index_0 === activeIndex ? "bg-[#37C2A2]" : "bg-white"
                        ].join(" "),
                        "aria-label": `Ir para slide ${index_0 + 1}`,
                        "aria-pressed": index_0 === activeIndex
                    }, slide_1.id, false, {
                        fileName: "[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx",
                        lineNumber: 130,
                        columnNumber: 70
                    }, this)
            }["PhotoHeroCarousel[safeSlides.map()]"])
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx",
            lineNumber: 129,
            columnNumber: 35
        }, this) : null;
        $[21] = activeIndex;
        $[22] = safeSlides;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t11 || $[25] !== t12 || $[26] !== t7 || $[27] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t7,
            "aria-label": "Galeria de fotos em destaque",
            children: [
                t8,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t12;
        $[26] = t7;
        $[27] = t8;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    return t13;
}
_s(PhotoHeroCarousel, "16En7kR7TbAJMjBrm+xutVNIc5Q=");
_c = PhotoHeroCarousel;
function _PhotoHeroCarouselSlidesFilter(slide) {
    return slide.imageUrl;
}
var _c;
__turbopack_context__.k.register(_c, "PhotoHeroCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/Accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Accordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Accordion(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "4617dd680c1cbaecfdef914edbebab3be2d2bc4e5e71eea3a28cafece7033e32") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4617dd680c1cbaecfdef914edbebab3be2d2bc4e5e71eea3a28cafece7033e32";
    }
    const { items } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Set();
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [openItems, setOpenItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Accordion[toggleItem]": (id)=>{
                setOpenItems({
                    "Accordion[toggleItem > setOpenItems()]": (prev)=>{
                        const newSet = new Set(prev);
                        if (newSet.has(id)) {
                            newSet.delete(id);
                        } else {
                            newSet.add(id);
                        }
                        return newSet;
                    }
                }["Accordion[toggleItem > setOpenItems()]"]);
            }
        })["Accordion[toggleItem]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const toggleItem = t2;
    let t3;
    if ($[3] !== items || $[4] !== openItems) {
        let t4;
        if ($[6] !== openItems) {
            t4 = ({
                "Accordion[items.map()]": (item, index)=>{
                    const isOpen = openItems.has(item.id);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `accordion-item ${index > 0 ? "border-t border-gray-200" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Accordion[items.map() > <button>.onClick]": ()=>toggleItem(item.id)
                                }["Accordion[items.map() > <button>.onClick]"],
                                className: "accordion-header w-full flex items-center justify-between text-left py-4",
                                "aria-expanded": isOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/crtib-front/src/components/Accordion.tsx",
                                        lineNumber: 63,
                                        columnNumber: 169
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 text-white",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/crtib-front/src/components/Accordion.tsx",
                                                lineNumber: 63,
                                                columnNumber: 447
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/crtib-front/src/components/Accordion.tsx",
                                            lineNumber: 63,
                                            columnNumber: 357
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/crtib-front/src/components/Accordion.tsx",
                                        lineNumber: 63,
                                        columnNumber: 194
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crtib-front/src/components/Accordion.tsx",
                                lineNumber: 61,
                                columnNumber: 113
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content overflow-hidden transition-all duration-200 ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose prose-sm max-w-none",
                                    dangerouslySetInnerHTML: {
                                        __html: item.content
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/crtib-front/src/components/Accordion.tsx",
                                    lineNumber: 63,
                                    columnNumber: 700
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/Accordion.tsx",
                                lineNumber: 63,
                                columnNumber: 556
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/crtib-front/src/components/Accordion.tsx",
                        lineNumber: 61,
                        columnNumber: 18
                    }, this);
                }
            })["Accordion[items.map()]"];
            $[6] = openItems;
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        t3 = items.map(t4);
        $[3] = items;
        $[4] = openItems;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion",
            children: t3
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/Accordion.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_s(Accordion, "sXwet7zyVYbTuyQeYs5uxnd3J8M=");
_c = Accordion;
var _c;
__turbopack_context__.k.register(_c, "Accordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/lib/payload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getActivityReports",
    ()=>getActivityReports,
    "getCollection",
    ()=>getCollection,
    "getDocumentById",
    ()=>getDocumentById,
    "getDocumentBySlug",
    ()=>getDocumentBySlug,
    "getGlobal",
    ()=>getGlobal,
    "getMediaUrl",
    ()=>getMediaUrl,
    "getNewsArticles",
    ()=>getNewsArticles,
    "getNewsBySlug",
    ()=>getNewsBySlug,
    "getPageBySlug",
    ()=>getPageBySlug,
    "getPages",
    ()=>getPages,
    "getPartners",
    ()=>getPartners,
    "getTimelineItems",
    ()=>getTimelineItems,
    "getVideos",
    ()=>getVideos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/qs/lib/index.js [app-client] (ecmascript)");
;
const PAYLOAD_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || "http://localhost:3000";
// No browser, usa a rota proxy do Next.js (/api/cms) para evitar chamadas diretas
// ao CMS (que pode ser inacessível publicamente). No servidor, usa a URL interna.
const API_URL = ("TURBOPACK compile-time truthy", 1) ? "/api/cms" : "TURBOPACK unreachable";
const API_TOKEN = __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.PAYLOAD_API_TOKEN;
/**
 * Função base para fazer requisições ao Payload CMS
 */ async function fetchPayload(endpoint, options = {}) {
    const { auth = false, ...fetchOptions } = options;
    const headers = {
        "Content-Type": "application/json"
    };
    // Adiciona token de autenticação se necessário
    if (auth && API_TOKEN) {
        headers["Authorization"] = `Bearer ${API_TOKEN}`;
    }
    // Merge com headers do fetchOptions
    if (fetchOptions.headers) {
        Object.assign(headers, fetchOptions.headers);
    }
    const url = endpoint.startsWith("http") ? endpoint : `${API_URL}${endpoint}`;
    try {
        const response = await fetch(url, {
            ...fetchOptions,
            headers,
            // Next.js 15+ cache control
            next: {
                revalidate: ("TURBOPACK compile-time truthy", 1) ? 0 : "TURBOPACK unreachable",
                ...fetchOptions.next
            }
        });
        if (!response.ok) {
            throw new Error(`Payload API error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching from Payload:", error);
        throw error;
    }
}
async function getCollection(collection, params = {}, options = {}) {
    const queryString = __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stringify(params, {
        addQueryPrefix: true,
        encode: false
    });
    return fetchPayload(`/${collection}${queryString}`, options);
}
async function getDocumentById(collection, id, params = {}, options = {}) {
    const queryString = __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stringify(params, {
        addQueryPrefix: true,
        encode: false
    });
    return fetchPayload(`/${collection}/${id}${queryString}`, options);
}
async function getDocumentBySlug(collection, slug, params = {}, options = {}) {
    const queryParams = {
        ...params,
        where: {
            slug: {
                equals: slug
            }
        },
        limit: 1
    };
    const response = await getCollection(collection, queryParams, options);
    return response.docs[0] || null;
}
async function getGlobal(slug, params = {}, options = {}) {
    const queryString = __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stringify(params, {
        addQueryPrefix: true,
        encode: false
    });
    return fetchPayload(`/globals/${slug}${queryString}`, options);
}
async function getPages(params = {}) {
    return getCollection("pages", {
        depth: 2,
        limit: 10,
        ...params
    });
}
async function getPageBySlug(slug) {
    const response = await getCollection("pages", {
        depth: 2,
        limit: 1,
        where: {
            slug: {
                equals: slug
            },
            _status: {
                equals: "published"
            }
        }
    });
    return response.docs[0] || null;
}
async function getNewsArticles(params = {}) {
    return getCollection("news", {
        depth: 1,
        limit: 10,
        sort: "-publishedAt",
        where: {
            _status: {
                equals: "published"
            }
        },
        ...params
    });
}
async function getNewsBySlug(slug) {
    const response = await getCollection("news", {
        depth: 1,
        limit: 1,
        where: {
            slug: {
                equals: slug
            },
            _status: {
                equals: "published"
            }
        }
    });
    return response.docs[0] || null;
}
function getMediaUrl(media) {
    let url = "";
    if (typeof media === "string") {
        url = media.startsWith("http") ? media : `${PAYLOAD_URL}${media}`;
    } else if (media?.url) {
        url = media.url.startsWith("http") ? media.url : `${PAYLOAD_URL}${media.url}`;
    }
    if (!url) return "";
    // Reescreve URLs do CMS para usar o proxy Next.js (/api/media/...)
    // A checagem usa PAYLOAD_URL que é a origem pública configurada.
    if (PAYLOAD_URL && url.startsWith(PAYLOAD_URL) && url.includes("/api/media/")) {
        return url.slice(PAYLOAD_URL.length);
    }
    return url;
}
async function getPartners(params = {}) {
    return getCollection("partners", {
        depth: 1,
        limit: 100,
        sort: "order",
        ...params
    });
}
async function getVideos(params = {}) {
    return getCollection("videos", {
        depth: 0,
        limit: 100,
        sort: "order",
        ...params
    });
}
async function getActivityReports(params = {}) {
    return getCollection("activity-reports", {
        depth: 1,
        limit: 100,
        sort: "-year",
        ...params
    });
}
async function getTimelineItems(params = {}) {
    return getCollection("timeline-items", {
        depth: 0,
        limit: 100,
        sort: "order",
        ...params
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/news/NewsCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsCard",
    ()=>NewsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$ButtonLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/ui/ButtonLink.tsx [app-client] (ecmascript)");
;
;
;
;
;
function formatDate(value) {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value;
    return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }).format(parsed);
}
function NewsCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "3bb521ea8042f291281d488ab3bc69f0104292863d03e966a360454dc6b995dc") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3bb521ea8042f291281d488ab3bc69f0104292863d03e966a360454dc6b995dc";
    }
    const { item, variant: t1 } = t0;
    const variant = t1 === undefined ? "default" : t1;
    const isPlaceholder = !item;
    const isBlock = variant === "block";
    const titleColor = isBlock ? "text-white" : "text-crtib-gray-dark";
    const dotColor = isBlock ? "bg-white" : "bg-crtib-green-blue";
    const dateColor = isBlock ? "text-white" : "text-crtib-green-blue";
    const excerptColor = isBlock ? "text-white" : "text-[#6B6B6B]";
    const buttonVariant = isBlock ? "ghost" : "primary";
    const buttonClass = isBlock ? "border-white text-white bg-crtib-green-back hover:bg-crtib-green-back/90" : "";
    const t2 = isPlaceholder ? "opacity-0" : "opacity-100";
    let t3;
    if ($[1] !== t2) {
        t3 = [
            "flex flex-col gap-6",
            "lg:flex-row lg:items-start lg:gap-10",
            t2
        ];
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const t4 = t3.join(" ");
    const t5 = item?.href || "#";
    const t6 = item?.title ? `Lire la suite: ${item.title}` : "Lire la suite";
    let t7;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            "group relative w-full overflow-hidden bg-crtib-gray-light",
            "aspect-square",
            "lg:h-[260px] lg:w-[260px] lg:shrink-0"
        ];
        $[3] = t7;
    } else {
        t7 = $[3];
    }
    let t8;
    if ($[4] !== item) {
        t8 = item?.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: item.imageUrl,
            alt: item.imageAlt || item.title,
            fill: true,
            sizes: "(max-width: 1024px) 100vw, 260px",
            className: "object-cover",
            priority: true
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 69,
            columnNumber: 27
        }, this) : null;
        $[4] = item;
        $[5] = t8;
    } else {
        t8 = $[5];
    }
    let t10;
    let t9;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-crtib-green-blue/80 ring-8 ring-white/70"
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-8 border border-white/80"
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 79,
            columnNumber: 11
        }, this);
        $[6] = t10;
        $[7] = t9;
    } else {
        t10 = $[6];
        t9 = $[7];
    }
    let t11;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100",
            children: [
                t9,
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-sans text-[16px] font-medium uppercase tracking-[0.08em] text-white",
                        children: "LIRE LA SUITE"
                    }, void 0, false, {
                        fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
                        lineNumber: 88,
                        columnNumber: 207
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
                    lineNumber: 88,
                    columnNumber: 140
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[8] = t11;
    } else {
        t11 = $[8];
    }
    let t12;
    if ($[9] !== t5 || $[10] !== t6 || $[11] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t5,
            "aria-label": t6,
            className: t7.join(" "),
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, this);
        $[9] = t5;
        $[10] = t6;
        $[11] = t8;
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    const t13 = `mt-[10px] h-2 w-2 shrink-0 rounded-full ${dotColor}`;
    let t14;
    if ($[13] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t13,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[13] = t13;
        $[14] = t14;
    } else {
        t14 = $[14];
    }
    const t15 = item?.href || "#";
    const t16 = `block text-[18px] font-medium uppercase leading-[1.25] tracking-[0.02em] hover:underline sm:text-[20px] ${titleColor}`;
    const t17 = item?.title || " ";
    let t18;
    if ($[15] !== t15 || $[16] !== t16 || $[17] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t15,
            className: t16,
            children: t17
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[15] = t15;
        $[16] = t16;
        $[17] = t17;
        $[18] = t18;
    } else {
        t18 = $[18];
    }
    let t19;
    if ($[19] !== t14 || $[20] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4",
            children: [
                t14,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[19] = t14;
        $[20] = t18;
        $[21] = t19;
    } else {
        t19 = $[21];
    }
    const t20 = `mt-2 block text-[16px] font-medium sm:text-[18px] ${dateColor}`;
    let t21;
    if ($[22] !== item) {
        t21 = item ? formatDate(item.date) : " ";
        $[22] = item;
        $[23] = t21;
    } else {
        t21 = $[23];
    }
    let t22;
    if ($[24] !== t20 || $[25] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
            className: t20,
            children: t21
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[24] = t20;
        $[25] = t21;
        $[26] = t22;
    } else {
        t22 = $[26];
    }
    let t23;
    if ($[27] !== excerptColor || $[28] !== item) {
        t23 = item?.excerpt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `mt-3 text-[14px] leading-[1.65] sm:text-[15px] ${excerptColor}`,
            children: item.excerpt
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 154,
            columnNumber: 27
        }, this) : null;
        $[27] = excerptColor;
        $[28] = item;
        $[29] = t23;
    } else {
        t23 = $[29];
    }
    let t24;
    if ($[30] !== buttonClass || $[31] !== buttonVariant || $[32] !== item) {
        t24 = item ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$ButtonLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                href: item.href,
                label: "LIRE L'ARTICLE",
                size: "sm",
                variant: buttonVariant,
                className: buttonClass
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
                lineNumber: 163,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 163,
            columnNumber: 18
        }, this) : null;
        $[30] = buttonClass;
        $[31] = buttonVariant;
        $[32] = item;
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    let t25;
    if ($[34] !== t19 || $[35] !== t22 || $[36] !== t23 || $[37] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 font-sans",
            children: [
                t19,
                t22,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[34] = t19;
        $[35] = t22;
        $[36] = t23;
        $[37] = t24;
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    let t26;
    if ($[39] !== isPlaceholder || $[40] !== t12 || $[41] !== t25 || $[42] !== t4) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: t4,
            "aria-hidden": isPlaceholder,
            children: [
                t12,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/news/NewsCard.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[39] = isPlaceholder;
        $[40] = t12;
        $[41] = t25;
        $[42] = t4;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    return t26;
}
_c = NewsCard;
var _c;
__turbopack_context__.k.register(_c, "NewsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/news/NewsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsSection",
    ()=>NewsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$news$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/news/NewsCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$ButtonLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/ui/ButtonLink.tsx [app-client] (ecmascript)");
;
;
;
;
function NewsSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "9d28f2a0ca518147fb4157ad24a602c7f7ac1be316b33a8406284cf1d0f891b7") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9d28f2a0ca518147fb4157ad24a602c7f7ac1be316b33a8406284cf1d0f891b7";
    }
    const { title: t1, items, maxItems: t2, variant: t3, ctaHref: t4 } = t0;
    const title = t1 === undefined ? "AUTRES ACTUALIT\xC9S" : t1;
    const maxItems = t2 === undefined ? 2 : t2;
    const variant = t3 === undefined ? "default" : t3;
    const ctaHref = t4 === undefined ? "/actualites" : t4;
    const displayCount = Math.max(2, Math.min(maxItems, 6));
    let t5;
    if ($[1] !== displayCount || $[2] !== items) {
        const visibleItems = items.slice().sort(_NewsSectionAnonymous).slice(0, displayCount);
        t5 = [
            ...visibleItems,
            ...Array.from({
                length: displayCount - visibleItems.length
            }, _NewsSectionArrayFrom)
        ];
        $[1] = displayCount;
        $[2] = items;
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    const paddedItems = t5;
    const isBlock = variant === "block";
    const t6 = isBlock ? "bg-crtib-green-blue text-white" : "";
    const t7 = isBlock ? "text-white" : "text-crtib-gray-dark";
    let t8;
    if ($[4] !== t7) {
        t8 = [
            "font-sans text-[18px] font-medium uppercase tracking-[0.22em]",
            t7
        ];
        $[4] = t7;
        $[5] = t8;
    } else {
        t8 = $[5];
    }
    const t9 = t8.join(" ");
    let t10;
    if ($[6] !== t9 || $[7] !== title) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: t9,
            children: title
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsSection.tsx",
            lineNumber: 58,
            columnNumber: 11
        }, this);
        $[6] = t9;
        $[7] = title;
        $[8] = t10;
    } else {
        t10 = $[8];
    }
    const t11 = isBlock ? "ghost" : "primary";
    const t12 = isBlock ? "border-0 px-0 h-auto text-[12px] tracking-[0.18em] font-medium hover:bg-transparent" : "";
    let t13;
    if ($[9] !== ctaHref || $[10] !== t11 || $[11] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$ButtonLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                href: ctaHref,
                label: "LIRE TOUTE L\u2019ACTUALIT\xC9 \u203A",
                variant: t11,
                size: "sm",
                className: t12
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/news/NewsSection.tsx",
                lineNumber: 69,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsSection.tsx",
            lineNumber: 69,
            columnNumber: 11
        }, this);
        $[9] = ctaHref;
        $[10] = t11;
        $[11] = t12;
        $[12] = t13;
    } else {
        t13 = $[12];
    }
    let t14;
    if ($[13] !== t10 || $[14] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-6",
            children: [
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/news/NewsSection.tsx",
            lineNumber: 79,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t13;
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = [
            "mt-8 grid gap-16",
            "grid-cols-1 lg:grid-cols-2"
        ];
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] !== isBlock || $[18] !== paddedItems) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15.join(" "),
            children: paddedItems.map({
                "NewsSection[paddedItems.map()]": (item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$news$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewsCard"], {
                        item: item || undefined,
                        variant: isBlock ? "block" : "default"
                    }, item?.id || `placeholder-${index}`, false, {
                        fileName: "[project]/crtib-front/src/components/news/NewsSection.tsx",
                        lineNumber: 96,
                        columnNumber: 60
                    }, this)
            }["NewsSection[paddedItems.map()]"])
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsSection.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, this);
        $[17] = isBlock;
        $[18] = paddedItems;
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] !== t14 || $[21] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-[1320px] px-8 pt-8 pb-20",
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/news/NewsSection.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[20] = t14;
        $[21] = t16;
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] !== t17 || $[24] !== t6) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t6,
                children: t17
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/news/NewsSection.tsx",
                lineNumber: 115,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsSection.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[23] = t17;
        $[24] = t6;
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    return t18;
}
_c = NewsSection;
function _NewsSectionArrayFrom() {
    return null;
}
function _NewsSectionAnonymous(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}
var _c;
__turbopack_context__.k.register(_c, "NewsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/news/NewsSectionClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsSectionClient",
    ()=>NewsSectionClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$lib$2f$payload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/lib/payload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$news$2f$NewsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/news/NewsSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NewsSectionClient(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "a1882ab02ec29a54134227cdeede6f1399146d9a676d0dcec1192d6aa6df5500") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1882ab02ec29a54134227cdeede6f1399146d9a676d0dcec1192d6aa6df5500";
    }
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ maxItems: t1, ...props } = t0);
        $[1] = t0;
        $[2] = props;
        $[3] = t1;
    } else {
        props = $[2];
        t1 = $[3];
    }
    const maxItems = t1 === undefined ? 2 : t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t3;
    let t4;
    if ($[5] !== maxItems) {
        t3 = ({
            "NewsSectionClient[useEffect()]": ()=>{
                const limit = Math.max(2, Math.min(maxItems, 6));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$lib$2f$payload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNewsArticles"])({
                    limit
                }).then({
                    "NewsSectionClient[useEffect() > (anonymous)()]": (result)=>{
                        const docs = result.docs || [];
                        setItems(docs.slice(0, limit).map(_NewsSectionClientUseEffectAnonymousAnonymous));
                    }
                }["NewsSectionClient[useEffect() > (anonymous)()]"]).catch({
                    "NewsSectionClient[useEffect() > (anonymous)()]": ()=>setItems([])
                }["NewsSectionClient[useEffect() > (anonymous)()]"]).finally({
                    "NewsSectionClient[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["NewsSectionClient[useEffect() > (anonymous)()]"]);
            }
        })["NewsSectionClient[useEffect()]"];
        t4 = [
            maxItems
        ];
        $[5] = maxItems;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    if (loading) {
        let t5;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-16"
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/news/NewsSectionClient.tsx",
                lineNumber: 79,
                columnNumber: 12
            }, this);
            $[8] = t5;
        } else {
            t5 = $[8];
        }
        return t5;
    }
    let t5;
    if ($[9] !== items || $[10] !== maxItems || $[11] !== props) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$news$2f$NewsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewsSection"], {
            ...props,
            maxItems: maxItems,
            items: items
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/news/NewsSectionClient.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[9] = items;
        $[10] = maxItems;
        $[11] = props;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_s(NewsSectionClient, "g5dwFXfwTO0XOA1A8HLZqnG2vPo=");
_c = NewsSectionClient;
function _NewsSectionClientUseEffectAnonymousAnonymous(article) {
    const image = article.featuredImage && typeof article.featuredImage === "object" ? article.featuredImage : undefined;
    return {
        id: article.id,
        title: article.title,
        date: article.publishedAt,
        href: `/actualites/${article.slug}`,
        excerpt: article.excerpt,
        imageUrl: image ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$lib$2f$payload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaUrl"])(image) : undefined,
        imageAlt: image?.alt || article.title
    };
}
var _c;
__turbopack_context__.k.register(_c, "NewsSectionClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/partners/PartnersSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartnersSection",
    ()=>PartnersSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function LogoItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "98058c2de370acdcdfd88bc58aa42d008f94e89caa3251e6a748a3a9374e436b") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "98058c2de370acdcdfd88bc58aa42d008f94e89caa3251e6a748a3a9374e436b";
    }
    const { item } = t0;
    let t1;
    if ($[1] !== item.logoUrl || $[2] !== item.name) {
        t1 = item.logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: item.logoUrl,
            alt: item.name,
            className: "h-full w-full object-cover",
            loading: "lazy"
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
            lineNumber: 27,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5B5B5B]",
            children: item.name
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
            lineNumber: 27,
            columnNumber: 124
        }, this);
        $[1] = item.logoUrl;
        $[2] = item.name;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const content = t1;
    if (item.href) {
        const t2 = item.href;
        const t3 = item.logoUrl ? "overflow-hidden" : "px-4 py-3";
        let t4;
        if ($[4] !== t3) {
            t4 = [
                "flex h-[110px] w-[180px] shrink-0 items-center justify-center rounded-md border border-[#E4E4E4] bg-white transition-colors hover:border-[#37C2A2]",
                t3
            ];
            $[4] = t3;
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        const t5 = t4.join(" ");
        let t6;
        if ($[6] !== content || $[7] !== item.href || $[8] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: t2,
                className: t5,
                children: content
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
                lineNumber: 49,
                columnNumber: 12
            }, this);
            $[6] = content;
            $[7] = item.href;
            $[8] = t5;
            $[9] = t6;
        } else {
            t6 = $[9];
        }
        return t6;
    }
    const t2 = item.logoUrl ? "overflow-hidden" : "px-4 py-3";
    let t3;
    if ($[10] !== t2) {
        t3 = [
            "flex h-[110px] w-[180px] shrink-0 items-center justify-center rounded-md border border-[#E4E4E4] bg-white",
            t2
        ];
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const t4 = t3.join(" ");
    let t5;
    if ($[12] !== content || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: content
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[12] = content;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c = LogoItem;
function PartnersSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "98058c2de370acdcdfd88bc58aa42d008f94e89caa3251e6a748a3a9374e436b") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "98058c2de370acdcdfd88bc58aa42d008f94e89caa3251e6a748a3a9374e436b";
    }
    const { partners, associations, title: t1, associationsTitle: t2 } = t0;
    const title = t1 === undefined ? "Partenaires" : t1;
    const associationsTitle = t2 === undefined ? "En association" : t2;
    let t3;
    if ($[1] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-[14px] font-semibold uppercase tracking-[0.2em] text-crtib-gray-dark",
            children: title
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== partners) {
        t4 = partners.map(_PartnersSectionPartnersMap);
        $[3] = partners;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 overflow-x-auto pb-2",
            children: t4
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t3 || $[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== associationsTitle) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[14px] font-semibold uppercase tracking-[0.2em] text-crtib-gray-dark",
            children: associationsTitle
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[10] = associationsTitle;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== associations) {
        t8 = associations.map(_PartnersSectionAssociationsMap);
        $[12] = associations;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 overflow-x-auto pb-2",
            children: t8
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
            lineNumber: 147,
            columnNumber: 10
        }, this);
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t7 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[16] = t7;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full bg-[#F5F5F5]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-6xl px-6 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-10",
                    children: [
                        t6,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
                    lineNumber: 164,
                    columnNumber: 105
                }, this)
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
                lineNumber: 164,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t6;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    return t11;
}
_c1 = PartnersSection;
function _PartnersSectionAssociationsMap(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoItem, {
        item: item_0
    }, item_0.id, false, {
        fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
        lineNumber: 174,
        columnNumber: 10
    }, this);
}
function _PartnersSectionPartnersMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoItem, {
        item: item
    }, item.id, false, {
        fileName: "[project]/crtib-front/src/components/partners/PartnersSection.tsx",
        lineNumber: 177,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoItem");
__turbopack_context__.k.register(_c1, "PartnersSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/video/VideoCardsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoCardsSection",
    ()=>VideoCardsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function getYoutubeEmbedUrl(src) {
    try {
        const url = new URL(src);
        if (url.hostname.includes("youtu.be")) {
            const id = url.pathname.replace("/", "");
            return id ? `https://www.youtube.com/embed/${id}` : src;
        }
        if (url.hostname.includes("youtube.com")) {
            if (url.pathname.includes("/embed/")) return src;
            const videoId = url.searchParams.get("v");
            if (!videoId) return src;
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return src;
    } catch  {
        return src;
    }
}
function VideoCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "c834a536437e8a9b13b30a3834499d155d03289b16f0d36842cc961bc5328c07") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c834a536437e8a9b13b30a3834499d155d03289b16f0d36842cc961bc5328c07";
    }
    const { item } = t0;
    let t1;
    if ($[1] !== item.src || $[2] !== item.title || $[3] !== item.type) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-video bg-black",
            children: item.type === "youtube" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                src: getYoutubeEmbedUrl(item.src),
                title: item.title,
                className: "h-full w-full",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
                lineNumber: 43,
                columnNumber: 76
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                src: item.src,
                controls: true,
                className: "h-full w-full",
                preload: "metadata"
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
                lineNumber: 43,
                columnNumber: 289
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[1] = item.src;
        $[2] = item.title;
        $[3] = item.type;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== item.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-3 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-crtib-gray-dark",
            children: item.title
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[5] = item.title;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t1 || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden rounded-md border border-[#E4E4E4] bg-white shadow-sm",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mx-auto mt-2 block h-[2px] w-10 bg-[#37C2A2]"
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[200px]",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_c = VideoCard;
function VideoCardsSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "c834a536437e8a9b13b30a3834499d155d03289b16f0d36842cc961bc5328c07") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c834a536437e8a9b13b30a3834499d155d03289b16f0d36842cc961bc5328c07";
    }
    const { title: t1, videos } = t0;
    const title = t1 === undefined ? "Vid\xE9os" : t1;
    let t2;
    if ($[1] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-[14px] font-semibold uppercase tracking-[0.2em] text-crtib-gray-dark",
            children: title
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== videos) {
        t3 = videos.map(_VideoCardsSectionVideosMap);
        $[3] = videos;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex flex-wrap justify-center gap-6",
            children: t3
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t2 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full bg-[#F5F5F5]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-6xl px-6 py-12",
                children: [
                    t2,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
                lineNumber: 124,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_c1 = VideoCardsSection;
function _VideoCardsSectionVideosMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoCard, {
        item: item
    }, item.id, false, {
        fileName: "[project]/crtib-front/src/components/video/VideoCardsSection.tsx",
        lineNumber: 134,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "VideoCard");
__turbopack_context__.k.register(_c1, "VideoCardsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/blocks/DownloadLinks/DownloadLinks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadLinks",
    ()=>DownloadLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$DownloadLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/ui/DownloadLink.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function DownloadLinks(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "d2d8458e37b2cd9f02ea0eea501df4ef4de6a504031a91a3d26e8e0d1e3eaee0") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d2d8458e37b2cd9f02ea0eea501df4ef4de6a504031a91a3d26e8e0d1e3eaee0";
    }
    const { title, items } = t0;
    if (!items || items.length === 0) {
        return null;
    }
    let t1;
    if ($[1] !== title) {
        t1 = title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mb-4 text-lg font-light uppercase tracking-tight text-crtib-gray-dark",
            children: title
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/blocks/DownloadLinks/DownloadLinks.tsx",
            lineNumber: 32,
            columnNumber: 19
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== items) {
        t2 = items.map(_DownloadLinksItemsMap);
        $[3] = items;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-md bg-white px-4 py-3 shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: t2
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/blocks/DownloadLinks/DownloadLinks.tsx",
                lineNumber: 48,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/blocks/DownloadLinks/DownloadLinks.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full rounded-lg bg-crtib-gray-light p-6",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/blocks/DownloadLinks/DownloadLinks.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_c = DownloadLinks;
function _DownloadLinksItemsMap(item) {
    return item.fileUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$ui$2f$DownloadLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DownloadLink"], {
        variant: "custom",
        href: item.fileUrl,
        title: item.label,
        target: "_blank"
    }, item.id, false, {
        fileName: "[project]/crtib-front/src/components/blocks/DownloadLinks/DownloadLinks.tsx",
        lineNumber: 66,
        columnNumber: 25
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-sm text-crtib-gray-dark",
        children: item.label
    }, item.id, false, {
        fileName: "[project]/crtib-front/src/components/blocks/DownloadLinks/DownloadLinks.tsx",
        lineNumber: 66,
        columnNumber: 134
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "DownloadLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/lib/serializeLexical.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeLexical",
    ()=>serializeLexical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const CMS_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || "http://localhost:3000";
/** Garante que URLs de mídia do Payload apontem para o CMS e não para o frontend. */ function mediaUrl(url) {
    if (!url) return undefined;
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `${CMS_URL}${url}`;
}
function serializeLexical(content) {
    if (!content) return "";
    // Se já vier como string HTML, retorna diretamente
    if (typeof content === "string") {
        return content;
    }
    // Se for um objeto Lexical, processa os nós
    if (content.root && content.root.children) {
        return serializeNodes(content.root.children);
    }
    return "";
}
function toAbsoluteMediaUrl(url) {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    const payloadUrl = ("TURBOPACK compile-time value", "http://localhost:3000") || "http://localhost:3000";
    return `${payloadUrl}${url}`;
}
function getUploadUrl(value) {
    if (!value || typeof value !== "object") return "";
    const maybeDirect = value;
    if (maybeDirect.url) return maybeDirect.url;
    if (maybeDirect.value?.url) return maybeDirect.value.url;
    return "";
}
function serializeNodes(nodes) {
    if (!Array.isArray(nodes)) return "";
    return nodes.map((node)=>serializeNode(node)).join("");
}
function serializeNode(node) {
    if (!node) return "";
    const { type, children, format, text, tag, value, url, rel, target } = node;
    // Nó de texto
    if (type === "text") {
        let html = text || "";
        // Aplica formatação
        if (format) {
            if (format & 1) html = `<strong>${html}</strong>`; // bold
            if (format & 2) html = `<em>${html}</em>`; // italic
            if (format & 4) html = `<s>${html}</s>`; // strikethrough
            if (format & 8) html = `<u>${html}</u>`; // underline
            if (format & 16) html = `<code>${html}</code>`; // code
            if (format & 32) html = `<sub>${html}</sub>`; // subscript
            if (format & 64) html = `<sup>${html}</sup>`; // superscript
        }
        return html;
    }
    // Nó de parágrafo
    if (type === "paragraph") {
        return `<p>${serializeNodes(children)}</p>`;
    }
    // Nó de heading
    if (type === "heading") {
        const headingTag = tag || "h2";
        return `<${headingTag}>${serializeNodes(children)}</${headingTag}>`;
    }
    // Nó de lista
    if (type === "list") {
        const listTag = tag === "ol" ? "ol" : "ul";
        return `<${listTag}>${serializeNodes(children)}</${listTag}>`;
    }
    // Nó de item de lista
    if (type === "listitem") {
        return `<li>${serializeNodes(children)}</li>`;
    }
    // Nó de link
    if (type === "link") {
        const relAttr = rel ? ` rel="${rel}"` : "";
        const targetAttr = target ? ` target="${target}"` : "";
        return `<a href="${url}"${relAttr}${targetAttr}>${serializeNodes(children)}</a>`;
    }
    // Nó de quote
    if (type === "quote") {
        return `<blockquote>${serializeNodes(children)}</blockquote>`;
    }
    // Nó de código
    if (type === "code") {
        return `<pre><code>${value || ""}</code></pre>`;
    }
    // Nó de linha horizontal
    if (type === "horizontalrule") {
        return "<hr />";
    }
    // Nó de quebra de linha
    if (type === "linebreak") {
        return "<br />";
    }
    // Upload (imagem, etc)
    if (type === "upload") {
        const { value, fields } = node;
        if (value && value.url) {
            const imageUrl = toAbsoluteMediaUrl(value.url);
            const alt = value.alt || "";
            const caption = fields?.caption || value.caption || "";
            const position = fields?.position || value.position || "center";
            const positionClasses = {
                left: "float-left mr-6 mb-4",
                center: "mx-auto block",
                right: "float-right ml-6 mb-4"
            };
            const posClass = positionClasses[position] || positionClasses.center;
            let html = `<img src="${imageUrl}" alt="${alt}" class="${posClass}" />`;
            if (caption) {
                html = `<figure class="${posClass}">
          <img src="${imageUrl}" alt="${alt}" />
          <figcaption class="text-sm text-gray-600 italic mt-2">${caption}</figcaption>
        </figure>`;
            }
            return html;
        }
        return "";
    }
    // Block inline (componentes customizados)
    if (type === "block") {
        const blockType = node.fields?.blockType;
        // Callout block
        if (blockType === "callout") {
            const calloutType = node.fields?.type || "info";
            const content = node.fields?.content ? serializeLexical(node.fields.content) : "";
            const typeClasses = {
                info: "bg-blue-50 border-blue-500 text-blue-900",
                warning: "bg-yellow-50 border-yellow-500 text-yellow-900",
                success: "bg-green-50 border-green-500 text-green-900",
                error: "bg-red-50 border-red-500 text-red-900"
            };
            const typeIcons = {
                info: "ℹ️",
                warning: "⚠️",
                success: "✅",
                error: "❌"
            };
            const classes = typeClasses[calloutType] || typeClasses.info;
            const icon = typeIcons[calloutType] || typeIcons.info;
            return `<div class="callout ${classes} border-l-4 p-4 my-6 rounded-r-lg">
        <div class="flex items-start">
          <span class="text-2xl mr-3">${icon}</span>
          <div class="flex-1">${content}</div>
        </div>
      </div>`;
        }
        // Accordion block
        if (blockType === "accordion") {
            const items = node.fields?.items || [];
            const accordionData = items.map((item, index)=>({
                    id: `accordion-item-${index}`,
                    title: item.title || "",
                    content: item.content ? serializeLexical(item.content) : ""
                }));
            // Renderiza o accordion como um componente especial
            return `<div class="accordion-block" data-accordion='${JSON.stringify(accordionData).replace(/'/g, "&apos;")}'></div>`;
        }
        if (blockType === "videoCards") {
            const videos = (node.fields?.videos || []).map((video, index)=>({
                    id: `video-${index}`,
                    title: video.title || "",
                    type: video.type || "youtube",
                    src: toAbsoluteMediaUrl(video.src || "")
                }));
            const data = {
                title: node.fields?.title || "",
                videos
            };
            return `<div class="video-cards-block" data-video-cards='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
        }
        if (blockType === "activityReports") {
            const reports = (node.fields?.reports || []).map((report, index)=>({
                    id: `report-${index}`,
                    year: report.year || "",
                    pdfUrl: toAbsoluteMediaUrl(getUploadUrl(report.pdf))
                }));
            const data = {
                title: node.fields?.title || "",
                reports
            };
            return `<div class="activity-reports-block" data-activity-reports='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
        }
        if (blockType === "partners") {
            const mapPartnerItem = (item, index)=>({
                    id: `partner-${index}`,
                    name: item.name || "",
                    logoUrl: toAbsoluteMediaUrl(getUploadUrl(item.logo)) || undefined,
                    href: item.href || undefined
                });
            const data = {
                title: node.fields?.title || "",
                associationsTitle: node.fields?.associationsTitle || "",
                partners: (node.fields?.partners || []).map(mapPartnerItem),
                associations: (node.fields?.associations || []).map(mapPartnerItem)
            };
            return `<div class="partners-block" data-partners='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
        }
        if (blockType === "newsSection") {
            const data = {
                title: node.fields?.title || "",
                maxItems: node.fields?.maxItems || 2,
                variant: node.fields?.variant || "default",
                ctaHref: node.fields?.ctaHref || "/actualites"
            };
            return `<div class="news-section-block" data-news-section='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
        }
        if (blockType === "calculator") {
            const data = {
                title: node.fields?.title || "",
                options: (node.fields?.options || []).map((option)=>option.label || ""),
                results: (node.fields?.results || []).map((result)=>({
                        label: result.label || "",
                        value: result.value || ""
                    }))
            };
            return `<div class="calculator-block" data-calculator='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
        }
        // HTML Block
        if (blockType === "htmlBlock") {
            const html = node.fields?.html || "";
            return `<div class="html-block my-6">${html}</div>`;
        }
        // Timeline (Notre Histoire)
        if (blockType === "timeline") {
            const items = (node.fields?.items || []).map((item, i)=>({
                    id: `timeline-item-${i}`,
                    year: item.year || "",
                    title: item.title || ""
                }));
            const data = {
                items,
                highlightLast: node.fields?.highlightLast ?? true
            };
            return `<div class="timeline-block" data-timeline='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
        }
        // DynamicGrid (Taux et intérêts / Data Grid simplificado)
        if (blockType === "dynamicGrid") {
            const columns = (node.fields?.columns || []).map((col)=>({
                    id: col.id,
                    label: col.label,
                    type: col.type,
                    config: {
                        precision: col.precision,
                        currency: col.currency || undefined
                    }
                }));
            const rows = (node.fields?.rows || []).map((row, i)=>({
                    id: `row-${i}`,
                    values: row.values || {}
                }));
            const data = {
                columns,
                rows,
                title: node.fields?.title || ""
            };
            return `<div class="dynamic-grid-block" data-dynamic-grid='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
        }
        // ClausesGrid (Clauses et CTG)
        if (blockType === "clausesGrid") {
            const rows = (node.fields?.rows || []).map((row)=>({
                    number: row.number || "",
                    title: row.title || "",
                    date: row.date || "",
                    pdfUrl: mediaUrl(row.pdf?.url)
                }));
            const data = {
                title: node.fields?.title || "",
                rows,
                redirectLabel: node.fields?.redirectLabel || "",
                redirectHref: node.fields?.redirectHref || ""
            };
            return `<div class="clauses-grid-block" data-clauses-grid='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
        }
        // DownloadGrid (Téléchargements)
        if (blockType === "downloadGrid") {
            const documents = (node.fields?.documents || []).map((doc, i)=>({
                    id: `doc-${i}`,
                    numero: doc.numero || "",
                    titulo: doc.titulo || "",
                    data: doc.data || "",
                    versao: doc.versao || "",
                    links: {
                        ...doc.pdf?.url ? {
                            pdf: mediaUrl(doc.pdf.url)
                        } : {},
                        ...doc.rtf?.url ? {
                            rtf: mediaUrl(doc.rtf.url)
                        } : {},
                        ...doc.doc?.url ? {
                            doc: mediaUrl(doc.doc.url)
                        } : {},
                        ...doc.xls?.url ? {
                            xls: mediaUrl(doc.xls.url)
                        } : {},
                        ...doc.zip?.url ? {
                            zip: mediaUrl(doc.zip.url)
                        } : {}
                    }
                }));
            const data = {
                documents,
                pageSize: node.fields?.pageSize || 10
            };
            return `<div class="download-grid-block" data-download-grid='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
        }
        // DownloadLinks (Liens de téléchargement)
        if (blockType === "downloadLinks") {
            const items = (node.fields?.items || []).map((item, i)=>({
                    id: `dl-${i}`,
                    label: item.label || "",
                    fileUrl: mediaUrl(item.file?.url),
                    extension: item.file?.mimeType?.includes("pdf") ? "pdf" : item.file?.filename?.split(".").pop() || "pdf"
                }));
            const data = {
                title: node.fields?.title || "",
                items
            };
            return `<div class="download-links-block" data-download-links='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
        }
        // Organogram (Organigramme)
        if (blockType === "organogram") {
            const mapNode = (n, prefix)=>({
                    id: `${prefix}-${n.name}`.replace(/\s/g, "-").toLowerCase(),
                    name: n.name || "",
                    role: n.role || undefined,
                    photoUrl: mediaUrl(n.photo?.url),
                    children: (n.children || []).map((child, i)=>mapNode(child, `${prefix}-child-${i}`))
                });
            const data = {
                root: mapNode(node.fields?.root || {}, "org")
            };
            return `<div class="organogram-block" data-organogram='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
        }
        return "";
    }
    // Para nós desconhecidos, tenta serializar os filhos
    if (children && Array.isArray(children)) {
        return serializeNodes(children);
    }
    return "";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/RichText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RichText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/Accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$calculator$2f$CalculatorSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/calculator/CalculatorSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$news$2f$NewsSectionClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/news/NewsSectionClient.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$partners$2f$PartnersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/partners/PartnersSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$reports$2f$ActivityReportsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/reports/ActivityReportsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$video$2f$VideoCardsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/video/VideoCardsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$timeline$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/timeline/Timeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$blocks$2f$DynamicGrid$2f$DynamicGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/blocks/DynamicGrid/DynamicGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$blocks$2f$ClausesGrid$2f$ClausesGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/blocks/ClausesGrid/ClausesGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$DataGridDownloads$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/DataGridDownloads.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$blocks$2f$DownloadLinks$2f$DownloadLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/blocks/DownloadLinks/DownloadLinks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$organogram$2f$OrganogramChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/organogram/OrganogramChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$lib$2f$serializeLexical$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/lib/serializeLexical.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$home$2f$PhotoHeroCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/src/components/home/PhotoHeroCarousel.tsx [app-client] (ecmascript)");
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
;
;
;
;
const CMS_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || "http://localhost:3000";
function absUrl(url) {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) {
        // Reescreve URLs de mídia do CMS para usar o proxy Next.js (/api/media/...)
        // evitando que o browser tente resolver o domínio interno do CMS.
        if (CMS_URL && url.startsWith(CMS_URL)) {
            return url.slice(CMS_URL.length);
        }
        return url;
    }
    // URL já é relativa — usável diretamente
    return url;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getUploadUrl(value) {
    if (!value || typeof value !== "object") return "";
    const v = value;
    if (v.url) return absUrl(v.url);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (v.value?.url) return absUrl(v.value.url);
    return "";
}
function applyFormat(text, format) {
    let node = text;
    if (format & 1) node = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
        children: node
    }, void 0, false, {
        fileName: "[project]/crtib-front/src/components/RichText.tsx",
        lineNumber: 55,
        columnNumber: 26
    }, this);
    if (format & 2) node = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
        children: node
    }, void 0, false, {
        fileName: "[project]/crtib-front/src/components/RichText.tsx",
        lineNumber: 56,
        columnNumber: 26
    }, this);
    if (format & 4) node = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("s", {
        children: node
    }, void 0, false, {
        fileName: "[project]/crtib-front/src/components/RichText.tsx",
        lineNumber: 57,
        columnNumber: 26
    }, this);
    if (format & 8) node = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("u", {
        children: node
    }, void 0, false, {
        fileName: "[project]/crtib-front/src/components/RichText.tsx",
        lineNumber: 58,
        columnNumber: 26
    }, this);
    if (format & 16) node = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
        children: node
    }, void 0, false, {
        fileName: "[project]/crtib-front/src/components/RichText.tsx",
        lineNumber: 59,
        columnNumber: 27
    }, this);
    if (format & 32) node = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sub", {
        children: node
    }, void 0, false, {
        fileName: "[project]/crtib-front/src/components/RichText.tsx",
        lineNumber: 60,
        columnNumber: 27
    }, this);
    if (format & 64) node = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
        children: node
    }, void 0, false, {
        fileName: "[project]/crtib-front/src/components/RichText.tsx",
        lineNumber: 61,
        columnNumber: 27
    }, this);
    return node;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderNodes(nodes) {
    if (!Array.isArray(nodes)) return null;
    return nodes.map((node, i)=>renderNode(node, i));
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderNode(node, key) {
    if (!node) return null;
    switch(node.type){
        case "text":
            {
                if (!node.text) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: applyFormat(node.text, node.format || 0)
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 78,
                    columnNumber: 16
                }, this);
            }
        case "paragraph":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: renderNodes(node.children)
            }, key, false, {
                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                lineNumber: 83,
                columnNumber: 14
            }, this);
        case "heading":
            {
                const Tag = node.tag || "h2";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                    children: renderNodes(node.children)
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 87,
                    columnNumber: 16
                }, this);
            }
        case "list":
            {
                const L = node.tag === "ol" ? "ol" : "ul";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(L, {
                    children: renderNodes(node.children)
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 92,
                    columnNumber: 16
                }, this);
            }
        case "listitem":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: renderNodes(node.children)
            }, key, false, {
                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                lineNumber: 95,
                columnNumber: 14
            }, this);
        case "link":
            {
                const rel = node.rel ?? undefined;
                const target = node.target ?? undefined;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: node.url || "",
                    rel: rel,
                    target: target,
                    children: renderNodes(node.children)
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 100,
                    columnNumber: 16
                }, this);
            }
        case "quote":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                children: renderNodes(node.children)
            }, key, false, {
                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                lineNumber: 105,
                columnNumber: 14
            }, this);
        case "code":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: node.value || ""
                }, void 0, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, key, false, {
                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                lineNumber: 107,
                columnNumber: 14
            }, this);
        case "horizontalrule":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, key, false, {
                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                lineNumber: 111,
                columnNumber: 14
            }, this);
        case "linebreak":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, key, false, {
                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                lineNumber: 113,
                columnNumber: 14
            }, this);
        case "upload":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const v = node.value;
                if (!v?.url) return null;
                const imageUrl = absUrl(v.url);
                const alt = v.alt || "";
                const caption = node.fields?.caption || "";
                const pos = node.fields?.position || "center";
                const posClass = {
                    left: "float-left mr-6 mb-4",
                    center: "mx-auto block",
                    right: "float-right ml-6 mb-4"
                }[pos] ?? "mx-auto block";
                if (caption) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: posClass,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imageUrl,
                                alt: alt
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                className: "text-sm text-gray-600 italic mt-2",
                                children: caption
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/crtib-front/src/components/RichText.tsx",
                        lineNumber: 129,
                        columnNumber: 18
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageUrl,
                    alt: alt,
                    className: posClass
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 136,
                    columnNumber: 16
                }, this);
            }
        case "block":
            {
                const blockType = node.fields?.blockType;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const f = node.fields ?? {};
                return renderBlock(blockType, f, key);
            }
        default:
            if (Array.isArray(node.children)) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: renderNodes(node.children)
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 147,
                    columnNumber: 16
                }, this);
            }
            return null;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(blockType, f, key) {
    switch(blockType){
        case "callout":
            {
                const typeClasses = {
                    info: "bg-blue-50 border-blue-500 text-blue-900",
                    warning: "bg-yellow-50 border-yellow-500 text-yellow-900",
                    success: "bg-green-50 border-green-500 text-green-900",
                    error: "bg-red-50 border-red-500 text-red-900"
                };
                const typeIcons = {
                    info: "â„¹ï¸",
                    warning: "âš ï¸",
                    success: "âœ…",
                    error: "âŒ"
                };
                const t = f.type || "info";
                const html = f.content ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$lib$2f$serializeLexical$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeLexical"])(f.content) : "";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `border-l-4 p-4 my-6 rounded-r-lg ${typeClasses[t] ?? typeClasses.info}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl mr-3",
                                children: typeIcons[t] ?? "â„¹ï¸"
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                dangerouslySetInnerHTML: {
                                    __html: html
                                }
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crtib-front/src/components/RichText.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 174,
                    columnNumber: 16
                }, this);
            }
        case "accordion":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const items = (f.items || []).map((item, i)=>({
                        id: `accordion-item-${i}`,
                        title: item.title || "",
                        content: item.content ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$lib$2f$serializeLexical$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeLexical"])(item.content) : ""
                    }));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    items: items
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 191,
                    columnNumber: 16
                }, this);
            }
        case "photoHeroCarousel":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const slides = (f.slides || []).map((slide, i)=>({
                        id: String(slide.id ?? `slide-${i}`),
                        imageUrl: getUploadUrl(slide.image),
                        alt: slide.alt || slide.title || "Slide",
                        eyebrow: slide.eyebrow || undefined,
                        title: slide.title || ""
                    }));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$home$2f$PhotoHeroCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhotoHeroCarousel"], {
                    slides: slides,
                    autoPlayMs: f.autoPlayMs ?? 5000
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 203,
                    columnNumber: 16
                }, this);
            }
        case "videoCards":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const videos = (f.videos || []).map((v, i)=>({
                        id: `video-${i}`,
                        title: v.title || "",
                        type: v.type || "youtube",
                        src: absUrl(v.src || "")
                    }));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$video$2f$VideoCardsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoCardsSection"], {
                    title: f.title || "",
                    videos: videos
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 214,
                    columnNumber: 16
                }, this);
            }
        case "activityReports":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const reports = (f.reports || []).map((r, i)=>({
                        id: `report-${i}`,
                        year: r.year || "",
                        pdfUrl: getUploadUrl(r.pdf)
                    }));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$reports$2f$ActivityReportsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivityReportsSection"], {
                    title: f.title || "",
                    reports: reports
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 224,
                    columnNumber: 16
                }, this);
            }
        case "partners":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const mapItem = (item, i)=>({
                        id: `partner-${i}`,
                        name: item.name || "",
                        logoUrl: getUploadUrl(item.logo) || undefined,
                        href: item.href || undefined
                    });
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$partners$2f$PartnersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartnersSection"], {
                    title: f.title || "",
                    associationsTitle: f.associationsTitle || "",
                    partners: (f.partners || []).map(mapItem),
                    associations: (f.associations || []).map(mapItem)
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 235,
                    columnNumber: 16
                }, this);
            }
        case "newsSection":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$news$2f$NewsSectionClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewsSectionClient"], {
                title: f.title || "",
                maxItems: f.maxItems || 2,
                variant: f.variant || "default",
                ctaHref: f.ctaHref || "/actualites"
            }, key, false, {
                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                lineNumber: 238,
                columnNumber: 14
            }, this);
        case "calculator":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const options = (f.options || []).map((o)=>o.label || "");
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const results = (f.results || []).map((r)=>({
                        label: r.label || "",
                        value: r.value || ""
                    }));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$calculator$2f$CalculatorSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalculatorSection"], {
                    title: f.title || "",
                    options: options,
                    results: results
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 248,
                    columnNumber: 16
                }, this);
            }
        case "htmlBlock":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "html-block my-6",
                dangerouslySetInnerHTML: {
                    __html: f.html || ""
                }
            }, key, false, {
                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                lineNumber: 251,
                columnNumber: 14
            }, this);
        case "timeline":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const items = (f.items || []).map((item, i)=>({
                        id: `timeline-item-${i}`,
                        year: item.year || "",
                        title: item.title || ""
                    }));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$timeline$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"], {
                    items: items,
                    highlightLast: f.highlightLast ?? true
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 262,
                    columnNumber: 16
                }, this);
            }
        case "dynamicGrid":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const columns = (f.columns || []).map((col)=>({
                        id: col.id,
                        label: col.label,
                        type: col.type,
                        config: {
                            precision: col.precision,
                            currency: col.currency || undefined
                        }
                    }));
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const rows = (f.rows || []).map((row, i)=>({
                        id: `row-${i}`,
                        values: row.values || {}
                    }));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$blocks$2f$DynamicGrid$2f$DynamicGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicGrid"], {
                    columns: columns,
                    rows: rows,
                    title: f.title || ""
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 281,
                    columnNumber: 16
                }, this);
            }
        case "clausesGrid":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const rows = (f.rows || []).map((row)=>({
                        number: row.number || "",
                        title: row.title || "",
                        date: row.date || "",
                        pdfUrl: getUploadUrl(row.pdf)
                    }));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$blocks$2f$ClausesGrid$2f$ClausesGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClausesGrid"], {
                    title: f.title || "",
                    rows: rows,
                    redirectLabel: f.redirectLabel || "",
                    redirectHref: f.redirectHref || ""
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 292,
                    columnNumber: 16
                }, this);
            }
        case "downloadGrid":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const documents = (f.documents || []).map((doc, i)=>({
                        id: `doc-${i}`,
                        numero: doc.numero || "",
                        titulo: doc.titulo || "",
                        data: doc.data || "",
                        versao: doc.versao || "",
                        links: {
                            ...doc.pdf?.url ? {
                                pdf: absUrl(doc.pdf.url)
                            } : {},
                            ...doc.rtf?.url ? {
                                rtf: absUrl(doc.rtf.url)
                            } : {},
                            ...doc.doc?.url ? {
                                doc: absUrl(doc.doc.url)
                            } : {},
                            ...doc.xls?.url ? {
                                xls: absUrl(doc.xls.url)
                            } : {},
                            ...doc.zip?.url ? {
                                zip: absUrl(doc.zip.url)
                            } : {}
                        }
                    }));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$DataGridDownloads$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataGridDownloads"], {
                    documents: documents,
                    pageSize: f.pageSize || 10
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 321,
                    columnNumber: 16
                }, this);
            }
        case "downloadLinks":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const items = (f.items || []).map((item, i)=>({
                        id: `dl-${i}`,
                        label: item.label || "",
                        fileUrl: getUploadUrl(item.file),
                        extension: item.file?.mimeType?.includes("pdf") ? "pdf" : item.file?.filename?.split(".").pop() || "pdf"
                    }));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$blocks$2f$DownloadLinks$2f$DownloadLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DownloadLinks"], {
                    title: f.title || "",
                    items: items
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 332,
                    columnNumber: 16
                }, this);
            }
        case "organogram":
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const mapOrgNode = (n, prefix)=>({
                        id: `${prefix}-${n.name}`.replace(/\s/g, "-").toLowerCase(),
                        name: n.name || "",
                        role: n.role || undefined,
                        photoUrl: getUploadUrl(n.photo),
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        children: (n.children || []).map((child, i)=>mapOrgNode(child, `${prefix}-child-${i}`))
                    });
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$src$2f$components$2f$organogram$2f$OrganogramChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrganogramChart"], {
                    root: mapOrgNode(f.root || {}, "org")
                }, key, false, {
                    fileName: "[project]/crtib-front/src/components/RichText.tsx",
                    lineNumber: 345,
                    columnNumber: 16
                }, this);
            }
        default:
            return null;
    }
}
function RichText(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "8cac02708b90cb7c6f1f17868fb74bbccbab516f6bf8f8f47cab4c9254bc9f5a") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8cac02708b90cb7c6f1f17868fb74bbccbab516f6bf8f8f47cab4c9254bc9f5a";
    }
    const { content, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    if (!content) {
        return null;
    }
    if (typeof content === "string") {
        const t2 = `rich-text ${className}`;
        let t3;
        if ($[1] !== content) {
            t3 = {
                __html: content
            };
            $[1] = content;
            $[2] = t3;
        } else {
            t3 = $[2];
        }
        let t4;
        if ($[3] !== t2 || $[4] !== t3) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t2,
                dangerouslySetInnerHTML: t3
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/RichText.tsx",
                lineNumber: 381,
                columnNumber: 12
            }, this);
            $[3] = t2;
            $[4] = t3;
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        return t4;
    }
    if (!content.root?.children) {
        return null;
    }
    const t2 = `rich-text ${className}`;
    let t3;
    if ($[6] !== content.root.children) {
        t3 = renderNodes(content.root.children);
        $[6] = content.root.children;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/RichText.tsx",
            lineNumber: 404,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_c = RichText;
var _c;
__turbopack_context__.k.register(_c, "RichText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=crtib-front_src_bdd5cff8._.js.map