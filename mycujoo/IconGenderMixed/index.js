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
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 247.582 247.582" },
        React.createElement("path", { d: "M196.666 93.047V76.445h10v-21h-10v-15h-25v15h-11v21h11v16.424c-29 5.64-51.581 31.564-51.581 62.617 0 35.162 28.69 63.769 63.852 63.769 35.163 0 63.645-28.606 63.645-63.769 0-30.717-21.916-56.427-50.916-62.439zm-12.645 101.207c-21.377 0-38.769-17.392-38.769-38.769 0-21.378 17.392-38.77 38.769-38.77 21.378 0 38.77 17.392 38.77 38.77-.001 21.378-17.392 38.769-38.77 38.769zm-56.44-102.85c0-35.162-28.523-63.769-63.686-63.769S0 56.242 0 91.404c0 31.068 22.666 57.003 51.666 62.625v27.99l-8.184-7.057-13.471 16.039 34.295 28.945 35.335-28.831-13.437-16.268-9.537 7.658v-28.674c28.999-6.027 50.914-31.726 50.914-62.427zm-102.373 0c0-21.377 17.392-38.769 38.77-38.769s38.77 17.392 38.77 38.769c0 21.378-17.392 38.77-38.77 38.77s-38.77-17.392-38.77-38.77z" })
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