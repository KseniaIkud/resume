import jQuery from 'jquery'
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ sync recursive \\.(ts|scss)$":
/*!***************************!*\
  !*** . sync \.(ts|scss)$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./jquery.main.d.ts": "./jquery.main.d.ts",
	"./main.scss": "./main.scss",
	"./mvc/controller.ts": "./mvc/controller.ts",
	"./mvc/model.ts": "./mvc/model.ts",
	"./mvc/subViews.ts": "./mvc/subViews.ts",
	"./mvc/view.ts": "./mvc/view.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive \\.(ts|scss)$";

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function importAll(r) {
  r.keys().forEach(r);
}

importAll(__webpack_require__("./ sync recursive \\.(ts|scss)$"));
__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./demo/demo */ "./demo/demo.js"));

/***/ }),

/***/ "./jquery.main.d.ts":
/*!**************************!*\
  !*** ./jquery.main.d.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mvc/subViews.ts */ "./mvc/subViews.ts");
/* harmony import */ var _mvc_view_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mvc/view.ts */ "./mvc/view.ts");
/* harmony import */ var _mvc_model_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mvc/model.ts */ "./mvc/model.ts");
/* harmony import */ var _mvc_controller_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mvc/controller.ts */ "./mvc/controller.ts");





(function ($) {
  $.fn.rangeSlider = function (settings) {
    return new _mvc_controller_ts__WEBPACK_IMPORTED_MODULE_3__["Controller"](new _mvc_model_ts__WEBPACK_IMPORTED_MODULE_2__["Model"]({
      min: settings.min,
      max: settings.max,
      defaultValue: settings.isRange && settings.leftValue || settings.initialValue,
      rightValue: settings.rightValue,
      isRange: settings.isRange,
      rightProgressBar: settings.rightProgressBar,
      overThumbElement: settings.overThumbElement,
      step: settings.step,
      isVertical: settings.isVertical,
      isScale: settings.isScale
    }), new _mvc_view_ts__WEBPACK_IMPORTED_MODULE_1__["View"](this, new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Form"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Styles"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"](), new _mvc_subViews_ts__WEBPACK_IMPORTED_MODULE_0__["Thumb"]()));
  };
})(jQuery);

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./mvc/controller.ts":
/*!***************************!*\
  !*** ./mvc/controller.ts ***!
  \***************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Controller = /*#__PURE__*/function () {
  function Controller(model, view) {
    var _this = this;

    _classCallCheck(this, Controller);

    _defineProperty(this, "model", void 0);

    _defineProperty(this, "view", void 0);

    _defineProperty(this, "init", function () {
      _this.model.init();

      _this.view.options = _this.model.dataForView;

      _this.view.init();

      _this.model.subscribe(_this);

      _this.view.subscribe(_this);
    });

    this.model = model;
    this.view = view;
    this.init();
  }

  _createClass(Controller, [{
    key: "updateModel",
    value: function updateModel(option, newValue) {
      this.model.update(option, newValue);
    }
  }, {
    key: "updateView",
    value: function updateView() {
      this.view.options.defaultValue = this.model.defaultValue;
      this.view.options.rightValue = this.model.rightValue;
      this.view.setInput();
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "./mvc/model.ts":
/*!**********************!*\
  !*** ./mvc/model.ts ***!
  \**********************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Model = /*#__PURE__*/function () {
  function Model(options) {
    var _this = this;

    _classCallCheck(this, Model);

    _defineProperty(this, "min", void 0);

    _defineProperty(this, "max", void 0);

    _defineProperty(this, "defaultValue", void 0);

    _defineProperty(this, "rightValue", void 0);

    _defineProperty(this, "isRange", void 0);

    _defineProperty(this, "rightProgressBar", void 0);

    _defineProperty(this, "overThumbElement", void 0);

    _defineProperty(this, "dataForView", void 0);

    _defineProperty(this, "step", void 0);

    _defineProperty(this, "isVertical", void 0);

    _defineProperty(this, "isScale", void 0);

    _defineProperty(this, "scaleValues", void 0);

    _defineProperty(this, "observers", void 0);

    _defineProperty(this, "init", function () {
      _this.setScale();
    });

    this.min = Number(options.min || 0);
    this.max = Number(options.max === 0 ? 0 : options.max || 100);
    this.defaultValue = Number(options.defaultValue === 0 ? 0 : options.defaultValue || 50);
    this.rightValue = Number(options.rightValue === 0 ? 0 : options.rightValue || 50);
    this.step = Number(options.step || 1);
    this.isRange = options.isRange || false;
    this.rightProgressBar = options.rightProgressBar || false;
    this.overThumbElement = options.overThumbElement || false;
    this.isVertical = options.isVertical || false;
    this.isScale = options.isScale || false;
    this.scaleValues = [];
    this.observers = [];
    this.dataForView = {
      min: this.min,
      max: this.max,
      defaultValue: this.defaultValue,
      rightValue: this.rightValue,
      isRange: this.isRange,
      rightProgressBar: this.rightProgressBar,
      overThumbElement: this.overThumbElement,
      isVertical: this.isVertical,
      isScale: this.isScale,
      scaleValues: this.scaleValues
    };
  }

  _createClass(Model, [{
    key: "subscribe",
    value: function subscribe(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "update",
    value: function update(option, newValue) {
      if (this.isRange) {
        this.limitToggle(option, newValue);
      } else {
        this.limitStep(newValue);
      }
    }
  }, {
    key: "setScale",
    value: function setScale() {
      var _this2 = this;

      // сделать проверку на подключение шкалы
      var allValues = [];

      for (var i = this.min; i <= this.max; i++) {
        if (i % this.step === 0) {
          allValues.push(i);
        }
      }

      if (allValues.length <= 11) {
        allValues.forEach(function (i) {
          _this2.scaleValues.push(i);
        });
      } else {
        var scaleStep = Math.round(allValues.length / 10);

        for (var _i = 0; _i < allValues.length; _i += scaleStep) {
          this.scaleValues.push(allValues[_i]);
        }
      }

      var lastValue = allValues[allValues.length - 1];

      if (this.scaleValues.indexOf(lastValue) !== -1) {
        this.scaleValues.push(lastValue);
      } // наоборот же, не? Если нет - добавить, если есть - не надо.

    }
  }, {
    key: "limitToggle",
    value: function limitToggle(option, newValue) {
      switch (option) {
        case 'default':
          if (newValue < this.rightValue) {
            this.limitStep(newValue);
          } else {
            this.observers.forEach(function (observer) {
              observer.updateView();
            });
          }

          break;

        case 'right':
          if (newValue > this.defaultValue) {
            this.limitStep(newValue, 'right');
          } else {
            console.log('алярма');
            this.observers.forEach(function (observer) {
              observer.updateView();
            });
          }

      }
    }
  }, {
    key: "limitStep",
    value: function limitStep(newValue) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

      switch (option) {
        case 'default':
          if (newValue % this.step === 0) {
            this.defaultValue = newValue;
          } else {
            this.defaultValue = this.calcNearest(newValue);
            this.observers.forEach(function (observer) {
              observer.updateView();
            });
          }

          break;

        case 'right':
          if (newValue % this.step === 0) {
            this.rightValue = newValue;
          } else {
            this.rightValue = this.calcNearest(newValue);
            this.observers.forEach(function (observer) {
              observer.updateView();
            });
          }

          break;
      }
    }
  }, {
    key: "calcNearest",
    value: function calcNearest(newValue) {
      var roundToMin = newValue - newValue % this.step;

      if (newValue % this.step > this.step / 2) {
        return this.step + roundToMin;
      }

      return roundToMin;
    }
  }]);

  return Model;
}();



/***/ }),

/***/ "./mvc/subViews.ts":
/*!*************************!*\
  !*** ./mvc/subViews.ts ***!
  \*************************/
/*! exports provided: Form, Styles, ProgressBar, Thumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styles", function() { return Styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thumb", function() { return Thumb; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Form = /*#__PURE__*/function () {
  function Form() {
    _classCallCheck(this, Form);

    _defineProperty(this, "form", void 0);

    _defineProperty(this, "defaultInput", void 0);

    _defineProperty(this, "rightInput", void 0);
  }

  _createClass(Form, [{
    key: "init",
    value: function init(parent, isDouble, min, max) {
      this.createForm(parent);
      this.createInput(isDouble);
      this.setMin(isDouble, min);
      this.setMax(isDouble, max);
    }
  }, {
    key: "createForm",
    value: function createForm(parent) {
      this.form = document.createElement('div');
      this.form.classList.add('range-slider__form');
      parent.append(this.form);
    }
  }, {
    key: "createInput",
    value: function createInput(isDouble) {
      if (isDouble) {
        this.defaultInput = document.createElement('input');
        this.defaultInput.type = 'range';
        this.defaultInput.classList.add('range-slider__input');
        this.defaultInput.classList.add('range-slider__input_left');
        this.form.append(this.defaultInput);
        this.rightInput = document.createElement('input');
        this.rightInput.type = 'range';
        this.rightInput.classList.add('range-slider__input');
        this.rightInput.classList.add('range-slider__input_right');
        this.form.append(this.rightInput);
      } else {
        this.defaultInput = document.createElement('input');
        this.defaultInput.type = 'range';
        this.defaultInput.classList.add('range-slider__input');
        this.form.append(this.defaultInput);
      }
    }
  }, {
    key: "setInputValue",
    value: function setInputValue(isDouble, value) {
      var rightValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
      this.defaultInput.value = String(value);

      if (isDouble) {
        this.rightInput.value = String(rightValue);
      }
    }
  }, {
    key: "setMin",
    value: function setMin(isDouble, min) {
      this.defaultInput.min = String(min);

      if (isDouble) {
        this.rightInput.min = String(min);
      }
    }
  }, {
    key: "setMax",
    value: function setMax(isDouble) {
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      this.defaultInput.max = String(max);

      if (isDouble) {
        this.rightInput.max = String(max);
      }
    }
  }]);

  return Form;
}();

var Styles = /*#__PURE__*/function () {
  function Styles() {
    _classCallCheck(this, Styles);

    _defineProperty(this, "style", void 0);

    _defineProperty(this, "track", void 0);
  }

  _createClass(Styles, [{
    key: "init",
    value: function init(parent) {
      this.createStyles(parent);
      this.createTrack();
    }
  }, {
    key: "createStyles",
    value: function createStyles(parent) {
      this.style = document.createElement('div');
      this.style.classList.add('range-slider__style');
      parent.append(this.style);
    }
  }, {
    key: "createTrack",
    value: function createTrack() {
      this.track = document.createElement('div');
      this.track.classList.add('range-slider__track');
      this.style.append(this.track);
    }
  }]);

  return Styles;
}();

var ProgressBar = /*#__PURE__*/function () {
  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    _defineProperty(this, "bar", void 0);
  }

  _createClass(ProgressBar, [{
    key: "createProgressBar",
    value: function createProgressBar(parent) {
      this.bar = document.createElement('div');
      this.bar.classList.add('range-slider__progress-bar');
      parent.append(this.bar);
    }
  }, {
    key: "calcPercent",
    value: function calcPercent(value, min, max) {
      return (value - min) / (max - min) * 100;
    }
  }, {
    key: "setDefault",
    value: function setDefault(isDouble, percent) {
      var percentRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;

      if (isDouble) {
        this.bar.style.left = percent + '%';
        this.bar.style.right = 100 - percentRight + '%';
      } else {
        this.bar.style.right = 100 - percent + '%';
        this.bar.style.left = String(0);
      }
    }
  }, {
    key: "setRight",
    value: function setRight(isDouble, percent) {
      if (!isDouble) {
        this.bar.style.left = percent + '%';
        this.bar.style.right = String(-1) + 'px';
      }
    }
  }]);

  return ProgressBar;
}();

var Thumb = /*#__PURE__*/function () {
  function Thumb() {
    _classCallCheck(this, Thumb);

    _defineProperty(this, "thumbDefault", void 0);

    _defineProperty(this, "thumbRight", void 0);

    _defineProperty(this, "thumbOutput", void 0);

    _defineProperty(this, "thumbOutputRight", void 0);
  }

  _createClass(Thumb, [{
    key: "init",
    value: function init(parent, isDouble, toggleElement, defaultValue, rightValue) {
      this.createThumb(parent, isDouble);

      if (toggleElement) {
        this.createThumbElement(isDouble, this.thumbDefault, this.thumbRight);
        this.setThumbValue(isDouble, defaultValue, rightValue);
      }
    }
  }, {
    key: "createThumb",
    value: function createThumb(parent, isDouble) {
      if (isDouble) {
        this.thumbDefault = document.createElement('div');
        this.thumbDefault.classList.add('range-slider__thumb');
        this.thumbDefault.classList.add('range-slider__thumb_left');
        parent.append(this.thumbDefault);
        this.thumbRight = document.createElement('div');
        this.thumbRight.classList.add('range-slider__thumb');
        this.thumbRight.classList.add('range-slider__thumb_right');
        parent.append(this.thumbRight);
      } else {
        this.thumbDefault = document.createElement('div');
        this.thumbDefault.className = 'range-slider__thumb';
        parent.append(this.thumbDefault);
      }
    }
  }, {
    key: "createThumbElement",
    value: function createThumbElement(isDouble, parent, rightParent) {
      if (isDouble) {
        this.thumbOutputRight = document.createElement('p');
        this.thumbOutputRight.classList.add('range-slider__value-thumb');
        rightParent.append(this.thumbOutputRight);
      }

      this.thumbOutput = document.createElement('p');
      this.thumbOutput.className = 'range-slider__value-thumb';
      parent.append(this.thumbOutput);
    }
  }, {
    key: "setThumbValue",
    value: function setThumbValue(isDouble, value, rightValue) {
      this.thumbOutput.textContent = String(value);

      if (isDouble) {
        this.thumbOutputRight.textContent = String(rightValue);
      }
    }
  }, {
    key: "placeThumb",
    value: function placeThumb(isDouble, percent) {
      var percentRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
      this.thumbDefault.style.left = percent + '%';

      if (isDouble) {
        this.thumbRight.style.right = 100 - percentRight + '%';
      }
    }
  }]);

  return Thumb;
}();



/***/ }),

/***/ "./mvc/view.ts":
/*!*********************!*\
  !*** ./mvc/view.ts ***!
  \*********************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var View = /*#__PURE__*/function () {
  function View(parent, form, styles, progressBar, thumb) {
    var _this = this;

    _classCallCheck(this, View);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "wrapper", void 0);

    _defineProperty(this, "singleInput", void 0);

    _defineProperty(this, "leftInput", void 0);

    _defineProperty(this, "rightInput", void 0);

    _defineProperty(this, "form", void 0);

    _defineProperty(this, "styles", void 0);

    _defineProperty(this, "progressBar", void 0);

    _defineProperty(this, "thumb", void 0);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "observers", void 0);

    _defineProperty(this, "init", function () {
      _this.createWrapper();

      _this.form.init(_this.wrapper, _this.options.isRange, _this.options.min, _this.options.max);

      _this.styles.init(_this.wrapper);

      _this.progressBar.createProgressBar(_this.styles.style);

      _this.thumb.init(_this.styles.style, _this.options.isRange, _this.options.overThumbElement, _this.options.defaultValue, _this.options.rightValue);

      _this.setInput();

      _this.eventInput();

      _this.progressBar.bar.onmousedown = function (elem) {
        _this.clickOnBar(elem);
      };

      _this.styles.track.onmousedown = function (elem) {
        _this.clickOnBar(elem);
      };

      _this.eventHover();

      _this.eventActive();

      if (_this.options.isVertical) {
        _this.wrapper.classList.add('range-slider_vertical');

        if (_this.options.overThumbElement) {
          var _this$thumb$thumbOutp;

          _this.thumb.thumbOutput.classList.add('range-slider__value-thumb_vertical');

          (_this$thumb$thumbOutp = _this.thumb.thumbOutputRight) === null || _this$thumb$thumbOutp === void 0 ? void 0 : _this$thumb$thumbOutp.classList.add('range-slider__value-thumb_vertical');
        }
      }

      if (_this.options.isScale) {
        _this.createScale();
      }

      _this.createInputs();
    });

    _defineProperty(this, "createWrapper", function () {
      _this.wrapper = document.createElement('div');

      _this.wrapper.classList.add('range-slider');

      _this.parent.append(_this.wrapper);
    });

    _defineProperty(this, "createScale", function () {
      var scale = document.createElement('div');
      scale.classList.add('range-slider__scale');

      _this.wrapper.append(scale, _this.styles.style);

      var _loop = function _loop(i) {
        var divValue = document.createElement('div');
        divValue.classList.add('range-slider__value');
        var value = _this.options.scaleValues[i];
        divValue.textContent = String('– ' + value);
        scale.append(divValue);
        var min = _this.options.min;
        var max = _this.options.max;
        var percent = Math.round((value - min) / (max - min) * 100);
        divValue.style.left = percent + '%';
        divValue.addEventListener('click', function () {
          _this.eventClick(value);
        });
        divValue.style.marginLeft = '-' + _this.placeScale() + '%';
      };

      for (var i = 0; i < _this.options.scaleValues.length; i++) {
        _loop(i);
      }
    });

    _defineProperty(this, "placeScale", function () {
      var containerWidth = _this.wrapper.offsetWidth;
      return (0.42 * containerWidth + 777.8) / containerWidth;
    });

    _defineProperty(this, "createInputs", function () {
      if (_this.options.isRange) {
        var leftInput = document.createElement('input');
        leftInput.classList.add('range-slider__input');
        leftInput.placeholder = 'left value';
        leftInput.value = String(_this.options.defaultValue);
        _this.leftInput = leftInput;

        _this.wrapper.append(_this.leftInput);

        var rightInput = document.createElement('input');
        rightInput.classList.add('range-slider__input');
        rightInput.placeholder = 'right value';
        rightInput.value = String(_this.options.rightValue);
        _this.rightInput = rightInput;

        _this.wrapper.append(_this.rightInput);
      } else {
        var singleInput = document.createElement('input');
        singleInput.classList.add('range-slider__input');
        singleInput.placeholder = 'value';
        singleInput.value = String(_this.options.defaultValue);
        _this.singleInput = singleInput;

        _this.wrapper.append(_this.singleInput);
      }
    });

    _defineProperty(this, "setInput", function () {
      _this.form.setInputValue(_this.options.isRange, _this.options.defaultValue, _this.options.rightValue);

      var placeDefault = _this.progressBar.calcPercent(Number(_this.form.defaultInput.value), Number(_this.form.defaultInput.min), Number(_this.form.defaultInput.max));

      var placeRight = _this.form.rightInput ? _this.progressBar.calcPercent(Number(_this.form.rightInput.value), Number(_this.form.rightInput.min), Number(_this.form.rightInput.max)) : NaN;

      _this.progressBar.setDefault(_this.options.isRange, placeDefault, placeRight);

      if (_this.options.rightProgressBar) {
        _this.progressBar.setRight(_this.options.isRange, placeDefault);
      }

      _this.thumb.placeThumb(_this.options.isRange, placeDefault, placeRight);
    });

    _defineProperty(this, "eventInput", function () {
      _this.form.defaultInput.addEventListener('input', function () {
        _this.options.defaultValue = Number(_this.form.defaultInput.value);

        _this.setInput();

        _this.observers.forEach(function (observer) {
          observer.updateModel('default', Number(_this.form.defaultInput.value));
        });

        _this.thumb.setThumbValue(_this.options.isRange, _this.options.defaultValue, _this.options.rightValue);

        if (_this.options.isRange) {
          _this.leftInput.value = String(_this.options.defaultValue);
        } else {
          _this.singleInput.value = String(_this.options.defaultValue);
        }
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('input', function () {
          _this.options.rightValue = Number(_this.form.rightInput.value);

          _this.setInput();

          _this.observers.forEach(function (observer) {
            observer.updateModel('right', Number(_this.form.rightInput.value));
          });

          _this.thumb.setThumbValue(_this.options.isRange, _this.options.defaultValue, _this.options.rightValue);

          _this.rightInput.value = String(_this.options.rightValue);
        });
      }
    });

    _defineProperty(this, "eventHover", function () {
      _this.form.defaultInput.addEventListener('mouseover', function () {
        if (_this.options.overThumbElement) {
          _this.thumb.thumbOutput.classList.add('range-slider__value-thumb_big');
        }

        _this.thumb.thumbDefault.classList.add('range-slider__thumb_hover');
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('mouseover', function () {
          if (_this.options.overThumbElement) {
            var _this$thumb$thumbOutp2;

            (_this$thumb$thumbOutp2 = _this.thumb.thumbOutputRight) === null || _this$thumb$thumbOutp2 === void 0 ? void 0 : _this$thumb$thumbOutp2.classList.add('range-slider__value-thumb_big');
          }

          _this.thumb.thumbRight.classList.add('range-slider__thumb_hover');
        });
      }

      _this.form.defaultInput.addEventListener('mouseout', function () {
        if (_this.options.overThumbElement) {
          _this.thumb.thumbOutput.classList.remove('range-slider__value-thumb_big');
        }

        _this.thumb.thumbDefault.classList.remove('range-slider__thumb_hover');
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('mouseout', function () {
          if (_this.options.overThumbElement) {
            var _this$thumb$thumbOutp3;

            (_this$thumb$thumbOutp3 = _this.thumb.thumbOutputRight) === null || _this$thumb$thumbOutp3 === void 0 ? void 0 : _this$thumb$thumbOutp3.classList.remove('range-slider__value-thumb_big');
          }

          _this.thumb.thumbRight.classList.remove('range-slider__thumb_hover');
        });
      }
    });

    _defineProperty(this, "eventActive", function () {
      _this.form.defaultInput.addEventListener('mousedown', function () {
        _this.thumb.thumbDefault.classList.add('range-slider__thumb_active');
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('mousedown', function () {
          _this.thumb.thumbRight.classList.add('range-slider__thumb_active');
        });
      }

      _this.form.defaultInput.addEventListener('mouseup', function () {
        _this.thumb.thumbDefault.classList.remove('range-slider__thumb_active');
      });

      if (_this.options.isRange) {
        _this.form.rightInput.addEventListener('mouseup', function () {
          _this.thumb.thumbRight.classList.remove('range-slider__thumb_active');
        });
      }
    });

    this.parent = parent;
    this.form = form;
    this.styles = styles;
    this.progressBar = progressBar;
    this.thumb = thumb; // default data

    this.options = {
      min: 0,
      max: 100,
      defaultValue: 10,
      rightValue: 50,
      isRange: true,
      rightProgressBar: false,
      overThumbElement: true,
      isVertical: false,
      isScale: false,
      scaleValues: []
    };
    this.observers = [];
  }

  _createClass(View, [{
    key: "subscribe",
    value: function subscribe(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "clickOnBar",
    value: function clickOnBar(elem) {
      var coords = this.styles.track.getBoundingClientRect();
      var length = coords.right - coords.left;
      var range = this.options.max - this.options.min;
      var currentPosition = elem.pageX - coords.left;
      var percent;

      if (this.options.isVertical) {
        currentPosition = elem.pageY - coords.top;
        length = coords.bottom - coords.top;

        if (length < currentPosition) {
          currentPosition = length;
        }
      }

      percent = currentPosition / length * 100;
      var newValue = Math.round(this.options.min + range * percent / 100);
      this.eventClick(newValue);
    }
  }, {
    key: "eventClick",
    value: function eventClick(newValue) {
      var halfOfBar = (this.options.rightValue + this.options.defaultValue) / 2;
      var isRightTrack = this.options.isRange && newValue > this.options.rightValue;
      var isRightBar = this.options.isRange && newValue > halfOfBar;

      if (isRightTrack || isRightBar) {
        this.options.rightValue = newValue;
        this.setInput();
        this.observers.forEach(function (observer) {
          observer.updateModel('right', newValue);
        });
        this.thumb.setThumbValue(this.options.isRange, this.options.defaultValue, this.options.rightValue);
      } else {
        this.options.defaultValue = newValue;
        this.setInput();
        this.observers.forEach(function (observer) {
          observer.updateModel('default', newValue);
        });
        this.thumb.setThumbValue(this.options.isRange, this.options.defaultValue, this.options.rightValue);
      }
    }
  }]);

  return View;
}();



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4gc3luYyBcXC4odHN8c2NzcykkIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pxdWVyeS5tYWluLmQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL212Yy9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL212Yy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tdmMvc3ViVmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjL3ZpZXcudHMiXSwibmFtZXMiOlsiaW1wb3J0QWxsIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsIiQiLCJmbiIsInJhbmdlU2xpZGVyIiwic2V0dGluZ3MiLCJDb250cm9sbGVyIiwiTW9kZWwiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJpc1JhbmdlIiwibGVmdFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwicmlnaHRWYWx1ZSIsInJpZ2h0UHJvZ3Jlc3NCYXIiLCJvdmVyVGh1bWJFbGVtZW50Iiwic3RlcCIsImlzVmVydGljYWwiLCJpc1NjYWxlIiwiVmlldyIsIkZvcm0iLCJTdHlsZXMiLCJQcm9ncmVzc0JhciIsIlRodW1iIiwialF1ZXJ5IiwibW9kZWwiLCJ2aWV3IiwiaW5pdCIsIm9wdGlvbnMiLCJkYXRhRm9yVmlldyIsInN1YnNjcmliZSIsIm9wdGlvbiIsIm5ld1ZhbHVlIiwidXBkYXRlIiwic2V0SW5wdXQiLCJzZXRTY2FsZSIsIk51bWJlciIsInNjYWxlVmFsdWVzIiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXIiLCJwdXNoIiwibGltaXRUb2dnbGUiLCJsaW1pdFN0ZXAiLCJhbGxWYWx1ZXMiLCJpIiwibGVuZ3RoIiwic2NhbGVTdGVwIiwiTWF0aCIsInJvdW5kIiwibGFzdFZhbHVlIiwiaW5kZXhPZiIsInVwZGF0ZVZpZXciLCJjb25zb2xlIiwibG9nIiwiY2FsY05lYXJlc3QiLCJyb3VuZFRvTWluIiwicGFyZW50IiwiaXNEb3VibGUiLCJjcmVhdGVGb3JtIiwiY3JlYXRlSW5wdXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJmb3JtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiZGVmYXVsdElucHV0IiwidHlwZSIsInJpZ2h0SW5wdXQiLCJ2YWx1ZSIsIk5hTiIsIlN0cmluZyIsImNyZWF0ZVN0eWxlcyIsImNyZWF0ZVRyYWNrIiwic3R5bGUiLCJ0cmFjayIsImJhciIsInBlcmNlbnQiLCJwZXJjZW50UmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJ0b2dnbGVFbGVtZW50IiwiY3JlYXRlVGh1bWIiLCJjcmVhdGVUaHVtYkVsZW1lbnQiLCJ0aHVtYkRlZmF1bHQiLCJ0aHVtYlJpZ2h0Iiwic2V0VGh1bWJWYWx1ZSIsImNsYXNzTmFtZSIsInJpZ2h0UGFyZW50IiwidGh1bWJPdXRwdXRSaWdodCIsInRodW1iT3V0cHV0IiwidGV4dENvbnRlbnQiLCJzdHlsZXMiLCJwcm9ncmVzc0JhciIsInRodW1iIiwiY3JlYXRlV3JhcHBlciIsIndyYXBwZXIiLCJjcmVhdGVQcm9ncmVzc0JhciIsImV2ZW50SW5wdXQiLCJvbm1vdXNlZG93biIsImVsZW0iLCJjbGlja09uQmFyIiwiZXZlbnRIb3ZlciIsImV2ZW50QWN0aXZlIiwiY3JlYXRlU2NhbGUiLCJjcmVhdGVJbnB1dHMiLCJzY2FsZSIsImRpdlZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Q2xpY2siLCJtYXJnaW5MZWZ0IiwicGxhY2VTY2FsZSIsImNvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJsZWZ0SW5wdXQiLCJwbGFjZWhvbGRlciIsInNpbmdsZUlucHV0Iiwic2V0SW5wdXRWYWx1ZSIsInBsYWNlRGVmYXVsdCIsImNhbGNQZXJjZW50IiwicGxhY2VSaWdodCIsInNldERlZmF1bHQiLCJzZXRSaWdodCIsInBsYWNlVGh1bWIiLCJ1cGRhdGVNb2RlbCIsInJlbW92ZSIsImNvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJhbmdlIiwiY3VycmVudFBvc2l0aW9uIiwicGFnZVgiLCJwYWdlWSIsInRvcCIsImJvdHRvbSIsImhhbGZPZkJhciIsImlzUmlnaHRUcmFjayIsImlzUmlnaHRCYXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBLDBDQUEwQztRQUMxQzs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0Esb0JBQW9CO1FBQ3BCO1FBQ0E7UUFDQTtRQUNBLHdCQUF3QjtRQUN4QjtRQUNBO1FBQ0EsbUJBQW1CLDZCQUE2QjtRQUNoRDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsbUJBQW1CLDhCQUE4QjtRQUNqRDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBLEtBQUs7UUFDTDs7UUFFQTs7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QVgsQ0FBeUIsS0FBSzVELE9BQUwsQ0FBYWxCLE9BQXRDLEVBQ0ksS0FBS2tCLE9BQUwsQ0FBYW5CLFlBRGpCLEVBQytCLEtBQUttQixPQUFMLENBQWFmLFVBRDVDO0FBRUg7QUFDSiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgQ1NTIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENzc0NodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiBDU1MgbG9hZGluZ1xuIFx0XHR2YXIgY3NzQ2h1bmtzID0ge1wiMFwiOjF9O1xuIFx0XHRpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pIHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0ZWxzZSBpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gIT09IDAgJiYgY3NzQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdHZhciBocmVmID0gXCJcIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5jc3NcIjtcbiBcdFx0XHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuIFx0XHRcdFx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuIFx0XHRcdFx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuIFx0XHRcdFx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuIFx0XHRcdFx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuIFx0XHRcdFx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiBcdFx0XHRcdGxpbmtUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcbiBcdFx0XHRcdGxpbmtUYWcub25sb2FkID0gcmVzb2x2ZTtcbiBcdFx0XHRcdGxpbmtUYWcub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gXHRcdFx0XHRcdHZhciByZXF1ZXN0ID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmMgfHwgZnVsbGhyZWY7XG4gXHRcdFx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgcmVxdWVzdCArIFwiKVwiKTtcbiBcdFx0XHRcdFx0ZXJyLmNvZGUgPSBcIkNTU19DSFVOS19MT0FEX0ZBSUxFRFwiO1xuIFx0XHRcdFx0XHRlcnIucmVxdWVzdCA9IHJlcXVlc3Q7XG4gXHRcdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF1cbiBcdFx0XHRcdFx0bGlua1RhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmtUYWcpXG4gXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG4gXHRcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG4gXHRcdFx0fSkudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdFx0fSkpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9qcXVlcnkubWFpbi5kLnRzXCI6IFwiLi9qcXVlcnkubWFpbi5kLnRzXCIsXG5cdFwiLi9tYWluLnNjc3NcIjogXCIuL21haW4uc2Nzc1wiLFxuXHRcIi4vbXZjL2NvbnRyb2xsZXIudHNcIjogXCIuL212Yy9jb250cm9sbGVyLnRzXCIsXG5cdFwiLi9tdmMvbW9kZWwudHNcIjogXCIuL212Yy9tb2RlbC50c1wiLFxuXHRcIi4vbXZjL3N1YlZpZXdzLnRzXCI6IFwiLi9tdmMvc3ViVmlld3MudHNcIixcblx0XCIuL212Yy92aWV3LnRzXCI6IFwiLi9tdmMvdmlldy50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih0c3xzY3NzKSRcIjsiLCJcbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gIHIua2V5cygpLmZvckVhY2gocilcbn1cblxuaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvXFwuKHRzfHNjc3MpJC8pKVxuaW1wb3J0ICgnLi9kZW1vL2RlbW8nKVxuXG4iLCJcbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vbXZjL3N1YlZpZXdzLnRzJ1xuaW1wb3J0IHtWaWV3fSBmcm9tICcuL212Yy92aWV3LnRzJ1xuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tdmMvbW9kZWwudHMnXG5pbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJy4vbXZjL2NvbnRyb2xsZXIudHMnXG5cblxuKGZ1bmN0aW9uKCQ6IEpRdWVyeVN0YXRpYykge1xuICAgICQuZm4ucmFuZ2VTbGlkZXIgPSBmdW5jdGlvbihzZXR0aW5nczoge1xuICAgICAgICBtaW4/OiBudW1iZXJcbiAgICAgICAgbWF4PzogbnVtYmVyXG4gICAgICAgIGluaXRpYWxWYWx1ZT86IG51bWJlclxuICAgICAgICBsZWZ0VmFsdWU/OiBudW1iZXJcbiAgICAgICAgcmlnaHRWYWx1ZT86IG51bWJlclxuICAgICAgICBpc1JhbmdlPzogYm9vbGVhblxuICAgICAgICByaWdodFByb2dyZXNzQmFyPzogYm9vbGVhblxuICAgICAgICBvdmVyVGh1bWJFbGVtZW50PzogYm9vbGVhblxuICAgICAgICBzdGVwPzogbnVtYmVyXG4gICAgICAgIGlzVmVydGljYWw/OiBib29sZWFuXG4gICAgICAgIGlzU2NhbGU/OiBib29sZWFuXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xsZXIoXG4gICAgICAgICAgICBuZXcgTW9kZWwoe1xuICAgICAgICAgICAgICAgIG1pbjogc2V0dGluZ3MubWluLFxuICAgICAgICAgICAgICAgIG1heDogc2V0dGluZ3MubWF4LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogc2V0dGluZ3MuaXNSYW5nZSAmJiBzZXR0aW5ncy5sZWZ0VmFsdWUgfHwgc2V0dGluZ3MuaW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHNldHRpbmdzLnJpZ2h0VmFsdWUsXG4gICAgICAgICAgICAgICAgaXNSYW5nZTogc2V0dGluZ3MuaXNSYW5nZSxcbiAgICAgICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBzZXR0aW5ncy5yaWdodFByb2dyZXNzQmFyLFxuICAgICAgICAgICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHNldHRpbmdzLm92ZXJUaHVtYkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgc3RlcDogc2V0dGluZ3Muc3RlcCxcbiAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsOiBzZXR0aW5ncy5pc1ZlcnRpY2FsLFxuICAgICAgICAgICAgICAgIGlzU2NhbGU6IHNldHRpbmdzLmlzU2NhbGVcbiAgICAgICAgICAgIH0pLCBcbiAgICAgICAgICAgIG5ldyBWaWV3KCBcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIG5ldyBGb3JtKCksXG4gICAgICAgICAgICAgICAgbmV3IFN0eWxlcygpLFxuICAgICAgICAgICAgICAgIG5ldyBQcm9ncmVzc0JhcigpLFxuICAgICAgICAgICAgICAgIG5ldyBUaHVtYigpIFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSkoalF1ZXJ5KVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA2OTM3NDY1NTEzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL3hlbmEvUmFuZ2Utc2xpZGVyL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7Vmlld30gZnJvbSAnLi92aWV3J1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgICBtb2RlbDogTW9kZWxcbiAgICB2aWV3OiBWaWV3XG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsLCB2aWV3OiBWaWV3KSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgICAgIFxuICAgICAgICB0aGlzLmluaXQoKSBcbiAgICB9XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5tb2RlbC5pbml0KClcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMgPSB0aGlzLm1vZGVsLmRhdGFGb3JWaWV3XG4gICAgICAgIHRoaXMudmlldy5pbml0KClcblxuICAgICAgICBcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJzY3JpYmUodGhpcylcbiAgICAgICAgdGhpcy52aWV3LnN1YnNjcmliZSh0aGlzKVxuICAgICAgICBcbiAgICB9XG4gICAgdXBkYXRlTW9kZWwob3B0aW9uOiBzdHJpbmcsIG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tb2RlbC51cGRhdGUob3B0aW9uLCBuZXdWYWx1ZSlcbiAgICB9XG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gdGhpcy5tb2RlbC5kZWZhdWx0VmFsdWVcbiAgICAgICAgdGhpcy52aWV3Lm9wdGlvbnMucmlnaHRWYWx1ZSA9IHRoaXMubW9kZWwucmlnaHRWYWx1ZVxuICAgICAgICB0aGlzLnZpZXcuc2V0SW5wdXQoKVxuICAgIH1cbn1cblxuZXhwb3J0IHtDb250cm9sbGVyfSIsImludGVyZmFjZSBJRGF0YSB7XG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyXG4gICAgcmlnaHRWYWx1ZTogbnVtYmVyXG4gICAgaXNSYW5nZTogYm9vbGVhblxuICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IGJvb2xlYW5cbiAgICBvdmVyVGh1bWJFbGVtZW50OiBib29sZWFuXG4gICAgaXNWZXJ0aWNhbDogYm9vbGVhblxuICAgIHN0ZXA/OiBudW1iZXJcbiAgICBpc1NjYWxlOiBib29sZWFuXG4gICAgc2NhbGVWYWx1ZXM6IEFycmF5PG51bWJlcj5cbn1cbmludGVyZmFjZSBJT2JzZXJ2ZXJNb2RlbCB7XG4gICAgdXBkYXRlVmlldygpOiB2b2lkXG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgICByaWdodFZhbHVlOiBudW1iZXJcbiAgICBpc1JhbmdlOiBib29sZWFuXG4gICAgcmlnaHRQcm9ncmVzc0JhcjogYm9vbGVhblxuICAgIG92ZXJUaHVtYkVsZW1lbnQ6IGJvb2xlYW5cbiAgICBkYXRhRm9yVmlldzogSURhdGFcbiAgICBzdGVwOiBudW1iZXJcbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuXG4gICAgaXNTY2FsZTogYm9vbGVhblxuICAgIHNjYWxlVmFsdWVzOiBudW1iZXJbXVxuICAgIG9ic2VydmVyczogSU9ic2VydmVyTW9kZWxbXVxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElEYXRhKSB7XG4gICAgICAgIHRoaXMubWluID0gTnVtYmVyKG9wdGlvbnMubWluIHx8IDApXG4gICAgICAgIHRoaXMubWF4ID0gTnVtYmVyKG9wdGlvbnMubWF4ID09PSAwID8gMCA6IChvcHRpb25zLm1heCB8fCAxMDApKVxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IE51bWJlcihvcHRpb25zLmRlZmF1bHRWYWx1ZSA9PT0gMCA/IDAgOiAob3B0aW9ucy5kZWZhdWx0VmFsdWUgfHwgNTApKVxuICAgICAgICB0aGlzLnJpZ2h0VmFsdWUgPSBOdW1iZXIob3B0aW9ucy5yaWdodFZhbHVlID09PSAwID8gMCA6IChvcHRpb25zLnJpZ2h0VmFsdWUgfHwgNTApKVxuICAgICAgICB0aGlzLnN0ZXAgPSBOdW1iZXIob3B0aW9ucy5zdGVwIHx8IDEpXG4gICAgICAgIHRoaXMuaXNSYW5nZSA9IG9wdGlvbnMuaXNSYW5nZSB8fCBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UHJvZ3Jlc3NCYXIgPSBvcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIgfHwgZmFsc2VcbiAgICAgICAgdGhpcy5vdmVyVGh1bWJFbGVtZW50ID0gb3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50IHx8IGZhbHNlXG4gICAgICAgIHRoaXMuaXNWZXJ0aWNhbCA9IG9wdGlvbnMuaXNWZXJ0aWNhbCB8fCBmYWxzZVxuICAgICAgICB0aGlzLmlzU2NhbGUgPSBvcHRpb25zLmlzU2NhbGUgfHwgZmFsc2VcbiAgICAgICAgdGhpcy5zY2FsZVZhbHVlcyA9IFtdXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cbiAgICAgICAgdGhpcy5kYXRhRm9yVmlldyA9IHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWU6IHRoaXMucmlnaHRWYWx1ZSxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRoaXMuaXNSYW5nZSxcbiAgICAgICAgICAgIHJpZ2h0UHJvZ3Jlc3NCYXI6IHRoaXMucmlnaHRQcm9ncmVzc0JhcixcbiAgICAgICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHRoaXMub3ZlclRodW1iRWxlbWVudCxcbiAgICAgICAgICAgIGlzVmVydGljYWw6IHRoaXMuaXNWZXJ0aWNhbCxcbiAgICAgICAgICAgIGlzU2NhbGU6IHRoaXMuaXNTY2FsZSxcbiAgICAgICAgICAgIHNjYWxlVmFsdWVzOiB0aGlzLnNjYWxlVmFsdWVzXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3Vic2NyaWJlKG9ic2VydmVyOiBJT2JzZXJ2ZXJNb2RlbCkge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKVxuICAgIH1cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFNjYWxlKClcbiAgICB9XG4gICAgdXBkYXRlKG9wdGlvbjogc3RyaW5nLCBuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMubGltaXRUb2dnbGUob3B0aW9uLCBuZXdWYWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGltaXRTdGVwKG5ld1ZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFNjYWxlKCkge1xuICAgICAgICAvLyDRgdC00LXQu9Cw0YLRjCDQv9GA0L7QstC10YDQutGDINC90LAg0L/QvtC00LrQu9GO0YfQtdC90LjQtSDRiNC60LDQu9GLXG4gICAgICAgIGxldCBhbGxWYWx1ZXM6IG51bWJlcltdID0gW11cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRoaXMubWluOyBpIDw9IHRoaXMubWF4OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICUgdGhpcy5zdGVwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWxsVmFsdWVzLnB1c2goaSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWxsVmFsdWVzLmxlbmd0aCA8PSAxMSkge1xuICAgICAgICAgICAgYWxsVmFsdWVzLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZVZhbHVlcy5wdXNoKGkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNjYWxlU3RlcCA9IE1hdGgucm91bmQoYWxsVmFsdWVzLmxlbmd0aCAvIDEwKVxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFsbFZhbHVlcy5sZW5ndGg7IGkrPXNjYWxlU3RlcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVWYWx1ZXMucHVzaChhbGxWYWx1ZXNbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhc3RWYWx1ZTogbnVtYmVyID0gYWxsVmFsdWVzW2FsbFZhbHVlcy5sZW5ndGggLSAxXVxuICAgICAgICBpZih0aGlzLnNjYWxlVmFsdWVzLmluZGV4T2YobGFzdFZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGVWYWx1ZXMucHVzaChsYXN0VmFsdWUpXG4gICAgICAgIH0gLy8g0L3QsNC+0LHQvtGA0L7RgiDQttC1LCDQvdC1PyDQldGB0LvQuCDQvdC10YIgLSDQtNC+0LHQsNCy0LjRgtGMLCDQtdGB0LvQuCDQtdGB0YLRjCAtINC90LUg0L3QsNC00L4uXG4gICAgICAgIFxuICAgIH1cbiAgICBsaW1pdFRvZ2dsZShvcHRpb246IHN0cmluZywgbmV3VmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlKCdkZWZhdWx0Jyk6XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgdGhpcy5yaWdodFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRTdGVwKG5ld1ZhbHVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UoJ3JpZ2h0Jyk6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPiB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbWl0U3RlcChuZXdWYWx1ZSwgJ3JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cw0LvRj9GA0LzQsCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGxpbWl0U3RlcChuZXdWYWx1ZTogbnVtYmVyLCBvcHRpb246IHN0cmluZyA9ICdkZWZhdWx0Jykge1xuICAgICAgICBzd2l0Y2gob3B0aW9uKSB7XG4gICAgICAgICAgICBjYXNlKCdkZWZhdWx0Jyk6IFxuICAgICAgICAgICAgaWYobmV3VmFsdWUgJSB0aGlzLnN0ZXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy5jYWxjTmVhcmVzdChuZXdWYWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG5cblxuICAgICAgICAgICAgY2FzZSgncmlnaHQnKTpcbiAgICAgICAgICAgIGlmKG5ld1ZhbHVlICUgdGhpcy5zdGVwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodFZhbHVlID0gdGhpcy5jYWxjTmVhcmVzdChuZXdWYWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNhbGNOZWFyZXN0KG5ld1ZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgcm91bmRUb01pbiA9IG5ld1ZhbHVlIC0gKG5ld1ZhbHVlICUgdGhpcy5zdGVwKVxuICAgICAgICBpZiAoKG5ld1ZhbHVlICUgdGhpcy5zdGVwKSA+ICh0aGlzLnN0ZXAgLyAyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RlcCArIHJvdW5kVG9NaW5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm91bmRUb01pblxuICAgIH1cbn1cblxuZXhwb3J0IHtNb2RlbH1cbiIsImNsYXNzIEZvcm0ge1xuICAgIGZvcm0hOiBIVE1MRGl2RWxlbWVudFxuICAgIGRlZmF1bHRJbnB1dCE6IEhUTUxJbnB1dEVsZW1lbnRcbiAgICByaWdodElucHV0ITogSFRNTElucHV0RWxlbWVudFxuXG4gICAgaW5pdChwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBpc0RvdWJsZTogYm9vbGVhbiwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybShwYXJlbnQpXG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXQoaXNEb3VibGUpXG4gICAgICAgIHRoaXMuc2V0TWluKGlzRG91YmxlLCBtaW4pXG4gICAgICAgIHRoaXMuc2V0TWF4KGlzRG91YmxlLCBtYXgpXG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybShwYXJlbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybSA9IDxIVE1MRGl2RWxlbWVudD4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2Zvcm0nKVxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMuZm9ybSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlSW5wdXQoaXNEb3VibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JykgXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0X2xlZnQnKVxuICAgICAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRlZmF1bHRJbnB1dClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0LnR5cGUgPSAncmFuZ2UnXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dF9yaWdodCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMucmlnaHRJbnB1dClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC50eXBlID0gJ3JhbmdlJ1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMuZGVmYXVsdElucHV0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldElucHV0VmFsdWUoaXNEb3VibGU6IGJvb2xlYW4sIHZhbHVlOiBudW1iZXIsIHJpZ2h0VmFsdWU6IG51bWJlciA9IE5hTik6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC52YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7ICAgXG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQudmFsdWUgPSBTdHJpbmcocmlnaHRWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNaW4oaXNEb3VibGU6IGJvb2xlYW4sIG1pbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodElucHV0Lm1pbiA9IFN0cmluZyhtaW4pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWF4KGlzRG91YmxlOiBib29sZWFuLCBtYXg6IG51bWJlciA9IDEwMCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICBpZiAoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dC5tYXggPSBTdHJpbmcobWF4KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBTdHlsZXMge1xuICAgIHN0eWxlITogSFRNTERpdkVsZW1lbnRcbiAgICB0cmFjayE6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBpbml0KHBhcmVudDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTdHlsZXMocGFyZW50KVxuICAgICAgICB0aGlzLmNyZWF0ZVRyYWNrKClcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlU3R5bGVzKHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuc3R5bGUuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19zdHlsZScpXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5zdHlsZSlcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlVHJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLnRyYWNrLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdHJhY2snKVxuICAgICAgICB0aGlzLnN0eWxlLmFwcGVuZCh0aGlzLnRyYWNrKVxuICAgIH1cbn1cblxuY2xhc3MgUHJvZ3Jlc3NCYXIge1xuICAgIGJhciE6IEhUTUxEaXZFbGVtZW50XG4gICAgY3JlYXRlUHJvZ3Jlc3NCYXIocGFyZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuYmFyLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fcHJvZ3Jlc3MtYmFyJylcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLmJhcilcbiAgICB9XG4gICAgY2FsY1BlcmNlbnQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgfVxuICAgIHNldERlZmF1bHQoaXNEb3VibGU6IGJvb2xlYW4sIHBlcmNlbnQ6IG51bWJlciwgcGVyY2VudFJpZ2h0OiBudW1iZXIgPSBOYU4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5sZWZ0ID0gcGVyY2VudCArICclJ1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudFJpZ2h0KSArICclJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUucmlnaHQgPSAoMTAwIC0gcGVyY2VudCkgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBTdHJpbmcoMClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRSaWdodChpc0RvdWJsZTogYm9vbGVhbiwgcGVyY2VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5yaWdodCA9IFN0cmluZygtMSkgKyAncHgnXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFRodW1iIHtcblxuICAgIHRodW1iRGVmYXVsdCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJSaWdodCE6IEhUTUxEaXZFbGVtZW50XG4gICAgdGh1bWJPdXRwdXQhOiBIVE1MRGl2RWxlbWVudFxuICAgIHRodW1iT3V0cHV0UmlnaHQ/OiBIVE1MRGl2RWxlbWVudFxuXG4gICAgaW5pdCAocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgXG4gICAgICAgIGlzRG91YmxlOiBib29sZWFuLCBcbiAgICAgICAgdG9nZ2xlRWxlbWVudDogYm9vbGVhbiwgXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogbnVtYmVyLCBcbiAgICAgICAgcmlnaHRWYWx1ZT86IG51bWJlcikge1xuXG4gICAgICAgIHRoaXMuY3JlYXRlVGh1bWIocGFyZW50LCBpc0RvdWJsZSlcbiAgICAgICAgaWYgKHRvZ2dsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGh1bWJFbGVtZW50KGlzRG91YmxlLCB0aGlzLnRodW1iRGVmYXVsdCwgdGhpcy50aHVtYlJpZ2h0KVxuICAgICAgICAgICAgdGhpcy5zZXRUaHVtYlZhbHVlKGlzRG91YmxlLCBkZWZhdWx0VmFsdWUsIHJpZ2h0VmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlVGh1bWIocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgaXNEb3VibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYoaXNEb3VibGUpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWInKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9sZWZ0JylcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy50aHVtYkRlZmF1bHQpXG5cbiAgICAgICAgICAgIHRoaXMudGh1bWJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYicpXG4gICAgICAgICAgICB0aGlzLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9yaWdodCcpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJSaWdodClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50aHVtYkRlZmF1bHQuY2xhc3NOYW1lID0gJ3JhbmdlLXNsaWRlcl9fdGh1bWInXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMudGh1bWJEZWZhdWx0KVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVUaHVtYkVsZW1lbnQoaXNEb3VibGU6IGJvb2xlYW4sIHBhcmVudDogSFRNTERpdkVsZW1lbnQsIHJpZ2h0UGFyZW50PzogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGlzRG91YmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1iT3V0cHV0UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHRoaXMudGh1bWJPdXRwdXRSaWdodC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iJylcbiAgICAgICAgICAgIHJpZ2h0UGFyZW50IS5hcHBlbmQodGhpcy50aHVtYk91dHB1dFJpZ2h0KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGh1bWJPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdGhpcy50aHVtYk91dHB1dC5jbGFzc05hbWUgPSAncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYidcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0aGlzLnRodW1iT3V0cHV0KVxuICAgIH1cbiAgICBzZXRUaHVtYlZhbHVlKGlzRG91YmxlOiBib29sZWFuLCB2YWx1ZTogbnVtYmVyLCByaWdodFZhbHVlPzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGh1bWJPdXRwdXQudGV4dENvbnRlbnQgPSBTdHJpbmcodmFsdWUpXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYk91dHB1dFJpZ2h0IS50ZXh0Q29udGVudCA9IFN0cmluZyhyaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBwbGFjZVRodW1iKGlzRG91YmxlOiBib29sZWFuLCBwZXJjZW50OiBudW1iZXIsIHBlcmNlbnRSaWdodDogbnVtYmVyID0gTmFOKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGh1bWJEZWZhdWx0LnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgJyUnXG4gICAgICAgIGlmIChpc0RvdWJsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYlJpZ2h0LnN0eWxlLnJpZ2h0ID0gKDEwMCAtIHBlcmNlbnRSaWdodCkgKyAnJSdcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtGb3JtLCBTdHlsZXMsIFByb2dyZXNzQmFyLCBUaHVtYn0iLCJcbmltcG9ydCB7Rm9ybSwgU3R5bGVzLCBQcm9ncmVzc0JhciwgVGh1bWJ9IGZyb20gJy4vc3ViVmlld3MnXG5cbmludGVyZmFjZSBJRGF0YVZpZXcge1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICAgIHJpZ2h0VmFsdWU6IG51bWJlclxuICAgIGlzUmFuZ2U6IGJvb2xlYW5cbiAgICByaWdodFByb2dyZXNzQmFyOiBib29sZWFuXG4gICAgb3ZlclRodW1iRWxlbWVudDogYm9vbGVhblxuICAgIGlzVmVydGljYWw6IGJvb2xlYW5cbiAgICBpc1NjYWxlOiBib29sZWFuXG4gICAgc2NhbGVWYWx1ZXM6IG51bWJlcltdXG59XG5pbnRlcmZhY2UgSU9ic2VydmVyVmlldyB7XG4gICAgdXBkYXRlTW9kZWwoYXJnMDogc3RyaW5nLCBhcmcxOiBudW1iZXIpOiB2b2lkXG59XG5cbmNsYXNzIFZpZXcge1xuICAgIHBhcmVudDogSFRNTEVsZW1lbnRcbiAgICB3cmFwcGVyITogSFRNTERpdkVsZW1lbnRcbiAgICBzaW5nbGVJbnB1dD86IEhUTUxJbnB1dEVsZW1lbnRcbiAgICBsZWZ0SW5wdXQ/OiBIVE1MSW5wdXRFbGVtZW50XG4gICAgcmlnaHRJbnB1dD86IEhUTUxJbnB1dEVsZW1lbnRcbiAgICBmb3JtOiBGb3JtXG4gICAgc3R5bGVzOiBTdHlsZXNcbiAgICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXJcbiAgICB0aHVtYjogVGh1bWJcbiAgICBvcHRpb25zOiBJRGF0YVZpZXdcbiAgICBvYnNlcnZlcnM6IElPYnNlcnZlclZpZXdbXVxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIGZvcm06IEZvcm0sIHN0eWxlczogU3R5bGVzLCBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXIsIHRodW1iOiBUaHVtYikge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtXG4gICAgICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBwcm9ncmVzc0JhclxuICAgICAgICB0aGlzLnRodW1iID0gdGh1bWJcblxuICAgIC8vIGRlZmF1bHQgZGF0YVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMTAsXG4gICAgICAgICAgICByaWdodFZhbHVlOiA1MCxcbiAgICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgICByaWdodFByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIG92ZXJUaHVtYkVsZW1lbnQ6IHRydWUsXG4gICAgICAgICAgICBpc1ZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU2NhbGU6IGZhbHNlLFxuICAgICAgICAgICAgc2NhbGVWYWx1ZXM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdXG4gICAgfVxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogSU9ic2VydmVyVmlldykge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKVxuICAgIH1cbiAgICBcbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNyZWF0ZVdyYXBwZXIoKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5mb3JtLmluaXQoXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIsIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1pbiwgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWF4XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5zdHlsZXMuaW5pdCh0aGlzLndyYXBwZXIpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY3JlYXRlUHJvZ3Jlc3NCYXIodGhpcy5zdHlsZXMuc3R5bGUpXG4gICAgICAgIHRoaXMudGh1bWIuaW5pdChcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzLnN0eWxlLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzUmFuZ2UsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZVxuICAgICAgICApXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgdGhpcy5ldmVudElucHV0KClcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5iYXIub25tb3VzZWRvd24gPSBlbGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPbkJhcihlbGVtKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3R5bGVzLnRyYWNrLm9ubW91c2Vkb3duID0gZWxlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT25CYXIoZWxlbSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50SG92ZXIoKVxuICAgICAgICB0aGlzLmV2ZW50QWN0aXZlKClcblxuXG5cbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfdmVydGljYWwnKVxuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLm92ZXJUaHVtYkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUtdGh1bWJfdmVydGljYWwnKVxuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXRSaWdodD8uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl92ZXJ0aWNhbCcpXG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1NjYWxlKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0cygpXG4gICAgfSBcbiAgICBjcmVhdGVXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyJylcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMud3JhcHBlcilcbiAgICB9XG4gICAgY3JlYXRlU2NhbGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzY2FsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNjYWxlLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fc2NhbGUnKVxuICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kKHNjYWxlLCB0aGlzLnN0eWxlcy5zdHlsZSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5zY2FsZVZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGl2VmFsdWU6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGRpdlZhbHVlLmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdmFsdWUnKVxuICAgICAgICAgICAgY29uc3QgdmFsdWU6IG51bWJlciA9IHRoaXMub3B0aW9ucy5zY2FsZVZhbHVlc1tpXVxuICAgICAgICAgICAgZGl2VmFsdWUudGV4dENvbnRlbnQgPSBTdHJpbmcoJ+KAkyAnICsgdmFsdWUpXG4gICAgICAgICAgICBzY2FsZS5hcHBlbmQoZGl2VmFsdWUpXG4gICAgICAgICAgICBjb25zdCBtaW4gPSB0aGlzLm9wdGlvbnMubWluXG4gICAgICAgICAgICBjb25zdCBtYXggPSB0aGlzLm9wdGlvbnMubWF4XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50OiBudW1iZXIgPSBNYXRoLnJvdW5kKCgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwKVxuICAgICAgICAgICAgZGl2VmFsdWUuc3R5bGUubGVmdCA9IHBlcmNlbnQgKyAnJSdcblxuICAgICAgICAgICAgZGl2VmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudENsaWNrKHZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRpdlZhbHVlLnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyB0aGlzLnBsYWNlU2NhbGUoKSArICclJ1xuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlU2NhbGUgPSAoKTogbnVtYmVyID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGg6IG51bWJlciA9IHRoaXMud3JhcHBlci5vZmZzZXRXaWR0aFxuICAgICAgICByZXR1cm4gKDAuNDIgKiBjb250YWluZXJXaWR0aCArIDc3Ny44KSAvIGNvbnRhaW5lcldpZHRoXG4gICAgfVxuICAgIGNyZWF0ZUlucHV0cyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICBsZXQgbGVmdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgbGVmdElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9faW5wdXQnKVxuICAgICAgICAgICAgbGVmdElucHV0LnBsYWNlaG9sZGVyID0gJ2xlZnQgdmFsdWUnXG4gICAgICAgICAgICBsZWZ0SW5wdXQudmFsdWUgPSBTdHJpbmcodGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICAgIHRoaXMubGVmdElucHV0ID0gbGVmdElucHV0XG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kKHRoaXMubGVmdElucHV0KVxuXG4gICAgICAgICAgICBsZXQgcmlnaHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHJpZ2h0SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX19pbnB1dCcpXG4gICAgICAgICAgICByaWdodElucHV0LnBsYWNlaG9sZGVyID0gJ3JpZ2h0IHZhbHVlJ1xuICAgICAgICAgICAgcmlnaHRJbnB1dC52YWx1ZSA9IFN0cmluZyh0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgICAgIHRoaXMucmlnaHRJbnB1dCA9IHJpZ2h0SW5wdXRcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmQodGhpcy5yaWdodElucHV0KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2luZ2xlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICBzaW5nbGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX2lucHV0JylcbiAgICAgICAgICAgIHNpbmdsZUlucHV0LnBsYWNlaG9sZGVyID0gJ3ZhbHVlJ1xuICAgICAgICAgICAgc2luZ2xlSW5wdXQudmFsdWUgPSBTdHJpbmcodGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlSW5wdXQgPSBzaW5nbGVJbnB1dFxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLnNpbmdsZUlucHV0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uc2V0SW5wdXRWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIGNvbnN0IHBsYWNlRGVmYXVsdDogbnVtYmVyID0gdGhpcy5wcm9ncmVzc0Jhci5jYWxjUGVyY2VudChcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQudmFsdWUpLCBcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQubWluKSwgXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0Lm1heCkpXG5cbiAgICAgICAgY29uc3QgcGxhY2VSaWdodDogbnVtYmVyID0gdGhpcy5mb3JtLnJpZ2h0SW5wdXQgPyBcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2FsY1BlcmNlbnQoXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0LnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMuZm9ybS5yaWdodElucHV0Lm1pbiksIFxuICAgICAgICAgICAgICAgIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC5tYXgpKSBcbiAgICAgICAgICAgICAgICA6IE5hTlxuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2V0RGVmYXVsdCh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJpZ2h0UHJvZ3Jlc3NCYXIpIHsgXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnNldFJpZ2h0KHRoaXMub3B0aW9ucy5pc1JhbmdlLCBwbGFjZURlZmF1bHQpIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGh1bWIucGxhY2VUaHVtYih0aGlzLm9wdGlvbnMuaXNSYW5nZSwgcGxhY2VEZWZhdWx0LCBwbGFjZVJpZ2h0KVxuICAgIH1cbiAgICBldmVudElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSA9IE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51cGRhdGVNb2RlbCgnZGVmYXVsdCcsIE51bWJlcih0aGlzLmZvcm0uZGVmYXVsdElucHV0LnZhbHVlKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0SW5wdXQhLnZhbHVlID0gU3RyaW5nKHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlSW5wdXQhLnZhbHVlID0gU3RyaW5nKHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUgPSBOdW1iZXIodGhpcy5mb3JtLnJpZ2h0SW5wdXQudmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbnB1dCgpXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcsIE51bWJlcih0aGlzLmZvcm0ucmlnaHRJbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0SW5wdXQhLnZhbHVlID0gU3RyaW5nKHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjbGlja09uQmFyKGVsZW06IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBET01SZWN0ID0gdGhpcy5zdHlsZXMudHJhY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgbGV0IGxlbmd0aDogbnVtYmVyID0gY29vcmRzLnJpZ2h0IC0gY29vcmRzLmxlZnRcbiAgICAgICAgbGV0IHJhbmdlOiBudW1iZXIgPSB0aGlzLm9wdGlvbnMubWF4IC0gdGhpcy5vcHRpb25zLm1pblxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uOiBudW1iZXIgPSBlbGVtLnBhZ2VYIC0gY29vcmRzLmxlZnRcbiAgICAgICAgbGV0IHBlcmNlbnQ6IG51bWJlclxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gZWxlbS5wYWdlWSAtIGNvb3Jkcy50b3BcbiAgICAgICAgICAgIGxlbmd0aCA9IGNvb3Jkcy5ib3R0b20gLSBjb29yZHMudG9wXG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgY3VycmVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gbGVuZ3RoXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGVyY2VudCA9IGN1cnJlbnRQb3NpdGlvbi9sZW5ndGggKiAxMDBcbiAgICAgICAgY29uc3QgbmV3VmFsdWU6IG51bWJlciA9IE1hdGgucm91bmQodGhpcy5vcHRpb25zLm1pbiArICgocmFuZ2UpICogcGVyY2VudCkgLyAxMDApXG4gICAgICAgIHRoaXMuZXZlbnRDbGljayhuZXdWYWx1ZSlcbiAgICB9XG4gICAgZXZlbnRDbGljayhuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGhhbGZPZkJhcjogbnVtYmVyID0gKHRoaXMub3B0aW9ucy5yaWdodFZhbHVlICsgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSkgLyAyIFxuICAgICAgICBjb25zdCBpc1JpZ2h0VHJhY2s6IGJvb2xlYW4gPSB0aGlzLm9wdGlvbnMuaXNSYW5nZSAmJiBuZXdWYWx1ZSA+IHRoaXMub3B0aW9ucy5yaWdodFZhbHVlIFxuICAgICAgICBjb25zdCBpc1JpZ2h0QmFyID0gdGhpcy5vcHRpb25zLmlzUmFuZ2UgJiYgbmV3VmFsdWUgPiBoYWxmT2ZCYXIgXG4gICAgICAgIGlmKGlzUmlnaHRUcmFjayB8fCBpc1JpZ2h0QmFyKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmlnaHRWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgICB0aGlzLnNldElucHV0KClcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZU1vZGVsKCdyaWdodCcsIG5ld1ZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMudGh1bWIuc2V0VGh1bWJWYWx1ZSh0aGlzLm9wdGlvbnMuaXNSYW5nZSwgXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgdGhpcy5vcHRpb25zLnJpZ2h0VmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdFZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXQoKVxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlTW9kZWwoJ2RlZmF1bHQnLCBuZXdWYWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnRodW1iLnNldFRodW1iVmFsdWUodGhpcy5vcHRpb25zLmlzUmFuZ2UsIFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucy5yaWdodFZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGV2ZW50SG92ZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5kZWZhdWx0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYk91dHB1dC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3ZhbHVlLXRodW1iX2JpZycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1zbGlkZXJfX3RodW1iX2hvdmVyJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXRSaWdodD8uY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl9iaWcnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LmFkZCgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtLmRlZmF1bHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlclRodW1iRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXQuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl9iaWcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYkRlZmF1bHQuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVyVGh1bWJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJPdXRwdXRSaWdodD8uY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX192YWx1ZS10aHVtYl9iaWcnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX190aHVtYl9ob3ZlcicpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGV2ZW50QWN0aXZlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGh1bWIudGh1bWJEZWZhdWx0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYi50aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLXNsaWRlcl9fdGh1bWJfYWN0aXZlJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm0uZGVmYXVsdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iRGVmYXVsdC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1zbGlkZXJfX3RodW1iX2FjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iLnRodW1iUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2Utc2xpZGVyX190aHVtYl9hY3RpdmUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtWaWV3fSJdLCJzb3VyY2VSb290IjoiIn0=