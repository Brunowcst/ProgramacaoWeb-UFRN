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
exports.id = "pages/receita4/quest1";
exports.ids = ["pages/receita4/quest1"];
exports.modules = {

/***/ "./pages/receita4/quest1.js":
/*!**********************************!*\
  !*** ./pages/receita4/quest1.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Movies() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`http://www.omdbapi.com/?apikey=7e82baf&s=bagdad`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\quest1.js\",\n        lineNumber: 6,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\quest1.js\",\n        lineNumber: 7,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: m.imdbID,\n                    children: [\n                        m.Title,\n                        \" --- \",\n                        m.Year\n                    ]\n                }, m.imdbID, true, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\quest1.js\",\n                    lineNumber: 11,\n                    columnNumber: 39\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\quest1.js\",\n                lineNumber: 11,\n                columnNumber: 34\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\quest1.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhNC9xdWVzdDEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXdCO0FBRVQsU0FBU0MsU0FBUTtJQUM1QixNQUFNLEVBQUNDLEtBQUksRUFBRUMsTUFBSyxFQUFDLEdBQUdILCtDQUFNQSxDQUFDLENBQUMsK0NBQStDLENBQUMsRUFBRUk7SUFFaEYsSUFBSUQsT0FBTyxxQkFBTyw4REFBQ0U7a0JBQUk7Ozs7OztJQUN2QixJQUFJLENBQUNILE1BQU0scUJBQU8sOERBQUNHO2tCQUFJOzs7Ozs7SUFFdkIscUJBQ0ksOERBQUNBO2tCQUNDSCxLQUFLSSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxrQkFBTSw4REFBQ0g7MEJBQUksNEVBQUNJO29CQUFpQkMsTUFBUUYsRUFBRUcsTUFBTTs7d0JBQUdILEVBQUVJLEtBQUs7d0JBQUM7d0JBQU1KLEVBQUVLLElBQUk7O21CQUFqREwsRUFBRUcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FBR3RELENBQUM7QUFFRCxlQUFlUCxRQUFRVSxHQUFHLEVBQUU7SUFDeEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNRjtJQUN4QixNQUFNRyxPQUFPLE1BQU1GLElBQUlFLElBQUk7SUFDM0IsT0FBT0E7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3JlY2VpdGE0L3F1ZXN0MS5qcz9mNDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKCl7XHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9N2U4MmJhZiZzPWJhZ2RhZGAsIGZldGNoZXIpXHJcblxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj5cclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICB7IGRhdGEuU2VhcmNoLm1hcCgobSkgPT4gPGRpdj48YSBrZXk9e20uaW1kYklEfSBocmVmPXsgIG0uaW1kYklEfT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9hPjwvZGl2Pil9XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBqc29uO1xyXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsIk1vdmllcyIsImRhdGEiLCJlcnJvciIsImZldGNoZXIiLCJkaXYiLCJTZWFyY2giLCJtYXAiLCJtIiwiYSIsImhyZWYiLCJpbWRiSUQiLCJUaXRsZSIsIlllYXIiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/receita4/quest1.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/receita4/quest1.js"));
module.exports = __webpack_exports__;

})();