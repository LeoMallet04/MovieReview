/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/indexFront.ts":
/*!***************************!*\
  !*** ./src/indexFront.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getUsername = getUsername;\nfunction getUsername() {\n    var _a, _b;\n    let usernameInput = (_a = document.getElementById(\"username\")) === null || _a === void 0 ? void 0 : _a.value;\n    let passwordInput = (_b = document.getElementById(\"password\")) === null || _b === void 0 ? void 0 : _b.value;\n    if (usernameInput && passwordInput) {\n        alert(`Username: ${usernameInput}, Password: ${passwordInput}`);\n    }\n    else {\n        alert('Por favor, preencha os dois campos.');\n    }\n}\n// Torna a função acessível no escopo global\nwindow.getUsername = getUsername;\nalert(\"TESTE\");\n\n\n//# sourceURL=webpack://avaliador-de-filmes/./src/indexFront.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/indexFront.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;