"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["start"],{

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createList(items) {\n  const ul = document.createElement('ul');\n  items.forEach((item) => {\n    const li = document.createElement('li');\n    if (item !== Node) {\n      li.innerText = item;\n    } else {\n      li.appendChild(item);\n    }\n    ul.appendChild(li);\n  });\n\n  return ul;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createList);\n\n\n//# sourceURL=webpack://restaurant/./src/list.js?");

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n\n\nconst main = document.createElement('main');\nconst title = document.createElement('h1');\n\ntitle.innerText = 'Restaurant Name';\nmain.appendChild(title);\n\nconst bestReviewSec = document.createElement('section');\nconst bestReviewQuote = document.createElement('blockquote');\nconst bestReviewName = document.createElement('p');\n\nbestReviewQuote.innerText =\n  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi nunc, blandit id molestie ut, convallis et risus. Vestibulum venenatis.';\nbestReviewName.innerText = 'Reviewers Name';\nbestReviewSec.appendChild(bestReviewQuote);\nbestReviewSec.appendChild(bestReviewName);\nmain.appendChild(bestReviewSec);\n\nfunction createSection(titleText, content) {\n  const sec = document.createElement('section');\n  const h2 = document.createElement('h2');\n  h2.innerText = titleText;\n  sec.appendChild(h2);\n\n  if (content instanceof Node) sec.appendChild(content);\n  else {\n    const p = document.createElement('p');\n    p.innerText = content;\n    sec.appendChild(p);\n  }\n\n  return sec;\n}\n\nmain.appendChild(\n  createSection(\n    'Hours',\n    (0,_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n      'Sunday: 8am - 8pm',\n      'Monday: 6am - 6pm',\n      'Tuesday: 6am - 6pm',\n      'Wednesday: 6am - 6pm',\n      'Thursday: 6am - 10pm',\n      'Friday: 6am - 10pm',\n      'Saturday: 8am - 10pm',\n    ])\n  )\n);\n\nmain.appendChild(createSection('Location', 'Husky Trail 4, Dogville.'));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n\n//# sourceURL=webpack://restaurant/./src/start.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/start.js"));
/******/ }
]);