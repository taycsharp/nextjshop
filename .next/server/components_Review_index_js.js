/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_Review_index_js";
exports.ids = ["components_Review_index_js"];
exports.modules = {

/***/ "./components/Review/review.module.css":
/*!*********************************************!*\
  !*** ./components/Review/review.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"review_container__1sCXg\",\n\t\"review_text\": \"review_review_text__0WPOA\",\n\t\"author\": \"review_author__nHLpr\",\n\t\"_rev_con\": \"review__rev_con__G2zgC\",\n\t\"rating\": \"review_rating__XdU3j\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jldmlldy9yZXZpZXcubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9saWZlLy4vY29tcG9uZW50cy9SZXZpZXcvcmV2aWV3Lm1vZHVsZS5jc3M/N2RlZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJyZXZpZXdfY29udGFpbmVyX18xc0NYZ1wiLFxuXHRcInJldmlld190ZXh0XCI6IFwicmV2aWV3X3Jldmlld190ZXh0X18wV1BPQVwiLFxuXHRcImF1dGhvclwiOiBcInJldmlld19hdXRob3JfX25ITHByXCIsXG5cdFwiX3Jldl9jb25cIjogXCJyZXZpZXdfX3Jldl9jb25fX0cyemdDXCIsXG5cdFwicmF0aW5nXCI6IFwicmV2aWV3X3JhdGluZ19fWGRVM2pcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Review/review.module.css\n");

/***/ }),

/***/ "./components/Image/index.js":
/*!***********************************!*\
  !*** ./components/Image/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageLoader)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ImageLoader({ src, alt, width, height, quality, className, style, id, mouseMove, mouseOut, click, priority }) {\n    const [imgSrc, set_imgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(src);\n    const placeholder = `${\"http://localhost:8000\"}/images/placeholder.jpg`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: imgSrc,\n        alt: alt || src || \"\",\n        width: width || 100,\n        height: height || 100,\n        className: className || null,\n        style: style || null,\n        placeholder: width < 40 ? \"empty\" : \"blur\",\n        blurDataURL: placeholder,\n        id: id || null,\n        onMouseMove: mouseMove || null,\n        onMouseOut: mouseOut || null,\n        onClick: click || null,\n        quality: quality || null,\n        priority: priority || undefined,\n        onLoadingComplete: (result)=>{\n            if (result.naturalWidth === 0) {\n                // Broken image\n                set_imgSrc(placeholder);\n            }\n        },\n        onError: ()=>{\n            set_imgSrc(placeholder);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Image/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0U7QUFFbEIsU0FBU0UsWUFBWSxFQUNsQ0MsR0FBRyxFQUNIQyxHQUFHLEVBQ0hDLEtBQUssRUFDTEMsTUFBTSxFQUNOQyxPQUFPLEVBQ1BDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxFQUFFLEVBQ0ZDLFNBQVMsRUFDVEMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLFFBQVEsRUFDVDtJQUNDLE1BQU0sQ0FBQ0MsUUFBUUMsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQ0U7SUFDdEMsTUFBTWMsY0FBYyxDQUFDLEVBQUVDLHVCQUEyQixDQUFDLHVCQUF1QixDQUFDO0lBQzNFLHFCQUNFLDhEQUFDbEIsbURBQUtBO1FBQ0pHLEtBQUtZO1FBQ0xYLEtBQUtBLE9BQU9ELE9BQU87UUFDbkJFLE9BQU9BLFNBQVM7UUFDaEJDLFFBQVFBLFVBQVU7UUFDbEJFLFdBQVdBLGFBQWE7UUFDeEJDLE9BQU9BLFNBQVM7UUFDaEJRLGFBQWFaLFFBQVEsS0FBSyxVQUFVO1FBQ3BDZ0IsYUFBYUo7UUFDYlAsSUFBSUEsTUFBTTtRQUNWWSxhQUFhWCxhQUFhO1FBQzFCWSxZQUFZWCxZQUFZO1FBQ3hCWSxTQUFTWCxTQUFTO1FBQ2xCTixTQUFTQSxXQUFXO1FBQ3BCTyxVQUFVQSxZQUFZVztRQUN0QkMsbUJBQW1CLENBQUNDO1lBQ2xCLElBQUlBLE9BQU9DLFlBQVksS0FBSyxHQUFHO2dCQUM3QixlQUFlO2dCQUNmWixXQUFXQztZQUNiO1FBQ0Y7UUFDQVksU0FBUztZQUNQYixXQUFXQztRQUNiOzs7Ozs7QUFHTiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfbGlmZS8uL2NvbXBvbmVudHMvSW1hZ2UvaW5kZXguanM/N2U5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlTG9hZGVyKHtcbiAgc3JjLFxuICBhbHQsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIHF1YWxpdHksXG4gIGNsYXNzTmFtZSxcbiAgc3R5bGUsXG4gIGlkLFxuICBtb3VzZU1vdmUsXG4gIG1vdXNlT3V0LFxuICBjbGljayxcbiAgcHJpb3JpdHksXG59KSB7XG4gIGNvbnN0IFtpbWdTcmMsIHNldF9pbWdTcmNdID0gdXNlU3RhdGUoc3JjKTtcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9L2ltYWdlcy9wbGFjZWhvbGRlci5qcGdgO1xuICByZXR1cm4gKFxuICAgIDxJbWFnZVxuICAgICAgc3JjPXtpbWdTcmN9XG4gICAgICBhbHQ9e2FsdCB8fCBzcmMgfHwgXCJcIn1cbiAgICAgIHdpZHRoPXt3aWR0aCB8fCAxMDB9XG4gICAgICBoZWlnaHQ9e2hlaWdodCB8fCAxMDB9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCBudWxsfVxuICAgICAgc3R5bGU9e3N0eWxlIHx8IG51bGx9XG4gICAgICBwbGFjZWhvbGRlcj17d2lkdGggPCA0MCA/IFwiZW1wdHlcIiA6IFwiYmx1clwifVxuICAgICAgYmx1ckRhdGFVUkw9e3BsYWNlaG9sZGVyfVxuICAgICAgaWQ9e2lkIHx8IG51bGx9XG4gICAgICBvbk1vdXNlTW92ZT17bW91c2VNb3ZlIHx8IG51bGx9XG4gICAgICBvbk1vdXNlT3V0PXttb3VzZU91dCB8fCBudWxsfVxuICAgICAgb25DbGljaz17Y2xpY2sgfHwgbnVsbH1cbiAgICAgIHF1YWxpdHk9e3F1YWxpdHkgfHwgbnVsbH1cbiAgICAgIHByaW9yaXR5PXtwcmlvcml0eSB8fCB1bmRlZmluZWR9XG4gICAgICBvbkxvYWRpbmdDb21wbGV0ZT17KHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lm5hdHVyYWxXaWR0aCA9PT0gMCkge1xuICAgICAgICAgIC8vIEJyb2tlbiBpbWFnZVxuICAgICAgICAgIHNldF9pbWdTcmMocGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgb25FcnJvcj17KCkgPT4ge1xuICAgICAgICBzZXRfaW1nU3JjKHBsYWNlaG9sZGVyKTtcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiSW1hZ2VMb2FkZXIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInF1YWxpdHkiLCJjbGFzc05hbWUiLCJzdHlsZSIsImlkIiwibW91c2VNb3ZlIiwibW91c2VPdXQiLCJjbGljayIsInByaW9yaXR5IiwiaW1nU3JjIiwic2V0X2ltZ1NyYyIsInBsYWNlaG9sZGVyIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VSTCIsImJsdXJEYXRhVVJMIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlT3V0Iiwib25DbGljayIsInVuZGVmaW5lZCIsIm9uTG9hZGluZ0NvbXBsZXRlIiwicmVzdWx0IiwibmF0dXJhbFdpZHRoIiwib25FcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Image/index.js\n");

/***/ }),

/***/ "./components/Review/index.js":
/*!************************************!*\
  !*** ./components/Review/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Review)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_clientFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/lib/clientFunctions */ \"./lib/clientFunctions.js\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Image */ \"./components/Image/index.js\");\n/* harmony import */ var _review_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review.module.css */ \"./components/Review/review.module.css\");\n/* harmony import */ var _review_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_review_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Review({ review }) {\n    function _rating(p) {\n        let _r = \"\";\n        for(let i = 0; i < p; i++){\n            _r = _r + \"★\";\n        }\n        return _r;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_review_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n            children: review.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: `${\"http://localhost:8000\"}/images/avatar.png`,\n                            width: 55,\n                            height: 55,\n                            alt: \"avatar\"\n                        }, void 0, false, {\n                            fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Review/index.js\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_review_module_css__WEBPACK_IMPORTED_MODULE_3___default().review_text),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_review_module_css__WEBPACK_IMPORTED_MODULE_3___default().author),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: item.userName\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Review/index.js\",\n                                                    lineNumber: 28,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \"\\xa0-\\xa0\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: (0,_lib_clientFunctions__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(item.date)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Review/index.js\",\n                                                    lineNumber: 29,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Review/index.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_review_module_css__WEBPACK_IMPORTED_MODULE_3___default().rating),\n                                            children: _rating(item.rating)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Review/index.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Review/index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: item.comment\n                                }, void 0, false, {\n                                    fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Review/index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Review/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, item._id, true, {\n                    fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Review/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Review/index.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/klc/Downloads/codecanyon-aMSIhdHy-nextlife-nextjs-ecommerce-cms/Next Ecom/components/Review/index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jldmlldy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNoQjtBQUNHO0FBRXZCLFNBQVNHLE9BQU8sRUFBRUMsTUFBTSxFQUFFO0lBQ3ZDLFNBQVNDLFFBQVFDLENBQUM7UUFDaEIsSUFBSUMsS0FBSztRQUNULElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixHQUFHRSxJQUFLO1lBQzFCRCxLQUFLQSxLQUFLO1FBQ1o7UUFDQSxPQUFPQTtJQUNUO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVdSLHFFQUFhO2tCQUMzQiw0RUFBQ1U7c0JBQ0VSLE9BQU9TLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxvQkFDakIsOERBQUNDOztzQ0FDQyw4REFBQ2YsOENBQVdBOzRCQUNWZ0IsS0FBSyxDQUFDLEVBQUVDLHVCQUEyQixDQUFDLGtCQUFrQixDQUFDOzRCQUN2REcsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsS0FBSTs7Ozs7O3NDQUVOLDhEQUFDZDs0QkFBSUMsV0FBV1IsdUVBQWU7OzhDQUM3Qiw4REFBQ087O3NEQUNDLDhEQUFDSDs0Q0FBRUksV0FBV1Isa0VBQVU7OzhEQUN0Qiw4REFBQ3dCOzhEQUFRWixLQUFLYSxRQUFROzs7Ozs7Z0RBQVU7OERBQ2hDLDhEQUFDQzs4REFBTTVCLGdFQUFVQSxDQUFDYyxLQUFLZSxJQUFJOzs7Ozs7Ozs7Ozs7c0RBRTdCLDhEQUFDRDs0Q0FBS2xCLFdBQVdSLGtFQUFVO3NEQUFHRyxRQUFRUyxLQUFLZ0IsTUFBTTs7Ozs7Ozs7Ozs7OzhDQUVuRCw4REFBQ3hCOzhDQUFHUSxLQUFLaUIsT0FBTzs7Ozs7Ozs7Ozs7OzttQkFmWGpCLEtBQUtrQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7QUFzQjNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9saWZlLy4vY29tcG9uZW50cy9SZXZpZXcvaW5kZXguanM/NDkyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRlRm9ybWF0IH0gZnJvbSBcIn4vbGliL2NsaWVudEZ1bmN0aW9uc1wiO1xuaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gXCIuLi9JbWFnZVwiO1xuaW1wb3J0IGNscyBmcm9tIFwiLi9yZXZpZXcubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXZpZXcoeyByZXZpZXcgfSkge1xuICBmdW5jdGlvbiBfcmF0aW5nKHApIHtcbiAgICBsZXQgX3IgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcDsgaSsrKSB7XG4gICAgICBfciA9IF9yICsgXCLimIVcIjtcbiAgICB9XG4gICAgcmV0dXJuIF9yO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzLmNvbnRhaW5lcn0+XG4gICAgICA8b2w+XG4gICAgICAgIHtyZXZpZXcubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLl9pZH0+XG4gICAgICAgICAgICA8SW1hZ2VMb2FkZXJcbiAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIucG5nYH1cbiAgICAgICAgICAgICAgd2lkdGg9ezU1fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezU1fVxuICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHMucmV2aWV3X3RleHR9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xzLmF1dGhvcn0+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPntpdGVtLnVzZXJOYW1lfTwvc3Ryb25nPiZuYnNwOy0mbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXRlRm9ybWF0KGl0ZW0uZGF0ZSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nscy5yYXRpbmd9PntfcmF0aW5nKGl0ZW0ucmF0aW5nKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD57aXRlbS5jb21tZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9vbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJkYXRlRm9ybWF0IiwiSW1hZ2VMb2FkZXIiLCJjbHMiLCJSZXZpZXciLCJyZXZpZXciLCJfcmF0aW5nIiwicCIsIl9yIiwiaSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm9sIiwibWFwIiwiaXRlbSIsImlkeCIsImxpIiwic3JjIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VSTCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicmV2aWV3X3RleHQiLCJhdXRob3IiLCJzdHJvbmciLCJ1c2VyTmFtZSIsInNwYW4iLCJkYXRlIiwicmF0aW5nIiwiY29tbWVudCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Review/index.js\n");

/***/ })

};
;