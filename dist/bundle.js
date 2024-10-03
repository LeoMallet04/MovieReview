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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.registerUser = registerUser;\nexports.loginUser = loginUser;\nlet userList = [];\nfunction addUser(user) {\n    userList.push(user);\n}\nfunction createUser(username, password, email) {\n    return {\n        username: username,\n        password: password,\n        email: email\n    };\n}\nfunction registerUser() {\n    var _a, _b, _c;\n    let usernameInput = (_a = document.getElementById(\"username\")) === null || _a === void 0 ? void 0 : _a.value;\n    let passwordInput = (_b = document.getElementById(\"password\")) === null || _b === void 0 ? void 0 : _b.value;\n    let emailInput = (_c = document.getElementById(\"email\")) === null || _c === void 0 ? void 0 : _c.value;\n    alert(emailInput);\n    alert(usernameInput);\n    alert(passwordInput);\n    if (usernameInput && passwordInput && emailInput) {\n        alert('Username: ' + usernameInput + 'Password: ' + passwordInput + 'Email: ' + emailInput);\n    }\n    else {\n        alert('Por favor, preencha os dois campos.');\n    }\n    const user = createUser(usernameInput, passwordInput, emailInput);\n    addUser(user);\n    alert(\"User:\" + userList[0].username + \"Password: \" + userList[0].password + \"Email: \" + userList[0].email);\n    return user;\n}\nfunction loginUser() {\n    var _a, _b;\n    let usernameInput = (_a = document.getElementById(\"username\")) === null || _a === void 0 ? void 0 : _a.value;\n    let passwordInput = (_b = document.getElementById(\"password\")) === null || _b === void 0 ? void 0 : _b.value;\n    for (const user of userList) {\n        if (user.username === usernameInput && user.password === passwordInput) {\n            alert('Login sucessful');\n            return user;\n        }\n    }\n    alert(\"Login failed\");\n    return null;\n}\n// Torna a função acessível no escopo global\nwindow.registerUser = registerUser;\nwindow.loginUser = loginUser;\nalert(\"TESTE\");\n\n\n//# sourceURL=webpack://avaliador-de-filmes/./src/indexFront.ts?");

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