module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = __webpack_require__(1);
function IconGenderMixed() {
    return React.createElement(
        "svg",
        { dataName: "Capa 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 247.6 192.3" },
        React.createElement("path", { d: "M196.7 65.4V48.8h10v-21h-10v-15h-25v15h-11v21h11v16.4a63.9 63.9 0 1 0 25 .2zM184 166.6a38.8 38.8 0 1 1 38.8-38.8 38.84 38.84 0 0 1-38.8 38.8z" }),
        React.createElement("path", { d: "M127.6 63.8A63.8 63.8 0 1 0 0 63.8c0 31.1 22.7 57 51.7 62.6v28l-8.2-7.1-13.5 16 34.3 28.9 35.3-28.8-13.4-16.3-9.5 7.7v-28.7a63.7 63.7 0 0 0 50.9-62.3zm-102.4 0A38.8 38.8 0 1 1 64 102.6a38.84 38.84 0 0 1-38.8-38.8z" })
    );
}

exports.IconGenderMixed = IconGenderMixed;
exports.icon_gender_mixed = IconGenderMixed;
exports.default = IconGenderMixed;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);