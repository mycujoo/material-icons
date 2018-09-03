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
function IconLike() {
    return React.createElement(
        "svg",
        { width: "53", height: "57", viewBox: "0 0 53 57", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement(
            "g",
            null,
            React.createElement("path", { d: "M1.062 35.981s-2.177-2.027-.16-4.218c2.016-2.187 4.196-.158 4.196-.158l10.109 9.412c-.16-.15.703-1.38.575-1.5L1.75 26.455s-2.178-2.027-.161-4.215c2.018-2.189 4.196-.162 4.196-.162l13.198 12.289c-.032-.029.951-1.148.932-1.166l-15.3-14.246s-2.178-2.027-.161-4.216c2.018-2.188 4.196-.16 4.196-.16l15.3 14.246c.018.015 1.066-1.043 1.097-1.013l-14.3-13.315s-2.178-2.028-.161-4.217c2.018-2.187 4.196-.16 4.196-.16s10.642 9.91 15.12 14.078c4.478 4.17 5.487 3.075 5.487 3.075l-4.043-3.764-4.67-4.345s-2.177-2.027-.159-4.216c2.019-2.191 4.195-.164 4.195-.164L42.69 25.936c7.214 6.718 7.647 18.045.962 25.298-6.683 7.254-17.953 7.686-25.17.97-.38-.356-1.065-1.042-1.035-1.075l-.051.06L1.062 35.98z" }),
            React.createElement("path", { d: "M5.593 32.92s-2.178-2.027-.161-4.216c2.017-2.19 4.195-.163 4.195-.163l10.11 9.416c-.16-.15.703-1.38.575-1.5L6.28 23.394s-2.178-2.028-.16-4.217c2.016-2.189 4.194-.162 4.194-.162l13.198 12.29c-.03-.03.952-1.148.934-1.165l-15.3-14.248s-2.178-2.026-.162-4.215c2.017-2.19 4.195-.162 4.195-.162L28.478 25.76c.02.019 1.067-1.04 1.098-1.011L15.277 11.434s-2.178-2.028-.16-4.215c2.016-2.19 4.194-.162 4.194-.162l15.122 14.08c4.476 4.168 5.487 3.073 5.487 3.073l-4.045-3.764-4.668-4.345s-2.176-2.028-.16-4.217c2.018-2.189 4.196-.161 4.196-.161l11.976 11.15c7.216 6.719 7.647 18.047.963 25.3s-17.953 7.686-25.169.967c-.382-.354-1.065-1.04-1.035-1.072l-.053.06L5.593 32.921z" }),
            React.createElement(
                "g",
                null,
                React.createElement("path", { d: "M36.703 11.107a1.55 1.55 0 0 1-.953-.327 1.575 1.575 0 0 1-.28-2.203l4.653-6.054a1.553 1.553 0 0 1 2.19-.282c.683.529.808 1.515.281 2.201l-4.653 6.054c-.307.4-.77.611-1.238.611M28.047 11.957a1.567 1.567 0 0 1-1.563-1.57V2.533c0-.867.7-1.57 1.563-1.57.864 0 1.562.703 1.562 1.57v7.852c0 .867-.698 1.57-1.562 1.57M42.758 16.145a1.56 1.56 0 0 1-1.467-1.035 1.57 1.57 0 0 1 .933-2.012l7.16-2.618a1.558 1.558 0 0 1 2.001.94 1.572 1.572 0 0 1-.933 2.013l-7.16 2.616a1.559 1.559 0 0 1-.534.096" })
            )
        )
    );
}

exports.IconLike = IconLike;
exports.icon_like = IconLike;
exports.default = IconLike;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);