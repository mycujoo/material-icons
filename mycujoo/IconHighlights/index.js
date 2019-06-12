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
function IconHighlights() {
    return React.createElement(
        "svg",
        { width: "50", height: "50", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement(
            "g",
            { transform: "translate(1 1)", fill: "none", "fill-rule": "evenodd" },
            React.createElement("circle", { stroke: "#000", cx: "24", cy: "24", r: "24" }),
            React.createElement("path", { d: "M36.853 14.875l-5.56-2c-.435-.156-1.615-.519-2.212 1.05l-.412 1.157c-.449 1.204.39 1.835.632 2.006l-2.755 7.724a1.31 1.31 0 0 0-.834.235c-.86.616-3.252 1.996-6.914 1.526a2.763 2.763 0 0 0-2.666 1.214c-.587.88-.618 2.336.28 3.45l.212 1.719c.058.469.37.856.813 1.019.59.219 1.036-.045 1.272-.27l.542-.517c.235.091.469.17.7.24l.094.758c.058.47.363.88.812 1.02.602.188 1.037-.045 1.273-.27l.912-.87.264.05.16 1.3c.058.47.368.865.812 1.02a1.206 1.206 0 0 0 1.273-.27l.9-.859c.098.062.196.126.295.194l.141 1.146c.058.47.366.87.813 1.02a1.308 1.308 0 0 0 1.272-.27l1.132-1.08c.58-.235 1.144-.666 1.664-1.288a.397.397 0 0 0-.048-.558.393.393 0 0 0-.556.049c-1.499 1.793-2.817 1.206-3.47.696-1.903-1.487-3.645-1.786-5.329-2.075-1.4-.24-2.721-.467-4.146-1.345-.655-.404-1.163-.918-1.508-1.528a1.912 1.912 0 0 1 .076-2.04 1.98 1.98 0 0 1 1.91-.87c.43.055.844.086 1.241.098.633.386 1.259.896 1.978 1.484 1.288 1.052 2.74 2.262 4.852 3.224 1.805.822 3.132.423 3.605.243 1.085-.412 1.883-1.218 2.407-1.918a8.19 8.19 0 0 1-.773 2.707.396.396 0 0 0 .181.53.393.393 0 0 0 .528-.182c.81-1.665 1.09-3.634.75-5.268a2.037 2.037 0 0 0-.54-1.018l2.803-7.858c.042.003 1.297.12 1.757-1.147l.413-1.157a1.741 1.741 0 0 0-1.046-2.22zM21.123 34.46a.444.444 0 0 1-.295-.37l-.055-.446c.44.1.874.177 1.303.25l-.49.468a.442.442 0 0 1-.463.098zm3.884 1.133a.442.442 0 0 1-.463.098.445.445 0 0 1-.295-.372l-.125-1.012c.53.142 1.063.329 1.606.597l-.723.689zm3.749.918l-.328.312a.442.442 0 0 1-.463.098.445.445 0 0 1-.295-.37l-.054-.433a2.9 2.9 0 0 0 1.14.393zm-10.95-4.04c.223.137.444.26.664.37l-.305.29a.442.442 0 0 1-.463.099.445.445 0 0 1-.295-.372l-.09-.725c.155.119.318.232.49.337zm11.815-4.927c-.39.57-.792.908-1.163.978-.231.043-.463-.018-.707-.187-.312-.216-.468-.447-.477-.705-.007-.218.086-.47.277-.75a1.33 1.33 0 0 0-.265-1.795l2.736-7.671 4.944 1.778-2.713 7.604c-1.074-.523-2.088-.049-2.632.748zm.474 4.122c-.922.35-1.93.276-2.996-.22-2.014-.939-3.433-2.098-4.685-3.12-.39-.319-.768-.627-1.142-.91 2.504-.22 4.185-1.214 4.898-1.724.102-.073.471-.219.706.048.235.266.074.62.026.692-.289.421-.429.833-.416 1.224.017.52.292.968.818 1.332.42.29.856.394 1.298.312.59-.11 1.151-.55 1.67-1.308a1.33 1.33 0 0 1 1.546-.512c.924.336.943 1.323.963 1.51-.2.406-1.102 2.075-2.686 2.676zm7.061-14.837l-.412 1.157a.941.941 0 0 1-1.204.571l-5.56-2c-.237-.085-.845-.468-.57-1.209l.413-1.156c.085-.238.341-.827 1.204-.571l5.56 2a.947.947 0 0 1 .57 1.208z", fill: "#000", "fill-rule": "nonzero" }),
            React.createElement("path", { d: "M20.659 24.958a6.75 6.75 0 0 0 3.516-3.83 6.754 6.754 0 0 0-.221-5.196 6.852 6.852 0 0 0-.702-1.184.395.395 0 1 0-.635.47c.204.276.386.572.541.882l-1.6-.678-.58-1.717c.197.123.388.257.57.403a.395.395 0 1 0 .493-.617 6.808 6.808 0 0 0-3.379-1.435 6.77 6.77 0 0 0-3.73.579 6.75 6.75 0 0 0-3.516 3.83 6.754 6.754 0 0 0 .22 5.196 6.8 6.8 0 0 0 6.17 3.93c.957 0 1.929-.204 2.853-.633zm-1.41-.335l-1.869-1.344.384-1.961 1.978-.92 1.75.971-.152 2.275c-.767.602-1.728.888-2.092.979zm-2.133-7.288l1.973.386.243 1.996-1.823.848-1.37-1.472.977-1.758zm6.447-.206c.2.691.275 1.406.22 2.117l-1.912 1.43-1.745-.97-.264-2.166 1.461-1.36 2.24.95zM22.18 22.9l.103-1.545 1.3-.973c-.219.986-.86 1.937-1.403 2.519zm-2.206-9.698l.81 2.4-1.46 1.36-2.142-.418-.84-1.81 1.672-1.938c.182.007 1.085.04 1.96.406zm-3.056-.346l-1.226 1.42-1.885.03c.431-.382 1.394-1.292 3.111-1.45zm-3.862 2.251l2.57-.04.84 1.81-1.06 1.908-1.98.24-1.308-2.178c.012-.037.232-1.093.938-1.74zm-1.204 2.832l.937 1.56-.524 1.633a5.957 5.957 0 0 1-.413-3.193zm.931 4.164l.735-2.293 1.984-.241 1.486 1.598-.383 1.96-2.32.54a5.96 5.96 0 0 1-1.502-1.564zm2.497 2.143l1.578-.368 1.271.915c-.109.006-1.748.06-2.849-.547z", fill: "#38D430", "fill-rule": "nonzero" })
        )
    );
}

exports.IconHighlights = IconHighlights;
exports.icon_highlights = IconHighlights;
exports.default = IconHighlights;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);