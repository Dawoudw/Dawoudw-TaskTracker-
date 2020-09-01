function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js ***!
    \*********************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmButtonActive0d5784f9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-44bf8136.js */
    "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");
    /* harmony import */


    var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-eea61379.js */
    "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
    /* harmony import */


    var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./haptic-7b8ba70a.js */
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */

        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }

        currentTouchedButton = undefined;
      };

      return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme3f0b0c04Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/create-subtask/create-subtask.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/create-subtask/create-subtask.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreateSubtaskCreateSubtaskPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-margin\">\n  <ion-toolbar color=\"primary\">\n    <ion-icon\n      name=\"document-text-outline\"\n      size=\"large\"\n      slot=\"start\"\n      style=\"\n        width: 24px !important;\n        height: 24px !important;\n        margin-right: 5px;\n        margin-left: 5px;\n      \"\n    ></ion-icon>\n    <ion-label slot=\"start\" color=\"light\"> <p>Create Task</p></ion-label>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon name=\"close-sharp\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-text-center\" [fullscreen]=\"true\">\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col\n          size-xs=\"12\"\n          size-sm=\"12\"\n          size-med=\"10\"\n          offset-med=\"1\"\n          size-lg=\"8\"\n          offset-lg=\"2\"\n          size-xlg=\"6\"\n          offset-xlg=\"3\"\n        >\n          <ion-card>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color=\"medium\" position=\"floating\"\n                    >Task Title</ion-label\n                  >\n                  <ion-input\n                    type=\"text\"\n                    autocomplete\n                    autocorrect\n                    formControlName=\"title\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color=\"medium\" position=\"floating\"\n                    >Task Date</ion-label\n                  >\n                  <ion-datetime\n                    type=\"text\"\n                    autocomplete\n                    autocorrect\n                    formControlName=\"taskdate\"\n                  >\n                  </ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color=\"medium\" position=\"floating\"\n                    >Progres(0~100)</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    inputmode =\"numeric\"\n                    min=\"0\"\n                    step=\"1\"\n                    max=\"100\"\n                    autocomplete\n                    autocorrect\n                    formControlName=\"progress\"\n                  >\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color=\"medium\" position=\"floating\"\n                    >Task Details</ion-label\n                  >\n                  <ion-textarea\n                    rows=\"10\"\n                    cols=\"20\"\n                    autocomplete\n                    autocorrect\n                    formControlName=\"description\"\n                  ></ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-button\n                  class=\"primary\"\n                  expand=\"block\"\n                  style=\"\n                    margin-left: 20%;\n                    margin-right: 20%;\n                    text-align: center !important;\n                  \"\n                  (click)=\"createSubTask()\"\n                  >Create</ion-button\n                >\n              </ion-col>\n            </ion-row>\n            <div\n              *ngIf=\"!form.valid\"\n              #divMsg\n              style=\"display: none;\"\n              class=\"ion-no-padding ion-margin-top ion-margin-horizontal\"\n            >\n              <ion-chip\n                color=\"danger\"\n                class=\"ion-justify-content-center\"\n                style=\"width: 98%;\"\n              >\n                <ion-label>Please fill all required fileds</ion-label>\n              </ion-chip>\n            </div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Models/sub-task.ts":
  /*!************************************!*\
    !*** ./src/app/Models/sub-task.ts ***!
    \************************************/

  /*! exports provided: SubTask */

  /***/
  function srcAppModelsSubTaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubTask", function () {
      return SubTask;
    });

    var SubTask = function SubTask(taskid, id, taskdate, details, subtask, progress) {
      _classCallCheck(this, SubTask);

      /*
      
            "details": "Start in first course ",
            "id": "c18b3e4d-4b4e-48fa-8ef9-08187fd7fd33",
            "subtask": "Course1",
            "taskid": "78b26ac9-a437-40b4-b68a-0585a075e734",
            "taskdate": "2020-08-24",
            "progress": "0%"
       */
      this.id = "";
      this.taskid = taskid;
      this.id = id;
      this.taskdate = taskdate;
      this.details = details;
      this.subtask = subtask;
      this.progress = progress;
    };
    /***/

  },

  /***/
  "./src/app/Pages/create-subtask/create-subtask.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/Pages/create-subtask/create-subtask.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreateSubtaskCreateSubtaskPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2NyZWF0ZS1zdWJ0YXNrL2NyZWF0ZS1zdWJ0YXNrLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Pages/create-subtask/create-subtask.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Pages/create-subtask/create-subtask.page.ts ***!
    \*************************************************************/

  /*! exports provided: CreateSubtaskPage */

  /***/
  function srcAppPagesCreateSubtaskCreateSubtaskPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateSubtaskPage", function () {
      return CreateSubtaskPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/tasks.service */
    "./src/app/Services/tasks.service.ts");
    /* harmony import */


    var src_app_Models_sub_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Models/sub-task */
    "./src/app/Models/sub-task.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Services/authService.service */
    "./src/app/Services/authService.service.ts");

    var CreateSubtaskPage = /*#__PURE__*/function () {
      function CreateSubtaskPage(modalCtrl, tasksService, // private formBuilder: FormBuilder
      router, auth) {
        _classCallCheck(this, CreateSubtaskPage);

        this.modalCtrl = modalCtrl;
        this.tasksService = tasksService;
        this.router = router;
        this.auth = auth;
        this.subTask = new src_app_Models_sub_task__WEBPACK_IMPORTED_MODULE_5__["SubTask"]();
        this.user = auth.getLoggedUser();

        if (!this.user) {
          console.log(!this.user);
          router.ngOnDestroy();
        }
      }

      _createClass(CreateSubtaskPage, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("".concat(this.task.id));
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: "blur",
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: "blur",
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            progress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: "blur",
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            taskdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: "blur",
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
          });
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.modalCtrl.dismiss(null, "cancel");
        }
      }, {
        key: "onCreateTask",
        value: function onCreateTask() {
          if (this.form.valid && this.task) {
            console.log("New-Task Page From FORM: ", this.form.value.title, this.form.value.description);
            this.tasksService.addTask(this.form.value.title, this.form.value.description).subscribe();
            this.form.reset();
            this.modalCtrl.dismiss(null, "task created");
          } else {
            return;
          } // window.location.replace('tasktracker/mytasks')

        }
      }, {
        key: "createSubTask",
        value: function createSubTask() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.form.valid && this.task)) {
                      _context3.next = 12;
                      break;
                    }

                    this.subTask.taskid = this.task.id;
                    this.subTask.taskdate = this.form.value.taskdate;
                    this.subTask.details = this.form.value.description;
                    this.subTask.subtask = this.form.value.title;
                    this.subTask.progress = this.form.value.progress;
                    console.log(this.subTask);

                    if (!this.form.value.title) {
                      _context3.next = 10;
                      break;
                    }

                    _context3.next = 10;
                    return this.tasksService.addSubTask(this.subTask.id, this.subTask).then(function (result) {
                      console.log("createSubTask() result ", result);
                    })["catch"](function (er) {
                      console.log(er);
                    })["finally"](function () {
                      _this.form.reset();

                      _this.modalCtrl.dismiss(null, "task created");
                    });

                  case 10:
                    _context3.next = 13;
                    break;

                  case 12:
                    console.log("There were undefined fields when creating a subtask");

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return CreateSubtaskPage;
    }();

    CreateSubtaskPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }];
    };

    CreateSubtaskPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-create-subtask",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-subtask.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/create-subtask/create-subtask.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-subtask.page.scss */
      "./src/app/Pages/create-subtask/create-subtask.page.scss"))["default"]]
    })], CreateSubtaskPage);
    /***/
  },

  /***/
  "./src/app/Services/activate.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/Services/activate.guard.ts ***!
    \********************************************/

  /*! exports provided: ActivateGuard */

  /***/
  function srcAppServicesActivateGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateGuard", function () {
      return ActivateGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authService.service */
    "./src/app/Services/authService.service.ts");

    var ActivateGuard = /*#__PURE__*/function () {
      function ActivateGuard(authServ) {
        _classCallCheck(this, ActivateGuard);

        this.authServ = authServ;
      }

      _createClass(ActivateGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authServ.isLoggedIn()) return true;else {
            this.authServ.redirectToLogin();
            return false;
          }
        }
      }]);

      return ActivateGuard;
    }();

    ActivateGuard.ctorParameters = function () {
      return [{
        type: _authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    ActivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ActivateGuard);
    /***/
  },

  /***/
  "./src/app/Services/chat.service.ts":
  /*!******************************************!*\
    !*** ./src/app/Services/chat.service.ts ***!
    \******************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/users.service */
    "./src/app/Services/users.service.ts");
    /* harmony import */


    var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/authService.service */
    "./src/app/Services/authService.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__); // import { firebase } from '@firebase/app';


    var ChatService = /*#__PURE__*/function () {
      function ChatService(usrServ, auth, db, storage) {
        _classCallCheck(this, ChatService);

        this.usrServ = usrServ;
        this.auth = auth;
        this.db = db;
        this.storage = storage;
        this.usersList = this.usrServ.usersList;
        this.currentUser = this.auth.getLoggedUser();
        this.listOfGroups = [];
        this.currentUserIdFromFirebaseSetFromHomePage = '';
        this.currentUserIdFromFireabase = JSON.parse(localStorage.getItem("clientIdFirebase"));
      }

      _createClass(ChatService, [{
        key: "fromChatService",
        value: function fromChatService() {
          console.log("fromChatService");
          console.log(this.usersList);
          this.usrServ.usersList.forEach(function (user) {
            console.log("user");
            console.log(user['email']);
          });
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.db.collection('usersTaskTracker').snapshotChanges();
        } // getAllGroups(){
        //   console.log("in getAllGroups");
        //   console.log(this.currentUser.email);
        //   console.log("current user's id from firebase ="+this.currentUserIdFromFirebase);
        //   let currentUserIdFromFirebase = '';
        //   let userObservable = this.findUser(this.currentUser.email);
        //   forkJoin(userObservable).subscribe(res => {
        //     for (let data of res) {
        //       if (data.length > 0) {
        //         // console.log("found an existing user with this user id ="+data[0].id);
        //         currentUserIdFromFirebase = data[0].id;
        //         console.log("currentUserIdFromFirebase");
        //         console.log(currentUserIdFromFirebase);
        //         // this.groupId = data[0].id;
        //         // this.router.navigateByUrl(`/chat/${this.groupId}`);
        //       }
        //     }
        //   });
        //   console.log("before error");
        //   // setTimeout(() => {
        //     console.log(currentUserIdFromFirebase);
        //     return this.db.collection(`usersTaskTracker/${currentUserIdFromFirebase}/groups`).snapshotChanges();
        //   // }, 2000);
        // }

      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          console.log("currentUser =" + this.currentUser);
          console.log("current user's email =" + this.currentUser.email);
          console.log("firebase id for this user");
        } // checkOrCreateUserInFirebase() {
        //   //for checking if users exists in firebase collection "usersTaskTracker"
        //   //if a user is found, then load groups for group chat for that user
        //   let userObservable = this.findUser(this.currentUser.email);
        //   forkJoin(userObservable).subscribe(res => {
        //     for (let data of res) {
        //       if (data.length > 0) {
        //         // console.log("found an existing user with this user id ="+data[0].id);
        //         this.currentUserIdFromFirebase = data[0].id;
        //         // this.groupId = data[0].id;
        //         // this.router.navigateByUrl(`/chat/${this.groupId}`);
        //         //getting list of groups
        //         this.listOfGroups = [];
        //         this.getAllGroups(this.currentUserIdFromFirebase)
        //           .subscribe(result => {
        //             result.forEach(r => {
        //               if(r.payload.doc.data()['type'] == 'group') {
        //                 console.log("id of these groups =");
        //                 console.log(r.payload.doc.id);
        //                 this.listOfGroups.push(r);
        //               }
        //             });   
        //         });      
        //       }
        //       else {
        //         //User not found in firebase collection "usersTaskTracker"--creating the user
        //         console.log("user not found in firebase--in create user section");
        //         this.db.collection('usersTaskTracker').add({
        //           email: this.currentUser.email,
        //           userId: this.currentUser.userId,
        //           userName: this.currentUser.userName,
        //           avatar: this.currentUser.avatar
        //         });
        //       }
        //     }
        //   });
        // }

      }, {
        key: "findUser",
        value: function findUser(email) {
          var user = this.db.collection('usersTaskTracker', function (ref) {
            return ref.where('email', '==', email);
          }).valueChanges({
            idField: 'id'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
          return user;
        } // getAllGroups(id){
        //   console.log("id received ==="+id);
        //   return this.db.collection(`usersTaskTracker/${id}/groups`).snapshotChanges();
        // }

      }, {
        key: "getAllGroups2",
        value: function getAllGroups2() {
          return this.db.collection("usersTaskTracker/".concat(this.currentUserIdFromFireabase, "/groups")).snapshotChanges();
        }
      }, {
        key: "createGroup",
        value: function createGroup(title, users) {
          var _this2 = this;

          var current = {
            email: this.currentUser.email,
            id: this.currentUserIdFromFireabase,
            userName: this.currentUser.userName
          }; // console.log("additional user(s) is/are: ");
          // console.log(users);

          var allUsers = [current];
          allUsers.push.apply(allUsers, _toConsumableArray(users)); // console.log("allUsers for group chat");
          // console.log(allUsers);

          return this.db.collection('groupsTaskTracker').add({
            title: title,
            type: 'group',
            users: allUsers
          }).then(function (res) {
            var promises = [];

            var _iterator = _createForOfIteratorHelper(allUsers),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var usr = _step.value;
                console.log("usr");
                console.log(usr);
                console.log("usr.id");
                console.log(usr.id);
                console.log("res.id");
                console.log(res.id);

                var oneAdd = _this2.db.collection("usersTaskTracker/".concat(usr.id, "/groups")).add({
                  id: res.id,
                  title: title,
                  users: allUsers.length,
                  type: 'group'
                });

                promises.push(oneAdd);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return Promise.all(promises);
          });
        }
      }, {
        key: "findGroupById",
        value: function findGroupById(id) {
          var group = this.db.doc("groupsTaskTracker/".concat(id)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
          return group;
        }
      }, {
        key: "getOneGroup",
        value: function getOneGroup(id) {
          var _this3 = this;

          var user_group_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          // console.log("firebase created current user's id");
          // console.log(this.auth.currentUserId);
          return this.db.doc("groupsTaskTracker/".concat(id)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            var count = 0;
            var data = changes.payload.data();

            _this3.db.collection("groupsTaskTracker/".concat(id, "/messages")).snapshotChanges().forEach(function (result) {
              result.forEach(function (r) {
                // console.log("r ="+r);
                //Get firebase created id of each messsage: r.payload.doc.id
                var mId = r.payload.doc.id;
                var uId = r.payload.doc.data()['from']; // setTimeout(() => {
                //   // console.log("mId ="+mId);
                // }, 1000);

                if (r.payload.doc.data()['readFlag'] == false && uId != _this3.currentUserIdFromFireabase) {
                  count = count + 1;
                }
              });
            });

            var group_id = changes.payload.id; // console.log("count");
            // console.log(count);

            return Object.assign({
              user_group_key: user_group_key,
              id: group_id
            }, data);
          }));
        }
      }, {
        key: "getChatMessages",
        value: function getChatMessages(groupId) {
          var count = 0;
          return this.db.collection("groupsTaskTracker/".concat(groupId, "/messages"), function (ref) {
            return ref.orderBy('createdAt');
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }
      }, {
        key: "addChatMessage",
        value: function addChatMessage(msg, chatId) {
          return this.db.collection('groupsTaskTracker/' + chatId + '/messages').add({
            msg: msg,
            from: this.currentUserIdFromFireabase,
            readFlag: false,
            unreadCount: 0,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp()
          });
        }
      }, {
        key: "addFileMessage",
        value: function addFileMessage(file, chatId) {
          var newName = "".concat(new Date().getTime(), "-").concat(this.currentUserIdFromFireabase, ".png");
          var storageRef = this.storage.ref("/files/".concat(chatId, "/").concat(newName));
          return {
            task: storageRef.putString(file, 'base64', {
              contentType: 'image/png'
            }),
            ref: storageRef
          };
        }
      }, {
        key: "saveFileMessage",
        value: function saveFileMessage(filepath, chatId) {
          return this.db.collection('groupsTaskTracker/' + chatId + '/messages').add({
            file: filepath,
            from: this.currentUserIdFromFireabase,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp()
          });
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
      }, {
        type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]
      }];
    };

    ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChatService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map