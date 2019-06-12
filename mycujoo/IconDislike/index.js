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
function IconDislike() {
    return React.createElement(
        "svg",
        { width: "39", height: "57", viewBox: "0 0 39 57", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement(
            "g",
            { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M18.422 40.08s0 3.061 2.426 7.68c1.509 2.875 1.857 5.749 1.905 7.51.005.201.007.387.005.557.081.506.412 1.173 1.596 1.173h10.963c.087 0 1.473-.036 1.292-1.73-.414-3.085-.852-9.953 1.74-17.818C42.447 25.008 25.871 16 25.871 16v15.574l-2.708-3.877a3.937 3.937 0 0 0-6.454 4.507l5.5 7.876h-3.788z", fill: "#F3D2A2" }),
            React.createElement("path", { d: "M16.954 32.295a3.829 3.829 0 0 1 .961-5.362c1.76-1.218 4.183-.792 5.412.952L26 31.678V2.034A2.043 2.043 0 0 0 23.947 0H2.053C.919 0 0 .91 0 2.034v35.932C0 39.09.92 40 2.053 40h20.332l-5.431-7.705z", fill: "#EA473B" }),
            React.createElement("path", { d: "M23.98 0H12.022A32.469 32.469 0 0 0 9 13.724 32.435 32.435 0 0 0 22.344 40h.098l-5.344-7.705a3.868 3.868 0 0 1 .946-5.363 3.808 3.808 0 0 1 5.325.953L26 31.678V2.034A2.027 2.027 0 0 0 23.98 0z", fill: "#F75652" }),
            React.createElement("path", { d: "M3.679 37.966V2.034C3.679.91 4.719 0 6 0H2.321C1.039 0 0 .91 0 2.034v35.932C0 39.09 1.04 40 2.321 40H6c-1.282 0-2.321-.91-2.321-2.034z", fill: "#D32420" }),
            React.createElement("path", { d: "M30.834 34.615L26 28v3.077l3.323 4.546c.29.4.866.497 1.283.218a.856.856 0 0 0 .228-1.226z", fill: "#D2A077" })
        )
    );
}

exports.IconDislike = IconDislike;
exports.icon_dislike = IconDislike;
exports.default = IconDislike;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);