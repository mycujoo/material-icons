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
function IconFollow() {
    return React.createElement(
        "svg",
        { width: "50", height: "50", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement(
            "g",
            { transform: "translate(1 1)", fill: "none", "fill-rule": "evenodd" },
            React.createElement("circle", { stroke: "#000", cx: "24", cy: "24", r: "24" }),
            React.createElement(
                "g",
                { "fill-rule": "nonzero" },
                React.createElement("path", { d: "M16.937 12.516a.382.382 0 0 0 .524.123c.4-.247.86-.377 1.332-.377H29a2.532 2.532 0 0 1 2.53 2.528v1.2H16.262v-1.2a2.5 2.5 0 0 1 .284-1.165.38.38 0 1 0-.676-.35c-.242.464-.37.988-.37 1.515v19.42a3.295 3.295 0 0 0 3.293 3.29h9.413c1.21 0 2.176-.254 2.898-.762a3.283 3.283 0 0 0 1.189-2.528V14.79a3.283 3.283 0 0 0-1.189-2.528c-.722-.508-1.688-.762-2.898-.762h-9.413c-.614 0-1.214.17-1.733.492a.38.38 0 0 0-.123.524zm14.593 4.235v15.498H16.262V16.751H31.53zM29 36.738H18.793a2.532 2.532 0 0 1-2.53-2.528v-1.2H31.53v1.2A2.532 2.532 0 0 1 29 36.738z", fill: "#000" }),
                React.createElement("path", { d: "M23.175 28.508a4.164 4.164 0 0 0 1.95-.124 4.116 4.116 0 0 0 2.473-2.05c.685-1.329.428-2.793.303-3.2a4.172 4.172 0 0 0-2.044-2.479A4.192 4.192 0 0 0 20.19 22.4a4.181 4.181 0 0 0-.303 3.202c.236.77.678 1.44 1.274 1.952.007.011.268.31.838.579.202.095.594.22 1.176.375zm1.569-.81l.295-.36a.734.734 0 0 1 .545-.266l.44-.01c-.552.506-1.227.622-1.28.636zm2.573-3.093l-.234-.353a.737.737 0 0 1-.092-.61l.128-.445c.22.627.226.992.198 1.408zm-.72-2.355l-.339 1.181c-.121.422-.053.874.189 1.242l.636.96c-.1.275-.275.552-.34.65l-1.176.025c-.432.01-.838.208-1.116.543l-.776.948a3.374 3.374 0 0 1-.647-.105l-.401-1.16a1.5 1.5 0 0 0-.856-.896l-1.216-.487a3.462 3.462 0 0 1-.083-.538l1.045-.814c.336-.263.544-.659.571-1.087l.08-1.313c.165-.096.337-.177.514-.244l1.074.74c.353.24.793.318 1.206.213l1.218-.305c.153.137.292.287.417.447zm-1.292-1.015l-.528.133a.734.734 0 0 1-.591-.104l-.476-.328c.534-.03 1.08.066 1.595.3zm-3.94.81l-.037.62a.738.738 0 0 1-.28.532l-.494.385c.067-.284.251-.982.811-1.537zm-.416 4.087l.539.215c.196.08.35.24.42.438l.171.498a3.403 3.403 0 0 1-1.13-1.151zm1.994-2.803l.784-.383a.765.765 0 0 1 .887.155l.607.626c.142.147.337.449.127.89l-.409.77a.765.765 0 0 1-.809.396l-.86-.15a.764.764 0 0 1-.626-.647l-.122-.862a.763.763 0 0 1 .421-.795zm1.73.93l-.61-.627-.783.383.122.864.86.151.41-.77z", fill: "#38D430" })
            )
        )
    );
}

exports.IconFollow = IconFollow;
exports.icon_follow = IconFollow;
exports.default = IconFollow;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);