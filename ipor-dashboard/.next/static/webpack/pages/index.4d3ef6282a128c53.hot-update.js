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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _contracts_tokens_IpToken_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contracts/tokens/IpToken.json */ \"../contracts/tokens/IpToken.json\");\n/* harmony import */ var _contracts_oracles_IporOracle_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contracts/oracles/IporOracle.json */ \"../contracts/oracles/IporOracle.json\");\n/* harmony import */ var _contracts_amm_pool_Joseph_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contracts/amm/pool/Joseph.json */ \"../contracts/amm/pool/Joseph.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-minimal-pie-chart */ \"./node_modules/react-minimal-pie-chart/dist/index.js\");\n/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_8__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    // this is for Rinkeby, for reference Mainnet address is: wss://mainnet.infura.io/ws/v3/db51ea2d48cd4c7aae46d876b1e1dab3\n    var web3 = new (web3__WEBPACK_IMPORTED_MODULE_8___default())(new (web3__WEBPACK_IMPORTED_MODULE_8___default().providers.WebsocketProvider)(\"wss://rinkeby.infura.io/ws/v3/db51ea2d48cd4c7aae46d876b1e1dab3\"));\n    // token abi stuff\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null), tokenAmount = ref[0], setTokenAmount = ref[1];\n    // oracle abi stuff\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null), oracleStuff1 = ref1[0], setOracleStuff = ref1[1];\n    // joseph abi stuff\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null), josephContent = ref2[0], setJosephContent = ref2[1];\n    // log stuff\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null), logState = ref3[0], setLogState = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        function fetchJosephStuff() {\n            return _fetchJosephStuff.apply(this, arguments);\n        }\n        function _fetchJosephStuff() {\n            _fetchJosephStuff = _asyncToGenerator(_Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var tokenContractAddress, josephContract, josephStuff;\n                return _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!(typeof web3.eth !== \"undefined\")) {\n                                _ctx.next = 14;\n                                break;\n                            }\n                            tokenContractAddress = \"0x70928B27463F9fd6fD84ab2b53966Bcfd335B546\";\n                            josephContract = new web3.eth.Contract(_contracts_amm_pool_Joseph_json__WEBPACK_IMPORTED_MODULE_6__, tokenContractAddress);\n                            _ctx.prev = 3;\n                            _ctx.next = 6;\n                            return josephContract.methods.getRedeemFeeRate().call();\n                        case 6:\n                            josephStuff = _ctx.sent;\n                            setJosephContent(web3.utils.fromWei(josephStuff));\n                            _ctx.next = 14;\n                            break;\n                        case 10:\n                            _ctx.prev = 10;\n                            _ctx.t0 = _ctx[\"catch\"](3);\n                            console.log(\"errrorrr: \", _ctx.t0);\n                            return _ctx.abrupt(\"return\");\n                        case 14:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        3,\n                        10\n                    ]\n                ]);\n            }));\n            return _fetchJosephStuff.apply(this, arguments);\n        }\n        function fetchOracleStuff() {\n            return _fetchOracleStuff.apply(this, arguments);\n        }\n        function _fetchOracleStuff() {\n            _fetchOracleStuff = _asyncToGenerator(_Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var tokenContractAddress, oracleContract, randomHolder, oracleStuff;\n                return _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!(typeof web3.eth !== \"undefined\")) {\n                                _ctx.next = 15;\n                                break;\n                            }\n                            tokenContractAddress = \"0x1dF7084A1C9905178D539753c066a21E9cCfB90c\";\n                            oracleContract = new web3.eth.Contract(_contracts_oracles_IporOracle_json__WEBPACK_IMPORTED_MODULE_5__, tokenContractAddress);\n                            randomHolder = \"0x82077d15b0b345e9df10bc3f4effc0cf9ba61ff2\";\n                            _ctx.prev = 4;\n                            _ctx.next = 7;\n                            return oracleContract.methods.owner().call();\n                        case 7:\n                            oracleStuff = _ctx.sent;\n                            setOracleStuff(oracleStuff);\n                            _ctx.next = 15;\n                            break;\n                        case 11:\n                            _ctx.prev = 11;\n                            _ctx.t0 = _ctx[\"catch\"](4);\n                            console.log(\"errrorrr: \", _ctx.t0);\n                            return _ctx.abrupt(\"return\");\n                        case 15:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        4,\n                        11\n                    ]\n                ]);\n            }));\n            return _fetchOracleStuff.apply(this, arguments);\n        }\n        function fetchTokenHoldings() {\n            return _fetchTokenHoldings.apply(this, arguments);\n        }\n        function _fetchTokenHoldings() {\n            _fetchTokenHoldings = _asyncToGenerator(_Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var tokenContractAddress, tokenContract, randomHolder, tokenHoldings;\n                return _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!(typeof web3.eth !== \"undefined\")) {\n                                _ctx.next = 15;\n                                break;\n                            }\n                            tokenContractAddress = \"0xB3fBf885c2713537BcB699be129dfc2Ad2DE84b2\";\n                            tokenContract = new web3.eth.Contract(_contracts_tokens_IpToken_json__WEBPACK_IMPORTED_MODULE_4__, tokenContractAddress);\n                            randomHolder = \"0x82077d15b0b345e9df10bc3f4effc0cf9ba61ff2\";\n                            _ctx.prev = 4;\n                            _ctx.next = 7;\n                            return tokenContract.methods.balanceOf(randomHolder).call();\n                        case 7:\n                            tokenHoldings = _ctx.sent;\n                            setTokenAmount(web3.utils.fromWei(tokenHoldings));\n                            _ctx.next = 15;\n                            break;\n                        case 11:\n                            _ctx.prev = 11;\n                            _ctx.t0 = _ctx[\"catch\"](4);\n                            console.log(\"errrorrr: \", _ctx.t0);\n                            return _ctx.abrupt(\"return\");\n                        case 15:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        4,\n                        11\n                    ]\n                ]);\n            }));\n            return _fetchTokenHoldings.apply(this, arguments);\n        }\n        fetchTokenHoldings();\n        fetchOracleStuff();\n        fetchJosephStuff();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        function getLogs() {\n            return _getLogs.apply(this, arguments);\n        }\n        function _getLogs() {\n            _getLogs = _asyncToGenerator(_Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var logStuff;\n                return _Users_oliverqin_Desktop_ipor_main_ipor_dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!(typeof web3.eth !== \"undefined\")) {\n                                _ctx.next = 4;\n                                break;\n                            }\n                            _ctx.next = 3;\n                            return web3.eth.getPastLogs({\n                                fromBlock: \"13856597\",\n                                toBlock: \"14476841\",\n                                address: \"0x1F98431c8aD98523631AE4a59f267346ea31F984\"\n                            }).then(console.log(\"done\"));\n                        case 3:\n                            logStuff = _ctx.sent;\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getLogs.apply(this, arguments);\n        }\n        getLogs();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"IPOR Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon-ipor.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),\n                        children: \"IPOR Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                        children: \"IPORs performance over time\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Token Amount: \",\n                            tokenAmount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Oracle Stuff: \",\n                            oracleStuff1\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Joseph Content: \",\n                            josephContent\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"Logs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: logState\n                    }, void 0, false, {\n                        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_10__.PieChart, {\n                data: [\n                    {\n                        title: \"One\",\n                        value: 10,\n                        color: \"#E38627\"\n                    },\n                    {\n                        title: \"Two\",\n                        value: 15,\n                        color: \"#C13C37\"\n                    },\n                    {\n                        title: \"Three\",\n                        value: 20,\n                        color: \"#6A2135\"\n                    }, \n                ],\n                radius: 10\n            }, void 0, false, {\n                fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oliverqin/Desktop/ipor-main/ipor-dashboard/pages/index.js\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"o9V9E0x8q5rFxwObmsv7EN6Xf/U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRSxFQUFFO3dCQUFFQyxLQUFLLEVBQUUsU0FBUztxQkFBRTtvQkFDN0M7d0JBQUViLEtBQUssRUFBRSxLQUFLO3dCQUFFWSxLQUFLLEVBQUUsRUFBRTt3QkFBRUMsS0FBSyxFQUFFLFNBQVM7cUJBQUU7b0JBQzdDO3dCQUFFYixLQUFLLEVBQUUsT0FBTzt3QkFBRVksS0FBSyxFQUFFLEVBQUU7d0JBQUVDLEtBQUssRUFBRSxTQUFTO3FCQUFFO2lCQUNoRDtnQkFDREMsTUFBTSxFQUFFLEVBQUU7Ozs7O29CQUNWO1lBQUEsR0FDSjs7Ozs7O1lBQU0sQ0FDUDtDQUNGO0dBckl1QnpELElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFRva2VuQUJJIGZyb20gJy4uLy4uL2NvbnRyYWN0cy90b2tlbnMvSXBUb2tlbi5qc29uJ1xuaW1wb3J0IE9yYWNsZUFCSSBmcm9tICcuLi8uLi9jb250cmFjdHMvb3JhY2xlcy9JcG9yT3JhY2xlLmpzb24nXG5pbXBvcnQgSm9zZXBoQUJJIGZyb20gJy4uLy4uL2NvbnRyYWN0cy9hbW0vcG9vbC9Kb3NlcGguanNvbidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBpZUNoYXJ0IH0gZnJvbSAncmVhY3QtbWluaW1hbC1waWUtY2hhcnQnO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIHRoaXMgaXMgZm9yIFJpbmtlYnksIGZvciByZWZlcmVuY2UgTWFpbm5ldCBhZGRyZXNzIGlzOiB3c3M6Ly9tYWlubmV0LmluZnVyYS5pby93cy92My9kYjUxZWEyZDQ4Y2Q0YzdhYWU0NmQ4NzZiMWUxZGFiM1xuICBsZXQgd2ViMyA9IG5ldyBXZWIzKG5ldyBXZWIzLnByb3ZpZGVycy5XZWJzb2NrZXRQcm92aWRlcihcIndzczovL3JpbmtlYnkuaW5mdXJhLmlvL3dzL3YzL2RiNTFlYTJkNDhjZDRjN2FhZTQ2ZDg3NmIxZTFkYWIzXCIpKTtcbiAgXG4gIC8vIHRva2VuIGFiaSBzdHVmZlxuICBjb25zdCBbdG9rZW5BbW91bnQsIHNldFRva2VuQW1vdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBcbiAgLy8gb3JhY2xlIGFiaSBzdHVmZlxuICBjb25zdCBbb3JhY2xlU3R1ZmYsIHNldE9yYWNsZVN0dWZmXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIGpvc2VwaCBhYmkgc3R1ZmZcbiAgY29uc3QgW2pvc2VwaENvbnRlbnQsIHNldEpvc2VwaENvbnRlbnRdID0gdXNlU3RhdGUobnVsbClcblxuICAvLyBsb2cgc3R1ZmZcbiAgY29uc3QgW2xvZ1N0YXRlLCBzZXRMb2dTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEpvc2VwaFN0dWZmKCkge1xuICAgICAgaWYgKHR5cGVvZiB3ZWIzLmV0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gVG9rZW4gQ29udHJhY3QgQWRkcmVzc1xuICAgICAgICBjb25zdCB0b2tlbkNvbnRyYWN0QWRkcmVzcyA9IFwiMHg3MDkyOEIyNzQ2M0Y5ZmQ2ZkQ4NGFiMmI1Mzk2NkJjZmQzMzVCNTQ2XCI7XG4gICAgICAgIC8vIEpvc2VwaCBDb250cmFjdCBcbiAgICAgICAgbGV0IGpvc2VwaENvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEpvc2VwaEFCSSwgdG9rZW5Db250cmFjdEFkZHJlc3MpO1xuICAgICAgICAvLyBQdWJsaWMgQWRkcmVzcyBvZiBUb2tlbiBIb2xkZXJcbiAgICAgICAgLy9jb25zdCByYW5kb21Ib2xkZXIgPSBcIjB4ODIwNzdkMTViMGIzNDVlOWRmMTBiYzNmNGVmZmMwY2Y5YmE2MWZmMlwiXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgam9zZXBoU3R1ZmYgPSBhd2FpdCBqb3NlcGhDb250cmFjdC5tZXRob2RzLmdldFJlZGVlbUZlZVJhdGUoKS5jYWxsKClcbiAgICAgICAgICBzZXRKb3NlcGhDb250ZW50KHdlYjMudXRpbHMuZnJvbVdlaShqb3NlcGhTdHVmZikpXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJlcnJyb3JycjogXCIsIGVycilcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hPcmFjbGVTdHVmZigpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2ViMy5ldGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFRva2VuIENvbnRyYWN0IEFkZHJlc3NcbiAgICAgICAgY29uc3QgdG9rZW5Db250cmFjdEFkZHJlc3MgPSBcIjB4MWRGNzA4NEExQzk5MDUxNzhENTM5NzUzYzA2NmEyMUU5Y0NmQjkwY1wiO1xuICAgICAgICAvLyBPcmFjbGUgQ29udHJhY3QgXG4gICAgICAgIGxldCBvcmFjbGVDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChPcmFjbGVBQkksIHRva2VuQ29udHJhY3RBZGRyZXNzKTtcbiAgICAgICAgLy8gUHVibGljIEFkZHJlc3Mgb2YgVG9rZW4gSG9sZGVyXG4gICAgICAgIGNvbnN0IHJhbmRvbUhvbGRlciA9IFwiMHg4MjA3N2QxNWIwYjM0NWU5ZGYxMGJjM2Y0ZWZmYzBjZjliYTYxZmYyXCJcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBvcmFjbGVTdHVmZiA9IGF3YWl0IG9yYWNsZUNvbnRyYWN0Lm1ldGhvZHMub3duZXIoKS5jYWxsKClcbiAgICAgICAgICBzZXRPcmFjbGVTdHVmZihvcmFjbGVTdHVmZilcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVycnJvcnJyOiBcIiwgZXJyKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRva2VuSG9sZGluZ3MoKSB7XG4gICAgICBpZiAodHlwZW9mIHdlYjMuZXRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBUb2tlbiBDb250cmFjdCBBZGRyZXNzXG4gICAgICAgIGNvbnN0IHRva2VuQ29udHJhY3RBZGRyZXNzID0gXCIweEIzZkJmODg1YzI3MTM1MzdCY0I2OTliZTEyOWRmYzJBZDJERTg0YjJcIjtcbiAgICAgICAgLy8gVG9rZW4gQ29udHJhY3QgXG4gICAgICAgIGxldCB0b2tlbkNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFRva2VuQUJJLCB0b2tlbkNvbnRyYWN0QWRkcmVzcyk7XG4gICAgICAgIC8vIFB1YmxpYyBBZGRyZXNzIG9mIFRva2VuIEhvbGRlclxuICAgICAgICBjb25zdCByYW5kb21Ib2xkZXIgPSBcIjB4ODIwNzdkMTViMGIzNDVlOWRmMTBiYzNmNGVmZmMwY2Y5YmE2MWZmMlwiXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdG9rZW5Ib2xkaW5ncyA9IGF3YWl0IHRva2VuQ29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2YocmFuZG9tSG9sZGVyKS5jYWxsKClcbiAgICAgICAgICBzZXRUb2tlbkFtb3VudCh3ZWIzLnV0aWxzLmZyb21XZWkodG9rZW5Ib2xkaW5ncykpXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJlcnJyb3JycjogXCIsIGVycilcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hUb2tlbkhvbGRpbmdzKClcbiAgICBmZXRjaE9yYWNsZVN0dWZmKClcbiAgICBmZXRjaEpvc2VwaFN0dWZmKClcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRMb2dzKCkge1xuICAgICAgaWYgKHR5cGVvZiB3ZWIzLmV0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLyogdHJ5IHtcbiAgICAgICAgICBjb25zdCBsb2dTdHVmZiA9IGF3YWl0IHdlYjMuZXRoLmdldFBhc3RMb2dzKHtcbiAgICAgICAgICAgIGZyb21CbG9jazogXCIxMzg1NjU5N1wiLFxuICAgICAgICAgICAgdG9CbG9jazogXCIxNDQ3Njg0MVwiLFxuICAgICAgICAgICAgYWRkcmVzczogXCIweDFGOTg0MzFjOGFEOTg1MjM2MzFBRTRhNTlmMjY3MzQ2ZWEzMUY5ODRcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ1N0dWZmKVxuICAgICAgICAgIHNldExvZ1N0YXRlKGxvZ1N0dWZmKVxuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9ycnI6IFwiLCBlcnIpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ICAqL1xuICAgICAgICBjb25zdCBsb2dTdHVmZiA9IGF3YWl0IHdlYjMuZXRoLmdldFBhc3RMb2dzKHtcbiAgICAgICAgICBmcm9tQmxvY2s6IFwiMTM4NTY1OTdcIixcbiAgICAgICAgICB0b0Jsb2NrOiBcIjE0NDc2ODQxXCIsXG4gICAgICAgICAgYWRkcmVzczogXCIweDFGOTg0MzFjOGFEOTg1MjM2MzFBRTRhNTlmMjY3MzQ2ZWEzMUY5ODRcIixcbiAgICAgICAgfSkudGhlbihjb25zb2xlLmxvZyhcImRvbmVcIikpXG4gICAgICB9XG4gICAgfVxuICAgIGdldExvZ3MoKVxuICB9LCBbXSlcblxuIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SVBPUiBEYXNoYm9hcmQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24taXBvci5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBJUE9SIERhc2hib2FyZFxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBJUE9ScyBwZXJmb3JtYW5jZSBvdmVyIHRpbWVcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5Ub2tlbiBBbW91bnQ6IHt0b2tlbkFtb3VudH08L3A+XG4gICAgICAgIDxwPk9yYWNsZSBTdHVmZjoge29yYWNsZVN0dWZmfTwvcD5cbiAgICAgICAgPHA+Sm9zZXBoIENvbnRlbnQ6IHtqb3NlcGhDb250ZW50fTwvcD5cblxuICAgICAgICA8cD5Mb2dzPC9wPlxuICAgICAgICA8cD57bG9nU3RhdGV9PC9wPlxuICAgICAgPC9tYWluPlxuICAgICAgPFBpZUNoYXJ0XG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7IHRpdGxlOiAnT25lJywgdmFsdWU6IDEwLCBjb2xvcjogJyNFMzg2MjcnIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ1R3bycsIHZhbHVlOiAxNSwgY29sb3I6ICcjQzEzQzM3JyB9LFxuICAgICAgICAgIHsgdGl0bGU6ICdUaHJlZScsIHZhbHVlOiAyMCwgY29sb3I6ICcjNkEyMTM1JyB9LFxuICAgICAgICBdfVxuICAgICAgICByYWRpdXM9ezEwfVxuICAgICAgLz47XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJUb2tlbkFCSSIsIk9yYWNsZUFCSSIsIkpvc2VwaEFCSSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGllQ2hhcnQiLCJXZWIzIiwiSG9tZSIsIndlYjMiLCJwcm92aWRlcnMiLCJXZWJzb2NrZXRQcm92aWRlciIsInRva2VuQW1vdW50Iiwic2V0VG9rZW5BbW91bnQiLCJvcmFjbGVTdHVmZiIsInNldE9yYWNsZVN0dWZmIiwiam9zZXBoQ29udGVudCIsInNldEpvc2VwaENvbnRlbnQiLCJsb2dTdGF0ZSIsInNldExvZ1N0YXRlIiwiZmV0Y2hKb3NlcGhTdHVmZiIsInRva2VuQ29udHJhY3RBZGRyZXNzIiwiam9zZXBoQ29udHJhY3QiLCJqb3NlcGhTdHVmZiIsImV0aCIsIkNvbnRyYWN0IiwibWV0aG9kcyIsImdldFJlZGVlbUZlZVJhdGUiLCJjYWxsIiwidXRpbHMiLCJmcm9tV2VpIiwiY29uc29sZSIsImxvZyIsImZldGNoT3JhY2xlU3R1ZmYiLCJvcmFjbGVDb250cmFjdCIsInJhbmRvbUhvbGRlciIsIm93bmVyIiwiZmV0Y2hUb2tlbkhvbGRpbmdzIiwidG9rZW5Db250cmFjdCIsInRva2VuSG9sZGluZ3MiLCJiYWxhbmNlT2YiLCJnZXRMb2dzIiwibG9nU3R1ZmYiLCJnZXRQYXN0TG9ncyIsImZyb21CbG9jayIsInRvQmxvY2siLCJhZGRyZXNzIiwidGhlbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJwIiwiZGVzY3JpcHRpb24iLCJkYXRhIiwidmFsdWUiLCJjb2xvciIsInJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});