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
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected } (4:135)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mfunction\u001b[39m \u001b[33mIconGenderFemale\u001b[39m() {\n \u001b[90m 3 | \u001b[39m    \u001b[36mreturn\u001b[39m (\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33msvg\u001b[39m id\u001b[33m=\u001b[39m\u001b[32m\"Layer_1\"\u001b[39m data\u001b[33m-\u001b[39mname\u001b[33m=\u001b[39m\u001b[32m\"Layer 1\"\u001b[39m xmlns\u001b[33m=\u001b[39m\u001b[32m\"http://www.w3.org/2000/svg\"\u001b[39m viewBox\u001b[33m=\u001b[39m\u001b[32m\"0 0 1109.54 1650.37\"\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33mdefs\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33mstyle\u001b[39m\u001b[33m>\u001b[39m\u001b[33m.\u001b[39mcls\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m{fill\u001b[33m:\u001b[39m\u001b[37m\u001b[41m\u001b[1m#\u001b[22m\u001b[49m\u001b[39mfff}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mstyle\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[35m/defs><path class=\"cls-1\" d=\"M620.52 1317.38a37.56 37.56 0 0 1-.44-3.87q0-102-.08-204c0-3.2 1.09-4.2 4.14-4.72 19.67-3.35 39.56-5.89 58.92-10.59q184.25-44.73 303.78-192.15c67-82.85 106.26-177.7 118.73-283.56 7-59.07 5-117.93-7.76-176C1062.1 280 972.26 155.83 828.24 72.53 720.57 10.26 603.81-10.73 480.57 5a537.44 537.44 0 0 0-171.15 52.13C135 143.46 19.13 313 2.18 506.93c-5.6 64-.48 127.15 16.18 189.21Q66.45 875.32 211.94 990.6c78.92 62.51 168.77 100 268.47 113.67 5.28.73 6.31 2.41 6.3 7.27q-.22 99.74-.1 199.49v6.54H300.47v133.28h186.29v199.52h133.31v-199.69h186.2v-133.3z\"/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33mpath\u001b[39m d\u001b[33m=\u001b[39m\u001b[32m\"M620.52 1317.38h185.75v133.3h-186.2v199.69H486.76v-199.52H300.47v-133.28h186.14V1311q0-99.75.1-199.49c0-4.86-1-6.54-6.3-7.27-99.7-13.69-189.55-51.16-268.47-113.67Q66.65 875.49 18.36 696.14C1.7 634.08-3.42 570.92 2.18 506.93 19.13 313 135 143.46 309.42 57.13A537.44 537.44 0 0 1 480.57 5c123.24-15.75 240 5.24 347.67 67.51 144 83.3 233.86 207.42 269.57 370 12.74 58 14.72 116.89 7.76 176-12.47 105.86-51.75 200.71-118.73 283.56q-119.13 147.36-303.78 192.15c-19.36 4.7-39.25 7.24-58.92 10.59-3 .52-4.15 1.52-4.14 4.72q.12 102 .08 204a37.56 37.56 0 0 0 .44 3.85zM133.33 554.21c0 232.18 187.22 420.41 418.72 421.82 232.1 1.42 423.88-186.14 424-421.59.13-232.22-188.15-420.45-421-421-232.43-.52-421.7 188.33-421.72 420.77z\"\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33msvg\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m   | \u001b[39m                                                                                                                                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m    )\n \u001b[90m 6 | \u001b[39m}\n \u001b[90m 7 | \u001b[39m\u001b[0m\n");

/***/ })
/******/ ]);