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
function IconPerson() {
    return React.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", width: "33", height: "33" },
        React.createElement(
            "g",
            { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { fill: "#EEF0FB", d: "M16.5 2C24.508 2 31 8.492 31 16.5S24.508 31 16.5 31 2 24.508 2 16.5 8.492 2 16.5 2" }),
            React.createElement("path", { stroke: "#EEF0FB", strokeWidth: "3", d: "M16.5 2C24.508 2 31 8.492 31 16.5S24.508 31 16.5 31 2 24.508 2 16.5 8.492 2 16.5 2z" }),
            React.createElement("path", { fill: "#FFF", d: "M23.94 25.87l-3.945-1.99a1.097 1.097 0 0 1-.604-.985v-1.409a6.78 6.78 0 0 0 .297-.396c.512-.73.922-1.54 1.22-2.416.584-.27.962-.85.962-1.507V15.5c0-.401-.149-.79-.413-1.094V12.19c.022-.229.114-1.593-.865-2.719C19.744 8.495 18.367 8 16.5 8c-1.867 0-3.244.495-4.092 1.471-.979 1.125-.888 2.49-.865 2.72v2.215a1.672 1.672 0 0 0-.413 1.094v1.667c0 .507.229.98.619 1.295a8.774 8.774 0 0 0 1.447 3.016v1.378c0 .404-.219.774-.57.967L8.943 25.85A3.763 3.763 0 0 0 7 29.151v1.35C7 32.477 13.214 33 16.5 33c3.286 0 9.5-.522 9.5-2.5v-1.268c0-1.432-.79-2.72-2.06-3.362" })
        )
    );
}

exports.IconPerson = IconPerson;
exports.icon_person = IconPerson;
exports.default = IconPerson;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);