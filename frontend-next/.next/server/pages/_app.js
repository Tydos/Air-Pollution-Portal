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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@swc/helpers/lib/_async_to_generator.js":
/*!**************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_async_to_generator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _asyncToGenerator;\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9fYXN5bmNfdG9fZ2VuZXJhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9fYXN5bmNfdG9fZ2VuZXJhdG9yLmpzPzBlMzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBfYXN5bmNUb0dlbmVyYXRvcjtcbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_async_to_generator.js\n");

/***/ }),

/***/ "./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _interopRequireDefault;\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qcz85YjdjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/NjZlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./components/PageChange/PageChange.js":
/*!*********************************************!*\
  !*** ./components/PageChange/PageChange.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageChange)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// reactstrap components\n// import { Spinner } from \"reactstrap\";\n// core components\nfunction PageChange(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-cover fixed z-40 w-full h-full top-0 left-0\",\n                style: {\n                    backgroundImage: \"url('/img/img-1-1000x600.jpg')\"\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\components\\\\PageChange\\\\PageChange.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"top-0 left-0 w-full h-full block z-50 absolute bg-black bg-opacity-50\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\components\\\\PageChange\\\\PageChange.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-32 mx-auto max-w-sm text-center relative z-50 top-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block mb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-circle-notch animate-spin text-white mx-auto text-6xl\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\components\\\\PageChange\\\\PageChange.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\components\\\\PageChange\\\\PageChange.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-lg font-medium text-white\",\n                        children: [\n                            \"Loading page contents for: \",\n                            props.path\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\components\\\\PageChange\\\\PageChange.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\components\\\\PageChange\\\\PageChange.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\components\\\\PageChange\\\\PageChange.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VDaGFuZ2UvUGFnZUNoYW5nZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBRTFCLHdCQUF3QjtBQUN4Qix3Q0FBd0M7QUFFeEMsa0JBQWtCO0FBRUgsU0FBU0MsVUFBVSxDQUFDQyxLQUFLLEVBQUU7SUFDeEMscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQSxLQUFHO2dCQUNGQyxTQUFTLEVBQUMsZ0RBQWdEO2dCQUMxREMsS0FBSyxFQUFFO29CQUNMQyxlQUFlLEVBQUUsZ0NBQWdDO2lCQUNsRDs7Ozs7b0JBQ0k7MEJBQ1AsOERBQUNILEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx1RUFBdUU7Ozs7O29CQUFPOzBCQUM3Riw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdEQUF3RDs7a0NBQ3JFLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsWUFBWTtrQ0FDekIsNEVBQUNHLEdBQUM7NEJBQUNILFNBQVMsRUFBQyw4REFBOEQ7Ozs7O2dDQUFLOzs7Ozs0QkFDNUU7a0NBQ04sOERBQUNJLElBQUU7d0JBQUNKLFNBQVMsRUFBQyxnQ0FBZ0M7OzRCQUFDLDZCQUNsQjs0QkFBQ0YsS0FBSyxDQUFDTyxJQUFJOzs7Ozs7NEJBQ25DOzs7Ozs7b0JBQ0Q7Ozs7OztZQUNGLENBQ047QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2VDaGFuZ2UvUGFnZUNoYW5nZS5qcz9iYmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXG4vLyBpbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuLy8gY29yZSBjb21wb25lbnRzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VDaGFuZ2UocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJiZy1jb3ZlciBmaXhlZCB6LTQwIHctZnVsbCBoLWZ1bGwgdG9wLTAgbGVmdC0wXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvaW1nL2ltZy0xLTEwMDB4NjAwLmpwZycpXCIsXG4gICAgICAgIH19XG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGJsb2NrIHotNTAgYWJzb2x1dGUgYmctYmxhY2sgYmctb3BhY2l0eS01MFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zMiBteC1hdXRvIG1heC13LXNtIHRleHQtY2VudGVyIHJlbGF0aXZlIHotNTAgdG9wLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtYi00XCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBhbmltYXRlLXNwaW4gdGV4dC13aGl0ZSBteC1hdXRvIHRleHQtNnhsXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIExvYWRpbmcgcGFnZSBjb250ZW50cyBmb3I6IHtwcm9wcy5wYXRofVxuICAgICAgICA8L2g0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQYWdlQ2hhbmdlIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImkiLCJoNCIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PageChange/PageChange.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nObject.defineProperty(exports, \"AppType\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppType;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _async_to_generator = (__webpack_require__(/*! @swc/helpers/lib/_async_to_generator.js */ \"./node_modules/@swc/helpers/lib/_async_to_generator.js\")[\"default\"]);\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _async_to_generator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nvar _Component;\nclass App extends (_Component = _react.default.Component) {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps));\n    }\n}\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxLQUFLLEVBQUUsSUFBSTtDQUNkLEVBQUMsQ0FBQztBQUNISCxtREFBa0Q7SUFDOUNJLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxHQUFHLEVBQUUsV0FBVztRQUNaLE9BQU9DLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDO0lBQ2xDLENBQUM7Q0FDSixFQUFDLENBQUM7QUFDSFAsdURBQXNEO0lBQ2xESSxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsR0FBRyxFQUFFLFdBQVc7UUFDWixPQUFPQyxNQUFNLENBQUNFLG1CQUFtQixDQUFDO0lBQ3RDLENBQUM7Q0FDSixFQUFDLENBQUM7QUFDSFIsMkNBQTBDO0lBQ3RDSSxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsR0FBRyxFQUFFLFdBQVc7UUFDWixPQUFPQyxNQUFNLENBQUNHLE9BQU8sQ0FBQztJQUMxQixDQUFDO0NBQ0osRUFBQyxDQUFDO0FBQ0hQLGtCQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDekIsSUFBSVMsbUJBQW1CLEdBQUdDLHlJQUEwRDtBQUNwRixJQUFJQyx3QkFBd0IsR0FBR0QsbUpBQStEO0FBQzlGLElBQUlFLE1BQU0sR0FBR0Qsd0JBQXdCLENBQUNELG1CQUFPLENBQUMsb0JBQU8sQ0FBQyxDQUFDO0FBQ3ZELElBQUlOLE1BQU0sR0FBR00sbUJBQU8sQ0FBQyxnREFBcUIsQ0FBQztBQUMzQyxTQUFTRyxrQkFBa0IsQ0FBQ0MsQ0FBQyxFQUFFO0lBQzNCLE9BQU9DLG1CQUFtQixDQUFDQyxLQUFLLENBQUMsSUFBSSxFQUFFQyxTQUFTLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBQ0QsU0FBU0YsbUJBQW1CLEdBQUc7SUFDM0JBLG1CQUFtQixHQUFHOzs7Q0FHekIsR0FBR04sbUJBQW1CLENBQUMsVUFBVSxFQUFFUyxTQUFTLEdBQUdDLEdBQUcsR0FBRyxFQUFFO1FBQ2hELE1BQU1DLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFaEIsTUFBTSxFQUFFaUIsbUJBQW1CLENBQUNILFNBQVMsRUFBRUMsR0FBRyxDQUFDO1FBQ3ZFLE9BQU87WUFDSEMsU0FBUztTQUNaLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU9MLG1CQUFtQixDQUFDQyxLQUFLLENBQUMsSUFBSSxFQUFFQyxTQUFTLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBQ0QsSUFBSUssVUFBVTtBQUNkLE1BQU1DLEdBQUcsU0FBVUQsQ0FBQUEsVUFBVSxHQUFHVixNQUFNLENBQUNKLE9BQU8sQ0FBQ1UsU0FBUztJQUNwRE0sTUFBTSxHQUFHO1FBQ0wsTUFBTSxFQUFFTixTQUFTLEdBQUdFLFNBQVMsR0FBRyxHQUFHLElBQUksQ0FBQ0ssS0FBSztRQUM3QyxPQUFPLFdBQVcsR0FBR2IsTUFBTSxDQUFDSixPQUFPLENBQUNrQixhQUFhLENBQUNSLFNBQVMsRUFBRXBCLE1BQU0sQ0FBQzZCLE1BQU0sQ0FBQyxFQUFFLEVBQUVQLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDL0Y7Q0FDSDtBQUNERyxHQUFHLENBQUNLLG1CQUFtQixHQUFHZixrQkFBa0IsQ0FBQztBQUM3Q1UsR0FBRyxDQUFDTSxlQUFlLEdBQUdoQixrQkFBa0IsQ0FBQztBQUN6Q2Isa0JBQWUsR0FBR3VCLEdBQUcsQ0FBQyxDQUV0QixnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcz85NjFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXBwSW5pdGlhbFByb3BzXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuQXBwSW5pdGlhbFByb3BzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTmV4dFdlYlZpdGFsc01ldHJpY1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBUeXBlXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuQXBwVHlwZTtcbiAgICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfYXN5bmNfdG9fZ2VuZXJhdG9yID0gcmVxdWlyZShcIkBzd2MvaGVscGVycy9saWIvX2FzeW5jX3RvX2dlbmVyYXRvci5qc1wiKS5kZWZhdWx0O1xudmFyIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qc1wiKS5kZWZhdWx0O1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKih7IENvbXBvbmVudCAsIGN0eCAgfSkge1xuICAgICAgICBjb25zdCBwYWdlUHJvcHMgPSB5aWVsZCAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VQcm9wc1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG52YXIgX0NvbXBvbmVudDtcbmNsYXNzIEFwcCBleHRlbmRzIChfQ29tcG9uZW50ID0gX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KSB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwYWdlUHJvcHMpKTtcbiAgICB9XG59XG5BcHAub3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJBcHBUeXBlIiwiZGVmYXVsdCIsIl9hc3luY190b19nZW5lcmF0b3IiLCJyZXF1aXJlIiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwiX3JlYWN0IiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiXyIsIl9hcHBHZXRJbml0aWFsUHJvcHMiLCJhcHBseSIsImFyZ3VtZW50cyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJfQ29tcG9uZW50IiwiQXBwIiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiYXNzaWduIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var components_PageChange_PageChange_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/PageChange/PageChange.js */ \"./components/PageChange/PageChange.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styles_tailwind_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/tailwind.css */ \"./styles/tailwind.css\");\n/* harmony import */ var styles_tailwind_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_tailwind_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeStart\", (url)=>{\n    console.log(`Loading: ${url}`);\n    document.body.classList.add(\"body-page-transition\");\n    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_PageChange_PageChange_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        path: url\n    }, void 0, false, {\n        fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\pages\\\\_app.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined), document.getElementById(\"page-transition\"));\n});\nnext_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeComplete\", ()=>{\n    react_dom__WEBPACK_IMPORTED_MODULE_2___default().unmountComponentAtNode(document.getElementById(\"page-transition\"));\n    document.body.classList.remove(\"body-page-transition\");\n});\nnext_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeError\", ()=>{\n    react_dom__WEBPACK_IMPORTED_MODULE_2___default().unmountComponentAtNode(document.getElementById(\"page-transition\"));\n    document.body.classList.remove(\"body-page-transition\");\n});\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_3___default()) {\n    componentDidMount() {\n        let comment = document.createComment(`\n\n=========================================================\n* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/notus-nextjs\n* Copyright 2021 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)\n\n* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n`);\n        document.insertBefore(comment, document.documentElement);\n    }\n    static async getInitialProps({ Component , router , ctx  }) {\n        let pageProps = {};\n        if (Component.getInitialProps) {\n            pageProps = await Component.getInitialProps(ctx);\n        }\n        return {\n            pageProps\n        };\n    }\n    render() {\n        const { Component , pageProps  } = this.props;\n        const Layout = Component.layout || (({ children  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: children\n            }, void 0, false));\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\pages\\\\_app.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Notus NextJS by Creative Tim\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\pages\\\\_app.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            src: \"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE\",\n                            async: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\pages\\\\_app.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\pages\\\\_app.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\pages\\\\_app.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\pages\\\\_app.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Invictus\\\\SR-12-INVICTUS-main\\\\frontend-next\\\\pages\\\\_app.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgUGFnZUNoYW5nZSBmcm9tIFwiY29tcG9uZW50cy9QYWdlQ2hhbmdlL1BhZ2VDaGFuZ2UuanNcIjtcblxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzXCI7XG5pbXBvcnQgXCJzdHlsZXMvdGFpbHdpbmQuY3NzXCI7XG5cblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsICh1cmwpID0+IHtcbiAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJib2R5LXBhZ2UtdHJhbnNpdGlvblwiKTtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxQYWdlQ2hhbmdlIHBhdGg9e3VybH0gLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlLXRyYW5zaXRpb25cIilcbiAgKTtcbn0pO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4ge1xuICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZS10cmFuc2l0aW9uXCIpKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1wYWdlLXRyYW5zaXRpb25cIik7XG59KTtcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsICgpID0+IHtcbiAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UtdHJhbnNpdGlvblwiKSk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHktcGFnZS10cmFuc2l0aW9uXCIpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KGBcblxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qIE5vdHVzIE5leHRKUyAtIHYxLjEuMCBiYXNlZCBvbiBUYWlsd2luZCBTdGFydGVyIEtpdCBieSBDcmVhdGl2ZSBUaW1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L25vdHVzLW5leHRqc1xuKiBDb3B5cmlnaHQgMjAyMSBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXG4qIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2NyZWF0aXZldGltb2ZmaWNpYWwvbm90dXMtbmV4dGpzL2Jsb2IvbWFpbi9MSUNFTlNFLm1kKVxuXG4qIFRhaWx3aW5kIFN0YXJ0ZXIgS2l0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vbGVhcm5pbmctbGFiL3RhaWx3aW5kLXN0YXJ0ZXIta2l0L3ByZXNlbnRhdGlvblxuXG4qIENvZGVkIGJ5IENyZWF0aXZlIFRpbVxuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuYCk7XG4gICAgZG9jdW1lbnQuaW5zZXJ0QmVmb3JlKGNvbW1lbnQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gIH1cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgcm91dGVyLCBjdHggfSkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcblxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBMYXlvdXQgPSBDb21wb25lbnQubGF5b3V0IHx8ICgoeyBjaGlsZHJlbiB9KSA9PiA8PntjaGlsZHJlbn08Lz4pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRpdGxlPk5vdHVzIE5leHRKUyBieSBDcmVhdGl2ZSBUaW08L3RpdGxlPlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9WU9VUl9LRVlfSEVSRVwiXG4gICAgICAgICAgICBhc3luY1xuICAgICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQXBwIiwiSGVhZCIsIlJvdXRlciIsIlBhZ2VDaGFuZ2UiLCJldmVudHMiLCJvbiIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW5kZXIiLCJwYXRoIiwiZ2V0RWxlbWVudEJ5SWQiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwicmVtb3ZlIiwiTXlBcHAiLCJjb21wb25lbnREaWRNb3VudCIsImNvbW1lbnQiLCJjcmVhdGVDb21tZW50IiwiaW5zZXJ0QmVmb3JlIiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50Iiwicm91dGVyIiwiY3R4IiwicGFnZVByb3BzIiwicHJvcHMiLCJMYXlvdXQiLCJsYXlvdXQiLCJjaGlsZHJlbiIsIkZyYWdtZW50IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidGl0bGUiLCJzY3JpcHQiLCJzcmMiLCJhc3luYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/tailwind.css":
/*!*****************************!*\
  !*** ./styles/tailwind.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();