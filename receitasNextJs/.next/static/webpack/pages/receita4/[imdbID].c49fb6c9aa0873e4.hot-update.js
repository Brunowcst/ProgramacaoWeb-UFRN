"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/receita4/[imdbID]",{

/***/ "./pages/receita4/[imdbID].js":
/*!************************************!*\
  !*** ./pages/receita4/[imdbID].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Movies() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { imdbID  } = router.query;\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://www.omdbapi.com/?apikey=7e82baf&i=\" + imdbID, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n        lineNumber: 11,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n        lineNumber: 12,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    data.Title,\n                    \" | \",\n                    data.Year,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n                        lineNumber: 16,\n                        columnNumber: 44\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data.Poster\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"movies2/\",\n                children: \"P\\xe1gina inicial\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Documents\\\\GitHub\\\\ProgramacaoWeb-UFRN\\\\receitasNextJs\\\\pages\\\\receita4\\\\[imdbID].js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_s(Movies, \"mZuyhWoEayG5q+fyCgnn11lj9Sg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Movies;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhNC9baW1kYklEXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBd0I7QUFFYTtBQUV0QixTQUFTRSxTQUFROztJQUM1QixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTSxFQUFFRyxPQUFNLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUUvQixNQUFNLEVBQUNDLEtBQUksRUFBRUMsTUFBSyxFQUFDLEdBQUdQLCtDQUFNQSxDQUFDLDhDQUE4Q0ksUUFBUUk7SUFFbkYsSUFBSUQsT0FBTyxxQkFBTyw4REFBQ0U7a0JBQUk7Ozs7OztJQUN2QixJQUFJLENBQUNILE1BQU0scUJBQU8sOERBQUNHO2tCQUFJOzs7Ozs7SUFDdkIscUJBQ0ksOERBQUNBOzswQkFDRyw4REFBQ0E7O29CQUNLSCxLQUFLSSxLQUFLO29CQUFDO29CQUFJSixLQUFLSyxJQUFJO2tDQUFDLDhEQUFDQzs7Ozs7a0NBQzVCLDhEQUFDQzt3QkFBSUMsS0FBS1IsS0FBS1MsTUFBTTs7Ozs7Ozs7Ozs7OzBCQUV6Qiw4REFBQ0M7Z0JBQUVDLE1BQUs7MEJBQVc7Ozs7Ozs7Ozs7OztBQUcvQixDQUFDO0dBakJ1QmY7O1FBQ0xELGtEQUFTQTtRQUdGRCwyQ0FBTUE7OztLQUpSRTtBQXFCeEIsZUFBZU0sUUFBUVUsR0FBRyxFQUFFO0lBQ3hCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUY7SUFDeEIsTUFBTUcsT0FBTyxNQUFNRixJQUFJRSxJQUFJO0lBQzNCLE9BQU9BO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjZWl0YTQvW2ltZGJJRF0uanM/YjRmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcygpe1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGltZGJJRCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoXCJodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9N2U4MmJhZiZpPVwiICsgaW1kYklELCBmZXRjaGVyKTsgXHJcblxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj5cclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgIHtkYXRhLlRpdGxlfSB8IHtkYXRhLlllYXJ9PGJyLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLlBvc3Rlcn0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPSdtb3ZpZXMyLyc+UMOhZ2luYSBpbmljaWFsPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSAgICBcclxufVxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGpzb247XHJcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlUm91dGVyIiwiTW92aWVzIiwicm91dGVyIiwiaW1kYklEIiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiZGl2IiwiVGl0bGUiLCJZZWFyIiwiYnIiLCJpbWciLCJzcmMiLCJQb3N0ZXIiLCJhIiwiaHJlZiIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/receita4/[imdbID].js\n"));

/***/ })

});