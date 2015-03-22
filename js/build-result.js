/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*global $ require*/

	(function() {

	  "use strict";

	  var user = __webpack_require__(2).user;

	  $("body").html(user("jedcn"));

	})();


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*global exports window*/

	(function() {

	  "use strict";

	  function possiblyDefault(defaultUser, location) {
	    var result = defaultUser,
	        firstPartOfHost;
	    if (location && location.host) {
	      firstPartOfHost = location.host.split(".")[0];
	      if (firstPartOfHost.indexOf("localhost") !== 0) {
	        result = firstPartOfHost;
	      }
	    }
	    return result;
	  }

	  function user(defaultUser, location) {
	    return possiblyDefault(defaultUser,
	                           location || window.location);
	  }

	  exports.user = user;
	})();


/***/ }
/******/ ]);