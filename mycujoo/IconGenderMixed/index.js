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
        { width: "90", height: "96", viewBox: "0 0 90 96", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M72.785 0v5.869h6.646L66.477 18.13a25.164 25.164 0 0 0-18.041-7.594c-9.5 0-17.798 5.27-22.097 13.032-.375-.019-.732-.019-1.107-.019C11.32 23.55 0 34.856 0 48.75c0 12.9 9.762 23.569 22.284 25.031V81.6H13.48v5.869h8.805V96h5.876v-8.531h9.2V81.6h-9.2v-7.819c8.242-.956 15.3-5.906 19.15-12.862.375.019.731.019 1.107.019 13.91 0 25.231-11.307 25.231-25.2 0-4.726-1.314-9.15-3.585-12.92l14.06-13.312V16.8H90V0H72.785zM25.232 68.081c-10.664 0-19.356-8.662-19.356-19.331 0-10.237 8.016-18.637 18.116-19.294a24.719 24.719 0 0 0-.788 6.281c0 11.344 7.528 20.944 17.872 24.113-3.51 4.969-9.311 8.231-15.844 8.231zm18.473-13.594c-8.392-2.118-14.625-9.712-14.625-18.75 0-1.987.3-3.918.864-5.737 8.391 2.119 14.624 9.712 14.624 18.75.019 2.006-.3 3.919-.863 5.737zm5.97.544c.525-2.006.788-4.106.788-6.281 0-11.344-7.528-20.944-17.872-24.113 3.51-4.968 9.293-8.23 15.826-8.23 10.663 0 19.355 8.662 19.355 19.33.019 10.257-7.997 18.657-18.097 19.294z" })
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