module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(493);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 493:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

// const core = require("@actions/core");
const path = __webpack_require__(622);
const fs = __webpack_require__(747);


// const firstGreeting = core.getInput("first-greeting");
// const secondGreeting = core.getInput("second-greeting");
// const thirdGreeting = core.getInput("third-greeting");

// console.log(`Hello ${firstGreeting}`);
// console.log(`Hello ${secondGreeting}`);
// if (thirdGreeting) {
    // console.log(`Hello ${thirdGreeting}`);
// }
try {
    const directoryPath = './';
    // const directoryPath = path.join(__dirname, 'Document');

    fs.readdir(directoryPath, function (err, files) {
        console.log('Reading files in dir: ' + directoryPath);
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        files.forEach(function (file) {
            console.log('File: ' + file);
        });
    });
} catch (err) {
    console.log('Error: ' + err);
}

/***/ }),

/***/ 622:
/***/ (function(module) {

module.exports = require("path");

/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ })

/******/ });