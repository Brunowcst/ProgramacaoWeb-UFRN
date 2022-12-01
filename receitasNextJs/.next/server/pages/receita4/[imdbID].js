"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/receita4/[imdbID]";
exports.ids = ["pages/receita4/[imdbID]"];
exports.modules = {

/***/ "./pages/receita4/[imdbID].js":
/*!************************************!*\
  !*** ./pages/receita4/[imdbID].js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Movies() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { imdbID  } = router.query;\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://www.omdbapi.com/?apikey=7e82baf&i=\" + imdbID, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n        lineNumber: 11,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n        lineNumber: 12,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Nome:\",\n                    data.Title,\n                    \" | Data de lan\\xe7amento:\",\n                    data.Year,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n                        lineNumber: 16,\n                        columnNumber: 68\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data.Poster\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"quest1/\",\n                children: \"P\\xe1gina inicial\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhNC9baW1kYklEXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QjtBQUVhO0FBRXRCLFNBQVNFLFNBQVE7SUFDNUIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ0csT0FBTSxFQUFDLEdBQUdELE9BQU9FLEtBQUs7SUFFN0IsTUFBTSxFQUFDQyxLQUFJLEVBQUVDLE1BQUssRUFBQyxHQUFHUCwrQ0FBTUEsQ0FBQyw4Q0FBOENJLFFBQVFJO0lBRW5GLElBQUlELE9BQU8scUJBQU8sOERBQUNFO2tCQUFJOzs7Ozs7SUFDdkIsSUFBSSxDQUFDSCxNQUFNLHFCQUFPLDhEQUFDRztrQkFBSTs7Ozs7O0lBQ3ZCLHFCQUNJLDhEQUFDQTs7MEJBQ0csOERBQUNBOztvQkFBSTtvQkFDTUgsS0FBS0ksS0FBSztvQkFBQztvQkFBdUJKLEtBQUtLLElBQUk7a0NBQUMsOERBQUNDOzs7OztrQ0FDcEQsOERBQUNDO3dCQUFJQyxLQUFLUixLQUFLUyxNQUFNOzs7Ozs7Ozs7Ozs7MEJBRXpCLDhEQUFDQztnQkFBRUMsTUFBSzswQkFBVTs7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFJRCxlQUFlVCxRQUFRVSxHQUFHLEVBQUU7SUFDeEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNRjtJQUN4QixNQUFNRyxPQUFPLE1BQU1GLElBQUlFLElBQUk7SUFDM0IsT0FBT0E7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3JlY2VpdGE0L1tpbWRiSURdLmpzP2I0ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoKXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2ltZGJJRH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihcImh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT03ZTgyYmFmJmk9XCIgKyBpbWRiSUQsIGZldGNoZXIpOyBcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PlxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgTm9tZTp7ZGF0YS5UaXRsZX0gfCBEYXRhIGRlIGxhbsOnYW1lbnRvOntkYXRhLlllYXJ9PGJyLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLlBvc3Rlcn0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPSdxdWVzdDEvJz5Qw6FnaW5hIGluaWNpYWw8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApICAgIFxyXG59XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJNb3ZpZXMiLCJyb3V0ZXIiLCJpbWRiSUQiLCJxdWVyeSIsImRhdGEiLCJlcnJvciIsImZldGNoZXIiLCJkaXYiLCJUaXRsZSIsIlllYXIiLCJiciIsImltZyIsInNyYyIsIlBvc3RlciIsImEiLCJocmVmIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/receita4/[imdbID].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/receita4/[imdbID].js"));
module.exports = __webpack_exports__;

})();