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
function IconGenderOther() {
    return React.createElement(
        "svg",
        { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2000 2003" },
        React.createElement("path", { d: "M1 1331v-51c.28-2.11.64-4.22.82-6.35 1.49-18.25 2.31-36.59 4.53-54.76A678.75 678.75 0 0 1 59.05 1026q90-203.81 280.15-320.09c95.78-58.42 200-91.12 312-99.21a678.6 678.6 0 0 1 185.9 11.88q151.53 31 276 122.94c1.18.87 2.42 1.66 3.88 2.65l121.57-115.57-265.19-269.17 133.45-141.53 270.34 270 282.75-286.75H1284V1h716c-.07 2.34-.2 4.68-.2 7v708.65h-200.36V346.37L1520.5 625.2l274.64 273.88-136.14 140.2-276.31-274.13L1260 883.87c7.12 10.44 14.06 20.23 20.61 30.26 71.77 109.91 112.38 230.11 118.06 361.51a673.39 673.39 0 0 1-22.8 206.81c-42.67 157-128.75 285.17-259.23 382.06C970.17 1973.26 805 2017 623.51 1999.1a652.51 652.51 0 0 1-153.15-34.1q-215.13-75.82-345.67-263C52 1597.38 11.72 1481 2.76 1353.81 2.23 1346.2 1.59 1338.6 1 1331zm1198.5-28.16c-.41-279-226.33-499.1-500-498.22-277.6.9-502.75 227.91-498.68 507.89 3.94 272.08 225.35 492.19 500.66 490.93 275.94-1.26 498.11-224.7 498.02-500.6z" })
    );
}

exports.IconGenderOther = IconGenderOther;
exports.icon_gender_other = IconGenderOther;
exports.default = IconGenderOther;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);