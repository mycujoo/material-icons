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
/******/ 	return __webpack_require__(__webpack_require__.s = "./mycujoo/IconLikeClose/src.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./mycujoo/IconLikeClose/src.js":
/*!**************************************!*\
  !*** ./mycujoo/IconLikeClose/src.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/aandrei/Documents/Work/material-icons2/mycujoo/IconLikeClose/src.js: Namespace tags are not supported by default. React's JSX doesn't support namespace tags. You can turn on the 'throwIfNamespace' flag to bypass this warning.\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[36mfunction\\u001b[39m \\u001b[33mIconLikeClose\\u001b[39m() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 4 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33msvg\\u001b[39m width\\u001b[33m=\\u001b[39m\\u001b[32m\\\"21\\\"\\u001b[39m height\\u001b[33m=\\u001b[39m\\u001b[32m\\\"20\\\"\\u001b[39m xmlns\\u001b[33m=\\u001b[39m\\u001b[32m\\\"http://www.w3.org/2000/svg\\\"\\u001b[39m xmlns\\u001b[33m:\\u001b[39mxlink\\u001b[33m=\\u001b[39m\\u001b[32m\\\"http://www.w3.org/1999/xlink\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mdefs\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mpath\\u001b[39m d\\u001b[33m=\\u001b[39m\\u001b[32m\\\"M15.225.35C18.459.35 21 2.856 21 6.045c0 3.914-3.57 7.103-8.977 11.949L10.5 19.35l-1.523-1.367C3.57 13.148 0 9.96 0 6.045 0 2.855 2.541.35 5.775.35c1.827 0 3.58.839 4.725 2.164A6.324 6.324 0 0115.225.35zM14.094 5L10.5 8.594 6.906 5 6 5.906 9.594 9.5 6 13.094l.906.906 3.594-3.594L14.094 14l.906-.906L11.406 9.5 15 5.906 14.094 5z\\\"\\u001b[39m id\\u001b[33m=\\u001b[39m\\u001b[32m\\\"a\\\"\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[35m/defs><use fill=\\\"#000\\\" fillRule=\\\"nonzero\\\" xlink:href=\\\"#a\\\"/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33msvg\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m                                                                       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m    )\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[0m\\n    at File.buildCodeFrameError (/Users/aandrei/Documents/Work/material-icons2/node_modules/@babel/core/lib/transformation/file/file.js:267:12)\\n    at NodePath.buildCodeFrameError (/Users/aandrei/Documents/Work/material-icons2/node_modules/@babel/traverse/lib/path/index.js:144:21)\\n    at PluginPass.visitor.JSXNamespacedName (/Users/aandrei/Documents/Work/material-icons2/node_modules/@babel/helper-builder-react-jsx/lib/index.js:23:18)\\n    at newFn (/Users/aandrei/Documents/Work/material-icons2/node_modules/@babel/traverse/lib/visitors.js:179:21)\\n    at NodePath._call (/Users/aandrei/Documents/Work/material-icons2/node_modules/@babel/traverse/lib/path/context.js:55:20)\\n    at NodePath.call (/Users/aandrei/Documents/Work/material-icons2/node_modules/@babel/traverse/lib/path/context.js:42:17)\\n    at NodePath.visit (/Users/aandrei/Documents/Work/material-icons2/node_modules/@babel/traverse/lib/path/context.js:90:31)\\n    at TraversalContext.visitQueue (/Users/aandrei/Documents/Work/material-icons2/node_modules/@babel/traverse/lib/context.js:112:16)\\n    at TraversalContext.visitSingle (/Users/aandrei/Documents/Work/material-icons2/node_modules/@babel/traverse/lib/context.js:84:19)\\n    at TraversalContext.visit (/Users/aandrei/Documents/Work/material-icons2/node_modules/@babel/traverse/lib/context.js:140:19)\");\n\n//# sourceURL=webpack:///./mycujoo/IconLikeClose/src.js?");

/***/ })

/******/ });