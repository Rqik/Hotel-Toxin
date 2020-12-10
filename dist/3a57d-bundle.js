/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("\r\n\r\nlet age = { '23' : 22};\r\n\r\n\r\n\r\nlet objFunc = {\r\n\r\n  'age': 'возраст',\r\n  'name': 'имя',\r\n  'fuc': ()=> {\r\n    console.log(age);\r\n    console.log(this.name);\r\n  }\r\n}\r\nobjFunc.fuc();\r\n\r\n// objFunc.fuc.bind('ss');\r\n\r\nobjFunc.fuc();\r\n\n\n//# sourceURL=webpack://project-fsd-2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ })()
;