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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./mycujoo/IconChat/src.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./mycujoo/IconChat/src.js":
/*!*********************************!*\
  !*** ./mycujoo/IconChat/src.js ***!
  \*********************************/
/*! exports provided: IconChat, icon_chat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconChat\", function() { return IconChat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"icon_chat\", function() { return IconChat; });\nvar React = __webpack_require__(/*! react */ \"react\");\n\nfunction IconChat() {\n  return React.createElement(\"svg\", {\n    width: \"50\",\n    height: \"50\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, React.createElement(\"g\", {\n    transform: \"translate(1 1)\",\n    fill: \"none\",\n    fillRule: \"evenodd\"\n  }, React.createElement(\"circle\", {\n    stroke: \"#000\",\n    cx: \"24\",\n    cy: \"24\",\n    r: \"24\"\n  }), React.createElement(\"path\", {\n    d: \"M27.719 12c-4.748 0-8.644 3.227-8.946 7.291C14.252 19.515 10 22.73 10 27.076c0 1.817.73 3.577 2.057 4.972a3.132 3.132 0 01-.848 2.979.515.515 0 00-.114.566.526.526 0 00.487.321 5.861 5.861 0 004.03-1.606c1.05.353 2.418.567 3.67.567 4.746 0 8.642-3.227 8.945-7.29 1.104-.049 2.252-.25 3.16-.555a5.861 5.861 0 004.031 1.606.527.527 0 00.487-.32.515.515 0 00-.114-.567 3.132 3.132 0 01-.848-2.98C36.271 23.376 37 21.616 37 19.8c0-4.52-4.58-7.8-9.281-7.8zM19.28 33.835c-1.244 0-2.663-.241-3.613-.614a.533.533 0 00-.584.132 4.772 4.772 0 01-2.367 1.385 4.15 4.15 0 00.322-3.094.517.517 0 00-.129-.22c-1.196-1.215-1.855-2.759-1.855-4.348 0-3.663 3.767-6.758 8.226-6.758 4.211 0 7.91 2.887 7.91 6.758 0 3.727-3.548 6.759-7.91 6.759zm14.809-9.69a.52.52 0 00-.129.22 4.15 4.15 0 00.322 3.095 4.77 4.77 0 01-2.367-1.385.533.533 0 00-.584-.132c-.824.323-1.998.547-3.107.6-.154-1.965-1.149-3.813-2.85-5.185h6.879a.524.524 0 00.527-.52.524.524 0 00-.527-.52h-8.499a9.946 9.946 0 00-3.924-1.025c.303-3.491 3.725-6.253 7.888-6.253 4.46 0 8.226 3.095 8.226 6.758 0 1.589-.659 3.133-1.855 4.348zm-1.861-7.13H25.57c-.292 0-.528.258-.528.578 0 .32.236.578.528.578h6.658c.292 0 .528-.259.528-.578 0-.32-.236-.579-.528-.579zm-8.536 0a.579.579 0 100 1.157.579.579 0 000-1.158z\",\n    fill: \"#000\",\n    fillRule: \"nonzero\"\n  }), React.createElement(\"path\", {\n    d: \"M23.357 24.5c.292 0 .529.259.529.579 0 .32-.237.578-.529.578H16.7c-.292 0-.529-.259-.529-.578 0-.32.237-.579.529-.579h6.657zm.01 3.086c.287 0 .519.259.519.578 0 .32-.232.579-.519.579h-8.606c-.286 0-.518-.26-.518-.579 0-.32.232-.578.518-.578h8.606zm-8.546-1.929a.579.579 0 110-1.157.579.579 0 010 1.157z\",\n    fill: \"#38D430\",\n    fillRule: \"nonzero\"\n  })));\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconChat);\n\n//# sourceURL=webpack:///./mycujoo/IconChat/src.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });