"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _contracts_tokens_IpToken_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contracts/tokens/IpToken.json */ \"../contracts/tokens/IpToken.json\");\n/* harmony import */ var _contracts_oracles_IporOracle_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contracts/oracles/IporOracle.json */ \"../contracts/oracles/IporOracle.json\");\n/* harmony import */ var _contracts_amm_pool_Joseph_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contracts/amm/pool/Joseph.json */ \"../contracts/amm/pool/Joseph.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-minimal-pie-chart */ \"./node_modules/react-minimal-pie-chart/dist/index.js\");\n/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_8__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    // this is for Rinkeby, for reference Mainnet address is: wss://mainnet.infura.io/ws/v3/db51ea2d48cd4c7aae46d876b1e1dab3\n    var web3 = new (web3__WEBPACK_IMPORTED_MODULE_8___default())(new (web3__WEBPACK_IMPORTED_MODULE_8___default().providers.WebsocketProvider)(\"wss://rinkeby.infura.io/ws/v3/db51ea2d48cd4c7aae46d876b1e1dab3\"));\n    // token abi stuff\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null), tokenAmount = ref[0], setTokenAmount = ref[1];\n    // oracle abi stuff\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null), oracleStuff1 = ref1[0], setOracleStuff = ref1[1];\n    // joseph abi stuff\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null), josephContent = ref2[0], setJosephContent = ref2[1];\n    // log stuff\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null), logState = ref3[0], setLogState = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        function fetchJosephStuff() {\n            return _fetchJosephStuff.apply(this, arguments);\n        }\n        function _fetchJosephStuff() {\n            _fetchJosephStuff = _asyncToGenerator(_Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var tokenContractAddress, josephContract, josephStuff;\n                return _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!(typeof web3.eth !== \"undefined\")) {\n                                _ctx.next = 14;\n                                break;\n                            }\n                            tokenContractAddress = \"0x70928B27463F9fd6fD84ab2b53966Bcfd335B546\";\n                            josephContract = new web3.eth.Contract(_contracts_amm_pool_Joseph_json__WEBPACK_IMPORTED_MODULE_6__, tokenContractAddress);\n                            _ctx.prev = 3;\n                            _ctx.next = 6;\n                            return josephContract.methods.getRedeemFeeRate().call();\n                        case 6:\n                            josephStuff = _ctx.sent;\n                            setJosephContent(web3.utils.fromWei(josephStuff));\n                            _ctx.next = 14;\n                            break;\n                        case 10:\n                            _ctx.prev = 10;\n                            _ctx.t0 = _ctx[\"catch\"](3);\n                            console.log(\"errrorrr: \", _ctx.t0);\n                            return _ctx.abrupt(\"return\");\n                        case 14:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        3,\n                        10\n                    ]\n                ]);\n            }));\n            return _fetchJosephStuff.apply(this, arguments);\n        }\n        function fetchOracleStuff() {\n            return _fetchOracleStuff.apply(this, arguments);\n        }\n        function _fetchOracleStuff() {\n            _fetchOracleStuff = _asyncToGenerator(_Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var tokenContractAddress, oracleContract, randomHolder, oracleStuff;\n                return _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!(typeof web3.eth !== \"undefined\")) {\n                                _ctx.next = 15;\n                                break;\n                            }\n                            tokenContractAddress = \"0x1dF7084A1C9905178D539753c066a21E9cCfB90c\";\n                            oracleContract = new web3.eth.Contract(_contracts_oracles_IporOracle_json__WEBPACK_IMPORTED_MODULE_5__, tokenContractAddress);\n                            randomHolder = \"0x82077d15b0b345e9df10bc3f4effc0cf9ba61ff2\";\n                            _ctx.prev = 4;\n                            _ctx.next = 7;\n                            return oracleContract.methods.owner().call();\n                        case 7:\n                            oracleStuff = _ctx.sent;\n                            setOracleStuff(oracleStuff);\n                            _ctx.next = 15;\n                            break;\n                        case 11:\n                            _ctx.prev = 11;\n                            _ctx.t0 = _ctx[\"catch\"](4);\n                            console.log(\"errrorrr: \", _ctx.t0);\n                            return _ctx.abrupt(\"return\");\n                        case 15:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        4,\n                        11\n                    ]\n                ]);\n            }));\n            return _fetchOracleStuff.apply(this, arguments);\n        }\n        function fetchTokenHoldings() {\n            return _fetchTokenHoldings.apply(this, arguments);\n        }\n        function _fetchTokenHoldings() {\n            _fetchTokenHoldings = _asyncToGenerator(_Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var tokenContractAddress, tokenContract, randomHolder, tokenHoldings;\n                return _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!(typeof web3.eth !== \"undefined\")) {\n                                _ctx.next = 15;\n                                break;\n                            }\n                            tokenContractAddress = \"0xB3fBf885c2713537BcB699be129dfc2Ad2DE84b2\";\n                            tokenContract = new web3.eth.Contract(_contracts_tokens_IpToken_json__WEBPACK_IMPORTED_MODULE_4__, tokenContractAddress);\n                            randomHolder = \"0x82077d15b0b345e9df10bc3f4effc0cf9ba61ff2\";\n                            _ctx.prev = 4;\n                            _ctx.next = 7;\n                            return tokenContract.methods.balanceOf(randomHolder).call();\n                        case 7:\n                            tokenHoldings = _ctx.sent;\n                            setTokenAmount(web3.utils.fromWei(tokenHoldings));\n                            _ctx.next = 15;\n                            break;\n                        case 11:\n                            _ctx.prev = 11;\n                            _ctx.t0 = _ctx[\"catch\"](4);\n                            console.log(\"errrorrr: \", _ctx.t0);\n                            return _ctx.abrupt(\"return\");\n                        case 15:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        4,\n                        11\n                    ]\n                ]);\n            }));\n            return _fetchTokenHoldings.apply(this, arguments);\n        }\n        fetchTokenHoldings();\n        fetchOracleStuff();\n        fetchJosephStuff();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        function getLogs() {\n            return _getLogs.apply(this, arguments);\n        }\n        function _getLogs() {\n            _getLogs = _asyncToGenerator(_Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var logStuff;\n                return _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!(typeof web3.eth !== \"undefined\")) {\n                                _ctx.next = 13;\n                                break;\n                            }\n                            _ctx.prev = 1;\n                            _ctx.next = 4;\n                            return web3.eth.getPastLogs({\n                                fromBlock: \"13856597\",\n                                toBlock: \"14476841\",\n                                address: \"0x1F98431c8aD98523631AE4a59f267346ea31F984\",\n                                topics: [\n                                    \"0x783cca1c0412dd0d695e784568c96da2e9c22ff989357a2e8b1d9b2b4e6b7118\",\n                                    \"0x783cca1c0412dd0d695e784568c96da2e9c22ff989357a2e8b1d9b2b4e6b7118\"\n                                ]\n                            });\n                        case 4:\n                            logStuff = _ctx.sent;\n                            console.log(logStuff);\n                            setLogState(logStuff);\n                            _ctx.next = 13;\n                            break;\n                        case 9:\n                            _ctx.prev = 9;\n                            _ctx.t0 = _ctx[\"catch\"](1);\n                            console.log(\"errrorrr: \", _ctx.t0);\n                            return _ctx.abrupt(\"return\");\n                        case 13:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        1,\n                        9\n                    ]\n                ]);\n            }));\n            return _getLogs.apply(this, arguments);\n        }\n        getLogs();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"IPOR Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon-ipor.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),\n                        children: \"IPOR Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                        children: \"IPORs performance over time\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Token Amount: \",\n                            tokenAmount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Oracle Stuff: \",\n                            oracleStuff1\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Joseph Content: \",\n                            josephContent\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"Logs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: logState\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_10__.PieChart, {\n                data: [\n                    {\n                        title: \"One\",\n                        value: 10,\n                        color: \"#E38627\"\n                    },\n                    {\n                        title: \"Two\",\n                        value: 15,\n                        color: \"#C13C37\"\n                    },\n                    {\n                        title: \"Three\",\n                        value: 20,\n                        color: \"#6A2135\"\n                    }, \n                ],\n                radius: 10\n            }, void 0, false, {\n                fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"o9V9E0x8q5rFxwObmsv7EN6Xf/U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsR0FBQztrQ0FBRTFDLFFBQVE7Ozs7OzRCQUFLOzs7Ozs7b0JBQ1o7MEJBQ1AsOERBQUNaLDhEQUFRO2dCQUNQd0QsSUFBSSxFQUFFO29CQUNKO3dCQUFFWCxLQUFLLEVBQUUsS0FBSzt3QkFBRVksS0FBSyxFQUFFLEVBQUU7d0JBQUVDLEtBQUssRUFBRSxTQUFTO3FCQUFFO29CQUM3Qzt3QkFBRWIsS0FBSyxFQUFFLEtBQUs7d0JBQUVZLEtBQUssRUFBRSxFQUFFO3dCQUFFQyxLQUFLLEVBQUUsU0FBUztxQkFBRTtvQkFDN0M7d0JBQUViLEtBQUssRUFBRSxPQUFPO3dCQUFFWSxLQUFLLEVBQUUsRUFBRTt3QkFBRUMsS0FBSyxFQUFFLFNBQVM7cUJBQUU7aUJBQ2hEO2dCQUNEQyxNQUFNLEVBQUUsRUFBRTs7Ozs7b0JBQ1Y7WUFBQSxHQUNKOzs7Ozs7WUFBTSxDQUNQO0NBQ0Y7R0FqSXVCekQsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgVG9rZW5BQkkgZnJvbSAnLi4vLi4vY29udHJhY3RzL3Rva2Vucy9JcFRva2VuLmpzb24nXG5pbXBvcnQgT3JhY2xlQUJJIGZyb20gJy4uLy4uL2NvbnRyYWN0cy9vcmFjbGVzL0lwb3JPcmFjbGUuanNvbidcbmltcG9ydCBKb3NlcGhBQkkgZnJvbSAnLi4vLi4vY29udHJhY3RzL2FtbS9wb29sL0pvc2VwaC5qc29uJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGllQ2hhcnQgfSBmcm9tICdyZWFjdC1taW5pbWFsLXBpZS1jaGFydCc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gdGhpcyBpcyBmb3IgUmlua2VieSwgZm9yIHJlZmVyZW5jZSBNYWlubmV0IGFkZHJlc3MgaXM6IHdzczovL21haW5uZXQuaW5mdXJhLmlvL3dzL3YzL2RiNTFlYTJkNDhjZDRjN2FhZTQ2ZDg3NmIxZTFkYWIzXG4gIGxldCB3ZWIzID0gbmV3IFdlYjMobmV3IFdlYjMucHJvdmlkZXJzLldlYnNvY2tldFByb3ZpZGVyKFwid3NzOi8vcmlua2VieS5pbmZ1cmEuaW8vd3MvdjMvZGI1MWVhMmQ0OGNkNGM3YWFlNDZkODc2YjFlMWRhYjNcIikpO1xuICBcbiAgLy8gdG9rZW4gYWJpIHN0dWZmXG4gIGNvbnN0IFt0b2tlbkFtb3VudCwgc2V0VG9rZW5BbW91bnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuICAvLyBvcmFjbGUgYWJpIHN0dWZmXG4gIGNvbnN0IFtvcmFjbGVTdHVmZiwgc2V0T3JhY2xlU3R1ZmZdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gam9zZXBoIGFiaSBzdHVmZlxuICBjb25zdCBbam9zZXBoQ29udGVudCwgc2V0Sm9zZXBoQ29udGVudF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIC8vIGxvZyBzdHVmZlxuICBjb25zdCBbbG9nU3RhdGUsIHNldExvZ1N0YXRlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoSm9zZXBoU3R1ZmYoKSB7XG4gICAgICBpZiAodHlwZW9mIHdlYjMuZXRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBUb2tlbiBDb250cmFjdCBBZGRyZXNzXG4gICAgICAgIGNvbnN0IHRva2VuQ29udHJhY3RBZGRyZXNzID0gXCIweDcwOTI4QjI3NDYzRjlmZDZmRDg0YWIyYjUzOTY2QmNmZDMzNUI1NDZcIjtcbiAgICAgICAgLy8gSm9zZXBoIENvbnRyYWN0IFxuICAgICAgICBsZXQgam9zZXBoQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoSm9zZXBoQUJJLCB0b2tlbkNvbnRyYWN0QWRkcmVzcyk7XG4gICAgICAgIC8vIFB1YmxpYyBBZGRyZXNzIG9mIFRva2VuIEhvbGRlclxuICAgICAgICAvL2NvbnN0IHJhbmRvbUhvbGRlciA9IFwiMHg4MjA3N2QxNWIwYjM0NWU5ZGYxMGJjM2Y0ZWZmYzBjZjliYTYxZmYyXCJcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqb3NlcGhTdHVmZiA9IGF3YWl0IGpvc2VwaENvbnRyYWN0Lm1ldGhvZHMuZ2V0UmVkZWVtRmVlUmF0ZSgpLmNhbGwoKVxuICAgICAgICAgIHNldEpvc2VwaENvbnRlbnQod2ViMy51dGlscy5mcm9tV2VpKGpvc2VwaFN0dWZmKSlcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVycnJvcnJyOiBcIiwgZXJyKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaE9yYWNsZVN0dWZmKCkge1xuICAgICAgaWYgKHR5cGVvZiB3ZWIzLmV0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gVG9rZW4gQ29udHJhY3QgQWRkcmVzc1xuICAgICAgICBjb25zdCB0b2tlbkNvbnRyYWN0QWRkcmVzcyA9IFwiMHgxZEY3MDg0QTFDOTkwNTE3OEQ1Mzk3NTNjMDY2YTIxRTljQ2ZCOTBjXCI7XG4gICAgICAgIC8vIE9yYWNsZSBDb250cmFjdCBcbiAgICAgICAgbGV0IG9yYWNsZUNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KE9yYWNsZUFCSSwgdG9rZW5Db250cmFjdEFkZHJlc3MpO1xuICAgICAgICAvLyBQdWJsaWMgQWRkcmVzcyBvZiBUb2tlbiBIb2xkZXJcbiAgICAgICAgY29uc3QgcmFuZG9tSG9sZGVyID0gXCIweDgyMDc3ZDE1YjBiMzQ1ZTlkZjEwYmMzZjRlZmZjMGNmOWJhNjFmZjJcIlxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG9yYWNsZVN0dWZmID0gYXdhaXQgb3JhY2xlQ29udHJhY3QubWV0aG9kcy5vd25lcigpLmNhbGwoKVxuICAgICAgICAgIHNldE9yYWNsZVN0dWZmKG9yYWNsZVN0dWZmKVxuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9ycnI6IFwiLCBlcnIpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9rZW5Ib2xkaW5ncygpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2ViMy5ldGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFRva2VuIENvbnRyYWN0IEFkZHJlc3NcbiAgICAgICAgY29uc3QgdG9rZW5Db250cmFjdEFkZHJlc3MgPSBcIjB4QjNmQmY4ODVjMjcxMzUzN0JjQjY5OWJlMTI5ZGZjMkFkMkRFODRiMlwiO1xuICAgICAgICAvLyBUb2tlbiBDb250cmFjdCBcbiAgICAgICAgbGV0IHRva2VuQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVG9rZW5BQkksIHRva2VuQ29udHJhY3RBZGRyZXNzKTtcbiAgICAgICAgLy8gUHVibGljIEFkZHJlc3Mgb2YgVG9rZW4gSG9sZGVyXG4gICAgICAgIGNvbnN0IHJhbmRvbUhvbGRlciA9IFwiMHg4MjA3N2QxNWIwYjM0NWU5ZGYxMGJjM2Y0ZWZmYzBjZjliYTYxZmYyXCJcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB0b2tlbkhvbGRpbmdzID0gYXdhaXQgdG9rZW5Db250cmFjdC5tZXRob2RzLmJhbGFuY2VPZihyYW5kb21Ib2xkZXIpLmNhbGwoKVxuICAgICAgICAgIHNldFRva2VuQW1vdW50KHdlYjMudXRpbHMuZnJvbVdlaSh0b2tlbkhvbGRpbmdzKSlcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVycnJvcnJyOiBcIiwgZXJyKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaFRva2VuSG9sZGluZ3MoKVxuICAgIGZldGNoT3JhY2xlU3R1ZmYoKVxuICAgIGZldGNoSm9zZXBoU3R1ZmYoKVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldExvZ3MoKSB7XG4gICAgICBpZiAodHlwZW9mIHdlYjMuZXRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGxvZ1N0dWZmID0gYXdhaXQgd2ViMy5ldGguZ2V0UGFzdExvZ3Moe1xuICAgICAgICAgICAgZnJvbUJsb2NrOiAnMTM4NTY1OTcnLFxuICAgICAgICAgICAgdG9CbG9jazogJzE0NDc2ODQxJyxcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiMHgxRjk4NDMxYzhhRDk4NTIzNjMxQUU0YTU5ZjI2NzM0NmVhMzFGOTg0XCIsXG4gICAgICAgICAgICB0b3BpY3M6IFtcIjB4NzgzY2NhMWMwNDEyZGQwZDY5NWU3ODQ1NjhjOTZkYTJlOWMyMmZmOTg5MzU3YTJlOGIxZDliMmI0ZTZiNzExOFwiLCBcIjB4NzgzY2NhMWMwNDEyZGQwZDY5NWU3ODQ1NjhjOTZkYTJlOWMyMmZmOTg5MzU3YTJlOGIxZDliMmI0ZTZiNzExOFwiXVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2cobG9nU3R1ZmYpXG4gICAgICAgICAgc2V0TG9nU3RhdGUobG9nU3R1ZmYpXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJlcnJyb3JycjogXCIsIGVycilcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgfVxuICAgIGdldExvZ3MoKVxuICB9LCBbXSlcblxuIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SVBPUiBEYXNoYm9hcmQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24taXBvci5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBJUE9SIERhc2hib2FyZFxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBJUE9ScyBwZXJmb3JtYW5jZSBvdmVyIHRpbWVcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5Ub2tlbiBBbW91bnQ6IHt0b2tlbkFtb3VudH08L3A+XG4gICAgICAgIDxwPk9yYWNsZSBTdHVmZjoge29yYWNsZVN0dWZmfTwvcD5cbiAgICAgICAgPHA+Sm9zZXBoIENvbnRlbnQ6IHtqb3NlcGhDb250ZW50fTwvcD5cblxuICAgICAgICA8cD5Mb2dzPC9wPlxuICAgICAgICA8cD57bG9nU3RhdGV9PC9wPlxuICAgICAgPC9tYWluPlxuICAgICAgPFBpZUNoYXJ0XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7IHRpdGxlOiAnT25lJywgdmFsdWU6IDEwLCBjb2xvcjogJyNFMzg2MjcnIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ1R3bycsIHZhbHVlOiAxNSwgY29sb3I6ICcjQzEzQzM3JyB9LFxuICAgICAgICAgIHsgdGl0bGU6ICdUaHJlZScsIHZhbHVlOiAyMCwgY29sb3I6ICcjNkEyMTM1JyB9LFxuICAgICAgICBdfVxuICAgICAgICByYWRpdXM9ezEwfVxuICAgICAgLz47XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJUb2tlbkFCSSIsIk9yYWNsZUFCSSIsIkpvc2VwaEFCSSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGllQ2hhcnQiLCJXZWIzIiwiSG9tZSIsIndlYjMiLCJwcm92aWRlcnMiLCJXZWJzb2NrZXRQcm92aWRlciIsInRva2VuQW1vdW50Iiwic2V0VG9rZW5BbW91bnQiLCJvcmFjbGVTdHVmZiIsInNldE9yYWNsZVN0dWZmIiwiam9zZXBoQ29udGVudCIsInNldEpvc2VwaENvbnRlbnQiLCJsb2dTdGF0ZSIsInNldExvZ1N0YXRlIiwiZmV0Y2hKb3NlcGhTdHVmZiIsInRva2VuQ29udHJhY3RBZGRyZXNzIiwiam9zZXBoQ29udHJhY3QiLCJqb3NlcGhTdHVmZiIsImV0aCIsIkNvbnRyYWN0IiwibWV0aG9kcyIsImdldFJlZGVlbUZlZVJhdGUiLCJjYWxsIiwidXRpbHMiLCJmcm9tV2VpIiwiY29uc29sZSIsImxvZyIsImZldGNoT3JhY2xlU3R1ZmYiLCJvcmFjbGVDb250cmFjdCIsInJhbmRvbUhvbGRlciIsIm93bmVyIiwiZmV0Y2hUb2tlbkhvbGRpbmdzIiwidG9rZW5Db250cmFjdCIsInRva2VuSG9sZGluZ3MiLCJiYWxhbmNlT2YiLCJnZXRMb2dzIiwibG9nU3R1ZmYiLCJnZXRQYXN0TG9ncyIsImZyb21CbG9jayIsInRvQmxvY2siLCJhZGRyZXNzIiwidG9waWNzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInAiLCJkZXNjcmlwdGlvbiIsImRhdGEiLCJ2YWx1ZSIsImNvbG9yIiwicmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});