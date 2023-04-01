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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title */ \"./src/title.js\");\n\n\n\nconst siblings = [];\n\nsiblings.push((0,_title__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Restaurant Name'));\n\nfunction createReview() {\n  const bestReviewSec = document.createElement('section');\n  const bestReviewFig = document.createElement('figure');\n  const bestReviewQuote = document.createElement('blockquote');\n  const bestReviewName = document.createElement('figcaption');\n\n  bestReviewQuote.innerText =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi nunc, blandit id molestie ut, convallis et risus. Vestibulum venenatis.';\n  bestReviewName.innerText = '- Reviewers Name';\n  bestReviewFig.append(bestReviewQuote, bestReviewName);\n  bestReviewSec.appendChild(bestReviewFig);\n  return bestReviewSec;\n}\n\nfunction createSection(titleText, content) {\n  const sec = document.createElement('section');\n  const h2 = document.createElement('h2');\n  h2.innerText = titleText;\n  sec.appendChild(h2);\n\n  if (content instanceof Node) sec.appendChild(content);\n  else {\n    const p = document.createElement('p');\n    p.innerText = content;\n    sec.appendChild(p);\n  }\n\n  sec.classList.add('split-column');\n  return sec;\n}\n\nsiblings.push(createReview());\n\nsiblings.push(\n  createSection(\n    'Hours',\n    (0,_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n      'Sunday: 8am - 8pm',\n      'Monday: 6am - 6pm',\n      'Tuesday: 6am - 6pm',\n      'Wednesday: 6am - 6pm',\n      'Thursday: 6am - 10pm',\n      'Friday: 6am - 10pm',\n      'Saturday: 8am - 10pm',\n    ])\n  )\n);\n\nsiblings.push(createSection('Location', 'Husky Trail 4, Dogville.'));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (siblings);\n\n\n//# sourceURL=webpack://restaurant/./src/start.js?");

/***/ }),

/***/ "./src/title.js":
/*!**********************!*\
  !*** ./src/title.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTitle)\n/* harmony export */ });\n/**\n * Create a `h1` element.\n * @param {string} text Inner text of the element.\n * @returns {Element} The `h1` element.\n */\nfunction createTitle(text) {\n  const title = document.createElement('h1');\n\n  title.innerText = text;\n  return title;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/title.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/start.js"));
/******/ }
]);