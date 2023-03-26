"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["header"],{

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = document.createElement('header');\nconst nav = document.createElement('nav');\nconst list = document.createElement('ul');\nconst links = [\n  {\n    text: Home,\n  },\n  {\n    text: Menu,\n  },\n  {\n    text: Contact,\n  },\n];\n\nlinks.forEach((link) => {\n  const a = document.createElement('a');\n  a.innerText = link.text;\n  list.appendChild(a);\n});\n\nnav.appendChild(list);\nheader.appendChild(nav);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/header.js"));
/******/ }
]);