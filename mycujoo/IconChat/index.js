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
function IconChat() {
    return React.createElement(
        "svg",
        { width: "50", height: "50", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement(
            "g",
            { transform: "translate(1 1)", fill: "none", "fill-rule": "evenodd" },
            React.createElement("circle", { stroke: "#000", cx: "24", cy: "24", r: "24" }),
            React.createElement("path", { d: "M27.719 12c-4.748 0-8.644 3.227-8.946 7.291C14.252 19.515 10 22.73 10 27.076c0 1.817.73 3.577 2.057 4.972a3.132 3.132 0 0 1-.848 2.979.515.515 0 0 0-.114.566.526.526 0 0 0 .487.321 5.861 5.861 0 0 0 4.03-1.606c1.05.353 2.418.567 3.67.567 4.746 0 8.642-3.227 8.945-7.29 1.104-.049 2.252-.25 3.16-.555a5.861 5.861 0 0 0 4.031 1.606.527.527 0 0 0 .487-.32.515.515 0 0 0-.114-.567 3.132 3.132 0 0 1-.848-2.98C36.271 23.376 37 21.616 37 19.8c0-4.52-4.58-7.8-9.281-7.8zM19.28 33.835c-1.244 0-2.663-.241-3.613-.614a.533.533 0 0 0-.584.132 4.772 4.772 0 0 1-2.367 1.385 4.15 4.15 0 0 0 .322-3.094.517.517 0 0 0-.129-.22c-1.196-1.215-1.855-2.759-1.855-4.348 0-3.663 3.767-6.758 8.226-6.758 4.211 0 7.91 2.887 7.91 6.758 0 3.727-3.548 6.759-7.91 6.759zm14.809-9.69a.52.52 0 0 0-.129.22 4.15 4.15 0 0 0 .322 3.095 4.77 4.77 0 0 1-2.367-1.385.533.533 0 0 0-.584-.132c-.824.323-1.998.547-3.107.6-.154-1.965-1.149-3.813-2.85-5.185h6.879a.524.524 0 0 0 .527-.52.524.524 0 0 0-.527-.52h-8.499a9.946 9.946 0 0 0-3.924-1.025c.303-3.491 3.725-6.253 7.888-6.253 4.46 0 8.226 3.095 8.226 6.758 0 1.589-.659 3.133-1.855 4.348zm-1.861-7.13H25.57c-.292 0-.528.258-.528.578 0 .32.236.578.528.578h6.658c.292 0 .528-.259.528-.578 0-.32-.236-.579-.528-.579zm-8.536 0a.579.579 0 1 0 0 1.157.579.579 0 0 0 0-1.158z", fill: "#000", "fill-rule": "nonzero" }),
            React.createElement("path", { d: "M23.357 24.5c.292 0 .529.259.529.579 0 .32-.237.578-.529.578H16.7c-.292 0-.529-.259-.529-.578 0-.32.237-.579.529-.579h6.657zm.01 3.086c.287 0 .519.259.519.578 0 .32-.232.579-.519.579h-8.606c-.286 0-.518-.26-.518-.579 0-.32.232-.578.518-.578h8.606zm-8.546-1.929a.579.579 0 1 1 0-1.157.579.579 0 0 1 0 1.157z", fill: "#38D430", "fill-rule": "nonzero" })
        )
    );
}

exports.IconChat = IconChat;
exports.icon_chat = IconChat;
exports.default = IconChat;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);