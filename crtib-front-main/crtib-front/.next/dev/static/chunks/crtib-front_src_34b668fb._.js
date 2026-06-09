(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/crtib-front/src/lib/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Providers(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "8c88b39c595c6a92713ad9238841f09428dd445a66959cfca505cda9b727626e") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8c88b39c595c6a92713ad9238841f09428dd445a66959cfca505cda9b727626e";
    }
    const { children } = t0;
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_ProvidersUseState);
    let t1;
    if ($[1] !== children || $[2] !== queryClient) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/lib/providers.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = queryClient;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_s(Providers, "ay1VWVgaod/iSc2baFLKxesyL3c=");
_c = Providers;
function _ProvidersUseState() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
        defaultOptions: {
            queries: {
                staleTime: 60000,
                refetchOnWindowFocus: false
            }
        }
    });
}
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crtib-front/src/components/layout/HeaderWithNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderWithNav",
    ()=>HeaderWithNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/crtib-front/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// --- Icones dinamicos (configurados no CMS) ---------------------------------
const ICON_PATHS = {
    user: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
    document: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
    globe: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
    leaf: "M15 12a9.004 9.004 0 0 0-4.563-7.834A9.004 9.004 0 0 0 3 12a9.004 9.004 0 0 0 7.437 8.834A9.004 9.004 0 0 0 15 12Zm0 0a3 3 0 1 1-6 0m6 0H9m3-9v3m0 12v3",
    calendar: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
    building: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    book: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
    graduation: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.838 23.838 0 0 0-1.012 5.434c-.327.17-.65.348-.969.532m2.98-5.966L12 3.75l7.74 6.397",
    "external-link": "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
    star: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
    settings: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.431.992a7.723 7.723 0 0 1 0 .255c-.007.378.138.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.212-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    list: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
};
function PageIconSvg(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "fb255d8cc9f1832ca81d987c6a3c283d43b99b8f536ed7c180d84107dfbe399a") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fb255d8cc9f1832ca81d987c6a3c283d43b99b8f536ed7c180d84107dfbe399a";
    }
    const { icon, className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    const path = icon ? ICON_PATHS[icon] : ICON_PATHS.list;
    const t2 = `${className} flex-shrink-0`;
    let t3;
    if ($[1] !== path) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: path
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[1] = path;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== t2 || $[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: t2,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 1.5,
            viewBox: "0 0 24 24",
            children: t3
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 51,
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
_c = PageIconSvg;
// --- Desktop Nav Item --------------------------------------------------------
function NavItemDesktop(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "fb255d8cc9f1832ca81d987c6a3c283d43b99b8f536ed7c180d84107dfbe399a") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fb255d8cc9f1832ca81d987c6a3c283d43b99b8f536ed7c180d84107dfbe399a";
    }
    const { page } = t0;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasChildren = !!page.children?.length;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "NavItemDesktop[useEffect()]": ()=>{
                const handleClick = function handleClick(e) {
                    if (ref.current && !ref.current.contains(e.target)) {
                        setOpen(false);
                    }
                };
                document.addEventListener("mousedown", handleClick);
                return ()=>document.removeEventListener("mousedown", handleClick);
            }
        })["NavItemDesktop[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] !== page.title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: page.title
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[3] = page.title;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== hasChildren || $[6] !== open || $[7] !== page.icon) {
        t4 = hasChildren ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: `w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 109,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageIconSvg, {
            icon: page.icon
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 109,
            columnNumber: 144
        }, this);
        $[5] = hasChildren;
        $[6] = open;
        $[7] = page.icon;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#08AA86] group-hover:text-[#068a6c] transition-colors",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const itemContent = t5;
    if (!hasChildren) {
        const t6 = `/${page.slug}`;
        let t7;
        if ($[12] !== itemContent || $[13] !== t6) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t6,
                className: "group px-5 py-2 flex items-center border-l border-gray-200 first:border-l-0 h-full hover:bg-gray-50 transition-colors",
                children: itemContent
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                lineNumber: 131,
                columnNumber: 12
            }, this);
            $[12] = itemContent;
            $[13] = t6;
            $[14] = t7;
        } else {
            t7 = $[14];
        }
        return t7;
    }
    let t6;
    let t7;
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "NavItemDesktop[<div>.onMouseEnter]": ()=>setOpen(true)
        })["NavItemDesktop[<div>.onMouseEnter]"];
        t7 = ({
            "NavItemDesktop[<div>.onMouseLeave]": ()=>setOpen(false)
        })["NavItemDesktop[<div>.onMouseLeave]"];
        t8 = ({
            "NavItemDesktop[<button>.onClick]": ()=>setOpen(_NavItemDesktopButtonOnClickSetOpen)
        })["NavItemDesktop[<button>.onClick]"];
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t6 = $[15];
        t7 = $[16];
        t8 = $[17];
    }
    let t9;
    if ($[18] !== itemContent) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t8,
            className: "px-5 py-2 flex items-center border-l border-gray-200 first:border-l-0 h-full hover:bg-gray-50 transition-colors",
            children: itemContent
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 163,
            columnNumber: 10
        }, this);
        $[18] = itemContent;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== open || $[21] !== page.children) {
        t10 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onMouseEnter: {
                "NavItemDesktop[<div>.onMouseEnter]": ()=>setOpen(true)
            }["NavItemDesktop[<div>.onMouseEnter]"],
            onMouseLeave: {
                "NavItemDesktop[<div>.onMouseLeave]": ()=>setOpen(false)
            }["NavItemDesktop[<div>.onMouseLeave]"],
            className: "absolute left-0 top-full mt-0 min-w-[220px] bg-white border border-gray-200 shadow-lg z-50",
            children: page.children.map({
                "NavItemDesktop[page.children.map()]": (child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${child.slug}`,
                        onClick: {
                            "NavItemDesktop[page.children.map() > <Link>.onClick]": ()=>setOpen(false)
                        }["NavItemDesktop[page.children.map() > <Link>.onClick]"],
                        className: "flex items-center justify-between px-5 py-3.5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors group/item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-semibold tracking-[0.12em] uppercase text-[#08AA86] group-hover/item:text-[#068a6c] transition-colors",
                                children: child.title
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                                lineNumber: 178,
                                columnNumber: 213
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#08AA86] group-hover/item:text-[#068a6c] transition-colors ml-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageIconSvg, {
                                    icon: child.icon
                                }, void 0, false, {
                                    fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                                    lineNumber: 178,
                                    columnNumber: 458
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                                lineNumber: 178,
                                columnNumber: 370
                            }, this)
                        ]
                    }, child.id, true, {
                        fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                        lineNumber: 176,
                        columnNumber: 57
                    }, this)
            }["NavItemDesktop[page.children.map()]"])
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 171,
            columnNumber: 19
        }, this);
        $[20] = open;
        $[21] = page.children;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "relative group",
            onMouseEnter: t6,
            onMouseLeave: t7,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t9;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    return t11;
}
_s(NavItemDesktop, "wl9VvfhnMVWQ+kCekFjcRPEi3/0=");
_c1 = NavItemDesktop;
// --- Mobile Nav Item ---------------------------------------------------------
function _NavItemDesktopButtonOnClickSetOpen(v) {
    return !v;
}
function NavItemMobile(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "fb255d8cc9f1832ca81d987c6a3c283d43b99b8f536ed7c180d84107dfbe399a") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fb255d8cc9f1832ca81d987c6a3c283d43b99b8f536ed7c180d84107dfbe399a";
    }
    const { page, onClose } = t0;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasChildren = !!page.children?.length;
    if (!hasChildren) {
        const t1 = `/${page.slug}`;
        let t2;
        if ($[1] !== page.title) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-semibold tracking-[0.12em] uppercase text-[#08AA86]",
                children: page.title
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                lineNumber: 220,
                columnNumber: 12
            }, this);
            $[1] = page.title;
            $[2] = t2;
        } else {
            t2 = $[2];
        }
        let t3;
        if ($[3] !== page.icon) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[#08AA86]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageIconSvg, {
                    icon: page.icon
                }, void 0, false, {
                    fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                    lineNumber: 228,
                    columnNumber: 45
                }, this)
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                lineNumber: 228,
                columnNumber: 12
            }, this);
            $[3] = page.icon;
            $[4] = t3;
        } else {
            t3 = $[4];
        }
        let t4;
        if ($[5] !== onClose || $[6] !== t1 || $[7] !== t2 || $[8] !== t3) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t1,
                onClick: onClose,
                className: "flex items-center justify-between px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors group",
                children: [
                    t2,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                lineNumber: 236,
                columnNumber: 12
            }, this);
            $[5] = onClose;
            $[6] = t1;
            $[7] = t2;
            $[8] = t3;
            $[9] = t4;
        } else {
            t4 = $[9];
        }
        return t4;
    }
    let t1;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "NavItemMobile[<button>.onClick]": ()=>setOpen(_NavItemMobileButtonOnClickSetOpen)
        })["NavItemMobile[<button>.onClick]"];
        $[10] = t1;
    } else {
        t1 = $[10];
    }
    let t2;
    if ($[11] !== page.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] font-semibold tracking-[0.12em] uppercase text-[#08AA86]",
            children: page.title
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 258,
            columnNumber: 10
        }, this);
        $[11] = page.title;
        $[12] = t2;
    } else {
        t2 = $[12];
    }
    const t3 = `w-5 h-5 text-[#08AA86] transition-transform duration-200 ${open ? "rotate-180" : ""}`;
    let t4;
    if ($[13] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: t3
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 267,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== t2 || $[16] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t1,
            className: "w-full flex items-center justify-between px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors",
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 275,
            columnNumber: 10
        }, this);
        $[15] = t2;
        $[16] = t4;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] !== onClose || $[19] !== open || $[20] !== page.children) {
        t6 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50",
            children: page.children.map({
                "NavItemMobile[page.children.map()]": (child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${child.slug}`,
                        onClick: onClose,
                        className: "flex items-center justify-between pl-10 pr-6 py-3.5 border-b border-gray-100 hover:bg-gray-100 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-semibold tracking-[0.12em] uppercase text-[#08AA86]",
                                children: child.title
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                                lineNumber: 285,
                                columnNumber: 244
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#08AA86]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageIconSvg, {
                                    icon: child.icon
                                }, void 0, false, {
                                    fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                                    lineNumber: 285,
                                    columnNumber: 384
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                                lineNumber: 285,
                                columnNumber: 351
                            }, this)
                        ]
                    }, child.id, true, {
                        fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                        lineNumber: 285,
                        columnNumber: 56
                    }, this)
            }["NavItemMobile[page.children.map()]"])
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 284,
            columnNumber: 18
        }, this);
        $[18] = onClose;
        $[19] = open;
        $[20] = page.children;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] !== t5 || $[23] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true);
        $[22] = t5;
        $[23] = t6;
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    return t7;
}
_s1(NavItemMobile, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c2 = NavItemMobile;
// --- Header Principal (Logo centralizada em cima, menu embaixo) --------------
function _NavItemMobileButtonOnClickSetOpen(v) {
    return !v;
}
function HeaderWithNav(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "fb255d8cc9f1832ca81d987c6a3c283d43b99b8f536ed7c180d84107dfbe399a") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fb255d8cc9f1832ca81d987c6a3c283d43b99b8f536ed7c180d84107dfbe399a";
    }
    const { pages } = t0;
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logo.svg",
                    alt: "CRTI-B",
                    width: 220,
                    height: 52,
                    priority: true,
                    className: "h-14 w-auto"
                }, void 0, false, {
                    fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                    lineNumber: 327,
                    columnNumber: 67
                }, this)
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                lineNumber: 327,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 327,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== pages) {
        t2 = pages.map(_HeaderWithNavPagesMap);
        $[2] = pages;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden lg:flex items-center justify-center pb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-stretch divide-x divide-gray-200",
                children: t2
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                lineNumber: 342,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 342,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "HeaderWithNav[<button>.onClick]": ()=>setMobileOpen(true)
        })["HeaderWithNav[<button>.onClick]"];
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t4,
            className: "lg:hidden absolute right-4 top-5 p-2 text-[#08AA86] hover:bg-gray-50 rounded transition-colors",
            "aria-label": "Abrir menu",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                lineNumber: 359,
                columnNumber: 162
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 359,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t3) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-white border-b border-gray-200 sticky top-0 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t1,
                    t3,
                    t5
                ]
            }, void 0, true, {
                fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                lineNumber: 366,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 366,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== mobileOpen || $[11] !== pages) {
        t7 = mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 lg:hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/40",
                    onClick: {
                        "HeaderWithNav[<div>.onClick]": ()=>setMobileOpen(false)
                    }["HeaderWithNav[<div>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                    lineNumber: 374,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-0 top-0 h-full w-[300px] bg-white flex flex-col shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.svg",
                                    alt: "CRTI-B",
                                    width: 140,
                                    height: 33,
                                    className: "h-8 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                                    lineNumber: 376,
                                    columnNumber: 221
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "HeaderWithNav[<button>.onClick]": ()=>setMobileOpen(false)
                                    }["HeaderWithNav[<button>.onClick]"],
                                    className: "p-1 text-gray-500 hover:text-[#08AA86] transition-colors",
                                    "aria-label": "Fechar menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                                        lineNumber: 378,
                                        columnNumber: 143
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                                    lineNumber: 376,
                                    columnNumber: 306
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                            lineNumber: 376,
                            columnNumber: 135
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex-1 overflow-y-auto",
                            children: pages.map({
                                "HeaderWithNav[pages.map()]": (page_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItemMobile, {
                                        page: page_0,
                                        onClose: {
                                            "HeaderWithNav[pages.map() > <NavItemMobile>.onClose]": ()=>setMobileOpen(false)
                                        }["HeaderWithNav[pages.map() > <NavItemMobile>.onClose]"]
                                    }, page_0.id, false, {
                                        fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                                        lineNumber: 379,
                                        columnNumber: 53
                                    }, this)
                            }["HeaderWithNav[pages.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                            lineNumber: 378,
                            columnNumber: 183
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
                    lineNumber: 376,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
            lineNumber: 374,
            columnNumber: 24
        }, this);
        $[10] = mobileOpen;
        $[11] = pages;
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
_s2(HeaderWithNav, "33pz4tKGxA4/1e2zOoGo8gBQzP0=");
_c3 = HeaderWithNav;
function _HeaderWithNavPagesMap(page) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crtib$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItemDesktop, {
        page: page
    }, page.id, false, {
        fileName: "[project]/crtib-front/src/components/layout/HeaderWithNav.tsx",
        lineNumber: 401,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PageIconSvg");
__turbopack_context__.k.register(_c1, "NavItemDesktop");
__turbopack_context__.k.register(_c2, "NavItemMobile");
__turbopack_context__.k.register(_c3, "HeaderWithNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=crtib-front_src_34b668fb._.js.map