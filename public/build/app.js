(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bootstrap_bundle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap.bundle.js */ "./assets/bootstrap.bundle.js");
/* harmony import */ var _bootstrap_bundle_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_bundle_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _freelancer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./freelancer.js */ "./assets/freelancer.js");
/* harmony import */ var _jqBootstrapValidation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jqBootstrapValidation.js */ "./assets/jqBootstrapValidation.js");
/* harmony import */ var _contact_me_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact_me.js */ "./assets/contact_me.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.scss in this case)




__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js"); // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
//import $ from 'jquery';


var jQuery = __webpack_require__(/*! jquery-easing */ "./node_modules/jquery-easing/dist/jquery.easing.1.3.umd.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});

/***/ }),

/***/ "./assets/bootstrap.bundle.js":
/*!************************************!*\
  !*** ./assets/bootstrap.bundle.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.find-index */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, $) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.3.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName$1.ACTIVE);
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.3.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;

        default:
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread({}, Default, $(this).data());

        if (_typeof(config) === 'object') {
          _config = _objectSpread({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread({}, $(target).data(), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.3.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread({}, Default$1, $this.data(), _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.14.7
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */


  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  var timeoutDuration = 0;

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      timeoutDuration = 1;
      break;
    }
  }

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }

      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;
  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */

  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */

  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }
  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */


  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    } // NOTE: 1 DOM access here


    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }
  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */


  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }

    return element.parentNode || element.host;
  }
  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */


  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;

      case '#document':
        return element.body;
    } // Firefox want us to check `-x` and `-y` variations as well


    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */

  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }

    if (version === 10) {
      return isIE10;
    }

    return isIE11 || isIE10;
  }
  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */


  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

    var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    } // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...


    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }

    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }
  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */


  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }
  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */


  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    } // Here we make sure to give as "start" the element that comes first in the DOM


    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1; // Get common ancestor container

    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    } // one of the nodes is inside shadowDOM, find which one


    var element1root = getRoot(element1);

    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }
  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */


  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }
  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */


  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }
  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */


  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);
    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */


  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }
  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */


  function getBoundingClientRect(element) {
    var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11

    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    }; // subtract scrollbar size from sizes

    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;
    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons

    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');
      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }

    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.

    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);
      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };
    return getClientRect(offset);
  }
  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */


  function isFixed(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }

    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }

    var parentNode = getParentNode(element);

    if (!parentNode) {
      return false;
    }

    return isFixed(parentNode);
  }
  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */


  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }

    var el = element.parentElement;

    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }

    return el || document.documentElement;
  }
  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */


  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

    var boundaries = {
      top: 0,
      left: 0
    };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference); // Handle viewport case

    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;

      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));

        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    } // Add paddings


    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;
    return width * height;
  }
  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };
    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });
    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });
    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
    var variation = placement.split('-')[1];
    return computedPlacement + (variation ? '-' + variation : '');
  }
  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */


  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }
  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */


  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }
  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */


  function getOppositePlacement(placement) {
    var hash = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }
  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */


  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0]; // Get popper node sizes

    var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    }; // depending by the popper placement we have to compute its offsets slightly differently

    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';
    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }
  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */


  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    } // use `filter` to obtain the same behavior of `find`


    return arr.filter(check)[0];
  }
  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */


  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    } // use `find` + `indexOf` if `findIndex` isn't supported


    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }
  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */


  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }

      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);
        data = fn(data, modifier);
      }
    });
    return data;
  }
  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */


  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    }; // compute reference element offsets

    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value

    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

    data.originalPlacement = data.placement;
    data.positionFixed = this.options.positionFixed; // compute the popper offsets

    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

    data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback

    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }
  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */


  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }
  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */


  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;

      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }

    return null;
  }
  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */


  function destroy() {
    this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it

    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }

    return this;
  }
  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */


  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, {
      passive: true
    });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }

    scrollParents.push(target);
  }
  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */


  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, {
      passive: true
    }); // Scroll event listener on scroll parents

    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;
    return state;
  }
  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */


  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }
  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */


  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    }); // Reset state

    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }
  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */


  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }
  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */


  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }
  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */


  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = ''; // add unit if the value is numeric and is one of the following

      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }

      element.style[prop] = styles[prop] + unit;
    });
  }
  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */


  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];

      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */


  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element

    setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }
  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */


  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value

    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
    popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations

    setStyles(popper, {
      position: options.positionFixed ? 'fixed' : 'absolute'
    });
    return options;
  }
  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */


  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);
    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;
    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */

  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;

    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }

    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

    var styles = {
      position: popper.position
    };
    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed

    var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.

    var left = void 0,
        top = void 0;

    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }

    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }

    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    } // Attributes


    var attributes = {
      'x-placement': data.placement
    }; // Update `data` attributes, styles and arrowStyles

    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
    return data;
  }
  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */


  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });
    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';

      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }

    return isRequired;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function arrow(data, options) {
    var _data$offsets$arrow; // arrow depends on keepTogether in order to work


    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var isVertical = ['left', 'right'].indexOf(placement) !== -1;
    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len]; //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //
    // top/left side

    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    } // bottom/right side


    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }

    data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available

    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
    return data;
  }
  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */


  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }

    return variation;
  }
  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */


  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

  var validPlacements = placements.slice(3);
  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */

  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */

  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';
    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;

      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;

      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;

      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);
      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
      var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future

        data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }

    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }
  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */


  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2]; // If it's not a number it's an operator, I guess

    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;

      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;

        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;

      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }

      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }
  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */


  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one

    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    }); // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space

    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    } // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.


    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, []) // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    }); // Loop trough the offsets arrays and execute the operations

    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */


  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var basePlacement = placement.split('-')[0];
    var offsets = void 0;

    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken

    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    } // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself


    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification

    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];
    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed

    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;
    options.boundaries = boundaries;
    var order = options.priority;
    var popper = data.offsets.popper;
    var check = {
      primary: function primary(placement) {
        var value = popper[placement];

        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }

        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];

        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }

        return defineProperty({}, mainSide, value);
      }
    };
    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends({}, popper, check[side](placement));
    });
    data.offsets.popper = popper;
    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;
      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';
      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };
      data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
  }
  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */


  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: offset,

      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: preventOverflow,

      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],

      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,

      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: arrow,

      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: flip,

      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',

      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,

      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport'
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,

      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,

      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: computeStyle,

      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,

      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',

      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: applyStyle,

      /** @prop {Function} */
      onLoad: applyStyleOnLoad,

      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };
  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */

  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };
  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */
  // Utils
  // Methods

  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      }; // make update() debounced, so that it only runs at most once-per-tick


      this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

      this.options = _extends({}, Popper.Defaults, options); // init state

      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      }; // get reference and popper elements (allow jQuery wrappers)

      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

      this.options.modifiers = {};
      Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      }); // Refactoring modifiers' list (Object => Array)

      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends({
          name: name
        }, _this.options.modifiers[name]);
      }) // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      }); // fire the first update to position the popper in the right place

      this.update();
      var eventsEnabled = this.options.eventsEnabled;

      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    } // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }
      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */

      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();
  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.3.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);
      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.show = function show() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, this.constructor.Default, $(this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        } // Disable Popper.js if we have a static display

      };

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return popperConfig;
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS));

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.3.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE)) {
        this._dialog.querySelector(Selector$5.MODAL_BODY).scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $(_this7._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread({}, Default$3, $(this).data(), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

  };
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i, len);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.3.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector$6.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            return _this._handlePopperPlacementChange(data);
          }
        });
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getOffset = function _getOffset() {
      var _this3 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, _this3.config.offset(data.offsets, _this3.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this4 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this4.element).on(_this4.constructor.Event.CLICK, _this4.config.selector, function (event) {
            return _this4.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSEENTER : _this4.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSELEAVE : _this4.constructor.Event.FOCUSOUT;
          $(_this4.element).on(eventIn, _this4.config.selector, function (event) {
            return _this4._enter(event);
          }).on(eventOut, _this4.config.selector, function (event) {
            return _this4._leave(event);
          });
        }
      });
      $(this.element).closest('.modal').on('hide.bs.modal', function () {
        if (_this4.element) {
          _this4.hide();
        }
      });

      if (this.config.selector) {
        this.config = _objectSpread({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread({}, this.constructor.Default, dataAttributes, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.3.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.3.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$6, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.3.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.3.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      $(this._element).trigger(Event$a.SHOW);

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this.hide();
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide(withoutTimeout) {
      var _this2 = this;

      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      $(this._element).trigger(Event$a.HIDE);

      if (withoutTimeout) {
        this._close();
      } else {
        this._timeout = setTimeout(function () {
          _this2._close();
        }, this._config.delay);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$7, $(this._element).data(), _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this3.hide(true);
      });
    };

    _proto._close = function _close() {
      var _this4 = this;

      var complete = function complete() {
        _this4._element.classList.add(ClassName$a.HIDE);

        $(_this4._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  (function () {
    if (typeof $ === 'undefined') {
      throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })();

  exports.Util = Util;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/contact_me.js":
/*!******************************!*\
  !*** ./assets/contact_me.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







jquery__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_6___default()("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function submitError($form, event, errors) {// additional error messages or events
    },
    submitSuccess: function submitSuccess($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM

      var name = jquery__WEBPACK_IMPORTED_MODULE_6___default()("input#name").val();
      var email = jquery__WEBPACK_IMPORTED_MODULE_6___default()("input#email").val();
      var phone = jquery__WEBPACK_IMPORTED_MODULE_6___default()("input#phone").val();
      var message = jquery__WEBPACK_IMPORTED_MODULE_6___default()("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message

      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }

      var $this = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages

      jquery__WEBPACK_IMPORTED_MODULE_6___default.a.ajax({
        url: "././Controller/ContactController.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function success() {
          // Success message
          jquery__WEBPACK_IMPORTED_MODULE_6___default()('#success').html("<div class='alert alert-success'>");
          jquery__WEBPACK_IMPORTED_MODULE_6___default()('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
          jquery__WEBPACK_IMPORTED_MODULE_6___default()('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
          jquery__WEBPACK_IMPORTED_MODULE_6___default()('#success > .alert-success').append('</div>'); //clear all fields

          jquery__WEBPACK_IMPORTED_MODULE_6___default()('#contactForm').trigger("reset");
        },
        error: function error() {
          // Fail message
          jquery__WEBPACK_IMPORTED_MODULE_6___default()('#success').html("<div class='alert alert-danger'>");
          jquery__WEBPACK_IMPORTED_MODULE_6___default()('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
          jquery__WEBPACK_IMPORTED_MODULE_6___default()('#success > .alert-danger').append(jquery__WEBPACK_IMPORTED_MODULE_6___default()("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          jquery__WEBPACK_IMPORTED_MODULE_6___default()('#success > .alert-danger').append('</div>'); //clear all fields

          jquery__WEBPACK_IMPORTED_MODULE_6___default()('#contactForm').trigger("reset");
        },
        complete: function complete() {
          setTimeout(function () {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function filter() {
      return jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).is(":visible");
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_6___default()("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).tab("show");
  });
});
/*When clicking on Full hide fail/success boxes */

jquery__WEBPACK_IMPORTED_MODULE_6___default()('#name').focus(function () {
  jquery__WEBPACK_IMPORTED_MODULE_6___default()('#success').html('');
});

/***/ }),

/***/ "./assets/freelancer.js":
/*!******************************!*\
  !*** ./assets/freelancer.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);





(function ($) {
  "use strict"; // Start of use strict
  // Smooth scrolling using jQuery easing

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 71
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  }); // Scroll to top button appear

  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();

    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  }); // Closes responsive menu when a scroll trigger link is clicked

  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  }); // Activate scrollspy to add active class to navbar items on scroll

  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  }); // Collapse Navbar

  var navbarCollapse = function navbarCollapse() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }; // Collapse now if page is not at top


  navbarCollapse(); // Collapse the navbar when page is scrolled

  $(window).scroll(navbarCollapse); // Floating label headings for the contact form

  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });
})(jquery__WEBPACK_IMPORTED_MODULE_3___default.a); // End of use strict

/***/ }),

/***/ "./assets/jqBootstrapValidation.js":
/*!*****************************************!*\
  !*** ./assets/jqBootstrapValidation.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_25__);


























function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/* jqBootstrapValidation
 * A plugin for automating validation on Twitter Bootstrap formatted forms.
 *
 * v1.3.6
 *
 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
 *
 * http://ReactiveRaven.github.com/jqBootstrapValidation/
 */

(function ($) {
  var createdElements = [];
  var defaults = {
    options: {
      prependExistingHelpBlock: false,
      sniffHtml: true,
      // sniff for 'required', 'maxlength', etc
      preventSubmit: true,
      // stop the form submit event from firing if validation fails
      submitError: false,
      // function called if there is an error when trying to submit
      submitSuccess: false,
      // function called just before a successful submit event is sent to the server
      semanticallyStrict: false,
      // set to true to tidy up generated HTML output
      autoAdd: {
        helpBlocks: true
      },
      filter: function filter() {
        // return $(this).is(":visible"); // only validate elements you can see
        return true; // validate everything
      }
    },
    methods: {
      init: function init(options) {
        var settings = $.extend(true, {}, defaults);
        settings.options = $.extend(true, settings.options, options);
        var $siblingElements = this;
        var uniqueForms = $.unique($siblingElements.map(function () {
          return $(this).parents("form")[0];
        }).toArray());
        $(uniqueForms).bind("submit", function (e) {
          var $form = $(this);
          var warningsFound = 0;
          var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
          $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");
          $inputs.each(function (i, el) {
            var $this = $(el),
                $controlGroup = $this.parents(".control-group").first();

            if ($controlGroup.hasClass("warning")) {
              $controlGroup.removeClass("warning").addClass("error");
              warningsFound++;
            }
          });
          $inputs.trigger("validationLostFocus.validation");

          if (warningsFound) {
            if (settings.options.preventSubmit) {
              e.preventDefault();
            }

            $form.addClass("error");

            if ($.isFunction(settings.options.submitError)) {
              settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
            }
          } else {
            $form.removeClass("error");

            if ($.isFunction(settings.options.submitSuccess)) {
              settings.options.submitSuccess($form, e);
            }
          }
        });
        return this.each(function () {
          // Get references to everything we're interested in
          var $this = $(this),
              $controlGroup = $this.parents(".control-group").first(),
              $helpBlock = $controlGroup.find(".help-block").first(),
              $form = $this.parents("form").first(),
              validatorNames = []; // create message container if not exists

          if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) {
            $helpBlock = $('<div class="help-block" />');
            $controlGroup.find('.controls').append($helpBlock);
            createdElements.push($helpBlock[0]);
          } // =============================================================
          //                                     SNIFF HTML FOR VALIDATORS
          // =============================================================
          // *snort sniff snuffle*


          if (settings.options.sniffHtml) {
            var message = ""; // ---------------------------------------------------------
            //                                                   PATTERN
            // ---------------------------------------------------------

            if ($this.attr("pattern") !== undefined) {
              message = "Not in the expected format<!-- data-validation-pattern-message to override -->";

              if ($this.data("validationPatternMessage")) {
                message = $this.data("validationPatternMessage");
              }

              $this.data("validationPatternMessage", message);
              $this.data("validationPatternRegex", $this.attr("pattern"));
            } // ---------------------------------------------------------
            //                                                       MAX
            // ---------------------------------------------------------


            if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) {
              var max = $this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax");
              message = "Too high: Maximum of '" + max + "'<!-- data-validation-max-message to override -->";

              if ($this.data("validationMaxMessage")) {
                message = $this.data("validationMaxMessage");
              }

              $this.data("validationMaxMessage", message);
              $this.data("validationMaxMax", max);
            } // ---------------------------------------------------------
            //                                                       MIN
            // ---------------------------------------------------------


            if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) {
              var min = $this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin");
              message = "Too low: Minimum of '" + min + "'<!-- data-validation-min-message to override -->";

              if ($this.data("validationMinMessage")) {
                message = $this.data("validationMinMessage");
              }

              $this.data("validationMinMessage", message);
              $this.data("validationMinMin", min);
            } // ---------------------------------------------------------
            //                                                 MAXLENGTH
            // ---------------------------------------------------------


            if ($this.attr("maxlength") !== undefined) {
              message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->";

              if ($this.data("validationMaxlengthMessage")) {
                message = $this.data("validationMaxlengthMessage");
              }

              $this.data("validationMaxlengthMessage", message);
              $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
            } // ---------------------------------------------------------
            //                                                 MINLENGTH
            // ---------------------------------------------------------


            if ($this.attr("minlength") !== undefined) {
              message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->";

              if ($this.data("validationMinlengthMessage")) {
                message = $this.data("validationMinlengthMessage");
              }

              $this.data("validationMinlengthMessage", message);
              $this.data("validationMinlengthMinlength", $this.attr("minlength"));
            } // ---------------------------------------------------------
            //                                                  REQUIRED
            // ---------------------------------------------------------


            if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) {
              message = settings.builtInValidators.required.message;

              if ($this.data("validationRequiredMessage")) {
                message = $this.data("validationRequiredMessage");
              }

              $this.data("validationRequiredMessage", message);
            } // ---------------------------------------------------------
            //                                                    NUMBER
            // ---------------------------------------------------------


            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") {
              message = settings.builtInValidators.number.message;

              if ($this.data("validationNumberMessage")) {
                message = $this.data("validationNumberMessage");
              }

              $this.data("validationNumberMessage", message);
            } // ---------------------------------------------------------
            //                                                     EMAIL
            // ---------------------------------------------------------


            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") {
              message = "Not a valid email address<!-- data-validator-validemail-message to override -->";

              if ($this.data("validationValidemailMessage")) {
                message = $this.data("validationValidemailMessage");
              } else if ($this.data("validationEmailMessage")) {
                message = $this.data("validationEmailMessage");
              }

              $this.data("validationValidemailMessage", message);
            } // ---------------------------------------------------------
            //                                                MINCHECKED
            // ---------------------------------------------------------


            if ($this.attr("minchecked") !== undefined) {
              message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->";

              if ($this.data("validationMincheckedMessage")) {
                message = $this.data("validationMincheckedMessage");
              }

              $this.data("validationMincheckedMessage", message);
              $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
            } // ---------------------------------------------------------
            //                                                MAXCHECKED
            // ---------------------------------------------------------


            if ($this.attr("maxchecked") !== undefined) {
              message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->";

              if ($this.data("validationMaxcheckedMessage")) {
                message = $this.data("validationMaxcheckedMessage");
              }

              $this.data("validationMaxcheckedMessage", message);
              $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
            }
          } // =============================================================
          //                                       COLLECT VALIDATOR NAMES
          // =============================================================
          // Get named validators


          if ($this.data("validation") !== undefined) {
            validatorNames = $this.data("validation").split(",");
          } // Get extra ones defined on the element's data attributes


          $.each($this.data(), function (i, el) {
            var parts = i.replace(/([A-Z])/g, ",$1").split(",");

            if (parts[0] === "validation" && parts[1]) {
              validatorNames.push(parts[1]);
            }
          }); // =============================================================
          //                                     NORMALISE VALIDATOR NAMES
          // =============================================================

          var validatorNamesToInspect = validatorNames;
          var newValidatorNamesToInspect = [];

          do // repeatedly expand 'shortcut' validators into their real validators
          {
            // Uppercase only the first letter of each name
            $.each(validatorNames, function (i, el) {
              validatorNames[i] = formatValidatorName(el);
            }); // Remove duplicate validator names

            validatorNames = $.unique(validatorNames); // Pull out the new validator names from each shortcut

            newValidatorNamesToInspect = [];
            $.each(validatorNamesToInspect, function (i, el) {
              if ($this.data("validation" + el + "Shortcut") !== undefined) {
                // Are these custom validators?
                // Pull them out!
                $.each($this.data("validation" + el + "Shortcut").split(","), function (i2, el2) {
                  newValidatorNamesToInspect.push(el2);
                });
              } else if (settings.builtInValidators[el.toLowerCase()]) {
                // Is this a recognised built-in?
                // Pull it out!
                var validator = settings.builtInValidators[el.toLowerCase()];

                if (validator.type.toLowerCase() === "shortcut") {
                  $.each(validator.shortcut.split(","), function (i, el) {
                    el = formatValidatorName(el);
                    newValidatorNamesToInspect.push(el);
                    validatorNames.push(el);
                  });
                }
              }
            });
            validatorNamesToInspect = newValidatorNamesToInspect;
          } while (validatorNamesToInspect.length > 0); // =============================================================
          //                                       SET UP VALIDATOR ARRAYS
          // =============================================================


          var validators = {};
          $.each(validatorNames, function (i, el) {
            // Set up the 'override' message
            var message = $this.data("validation" + el + "Message");
            var hasOverrideMessage = message !== undefined;
            var foundValidator = false;
            message = message ? message : "'" + el + "' validation failed <!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message -->";
            $.each(settings.validatorTypes, function (validatorType, validatorTemplate) {
              if (validators[validatorType] === undefined) {
                validators[validatorType] = [];
              }

              if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) {
                validators[validatorType].push($.extend(true, {
                  name: formatValidatorName(validatorTemplate.name),
                  message: message
                }, validatorTemplate.init($this, el)));
                foundValidator = true;
              }
            });

            if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) {
              var validator = $.extend(true, {}, settings.builtInValidators[el.toLowerCase()]);

              if (hasOverrideMessage) {
                validator.message = message;
              }

              var validatorType = validator.type.toLowerCase();

              if (validatorType === "shortcut") {
                foundValidator = true;
              } else {
                $.each(settings.validatorTypes, function (validatorTemplateType, validatorTemplate) {
                  if (validators[validatorTemplateType] === undefined) {
                    validators[validatorTemplateType] = [];
                  }

                  if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) {
                    $this.data("validation" + el + formatValidatorName(validatorTemplate.name), validator[validatorTemplate.name.toLowerCase()]);
                    validators[validatorType].push($.extend(validator, validatorTemplate.init($this, el)));
                    foundValidator = true;
                  }
                });
              }
            }

            if (!foundValidator) {
              $.error("Cannot find validation info for '" + el + "'");
            }
          }); // =============================================================
          //                                         STORE FALLBACK VALUES
          // =============================================================

          $helpBlock.data("original-contents", $helpBlock.data("original-contents") ? $helpBlock.data("original-contents") : $helpBlock.html());
          $helpBlock.data("original-role", $helpBlock.data("original-role") ? $helpBlock.data("original-role") : $helpBlock.attr("role"));
          $controlGroup.data("original-classes", $controlGroup.data("original-clases") ? $controlGroup.data("original-classes") : $controlGroup.attr("class"));
          $this.data("original-aria-invalid", $this.data("original-aria-invalid") ? $this.data("original-aria-invalid") : $this.attr("aria-invalid")); // =============================================================
          //                                                    VALIDATION
          // =============================================================

          $this.bind("validation.validation", function (event, params) {
            var value = getValue($this); // Get a list of the errors to apply

            var errorsFound = [];
            $.each(validators, function (validatorType, validatorTypeArray) {
              if (value || value.length || params && params.includeEmpty || !!settings.validatorTypes[validatorType].blockSubmit && params && !!params.submitting) {
                $.each(validatorTypeArray, function (i, validator) {
                  if (settings.validatorTypes[validatorType].validate($this, value, validator)) {
                    errorsFound.push(validator.message);
                  }
                });
              }
            });
            return errorsFound;
          });
          $this.bind("getValidators.validation", function () {
            return validators;
          }); // =============================================================
          //                                             WATCH FOR CHANGES
          // =============================================================

          $this.bind("submit.validation", function () {
            return $this.triggerHandler("change.validation", {
              submitting: true
            });
          });
          $this.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function (e, params) {
            var value = getValue($this);
            var errorsFound = [];
            $controlGroup.find("input,textarea,select").each(function (i, el) {
              var oldCount = errorsFound.length;
              $.each($(el).triggerHandler("validation.validation", params), function (j, message) {
                errorsFound.push(message);
              });

              if (errorsFound.length > oldCount) {
                $(el).attr("aria-invalid", "true");
              } else {
                var original = $this.data("original-aria-invalid");
                $(el).attr("aria-invalid", original !== undefined ? original : false);
              }
            });
            $form.find("input,select,textarea").not($this).not("[name=\"" + $this.attr("name") + "\"]").trigger("validationLostFocus.validation");
            errorsFound = $.unique(errorsFound.sort()); // Were there any errors?

            if (errorsFound.length) {
              // Better flag it up as a warning.
              $controlGroup.removeClass("success error").addClass("warning"); // How many errors did we find?

              if (settings.options.semanticallyStrict && errorsFound.length === 1) {
                // Only one? Being strict? Just output it.
                $helpBlock.html(errorsFound[0] + (settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : ""));
              } else {
                // Multiple? Being sloppy? Glue them together into an UL.
                $helpBlock.html("<ul role=\"alert\"><li>" + errorsFound.join("</li><li>") + "</li></ul>" + (settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : ""));
              }
            } else {
              $controlGroup.removeClass("warning error success");

              if (value.length > 0) {
                $controlGroup.addClass("success");
              }

              $helpBlock.html($helpBlock.data("original-contents"));
            }

            if (e.type === "blur") {
              $controlGroup.removeClass("success");
            }
          });
          $this.bind("validationLostFocus.validation", function () {
            $controlGroup.removeClass("success");
          });
        });
      },
      destroy: function destroy() {
        return this.each(function () {
          var $this = $(this),
              $controlGroup = $this.parents(".control-group").first(),
              $helpBlock = $controlGroup.find(".help-block").first(); // remove our events

          $this.unbind('.validation'); // events are namespaced.
          // reset help text

          $helpBlock.html($helpBlock.data("original-contents")); // reset classes

          $controlGroup.attr("class", $controlGroup.data("original-classes")); // reset aria

          $this.attr("aria-invalid", $this.data("original-aria-invalid")); // reset role

          $helpBlock.attr("role", $this.data("original-role")); // remove all elements we created

          if (createdElements.indexOf($helpBlock[0]) > -1) {
            $helpBlock.remove();
          }
        });
      },
      collectErrors: function collectErrors(includeEmpty) {
        var errorMessages = {};
        this.each(function (i, el) {
          var $el = $(el);
          var name = $el.attr("name");
          var errors = $el.triggerHandler("validation.validation", {
            includeEmpty: true
          });
          errorMessages[name] = $.extend(true, errors, errorMessages[name]);
        });
        $.each(errorMessages, function (i, el) {
          if (el.length === 0) {
            delete errorMessages[i];
          }
        });
        return errorMessages;
      },
      hasErrors: function hasErrors() {
        var errorMessages = [];
        this.each(function (i, el) {
          errorMessages = errorMessages.concat($(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", {
            submitting: true
          }) : []);
        });
        return errorMessages.length > 0;
      },
      override: function override(newDefaults) {
        defaults = $.extend(true, defaults, newDefaults);
      }
    },
    validatorTypes: {
      callback: {
        name: "callback",
        init: function init($this, name) {
          return {
            validatorName: name,
            callback: $this.data("validation" + name + "Callback"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function validate($this, value, validator) {
          if (validator.lastValue === value && validator.lastFinished) {
            return !validator.lastValid;
          }

          if (validator.lastFinished === true) {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;
            var rrjqbvValidator = validator;
            var rrjqbvThis = $this;
            executeFunctionByName(validator.callback, window, $this, value, function (data) {
              if (rrjqbvValidator.lastValue === data.value) {
                rrjqbvValidator.lastValid = data.valid;

                if (data.message) {
                  rrjqbvValidator.message = data.message;
                }

                rrjqbvValidator.lastFinished = true;
                rrjqbvThis.data("validation" + rrjqbvValidator.validatorName + "Message", rrjqbvValidator.message); // Timeout is set to avoid problems with the events being considered 'already fired'

                setTimeout(function () {
                  rrjqbvThis.trigger("change.validation");
                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
              }
            });
          }

          return false;
        }
      },
      ajax: {
        name: "ajax",
        init: function init($this, name) {
          return {
            validatorName: name,
            url: $this.data("validation" + name + "Ajax"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function validate($this, value, validator) {
          if ("" + validator.lastValue === "" + value && validator.lastFinished === true) {
            return validator.lastValid === false;
          }

          if (validator.lastFinished === true) {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;
            $.ajax({
              url: validator.url,
              data: "value=" + value + "&field=" + $this.attr("name"),
              dataType: "json",
              success: function success(data) {
                if ("" + validator.lastValue === "" + data.value) {
                  validator.lastValid = !!data.valid;

                  if (data.message) {
                    validator.message = data.message;
                  }

                  validator.lastFinished = true;
                  $this.data("validation" + validator.validatorName + "Message", validator.message); // Timeout is set to avoid problems with the events being considered 'already fired'

                  setTimeout(function () {
                    $this.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              },
              failure: function failure() {
                validator.lastValid = true;
                validator.message = "ajax call failed";
                validator.lastFinished = true;
                $this.data("validation" + validator.validatorName + "Message", validator.message); // Timeout is set to avoid problems with the events being considered 'already fired'

                setTimeout(function () {
                  $this.trigger("change.validation");
                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
              }
            });
          }

          return false;
        }
      },
      regex: {
        name: "regex",
        init: function init($this, name) {
          return {
            regex: regexFromString($this.data("validation" + name + "Regex"))
          };
        },
        validate: function validate($this, value, validator) {
          return !validator.regex.test(value) && !validator.negative || validator.regex.test(value) && validator.negative;
        }
      },
      required: {
        name: "required",
        init: function init($this, name) {
          return {};
        },
        validate: function validate($this, value, validator) {
          return !!(value.length === 0 && !validator.negative) || !!(value.length > 0 && validator.negative);
        },
        blockSubmit: true
      },
      match: {
        name: "match",
        init: function init($this, name) {
          var element = $this.parents("form").first().find("[name=\"" + $this.data("validation" + name + "Match") + "\"]").first();
          element.bind("validation.validation", function () {
            $this.trigger("change.validation", {
              submitting: true
            });
          });
          return {
            "element": element
          };
        },
        validate: function validate($this, value, validator) {
          return value !== validator.element.val() && !validator.negative || value === validator.element.val() && validator.negative;
        },
        blockSubmit: true
      },
      max: {
        name: "max",
        init: function init($this, name) {
          return {
            max: $this.data("validation" + name + "Max")
          };
        },
        validate: function validate($this, value, validator) {
          return parseFloat(value, 10) > parseFloat(validator.max, 10) && !validator.negative || parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative;
        }
      },
      min: {
        name: "min",
        init: function init($this, name) {
          return {
            min: $this.data("validation" + name + "Min")
          };
        },
        validate: function validate($this, value, validator) {
          return parseFloat(value) < parseFloat(validator.min) && !validator.negative || parseFloat(value) >= parseFloat(validator.min) && validator.negative;
        }
      },
      maxlength: {
        name: "maxlength",
        init: function init($this, name) {
          return {
            maxlength: $this.data("validation" + name + "Maxlength")
          };
        },
        validate: function validate($this, value, validator) {
          return value.length > validator.maxlength && !validator.negative || value.length <= validator.maxlength && validator.negative;
        }
      },
      minlength: {
        name: "minlength",
        init: function init($this, name) {
          return {
            minlength: $this.data("validation" + name + "Minlength")
          };
        },
        validate: function validate($this, value, validator) {
          return value.length < validator.minlength && !validator.negative || value.length >= validator.minlength && validator.negative;
        }
      },
      maxchecked: {
        name: "maxchecked",
        init: function init($this, name) {
          var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
          elements.bind("click.validation", function () {
            $this.trigger("change.validation", {
              includeEmpty: true
            });
          });
          return {
            maxchecked: $this.data("validation" + name + "Maxchecked"),
            elements: elements
          };
        },
        validate: function validate($this, value, validator) {
          return validator.elements.filter(":checked").length > validator.maxchecked && !validator.negative || validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative;
        },
        blockSubmit: true
      },
      minchecked: {
        name: "minchecked",
        init: function init($this, name) {
          var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
          elements.bind("click.validation", function () {
            $this.trigger("change.validation", {
              includeEmpty: true
            });
          });
          return {
            minchecked: $this.data("validation" + name + "Minchecked"),
            elements: elements
          };
        },
        validate: function validate($this, value, validator) {
          return validator.elements.filter(":checked").length < validator.minchecked && !validator.negative || validator.elements.filter(":checked").length >= validator.minchecked && validator.negative;
        },
        blockSubmit: true
      }
    },
    builtInValidators: {
      email: {
        name: "Email",
        type: "shortcut",
        shortcut: "validemail"
      },
      validemail: {
        name: "Validemail",
        type: "regex",
        regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}",
        message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
      },
      passwordagain: {
        name: "Passwordagain",
        type: "match",
        match: "password",
        message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
      },
      positive: {
        name: "Positive",
        type: "shortcut",
        shortcut: "number,positivenumber"
      },
      negative: {
        name: "Negative",
        type: "shortcut",
        shortcut: "number,negativenumber"
      },
      number: {
        name: "Number",
        type: "regex",
        regex: "([+-]?\\\d+(\\\.\\\d*)?([eE][+-]?[0-9]+)?)?",
        message: "Must be a number<!-- data-validator-number-message to override -->"
      },
      integer: {
        name: "Integer",
        type: "regex",
        regex: "[+-]?\\\d+",
        message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
      },
      positivenumber: {
        name: "Positivenumber",
        type: "min",
        min: 0,
        message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
      },
      negativenumber: {
        name: "Negativenumber",
        type: "max",
        max: 0,
        message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
      },
      required: {
        name: "Required",
        type: "required",
        message: "This is required<!-- data-validator-required-message to override -->"
      },
      checkone: {
        name: "Checkone",
        type: "minchecked",
        minchecked: 1,
        message: "Check at least one option<!-- data-validation-checkone-message to override -->"
      }
    }
  };

  var formatValidatorName = function formatValidatorName(name) {
    return name.toLowerCase().replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
      return p1 + p2.toUpperCase();
    });
  };

  var getValue = function getValue($this) {
    // Extract the value we're talking about
    var value = $this.val();
    var type = $this.attr("type");

    if (type === "checkbox") {
      value = $this.is(":checked") ? value : "";
    }

    if (type === "radio") {
      value = $('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "";
    }

    return value;
  };

  function regexFromString(inputstring) {
    return new RegExp("^" + inputstring + "$");
  }
  /**
   * Thanks to Jason Bunting via StackOverflow.com
   *
   * http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#answer-359910
   * Short link: http://tinyurl.com/executeFunctionByName
  **/


  function executeFunctionByName(functionName, context
  /*, args*/
  ) {
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();

    for (var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }

    return context[func].apply(this, args);
  }

  $.fn.jqBootstrapValidation = function (method) {
    if (defaults.methods[method]) {
      return defaults.methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (_typeof(method) === 'object' || !method) {
      return defaults.methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.jqBootstrapValidation');
      return null;
    }
  };

  $.jqBootstrapValidation = function (options) {
    $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments);
  };
})(jquery__WEBPACK_IMPORTED_MODULE_25___default.a);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuYnVuZGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250YWN0X21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcmVlbGFuY2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcUJvb3RzdHJhcFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwialF1ZXJ5IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJwb3BvdmVyIiwiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJoYXNPd25Qcm9wZXJ0eSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfaW5oZXJpdHNMb29zZSIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiX19wcm90b19fIiwiVFJBTlNJVElPTl9FTkQiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJ0b1R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCIsImJpbmRUeXBlIiwiZGVsZWdhdGVUeXBlIiwiaGFuZGxlIiwiZXZlbnQiLCJpcyIsImhhbmRsZU9iaiIsImhhbmRsZXIiLCJhcHBseSIsInVuZGVmaW5lZCIsInRyYW5zaXRpb25FbmRFbXVsYXRvciIsImR1cmF0aW9uIiwiX3RoaXMiLCJjYWxsZWQiLCJvbmUiLCJVdGlsIiwic2V0VGltZW91dCIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwic2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQiLCJmbiIsImVtdWxhdGVUcmFuc2l0aW9uRW5kIiwic3BlY2lhbCIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJocmVmQXR0ciIsInRyaW0iLCJxdWVyeVNlbGVjdG9yIiwiZXJyIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJjc3MiLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInNwbGl0IiwicmVmbG93Iiwib2Zmc2V0SGVpZ2h0IiwidHJpZ2dlciIsInN1cHBvcnRzVHJhbnNpdGlvbkVuZCIsIkJvb2xlYW4iLCJpc0VsZW1lbnQiLCJub2RlVHlwZSIsInR5cGVDaGVja0NvbmZpZyIsImNvbXBvbmVudE5hbWUiLCJjb25maWciLCJjb25maWdUeXBlcyIsInByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlVHlwZSIsIlJlZ0V4cCIsInRlc3QiLCJFcnJvciIsInRvVXBwZXJDYXNlIiwiZmluZFNoYWRvd1Jvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJhdHRhY2hTaGFkb3ciLCJnZXRSb290Tm9kZSIsInJvb3QiLCJTaGFkb3dSb290IiwicGFyZW50Tm9kZSIsIk5BTUUiLCJWRVJTSU9OIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJEQVRBX0FQSV9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJTZWxlY3RvciIsIkRJU01JU1MiLCJFdmVudCIsIkNMT1NFIiwiQ0xPU0VEIiwiQ0xJQ0tfREFUQV9BUEkiLCJDbGFzc05hbWUiLCJBTEVSVCIsIkZBREUiLCJTSE9XIiwiQWxlcnQiLCJfZWxlbWVudCIsIl9wcm90byIsImNsb3NlIiwicm9vdEVsZW1lbnQiLCJfZ2V0Um9vdEVsZW1lbnQiLCJjdXN0b21FdmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIl9yZW1vdmVFbGVtZW50IiwiZGlzcG9zZSIsInJlbW92ZURhdGEiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xvc2VFdmVudCIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJfZGVzdHJveUVsZW1lbnQiLCJkZXRhY2giLCJyZW1vdmUiLCJfalF1ZXJ5SW50ZXJmYWNlIiwiZWFjaCIsIiRlbGVtZW50IiwiZGF0YSIsIl9oYW5kbGVEaXNtaXNzIiwiYWxlcnRJbnN0YW5jZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0Iiwib24iLCJub0NvbmZsaWN0IiwiTkFNRSQxIiwiVkVSU0lPTiQxIiwiREFUQV9LRVkkMSIsIkVWRU5UX0tFWSQxIiwiREFUQV9BUElfS0VZJDEiLCJKUVVFUllfTk9fQ09ORkxJQ1QkMSIsIkNsYXNzTmFtZSQxIiwiQUNUSVZFIiwiQlVUVE9OIiwiRk9DVVMiLCJTZWxlY3RvciQxIiwiREFUQV9UT0dHTEVfQ0FSUk9UIiwiREFUQV9UT0dHTEUiLCJJTlBVVCIsIkV2ZW50JDEiLCJGT0NVU19CTFVSX0RBVEFfQVBJIiwiQnV0dG9uIiwidG9nZ2xlIiwidHJpZ2dlckNoYW5nZUV2ZW50IiwiYWRkQXJpYVByZXNzZWQiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhY3RpdmVFbGVtZW50IiwiaGFzQXR0cmlidXRlIiwiZm9jdXMiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImJ1dHRvbiIsIk5BTUUkMiIsIlZFUlNJT04kMiIsIkRBVEFfS0VZJDIiLCJFVkVOVF9LRVkkMiIsIkRBVEFfQVBJX0tFWSQyIiwiSlFVRVJZX05PX0NPTkZMSUNUJDIiLCJBUlJPV19MRUZUX0tFWUNPREUiLCJBUlJPV19SSUdIVF9LRVlDT0RFIiwiVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCIsIlNXSVBFX1RIUkVTSE9MRCIsIkRlZmF1bHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwic2xpZGUiLCJwYXVzZSIsIndyYXAiLCJ0b3VjaCIsIkRlZmF1bHRUeXBlIiwiRGlyZWN0aW9uIiwiTkVYVCIsIlBSRVYiLCJMRUZUIiwiUklHSFQiLCJFdmVudCQyIiwiU0xJREUiLCJTTElEIiwiS0VZRE9XTiIsIk1PVVNFRU5URVIiLCJNT1VTRUxFQVZFIiwiVE9VQ0hTVEFSVCIsIlRPVUNITU9WRSIsIlRPVUNIRU5EIiwiUE9JTlRFUkRPV04iLCJQT0lOVEVSVVAiLCJEUkFHX1NUQVJUIiwiTE9BRF9EQVRBX0FQSSIsIkNsYXNzTmFtZSQyIiwiQ0FST1VTRUwiLCJJVEVNIiwiUE9JTlRFUl9FVkVOVCIsIlNlbGVjdG9yJDIiLCJBQ1RJVkVfSVRFTSIsIklURU1fSU1HIiwiTkVYVF9QUkVWIiwiSU5ESUNBVE9SUyIsIkRBVEFfU0xJREUiLCJEQVRBX1JJREUiLCJQb2ludGVyVHlwZSIsIlRPVUNIIiwiUEVOIiwiQ2Fyb3VzZWwiLCJfaXRlbXMiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1BhdXNlZCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRGVsdGFYIiwiX2NvbmZpZyIsIl9nZXRDb25maWciLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJfdG91Y2hTdXBwb3J0ZWQiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIl9wb2ludGVyRXZlbnQiLCJ3aW5kb3ciLCJQb2ludGVyRXZlbnQiLCJNU1BvaW50ZXJFdmVudCIsIl9hZGRFdmVudExpc3RlbmVycyIsIm5leHQiLCJfc2xpZGUiLCJuZXh0V2hlblZpc2libGUiLCJoaWRkZW4iLCJwcmV2IiwiY3ljbGUiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ2aXNpYmlsaXR5U3RhdGUiLCJiaW5kIiwidG8iLCJpbmRleCIsImFjdGl2ZUluZGV4IiwiX2dldEl0ZW1JbmRleCIsImRpcmVjdGlvbiIsIm9mZiIsIl9oYW5kbGVTd2lwZSIsImFic0RlbHRheCIsImFicyIsIl90aGlzMiIsIl9rZXlkb3duIiwiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCJfdGhpczMiLCJzdGFydCIsIm9yaWdpbmFsRXZlbnQiLCJwb2ludGVyVHlwZSIsImNsaWVudFgiLCJ0b3VjaGVzIiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlIiwiYWRkIiwidGFnTmFtZSIsIndoaWNoIiwic2xpY2UiLCJpbmRleE9mIiwiX2dldEl0ZW1CeURpcmVjdGlvbiIsImlzTmV4dERpcmVjdGlvbiIsImlzUHJldkRpcmVjdGlvbiIsImxhc3RJdGVtSW5kZXgiLCJpc0dvaW5nVG9XcmFwIiwiZGVsdGEiLCJpdGVtSW5kZXgiLCJfdHJpZ2dlclNsaWRlRXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwiZXZlbnREaXJlY3Rpb25OYW1lIiwidGFyZ2V0SW5kZXgiLCJmcm9tSW5kZXgiLCJzbGlkZUV2ZW50IiwiZnJvbSIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiaW5kaWNhdG9ycyIsIm5leHRJbmRpY2F0b3IiLCJjaGlsZHJlbiIsImFkZENsYXNzIiwiX3RoaXM0IiwiYWN0aXZlRWxlbWVudEluZGV4IiwibmV4dEVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsInNsaWRFdmVudCIsIm5leHRFbGVtZW50SW50ZXJ2YWwiLCJwYXJzZUludCIsImRlZmF1bHRJbnRlcnZhbCIsImFjdGlvbiIsIlR5cGVFcnJvciIsInJpZGUiLCJfZGF0YUFwaUNsaWNrSGFuZGxlciIsInNsaWRlSW5kZXgiLCJjYXJvdXNlbHMiLCJsZW4iLCIkY2Fyb3VzZWwiLCJOQU1FJDMiLCJWRVJTSU9OJDMiLCJEQVRBX0tFWSQzIiwiRVZFTlRfS0VZJDMiLCJEQVRBX0FQSV9LRVkkMyIsIkpRVUVSWV9OT19DT05GTElDVCQzIiwiRGVmYXVsdCQxIiwiRGVmYXVsdFR5cGUkMSIsIkV2ZW50JDMiLCJTSE9XTiIsIkhJREUiLCJISURERU4iLCJDbGFzc05hbWUkMyIsIkNPTExBUFNFIiwiQ09MTEFQU0lORyIsIkNPTExBUFNFRCIsIkRpbWVuc2lvbiIsIldJRFRIIiwiSEVJR0hUIiwiU2VsZWN0b3IkMyIsIkFDVElWRVMiLCJDb2xsYXBzZSIsIl9pc1RyYW5zaXRpb25pbmciLCJfdHJpZ2dlckFycmF5IiwiaWQiLCJ0b2dnbGVMaXN0IiwiZWxlbSIsImZpbHRlckVsZW1lbnQiLCJmb3VuZEVsZW0iLCJfc2VsZWN0b3IiLCJwdXNoIiwiX3BhcmVudCIsIl9nZXRQYXJlbnQiLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiaGlkZSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJub3QiLCJzdGFydEV2ZW50IiwiZGltZW5zaW9uIiwiX2dldERpbWVuc2lvbiIsInN0eWxlIiwiYXR0ciIsInNldFRyYW5zaXRpb25pbmciLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwic2Nyb2xsU2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRyaWdnZXJBcnJheUxlbmd0aCIsIiRlbGVtIiwiaXNUcmFuc2l0aW9uaW5nIiwiaGFzV2lkdGgiLCJqcXVlcnkiLCJfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQiLCJ0cmlnZ2VyQXJyYXkiLCJpc09wZW4iLCIkdGhpcyIsImN1cnJlbnRUYXJnZXQiLCIkdHJpZ2dlciIsInNlbGVjdG9ycyIsIiR0YXJnZXQiLCJpc0Jyb3dzZXIiLCJsb25nZXJUaW1lb3V0QnJvd3NlcnMiLCJ0aW1lb3V0RHVyYXRpb24iLCJ1c2VyQWdlbnQiLCJtaWNyb3Rhc2tEZWJvdW5jZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsInRhc2tEZWJvdW5jZSIsInNjaGVkdWxlZCIsInN1cHBvcnRzTWljcm9UYXNrcyIsImRlYm91bmNlIiwiaXNGdW5jdGlvbiIsImZ1bmN0aW9uVG9DaGVjayIsImdldFR5cGUiLCJnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UGFyZW50Tm9kZSIsIm5vZGVOYW1lIiwiaG9zdCIsImdldFNjcm9sbFBhcmVudCIsImJvZHkiLCJfZ2V0U3R5bGVDb21wdXRlZFByb3AiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImlzSUUxMSIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwiaXNJRTEwIiwiaXNJRSIsInZlcnNpb24iLCJnZXRPZmZzZXRQYXJlbnQiLCJub09mZnNldFBhcmVudCIsIm9mZnNldFBhcmVudCIsIm5leHRFbGVtZW50U2libGluZyIsImlzT2Zmc2V0Q29udGFpbmVyIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJnZXRSb290Iiwibm9kZSIsImZpbmRDb21tb25PZmZzZXRQYXJlbnQiLCJlbGVtZW50MSIsImVsZW1lbnQyIiwib3JkZXIiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsIk5vZGUiLCJET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkciLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsImVsZW1lbnQxcm9vdCIsImdldFNjcm9sbCIsInNpZGUiLCJ1cHBlclNpZGUiLCJodG1sIiwic2Nyb2xsaW5nRWxlbWVudCIsImluY2x1ZGVTY3JvbGwiLCJyZWN0Iiwic3VidHJhY3QiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwibW9kaWZpZXIiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJnZXRCb3JkZXJzU2l6ZSIsInN0eWxlcyIsImF4aXMiLCJzaWRlQSIsInNpZGVCIiwiZ2V0U2l6ZSIsImNvbXB1dGVkU3R5bGUiLCJtYXgiLCJnZXRXaW5kb3dTaXplcyIsImhlaWdodCIsIndpZHRoIiwiY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsImNyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsIl9leHRlbmRzIiwiYXNzaWduIiwiZ2V0Q2xpZW50UmVjdCIsIm9mZnNldHMiLCJyZXN1bHQiLCJzaXplcyIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaG9yaXpTY3JvbGxiYXIiLCJvZmZzZXRXaWR0aCIsInZlcnRTY3JvbGxiYXIiLCJnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUiLCJmaXhlZFBvc2l0aW9uIiwiaXNIVE1MIiwiY2hpbGRyZW5SZWN0IiwicGFyZW50UmVjdCIsInNjcm9sbFBhcmVudCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSIsImV4Y2x1ZGVTY3JvbGwiLCJyZWxhdGl2ZU9mZnNldCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm9mZnNldCIsImlzRml4ZWQiLCJnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IiwicGFyZW50RWxlbWVudCIsImVsIiwiZ2V0Qm91bmRhcmllcyIsInBvcHBlciIsInJlZmVyZW5jZSIsInBhZGRpbmciLCJib3VuZGFyaWVzRWxlbWVudCIsImJvdW5kYXJpZXMiLCJib3VuZGFyaWVzTm9kZSIsIl9nZXRXaW5kb3dTaXplcyIsImlzUGFkZGluZ051bWJlciIsImdldEFyZWEiLCJfcmVmIiwiY29tcHV0ZUF1dG9QbGFjZW1lbnQiLCJwbGFjZW1lbnQiLCJyZWZSZWN0IiwicmVjdHMiLCJzb3J0ZWRBcmVhcyIsIm1hcCIsImFyZWEiLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXJlZEFyZWFzIiwiX3JlZjIiLCJjb21wdXRlZFBsYWNlbWVudCIsInZhcmlhdGlvbiIsImdldFJlZmVyZW5jZU9mZnNldHMiLCJzdGF0ZSIsImNvbW1vbk9mZnNldFBhcmVudCIsImdldE91dGVyU2l6ZXMiLCJ4IiwibWFyZ2luQm90dG9tIiwieSIsIm1hcmdpblJpZ2h0IiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJoYXNoIiwicmVwbGFjZSIsIm1hdGNoZWQiLCJnZXRQb3BwZXJPZmZzZXRzIiwicmVmZXJlbmNlT2Zmc2V0cyIsInBvcHBlclJlY3QiLCJwb3BwZXJPZmZzZXRzIiwiaXNIb3JpeiIsIm1haW5TaWRlIiwic2Vjb25kYXJ5U2lkZSIsIm1lYXN1cmVtZW50Iiwic2Vjb25kYXJ5TWVhc3VyZW1lbnQiLCJmaW5kIiwiYXJyIiwiY2hlY2siLCJBcnJheSIsImZpbmRJbmRleCIsInByb3AiLCJjdXIiLCJydW5Nb2RpZmllcnMiLCJtb2RpZmllcnMiLCJlbmRzIiwibW9kaWZpZXJzVG9SdW4iLCJjb25zb2xlIiwid2FybiIsImVuYWJsZWQiLCJ1cGRhdGUiLCJpc0Rlc3Ryb3llZCIsImFycm93U3R5bGVzIiwiYXR0cmlidXRlcyIsImZsaXBwZWQiLCJvcHRpb25zIiwicG9zaXRpb25GaXhlZCIsImZsaXAiLCJvcmlnaW5hbFBsYWNlbWVudCIsInBvc2l0aW9uIiwiaXNDcmVhdGVkIiwib25DcmVhdGUiLCJvblVwZGF0ZSIsImlzTW9kaWZpZXJFbmFibGVkIiwibW9kaWZpZXJOYW1lIiwic29tZSIsIm5hbWUiLCJnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUiLCJwcmVmaXhlcyIsInVwcGVyUHJvcCIsImNoYXJBdCIsInRvQ2hlY2siLCJkZXN0cm95IiwicmVtb3ZlQXR0cmlidXRlIiwid2lsbENoYW5nZSIsImRpc2FibGVFdmVudExpc3RlbmVycyIsInJlbW92ZU9uRGVzdHJveSIsInJlbW92ZUNoaWxkIiwiZ2V0V2luZG93IiwiYXR0YWNoVG9TY3JvbGxQYXJlbnRzIiwiY2FsbGJhY2siLCJzY3JvbGxQYXJlbnRzIiwiaXNCb2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJzZXR1cEV2ZW50TGlzdGVuZXJzIiwidXBkYXRlQm91bmQiLCJzY3JvbGxFbGVtZW50IiwiZXZlbnRzRW5hYmxlZCIsImVuYWJsZUV2ZW50TGlzdGVuZXJzIiwic2NoZWR1bGVVcGRhdGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlzTnVtZXJpYyIsIm4iLCJpc05hTiIsImlzRmluaXRlIiwic2V0U3R5bGVzIiwidW5pdCIsInNldEF0dHJpYnV0ZXMiLCJhcHBseVN0eWxlIiwiYXJyb3dFbGVtZW50IiwiYXBwbHlTdHlsZU9uTG9hZCIsIm1vZGlmaWVyT3B0aW9ucyIsImdldFJvdW5kZWRPZmZzZXRzIiwic2hvdWxkUm91bmQiLCJfZGF0YSRvZmZzZXRzIiwicm91bmQiLCJmbG9vciIsIm5vUm91bmQiLCJ2IiwicmVmZXJlbmNlV2lkdGgiLCJwb3BwZXJXaWR0aCIsImlzVmVydGljYWwiLCJpc1ZhcmlhdGlvbiIsInNhbWVXaWR0aFBhcml0eSIsImJvdGhPZGRXaWR0aCIsImhvcml6b250YWxUb0ludGVnZXIiLCJ2ZXJ0aWNhbFRvSW50ZWdlciIsImlzRmlyZWZveCIsImNvbXB1dGVTdHlsZSIsImxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiIsImdwdUFjY2VsZXJhdGlvbiIsIm9mZnNldFBhcmVudFJlY3QiLCJkZXZpY2VQaXhlbFJhdGlvIiwicHJlZml4ZWRQcm9wZXJ0eSIsImludmVydFRvcCIsImludmVydExlZnQiLCJhcnJvdyIsImlzTW9kaWZpZXJSZXF1aXJlZCIsInJlcXVlc3RpbmdOYW1lIiwicmVxdWVzdGVkTmFtZSIsInJlcXVlc3RpbmciLCJpc1JlcXVpcmVkIiwiX3JlcXVlc3RpbmciLCJyZXF1ZXN0ZWQiLCJfZGF0YSRvZmZzZXRzJGFycm93Iiwic2lkZUNhcGl0YWxpemVkIiwiYWx0U2lkZSIsIm9wU2lkZSIsImFycm93RWxlbWVudFNpemUiLCJjZW50ZXIiLCJwb3BwZXJNYXJnaW5TaWRlIiwicG9wcGVyQm9yZGVyU2lkZSIsInNpZGVWYWx1ZSIsIm1pbiIsImdldE9wcG9zaXRlVmFyaWF0aW9uIiwicGxhY2VtZW50cyIsInZhbGlkUGxhY2VtZW50cyIsImNsb2Nrd2lzZSIsImNvdW50ZXIiLCJyZXZlcnNlIiwiQkVIQVZJT1JTIiwiRkxJUCIsIkNMT0NLV0lTRSIsIkNPVU5URVJDTE9DS1dJU0UiLCJwbGFjZW1lbnRPcHBvc2l0ZSIsImZsaXBPcmRlciIsImJlaGF2aW9yIiwic3RlcCIsInJlZk9mZnNldHMiLCJvdmVybGFwc1JlZiIsIm92ZXJmbG93c0xlZnQiLCJvdmVyZmxvd3NSaWdodCIsIm92ZXJmbG93c1RvcCIsIm92ZXJmbG93c0JvdHRvbSIsIm92ZXJmbG93c0JvdW5kYXJpZXMiLCJmbGlwcGVkVmFyaWF0aW9uIiwiZmxpcFZhcmlhdGlvbnMiLCJrZWVwVG9nZXRoZXIiLCJ0b1ZhbHVlIiwic3RyIiwic2l6ZSIsInBhcnNlT2Zmc2V0IiwiYmFzZVBsYWNlbWVudCIsInVzZUhlaWdodCIsImZyYWdtZW50cyIsImZyYWciLCJkaXZpZGVyIiwic2VhcmNoIiwic3BsaXRSZWdleCIsIm9wcyIsIm9wIiwibWVyZ2VXaXRoUHJldmlvdXMiLCJyZWR1Y2UiLCJpbmRleDIiLCJwcmV2ZW50T3ZlcmZsb3ciLCJ0cmFuc2Zvcm1Qcm9wIiwicG9wcGVyU3R5bGVzIiwidHJhbnNmb3JtIiwicHJpb3JpdHkiLCJwcmltYXJ5IiwiZXNjYXBlV2l0aFJlZmVyZW5jZSIsInNlY29uZGFyeSIsInNoaWZ0Iiwic2hpZnR2YXJpYXRpb24iLCJzaGlmdE9mZnNldHMiLCJib3VuZCIsImlubmVyIiwic3VidHJhY3RMZW5ndGgiLCJvbkxvYWQiLCJEZWZhdWx0cyIsIlBvcHBlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSQkMSIsImRlc3Ryb3kkJDEiLCJlbmFibGVFdmVudExpc3RlbmVycyQkMSIsImRpc2FibGVFdmVudExpc3RlbmVycyQkMSIsIlV0aWxzIiwiUG9wcGVyVXRpbHMiLCJOQU1FJDQiLCJWRVJTSU9OJDQiLCJEQVRBX0tFWSQ0IiwiRVZFTlRfS0VZJDQiLCJEQVRBX0FQSV9LRVkkNCIsIkpRVUVSWV9OT19DT05GTElDVCQ0IiwiRVNDQVBFX0tFWUNPREUiLCJTUEFDRV9LRVlDT0RFIiwiVEFCX0tFWUNPREUiLCJBUlJPV19VUF9LRVlDT0RFIiwiQVJST1dfRE9XTl9LRVlDT0RFIiwiUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIiwiUkVHRVhQX0tFWURPV04iLCJFdmVudCQ0IiwiQ0xJQ0siLCJLRVlET1dOX0RBVEFfQVBJIiwiS0VZVVBfREFUQV9BUEkiLCJDbGFzc05hbWUkNCIsIkRJU0FCTEVEIiwiRFJPUFVQIiwiRFJPUFJJR0hUIiwiRFJPUExFRlQiLCJNRU5VUklHSFQiLCJNRU5VTEVGVCIsIlBPU0lUSU9OX1NUQVRJQyIsIlNlbGVjdG9yJDQiLCJGT1JNX0NISUxEIiwiTUVOVSIsIk5BVkJBUl9OQVYiLCJWSVNJQkxFX0lURU1TIiwiQXR0YWNobWVudE1hcCIsIlRPUCIsIlRPUEVORCIsIkJPVFRPTSIsIkJPVFRPTUVORCIsIlJJR0hURU5EIiwiTEVGVEVORCIsIkRlZmF1bHQkMiIsImJvdW5kYXJ5IiwiZGlzcGxheSIsIkRlZmF1bHRUeXBlJDIiLCJEcm9wZG93biIsIl9wb3BwZXIiLCJfbWVudSIsIl9nZXRNZW51RWxlbWVudCIsIl9pbk5hdmJhciIsIl9kZXRlY3ROYXZiYXIiLCJkaXNhYmxlZCIsIl9nZXRQYXJlbnRGcm9tRWxlbWVudCIsImlzQWN0aXZlIiwiX2NsZWFyTWVudXMiLCJzaG93RXZlbnQiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsIm5vb3AiLCJoaWRlRXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJfZ2V0UGxhY2VtZW50IiwiJHBhcmVudERyb3Bkb3duIiwiX2dldE9mZnNldCIsInBvcHBlckNvbmZpZyIsInRvZ2dsZXMiLCJjb250ZXh0IiwiY2xpY2tFdmVudCIsImRyb3Bkb3duTWVudSIsIl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpdGVtcyIsIk5BTUUkNSIsIlZFUlNJT04kNSIsIkRBVEFfS0VZJDUiLCJFVkVOVF9LRVkkNSIsIkRBVEFfQVBJX0tFWSQ1IiwiSlFVRVJZX05PX0NPTkZMSUNUJDUiLCJFU0NBUEVfS0VZQ09ERSQxIiwiRGVmYXVsdCQzIiwiYmFja2Ryb3AiLCJEZWZhdWx0VHlwZSQzIiwiRXZlbnQkNSIsIkZPQ1VTSU4iLCJSRVNJWkUiLCJDTElDS19ESVNNSVNTIiwiS0VZRE9XTl9ESVNNSVNTIiwiTU9VU0VVUF9ESVNNSVNTIiwiTU9VU0VET1dOX0RJU01JU1MiLCJDbGFzc05hbWUkNSIsIlNDUk9MTEFCTEUiLCJTQ1JPTExCQVJfTUVBU1VSRVIiLCJCQUNLRFJPUCIsIk9QRU4iLCJTZWxlY3RvciQ1IiwiRElBTE9HIiwiTU9EQUxfQk9EWSIsIkRBVEFfRElTTUlTUyIsIkZJWEVEX0NPTlRFTlQiLCJTVElDS1lfQ09OVEVOVCIsIk1vZGFsIiwiX2RpYWxvZyIsIl9iYWNrZHJvcCIsIl9pc1Nob3duIiwiX2lzQm9keU92ZXJmbG93aW5nIiwiX2lnbm9yZUJhY2tkcm9wQ2xpY2siLCJfc2Nyb2xsYmFyV2lkdGgiLCJfY2hlY2tTY3JvbGxiYXIiLCJfc2V0U2Nyb2xsYmFyIiwiX2FkanVzdERpYWxvZyIsIl9zZXRFc2NhcGVFdmVudCIsIl9zZXRSZXNpemVFdmVudCIsIl9zaG93QmFja2Ryb3AiLCJfc2hvd0VsZW1lbnQiLCJ0cmFuc2l0aW9uIiwiX2hpZGVNb2RhbCIsImh0bWxFbGVtZW50IiwiaGFuZGxlVXBkYXRlIiwiRUxFTUVOVF9OT0RFIiwiYXBwZW5kQ2hpbGQiLCJfZW5mb3JjZUZvY3VzIiwic2hvd25FdmVudCIsInRyYW5zaXRpb25Db21wbGV0ZSIsImhhcyIsIl90aGlzNSIsIl90aGlzNiIsIl90aGlzNyIsIl9yZXNldEFkanVzdG1lbnRzIiwiX3Jlc2V0U2Nyb2xsYmFyIiwiX3JlbW92ZUJhY2tkcm9wIiwiX3RoaXM4IiwiYW5pbWF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRUbyIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiY2FsbGJhY2tSZW1vdmUiLCJfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24iLCJpc01vZGFsT3ZlcmZsb3dpbmciLCJzY3JvbGxIZWlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIl9nZXRTY3JvbGxiYXJXaWR0aCIsIl90aGlzOSIsImZpeGVkQ29udGVudCIsInN0aWNreUNvbnRlbnQiLCJhY3R1YWxQYWRkaW5nIiwiY2FsY3VsYXRlZFBhZGRpbmciLCJhY3R1YWxNYXJnaW4iLCJjYWxjdWxhdGVkTWFyZ2luIiwiZWxlbWVudHMiLCJtYXJnaW4iLCJzY3JvbGxEaXYiLCJzY3JvbGxiYXJXaWR0aCIsIl90aGlzMTAiLCJ1cmlBdHRycyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJEZWZhdWx0V2hpdGVsaXN0IiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYWxsb3dlZEF0dHJpYnV0ZSIsImFsbG93ZWRBdHRyaWJ1dGVMaXN0IiwiYXR0ck5hbWUiLCJub2RlVmFsdWUiLCJyZWdFeHAiLCJhdHRyUmVnZXgiLCJsIiwic2FuaXRpemVIdG1sIiwidW5zYWZlSHRtbCIsIndoaXRlTGlzdCIsInNhbml0aXplRm4iLCJkb21QYXJzZXIiLCJET01QYXJzZXIiLCJjcmVhdGVkRG9jdW1lbnQiLCJwYXJzZUZyb21TdHJpbmciLCJ3aGl0ZWxpc3RLZXlzIiwiX2xvb3AiLCJlbE5hbWUiLCJhdHRyaWJ1dGVMaXN0Iiwid2hpdGVsaXN0ZWRBdHRyaWJ1dGVzIiwiX3JldCIsImlubmVySFRNTCIsIk5BTUUkNiIsIlZFUlNJT04kNiIsIkRBVEFfS0VZJDYiLCJFVkVOVF9LRVkkNiIsIkpRVUVSWV9OT19DT05GTElDVCQ2IiwiQ0xBU1NfUFJFRklYIiwiQlNDTFNfUFJFRklYX1JFR0VYIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiRGVmYXVsdFR5cGUkNCIsImFuaW1hdGlvbiIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImNvbnRhaW5lciIsImZhbGxiYWNrUGxhY2VtZW50Iiwic2FuaXRpemUiLCJBdHRhY2htZW50TWFwJDEiLCJBVVRPIiwiRGVmYXVsdCQ0IiwiSG92ZXJTdGF0ZSIsIk9VVCIsIkV2ZW50JDYiLCJJTlNFUlRFRCIsIkZPQ1VTT1VUIiwiQ2xhc3NOYW1lJDYiLCJTZWxlY3RvciQ2IiwiVE9PTFRJUCIsIlRPT0xUSVBfSU5ORVIiLCJBUlJPVyIsIlRyaWdnZXIiLCJIT1ZFUiIsIk1BTlVBTCIsIlRvb2x0aXAiLCJfaXNFbmFibGVkIiwiX3RpbWVvdXQiLCJfaG92ZXJTdGF0ZSIsIl9hY3RpdmVUcmlnZ2VyIiwidGlwIiwiX3NldExpc3RlbmVycyIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiZGF0YUtleSIsIl9nZXREZWxlZ2F0ZUNvbmZpZyIsImNsaWNrIiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJfZW50ZXIiLCJfbGVhdmUiLCJnZXRUaXBFbGVtZW50IiwiaXNXaXRoQ29udGVudCIsInNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwidGlwSWQiLCJzZXRDb250ZW50IiwiYXR0YWNobWVudCIsIl9nZXRBdHRhY2htZW50IiwiYWRkQXR0YWNobWVudENsYXNzIiwiX2dldENvbnRhaW5lciIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJfZml4VHJhbnNpdGlvbiIsInByZXZIb3ZlclN0YXRlIiwiX2NsZWFuVGlwQ2xhc3MiLCJnZXRUaXRsZSIsInNldEVsZW1lbnRDb250ZW50IiwiY29udGVudCIsImVtcHR5IiwiYXBwZW5kIiwidGV4dCIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX2ZpeFRpdGxlIiwidGl0bGVUeXBlIiwiZGF0YUF0dHJpYnV0ZXMiLCJkYXRhQXR0ciIsIiR0aXAiLCJ0YWJDbGFzcyIsImpvaW4iLCJwb3BwZXJEYXRhIiwicG9wcGVySW5zdGFuY2UiLCJpbml0Q29uZmlnQW5pbWF0aW9uIiwiTkFNRSQ3IiwiVkVSU0lPTiQ3IiwiREFUQV9LRVkkNyIsIkVWRU5UX0tFWSQ3IiwiSlFVRVJZX05PX0NPTkZMSUNUJDciLCJDTEFTU19QUkVGSVgkMSIsIkJTQ0xTX1BSRUZJWF9SRUdFWCQxIiwiRGVmYXVsdCQ1IiwiRGVmYXVsdFR5cGUkNSIsIkNsYXNzTmFtZSQ3IiwiU2VsZWN0b3IkNyIsIlRJVExFIiwiQ09OVEVOVCIsIkV2ZW50JDciLCJQb3BvdmVyIiwiX1Rvb2x0aXAiLCJfZ2V0Q29udGVudCIsIk5BTUUkOCIsIlZFUlNJT04kOCIsIkRBVEFfS0VZJDgiLCJFVkVOVF9LRVkkOCIsIkRBVEFfQVBJX0tFWSQ2IiwiSlFVRVJZX05PX0NPTkZMSUNUJDgiLCJEZWZhdWx0JDYiLCJtZXRob2QiLCJEZWZhdWx0VHlwZSQ2IiwiRXZlbnQkOCIsIkFDVElWQVRFIiwiU0NST0xMIiwiQ2xhc3NOYW1lJDgiLCJEUk9QRE9XTl9JVEVNIiwiRFJPUERPV05fTUVOVSIsIlNlbGVjdG9yJDgiLCJEQVRBX1NQWSIsIk5BVl9MSVNUX0dST1VQIiwiTkFWX0xJTktTIiwiTkFWX0lURU1TIiwiTElTVF9JVEVNUyIsIkRST1BET1dOIiwiRFJPUERPV05fSVRFTVMiLCJEUk9QRE9XTl9UT0dHTEUiLCJPZmZzZXRNZXRob2QiLCJPRkZTRVQiLCJQT1NJVElPTiIsIlNjcm9sbFNweSIsIl9zY3JvbGxFbGVtZW50IiwiX29mZnNldHMiLCJfdGFyZ2V0cyIsIl9hY3RpdmVUYXJnZXQiLCJfc2Nyb2xsSGVpZ2h0IiwiX3Byb2Nlc3MiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsInRhcmdldHMiLCJ0YXJnZXRTZWxlY3RvciIsInRhcmdldEJDUiIsIml0ZW0iLCJwYWdlWU9mZnNldCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJtYXhTY3JvbGwiLCJfYWN0aXZhdGUiLCJfY2xlYXIiLCJvZmZzZXRMZW5ndGgiLCJpc0FjdGl2ZVRhcmdldCIsInF1ZXJpZXMiLCIkbGluayIsInBhcmVudHMiLCJzY3JvbGxTcHlzIiwic2Nyb2xsU3B5c0xlbmd0aCIsIiRzcHkiLCJOQU1FJDkiLCJWRVJTSU9OJDkiLCJEQVRBX0tFWSQ5IiwiRVZFTlRfS0VZJDkiLCJEQVRBX0FQSV9LRVkkNyIsIkpRVUVSWV9OT19DT05GTElDVCQ5IiwiRXZlbnQkOSIsIkNsYXNzTmFtZSQ5IiwiU2VsZWN0b3IkOSIsIkFDVElWRV9VTCIsIkRST1BET1dOX0FDVElWRV9DSElMRCIsIlRhYiIsInByZXZpb3VzIiwibGlzdEVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJtYWtlQXJyYXkiLCJoaWRkZW5FdmVudCIsImFjdGl2ZUVsZW1lbnRzIiwiYWN0aXZlIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93blRvZ2dsZUxpc3QiLCJOQU1FJGEiLCJWRVJTSU9OJGEiLCJEQVRBX0tFWSRhIiwiRVZFTlRfS0VZJGEiLCJKUVVFUllfTk9fQ09ORkxJQ1QkYSIsIkV2ZW50JGEiLCJDbGFzc05hbWUkYSIsIlNIT1dJTkciLCJEZWZhdWx0VHlwZSQ3IiwiYXV0b2hpZGUiLCJEZWZhdWx0JDciLCJTZWxlY3RvciRhIiwiVG9hc3QiLCJ3aXRob3V0VGltZW91dCIsIl9jbG9zZSIsIm1pbk1ham9yIiwibHRNYWpvciIsIm1pbk1pbm9yIiwibWluUGF0Y2giLCJtYXhNYWpvciIsIlNjcm9sbHNweSIsImpxQm9vdHN0cmFwVmFsaWRhdGlvbiIsInByZXZlbnRTdWJtaXQiLCJzdWJtaXRFcnJvciIsIiRmb3JtIiwiZXJyb3JzIiwic3VibWl0U3VjY2VzcyIsInZhbCIsImVtYWlsIiwicGhvbmUiLCJtZXNzYWdlIiwiZmlyc3ROYW1lIiwiYWpheCIsInVybCIsImNhY2hlIiwic3VjY2VzcyIsImVycm9yIiwidGFiIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImhvc3RuYW1lIiwic2Nyb2xsIiwic2Nyb2xsRGlzdGFuY2UiLCJmYWRlSW4iLCJmYWRlT3V0IiwiY29sbGFwc2UiLCJzY3JvbGxzcHkiLCJuYXZiYXJDb2xsYXBzZSIsImNyZWF0ZWRFbGVtZW50cyIsImRlZmF1bHRzIiwicHJlcGVuZEV4aXN0aW5nSGVscEJsb2NrIiwic25pZmZIdG1sIiwic2VtYW50aWNhbGx5U3RyaWN0IiwiYXV0b0FkZCIsImhlbHBCbG9ja3MiLCJtZXRob2RzIiwiaW5pdCIsInNldHRpbmdzIiwiZXh0ZW5kIiwiJHNpYmxpbmdFbGVtZW50cyIsInVuaXF1ZUZvcm1zIiwidW5pcXVlIiwidG9BcnJheSIsIndhcm5pbmdzRm91bmQiLCIkaW5wdXRzIiwiJGNvbnRyb2xHcm91cCIsImZpcnN0IiwiJGhlbHBCbG9jayIsInZhbGlkYXRvck5hbWVzIiwiYnVpbHRJblZhbGlkYXRvcnMiLCJyZXF1aXJlZCIsIm51bWJlciIsInBhcnRzIiwidmFsaWRhdG9yTmFtZXNUb0luc3BlY3QiLCJuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdCIsImZvcm1hdFZhbGlkYXRvck5hbWUiLCJpMiIsImVsMiIsInZhbGlkYXRvciIsInNob3J0Y3V0IiwidmFsaWRhdG9ycyIsImhhc092ZXJyaWRlTWVzc2FnZSIsImZvdW5kVmFsaWRhdG9yIiwidmFsaWRhdG9yVHlwZXMiLCJ2YWxpZGF0b3JUeXBlIiwidmFsaWRhdG9yVGVtcGxhdGUiLCJ2YWxpZGF0b3JUZW1wbGF0ZVR5cGUiLCJwYXJhbXMiLCJnZXRWYWx1ZSIsImVycm9yc0ZvdW5kIiwidmFsaWRhdG9yVHlwZUFycmF5IiwiaW5jbHVkZUVtcHR5IiwiYmxvY2tTdWJtaXQiLCJzdWJtaXR0aW5nIiwidmFsaWRhdGUiLCJ0cmlnZ2VySGFuZGxlciIsIm9sZENvdW50IiwiaiIsIm9yaWdpbmFsIiwidW5iaW5kIiwiY29sbGVjdEVycm9ycyIsImVycm9yTWVzc2FnZXMiLCIkZWwiLCJoYXNFcnJvcnMiLCJvdmVycmlkZSIsIm5ld0RlZmF1bHRzIiwidmFsaWRhdG9yTmFtZSIsImxhc3RWYWx1ZSIsImxhc3RWYWxpZCIsImxhc3RGaW5pc2hlZCIsInJyanFidlZhbGlkYXRvciIsInJyanFidlRoaXMiLCJleGVjdXRlRnVuY3Rpb25CeU5hbWUiLCJ2YWxpZCIsImRhdGFUeXBlIiwiZmFpbHVyZSIsInJlZ2V4IiwicmVnZXhGcm9tU3RyaW5nIiwibmVnYXRpdmUiLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJtYXhjaGVja2VkIiwibWluY2hlY2tlZCIsInZhbGlkZW1haWwiLCJwYXNzd29yZGFnYWluIiwicG9zaXRpdmUiLCJpbnRlZ2VyIiwicG9zaXRpdmVudW1iZXIiLCJuZWdhdGl2ZW51bWJlciIsImNoZWNrb25lIiwibSIsInAxIiwicDIiLCJpbnB1dHN0cmluZyIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJzcGxpY2UiLCJuYW1lc3BhY2VzIiwiZnVuYyIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUEsbUJBQU8sQ0FBQyxtSEFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHVHQUFELENBQVAsQyxDQUNBO0FBQ0E7OztBQUNBLElBQUlDLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxpRkFB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Q1pBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLnNjc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJyk7XG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbnZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5LWVhc2luZ1wiKTtcblxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuaW1wb3J0ICcuL2Jvb3RzdHJhcC5idW5kbGUuanMnO1xuaW1wb3J0ICcuL2ZyZWVsYW5jZXIuanMnO1xuaW1wb3J0ICcuL2pxQm9vdHN0cmFwVmFsaWRhdGlvbi5qcyc7XG5pbXBvcnQgJy4vY29udGFjdF9tZS5qcyc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XG59KTtcbiIsIi8qIVxuICAqIEJvb3RzdHJhcCB2NC4zLjEgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAxOSBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ2pxdWVyeScpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAnanF1ZXJ5J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5ib290c3RyYXAgPSB7fSwgZ2xvYmFsLmpRdWVyeSkpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgJCkgeyAndXNlIHN0cmljdCc7XG5cbiAgJCA9ICQgJiYgJC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gJFsnZGVmYXVsdCddIDogJDtcblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICAgIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICAgIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NC4zLjEpOiB1dGlsLmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFByaXZhdGUgVHJhbnNpdGlvbkVuZCBIZWxwZXJzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCc7XG4gIHZhciBNQVhfVUlEID0gMTAwMDAwMDtcbiAgdmFyIE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMDsgLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuXG4gIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmluZFR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgICAgZGVsZWdhdGVUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICAgIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQoX3RoaXMpO1xuICAgICAgfVxuICAgIH0sIGR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCkge1xuICAgICQuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kRW11bGF0b3I7XG4gICAgJC5ldmVudC5zcGVjaWFsW1V0aWwuVFJBTlNJVElPTl9FTkRdID0gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpO1xuICB9XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBQdWJsaWMgVXRpbCBBcGlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICB2YXIgVXRpbCA9IHtcbiAgICBUUkFOU0lUSU9OX0VORDogJ2JzVHJhbnNpdGlvbkVuZCcsXG4gICAgZ2V0VUlEOiBmdW5jdGlvbiBnZXRVSUQocHJlZml4KSB7XG4gICAgICBkbyB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAgIHByZWZpeCArPSB+fihNYXRoLnJhbmRvbSgpICogTUFYX1VJRCk7IC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpO1xuXG4gICAgICByZXR1cm4gcHJlZml4O1xuICAgIH0sXG4gICAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudDogZnVuY3Rpb24gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgICAgIHZhciBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6ICcnO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGw7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudDogZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuXG5cbiAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xuICAgICAgdmFyIHRyYW5zaXRpb25EZWxheSA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWRlbGF5Jyk7XG4gICAgICB2YXIgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB2YXIgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSk7IC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcblxuICAgICAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcblxuXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXTtcbiAgICAgIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdO1xuICAgICAgcmV0dXJuIChwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVI7XG4gICAgfSxcbiAgICByZWZsb3c6IGZ1bmN0aW9uIHJlZmxvdyhlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfSxcbiAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gdHJpZ2dlclRyYW5zaXRpb25FbmQoZWxlbWVudCkge1xuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKFRSQU5TSVRJT05fRU5EKTtcbiAgICB9LFxuICAgIC8vIFRPRE86IFJlbW92ZSBpbiB2NVxuICAgIHN1cHBvcnRzVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oVFJBTlNJVElPTl9FTkQpO1xuICAgIH0sXG4gICAgaXNFbGVtZW50OiBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gICAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlO1xuICAgIH0sXG4gICAgdHlwZUNoZWNrQ29uZmlnOiBmdW5jdGlvbiB0eXBlQ2hlY2tDb25maWcoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykge1xuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gY29uZmlnVHlwZXMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWdUeXBlcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgdmFyIGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV07XG4gICAgICAgICAgdmFyIHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XTtcbiAgICAgICAgICB2YXIgdmFsdWVUeXBlID0gdmFsdWUgJiYgVXRpbC5pc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKTtcblxuICAgICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCkgKyBcIjogXCIgKyAoXCJPcHRpb24gXFxcIlwiICsgcHJvcGVydHkgKyBcIlxcXCIgcHJvdmlkZWQgdHlwZSBcXFwiXCIgKyB2YWx1ZVR5cGUgKyBcIlxcXCIgXCIpICsgKFwiYnV0IGV4cGVjdGVkIHR5cGUgXFxcIlwiICsgZXhwZWN0ZWRUeXBlcyArIFwiXFxcIi5cIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZmluZFNoYWRvd1Jvb3Q6IGZ1bmN0aW9uIGZpbmRTaGFkb3dSb290KGVsZW1lbnQpIHtcbiAgICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG5cblxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuICAgICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfSAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuXG5cbiAgICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gVXRpbC5maW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgIH1cbiAgfTtcbiAgc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUgPSAnYWxlcnQnO1xuICB2YXIgVkVSU0lPTiA9ICc0LjMuMSc7XG4gIHZhciBEQVRBX0tFWSA9ICdicy5hbGVydCc7XG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcbiAgfTtcbiAgdmFyIEV2ZW50ID0ge1xuICAgIENMT1NFOiBcImNsb3NlXCIgKyBFVkVOVF9LRVksXG4gICAgQ0xPU0VEOiBcImNsb3NlZFwiICsgRVZFTlRfS0VZLFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVlcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICBBTEVSVDogJ2FsZXJ0JyxcbiAgICBGQURFOiAnZmFkZScsXG4gICAgU0hPVzogJ3Nob3cnXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG5cbiAgdmFyIEFsZXJ0ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWxlcnQoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBBbGVydC5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZShlbGVtZW50KSB7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICByb290RWxlbWVudCA9IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudCk7XG5cbiAgICAgIGlmIChjdXN0b21FdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQocm9vdEVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9nZXRSb290RWxlbWVudCA9IGZ1bmN0aW9uIF9nZXRSb290RWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB2YXIgcGFyZW50ID0gZmFsc2U7XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KFwiLlwiICsgQ2xhc3NOYW1lLkFMRVJUKVswXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl90cmlnZ2VyQ2xvc2VFdmVudCA9IGZ1bmN0aW9uIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgICB2YXIgY2xvc2VFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ0xPU0UpO1xuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGNsb3NlRXZlbnQpO1xuICAgICAgcmV0dXJuIGNsb3NlRXZlbnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fcmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIF9yZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpO1xuXG4gICAgICBpZiAoISQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAkKGVsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50LCBldmVudCk7XG4gICAgICB9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2Rlc3Ryb3lFbGVtZW50ID0gZnVuY3Rpb24gX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkuZGV0YWNoKCkudHJpZ2dlcihFdmVudC5DTE9TRUQpLnJlbW92ZSgpO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgQWxlcnQuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRlbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpO1xuICAgICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIEFsZXJ0Ll9oYW5kbGVEaXNtaXNzID0gZnVuY3Rpb24gX2hhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWxlcnRJbnN0YW5jZS5jbG9zZSh0aGlzKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhBbGVydCwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEFsZXJ0O1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRJU01JU1MsIEFsZXJ0Ll9oYW5kbGVEaXNtaXNzKG5ldyBBbGVydCgpKSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gQWxlcnQuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFsZXJ0O1xuXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgIHJldHVybiBBbGVydC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQxID0gJ2J1dHRvbic7XG4gIHZhciBWRVJTSU9OJDEgPSAnNC4zLjEnO1xuICB2YXIgREFUQV9LRVkkMSA9ICdicy5idXR0b24nO1xuICB2YXIgRVZFTlRfS0VZJDEgPSBcIi5cIiArIERBVEFfS0VZJDE7XG4gIHZhciBEQVRBX0FQSV9LRVkkMSA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDEgPSAkLmZuW05BTUUkMV07XG4gIHZhciBDbGFzc05hbWUkMSA9IHtcbiAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgIEJVVFRPTjogJ2J0bicsXG4gICAgRk9DVVM6ICdmb2N1cydcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDEgPSB7XG4gICAgREFUQV9UT0dHTEVfQ0FSUk9UOiAnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsXG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJyxcbiAgICBJTlBVVDogJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSknLFxuICAgIEFDVElWRTogJy5hY3RpdmUnLFxuICAgIEJVVFRPTjogJy5idG4nXG4gIH07XG4gIHZhciBFdmVudCQxID0ge1xuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkMSArIERBVEFfQVBJX0tFWSQxLFxuICAgIEZPQ1VTX0JMVVJfREFUQV9BUEk6IFwiZm9jdXNcIiArIEVWRU5UX0tFWSQxICsgREFUQV9BUElfS0VZJDEgKyBcIiBcIiArIChcImJsdXJcIiArIEVWRU5UX0tFWSQxICsgREFUQV9BUElfS0VZJDEpXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG5cbiAgdmFyIEJ1dHRvbiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJ1dHRvbihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IEJ1dHRvbi5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgdmFyIHRyaWdnZXJDaGFuZ2VFdmVudCA9IHRydWU7XG4gICAgICB2YXIgYWRkQXJpYVByZXNzZWQgPSB0cnVlO1xuICAgICAgdmFyIHJvb3RFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yJDEuREFUQV9UT0dHTEUpWzBdO1xuXG4gICAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yJDEuSU5QVVQpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCAmJiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUkMS5BQ1RJVkUpKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2VFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSByb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yJDEuQUNUSVZFKTtcblxuICAgICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDEuQUNUSVZFKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGlucHV0LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSB8fCByb290RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZSQxLkFDVElWRSk7XG4gICAgICAgICAgICAkKGlucHV0KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgIGFkZEFyaWFQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFkZEFyaWFQcmVzc2VkKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lJDEuQUNUSVZFKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50b2dnbGVDbGFzcyhDbGFzc05hbWUkMS5BQ1RJVkUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkkMSk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSQxKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IEJ1dHRvbih0aGlzKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVkkMSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKEJ1dHRvbiwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT04kMTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQnV0dG9uO1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJChkb2N1bWVudCkub24oRXZlbnQkMS5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IkMS5EQVRBX1RPR0dMRV9DQVJST1QsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmICghJChidXR0b24pLmhhc0NsYXNzKENsYXNzTmFtZSQxLkJVVFRPTikpIHtcbiAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNlbGVjdG9yJDEuQlVUVE9OKTtcbiAgICB9XG5cbiAgICBCdXR0b24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYnV0dG9uKSwgJ3RvZ2dsZScpO1xuICB9KS5vbihFdmVudCQxLkZPQ1VTX0JMVVJfREFUQV9BUEksIFNlbGVjdG9yJDEuREFUQV9UT0dHTEVfQ0FSUk9ULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgYnV0dG9uID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU2VsZWN0b3IkMS5CVVRUT04pWzBdO1xuICAgICQoYnV0dG9uKS50b2dnbGVDbGFzcyhDbGFzc05hbWUkMS5GT0NVUywgL15mb2N1cyhpbik/JC8udGVzdChldmVudC50eXBlKSk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FJDFdID0gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRSQxXS5Db25zdHJ1Y3RvciA9IEJ1dHRvbjtcblxuICAkLmZuW05BTUUkMV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkMV0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkMTtcbiAgICByZXR1cm4gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FJDIgPSAnY2Fyb3VzZWwnO1xuICB2YXIgVkVSU0lPTiQyID0gJzQuMy4xJztcbiAgdmFyIERBVEFfS0VZJDIgPSAnYnMuY2Fyb3VzZWwnO1xuICB2YXIgRVZFTlRfS0VZJDIgPSBcIi5cIiArIERBVEFfS0VZJDI7XG4gIHZhciBEQVRBX0FQSV9LRVkkMiA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDIgPSAkLmZuW05BTUUkMl07XG4gIHZhciBBUlJPV19MRUZUX0tFWUNPREUgPSAzNzsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgbGVmdCBhcnJvdyBrZXlcblxuICB2YXIgQVJST1dfUklHSFRfS0VZQ09ERSA9IDM5OyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciByaWdodCBhcnJvdyBrZXlcblxuICB2YXIgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMDsgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5cbiAgdmFyIFNXSVBFX1RIUkVTSE9MRCA9IDQwO1xuICB2YXIgRGVmYXVsdCA9IHtcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBzbGlkZTogZmFsc2UsXG4gICAgcGF1c2U6ICdob3ZlcicsXG4gICAgd3JhcDogdHJ1ZSxcbiAgICB0b3VjaDogdHJ1ZVxuICB9O1xuICB2YXIgRGVmYXVsdFR5cGUgPSB7XG4gICAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICAgIHNsaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgICB3cmFwOiAnYm9vbGVhbicsXG4gICAgdG91Y2g6ICdib29sZWFuJ1xuICB9O1xuICB2YXIgRGlyZWN0aW9uID0ge1xuICAgIE5FWFQ6ICduZXh0JyxcbiAgICBQUkVWOiAncHJldicsXG4gICAgTEVGVDogJ2xlZnQnLFxuICAgIFJJR0hUOiAncmlnaHQnXG4gIH07XG4gIHZhciBFdmVudCQyID0ge1xuICAgIFNMSURFOiBcInNsaWRlXCIgKyBFVkVOVF9LRVkkMixcbiAgICBTTElEOiBcInNsaWRcIiArIEVWRU5UX0tFWSQyLFxuICAgIEtFWURPV046IFwia2V5ZG93blwiICsgRVZFTlRfS0VZJDIsXG4gICAgTU9VU0VFTlRFUjogXCJtb3VzZWVudGVyXCIgKyBFVkVOVF9LRVkkMixcbiAgICBNT1VTRUxFQVZFOiBcIm1vdXNlbGVhdmVcIiArIEVWRU5UX0tFWSQyLFxuICAgIFRPVUNIU1RBUlQ6IFwidG91Y2hzdGFydFwiICsgRVZFTlRfS0VZJDIsXG4gICAgVE9VQ0hNT1ZFOiBcInRvdWNobW92ZVwiICsgRVZFTlRfS0VZJDIsXG4gICAgVE9VQ0hFTkQ6IFwidG91Y2hlbmRcIiArIEVWRU5UX0tFWSQyLFxuICAgIFBPSU5URVJET1dOOiBcInBvaW50ZXJkb3duXCIgKyBFVkVOVF9LRVkkMixcbiAgICBQT0lOVEVSVVA6IFwicG9pbnRlcnVwXCIgKyBFVkVOVF9LRVkkMixcbiAgICBEUkFHX1NUQVJUOiBcImRyYWdzdGFydFwiICsgRVZFTlRfS0VZJDIsXG4gICAgTE9BRF9EQVRBX0FQSTogXCJsb2FkXCIgKyBFVkVOVF9LRVkkMiArIERBVEFfQVBJX0tFWSQyLFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkMiArIERBVEFfQVBJX0tFWSQyXG4gIH07XG4gIHZhciBDbGFzc05hbWUkMiA9IHtcbiAgICBDQVJPVVNFTDogJ2Nhcm91c2VsJyxcbiAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgIFNMSURFOiAnc2xpZGUnLFxuICAgIFJJR0hUOiAnY2Fyb3VzZWwtaXRlbS1yaWdodCcsXG4gICAgTEVGVDogJ2Nhcm91c2VsLWl0ZW0tbGVmdCcsXG4gICAgTkVYVDogJ2Nhcm91c2VsLWl0ZW0tbmV4dCcsXG4gICAgUFJFVjogJ2Nhcm91c2VsLWl0ZW0tcHJldicsXG4gICAgSVRFTTogJ2Nhcm91c2VsLWl0ZW0nLFxuICAgIFBPSU5URVJfRVZFTlQ6ICdwb2ludGVyLWV2ZW50J1xuICB9O1xuICB2YXIgU2VsZWN0b3IkMiA9IHtcbiAgICBBQ1RJVkU6ICcuYWN0aXZlJyxcbiAgICBBQ1RJVkVfSVRFTTogJy5hY3RpdmUuY2Fyb3VzZWwtaXRlbScsXG4gICAgSVRFTTogJy5jYXJvdXNlbC1pdGVtJyxcbiAgICBJVEVNX0lNRzogJy5jYXJvdXNlbC1pdGVtIGltZycsXG4gICAgTkVYVF9QUkVWOiAnLmNhcm91c2VsLWl0ZW0tbmV4dCwgLmNhcm91c2VsLWl0ZW0tcHJldicsXG4gICAgSU5ESUNBVE9SUzogJy5jYXJvdXNlbC1pbmRpY2F0b3JzJyxcbiAgICBEQVRBX1NMSURFOiAnW2RhdGEtc2xpZGVdLCBbZGF0YS1zbGlkZS10b10nLFxuICAgIERBVEFfUklERTogJ1tkYXRhLXJpZGU9XCJjYXJvdXNlbFwiXSdcbiAgfTtcbiAgdmFyIFBvaW50ZXJUeXBlID0ge1xuICAgIFRPVUNIOiAndG91Y2gnLFxuICAgIFBFTjogJ3BlbidcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgQ2Fyb3VzZWwgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXJvdXNlbChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gbnVsbDtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IDA7XG4gICAgICB0aGlzLnRvdWNoRGVsdGFYID0gMDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQyLklORElDQVRPUlMpO1xuICAgICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMDtcbiAgICAgIHRoaXMuX3BvaW50ZXJFdmVudCA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudCB8fCB3aW5kb3cuTVNQb2ludGVyRXZlbnQpO1xuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gQ2Fyb3VzZWwucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLm5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgdGhpcy5fc2xpZGUoRGlyZWN0aW9uLk5FWFQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ubmV4dFdoZW5WaXNpYmxlID0gZnVuY3Rpb24gbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgJCh0aGlzLl9lbGVtZW50KS5pcygnOnZpc2libGUnKSAmJiAkKHRoaXMuX2VsZW1lbnQpLmNzcygndmlzaWJpbGl0eScpICE9PSAnaGlkZGVuJykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnByZXYgPSBmdW5jdGlvbiBwcmV2KCkge1xuICAgICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgdGhpcy5fc2xpZGUoRGlyZWN0aW9uLlBSRVYpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ucGF1c2UgPSBmdW5jdGlvbiBwYXVzZShldmVudCkge1xuICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkMi5ORVhUX1BSRVYpKSB7XG4gICAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCk7XG4gICAgICAgIHRoaXMuY3ljbGUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY3ljbGUgPSBmdW5jdGlvbiBjeWNsZShldmVudCkge1xuICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID8gdGhpcy5uZXh0V2hlblZpc2libGUgOiB0aGlzLm5leHQpLmJpbmQodGhpcyksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by50byA9IGZ1bmN0aW9uIHRvKGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yJDIuQUNUSVZFX0lURU0pO1xuXG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgIGlmIChpbmRleCA+IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFdmVudCQyLlNMSUQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMudG8oaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgdGhpcy5jeWNsZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBkaXJlY3Rpb24gPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gRGlyZWN0aW9uLk5FWFQgOiBEaXJlY3Rpb24uUFJFVjtcblxuICAgICAgdGhpcy5fc2xpZGUoZGlyZWN0aW9uLCB0aGlzLl9pdGVtc1tpbmRleF0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkkMik7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkkMik7XG4gICAgICB0aGlzLl9pdGVtcyA9IG51bGw7XG4gICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBudWxsO1xuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IG51bGw7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgRGVmYXVsdCwgY29uZmlnKTtcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkMiwgY29uZmlnLCBEZWZhdWx0VHlwZSk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2hhbmRsZVN3aXBlID0gZnVuY3Rpb24gX2hhbmRsZVN3aXBlKCkge1xuICAgICAgdmFyIGFic0RlbHRheCA9IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YVgpO1xuXG4gICAgICBpZiAoYWJzRGVsdGF4IDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhYnNEZWx0YXggLyB0aGlzLnRvdWNoRGVsdGFYOyAvLyBzd2lwZSBsZWZ0XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgICAgIHRoaXMucHJldigpO1xuICAgICAgfSAvLyBzd2lwZSByaWdodFxuXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPCAwKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQyLktFWURPV04sIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX2tleWRvd24oZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JDIuTU9VU0VFTlRFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5wYXVzZShldmVudCk7XG4gICAgICAgIH0pLm9uKEV2ZW50JDIuTU9VU0VMRUFWRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5jeWNsZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoKSB7XG4gICAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLl90b3VjaFN1cHBvcnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmIChfdGhpczMuX3BvaW50ZXJFdmVudCAmJiBQb2ludGVyVHlwZVtldmVudC5vcmlnaW5hbEV2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgICAgX3RoaXMzLnRvdWNoU3RhcnRYID0gZXZlbnQub3JpZ2luYWxFdmVudC5jbGllbnRYO1xuICAgICAgICB9IGVsc2UgaWYgKCFfdGhpczMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICAgIF90aGlzMy50b3VjaFN0YXJ0WCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgbW92ZSA9IGZ1bmN0aW9uIG1vdmUoZXZlbnQpIHtcbiAgICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgX3RoaXMzLnRvdWNoRGVsdGFYID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczMudG91Y2hEZWx0YVggPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIF90aGlzMy50b3VjaFN0YXJ0WDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZChldmVudCkge1xuICAgICAgICBpZiAoX3RoaXMzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICAgIF90aGlzMy50b3VjaERlbHRhWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2xpZW50WCAtIF90aGlzMy50b3VjaFN0YXJ0WDtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMy5faGFuZGxlU3dpcGUoKTtcblxuICAgICAgICBpZiAoX3RoaXMzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuICAgICAgICAgIF90aGlzMy5wYXVzZSgpO1xuXG4gICAgICAgICAgaWYgKF90aGlzMy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpczMudG91Y2hUaW1lb3V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuY3ljbGUoZXZlbnQpO1xuICAgICAgICAgIH0sIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyBfdGhpczMuX2NvbmZpZy5pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgICQodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDIuSVRFTV9JTUcpKS5vbihFdmVudCQyLkRSQUdfU1RBUlQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JDIuUE9JTlRFUkRPV04sIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBzdGFydChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JDIuUE9JTlRFUlVQLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gZW5kKGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZSQyLlBPSU5URVJfRVZFTlQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQyLlRPVUNIU1RBUlQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBzdGFydChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JDIuVE9VQ0hNT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gbW92ZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JDIuVE9VQ0hFTkQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBlbmQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9rZXlkb3duID0gZnVuY3Rpb24gX2tleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWUNPREU6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWUNPREU6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldEl0ZW1JbmRleCA9IGZ1bmN0aW9uIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgICAgdGhpcy5faXRlbXMgPSBlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZSA/IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkMi5JVEVNKSkgOiBbXTtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldEl0ZW1CeURpcmVjdGlvbiA9IGZ1bmN0aW9uIF9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KSB7XG4gICAgICB2YXIgaXNOZXh0RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVDtcbiAgICAgIHZhciBpc1ByZXZEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWO1xuXG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgIHZhciBsYXN0SXRlbUluZGV4ID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBpc0dvaW5nVG9XcmFwID0gaXNQcmV2RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSAwIHx8IGlzTmV4dERpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gbGFzdEl0ZW1JbmRleDtcblxuICAgICAgaWYgKGlzR29pbmdUb1dyYXAgJiYgIXRoaXMuX2NvbmZpZy53cmFwKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVsdGEgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWID8gLTEgOiAxO1xuICAgICAgdmFyIGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aDtcbiAgICAgIHJldHVybiBpdGVtSW5kZXggPT09IC0xID8gdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOiB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3RyaWdnZXJTbGlkZUV2ZW50ID0gZnVuY3Rpb24gX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGV2ZW50RGlyZWN0aW9uTmFtZSkge1xuICAgICAgdmFyIHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpO1xuXG4gICAgICB2YXIgZnJvbUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQyLkFDVElWRV9JVEVNKSk7XG5cbiAgICAgIHZhciBzbGlkZUV2ZW50ID0gJC5FdmVudChFdmVudCQyLlNMSURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRUYXJnZXQsXG4gICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZGVFdmVudCk7XG4gICAgICByZXR1cm4gc2xpZGVFdmVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50ID0gZnVuY3Rpb24gX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICAgIHZhciBpbmRpY2F0b3JzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDIuQUNUSVZFKSk7XG4gICAgICAgICQoaW5kaWNhdG9ycykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDIuQUNUSVZFKTtcblxuICAgICAgICB2YXIgbmV4dEluZGljYXRvciA9IHRoaXMuX2luZGljYXRvcnNFbGVtZW50LmNoaWxkcmVuW3RoaXMuX2dldEl0ZW1JbmRleChlbGVtZW50KV07XG5cbiAgICAgICAgaWYgKG5leHRJbmRpY2F0b3IpIHtcbiAgICAgICAgICAkKG5leHRJbmRpY2F0b3IpLmFkZENsYXNzKENsYXNzTmFtZSQyLkFDVElWRSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zbGlkZSA9IGZ1bmN0aW9uIF9zbGlkZShkaXJlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQyLkFDVElWRV9JVEVNKTtcblxuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KTtcblxuICAgICAgdmFyIG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBhY3RpdmVFbGVtZW50ICYmIHRoaXMuX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICB2YXIgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudCk7XG5cbiAgICAgIHZhciBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKTtcbiAgICAgIHZhciBkaXJlY3Rpb25hbENsYXNzTmFtZTtcbiAgICAgIHZhciBvcmRlckNsYXNzTmFtZTtcbiAgICAgIHZhciBldmVudERpcmVjdGlvbk5hbWU7XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUKSB7XG4gICAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ2xhc3NOYW1lJDIuTEVGVDtcbiAgICAgICAgb3JkZXJDbGFzc05hbWUgPSBDbGFzc05hbWUkMi5ORVhUO1xuICAgICAgICBldmVudERpcmVjdGlvbk5hbWUgPSBEaXJlY3Rpb24uTEVGVDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ2xhc3NOYW1lJDIuUklHSFQ7XG4gICAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ2xhc3NOYW1lJDIuUFJFVjtcbiAgICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRGlyZWN0aW9uLlJJR0hUO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dEVsZW1lbnQgJiYgJChuZXh0RWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDIuQUNUSVZFKSkge1xuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpO1xuXG4gICAgICBpZiAoc2xpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnQpO1xuXG4gICAgICB2YXIgc2xpZEV2ZW50ID0gJC5FdmVudChFdmVudCQyLlNMSUQsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KTtcblxuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDIuU0xJREUpKSB7XG4gICAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKG9yZGVyQ2xhc3NOYW1lKTtcbiAgICAgICAgVXRpbC5yZWZsb3cobmV4dEVsZW1lbnQpO1xuICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcbiAgICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgICB2YXIgbmV4dEVsZW1lbnRJbnRlcnZhbCA9IHBhcnNlSW50KG5leHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlcnZhbCcpLCAxMCk7XG5cbiAgICAgICAgaWYgKG5leHRFbGVtZW50SW50ZXJ2YWwpIHtcbiAgICAgICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWw7XG4gICAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gbmV4dEVsZW1lbnRJbnRlcnZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJChuZXh0RWxlbWVudCkucmVtb3ZlQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUgKyBcIiBcIiArIG9yZGVyQ2xhc3NOYW1lKS5hZGRDbGFzcyhDbGFzc05hbWUkMi5BQ1RJVkUpO1xuICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDIuQUNUSVZFICsgXCIgXCIgKyBvcmRlckNsYXNzTmFtZSArIFwiIFwiICsgZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgICAgIF90aGlzNC5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJChfdGhpczQuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDIuQUNUSVZFKTtcbiAgICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDIuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkRXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZJDIpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBfY29uZmlnLCBjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFjdGlvbiA9IHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gY29uZmlnIDogX2NvbmZpZy5zbGlkZTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IENhcm91c2VsKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSQyLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGRhdGEudG8oY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVthY3Rpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBhY3Rpb24gKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVthY3Rpb25dKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnRlcnZhbCAmJiBfY29uZmlnLnJpZGUpIHtcbiAgICAgICAgICBkYXRhLnBhdXNlKCk7XG4gICAgICAgICAgZGF0YS5jeWNsZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgQ2Fyb3VzZWwuX2RhdGFBcGlDbGlja0hhbmRsZXIgPSBmdW5jdGlvbiBfZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpO1xuXG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhcmdldCA9ICQoc2VsZWN0b3IpWzBdO1xuXG4gICAgICBpZiAoIXRhcmdldCB8fCAhJCh0YXJnZXQpLmhhc0NsYXNzKENsYXNzTmFtZSQyLkNBUk9VU0VMKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCAkKHRhcmdldCkuZGF0YSgpLCAkKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgIHZhciBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtdG8nKTtcblxuICAgICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgICAgY29uZmlnLmludGVydmFsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZyk7XG5cbiAgICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAgICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZJDIpLnRvKHNsaWRlSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2Fyb3VzZWwsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdDtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2Fyb3VzZWw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKGRvY3VtZW50KS5vbihFdmVudCQyLkNMSUNLX0RBVEFfQVBJLCBTZWxlY3RvciQyLkRBVEFfU0xJREUsIENhcm91c2VsLl9kYXRhQXBpQ2xpY2tIYW5kbGVyKTtcbiAgJCh3aW5kb3cpLm9uKEV2ZW50JDIuTE9BRF9EQVRBX0FQSSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYXJvdXNlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkMi5EQVRBX1JJREUpKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYXJvdXNlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciAkY2Fyb3VzZWwgPSAkKGNhcm91c2Vsc1tpXSk7XG5cbiAgICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkY2Fyb3VzZWwsICRjYXJvdXNlbC5kYXRhKCkpO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUUkMl0gPSBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUUkMl0uQ29uc3RydWN0b3IgPSBDYXJvdXNlbDtcblxuICAkLmZuW05BTUUkMl0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkMl0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkMjtcbiAgICByZXR1cm4gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkMyA9ICdjb2xsYXBzZSc7XG4gIHZhciBWRVJTSU9OJDMgPSAnNC4zLjEnO1xuICB2YXIgREFUQV9LRVkkMyA9ICdicy5jb2xsYXBzZSc7XG4gIHZhciBFVkVOVF9LRVkkMyA9IFwiLlwiICsgREFUQV9LRVkkMztcbiAgdmFyIERBVEFfQVBJX0tFWSQzID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkMyA9ICQuZm5bTkFNRSQzXTtcbiAgdmFyIERlZmF1bHQkMSA9IHtcbiAgICB0b2dnbGU6IHRydWUsXG4gICAgcGFyZW50OiAnJ1xuICB9O1xuICB2YXIgRGVmYXVsdFR5cGUkMSA9IHtcbiAgICB0b2dnbGU6ICdib29sZWFuJyxcbiAgICBwYXJlbnQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xuICB9O1xuICB2YXIgRXZlbnQkMyA9IHtcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSQzLFxuICAgIFNIT1dOOiBcInNob3duXCIgKyBFVkVOVF9LRVkkMyxcbiAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSQzLFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSQzLFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkMyArIERBVEFfQVBJX0tFWSQzXG4gIH07XG4gIHZhciBDbGFzc05hbWUkMyA9IHtcbiAgICBTSE9XOiAnc2hvdycsXG4gICAgQ09MTEFQU0U6ICdjb2xsYXBzZScsXG4gICAgQ09MTEFQU0lORzogJ2NvbGxhcHNpbmcnLFxuICAgIENPTExBUFNFRDogJ2NvbGxhcHNlZCdcbiAgfTtcbiAgdmFyIERpbWVuc2lvbiA9IHtcbiAgICBXSURUSDogJ3dpZHRoJyxcbiAgICBIRUlHSFQ6ICdoZWlnaHQnXG4gIH07XG4gIHZhciBTZWxlY3RvciQzID0ge1xuICAgIEFDVElWRVM6ICcuc2hvdywgLmNvbGxhcHNpbmcnLFxuICAgIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG5cbiAgdmFyIENvbGxhcHNlID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29sbGFwc2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1baHJlZj1cXFwiI1wiICsgZWxlbWVudC5pZCArIFwiXFxcIl0sXCIgKyAoXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1bZGF0YS10YXJnZXQ9XFxcIiNcIiArIGVsZW1lbnQuaWQgKyBcIlxcXCJdXCIpKSk7XG4gICAgICB2YXIgdG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQzLkRBVEFfVE9HR0xFKSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtID0gdG9nZ2xlTGlzdFtpXTtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pO1xuICAgICAgICB2YXIgZmlsdGVyRWxlbWVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZpbHRlcihmdW5jdGlvbiAoZm91bmRFbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGZvdW5kRWxlbSA9PT0gZWxlbWVudDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsO1xuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB9XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBDb2xsYXBzZS5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDMuU0hPVykpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQzLlNIT1cpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjdGl2ZXM7XG4gICAgICB2YXIgYWN0aXZlc0RhdGE7XG5cbiAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgYWN0aXZlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkMy5BQ1RJVkVTKSkuZmlsdGVyKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSA9PT0gX3RoaXMuX2NvbmZpZy5wYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZSQzLkNPTExBUFNFKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYWN0aXZlcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgICAgYWN0aXZlc0RhdGEgPSAkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvcikuZGF0YShEQVRBX0tFWSQzKTtcblxuICAgICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQkMy5TSE9XKTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KTtcblxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChhY3RpdmVzKS5ub3QodGhpcy5fc2VsZWN0b3IpLCAnaGlkZScpO1xuXG4gICAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgICAkKGFjdGl2ZXMpLmRhdGEoREFUQV9LRVkkMywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQzLkNPTExBUFNFKS5hZGRDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTSU5HKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDA7XG5cbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTRUQpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0lORykuYWRkQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0UpLmFkZENsYXNzKENsYXNzTmFtZSQzLlNIT1cpO1xuICAgICAgICBfdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG5cbiAgICAgICAgX3RoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSk7XG5cbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudCQzLlNIT1dOKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpO1xuICAgICAgdmFyIHNjcm9sbFNpemUgPSBcInNjcm9sbFwiICsgY2FwaXRhbGl6ZWREaW1lbnNpb247XG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gdGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXSArIFwicHhcIjtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgISQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDMuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQkMy5ISURFKTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KTtcblxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IHRoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXSArIFwicHhcIjtcbiAgICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTSU5HKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTRSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDMuU0hPVyk7XG4gICAgICB2YXIgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aDtcblxuICAgICAgaWYgKHRyaWdnZXJBcnJheUxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmlnZ2VyQXJyYXlMZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlckFycmF5W2ldO1xuICAgICAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0cmlnZ2VyKTtcblxuICAgICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyICRlbGVtID0gJChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSk7XG5cbiAgICAgICAgICAgIGlmICghJGVsZW0uaGFzQ2xhc3MoQ2xhc3NOYW1lJDMuU0hPVykpIHtcbiAgICAgICAgICAgICAgJCh0cmlnZ2VyKS5hZGRDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTRUQpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIF90aGlzMi5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKTtcblxuICAgICAgICAkKF90aGlzMi5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0lORykuYWRkQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0UpLnRyaWdnZXIoRXZlbnQkMy5ISURERU4pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0VHJhbnNpdGlvbmluZyA9IGZ1bmN0aW9uIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmc7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQzKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XG4gICAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBudWxsO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbDtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBEZWZhdWx0JDEsIGNvbmZpZyk7XG4gICAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKTsgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcblxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSQzLCBjb25maWcsIERlZmF1bHRUeXBlJDEpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXREaW1lbnNpb24gPSBmdW5jdGlvbiBfZ2V0RGltZW5zaW9uKCkge1xuICAgICAgdmFyIGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhEaW1lbnNpb24uV0lEVEgpO1xuICAgICAgcmV0dXJuIGhhc1dpZHRoID8gRGltZW5zaW9uLldJRFRIIDogRGltZW5zaW9uLkhFSUdIVDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRQYXJlbnQgPSBmdW5jdGlvbiBfZ2V0UGFyZW50KCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBwYXJlbnQ7XG5cbiAgICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucGFyZW50KSkge1xuICAgICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50OyAvLyBJdCdzIGEgalF1ZXJ5IG9iamVjdFxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFswXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb25maWcucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlbGVjdG9yID0gXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1bZGF0YS1wYXJlbnQ9XFxcIlwiICsgdGhpcy5fY29uZmlnLnBhcmVudCArIFwiXFxcIl1cIjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICAgICQoY2hpbGRyZW4pLmVhY2goZnVuY3Rpb24gKGksIGVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXMzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpLCBbZWxlbWVudF0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyA9IGZ1bmN0aW9uIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoZWxlbWVudCwgdHJpZ2dlckFycmF5KSB7XG4gICAgICB2YXIgaXNPcGVuID0gJChlbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkMy5TSE9XKTtcblxuICAgICAgaWYgKHRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgJCh0cmlnZ2VyQXJyYXkpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZSQzLkNPTExBUFNFRCwgIWlzT3BlbikuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3Blbik7XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQgPSBmdW5jdGlvbiBfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIHNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsO1xuICAgIH07XG5cbiAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZGF0YSA9ICR0aGlzLmRhdGEoREFUQV9LRVkkMyk7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBEZWZhdWx0JDEsICR0aGlzLmRhdGEoKSwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pO1xuXG4gICAgICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZJDMsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhDb2xsYXBzZSwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT04kMztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0JDE7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbGxhcHNlO1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJChkb2N1bWVudCkub24oRXZlbnQkMy5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IkMy5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgJHRyaWdnZXIgPSAkKHRoaXMpO1xuICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcbiAgICB2YXIgc2VsZWN0b3JzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgJChzZWxlY3RvcnMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0YXJnZXQgPSAkKHRoaXMpO1xuICAgICAgdmFyIGRhdGEgPSAkdGFyZ2V0LmRhdGEoREFUQV9LRVkkMyk7XG4gICAgICB2YXIgY29uZmlnID0gZGF0YSA/ICd0b2dnbGUnIDogJHRyaWdnZXIuZGF0YSgpO1xuXG4gICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHRhcmdldCwgY29uZmlnKTtcbiAgICB9KTtcbiAgfSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUUkM10gPSBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUUkM10uQ29uc3RydWN0b3IgPSBDb2xsYXBzZTtcblxuICAkLmZuW05BTUUkM10ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkM10gPSBKUVVFUllfTk9fQ09ORkxJQ1QkMztcbiAgICByZXR1cm4gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKiohXG4gICAqIEBmaWxlT3ZlcnZpZXcgS2lja2FzcyBsaWJyYXJ5IHRvIGNyZWF0ZSBhbmQgcGxhY2UgcG9wcGVycyBuZWFyIHRoZWlyIHJlZmVyZW5jZSBlbGVtZW50cy5cbiAgICogQHZlcnNpb24gMS4xNC43XG4gICAqIEBsaWNlbnNlXG4gICAqIENvcHlyaWdodCAoYykgMjAxNiBGZWRlcmljbyBaaXZvbG8gYW5kIGNvbnRyaWJ1dG9yc1xuICAgKlxuICAgKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gICAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAgICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICAgKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gICAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICAgKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICAgKlxuICAgKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAgICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAgICpcbiAgICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICAgKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gICAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgICogU09GVFdBUkUuXG4gICAqL1xuICB2YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxuICB2YXIgbG9uZ2VyVGltZW91dEJyb3dzZXJzID0gWydFZGdlJywgJ1RyaWRlbnQnLCAnRmlyZWZveCddO1xuICB2YXIgdGltZW91dER1cmF0aW9uID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb25nZXJUaW1lb3V0QnJvd3NlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihsb25nZXJUaW1lb3V0QnJvd3NlcnNbaV0pID49IDApIHtcbiAgICAgIHRpbWVvdXREdXJhdGlvbiA9IDE7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtaWNyb3Rhc2tEZWJvdW5jZShmbikge1xuICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNhbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgd2luZG93LlByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB0YXNrRGVib3VuY2UoZm4pIHtcbiAgICB2YXIgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc2NoZWR1bGVkKSB7XG4gICAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0sIHRpbWVvdXREdXJhdGlvbik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBzdXBwb3J0c01pY3JvVGFza3MgPSBpc0Jyb3dzZXIgJiYgd2luZG93LlByb21pc2U7XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgZGVib3VuY2VkIHZlcnNpb24gb2YgYSBtZXRob2QsIHRoYXQncyBhc3luY2hyb25vdXNseSBkZWZlcnJlZFxuICAqIGJ1dCBjYWxsZWQgaW4gdGhlIG1pbmltdW0gdGltZSBwb3NzaWJsZS5cbiAgKlxuICAqIEBtZXRob2RcbiAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICogQGFyZ3VtZW50IHtGdW5jdGlvbn0gZm5cbiAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICovXG4gIHZhciBkZWJvdW5jZSA9IHN1cHBvcnRzTWljcm9UYXNrcyA/IG1pY3JvdGFza0RlYm91bmNlIDogdGFza0RlYm91bmNlO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvblxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtBbnl9IGZ1bmN0aW9uVG9DaGVjayAtIHZhcmlhYmxlIHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG86IGlzIGEgZnVuY3Rpb24/XG4gICAqL1xuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmN0aW9uVG9DaGVjaykge1xuICAgIHZhciBnZXRUeXBlID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiBnZXRUeXBlLnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQ1NTIGNvbXB1dGVkIHByb3BlcnR5IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge0VlbWVudH0gZWxlbWVudFxuICAgKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHlcbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCBwcm9wZXJ0eSkge1xuICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gICAgdmFyIHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICB2YXIgY3NzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gICAgcmV0dXJuIHByb3BlcnR5ID8gY3NzW3Byb3BlcnR5XSA6IGNzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJlbnROb2RlIG9yIHRoZSBob3N0IG9mIHRoZSBlbGVtZW50XG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUgfHwgZWxlbWVudC5ob3N0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7RWxlbWVudH0gc2Nyb2xsIHBhcmVudFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgICAvLyBSZXR1cm4gYm9keSwgYGdldFNjcm9sbGAgd2lsbCB0YWtlIGNhcmUgdG8gZ2V0IHRoZSBjb3JyZWN0IGBzY3JvbGxUb3BgIGZyb20gaXRcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICAgIH1cblxuICAgIHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZSkge1xuICAgICAgY2FzZSAnSFRNTCc6XG4gICAgICBjYXNlICdCT0RZJzpcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5O1xuICAgICAgY2FzZSAnI2RvY3VtZW50JzpcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcblxuICAgIHZhciBfZ2V0U3R5bGVDb21wdXRlZFByb3AgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCksXG4gICAgICAgIG92ZXJmbG93ID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93LFxuICAgICAgICBvdmVyZmxvd1ggPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3dYLFxuICAgICAgICBvdmVyZmxvd1kgPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3dZO1xuXG4gICAgaWYgKC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB9XG5cbiAgdmFyIGlzSUUxMSA9IGlzQnJvd3NlciAmJiAhISh3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbiAgdmFyIGlzSUUxMCA9IGlzQnJvd3NlciAmJiAvTVNJRSAxMC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZlcnNpb24gdG8gY2hlY2tcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGlzSUVcbiAgICovXG4gIGZ1bmN0aW9uIGlzSUUodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSAxMSkge1xuICAgICAgcmV0dXJuIGlzSUUxMTtcbiAgICB9XG4gICAgaWYgKHZlcnNpb24gPT09IDEwKSB7XG4gICAgICByZXR1cm4gaXNJRTEwO1xuICAgIH1cbiAgICByZXR1cm4gaXNJRTExIHx8IGlzSUUxMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge0VsZW1lbnR9IG9mZnNldCBwYXJlbnRcbiAgICovXG4gIGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH1cblxuICAgIHZhciBub09mZnNldFBhcmVudCA9IGlzSUUoMTApID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5cbiAgICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBudWxsO1xuICAgIC8vIFNraXAgaGlkZGVuIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYW4gb2Zmc2V0UGFyZW50XG4gICAgd2hpbGUgKG9mZnNldFBhcmVudCA9PT0gbm9PZmZzZXRQYXJlbnQgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IChlbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFBhcmVudDtcbiAgICB9XG5cbiAgICB2YXIgbm9kZU5hbWUgPSBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50Lm5vZGVOYW1lO1xuXG4gICAgaWYgKCFub2RlTmFtZSB8fCBub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyAub2Zmc2V0UGFyZW50IHdpbGwgcmV0dXJuIHRoZSBjbG9zZXN0IFRILCBURCBvciBUQUJMRSBpbiBjYXNlXG4gICAgLy8gbm8gb2Zmc2V0UGFyZW50IGlzIHByZXNlbnQsIEkgaGF0ZSB0aGlzIGpvYi4uLlxuICAgIGlmIChbJ1RIJywgJ1REJywgJ1RBQkxFJ10uaW5kZXhPZihvZmZzZXRQYXJlbnQubm9kZU5hbWUpICE9PSAtMSAmJiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkob2Zmc2V0UGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPZmZzZXRDb250YWluZXIoZWxlbWVudCkge1xuICAgIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZU5hbWUgPT09ICdIVE1MJyB8fCBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkgPT09IGVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIHJvb3Qgbm9kZSAoZG9jdW1lbnQsIHNoYWRvd0RPTSByb290KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm5zIHtFbGVtZW50fSByb290IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIGdldFJvb3Qobm9kZSkge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBnZXRSb290KG5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDFcbiAgICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MlxuICAgKiBAcmV0dXJucyB7RWxlbWVudH0gY29tbW9uIG9mZnNldCBwYXJlbnRcbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGVsZW1lbnQyKSB7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gICAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyBIZXJlIHdlIG1ha2Ugc3VyZSB0byBnaXZlIGFzIFwic3RhcnRcIiB0aGUgZWxlbWVudCB0aGF0IGNvbWVzIGZpcnN0IGluIHRoZSBET01cbiAgICB2YXIgb3JkZXIgPSBlbGVtZW50MS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50MikgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORztcbiAgICB2YXIgc3RhcnQgPSBvcmRlciA/IGVsZW1lbnQxIDogZWxlbWVudDI7XG4gICAgdmFyIGVuZCA9IG9yZGVyID8gZWxlbWVudDIgOiBlbGVtZW50MTtcblxuICAgIC8vIEdldCBjb21tb24gYW5jZXN0b3IgY29udGFpbmVyXG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZXRTdGFydChzdGFydCwgMCk7XG4gICAgcmFuZ2Uuc2V0RW5kKGVuZCwgMCk7XG4gICAgdmFyIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG5cbiAgICAvLyBCb3RoIG5vZGVzIGFyZSBpbnNpZGUgI2RvY3VtZW50XG5cbiAgICBpZiAoZWxlbWVudDEgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyICYmIGVsZW1lbnQyICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciB8fCBzdGFydC5jb250YWlucyhlbmQpKSB7XG4gICAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XG4gICAgICAgIHJldHVybiBjb21tb25BbmNlc3RvckNvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChjb21tb25BbmNlc3RvckNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gb25lIG9mIHRoZSBub2RlcyBpcyBpbnNpZGUgc2hhZG93RE9NLCBmaW5kIHdoaWNoIG9uZVxuICAgIHZhciBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcbiAgICBpZiAoZWxlbWVudDFyb290Lmhvc3QpIHtcbiAgICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxcm9vdC5ob3N0LCBlbGVtZW50Mik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBnZXRSb290KGVsZW1lbnQyKS5ob3N0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc2Nyb2xsIHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50IGluIHRoZSBnaXZlbiBzaWRlICh0b3AgYW5kIGxlZnQpXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAgICogQGFyZ3VtZW50IHtTdHJpbmd9IHNpZGUgYHRvcGAgb3IgYGxlZnRgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGFtb3VudCBvZiBzY3JvbGxlZCBwaXhlbHNcbiAgICovXG4gIGZ1bmN0aW9uIGdldFNjcm9sbChlbGVtZW50KSB7XG4gICAgdmFyIHNpZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICd0b3AnO1xuXG4gICAgdmFyIHVwcGVyU2lkZSA9IHNpZGUgPT09ICd0b3AnID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gICAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICAgIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIHZhciBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHZhciBzY3JvbGxpbmdFbGVtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgaHRtbDtcbiAgICAgIHJldHVybiBzY3JvbGxpbmdFbGVtZW50W3VwcGVyU2lkZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRbdXBwZXJTaWRlXTtcbiAgfVxuXG4gIC8qXG4gICAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QgLSBSZWN0IG9iamVjdCB5b3Ugd2FudCB0byBjaGFuZ2VcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IGZyb20gdGhlIGZ1bmN0aW9uIHJlYWRzIHRoZSBzY3JvbGwgdmFsdWVzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gc3VidHJhY3QgLSBzZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBzdWJ0cmFjdCB0aGUgc2Nyb2xsIHZhbHVlc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IHJlY3QgLSBUaGUgbW9kaWZpZXIgcmVjdCBvYmplY3RcbiAgICovXG4gIGZ1bmN0aW9uIGluY2x1ZGVTY3JvbGwocmVjdCwgZWxlbWVudCkge1xuICAgIHZhciBzdWJ0cmFjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICAgIHZhciBtb2RpZmllciA9IHN1YnRyYWN0ID8gLTEgOiAxO1xuICAgIHJlY3QudG9wICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICAgIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICAgIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gICAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICAvKlxuICAgKiBIZWxwZXIgdG8gZGV0ZWN0IGJvcmRlcnMgb2YgYSBnaXZlbiBlbGVtZW50XG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xuICAgKiBSZXN1bHQgb2YgYGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eWAgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXMgLSBgeGAgb3IgYHlgXG4gICAqIEByZXR1cm4ge251bWJlcn0gYm9yZGVycyAtIFRoZSBib3JkZXJzIHNpemUgb2YgdGhlIGdpdmVuIGF4aXNcbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCBheGlzKSB7XG4gICAgdmFyIHNpZGVBID0gYXhpcyA9PT0gJ3gnID8gJ0xlZnQnIDogJ1RvcCc7XG4gICAgdmFyIHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0eWxlc1snYm9yZGVyJyArIHNpZGVBICsgJ1dpZHRoJ10sIDEwKSArIHBhcnNlRmxvYXQoc3R5bGVzWydib3JkZXInICsgc2lkZUIgKyAnV2lkdGgnXSwgMTApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2l6ZShheGlzLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KGJvZHlbJ29mZnNldCcgKyBheGlzXSwgYm9keVsnc2Nyb2xsJyArIGF4aXNdLCBodG1sWydjbGllbnQnICsgYXhpc10sIGh0bWxbJ29mZnNldCcgKyBheGlzXSwgaHRtbFsnc2Nyb2xsJyArIGF4aXNdLCBpc0lFKDEwKSA/IHBhcnNlSW50KGh0bWxbJ29mZnNldCcgKyBheGlzXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCcpXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnKV0pIDogMCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaW5kb3dTaXplcyhkb2N1bWVudCkge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGlzSUUoMTApICYmIGdldENvbXB1dGVkU3R5bGUoaHRtbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBnZXRTaXplKCdIZWlnaHQnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSxcbiAgICAgIHdpZHRoOiBnZXRTaXplKCdXaWR0aCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgfTtcbiAgfSgpO1xuXG5cblxuXG5cbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBDbGllbnRSZWN0IGxpa2Ugb3V0cHV0XG4gICAqL1xuICBmdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIG9mZnNldHMsIHtcbiAgICAgIHJpZ2h0OiBvZmZzZXRzLmxlZnQgKyBvZmZzZXRzLndpZHRoLFxuICAgICAgYm90dG9tOiBvZmZzZXRzLnRvcCArIG9mZnNldHMuaGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIGdpdmVuIGVsZW1lbnRcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7T2JqZWN0fSBjbGllbnQgcmVjdFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgcmVjdCA9IHt9O1xuXG4gICAgLy8gSUUxMCAxMCBGSVg6IFBsZWFzZSwgZG9uJ3QgYXNrLCB0aGUgZWxlbWVudCBpc24ndFxuICAgIC8vIGNvbnNpZGVyZWQgaW4gRE9NIGluIHNvbWUgY2lyY3Vtc3RhbmNlcy4uLlxuICAgIC8vIFRoaXMgaXNuJ3QgcmVwcm9kdWNpYmxlIGluIElFMTAgY29tcGF0aWJpbGl0eSBtb2RlIG9mIElFMTFcbiAgICB0cnkge1xuICAgICAgaWYgKGlzSUUoMTApKSB7XG4gICAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgICAgICAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wO1xuICAgICAgICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdDtcbiAgICAgICAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wO1xuICAgICAgICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcFxuICAgIH07XG5cbiAgICAvLyBzdWJ0cmFjdCBzY3JvbGxiYXIgc2l6ZSBmcm9tIHNpemVzXG4gICAgdmFyIHNpemVzID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoZWxlbWVudC5vd25lckRvY3VtZW50KSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IHNpemVzLndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGggfHwgcmVzdWx0LnJpZ2h0IC0gcmVzdWx0LmxlZnQ7XG4gICAgdmFyIGhlaWdodCA9IHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuYm90dG9tIC0gcmVzdWx0LnRvcDtcblxuICAgIHZhciBob3JpelNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0V2lkdGggLSB3aWR0aDtcbiAgICB2YXIgdmVydFNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0O1xuXG4gICAgLy8gaWYgYW4gaHlwb3RoZXRpY2FsIHNjcm9sbGJhciBpcyBkZXRlY3RlZCwgd2UgbXVzdCBiZSBzdXJlIGl0J3Mgbm90IGEgYGJvcmRlcmBcbiAgICAvLyB3ZSBtYWtlIHRoaXMgY2hlY2sgY29uZGl0aW9uYWwgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgICBpZiAoaG9yaXpTY3JvbGxiYXIgfHwgdmVydFNjcm9sbGJhcikge1xuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgICAgIGhvcml6U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3gnKTtcbiAgICAgIHZlcnRTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneScpO1xuXG4gICAgICByZXN1bHQud2lkdGggLT0gaG9yaXpTY3JvbGxiYXI7XG4gICAgICByZXN1bHQuaGVpZ2h0IC09IHZlcnRTY3JvbGxiYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldENsaWVudFJlY3QocmVzdWx0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShjaGlsZHJlbiwgcGFyZW50KSB7XG4gICAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgdmFyIGlzSUUxMCA9IGlzSUUoMTApO1xuICAgIHZhciBpc0hUTUwgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJztcbiAgICB2YXIgY2hpbGRyZW5SZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGNoaWxkcmVuKTtcbiAgICB2YXIgcGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xuICAgIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xuXG4gICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQpO1xuICAgIHZhciBib3JkZXJUb3BXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlclRvcFdpZHRoLCAxMCk7XG4gICAgdmFyIGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCwgMTApO1xuXG4gICAgLy8gSW4gY2FzZXMgd2hlcmUgdGhlIHBhcmVudCBpcyBmaXhlZCwgd2UgbXVzdCBpZ25vcmUgbmVnYXRpdmUgc2Nyb2xsIGluIG9mZnNldCBjYWxjXG4gICAgaWYgKGZpeGVkUG9zaXRpb24gJiYgaXNIVE1MKSB7XG4gICAgICBwYXJlbnRSZWN0LnRvcCA9IE1hdGgubWF4KHBhcmVudFJlY3QudG9wLCAwKTtcbiAgICAgIHBhcmVudFJlY3QubGVmdCA9IE1hdGgubWF4KHBhcmVudFJlY3QubGVmdCwgMCk7XG4gICAgfVxuICAgIHZhciBvZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh7XG4gICAgICB0b3A6IGNoaWxkcmVuUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcCAtIGJvcmRlclRvcFdpZHRoLFxuICAgICAgbGVmdDogY2hpbGRyZW5SZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQgLSBib3JkZXJMZWZ0V2lkdGgsXG4gICAgICB3aWR0aDogY2hpbGRyZW5SZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiBjaGlsZHJlblJlY3QuaGVpZ2h0XG4gICAgfSk7XG4gICAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSAwO1xuICAgIG9mZnNldHMubWFyZ2luTGVmdCA9IDA7XG5cbiAgICAvLyBTdWJ0cmFjdCBtYXJnaW5zIG9mIGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGl0J3MgYmVpbmcgdXNlZCBhcyBwYXJlbnRcbiAgICAvLyB3ZSBkbyB0aGlzIG9ubHkgb24gSFRNTCBiZWNhdXNlIGl0J3MgdGhlIG9ubHkgZWxlbWVudCB0aGF0IGJlaGF2ZXNcbiAgICAvLyBkaWZmZXJlbnRseSB3aGVuIG1hcmdpbnMgYXJlIGFwcGxpZWQgdG8gaXQuIFRoZSBtYXJnaW5zIGFyZSBpbmNsdWRlZCBpblxuICAgIC8vIHRoZSBib3ggb2YgdGhlIGRvY3VtZW50RWxlbWVudCwgaW4gdGhlIG90aGVyIGNhc2VzIG5vdC5cbiAgICBpZiAoIWlzSUUxMCAmJiBpc0hUTUwpIHtcbiAgICAgIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3AsIDEwKTtcbiAgICAgIHZhciBtYXJnaW5MZWZ0ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCwgMTApO1xuXG4gICAgICBvZmZzZXRzLnRvcCAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICAgIG9mZnNldHMuYm90dG9tIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgICAgb2Zmc2V0cy5sZWZ0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG4gICAgICBvZmZzZXRzLnJpZ2h0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG5cbiAgICAgIC8vIEF0dGFjaCBtYXJnaW5Ub3AgYW5kIG1hcmdpbkxlZnQgYmVjYXVzZSBpbiBzb21lIGNpcmN1bXN0YW5jZXMgd2UgbWF5IG5lZWQgdGhlbVxuICAgICAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XG4gICAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xuICAgIH1cblxuICAgIGlmIChpc0lFMTAgJiYgIWZpeGVkUG9zaXRpb24gPyBwYXJlbnQuY29udGFpbnMoc2Nyb2xsUGFyZW50KSA6IHBhcmVudCA9PT0gc2Nyb2xsUGFyZW50ICYmIHNjcm9sbFBhcmVudC5ub2RlTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgICBvZmZzZXRzID0gaW5jbHVkZVNjcm9sbChvZmZzZXRzLCBwYXJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKGVsZW1lbnQpIHtcbiAgICB2YXIgZXhjbHVkZVNjcm9sbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgICB2YXIgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xuICAgIHZhciB3aWR0aCA9IE1hdGgubWF4KGh0bWwuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1heChodG1sLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gICAgdmFyIHNjcm9sbFRvcCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwpIDogMDtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwsICdsZWZ0JykgOiAwO1xuXG4gICAgdmFyIG9mZnNldCA9IHtcbiAgICAgIHRvcDogc2Nyb2xsVG9wIC0gcmVsYXRpdmVPZmZzZXQudG9wICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luVG9wLFxuICAgICAgbGVmdDogc2Nyb2xsTGVmdCAtIHJlbGF0aXZlT2Zmc2V0LmxlZnQgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5MZWZ0LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9O1xuXG4gICAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBmaXhlZCBvciBpcyBpbnNpZGUgYSBmaXhlZCBwYXJlbnRcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICAgKiBAYXJndW1lbnQge0VsZW1lbnR9IGN1c3RvbUNvbnRhaW5lclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvIFwiaXNGaXhlZD9cIlxuICAgKi9cbiAgZnVuY3Rpb24gaXNGaXhlZChlbGVtZW50KSB7XG4gICAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gICAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBpc0ZpeGVkKHBhcmVudE5vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBmaXJzdCBwYXJlbnQgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBhIHRyYW5zZm9ybWVkIHByb3BlcnR5IGRlZmluZWRcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7RWxlbWVudH0gZmlyc3QgdHJhbnNmb3JtZWQgcGFyZW50IG9yIGRvY3VtZW50RWxlbWVudFxuICAgKi9cblxuICBmdW5jdGlvbiBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQucGFyZW50RWxlbWVudCB8fCBpc0lFKCkpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHZhciBlbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xuICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gZWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhZGRpbmdcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQgLSBFbGVtZW50IHVzZWQgdG8gZGVmaW5lIHRoZSBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZml4ZWRQb3NpdGlvbiAtIElzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAgICogQHJldHVybnMge09iamVjdH0gQ29vcmRpbmF0ZXMgb2YgdGhlIGJvdW5kYXJpZXNcbiAgICovXG4gIGZ1bmN0aW9uIGdldEJvdW5kYXJpZXMocG9wcGVyLCByZWZlcmVuY2UsIHBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gICAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZhbHNlO1xuXG4gICAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcblxuICAgIHZhciBib3VuZGFyaWVzID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCByZWZlcmVuY2UpO1xuXG4gICAgLy8gSGFuZGxlIHZpZXdwb3J0IGNhc2VcbiAgICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgIGJvdW5kYXJpZXMgPSBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUob2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSGFuZGxlIG90aGVyIGNhc2VzIGJhc2VkIG9uIERPTSBlbGVtZW50IHVzZWQgYXMgYm91bmRhcmllc1xuICAgICAgdmFyIGJvdW5kYXJpZXNOb2RlID0gdm9pZCAwO1xuICAgICAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgICBib3VuZGFyaWVzTm9kZSA9IGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKHJlZmVyZW5jZSkpO1xuICAgICAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnd2luZG93Jykge1xuICAgICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gYm91bmRhcmllc0VsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBvZmZzZXRzID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGJvdW5kYXJpZXNOb2RlLCBvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuXG4gICAgICAvLyBJbiBjYXNlIG9mIEhUTUwsIHdlIG5lZWQgYSBkaWZmZXJlbnQgY29tcHV0YXRpb25cbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcbiAgICAgICAgdmFyIF9nZXRXaW5kb3dTaXplcyA9IGdldFdpbmRvd1NpemVzKHBvcHBlci5vd25lckRvY3VtZW50KSxcbiAgICAgICAgICAgIGhlaWdodCA9IF9nZXRXaW5kb3dTaXplcy5oZWlnaHQsXG4gICAgICAgICAgICB3aWR0aCA9IF9nZXRXaW5kb3dTaXplcy53aWR0aDtcblxuICAgICAgICBib3VuZGFyaWVzLnRvcCArPSBvZmZzZXRzLnRvcCAtIG9mZnNldHMubWFyZ2luVG9wO1xuICAgICAgICBib3VuZGFyaWVzLmJvdHRvbSA9IGhlaWdodCArIG9mZnNldHMudG9wO1xuICAgICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xuICAgICAgICBib3VuZGFyaWVzLnJpZ2h0ID0gd2lkdGggKyBvZmZzZXRzLmxlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcbiAgICAgICAgYm91bmRhcmllcyA9IG9mZnNldHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHBhZGRpbmdzXG4gICAgcGFkZGluZyA9IHBhZGRpbmcgfHwgMDtcbiAgICB2YXIgaXNQYWRkaW5nTnVtYmVyID0gdHlwZW9mIHBhZGRpbmcgPT09ICdudW1iZXInO1xuICAgIGJvdW5kYXJpZXMubGVmdCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5sZWZ0IHx8IDA7XG4gICAgYm91bmRhcmllcy50b3AgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcudG9wIHx8IDA7XG4gICAgYm91bmRhcmllcy5yaWdodCAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5yaWdodCB8fCAwO1xuICAgIGJvdW5kYXJpZXMuYm90dG9tIC09IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmJvdHRvbSB8fCAwO1xuXG4gICAgcmV0dXJuIGJvdW5kYXJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcmVhKF9yZWYpIHtcbiAgICB2YXIgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICAgIHJldHVybiB3aWR0aCAqIGhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBgYXV0b2AgcGxhY2VtZW50IHRvIHRoZSBwbGFjZW1lbnQgd2l0aCBtb3JlXG4gICAqIGF2YWlsYWJsZSBzcGFjZS5cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICAgKi9cbiAgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQocGxhY2VtZW50LCByZWZSZWN0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgICB2YXIgcGFkZGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogMDtcblxuICAgIGlmIChwbGFjZW1lbnQuaW5kZXhPZignYXV0bycpID09PSAtMSkge1xuICAgICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgICB9XG5cbiAgICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMocG9wcGVyLCByZWZlcmVuY2UsIHBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KTtcblxuICAgIHZhciByZWN0cyA9IHtcbiAgICAgIHRvcDoge1xuICAgICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiByZWZSZWN0LnRvcCAtIGJvdW5kYXJpZXMudG9wXG4gICAgICB9LFxuICAgICAgcmlnaHQ6IHtcbiAgICAgICAgd2lkdGg6IGJvdW5kYXJpZXMucmlnaHQgLSByZWZSZWN0LnJpZ2h0LFxuICAgICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgICB9LFxuICAgICAgYm90dG9tOiB7XG4gICAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuYm90dG9tIC0gcmVmUmVjdC5ib3R0b21cbiAgICAgIH0sXG4gICAgICBsZWZ0OiB7XG4gICAgICAgIHdpZHRoOiByZWZSZWN0LmxlZnQgLSBib3VuZGFyaWVzLmxlZnQsXG4gICAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHNvcnRlZEFyZWFzID0gT2JqZWN0LmtleXMocmVjdHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBrZXk6IGtleVxuICAgICAgfSwgcmVjdHNba2V5XSwge1xuICAgICAgICBhcmVhOiBnZXRBcmVhKHJlY3RzW2tleV0pXG4gICAgICB9KTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYi5hcmVhIC0gYS5hcmVhO1xuICAgIH0pO1xuXG4gICAgdmFyIGZpbHRlcmVkQXJlYXMgPSBzb3J0ZWRBcmVhcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBfcmVmMi5oZWlnaHQ7XG4gICAgICByZXR1cm4gd2lkdGggPj0gcG9wcGVyLmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSBwb3BwZXIuY2xpZW50SGVpZ2h0O1xuICAgIH0pO1xuXG4gICAgdmFyIGNvbXB1dGVkUGxhY2VtZW50ID0gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwID8gZmlsdGVyZWRBcmVhc1swXS5rZXkgOiBzb3J0ZWRBcmVhc1swXS5rZXk7XG5cbiAgICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgICByZXR1cm4gY29tcHV0ZWRQbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvZmZzZXRzIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAgICogQHBhcmFtIHtFbGVtZW50fSBmaXhlZFBvc2l0aW9uIC0gaXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcblxuICAgIHZhciBjb21tb25PZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIHJlZmVyZW5jZSk7XG4gICAgcmV0dXJuIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShyZWZlcmVuY2UsIGNvbW1vbk9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtPYmplY3R9IG9iamVjdCBjb250YWluaW5nIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllc1xuICAgKi9cbiAgZnVuY3Rpb24gZ2V0T3V0ZXJTaXplcyhlbGVtZW50KSB7XG4gICAgdmFyIHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgdmFyIHggPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3AgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20gfHwgMCk7XG4gICAgdmFyIHkgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0IHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQgfHwgMCk7XG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoICsgeSxcbiAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgKyB4XG4gICAgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IG9mIHRoZSBnaXZlbiBvbmVcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnRcbiAgICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICAgIHZhciBoYXNoID0geyBsZWZ0OiAncmlnaHQnLCByaWdodDogJ2xlZnQnLCBib3R0b206ICd0b3AnLCB0b3A6ICdib3R0b20nIH07XG4gICAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvZmZzZXRzIHRvIHRoZSBwb3BwZXJcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwb3NpdGlvbiAtIENTUyBwb3NpdGlvbiB0aGUgUG9wcGVyIHdpbGwgZ2V0IGFwcGxpZWRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzIC0gdGhlIHJlZmVyZW5jZSBvZmZzZXRzICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBsYWNlbWVudCAtIG9uZSBvZiB0aGUgdmFsaWQgcGxhY2VtZW50IG9wdGlvbnNcbiAgICogQHJldHVybnMge09iamVjdH0gcG9wcGVyT2Zmc2V0cyAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQb3BwZXJPZmZzZXRzKHBvcHBlciwgcmVmZXJlbmNlT2Zmc2V0cywgcGxhY2VtZW50KSB7XG4gICAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgICAvLyBHZXQgcG9wcGVyIG5vZGUgc2l6ZXNcbiAgICB2YXIgcG9wcGVyUmVjdCA9IGdldE91dGVyU2l6ZXMocG9wcGVyKTtcblxuICAgIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHtcbiAgICAgIHdpZHRoOiBwb3BwZXJSZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiBwb3BwZXJSZWN0LmhlaWdodFxuICAgIH07XG5cbiAgICAvLyBkZXBlbmRpbmcgYnkgdGhlIHBvcHBlciBwbGFjZW1lbnQgd2UgaGF2ZSB0byBjb21wdXRlIGl0cyBvZmZzZXRzIHNsaWdodGx5IGRpZmZlcmVudGx5XG4gICAgdmFyIGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICAgIHZhciBtYWluU2lkZSA9IGlzSG9yaXogPyAndG9wJyA6ICdsZWZ0JztcbiAgICB2YXIgc2Vjb25kYXJ5U2lkZSA9IGlzSG9yaXogPyAnbGVmdCcgOiAndG9wJztcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBzZWNvbmRhcnlNZWFzdXJlbWVudCA9ICFpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgcG9wcGVyT2Zmc2V0c1ttYWluU2lkZV0gPSByZWZlcmVuY2VPZmZzZXRzW21haW5TaWRlXSArIHJlZmVyZW5jZU9mZnNldHNbbWVhc3VyZW1lbnRdIC8gMiAtIHBvcHBlclJlY3RbbWVhc3VyZW1lbnRdIC8gMjtcbiAgICBpZiAocGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlKSB7XG4gICAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHBvcHBlclJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvcHBlck9mZnNldHM7XG4gIH1cblxuICAvKipcbiAgICogTWltaWNzIHRoZSBgZmluZGAgbWV0aG9kIG9mIEFycmF5XG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAgICogQGFyZ3VtZW50IHByb3BcbiAgICogQGFyZ3VtZW50IHZhbHVlXG4gICAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gICAqL1xuICBmdW5jdGlvbiBmaW5kKGFyciwgY2hlY2spIHtcbiAgICAvLyB1c2UgbmF0aXZlIGZpbmQgaWYgc3VwcG9ydGVkXG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gICAgICByZXR1cm4gYXJyLmZpbmQoY2hlY2spO1xuICAgIH1cblxuICAgIC8vIHVzZSBgZmlsdGVyYCB0byBvYnRhaW4gdGhlIHNhbWUgYmVoYXZpb3Igb2YgYGZpbmRgXG4gICAgcmV0dXJuIGFyci5maWx0ZXIoY2hlY2spWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIG1hdGNoaW5nIG9iamVjdFxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gICAqIEBhcmd1bWVudCBwcm9wXG4gICAqIEBhcmd1bWVudCB2YWx1ZVxuICAgKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZEluZGV4KGFyciwgcHJvcCwgdmFsdWUpIHtcbiAgICAvLyB1c2UgbmF0aXZlIGZpbmRJbmRleCBpZiBzdXBwb3J0ZWRcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCkge1xuICAgICAgcmV0dXJuIGFyci5maW5kSW5kZXgoZnVuY3Rpb24gKGN1cikge1xuICAgICAgICByZXR1cm4gY3VyW3Byb3BdID09PSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHVzZSBgZmluZGAgKyBgaW5kZXhPZmAgaWYgYGZpbmRJbmRleGAgaXNuJ3Qgc3VwcG9ydGVkXG4gICAgdmFyIG1hdGNoID0gZmluZChhcnIsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmpbcHJvcF0gPT09IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnIuaW5kZXhPZihtYXRjaCk7XG4gIH1cblxuICAvKipcbiAgICogTG9vcCB0cm91Z2ggdGhlIGxpc3Qgb2YgbW9kaWZpZXJzIGFuZCBydW4gdGhlbSBpbiBvcmRlcixcbiAgICogZWFjaCBvZiB0aGVtIHdpbGwgdGhlbiBlZGl0IHRoZSBkYXRhIG9iamVjdC5cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVuZHMgLSBPcHRpb25hbCBtb2RpZmllciBuYW1lIHVzZWQgYXMgc3RvcHBlclxuICAgKiBAcmV0dXJucyB7ZGF0YU9iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIHJ1bk1vZGlmaWVycyhtb2RpZmllcnMsIGRhdGEsIGVuZHMpIHtcbiAgICB2YXIgbW9kaWZpZXJzVG9SdW4gPSBlbmRzID09PSB1bmRlZmluZWQgPyBtb2RpZmllcnMgOiBtb2RpZmllcnMuc2xpY2UoMCwgZmluZEluZGV4KG1vZGlmaWVycywgJ25hbWUnLCBlbmRzKSk7XG5cbiAgICBtb2RpZmllcnNUb1J1bi5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgaWYgKG1vZGlmaWVyWydmdW5jdGlvbiddKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgIGNvbnNvbGUud2FybignYG1vZGlmaWVyLmZ1bmN0aW9uYCBpcyBkZXByZWNhdGVkLCB1c2UgYG1vZGlmaWVyLmZuYCEnKTtcbiAgICAgIH1cbiAgICAgIHZhciBmbiA9IG1vZGlmaWVyWydmdW5jdGlvbiddIHx8IG1vZGlmaWVyLmZuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgaWYgKG1vZGlmaWVyLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgLy8gQWRkIHByb3BlcnRpZXMgdG8gb2Zmc2V0cyB0byBtYWtlIHRoZW0gYSBjb21wbGV0ZSBjbGllbnRSZWN0IG9iamVjdFxuICAgICAgICAvLyB3ZSBkbyB0aGlzIGJlZm9yZSBlYWNoIG1vZGlmaWVyIHRvIG1ha2Ugc3VyZSB0aGUgcHJldmlvdXMgb25lIGRvZXNuJ3RcbiAgICAgICAgLy8gbWVzcyB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcbiAgICAgICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSk7XG5cbiAgICAgICAgZGF0YSA9IGZuKGRhdGEsIG1vZGlmaWVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIsIGNvbXB1dGluZyB0aGUgbmV3IG9mZnNldHMgYW5kIGFwcGx5aW5nXG4gICAqIHRoZSBuZXcgc3R5bGUuPGJyIC8+XG4gICAqIFByZWZlciBgc2NoZWR1bGVVcGRhdGVgIG92ZXIgYHVwZGF0ZWAgYmVjYXVzZSBvZiBwZXJmb3JtYW5jZSByZWFzb25zLlxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAvLyBpZiBwb3BwZXIgaXMgZGVzdHJveWVkLCBkb24ndCBwZXJmb3JtIGFueSBmdXJ0aGVyIHVwZGF0ZVxuICAgIGlmICh0aGlzLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAgIHN0eWxlczoge30sXG4gICAgICBhcnJvd1N0eWxlczoge30sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIGZsaXBwZWQ6IGZhbHNlLFxuICAgICAgb2Zmc2V0czoge31cbiAgICB9O1xuXG4gICAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZU9mZnNldHModGhpcy5zdGF0ZSwgdGhpcy5wb3BwZXIsIHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZCk7XG5cbiAgICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gICAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgZGF0YS5wbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudCh0aGlzLm9wdGlvbnMucGxhY2VtZW50LCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCB0aGlzLnBvcHBlciwgdGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCwgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmcpO1xuXG4gICAgLy8gc3RvcmUgdGhlIGNvbXB1dGVkIHBsYWNlbWVudCBpbnNpZGUgYG9yaWdpbmFsUGxhY2VtZW50YFxuICAgIGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcblxuICAgIGRhdGEucG9zaXRpb25GaXhlZCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkO1xuXG4gICAgLy8gY29tcHV0ZSB0aGUgcG9wcGVyIG9mZnNldHNcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0UG9wcGVyT2Zmc2V0cyh0aGlzLnBvcHBlciwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgZGF0YS5wbGFjZW1lbnQpO1xuXG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlci5wb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSc7XG5cbiAgICAvLyBydW4gdGhlIG1vZGlmaWVyc1xuICAgIGRhdGEgPSBydW5Nb2RpZmllcnModGhpcy5tb2RpZmllcnMsIGRhdGEpO1xuXG4gICAgLy8gdGhlIGZpcnN0IGB1cGRhdGVgIHdpbGwgY2FsbCBgb25DcmVhdGVgIGNhbGxiYWNrXG4gICAgLy8gdGhlIG90aGVyIG9uZXMgd2lsbCBjYWxsIGBvblVwZGF0ZWAgY2FsbGJhY2tcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNDcmVhdGVkKSB7XG4gICAgICB0aGlzLnN0YXRlLmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vblVwZGF0ZShkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgaXMgZW5hYmxlZC5cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNNb2RpZmllckVuYWJsZWQobW9kaWZpZXJzLCBtb2RpZmllck5hbWUpIHtcbiAgICByZXR1cm4gbW9kaWZpZXJzLnNvbWUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICAgIGVuYWJsZWQgPSBfcmVmLmVuYWJsZWQ7XG4gICAgICByZXR1cm4gZW5hYmxlZCAmJiBuYW1lID09PSBtb2RpZmllck5hbWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwcmVmaXhlZCBzdXBwb3J0ZWQgcHJvcGVydHkgbmFtZVxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5IChjYW1lbENhc2UpXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IHByZWZpeGVkIHByb3BlcnR5IChjYW1lbENhc2Ugb3IgUGFzY2FsQ2FzZSwgZGVwZW5kaW5nIG9uIHRoZSB2ZW5kb3IgcHJlZml4KVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gICAgdmFyIHByZWZpeGVzID0gW2ZhbHNlLCAnbXMnLCAnV2Via2l0JywgJ01veicsICdPJ107XG4gICAgdmFyIHVwcGVyUHJvcCA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgICB2YXIgdG9DaGVjayA9IHByZWZpeCA/ICcnICsgcHJlZml4ICsgdXBwZXJQcm9wIDogcHJvcGVydHk7XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbdG9DaGVja10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0b0NoZWNrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgcG9wcGVyLlxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgICAvLyB0b3VjaCBET00gb25seSBpZiBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgaXMgZW5hYmxlZFxuICAgIGlmIChpc01vZGlmaWVyRW5hYmxlZCh0aGlzLm1vZGlmaWVycywgJ2FwcGx5U3R5bGUnKSkge1xuICAgICAgdGhpcy5wb3BwZXIucmVtb3ZlQXR0cmlidXRlKCd4LXBsYWNlbWVudCcpO1xuICAgICAgdGhpcy5wb3BwZXIuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgICAgIHRoaXMucG9wcGVyLnN0eWxlLnRvcCA9ICcnO1xuICAgICAgdGhpcy5wb3BwZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgICAgdGhpcy5wb3BwZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICAgIHRoaXMucG9wcGVyLnN0eWxlLmJvdHRvbSA9ICcnO1xuICAgICAgdGhpcy5wb3BwZXIuc3R5bGUud2lsbENoYW5nZSA9ICcnO1xuICAgICAgdGhpcy5wb3BwZXIuc3R5bGVbZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKV0gPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuXG4gICAgLy8gcmVtb3ZlIHRoZSBwb3BwZXIgaWYgdXNlciBleHBsaWNpdHkgYXNrZWQgZm9yIHRoZSBkZWxldGlvbiBvbiBkZXN0cm95XG4gICAgLy8gZG8gbm90IHVzZSBgcmVtb3ZlYCBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0IGl0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVPbkRlc3Ryb3kpIHtcbiAgICAgIHRoaXMucG9wcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wb3BwZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdpbmRvdyBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnRcbiAgICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtXaW5kb3d9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRXaW5kb3coZWxlbWVudCkge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHdpbmRvdztcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhzY3JvbGxQYXJlbnQsIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cykge1xuICAgIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQubm9kZU5hbWUgPT09ICdCT0RZJztcbiAgICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gc2Nyb2xsUGFyZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiBzY3JvbGxQYXJlbnQ7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICBpZiAoIWlzQm9keSkge1xuICAgICAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKGdldFNjcm9sbFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSksIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cyk7XG4gICAgfVxuICAgIHNjcm9sbFBhcmVudHMucHVzaCh0YXJnZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIG5lZWRlZCBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBvcHRpb25zLCBzdGF0ZSwgdXBkYXRlQm91bmQpIHtcbiAgICAvLyBSZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gICAgc3RhdGUudXBkYXRlQm91bmQgPSB1cGRhdGVCb3VuZDtcbiAgICBnZXRXaW5kb3cocmVmZXJlbmNlKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgLy8gU2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gICAgdmFyIHNjcm9sbEVsZW1lbnQgPSBnZXRTY3JvbGxQYXJlbnQocmVmZXJlbmNlKTtcbiAgICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsRWxlbWVudCwgJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kLCBzdGF0ZS5zY3JvbGxQYXJlbnRzKTtcbiAgICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gc2Nyb2xsRWxlbWVudDtcbiAgICBzdGF0ZS5ldmVudHNFbmFibGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdCB3aWxsIGFkZCByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgc3RhcnQgcmVjYWxjdWxhdGluZ1xuICAgKiBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgKi9cbiAgZnVuY3Rpb24gZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBzZXR1cEV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMsIHRoaXMuc3RhdGUsIHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIHN0YXRlKSB7XG4gICAgLy8gUmVtb3ZlIHJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgICBnZXRXaW5kb3cocmVmZXJlbmNlKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG5cbiAgICAvLyBSZW1vdmUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gICAgc3RhdGUuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG4gICAgfSk7XG5cbiAgICAvLyBSZXNldCBzdGF0ZVxuICAgIHN0YXRlLnVwZGF0ZUJvdW5kID0gbnVsbDtcbiAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0gW107XG4gICAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IG51bGw7XG4gICAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGZhbHNlO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdCB3aWxsIHJlbW92ZSByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgd29uJ3QgcmVjYWxjdWxhdGUgcG9wcGVyIHBvc2l0aW9uXG4gICAqIHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLiBJdCBhbHNvIHdvbid0IHRyaWdnZXIgYG9uVXBkYXRlYCBjYWxsYmFjayBhbnltb3JlLFxuICAgKiB1bmxlc3MgeW91IGNhbGwgYHVwZGF0ZWAgbWV0aG9kIG1hbnVhbGx5LlxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG4gIGZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICAgIHRoaXMuc3RhdGUgPSByZW1vdmVFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRlbGxzIGlmIGEgZ2l2ZW4gaW5wdXQgaXMgYSBudW1iZXJcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBwYXJhbSB7Kn0gaW5wdXQgdG8gY2hlY2tcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gICAgcmV0dXJuIG4gIT09ICcnICYmICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIHN0eWxlIHRvXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAgICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHZhciB1bml0ID0gJyc7XG4gICAgICAvLyBhZGQgdW5pdCBpZiB0aGUgdmFsdWUgaXMgbnVtZXJpYyBhbmQgaXMgb25lIG9mIHRoZSBmb2xsb3dpbmdcbiAgICAgIGlmIChbJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHByb3ApICE9PSAtMSAmJiBpc051bWVyaWMoc3R5bGVzW3Byb3BdKSkge1xuICAgICAgICB1bml0ID0gJ3B4JztcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF0gKyB1bml0O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBhdHRyaWJ1dGVzIHRvXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAgICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgICBpZiAodmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3AsIGF0dHJpYnV0ZXNbcHJvcF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICAgKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5zdHlsZXMgLSBMaXN0IG9mIHN0eWxlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuYXR0cmlidXRlcyAtIExpc3Qgb2YgYXR0cmlidXRlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2FtZSBkYXRhIG9iamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlTdHlsZShkYXRhKSB7XG4gICAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuc3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgICAvLyBpbiB0aGlzIHdheSB3ZSBjYW4gbWFrZSB0aGUgM3JkIHBhcnR5IG1vZGlmaWVycyBhZGQgY3VzdG9tIHN0eWxlcyB0byBpdFxuICAgIC8vIEJlIGF3YXJlLCBtb2RpZmllcnMgY291bGQgb3ZlcnJpZGUgdGhlIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgcHJldmlvdXNcbiAgICAvLyBsaW5lcyBvZiB0aGlzIG1vZGlmaWVyIVxuICAgIHNldFN0eWxlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5zdHlsZXMpO1xuXG4gICAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuYXR0cmlidXRlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gICAgLy8gdGhleSB3aWxsIGJlIHNldCBhcyBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgICBzZXRBdHRyaWJ1dGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmF0dHJpYnV0ZXMpO1xuXG4gICAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGRlZmluZWQgYW5kIGFycm93U3R5bGVzIGhhcyBzb21lIHByb3BlcnRpZXNcbiAgICBpZiAoZGF0YS5hcnJvd0VsZW1lbnQgJiYgT2JqZWN0LmtleXMoZGF0YS5hcnJvd1N0eWxlcykubGVuZ3RoKSB7XG4gICAgICBzZXRTdHlsZXMoZGF0YS5hcnJvd0VsZW1lbnQsIGRhdGEuYXJyb3dTdHlsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgeC1wbGFjZW1lbnQgYXR0cmlidXRlIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkXG4gICAqIHRvIGFkZCBtYXJnaW5zIHRvIHRoZSBwb3BwZXIgbWFyZ2lucyBuZWVkcyB0byBiZSBjYWxjdWxhdGVkIHRvIGdldCB0aGVcbiAgICogY29ycmVjdCBwb3BwZXIgb2Zmc2V0cy5cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLm1vZGlmaWVyc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBQb3BwZXIuanMgb3B0aW9uc1xuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlTdHlsZU9uTG9hZChyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCBzdGF0ZSkge1xuICAgIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICAgIHZhciByZWZlcmVuY2VPZmZzZXRzID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMucG9zaXRpb25GaXhlZCk7XG5cbiAgICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gICAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgdmFyIHBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KG9wdGlvbnMucGxhY2VtZW50LCByZWZlcmVuY2VPZmZzZXRzLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nKTtcblxuICAgIHBvcHBlci5zZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JywgcGxhY2VtZW50KTtcblxuICAgIC8vIEFwcGx5IGBwb3NpdGlvbmAgdG8gcG9wcGVyIGJlZm9yZSBhbnl0aGluZyBlbHNlIGJlY2F1c2VcbiAgICAvLyB3aXRob3V0IHRoZSBwb3NpdGlvbiBhcHBsaWVkIHdlIGNhbid0IGd1YXJhbnRlZSBjb3JyZWN0IGNvbXB1dGF0aW9uc1xuICAgIHNldFN0eWxlcyhwb3BwZXIsIHsgcG9zaXRpb246IG9wdGlvbnMucG9zaXRpb25GaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnIH0pO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICAgKiBAYXJndW1lbnQge0Jvb2xlYW59IHNob3VsZFJvdW5kIC0gSWYgdGhlIG9mZnNldHMgc2hvdWxkIGJlIHJvdW5kZWQgYXQgYWxsXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwb3BwZXIncyBwb3NpdGlvbiBvZmZzZXRzIHJvdW5kZWRcbiAgICpcbiAgICogVGhlIHRhbGUgb2YgcGl4ZWwtcGVyZmVjdCBwb3NpdGlvbmluZy4gSXQncyBzdGlsbCBub3QgMTAwJSBwZXJmZWN0LCBidXQgYXNcbiAgICogZ29vZCBhcyBpdCBjYW4gYmUgd2l0aGluIHJlYXNvbi5cbiAgICogRGlzY3Vzc2lvbiBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9wdWxsLzcxNVxuICAgKlxuICAgKiBMb3cgRFBJIHNjcmVlbnMgY2F1c2UgYSBwb3BwZXIgdG8gYmUgYmx1cnJ5IGlmIG5vdCB1c2luZyBmdWxsIHBpeGVscyAoU2FmYXJpXG4gICAqIGFzIHdlbGwgb24gSGlnaCBEUEkgc2NyZWVucykuXG4gICAqXG4gICAqIEZpcmVmb3ggcHJlZmVycyBubyByb3VuZGluZyBmb3IgcG9zaXRpb25pbmcgYW5kIGRvZXMgbm90IGhhdmUgYmx1cnJpbmVzcyBvblxuICAgKiBoaWdoIERQSSBzY3JlZW5zLlxuICAgKlxuICAgKiBPbmx5IGhvcml6b250YWwgcGxhY2VtZW50IGFuZCBsZWZ0L3JpZ2h0IHZhbHVlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRSb3VuZGVkT2Zmc2V0cyhkYXRhLCBzaG91bGRSb3VuZCkge1xuICAgIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG4gICAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZCxcbiAgICAgICAgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4gICAgdmFyIG5vUm91bmQgPSBmdW5jdGlvbiBub1JvdW5kKHYpIHtcbiAgICAgIHJldHVybiB2O1xuICAgIH07XG5cbiAgICB2YXIgcmVmZXJlbmNlV2lkdGggPSByb3VuZChyZWZlcmVuY2Uud2lkdGgpO1xuICAgIHZhciBwb3BwZXJXaWR0aCA9IHJvdW5kKHBvcHBlci53aWR0aCk7XG5cbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoZGF0YS5wbGFjZW1lbnQpICE9PSAtMTtcbiAgICB2YXIgaXNWYXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5pbmRleE9mKCctJykgIT09IC0xO1xuICAgIHZhciBzYW1lV2lkdGhQYXJpdHkgPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IHBvcHBlcldpZHRoICUgMjtcbiAgICB2YXIgYm90aE9kZFdpZHRoID0gcmVmZXJlbmNlV2lkdGggJSAyID09PSAxICYmIHBvcHBlcldpZHRoICUgMiA9PT0gMTtcblxuICAgIHZhciBob3Jpem9udGFsVG9JbnRlZ2VyID0gIXNob3VsZFJvdW5kID8gbm9Sb3VuZCA6IGlzVmVydGljYWwgfHwgaXNWYXJpYXRpb24gfHwgc2FtZVdpZHRoUGFyaXR5ID8gcm91bmQgOiBmbG9vcjtcbiAgICB2YXIgdmVydGljYWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogcm91bmQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogaG9yaXpvbnRhbFRvSW50ZWdlcihib3RoT2RkV2lkdGggJiYgIWlzVmFyaWF0aW9uICYmIHNob3VsZFJvdW5kID8gcG9wcGVyLmxlZnQgLSAxIDogcG9wcGVyLmxlZnQpLFxuICAgICAgdG9wOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIudG9wKSxcbiAgICAgIGJvdHRvbTogdmVydGljYWxUb0ludGVnZXIocG9wcGVyLmJvdHRvbSksXG4gICAgICByaWdodDogaG9yaXpvbnRhbFRvSW50ZWdlcihwb3BwZXIucmlnaHQpXG4gICAgfTtcbiAgfVxuXG4gIHZhciBpc0ZpcmVmb3ggPSBpc0Jyb3dzZXIgJiYgL0ZpcmVmb3gvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICAgKi9cbiAgZnVuY3Rpb24gY29tcHV0ZVN0eWxlKGRhdGEsIG9wdGlvbnMpIHtcbiAgICB2YXIgeCA9IG9wdGlvbnMueCxcbiAgICAgICAgeSA9IG9wdGlvbnMueTtcbiAgICB2YXIgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICAgIC8vIFJlbW92ZSB0aGlzIGxlZ2FjeSBzdXBwb3J0IGluIFBvcHBlci5qcyB2MlxuXG4gICAgdmFyIGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09ICdhcHBseVN0eWxlJztcbiAgICB9KS5ncHVBY2NlbGVyYXRpb247XG4gICAgaWYgKGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkc6IGBncHVBY2NlbGVyYXRpb25gIG9wdGlvbiBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllciBhbmQgd2lsbCBub3QgYmUgc3VwcG9ydGVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBQb3BwZXIuanMhJyk7XG4gICAgfVxuICAgIHZhciBncHVBY2NlbGVyYXRpb24gPSBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCA/IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA6IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uO1xuXG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gICAgdmFyIG9mZnNldFBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcblxuICAgIC8vIFN0eWxlc1xuICAgIHZhciBzdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogcG9wcGVyLnBvc2l0aW9uXG4gICAgfTtcblxuICAgIHZhciBvZmZzZXRzID0gZ2V0Um91bmRlZE9mZnNldHMoZGF0YSwgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPCAyIHx8ICFpc0ZpcmVmb3gpO1xuXG4gICAgdmFyIHNpZGVBID0geCA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nO1xuICAgIHZhciBzaWRlQiA9IHkgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG4gICAgLy8gaWYgZ3B1QWNjZWxlcmF0aW9uIGlzIHNldCB0byBgdHJ1ZWAgYW5kIHRyYW5zZm9ybSBpcyBzdXBwb3J0ZWQsXG4gICAgLy8gIHdlIHVzZSBgdHJhbnNsYXRlM2RgIHRvIGFwcGx5IHRoZSBwb3NpdGlvbiB0byB0aGUgcG9wcGVyIHdlXG4gICAgLy8gYXV0b21hdGljYWxseSB1c2UgdGhlIHN1cHBvcnRlZCBwcmVmaXhlZCB2ZXJzaW9uIGlmIG5lZWRlZFxuICAgIHZhciBwcmVmaXhlZFByb3BlcnR5ID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcblxuICAgIC8vIG5vdywgbGV0J3MgbWFrZSBhIHN0ZXAgYmFjayBhbmQgbG9vayBhdCB0aGlzIGNvZGUgY2xvc2VseSAod3RmPylcbiAgICAvLyBJZiB0aGUgY29udGVudCBvZiB0aGUgcG9wcGVyIGdyb3dzIG9uY2UgaXQncyBiZWVuIHBvc2l0aW9uZWQsIGl0XG4gICAgLy8gbWF5IGhhcHBlbiB0aGF0IHRoZSBwb3BwZXIgZ2V0cyBtaXNwbGFjZWQgYmVjYXVzZSBvZiB0aGUgbmV3IGNvbnRlbnRcbiAgICAvLyBvdmVyZmxvd2luZyBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICAvLyBUbyBhdm9pZCB0aGlzIHByb2JsZW0sIHdlIHByb3ZpZGUgdHdvIG9wdGlvbnMgKHggYW5kIHkpLCB3aGljaCBhbGxvd1xuICAgIC8vIHRoZSBjb25zdW1lciB0byBkZWZpbmUgdGhlIG9mZnNldCBvcmlnaW4uXG4gICAgLy8gSWYgd2UgcG9zaXRpb24gYSBwb3BwZXIgb24gdG9wIG9mIGEgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIGNhbiBzZXRcbiAgICAvLyBgeGAgdG8gYHRvcGAgdG8gbWFrZSB0aGUgcG9wcGVyIGdyb3cgdG93YXJkcyBpdHMgdG9wIGluc3RlYWQgb2ZcbiAgICAvLyBpdHMgYm90dG9tLlxuICAgIHZhciBsZWZ0ID0gdm9pZCAwLFxuICAgICAgICB0b3AgPSB2b2lkIDA7XG4gICAgaWYgKHNpZGVBID09PSAnYm90dG9tJykge1xuICAgICAgLy8gd2hlbiBvZmZzZXRQYXJlbnQgaXMgPGh0bWw+IHRoZSBwb3NpdGlvbmluZyBpcyByZWxhdGl2ZSB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gKGV4Y2x1ZGluZyB0aGUgc2Nyb2xsYmFyKVxuICAgICAgLy8gYW5kIG5vdCB0aGUgYm90dG9tIG9mIHRoZSBodG1sIGVsZW1lbnRcbiAgICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgICB0b3AgPSAtb2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9wID0gLW9mZnNldFBhcmVudFJlY3QuaGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcCA9IG9mZnNldHMudG9wO1xuICAgIH1cbiAgICBpZiAoc2lkZUIgPT09ICdyaWdodCcpIHtcbiAgICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudC5jbGllbnRXaWR0aCArIG9mZnNldHMucmlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudFJlY3Qud2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gb2Zmc2V0cy5sZWZ0O1xuICAgIH1cbiAgICBpZiAoZ3B1QWNjZWxlcmF0aW9uICYmIHByZWZpeGVkUHJvcGVydHkpIHtcbiAgICAgIHN0eWxlc1twcmVmaXhlZFByb3BlcnR5XSA9ICd0cmFuc2xhdGUzZCgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCwgMCknO1xuICAgICAgc3R5bGVzW3NpZGVBXSA9IDA7XG4gICAgICBzdHlsZXNbc2lkZUJdID0gMDtcbiAgICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aHdlcmlzZSwgd2UgdXNlIHRoZSBzdGFuZGFyZCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCBhbmQgYHJpZ2h0YCBwcm9wZXJ0aWVzXG4gICAgICB2YXIgaW52ZXJ0VG9wID0gc2lkZUEgPT09ICdib3R0b20nID8gLTEgOiAxO1xuICAgICAgdmFyIGludmVydExlZnQgPSBzaWRlQiA9PT0gJ3JpZ2h0JyA/IC0xIDogMTtcbiAgICAgIHN0eWxlc1tzaWRlQV0gPSB0b3AgKiBpbnZlcnRUb3A7XG4gICAgICBzdHlsZXNbc2lkZUJdID0gbGVmdCAqIGludmVydExlZnQ7XG4gICAgICBzdHlsZXMud2lsbENoYW5nZSA9IHNpZGVBICsgJywgJyArIHNpZGVCO1xuICAgIH1cblxuICAgIC8vIEF0dHJpYnV0ZXNcbiAgICB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICAgICd4LXBsYWNlbWVudCc6IGRhdGEucGxhY2VtZW50XG4gICAgfTtcblxuICAgIC8vIFVwZGF0ZSBgZGF0YWAgYXR0cmlidXRlcywgc3R5bGVzIGFuZCBhcnJvd1N0eWxlc1xuICAgIGRhdGEuYXR0cmlidXRlcyA9IF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBkYXRhLmF0dHJpYnV0ZXMpO1xuICAgIGRhdGEuc3R5bGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcywgZGF0YS5zdHlsZXMpO1xuICAgIGRhdGEuYXJyb3dTdHlsZXMgPSBfZXh0ZW5kcyh7fSwgZGF0YS5vZmZzZXRzLmFycm93LCBkYXRhLmFycm93U3R5bGVzKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGRlcGVuZHMgZnJvbSBhbm90aGVyIG9uZS48YnIgLz5cbiAgICogSXQgY2hlY2tzIGlmIHRoZSBuZWVkZWQgbW9kaWZpZXIgaXMgbGlzdGVkIGFuZCBlbmFibGVkLlxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzIC0gbGlzdCBvZiBtb2RpZmllcnNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RpbmdOYW1lIC0gbmFtZSBvZiByZXF1ZXN0aW5nIG1vZGlmaWVyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0ZWROYW1lIC0gbmFtZSBvZiByZXF1ZXN0ZWQgbW9kaWZpZXJcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc01vZGlmaWVyUmVxdWlyZWQobW9kaWZpZXJzLCByZXF1ZXN0aW5nTmFtZSwgcmVxdWVzdGVkTmFtZSkge1xuICAgIHZhciByZXF1ZXN0aW5nID0gZmluZChtb2RpZmllcnMsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAgIHJldHVybiBuYW1lID09PSByZXF1ZXN0aW5nTmFtZTtcbiAgICB9KTtcblxuICAgIHZhciBpc1JlcXVpcmVkID0gISFyZXF1ZXN0aW5nICYmIG1vZGlmaWVycy5zb21lKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09IHJlcXVlc3RlZE5hbWUgJiYgbW9kaWZpZXIuZW5hYmxlZCAmJiBtb2RpZmllci5vcmRlciA8IHJlcXVlc3Rpbmcub3JkZXI7XG4gICAgfSk7XG5cbiAgICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICAgIHZhciBfcmVxdWVzdGluZyA9ICdgJyArIHJlcXVlc3RpbmdOYW1lICsgJ2AnO1xuICAgICAgdmFyIHJlcXVlc3RlZCA9ICdgJyArIHJlcXVlc3RlZE5hbWUgKyAnYCc7XG4gICAgICBjb25zb2xlLndhcm4ocmVxdWVzdGVkICsgJyBtb2RpZmllciBpcyByZXF1aXJlZCBieSAnICsgX3JlcXVlc3RpbmcgKyAnIG1vZGlmaWVyIGluIG9yZGVyIHRvIHdvcmssIGJlIHN1cmUgdG8gaW5jbHVkZSBpdCBiZWZvcmUgJyArIF9yZXF1ZXN0aW5nICsgJyEnKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzUmVxdWlyZWQ7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gICAqL1xuICBmdW5jdGlvbiBhcnJvdyhkYXRhLCBvcHRpb25zKSB7XG4gICAgdmFyIF9kYXRhJG9mZnNldHMkYXJyb3c7XG5cbiAgICAvLyBhcnJvdyBkZXBlbmRzIG9uIGtlZXBUb2dldGhlciBpbiBvcmRlciB0byB3b3JrXG4gICAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdhcnJvdycsICdrZWVwVG9nZXRoZXInKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblxuICAgIC8vIGlmIGFycm93RWxlbWVudCBpcyBhIHN0cmluZywgc3VwcG9zZSBpdCdzIGEgQ1NTIHNlbGVjdG9yXG4gICAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhcnJvd0VsZW1lbnQgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAgIC8vIGlmIGFycm93RWxlbWVudCBpcyBub3QgZm91bmQsIGRvbid0IHJ1biB0aGUgbW9kaWZpZXJcbiAgICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGUgYXJyb3dFbGVtZW50IGlzbid0IGEgcXVlcnkgc2VsZWN0b3Igd2UgbXVzdCBjaGVjayB0aGF0IHRoZVxuICAgICAgLy8gcHJvdmlkZWQgRE9NIG5vZGUgaXMgY2hpbGQgb2YgaXRzIHBvcHBlciBub2RlXG4gICAgICBpZiAoIWRhdGEuaW5zdGFuY2UucG9wcGVyLmNvbnRhaW5zKGFycm93RWxlbWVudCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgYXJyb3cuZWxlbWVudGAgbXVzdCBiZSBjaGlsZCBvZiBpdHMgcG9wcGVyIGVsZW1lbnQhJyk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICAgIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgc2lkZUNhcGl0YWxpemVkID0gaXNWZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnO1xuICAgIHZhciBzaWRlID0gc2lkZUNhcGl0YWxpemVkLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGFsdFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgdmFyIG9wU2lkZSA9IGlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gICAgdmFyIGFycm93RWxlbWVudFNpemUgPSBnZXRPdXRlclNpemVzKGFycm93RWxlbWVudClbbGVuXTtcblxuICAgIC8vXG4gICAgLy8gZXh0ZW5kcyBrZWVwVG9nZXRoZXIgYmVoYXZpb3IgbWFraW5nIHN1cmUgdGhlIHBvcHBlciBhbmQgaXRzXG4gICAgLy8gcmVmZXJlbmNlIGhhdmUgZW5vdWdoIHBpeGVscyBpbiBjb25qdW5jdGlvblxuICAgIC8vXG5cbiAgICAvLyB0b3AvbGVmdCBzaWRlXG4gICAgaWYgKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8IHBvcHBlcltzaWRlXSkge1xuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtPSBwb3BwZXJbc2lkZV0gLSAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcbiAgICB9XG4gICAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcbiAgICBpZiAocmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSA+IHBvcHBlcltvcFNpZGVdKSB7XG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdICs9IHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgLSBwb3BwZXJbb3BTaWRlXTtcbiAgICB9XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG5cbiAgICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgcG9wcGVyXG4gICAgdmFyIGNlbnRlciA9IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHBvcHBlciBvZmZzZXRzXG4gICAgLy8gdGFrZSBwb3BwZXIgbWFyZ2luIGluIGFjY291bnQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoaXMgaW5mbyBhdmFpbGFibGVcbiAgICB2YXIgY3NzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgICB2YXIgcG9wcGVyTWFyZ2luU2lkZSA9IHBhcnNlRmxvYXQoY3NzWydtYXJnaW4nICsgc2lkZUNhcGl0YWxpemVkXSwgMTApO1xuICAgIHZhciBwb3BwZXJCb3JkZXJTaWRlID0gcGFyc2VGbG9hdChjc3NbJ2JvcmRlcicgKyBzaWRlQ2FwaXRhbGl6ZWQgKyAnV2lkdGgnXSwgMTApO1xuICAgIHZhciBzaWRlVmFsdWUgPSBjZW50ZXIgLSBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC0gcG9wcGVyTWFyZ2luU2lkZSAtIHBvcHBlckJvcmRlclNpZGU7XG5cbiAgICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyBwb3BwZXJcbiAgICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbihwb3BwZXJbbGVuXSAtIGFycm93RWxlbWVudFNpemUsIHNpZGVWYWx1ZSksIDApO1xuXG4gICAgZGF0YS5hcnJvd0VsZW1lbnQgPSBhcnJvd0VsZW1lbnQ7XG4gICAgZGF0YS5vZmZzZXRzLmFycm93ID0gKF9kYXRhJG9mZnNldHMkYXJyb3cgPSB7fSwgZGVmaW5lUHJvcGVydHkoX2RhdGEkb2Zmc2V0cyRhcnJvdywgc2lkZSwgTWF0aC5yb3VuZChzaWRlVmFsdWUpKSwgZGVmaW5lUHJvcGVydHkoX2RhdGEkb2Zmc2V0cyRhcnJvdywgYWx0U2lkZSwgJycpLCBfZGF0YSRvZmZzZXRzJGFycm93KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IHZhcmlhdGlvblxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudCB2YXJpYXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbikge1xuICAgIGlmICh2YXJpYXRpb24gPT09ICdlbmQnKSB7XG4gICAgICByZXR1cm4gJ3N0YXJ0JztcbiAgICB9IGVsc2UgaWYgKHZhcmlhdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgICAgcmV0dXJuICdlbmQnO1xuICAgIH1cbiAgICByZXR1cm4gdmFyaWF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gICAqIFZhbGlkIHBsYWNlbWVudHMgYXJlOlxuICAgKiAtIGBhdXRvYFxuICAgKiAtIGB0b3BgXG4gICAqIC0gYHJpZ2h0YFxuICAgKiAtIGBib3R0b21gXG4gICAqIC0gYGxlZnRgXG4gICAqXG4gICAqIEVhY2ggcGxhY2VtZW50IGNhbiBoYXZlIGEgdmFyaWF0aW9uIGZyb20gdGhpcyBsaXN0OlxuICAgKiAtIGAtc3RhcnRgXG4gICAqIC0gYC1lbmRgXG4gICAqXG4gICAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICAgKiB3cml0dGVuIGxhbmd1YWdlcy4gSG9yaXpvbnRhbGx5IChgdG9wYCBhbmQgYGJvdHRvbWApLCBgc3RhcnRgIGlzIGxlZnQgYW5kIGBlbmRgXG4gICAqIGlzIHJpZ2h0LjxiciAvPlxuICAgKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICAgKlxuICAgKiBTb21lIHZhbGlkIGV4YW1wbGVzIGFyZTpcbiAgICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gICAqIC0gYHJpZ2h0LXN0YXJ0YCAob24gcmlnaHQgb2YgcmVmZXJlbmNlLCB0b3AgYWxpZ25lZClcbiAgICogLSBgYm90dG9tYCAob24gYm90dG9tLCBjZW50ZXJlZClcbiAgICogLSBgYXV0by1lbmRgIChvbiB0aGUgc2lkZSB3aXRoIG1vcmUgc3BhY2UgYXZhaWxhYmxlLCBhbGlnbm1lbnQgZGVwZW5kcyBieSBwbGFjZW1lbnQpXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQHR5cGUge0FycmF5fVxuICAgKiBAZW51bSB7U3RyaW5nfVxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1ldGhvZCBwbGFjZW1lbnRzXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG4gIHZhciBwbGFjZW1lbnRzID0gWydhdXRvLXN0YXJ0JywgJ2F1dG8nLCAnYXV0by1lbmQnLCAndG9wLXN0YXJ0JywgJ3RvcCcsICd0b3AtZW5kJywgJ3JpZ2h0LXN0YXJ0JywgJ3JpZ2h0JywgJ3JpZ2h0LWVuZCcsICdib3R0b20tZW5kJywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnbGVmdC1lbmQnLCAnbGVmdCcsICdsZWZ0LXN0YXJ0J107XG5cbiAgLy8gR2V0IHJpZCBvZiBgYXV0b2AgYGF1dG8tc3RhcnRgIGFuZCBgYXV0by1lbmRgXG4gIHZhciB2YWxpZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLnNsaWNlKDMpO1xuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbml0aWFsIHBsYWNlbWVudCwgcmV0dXJucyBhbGwgdGhlIHN1YnNlcXVlbnQgcGxhY2VtZW50c1xuICAgKiBjbG9ja3dpc2UgKG9yIGNvdW50ZXItY2xvY2t3aXNlKS5cbiAgICpcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgLSBBIHZhbGlkIHBsYWNlbWVudCAoaXQgYWNjZXB0cyB2YXJpYXRpb25zKVxuICAgKiBAYXJndW1lbnQge0Jvb2xlYW59IGNvdW50ZXIgLSBTZXQgdG8gdHJ1ZSB0byB3YWxrIHRoZSBwbGFjZW1lbnRzIGNvdW50ZXJjbG9ja3dpc2VcbiAgICogQHJldHVybnMge0FycmF5fSBwbGFjZW1lbnRzIGluY2x1ZGluZyB0aGVpciB2YXJpYXRpb25zXG4gICAqL1xuICBmdW5jdGlvbiBjbG9ja3dpc2UocGxhY2VtZW50KSB7XG4gICAgdmFyIGNvdW50ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gICAgdmFyIGluZGV4ID0gdmFsaWRQbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KTtcbiAgICB2YXIgYXJyID0gdmFsaWRQbGFjZW1lbnRzLnNsaWNlKGluZGV4ICsgMSkuY29uY2F0KHZhbGlkUGxhY2VtZW50cy5zbGljZSgwLCBpbmRleCkpO1xuICAgIHJldHVybiBjb3VudGVyID8gYXJyLnJldmVyc2UoKSA6IGFycjtcbiAgfVxuXG4gIHZhciBCRUhBVklPUlMgPSB7XG4gICAgRkxJUDogJ2ZsaXAnLFxuICAgIENMT0NLV0lTRTogJ2Nsb2Nrd2lzZScsXG4gICAgQ09VTlRFUkNMT0NLV0lTRTogJ2NvdW50ZXJjbG9ja3dpc2UnXG4gIH07XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICAgKi9cbiAgZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gICAgLy8gaWYgYGlubmVyYCBtb2RpZmllciBpcyBlbmFibGVkLCB3ZSBjYW4ndCB1c2UgdGhlIGBmbGlwYCBtb2RpZmllclxuICAgIGlmIChpc01vZGlmaWVyRW5hYmxlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2lubmVyJykpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmZsaXBwZWQgJiYgZGF0YS5wbGFjZW1lbnQgPT09IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQpIHtcbiAgICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQsIGRhdGEucG9zaXRpb25GaXhlZCk7XG5cbiAgICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICB2YXIgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICAgIHZhciB2YXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzFdIHx8ICcnO1xuXG4gICAgdmFyIGZsaXBPcmRlciA9IFtdO1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmJlaGF2aW9yKSB7XG4gICAgICBjYXNlIEJFSEFWSU9SUy5GTElQOlxuICAgICAgICBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBwbGFjZW1lbnRPcHBvc2l0ZV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCRUhBVklPUlMuQ0xPQ0tXSVNFOlxuICAgICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJFSEFWSU9SUy5DT1VOVEVSQ0xPQ0tXSVNFOlxuICAgICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50LCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmbGlwT3JkZXIgPSBvcHRpb25zLmJlaGF2aW9yO1xuICAgIH1cblxuICAgIGZsaXBPcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgICAgaWYgKHBsYWNlbWVudCAhPT0gc3RlcCB8fCBmbGlwT3JkZXIubGVuZ3RoID09PSBpbmRleCArIDEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gICAgICBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICAgIHZhciBwb3BwZXJPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcbiAgICAgIHZhciByZWZPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcblxuICAgICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgbWF5IGNvbnRhaW4gZGVjaW1hbHMgd2UgYXJlIG5vdCBnb2luZyB0byBjb25zaWRlciBoZXJlXG4gICAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgICAgdmFyIG92ZXJsYXBzUmVmID0gcGxhY2VtZW50ID09PSAnbGVmdCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihyZWZPZmZzZXRzLmxlZnQpIHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IocmVmT2Zmc2V0cy5yaWdodCkgfHwgcGxhY2VtZW50ID09PSAndG9wJyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihyZWZPZmZzZXRzLnRvcCkgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihyZWZPZmZzZXRzLmJvdHRvbSk7XG5cbiAgICAgIHZhciBvdmVyZmxvd3NMZWZ0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKGJvdW5kYXJpZXMubGVmdCk7XG4gICAgICB2YXIgb3ZlcmZsb3dzUmlnaHQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKGJvdW5kYXJpZXMucmlnaHQpO1xuICAgICAgdmFyIG92ZXJmbG93c1RvcCA9IGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKGJvdW5kYXJpZXMudG9wKTtcbiAgICAgIHZhciBvdmVyZmxvd3NCb3R0b20gPSBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICAgIHZhciBvdmVyZmxvd3NCb3VuZGFyaWVzID0gcGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQgfHwgcGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3AgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b207XG5cbiAgICAgIC8vIGZsaXAgdGhlIHZhcmlhdGlvbiBpZiByZXF1aXJlZFxuICAgICAgdmFyIGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICAgICAgdmFyIGZsaXBwZWRWYXJpYXRpb24gPSAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnMgJiYgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0xlZnQgfHwgaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1JpZ2h0IHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NUb3AgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcyB8fCBmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAgIC8vIHRoaXMgYm9vbGVhbiB0byBkZXRlY3QgYW55IGZsaXAgbG9vcFxuICAgICAgICBkYXRhLmZsaXBwZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzKSB7XG4gICAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgICAgIHZhcmlhdGlvbiA9IGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLnBsYWNlbWVudCA9IHBsYWNlbWVudCArICh2YXJpYXRpb24gPyAnLScgKyB2YXJpYXRpb24gOiAnJyk7XG5cbiAgICAgICAgLy8gdGhpcyBvYmplY3QgY29udGFpbnMgYHBvc2l0aW9uYCwgd2Ugd2FudCB0byBwcmVzZXJ2ZSBpdCBhbG9uZyB3aXRoXG4gICAgICAgIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnR5IHdlIG1heSBhZGQgaW4gdGhlIGZ1dHVyZVxuICAgICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gX2V4dGVuZHMoe30sIGRhdGEub2Zmc2V0cy5wb3BwZXIsIGdldFBvcHBlck9mZnNldHMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIGRhdGEucGxhY2VtZW50KSk7XG5cbiAgICAgICAgZGF0YSA9IHJ1bk1vZGlmaWVycyhkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZGF0YSwgJ2ZsaXAnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICAgKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAgICovXG4gIGZ1bmN0aW9uIGtlZXBUb2dldGhlcihkYXRhKSB7XG4gICAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICAgIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICAgIHZhciBzaWRlID0gaXNWZXJ0aWNhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcbiAgICB2YXIgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgIHZhciBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgICBpZiAocG9wcGVyW3NpZGVdIDwgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pKSB7XG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPSBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkgLSBwb3BwZXJbbWVhc3VyZW1lbnRdO1xuICAgIH1cbiAgICBpZiAocG9wcGVyW29wU2lkZV0gPiBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pKSB7XG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPSBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdmFsdWUgKyB1bml0IGludG8gYSBweCB2YWx1ZSBudW1iZXJcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAgICogQHByaXZhdGVcbiAgICogQGFyZ3VtZW50IHtTdHJpbmd9IHN0ciAtIFZhbHVlICsgdW5pdCBzdHJpbmdcbiAgICogQGFyZ3VtZW50IHtTdHJpbmd9IG1lYXN1cmVtZW50IC0gYGhlaWdodGAgb3IgYHdpZHRoYFxuICAgKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICAgKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ31cbiAgICogVmFsdWUgaW4gcGl4ZWxzLCBvciBvcmlnaW5hbCBzdHJpbmcgaWYgbm8gdmFsdWVzIHdlcmUgZXh0cmFjdGVkXG4gICAqL1xuICBmdW5jdGlvbiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpIHtcbiAgICAvLyBzZXBhcmF0ZSB2YWx1ZSBmcm9tIHVuaXRcbiAgICB2YXIgc3BsaXQgPSBzdHIubWF0Y2goLygoPzpcXC18XFwrKT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuICAgIHZhciB2YWx1ZSA9ICtzcGxpdFsxXTtcbiAgICB2YXIgdW5pdCA9IHNwbGl0WzJdO1xuXG4gICAgLy8gSWYgaXQncyBub3QgYSBudW1iZXIgaXQncyBhbiBvcGVyYXRvciwgSSBndWVzc1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgaWYgKHVuaXQuaW5kZXhPZignJScpID09PSAwKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHZvaWQgMDtcbiAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICBjYXNlICclcCc6XG4gICAgICAgICAgZWxlbWVudCA9IHBvcHBlck9mZnNldHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyUnOlxuICAgICAgICBjYXNlICclcic6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZWxlbWVudCA9IHJlZmVyZW5jZU9mZnNldHM7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdChlbGVtZW50KTtcbiAgICAgIHJldHVybiByZWN0W21lYXN1cmVtZW50XSAvIDEwMCAqIHZhbHVlO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3ZoJyB8fCB1bml0ID09PSAndncnKSB7XG4gICAgICAvLyBpZiBpcyBhIHZoIG9yIHZ3LCB3ZSBjYWxjdWxhdGUgdGhlIHNpemUgYmFzZWQgb24gdGhlIHZpZXdwb3J0XG4gICAgICB2YXIgc2l6ZSA9IHZvaWQgMDtcbiAgICAgIGlmICh1bml0ID09PSAndmgnKSB7XG4gICAgICAgIHNpemUgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaXplIC8gMTAwICogdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGlzIGFuIGV4cGxpY2l0IHBpeGVsIHVuaXQsIHdlIGdldCByaWQgb2YgdGhlIHVuaXQgYW5kIGtlZXAgdGhlIHZhbHVlXG4gICAgICAvLyBpZiBpcyBhbiBpbXBsaWNpdCB1bml0LCBpdCdzIHB4LCBhbmQgd2UgcmV0dXJuIGp1c3QgdGhlIHZhbHVlXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGFuIGBvZmZzZXRgIHN0cmluZyB0byBleHRyYXBvbGF0ZSBgeGAgYW5kIGB5YCBudW1lcmljIG9mZnNldHMuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gICAqIEBwcml2YXRlXG4gICAqIEBhcmd1bWVudCB7U3RyaW5nfSBvZmZzZXRcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAgICogQGFyZ3VtZW50IHtTdHJpbmd9IGJhc2VQbGFjZW1lbnRcbiAgICogQHJldHVybnMge0FycmF5fSBhIHR3byBjZWxscyBhcnJheSB3aXRoIHggYW5kIHkgb2Zmc2V0cyBpbiBudW1iZXJzXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMsIGJhc2VQbGFjZW1lbnQpIHtcbiAgICB2YXIgb2Zmc2V0cyA9IFswLCAwXTtcblxuICAgIC8vIFVzZSBoZWlnaHQgaWYgcGxhY2VtZW50IGlzIGxlZnQgb3IgcmlnaHQgYW5kIGluZGV4IGlzIDAgb3RoZXJ3aXNlIHVzZSB3aWR0aFxuICAgIC8vIGluIHRoaXMgd2F5IHRoZSBmaXJzdCBvZmZzZXQgd2lsbCB1c2UgYW4gYXhpcyBhbmQgdGhlIHNlY29uZCBvbmVcbiAgICAvLyB3aWxsIHVzZSB0aGUgb3RoZXIgb25lXG4gICAgdmFyIHVzZUhlaWdodCA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgLy8gU3BsaXQgdGhlIG9mZnNldCBzdHJpbmcgdG8gb2J0YWluIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzXG4gICAgLy8gVGhlIHJlZ2V4IGFkZHJlc3NlcyB2YWx1ZXMgd2l0aCB0aGUgcGx1cyBvciBtaW51cyBzaWduIGluIGZyb250ICgrMTAsIC0yMCwgZXRjKVxuICAgIHZhciBmcmFnbWVudHMgPSBvZmZzZXQuc3BsaXQoLyhcXCt8XFwtKS8pLm1hcChmdW5jdGlvbiAoZnJhZykge1xuICAgICAgcmV0dXJuIGZyYWcudHJpbSgpO1xuICAgIH0pO1xuXG4gICAgLy8gRGV0ZWN0IGlmIHRoZSBvZmZzZXQgc3RyaW5nIGNvbnRhaW5zIGEgcGFpciBvZiB2YWx1ZXMgb3IgYSBzaW5nbGUgb25lXG4gICAgLy8gdGhleSBjb3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEgb3Igc3BhY2VcbiAgICB2YXIgZGl2aWRlciA9IGZyYWdtZW50cy5pbmRleE9mKGZpbmQoZnJhZ21lbnRzLCBmdW5jdGlvbiAoZnJhZykge1xuICAgICAgcmV0dXJuIGZyYWcuc2VhcmNoKC8sfFxccy8pICE9PSAtMTtcbiAgICB9KSk7XG5cbiAgICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ09mZnNldHMgc2VwYXJhdGVkIGJ5IHdoaXRlIHNwYWNlKHMpIGFyZSBkZXByZWNhdGVkLCB1c2UgYSBjb21tYSAoLCkgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICAvLyBJZiBkaXZpZGVyIGlzIGZvdW5kLCB3ZSBkaXZpZGUgdGhlIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kcyB0byBkaXZpZGVcbiAgICAvLyB0aGVtIGJ5IG9mc2V0IFggYW5kIFkuXG4gICAgdmFyIHNwbGl0UmVnZXggPSAvXFxzKixcXHMqfFxccysvO1xuICAgIHZhciBvcHMgPSBkaXZpZGVyICE9PSAtMSA/IFtmcmFnbWVudHMuc2xpY2UoMCwgZGl2aWRlcikuY29uY2F0KFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMF1dKSwgW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVsxXV0uY29uY2F0KGZyYWdtZW50cy5zbGljZShkaXZpZGVyICsgMSkpXSA6IFtmcmFnbWVudHNdO1xuXG4gICAgLy8gQ29udmVydCB0aGUgdmFsdWVzIHdpdGggdW5pdHMgdG8gYWJzb2x1dGUgcGl4ZWxzIHRvIGFsbG93IG91ciBjb21wdXRhdGlvbnNcbiAgICBvcHMgPSBvcHMubWFwKGZ1bmN0aW9uIChvcCwgaW5kZXgpIHtcbiAgICAgIC8vIE1vc3Qgb2YgdGhlIHVuaXRzIHJlbHkgb24gdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwb3BwZXJcbiAgICAgIHZhciBtZWFzdXJlbWVudCA9IChpbmRleCA9PT0gMSA/ICF1c2VIZWlnaHQgOiB1c2VIZWlnaHQpID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgICAgdmFyIG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgICByZXR1cm4gb3BcbiAgICAgIC8vIFRoaXMgYWdncmVnYXRlcyBhbnkgYCtgIG9yIGAtYCBzaWduIHRoYXQgYXJlbid0IGNvbnNpZGVyZWQgb3BlcmF0b3JzXG4gICAgICAvLyBlLmcuOiAxMCArICs1ID0+IFsxMCwgKywgKzVdXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhW2EubGVuZ3RoIC0gMV0gPT09ICcnICYmIFsnKycsICctJ10uaW5kZXhPZihiKSAhPT0gLTEpIHtcbiAgICAgICAgICBhW2EubGVuZ3RoIC0gMV0gPSBiO1xuICAgICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJnZVdpdGhQcmV2aW91cykge1xuICAgICAgICAgIGFbYS5sZW5ndGggLSAxXSArPSBiO1xuICAgICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGEuY29uY2F0KGIpO1xuICAgICAgICB9XG4gICAgICB9LCBbXSlcbiAgICAgIC8vIEhlcmUgd2UgY29udmVydCB0aGUgc3RyaW5nIHZhbHVlcyBpbnRvIG51bWJlciB2YWx1ZXMgKGluIHB4KVxuICAgICAgLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBMb29wIHRyb3VnaCB0aGUgb2Zmc2V0cyBhcnJheXMgYW5kIGV4ZWN1dGUgdGhlIG9wZXJhdGlvbnNcbiAgICBvcHMuZm9yRWFjaChmdW5jdGlvbiAob3AsIGluZGV4KSB7XG4gICAgICBvcC5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnLCBpbmRleDIpIHtcbiAgICAgICAgaWYgKGlzTnVtZXJpYyhmcmFnKSkge1xuICAgICAgICAgIG9mZnNldHNbaW5kZXhdICs9IGZyYWcgKiAob3BbaW5kZXgyIC0gMV0gPT09ICctJyA/IC0xIDogMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvZmZzZXRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAgICogQGFyZ3VtZW50IHtOdW1iZXJ8U3RyaW5nfSBvcHRpb25zLm9mZnNldD0wXG4gICAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gICAqL1xuICBmdW5jdGlvbiBvZmZzZXQoZGF0YSwgX3JlZikge1xuICAgIHZhciBvZmZzZXQgPSBfcmVmLm9mZnNldDtcbiAgICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQsXG4gICAgICAgIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICAgIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgICB2YXIgb2Zmc2V0cyA9IHZvaWQgMDtcbiAgICBpZiAoaXNOdW1lcmljKCtvZmZzZXQpKSB7XG4gICAgICBvZmZzZXRzID0gWytvZmZzZXQsIDBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXRzID0gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYmFzZVBsYWNlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgICAgcG9wcGVyLmxlZnQgLT0gb2Zmc2V0c1sxXTtcbiAgICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMV07XG4gICAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAndG9wJykge1xuICAgICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICAgIHBvcHBlci50b3AgLT0gb2Zmc2V0c1sxXTtcbiAgICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzFdO1xuICAgIH1cblxuICAgIGRhdGEucG9wcGVyID0gcG9wcGVyO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gICAqL1xuICBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YSwgb3B0aW9ucykge1xuICAgIHZhciBib3VuZGFyaWVzRWxlbWVudCA9IG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgfHwgZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcblxuICAgIC8vIElmIG9mZnNldFBhcmVudCBpcyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIHJlYWxseSB3YW50IHRvXG4gICAgLy8gZ28gb25lIHN0ZXAgdXAgYW5kIHVzZSB0aGUgbmV4dCBvZmZzZXRQYXJlbnQgYXMgcmVmZXJlbmNlIHRvXG4gICAgLy8gYXZvaWQgdG8gbWFrZSB0aGlzIG1vZGlmaWVyIGNvbXBsZXRlbHkgdXNlbGVzcyBhbmQgbG9vayBsaWtlIGJyb2tlblxuICAgIGlmIChkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSA9PT0gYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGJvdW5kYXJpZXNFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgICAvLyByZXNldHMgdGhlIHBvcHBlcidzIHBvc2l0aW9uIHNvIHRoYXQgdGhlIGRvY3VtZW50IHNpemUgY2FuIGJlIGNhbGN1bGF0ZWQgZXhjbHVkaW5nXG4gICAgLy8gdGhlIHNpemUgb2YgdGhlIHBvcHBlciBlbGVtZW50IGl0c2VsZlxuICAgIHZhciB0cmFuc2Zvcm1Qcm9wID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgICB2YXIgcG9wcGVyU3R5bGVzID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIuc3R5bGU7IC8vIGFzc2lnbm1lbnQgdG8gaGVscCBtaW5pZmljYXRpb25cbiAgICB2YXIgdG9wID0gcG9wcGVyU3R5bGVzLnRvcCxcbiAgICAgICAgbGVmdCA9IHBvcHBlclN0eWxlcy5sZWZ0LFxuICAgICAgICB0cmFuc2Zvcm0gPSBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF07XG5cbiAgICBwb3BwZXJTdHlsZXMudG9wID0gJyc7XG4gICAgcG9wcGVyU3R5bGVzLmxlZnQgPSAnJztcbiAgICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSAnJztcblxuICAgIHZhciBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsIG9wdGlvbnMucGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQsIGRhdGEucG9zaXRpb25GaXhlZCk7XG5cbiAgICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcbiAgICBwb3BwZXJTdHlsZXMudG9wID0gdG9wO1xuICAgIHBvcHBlclN0eWxlcy5sZWZ0ID0gbGVmdDtcbiAgICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XG5cbiAgICBvcHRpb25zLmJvdW5kYXJpZXMgPSBib3VuZGFyaWVzO1xuXG4gICAgdmFyIG9yZGVyID0gb3B0aW9ucy5wcmlvcml0eTtcbiAgICB2YXIgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICAgIHZhciBjaGVjayA9IHtcbiAgICAgIHByaW1hcnk6IGZ1bmN0aW9uIHByaW1hcnkocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBvcHBlcltwbGFjZW1lbnRdO1xuICAgICAgICBpZiAocG9wcGVyW3BsYWNlbWVudF0gPCBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiYgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgocG9wcGVyW3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCBwbGFjZW1lbnQsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IGZ1bmN0aW9uIHNlY29uZGFyeShwbGFjZW1lbnQpIHtcbiAgICAgICAgdmFyIG1haW5TaWRlID0gcGxhY2VtZW50ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBvcHBlclttYWluU2lkZV07XG4gICAgICAgIGlmIChwb3BwZXJbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJiAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihwb3BwZXJbbWFpblNpZGVdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0gLSAocGxhY2VtZW50ID09PSAncmlnaHQnID8gcG9wcGVyLndpZHRoIDogcG9wcGVyLmhlaWdodCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgbWFpblNpZGUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgb3JkZXIuZm9yRWFjaChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICB2YXIgc2lkZSA9IFsnbGVmdCcsICd0b3AnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSc7XG4gICAgICBwb3BwZXIgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyLCBjaGVja1tzaWRlXShwbGFjZW1lbnQpKTtcbiAgICB9KTtcblxuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBwb3BwZXI7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICAgKi9cbiAgZnVuY3Rpb24gc2hpZnQoZGF0YSkge1xuICAgIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICAgIHZhciBzaGlmdHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gICAgLy8gaWYgc2hpZnQgc2hpZnR2YXJpYXRpb24gaXMgc3BlY2lmaWVkLCBydW4gdGhlIG1vZGlmaWVyXG4gICAgaWYgKHNoaWZ0dmFyaWF0aW9uKSB7XG4gICAgICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZSxcbiAgICAgICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcjtcblxuICAgICAgdmFyIGlzVmVydGljYWwgPSBbJ2JvdHRvbScsICd0b3AnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcbiAgICAgIHZhciBzaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICAgICAgdmFyIHNoaWZ0T2Zmc2V0cyA9IHtcbiAgICAgICAgc3RhcnQ6IGRlZmluZVByb3BlcnR5KHt9LCBzaWRlLCByZWZlcmVuY2Vbc2lkZV0pLFxuICAgICAgICBlbmQ6IGRlZmluZVByb3BlcnR5KHt9LCBzaWRlLCByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbWVhc3VyZW1lbnRdIC0gcG9wcGVyW21lYXN1cmVtZW50XSlcbiAgICAgIH07XG5cbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyLCBzaGlmdE9mZnNldHNbc2hpZnR2YXJpYXRpb25dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICAgKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAgICovXG4gIGZ1bmN0aW9uIGhpZGUoZGF0YSkge1xuICAgIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaGlkZScsICdwcmV2ZW50T3ZlcmZsb3cnKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgdmFyIHJlZlJlY3QgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuICAgIHZhciBib3VuZCA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09ICdwcmV2ZW50T3ZlcmZsb3cnO1xuICAgIH0pLmJvdW5kYXJpZXM7XG5cbiAgICBpZiAocmVmUmVjdC5ib3R0b20gPCBib3VuZC50b3AgfHwgcmVmUmVjdC5sZWZ0ID4gYm91bmQucmlnaHQgfHwgcmVmUmVjdC50b3AgPiBib3VuZC5ib3R0b20gfHwgcmVmUmVjdC5yaWdodCA8IGJvdW5kLmxlZnQpIHtcbiAgICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgICAgaWYgKGRhdGEuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5oaWRlID0gdHJ1ZTtcbiAgICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgICAgaWYgKGRhdGEuaGlkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIGRhdGEuaGlkZSA9IGZhbHNlO1xuICAgICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICAgKi9cbiAgZnVuY3Rpb24gaW5uZXIoZGF0YSkge1xuICAgIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICAgIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICB2YXIgaXNIb3JpeiA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgdmFyIHN1YnRyYWN0TGVuZ3RoID0gWyd0b3AnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPT09IC0xO1xuXG4gICAgcG9wcGVyW2lzSG9yaXogPyAnbGVmdCcgOiAndG9wJ10gPSByZWZlcmVuY2VbYmFzZVBsYWNlbWVudF0gLSAoc3VidHJhY3RMZW5ndGggPyBwb3BwZXJbaXNIb3JpeiA/ICd3aWR0aCcgOiAnaGVpZ2h0J10gOiAwKTtcblxuICAgIGRhdGEucGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChwb3BwZXIpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogTW9kaWZpZXIgZnVuY3Rpb24sIGVhY2ggbW9kaWZpZXIgY2FuIGhhdmUgYSBmdW5jdGlvbiBvZiB0aGlzIHR5cGUgYXNzaWduZWRcbiAgICogdG8gaXRzIGBmbmAgcHJvcGVydHkuPGJyIC8+XG4gICAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZCBvbiBlYWNoIHVwZGF0ZSwgdGhpcyBtZWFucyB0aGF0IHlvdSBtdXN0XG4gICAqIG1ha2Ugc3VyZSB0aGV5IGFyZSBwZXJmb3JtYW50IGVub3VnaCB0byBhdm9pZCBwZXJmb3JtYW5jZSBib3R0bGVuZWNrcy5cbiAgICpcbiAgICogQGZ1bmN0aW9uIE1vZGlmaWVyRm5cbiAgICogQGFyZ3VtZW50IHtkYXRhT2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7ZGF0YU9iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICAgKi9cblxuICAvKipcbiAgICogTW9kaWZpZXJzIGFyZSBwbHVnaW5zIHVzZWQgdG8gYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHlvdXIgcG9wcGVycy48YnIgLz5cbiAgICogUG9wcGVyLmpzIHVzZXMgYSBzZXQgb2YgOSBtb2RpZmllcnMgdG8gcHJvdmlkZSBhbGwgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdGllc1xuICAgKiBuZWVkZWQgYnkgdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIFVzdWFsbHkgeW91IGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGBvcmRlcmAsIGBmbmAgYW5kIGBvbkxvYWRgIHByb3BzLlxuICAgKiBBbGwgdGhlIG90aGVyIHByb3BlcnRpZXMgYXJlIGNvbmZpZ3VyYXRpb25zIHRoYXQgY291bGQgYmUgdHdlYWtlZC5cbiAgICogQG5hbWVzcGFjZSBtb2RpZmllcnNcbiAgICovXG4gIHZhciBtb2RpZmllcnMgPSB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXIgdXNlZCB0byBzaGlmdCB0aGUgcG9wcGVyIG9uIHRoZSBzdGFydCBvciBlbmQgb2YgaXRzIHJlZmVyZW5jZVxuICAgICAqIGVsZW1lbnQuPGJyIC8+XG4gICAgICogSXQgd2lsbCByZWFkIHRoZSB2YXJpYXRpb24gb2YgdGhlIGBwbGFjZW1lbnRgIHByb3BlcnR5LjxiciAvPlxuICAgICAqIEl0IGNhbiBiZSBvbmUgZWl0aGVyIGAtZW5kYCBvciBgLXN0YXJ0YC5cbiAgICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgc2hpZnQ6IHtcbiAgICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0xMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgICBvcmRlcjogMTAwLFxuICAgICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICAgIGZuOiBzaGlmdFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYG9mZnNldGAgbW9kaWZpZXIgY2FuIHNoaWZ0IHlvdXIgcG9wcGVyIG9uIGJvdGggaXRzIGF4aXMuXG4gICAgICpcbiAgICAgKiBJdCBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgdW5pdHM6XG4gICAgICogLSBgcHhgIG9yIHVuaXQtbGVzcywgaW50ZXJwcmV0ZWQgYXMgcGl4ZWxzXG4gICAgICogLSBgJWAgb3IgYCVyYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgICAqIC0gYCVwYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgICAqIC0gYHZ3YCwgQ1NTIHZpZXdwb3J0IHdpZHRoIHVuaXRcbiAgICAgKiAtIGB2aGAsIENTUyB2aWV3cG9ydCBoZWlnaHQgdW5pdFxuICAgICAqXG4gICAgICogRm9yIGxlbmd0aCBpcyBpbnRlbmRlZCB0aGUgbWFpbiBheGlzIHJlbGF0aXZlIHRvIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHBvcHBlci48YnIgLz5cbiAgICAgKiBUaGlzIG1lYW5zIHRoYXQgaWYgdGhlIHBsYWNlbWVudCBpcyBgdG9wYCBvciBgYm90dG9tYCwgdGhlIGxlbmd0aCB3aWxsIGJlIHRoZVxuICAgICAqIGB3aWR0aGAuIEluIGNhc2Ugb2YgYGxlZnRgIG9yIGByaWdodGAsIGl0IHdpbGwgYmUgdGhlIGBoZWlnaHRgLlxuICAgICAqXG4gICAgICogWW91IGNhbiBwcm92aWRlIGEgc2luZ2xlIHZhbHVlIChhcyBgTnVtYmVyYCBvciBgU3RyaW5nYCksIG9yIGEgcGFpciBvZiB2YWx1ZXNcbiAgICAgKiBhcyBgU3RyaW5nYCBkaXZpZGVkIGJ5IGEgY29tbWEgb3Igb25lIChvciBtb3JlKSB3aGl0ZSBzcGFjZXMuPGJyIC8+XG4gICAgICogVGhlIGxhdHRlciBpcyBhIGRlcHJlY2F0ZWQgbWV0aG9kIGJlY2F1c2UgaXQgbGVhZHMgdG8gY29uZnVzaW9uIGFuZCB3aWxsIGJlXG4gICAgICogcmVtb3ZlZCBpbiB2Mi48YnIgLz5cbiAgICAgKiBBZGRpdGlvbmFsbHksIGl0IGFjY2VwdHMgYWRkaXRpb25zIGFuZCBzdWJ0cmFjdGlvbnMgYmV0d2VlbiBkaWZmZXJlbnQgdW5pdHMuXG4gICAgICogTm90ZSB0aGF0IG11bHRpcGxpY2F0aW9ucyBhbmQgZGl2aXNpb25zIGFyZW4ndCBzdXBwb3J0ZWQuXG4gICAgICpcbiAgICAgKiBWYWxpZCBleGFtcGxlcyBhcmU6XG4gICAgICogYGBgXG4gICAgICogMTBcbiAgICAgKiAnMTAlJ1xuICAgICAqICcxMCwgMTAnXG4gICAgICogJzEwJSwgMTAnXG4gICAgICogJzEwICsgMTAlJ1xuICAgICAqICcxMCAtIDV2aCArIDMlJ1xuICAgICAqICctMTBweCArIDV2aCwgNXB4IC0gNiUnXG4gICAgICogYGBgXG4gICAgICogPiAqKk5CKio6IElmIHlvdSBkZXNpcmUgdG8gYXBwbHkgb2Zmc2V0cyB0byB5b3VyIHBvcHBlcnMgaW4gYSB3YXkgdGhhdCBtYXkgbWFrZSB0aGVtIG92ZXJsYXBcbiAgICAgKiA+IHdpdGggdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnQsIHVuZm9ydHVuYXRlbHksIHlvdSB3aWxsIGhhdmUgdG8gZGlzYWJsZSB0aGUgYGZsaXBgIG1vZGlmaWVyLlxuICAgICAqID4gWW91IGNhbiByZWFkIG1vcmUgb24gdGhpcyBhdCB0aGlzIFtpc3N1ZV0oaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvaXNzdWVzLzM3MykuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgb2Zmc2V0OiB7XG4gICAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgICAgb3JkZXI6IDIwMCxcbiAgICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgICBmbjogb2Zmc2V0LFxuICAgICAgLyoqIEBwcm9wIHtOdW1iZXJ8U3RyaW5nfSBvZmZzZXQ9MFxuICAgICAgICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gICAgICAgKi9cbiAgICAgIG9mZnNldDogMFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNb2RpZmllciB1c2VkIHRvIHByZXZlbnQgdGhlIHBvcHBlciBmcm9tIGJlaW5nIHBvc2l0aW9uZWQgb3V0c2lkZSB0aGUgYm91bmRhcnkuXG4gICAgICpcbiAgICAgKiBBIHNjZW5hcmlvIGV4aXN0cyB3aGVyZSB0aGUgcmVmZXJlbmNlIGl0c2VsZiBpcyBub3Qgd2l0aGluIHRoZSBib3VuZGFyaWVzLjxiciAvPlxuICAgICAqIFdlIGNhbiBzYXkgaXQgaGFzIFwiZXNjYXBlZCB0aGUgYm91bmRhcmllc1wiIOKAlCBvciBqdXN0IFwiZXNjYXBlZFwiLjxiciAvPlxuICAgICAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBwb3BwZXIgc2hvdWxkIGVpdGhlcjpcbiAgICAgKlxuICAgICAqIC0gZGV0YWNoIGZyb20gdGhlIHJlZmVyZW5jZSBhbmQgcmVtYWluIFwidHJhcHBlZFwiIGluIHRoZSBib3VuZGFyaWVzLCBvclxuICAgICAqIC0gaWYgaXQgc2hvdWxkIGlnbm9yZSB0aGUgYm91bmRhcnkgYW5kIFwiZXNjYXBlIHdpdGggaXRzIHJlZmVyZW5jZVwiXG4gICAgICpcbiAgICAgKiBXaGVuIGBlc2NhcGVXaXRoUmVmZXJlbmNlYCBpcyBzZXQgdG9gdHJ1ZWAgYW5kIHJlZmVyZW5jZSBpcyBjb21wbGV0ZWx5XG4gICAgICogb3V0c2lkZSBpdHMgYm91bmRhcmllcywgdGhlIHBvcHBlciB3aWxsIG92ZXJmbG93IChvciBjb21wbGV0ZWx5IGxlYXZlKVxuICAgICAqIHRoZSBib3VuZGFyaWVzIGluIG9yZGVyIHRvIHJlbWFpbiBhdHRhY2hlZCB0byB0aGUgZWRnZSBvZiB0aGUgcmVmZXJlbmNlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTMwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICAgIG9yZGVyOiAzMDAsXG4gICAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgICAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgICAgIC8qKlxuICAgICAgICogQHByb3Age0FycmF5fSBbcHJpb3JpdHk9WydsZWZ0JywncmlnaHQnLCd0b3AnLCdib3R0b20nXV1cbiAgICAgICAqIFBvcHBlciB3aWxsIHRyeSB0byBwcmV2ZW50IG92ZXJmbG93IGZvbGxvd2luZyB0aGVzZSBwcmlvcml0aWVzIGJ5IGRlZmF1bHQsXG4gICAgICAgKiB0aGVuLCBpdCBjb3VsZCBvdmVyZmxvdyBvbiB0aGUgbGVmdCBhbmQgb24gdG9wIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICAgKi9cbiAgICAgIHByaW9yaXR5OiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddLFxuICAgICAgLyoqXG4gICAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgICAqIEFtb3VudCBvZiBwaXhlbCB1c2VkIHRvIGRlZmluZSBhIG1pbmltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm91bmRhcmllc1xuICAgICAgICogYW5kIHRoZSBwb3BwZXIuIFRoaXMgbWFrZXMgc3VyZSB0aGUgcG9wcGVyIGFsd2F5cyBoYXMgYSBsaXR0bGUgcGFkZGluZ1xuICAgICAgICogYmV0d2VlbiB0aGUgZWRnZXMgb2YgaXRzIGNvbnRhaW5lclxuICAgICAgICovXG4gICAgICBwYWRkaW5nOiA1LFxuICAgICAgLyoqXG4gICAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0nc2Nyb2xsUGFyZW50J1xuICAgICAgICogQm91bmRhcmllcyB1c2VkIGJ5IHRoZSBtb2RpZmllci4gQ2FuIGJlIGBzY3JvbGxQYXJlbnRgLCBgd2luZG93YCxcbiAgICAgICAqIGB2aWV3cG9ydGAgb3IgYW55IERPTSBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBib3VuZGFyaWVzRWxlbWVudDogJ3Njcm9sbFBhcmVudCdcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHN1cmUgdGhlIHJlZmVyZW5jZSBhbmQgaXRzIHBvcHBlciBzdGF5IG5lYXIgZWFjaCBvdGhlclxuICAgICAqIHdpdGhvdXQgbGVhdmluZyBhbnkgZ2FwIGJldHdlZW4gdGhlIHR3by4gRXNwZWNpYWxseSB1c2VmdWwgd2hlbiB0aGUgYXJyb3cgaXNcbiAgICAgKiBlbmFibGVkIGFuZCB5b3Ugd2FudCB0byBlbnN1cmUgdGhhdCBpdCBwb2ludHMgdG8gaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgICAqIEl0IGNhcmVzIG9ubHkgYWJvdXQgdGhlIGZpcnN0IGF4aXMuIFlvdSBjYW4gc3RpbGwgaGF2ZSBwb3BwZXJzIHdpdGggbWFyZ2luXG4gICAgICogYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGtlZXBUb2dldGhlcjoge1xuICAgICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTQwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICAgIG9yZGVyOiA0MDAsXG4gICAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgICAgZm46IGtlZXBUb2dldGhlclxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1vZGlmaWVyIGlzIHVzZWQgdG8gbW92ZSB0aGUgYGFycm93RWxlbWVudGAgb2YgdGhlIHBvcHBlciB0byBtYWtlXG4gICAgICogc3VyZSBpdCBpcyBwb3NpdGlvbmVkIGJldHdlZW4gdGhlIHJlZmVyZW5jZSBlbGVtZW50IGFuZCBpdHMgcG9wcGVyIGVsZW1lbnQuXG4gICAgICogSXQgd2lsbCByZWFkIHRoZSBvdXRlciBzaXplIG9mIHRoZSBgYXJyb3dFbGVtZW50YCBub2RlIHRvIGRldGVjdCBob3cgbWFueVxuICAgICAqIHBpeGVscyBvZiBjb25qdW5jdGlvbiBhcmUgbmVlZGVkLlxuICAgICAqXG4gICAgICogSXQgaGFzIG5vIGVmZmVjdCBpZiBubyBgYXJyb3dFbGVtZW50YCBpcyBwcm92aWRlZC5cbiAgICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgYXJyb3c6IHtcbiAgICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj01MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgICBvcmRlcjogNTAwLFxuICAgICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICAgIGZuOiBhcnJvdyxcbiAgICAgIC8qKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBlbGVtZW50PSdbeC1hcnJvd10nIC0gU2VsZWN0b3Igb3Igbm9kZSB1c2VkIGFzIGFycm93ICovXG4gICAgICBlbGVtZW50OiAnW3gtYXJyb3ddJ1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNb2RpZmllciB1c2VkIHRvIGZsaXAgdGhlIHBvcHBlcidzIHBsYWNlbWVudCB3aGVuIGl0IHN0YXJ0cyB0byBvdmVybGFwIGl0c1xuICAgICAqIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgICAqXG4gICAgICogKipOT1RFOioqIHRoaXMgbW9kaWZpZXIgd2lsbCBpbnRlcnJ1cHQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlIGFuZCB3aWxsXG4gICAgICogcmVzdGFydCBpdCBpZiBpdCBkZXRlY3RzIHRoZSBuZWVkIHRvIGZsaXAgdGhlIHBsYWNlbWVudC5cbiAgICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZmxpcDoge1xuICAgICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTYwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICAgIG9yZGVyOiA2MDAsXG4gICAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgICAgZm46IGZsaXAsXG4gICAgICAvKipcbiAgICAgICAqIEBwcm9wIHtTdHJpbmd8QXJyYXl9IGJlaGF2aW9yPSdmbGlwJ1xuICAgICAgICogVGhlIGJlaGF2aW9yIHVzZWQgdG8gY2hhbmdlIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQuIEl0IGNhbiBiZSBvbmUgb2ZcbiAgICAgICAqIGBmbGlwYCwgYGNsb2Nrd2lzZWAsIGBjb3VudGVyY2xvY2t3aXNlYCBvciBhbiBhcnJheSB3aXRoIGEgbGlzdCBvZiB2YWxpZFxuICAgICAgICogcGxhY2VtZW50cyAod2l0aCBvcHRpb25hbCB2YXJpYXRpb25zKVxuICAgICAgICovXG4gICAgICBiZWhhdmlvcjogJ2ZsaXAnLFxuICAgICAgLyoqXG4gICAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgICAqIFRoZSBwb3BwZXIgd2lsbCBmbGlwIGlmIGl0IGhpdHMgdGhlIGVkZ2VzIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICAgKi9cbiAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAvKipcbiAgICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSd2aWV3cG9ydCdcbiAgICAgICAqIFRoZSBlbGVtZW50IHdoaWNoIHdpbGwgZGVmaW5lIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBwb3BwZXIgcG9zaXRpb24uXG4gICAgICAgKiBUaGUgcG9wcGVyIHdpbGwgbmV2ZXIgYmUgcGxhY2VkIG91dHNpZGUgb2YgdGhlIGRlZmluZWQgYm91bmRhcmllc1xuICAgICAgICogKGV4Y2VwdCBpZiBga2VlcFRvZ2V0aGVyYCBpcyBlbmFibGVkKVxuICAgICAgICovXG4gICAgICBib3VuZGFyaWVzRWxlbWVudDogJ3ZpZXdwb3J0J1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2UgdGhlIHBvcHBlciBmbG93IHRvd2FyZCB0aGUgaW5uZXIgb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgICAqIEJ5IGRlZmF1bHQsIHdoZW4gdGhpcyBtb2RpZmllciBpcyBkaXNhYmxlZCwgdGhlIHBvcHBlciB3aWxsIGJlIHBsYWNlZCBvdXRzaWRlXG4gICAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBpbm5lcjoge1xuICAgICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTcwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICAgIG9yZGVyOiA3MDAsXG4gICAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9ZmFsc2UgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgICBmbjogaW5uZXJcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW9kaWZpZXIgdXNlZCB0byBoaWRlIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0c2lkZSBvZiB0aGVcbiAgICAgKiBwb3BwZXIgYm91bmRhcmllcy4gSXQgd2lsbCBzZXQgYSBgeC1vdXQtb2YtYm91bmRhcmllc2AgYXR0cmlidXRlIHdoaWNoIGNhblxuICAgICAqIGJlIHVzZWQgdG8gaGlkZSB3aXRoIGEgQ1NTIHNlbGVjdG9yIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGlzXG4gICAgICogb3V0IG9mIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGhpZGU6IHtcbiAgICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgICBvcmRlcjogODAwLFxuICAgICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICAgIGZuOiBoaWRlXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBzdHlsZSB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGVsZW1lbnQgdG8gZ2V0c1xuICAgICAqIHByb3Blcmx5IHBvc2l0aW9uZWQuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBtb2RpZmllciB3aWxsIG5vdCB0b3VjaCB0aGUgRE9NLCBpdCBqdXN0IHByZXBhcmVzIHRoZSBzdHlsZXNcbiAgICAgKiBzbyB0aGF0IGBhcHBseVN0eWxlYCBtb2RpZmllciBjYW4gYXBwbHkgaXQuIFRoaXMgc2VwYXJhdGlvbiBpcyB1c2VmdWxcbiAgICAgKiBpbiBjYXNlIHlvdSBuZWVkIHRvIHJlcGxhY2UgYGFwcGx5U3R5bGVgIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gICAgICpcbiAgICAgKiBUaGlzIG1vZGlmaWVyIGhhcyBgODUwYCBhcyBgb3JkZXJgIHZhbHVlIHRvIG1haW50YWluIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgKiB3aXRoIHByZXZpb3VzIHZlcnNpb25zIG9mIFBvcHBlci5qcy4gRXhwZWN0IHRoZSBtb2RpZmllcnMgb3JkZXJpbmcgbWV0aG9kXG4gICAgICogdG8gY2hhbmdlIGluIGZ1dHVyZSBtYWpvciB2ZXJzaW9ucyBvZiB0aGUgbGlicmFyeS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBjb21wdXRlU3R5bGU6IHtcbiAgICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04NTAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgICBvcmRlcjogODUwLFxuICAgICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICAgIGZuOiBjb21wdXRlU3R5bGUsXG4gICAgICAvKipcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgICAqL1xuICAgICAgZ3B1QWNjZWxlcmF0aW9uOiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nYm90dG9tJ11cbiAgICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWCBheGlzIChgYm90dG9tYCBvciBgdG9wYCkuIEFLQSBYIG9mZnNldCBvcmlnaW4uXG4gICAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgYm90dG9tYFxuICAgICAgICovXG4gICAgICB4OiAnYm90dG9tJyxcbiAgICAgIC8qKlxuICAgICAgICogQHByb3Age3N0cmluZ30gW3g9J2xlZnQnXVxuICAgICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBZIGF4aXMgKGBsZWZ0YCBvciBgcmlnaHRgKS4gQUtBIFkgb2Zmc2V0IG9yaWdpbi5cbiAgICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGByaWdodGBcbiAgICAgICAqL1xuICAgICAgeTogJ3JpZ2h0J1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBjb21wdXRlZCBzdHlsZXMgdG8gdGhlIHBvcHBlciBlbGVtZW50LlxuICAgICAqXG4gICAgICogQWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyBhcmUgbGltaXRlZCB0byB0aGlzIG1vZGlmaWVyLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlXG4gICAgICogeW91IHdhbnQgdG8gaW50ZWdyYXRlIFBvcHBlci5qcyBpbnNpZGUgYSBmcmFtZXdvcmsgb3IgdmlldyBsaWJyYXJ5IGFuZCB5b3VcbiAgICAgKiB3YW50IHRvIGRlbGVnYXRlIGFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgdG8gaXQuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgaWYgeW91IGRpc2FibGUgdGhpcyBtb2RpZmllciwgeW91IG11c3QgbWFrZSBzdXJlIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgICAqIGhhcyBpdHMgcG9zaXRpb24gc2V0IHRvIGBhYnNvbHV0ZWAgYmVmb3JlIFBvcHBlci5qcyBjYW4gZG8gaXRzIHdvcmshXG4gICAgICpcbiAgICAgKiBKdXN0IGRpc2FibGUgdGhpcyBtb2RpZmllciBhbmQgZGVmaW5lIHlvdXIgb3duIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgZWZmZWN0LlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGFwcGx5U3R5bGU6IHtcbiAgICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj05MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgICBvcmRlcjogOTAwLFxuICAgICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICAgIGZuOiBhcHBseVN0eWxlLFxuICAgICAgLyoqIEBwcm9wIHtGdW5jdGlvbn0gKi9cbiAgICAgIG9uTG9hZDogYXBwbHlTdHlsZU9uTG9hZCxcbiAgICAgIC8qKlxuICAgICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjEwLjAsIHRoZSBwcm9wZXJ0eSBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllclxuICAgICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllc1xuICAgICAgICovXG4gICAgICBncHVBY2NlbGVyYXRpb246IHVuZGVmaW5lZFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVGhlIGBkYXRhT2JqZWN0YCBpcyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGluZm9ybWF0aW9uIHVzZWQgYnkgUG9wcGVyLmpzLlxuICAgKiBUaGlzIG9iamVjdCBpcyBwYXNzZWQgdG8gbW9kaWZpZXJzIGFuZCB0byB0aGUgYG9uQ3JlYXRlYCBhbmQgYG9uVXBkYXRlYCBjYWxsYmFja3MuXG4gICAqIEBuYW1lIGRhdGFPYmplY3RcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuaW5zdGFuY2UgVGhlIFBvcHBlci5qcyBpbnN0YW5jZVxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5wbGFjZW1lbnQgUGxhY2VtZW50IGFwcGxpZWQgdG8gcG9wcGVyXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50IFBsYWNlbWVudCBvcmlnaW5hbGx5IGRlZmluZWQgb24gaW5pdFxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuZmxpcHBlZCBUcnVlIGlmIHBvcHBlciBoYXMgYmVlbiBmbGlwcGVkIGJ5IGZsaXAgbW9kaWZpZXJcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmhpZGUgVHJ1ZSBpZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0IG9mIGJvdW5kYXJpZXMsIHVzZWZ1bCB0byBrbm93IHdoZW4gdG8gaGlkZSB0aGUgcG9wcGVyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGRhdGEuYXJyb3dFbGVtZW50IE5vZGUgdXNlZCBhcyBhcnJvdyBieSBhcnJvdyBtb2RpZmllclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5zdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmFycm93U3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGFycm93LiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICAgKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5ib3VuZGFyaWVzIE9mZnNldHMgb2YgdGhlIHBvcHBlciBib3VuZGFyaWVzXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMgVGhlIG1lYXN1cmVtZW50cyBvZiBwb3BwZXIsIHJlZmVyZW5jZSBhbmQgYXJyb3cgZWxlbWVudHNcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5wb3BwZXIgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucmVmZXJlbmNlIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICAgKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLmFycm93XSBgdG9wYCBhbmQgYGxlZnRgIG9mZnNldHMsIG9ubHkgb25lIG9mIHRoZW0gd2lsbCBiZSBkaWZmZXJlbnQgZnJvbSAwXG4gICAqL1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG9wdGlvbnMgcHJvdmlkZWQgdG8gUG9wcGVyLmpzIGNvbnN0cnVjdG9yLjxiciAvPlxuICAgKiBUaGVzZSBjYW4gYmUgb3ZlcnJpZGRlbiB1c2luZyB0aGUgYG9wdGlvbnNgIGFyZ3VtZW50IG9mIFBvcHBlci5qcy48YnIgLz5cbiAgICogVG8gb3ZlcnJpZGUgYW4gb3B0aW9uLCBzaW1wbHkgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZVxuICAgKiBzdHJ1Y3R1cmUgb2YgdGhlIGBvcHRpb25zYCBvYmplY3QsIGFzIHRoZSAzcmQgYXJndW1lbnQuIEZvciBleGFtcGxlOlxuICAgKiBgYGBcbiAgICogbmV3IFBvcHBlcihyZWYsIHBvcCwge1xuICAgKiAgIG1vZGlmaWVyczoge1xuICAgKiAgICAgcHJldmVudE92ZXJmbG93OiB7IGVuYWJsZWQ6IGZhbHNlIH1cbiAgICogICB9XG4gICAqIH0pXG4gICAqIGBgYFxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG4gIHZhciBEZWZhdWx0cyA9IHtcbiAgICAvKipcbiAgICAgKiBQb3BwZXIncyBwbGFjZW1lbnQuXG4gICAgICogQHByb3Age1BvcHBlci5wbGFjZW1lbnRzfSBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiB5b3Ugd2FudCBwb3BwZXIgdG8gcG9zaXRpb24gaXQgc2VsZiBpbiAnZml4ZWQnIG1vZGVcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gcG9zaXRpb25GaXhlZD1mYWxzZVxuICAgICAqL1xuICAgIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBldmVudHMgKHJlc2l6ZSwgc2Nyb2xsKSBhcmUgaW5pdGlhbGx5IGVuYWJsZWQuXG4gICAgICogQHByb3Age0Jvb2xlYW59IGV2ZW50c0VuYWJsZWQ9dHJ1ZVxuICAgICAqL1xuICAgIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgcG9wcGVyIHdoZW5cbiAgICAgKiB5b3UgY2FsbCB0aGUgYGRlc3Ryb3lgIG1ldGhvZC5cbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gcmVtb3ZlT25EZXN0cm95PWZhbHNlXG4gICAgICovXG4gICAgcmVtb3ZlT25EZXN0cm95OiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgY3JlYXRlZC48YnIgLz5cbiAgICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICAgKiBAcHJvcCB7b25DcmVhdGV9XG4gICAgICovXG4gICAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKCkge30sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIHVwZGF0ZWQuIFRoaXMgY2FsbGJhY2sgaXMgbm90IGNhbGxlZFxuICAgICAqIG9uIHRoZSBpbml0aWFsaXphdGlvbi9jcmVhdGlvbiBvZiB0aGUgcG9wcGVyLCBidXQgb25seSBvbiBzdWJzZXF1ZW50XG4gICAgICogdXBkYXRlcy48YnIgLz5cbiAgICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICAgKiBAcHJvcCB7b25VcGRhdGV9XG4gICAgICovXG4gICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKCkge30sXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIG1vZGlmaWVycyB1c2VkIHRvIG1vZGlmeSB0aGUgb2Zmc2V0cyBiZWZvcmUgdGhleSBhcmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLlxuICAgICAqIFRoZXkgcHJvdmlkZSBtb3N0IG9mIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgUG9wcGVyLmpzLlxuICAgICAqIEBwcm9wIHttb2RpZmllcnN9XG4gICAgICovXG4gICAgbW9kaWZpZXJzOiBtb2RpZmllcnNcbiAgfTtcblxuICAvKipcbiAgICogQGNhbGxiYWNrIG9uQ3JlYXRlXG4gICAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICAgKi9cblxuICAvKipcbiAgICogQGNhbGxiYWNrIG9uVXBkYXRlXG4gICAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICAgKi9cblxuICAvLyBVdGlsc1xuICAvLyBNZXRob2RzXG4gIHZhciBQb3BwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBQb3BwZXIuanMgaW5zdGFuY2UuXG4gICAgICogQGNsYXNzIFBvcHBlclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8cmVmZXJlbmNlT2JqZWN0fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgZWxlbWVudCB1c2VkIGFzIHRoZSBwb3BwZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFlvdXIgY3VzdG9tIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIG9uZXMgZGVmaW5lZCBpbiBbRGVmYXVsdHNdKCNkZWZhdWx0cylcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGluc3RhbmNlIC0gVGhlIGdlbmVyYXRlZCBQb3BwZXIuanMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHBlcik7XG5cbiAgICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMudXBkYXRlKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIG1ha2UgdXBkYXRlKCkgZGVib3VuY2VkLCBzbyB0aGF0IGl0IG9ubHkgcnVucyBhdCBtb3N0IG9uY2UtcGVyLXRpY2tcbiAgICAgIHRoaXMudXBkYXRlID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAgIC8vIHdpdGgge30gd2UgY3JlYXRlIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBvcHRpb25zIGluc2lkZSBpdFxuICAgICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIC8vIGluaXQgc3RhdGVcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGlzRGVzdHJveWVkOiBmYWxzZSxcbiAgICAgICAgaXNDcmVhdGVkOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsUGFyZW50czogW11cbiAgICAgIH07XG5cbiAgICAgIC8vIGdldCByZWZlcmVuY2UgYW5kIHBvcHBlciBlbGVtZW50cyAoYWxsb3cgalF1ZXJ5IHdyYXBwZXJzKVxuICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLmpxdWVyeSA/IHJlZmVyZW5jZVswXSA6IHJlZmVyZW5jZTtcbiAgICAgIHRoaXMucG9wcGVyID0gcG9wcGVyICYmIHBvcHBlci5qcXVlcnkgPyBwb3BwZXJbMF0gOiBwb3BwZXI7XG5cbiAgICAgIC8vIERlZXAgbWVyZ2UgbW9kaWZpZXJzIG9wdGlvbnNcbiAgICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKF9leHRlbmRzKHt9LCBQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzLCBvcHRpb25zLm1vZGlmaWVycykpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgX3RoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gPSBfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVyc1tuYW1lXSB8fCB7fSwgb3B0aW9ucy5tb2RpZmllcnMgPyBvcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA6IHt9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZWZhY3RvcmluZyBtb2RpZmllcnMnIGxpc3QgKE9iamVjdCA9PiBBcnJheSlcbiAgICAgIHRoaXMubW9kaWZpZXJzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1vZGlmaWVycykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9LCBfdGhpcy5vcHRpb25zLm1vZGlmaWVyc1tuYW1lXSk7XG4gICAgICB9KVxuICAgICAgLy8gc29ydCB0aGUgbW9kaWZpZXJzIGJ5IG9yZGVyXG4gICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XG4gICAgICB9KTtcblxuICAgICAgLy8gbW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSB3aGVuIFBvcHBlci5qcyBnZXQgaW5pdGVkXG4gICAgICAvLyBzdWNoIGNvZGUgaXMgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgb2YgaXRzIG1vZGlmaWVyXG4gICAgICAvLyB0aGV5IGNvdWxkIGFkZCBuZXcgcHJvcGVydGllcyB0byB0aGVpciBvcHRpb25zIGNvbmZpZ3VyYXRpb25cbiAgICAgIC8vIEJFIEFXQVJFOiBkb24ndCBhZGQgb3B0aW9ucyB0byBgb3B0aW9ucy5tb2RpZmllcnMubmFtZWAgYnV0IHRvIGBtb2RpZmllck9wdGlvbnNgIVxuICAgICAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXJPcHRpb25zKSB7XG4gICAgICAgIGlmIChtb2RpZmllck9wdGlvbnMuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQpKSB7XG4gICAgICAgICAgbW9kaWZpZXJPcHRpb25zLm9uTG9hZChfdGhpcy5yZWZlcmVuY2UsIF90aGlzLnBvcHBlciwgX3RoaXMub3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCBfdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBmaXJlIHRoZSBmaXJzdCB1cGRhdGUgdG8gcG9zaXRpb24gdGhlIHBvcHBlciBpbiB0aGUgcmlnaHQgcGxhY2VcbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIHZhciBldmVudHNFbmFibGVkID0gdGhpcy5vcHRpb25zLmV2ZW50c0VuYWJsZWQ7XG4gICAgICBpZiAoZXZlbnRzRW5hYmxlZCkge1xuICAgICAgICAvLyBzZXR1cCBldmVudCBsaXN0ZW5lcnMsIHRoZXkgd2lsbCB0YWtlIGNhcmUgb2YgdXBkYXRlIHRoZSBwb3NpdGlvbiBpbiBzcGVjaWZpYyBzaXR1YXRpb25zXG4gICAgICAgIHRoaXMuZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkID0gZXZlbnRzRW5hYmxlZDtcbiAgICB9XG5cbiAgICAvLyBXZSBjYW4ndCB1c2UgY2xhc3MgcHJvcGVydGllcyBiZWNhdXNlIHRoZXkgZG9uJ3QgZ2V0IGxpc3RlZCBpbiB0aGVcbiAgICAvLyBjbGFzcyBwcm90b3R5cGUgYW5kIGJyZWFrIHN0dWZmIGxpa2UgU2lub24gc3R1YnNcblxuXG4gICAgY3JlYXRlQ2xhc3MoUG9wcGVyLCBbe1xuICAgICAga2V5OiAndXBkYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUkJDEoKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95JCQxKCkge1xuICAgICAgICByZXR1cm4gZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2VuYWJsZUV2ZW50TGlzdGVuZXJzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgICAgcmV0dXJuIGVuYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGlzYWJsZUV2ZW50TGlzdGVuZXJzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMkJDEoKSB7XG4gICAgICAgIHJldHVybiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTY2hlZHVsZXMgYW4gdXBkYXRlLiBJdCB3aWxsIHJ1biBvbiB0aGUgbmV4dCBVSSB1cGRhdGUgYXZhaWxhYmxlLlxuICAgICAgICogQG1ldGhvZCBzY2hlZHVsZVVwZGF0ZVxuICAgICAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgICAgICovXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBDb2xsZWN0aW9uIG9mIHV0aWxpdGllcyB1c2VmdWwgd2hlbiB3cml0aW5nIGN1c3RvbSBtb2RpZmllcnMuXG4gICAgICAgKiBTdGFydGluZyBmcm9tIHZlcnNpb24gMS43LCB0aGlzIG1ldGhvZCBpcyBhdmFpbGFibGUgb25seSBpZiB5b3VcbiAgICAgICAqIGluY2x1ZGUgYHBvcHBlci11dGlscy5qc2AgYmVmb3JlIGBwb3BwZXIuanNgLlxuICAgICAgICpcbiAgICAgICAqICoqREVQUkVDQVRJT04qKjogVGhpcyB3YXkgdG8gYWNjZXNzIFBvcHBlclV0aWxzIGlzIGRlcHJlY2F0ZWRcbiAgICAgICAqIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjIhIFVzZSB0aGUgUG9wcGVyVXRpbHMgbW9kdWxlIGRpcmVjdGx5IGluc3RlYWQuXG4gICAgICAgKiBEdWUgdG8gdGhlIGhpZ2ggaW5zdGFiaWxpdHkgb2YgdGhlIG1ldGhvZHMgY29udGFpbmVkIGluIFV0aWxzLCB3ZSBjYW4ndFxuICAgICAgICogZ3VhcmFudGVlIHRoZW0gdG8gZm9sbG93IHNlbXZlci4gVXNlIHRoZW0gYXQgeW91ciBvd24gcmlzayFcbiAgICAgICAqIEBzdGF0aWNcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjhcbiAgICAgICAqIEBtZW1iZXIgVXRpbHNcbiAgICAgICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICAgICAqL1xuXG4gICAgfV0pO1xuICAgIHJldHVybiBQb3BwZXI7XG4gIH0oKTtcblxuICAvKipcbiAgICogVGhlIGByZWZlcmVuY2VPYmplY3RgIGlzIGFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIGFuIGludGVyZmFjZSBjb21wYXRpYmxlIHdpdGggUG9wcGVyLmpzXG4gICAqIGFuZCBsZXRzIHlvdSB1c2UgaXQgYXMgcmVwbGFjZW1lbnQgb2YgYSByZWFsIERPTSBub2RlLjxiciAvPlxuICAgKiBZb3UgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBwb3NpdGlvbiBhIHBvcHBlciByZWxhdGl2ZWx5IHRvIGEgc2V0IG9mIGNvb3JkaW5hdGVzXG4gICAqIGluIGNhc2UgeW91IGRvbid0IGhhdmUgYSBET00gbm9kZSB0byB1c2UgYXMgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBgYGBcbiAgICogbmV3IFBvcHBlcihyZWZlcmVuY2VPYmplY3QsIHBvcHBlck5vZGUpO1xuICAgKiBgYGBcbiAgICpcbiAgICogTkI6IFRoaXMgZmVhdHVyZSBpc24ndCBzdXBwb3J0ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAuXG4gICAqIEBuYW1lIHJlZmVyZW5jZU9iamVjdFxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBkYXRhLmdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHNldCBvZiBjb29yZGluYXRlcyBjb21wYXRpYmxlIHdpdGggdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBtZXRob2QuXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudFdpZHRoXG4gICAqIEFuIEVTNiBnZXR0ZXIgdGhhdCB3aWxsIHJldHVybiB0aGUgd2lkdGggb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudEhlaWdodFxuICAgKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAgICovXG5cblxuICBQb3BwZXIuVXRpbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpLlBvcHBlclV0aWxzO1xuICBQb3BwZXIucGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG4gIFBvcHBlci5EZWZhdWx0cyA9IERlZmF1bHRzO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQ0ID0gJ2Ryb3Bkb3duJztcbiAgdmFyIFZFUlNJT04kNCA9ICc0LjMuMSc7XG4gIHZhciBEQVRBX0tFWSQ0ID0gJ2JzLmRyb3Bkb3duJztcbiAgdmFyIEVWRU5UX0tFWSQ0ID0gXCIuXCIgKyBEQVRBX0tFWSQ0O1xuICB2YXIgREFUQV9BUElfS0VZJDQgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ0ID0gJC5mbltOQU1FJDRdO1xuICB2YXIgRVNDQVBFX0tFWUNPREUgPSAyNzsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG4gIHZhciBTUEFDRV9LRVlDT0RFID0gMzI7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHNwYWNlIGtleVxuXG4gIHZhciBUQUJfS0VZQ09ERSA9IDk7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRhYiBrZXlcblxuICB2YXIgQVJST1dfVVBfS0VZQ09ERSA9IDM4OyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB1cCBhcnJvdyBrZXlcblxuICB2YXIgQVJST1dfRE9XTl9LRVlDT0RFID0gNDA7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGRvd24gYXJyb3cga2V5XG5cbiAgdmFyIFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDM7IC8vIE1vdXNlRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRoZSByaWdodCBidXR0b24gKGFzc3VtaW5nIGEgcmlnaHQtaGFuZGVkIG1vdXNlKVxuXG4gIHZhciBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoQVJST1dfVVBfS0VZQ09ERSArIFwifFwiICsgQVJST1dfRE9XTl9LRVlDT0RFICsgXCJ8XCIgKyBFU0NBUEVfS0VZQ09ERSk7XG4gIHZhciBFdmVudCQ0ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZJDQsXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZJDQsXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkNCxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZJDQsXG4gICAgQ0xJQ0s6IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQ0LFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkNCArIERBVEFfQVBJX0tFWSQ0LFxuICAgIEtFWURPV05fREFUQV9BUEk6IFwia2V5ZG93blwiICsgRVZFTlRfS0VZJDQgKyBEQVRBX0FQSV9LRVkkNCxcbiAgICBLRVlVUF9EQVRBX0FQSTogXCJrZXl1cFwiICsgRVZFTlRfS0VZJDQgKyBEQVRBX0FQSV9LRVkkNFxuICB9O1xuICB2YXIgQ2xhc3NOYW1lJDQgPSB7XG4gICAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXG4gICAgU0hPVzogJ3Nob3cnLFxuICAgIERST1BVUDogJ2Ryb3B1cCcsXG4gICAgRFJPUFJJR0hUOiAnZHJvcHJpZ2h0JyxcbiAgICBEUk9QTEVGVDogJ2Ryb3BsZWZ0JyxcbiAgICBNRU5VUklHSFQ6ICdkcm9wZG93bi1tZW51LXJpZ2h0JyxcbiAgICBNRU5VTEVGVDogJ2Ryb3Bkb3duLW1lbnUtbGVmdCcsXG4gICAgUE9TSVRJT05fU1RBVElDOiAncG9zaXRpb24tc3RhdGljJ1xuICB9O1xuICB2YXIgU2VsZWN0b3IkNCA9IHtcbiAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxcbiAgICBGT1JNX0NISUxEOiAnLmRyb3Bkb3duIGZvcm0nLFxuICAgIE1FTlU6ICcuZHJvcGRvd24tbWVudScsXG4gICAgTkFWQkFSX05BVjogJy5uYXZiYXItbmF2JyxcbiAgICBWSVNJQkxFX0lURU1TOiAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG4gIH07XG4gIHZhciBBdHRhY2htZW50TWFwID0ge1xuICAgIFRPUDogJ3RvcC1zdGFydCcsXG4gICAgVE9QRU5EOiAndG9wLWVuZCcsXG4gICAgQk9UVE9NOiAnYm90dG9tLXN0YXJ0JyxcbiAgICBCT1RUT01FTkQ6ICdib3R0b20tZW5kJyxcbiAgICBSSUdIVDogJ3JpZ2h0LXN0YXJ0JyxcbiAgICBSSUdIVEVORDogJ3JpZ2h0LWVuZCcsXG4gICAgTEVGVDogJ2xlZnQtc3RhcnQnLFxuICAgIExFRlRFTkQ6ICdsZWZ0LWVuZCdcbiAgfTtcbiAgdmFyIERlZmF1bHQkMiA9IHtcbiAgICBvZmZzZXQ6IDAsXG4gICAgZmxpcDogdHJ1ZSxcbiAgICBib3VuZGFyeTogJ3Njcm9sbFBhcmVudCcsXG4gICAgcmVmZXJlbmNlOiAndG9nZ2xlJyxcbiAgICBkaXNwbGF5OiAnZHluYW1pYydcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlJDIgPSB7XG4gICAgb2Zmc2V0OiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBmbGlwOiAnYm9vbGVhbicsXG4gICAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgICBkaXNwbGF5OiAnc3RyaW5nJ1xuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBEcm9wZG93biA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERyb3Bkb3duKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9tZW51ID0gdGhpcy5fZ2V0TWVudUVsZW1lbnQoKTtcbiAgICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKCk7XG5cbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBEcm9wZG93bi5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICB2YXIgaXNBY3RpdmUgPSAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZSQ0LlNIT1cpO1xuXG4gICAgICBEcm9wZG93bi5fY2xlYXJNZW51cygpO1xuXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIHZhciBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50JDQuU0hPVywgcmVsYXRlZFRhcmdldCk7XG4gICAgICAkKHBhcmVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuXG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRGlzYWJsZSB0b3RhbGx5IFBvcHBlci5qcyBmb3IgRHJvcGRvd24gaW4gTmF2YmFyXG5cblxuICAgICAgaWYgKCF0aGlzLl9pbk5hdmJhcikge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgZm9yIFBvcHBlciBkZXBlbmRlbmN5XG4gICAgICAgICAqIFBvcHBlciAtIGh0dHBzOi8vcG9wcGVyLmpzLm9yZ1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHBhcmVudDtcbiAgICAgICAgfSBlbHNlIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlOyAvLyBDaGVjayBpZiBpdCdzIGpRdWVyeSBlbGVtZW50XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIElmIGJvdW5kYXJ5IGlzIG5vdCBgc2Nyb2xsUGFyZW50YCwgdGhlbiBzZXQgcG9zaXRpb24gdG8gYHN0YXRpY2BcbiAgICAgICAgLy8gdG8gYWxsb3cgdGhlIG1lbnUgdG8gXCJlc2NhcGVcIiB0aGUgc2Nyb2xsIHBhcmVudCdzIGJvdW5kYXJpZXNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDI1MVxuXG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib3VuZGFyeSAhPT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgICAgICAkKHBhcmVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDQuUE9TSVRJT05fU1RBVElDKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCkpO1xuICAgICAgfSAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuXG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgJChwYXJlbnQpLmNsb3Nlc3QoU2VsZWN0b3IkNC5OQVZCQVJfTkFWKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVyk7XG4gICAgICAkKHBhcmVudCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVykudHJpZ2dlcigkLkV2ZW50KEV2ZW50JDQuU0hPV04sIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5ESVNBQkxFRCkgfHwgJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5TSE9XKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9O1xuICAgICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQkNC5TSE9XLCByZWxhdGVkVGFyZ2V0KTtcblxuICAgICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgJChwYXJlbnQpLnRyaWdnZXIoc2hvd0V2ZW50KTtcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVyk7XG4gICAgICAkKHBhcmVudCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVykudHJpZ2dlcigkLkV2ZW50KEV2ZW50JDQuU0hPV04sIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5ESVNBQkxFRCkgfHwgISQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50JDQuSElERSwgcmVsYXRlZFRhcmdldCk7XG5cbiAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudCk7XG5cbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZSQ0LlNIT1cpO1xuICAgICAgJChwYXJlbnQpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZSQ0LlNIT1cpLnRyaWdnZXIoJC5FdmVudChFdmVudCQ0LkhJRERFTiwgcmVsYXRlZFRhcmdldCkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkkNCk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkkNCk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX21lbnUgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKCk7XG5cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQkNC5DTElDSywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIF90aGlzLnRvZ2dsZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCwgJCh0aGlzLl9lbGVtZW50KS5kYXRhKCksIGNvbmZpZyk7XG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FJDQsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldE1lbnVFbGVtZW50ID0gZnVuY3Rpb24gX2dldE1lbnVFbGVtZW50KCkge1xuICAgICAgaWYgKCF0aGlzLl9tZW51KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIHRoaXMuX21lbnUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQ0Lk1FTlUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9tZW51O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFBsYWNlbWVudCA9IGZ1bmN0aW9uIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgICB2YXIgJHBhcmVudERyb3Bkb3duID0gJCh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgdmFyIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuQk9UVE9NOyAvLyBIYW5kbGUgZHJvcHVwXG5cbiAgICAgIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuRFJPUFVQKSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlRPUDtcblxuICAgICAgICBpZiAoJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5NRU5VUklHSFQpKSB7XG4gICAgICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5UT1BFTkQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZSQ0LkRST1BSSUdIVCkpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5SSUdIVDtcbiAgICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZSQ0LkRST1BMRUZUKSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkxFRlQ7XG4gICAgICB9IGVsc2UgaWYgKCQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuTUVOVVJJR0hUKSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkJPVFRPTUVORDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9kZXRlY3ROYXZiYXIgPSBmdW5jdGlvbiBfZGV0ZWN0TmF2YmFyKCkge1xuICAgICAgcmV0dXJuICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdCgnLm5hdmJhcicpLmxlbmd0aCA+IDA7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gX2dldE9mZnNldCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvZmZzZXQuZm4gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGRhdGEub2Zmc2V0cyA9IF9vYmplY3RTcHJlYWQoe30sIGRhdGEub2Zmc2V0cywgX3RoaXMyLl9jb25maWcub2Zmc2V0KGRhdGEub2Zmc2V0cywgX3RoaXMyLl9lbGVtZW50KSB8fCB7fSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5fY29uZmlnLm9mZnNldDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRQb3BwZXJDb25maWcgPSBmdW5jdGlvbiBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgICAgdmFyIHBvcHBlckNvbmZpZyA9IHtcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKSxcbiAgICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0aGlzLl9jb25maWcuZmxpcFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIERpc2FibGUgUG9wcGVyLmpzIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheVxuXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHBvcHBlckNvbmZpZy5tb2RpZmllcnMuYXBwbHlTdHlsZSA9IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcG9wcGVyQ29uZmlnO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkkNCk7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bih0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVkkNCwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgRHJvcGRvd24uX2NsZWFyTWVudXMgPSBmdW5jdGlvbiBfY2xlYXJNZW51cyhldmVudCkge1xuICAgICAgaWYgKGV2ZW50ICYmIChldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggIT09IFRBQl9LRVlDT0RFKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0b2dnbGVzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDQuREFUQV9UT0dHTEUpKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKTtcblxuICAgICAgICB2YXIgY29udGV4dCA9ICQodG9nZ2xlc1tpXSkuZGF0YShEQVRBX0tFWSQ0KTtcbiAgICAgICAgdmFyIHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogdG9nZ2xlc1tpXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkcm9wZG93bk1lbnUgPSBjb250ZXh0Ll9tZW51O1xuXG4gICAgICAgIGlmICghJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQ0LlNIT1cpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgfHwgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC53aGljaCA9PT0gVEFCX0tFWUNPREUpICYmICQuY29udGFpbnMocGFyZW50LCBldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudCQ0LkhJREUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpO1xuXG4gICAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuXG5cbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAkKGRyb3Bkb3duTWVudSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVyk7XG4gICAgICAgICQocGFyZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkNC5TSE9XKS50cmlnZ2VyKCQuRXZlbnQoRXZlbnQkNC5ISURERU4sIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50ID0gZnVuY3Rpb24gX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBwYXJlbnQ7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICAgIDtcblxuICAgIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBfZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgICAvLyAgLSBBbmQgbm90IGEga2V5IGluIFJFR0VYUF9LRVlET1dOID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIC8vICAtIElmIGtleSBpcyBvdGhlciB0aGFuIGVzY2FwZVxuICAgICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgPyBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSB8fCBldmVudC53aGljaCAhPT0gRVNDQVBFX0tFWUNPREUgJiYgKGV2ZW50LndoaWNoICE9PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgZXZlbnQud2hpY2ggIT09IEFSUk9XX1VQX0tFWUNPREUgfHwgJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU2VsZWN0b3IkNC5NRU5VKS5sZW5ndGgpIDogIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQud2hpY2gpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZSQ0LkRJU0FCTEVEKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcyk7XG5cbiAgICAgIHZhciBpc0FjdGl2ZSA9ICQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5TSE9XKTtcblxuICAgICAgaWYgKCFpc0FjdGl2ZSB8fCBpc0FjdGl2ZSAmJiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFKSkge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgdmFyIHRvZ2dsZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yJDQuREFUQV9UT0dHTEUpO1xuICAgICAgICAgICQodG9nZ2xlKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtcyA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkNC5WSVNJQkxFX0lURU1TKSk7XG5cbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHtcbiAgICAgICAgLy8gVXBcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIC8vIERvd25cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdCQyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0VHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQyO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEcm9wZG93bjtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50JDQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IkNC5EQVRBX1RPR0dMRSwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcikub24oRXZlbnQkNC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3RvciQ0Lk1FTlUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpLm9uKEV2ZW50JDQuQ0xJQ0tfREFUQV9BUEkgKyBcIiBcIiArIEV2ZW50JDQuS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLl9jbGVhck1lbnVzKS5vbihFdmVudCQ0LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3RvciQ0LkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKTtcbiAgfSkub24oRXZlbnQkNC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IkNC5GT1JNX0NISUxELCBmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FJDRdID0gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FJDRdLkNvbnN0cnVjdG9yID0gRHJvcGRvd247XG5cbiAgJC5mbltOQU1FJDRdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FJDRdID0gSlFVRVJZX05PX0NPTkZMSUNUJDQ7XG4gICAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FJDUgPSAnbW9kYWwnO1xuICB2YXIgVkVSU0lPTiQ1ID0gJzQuMy4xJztcbiAgdmFyIERBVEFfS0VZJDUgPSAnYnMubW9kYWwnO1xuICB2YXIgRVZFTlRfS0VZJDUgPSBcIi5cIiArIERBVEFfS0VZJDU7XG4gIHZhciBEQVRBX0FQSV9LRVkkNSA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDUgPSAkLmZuW05BTUUkNV07XG4gIHZhciBFU0NBUEVfS0VZQ09ERSQxID0gMjc7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIEVzY2FwZSAoRXNjKSBrZXlcblxuICB2YXIgRGVmYXVsdCQzID0ge1xuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIGZvY3VzOiB0cnVlLFxuICAgIHNob3c6IHRydWVcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlJDMgPSB7XG4gICAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICAgIGZvY3VzOiAnYm9vbGVhbicsXG4gICAgc2hvdzogJ2Jvb2xlYW4nXG4gIH07XG4gIHZhciBFdmVudCQ1ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZJDUsXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZJDUsXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkNSxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZJDUsXG4gICAgRk9DVVNJTjogXCJmb2N1c2luXCIgKyBFVkVOVF9LRVkkNSxcbiAgICBSRVNJWkU6IFwicmVzaXplXCIgKyBFVkVOVF9LRVkkNSxcbiAgICBDTElDS19ESVNNSVNTOiBcImNsaWNrLmRpc21pc3NcIiArIEVWRU5UX0tFWSQ1LFxuICAgIEtFWURPV05fRElTTUlTUzogXCJrZXlkb3duLmRpc21pc3NcIiArIEVWRU5UX0tFWSQ1LFxuICAgIE1PVVNFVVBfRElTTUlTUzogXCJtb3VzZXVwLmRpc21pc3NcIiArIEVWRU5UX0tFWSQ1LFxuICAgIE1PVVNFRE9XTl9ESVNNSVNTOiBcIm1vdXNlZG93bi5kaXNtaXNzXCIgKyBFVkVOVF9LRVkkNSxcbiAgICBDTElDS19EQVRBX0FQSTogXCJjbGlja1wiICsgRVZFTlRfS0VZJDUgKyBEQVRBX0FQSV9LRVkkNVxuICB9O1xuICB2YXIgQ2xhc3NOYW1lJDUgPSB7XG4gICAgU0NST0xMQUJMRTogJ21vZGFsLWRpYWxvZy1zY3JvbGxhYmxlJyxcbiAgICBTQ1JPTExCQVJfTUVBU1VSRVI6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gICAgQkFDS0RST1A6ICdtb2RhbC1iYWNrZHJvcCcsXG4gICAgT1BFTjogJ21vZGFsLW9wZW4nLFxuICAgIEZBREU6ICdmYWRlJyxcbiAgICBTSE9XOiAnc2hvdydcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDUgPSB7XG4gICAgRElBTE9HOiAnLm1vZGFsLWRpYWxvZycsXG4gICAgTU9EQUxfQk9EWTogJy5tb2RhbC1ib2R5JyxcbiAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcbiAgICBEQVRBX0RJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICAgIEZJWEVEX0NPTlRFTlQ6ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJyxcbiAgICBTVElDS1lfQ09OVEVOVDogJy5zdGlja3ktdG9wJ1xuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBNb2RhbCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vZGFsKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX2RpYWxvZyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQ1LkRJQUxPRyk7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IDA7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBNb2RhbC5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgfTtcblxuICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkNS5GQURFKSkge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudCQ1LlNIT1csIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZFRhcmdldFxuICAgICAgfSk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KTtcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWU7XG5cbiAgICAgIHRoaXMuX2NoZWNrU2Nyb2xsYmFyKCk7XG5cbiAgICAgIHRoaXMuX3NldFNjcm9sbGJhcigpO1xuXG4gICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcblxuICAgICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKTtcblxuICAgICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKTtcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQ1LkNMSUNLX0RJU01JU1MsIFNlbGVjdG9yJDUuREFUQV9ESVNNSVNTLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGUoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgICAkKHRoaXMuX2RpYWxvZykub24oRXZlbnQkNS5NT1VTRURPV05fRElTTUlTUywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKF90aGlzLl9lbGVtZW50KS5vbmUoRXZlbnQkNS5NT1VTRVVQX0RJU01JU1MsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXMoX3RoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgICAgICBfdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zaG93QmFja2Ryb3AoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZShldmVudCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQkNS5ISURFKTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpO1xuXG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdmFyIHRyYW5zaXRpb24gPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQ1LkZBREUpO1xuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpO1xuXG4gICAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpO1xuXG4gICAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQkNS5GT0NVU0lOKTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDUuU0hPVyk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudCQ1LkNMSUNLX0RJU01JU1MpO1xuICAgICAgJCh0aGlzLl9kaWFsb2cpLm9mZihFdmVudCQ1Lk1PVVNFRE9XTl9ESVNNSVNTKTtcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX2hpZGVNb2RhbChldmVudCk7XG4gICAgICAgIH0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oaWRlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgW3dpbmRvdywgdGhpcy5fZWxlbWVudCwgdGhpcy5fZGlhbG9nXS5mb3JFYWNoKGZ1bmN0aW9uIChodG1sRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gJChodG1sRWxlbWVudCkub2ZmKEVWRU5UX0tFWSQ1KTtcbiAgICAgIH0pO1xuICAgICAgLyoqXG4gICAgICAgKiBgZG9jdW1lbnRgIGhhcyAyIGV2ZW50cyBgRXZlbnQuRk9DVVNJTmAgYW5kIGBFdmVudC5DTElDS19EQVRBX0FQSWBcbiAgICAgICAqIERvIG5vdCBtb3ZlIGBkb2N1bWVudGAgaW4gYGh0bWxFbGVtZW50c2AgYXJyYXlcbiAgICAgICAqIEl0IHdpbGwgcmVtb3ZlIGBFdmVudC5DTElDS19EQVRBX0FQSWAgZXZlbnQgdGhhdCBzaG91bGQgcmVtYWluXG4gICAgICAgKi9cblxuICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50JDUuRk9DVVNJTik7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkkNSk7XG4gICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9kaWFsb2cgPSBudWxsO1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsO1xuICAgICAgdGhpcy5faXNTaG93biA9IG51bGw7XG4gICAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IG51bGw7XG4gICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGw7XG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IG51bGw7XG4gICAgfTtcblxuICAgIF9wcm90by5oYW5kbGVVcGRhdGUgPSBmdW5jdGlvbiBoYW5kbGVVcGRhdGUoKSB7XG4gICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBEZWZhdWx0JDMsIGNvbmZpZyk7XG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FJDUsIGNvbmZpZywgRGVmYXVsdFR5cGUkMyk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3Nob3dFbGVtZW50ID0gZnVuY3Rpb24gX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgdHJhbnNpdGlvbiA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDUuRkFERSk7XG5cbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgLy8gRG9uJ3QgbW92ZSBtb2RhbCdzIERPTSBwb3NpdGlvblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKTtcblxuICAgICAgaWYgKCQodGhpcy5fZGlhbG9nKS5oYXNDbGFzcyhDbGFzc05hbWUkNS5TQ1JPTExBQkxFKSkge1xuICAgICAgICB0aGlzLl9kaWFsb2cucXVlcnlTZWxlY3RvcihTZWxlY3RvciQ1Lk1PREFMX0JPRFkpLnNjcm9sbFRvcCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZSQ1LlNIT1cpO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VuZm9yY2VGb2N1cygpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvd25FdmVudCA9ICQuRXZlbnQoRXZlbnQkNS5TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkVGFyZ2V0XG4gICAgICB9KTtcblxuICAgICAgdmFyIHRyYW5zaXRpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIHRyYW5zaXRpb25Db21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKF90aGlzMy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgICAgX3RoaXMzLl9lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICAkKF90aGlzMy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2RpYWxvZyk7XG4gICAgICAgICQodGhpcy5fZGlhbG9nKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgdHJhbnNpdGlvbkNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fZW5mb3JjZUZvY3VzID0gZnVuY3Rpb24gX2VuZm9yY2VGb2N1cygpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQkNS5GT0NVU0lOKSAvLyBHdWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICAgIC5vbihFdmVudCQ1LkZPQ1VTSU4sIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiBfdGhpczQuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiAkKF90aGlzNC5fZWxlbWVudCkuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgX3RoaXM0Ll9lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3NldEVzY2FwZUV2ZW50ID0gZnVuY3Rpb24gX3NldEVzY2FwZUV2ZW50KCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JDUuS0VZRE9XTl9ESVNNSVNTLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFJDEpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIF90aGlzNS5oaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQkNS5LRVlET1dOX0RJU01JU1MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX3NldFJlc2l6ZUV2ZW50ID0gZnVuY3Rpb24gX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICAgICQod2luZG93KS5vbihFdmVudCQ1LlJFU0laRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNi5oYW5kbGVVcGRhdGUoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQod2luZG93KS5vZmYoRXZlbnQkNS5SRVNJWkUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2hpZGVNb2RhbCA9IGZ1bmN0aW9uIF9oaWRlTW9kYWwoKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKTtcblxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDUuT1BFTik7XG5cbiAgICAgICAgX3RoaXM3Ll9yZXNldEFkanVzdG1lbnRzKCk7XG5cbiAgICAgICAgX3RoaXM3Ll9yZXNldFNjcm9sbGJhcigpO1xuXG4gICAgICAgICQoX3RoaXM3Ll9lbGVtZW50KS50cmlnZ2VyKEV2ZW50JDUuSElEREVOKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3JlbW92ZUJhY2tkcm9wID0gZnVuY3Rpb24gX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgICAgaWYgKHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fc2hvd0JhY2tkcm9wID0gZnVuY3Rpb24gX3Nob3dCYWNrZHJvcChjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgIHZhciBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkNS5GQURFKSA/IENsYXNzTmFtZSQ1LkZBREUgOiAnJztcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENsYXNzTmFtZSQ1LkJBQ0tEUk9QO1xuXG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JDUuQ0xJQ0tfRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKF90aGlzOC5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgICAgX3RoaXM4Ll9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfdGhpczguX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgIF90aGlzOC5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczguaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9iYWNrZHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hZGRDbGFzcyhDbGFzc05hbWUkNS5TSE9XKTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKTtcbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duICYmIHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ1LlNIT1cpO1xuXG4gICAgICAgIHZhciBjYWxsYmFja1JlbW92ZSA9IGZ1bmN0aW9uIGNhbGxiYWNrUmVtb3ZlKCkge1xuICAgICAgICAgIF90aGlzOC5fcmVtb3ZlQmFja2Ryb3AoKTtcblxuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDUuRkFERSkpIHtcbiAgICAgICAgICB2YXIgX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcCk7XG5cbiAgICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2tSZW1vdmUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKF9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2tSZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gICAgLy8gdG9kbyAoZmF0KTogdGhlc2Ugc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgb3V0IG9mIG1vZGFsLmpzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIDtcblxuICAgIF9wcm90by5fYWRqdXN0RGlhbG9nID0gZnVuY3Rpb24gX2FkanVzdERpYWxvZygpIHtcbiAgICAgIHZhciBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGlmICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSB0aGlzLl9zY3JvbGxiYXJXaWR0aCArIFwicHhcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLl9zY3JvbGxiYXJXaWR0aCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9yZXNldEFkanVzdG1lbnRzID0gZnVuY3Rpb24gX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NoZWNrU2Nyb2xsYmFyID0gZnVuY3Rpb24gX2NoZWNrU2Nyb2xsYmFyKCkge1xuICAgICAgdmFyIHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSByZWN0LmxlZnQgKyByZWN0LnJpZ2h0IDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gX3NldFNjcm9sbGJhcigpIHtcbiAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgLy8gTm90ZTogRE9NTm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgcmV0dXJucyB0aGUgYWN0dWFsIHZhbHVlIG9yICcnIGlmIG5vdCBzZXRcbiAgICAgICAgLy8gICB3aGlsZSAkKERPTU5vZGUpLmNzcygncGFkZGluZy1yaWdodCcpIHJldHVybnMgdGhlIGNhbGN1bGF0ZWQgdmFsdWUgb3IgMCBpZiBub3Qgc2V0XG4gICAgICAgIHZhciBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkNS5GSVhFRF9DT05URU5UKSk7XG4gICAgICAgIHZhciBzdGlja3lDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDUuU1RJQ0tZX0NPTlRFTlQpKTsgLy8gQWRqdXN0IGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuXG4gICAgICAgICQoZml4ZWRDb250ZW50KS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgIHZhciBhY3R1YWxQYWRkaW5nID0gZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgICAgICAgdmFyIGNhbGN1bGF0ZWRQYWRkaW5nID0gJChlbGVtZW50KS5jc3MoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCBwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIF90aGlzOS5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCIpO1xuICAgICAgICB9KTsgLy8gQWRqdXN0IHN0aWNreSBjb250ZW50IG1hcmdpblxuXG4gICAgICAgICQoc3RpY2t5Q29udGVudCkuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgYWN0dWFsTWFyZ2luID0gZWxlbWVudC5zdHlsZS5tYXJnaW5SaWdodDtcbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZE1hcmdpbiA9ICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ21hcmdpbi1yaWdodCcsIGFjdHVhbE1hcmdpbikuY3NzKCdtYXJnaW4tcmlnaHQnLCBwYXJzZUZsb2F0KGNhbGN1bGF0ZWRNYXJnaW4pIC0gX3RoaXM5Ll9zY3JvbGxiYXJXaWR0aCArIFwicHhcIik7XG4gICAgICAgIH0pOyAvLyBBZGp1c3QgYm9keSBwYWRkaW5nXG5cbiAgICAgICAgdmFyIGFjdHVhbFBhZGRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICAgICAgdmFyIGNhbGN1bGF0ZWRQYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5jc3MoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgcGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aCArIFwicHhcIik7XG4gICAgICB9XG5cbiAgICAgICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDUuT1BFTik7XG4gICAgfTtcblxuICAgIF9wcm90by5fcmVzZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiBfcmVzZXRTY3JvbGxiYXIoKSB7XG4gICAgICAvLyBSZXN0b3JlIGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuICAgICAgdmFyIGZpeGVkQ29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQ1LkZJWEVEX0NPTlRFTlQpKTtcbiAgICAgICQoZml4ZWRDb250ZW50KS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICB2YXIgcGFkZGluZyA9ICQoZWxlbWVudCkuZGF0YSgncGFkZGluZy1yaWdodCcpO1xuICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nID8gcGFkZGluZyA6ICcnO1xuICAgICAgfSk7IC8vIFJlc3RvcmUgc3RpY2t5IGNvbnRlbnRcblxuICAgICAgdmFyIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiXCIgKyBTZWxlY3RvciQ1LlNUSUNLWV9DT05URU5UKSk7XG4gICAgICAkKGVsZW1lbnRzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICB2YXIgbWFyZ2luID0gJChlbGVtZW50KS5kYXRhKCdtYXJnaW4tcmlnaHQnKTtcblxuICAgICAgICBpZiAodHlwZW9mIG1hcmdpbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JywgbWFyZ2luKS5yZW1vdmVEYXRhKCdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFJlc3RvcmUgYm9keSBwYWRkaW5nXG5cbiAgICAgIHZhciBwYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5kYXRhKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRTY3JvbGxiYXJXaWR0aCA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxiYXJXaWR0aCgpIHtcbiAgICAgIC8vIHRoeCBkLndhbHNoXG4gICAgICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ2xhc3NOYW1lJDUuU0NST0xMQkFSX01FQVNVUkVSO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICAgICAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICAgICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgTW9kYWwuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkkNSk7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBEZWZhdWx0JDMsICQodGhpcykuZGF0YSgpLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBNb2RhbCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVkkNSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIGlmIChfY29uZmlnLnNob3cpIHtcbiAgICAgICAgICBkYXRhLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoTW9kYWwsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdCQzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNb2RhbDtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50JDUuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yJDUuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgIHZhciB0YXJnZXQ7XG4gICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpO1xuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICB2YXIgY29uZmlnID0gJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkkNSkgPyAndG9nZ2xlJyA6IF9vYmplY3RTcHJlYWQoe30sICQodGFyZ2V0KS5kYXRhKCksICQodGhpcykuZGF0YSgpKTtcblxuICAgIGlmICh0aGlzLnRhZ05hbWUgPT09ICdBJyB8fCB0aGlzLnRhZ05hbWUgPT09ICdBUkVBJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KS5vbmUoRXZlbnQkNS5TSE9XLCBmdW5jdGlvbiAoc2hvd0V2ZW50KSB7XG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIC8vIE9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkdGFyZ2V0Lm9uZShFdmVudCQ1LkhJRERFTiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJChfdGhpczEwKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgIF90aGlzMTAuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcsIHRoaXMpO1xuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRSQ1XSA9IE1vZGFsLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRSQ1XS5Db25zdHJ1Y3RvciA9IE1vZGFsO1xuXG4gICQuZm5bTkFNRSQ1XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRSQ1XSA9IEpRVUVSWV9OT19DT05GTElDVCQ1O1xuICAgIHJldHVybiBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY0LjMuMSk6IHRvb2xzL3Nhbml0aXplci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIHVyaUF0dHJzID0gWydiYWNrZ3JvdW5kJywgJ2NpdGUnLCAnaHJlZicsICdpdGVtdHlwZScsICdsb25nZGVzYycsICdwb3N0ZXInLCAnc3JjJywgJ3hsaW5rOmhyZWYnXTtcbiAgdmFyIEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaTtcbiAgdmFyIERlZmF1bHRXaGl0ZWxpc3QgPSB7XG4gICAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICAgIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gICAgYXJlYTogW10sXG4gICAgYjogW10sXG4gICAgYnI6IFtdLFxuICAgIGNvbDogW10sXG4gICAgY29kZTogW10sXG4gICAgZGl2OiBbXSxcbiAgICBlbTogW10sXG4gICAgaHI6IFtdLFxuICAgIGgxOiBbXSxcbiAgICBoMjogW10sXG4gICAgaDM6IFtdLFxuICAgIGg0OiBbXSxcbiAgICBoNTogW10sXG4gICAgaDY6IFtdLFxuICAgIGk6IFtdLFxuICAgIGltZzogWydzcmMnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICAgIGxpOiBbXSxcbiAgICBvbDogW10sXG4gICAgcDogW10sXG4gICAgcHJlOiBbXSxcbiAgICBzOiBbXSxcbiAgICBzbWFsbDogW10sXG4gICAgc3BhbjogW10sXG4gICAgc3ViOiBbXSxcbiAgICBzdXA6IFtdLFxuICAgIHN0cm9uZzogW10sXG4gICAgdTogW10sXG4gICAgdWw6IFtdXG4gICAgLyoqXG4gICAgICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICAgICAqXG4gICAgICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICAgICAqL1xuXG4gIH07XG4gIHZhciBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZSk6fFteJjovPyNdKig/OlsvPyNdfCQpKS9naTtcbiAgLyoqXG4gICAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICAgKlxuICAgKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gICAqL1xuXG4gIHZhciBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhOig/OmltYWdlXFwvKD86Ym1wfGdpZnxqcGVnfGpwZ3xwbmd8dGlmZnx3ZWJwKXx2aWRlb1xcLyg/Om1wZWd8bXA0fG9nZ3x3ZWJtKXxhdWRpb1xcLyg/Om1wM3xvZ2F8b2dnfG9wdXMpKTtiYXNlNjQsW2EtejAtOSsvXSs9KiQvaTtcblxuICBmdW5jdGlvbiBhbGxvd2VkQXR0cmlidXRlKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSB7XG4gICAgdmFyIGF0dHJOYW1lID0gYXR0ci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgICAgaWYgKHVyaUF0dHJzLmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihhdHRyLm5vZGVWYWx1ZS5tYXRjaChTQUZFX1VSTF9QQVRURVJOKSB8fCBhdHRyLm5vZGVWYWx1ZS5tYXRjaChEQVRBX1VSTF9QQVRURVJOKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciByZWdFeHAgPSBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGF0dHJSZWdleCkge1xuICAgICAgcmV0dXJuIGF0dHJSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cDtcbiAgICB9KTsgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhdHRyTmFtZS5tYXRjaChyZWdFeHBbaV0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCB3aGl0ZUxpc3QsIHNhbml0aXplRm4pIHtcbiAgICBpZiAodW5zYWZlSHRtbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bnNhZmVIdG1sO1xuICAgIH1cblxuICAgIGlmIChzYW5pdGl6ZUZuICYmIHR5cGVvZiBzYW5pdGl6ZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKTtcbiAgICB9XG5cbiAgICB2YXIgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcbiAgICB2YXIgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJyk7XG4gICAgdmFyIHdoaXRlbGlzdEtleXMgPSBPYmplY3Qua2V5cyh3aGl0ZUxpc3QpO1xuICAgIHZhciBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGksIGxlbikge1xuICAgICAgdmFyIGVsID0gZWxlbWVudHNbaV07XG4gICAgICB2YXIgZWxOYW1lID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgaWYgKHdoaXRlbGlzdEtleXMuaW5kZXhPZihlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBhdHRyaWJ1dGVMaXN0ID0gW10uc2xpY2UuY2FsbChlbC5hdHRyaWJ1dGVzKTtcbiAgICAgIHZhciB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQod2hpdGVMaXN0WycqJ10gfHwgW10sIHdoaXRlTGlzdFtlbE5hbWVdIHx8IFtdKTtcbiAgICAgIGF0dHJpYnV0ZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChpLCBsZW4pO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FJDYgPSAndG9vbHRpcCc7XG4gIHZhciBWRVJTSU9OJDYgPSAnNC4zLjEnO1xuICB2YXIgREFUQV9LRVkkNiA9ICdicy50b29sdGlwJztcbiAgdmFyIEVWRU5UX0tFWSQ2ID0gXCIuXCIgKyBEQVRBX0tFWSQ2O1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDYgPSAkLmZuW05BTUUkNl07XG4gIHZhciBDTEFTU19QUkVGSVggPSAnYnMtdG9vbHRpcCc7XG4gIHZhciBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBDTEFTU19QUkVGSVggKyBcIlxcXFxTK1wiLCAnZycpO1xuICB2YXIgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gWydzYW5pdGl6ZScsICd3aGl0ZUxpc3QnLCAnc2FuaXRpemVGbiddO1xuICB2YXIgRGVmYXVsdFR5cGUkNCA9IHtcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gICAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgICB0cmlnZ2VyOiAnc3RyaW5nJyxcbiAgICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gICAgaHRtbDogJ2Jvb2xlYW4nLFxuICAgIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIG9mZnNldDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgICBmYWxsYmFja1BsYWNlbWVudDogJyhzdHJpbmd8YXJyYXkpJyxcbiAgICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICAgIHNhbml0aXplOiAnYm9vbGVhbicsXG4gICAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gICAgd2hpdGVMaXN0OiAnb2JqZWN0J1xuICB9O1xuICB2YXIgQXR0YWNobWVudE1hcCQxID0ge1xuICAgIEFVVE86ICdhdXRvJyxcbiAgICBUT1A6ICd0b3AnLFxuICAgIFJJR0hUOiAncmlnaHQnLFxuICAgIEJPVFRPTTogJ2JvdHRvbScsXG4gICAgTEVGVDogJ2xlZnQnXG4gIH07XG4gIHZhciBEZWZhdWx0JDQgPSB7XG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgICB0aXRsZTogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6ICdmbGlwJyxcbiAgICBib3VuZGFyeTogJ3Njcm9sbFBhcmVudCcsXG4gICAgc2FuaXRpemU6IHRydWUsXG4gICAgc2FuaXRpemVGbjogbnVsbCxcbiAgICB3aGl0ZUxpc3Q6IERlZmF1bHRXaGl0ZWxpc3RcbiAgfTtcbiAgdmFyIEhvdmVyU3RhdGUgPSB7XG4gICAgU0hPVzogJ3Nob3cnLFxuICAgIE9VVDogJ291dCdcbiAgfTtcbiAgdmFyIEV2ZW50JDYgPSB7XG4gICAgSElERTogXCJoaWRlXCIgKyBFVkVOVF9LRVkkNixcbiAgICBISURERU46IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkNixcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSQ2LFxuICAgIFNIT1dOOiBcInNob3duXCIgKyBFVkVOVF9LRVkkNixcbiAgICBJTlNFUlRFRDogXCJpbnNlcnRlZFwiICsgRVZFTlRfS0VZJDYsXG4gICAgQ0xJQ0s6IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQ2LFxuICAgIEZPQ1VTSU46IFwiZm9jdXNpblwiICsgRVZFTlRfS0VZJDYsXG4gICAgRk9DVVNPVVQ6IFwiZm9jdXNvdXRcIiArIEVWRU5UX0tFWSQ2LFxuICAgIE1PVVNFRU5URVI6IFwibW91c2VlbnRlclwiICsgRVZFTlRfS0VZJDYsXG4gICAgTU9VU0VMRUFWRTogXCJtb3VzZWxlYXZlXCIgKyBFVkVOVF9LRVkkNlxuICB9O1xuICB2YXIgQ2xhc3NOYW1lJDYgPSB7XG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIFNIT1c6ICdzaG93J1xuICB9O1xuICB2YXIgU2VsZWN0b3IkNiA9IHtcbiAgICBUT09MVElQOiAnLnRvb2x0aXAnLFxuICAgIFRPT0xUSVBfSU5ORVI6ICcudG9vbHRpcC1pbm5lcicsXG4gICAgQVJST1c6ICcuYXJyb3cnXG4gIH07XG4gIHZhciBUcmlnZ2VyID0ge1xuICAgIEhPVkVSOiAnaG92ZXInLFxuICAgIEZPQ1VTOiAnZm9jdXMnLFxuICAgIENMSUNLOiAnY2xpY2snLFxuICAgIE1BTlVBTDogJ21hbnVhbCdcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgVG9vbHRpcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvb2x0aXAoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgICAgICogUG9wcGVyIC0gaHR0cHM6Ly9wb3BwZXIuanMub3JnXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcvKScpO1xuICAgICAgfSAvLyBwcml2YXRlXG5cblxuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSAwO1xuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9O1xuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDsgLy8gUHJvdGVjdGVkXG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy50aXAgPSBudWxsO1xuXG4gICAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKTtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IFRvb2x0aXAucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNhYmxlID0gZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfcHJvdG8udG9nZ2xlRW5hYmxlZCA9IGZ1bmN0aW9uIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkO1xuICAgIH07XG5cbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2s7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDYuU0hPVykpIHtcbiAgICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKTtcbiAgICAgICQodGhpcy5lbGVtZW50KS5vZmYodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpO1xuICAgICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9mZignaGlkZS5icy5tb2RhbCcpO1xuXG4gICAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICAgJCh0aGlzLnRpcCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IG51bGw7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSBudWxsO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLmNvbmZpZyA9IG51bGw7XG4gICAgICB0aGlzLnRpcCA9IG51bGw7XG4gICAgfTtcblxuICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICgkKHRoaXMuZWxlbWVudCkuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaG93RXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVyk7XG5cbiAgICAgIGlmICh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KTtcbiAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSBVdGlsLmZpbmRTaGFkb3dSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHZhciBpc0luVGhlRG9tID0gJC5jb250YWlucyhzaGFkb3dSb290ICE9PSBudWxsID8gc2hhZG93Um9vdCA6IHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy5lbGVtZW50KTtcblxuICAgICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgICB2YXIgdGlwSWQgPSBVdGlsLmdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpO1xuICAgICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKTtcbiAgICAgICAgdGhpcy5zZXRDb250ZW50KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUkNi5GQURFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLmVsZW1lbnQpIDogdGhpcy5jb25maWcucGxhY2VtZW50O1xuXG4gICAgICAgIHZhciBhdHRhY2htZW50ID0gdGhpcy5fZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpO1xuXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9nZXRDb250YWluZXIoKTtcblxuICAgICAgICAkKHRpcCkuZGF0YSh0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKTtcblxuICAgICAgICBpZiAoISQuY29udGFpbnModGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLnRpcCkpIHtcbiAgICAgICAgICAkKHRpcCkuYXBwZW5kVG8oY29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpO1xuICAgICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHRoaXMuZWxlbWVudCwgdGlwLCB7XG4gICAgICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKSxcbiAgICAgICAgICAgIGZsaXA6IHtcbiAgICAgICAgICAgICAgYmVoYXZpb3I6IHRoaXMuY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICAgICAgZWxlbWVudDogU2VsZWN0b3IkNi5BUlJPV1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5jb25maWcuYm91bmRhcnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZShkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5vcmlnaW5hbFBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgX3RoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZShkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDYuU0hPVyk7IC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG5cbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5fZml4VHJhbnNpdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwcmV2SG92ZXJTdGF0ZSA9IF90aGlzLl9ob3ZlclN0YXRlO1xuICAgICAgICAgIF90aGlzLl9ob3ZlclN0YXRlID0gbnVsbDtcbiAgICAgICAgICAkKF90aGlzLmVsZW1lbnQpLnRyaWdnZXIoX3RoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pO1xuXG4gICAgICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICAgICAgX3RoaXMuX2xlYXZlKG51bGwsIF90aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZSQ2LkZBREUpKSB7XG4gICAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy50aXApO1xuICAgICAgICAgICQodGhpcy50aXApLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZShjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSk7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAoX3RoaXMyLl9ob3ZlclN0YXRlICE9PSBIb3ZlclN0YXRlLlNIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMyLl9jbGVhblRpcENsYXNzKCk7XG5cbiAgICAgICAgX3RoaXMyLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG5cbiAgICAgICAgJChfdGhpczIuZWxlbWVudCkudHJpZ2dlcihfdGhpczIuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKTtcblxuICAgICAgICBpZiAoX3RoaXMyLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBfdGhpczIuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ2LlNIT1cpOyAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcblxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuQ0xJQ0tdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuRk9DVVNdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuSE9WRVJdID0gZmFsc2U7XG5cbiAgICAgIGlmICgkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUkNi5GQURFKSkge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aXApO1xuICAgICAgICAkKHRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnO1xuICAgIH07XG5cbiAgICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIFByb3RlY3RlZFxuICAgIDtcblxuICAgIF9wcm90by5pc1dpdGhDb250ZW50ID0gZnVuY3Rpb24gaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5hZGRBdHRhY2htZW50Q2xhc3MgPSBmdW5jdGlvbiBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoQ0xBU1NfUFJFRklYICsgXCItXCIgKyBhdHRhY2htZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmdldFRpcEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRUaXBFbGVtZW50KCkge1xuICAgICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXTtcbiAgICAgIHJldHVybiB0aGlzLnRpcDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNldENvbnRlbnQgPSBmdW5jdGlvbiBzZXRDb250ZW50KCkge1xuICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkKHRpcC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDYuVE9PTFRJUF9JTk5FUikpLCB0aGlzLmdldFRpdGxlKCkpO1xuICAgICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ2LkZBREUgKyBcIiBcIiArIENsYXNzTmFtZSQ2LlNIT1cpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0RWxlbWVudENvbnRlbnQgPSBmdW5jdGlvbiBzZXRFbGVtZW50Q29udGVudCgkZWxlbWVudCwgY29udGVudCkge1xuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnb2JqZWN0JyAmJiAoY29udGVudC5ub2RlVHlwZSB8fCBjb250ZW50LmpxdWVyeSkpIHtcbiAgICAgICAgLy8gQ29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICAgICAgaWYgKCEkKGNvbnRlbnQpLnBhcmVudCgpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKS5hcHBlbmQoY29udGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRlbGVtZW50LnRleHQoJChjb250ZW50KS50ZXh0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuc2FuaXRpemUpIHtcbiAgICAgICAgICBjb250ZW50ID0gc2FuaXRpemVIdG1sKGNvbnRlbnQsIHRoaXMuY29uZmlnLndoaXRlTGlzdCwgdGhpcy5jb25maWcuc2FuaXRpemVGbik7XG4gICAgICAgIH1cblxuICAgICAgICAkZWxlbWVudC5odG1sKGNvbnRlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsZW1lbnQudGV4dChjb250ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmdldFRpdGxlID0gZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gICAgICB2YXIgdGl0bGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJyk7XG5cbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy50aXRsZS5jYWxsKHRoaXMuZWxlbWVudCkgOiB0aGlzLmNvbmZpZy50aXRsZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gX2dldE9mZnNldCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9mZnNldC5mbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgZGF0YS5vZmZzZXRzID0gX29iamVjdFNwcmVhZCh7fSwgZGF0YS5vZmZzZXRzLCBfdGhpczMuY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIF90aGlzMy5lbGVtZW50KSB8fCB7fSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5jb25maWcub2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldENvbnRhaW5lciA9IGZ1bmN0aW9uIF9nZXRDb250YWluZXIoKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuY29udGFpbmVyID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgICAgIH1cblxuICAgICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuY29uZmlnLmNvbnRhaW5lcikpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcy5jb25maWcuY29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICQoZG9jdW1lbnQpLmZpbmQodGhpcy5jb25maWcuY29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRBdHRhY2htZW50ID0gZnVuY3Rpb24gX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gQXR0YWNobWVudE1hcCQxW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfc2V0TGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKTtcbiAgICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAkKF90aGlzNC5lbGVtZW50KS5vbihfdGhpczQuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssIF90aGlzNC5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC50b2dnbGUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRyaWdnZXIuTUFOVUFMKSB7XG4gICAgICAgICAgdmFyIGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID8gX3RoaXM0LmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVIgOiBfdGhpczQuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTjtcbiAgICAgICAgICB2YXIgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID8gX3RoaXM0LmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOiBfdGhpczQuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVQ7XG4gICAgICAgICAgJChfdGhpczQuZWxlbWVudCkub24oZXZlbnRJbiwgX3RoaXM0LmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM0Ll9lbnRlcihldmVudCk7XG4gICAgICAgICAgfSkub24oZXZlbnRPdXQsIF90aGlzNC5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5fbGVhdmUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzNC5lbGVtZW50KSB7XG4gICAgICAgICAgX3RoaXM0LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIHRoaXMuY29uZmlnLCB7XG4gICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgc2VsZWN0b3I6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZml4VGl0bGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9maXhUaXRsZSA9IGZ1bmN0aW9uIF9maXhUaXRsZSgpIHtcbiAgICAgIHZhciB0aXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpO1xuXG4gICAgICBpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCB0aXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICcnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fZW50ZXIgPSBmdW5jdGlvbiBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KTtcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUl0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoJChjb250ZXh0LmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDYuU0hPVykgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1c7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpO1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuU0hPVztcblxuICAgICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgICBjb250ZXh0LnNob3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLlNIT1cpIHtcbiAgICAgICAgICBjb250ZXh0LnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuc2hvdyk7XG4gICAgfTtcblxuICAgIF9wcm90by5fbGVhdmUgPSBmdW5jdGlvbiBfbGVhdmUoZXZlbnQsIGNvbnRleHQpIHtcbiAgICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KTtcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJdID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dCk7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5PVVQ7XG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgICBjb250ZXh0LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSk7XG4gICAgfTtcblxuICAgIF9wcm90by5faXNXaXRoQWN0aXZlVHJpZ2dlciA9IGZ1bmN0aW9uIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgICAgZm9yICh2YXIgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICB2YXIgZGF0YUF0dHJpYnV0ZXMgPSAkKHRoaXMuZWxlbWVudCkuZGF0YSgpO1xuICAgICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGRhdGFBdHRyKSB7XG4gICAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaW5kZXhPZihkYXRhQXR0cikgIT09IC0xKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsIGRhdGFBdHRyaWJ1dGVzLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSQ2LCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpO1xuXG4gICAgICBpZiAoY29uZmlnLnNhbml0aXplKSB7XG4gICAgICAgIGNvbmZpZy50ZW1wbGF0ZSA9IHNhbml0aXplSHRtbChjb25maWcudGVtcGxhdGUsIGNvbmZpZy53aGl0ZUxpc3QsIGNvbmZpZy5zYW5pdGl6ZUZuKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXREZWxlZ2F0ZUNvbmZpZyA9IGZ1bmN0aW9uIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICAgIHZhciBjb25maWcgPSB7fTtcblxuICAgICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNvbmZpZykge1xuICAgICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5jb25maWdba2V5XSkge1xuICAgICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NsZWFuVGlwQ2xhc3MgPSBmdW5jdGlvbiBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICAgIHZhciAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSk7XG4gICAgICB2YXIgdGFiQ2xhc3MgPSAkdGlwLmF0dHIoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKTtcblxuICAgICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCkge1xuICAgICAgICAkdGlwLnJlbW92ZUNsYXNzKHRhYkNsYXNzLmpvaW4oJycpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UgPSBmdW5jdGlvbiBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKHBvcHBlckRhdGEpIHtcbiAgICAgIHZhciBwb3BwZXJJbnN0YW5jZSA9IHBvcHBlckRhdGEuaW5zdGFuY2U7XG4gICAgICB0aGlzLnRpcCA9IHBvcHBlckluc3RhbmNlLnBvcHBlcjtcblxuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpO1xuXG4gICAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KHBvcHBlckRhdGEucGxhY2VtZW50KSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fZml4VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIF9maXhUcmFuc2l0aW9uKCkge1xuICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdmFyIGluaXRDb25maWdBbmltYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRpb247XG5cbiAgICAgIGlmICh0aXAuZ2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcpICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ2LkZBREUpO1xuICAgICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gaW5pdENvbmZpZ0FuaW1hdGlvbjtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkkNik7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWc7XG5cbiAgICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVkkNiwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKFRvb2x0aXAsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDY7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdCQ0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJOQU1FXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIE5BTUUkNjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiREFUQV9LRVlcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gREFUQV9LRVkkNjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRXZlbnRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRXZlbnQkNjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRVZFTlRfS0VZXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEVWRU5UX0tFWSQ2O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0VHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ0O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUb29sdGlwO1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQuZm5bTkFNRSQ2XSA9IFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FJDZdLkNvbnN0cnVjdG9yID0gVG9vbHRpcDtcblxuICAkLmZuW05BTUUkNl0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkNl0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNjtcbiAgICByZXR1cm4gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQ3ID0gJ3BvcG92ZXInO1xuICB2YXIgVkVSU0lPTiQ3ID0gJzQuMy4xJztcbiAgdmFyIERBVEFfS0VZJDcgPSAnYnMucG9wb3Zlcic7XG4gIHZhciBFVkVOVF9LRVkkNyA9IFwiLlwiICsgREFUQV9LRVkkNztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ3ID0gJC5mbltOQU1FJDddO1xuICB2YXIgQ0xBU1NfUFJFRklYJDEgPSAnYnMtcG9wb3Zlcic7XG4gIHZhciBCU0NMU19QUkVGSVhfUkVHRVgkMSA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIENMQVNTX1BSRUZJWCQxICsgXCJcXFxcUytcIiwgJ2cnKTtcblxuICB2YXIgRGVmYXVsdCQ1ID0gX29iamVjdFNwcmVhZCh7fSwgVG9vbHRpcC5EZWZhdWx0LCB7XG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgY29udGVudDogJycsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICsgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nXG4gIH0pO1xuXG4gIHZhciBEZWZhdWx0VHlwZSQ1ID0gX29iamVjdFNwcmVhZCh7fSwgVG9vbHRpcC5EZWZhdWx0VHlwZSwge1xuICAgIGNvbnRlbnQ6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xuICB9KTtcblxuICB2YXIgQ2xhc3NOYW1lJDcgPSB7XG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIFNIT1c6ICdzaG93J1xuICB9O1xuICB2YXIgU2VsZWN0b3IkNyA9IHtcbiAgICBUSVRMRTogJy5wb3BvdmVyLWhlYWRlcicsXG4gICAgQ09OVEVOVDogJy5wb3BvdmVyLWJvZHknXG4gIH07XG4gIHZhciBFdmVudCQ3ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZJDcsXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZJDcsXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkNyxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZJDcsXG4gICAgSU5TRVJURUQ6IFwiaW5zZXJ0ZWRcIiArIEVWRU5UX0tFWSQ3LFxuICAgIENMSUNLOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkNyxcbiAgICBGT0NVU0lOOiBcImZvY3VzaW5cIiArIEVWRU5UX0tFWSQ3LFxuICAgIEZPQ1VTT1VUOiBcImZvY3Vzb3V0XCIgKyBFVkVOVF9LRVkkNyxcbiAgICBNT1VTRUVOVEVSOiBcIm1vdXNlZW50ZXJcIiArIEVWRU5UX0tFWSQ3LFxuICAgIE1PVVNFTEVBVkU6IFwibW91c2VsZWF2ZVwiICsgRVZFTlRfS0VZJDdcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgUG9wb3ZlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9Ub29sdGlwKSB7XG4gICAgX2luaGVyaXRzTG9vc2UoUG9wb3ZlciwgX1Rvb2x0aXApO1xuXG4gICAgZnVuY3Rpb24gUG9wb3ZlcigpIHtcbiAgICAgIHJldHVybiBfVG9vbHRpcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90byA9IFBvcG92ZXIucHJvdG90eXBlO1xuXG4gICAgLy8gT3ZlcnJpZGVzXG4gICAgX3Byb3RvLmlzV2l0aENvbnRlbnQgPSBmdW5jdGlvbiBpc1dpdGhDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KCk7XG4gICAgfTtcblxuICAgIF9wcm90by5hZGRBdHRhY2htZW50Q2xhc3MgPSBmdW5jdGlvbiBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoQ0xBU1NfUFJFRklYJDEgKyBcIi1cIiArIGF0dGFjaG1lbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0VGlwRWxlbWVudCA9IGZ1bmN0aW9uIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICQodGhpcy5jb25maWcudGVtcGxhdGUpWzBdO1xuICAgICAgcmV0dXJuIHRoaXMudGlwO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0Q29udGVudCA9IGZ1bmN0aW9uIHNldENvbnRlbnQoKSB7XG4gICAgICB2YXIgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpOyAvLyBXZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG5cbiAgICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yJDcuVElUTEUpLCB0aGlzLmdldFRpdGxlKCkpO1xuXG4gICAgICB2YXIgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LmNhbGwodGhpcy5lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IkNy5DT05URU5UKSwgY29udGVudCk7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ3LkZBREUgKyBcIiBcIiArIENsYXNzTmFtZSQ3LlNIT1cpO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uIF9nZXRDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpIHx8IHRoaXMuY29uZmlnLmNvbnRlbnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2xlYW5UaXBDbGFzcyA9IGZ1bmN0aW9uIF9jbGVhblRpcENsYXNzKCkge1xuICAgICAgdmFyICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKTtcbiAgICAgIHZhciB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgkMSk7XG5cbiAgICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgUG9wb3Zlci5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSQ3KTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbDtcblxuICAgICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSQ3LCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoUG9wb3ZlciwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICAvLyBHZXR0ZXJzXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT04kNztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0JDU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIk5BTUVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gTkFNRSQ3O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEQVRBX0tFWVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEQVRBX0tFWSQ3O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJFdmVudFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBFdmVudCQ3O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJFVkVOVF9LRVlcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRVZFTlRfS0VZJDc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRUeXBlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBvcG92ZXI7XG4gIH0oVG9vbHRpcCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQuZm5bTkFNRSQ3XSA9IFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FJDddLkNvbnN0cnVjdG9yID0gUG9wb3ZlcjtcblxuICAkLmZuW05BTUUkN10ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkN10gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNztcbiAgICByZXR1cm4gUG9wb3Zlci5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQ4ID0gJ3Njcm9sbHNweSc7XG4gIHZhciBWRVJTSU9OJDggPSAnNC4zLjEnO1xuICB2YXIgREFUQV9LRVkkOCA9ICdicy5zY3JvbGxzcHknO1xuICB2YXIgRVZFTlRfS0VZJDggPSBcIi5cIiArIERBVEFfS0VZJDg7XG4gIHZhciBEQVRBX0FQSV9LRVkkNiA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDggPSAkLmZuW05BTUUkOF07XG4gIHZhciBEZWZhdWx0JDYgPSB7XG4gICAgb2Zmc2V0OiAxMCxcbiAgICBtZXRob2Q6ICdhdXRvJyxcbiAgICB0YXJnZXQ6ICcnXG4gIH07XG4gIHZhciBEZWZhdWx0VHlwZSQ2ID0ge1xuICAgIG9mZnNldDogJ251bWJlcicsXG4gICAgbWV0aG9kOiAnc3RyaW5nJyxcbiAgICB0YXJnZXQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xuICB9O1xuICB2YXIgRXZlbnQkOCA9IHtcbiAgICBBQ1RJVkFURTogXCJhY3RpdmF0ZVwiICsgRVZFTlRfS0VZJDgsXG4gICAgU0NST0xMOiBcInNjcm9sbFwiICsgRVZFTlRfS0VZJDgsXG4gICAgTE9BRF9EQVRBX0FQSTogXCJsb2FkXCIgKyBFVkVOVF9LRVkkOCArIERBVEFfQVBJX0tFWSQ2XG4gIH07XG4gIHZhciBDbGFzc05hbWUkOCA9IHtcbiAgICBEUk9QRE9XTl9JVEVNOiAnZHJvcGRvd24taXRlbScsXG4gICAgRFJPUERPV05fTUVOVTogJ2Ryb3Bkb3duLW1lbnUnLFxuICAgIEFDVElWRTogJ2FjdGl2ZSdcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDggPSB7XG4gICAgREFUQV9TUFk6ICdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nLFxuICAgIEFDVElWRTogJy5hY3RpdmUnLFxuICAgIE5BVl9MSVNUX0dST1VQOiAnLm5hdiwgLmxpc3QtZ3JvdXAnLFxuICAgIE5BVl9MSU5LUzogJy5uYXYtbGluaycsXG4gICAgTkFWX0lURU1TOiAnLm5hdi1pdGVtJyxcbiAgICBMSVNUX0lURU1TOiAnLmxpc3QtZ3JvdXAtaXRlbScsXG4gICAgRFJPUERPV046ICcuZHJvcGRvd24nLFxuICAgIERST1BET1dOX0lURU1TOiAnLmRyb3Bkb3duLWl0ZW0nLFxuICAgIERST1BET1dOX1RPR0dMRTogJy5kcm9wZG93bi10b2dnbGUnXG4gIH07XG4gIHZhciBPZmZzZXRNZXRob2QgPSB7XG4gICAgT0ZGU0VUOiAnb2Zmc2V0JyxcbiAgICBQT1NJVElPTjogJ3Bvc2l0aW9uJ1xuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBTY3JvbGxTcHkgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY3JvbGxTcHkoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJyA/IHdpbmRvdyA6IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX3NlbGVjdG9yID0gdGhpcy5fY29uZmlnLnRhcmdldCArIFwiIFwiICsgU2VsZWN0b3IkOC5OQVZfTElOS1MgKyBcIixcIiArICh0aGlzLl9jb25maWcudGFyZ2V0ICsgXCIgXCIgKyBTZWxlY3RvciQ4LkxJU1RfSVRFTVMgKyBcIixcIikgKyAodGhpcy5fY29uZmlnLnRhcmdldCArIFwiIFwiICsgU2VsZWN0b3IkOC5EUk9QRE9XTl9JVEVNUyk7XG4gICAgICB0aGlzLl9vZmZzZXRzID0gW107XG4gICAgICB0aGlzLl90YXJnZXRzID0gW107XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsO1xuICAgICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gMDtcbiAgICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub24oRXZlbnQkOC5TQ1JPTEwsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX3Byb2Nlc3MoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgICAgdGhpcy5fcHJvY2VzcygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gU2Nyb2xsU3B5LnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by5yZWZyZXNoID0gZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgYXV0b01ldGhvZCA9IHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHRoaXMuX3Njcm9sbEVsZW1lbnQud2luZG93ID8gT2Zmc2V0TWV0aG9kLk9GRlNFVCA6IE9mZnNldE1ldGhvZC5QT1NJVElPTjtcbiAgICAgIHZhciBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bycgPyBhdXRvTWV0aG9kIDogdGhpcy5fY29uZmlnLm1ldGhvZDtcbiAgICAgIHZhciBvZmZzZXRCYXNlID0gb2Zmc2V0TWV0aG9kID09PSBPZmZzZXRNZXRob2QuUE9TSVRJT04gPyB0aGlzLl9nZXRTY3JvbGxUb3AoKSA6IDA7XG4gICAgICB0aGlzLl9vZmZzZXRzID0gW107XG4gICAgICB0aGlzLl90YXJnZXRzID0gW107XG4gICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKTtcbiAgICAgIHZhciB0YXJnZXRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yKSk7XG4gICAgICB0YXJnZXRzLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0O1xuICAgICAgICB2YXIgdGFyZ2V0U2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFNlbGVjdG9yKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgdmFyIHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIGlmICh0YXJnZXRCQ1Iud2lkdGggfHwgdGFyZ2V0QkNSLmhlaWdodCkge1xuICAgICAgICAgICAgLy8gVE9ETyAoZmF0KTogcmVtb3ZlIHNrZXRjaCByZWxpYW5jZSBvbiBqUXVlcnkgcG9zaXRpb24vb2Zmc2V0XG4gICAgICAgICAgICByZXR1cm4gWyQodGFyZ2V0KVtvZmZzZXRNZXRob2RdKCkudG9wICsgb2Zmc2V0QmFzZSwgdGFyZ2V0U2VsZWN0b3JdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIF90aGlzMi5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pO1xuXG4gICAgICAgIF90aGlzMi5fdGFyZ2V0cy5wdXNoKGl0ZW1bMV0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQ4KTtcbiAgICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub2ZmKEVWRU5UX0tFWSQ4KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgICAgdGhpcy5fc2VsZWN0b3IgPSBudWxsO1xuICAgICAgdGhpcy5fb2Zmc2V0cyA9IG51bGw7XG4gICAgICB0aGlzLl90YXJnZXRzID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG4gICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIERlZmF1bHQkNiwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBpZCA9ICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnKTtcblxuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgaWQgPSBVdGlsLmdldFVJRChOQU1FJDgpO1xuICAgICAgICAgICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnLCBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcudGFyZ2V0ID0gXCIjXCIgKyBpZDtcbiAgICAgIH1cblxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSQ4LCBjb25maWcsIERlZmF1bHRUeXBlJDYpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRTY3JvbGxUb3AgPSBmdW5jdGlvbiBfZ2V0U2Nyb2xsVG9wKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/IHRoaXMuX3Njcm9sbEVsZW1lbnQucGFnZVlPZmZzZXQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRTY3JvbGxIZWlnaHQgPSBmdW5jdGlvbiBfZ2V0U2Nyb2xsSGVpZ2h0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRPZmZzZXRIZWlnaHQgPSBmdW5jdGlvbiBfZ2V0T2Zmc2V0SGVpZ2h0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3Byb2Nlc3MgPSBmdW5jdGlvbiBfcHJvY2VzcygpIHtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLl9nZXRTY3JvbGxUb3AoKSArIHRoaXMuX2NvbmZpZy5vZmZzZXQ7XG5cbiAgICAgIHZhciBzY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKTtcblxuICAgICAgdmFyIG1heFNjcm9sbCA9IHRoaXMuX2NvbmZpZy5vZmZzZXQgKyBzY3JvbGxIZWlnaHQgLSB0aGlzLl9nZXRPZmZzZXRIZWlnaHQoKTtcblxuICAgICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0c1t0aGlzLl90YXJnZXRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1swXSAmJiB0aGlzLl9vZmZzZXRzWzBdID4gMCkge1xuICAgICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2Zmc2V0TGVuZ3RoID0gdGhpcy5fb2Zmc2V0cy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSBvZmZzZXRMZW5ndGg7IGktLTspIHtcbiAgICAgICAgdmFyIGlzQWN0aXZlVGFyZ2V0ID0gdGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0aGlzLl90YXJnZXRzW2ldICYmIHNjcm9sbFRvcCA+PSB0aGlzLl9vZmZzZXRzW2ldICYmICh0eXBlb2YgdGhpcy5fb2Zmc2V0c1tpICsgMV0gPT09ICd1bmRlZmluZWQnIHx8IHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbaSArIDFdKTtcblxuICAgICAgICBpZiAoaXNBY3RpdmVUYXJnZXQpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl90YXJnZXRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2FjdGl2YXRlID0gZnVuY3Rpb24gX2FjdGl2YXRlKHRhcmdldCkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgICB0aGlzLl9jbGVhcigpO1xuXG4gICAgICB2YXIgcXVlcmllcyA9IHRoaXMuX3NlbGVjdG9yLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3IgKyBcIltkYXRhLXRhcmdldD1cXFwiXCIgKyB0YXJnZXQgKyBcIlxcXCJdLFwiICsgc2VsZWN0b3IgKyBcIltocmVmPVxcXCJcIiArIHRhcmdldCArIFwiXFxcIl1cIjtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgJGxpbmsgPSAkKFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyaWVzLmpvaW4oJywnKSkpKTtcblxuICAgICAgaWYgKCRsaW5rLmhhc0NsYXNzKENsYXNzTmFtZSQ4LkRST1BET1dOX0lURU0pKSB7XG4gICAgICAgICRsaW5rLmNsb3Nlc3QoU2VsZWN0b3IkOC5EUk9QRE9XTikuZmluZChTZWxlY3RvciQ4LkRST1BET1dOX1RPR0dMRSkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDguQUNUSVZFKTtcbiAgICAgICAgJGxpbmsuYWRkQ2xhc3MoQ2xhc3NOYW1lJDguQUNUSVZFKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgICAgJGxpbmsuYWRkQ2xhc3MoQ2xhc3NOYW1lJDguQUNUSVZFKTsgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcblxuICAgICAgICAkbGluay5wYXJlbnRzKFNlbGVjdG9yJDguTkFWX0xJU1RfR1JPVVApLnByZXYoU2VsZWN0b3IkOC5OQVZfTElOS1MgKyBcIiwgXCIgKyBTZWxlY3RvciQ4LkxJU1RfSVRFTVMpLmFkZENsYXNzKENsYXNzTmFtZSQ4LkFDVElWRSk7IC8vIEhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiAubmF2LWxpbmsgaXMgaW5zaWRlIC5uYXYtaXRlbVxuXG4gICAgICAgICRsaW5rLnBhcmVudHMoU2VsZWN0b3IkOC5OQVZfTElTVF9HUk9VUCkucHJldihTZWxlY3RvciQ4Lk5BVl9JVEVNUykuY2hpbGRyZW4oU2VsZWN0b3IkOC5OQVZfTElOS1MpLmFkZENsYXNzKENsYXNzTmFtZSQ4LkFDVElWRSk7XG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkudHJpZ2dlcihFdmVudCQ4LkFDVElWQVRFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2xlYXIgPSBmdW5jdGlvbiBfY2xlYXIoKSB7XG4gICAgICBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3IpKS5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZSQ4LkFDVElWRSk7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lJDguQUNUSVZFKTtcbiAgICAgIH0pO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZJDgpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgU2Nyb2xsU3B5KHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSQ4LCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2Nyb2xsU3B5LCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQ4O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkNjtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU2Nyb2xsU3B5O1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJCh3aW5kb3cpLm9uKEV2ZW50JDguTE9BRF9EQVRBX0FQSSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBzY3JvbGxTcHlzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDguREFUQV9TUFkpKTtcbiAgICB2YXIgc2Nyb2xsU3B5c0xlbmd0aCA9IHNjcm9sbFNweXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IHNjcm9sbFNweXNMZW5ndGg7IGktLTspIHtcbiAgICAgIHZhciAkc3B5ID0gJChzY3JvbGxTcHlzW2ldKTtcblxuICAgICAgU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkc3B5LCAkc3B5LmRhdGEoKSk7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRSQ4XSA9IFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUUkOF0uQ29uc3RydWN0b3IgPSBTY3JvbGxTcHk7XG5cbiAgJC5mbltOQU1FJDhdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FJDhdID0gSlFVRVJZX05PX0NPTkZMSUNUJDg7XG4gICAgcmV0dXJuIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQ5ID0gJ3RhYic7XG4gIHZhciBWRVJTSU9OJDkgPSAnNC4zLjEnO1xuICB2YXIgREFUQV9LRVkkOSA9ICdicy50YWInO1xuICB2YXIgRVZFTlRfS0VZJDkgPSBcIi5cIiArIERBVEFfS0VZJDk7XG4gIHZhciBEQVRBX0FQSV9LRVkkNyA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDkgPSAkLmZuW05BTUUkOV07XG4gIHZhciBFdmVudCQ5ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZJDksXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZJDksXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkOSxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZJDksXG4gICAgQ0xJQ0tfREFUQV9BUEk6IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQ5ICsgREFUQV9BUElfS0VZJDdcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSQ5ID0ge1xuICAgIERST1BET1dOX01FTlU6ICdkcm9wZG93bi1tZW51JyxcbiAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgIERJU0FCTEVEOiAnZGlzYWJsZWQnLFxuICAgIEZBREU6ICdmYWRlJyxcbiAgICBTSE9XOiAnc2hvdydcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDkgPSB7XG4gICAgRFJPUERPV046ICcuZHJvcGRvd24nLFxuICAgIE5BVl9MSVNUX0dST1VQOiAnLm5hdiwgLmxpc3QtZ3JvdXAnLFxuICAgIEFDVElWRTogJy5hY3RpdmUnLFxuICAgIEFDVElWRV9VTDogJz4gbGkgPiAuYWN0aXZlJyxcbiAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtdG9nZ2xlPVwibGlzdFwiXScsXG4gICAgRFJPUERPV05fVE9HR0xFOiAnLmRyb3Bkb3duLXRvZ2dsZScsXG4gICAgRFJPUERPV05fQUNUSVZFX0NISUxEOiAnPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBUYWIgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYWIoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBUYWIucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAmJiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDkuQUNUSVZFKSB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQ5LkRJU0FCTEVEKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXQ7XG4gICAgICB2YXIgcHJldmlvdXM7XG4gICAgICB2YXIgbGlzdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IkOS5OQVZfTElTVF9HUk9VUClbMF07XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIGlmIChsaXN0RWxlbWVudCkge1xuICAgICAgICB2YXIgaXRlbVNlbGVjdG9yID0gbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdVTCcgfHwgbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdPTCcgPyBTZWxlY3RvciQ5LkFDVElWRV9VTCA6IFNlbGVjdG9yJDkuQUNUSVZFO1xuICAgICAgICBwcmV2aW91cyA9ICQubWFrZUFycmF5KCQobGlzdEVsZW1lbnQpLmZpbmQoaXRlbVNlbGVjdG9yKSk7XG4gICAgICAgIHByZXZpb3VzID0gcHJldmlvdXNbcHJldmlvdXMubGVuZ3RoIC0gMV07XG4gICAgICB9XG5cbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50JDkuSElERSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KTtcbiAgICAgIHZhciBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50JDkuU0hPVywge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGVFdmVudCk7XG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuXG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fZWxlbWVudCwgbGlzdEVsZW1lbnQpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgdmFyIGhpZGRlbkV2ZW50ID0gJC5FdmVudChFdmVudCQ5LkhJRERFTiwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IF90aGlzLl9lbGVtZW50XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc2hvd25FdmVudCA9ICQuRXZlbnQoRXZlbnQkOS5TSE9XTiwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICAgIH0pO1xuICAgICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGRlbkV2ZW50KTtcbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0LCB0YXJnZXQucGFyZW50Tm9kZSwgY29tcGxldGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJDkpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9hY3RpdmF0ZSA9IGZ1bmN0aW9uIF9hY3RpdmF0ZShlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnRzID0gY29udGFpbmVyICYmIChjb250YWluZXIubm9kZU5hbWUgPT09ICdVTCcgfHwgY29udGFpbmVyLm5vZGVOYW1lID09PSAnT0wnKSA/ICQoY29udGFpbmVyKS5maW5kKFNlbGVjdG9yJDkuQUNUSVZFX1VMKSA6ICQoY29udGFpbmVyKS5jaGlsZHJlbihTZWxlY3RvciQ5LkFDVElWRSk7XG4gICAgICB2YXIgYWN0aXZlID0gYWN0aXZlRWxlbWVudHNbMF07XG4gICAgICB2YXIgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgYWN0aXZlICYmICQoYWN0aXZlKS5oYXNDbGFzcyhDbGFzc05hbWUkOS5GQURFKTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChhY3RpdmUgJiYgaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZSk7XG4gICAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkOS5TSE9XKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX3RyYW5zaXRpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAkKGFjdGl2ZSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDkuQUNUSVZFKTtcbiAgICAgICAgdmFyIGRyb3Bkb3duQ2hpbGQgPSAkKGFjdGl2ZS5wYXJlbnROb2RlKS5maW5kKFNlbGVjdG9yJDkuRFJPUERPV05fQUNUSVZFX0NISUxEKVswXTtcblxuICAgICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICAgICQoZHJvcGRvd25DaGlsZCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDkuQUNUSVZFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgICAgYWN0aXZlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZSQ5LkFDVElWRSk7XG5cbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBVdGlsLnJlZmxvdyhlbGVtZW50KTtcblxuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZSQ5LkZBREUpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUkOS5TSE9XKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiAkKGVsZW1lbnQucGFyZW50Tm9kZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDkuRFJPUERPV05fTUVOVSkpIHtcbiAgICAgICAgdmFyIGRyb3Bkb3duRWxlbWVudCA9ICQoZWxlbWVudCkuY2xvc2VzdChTZWxlY3RvciQ5LkRST1BET1dOKVswXTtcblxuICAgICAgICBpZiAoZHJvcGRvd25FbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGRyb3Bkb3duVG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZHJvcGRvd25FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkOS5EUk9QRE9XTl9UT0dHTEUpKTtcbiAgICAgICAgICAkKGRyb3Bkb3duVG9nZ2xlTGlzdCkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDkuQUNUSVZFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgVGFiLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIHZhciBkYXRhID0gJHRoaXMuZGF0YShEQVRBX0tFWSQ5KTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFRhYih0aGlzKTtcbiAgICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZJDksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhUYWIsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRhYjtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50JDkuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yJDkuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdzaG93Jyk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FJDldID0gVGFiLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRSQ5XS5Db25zdHJ1Y3RvciA9IFRhYjtcblxuICAkLmZuW05BTUUkOV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkOV0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkOTtcbiAgICByZXR1cm4gVGFiLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FJGEgPSAndG9hc3QnO1xuICB2YXIgVkVSU0lPTiRhID0gJzQuMy4xJztcbiAgdmFyIERBVEFfS0VZJGEgPSAnYnMudG9hc3QnO1xuICB2YXIgRVZFTlRfS0VZJGEgPSBcIi5cIiArIERBVEFfS0VZJGE7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkYSA9ICQuZm5bTkFNRSRhXTtcbiAgdmFyIEV2ZW50JGEgPSB7XG4gICAgQ0xJQ0tfRElTTUlTUzogXCJjbGljay5kaXNtaXNzXCIgKyBFVkVOVF9LRVkkYSxcbiAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSRhLFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSRhLFxuICAgIFNIT1c6IFwic2hvd1wiICsgRVZFTlRfS0VZJGEsXG4gICAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWSRhXG4gIH07XG4gIHZhciBDbGFzc05hbWUkYSA9IHtcbiAgICBGQURFOiAnZmFkZScsXG4gICAgSElERTogJ2hpZGUnLFxuICAgIFNIT1c6ICdzaG93JyxcbiAgICBTSE9XSU5HOiAnc2hvd2luZydcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlJDcgPSB7XG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgYXV0b2hpZGU6ICdib29sZWFuJyxcbiAgICBkZWxheTogJ251bWJlcidcbiAgfTtcbiAgdmFyIERlZmF1bHQkNyA9IHtcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgYXV0b2hpZGU6IHRydWUsXG4gICAgZGVsYXk6IDUwMFxuICB9O1xuICB2YXIgU2VsZWN0b3IkYSA9IHtcbiAgICBEQVRBX0RJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwidG9hc3RcIl0nXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG5cbiAgdmFyIFRvYXN0ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9hc3QoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG5cbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gVG9hc3QucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50JGEuU0hPVyk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUkYS5GQURFKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIF90aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lJGEuU0hPV0lORyk7XG5cbiAgICAgICAgX3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUkYS5TSE9XKTtcblxuICAgICAgICAkKF90aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50JGEuU0hPV04pO1xuXG4gICAgICAgIGlmIChfdGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICAgICAgX3RoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lJGEuSElERSk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUkYS5TSE9XSU5HKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKHdpdGhvdXRUaW1lb3V0KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUkYS5TSE9XKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudCRhLkhJREUpO1xuXG4gICAgICBpZiAod2l0aG91dFRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX2Nsb3NlKCk7XG4gICAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lJGEuU0hPVykpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZSRhLlNIT1cpO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudCRhLkNMSUNLX0RJU01JU1MpO1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJGEpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIERlZmF1bHQkNywgJCh0aGlzLl9lbGVtZW50KS5kYXRhKCksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkYSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0TGlzdGVuZXJzID0gZnVuY3Rpb24gX3NldExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JGEuQ0xJQ0tfRElTTUlTUywgU2VsZWN0b3IkYS5EQVRBX0RJU01JU1MsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5oaWRlKHRydWUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2xvc2UgPSBmdW5jdGlvbiBfY2xvc2UoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIF90aGlzNC5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZSRhLkhJREUpO1xuXG4gICAgICAgICQoX3RoaXM0Ll9lbGVtZW50KS50cmlnZ2VyKEV2ZW50JGEuSElEREVOKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUkYS5TSE9XKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSRhKTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFRvYXN0KHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVkkYSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhUb2FzdCwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT04kYTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0JDc7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRvYXN0O1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQuZm5bTkFNRSRhXSA9IFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRSRhXS5Db25zdHJ1Y3RvciA9IFRvYXN0O1xuXG4gICQuZm5bTkFNRSRhXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRSRhXSA9IEpRVUVSWV9OT19DT05GTElDVCRhO1xuICAgIHJldHVybiBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY0LjMuMSk6IGluZGV4LmpzXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIEJvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdC4nKTtcbiAgICB9XG5cbiAgICB2YXIgdmVyc2lvbiA9ICQuZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKTtcbiAgICB2YXIgbWluTWFqb3IgPSAxO1xuICAgIHZhciBsdE1ham9yID0gMjtcbiAgICB2YXIgbWluTWlub3IgPSA5O1xuICAgIHZhciBtaW5QYXRjaCA9IDE7XG4gICAgdmFyIG1heE1ham9yID0gNDtcblxuICAgIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGF0IGxlYXN0IGpRdWVyeSB2MS45LjEgYnV0IGxlc3MgdGhhbiB2NC4wLjAnKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgZXhwb3J0cy5VdGlsID0gVXRpbDtcbiAgZXhwb3J0cy5BbGVydCA9IEFsZXJ0O1xuICBleHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcbiAgZXhwb3J0cy5DYXJvdXNlbCA9IENhcm91c2VsO1xuICBleHBvcnRzLkNvbGxhcHNlID0gQ29sbGFwc2U7XG4gIGV4cG9ydHMuRHJvcGRvd24gPSBEcm9wZG93bjtcbiAgZXhwb3J0cy5Nb2RhbCA9IE1vZGFsO1xuICBleHBvcnRzLlBvcG92ZXIgPSBQb3BvdmVyO1xuICBleHBvcnRzLlNjcm9sbHNweSA9IFNjcm9sbFNweTtcbiAgZXhwb3J0cy5UYWIgPSBUYWI7XG4gIGV4cG9ydHMuVG9hc3QgPSBUb2FzdDtcbiAgZXhwb3J0cy5Ub29sdGlwID0gVG9vbHRpcDtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib290c3RyYXAuYnVuZGxlLmpzLm1hcFxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKGZ1bmN0aW9uKCkge1xuXG4gICQoXCIjY29udGFjdEZvcm0gaW5wdXQsI2NvbnRhY3RGb3JtIHRleHRhcmVhXCIpLmpxQm9vdHN0cmFwVmFsaWRhdGlvbih7XG4gICAgcHJldmVudFN1Ym1pdDogdHJ1ZSxcbiAgICBzdWJtaXRFcnJvcjogZnVuY3Rpb24oJGZvcm0sIGV2ZW50LCBlcnJvcnMpIHtcbiAgICAgIC8vIGFkZGl0aW9uYWwgZXJyb3IgbWVzc2FnZXMgb3IgZXZlbnRzXG4gICAgfSxcbiAgICBzdWJtaXRTdWNjZXNzOiBmdW5jdGlvbigkZm9ybSwgZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgZGVmYXVsdCBzdWJtaXQgYmVoYXZpb3VyXG4gICAgICAvLyBnZXQgdmFsdWVzIGZyb20gRk9STVxuICAgICAgdmFyIG5hbWUgPSAkKFwiaW5wdXQjbmFtZVwiKS52YWwoKTtcbiAgICAgIHZhciBlbWFpbCA9ICQoXCJpbnB1dCNlbWFpbFwiKS52YWwoKTtcbiAgICAgIHZhciBwaG9uZSA9ICQoXCJpbnB1dCNwaG9uZVwiKS52YWwoKTtcbiAgICAgIHZhciBtZXNzYWdlID0gJChcInRleHRhcmVhI21lc3NhZ2VcIikudmFsKCk7XG4gICAgICB2YXIgZmlyc3ROYW1lID0gbmFtZTsgLy8gRm9yIFN1Y2Nlc3MvRmFpbHVyZSBNZXNzYWdlXG4gICAgICAvLyBDaGVjayBmb3Igd2hpdGUgc3BhY2UgaW4gbmFtZSBmb3IgU3VjY2Vzcy9GYWlsIG1lc3NhZ2VcbiAgICAgIGlmIChmaXJzdE5hbWUuaW5kZXhPZignICcpID49IDApIHtcbiAgICAgICAgZmlyc3ROYW1lID0gbmFtZS5zcGxpdCgnICcpLnNsaWNlKDAsIC0xKS5qb2luKCcgJyk7XG4gICAgICB9XG4gICAgICB2YXIgJHRoaXMgPSAkKFwiI3NlbmRNZXNzYWdlQnV0dG9uXCIpO1xuICAgICAgJHRoaXMucHJvcChcImRpc2FibGVkXCIsIHRydWUpOyAvLyBEaXNhYmxlIHN1Ym1pdCBidXR0b24gdW50aWwgQUpBWCBjYWxsIGlzIGNvbXBsZXRlIHRvIHByZXZlbnQgZHVwbGljYXRlIG1lc3NhZ2VzXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IFwiLi8uL0NvbnRyb2xsZXIvQ29udGFjdENvbnRyb2xsZXIucGhwXCIsXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBwaG9uZTogcGhvbmUsXG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBTdWNjZXNzIG1lc3NhZ2VcbiAgICAgICAgICAkKCcjc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC1zdWNjZXNzJz5cIik7XG4gICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtc3VjY2VzcycpLmh0bWwoXCI8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+JnRpbWVzO1wiKVxuICAgICAgICAgICAgLmFwcGVuZChcIjwvYnV0dG9uPlwiKTtcbiAgICAgICAgICAkKCcjc3VjY2VzcyA+IC5hbGVydC1zdWNjZXNzJylcbiAgICAgICAgICAgIC5hcHBlbmQoXCI8c3Ryb25nPllvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50LiA8L3N0cm9uZz5cIik7XG4gICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtc3VjY2VzcycpXG4gICAgICAgICAgICAuYXBwZW5kKCc8L2Rpdj4nKTtcbiAgICAgICAgICAvL2NsZWFyIGFsbCBmaWVsZHNcbiAgICAgICAgICAkKCcjY29udGFjdEZvcm0nKS50cmlnZ2VyKFwicmVzZXRcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBGYWlsIG1lc3NhZ2VcbiAgICAgICAgICAkKCcjc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC1kYW5nZXInPlwiKTtcbiAgICAgICAgICAkKCcjc3VjY2VzcyA+IC5hbGVydC1kYW5nZXInKS5odG1sKFwiPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdhbGVydCcgYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lcztcIilcbiAgICAgICAgICAgIC5hcHBlbmQoXCI8L2J1dHRvbj5cIik7XG4gICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtZGFuZ2VyJykuYXBwZW5kKCQoXCI8c3Ryb25nPlwiKS50ZXh0KFwiU29ycnkgXCIgKyBmaXJzdE5hbWUgKyBcIiwgaXQgc2VlbXMgdGhhdCBteSBtYWlsIHNlcnZlciBpcyBub3QgcmVzcG9uZGluZy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlciFcIikpO1xuICAgICAgICAgICQoJyNzdWNjZXNzID4gLmFsZXJ0LWRhbmdlcicpLmFwcGVuZCgnPC9kaXY+Jyk7XG4gICAgICAgICAgLy9jbGVhciBhbGwgZmllbGRzXG4gICAgICAgICAgJCgnI2NvbnRhY3RGb3JtJykudHJpZ2dlcihcInJlc2V0XCIpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICR0aGlzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7IC8vIFJlLWVuYWJsZSBzdWJtaXQgYnV0dG9uIHdoZW4gQUpBWCBjYWxsIGlzIGNvbXBsZXRlXG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkKHRoaXMpLmlzKFwiOnZpc2libGVcIik7XG4gICAgfSxcbiAgfSk7XG5cbiAgJChcImFbZGF0YS10b2dnbGU9XFxcInRhYlxcXCJdXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCh0aGlzKS50YWIoXCJzaG93XCIpO1xuICB9KTtcbn0pO1xuXG4vKldoZW4gY2xpY2tpbmcgb24gRnVsbCBoaWRlIGZhaWwvc3VjY2VzcyBib3hlcyAqL1xuJCgnI25hbWUnKS5mb2N1cyhmdW5jdGlvbigpIHtcbiAgJCgnI3N1Y2Nlc3MnKS5odG1sKCcnKTtcbn0pO1xuIiwiaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknXG5cbihmdW5jdGlvbigkKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvLyBTdGFydCBvZiB1c2Ugc3RyaWN0XG5cbiAgLy8gU21vb3RoIHNjcm9sbGluZyB1c2luZyBqUXVlcnkgZWFzaW5nXG4gICQoJ2EuanMtc2Nyb2xsLXRyaWdnZXJbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAodGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDcxKVxuICAgICAgICB9LCAxMDAwLCBcImVhc2VJbk91dEV4cG9cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNjcm9sbCB0byB0b3AgYnV0dG9uIGFwcGVhclxuICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjcm9sbERpc3RhbmNlID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgICBpZiAoc2Nyb2xsRGlzdGFuY2UgPiAxMDApIHtcbiAgICAgICQoJy5zY3JvbGwtdG8tdG9wJykuZmFkZUluKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5zY3JvbGwtdG8tdG9wJykuZmFkZU91dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQ2xvc2VzIHJlc3BvbnNpdmUgbWVudSB3aGVuIGEgc2Nyb2xsIHRyaWdnZXIgbGluayBpcyBjbGlja2VkXG4gICQoJy5qcy1zY3JvbGwtdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJy5uYXZiYXItY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xuICB9KTtcblxuICAvLyBBY3RpdmF0ZSBzY3JvbGxzcHkgdG8gYWRkIGFjdGl2ZSBjbGFzcyB0byBuYXZiYXIgaXRlbXMgb24gc2Nyb2xsXG4gICQoJ2JvZHknKS5zY3JvbGxzcHkoe1xuICAgIHRhcmdldDogJyNtYWluTmF2JyxcbiAgICBvZmZzZXQ6IDgwXG4gIH0pO1xuXG4gIC8vIENvbGxhcHNlIE5hdmJhclxuICB2YXIgbmF2YmFyQ29sbGFwc2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChcIiNtYWluTmF2XCIpLm9mZnNldCgpLnRvcCA+IDEwMCkge1xuICAgICAgJChcIiNtYWluTmF2XCIpLmFkZENsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIiNtYWluTmF2XCIpLnJlbW92ZUNsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcbiAgICB9XG4gIH07XG4gIC8vIENvbGxhcHNlIG5vdyBpZiBwYWdlIGlzIG5vdCBhdCB0b3BcbiAgbmF2YmFyQ29sbGFwc2UoKTtcbiAgLy8gQ29sbGFwc2UgdGhlIG5hdmJhciB3aGVuIHBhZ2UgaXMgc2Nyb2xsZWRcbiAgJCh3aW5kb3cpLnNjcm9sbChuYXZiYXJDb2xsYXBzZSk7XG5cbiAgLy8gRmxvYXRpbmcgbGFiZWwgaGVhZGluZ3MgZm9yIHRoZSBjb250YWN0IGZvcm1cbiAgJChmdW5jdGlvbigpIHtcbiAgICAkKFwiYm9keVwiKS5vbihcImlucHV0IHByb3BlcnR5Y2hhbmdlXCIsIFwiLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC12YWx1ZVwiLCAhISQoZS50YXJnZXQpLnZhbCgpKTtcbiAgICB9KS5vbihcImZvY3VzXCIsIFwiLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXBcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cC13aXRoLWZvY3VzXCIpO1xuICAgIH0pLm9uKFwiYmx1clwiLCBcIi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC1mb2N1c1wiKTtcbiAgICB9KTtcbiAgfSk7XG5cbn0pKGpRdWVyeSk7IC8vIEVuZCBvZiB1c2Ugc3RyaWN0XG4iLCJpbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSdcblxuLyoganFCb290c3RyYXBWYWxpZGF0aW9uXG4gKiBBIHBsdWdpbiBmb3IgYXV0b21hdGluZyB2YWxpZGF0aW9uIG9uIFR3aXR0ZXIgQm9vdHN0cmFwIGZvcm1hdHRlZCBmb3Jtcy5cbiAqXG4gKiB2MS4zLjZcbiAqXG4gKiBMaWNlbnNlOiBNSVQgPGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHA+IC0gc2VlIExJQ0VOU0UgZmlsZVxuICpcbiAqIGh0dHA6Ly9SZWFjdGl2ZVJhdmVuLmdpdGh1Yi5jb20vanFCb290c3RyYXBWYWxpZGF0aW9uL1xuICovXG5cbihmdW5jdGlvbiggJCApe1xuXG5cdHZhciBjcmVhdGVkRWxlbWVudHMgPSBbXTtcblxuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0b3B0aW9uczoge1xuXHRcdFx0cHJlcGVuZEV4aXN0aW5nSGVscEJsb2NrOiBmYWxzZSxcblx0XHRcdHNuaWZmSHRtbDogdHJ1ZSwgLy8gc25pZmYgZm9yICdyZXF1aXJlZCcsICdtYXhsZW5ndGgnLCBldGNcblx0XHRcdHByZXZlbnRTdWJtaXQ6IHRydWUsIC8vIHN0b3AgdGhlIGZvcm0gc3VibWl0IGV2ZW50IGZyb20gZmlyaW5nIGlmIHZhbGlkYXRpb24gZmFpbHNcblx0XHRcdHN1Ym1pdEVycm9yOiBmYWxzZSwgLy8gZnVuY3Rpb24gY2FsbGVkIGlmIHRoZXJlIGlzIGFuIGVycm9yIHdoZW4gdHJ5aW5nIHRvIHN1Ym1pdFxuXHRcdFx0c3VibWl0U3VjY2VzczogZmFsc2UsIC8vIGZ1bmN0aW9uIGNhbGxlZCBqdXN0IGJlZm9yZSBhIHN1Y2Nlc3NmdWwgc3VibWl0IGV2ZW50IGlzIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgICAgICAgICAgc2VtYW50aWNhbGx5U3RyaWN0OiBmYWxzZSwgLy8gc2V0IHRvIHRydWUgdG8gdGlkeSB1cCBnZW5lcmF0ZWQgSFRNTCBvdXRwdXRcblx0XHRcdGF1dG9BZGQ6IHtcblx0XHRcdFx0aGVscEJsb2NrczogdHJ1ZVxuXHRcdFx0fSxcbiAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiAkKHRoaXMpLmlzKFwiOnZpc2libGVcIik7IC8vIG9ubHkgdmFsaWRhdGUgZWxlbWVudHMgeW91IGNhbiBzZWVcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gdmFsaWRhdGUgZXZlcnl0aGluZ1xuICAgICAgICAgICAgfVxuXHRcdH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdCA6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkZWZhdWx0cyk7XG5cbiAgICAgICAgc2V0dGluZ3Mub3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHNldHRpbmdzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciAkc2libGluZ0VsZW1lbnRzID0gdGhpcztcblxuICAgICAgICB2YXIgdW5pcXVlRm9ybXMgPSAkLnVuaXF1ZShcbiAgICAgICAgICAkc2libGluZ0VsZW1lbnRzLm1hcCggZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICQodGhpcykucGFyZW50cyhcImZvcm1cIilbMF07XG4gICAgICAgICAgfSkudG9BcnJheSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgJCh1bmlxdWVGb3JtcykuYmluZChcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciAkZm9ybSA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIHdhcm5pbmdzRm91bmQgPSAwO1xuICAgICAgICAgIHZhciAkaW5wdXRzID0gJGZvcm0uZmluZChcImlucHV0LHRleHRhcmVhLHNlbGVjdFwiKS5ub3QoXCJbdHlwZT1zdWJtaXRdLFt0eXBlPWltYWdlXVwiKS5maWx0ZXIoc2V0dGluZ3Mub3B0aW9ucy5maWx0ZXIpO1xuICAgICAgICAgICRpbnB1dHMudHJpZ2dlcihcInN1Ym1pdC52YWxpZGF0aW9uXCIpLnRyaWdnZXIoXCJ2YWxpZGF0aW9uTG9zdEZvY3VzLnZhbGlkYXRpb25cIik7XG5cbiAgICAgICAgICAkaW5wdXRzLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKGVsKSxcbiAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cCA9ICR0aGlzLnBhcmVudHMoXCIuY29udHJvbC1ncm91cFwiKS5maXJzdCgpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLmhhc0NsYXNzKFwid2FybmluZ1wiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAucmVtb3ZlQ2xhc3MoXCJ3YXJuaW5nXCIpLmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgIHdhcm5pbmdzRm91bmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRpbnB1dHMudHJpZ2dlcihcInZhbGlkYXRpb25Mb3N0Rm9jdXMudmFsaWRhdGlvblwiKTtcblxuICAgICAgICAgIGlmICh3YXJuaW5nc0ZvdW5kKSB7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3Mub3B0aW9ucy5wcmV2ZW50U3VibWl0KSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLm9wdGlvbnMuc3VibWl0RXJyb3IpKSB7XG4gICAgICAgICAgICAgIHNldHRpbmdzLm9wdGlvbnMuc3VibWl0RXJyb3IoJGZvcm0sIGUsICRpbnB1dHMuanFCb290c3RyYXBWYWxpZGF0aW9uKFwiY29sbGVjdEVycm9yc1wiLCB0cnVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLm9wdGlvbnMuc3VibWl0U3VjY2VzcykpIHtcbiAgICAgICAgICAgICAgc2V0dGluZ3Mub3B0aW9ucy5zdWJtaXRTdWNjZXNzKCRmb3JtLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcblxuICAgICAgICAgIC8vIEdldCByZWZlcmVuY2VzIHRvIGV2ZXJ5dGhpbmcgd2UncmUgaW50ZXJlc3RlZCBpblxuICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAkY29udHJvbEdyb3VwID0gJHRoaXMucGFyZW50cyhcIi5jb250cm9sLWdyb3VwXCIpLmZpcnN0KCksXG4gICAgICAgICAgICAkaGVscEJsb2NrID0gJGNvbnRyb2xHcm91cC5maW5kKFwiLmhlbHAtYmxvY2tcIikuZmlyc3QoKSxcbiAgICAgICAgICAgICRmb3JtID0gJHRoaXMucGFyZW50cyhcImZvcm1cIikuZmlyc3QoKSxcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzID0gW107XG5cbiAgICAgICAgICAvLyBjcmVhdGUgbWVzc2FnZSBjb250YWluZXIgaWYgbm90IGV4aXN0c1xuICAgICAgICAgIGlmICghJGhlbHBCbG9jay5sZW5ndGggJiYgc2V0dGluZ3Mub3B0aW9ucy5hdXRvQWRkICYmIHNldHRpbmdzLm9wdGlvbnMuYXV0b0FkZC5oZWxwQmxvY2tzKSB7XG4gICAgICAgICAgICAgICRoZWxwQmxvY2sgPSAkKCc8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiIC8+Jyk7XG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAuZmluZCgnLmNvbnRyb2xzJykuYXBwZW5kKCRoZWxwQmxvY2spO1xuXHRcdFx0XHRcdFx0XHRjcmVhdGVkRWxlbWVudHMucHVzaCgkaGVscEJsb2NrWzBdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU05JRkYgSFRNTCBGT1IgVkFMSURBVE9SU1xuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICAgIC8vICpzbm9ydCBzbmlmZiBzbnVmZmxlKlxuXG4gICAgICAgICAgaWYgKHNldHRpbmdzLm9wdGlvbnMuc25pZmZIdG1sKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFUVEVSTlxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcInBhdHRlcm5cIikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJOb3QgaW4gdGhlIGV4cGVjdGVkIGZvcm1hdDwhLS0gZGF0YS12YWxpZGF0aW9uLXBhdHRlcm4tbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUGF0dGVybk1lc3NhZ2VcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25QYXR0ZXJuTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblBhdHRlcm5NZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblBhdHRlcm5SZWdleFwiLCAkdGhpcy5hdHRyKFwicGF0dGVyblwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1BWFxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1heFwiKSAhPT0gdW5kZWZpbmVkIHx8ICR0aGlzLmF0dHIoXCJhcmlhLXZhbHVlbWF4XCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdmFyIG1heCA9ICgkdGhpcy5hdHRyKFwibWF4XCIpICE9PSB1bmRlZmluZWQgPyAkdGhpcy5hdHRyKFwibWF4XCIpIDogJHRoaXMuYXR0cihcImFyaWEtdmFsdWVtYXhcIikpO1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJUb28gaGlnaDogTWF4aW11bSBvZiAnXCIgKyBtYXggKyBcIic8IS0tIGRhdGEtdmFsaWRhdGlvbi1tYXgtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4TWVzc2FnZVwiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heE1lc3NhZ2VcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhNZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heE1heFwiLCBtYXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNSU5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgaWYgKCR0aGlzLmF0dHIoXCJtaW5cIikgIT09IHVuZGVmaW5lZCB8fCAkdGhpcy5hdHRyKFwiYXJpYS12YWx1ZW1pblwiKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHZhciBtaW4gPSAoJHRoaXMuYXR0cihcIm1pblwiKSAhPT0gdW5kZWZpbmVkID8gJHRoaXMuYXR0cihcIm1pblwiKSA6ICR0aGlzLmF0dHIoXCJhcmlhLXZhbHVlbWluXCIpKTtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIGxvdzogTWluaW11bSBvZiAnXCIgKyBtaW4gKyBcIic8IS0tIGRhdGEtdmFsaWRhdGlvbi1taW4tbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWluTWVzc2FnZVwiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbk1lc3NhZ2VcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5NZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbk1pblwiLCBtaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQVhMRU5HVEhcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgaWYgKCR0aGlzLmF0dHIoXCJtYXhsZW5ndGhcIikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJUb28gbG9uZzogTWF4aW11bSBvZiAnXCIgKyAkdGhpcy5hdHRyKFwibWF4bGVuZ3RoXCIpICsgXCInIGNoYXJhY3RlcnM8IS0tIGRhdGEtdmFsaWRhdGlvbi1tYXhsZW5ndGgtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4bGVuZ3RoTWVzc2FnZVwiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGxlbmd0aE1lc3NhZ2VcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhsZW5ndGhNZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGxlbmd0aE1heGxlbmd0aFwiLCAkdGhpcy5hdHRyKFwibWF4bGVuZ3RoXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUlOTEVOR1RIXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWlubGVuZ3RoXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIHNob3J0OiBNaW5pbXVtIG9mICdcIiArICR0aGlzLmF0dHIoXCJtaW5sZW5ndGhcIikgKyBcIicgY2hhcmFjdGVyczwhLS0gZGF0YS12YWxpZGF0aW9uLW1pbmxlbmd0aC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiO1xuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5sZW5ndGhNZXNzYWdlXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmxlbmd0aE1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWlubGVuZ3RoXCIsICR0aGlzLmF0dHIoXCJtaW5sZW5ndGhcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVRVUlSRURcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgaWYgKCR0aGlzLmF0dHIoXCJyZXF1aXJlZFwiKSAhPT0gdW5kZWZpbmVkIHx8ICR0aGlzLmF0dHIoXCJhcmlhLXJlcXVpcmVkXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzLnJlcXVpcmVkLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvblJlcXVpcmVkTWVzc2FnZVwiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblJlcXVpcmVkTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblJlcXVpcmVkTWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTlVNQkVSXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwidHlwZVwiKSAhPT0gdW5kZWZpbmVkICYmICR0aGlzLmF0dHIoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCkgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzLm51bWJlci5tZXNzYWdlO1xuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25OdW1iZXJNZXNzYWdlXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTnVtYmVyTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk51bWJlck1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTUFJTFxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcInR5cGVcIikgIT09IHVuZGVmaW5lZCAmJiAkdGhpcy5hdHRyKFwidHlwZVwiKS50b0xvd2VyQ2FzZSgpID09PSBcImVtYWlsXCIpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiTm90IGEgdmFsaWQgZW1haWwgYWRkcmVzczwhLS0gZGF0YS12YWxpZGF0b3ItdmFsaWRlbWFpbC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiO1xuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25WYWxpZGVtYWlsTWVzc2FnZVwiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblZhbGlkZW1haWxNZXNzYWdlXCIpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uRW1haWxNZXNzYWdlXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uRW1haWxNZXNzYWdlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uVmFsaWRlbWFpbE1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUlOQ0hFQ0tFRFxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1pbmNoZWNrZWRcIikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJOb3QgZW5vdWdoIG9wdGlvbnMgY2hlY2tlZDsgTWluaW11bSBvZiAnXCIgKyAkdGhpcy5hdHRyKFwibWluY2hlY2tlZFwiKSArIFwiJyByZXF1aXJlZDwhLS0gZGF0YS12YWxpZGF0aW9uLW1pbmNoZWNrZWQtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWluY2hlY2tlZE1lc3NhZ2VcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5jaGVja2VkTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmNoZWNrZWRNZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmNoZWNrZWRNaW5jaGVja2VkXCIsICR0aGlzLmF0dHIoXCJtaW5jaGVja2VkXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQVhDSEVDS0VEXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWF4Y2hlY2tlZFwiKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlRvbyBtYW55IG9wdGlvbnMgY2hlY2tlZDsgTWF4aW11bSBvZiAnXCIgKyAkdGhpcy5hdHRyKFwibWF4Y2hlY2tlZFwiKSArIFwiJyByZXF1aXJlZDwhLS0gZGF0YS12YWxpZGF0aW9uLW1heGNoZWNrZWQtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4Y2hlY2tlZE1lc3NhZ2VcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhjaGVja2VkTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGNoZWNrZWRNZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGNoZWNrZWRNYXhjaGVja2VkXCIsICR0aGlzLmF0dHIoXCJtYXhjaGVja2VkXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT0xMRUNUIFZBTElEQVRPUiBOQU1FU1xuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICAgIC8vIEdldCBuYW1lZCB2YWxpZGF0b3JzXG4gICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEdldCBleHRyYSBvbmVzIGRlZmluZWQgb24gdGhlIGVsZW1lbnQncyBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgICAkLmVhY2goJHRoaXMuZGF0YSgpLCBmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGkucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiwkMVwiKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICBpZiAocGFydHNbMF0gPT09IFwidmFsaWRhdGlvblwiICYmIHBhcnRzWzFdKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzLnB1c2gocGFydHNbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PUk1BTElTRSBWQUxJREFUT1IgTkFNRVNcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgICB2YXIgdmFsaWRhdG9yTmFtZXNUb0luc3BlY3QgPSB2YWxpZGF0b3JOYW1lcztcbiAgICAgICAgICB2YXIgbmV3VmFsaWRhdG9yTmFtZXNUb0luc3BlY3QgPSBbXTtcblxuICAgICAgICAgIGRvIC8vIHJlcGVhdGVkbHkgZXhwYW5kICdzaG9ydGN1dCcgdmFsaWRhdG9ycyBpbnRvIHRoZWlyIHJlYWwgdmFsaWRhdG9yc1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIFVwcGVyY2FzZSBvbmx5IHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCBuYW1lXG4gICAgICAgICAgICAkLmVhY2godmFsaWRhdG9yTmFtZXMsIGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgICAgICB2YWxpZGF0b3JOYW1lc1tpXSA9IGZvcm1hdFZhbGlkYXRvck5hbWUoZWwpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgdmFsaWRhdG9yIG5hbWVzXG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lcyA9ICQudW5pcXVlKHZhbGlkYXRvck5hbWVzKTtcblxuICAgICAgICAgICAgLy8gUHVsbCBvdXQgdGhlIG5ldyB2YWxpZGF0b3IgbmFtZXMgZnJvbSBlYWNoIHNob3J0Y3V0XG4gICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdCA9IFtdO1xuICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvck5hbWVzVG9JbnNwZWN0LCBmdW5jdGlvbihpLCBlbCkge1xuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIGVsICsgXCJTaG9ydGN1dFwiKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQXJlIHRoZXNlIGN1c3RvbSB2YWxpZGF0b3JzP1xuICAgICAgICAgICAgICAgIC8vIFB1bGwgdGhlbSBvdXQhXG4gICAgICAgICAgICAgICAgJC5lYWNoKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBlbCArIFwiU2hvcnRjdXRcIikuc3BsaXQoXCIsXCIpLCBmdW5jdGlvbihpMiwgZWwyKSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdC5wdXNoKGVsMik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3MuYnVpbHRJblZhbGlkYXRvcnNbZWwudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGlzIGEgcmVjb2duaXNlZCBidWlsdC1pbj9cbiAgICAgICAgICAgICAgICAvLyBQdWxsIGl0IG91dCFcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdG9yID0gc2V0dGluZ3MuYnVpbHRJblZhbGlkYXRvcnNbZWwudG9Mb3dlckNhc2UoKV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvci50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic2hvcnRjdXRcIikge1xuICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvci5zaG9ydGN1dC5zcGxpdChcIixcIiksIGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgICAgICAgICAgICBlbCA9IGZvcm1hdFZhbGlkYXRvck5hbWUoZWwpO1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdC5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yTmFtZXMucHVzaChlbCk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lc1RvSW5zcGVjdCA9IG5ld1ZhbGlkYXRvck5hbWVzVG9JbnNwZWN0O1xuXG4gICAgICAgICAgfSB3aGlsZSAodmFsaWRhdG9yTmFtZXNUb0luc3BlY3QubGVuZ3RoID4gMClcblxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNFVCBVUCBWQUxJREFUT1IgQVJSQVlTXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgICAgdmFyIHZhbGlkYXRvcnMgPSB7fTtcblxuICAgICAgICAgICQuZWFjaCh2YWxpZGF0b3JOYW1lcywgZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgICAgICAgICAvLyBTZXQgdXAgdGhlICdvdmVycmlkZScgbWVzc2FnZVxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgZWwgKyBcIk1lc3NhZ2VcIik7XG4gICAgICAgICAgICB2YXIgaGFzT3ZlcnJpZGVNZXNzYWdlID0gKG1lc3NhZ2UgIT09IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB2YXIgZm91bmRWYWxpZGF0b3IgPSBmYWxzZTtcbiAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgPyBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICA6IFwiJ1wiICsgZWwgKyBcIicgdmFsaWRhdGlvbiBmYWlsZWQgPCEtLSBBZGQgYXR0cmlidXRlICdkYXRhLXZhbGlkYXRpb24tXCIgKyBlbC50b0xvd2VyQ2FzZSgpICsgXCItbWVzc2FnZScgdG8gaW5wdXQgdG8gY2hhbmdlIHRoaXMgbWVzc2FnZSAtLT5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA7XG5cbiAgICAgICAgICAgICQuZWFjaChcbiAgICAgICAgICAgICAgc2V0dGluZ3MudmFsaWRhdG9yVHlwZXMsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICh2YWxpZGF0b3JUeXBlLCB2YWxpZGF0b3JUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3JzW3ZhbGlkYXRvclR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yVHlwZV0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZFZhbGlkYXRvciAmJiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgZWwgKyBmb3JtYXRWYWxpZGF0b3JOYW1lKHZhbGlkYXRvclRlbXBsYXRlLm5hbWUpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzW3ZhbGlkYXRvclR5cGVdLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICQuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZm9ybWF0VmFsaWRhdG9yTmFtZSh2YWxpZGF0b3JUZW1wbGF0ZS5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvclRlbXBsYXRlLmluaXQoJHRoaXMsIGVsKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgZm91bmRWYWxpZGF0b3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKCFmb3VuZFZhbGlkYXRvciAmJiBzZXR0aW5ncy5idWlsdEluVmFsaWRhdG9yc1tlbC50b0xvd2VyQ2FzZSgpXSkge1xuXG4gICAgICAgICAgICAgIHZhciB2YWxpZGF0b3IgPSAkLmV4dGVuZCh0cnVlLCB7fSwgc2V0dGluZ3MuYnVpbHRJblZhbGlkYXRvcnNbZWwudG9Mb3dlckNhc2UoKV0pO1xuICAgICAgICAgICAgICBpZiAoaGFzT3ZlcnJpZGVNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciB2YWxpZGF0b3JUeXBlID0gdmFsaWRhdG9yLnR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICBpZiAodmFsaWRhdG9yVHlwZSA9PT0gXCJzaG9ydGN1dFwiKSB7XG4gICAgICAgICAgICAgICAgZm91bmRWYWxpZGF0b3IgPSB0cnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQuZWFjaChcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnZhbGlkYXRvclR5cGVzLFxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHZhbGlkYXRvclRlbXBsYXRlVHlwZSwgdmFsaWRhdG9yVGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvcnNbdmFsaWRhdG9yVGVtcGxhdGVUeXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1t2YWxpZGF0b3JUZW1wbGF0ZVR5cGVdID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZFZhbGlkYXRvciAmJiB2YWxpZGF0b3JUeXBlID09PSB2YWxpZGF0b3JUZW1wbGF0ZVR5cGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBlbCArIGZvcm1hdFZhbGlkYXRvck5hbWUodmFsaWRhdG9yVGVtcGxhdGUubmFtZSksIHZhbGlkYXRvclt2YWxpZGF0b3JUZW1wbGF0ZS5uYW1lLnRvTG93ZXJDYXNlKCldKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzW3ZhbGlkYXRvclR5cGVdLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmV4dGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JUZW1wbGF0ZS5pbml0KCR0aGlzLCBlbClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVmFsaWRhdG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEgZm91bmRWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgJC5lcnJvcihcIkNhbm5vdCBmaW5kIHZhbGlkYXRpb24gaW5mbyBmb3IgJ1wiICsgZWwgKyBcIidcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JFIEZBTExCQUNLIFZBTFVFU1xuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICAgICRoZWxwQmxvY2suZGF0YShcbiAgICAgICAgICAgIFwib3JpZ2luYWwtY29udGVudHNcIixcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIilcbiAgICAgICAgICAgICAgICA/ICRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpXG4gICAgICAgICAgICAgICAgOiAkaGVscEJsb2NrLmh0bWwoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAkaGVscEJsb2NrLmRhdGEoXG4gICAgICAgICAgICBcIm9yaWdpbmFsLXJvbGVcIixcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtcm9sZVwiKVxuICAgICAgICAgICAgICAgID8gJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtcm9sZVwiKVxuICAgICAgICAgICAgICAgIDogJGhlbHBCbG9jay5hdHRyKFwicm9sZVwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAkY29udHJvbEdyb3VwLmRhdGEoXG4gICAgICAgICAgICBcIm9yaWdpbmFsLWNsYXNzZXNcIixcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5kYXRhKFwib3JpZ2luYWwtY2xhc2VzXCIpXG4gICAgICAgICAgICAgICAgPyAkY29udHJvbEdyb3VwLmRhdGEoXCJvcmlnaW5hbC1jbGFzc2VzXCIpXG4gICAgICAgICAgICAgICAgOiAkY29udHJvbEdyb3VwLmF0dHIoXCJjbGFzc1wiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAkdGhpcy5kYXRhKFxuICAgICAgICAgICAgXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIixcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiKVxuICAgICAgICAgICAgICAgID8gJHRoaXMuZGF0YShcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiKVxuICAgICAgICAgICAgICAgIDogJHRoaXMuYXR0cihcImFyaWEtaW52YWxpZFwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFMSURBVElPTlxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICAgICR0aGlzLmJpbmQoXG4gICAgICAgICAgICBcInZhbGlkYXRpb24udmFsaWRhdGlvblwiLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGV2ZW50LCBwYXJhbXMpIHtcblxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBnZXRWYWx1ZSgkdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gR2V0IGEgbGlzdCBvZiB0aGUgZXJyb3JzIHRvIGFwcGx5XG4gICAgICAgICAgICAgIHZhciBlcnJvcnNGb3VuZCA9IFtdO1xuXG4gICAgICAgICAgICAgICQuZWFjaCh2YWxpZGF0b3JzLCBmdW5jdGlvbiAodmFsaWRhdG9yVHlwZSwgdmFsaWRhdG9yVHlwZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIHx8IHZhbHVlLmxlbmd0aCB8fCAocGFyYW1zICYmIHBhcmFtcy5pbmNsdWRlRW1wdHkpIHx8ICghIXNldHRpbmdzLnZhbGlkYXRvclR5cGVzW3ZhbGlkYXRvclR5cGVdLmJsb2NrU3VibWl0ICYmIHBhcmFtcyAmJiAhIXBhcmFtcy5zdWJtaXR0aW5nKSkge1xuICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvclR5cGVBcnJheSwgZnVuY3Rpb24gKGksIHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudmFsaWRhdG9yVHlwZXNbdmFsaWRhdG9yVHlwZV0udmFsaWRhdGUoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JzRm91bmQucHVzaCh2YWxpZGF0b3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGVycm9yc0ZvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAkdGhpcy5iaW5kKFxuICAgICAgICAgICAgXCJnZXRWYWxpZGF0b3JzLnZhbGlkYXRpb25cIixcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdBVENIIEZPUiBDSEFOR0VTXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICR0aGlzLmJpbmQoXG4gICAgICAgICAgICBcInN1Ym1pdC52YWxpZGF0aW9uXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiAkdGhpcy50cmlnZ2VySGFuZGxlcihcImNoYW5nZS52YWxpZGF0aW9uXCIsIHtzdWJtaXR0aW5nOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICAkdGhpcy5iaW5kKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBcImtleXVwXCIsXG4gICAgICAgICAgICAgIFwiZm9jdXNcIixcbiAgICAgICAgICAgICAgXCJibHVyXCIsXG4gICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgICAgICAgIFwia2V5cHJlc3NcIixcbiAgICAgICAgICAgICAgXCJjaGFuZ2VcIlxuICAgICAgICAgICAgXS5qb2luKFwiLnZhbGlkYXRpb24gXCIpICsgXCIudmFsaWRhdGlvblwiLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUsIHBhcmFtcykge1xuXG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKCR0aGlzKTtcblxuICAgICAgICAgICAgICB2YXIgZXJyb3JzRm91bmQgPSBbXTtcblxuICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLmZpbmQoXCJpbnB1dCx0ZXh0YXJlYSxzZWxlY3RcIikuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkQ291bnQgPSBlcnJvcnNGb3VuZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgJC5lYWNoKCQoZWwpLnRyaWdnZXJIYW5kbGVyKFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsIHBhcmFtcyksIGZ1bmN0aW9uIChqLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvcnNGb3VuZC5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcnNGb3VuZC5sZW5ndGggPiBvbGRDb3VudCkge1xuICAgICAgICAgICAgICAgICAgJChlbCkuYXR0cihcImFyaWEtaW52YWxpZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbCA9ICR0aGlzLmRhdGEoXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgICAkKGVsKS5hdHRyKFwiYXJpYS1pbnZhbGlkXCIsIChvcmlnaW5hbCAhPT0gdW5kZWZpbmVkID8gb3JpZ2luYWwgOiBmYWxzZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgJGZvcm0uZmluZChcImlucHV0LHNlbGVjdCx0ZXh0YXJlYVwiKS5ub3QoJHRoaXMpLm5vdChcIltuYW1lPVxcXCJcIiArICR0aGlzLmF0dHIoXCJuYW1lXCIpICsgXCJcXFwiXVwiKS50cmlnZ2VyKFwidmFsaWRhdGlvbkxvc3RGb2N1cy52YWxpZGF0aW9uXCIpO1xuXG4gICAgICAgICAgICAgIGVycm9yc0ZvdW5kID0gJC51bmlxdWUoZXJyb3JzRm91bmQuc29ydCgpKTtcblxuICAgICAgICAgICAgICAvLyBXZXJlIHRoZXJlIGFueSBlcnJvcnM/XG4gICAgICAgICAgICAgIGlmIChlcnJvcnNGb3VuZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBCZXR0ZXIgZmxhZyBpdCB1cCBhcyBhIHdhcm5pbmcuXG4gICAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcInN1Y2Nlc3MgZXJyb3JcIikuYWRkQ2xhc3MoXCJ3YXJuaW5nXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gSG93IG1hbnkgZXJyb3JzIGRpZCB3ZSBmaW5kP1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5vcHRpb25zLnNlbWFudGljYWxseVN0cmljdCAmJiBlcnJvcnNGb3VuZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIC8vIE9ubHkgb25lPyBCZWluZyBzdHJpY3Q/IEp1c3Qgb3V0cHV0IGl0LlxuICAgICAgICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKGVycm9yc0ZvdW5kWzBdICsgXG4gICAgICAgICAgICAgICAgICAgICggc2V0dGluZ3Mub3B0aW9ucy5wcmVwZW5kRXhpc3RpbmdIZWxwQmxvY2sgPyAkaGVscEJsb2NrLmRhdGEoXCJvcmlnaW5hbC1jb250ZW50c1wiKSA6IFwiXCIgKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIE11bHRpcGxlPyBCZWluZyBzbG9wcHk/IEdsdWUgdGhlbSB0b2dldGhlciBpbnRvIGFuIFVMLlxuICAgICAgICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKFwiPHVsIHJvbGU9XFxcImFsZXJ0XFxcIj48bGk+XCIgKyBlcnJvcnNGb3VuZC5qb2luKFwiPC9saT48bGk+XCIpICsgXCI8L2xpPjwvdWw+XCIgK1xuICAgICAgICAgICAgICAgICAgICAoIHNldHRpbmdzLm9wdGlvbnMucHJlcGVuZEV4aXN0aW5nSGVscEJsb2NrID8gJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIikgOiBcIlwiICkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLnJlbW92ZUNsYXNzKFwid2FybmluZyBlcnJvciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLmFkZENsYXNzKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKCRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwiYmx1clwiKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgICR0aGlzLmJpbmQoXCJ2YWxpZGF0aW9uTG9zdEZvY3VzLnZhbGlkYXRpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3kgOiBmdW5jdGlvbiggKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChcbiAgICAgICAgICBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cCA9ICR0aGlzLnBhcmVudHMoXCIuY29udHJvbC1ncm91cFwiKS5maXJzdCgpLFxuICAgICAgICAgICAgICAkaGVscEJsb2NrID0gJGNvbnRyb2xHcm91cC5maW5kKFwiLmhlbHAtYmxvY2tcIikuZmlyc3QoKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIG91ciBldmVudHNcbiAgICAgICAgICAgICR0aGlzLnVuYmluZCgnLnZhbGlkYXRpb24nKTsgLy8gZXZlbnRzIGFyZSBuYW1lc3BhY2VkLlxuICAgICAgICAgICAgLy8gcmVzZXQgaGVscCB0ZXh0XG4gICAgICAgICAgICAkaGVscEJsb2NrLmh0bWwoJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIikpO1xuICAgICAgICAgICAgLy8gcmVzZXQgY2xhc3Nlc1xuICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5hdHRyKFwiY2xhc3NcIiwgJGNvbnRyb2xHcm91cC5kYXRhKFwib3JpZ2luYWwtY2xhc3Nlc1wiKSk7XG4gICAgICAgICAgICAvLyByZXNldCBhcmlhXG4gICAgICAgICAgICAkdGhpcy5hdHRyKFwiYXJpYS1pbnZhbGlkXCIsICR0aGlzLmRhdGEoXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIikpO1xuICAgICAgICAgICAgLy8gcmVzZXQgcm9sZVxuICAgICAgICAgICAgJGhlbHBCbG9jay5hdHRyKFwicm9sZVwiLCAkdGhpcy5kYXRhKFwib3JpZ2luYWwtcm9sZVwiKSk7XG5cdFx0XHRcdFx0XHQvLyByZW1vdmUgYWxsIGVsZW1lbnRzIHdlIGNyZWF0ZWRcblx0XHRcdFx0XHRcdGlmIChjcmVhdGVkRWxlbWVudHMuaW5kZXhPZigkaGVscEJsb2NrWzBdKSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdCRoZWxwQmxvY2sucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR9XG5cbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgIH0sXG4gICAgICBjb2xsZWN0RXJyb3JzIDogZnVuY3Rpb24oaW5jbHVkZUVtcHR5KSB7XG5cbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZXMgPSB7fTtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICAgICAgICB2YXIgbmFtZSA9ICRlbC5hdHRyKFwibmFtZVwiKTtcbiAgICAgICAgICB2YXIgZXJyb3JzID0gJGVsLnRyaWdnZXJIYW5kbGVyKFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsIHtpbmNsdWRlRW1wdHk6IHRydWV9KTtcbiAgICAgICAgICBlcnJvck1lc3NhZ2VzW25hbWVdID0gJC5leHRlbmQodHJ1ZSwgZXJyb3JzLCBlcnJvck1lc3NhZ2VzW25hbWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJC5lYWNoKGVycm9yTWVzc2FnZXMsIGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgIGlmIChlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBlcnJvck1lc3NhZ2VzW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZXM7XG5cbiAgICAgIH0sXG4gICAgICBoYXNFcnJvcnM6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2VzID0gW107XG5cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgIGVycm9yTWVzc2FnZXMgPSBlcnJvck1lc3NhZ2VzLmNvbmNhdChcbiAgICAgICAgICAgICQoZWwpLnRyaWdnZXJIYW5kbGVyKFwiZ2V0VmFsaWRhdG9ycy52YWxpZGF0aW9uXCIpID8gJChlbCkudHJpZ2dlckhhbmRsZXIoXCJ2YWxpZGF0aW9uLnZhbGlkYXRpb25cIiwge3N1Ym1pdHRpbmc6IHRydWV9KSA6IFtdXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChlcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDApO1xuICAgICAgfSxcbiAgICAgIG92ZXJyaWRlIDogZnVuY3Rpb24gKG5ld0RlZmF1bHRzKSB7XG4gICAgICAgIGRlZmF1bHRzID0gJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG5ld0RlZmF1bHRzKTtcbiAgICAgIH1cbiAgICB9LFxuXHRcdHZhbGlkYXRvclR5cGVzOiB7XG4gICAgICBjYWxsYmFjazoge1xuICAgICAgICBuYW1lOiBcImNhbGxiYWNrXCIsXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lOiBuYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJDYWxsYmFja1wiKSxcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogJHRoaXMudmFsKCksXG4gICAgICAgICAgICBsYXN0VmFsaWQ6IHRydWUsXG4gICAgICAgICAgICBsYXN0RmluaXNoZWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XG4gICAgICAgICAgaWYgKHZhbGlkYXRvci5sYXN0VmFsdWUgPT09IHZhbHVlICYmIHZhbGlkYXRvci5sYXN0RmluaXNoZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAhdmFsaWRhdG9yLmxhc3RWYWxpZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9PT0gdHJ1ZSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIHJyanFidlZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICAgICAgICAgIHZhciBycmpxYnZUaGlzID0gJHRoaXM7XG4gICAgICAgICAgICBleGVjdXRlRnVuY3Rpb25CeU5hbWUoXG4gICAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsYmFjayxcbiAgICAgICAgICAgICAgd2luZG93LFxuICAgICAgICAgICAgICAkdGhpcyxcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJyanFidlZhbGlkYXRvci5sYXN0VmFsdWUgPT09IGRhdGEudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHJyanFidlZhbGlkYXRvci5sYXN0VmFsaWQgPSBkYXRhLnZhbGlkO1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBycmpxYnZWYWxpZGF0b3IubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJyanFidlZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcnJqcWJ2VGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgcnJqcWJ2VmFsaWRhdG9yLnZhbGlkYXRvck5hbWUgKyBcIk1lc3NhZ2VcIiwgcnJqcWJ2VmFsaWRhdG9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgLy8gVGltZW91dCBpcyBzZXQgdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgZXZlbnRzIGJlaW5nIGNvbnNpZGVyZWQgJ2FscmVhZHkgZmlyZWQnXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcnJqcWJ2VGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIik7XG4gICAgICAgICAgICAgICAgICB9LCAxKTsgLy8gZG9lc24ndCBuZWVkIGEgbG9uZyB0aW1lb3V0LCBqdXN0IGxvbmcgZW5vdWdoIGZvciB0aGUgZXZlbnQgYnViYmxlIHRvIGJ1cnN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWpheDoge1xuICAgICAgICBuYW1lOiBcImFqYXhcIixcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWU6IG5hbWUsXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJBamF4XCIpLFxuICAgICAgICAgICAgbGFzdFZhbHVlOiAkdGhpcy52YWwoKSxcbiAgICAgICAgICAgIGxhc3RWYWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RGaW5pc2hlZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcbiAgICAgICAgICBpZiAoXCJcIit2YWxpZGF0b3IubGFzdFZhbHVlID09PSBcIlwiK3ZhbHVlICYmIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IubGFzdFZhbGlkID09PSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9PT0gdHJ1ZSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgIHVybDogdmFsaWRhdG9yLnVybCxcbiAgICAgICAgICAgICAgZGF0YTogXCJ2YWx1ZT1cIiArIHZhbHVlICsgXCImZmllbGQ9XCIgKyAkdGhpcy5hdHRyKFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChcIlwiK3ZhbGlkYXRvci5sYXN0VmFsdWUgPT09IFwiXCIrZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yLmxhc3RWYWxpZCA9ICEhKGRhdGEudmFsaWQpO1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3IubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIHZhbGlkYXRvci52YWxpZGF0b3JOYW1lICsgXCJNZXNzYWdlXCIsIHZhbGlkYXRvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgIC8vIFRpbWVvdXQgaXMgc2V0IHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGV2ZW50cyBiZWluZyBjb25zaWRlcmVkICdhbHJlYWR5IGZpcmVkJ1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnRyaWdnZXIoXCJjaGFuZ2UudmFsaWRhdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgIH0sIDEpOyAvLyBkb2Vzbid0IG5lZWQgYSBsb25nIHRpbWVvdXQsIGp1c3QgbG9uZyBlbm91Z2ggZm9yIHRoZSBldmVudCBidWJibGUgdG8gYnVyc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWx1cmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IubWVzc2FnZSA9IFwiYWpheCBjYWxsIGZhaWxlZFwiO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyB2YWxpZGF0b3IudmFsaWRhdG9yTmFtZSArIFwiTWVzc2FnZVwiLCB2YWxpZGF0b3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gVGltZW91dCBpcyBzZXQgdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgZXZlbnRzIGJlaW5nIGNvbnNpZGVyZWQgJ2FscmVhZHkgZmlyZWQnXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAkdGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIik7XG4gICAgICAgICAgICAgICAgfSwgMSk7IC8vIGRvZXNuJ3QgbmVlZCBhIGxvbmcgdGltZW91dCwganVzdCBsb25nIGVub3VnaCBmb3IgdGhlIGV2ZW50IGJ1YmJsZSB0byBidXJzdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgfVxuICAgICAgfSxcblx0XHRcdHJlZ2V4OiB7XG5cdFx0XHRcdG5hbWU6IFwicmVnZXhcIixcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtyZWdleDogcmVnZXhGcm9tU3RyaW5nKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJSZWdleFwiKSl9O1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XG5cdFx0XHRcdFx0cmV0dXJuICghdmFsaWRhdG9yLnJlZ2V4LnRlc3QodmFsdWUpICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxuXHRcdFx0XHRcdFx0fHwgKHZhbGlkYXRvci5yZWdleC50ZXN0KHZhbHVlKSAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0bmFtZTogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gISEodmFsdWUubGVuZ3RoID09PSAwICAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcblx0XHRcdFx0XHRcdHx8ICEhKHZhbHVlLmxlbmd0aCA+IDAgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcblx0XHRcdFx0fSxcbiAgICAgICAgYmxvY2tTdWJtaXQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRtYXRjaDoge1xuXHRcdFx0XHRuYW1lOiBcIm1hdGNoXCIsXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xuXHRcdFx0XHRcdHZhciBlbGVtZW50ID0gJHRoaXMucGFyZW50cyhcImZvcm1cIikuZmlyc3QoKS5maW5kKFwiW25hbWU9XFxcIlwiICsgJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1hdGNoXCIpICsgXCJcXFwiXVwiKS5maXJzdCgpO1xuXHRcdFx0XHRcdGVsZW1lbnQuYmluZChcInZhbGlkYXRpb24udmFsaWRhdGlvblwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkdGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIiwge3N1Ym1pdHRpbmc6IHRydWV9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4ge1wiZWxlbWVudFwiOiBlbGVtZW50fTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xuXHRcdFx0XHRcdHJldHVybiAodmFsdWUgIT09IHZhbGlkYXRvci5lbGVtZW50LnZhbCgpICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxuXHRcdFx0XHRcdFx0fHwgKHZhbHVlID09PSB2YWxpZGF0b3IuZWxlbWVudC52YWwoKSAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xuXHRcdFx0XHR9LFxuICAgICAgICBibG9ja1N1Ym1pdDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdG1heDoge1xuXHRcdFx0XHRuYW1lOiBcIm1heFwiLFxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4ge21heDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1heFwiKX07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gKHBhcnNlRmxvYXQodmFsdWUsIDEwKSA+IHBhcnNlRmxvYXQodmFsaWRhdG9yLm1heCwgMTApICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxuXHRcdFx0XHRcdFx0fHwgKHBhcnNlRmxvYXQodmFsdWUsIDEwKSA8PSBwYXJzZUZsb2F0KHZhbGlkYXRvci5tYXgsIDEwKSAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0bWluOiB7XG5cdFx0XHRcdG5hbWU6IFwibWluXCIsXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xuXHRcdFx0XHRcdHJldHVybiB7bWluOiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiTWluXCIpfTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xuXHRcdFx0XHRcdHJldHVybiAocGFyc2VGbG9hdCh2YWx1ZSkgPCBwYXJzZUZsb2F0KHZhbGlkYXRvci5taW4pICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxuXHRcdFx0XHRcdFx0fHwgKHBhcnNlRmxvYXQodmFsdWUpID49IHBhcnNlRmxvYXQodmFsaWRhdG9yLm1pbikgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG1heGxlbmd0aDoge1xuXHRcdFx0XHRuYW1lOiBcIm1heGxlbmd0aFwiLFxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4ge21heGxlbmd0aDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1heGxlbmd0aFwiKX07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gKCh2YWx1ZS5sZW5ndGggPiB2YWxpZGF0b3IubWF4bGVuZ3RoKSAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcblx0XHRcdFx0XHRcdHx8ICgodmFsdWUubGVuZ3RoIDw9IHZhbGlkYXRvci5tYXhsZW5ndGgpICYmIHZhbGlkYXRvci5uZWdhdGl2ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRtaW5sZW5ndGg6IHtcblx0XHRcdFx0bmFtZTogXCJtaW5sZW5ndGhcIixcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHttaW5sZW5ndGg6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJNaW5sZW5ndGhcIil9O1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XG5cdFx0XHRcdFx0cmV0dXJuICgodmFsdWUubGVuZ3RoIDwgdmFsaWRhdG9yLm1pbmxlbmd0aCkgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXG5cdFx0XHRcdFx0XHR8fCAoKHZhbHVlLmxlbmd0aCA+PSB2YWxpZGF0b3IubWlubGVuZ3RoKSAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0bWF4Y2hlY2tlZDoge1xuXHRcdFx0XHRuYW1lOiBcIm1heGNoZWNrZWRcIixcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XG5cdFx0XHRcdFx0dmFyIGVsZW1lbnRzID0gJHRoaXMucGFyZW50cyhcImZvcm1cIikuZmlyc3QoKS5maW5kKFwiW25hbWU9XFxcIlwiICsgJHRoaXMuYXR0cihcIm5hbWVcIikgKyBcIlxcXCJdXCIpO1xuXHRcdFx0XHRcdGVsZW1lbnRzLmJpbmQoXCJjbGljay52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdCR0aGlzLnRyaWdnZXIoXCJjaGFuZ2UudmFsaWRhdGlvblwiLCB7aW5jbHVkZUVtcHR5OiB0cnVlfSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIHttYXhjaGVja2VkOiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiTWF4Y2hlY2tlZFwiKSwgZWxlbWVudHM6IGVsZW1lbnRzfTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xuXHRcdFx0XHRcdHJldHVybiAodmFsaWRhdG9yLmVsZW1lbnRzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+IHZhbGlkYXRvci5tYXhjaGVja2VkICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxuXHRcdFx0XHRcdFx0fHwgKHZhbGlkYXRvci5lbGVtZW50cy5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPD0gdmFsaWRhdG9yLm1heGNoZWNrZWQgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcblx0XHRcdFx0fSxcbiAgICAgICAgYmxvY2tTdWJtaXQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRtaW5jaGVja2VkOiB7XG5cdFx0XHRcdG5hbWU6IFwibWluY2hlY2tlZFwiLFxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcblx0XHRcdFx0XHR2YXIgZWxlbWVudHMgPSAkdGhpcy5wYXJlbnRzKFwiZm9ybVwiKS5maXJzdCgpLmZpbmQoXCJbbmFtZT1cXFwiXCIgKyAkdGhpcy5hdHRyKFwibmFtZVwiKSArIFwiXFxcIl1cIik7XG5cdFx0XHRcdFx0ZWxlbWVudHMuYmluZChcImNsaWNrLnZhbGlkYXRpb25cIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0JHRoaXMudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIsIHtpbmNsdWRlRW1wdHk6IHRydWV9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4ge21pbmNoZWNrZWQ6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJNaW5jaGVja2VkXCIpLCBlbGVtZW50czogZWxlbWVudHN9O1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XG5cdFx0XHRcdFx0cmV0dXJuICh2YWxpZGF0b3IuZWxlbWVudHMuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoIDwgdmFsaWRhdG9yLm1pbmNoZWNrZWQgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXG5cdFx0XHRcdFx0XHR8fCAodmFsaWRhdG9yLmVsZW1lbnRzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSB2YWxpZGF0b3IubWluY2hlY2tlZCAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xuXHRcdFx0XHR9LFxuICAgICAgICBibG9ja1N1Ym1pdDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YnVpbHRJblZhbGlkYXRvcnM6IHtcblx0XHRcdGVtYWlsOiB7XG5cdFx0XHRcdG5hbWU6IFwiRW1haWxcIixcblx0XHRcdFx0dHlwZTogXCJzaG9ydGN1dFwiLFxuXHRcdFx0XHRzaG9ydGN1dDogXCJ2YWxpZGVtYWlsXCJcblx0XHRcdH0sXG5cdFx0XHR2YWxpZGVtYWlsOiB7XG5cdFx0XHRcdG5hbWU6IFwiVmFsaWRlbWFpbFwiLFxuXHRcdFx0XHR0eXBlOiBcInJlZ2V4XCIsXG5cdFx0XHRcdHJlZ2V4OiBcIltBLVphLXowLTkuXyUrLV0rQFtBLVphLXowLTkuLV0rXFxcXFxcLltBLVphLXpdezIsNH1cIixcblx0XHRcdFx0bWVzc2FnZTogXCJOb3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzPCEtLSBkYXRhLXZhbGlkYXRvci12YWxpZGVtYWlsLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcblx0XHRcdH0sXG5cdFx0XHRwYXNzd29yZGFnYWluOiB7XG5cdFx0XHRcdG5hbWU6IFwiUGFzc3dvcmRhZ2FpblwiLFxuXHRcdFx0XHR0eXBlOiBcIm1hdGNoXCIsXG5cdFx0XHRcdG1hdGNoOiBcInBhc3N3b3JkXCIsXG5cdFx0XHRcdG1lc3NhZ2U6IFwiRG9lcyBub3QgbWF0Y2ggdGhlIGdpdmVuIHBhc3N3b3JkPCEtLSBkYXRhLXZhbGlkYXRvci1wYXN3b3JkYWdhaW4tbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxuXHRcdFx0fSxcblx0XHRcdHBvc2l0aXZlOiB7XG5cdFx0XHRcdG5hbWU6IFwiUG9zaXRpdmVcIixcblx0XHRcdFx0dHlwZTogXCJzaG9ydGN1dFwiLFxuXHRcdFx0XHRzaG9ydGN1dDogXCJudW1iZXIscG9zaXRpdmVudW1iZXJcIlxuXHRcdFx0fSxcblx0XHRcdG5lZ2F0aXZlOiB7XG5cdFx0XHRcdG5hbWU6IFwiTmVnYXRpdmVcIixcblx0XHRcdFx0dHlwZTogXCJzaG9ydGN1dFwiLFxuXHRcdFx0XHRzaG9ydGN1dDogXCJudW1iZXIsbmVnYXRpdmVudW1iZXJcIlxuXHRcdFx0fSxcblx0XHRcdG51bWJlcjoge1xuXHRcdFx0XHRuYW1lOiBcIk51bWJlclwiLFxuXHRcdFx0XHR0eXBlOiBcInJlZ2V4XCIsXG5cdFx0XHRcdHJlZ2V4OiBcIihbKy1dP1xcXFxcXGQrKFxcXFxcXC5cXFxcXFxkKik/KFtlRV1bKy1dP1swLTldKyk/KT9cIixcblx0XHRcdFx0bWVzc2FnZTogXCJNdXN0IGJlIGEgbnVtYmVyPCEtLSBkYXRhLXZhbGlkYXRvci1udW1iZXItbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxuXHRcdFx0fSxcblx0XHRcdGludGVnZXI6IHtcblx0XHRcdFx0bmFtZTogXCJJbnRlZ2VyXCIsXG5cdFx0XHRcdHR5cGU6IFwicmVnZXhcIixcblx0XHRcdFx0cmVnZXg6IFwiWystXT9cXFxcXFxkK1wiLFxuXHRcdFx0XHRtZXNzYWdlOiBcIk5vIGRlY2ltYWwgcGxhY2VzIGFsbG93ZWQ8IS0tIGRhdGEtdmFsaWRhdG9yLWludGVnZXItbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxuXHRcdFx0fSxcblx0XHRcdHBvc2l0aXZlbnVtYmVyOiB7XG5cdFx0XHRcdG5hbWU6IFwiUG9zaXRpdmVudW1iZXJcIixcblx0XHRcdFx0dHlwZTogXCJtaW5cIixcblx0XHRcdFx0bWluOiAwLFxuXHRcdFx0XHRtZXNzYWdlOiBcIk11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXI8IS0tIGRhdGEtdmFsaWRhdG9yLXBvc2l0aXZlbnVtYmVyLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcblx0XHRcdH0sXG5cdFx0XHRuZWdhdGl2ZW51bWJlcjoge1xuXHRcdFx0XHRuYW1lOiBcIk5lZ2F0aXZlbnVtYmVyXCIsXG5cdFx0XHRcdHR5cGU6IFwibWF4XCIsXG5cdFx0XHRcdG1heDogMCxcblx0XHRcdFx0bWVzc2FnZTogXCJNdXN0IGJlIGEgbmVnYXRpdmUgbnVtYmVyPCEtLSBkYXRhLXZhbGlkYXRvci1uZWdhdGl2ZW51bWJlci1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiXG5cdFx0XHR9LFxuXHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0bmFtZTogXCJSZXF1aXJlZFwiLFxuXHRcdFx0XHR0eXBlOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdG1lc3NhZ2U6IFwiVGhpcyBpcyByZXF1aXJlZDwhLS0gZGF0YS12YWxpZGF0b3ItcmVxdWlyZWQtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxuXHRcdFx0fSxcblx0XHRcdGNoZWNrb25lOiB7XG5cdFx0XHRcdG5hbWU6IFwiQ2hlY2tvbmVcIixcblx0XHRcdFx0dHlwZTogXCJtaW5jaGVja2VkXCIsXG5cdFx0XHRcdG1pbmNoZWNrZWQ6IDEsXG5cdFx0XHRcdG1lc3NhZ2U6IFwiQ2hlY2sgYXQgbGVhc3Qgb25lIG9wdGlvbjwhLS0gZGF0YS12YWxpZGF0aW9uLWNoZWNrb25lLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0dmFyIGZvcm1hdFZhbGlkYXRvck5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiBuYW1lXG5cdFx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdC8oXnxcXHMpKFthLXpdKS9nICxcblx0XHRcdFx0ZnVuY3Rpb24obSxwMSxwMikge1xuXHRcdFx0XHRcdHJldHVybiBwMStwMi50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0O1xuXHR9O1xuXG5cdHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uICgkdGhpcykge1xuXHRcdC8vIEV4dHJhY3QgdGhlIHZhbHVlIHdlJ3JlIHRhbGtpbmcgYWJvdXRcblx0XHR2YXIgdmFsdWUgPSAkdGhpcy52YWwoKTtcblx0XHR2YXIgdHlwZSA9ICR0aGlzLmF0dHIoXCJ0eXBlXCIpO1xuXHRcdGlmICh0eXBlID09PSBcImNoZWNrYm94XCIpIHtcblx0XHRcdHZhbHVlID0gKCR0aGlzLmlzKFwiOmNoZWNrZWRcIikgPyB2YWx1ZSA6IFwiXCIpO1xuXHRcdH1cblx0XHRpZiAodHlwZSA9PT0gXCJyYWRpb1wiKSB7XG5cdFx0XHR2YWx1ZSA9ICgkKCdpbnB1dFtuYW1lPVwiJyArICR0aGlzLmF0dHIoXCJuYW1lXCIpICsgJ1wiXTpjaGVja2VkJykubGVuZ3RoID4gMCA/IHZhbHVlIDogXCJcIik7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fTtcblxuICBmdW5jdGlvbiByZWdleEZyb21TdHJpbmcoaW5wdXRzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcIl5cIiArIGlucHV0c3RyaW5nICsgXCIkXCIpO1xuXHR9XG5cbiAgLyoqXG4gICAqIFRoYW5rcyB0byBKYXNvbiBCdW50aW5nIHZpYSBTdGFja092ZXJmbG93LmNvbVxuICAgKlxuICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1OTc4OC9ob3ctdG8tZXhlY3V0ZS1hLWphdmFzY3JpcHQtZnVuY3Rpb24td2hlbi1pLWhhdmUtaXRzLW5hbWUtYXMtYS1zdHJpbmcjYW5zd2VyLTM1OTkxMFxuICAgKiBTaG9ydCBsaW5rOiBodHRwOi8vdGlueXVybC5jb20vZXhlY3V0ZUZ1bmN0aW9uQnlOYW1lXG4gICoqL1xuICBmdW5jdGlvbiBleGVjdXRlRnVuY3Rpb25CeU5hbWUoZnVuY3Rpb25OYW1lLCBjb250ZXh0IC8qLCBhcmdzKi8pIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuc3BsaWNlKDIpO1xuICAgIHZhciBuYW1lc3BhY2VzID0gZnVuY3Rpb25OYW1lLnNwbGl0KFwiLlwiKTtcbiAgICB2YXIgZnVuYyA9IG5hbWVzcGFjZXMucG9wKCk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG5hbWVzcGFjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0W25hbWVzcGFjZXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFtmdW5jXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG5cdCQuZm4uanFCb290c3RyYXBWYWxpZGF0aW9uID0gZnVuY3Rpb24oIG1ldGhvZCApIHtcblxuXHRcdGlmICggZGVmYXVsdHMubWV0aG9kc1ttZXRob2RdICkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRzLm1ldGhvZHNbbWV0aG9kXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApKTtcblx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZCApIHtcblx0XHRcdHJldHVybiBkZWZhdWx0cy5tZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0JC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZCArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LmpxQm9vdHN0cmFwVmFsaWRhdGlvbicgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHR9O1xuXG4gICQuanFCb290c3RyYXBWYWxpZGF0aW9uID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAkKFwiOmlucHV0XCIpLm5vdChcIlt0eXBlPWltYWdlXSxbdHlwZT1zdWJtaXRdXCIpLmpxQm9vdHN0cmFwVmFsaWRhdGlvbi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XG4gIH07XG5cbn0pKCBqUXVlcnkgKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=