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
function IconGenderMale() {
    return React.createElement(
        "svg",
        { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 720 720" },
        React.createElement("path", { d: "M.06 419.19c1.29-9.71 2.28-19.48 3.92-29.13 20-117.79 106.2-208.61 223.47-233.65 84.17-18 161.23.31 231.2 49.86 1 .67 1.87 1.37 3.11 2.28L594.62 73.46H498V3.66h219.18V222h-69.32v-98.47L514.34 259.29l-2.16-1.68c.82 1.18 1.6 2.38 2.47 3.52 34.15 45.08 54.14 95.66 58.61 152.12 9.54 120.61-59.09 234.72-170 283.11a290.27 290.27 0 0 1-95.44 24 25.73 25.73 0 0 0-3.8.87h-34c-1.43-.31-2.85-.66-4.29-.91-17.84-3.07-36.22-4.33-53.43-9.49C97 676.25 27.53 599.43 4 481.29c-1.91-9.59-2.67-19.4-4-29.1zm504.22 16.31c.23-118.61-97.14-215.53-216.84-215.82-119-.29-217 96.82-217.4 215.49-.4 118.49 97.12 215.73 216.64 216s217.37-96.74 217.6-215.67z" })
    );
}

exports.IconGenderMale = IconGenderMale;
exports.icon_gender_male = IconGenderMale;
exports.default = IconGenderMale;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);