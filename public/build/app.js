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

      $this = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#sendMessageButton");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuYnVuZGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250YWN0X21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcmVlbGFuY2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcUJvb3RzdHJhcFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwialF1ZXJ5IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJwb3BvdmVyIiwiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJoYXNPd25Qcm9wZXJ0eSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfaW5oZXJpdHNMb29zZSIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiX19wcm90b19fIiwiVFJBTlNJVElPTl9FTkQiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJ0b1R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCIsImJpbmRUeXBlIiwiZGVsZWdhdGVUeXBlIiwiaGFuZGxlIiwiZXZlbnQiLCJpcyIsImhhbmRsZU9iaiIsImhhbmRsZXIiLCJhcHBseSIsInVuZGVmaW5lZCIsInRyYW5zaXRpb25FbmRFbXVsYXRvciIsImR1cmF0aW9uIiwiX3RoaXMiLCJjYWxsZWQiLCJvbmUiLCJVdGlsIiwic2V0VGltZW91dCIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwic2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQiLCJmbiIsImVtdWxhdGVUcmFuc2l0aW9uRW5kIiwic3BlY2lhbCIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJocmVmQXR0ciIsInRyaW0iLCJxdWVyeVNlbGVjdG9yIiwiZXJyIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJjc3MiLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInNwbGl0IiwicmVmbG93Iiwib2Zmc2V0SGVpZ2h0IiwidHJpZ2dlciIsInN1cHBvcnRzVHJhbnNpdGlvbkVuZCIsIkJvb2xlYW4iLCJpc0VsZW1lbnQiLCJub2RlVHlwZSIsInR5cGVDaGVja0NvbmZpZyIsImNvbXBvbmVudE5hbWUiLCJjb25maWciLCJjb25maWdUeXBlcyIsInByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlVHlwZSIsIlJlZ0V4cCIsInRlc3QiLCJFcnJvciIsInRvVXBwZXJDYXNlIiwiZmluZFNoYWRvd1Jvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJhdHRhY2hTaGFkb3ciLCJnZXRSb290Tm9kZSIsInJvb3QiLCJTaGFkb3dSb290IiwicGFyZW50Tm9kZSIsIk5BTUUiLCJWRVJTSU9OIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJEQVRBX0FQSV9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJTZWxlY3RvciIsIkRJU01JU1MiLCJFdmVudCIsIkNMT1NFIiwiQ0xPU0VEIiwiQ0xJQ0tfREFUQV9BUEkiLCJDbGFzc05hbWUiLCJBTEVSVCIsIkZBREUiLCJTSE9XIiwiQWxlcnQiLCJfZWxlbWVudCIsIl9wcm90byIsImNsb3NlIiwicm9vdEVsZW1lbnQiLCJfZ2V0Um9vdEVsZW1lbnQiLCJjdXN0b21FdmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIl9yZW1vdmVFbGVtZW50IiwiZGlzcG9zZSIsInJlbW92ZURhdGEiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xvc2VFdmVudCIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJfZGVzdHJveUVsZW1lbnQiLCJkZXRhY2giLCJyZW1vdmUiLCJfalF1ZXJ5SW50ZXJmYWNlIiwiZWFjaCIsIiRlbGVtZW50IiwiZGF0YSIsIl9oYW5kbGVEaXNtaXNzIiwiYWxlcnRJbnN0YW5jZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0Iiwib24iLCJub0NvbmZsaWN0IiwiTkFNRSQxIiwiVkVSU0lPTiQxIiwiREFUQV9LRVkkMSIsIkVWRU5UX0tFWSQxIiwiREFUQV9BUElfS0VZJDEiLCJKUVVFUllfTk9fQ09ORkxJQ1QkMSIsIkNsYXNzTmFtZSQxIiwiQUNUSVZFIiwiQlVUVE9OIiwiRk9DVVMiLCJTZWxlY3RvciQxIiwiREFUQV9UT0dHTEVfQ0FSUk9UIiwiREFUQV9UT0dHTEUiLCJJTlBVVCIsIkV2ZW50JDEiLCJGT0NVU19CTFVSX0RBVEFfQVBJIiwiQnV0dG9uIiwidG9nZ2xlIiwidHJpZ2dlckNoYW5nZUV2ZW50IiwiYWRkQXJpYVByZXNzZWQiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhY3RpdmVFbGVtZW50IiwiaGFzQXR0cmlidXRlIiwiZm9jdXMiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImJ1dHRvbiIsIk5BTUUkMiIsIlZFUlNJT04kMiIsIkRBVEFfS0VZJDIiLCJFVkVOVF9LRVkkMiIsIkRBVEFfQVBJX0tFWSQyIiwiSlFVRVJZX05PX0NPTkZMSUNUJDIiLCJBUlJPV19MRUZUX0tFWUNPREUiLCJBUlJPV19SSUdIVF9LRVlDT0RFIiwiVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCIsIlNXSVBFX1RIUkVTSE9MRCIsIkRlZmF1bHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwic2xpZGUiLCJwYXVzZSIsIndyYXAiLCJ0b3VjaCIsIkRlZmF1bHRUeXBlIiwiRGlyZWN0aW9uIiwiTkVYVCIsIlBSRVYiLCJMRUZUIiwiUklHSFQiLCJFdmVudCQyIiwiU0xJREUiLCJTTElEIiwiS0VZRE9XTiIsIk1PVVNFRU5URVIiLCJNT1VTRUxFQVZFIiwiVE9VQ0hTVEFSVCIsIlRPVUNITU9WRSIsIlRPVUNIRU5EIiwiUE9JTlRFUkRPV04iLCJQT0lOVEVSVVAiLCJEUkFHX1NUQVJUIiwiTE9BRF9EQVRBX0FQSSIsIkNsYXNzTmFtZSQyIiwiQ0FST1VTRUwiLCJJVEVNIiwiUE9JTlRFUl9FVkVOVCIsIlNlbGVjdG9yJDIiLCJBQ1RJVkVfSVRFTSIsIklURU1fSU1HIiwiTkVYVF9QUkVWIiwiSU5ESUNBVE9SUyIsIkRBVEFfU0xJREUiLCJEQVRBX1JJREUiLCJQb2ludGVyVHlwZSIsIlRPVUNIIiwiUEVOIiwiQ2Fyb3VzZWwiLCJfaXRlbXMiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1BhdXNlZCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRGVsdGFYIiwiX2NvbmZpZyIsIl9nZXRDb25maWciLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJfdG91Y2hTdXBwb3J0ZWQiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIl9wb2ludGVyRXZlbnQiLCJ3aW5kb3ciLCJQb2ludGVyRXZlbnQiLCJNU1BvaW50ZXJFdmVudCIsIl9hZGRFdmVudExpc3RlbmVycyIsIm5leHQiLCJfc2xpZGUiLCJuZXh0V2hlblZpc2libGUiLCJoaWRkZW4iLCJwcmV2IiwiY3ljbGUiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ2aXNpYmlsaXR5U3RhdGUiLCJiaW5kIiwidG8iLCJpbmRleCIsImFjdGl2ZUluZGV4IiwiX2dldEl0ZW1JbmRleCIsImRpcmVjdGlvbiIsIm9mZiIsIl9oYW5kbGVTd2lwZSIsImFic0RlbHRheCIsImFicyIsIl90aGlzMiIsIl9rZXlkb3duIiwiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCJfdGhpczMiLCJzdGFydCIsIm9yaWdpbmFsRXZlbnQiLCJwb2ludGVyVHlwZSIsImNsaWVudFgiLCJ0b3VjaGVzIiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlIiwiYWRkIiwidGFnTmFtZSIsIndoaWNoIiwic2xpY2UiLCJpbmRleE9mIiwiX2dldEl0ZW1CeURpcmVjdGlvbiIsImlzTmV4dERpcmVjdGlvbiIsImlzUHJldkRpcmVjdGlvbiIsImxhc3RJdGVtSW5kZXgiLCJpc0dvaW5nVG9XcmFwIiwiZGVsdGEiLCJpdGVtSW5kZXgiLCJfdHJpZ2dlclNsaWRlRXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwiZXZlbnREaXJlY3Rpb25OYW1lIiwidGFyZ2V0SW5kZXgiLCJmcm9tSW5kZXgiLCJzbGlkZUV2ZW50IiwiZnJvbSIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiaW5kaWNhdG9ycyIsIm5leHRJbmRpY2F0b3IiLCJjaGlsZHJlbiIsImFkZENsYXNzIiwiX3RoaXM0IiwiYWN0aXZlRWxlbWVudEluZGV4IiwibmV4dEVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsInNsaWRFdmVudCIsIm5leHRFbGVtZW50SW50ZXJ2YWwiLCJwYXJzZUludCIsImRlZmF1bHRJbnRlcnZhbCIsImFjdGlvbiIsIlR5cGVFcnJvciIsInJpZGUiLCJfZGF0YUFwaUNsaWNrSGFuZGxlciIsInNsaWRlSW5kZXgiLCJjYXJvdXNlbHMiLCJsZW4iLCIkY2Fyb3VzZWwiLCJOQU1FJDMiLCJWRVJTSU9OJDMiLCJEQVRBX0tFWSQzIiwiRVZFTlRfS0VZJDMiLCJEQVRBX0FQSV9LRVkkMyIsIkpRVUVSWV9OT19DT05GTElDVCQzIiwiRGVmYXVsdCQxIiwiRGVmYXVsdFR5cGUkMSIsIkV2ZW50JDMiLCJTSE9XTiIsIkhJREUiLCJISURERU4iLCJDbGFzc05hbWUkMyIsIkNPTExBUFNFIiwiQ09MTEFQU0lORyIsIkNPTExBUFNFRCIsIkRpbWVuc2lvbiIsIldJRFRIIiwiSEVJR0hUIiwiU2VsZWN0b3IkMyIsIkFDVElWRVMiLCJDb2xsYXBzZSIsIl9pc1RyYW5zaXRpb25pbmciLCJfdHJpZ2dlckFycmF5IiwiaWQiLCJ0b2dnbGVMaXN0IiwiZWxlbSIsImZpbHRlckVsZW1lbnQiLCJmb3VuZEVsZW0iLCJfc2VsZWN0b3IiLCJwdXNoIiwiX3BhcmVudCIsIl9nZXRQYXJlbnQiLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiaGlkZSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJub3QiLCJzdGFydEV2ZW50IiwiZGltZW5zaW9uIiwiX2dldERpbWVuc2lvbiIsInN0eWxlIiwiYXR0ciIsInNldFRyYW5zaXRpb25pbmciLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwic2Nyb2xsU2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRyaWdnZXJBcnJheUxlbmd0aCIsIiRlbGVtIiwiaXNUcmFuc2l0aW9uaW5nIiwiaGFzV2lkdGgiLCJqcXVlcnkiLCJfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQiLCJ0cmlnZ2VyQXJyYXkiLCJpc09wZW4iLCIkdGhpcyIsImN1cnJlbnRUYXJnZXQiLCIkdHJpZ2dlciIsInNlbGVjdG9ycyIsIiR0YXJnZXQiLCJpc0Jyb3dzZXIiLCJsb25nZXJUaW1lb3V0QnJvd3NlcnMiLCJ0aW1lb3V0RHVyYXRpb24iLCJ1c2VyQWdlbnQiLCJtaWNyb3Rhc2tEZWJvdW5jZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsInRhc2tEZWJvdW5jZSIsInNjaGVkdWxlZCIsInN1cHBvcnRzTWljcm9UYXNrcyIsImRlYm91bmNlIiwiaXNGdW5jdGlvbiIsImZ1bmN0aW9uVG9DaGVjayIsImdldFR5cGUiLCJnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UGFyZW50Tm9kZSIsIm5vZGVOYW1lIiwiaG9zdCIsImdldFNjcm9sbFBhcmVudCIsImJvZHkiLCJfZ2V0U3R5bGVDb21wdXRlZFByb3AiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImlzSUUxMSIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwiaXNJRTEwIiwiaXNJRSIsInZlcnNpb24iLCJnZXRPZmZzZXRQYXJlbnQiLCJub09mZnNldFBhcmVudCIsIm9mZnNldFBhcmVudCIsIm5leHRFbGVtZW50U2libGluZyIsImlzT2Zmc2V0Q29udGFpbmVyIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJnZXRSb290Iiwibm9kZSIsImZpbmRDb21tb25PZmZzZXRQYXJlbnQiLCJlbGVtZW50MSIsImVsZW1lbnQyIiwib3JkZXIiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsIk5vZGUiLCJET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkciLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsImVsZW1lbnQxcm9vdCIsImdldFNjcm9sbCIsInNpZGUiLCJ1cHBlclNpZGUiLCJodG1sIiwic2Nyb2xsaW5nRWxlbWVudCIsImluY2x1ZGVTY3JvbGwiLCJyZWN0Iiwic3VidHJhY3QiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwibW9kaWZpZXIiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJnZXRCb3JkZXJzU2l6ZSIsInN0eWxlcyIsImF4aXMiLCJzaWRlQSIsInNpZGVCIiwiZ2V0U2l6ZSIsImNvbXB1dGVkU3R5bGUiLCJtYXgiLCJnZXRXaW5kb3dTaXplcyIsImhlaWdodCIsIndpZHRoIiwiY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsImNyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsIl9leHRlbmRzIiwiYXNzaWduIiwiZ2V0Q2xpZW50UmVjdCIsIm9mZnNldHMiLCJyZXN1bHQiLCJzaXplcyIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaG9yaXpTY3JvbGxiYXIiLCJvZmZzZXRXaWR0aCIsInZlcnRTY3JvbGxiYXIiLCJnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUiLCJmaXhlZFBvc2l0aW9uIiwiaXNIVE1MIiwiY2hpbGRyZW5SZWN0IiwicGFyZW50UmVjdCIsInNjcm9sbFBhcmVudCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSIsImV4Y2x1ZGVTY3JvbGwiLCJyZWxhdGl2ZU9mZnNldCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm9mZnNldCIsImlzRml4ZWQiLCJnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IiwicGFyZW50RWxlbWVudCIsImVsIiwiZ2V0Qm91bmRhcmllcyIsInBvcHBlciIsInJlZmVyZW5jZSIsInBhZGRpbmciLCJib3VuZGFyaWVzRWxlbWVudCIsImJvdW5kYXJpZXMiLCJib3VuZGFyaWVzTm9kZSIsIl9nZXRXaW5kb3dTaXplcyIsImlzUGFkZGluZ051bWJlciIsImdldEFyZWEiLCJfcmVmIiwiY29tcHV0ZUF1dG9QbGFjZW1lbnQiLCJwbGFjZW1lbnQiLCJyZWZSZWN0IiwicmVjdHMiLCJzb3J0ZWRBcmVhcyIsIm1hcCIsImFyZWEiLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXJlZEFyZWFzIiwiX3JlZjIiLCJjb21wdXRlZFBsYWNlbWVudCIsInZhcmlhdGlvbiIsImdldFJlZmVyZW5jZU9mZnNldHMiLCJzdGF0ZSIsImNvbW1vbk9mZnNldFBhcmVudCIsImdldE91dGVyU2l6ZXMiLCJ4IiwibWFyZ2luQm90dG9tIiwieSIsIm1hcmdpblJpZ2h0IiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJoYXNoIiwicmVwbGFjZSIsIm1hdGNoZWQiLCJnZXRQb3BwZXJPZmZzZXRzIiwicmVmZXJlbmNlT2Zmc2V0cyIsInBvcHBlclJlY3QiLCJwb3BwZXJPZmZzZXRzIiwiaXNIb3JpeiIsIm1haW5TaWRlIiwic2Vjb25kYXJ5U2lkZSIsIm1lYXN1cmVtZW50Iiwic2Vjb25kYXJ5TWVhc3VyZW1lbnQiLCJmaW5kIiwiYXJyIiwiY2hlY2siLCJBcnJheSIsImZpbmRJbmRleCIsInByb3AiLCJjdXIiLCJydW5Nb2RpZmllcnMiLCJtb2RpZmllcnMiLCJlbmRzIiwibW9kaWZpZXJzVG9SdW4iLCJjb25zb2xlIiwid2FybiIsImVuYWJsZWQiLCJ1cGRhdGUiLCJpc0Rlc3Ryb3llZCIsImFycm93U3R5bGVzIiwiYXR0cmlidXRlcyIsImZsaXBwZWQiLCJvcHRpb25zIiwicG9zaXRpb25GaXhlZCIsImZsaXAiLCJvcmlnaW5hbFBsYWNlbWVudCIsInBvc2l0aW9uIiwiaXNDcmVhdGVkIiwib25DcmVhdGUiLCJvblVwZGF0ZSIsImlzTW9kaWZpZXJFbmFibGVkIiwibW9kaWZpZXJOYW1lIiwic29tZSIsIm5hbWUiLCJnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUiLCJwcmVmaXhlcyIsInVwcGVyUHJvcCIsImNoYXJBdCIsInRvQ2hlY2siLCJkZXN0cm95IiwicmVtb3ZlQXR0cmlidXRlIiwid2lsbENoYW5nZSIsImRpc2FibGVFdmVudExpc3RlbmVycyIsInJlbW92ZU9uRGVzdHJveSIsInJlbW92ZUNoaWxkIiwiZ2V0V2luZG93IiwiYXR0YWNoVG9TY3JvbGxQYXJlbnRzIiwiY2FsbGJhY2siLCJzY3JvbGxQYXJlbnRzIiwiaXNCb2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJzZXR1cEV2ZW50TGlzdGVuZXJzIiwidXBkYXRlQm91bmQiLCJzY3JvbGxFbGVtZW50IiwiZXZlbnRzRW5hYmxlZCIsImVuYWJsZUV2ZW50TGlzdGVuZXJzIiwic2NoZWR1bGVVcGRhdGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlzTnVtZXJpYyIsIm4iLCJpc05hTiIsImlzRmluaXRlIiwic2V0U3R5bGVzIiwidW5pdCIsInNldEF0dHJpYnV0ZXMiLCJhcHBseVN0eWxlIiwiYXJyb3dFbGVtZW50IiwiYXBwbHlTdHlsZU9uTG9hZCIsIm1vZGlmaWVyT3B0aW9ucyIsImdldFJvdW5kZWRPZmZzZXRzIiwic2hvdWxkUm91bmQiLCJfZGF0YSRvZmZzZXRzIiwicm91bmQiLCJmbG9vciIsIm5vUm91bmQiLCJ2IiwicmVmZXJlbmNlV2lkdGgiLCJwb3BwZXJXaWR0aCIsImlzVmVydGljYWwiLCJpc1ZhcmlhdGlvbiIsInNhbWVXaWR0aFBhcml0eSIsImJvdGhPZGRXaWR0aCIsImhvcml6b250YWxUb0ludGVnZXIiLCJ2ZXJ0aWNhbFRvSW50ZWdlciIsImlzRmlyZWZveCIsImNvbXB1dGVTdHlsZSIsImxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiIsImdwdUFjY2VsZXJhdGlvbiIsIm9mZnNldFBhcmVudFJlY3QiLCJkZXZpY2VQaXhlbFJhdGlvIiwicHJlZml4ZWRQcm9wZXJ0eSIsImludmVydFRvcCIsImludmVydExlZnQiLCJhcnJvdyIsImlzTW9kaWZpZXJSZXF1aXJlZCIsInJlcXVlc3RpbmdOYW1lIiwicmVxdWVzdGVkTmFtZSIsInJlcXVlc3RpbmciLCJpc1JlcXVpcmVkIiwiX3JlcXVlc3RpbmciLCJyZXF1ZXN0ZWQiLCJfZGF0YSRvZmZzZXRzJGFycm93Iiwic2lkZUNhcGl0YWxpemVkIiwiYWx0U2lkZSIsIm9wU2lkZSIsImFycm93RWxlbWVudFNpemUiLCJjZW50ZXIiLCJwb3BwZXJNYXJnaW5TaWRlIiwicG9wcGVyQm9yZGVyU2lkZSIsInNpZGVWYWx1ZSIsIm1pbiIsImdldE9wcG9zaXRlVmFyaWF0aW9uIiwicGxhY2VtZW50cyIsInZhbGlkUGxhY2VtZW50cyIsImNsb2Nrd2lzZSIsImNvdW50ZXIiLCJyZXZlcnNlIiwiQkVIQVZJT1JTIiwiRkxJUCIsIkNMT0NLV0lTRSIsIkNPVU5URVJDTE9DS1dJU0UiLCJwbGFjZW1lbnRPcHBvc2l0ZSIsImZsaXBPcmRlciIsImJlaGF2aW9yIiwic3RlcCIsInJlZk9mZnNldHMiLCJvdmVybGFwc1JlZiIsIm92ZXJmbG93c0xlZnQiLCJvdmVyZmxvd3NSaWdodCIsIm92ZXJmbG93c1RvcCIsIm92ZXJmbG93c0JvdHRvbSIsIm92ZXJmbG93c0JvdW5kYXJpZXMiLCJmbGlwcGVkVmFyaWF0aW9uIiwiZmxpcFZhcmlhdGlvbnMiLCJrZWVwVG9nZXRoZXIiLCJ0b1ZhbHVlIiwic3RyIiwic2l6ZSIsInBhcnNlT2Zmc2V0IiwiYmFzZVBsYWNlbWVudCIsInVzZUhlaWdodCIsImZyYWdtZW50cyIsImZyYWciLCJkaXZpZGVyIiwic2VhcmNoIiwic3BsaXRSZWdleCIsIm9wcyIsIm9wIiwibWVyZ2VXaXRoUHJldmlvdXMiLCJyZWR1Y2UiLCJpbmRleDIiLCJwcmV2ZW50T3ZlcmZsb3ciLCJ0cmFuc2Zvcm1Qcm9wIiwicG9wcGVyU3R5bGVzIiwidHJhbnNmb3JtIiwicHJpb3JpdHkiLCJwcmltYXJ5IiwiZXNjYXBlV2l0aFJlZmVyZW5jZSIsInNlY29uZGFyeSIsInNoaWZ0Iiwic2hpZnR2YXJpYXRpb24iLCJzaGlmdE9mZnNldHMiLCJib3VuZCIsImlubmVyIiwic3VidHJhY3RMZW5ndGgiLCJvbkxvYWQiLCJEZWZhdWx0cyIsIlBvcHBlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSQkMSIsImRlc3Ryb3kkJDEiLCJlbmFibGVFdmVudExpc3RlbmVycyQkMSIsImRpc2FibGVFdmVudExpc3RlbmVycyQkMSIsIlV0aWxzIiwiUG9wcGVyVXRpbHMiLCJOQU1FJDQiLCJWRVJTSU9OJDQiLCJEQVRBX0tFWSQ0IiwiRVZFTlRfS0VZJDQiLCJEQVRBX0FQSV9LRVkkNCIsIkpRVUVSWV9OT19DT05GTElDVCQ0IiwiRVNDQVBFX0tFWUNPREUiLCJTUEFDRV9LRVlDT0RFIiwiVEFCX0tFWUNPREUiLCJBUlJPV19VUF9LRVlDT0RFIiwiQVJST1dfRE9XTl9LRVlDT0RFIiwiUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIiwiUkVHRVhQX0tFWURPV04iLCJFdmVudCQ0IiwiQ0xJQ0siLCJLRVlET1dOX0RBVEFfQVBJIiwiS0VZVVBfREFUQV9BUEkiLCJDbGFzc05hbWUkNCIsIkRJU0FCTEVEIiwiRFJPUFVQIiwiRFJPUFJJR0hUIiwiRFJPUExFRlQiLCJNRU5VUklHSFQiLCJNRU5VTEVGVCIsIlBPU0lUSU9OX1NUQVRJQyIsIlNlbGVjdG9yJDQiLCJGT1JNX0NISUxEIiwiTUVOVSIsIk5BVkJBUl9OQVYiLCJWSVNJQkxFX0lURU1TIiwiQXR0YWNobWVudE1hcCIsIlRPUCIsIlRPUEVORCIsIkJPVFRPTSIsIkJPVFRPTUVORCIsIlJJR0hURU5EIiwiTEVGVEVORCIsIkRlZmF1bHQkMiIsImJvdW5kYXJ5IiwiZGlzcGxheSIsIkRlZmF1bHRUeXBlJDIiLCJEcm9wZG93biIsIl9wb3BwZXIiLCJfbWVudSIsIl9nZXRNZW51RWxlbWVudCIsIl9pbk5hdmJhciIsIl9kZXRlY3ROYXZiYXIiLCJkaXNhYmxlZCIsIl9nZXRQYXJlbnRGcm9tRWxlbWVudCIsImlzQWN0aXZlIiwiX2NsZWFyTWVudXMiLCJzaG93RXZlbnQiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsIm5vb3AiLCJoaWRlRXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJfZ2V0UGxhY2VtZW50IiwiJHBhcmVudERyb3Bkb3duIiwiX2dldE9mZnNldCIsInBvcHBlckNvbmZpZyIsInRvZ2dsZXMiLCJjb250ZXh0IiwiY2xpY2tFdmVudCIsImRyb3Bkb3duTWVudSIsIl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpdGVtcyIsIk5BTUUkNSIsIlZFUlNJT04kNSIsIkRBVEFfS0VZJDUiLCJFVkVOVF9LRVkkNSIsIkRBVEFfQVBJX0tFWSQ1IiwiSlFVRVJZX05PX0NPTkZMSUNUJDUiLCJFU0NBUEVfS0VZQ09ERSQxIiwiRGVmYXVsdCQzIiwiYmFja2Ryb3AiLCJEZWZhdWx0VHlwZSQzIiwiRXZlbnQkNSIsIkZPQ1VTSU4iLCJSRVNJWkUiLCJDTElDS19ESVNNSVNTIiwiS0VZRE9XTl9ESVNNSVNTIiwiTU9VU0VVUF9ESVNNSVNTIiwiTU9VU0VET1dOX0RJU01JU1MiLCJDbGFzc05hbWUkNSIsIlNDUk9MTEFCTEUiLCJTQ1JPTExCQVJfTUVBU1VSRVIiLCJCQUNLRFJPUCIsIk9QRU4iLCJTZWxlY3RvciQ1IiwiRElBTE9HIiwiTU9EQUxfQk9EWSIsIkRBVEFfRElTTUlTUyIsIkZJWEVEX0NPTlRFTlQiLCJTVElDS1lfQ09OVEVOVCIsIk1vZGFsIiwiX2RpYWxvZyIsIl9iYWNrZHJvcCIsIl9pc1Nob3duIiwiX2lzQm9keU92ZXJmbG93aW5nIiwiX2lnbm9yZUJhY2tkcm9wQ2xpY2siLCJfc2Nyb2xsYmFyV2lkdGgiLCJfY2hlY2tTY3JvbGxiYXIiLCJfc2V0U2Nyb2xsYmFyIiwiX2FkanVzdERpYWxvZyIsIl9zZXRFc2NhcGVFdmVudCIsIl9zZXRSZXNpemVFdmVudCIsIl9zaG93QmFja2Ryb3AiLCJfc2hvd0VsZW1lbnQiLCJ0cmFuc2l0aW9uIiwiX2hpZGVNb2RhbCIsImh0bWxFbGVtZW50IiwiaGFuZGxlVXBkYXRlIiwiRUxFTUVOVF9OT0RFIiwiYXBwZW5kQ2hpbGQiLCJfZW5mb3JjZUZvY3VzIiwic2hvd25FdmVudCIsInRyYW5zaXRpb25Db21wbGV0ZSIsImhhcyIsIl90aGlzNSIsIl90aGlzNiIsIl90aGlzNyIsIl9yZXNldEFkanVzdG1lbnRzIiwiX3Jlc2V0U2Nyb2xsYmFyIiwiX3JlbW92ZUJhY2tkcm9wIiwiX3RoaXM4IiwiYW5pbWF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRUbyIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiY2FsbGJhY2tSZW1vdmUiLCJfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24iLCJpc01vZGFsT3ZlcmZsb3dpbmciLCJzY3JvbGxIZWlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIl9nZXRTY3JvbGxiYXJXaWR0aCIsIl90aGlzOSIsImZpeGVkQ29udGVudCIsInN0aWNreUNvbnRlbnQiLCJhY3R1YWxQYWRkaW5nIiwiY2FsY3VsYXRlZFBhZGRpbmciLCJhY3R1YWxNYXJnaW4iLCJjYWxjdWxhdGVkTWFyZ2luIiwiZWxlbWVudHMiLCJtYXJnaW4iLCJzY3JvbGxEaXYiLCJzY3JvbGxiYXJXaWR0aCIsIl90aGlzMTAiLCJ1cmlBdHRycyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJEZWZhdWx0V2hpdGVsaXN0IiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYWxsb3dlZEF0dHJpYnV0ZSIsImFsbG93ZWRBdHRyaWJ1dGVMaXN0IiwiYXR0ck5hbWUiLCJub2RlVmFsdWUiLCJyZWdFeHAiLCJhdHRyUmVnZXgiLCJsIiwic2FuaXRpemVIdG1sIiwidW5zYWZlSHRtbCIsIndoaXRlTGlzdCIsInNhbml0aXplRm4iLCJkb21QYXJzZXIiLCJET01QYXJzZXIiLCJjcmVhdGVkRG9jdW1lbnQiLCJwYXJzZUZyb21TdHJpbmciLCJ3aGl0ZWxpc3RLZXlzIiwiX2xvb3AiLCJlbE5hbWUiLCJhdHRyaWJ1dGVMaXN0Iiwid2hpdGVsaXN0ZWRBdHRyaWJ1dGVzIiwiX3JldCIsImlubmVySFRNTCIsIk5BTUUkNiIsIlZFUlNJT04kNiIsIkRBVEFfS0VZJDYiLCJFVkVOVF9LRVkkNiIsIkpRVUVSWV9OT19DT05GTElDVCQ2IiwiQ0xBU1NfUFJFRklYIiwiQlNDTFNfUFJFRklYX1JFR0VYIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiRGVmYXVsdFR5cGUkNCIsImFuaW1hdGlvbiIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImNvbnRhaW5lciIsImZhbGxiYWNrUGxhY2VtZW50Iiwic2FuaXRpemUiLCJBdHRhY2htZW50TWFwJDEiLCJBVVRPIiwiRGVmYXVsdCQ0IiwiSG92ZXJTdGF0ZSIsIk9VVCIsIkV2ZW50JDYiLCJJTlNFUlRFRCIsIkZPQ1VTT1VUIiwiQ2xhc3NOYW1lJDYiLCJTZWxlY3RvciQ2IiwiVE9PTFRJUCIsIlRPT0xUSVBfSU5ORVIiLCJBUlJPVyIsIlRyaWdnZXIiLCJIT1ZFUiIsIk1BTlVBTCIsIlRvb2x0aXAiLCJfaXNFbmFibGVkIiwiX3RpbWVvdXQiLCJfaG92ZXJTdGF0ZSIsIl9hY3RpdmVUcmlnZ2VyIiwidGlwIiwiX3NldExpc3RlbmVycyIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiZGF0YUtleSIsIl9nZXREZWxlZ2F0ZUNvbmZpZyIsImNsaWNrIiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJfZW50ZXIiLCJfbGVhdmUiLCJnZXRUaXBFbGVtZW50IiwiaXNXaXRoQ29udGVudCIsInNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwidGlwSWQiLCJzZXRDb250ZW50IiwiYXR0YWNobWVudCIsIl9nZXRBdHRhY2htZW50IiwiYWRkQXR0YWNobWVudENsYXNzIiwiX2dldENvbnRhaW5lciIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJfZml4VHJhbnNpdGlvbiIsInByZXZIb3ZlclN0YXRlIiwiX2NsZWFuVGlwQ2xhc3MiLCJnZXRUaXRsZSIsInNldEVsZW1lbnRDb250ZW50IiwiY29udGVudCIsImVtcHR5IiwiYXBwZW5kIiwidGV4dCIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX2ZpeFRpdGxlIiwidGl0bGVUeXBlIiwiZGF0YUF0dHJpYnV0ZXMiLCJkYXRhQXR0ciIsIiR0aXAiLCJ0YWJDbGFzcyIsImpvaW4iLCJwb3BwZXJEYXRhIiwicG9wcGVySW5zdGFuY2UiLCJpbml0Q29uZmlnQW5pbWF0aW9uIiwiTkFNRSQ3IiwiVkVSU0lPTiQ3IiwiREFUQV9LRVkkNyIsIkVWRU5UX0tFWSQ3IiwiSlFVRVJZX05PX0NPTkZMSUNUJDciLCJDTEFTU19QUkVGSVgkMSIsIkJTQ0xTX1BSRUZJWF9SRUdFWCQxIiwiRGVmYXVsdCQ1IiwiRGVmYXVsdFR5cGUkNSIsIkNsYXNzTmFtZSQ3IiwiU2VsZWN0b3IkNyIsIlRJVExFIiwiQ09OVEVOVCIsIkV2ZW50JDciLCJQb3BvdmVyIiwiX1Rvb2x0aXAiLCJfZ2V0Q29udGVudCIsIk5BTUUkOCIsIlZFUlNJT04kOCIsIkRBVEFfS0VZJDgiLCJFVkVOVF9LRVkkOCIsIkRBVEFfQVBJX0tFWSQ2IiwiSlFVRVJZX05PX0NPTkZMSUNUJDgiLCJEZWZhdWx0JDYiLCJtZXRob2QiLCJEZWZhdWx0VHlwZSQ2IiwiRXZlbnQkOCIsIkFDVElWQVRFIiwiU0NST0xMIiwiQ2xhc3NOYW1lJDgiLCJEUk9QRE9XTl9JVEVNIiwiRFJPUERPV05fTUVOVSIsIlNlbGVjdG9yJDgiLCJEQVRBX1NQWSIsIk5BVl9MSVNUX0dST1VQIiwiTkFWX0xJTktTIiwiTkFWX0lURU1TIiwiTElTVF9JVEVNUyIsIkRST1BET1dOIiwiRFJPUERPV05fSVRFTVMiLCJEUk9QRE9XTl9UT0dHTEUiLCJPZmZzZXRNZXRob2QiLCJPRkZTRVQiLCJQT1NJVElPTiIsIlNjcm9sbFNweSIsIl9zY3JvbGxFbGVtZW50IiwiX29mZnNldHMiLCJfdGFyZ2V0cyIsIl9hY3RpdmVUYXJnZXQiLCJfc2Nyb2xsSGVpZ2h0IiwiX3Byb2Nlc3MiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsInRhcmdldHMiLCJ0YXJnZXRTZWxlY3RvciIsInRhcmdldEJDUiIsIml0ZW0iLCJwYWdlWU9mZnNldCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJtYXhTY3JvbGwiLCJfYWN0aXZhdGUiLCJfY2xlYXIiLCJvZmZzZXRMZW5ndGgiLCJpc0FjdGl2ZVRhcmdldCIsInF1ZXJpZXMiLCIkbGluayIsInBhcmVudHMiLCJzY3JvbGxTcHlzIiwic2Nyb2xsU3B5c0xlbmd0aCIsIiRzcHkiLCJOQU1FJDkiLCJWRVJTSU9OJDkiLCJEQVRBX0tFWSQ5IiwiRVZFTlRfS0VZJDkiLCJEQVRBX0FQSV9LRVkkNyIsIkpRVUVSWV9OT19DT05GTElDVCQ5IiwiRXZlbnQkOSIsIkNsYXNzTmFtZSQ5IiwiU2VsZWN0b3IkOSIsIkFDVElWRV9VTCIsIkRST1BET1dOX0FDVElWRV9DSElMRCIsIlRhYiIsInByZXZpb3VzIiwibGlzdEVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJtYWtlQXJyYXkiLCJoaWRkZW5FdmVudCIsImFjdGl2ZUVsZW1lbnRzIiwiYWN0aXZlIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93blRvZ2dsZUxpc3QiLCJOQU1FJGEiLCJWRVJTSU9OJGEiLCJEQVRBX0tFWSRhIiwiRVZFTlRfS0VZJGEiLCJKUVVFUllfTk9fQ09ORkxJQ1QkYSIsIkV2ZW50JGEiLCJDbGFzc05hbWUkYSIsIlNIT1dJTkciLCJEZWZhdWx0VHlwZSQ3IiwiYXV0b2hpZGUiLCJEZWZhdWx0JDciLCJTZWxlY3RvciRhIiwiVG9hc3QiLCJ3aXRob3V0VGltZW91dCIsIl9jbG9zZSIsIm1pbk1ham9yIiwibHRNYWpvciIsIm1pbk1pbm9yIiwibWluUGF0Y2giLCJtYXhNYWpvciIsIlNjcm9sbHNweSIsImpxQm9vdHN0cmFwVmFsaWRhdGlvbiIsInByZXZlbnRTdWJtaXQiLCJzdWJtaXRFcnJvciIsIiRmb3JtIiwiZXJyb3JzIiwic3VibWl0U3VjY2VzcyIsInZhbCIsImVtYWlsIiwicGhvbmUiLCJtZXNzYWdlIiwiZmlyc3ROYW1lIiwiYWpheCIsInVybCIsImNhY2hlIiwic3VjY2VzcyIsImVycm9yIiwidGFiIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImhvc3RuYW1lIiwic2Nyb2xsIiwic2Nyb2xsRGlzdGFuY2UiLCJmYWRlSW4iLCJmYWRlT3V0IiwiY29sbGFwc2UiLCJzY3JvbGxzcHkiLCJuYXZiYXJDb2xsYXBzZSIsImNyZWF0ZWRFbGVtZW50cyIsImRlZmF1bHRzIiwicHJlcGVuZEV4aXN0aW5nSGVscEJsb2NrIiwic25pZmZIdG1sIiwic2VtYW50aWNhbGx5U3RyaWN0IiwiYXV0b0FkZCIsImhlbHBCbG9ja3MiLCJtZXRob2RzIiwiaW5pdCIsInNldHRpbmdzIiwiZXh0ZW5kIiwiJHNpYmxpbmdFbGVtZW50cyIsInVuaXF1ZUZvcm1zIiwidW5pcXVlIiwidG9BcnJheSIsIndhcm5pbmdzRm91bmQiLCIkaW5wdXRzIiwiJGNvbnRyb2xHcm91cCIsImZpcnN0IiwiJGhlbHBCbG9jayIsInZhbGlkYXRvck5hbWVzIiwiYnVpbHRJblZhbGlkYXRvcnMiLCJyZXF1aXJlZCIsIm51bWJlciIsInBhcnRzIiwidmFsaWRhdG9yTmFtZXNUb0luc3BlY3QiLCJuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdCIsImZvcm1hdFZhbGlkYXRvck5hbWUiLCJpMiIsImVsMiIsInZhbGlkYXRvciIsInNob3J0Y3V0IiwidmFsaWRhdG9ycyIsImhhc092ZXJyaWRlTWVzc2FnZSIsImZvdW5kVmFsaWRhdG9yIiwidmFsaWRhdG9yVHlwZXMiLCJ2YWxpZGF0b3JUeXBlIiwidmFsaWRhdG9yVGVtcGxhdGUiLCJ2YWxpZGF0b3JUZW1wbGF0ZVR5cGUiLCJwYXJhbXMiLCJnZXRWYWx1ZSIsImVycm9yc0ZvdW5kIiwidmFsaWRhdG9yVHlwZUFycmF5IiwiaW5jbHVkZUVtcHR5IiwiYmxvY2tTdWJtaXQiLCJzdWJtaXR0aW5nIiwidmFsaWRhdGUiLCJ0cmlnZ2VySGFuZGxlciIsIm9sZENvdW50IiwiaiIsIm9yaWdpbmFsIiwidW5iaW5kIiwiY29sbGVjdEVycm9ycyIsImVycm9yTWVzc2FnZXMiLCIkZWwiLCJoYXNFcnJvcnMiLCJvdmVycmlkZSIsIm5ld0RlZmF1bHRzIiwidmFsaWRhdG9yTmFtZSIsImxhc3RWYWx1ZSIsImxhc3RWYWxpZCIsImxhc3RGaW5pc2hlZCIsInJyanFidlZhbGlkYXRvciIsInJyanFidlRoaXMiLCJleGVjdXRlRnVuY3Rpb25CeU5hbWUiLCJ2YWxpZCIsImRhdGFUeXBlIiwiZmFpbHVyZSIsInJlZ2V4IiwicmVnZXhGcm9tU3RyaW5nIiwibmVnYXRpdmUiLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJtYXhjaGVja2VkIiwibWluY2hlY2tlZCIsInZhbGlkZW1haWwiLCJwYXNzd29yZGFnYWluIiwicG9zaXRpdmUiLCJpbnRlZ2VyIiwicG9zaXRpdmVudW1iZXIiLCJuZWdhdGl2ZW51bWJlciIsImNoZWNrb25lIiwibSIsInAxIiwicDIiLCJpbnB1dHN0cmluZyIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJzcGxpY2UiLCJuYW1lc3BhY2VzIiwiZnVuYyIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUEsbUJBQU8sQ0FBQyxtSEFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHVHQUFELENBQVAsQyxDQUNBO0FBQ0E7OztBQUNBLElBQUlDLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxpRkFB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QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5zY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnKTtcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcycpO1xuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG4vL2ltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG52YXIgalF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeS1lYXNpbmdcIik7XG5cbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmltcG9ydCAnLi9ib290c3RyYXAuYnVuZGxlLmpzJztcbmltcG9ydCAnLi9mcmVlbGFuY2VyLmpzJztcbmltcG9ydCAnLi9qcUJvb3RzdHJhcFZhbGlkYXRpb24uanMnO1xuaW1wb3J0ICcuL2NvbnRhY3RfbWUuanMnO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xufSk7XG4iLCIvKiFcbiAgKiBCb290c3RyYXAgdjQuMy4xIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICAqIENvcHlyaWdodCAyMDExLTIwMTkgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdqcXVlcnknKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ2pxdWVyeSddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuYm9vdHN0cmFwID0ge30sIGdsb2JhbC5qUXVlcnkpKTtcbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsICQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICQgPSAkICYmICQuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/ICRbJ2RlZmF1bHQnXSA6ICQ7XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjQuMy4xKTogdXRpbC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnO1xuICB2YXIgTUFYX1VJRCA9IDEwMDAwMDA7XG4gIHZhciBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDA7IC8vIFNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcblxuICBmdW5jdGlvbiB0b1R5cGUob2JqKSB7XG4gICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJpbmRUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICAgIGRlbGVnYXRlVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgICBoYW5kbGU6IGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMpKSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmaW5lZFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kRW11bGF0b3IoZHVyYXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICQodGhpcykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKF90aGlzKTtcbiAgICAgIH1cbiAgICB9LCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZEVtdWxhdG9yO1xuICAgICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKTtcbiAgfVxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogUHVibGljIFV0aWwgQXBpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgdmFyIFV0aWwgPSB7XG4gICAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuICAgIGdldFVJRDogZnVuY3Rpb24gZ2V0VUlEKHByZWZpeCkge1xuICAgICAgZG8ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpOyAvLyBcIn5+XCIgYWN0cyBsaWtlIGEgZmFzdGVyIE1hdGguZmxvb3IoKSBoZXJlXG4gICAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKTtcblxuICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9LFxuICAgIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQ6IGZ1bmN0aW9uIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgdmFyIHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgICAgICB2YXIgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiAnJztcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQ6IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcblxuXG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgIHZhciB0cmFuc2l0aW9uRGVsYXkgPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kZWxheScpO1xuICAgICAgdmFyIGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgdmFyIGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpOyAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG5cbiAgICAgIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG5cblxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF07XG4gICAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXTtcbiAgICAgIHJldHVybiAocGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSO1xuICAgIH0sXG4gICAgcmVmbG93OiBmdW5jdGlvbiByZWZsb3coZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH0sXG4gICAgdHJpZ2dlclRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihUUkFOU0lUSU9OX0VORCk7XG4gICAgfSxcbiAgICAvLyBUT0RPOiBSZW1vdmUgaW4gdjVcbiAgICBzdXBwb3J0c1RyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFRSQU5TSVRJT05fRU5EKTtcbiAgICB9LFxuICAgIGlzRWxlbWVudDogZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICAgICAgcmV0dXJuIChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZTtcbiAgICB9LFxuICAgIHR5cGVDaGVja0NvbmZpZzogZnVuY3Rpb24gdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGNvbmZpZ1R5cGVzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZmlnVHlwZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIHZhciBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV07XG4gICAgICAgICAgdmFyIHZhbHVlVHlwZSA9IHZhbHVlICYmIFV0aWwuaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSk7XG5cbiAgICAgICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpICsgXCI6IFwiICsgKFwiT3B0aW9uIFxcXCJcIiArIHByb3BlcnR5ICsgXCJcXFwiIHByb3ZpZGVkIHR5cGUgXFxcIlwiICsgdmFsdWVUeXBlICsgXCJcXFwiIFwiKSArIChcImJ1dCBleHBlY3RlZCB0eXBlIFxcXCJcIiArIGV4cGVjdGVkVHlwZXMgKyBcIlxcXCIuXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGZpbmRTaGFkb3dSb290OiBmdW5jdGlvbiBmaW5kU2hhZG93Um9vdChlbGVtZW50KSB7XG4gICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuXG5cbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcbiAgICAgICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH0gLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcblxuXG4gICAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFV0aWwuZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICB9XG4gIH07XG4gIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FID0gJ2FsZXJ0JztcbiAgdmFyIFZFUlNJT04gPSAnNC4zLjEnO1xuICB2YXIgREFUQV9LRVkgPSAnYnMuYWxlcnQnO1xuICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgdmFyIERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgdmFyIFNlbGVjdG9yID0ge1xuICAgIERJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwiYWxlcnRcIl0nXG4gIH07XG4gIHZhciBFdmVudCA9IHtcbiAgICBDTE9TRTogXCJjbG9zZVwiICsgRVZFTlRfS0VZLFxuICAgIENMT1NFRDogXCJjbG9zZWRcIiArIEVWRU5UX0tFWSxcbiAgICBDTElDS19EQVRBX0FQSTogXCJjbGlja1wiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZXG4gIH07XG4gIHZhciBDbGFzc05hbWUgPSB7XG4gICAgQUxFUlQ6ICdhbGVydCcsXG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIFNIT1c6ICdzaG93J1xuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBBbGVydCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFsZXJ0KGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gQWxlcnQucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLmNsb3NlID0gZnVuY3Rpb24gY2xvc2UoZWxlbWVudCkge1xuICAgICAgdmFyIHJvb3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgcm9vdEVsZW1lbnQgPSB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1c3RvbUV2ZW50ID0gdGhpcy5fdHJpZ2dlckNsb3NlRXZlbnQocm9vdEVsZW1lbnQpO1xuXG4gICAgICBpZiAoY3VzdG9tRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Um9vdEVsZW1lbnQgPSBmdW5jdGlvbiBfZ2V0Um9vdEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgdmFyIHBhcmVudCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHBhcmVudCA9ICQoZWxlbWVudCkuY2xvc2VzdChcIi5cIiArIENsYXNzTmFtZS5BTEVSVClbMF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fdHJpZ2dlckNsb3NlRXZlbnQgPSBmdW5jdGlvbiBfdHJpZ2dlckNsb3NlRXZlbnQoZWxlbWVudCkge1xuICAgICAgdmFyIGNsb3NlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNMT1NFKTtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihjbG9zZUV2ZW50KTtcbiAgICAgIHJldHVybiBjbG9zZUV2ZW50O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3JlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiBfcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKTtcblxuICAgICAgaWYgKCEkKGVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgJChlbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudCwgZXZlbnQpO1xuICAgICAgfSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9kZXN0cm95RWxlbWVudCA9IGZ1bmN0aW9uIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpLmRldGFjaCgpLnRyaWdnZXIoRXZlbnQuQ0xPU0VEKS5yZW1vdmUoKTtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBBbGVydCh0aGlzKTtcbiAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10odGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBBbGVydC5faGFuZGxlRGlzbWlzcyA9IGZ1bmN0aW9uIF9oYW5kbGVEaXNtaXNzKGFsZXJ0SW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcyk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoQWxlcnQsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBbGVydDtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5ESVNNSVNTLCBBbGVydC5faGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSkpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBbGVydDtcblxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkMSA9ICdidXR0b24nO1xuICB2YXIgVkVSU0lPTiQxID0gJzQuMy4xJztcbiAgdmFyIERBVEFfS0VZJDEgPSAnYnMuYnV0dG9uJztcbiAgdmFyIEVWRU5UX0tFWSQxID0gXCIuXCIgKyBEQVRBX0tFWSQxO1xuICB2YXIgREFUQV9BUElfS0VZJDEgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQxID0gJC5mbltOQU1FJDFdO1xuICB2YXIgQ2xhc3NOYW1lJDEgPSB7XG4gICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICBCVVRUT046ICdidG4nLFxuICAgIEZPQ1VTOiAnZm9jdXMnXG4gIH07XG4gIHZhciBTZWxlY3RvciQxID0ge1xuICAgIERBVEFfVE9HR0xFX0NBUlJPVDogJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLFxuICAgIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScsXG4gICAgSU5QVVQ6ICdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pJyxcbiAgICBBQ1RJVkU6ICcuYWN0aXZlJyxcbiAgICBCVVRUT046ICcuYnRuJ1xuICB9O1xuICB2YXIgRXZlbnQkMSA9IHtcbiAgICBDTElDS19EQVRBX0FQSTogXCJjbGlja1wiICsgRVZFTlRfS0VZJDEgKyBEQVRBX0FQSV9LRVkkMSxcbiAgICBGT0NVU19CTFVSX0RBVEFfQVBJOiBcImZvY3VzXCIgKyBFVkVOVF9LRVkkMSArIERBVEFfQVBJX0tFWSQxICsgXCIgXCIgKyAoXCJibHVyXCIgKyBFVkVOVF9LRVkkMSArIERBVEFfQVBJX0tFWSQxKVxuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBCdXR0b24gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCdXR0b24oZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBCdXR0b24ucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIHZhciB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSB0cnVlO1xuICAgICAgdmFyIGFkZEFyaWFQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIHZhciByb290RWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChTZWxlY3RvciQxLkRBVEFfVE9HR0xFKVswXTtcblxuICAgICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICAgIHZhciBpbnB1dCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQxLklOUFVUKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgaWYgKGlucHV0LmNoZWNrZWQgJiYgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lJDEuQUNUSVZFKSkge1xuICAgICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gcm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQxLkFDVElWRSk7XG5cbiAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQxLkFDVElWRSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHJvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCBpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykgfHwgcm9vdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUkMS5BQ1RJVkUpO1xuICAgICAgICAgICAgJChpbnB1dCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICBhZGRBcmlhUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGRBcmlhUHJlc3NlZCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZSQxLkFDVElWRSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDEuQUNUSVZFKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJDEpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBCdXR0b24uX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkkMSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBCdXR0b24odGhpcyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZJDEsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhCdXR0b24sIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDE7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJ1dHRvbjtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50JDEuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yJDEuREFUQV9UT0dHTEVfQ0FSUk9ULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBidXR0b24gPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAoISQoYnV0dG9uKS5oYXNDbGFzcyhDbGFzc05hbWUkMS5CVVRUT04pKSB7XG4gICAgICBidXR0b24gPSAkKGJ1dHRvbikuY2xvc2VzdChTZWxlY3RvciQxLkJVVFRPTik7XG4gICAgfVxuXG4gICAgQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGJ1dHRvbiksICd0b2dnbGUnKTtcbiAgfSkub24oRXZlbnQkMS5GT0NVU19CTFVSX0RBVEFfQVBJLCBTZWxlY3RvciQxLkRBVEFfVE9HR0xFX0NBUlJPVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGJ1dHRvbiA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNlbGVjdG9yJDEuQlVUVE9OKVswXTtcbiAgICAkKGJ1dHRvbikudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDEuRk9DVVMsIC9eZm9jdXMoaW4pPyQvLnRlc3QoZXZlbnQudHlwZSkpO1xuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRSQxXSA9IEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUUkMV0uQ29uc3RydWN0b3IgPSBCdXR0b247XG5cbiAgJC5mbltOQU1FJDFdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FJDFdID0gSlFVRVJZX05PX0NPTkZMSUNUJDE7XG4gICAgcmV0dXJuIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQyID0gJ2Nhcm91c2VsJztcbiAgdmFyIFZFUlNJT04kMiA9ICc0LjMuMSc7XG4gIHZhciBEQVRBX0tFWSQyID0gJ2JzLmNhcm91c2VsJztcbiAgdmFyIEVWRU5UX0tFWSQyID0gXCIuXCIgKyBEQVRBX0tFWSQyO1xuICB2YXIgREFUQV9BUElfS0VZJDIgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQyID0gJC5mbltOQU1FJDJdO1xuICB2YXIgQVJST1dfTEVGVF9LRVlDT0RFID0gMzc7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGxlZnQgYXJyb3cga2V5XG5cbiAgdmFyIEFSUk9XX1JJR0hUX0tFWUNPREUgPSAzOTsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgcmlnaHQgYXJyb3cga2V5XG5cbiAgdmFyIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDA7IC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG4gIHZhciBTV0lQRV9USFJFU0hPTEQgPSA0MDtcbiAgdmFyIERlZmF1bHQgPSB7XG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgc2xpZGU6IGZhbHNlLFxuICAgIHBhdXNlOiAnaG92ZXInLFxuICAgIHdyYXA6IHRydWUsXG4gICAgdG91Y2g6IHRydWVcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlID0ge1xuICAgIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBzbGlkZTogJyhib29sZWFufHN0cmluZyknLFxuICAgIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgd3JhcDogJ2Jvb2xlYW4nLFxuICAgIHRvdWNoOiAnYm9vbGVhbidcbiAgfTtcbiAgdmFyIERpcmVjdGlvbiA9IHtcbiAgICBORVhUOiAnbmV4dCcsXG4gICAgUFJFVjogJ3ByZXYnLFxuICAgIExFRlQ6ICdsZWZ0JyxcbiAgICBSSUdIVDogJ3JpZ2h0J1xuICB9O1xuICB2YXIgRXZlbnQkMiA9IHtcbiAgICBTTElERTogXCJzbGlkZVwiICsgRVZFTlRfS0VZJDIsXG4gICAgU0xJRDogXCJzbGlkXCIgKyBFVkVOVF9LRVkkMixcbiAgICBLRVlET1dOOiBcImtleWRvd25cIiArIEVWRU5UX0tFWSQyLFxuICAgIE1PVVNFRU5URVI6IFwibW91c2VlbnRlclwiICsgRVZFTlRfS0VZJDIsXG4gICAgTU9VU0VMRUFWRTogXCJtb3VzZWxlYXZlXCIgKyBFVkVOVF9LRVkkMixcbiAgICBUT1VDSFNUQVJUOiBcInRvdWNoc3RhcnRcIiArIEVWRU5UX0tFWSQyLFxuICAgIFRPVUNITU9WRTogXCJ0b3VjaG1vdmVcIiArIEVWRU5UX0tFWSQyLFxuICAgIFRPVUNIRU5EOiBcInRvdWNoZW5kXCIgKyBFVkVOVF9LRVkkMixcbiAgICBQT0lOVEVSRE9XTjogXCJwb2ludGVyZG93blwiICsgRVZFTlRfS0VZJDIsXG4gICAgUE9JTlRFUlVQOiBcInBvaW50ZXJ1cFwiICsgRVZFTlRfS0VZJDIsXG4gICAgRFJBR19TVEFSVDogXCJkcmFnc3RhcnRcIiArIEVWRU5UX0tFWSQyLFxuICAgIExPQURfREFUQV9BUEk6IFwibG9hZFwiICsgRVZFTlRfS0VZJDIgKyBEQVRBX0FQSV9LRVkkMixcbiAgICBDTElDS19EQVRBX0FQSTogXCJjbGlja1wiICsgRVZFTlRfS0VZJDIgKyBEQVRBX0FQSV9LRVkkMlxuICB9O1xuICB2YXIgQ2xhc3NOYW1lJDIgPSB7XG4gICAgQ0FST1VTRUw6ICdjYXJvdXNlbCcsXG4gICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICBTTElERTogJ3NsaWRlJyxcbiAgICBSSUdIVDogJ2Nhcm91c2VsLWl0ZW0tcmlnaHQnLFxuICAgIExFRlQ6ICdjYXJvdXNlbC1pdGVtLWxlZnQnLFxuICAgIE5FWFQ6ICdjYXJvdXNlbC1pdGVtLW5leHQnLFxuICAgIFBSRVY6ICdjYXJvdXNlbC1pdGVtLXByZXYnLFxuICAgIElURU06ICdjYXJvdXNlbC1pdGVtJyxcbiAgICBQT0lOVEVSX0VWRU5UOiAncG9pbnRlci1ldmVudCdcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDIgPSB7XG4gICAgQUNUSVZFOiAnLmFjdGl2ZScsXG4gICAgQUNUSVZFX0lURU06ICcuYWN0aXZlLmNhcm91c2VsLWl0ZW0nLFxuICAgIElURU06ICcuY2Fyb3VzZWwtaXRlbScsXG4gICAgSVRFTV9JTUc6ICcuY2Fyb3VzZWwtaXRlbSBpbWcnLFxuICAgIE5FWFRfUFJFVjogJy5jYXJvdXNlbC1pdGVtLW5leHQsIC5jYXJvdXNlbC1pdGVtLXByZXYnLFxuICAgIElORElDQVRPUlM6ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycycsXG4gICAgREFUQV9TTElERTogJ1tkYXRhLXNsaWRlXSwgW2RhdGEtc2xpZGUtdG9dJyxcbiAgICBEQVRBX1JJREU6ICdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nXG4gIH07XG4gIHZhciBQb2ludGVyVHlwZSA9IHtcbiAgICBUT1VDSDogJ3RvdWNoJyxcbiAgICBQRU46ICdwZW4nXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG5cbiAgdmFyIENhcm91c2VsID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2Fyb3VzZWwoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IG51bGw7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMudG91Y2hTdGFydFggPSAwO1xuICAgICAgdGhpcy50b3VjaERlbHRhWCA9IDA7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkMi5JTkRJQ0FUT1JTKTtcbiAgICAgIHRoaXMuX3RvdWNoU3VwcG9ydGVkID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDA7XG4gICAgICB0aGlzLl9wb2ludGVyRXZlbnQgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQgfHwgd2luZG93Lk1TUG9pbnRlckV2ZW50KTtcblxuICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IENhcm91c2VsLnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by5uZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIHRoaXMuX3NsaWRlKERpcmVjdGlvbi5ORVhUKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLm5leHRXaGVuVmlzaWJsZSA9IGZ1bmN0aW9uIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmICQodGhpcy5fZWxlbWVudCkuaXMoJzp2aXNpYmxlJykgJiYgJCh0aGlzLl9lbGVtZW50KS5jc3MoJ3Zpc2liaWxpdHknKSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5wcmV2ID0gZnVuY3Rpb24gcHJldigpIHtcbiAgICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIHRoaXMuX3NsaWRlKERpcmVjdGlvbi5QUkVWKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoZXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgdGhpcy5faXNQYXVzZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yJDIuTkVYVF9QUkVWKSkge1xuICAgICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICB0aGlzLmN5Y2xlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmN5Y2xlID0gZnVuY3Rpb24gY3ljbGUoZXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuaW50ZXJ2YWwgJiYgIXRoaXMuX2lzUGF1c2VkKSB7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8udG8gPSBmdW5jdGlvbiB0byhpbmRleCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQyLkFDVElWRV9JVEVNKTtcblxuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2FjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRXZlbnQkMi5TTElELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnRvKGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGlyZWN0aW9uID0gaW5kZXggPiBhY3RpdmVJbmRleCA/IERpcmVjdGlvbi5ORVhUIDogRGlyZWN0aW9uLlBSRVY7XG5cbiAgICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiwgdGhpcy5faXRlbXNbaW5kZXhdKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZJDIpO1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJDIpO1xuICAgICAgdGhpcy5faXRlbXMgPSBudWxsO1xuICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSBudWxsO1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIERlZmF1bHQsIGNvbmZpZyk7XG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FJDIsIGNvbmZpZywgRGVmYXVsdFR5cGUpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9oYW5kbGVTd2lwZSA9IGZ1bmN0aW9uIF9oYW5kbGVTd2lwZSgpIHtcbiAgICAgIHZhciBhYnNEZWx0YXggPSBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGFYKTtcblxuICAgICAgaWYgKGFic0RlbHRheCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGlyZWN0aW9uID0gYWJzRGVsdGF4IC8gdGhpcy50b3VjaERlbHRhWDsgLy8gc3dpcGUgbGVmdFxuXG4gICAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH0gLy8gc3dpcGUgcmlnaHRcblxuXG4gICAgICBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQkMi5LRVlET1dOLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLl9rZXlkb3duKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQyLk1PVVNFRU5URVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIucGF1c2UoZXZlbnQpO1xuICAgICAgICB9KS5vbihFdmVudCQyLk1PVVNFTEVBVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuY3ljbGUoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCkge1xuICAgICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fYWRkVG91Y2hFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5fdG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnQgPSBmdW5jdGlvbiBzdGFydChldmVudCkge1xuICAgICAgICBpZiAoX3RoaXMzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICAgIF90aGlzMy50b3VjaFN0YXJ0WCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2xpZW50WDtcbiAgICAgICAgfSBlbHNlIGlmICghX3RoaXMzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgICAgICBfdGhpczMudG91Y2hTdGFydFggPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG1vdmUgPSBmdW5jdGlvbiBtb3ZlKGV2ZW50KSB7XG4gICAgICAgIC8vIGVuc3VyZSBzd2lwaW5nIHdpdGggb25lIHRvdWNoIGFuZCBub3QgcGluY2hpbmdcbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIF90aGlzMy50b3VjaERlbHRhWCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMzLnRvdWNoRGVsdGFYID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLmNsaWVudFggLSBfdGhpczMudG91Y2hTdGFydFg7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBlbmQgPSBmdW5jdGlvbiBlbmQoZXZlbnQpIHtcbiAgICAgICAgaWYgKF90aGlzMy5fcG9pbnRlckV2ZW50ICYmIFBvaW50ZXJUeXBlW2V2ZW50Lm9yaWdpbmFsRXZlbnQucG9pbnRlclR5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgICBfdGhpczMudG91Y2hEZWx0YVggPSBldmVudC5vcmlnaW5hbEV2ZW50LmNsaWVudFggLSBfdGhpczMudG91Y2hTdGFydFg7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczMuX2hhbmRsZVN3aXBlKCk7XG5cbiAgICAgICAgaWYgKF90aGlzMy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcbiAgICAgICAgICBfdGhpczMucGF1c2UoKTtcblxuICAgICAgICAgIGlmIChfdGhpczMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMzLnRvdWNoVGltZW91dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLmN5Y2xlKGV2ZW50KTtcbiAgICAgICAgICB9LCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgX3RoaXMzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQyLklURU1fSU1HKSkub24oRXZlbnQkMi5EUkFHX1NUQVJULCBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQyLlBPSU5URVJET1dOLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gc3RhcnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQyLlBPSU5URVJVUCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGVuZChldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUkMi5QT0lOVEVSX0VWRU5UKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQkMi5UT1VDSFNUQVJULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gc3RhcnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQyLlRPVUNITU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG1vdmUoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQyLlRPVUNIRU5ELCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gZW5kKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fa2V5ZG93biA9IGZ1bmN0aW9uIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlDT0RFOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlDT0RFOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRJdGVtSW5kZXggPSBmdW5jdGlvbiBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUgPyBbXS5zbGljZS5jYWxsKGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDIuSVRFTSkpIDogW107XG4gICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihlbGVtZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRJdGVtQnlEaXJlY3Rpb24gPSBmdW5jdGlvbiBfZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudCkge1xuICAgICAgdmFyIGlzTmV4dERpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFQ7XG4gICAgICB2YXIgaXNQcmV2RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFVjtcblxuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICB2YXIgbGFzdEl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgaXNHb2luZ1RvV3JhcCA9IGlzUHJldkRpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gMCB8fCBpc05leHREaXJlY3Rpb24gJiYgYWN0aXZlSW5kZXggPT09IGxhc3RJdGVtSW5kZXg7XG5cbiAgICAgIGlmIChpc0dvaW5nVG9XcmFwICYmICF0aGlzLl9jb25maWcud3JhcCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIGRlbHRhID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFViA/IC0xIDogMTtcbiAgICAgIHZhciBpdGVtSW5kZXggPSAoYWN0aXZlSW5kZXggKyBkZWx0YSkgJSB0aGlzLl9pdGVtcy5sZW5ndGg7XG4gICAgICByZXR1cm4gaXRlbUluZGV4ID09PSAtMSA/IHRoaXMuX2l0ZW1zW3RoaXMuX2l0ZW1zLmxlbmd0aCAtIDFdIDogdGhpcy5faXRlbXNbaXRlbUluZGV4XTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl90cmlnZ2VyU2xpZGVFdmVudCA9IGZ1bmN0aW9uIF90cmlnZ2VyU2xpZGVFdmVudChyZWxhdGVkVGFyZ2V0LCBldmVudERpcmVjdGlvbk5hbWUpIHtcbiAgICAgIHZhciB0YXJnZXRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChyZWxhdGVkVGFyZ2V0KTtcblxuICAgICAgdmFyIGZyb21JbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkMi5BQ1RJVkVfSVRFTSkpO1xuXG4gICAgICB2YXIgc2xpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQkMi5TTElERSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkVGFyZ2V0LFxuICAgICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgICAgZnJvbTogZnJvbUluZGV4LFxuICAgICAgICB0bzogdGFyZ2V0SW5kZXhcbiAgICAgIH0pO1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRlRXZlbnQpO1xuICAgICAgcmV0dXJuIHNsaWRlRXZlbnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCA9IGZ1bmN0aW9uIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgICB2YXIgaW5kaWNhdG9ycyA9IFtdLnNsaWNlLmNhbGwodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQyLkFDVElWRSkpO1xuICAgICAgICAkKGluZGljYXRvcnMpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQyLkFDVElWRSk7XG5cbiAgICAgICAgdmFyIG5leHRJbmRpY2F0b3IgPSB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudC5jaGlsZHJlblt0aGlzLl9nZXRJdGVtSW5kZXgoZWxlbWVudCldO1xuXG4gICAgICAgIGlmIChuZXh0SW5kaWNhdG9yKSB7XG4gICAgICAgICAgJChuZXh0SW5kaWNhdG9yKS5hZGRDbGFzcyhDbGFzc05hbWUkMi5BQ1RJVkUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fc2xpZGUgPSBmdW5jdGlvbiBfc2xpZGUoZGlyZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkMi5BQ1RJVkVfSVRFTSk7XG5cbiAgICAgIHZhciBhY3RpdmVFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgIHZhciBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgYWN0aXZlRWxlbWVudCAmJiB0aGlzLl9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KTtcblxuICAgICAgdmFyIG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpO1xuXG4gICAgICB2YXIgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbCk7XG4gICAgICB2YXIgZGlyZWN0aW9uYWxDbGFzc05hbWU7XG4gICAgICB2YXIgb3JkZXJDbGFzc05hbWU7XG4gICAgICB2YXIgZXZlbnREaXJlY3Rpb25OYW1lO1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCkge1xuICAgICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENsYXNzTmFtZSQyLkxFRlQ7XG4gICAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ2xhc3NOYW1lJDIuTkVYVDtcbiAgICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRGlyZWN0aW9uLkxFRlQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENsYXNzTmFtZSQyLlJJR0hUO1xuICAgICAgICBvcmRlckNsYXNzTmFtZSA9IENsYXNzTmFtZSQyLlBSRVY7XG4gICAgICAgIGV2ZW50RGlyZWN0aW9uTmFtZSA9IERpcmVjdGlvbi5SSUdIVDtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRFbGVtZW50ICYmICQobmV4dEVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQyLkFDVElWRSkpIHtcbiAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNsaWRlRXZlbnQgPSB0aGlzLl90cmlnZ2VyU2xpZGVFdmVudChuZXh0RWxlbWVudCwgZXZlbnREaXJlY3Rpb25OYW1lKTtcblxuICAgICAgaWYgKHNsaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG5cbiAgICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KTtcblxuICAgICAgdmFyIHNsaWRFdmVudCA9ICQuRXZlbnQoRXZlbnQkMi5TTElELCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgICAgZnJvbTogYWN0aXZlRWxlbWVudEluZGV4LFxuICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgfSk7XG5cbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQyLlNMSURFKSkge1xuICAgICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhvcmRlckNsYXNzTmFtZSk7XG4gICAgICAgIFV0aWwucmVmbG93KG5leHRFbGVtZW50KTtcbiAgICAgICAgJChhY3RpdmVFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcbiAgICAgICAgdmFyIG5leHRFbGVtZW50SW50ZXJ2YWwgPSBwYXJzZUludChuZXh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZXJ2YWwnKSwgMTApO1xuXG4gICAgICAgIGlmIChuZXh0RWxlbWVudEludGVydmFsKSB7XG4gICAgICAgICAgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsO1xuICAgICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IG5leHRFbGVtZW50SW50ZXJ2YWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmVFbGVtZW50KTtcbiAgICAgICAgJChhY3RpdmVFbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQobmV4dEVsZW1lbnQpLnJlbW92ZUNsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lICsgXCIgXCIgKyBvcmRlckNsYXNzTmFtZSkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDIuQUNUSVZFKTtcbiAgICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQyLkFDVElWRSArIFwiIFwiICsgb3JkZXJDbGFzc05hbWUgKyBcIiBcIiArIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcbiAgICAgICAgICBfdGhpczQuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICQoX3RoaXM0Ll9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQyLkFDVElWRSk7XG4gICAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZSQyLkFDVElWRSk7XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgICB0aGlzLmN5Y2xlKCk7XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSQyKTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBfY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgX2NvbmZpZywgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGU7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVkkMiwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBkYXRhLnRvKGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbYWN0aW9uXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgYWN0aW9uICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbYWN0aW9uXSgpO1xuICAgICAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwgJiYgX2NvbmZpZy5yaWRlKSB7XG4gICAgICAgICAgZGF0YS5wYXVzZSgpO1xuICAgICAgICAgIGRhdGEuY3ljbGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIENhcm91c2VsLl9kYXRhQXBpQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gX2RhdGFBcGlDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcblxuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXTtcblxuICAgICAgaWYgKCF0YXJnZXQgfHwgISQodGFyZ2V0KS5oYXNDbGFzcyhDbGFzc05hbWUkMi5DQVJPVVNFTCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgJCh0YXJnZXQpLmRhdGEoKSwgJCh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICB2YXIgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlLXRvJyk7XG5cbiAgICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAgIGNvbmZpZy5pbnRlcnZhbCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcpO1xuXG4gICAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgICAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSQyKS50byhzbGlkZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKENhcm91c2VsLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhcm91c2VsO1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJChkb2N1bWVudCkub24oRXZlbnQkMi5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IkMi5EQVRBX1NMSURFLCBDYXJvdXNlbC5fZGF0YUFwaUNsaWNrSGFuZGxlcik7XG4gICQod2luZG93KS5vbihFdmVudCQyLkxPQURfREFUQV9BUEksIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2Fyb3VzZWxzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDIuREFUQV9SSURFKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2Fyb3VzZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgJGNhcm91c2VsID0gJChjYXJvdXNlbHNbaV0pO1xuXG4gICAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJGNhcm91c2VsLCAkY2Fyb3VzZWwuZGF0YSgpKTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FJDJdID0gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FJDJdLkNvbnN0cnVjdG9yID0gQ2Fyb3VzZWw7XG5cbiAgJC5mbltOQU1FJDJdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FJDJdID0gSlFVRVJZX05PX0NPTkZMSUNUJDI7XG4gICAgcmV0dXJuIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FJDMgPSAnY29sbGFwc2UnO1xuICB2YXIgVkVSU0lPTiQzID0gJzQuMy4xJztcbiAgdmFyIERBVEFfS0VZJDMgPSAnYnMuY29sbGFwc2UnO1xuICB2YXIgRVZFTlRfS0VZJDMgPSBcIi5cIiArIERBVEFfS0VZJDM7XG4gIHZhciBEQVRBX0FQSV9LRVkkMyA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDMgPSAkLmZuW05BTUUkM107XG4gIHZhciBEZWZhdWx0JDEgPSB7XG4gICAgdG9nZ2xlOiB0cnVlLFxuICAgIHBhcmVudDogJydcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlJDEgPSB7XG4gICAgdG9nZ2xlOiAnYm9vbGVhbicsXG4gICAgcGFyZW50OiAnKHN0cmluZ3xlbGVtZW50KSdcbiAgfTtcbiAgdmFyIEV2ZW50JDMgPSB7XG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkMyxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZJDMsXG4gICAgSElERTogXCJoaWRlXCIgKyBFVkVOVF9LRVkkMyxcbiAgICBISURERU46IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkMyxcbiAgICBDTElDS19EQVRBX0FQSTogXCJjbGlja1wiICsgRVZFTlRfS0VZJDMgKyBEQVRBX0FQSV9LRVkkM1xuICB9O1xuICB2YXIgQ2xhc3NOYW1lJDMgPSB7XG4gICAgU0hPVzogJ3Nob3cnLFxuICAgIENPTExBUFNFOiAnY29sbGFwc2UnLFxuICAgIENPTExBUFNJTkc6ICdjb2xsYXBzaW5nJyxcbiAgICBDT0xMQVBTRUQ6ICdjb2xsYXBzZWQnXG4gIH07XG4gIHZhciBEaW1lbnNpb24gPSB7XG4gICAgV0lEVEg6ICd3aWR0aCcsXG4gICAgSEVJR0hUOiAnaGVpZ2h0J1xuICB9O1xuICB2YXIgU2VsZWN0b3IkMyA9IHtcbiAgICBBQ1RJVkVTOiAnLnNob3csIC5jb2xsYXBzaW5nJyxcbiAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJ1xuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBDb2xsYXBzZSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbGxhcHNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJdW2hyZWY9XFxcIiNcIiArIGVsZW1lbnQuaWQgKyBcIlxcXCJdLFwiICsgKFwiW2RhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJdW2RhdGEtdGFyZ2V0PVxcXCIjXCIgKyBlbGVtZW50LmlkICsgXCJcXFwiXVwiKSkpO1xuICAgICAgdmFyIHRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkMy5EQVRBX1RPR0dMRSkpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdG9nZ2xlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgZWxlbSA9IHRvZ2dsZUxpc3RbaV07XG4gICAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKTtcbiAgICAgICAgdmFyIGZpbHRlckVsZW1lbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5maWx0ZXIoZnVuY3Rpb24gKGZvdW5kRWxlbSkge1xuICAgICAgICAgIHJldHVybiBmb3VuZEVsZW0gPT09IGVsZW1lbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCAmJiBmaWx0ZXJFbGVtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yO1xuXG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbDtcblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl9lbGVtZW50LCB0aGlzLl90cmlnZ2VyQXJyYXkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gQ29sbGFwc2UucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQzLlNIT1cpKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkMy5TSE9XKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBhY3RpdmVzO1xuICAgICAgdmFyIGFjdGl2ZXNEYXRhO1xuXG4gICAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgIGFjdGl2ZXMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDMuQUNUSVZFUykpLmZpbHRlcihmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMuX2NvbmZpZy5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50JykgPT09IF90aGlzLl9jb25maWcucGFyZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUkMy5DT0xMQVBTRSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGFjdGl2ZXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICAgIGFjdGl2ZXNEYXRhID0gJChhY3RpdmVzKS5ub3QodGhpcy5fc2VsZWN0b3IpLmRhdGEoREFUQV9LRVkkMyk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50JDMuU0hPVyk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudCk7XG5cbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKSwgJ2hpZGUnKTtcblxuICAgICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZJDMsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTRSkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0lORyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwO1xuXG4gICAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMuX3RyaWdnZXJBcnJheSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0VEKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICQoX3RoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQzLkNPTExBUFNJTkcpLmFkZENsYXNzKENsYXNzTmFtZSQzLkNPTExBUFNFKS5hZGRDbGFzcyhDbGFzc05hbWUkMy5TSE9XKTtcbiAgICAgICAgX3RoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xuXG4gICAgICAgIF90aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpO1xuXG4gICAgICAgICQoX3RoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQkMy5TSE9XTik7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKTtcbiAgICAgIHZhciBzY3JvbGxTaXplID0gXCJzY3JvbGxcIiArIGNhcGl0YWxpemVkRGltZW5zaW9uO1xuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IHRoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV0gKyBcInB4XCI7XG4gICAgfTtcblxuICAgIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICEkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQzLlNIT1cpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50JDMuSElERSk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudCk7XG5cbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl0gKyBcInB4XCI7XG4gICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0lORykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0UpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQzLlNIT1cpO1xuICAgICAgdmFyIHRyaWdnZXJBcnJheUxlbmd0aCA9IHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGg7XG5cbiAgICAgIGlmICh0cmlnZ2VyQXJyYXlMZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJpZ2dlckFycmF5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXTtcbiAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodHJpZ2dlcik7XG5cbiAgICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciAkZWxlbSA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpO1xuXG4gICAgICAgICAgICBpZiAoISRlbGVtLmhhc0NsYXNzKENsYXNzTmFtZSQzLlNIT1cpKSB7XG4gICAgICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0VEKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSk7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBfdGhpczIuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSk7XG5cbiAgICAgICAgJChfdGhpczIuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQzLkNPTExBUFNJTkcpLmFkZENsYXNzKENsYXNzTmFtZSQzLkNPTExBUFNFKS50cmlnZ2VyKEV2ZW50JDMuSElEREVOKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNldFRyYW5zaXRpb25pbmcgPSBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uaW5nKGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkkMyk7XG4gICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGw7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgRGVmYXVsdCQxLCBjb25maWcpO1xuICAgICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSk7IC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG5cbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkMywgY29uZmlnLCBEZWZhdWx0VHlwZSQxKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gX2dldERpbWVuc2lvbigpIHtcbiAgICAgIHZhciBoYXNXaWR0aCA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoRGltZW5zaW9uLldJRFRIKTtcbiAgICAgIHJldHVybiBoYXNXaWR0aCA/IERpbWVuc2lvbi5XSURUSCA6IERpbWVuc2lvbi5IRUlHSFQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0UGFyZW50ID0gZnVuY3Rpb24gX2dldFBhcmVudCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgcGFyZW50O1xuXG4gICAgICBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnBhcmVudCkpIHtcbiAgICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudDsgLy8gSXQncyBhIGpRdWVyeSBvYmplY3RcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5wYXJlbnQuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRbMF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY29uZmlnLnBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWxlY3RvciA9IFwiW2RhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJdW2RhdGEtcGFyZW50PVxcXCJcIiArIHRoaXMuX2NvbmZpZy5wYXJlbnQgKyBcIlxcXCJdXCI7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgICAkKGNoaWxkcmVuKS5lYWNoKGZ1bmN0aW9uIChpLCBlbGVtZW50KSB7XG4gICAgICAgIF90aGlzMy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSwgW2VsZW1lbnRdKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MgPSBmdW5jdGlvbiBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgICAgdmFyIGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDMuU0hPVyk7XG5cbiAgICAgIGlmICh0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICQodHJpZ2dlckFycmF5KS50b2dnbGVDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTRUQsICFpc09wZW4pLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50ID0gZnVuY3Rpb24gX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KTtcbiAgICAgIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbDtcbiAgICB9O1xuXG4gICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkdGhpcy5kYXRhKERBVEFfS0VZJDMpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgRGVmYXVsdCQxLCAkdGhpcy5kYXRhKCksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcblxuICAgICAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgQ29sbGFwc2UodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSQzLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29sbGFwc2UsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdCQxO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb2xsYXBzZTtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50JDMuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yJDMuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyICR0cmlnZ2VyID0gJCh0aGlzKTtcbiAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcyk7XG4gICAgdmFyIHNlbGVjdG9ycyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgICQoc2VsZWN0b3JzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGFyZ2V0ID0gJCh0aGlzKTtcbiAgICAgIHZhciBkYXRhID0gJHRhcmdldC5kYXRhKERBVEFfS0VZJDMpO1xuICAgICAgdmFyIGNvbmZpZyA9IGRhdGEgPyAndG9nZ2xlJyA6ICR0cmlnZ2VyLmRhdGEoKTtcblxuICAgICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCR0YXJnZXQsIGNvbmZpZyk7XG4gICAgfSk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FJDNdID0gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FJDNdLkNvbnN0cnVjdG9yID0gQ29sbGFwc2U7XG5cbiAgJC5mbltOQU1FJDNdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FJDNdID0gSlFVRVJZX05PX0NPTkZMSUNUJDM7XG4gICAgcmV0dXJuIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqIVxuICAgKiBAZmlsZU92ZXJ2aWV3IEtpY2thc3MgbGlicmFyeSB0byBjcmVhdGUgYW5kIHBsYWNlIHBvcHBlcnMgbmVhciB0aGVpciByZWZlcmVuY2UgZWxlbWVudHMuXG4gICAqIEB2ZXJzaW9uIDEuMTQuN1xuICAgKiBAbGljZW5zZVxuICAgKiBDb3B5cmlnaHQgKGMpIDIwMTYgRmVkZXJpY28gWml2b2xvIGFuZCBjb250cmlidXRvcnNcbiAgICpcbiAgICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICAgKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gICAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICAgKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgICpcbiAgICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gICAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gICAqXG4gICAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gICAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICAgKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gICAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gICAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gICAqIFNPRlRXQVJFLlxuICAgKi9cbiAgdmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgdmFyIGxvbmdlclRpbWVvdXRCcm93c2VycyA9IFsnRWRnZScsICdUcmlkZW50JywgJ0ZpcmVmb3gnXTtcbiAgdmFyIHRpbWVvdXREdXJhdGlvbiA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbG9uZ2VyVGltZW91dEJyb3dzZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGlzQnJvd3NlciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YobG9uZ2VyVGltZW91dEJyb3dzZXJzW2ldKSA+PSAwKSB7XG4gICAgICB0aW1lb3V0RHVyYXRpb24gPSAxO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWljcm90YXNrRGVib3VuY2UoZm4pIHtcbiAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjYWxsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5Qcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIGZuKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdGFza0RlYm91bmNlKGZuKSB7XG4gICAgdmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNjaGVkdWxlZCkge1xuICAgICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgICBmbigpO1xuICAgICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgc3VwcG9ydHNNaWNyb1Rhc2tzID0gaXNCcm93c2VyICYmIHdpbmRvdy5Qcm9taXNlO1xuXG4gIC8qKlxuICAqIENyZWF0ZSBhIGRlYm91bmNlZCB2ZXJzaW9uIG9mIGEgbWV0aG9kLCB0aGF0J3MgYXN5bmNocm9ub3VzbHkgZGVmZXJyZWRcbiAgKiBidXQgY2FsbGVkIGluIHRoZSBtaW5pbXVtIHRpbWUgcG9zc2libGUuXG4gICpcbiAgKiBAbWV0aG9kXG4gICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAqIEBhcmd1bWVudCB7RnVuY3Rpb259IGZuXG4gICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAqL1xuICB2YXIgZGVib3VuY2UgPSBzdXBwb3J0c01pY3JvVGFza3MgPyBtaWNyb3Rhc2tEZWJvdW5jZSA6IHRhc2tEZWJvdW5jZTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb25cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7QW55fSBmdW5jdGlvblRvQ2hlY2sgLSB2YXJpYWJsZSB0byBjaGVja1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvOiBpcyBhIGZ1bmN0aW9uP1xuICAgKi9cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcbiAgICB2YXIgZ2V0VHlwZSA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IENTUyBjb21wdXRlZCBwcm9wZXJ0eSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtFZW1lbnR9IGVsZW1lbnRcbiAgICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICAgIHZhciB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgdmFyIGNzcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICAgIHJldHVybiBwcm9wZXJ0eSA/IGNzc1twcm9wZXJ0eV0gOiBjc3M7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGFyZW50Tm9kZSBvciB0aGUgaG9zdCBvZiB0aGUgZWxlbWVudFxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAgICovXG4gIGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlIHx8IGVsZW1lbnQuaG9zdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge0VsZW1lbnR9IHNjcm9sbCBwYXJlbnRcbiAgICovXG4gIGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gICAgLy8gUmV0dXJuIGJvZHksIGBnZXRTY3JvbGxgIHdpbGwgdGFrZSBjYXJlIHRvIGdldCB0aGUgY29ycmVjdCBgc2Nyb2xsVG9wYCBmcm9tIGl0XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICAgIGNhc2UgJ0hUTUwnOlxuICAgICAgY2FzZSAnQk9EWSc6XG4gICAgICAgIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICAgIGNhc2UgJyNkb2N1bWVudCc6XG4gICAgICAgIHJldHVybiBlbGVtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgLy8gRmlyZWZveCB3YW50IHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG5cbiAgICB2YXIgX2dldFN0eWxlQ29tcHV0ZWRQcm9wID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpLFxuICAgICAgICBvdmVyZmxvdyA9IF9nZXRTdHlsZUNvbXB1dGVkUHJvcC5vdmVyZmxvdyxcbiAgICAgICAgb3ZlcmZsb3dYID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93WCxcbiAgICAgICAgb3ZlcmZsb3dZID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93WTtcblxuICAgIGlmICgvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgfVxuXG4gIHZhciBpc0lFMTEgPSBpc0Jyb3dzZXIgJiYgISEod2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSk7XG4gIHZhciBpc0lFMTAgPSBpc0Jyb3dzZXIgJiYgL01TSUUgMTAvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXJcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2ZXJzaW9uIHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBpc0lFXG4gICAqL1xuICBmdW5jdGlvbiBpc0lFKHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcbiAgICAgIHJldHVybiBpc0lFMTE7XG4gICAgfVxuICAgIGlmICh2ZXJzaW9uID09PSAxMCkge1xuICAgICAgcmV0dXJuIGlzSUUxMDtcbiAgICB9XG4gICAgcmV0dXJuIGlzSUUxMSB8fCBpc0lFMTA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0IHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtFbGVtZW50fSBvZmZzZXQgcGFyZW50XG4gICAqL1xuICBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICB2YXIgbm9PZmZzZXRQYXJlbnQgPSBpc0lFKDEwKSA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuXG4gICAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgbnVsbDtcbiAgICAvLyBTa2lwIGhpZGRlbiBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGFuIG9mZnNldFBhcmVudFxuICAgIHdoaWxlIChvZmZzZXRQYXJlbnQgPT09IG5vT2Zmc2V0UGFyZW50ICYmIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRQYXJlbnQ7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVOYW1lID0gb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudC5ub2RlTmFtZTtcblxuICAgIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gLm9mZnNldFBhcmVudCB3aWxsIHJldHVybiB0aGUgY2xvc2VzdCBUSCwgVEQgb3IgVEFCTEUgaW4gY2FzZVxuICAgIC8vIG5vIG9mZnNldFBhcmVudCBpcyBwcmVzZW50LCBJIGhhdGUgdGhpcyBqb2IuLi5cbiAgICBpZiAoWydUSCcsICdURCcsICdUQUJMRSddLmluZGV4T2Yob2Zmc2V0UGFyZW50Lm5vZGVOYW1lKSAhPT0gLTEgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFBhcmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT2Zmc2V0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXG4gICAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVOYW1lID09PSAnSFRNTCcgfHwgZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpID09PSBlbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSByb290IG5vZGUgKGRvY3VtZW50LCBzaGFkb3dET00gcm9vdCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7RWxlbWVudH0gbm9kZVxuICAgKiBAcmV0dXJucyB7RWxlbWVudH0gcm9vdCBub2RlXG4gICAqL1xuICBmdW5jdGlvbiBnZXRSb290KG5vZGUpIHtcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZ2V0Um9vdChub2RlLnBhcmVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBvZmZzZXQgcGFyZW50IGNvbW1vbiB0byB0aGUgdHdvIHByb3ZpZGVkIG5vZGVzXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQxXG4gICAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDJcbiAgICogQHJldHVybnMge0VsZW1lbnR9IGNvbW1vbiBvZmZzZXQgcGFyZW50XG4gICAqL1xuICBmdW5jdGlvbiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBlbGVtZW50Mikge1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICAgIGlmICghZWxlbWVudDEgfHwgIWVsZW1lbnQxLm5vZGVUeXBlIHx8ICFlbGVtZW50MiB8fCAhZWxlbWVudDIubm9kZVR5cGUpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gSGVyZSB3ZSBtYWtlIHN1cmUgdG8gZ2l2ZSBhcyBcInN0YXJ0XCIgdGhlIGVsZW1lbnQgdGhhdCBjb21lcyBmaXJzdCBpbiB0aGUgRE9NXG4gICAgdmFyIG9yZGVyID0gZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc7XG4gICAgdmFyIHN0YXJ0ID0gb3JkZXIgPyBlbGVtZW50MSA6IGVsZW1lbnQyO1xuICAgIHZhciBlbmQgPSBvcmRlciA/IGVsZW1lbnQyIDogZWxlbWVudDE7XG5cbiAgICAvLyBHZXQgY29tbW9uIGFuY2VzdG9yIGNvbnRhaW5lclxuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xuICAgIHJhbmdlLnNldEVuZChlbmQsIDApO1xuICAgIHZhciBjb21tb25BbmNlc3RvckNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuXG4gICAgLy8gQm90aCBub2RlcyBhcmUgaW5zaWRlICNkb2N1bWVudFxuXG4gICAgaWYgKGVsZW1lbnQxICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciAmJiBlbGVtZW50MiAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgfHwgc3RhcnQuY29udGFpbnMoZW5kKSkge1xuICAgICAgaWYgKGlzT2Zmc2V0Q29udGFpbmVyKGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSkge1xuICAgICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQoY29tbW9uQW5jZXN0b3JDb250YWluZXIpO1xuICAgIH1cblxuICAgIC8vIG9uZSBvZiB0aGUgbm9kZXMgaXMgaW5zaWRlIHNoYWRvd0RPTSwgZmluZCB3aGljaCBvbmVcbiAgICB2YXIgZWxlbWVudDFyb290ID0gZ2V0Um9vdChlbGVtZW50MSk7XG4gICAgaWYgKGVsZW1lbnQxcm9vdC5ob3N0KSB7XG4gICAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MXJvb3QuaG9zdCwgZWxlbWVudDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZ2V0Um9vdChlbGVtZW50MikuaG9zdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHNjcm9sbCB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBpbiB0aGUgZ2l2ZW4gc2lkZSAodG9wIGFuZCBsZWZ0KVxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gICAqIEBhcmd1bWVudCB7U3RyaW5nfSBzaWRlIGB0b3BgIG9yIGBsZWZ0YFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhbW91bnQgb2Ygc2Nyb2xsZWQgcGl4ZWxzXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTY3JvbGwoZWxlbWVudCkge1xuICAgIHZhciBzaWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAndG9wJztcblxuICAgIHZhciB1cHBlclNpZGUgPSBzaWRlID09PSAndG9wJyA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICAgIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICB2YXIgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB2YXIgc2Nyb2xsaW5nRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGh0bWw7XG4gICAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudFt1cHBlclNpZGVdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50W3VwcGVyU2lkZV07XG4gIH1cblxuICAvKlxuICAgKiBTdW0gb3Igc3VidHJhY3QgdGhlIGVsZW1lbnQgc2Nyb2xsIHZhbHVlcyAobGVmdCBhbmQgdG9wKSBmcm9tIGEgZ2l2ZW4gcmVjdCBvYmplY3RcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IC0gUmVjdCBvYmplY3QgeW91IHdhbnQgdG8gY2hhbmdlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBmcm9tIHRoZSBmdW5jdGlvbiByZWFkcyB0aGUgc2Nyb2xsIHZhbHVlc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHN1YnRyYWN0IC0gc2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gc3VidHJhY3QgdGhlIHNjcm9sbCB2YWx1ZXNcbiAgICogQHJldHVybiB7T2JqZWN0fSByZWN0IC0gVGhlIG1vZGlmaWVyIHJlY3Qgb2JqZWN0XG4gICAqL1xuICBmdW5jdGlvbiBpbmNsdWRlU2Nyb2xsKHJlY3QsIGVsZW1lbnQpIHtcbiAgICB2YXIgc3VidHJhY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gICAgdmFyIHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgICB2YXIgbW9kaWZpZXIgPSBzdWJ0cmFjdCA/IC0xIDogMTtcbiAgICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICAgIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICAgIHJldHVybiByZWN0O1xuICB9XG5cbiAgLypcbiAgICogSGVscGVyIHRvIGRldGVjdCBib3JkZXJzIG9mIGEgZ2l2ZW4gZWxlbWVudFxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcbiAgICogUmVzdWx0IG9mIGBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHlgIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzIC0gYHhgIG9yIGB5YFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IGJvcmRlcnMgLSBUaGUgYm9yZGVycyBzaXplIG9mIHRoZSBnaXZlbiBheGlzXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcywgYXhpcykge1xuICAgIHZhciBzaWRlQSA9IGF4aXMgPT09ICd4JyA/ICdMZWZ0JyA6ICdUb3AnO1xuICAgIHZhciBzaWRlQiA9IHNpZGVBID09PSAnTGVmdCcgPyAnUmlnaHQnIDogJ0JvdHRvbSc7XG5cbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHlsZXNbJ2JvcmRlcicgKyBzaWRlQSArICdXaWR0aCddLCAxMCkgKyBwYXJzZUZsb2F0KHN0eWxlc1snYm9yZGVyJyArIHNpZGVCICsgJ1dpZHRoJ10sIDEwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNpemUoYXhpcywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSkge1xuICAgIHJldHVybiBNYXRoLm1heChib2R5WydvZmZzZXQnICsgYXhpc10sIGJvZHlbJ3Njcm9sbCcgKyBheGlzXSwgaHRtbFsnY2xpZW50JyArIGF4aXNdLCBodG1sWydvZmZzZXQnICsgYXhpc10sIGh0bWxbJ3Njcm9sbCcgKyBheGlzXSwgaXNJRSgxMCkgPyBwYXJzZUludChodG1sWydvZmZzZXQnICsgYXhpc10pICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVsnbWFyZ2luJyArIChheGlzID09PSAnSGVpZ2h0JyA/ICdUb3AnIDogJ0xlZnQnKV0pICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVsnbWFyZ2luJyArIChheGlzID09PSAnSGVpZ2h0JyA/ICdCb3R0b20nIDogJ1JpZ2h0JyldKSA6IDApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93U2l6ZXMoZG9jdW1lbnQpIHtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBpc0lFKDEwKSAmJiBnZXRDb21wdXRlZFN0eWxlKGh0bWwpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogZ2V0U2l6ZSgnSGVpZ2h0JywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gICAgICB3aWR0aDogZ2V0U2l6ZSgnV2lkdGgnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKVxuICAgIH07XG4gIH1cblxuICB2YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuXG5cblxuXG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICB2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHaXZlbiBlbGVtZW50IG9mZnNldHMsIGdlbmVyYXRlIGFuIG91dHB1dCBzaW1pbGFyIHRvIGdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IG9mZnNldHNcbiAgICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdChvZmZzZXRzKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBvZmZzZXRzLCB7XG4gICAgICByaWdodDogb2Zmc2V0cy5sZWZ0ICsgb2Zmc2V0cy53aWR0aCxcbiAgICAgIGJvdHRvbTogb2Zmc2V0cy50b3AgKyBvZmZzZXRzLmhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBib3VuZGluZyBjbGllbnQgcmVjdCBvZiBnaXZlbiBlbGVtZW50XG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge09iamVjdH0gY2xpZW50IHJlY3RcbiAgICovXG4gIGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gICAgdmFyIHJlY3QgPSB7fTtcblxuICAgIC8vIElFMTAgMTAgRklYOiBQbGVhc2UsIGRvbid0IGFzaywgdGhlIGVsZW1lbnQgaXNuJ3RcbiAgICAvLyBjb25zaWRlcmVkIGluIERPTSBpbiBzb21lIGNpcmN1bXN0YW5jZXMuLi5cbiAgICAvLyBUaGlzIGlzbid0IHJlcHJvZHVjaWJsZSBpbiBJRTEwIGNvbXBhdGliaWxpdHkgbW9kZSBvZiBJRTExXG4gICAgdHJ5IHtcbiAgICAgIGlmIChpc0lFKDEwKSkge1xuICAgICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gICAgICAgIHJlY3QudG9wICs9IHNjcm9sbFRvcDtcbiAgICAgICAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQ7XG4gICAgICAgIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcDtcbiAgICAgICAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3BcbiAgICB9O1xuXG4gICAgLy8gc3VidHJhY3Qgc2Nyb2xsYmFyIHNpemUgZnJvbSBzaXplc1xuICAgIHZhciBzaXplcyA9IGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJyA/IGdldFdpbmRvd1NpemVzKGVsZW1lbnQub3duZXJEb2N1bWVudCkgOiB7fTtcbiAgICB2YXIgd2lkdGggPSBzaXplcy53aWR0aCB8fCBlbGVtZW50LmNsaWVudFdpZHRoIHx8IHJlc3VsdC5yaWdodCAtIHJlc3VsdC5sZWZ0O1xuICAgIHZhciBoZWlnaHQgPSBzaXplcy5oZWlnaHQgfHwgZWxlbWVudC5jbGllbnRIZWlnaHQgfHwgcmVzdWx0LmJvdHRvbSAtIHJlc3VsdC50b3A7XG5cbiAgICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldFdpZHRoIC0gd2lkdGg7XG4gICAgdmFyIHZlcnRTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldEhlaWdodCAtIGhlaWdodDtcblxuICAgIC8vIGlmIGFuIGh5cG90aGV0aWNhbCBzY3JvbGxiYXIgaXMgZGV0ZWN0ZWQsIHdlIG11c3QgYmUgc3VyZSBpdCdzIG5vdCBhIGBib3JkZXJgXG4gICAgLy8gd2UgbWFrZSB0aGlzIGNoZWNrIGNvbmRpdGlvbmFsIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gICAgaWYgKGhvcml6U2Nyb2xsYmFyIHx8IHZlcnRTY3JvbGxiYXIpIHtcbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XG4gICAgICBob3JpelNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd4Jyk7XG4gICAgICB2ZXJ0U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3knKTtcblxuICAgICAgcmVzdWx0LndpZHRoIC09IGhvcml6U2Nyb2xsYmFyO1xuICAgICAgcmVzdWx0LmhlaWdodCAtPSB2ZXJ0U2Nyb2xsYmFyO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRDbGllbnRSZWN0KHJlc3VsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoY2hpbGRyZW4sIHBhcmVudCkge1xuICAgIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgIHZhciBpc0lFMTAgPSBpc0lFKDEwKTtcbiAgICB2YXIgaXNIVE1MID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCc7XG4gICAgdmFyIGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gICAgdmFyIHBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KTtcbiAgICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGNoaWxkcmVuKTtcblxuICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcbiAgICB2YXIgYm9yZGVyVG9wV2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJUb3BXaWR0aCwgMTApO1xuICAgIHZhciBib3JkZXJMZWZ0V2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgsIDEwKTtcblxuICAgIC8vIEluIGNhc2VzIHdoZXJlIHRoZSBwYXJlbnQgaXMgZml4ZWQsIHdlIG11c3QgaWdub3JlIG5lZ2F0aXZlIHNjcm9sbCBpbiBvZmZzZXQgY2FsY1xuICAgIGlmIChmaXhlZFBvc2l0aW9uICYmIGlzSFRNTCkge1xuICAgICAgcGFyZW50UmVjdC50b3AgPSBNYXRoLm1heChwYXJlbnRSZWN0LnRvcCwgMCk7XG4gICAgICBwYXJlbnRSZWN0LmxlZnQgPSBNYXRoLm1heChwYXJlbnRSZWN0LmxlZnQsIDApO1xuICAgIH1cbiAgICB2YXIgb2Zmc2V0cyA9IGdldENsaWVudFJlY3Qoe1xuICAgICAgdG9wOiBjaGlsZHJlblJlY3QudG9wIC0gcGFyZW50UmVjdC50b3AgLSBib3JkZXJUb3BXaWR0aCxcbiAgICAgIGxlZnQ6IGNoaWxkcmVuUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0IC0gYm9yZGVyTGVmdFdpZHRoLFxuICAgICAgd2lkdGg6IGNoaWxkcmVuUmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogY2hpbGRyZW5SZWN0LmhlaWdodFxuICAgIH0pO1xuICAgIG9mZnNldHMubWFyZ2luVG9wID0gMDtcbiAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSAwO1xuXG4gICAgLy8gU3VidHJhY3QgbWFyZ2lucyBvZiBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBpdCdzIGJlaW5nIHVzZWQgYXMgcGFyZW50XG4gICAgLy8gd2UgZG8gdGhpcyBvbmx5IG9uIEhUTUwgYmVjYXVzZSBpdCdzIHRoZSBvbmx5IGVsZW1lbnQgdGhhdCBiZWhhdmVzXG4gICAgLy8gZGlmZmVyZW50bHkgd2hlbiBtYXJnaW5zIGFyZSBhcHBsaWVkIHRvIGl0LiBUaGUgbWFyZ2lucyBhcmUgaW5jbHVkZWQgaW5cbiAgICAvLyB0aGUgYm94IG9mIHRoZSBkb2N1bWVudEVsZW1lbnQsIGluIHRoZSBvdGhlciBjYXNlcyBub3QuXG4gICAgaWYgKCFpc0lFMTAgJiYgaXNIVE1MKSB7XG4gICAgICB2YXIgbWFyZ2luVG9wID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wLCAxMCk7XG4gICAgICB2YXIgbWFyZ2luTGVmdCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQsIDEwKTtcblxuICAgICAgb2Zmc2V0cy50b3AgLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgICBvZmZzZXRzLmJvdHRvbSAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICAgIG9mZnNldHMubGVmdCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuICAgICAgb2Zmc2V0cy5yaWdodCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuXG4gICAgICAvLyBBdHRhY2ggbWFyZ2luVG9wIGFuZCBtYXJnaW5MZWZ0IGJlY2F1c2UgaW4gc29tZSBjaXJjdW1zdGFuY2VzIHdlIG1heSBuZWVkIHRoZW1cbiAgICAgIG9mZnNldHMubWFyZ2luVG9wID0gbWFyZ2luVG9wO1xuICAgICAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdDtcbiAgICB9XG5cbiAgICBpZiAoaXNJRTEwICYmICFmaXhlZFBvc2l0aW9uID8gcGFyZW50LmNvbnRhaW5zKHNjcm9sbFBhcmVudCkgOiBwYXJlbnQgPT09IHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQubm9kZU5hbWUgIT09ICdCT0RZJykge1xuICAgICAgb2Zmc2V0cyA9IGluY2x1ZGVTY3JvbGwob2Zmc2V0cywgcGFyZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50KSB7XG4gICAgdmFyIGV4Y2x1ZGVTY3JvbGwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gICAgdmFyIGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciByZWxhdGl2ZU9mZnNldCA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShlbGVtZW50LCBodG1sKTtcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1heChodG1sLmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICAgIHZhciBzY3JvbGxUb3AgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sKSA6IDA7XG4gICAgdmFyIHNjcm9sbExlZnQgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sLCAnbGVmdCcpIDogMDtcblxuICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICB0b3A6IHNjcm9sbFRvcCAtIHJlbGF0aXZlT2Zmc2V0LnRvcCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpblRvcCxcbiAgICAgIGxlZnQ6IHNjcm9sbExlZnQgLSByZWxhdGl2ZU9mZnNldC5sZWZ0ICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luTGVmdCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfTtcblxuICAgIHJldHVybiBnZXRDbGllbnRSZWN0KG9mZnNldCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgZml4ZWQgb3IgaXMgaW5zaWRlIGEgZml4ZWQgcGFyZW50XG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAgICogQGFyZ3VtZW50IHtFbGVtZW50fSBjdXN0b21Db250YWluZXJcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0byBcImlzRml4ZWQ/XCJcbiAgICovXG4gIGZ1bmN0aW9uIGlzRml4ZWQoZWxlbWVudCkge1xuICAgIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICAgIGlmICghcGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaXNGaXhlZChwYXJlbnROb2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybnMge0VsZW1lbnR9IGZpcnN0IHRyYW5zZm9ybWVkIHBhcmVudCBvciBkb2N1bWVudEVsZW1lbnRcbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LnBhcmVudEVsZW1lbnQgfHwgaXNJRSgpKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsICYmIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbCwgJ3RyYW5zZm9ybScpID09PSAnbm9uZScpIHtcbiAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlZCB0aGUgYm91bmRhcmllcyBsaW1pdHMgYW5kIHJldHVybiB0aGVtXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWRkaW5nXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50IC0gRWxlbWVudCB1c2VkIHRvIGRlZmluZSB0aGUgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpeGVkUG9zaXRpb24gLSBJcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IENvb3JkaW5hdGVzIG9mIHRoZSBib3VuZGFyaWVzXG4gICAqL1xuICBmdW5jdGlvbiBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCkge1xuICAgIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTtcblxuICAgIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG5cbiAgICB2YXIgYm91bmRhcmllcyA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgcmVmZXJlbmNlKTtcblxuICAgIC8vIEhhbmRsZSB2aWV3cG9ydCBjYXNlXG4gICAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAndmlld3BvcnQnKSB7XG4gICAgICBib3VuZGFyaWVzID0gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhhbmRsZSBvdGhlciBjYXNlcyBiYXNlZCBvbiBET00gZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXNcbiAgICAgIHZhciBib3VuZGFyaWVzTm9kZSA9IHZvaWQgMDtcbiAgICAgIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgICAgYm91bmRhcmllc05vZGUgPSBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShyZWZlcmVuY2UpKTtcbiAgICAgICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib3VuZGFyaWVzTm9kZSA9IGJvdW5kYXJpZXNFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgb2Zmc2V0cyA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShib3VuZGFyaWVzTm9kZSwgb2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcblxuICAgICAgLy8gSW4gY2FzZSBvZiBIVE1MLCB3ZSBuZWVkIGEgZGlmZmVyZW50IGNvbXB1dGF0aW9uXG4gICAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdIVE1MJyAmJiAhaXNGaXhlZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHZhciBfZ2V0V2luZG93U2l6ZXMgPSBnZXRXaW5kb3dTaXplcyhwb3BwZXIub3duZXJEb2N1bWVudCksXG4gICAgICAgICAgICBoZWlnaHQgPSBfZ2V0V2luZG93U2l6ZXMuaGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGggPSBfZ2V0V2luZG93U2l6ZXMud2lkdGg7XG5cbiAgICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcbiAgICAgICAgYm91bmRhcmllcy5ib3R0b20gPSBoZWlnaHQgKyBvZmZzZXRzLnRvcDtcbiAgICAgICAgYm91bmRhcmllcy5sZWZ0ICs9IG9mZnNldHMubGVmdCAtIG9mZnNldHMubWFyZ2luTGVmdDtcbiAgICAgICAgYm91bmRhcmllcy5yaWdodCA9IHdpZHRoICsgb2Zmc2V0cy5sZWZ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZm9yIGFsbCB0aGUgb3RoZXIgRE9NIGVsZW1lbnRzLCB0aGlzIG9uZSBpcyBnb29kXG4gICAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBwYWRkaW5nc1xuICAgIHBhZGRpbmcgPSBwYWRkaW5nIHx8IDA7XG4gICAgdmFyIGlzUGFkZGluZ051bWJlciA9IHR5cGVvZiBwYWRkaW5nID09PSAnbnVtYmVyJztcbiAgICBib3VuZGFyaWVzLmxlZnQgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcubGVmdCB8fCAwO1xuICAgIGJvdW5kYXJpZXMudG9wICs9IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLnRvcCB8fCAwO1xuICAgIGJvdW5kYXJpZXMucmlnaHQgLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcucmlnaHQgfHwgMDtcbiAgICBib3VuZGFyaWVzLmJvdHRvbSAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5ib3R0b20gfHwgMDtcblxuICAgIHJldHVybiBib3VuZGFyaWVzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJlYShfcmVmKSB7XG4gICAgdmFyIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG5cbiAgICByZXR1cm4gd2lkdGggKiBoZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxuICAgKiBhdmFpbGFibGUgc3BhY2UuXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICAgKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAgICovXG4gIGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHBsYWNlbWVudCwgcmVmUmVjdCwgcG9wcGVyLCByZWZlcmVuY2UsIGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gICAgdmFyIHBhZGRpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IDA7XG5cbiAgICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2F1dG8nKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCk7XG5cbiAgICB2YXIgcmVjdHMgPSB7XG4gICAgICB0b3A6IHtcbiAgICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcFxuICAgICAgfSxcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcbiAgICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgICAgfSxcbiAgICAgIGJvdHRvbToge1xuICAgICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tXG4gICAgICB9LFxuICAgICAgbGVmdDoge1xuICAgICAgICB3aWR0aDogcmVmUmVjdC5sZWZ0IC0gYm91bmRhcmllcy5sZWZ0LFxuICAgICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzb3J0ZWRBcmVhcyA9IE9iamVjdC5rZXlzKHJlY3RzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAga2V5OiBrZXlcbiAgICAgIH0sIHJlY3RzW2tleV0sIHtcbiAgICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKVxuICAgICAgfSk7XG4gICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGIuYXJlYSAtIGEuYXJlYTtcbiAgICB9KTtcblxuICAgIHZhciBmaWx0ZXJlZEFyZWFzID0gc29ydGVkQXJlYXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIHdpZHRoID0gX3JlZjIud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0O1xuICAgICAgcmV0dXJuIHdpZHRoID49IHBvcHBlci5jbGllbnRXaWR0aCAmJiBoZWlnaHQgPj0gcG9wcGVyLmNsaWVudEhlaWdodDtcbiAgICB9KTtcblxuICAgIHZhciBjb21wdXRlZFBsYWNlbWVudCA9IGZpbHRlcmVkQXJlYXMubGVuZ3RoID4gMCA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5IDogc29ydGVkQXJlYXNbMF0ua2V5O1xuXG4gICAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gICAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb2Zmc2V0cyB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZml4ZWRQb3NpdGlvbiAtIGlzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAgICovXG4gIGZ1bmN0aW9uIGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlKSB7XG4gICAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG5cbiAgICB2YXIgY29tbW9uT2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCByZWZlcmVuY2UpO1xuICAgIHJldHVybiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUocmVmZXJlbmNlLCBjb21tb25PZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3V0ZXIgc2l6ZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQgKG9mZnNldCBzaXplICsgbWFyZ2lucylcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgY29udGFpbmluZyB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAgICovXG4gIGZ1bmN0aW9uIGdldE91dGVyU2l6ZXMoZWxlbWVudCkge1xuICAgIHZhciB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIHZhciB4ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wIHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tIHx8IDApO1xuICAgIHZhciB5ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblJpZ2h0IHx8IDApO1xuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCArIHksXG4gICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgeFxuICAgIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50XG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50XG4gICAqL1xuICBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgICB2YXIgaGFzaCA9IHsgbGVmdDogJ3JpZ2h0JywgcmlnaHQ6ICdsZWZ0JywgYm90dG9tOiAndG9wJywgdG9wOiAnYm90dG9tJyB9O1xuICAgIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb2Zmc2V0cyB0byB0aGUgcG9wcGVyXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gLSBDU1MgcG9zaXRpb24gdGhlIFBvcHBlciB3aWxsIGdldCBhcHBsaWVkXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0cyAtIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwbGFjZW1lbnQgLSBvbmUgb2YgdGhlIHZhbGlkIHBsYWNlbWVudCBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHBvcHBlck9mZnNldHMgLSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UG9wcGVyT2Zmc2V0cyhwb3BwZXIsIHJlZmVyZW5jZU9mZnNldHMsIHBsYWNlbWVudCkge1xuICAgIHBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gICAgLy8gR2V0IHBvcHBlciBub2RlIHNpemVzXG4gICAgdmFyIHBvcHBlclJlY3QgPSBnZXRPdXRlclNpemVzKHBvcHBlcik7XG5cbiAgICAvLyBBZGQgcG9zaXRpb24sIHdpZHRoIGFuZCBoZWlnaHQgdG8gb3VyIG9mZnNldHMgb2JqZWN0XG4gICAgdmFyIHBvcHBlck9mZnNldHMgPSB7XG4gICAgICB3aWR0aDogcG9wcGVyUmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcG9wcGVyUmVjdC5oZWlnaHRcbiAgICB9O1xuXG4gICAgLy8gZGVwZW5kaW5nIGJ5IHRoZSBwb3BwZXIgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxuICAgIHZhciBpc0hvcml6ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgICB2YXIgbWFpblNpZGUgPSBpc0hvcml6ID8gJ3RvcCcgOiAnbGVmdCc7XG4gICAgdmFyIHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgc2Vjb25kYXJ5TWVhc3VyZW1lbnQgPSAhaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHBvcHBlck9mZnNldHNbbWFpblNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1ttYWluU2lkZV0gKyByZWZlcmVuY2VPZmZzZXRzW21lYXN1cmVtZW50XSAvIDIgLSBwb3BwZXJSZWN0W21lYXN1cmVtZW50XSAvIDI7XG4gICAgaWYgKHBsYWNlbWVudCA9PT0gc2Vjb25kYXJ5U2lkZSkge1xuICAgICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSBwb3BwZXJSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQoc2Vjb25kYXJ5U2lkZSldO1xuICAgIH1cblxuICAgIHJldHVybiBwb3BwZXJPZmZzZXRzO1xuICB9XG5cbiAgLyoqXG4gICAqIE1pbWljcyB0aGUgYGZpbmRgIG1ldGhvZCBvZiBBcnJheVxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gICAqIEBhcmd1bWVudCBwcm9wXG4gICAqIEBhcmd1bWVudCB2YWx1ZVxuICAgKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZChhcnIsIGNoZWNrKSB7XG4gICAgLy8gdXNlIG5hdGl2ZSBmaW5kIGlmIHN1cHBvcnRlZFxuICAgIGlmIChBcnJheS5wcm90b3R5cGUuZmluZCkge1xuICAgICAgcmV0dXJuIGFyci5maW5kKGNoZWNrKTtcbiAgICB9XG5cbiAgICAvLyB1c2UgYGZpbHRlcmAgdG8gb2J0YWluIHRoZSBzYW1lIGJlaGF2aW9yIG9mIGBmaW5kYFxuICAgIHJldHVybiBhcnIuZmlsdGVyKGNoZWNrKVswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBtYXRjaGluZyBvYmplY3RcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICAgKiBAYXJndW1lbnQgcHJvcFxuICAgKiBAYXJndW1lbnQgdmFsdWVcbiAgICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIHByb3AsIHZhbHVlKSB7XG4gICAgLy8gdXNlIG5hdGl2ZSBmaW5kSW5kZXggaWYgc3VwcG9ydGVkXG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgpIHtcbiAgICAgIHJldHVybiBhcnIuZmluZEluZGV4KGZ1bmN0aW9uIChjdXIpIHtcbiAgICAgICAgcmV0dXJuIGN1cltwcm9wXSA9PT0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB1c2UgYGZpbmRgICsgYGluZGV4T2ZgIGlmIGBmaW5kSW5kZXhgIGlzbid0IHN1cHBvcnRlZFxuICAgIHZhciBtYXRjaCA9IGZpbmQoYXJyLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqW3Byb3BdID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyLmluZGV4T2YobWF0Y2gpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvb3AgdHJvdWdoIHRoZSBsaXN0IG9mIG1vZGlmaWVycyBhbmQgcnVuIHRoZW0gaW4gb3JkZXIsXG4gICAqIGVhY2ggb2YgdGhlbSB3aWxsIHRoZW4gZWRpdCB0aGUgZGF0YSBvYmplY3QuXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbmRzIC0gT3B0aW9uYWwgbW9kaWZpZXIgbmFtZSB1c2VkIGFzIHN0b3BwZXJcbiAgICogQHJldHVybnMge2RhdGFPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBydW5Nb2RpZmllcnMobW9kaWZpZXJzLCBkYXRhLCBlbmRzKSB7XG4gICAgdmFyIG1vZGlmaWVyc1RvUnVuID0gZW5kcyA9PT0gdW5kZWZpbmVkID8gbW9kaWZpZXJzIDogbW9kaWZpZXJzLnNsaWNlKDAsIGZpbmRJbmRleChtb2RpZmllcnMsICduYW1lJywgZW5kcykpO1xuXG4gICAgbW9kaWZpZXJzVG9SdW4uZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIGlmIChtb2RpZmllclsnZnVuY3Rpb24nXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICBjb25zb2xlLndhcm4oJ2Btb2RpZmllci5mdW5jdGlvbmAgaXMgZGVwcmVjYXRlZCwgdXNlIGBtb2RpZmllci5mbmAhJyk7XG4gICAgICB9XG4gICAgICB2YXIgZm4gPSBtb2RpZmllclsnZnVuY3Rpb24nXSB8fCBtb2RpZmllci5mbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgIGlmIChtb2RpZmllci5lbmFibGVkICYmIGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgIC8vIEFkZCBwcm9wZXJ0aWVzIHRvIG9mZnNldHMgdG8gbWFrZSB0aGVtIGEgY29tcGxldGUgY2xpZW50UmVjdCBvYmplY3RcbiAgICAgICAgLy8gd2UgZG8gdGhpcyBiZWZvcmUgZWFjaCBtb2RpZmllciB0byBtYWtlIHN1cmUgdGhlIHByZXZpb3VzIG9uZSBkb2Vzbid0XG4gICAgICAgIC8vIG1lc3Mgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG4gICAgICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UpO1xuXG4gICAgICAgIGRhdGEgPSBmbihkYXRhLCBtb2RpZmllcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyLCBjb21wdXRpbmcgdGhlIG5ldyBvZmZzZXRzIGFuZCBhcHBseWluZ1xuICAgKiB0aGUgbmV3IHN0eWxlLjxiciAvPlxuICAgKiBQcmVmZXIgYHNjaGVkdWxlVXBkYXRlYCBvdmVyIGB1cGRhdGVgIGJlY2F1c2Ugb2YgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgLy8gaWYgcG9wcGVyIGlzIGRlc3Ryb3llZCwgZG9uJ3QgcGVyZm9ybSBhbnkgZnVydGhlciB1cGRhdGVcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgICBzdHlsZXM6IHt9LFxuICAgICAgYXJyb3dTdHlsZXM6IHt9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBmbGlwcGVkOiBmYWxzZSxcbiAgICAgIG9mZnNldHM6IHt9XG4gICAgfTtcblxuICAgIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHRoaXMuc3RhdGUsIHRoaXMucG9wcGVyLCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gICAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gICAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAgIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgIGRhdGEucGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQodGhpcy5vcHRpb25zLnBsYWNlbWVudCwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgdGhpcy5wb3BwZXIsIHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nKTtcblxuICAgIC8vIHN0b3JlIHRoZSBjb21wdXRlZCBwbGFjZW1lbnQgaW5zaWRlIGBvcmlnaW5hbFBsYWNlbWVudGBcbiAgICBkYXRhLm9yaWdpbmFsUGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG5cbiAgICBkYXRhLnBvc2l0aW9uRml4ZWQgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZDtcblxuICAgIC8vIGNvbXB1dGUgdGhlIHBvcHBlciBvZmZzZXRzXG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldFBvcHBlck9mZnNldHModGhpcy5wb3BwZXIsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIGRhdGEucGxhY2VtZW50KTtcblxuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIucG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnO1xuXG4gICAgLy8gcnVuIHRoZSBtb2RpZmllcnNcbiAgICBkYXRhID0gcnVuTW9kaWZpZXJzKHRoaXMubW9kaWZpZXJzLCBkYXRhKTtcblxuICAgIC8vIHRoZSBmaXJzdCBgdXBkYXRlYCB3aWxsIGNhbGwgYG9uQ3JlYXRlYCBjYWxsYmFja1xuICAgIC8vIHRoZSBvdGhlciBvbmVzIHdpbGwgY2FsbCBgb25VcGRhdGVgIGNhbGxiYWNrXG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzQ3JlYXRlZCkge1xuICAgICAgdGhpcy5zdGF0ZS5pc0NyZWF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5vcHRpb25zLm9uQ3JlYXRlKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25VcGRhdGUoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzTW9kaWZpZXJFbmFibGVkKG1vZGlmaWVycywgbW9kaWZpZXJOYW1lKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVycy5zb21lKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgICBlbmFibGVkID0gX3JlZi5lbmFibGVkO1xuICAgICAgcmV0dXJuIGVuYWJsZWQgJiYgbmFtZSA9PT0gbW9kaWZpZXJOYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcHJlZml4ZWQgc3VwcG9ydGVkIHByb3BlcnR5IG5hbWVcbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eSAoY2FtZWxDYXNlKVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBwcmVmaXhlZCBwcm9wZXJ0eSAoY2FtZWxDYXNlIG9yIFBhc2NhbENhc2UsIGRlcGVuZGluZyBvbiB0aGUgdmVuZG9yIHByZWZpeClcbiAgICovXG4gIGZ1bmN0aW9uIGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZShwcm9wZXJ0eSkge1xuICAgIHZhciBwcmVmaXhlcyA9IFtmYWxzZSwgJ21zJywgJ1dlYmtpdCcsICdNb3onLCAnTyddO1xuICAgIHZhciB1cHBlclByb3AgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgdmFyIHRvQ2hlY2sgPSBwcmVmaXggPyAnJyArIHByZWZpeCArIHVwcGVyUHJvcCA6IHByb3BlcnR5O1xuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW3RvQ2hlY2tdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdG9DaGVjaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIHBvcHBlci5cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gICAgLy8gdG91Y2ggRE9NIG9ubHkgaWYgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGlzIGVuYWJsZWRcbiAgICBpZiAoaXNNb2RpZmllckVuYWJsZWQodGhpcy5tb2RpZmllcnMsICdhcHBseVN0eWxlJykpIHtcbiAgICAgIHRoaXMucG9wcGVyLnJlbW92ZUF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKTtcbiAgICAgIHRoaXMucG9wcGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgICB0aGlzLnBvcHBlci5zdHlsZS50b3AgPSAnJztcbiAgICAgIHRoaXMucG9wcGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgIHRoaXMucG9wcGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgICB0aGlzLnBvcHBlci5zdHlsZS5ib3R0b20gPSAnJztcbiAgICAgIHRoaXMucG9wcGVyLnN0eWxlLndpbGxDaGFuZ2UgPSAnJztcbiAgICAgIHRoaXMucG9wcGVyLnN0eWxlW2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyldID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIC8vIHJlbW92ZSB0aGUgcG9wcGVyIGlmIHVzZXIgZXhwbGljaXR5IGFza2VkIGZvciB0aGUgZGVsZXRpb24gb24gZGVzdHJveVxuICAgIC8vIGRvIG5vdCB1c2UgYHJlbW92ZWAgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBpdFxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlT25EZXN0cm95KSB7XG4gICAgICB0aGlzLnBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wcGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB3aW5kb3cgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50XG4gICAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJucyB7V2luZG93fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0V2luZG93KGVsZW1lbnQpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiB3aW5kb3c7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsUGFyZW50LCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpIHtcbiAgICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50Lm5vZGVOYW1lID09PSAnQk9EWSc7XG4gICAgdmFyIHRhcmdldCA9IGlzQm9keSA/IHNjcm9sbFBhcmVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogc2Nyb2xsUGFyZW50O1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgaWYgKCFpc0JvZHkpIHtcbiAgICAgIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhnZXRTY3JvbGxQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUpLCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpO1xuICAgIH1cbiAgICBzY3JvbGxQYXJlbnRzLnB1c2godGFyZ2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBuZWVkZWQgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgb3B0aW9ucywgc3RhdGUsIHVwZGF0ZUJvdW5kKSB7XG4gICAgLy8gUmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICAgIHN0YXRlLnVwZGF0ZUJvdW5kID0gdXBkYXRlQm91bmQ7XG4gICAgZ2V0V2luZG93KHJlZmVyZW5jZSkuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIC8vIFNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICAgIHZhciBzY3JvbGxFbGVtZW50ID0gZ2V0U2Nyb2xsUGFyZW50KHJlZmVyZW5jZSk7XG4gICAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbEVsZW1lbnQsICdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCwgc3RhdGUuc2Nyb2xsUGFyZW50cyk7XG4gICAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IHNjcm9sbEVsZW1lbnQ7XG4gICAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogSXQgd2lsbCBhZGQgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHN0YXJ0IHJlY2FsY3VsYXRpbmdcbiAgICogcG9zaXRpb24gb2YgdGhlIHBvcHBlciBlbGVtZW50IHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLlxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgICB0aGlzLnN0YXRlID0gc2V0dXBFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLCB0aGlzLnN0YXRlLCB0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBzdGF0ZSkge1xuICAgIC8vIFJlbW92ZSByZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gICAgZ2V0V2luZG93KHJlZmVyZW5jZSkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQpO1xuXG4gICAgLy8gUmVtb3ZlIHNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICAgIHN0YXRlLnNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RhdGUudXBkYXRlQm91bmQpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVzZXQgc3RhdGVcbiAgICBzdGF0ZS51cGRhdGVCb3VuZCA9IG51bGw7XG4gICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IFtdO1xuICAgIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBudWxsO1xuICAgIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogSXQgd2lsbCByZW1vdmUgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHdvbid0IHJlY2FsY3VsYXRlIHBvcHBlciBwb3NpdGlvblxuICAgKiB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC4gSXQgYWxzbyB3b24ndCB0cmlnZ2VyIGBvblVwZGF0ZWAgY2FsbGJhY2sgYW55bW9yZSxcbiAgICogdW5sZXNzIHlvdSBjYWxsIGB1cGRhdGVgIG1ldGhvZCBtYW51YWxseS5cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICBmdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gICAgICB0aGlzLnN0YXRlID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyBpZiBhIGdpdmVuIGlucHV0IGlzIGEgbnVtYmVyXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAcGFyYW0geyp9IGlucHV0IHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc051bWVyaWMobikge1xuICAgIHJldHVybiBuICE9PSAnJyAmJiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzdHlsZSB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBzdHlsZSB0b1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gICAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICB2YXIgdW5pdCA9ICcnO1xuICAgICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAgICBpZiAoWyd3aWR0aCcsICdoZWlnaHQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uaW5kZXhPZihwcm9wKSAhPT0gLTEgJiYgaXNOdW1lcmljKHN0eWxlc1twcm9wXSkpIHtcbiAgICAgICAgdW5pdCA9ICdweCc7XG4gICAgICB9XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdICsgdW5pdDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGF0dHJpYnV0ZXMgdG8gdGhlIGdpdmVuIHBvcHBlclxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgYXR0cmlidXRlcyB0b1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gICAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW3Byb3BdO1xuICAgICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wLCBhdHRyaWJ1dGVzW3Byb3BdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuc3R5bGVzIC0gTGlzdCBvZiBzdHlsZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLmF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHNhbWUgZGF0YSBvYmplY3RcbiAgICovXG4gIGZ1bmN0aW9uIGFwcGx5U3R5bGUoZGF0YSkge1xuICAgIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLnN0eWxlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gICAgLy8gaW4gdGhpcyB3YXkgd2UgY2FuIG1ha2UgdGhlIDNyZCBwYXJ0eSBtb2RpZmllcnMgYWRkIGN1c3RvbSBzdHlsZXMgdG8gaXRcbiAgICAvLyBCZSBhd2FyZSwgbW9kaWZpZXJzIGNvdWxkIG92ZXJyaWRlIHRoZSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIHByZXZpb3VzXG4gICAgLy8gbGluZXMgb2YgdGhpcyBtb2RpZmllciFcbiAgICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuc3R5bGVzKTtcblxuICAgIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLmF0dHJpYnV0ZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAgIC8vIHRoZXkgd2lsbCBiZSBzZXQgYXMgSFRNTCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAgc2V0QXR0cmlidXRlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5hdHRyaWJ1dGVzKTtcblxuICAgIC8vIGlmIGFycm93RWxlbWVudCBpcyBkZWZpbmVkIGFuZCBhcnJvd1N0eWxlcyBoYXMgc29tZSBwcm9wZXJ0aWVzXG4gICAgaWYgKGRhdGEuYXJyb3dFbGVtZW50ICYmIE9iamVjdC5rZXlzKGRhdGEuYXJyb3dTdHlsZXMpLmxlbmd0aCkge1xuICAgICAgc2V0U3R5bGVzKGRhdGEuYXJyb3dFbGVtZW50LCBkYXRhLmFycm93U3R5bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHgtcGxhY2VtZW50IGF0dHJpYnV0ZSBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGJlY2F1c2UgaXQgY291bGQgYmUgdXNlZFxuICAgKiB0byBhZGQgbWFyZ2lucyB0byB0aGUgcG9wcGVyIG1hcmdpbnMgbmVlZHMgdG8gYmUgY2FsY3VsYXRlZCB0byBnZXQgdGhlXG4gICAqIGNvcnJlY3QgcG9wcGVyIG9mZnNldHMuXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5tb2RpZmllcnNcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCBlbGVtZW50IHVzZWQgYXMgcG9wcGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUG9wcGVyLmpzIG9wdGlvbnNcbiAgICovXG4gIGZ1bmN0aW9uIGFwcGx5U3R5bGVPbkxvYWQocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgc3RhdGUpIHtcbiAgICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgICB2YXIgcmVmZXJlbmNlT2Zmc2V0cyA9IGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlLCBvcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gICAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gICAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAgIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgIHZhciBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChvcHRpb25zLnBsYWNlbWVudCwgcmVmZXJlbmNlT2Zmc2V0cywgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZyk7XG5cbiAgICBwb3BwZXIuc2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcsIHBsYWNlbWVudCk7XG5cbiAgICAvLyBBcHBseSBgcG9zaXRpb25gIHRvIHBvcHBlciBiZWZvcmUgYW55dGhpbmcgZWxzZSBiZWNhdXNlXG4gICAgLy8gd2l0aG91dCB0aGUgcG9zaXRpb24gYXBwbGllZCB3ZSBjYW4ndCBndWFyYW50ZWUgY29ycmVjdCBjb21wdXRhdGlvbnNcbiAgICBzZXRTdHlsZXMocG9wcGVyLCB7IHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAgICogQGFyZ3VtZW50IHtCb29sZWFufSBzaG91bGRSb3VuZCAtIElmIHRoZSBvZmZzZXRzIHNob3VsZCBiZSByb3VuZGVkIGF0IGFsbFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcG9wcGVyJ3MgcG9zaXRpb24gb2Zmc2V0cyByb3VuZGVkXG4gICAqXG4gICAqIFRoZSB0YWxlIG9mIHBpeGVsLXBlcmZlY3QgcG9zaXRpb25pbmcuIEl0J3Mgc3RpbGwgbm90IDEwMCUgcGVyZmVjdCwgYnV0IGFzXG4gICAqIGdvb2QgYXMgaXQgY2FuIGJlIHdpdGhpbiByZWFzb24uXG4gICAqIERpc2N1c3Npb24gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvcHVsbC83MTVcbiAgICpcbiAgICogTG93IERQSSBzY3JlZW5zIGNhdXNlIGEgcG9wcGVyIHRvIGJlIGJsdXJyeSBpZiBub3QgdXNpbmcgZnVsbCBwaXhlbHMgKFNhZmFyaVxuICAgKiBhcyB3ZWxsIG9uIEhpZ2ggRFBJIHNjcmVlbnMpLlxuICAgKlxuICAgKiBGaXJlZm94IHByZWZlcnMgbm8gcm91bmRpbmcgZm9yIHBvc2l0aW9uaW5nIGFuZCBkb2VzIG5vdCBoYXZlIGJsdXJyaW5lc3Mgb25cbiAgICogaGlnaCBEUEkgc2NyZWVucy5cbiAgICpcbiAgICogT25seSBob3Jpem9udGFsIHBsYWNlbWVudCBhbmQgbGVmdC9yaWdodCB2YWx1ZXMgbmVlZCB0byBiZSBjb25zaWRlcmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Um91bmRlZE9mZnNldHMoZGF0YSwgc2hvdWxkUm91bmQpIHtcbiAgICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuICAgIHZhciByb3VuZCA9IE1hdGgucm91bmQsXG4gICAgICAgIGZsb29yID0gTWF0aC5mbG9vcjtcblxuICAgIHZhciBub1JvdW5kID0gZnVuY3Rpb24gbm9Sb3VuZCh2KSB7XG4gICAgICByZXR1cm4gdjtcbiAgICB9O1xuXG4gICAgdmFyIHJlZmVyZW5jZVdpZHRoID0gcm91bmQocmVmZXJlbmNlLndpZHRoKTtcbiAgICB2YXIgcG9wcGVyV2lkdGggPSByb3VuZChwb3BwZXIud2lkdGgpO1xuXG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XG4gICAgdmFyIGlzVmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuaW5kZXhPZignLScpICE9PSAtMTtcbiAgICB2YXIgc2FtZVdpZHRoUGFyaXR5ID0gcmVmZXJlbmNlV2lkdGggJSAyID09PSBwb3BwZXJXaWR0aCAlIDI7XG4gICAgdmFyIGJvdGhPZGRXaWR0aCA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gMSAmJiBwb3BwZXJXaWR0aCAlIDIgPT09IDE7XG5cbiAgICB2YXIgaG9yaXpvbnRhbFRvSW50ZWdlciA9ICFzaG91bGRSb3VuZCA/IG5vUm91bmQgOiBpc1ZlcnRpY2FsIHx8IGlzVmFyaWF0aW9uIHx8IHNhbWVXaWR0aFBhcml0eSA/IHJvdW5kIDogZmxvb3I7XG4gICAgdmFyIHZlcnRpY2FsVG9JbnRlZ2VyID0gIXNob3VsZFJvdW5kID8gbm9Sb3VuZCA6IHJvdW5kO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZnQ6IGhvcml6b250YWxUb0ludGVnZXIoYm90aE9kZFdpZHRoICYmICFpc1ZhcmlhdGlvbiAmJiBzaG91bGRSb3VuZCA/IHBvcHBlci5sZWZ0IC0gMSA6IHBvcHBlci5sZWZ0KSxcbiAgICAgIHRvcDogdmVydGljYWxUb0ludGVnZXIocG9wcGVyLnRvcCksXG4gICAgICBib3R0b206IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci5ib3R0b20pLFxuICAgICAgcmlnaHQ6IGhvcml6b250YWxUb0ludGVnZXIocG9wcGVyLnJpZ2h0KVxuICAgIH07XG4gIH1cblxuICB2YXIgaXNGaXJlZm94ID0gaXNCcm93c2VyICYmIC9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICAgKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAgICovXG4gIGZ1bmN0aW9uIGNvbXB1dGVTdHlsZShkYXRhLCBvcHRpb25zKSB7XG4gICAgdmFyIHggPSBvcHRpb25zLngsXG4gICAgICAgIHkgPSBvcHRpb25zLnk7XG4gICAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyBsZWdhY3kgc3VwcG9ydCBpbiBQb3BwZXIuanMgdjJcblxuICAgIHZhciBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gPSBmaW5kKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZSc7XG4gICAgfSkuZ3B1QWNjZWxlcmF0aW9uO1xuICAgIGlmIChsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgZ3B1QWNjZWxlcmF0aW9uYCBvcHRpb24gbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXIgYW5kIHdpbGwgbm90IGJlIHN1cHBvcnRlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUG9wcGVyLmpzIScpO1xuICAgIH1cbiAgICB2YXIgZ3B1QWNjZWxlcmF0aW9uID0gbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uICE9PSB1bmRlZmluZWQgPyBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gOiBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbjtcblxuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICAgIHZhciBvZmZzZXRQYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG5cbiAgICAvLyBTdHlsZXNcbiAgICB2YXIgc3R5bGVzID0ge1xuICAgICAgcG9zaXRpb246IHBvcHBlci5wb3NpdGlvblxuICAgIH07XG5cbiAgICB2YXIgb2Zmc2V0cyA9IGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDwgMiB8fCAhaXNGaXJlZm94KTtcblxuICAgIHZhciBzaWRlQSA9IHggPT09ICdib3R0b20nID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgICB2YXIgc2lkZUIgPSB5ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcblxuICAgIC8vIGlmIGdwdUFjY2VsZXJhdGlvbiBpcyBzZXQgdG8gYHRydWVgIGFuZCB0cmFuc2Zvcm0gaXMgc3VwcG9ydGVkLFxuICAgIC8vICB3ZSB1c2UgYHRyYW5zbGF0ZTNkYCB0byBhcHBseSB0aGUgcG9zaXRpb24gdG8gdGhlIHBvcHBlciB3ZVxuICAgIC8vIGF1dG9tYXRpY2FsbHkgdXNlIHRoZSBzdXBwb3J0ZWQgcHJlZml4ZWQgdmVyc2lvbiBpZiBuZWVkZWRcbiAgICB2YXIgcHJlZml4ZWRQcm9wZXJ0eSA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG5cbiAgICAvLyBub3csIGxldCdzIG1ha2UgYSBzdGVwIGJhY2sgYW5kIGxvb2sgYXQgdGhpcyBjb2RlIGNsb3NlbHkgKHd0Zj8pXG4gICAgLy8gSWYgdGhlIGNvbnRlbnQgb2YgdGhlIHBvcHBlciBncm93cyBvbmNlIGl0J3MgYmVlbiBwb3NpdGlvbmVkLCBpdFxuICAgIC8vIG1heSBoYXBwZW4gdGhhdCB0aGUgcG9wcGVyIGdldHMgbWlzcGxhY2VkIGJlY2F1c2Ugb2YgdGhlIG5ldyBjb250ZW50XG4gICAgLy8gb3ZlcmZsb3dpbmcgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gICAgLy8gVG8gYXZvaWQgdGhpcyBwcm9ibGVtLCB3ZSBwcm92aWRlIHR3byBvcHRpb25zICh4IGFuZCB5KSwgd2hpY2ggYWxsb3dcbiAgICAvLyB0aGUgY29uc3VtZXIgdG8gZGVmaW5lIHRoZSBvZmZzZXQgb3JpZ2luLlxuICAgIC8vIElmIHdlIHBvc2l0aW9uIGEgcG9wcGVyIG9uIHRvcCBvZiBhIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSBjYW4gc2V0XG4gICAgLy8gYHhgIHRvIGB0b3BgIHRvIG1ha2UgdGhlIHBvcHBlciBncm93IHRvd2FyZHMgaXRzIHRvcCBpbnN0ZWFkIG9mXG4gICAgLy8gaXRzIGJvdHRvbS5cbiAgICB2YXIgbGVmdCA9IHZvaWQgMCxcbiAgICAgICAgdG9wID0gdm9pZCAwO1xuICAgIGlmIChzaWRlQSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIC8vIHdoZW4gb2Zmc2V0UGFyZW50IGlzIDxodG1sPiB0aGUgcG9zaXRpb25pbmcgaXMgcmVsYXRpdmUgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIChleGNsdWRpbmcgdGhlIHNjcm9sbGJhcilcbiAgICAgIC8vIGFuZCBub3QgdGhlIGJvdHRvbSBvZiB0aGUgaHRtbCBlbGVtZW50XG4gICAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgICAgdG9wID0gLW9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnRSZWN0LmhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b3AgPSBvZmZzZXRzLnRvcDtcbiAgICB9XG4gICAgaWYgKHNpZGVCID09PSAncmlnaHQnKSB7XG4gICAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnRSZWN0LndpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9IG9mZnNldHMubGVmdDtcbiAgICB9XG4gICAgaWYgKGdwdUFjY2VsZXJhdGlvbiAmJiBwcmVmaXhlZFByb3BlcnR5KSB7XG4gICAgICBzdHlsZXNbcHJlZml4ZWRQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgsIDApJztcbiAgICAgIHN0eWxlc1tzaWRlQV0gPSAwO1xuICAgICAgc3R5bGVzW3NpZGVCXSA9IDA7XG4gICAgICBzdHlsZXMud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0nO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGh3ZXJpc2UsIHdlIHVzZSB0aGUgc3RhbmRhcmQgYHRvcGAsIGBsZWZ0YCwgYGJvdHRvbWAgYW5kIGByaWdodGAgcHJvcGVydGllc1xuICAgICAgdmFyIGludmVydFRvcCA9IHNpZGVBID09PSAnYm90dG9tJyA/IC0xIDogMTtcbiAgICAgIHZhciBpbnZlcnRMZWZ0ID0gc2lkZUIgPT09ICdyaWdodCcgPyAtMSA6IDE7XG4gICAgICBzdHlsZXNbc2lkZUFdID0gdG9wICogaW52ZXJ0VG9wO1xuICAgICAgc3R5bGVzW3NpZGVCXSA9IGxlZnQgKiBpbnZlcnRMZWZ0O1xuICAgICAgc3R5bGVzLndpbGxDaGFuZ2UgPSBzaWRlQSArICcsICcgKyBzaWRlQjtcbiAgICB9XG5cbiAgICAvLyBBdHRyaWJ1dGVzXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgICAneC1wbGFjZW1lbnQnOiBkYXRhLnBsYWNlbWVudFxuICAgIH07XG5cbiAgICAvLyBVcGRhdGUgYGRhdGFgIGF0dHJpYnV0ZXMsIHN0eWxlcyBhbmQgYXJyb3dTdHlsZXNcbiAgICBkYXRhLmF0dHJpYnV0ZXMgPSBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywgZGF0YS5hdHRyaWJ1dGVzKTtcbiAgICBkYXRhLnN0eWxlcyA9IF9leHRlbmRzKHt9LCBzdHlsZXMsIGRhdGEuc3R5bGVzKTtcbiAgICBkYXRhLmFycm93U3R5bGVzID0gX2V4dGVuZHMoe30sIGRhdGEub2Zmc2V0cy5hcnJvdywgZGF0YS5hcnJvd1N0eWxlcyk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBkZXBlbmRzIGZyb20gYW5vdGhlciBvbmUuPGJyIC8+XG4gICAqIEl0IGNoZWNrcyBpZiB0aGUgbmVlZGVkIG1vZGlmaWVyIGlzIGxpc3RlZCBhbmQgZW5hYmxlZC5cbiAgICogQG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVycyAtIGxpc3Qgb2YgbW9kaWZpZXJzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0aW5nTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGluZyBtb2RpZmllclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGVkTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGVkIG1vZGlmaWVyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNNb2RpZmllclJlcXVpcmVkKG1vZGlmaWVycywgcmVxdWVzdGluZ05hbWUsIHJlcXVlc3RlZE5hbWUpIHtcbiAgICB2YXIgcmVxdWVzdGluZyA9IGZpbmQobW9kaWZpZXJzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICByZXR1cm4gbmFtZSA9PT0gcmVxdWVzdGluZ05hbWU7XG4gICAgfSk7XG5cbiAgICB2YXIgaXNSZXF1aXJlZCA9ICEhcmVxdWVzdGluZyAmJiBtb2RpZmllcnMuc29tZShmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSByZXF1ZXN0ZWROYW1lICYmIG1vZGlmaWVyLmVuYWJsZWQgJiYgbW9kaWZpZXIub3JkZXIgPCByZXF1ZXN0aW5nLm9yZGVyO1xuICAgIH0pO1xuXG4gICAgaWYgKCFpc1JlcXVpcmVkKSB7XG4gICAgICB2YXIgX3JlcXVlc3RpbmcgPSAnYCcgKyByZXF1ZXN0aW5nTmFtZSArICdgJztcbiAgICAgIHZhciByZXF1ZXN0ZWQgPSAnYCcgKyByZXF1ZXN0ZWROYW1lICsgJ2AnO1xuICAgICAgY29uc29sZS53YXJuKHJlcXVlc3RlZCArICcgbW9kaWZpZXIgaXMgcmVxdWlyZWQgYnkgJyArIF9yZXF1ZXN0aW5nICsgJyBtb2RpZmllciBpbiBvcmRlciB0byB3b3JrLCBiZSBzdXJlIHRvIGluY2x1ZGUgaXQgYmVmb3JlICcgKyBfcmVxdWVzdGluZyArICchJyk7XG4gICAgfVxuICAgIHJldHVybiBpc1JlcXVpcmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICAgKi9cbiAgZnVuY3Rpb24gYXJyb3coZGF0YSwgb3B0aW9ucykge1xuICAgIHZhciBfZGF0YSRvZmZzZXRzJGFycm93O1xuXG4gICAgLy8gYXJyb3cgZGVwZW5kcyBvbiBrZWVwVG9nZXRoZXIgaW4gb3JkZXIgdG8gd29ya1xuICAgIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnYXJyb3cnLCAna2VlcFRvZ2V0aGVyJykpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cbiAgICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICAgIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgYXJyb3dFbGVtZW50ID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgbm90IGZvdW5kLCBkb24ndCBydW4gdGhlIG1vZGlmaWVyXG4gICAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlIGFycm93RWxlbWVudCBpc24ndCBhIHF1ZXJ5IHNlbGVjdG9yIHdlIG11c3QgY2hlY2sgdGhhdCB0aGVcbiAgICAgIC8vIHByb3ZpZGVkIERPTSBub2RlIGlzIGNoaWxkIG9mIGl0cyBwb3BwZXIgbm9kZVxuICAgICAgaWYgKCFkYXRhLmluc3RhbmNlLnBvcHBlci5jb250YWlucyhhcnJvd0VsZW1lbnQpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignV0FSTklORzogYGFycm93LmVsZW1lbnRgIG11c3QgYmUgY2hpbGQgb2YgaXRzIHBvcHBlciBlbGVtZW50IScpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIHNpZGVDYXBpdGFsaXplZCA9IGlzVmVydGljYWwgPyAnVG9wJyA6ICdMZWZ0JztcbiAgICB2YXIgc2lkZSA9IHNpZGVDYXBpdGFsaXplZC50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgIHZhciBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICAgIHZhciBhcnJvd0VsZW1lbnRTaXplID0gZ2V0T3V0ZXJTaXplcyhhcnJvd0VsZW1lbnQpW2xlbl07XG5cbiAgICAvL1xuICAgIC8vIGV4dGVuZHMga2VlcFRvZ2V0aGVyIGJlaGF2aW9yIG1ha2luZyBzdXJlIHRoZSBwb3BwZXIgYW5kIGl0c1xuICAgIC8vIHJlZmVyZW5jZSBoYXZlIGVub3VnaCBwaXhlbHMgaW4gY29uanVuY3Rpb25cbiAgICAvL1xuXG4gICAgLy8gdG9wL2xlZnQgc2lkZVxuICAgIGlmIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUgPCBwb3BwZXJbc2lkZV0pIHtcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLT0gcG9wcGVyW3NpZGVdIC0gKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XG4gICAgfVxuICAgIC8vIGJvdHRvbS9yaWdodCBzaWRlXG4gICAgaWYgKHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgPiBwb3BwZXJbb3BTaWRlXSkge1xuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSArPSByZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplIC0gcG9wcGVyW29wU2lkZV07XG4gICAgfVxuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuXG4gICAgLy8gY29tcHV0ZSBjZW50ZXIgb2YgdGhlIHBvcHBlclxuICAgIHZhciBjZW50ZXIgPSByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbGVuXSAvIDIgLSBhcnJvd0VsZW1lbnRTaXplIC8gMjtcblxuICAgIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCBwb3BwZXIgb2Zmc2V0c1xuICAgIC8vIHRha2UgcG9wcGVyIG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXG4gICAgdmFyIGNzcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gICAgdmFyIHBvcHBlck1hcmdpblNpZGUgPSBwYXJzZUZsb2F0KGNzc1snbWFyZ2luJyArIHNpZGVDYXBpdGFsaXplZF0sIDEwKTtcbiAgICB2YXIgcG9wcGVyQm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzWydib3JkZXInICsgc2lkZUNhcGl0YWxpemVkICsgJ1dpZHRoJ10sIDEwKTtcbiAgICB2YXIgc2lkZVZhbHVlID0gY2VudGVyIC0gZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtIHBvcHBlck1hcmdpblNpZGUgLSBwb3BwZXJCb3JkZXJTaWRlO1xuXG4gICAgLy8gcHJldmVudCBhcnJvd0VsZW1lbnQgZnJvbSBiZWluZyBwbGFjZWQgbm90IGNvbnRpZ3VvdXNseSB0byBpdHMgcG9wcGVyXG4gICAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4ocG9wcGVyW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcblxuICAgIGRhdGEuYXJyb3dFbGVtZW50ID0gYXJyb3dFbGVtZW50O1xuICAgIGRhdGEub2Zmc2V0cy5hcnJvdyA9IChfZGF0YSRvZmZzZXRzJGFycm93ID0ge30sIGRlZmluZVByb3BlcnR5KF9kYXRhJG9mZnNldHMkYXJyb3csIHNpZGUsIE1hdGgucm91bmQoc2lkZVZhbHVlKSksIGRlZmluZVByb3BlcnR5KF9kYXRhJG9mZnNldHMkYXJyb3csIGFsdFNpZGUsICcnKSwgX2RhdGEkb2Zmc2V0cyRhcnJvdyk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCB2YXJpYXRpb24gb2YgdGhlIGdpdmVuIG9uZVxuICAgKiBAbWV0aG9kXG4gICAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAgICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCB2YXJpYXRpb25cbiAgICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pIHtcbiAgICBpZiAodmFyaWF0aW9uID09PSAnZW5kJykge1xuICAgICAgcmV0dXJuICdzdGFydCc7XG4gICAgfSBlbHNlIGlmICh2YXJpYXRpb24gPT09ICdzdGFydCcpIHtcbiAgICAgIHJldHVybiAnZW5kJztcbiAgICB9XG4gICAgcmV0dXJuIHZhcmlhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFjY2VwdGVkIHBsYWNlbWVudHMgdG8gdXNlIGFzIHZhbHVlcyBvZiB0aGUgYHBsYWNlbWVudGAgb3B0aW9uLjxiciAvPlxuICAgKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAgICogLSBgYXV0b2BcbiAgICogLSBgdG9wYFxuICAgKiAtIGByaWdodGBcbiAgICogLSBgYm90dG9tYFxuICAgKiAtIGBsZWZ0YFxuICAgKlxuICAgKiBFYWNoIHBsYWNlbWVudCBjYW4gaGF2ZSBhIHZhcmlhdGlvbiBmcm9tIHRoaXMgbGlzdDpcbiAgICogLSBgLXN0YXJ0YFxuICAgKiAtIGAtZW5kYFxuICAgKlxuICAgKiBWYXJpYXRpb25zIGFyZSBpbnRlcnByZXRlZCBlYXNpbHkgaWYgeW91IHRoaW5rIG9mIHRoZW0gYXMgdGhlIGxlZnQgdG8gcmlnaHRcbiAgICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICAgKiBpcyByaWdodC48YnIgLz5cbiAgICogVmVydGljYWxseSAoYGxlZnRgIGFuZCBgcmlnaHRgKSwgYHN0YXJ0YCBpcyB0b3AgYW5kIGBlbmRgIGlzIGJvdHRvbS5cbiAgICpcbiAgICogU29tZSB2YWxpZCBleGFtcGxlcyBhcmU6XG4gICAqIC0gYHRvcC1lbmRgIChvbiB0b3Agb2YgcmVmZXJlbmNlLCByaWdodCBhbGlnbmVkKVxuICAgKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gICAqIC0gYGJvdHRvbWAgKG9uIGJvdHRvbSwgY2VudGVyZWQpXG4gICAqIC0gYGF1dG8tZW5kYCAob24gdGhlIHNpZGUgd2l0aCBtb3JlIHNwYWNlIGF2YWlsYWJsZSwgYWxpZ25tZW50IGRlcGVuZHMgYnkgcGxhY2VtZW50KVxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICogQGVudW0ge1N0cmluZ31cbiAgICogQHJlYWRvbmx5XG4gICAqIEBtZXRob2QgcGxhY2VtZW50c1xuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICB2YXIgcGxhY2VtZW50cyA9IFsnYXV0by1zdGFydCcsICdhdXRvJywgJ2F1dG8tZW5kJywgJ3RvcC1zdGFydCcsICd0b3AnLCAndG9wLWVuZCcsICdyaWdodC1zdGFydCcsICdyaWdodCcsICdyaWdodC1lbmQnLCAnYm90dG9tLWVuZCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2xlZnQtZW5kJywgJ2xlZnQnLCAnbGVmdC1zdGFydCddO1xuXG4gIC8vIEdldCByaWQgb2YgYGF1dG9gIGBhdXRvLXN0YXJ0YCBhbmQgYGF1dG8tZW5kYFxuICB2YXIgdmFsaWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5zbGljZSgzKTtcblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5pdGlhbCBwbGFjZW1lbnQsIHJldHVybnMgYWxsIHRoZSBzdWJzZXF1ZW50IHBsYWNlbWVudHNcbiAgICogY2xvY2t3aXNlIChvciBjb3VudGVyLWNsb2Nrd2lzZSkuXG4gICAqXG4gICAqIEBtZXRob2RcbiAgICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICAgKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IC0gQSB2YWxpZCBwbGFjZW1lbnQgKGl0IGFjY2VwdHMgdmFyaWF0aW9ucylcbiAgICogQGFyZ3VtZW50IHtCb29sZWFufSBjb3VudGVyIC0gU2V0IHRvIHRydWUgdG8gd2FsayB0aGUgcGxhY2VtZW50cyBjb3VudGVyY2xvY2t3aXNlXG4gICAqIEByZXR1cm5zIHtBcnJheX0gcGxhY2VtZW50cyBpbmNsdWRpbmcgdGhlaXIgdmFyaWF0aW9uc1xuICAgKi9cbiAgZnVuY3Rpb24gY2xvY2t3aXNlKHBsYWNlbWVudCkge1xuICAgIHZhciBjb3VudGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgIHZhciBpbmRleCA9IHZhbGlkUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCk7XG4gICAgdmFyIGFyciA9IHZhbGlkUGxhY2VtZW50cy5zbGljZShpbmRleCArIDEpLmNvbmNhdCh2YWxpZFBsYWNlbWVudHMuc2xpY2UoMCwgaW5kZXgpKTtcbiAgICByZXR1cm4gY291bnRlciA/IGFyci5yZXZlcnNlKCkgOiBhcnI7XG4gIH1cblxuICB2YXIgQkVIQVZJT1JTID0ge1xuICAgIEZMSVA6ICdmbGlwJyxcbiAgICBDTE9DS1dJU0U6ICdjbG9ja3dpc2UnLFxuICAgIENPVU5URVJDTE9DS1dJU0U6ICdjb3VudGVyY2xvY2t3aXNlJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICAgKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAgICovXG4gIGZ1bmN0aW9uIGZsaXAoZGF0YSwgb3B0aW9ucykge1xuICAgIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgICBpZiAoaXNNb2RpZmllckVuYWJsZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdpbm5lcicpKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5mbGlwcGVkICYmIGRhdGEucGxhY2VtZW50ID09PSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50KSB7XG4gICAgICAvLyBzZWVtcyBsaWtlIGZsaXAgaXMgdHJ5aW5nIHRvIGxvb3AsIHByb2JhYmx5IHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSBvbiBhbnkgb2YgdGhlIGZsaXBwYWJsZSBzaWRlc1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSwgb3B0aW9ucy5wYWRkaW5nLCBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50LCBkYXRhLnBvc2l0aW9uRml4ZWQpO1xuXG4gICAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gICAgdmFyIHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICB2YXIgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVsxXSB8fCAnJztcblxuICAgIHZhciBmbGlwT3JkZXIgPSBbXTtcblxuICAgIHN3aXRjaCAob3B0aW9ucy5iZWhhdmlvcikge1xuICAgICAgY2FzZSBCRUhBVklPUlMuRkxJUDpcbiAgICAgICAgZmxpcE9yZGVyID0gW3BsYWNlbWVudCwgcGxhY2VtZW50T3Bwb3NpdGVdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQkVIQVZJT1JTLkNMT0NLV0lTRTpcbiAgICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCRUhBVklPUlMuQ09VTlRFUkNMT0NLV0lTRTpcbiAgICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZmxpcE9yZGVyID0gb3B0aW9ucy5iZWhhdmlvcjtcbiAgICB9XG5cbiAgICBmbGlwT3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICAgIGlmIChwbGFjZW1lbnQgIT09IHN0ZXAgfHwgZmxpcE9yZGVyLmxlbmd0aCA9PT0gaW5kZXggKyAxKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICAgICAgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG4gICAgICB2YXIgcmVmT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICAgIC8vIHVzaW5nIGZsb29yIGJlY2F1c2UgdGhlIHJlZmVyZW5jZSBvZmZzZXRzIG1heSBjb250YWluIGRlY2ltYWxzIHdlIGFyZSBub3QgZ29pbmcgdG8gY29uc2lkZXIgaGVyZVxuICAgICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICAgIHZhciBvdmVybGFwc1JlZiA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IocmVmT2Zmc2V0cy5sZWZ0KSB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKHJlZk9mZnNldHMucmlnaHQpIHx8IHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IocmVmT2Zmc2V0cy50b3ApIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IocmVmT2Zmc2V0cy5ib3R0b20pO1xuXG4gICAgICB2YXIgb3ZlcmZsb3dzTGVmdCA9IGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihib3VuZGFyaWVzLmxlZnQpO1xuICAgICAgdmFyIG92ZXJmbG93c1JpZ2h0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcbiAgICAgIHZhciBvdmVyZmxvd3NUb3AgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihib3VuZGFyaWVzLnRvcCk7XG4gICAgICB2YXIgb3ZlcmZsb3dzQm90dG9tID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IoYm91bmRhcmllcy5ib3R0b20pO1xuXG4gICAgICB2YXIgb3ZlcmZsb3dzQm91bmRhcmllcyA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c0xlZnQgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0IHx8IHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgb3ZlcmZsb3dzVG9wIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgb3ZlcmZsb3dzQm90dG9tO1xuXG4gICAgICAvLyBmbGlwIHRoZSB2YXJpYXRpb24gaWYgcmVxdWlyZWRcbiAgICAgIHZhciBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgICAgIHZhciBmbGlwcGVkVmFyaWF0aW9uID0gISFvcHRpb25zLmZsaXBWYXJpYXRpb25zICYmIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NMZWZ0IHx8IGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NSaWdodCB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzVG9wIHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzQm90dG9tKTtcblxuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgICAvLyB0aGlzIGJvb2xlYW4gdG8gZGV0ZWN0IGFueSBmbGlwIGxvb3BcbiAgICAgICAgZGF0YS5mbGlwcGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICAgIHBsYWNlbWVudCA9IGZsaXBPcmRlcltpbmRleCArIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgICB2YXJpYXRpb24gPSBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuXG4gICAgICAgIC8vIHRoaXMgb2JqZWN0IGNvbnRhaW5zIGBwb3NpdGlvbmAsIHdlIHdhbnQgdG8gcHJlc2VydmUgaXQgYWxvbmcgd2l0aFxuICAgICAgICAvLyBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0eSB3ZSBtYXkgYWRkIGluIHRoZSBmdXR1cmVcbiAgICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMucG9wcGVyLCBnZXRQb3BwZXJPZmZzZXRzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCkpO1xuXG4gICAgICAgIGRhdGEgPSBydW5Nb2RpZmllcnMoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGRhdGEsICdmbGlwJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gICAqL1xuICBmdW5jdGlvbiBrZWVwVG9nZXRoZXIoZGF0YSkge1xuICAgIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgIHZhciBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgICB2YXIgc2lkZSA9IGlzVmVydGljYWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gICAgdmFyIG9wU2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gICAgaWYgKHBvcHBlcltzaWRlXSA8IGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSkge1xuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pIC0gcG9wcGVyW21lYXN1cmVtZW50XTtcbiAgICB9XG4gICAgaWYgKHBvcHBlcltvcFNpZGVdID4gZmxvb3IocmVmZXJlbmNlW3NpZGVdKSkge1xuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW3NpZGVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHN0cmluZyBjb250YWluaW5nIHZhbHVlICsgdW5pdCBpbnRvIGEgcHggdmFsdWUgbnVtYmVyXG4gICAqIEBmdW5jdGlvblxuICAgKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gICAqIEBwcml2YXRlXG4gICAqIEBhcmd1bWVudCB7U3RyaW5nfSBzdHIgLSBWYWx1ZSArIHVuaXQgc3RyaW5nXG4gICAqIEBhcmd1bWVudCB7U3RyaW5nfSBtZWFzdXJlbWVudCAtIGBoZWlnaHRgIG9yIGB3aWR0aGBcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAgICogQHJldHVybnMge051bWJlcnxTdHJpbmd9XG4gICAqIFZhbHVlIGluIHBpeGVscywgb3Igb3JpZ2luYWwgc3RyaW5nIGlmIG5vIHZhbHVlcyB3ZXJlIGV4dHJhY3RlZFxuICAgKi9cbiAgZnVuY3Rpb24gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSB7XG4gICAgLy8gc2VwYXJhdGUgdmFsdWUgZnJvbSB1bml0XG4gICAgdmFyIHNwbGl0ID0gc3RyLm1hdGNoKC8oKD86XFwtfFxcKyk/XFxkKlxcLj9cXGQqKSguKikvKTtcbiAgICB2YXIgdmFsdWUgPSArc3BsaXRbMV07XG4gICAgdmFyIHVuaXQgPSBzcGxpdFsyXTtcblxuICAgIC8vIElmIGl0J3Mgbm90IGEgbnVtYmVyIGl0J3MgYW4gb3BlcmF0b3IsIEkgZ3Vlc3NcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGlmICh1bml0LmluZGV4T2YoJyUnKSA9PT0gMCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgY2FzZSAnJXAnOlxuICAgICAgICAgIGVsZW1lbnQgPSBwb3BwZXJPZmZzZXRzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICclJzpcbiAgICAgICAgY2FzZSAnJXInOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGVsZW1lbnQgPSByZWZlcmVuY2VPZmZzZXRzO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3QoZWxlbWVudCk7XG4gICAgICByZXR1cm4gcmVjdFttZWFzdXJlbWVudF0gLyAxMDAgKiB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICd2aCcgfHwgdW5pdCA9PT0gJ3Z3Jykge1xuICAgICAgLy8gaWYgaXMgYSB2aCBvciB2dywgd2UgY2FsY3VsYXRlIHRoZSBzaXplIGJhc2VkIG9uIHRoZSB2aWV3cG9ydFxuICAgICAgdmFyIHNpemUgPSB2b2lkIDA7XG4gICAgICBpZiAodW5pdCA9PT0gJ3ZoJykge1xuICAgICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2l6ZSA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2l6ZSAvIDEwMCAqIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBpcyBhbiBleHBsaWNpdCBwaXhlbCB1bml0LCB3ZSBnZXQgcmlkIG9mIHRoZSB1bml0IGFuZCBrZWVwIHRoZSB2YWx1ZVxuICAgICAgLy8gaWYgaXMgYW4gaW1wbGljaXQgdW5pdCwgaXQncyBweCwgYW5kIHdlIHJldHVybiBqdXN0IHRoZSB2YWx1ZVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhbiBgb2Zmc2V0YCBzdHJpbmcgdG8gZXh0cmFwb2xhdGUgYHhgIGFuZCBgeWAgbnVtZXJpYyBvZmZzZXRzLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAYXJndW1lbnQge1N0cmluZ30gb2Zmc2V0XG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gICAqIEBhcmd1bWVudCB7U3RyaW5nfSBiYXNlUGxhY2VtZW50XG4gICAqIEByZXR1cm5zIHtBcnJheX0gYSB0d28gY2VsbHMgYXJyYXkgd2l0aCB4IGFuZCB5IG9mZnNldHMgaW4gbnVtYmVyc1xuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzLCBiYXNlUGxhY2VtZW50KSB7XG4gICAgdmFyIG9mZnNldHMgPSBbMCwgMF07XG5cbiAgICAvLyBVc2UgaGVpZ2h0IGlmIHBsYWNlbWVudCBpcyBsZWZ0IG9yIHJpZ2h0IGFuZCBpbmRleCBpcyAwIG90aGVyd2lzZSB1c2Ugd2lkdGhcbiAgICAvLyBpbiB0aGlzIHdheSB0aGUgZmlyc3Qgb2Zmc2V0IHdpbGwgdXNlIGFuIGF4aXMgYW5kIHRoZSBzZWNvbmQgb25lXG4gICAgLy8gd2lsbCB1c2UgdGhlIG90aGVyIG9uZVxuICAgIHZhciB1c2VIZWlnaHQgPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIC8vIFNwbGl0IHRoZSBvZmZzZXQgc3RyaW5nIHRvIG9idGFpbiBhIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kc1xuICAgIC8vIFRoZSByZWdleCBhZGRyZXNzZXMgdmFsdWVzIHdpdGggdGhlIHBsdXMgb3IgbWludXMgc2lnbiBpbiBmcm9udCAoKzEwLCAtMjAsIGV0YylcbiAgICB2YXIgZnJhZ21lbnRzID0gb2Zmc2V0LnNwbGl0KC8oXFwrfFxcLSkvKS5tYXAoZnVuY3Rpb24gKGZyYWcpIHtcbiAgICAgIHJldHVybiBmcmFnLnRyaW0oKTtcbiAgICB9KTtcblxuICAgIC8vIERldGVjdCBpZiB0aGUgb2Zmc2V0IHN0cmluZyBjb250YWlucyBhIHBhaXIgb2YgdmFsdWVzIG9yIGEgc2luZ2xlIG9uZVxuICAgIC8vIHRoZXkgY291bGQgYmUgc2VwYXJhdGVkIGJ5IGNvbW1hIG9yIHNwYWNlXG4gICAgdmFyIGRpdmlkZXIgPSBmcmFnbWVudHMuaW5kZXhPZihmaW5kKGZyYWdtZW50cywgZnVuY3Rpb24gKGZyYWcpIHtcbiAgICAgIHJldHVybiBmcmFnLnNlYXJjaCgvLHxcXHMvKSAhPT0gLTE7XG4gICAgfSkpO1xuXG4gICAgaWYgKGZyYWdtZW50c1tkaXZpZGVyXSAmJiBmcmFnbWVudHNbZGl2aWRlcl0uaW5kZXhPZignLCcpID09PSAtMSkge1xuICAgICAgY29uc29sZS53YXJuKCdPZmZzZXRzIHNlcGFyYXRlZCBieSB3aGl0ZSBzcGFjZShzKSBhcmUgZGVwcmVjYXRlZCwgdXNlIGEgY29tbWEgKCwpIGluc3RlYWQuJyk7XG4gICAgfVxuXG4gICAgLy8gSWYgZGl2aWRlciBpcyBmb3VuZCwgd2UgZGl2aWRlIHRoZSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHMgdG8gZGl2aWRlXG4gICAgLy8gdGhlbSBieSBvZnNldCBYIGFuZCBZLlxuICAgIHZhciBzcGxpdFJlZ2V4ID0gL1xccyosXFxzKnxcXHMrLztcbiAgICB2YXIgb3BzID0gZGl2aWRlciAhPT0gLTEgPyBbZnJhZ21lbnRzLnNsaWNlKDAsIGRpdmlkZXIpLmNvbmNhdChbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzBdXSksIFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMV1dLmNvbmNhdChmcmFnbWVudHMuc2xpY2UoZGl2aWRlciArIDEpKV0gOiBbZnJhZ21lbnRzXTtcblxuICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlcyB3aXRoIHVuaXRzIHRvIGFic29sdXRlIHBpeGVscyB0byBhbGxvdyBvdXIgY29tcHV0YXRpb25zXG4gICAgb3BzID0gb3BzLm1hcChmdW5jdGlvbiAob3AsIGluZGV4KSB7XG4gICAgICAvLyBNb3N0IG9mIHRoZSB1bml0cyByZWx5IG9uIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcG9wcGVyXG4gICAgICB2YXIgbWVhc3VyZW1lbnQgPSAoaW5kZXggPT09IDEgPyAhdXNlSGVpZ2h0IDogdXNlSGVpZ2h0KSA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICAgIHZhciBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIG9wXG4gICAgICAvLyBUaGlzIGFnZ3JlZ2F0ZXMgYW55IGArYCBvciBgLWAgc2lnbiB0aGF0IGFyZW4ndCBjb25zaWRlcmVkIG9wZXJhdG9yc1xuICAgICAgLy8gZS5nLjogMTAgKyArNSA9PiBbMTAsICssICs1XVxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYVthLmxlbmd0aCAtIDFdID09PSAnJyAmJiBbJysnLCAnLSddLmluZGV4T2YoYikgIT09IC0xKSB7XG4gICAgICAgICAgYVthLmxlbmd0aCAtIDFdID0gYjtcbiAgICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyZ2VXaXRoUHJldmlvdXMpIHtcbiAgICAgICAgICBhW2EubGVuZ3RoIC0gMV0gKz0gYjtcbiAgICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgICAgfVxuICAgICAgfSwgW10pXG4gICAgICAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZXMgaW50byBudW1iZXIgdmFsdWVzIChpbiBweClcbiAgICAgIC5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gTG9vcCB0cm91Z2ggdGhlIG9mZnNldHMgYXJyYXlzIGFuZCBleGVjdXRlIHRoZSBvcGVyYXRpb25zXG4gICAgb3BzLmZvckVhY2goZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgICAgb3AuZm9yRWFjaChmdW5jdGlvbiAoZnJhZywgaW5kZXgyKSB7XG4gICAgICAgIGlmIChpc051bWVyaWMoZnJhZykpIHtcbiAgICAgICAgICBvZmZzZXRzW2luZGV4XSArPSBmcmFnICogKG9wW2luZGV4MiAtIDFdID09PSAnLScgPyAtMSA6IDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2Zmc2V0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICAgKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gICAqIEBhcmd1bWVudCB7TnVtYmVyfFN0cmluZ30gb3B0aW9ucy5vZmZzZXQ9MFxuICAgKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICAgKi9cbiAgZnVuY3Rpb24gb2Zmc2V0KGRhdGEsIF9yZWYpIHtcbiAgICB2YXIgb2Zmc2V0ID0gX3JlZi5vZmZzZXQ7XG4gICAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LFxuICAgICAgICBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gICAgdmFyIG9mZnNldHMgPSB2b2lkIDA7XG4gICAgaWYgKGlzTnVtZXJpYygrb2Zmc2V0KSkge1xuICAgICAgb2Zmc2V0cyA9IFsrb2Zmc2V0LCAwXTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0cyA9IHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyLCByZWZlcmVuY2UsIGJhc2VQbGFjZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChiYXNlUGxhY2VtZW50ID09PSAnbGVmdCcpIHtcbiAgICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICAgIHBvcHBlci5sZWZ0IC09IG9mZnNldHNbMV07XG4gICAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzFdO1xuICAgIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgICBwb3BwZXIudG9wIC09IG9mZnNldHNbMV07XG4gICAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1sxXTtcbiAgICB9XG5cbiAgICBkYXRhLnBvcHBlciA9IHBvcHBlcjtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICAgKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICAgKi9cbiAgZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGEsIG9wdGlvbnMpIHtcbiAgICB2YXIgYm91bmRhcmllc0VsZW1lbnQgPSBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50IHx8IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG5cbiAgICAvLyBJZiBvZmZzZXRQYXJlbnQgaXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSByZWFsbHkgd2FudCB0b1xuICAgIC8vIGdvIG9uZSBzdGVwIHVwIGFuZCB1c2UgdGhlIG5leHQgb2Zmc2V0UGFyZW50IGFzIHJlZmVyZW5jZSB0b1xuICAgIC8vIGF2b2lkIHRvIG1ha2UgdGhpcyBtb2RpZmllciBjb21wbGV0ZWx5IHVzZWxlc3MgYW5kIGxvb2sgbGlrZSBicm9rZW5cbiAgICBpZiAoZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UgPT09IGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gICAgICBib3VuZGFyaWVzRWxlbWVudCA9IGdldE9mZnNldFBhcmVudChib3VuZGFyaWVzRWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gICAgLy8gcmVzZXRzIHRoZSBwb3BwZXIncyBwb3NpdGlvbiBzbyB0aGF0IHRoZSBkb2N1bWVudCBzaXplIGNhbiBiZSBjYWxjdWxhdGVkIGV4Y2x1ZGluZ1xuICAgIC8vIHRoZSBzaXplIG9mIHRoZSBwb3BwZXIgZWxlbWVudCBpdHNlbGZcbiAgICB2YXIgdHJhbnNmb3JtUHJvcCA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG4gICAgdmFyIHBvcHBlclN0eWxlcyA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXG4gICAgdmFyIHRvcCA9IHBvcHBlclN0eWxlcy50b3AsXG4gICAgICAgIGxlZnQgPSBwb3BwZXJTdHlsZXMubGVmdCxcbiAgICAgICAgdHJhbnNmb3JtID0gcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdO1xuXG4gICAgcG9wcGVyU3R5bGVzLnRvcCA9ICcnO1xuICAgIHBvcHBlclN0eWxlcy5sZWZ0ID0gJyc7XG4gICAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gJyc7XG5cbiAgICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50LCBkYXRhLnBvc2l0aW9uRml4ZWQpO1xuXG4gICAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gICAgLy8gcmVzdG9yZXMgdGhlIG9yaWdpbmFsIHN0eWxlIHByb3BlcnRpZXMgYWZ0ZXIgdGhlIG9mZnNldHMgaGF2ZSBiZWVuIGNvbXB1dGVkXG4gICAgcG9wcGVyU3R5bGVzLnRvcCA9IHRvcDtcbiAgICBwb3BwZXJTdHlsZXMubGVmdCA9IGxlZnQ7XG4gICAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xuXG4gICAgb3B0aW9ucy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcblxuICAgIHZhciBvcmRlciA9IG9wdGlvbnMucHJpb3JpdHk7XG4gICAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgICB2YXIgY2hlY2sgPSB7XG4gICAgICBwcmltYXJ5OiBmdW5jdGlvbiBwcmltYXJ5KHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwb3BwZXJbcGxhY2VtZW50XTtcbiAgICAgICAgaWYgKHBvcHBlcltwbGFjZW1lbnRdIDwgYm91bmRhcmllc1twbGFjZW1lbnRdICYmICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KHBvcHBlcltwbGFjZW1lbnRdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgcGxhY2VtZW50LCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiBmdW5jdGlvbiBzZWNvbmRhcnkocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgICB2YXIgdmFsdWUgPSBwb3BwZXJbbWFpblNpZGVdO1xuICAgICAgICBpZiAocG9wcGVyW3BsYWNlbWVudF0gPiBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiYgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4ocG9wcGVyW21haW5TaWRlXSwgYm91bmRhcmllc1twbGFjZW1lbnRdIC0gKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IHBvcHBlci53aWR0aCA6IHBvcHBlci5oZWlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sIG1haW5TaWRlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgdmFyIHNpZGUgPSBbJ2xlZnQnLCAndG9wJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknO1xuICAgICAgcG9wcGVyID0gX2V4dGVuZHMoe30sIHBvcHBlciwgY2hlY2tbc2lkZV0ocGxhY2VtZW50KSk7XG4gICAgfSk7XG5cbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gcG9wcGVyO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICAgKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAgICovXG4gIGZ1bmN0aW9uIHNoaWZ0KGRhdGEpIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICB2YXIgc2hpZnR2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICAgIC8vIGlmIHNoaWZ0IHNoaWZ0dmFyaWF0aW9uIGlzIHNwZWNpZmllZCwgcnVuIHRoZSBtb2RpZmllclxuICAgIGlmIChzaGlmdHZhcmlhdGlvbikge1xuICAgICAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXI7XG5cbiAgICAgIHZhciBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgICB2YXIgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgIHZhciBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgICAgIHZhciBzaGlmdE9mZnNldHMgPSB7XG4gICAgICAgIHN0YXJ0OiBkZWZpbmVQcm9wZXJ0eSh7fSwgc2lkZSwgcmVmZXJlbmNlW3NpZGVdKSxcbiAgICAgICAgZW5kOiBkZWZpbmVQcm9wZXJ0eSh7fSwgc2lkZSwgcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW21lYXN1cmVtZW50XSAtIHBvcHBlclttZWFzdXJlbWVudF0pXG4gICAgICB9O1xuXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gX2V4dGVuZHMoe30sIHBvcHBlciwgc2hpZnRPZmZzZXRzW3NoaWZ0dmFyaWF0aW9uXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gICAqL1xuICBmdW5jdGlvbiBoaWRlKGRhdGEpIHtcbiAgICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2hpZGUnLCAncHJldmVudE92ZXJmbG93JykpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHZhciByZWZSZWN0ID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcbiAgICB2YXIgYm91bmQgPSBmaW5kKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAncHJldmVudE92ZXJmbG93JztcbiAgICB9KS5ib3VuZGFyaWVzO1xuXG4gICAgaWYgKHJlZlJlY3QuYm90dG9tIDwgYm91bmQudG9wIHx8IHJlZlJlY3QubGVmdCA+IGJvdW5kLnJpZ2h0IHx8IHJlZlJlY3QudG9wID4gYm91bmQuYm90dG9tIHx8IHJlZlJlY3QucmlnaHQgPCBib3VuZC5sZWZ0KSB7XG4gICAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICAgIGlmIChkYXRhLmhpZGUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIGRhdGEuaGlkZSA9IHRydWU7XG4gICAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICAgIGlmIChkYXRhLmhpZGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICBkYXRhLmhpZGUgPSBmYWxzZTtcbiAgICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAgICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICAgKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAgICovXG4gIGZ1bmN0aW9uIGlubmVyKGRhdGEpIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gICAgdmFyIGlzSG9yaXogPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIHZhciBzdWJ0cmFjdExlbmd0aCA9IFsndG9wJywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID09PSAtMTtcblxuICAgIHBvcHBlcltpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCddID0gcmVmZXJlbmNlW2Jhc2VQbGFjZW1lbnRdIC0gKHN1YnRyYWN0TGVuZ3RoID8gcG9wcGVyW2lzSG9yaXogPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMCk7XG5cbiAgICBkYXRhLnBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QocG9wcGVyKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIGZ1bmN0aW9uLCBlYWNoIG1vZGlmaWVyIGNhbiBoYXZlIGEgZnVuY3Rpb24gb2YgdGhpcyB0eXBlIGFzc2lnbmVkXG4gICAqIHRvIGl0cyBgZm5gIHByb3BlcnR5LjxiciAvPlxuICAgKiBUaGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQgb24gZWFjaCB1cGRhdGUsIHRoaXMgbWVhbnMgdGhhdCB5b3UgbXVzdFxuICAgKiBtYWtlIHN1cmUgdGhleSBhcmUgcGVyZm9ybWFudCBlbm91Z2ggdG8gYXZvaWQgcGVyZm9ybWFuY2UgYm90dGxlbmVja3MuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBNb2RpZmllckZuXG4gICAqIEBhcmd1bWVudCB7ZGF0YU9iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gICAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAgICogQHJldHVybnMge2RhdGFPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAgICovXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVycyBhcmUgcGx1Z2lucyB1c2VkIHRvIGFsdGVyIHRoZSBiZWhhdmlvciBvZiB5b3VyIHBvcHBlcnMuPGJyIC8+XG4gICAqIFBvcHBlci5qcyB1c2VzIGEgc2V0IG9mIDkgbW9kaWZpZXJzIHRvIHByb3ZpZGUgYWxsIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXNcbiAgICogbmVlZGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICAgKlxuICAgKiBVc3VhbGx5IHlvdSBkb24ndCB3YW50IHRvIG92ZXJyaWRlIHRoZSBgb3JkZXJgLCBgZm5gIGFuZCBgb25Mb2FkYCBwcm9wcy5cbiAgICogQWxsIHRoZSBvdGhlciBwcm9wZXJ0aWVzIGFyZSBjb25maWd1cmF0aW9ucyB0aGF0IGNvdWxkIGJlIHR3ZWFrZWQuXG4gICAqIEBuYW1lc3BhY2UgbW9kaWZpZXJzXG4gICAqL1xuICB2YXIgbW9kaWZpZXJzID0ge1xuICAgIC8qKlxuICAgICAqIE1vZGlmaWVyIHVzZWQgdG8gc2hpZnQgdGhlIHBvcHBlciBvbiB0aGUgc3RhcnQgb3IgZW5kIG9mIGl0cyByZWZlcmVuY2VcbiAgICAgKiBlbGVtZW50LjxiciAvPlxuICAgICAqIEl0IHdpbGwgcmVhZCB0aGUgdmFyaWF0aW9uIG9mIHRoZSBgcGxhY2VtZW50YCBwcm9wZXJ0eS48YnIgLz5cbiAgICAgKiBJdCBjYW4gYmUgb25lIGVpdGhlciBgLWVuZGAgb3IgYC1zdGFydGAuXG4gICAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIHNoaWZ0OiB7XG4gICAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgICAgb3JkZXI6IDEwMCxcbiAgICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgICBmbjogc2hpZnRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGBvZmZzZXRgIG1vZGlmaWVyIGNhbiBzaGlmdCB5b3VyIHBvcHBlciBvbiBib3RoIGl0cyBheGlzLlxuICAgICAqXG4gICAgICogSXQgYWNjZXB0cyB0aGUgZm9sbG93aW5nIHVuaXRzOlxuICAgICAqIC0gYHB4YCBvciB1bml0LWxlc3MsIGludGVycHJldGVkIGFzIHBpeGVsc1xuICAgICAqIC0gYCVgIG9yIGAlcmAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICAgKiAtIGAlcGAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICAgKiAtIGB2d2AsIENTUyB2aWV3cG9ydCB3aWR0aCB1bml0XG4gICAgICogLSBgdmhgLCBDU1Mgdmlld3BvcnQgaGVpZ2h0IHVuaXRcbiAgICAgKlxuICAgICAqIEZvciBsZW5ndGggaXMgaW50ZW5kZWQgdGhlIG1haW4gYXhpcyByZWxhdGl2ZSB0byB0aGUgcGxhY2VtZW50IG9mIHRoZSBwb3BwZXIuPGJyIC8+XG4gICAgICogVGhpcyBtZWFucyB0aGF0IGlmIHRoZSBwbGFjZW1lbnQgaXMgYHRvcGAgb3IgYGJvdHRvbWAsIHRoZSBsZW5ndGggd2lsbCBiZSB0aGVcbiAgICAgKiBgd2lkdGhgLiBJbiBjYXNlIG9mIGBsZWZ0YCBvciBgcmlnaHRgLCBpdCB3aWxsIGJlIHRoZSBgaGVpZ2h0YC5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gcHJvdmlkZSBhIHNpbmdsZSB2YWx1ZSAoYXMgYE51bWJlcmAgb3IgYFN0cmluZ2ApLCBvciBhIHBhaXIgb2YgdmFsdWVzXG4gICAgICogYXMgYFN0cmluZ2AgZGl2aWRlZCBieSBhIGNvbW1hIG9yIG9uZSAob3IgbW9yZSkgd2hpdGUgc3BhY2VzLjxiciAvPlxuICAgICAqIFRoZSBsYXR0ZXIgaXMgYSBkZXByZWNhdGVkIG1ldGhvZCBiZWNhdXNlIGl0IGxlYWRzIHRvIGNvbmZ1c2lvbiBhbmQgd2lsbCBiZVxuICAgICAqIHJlbW92ZWQgaW4gdjIuPGJyIC8+XG4gICAgICogQWRkaXRpb25hbGx5LCBpdCBhY2NlcHRzIGFkZGl0aW9ucyBhbmQgc3VidHJhY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IHVuaXRzLlxuICAgICAqIE5vdGUgdGhhdCBtdWx0aXBsaWNhdGlvbnMgYW5kIGRpdmlzaW9ucyBhcmVuJ3Qgc3VwcG9ydGVkLlxuICAgICAqXG4gICAgICogVmFsaWQgZXhhbXBsZXMgYXJlOlxuICAgICAqIGBgYFxuICAgICAqIDEwXG4gICAgICogJzEwJSdcbiAgICAgKiAnMTAsIDEwJ1xuICAgICAqICcxMCUsIDEwJ1xuICAgICAqICcxMCArIDEwJSdcbiAgICAgKiAnMTAgLSA1dmggKyAzJSdcbiAgICAgKiAnLTEwcHggKyA1dmgsIDVweCAtIDYlJ1xuICAgICAqIGBgYFxuICAgICAqID4gKipOQioqOiBJZiB5b3UgZGVzaXJlIHRvIGFwcGx5IG9mZnNldHMgdG8geW91ciBwb3BwZXJzIGluIGEgd2F5IHRoYXQgbWF5IG1ha2UgdGhlbSBvdmVybGFwXG4gICAgICogPiB3aXRoIHRoZWlyIHJlZmVyZW5jZSBlbGVtZW50LCB1bmZvcnR1bmF0ZWx5LCB5b3Ugd2lsbCBoYXZlIHRvIGRpc2FibGUgdGhlIGBmbGlwYCBtb2RpZmllci5cbiAgICAgKiA+IFlvdSBjYW4gcmVhZCBtb3JlIG9uIHRoaXMgYXQgdGhpcyBbaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL2lzc3Vlcy8zNzMpLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIG9mZnNldDoge1xuICAgICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTIwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICAgIG9yZGVyOiAyMDAsXG4gICAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgICAgZm46IG9mZnNldCxcbiAgICAgIC8qKiBAcHJvcCB7TnVtYmVyfFN0cmluZ30gb2Zmc2V0PTBcbiAgICAgICAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICAgICAgICovXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW9kaWZpZXIgdXNlZCB0byBwcmV2ZW50IHRoZSBwb3BwZXIgZnJvbSBiZWluZyBwb3NpdGlvbmVkIG91dHNpZGUgdGhlIGJvdW5kYXJ5LlxuICAgICAqXG4gICAgICogQSBzY2VuYXJpbyBleGlzdHMgd2hlcmUgdGhlIHJlZmVyZW5jZSBpdHNlbGYgaXMgbm90IHdpdGhpbiB0aGUgYm91bmRhcmllcy48YnIgLz5cbiAgICAgKiBXZSBjYW4gc2F5IGl0IGhhcyBcImVzY2FwZWQgdGhlIGJvdW5kYXJpZXNcIiDigJQgb3IganVzdCBcImVzY2FwZWRcIi48YnIgLz5cbiAgICAgKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBkZWNpZGUgd2hldGhlciB0aGUgcG9wcGVyIHNob3VsZCBlaXRoZXI6XG4gICAgICpcbiAgICAgKiAtIGRldGFjaCBmcm9tIHRoZSByZWZlcmVuY2UgYW5kIHJlbWFpbiBcInRyYXBwZWRcIiBpbiB0aGUgYm91bmRhcmllcywgb3JcbiAgICAgKiAtIGlmIGl0IHNob3VsZCBpZ25vcmUgdGhlIGJvdW5kYXJ5IGFuZCBcImVzY2FwZSB3aXRoIGl0cyByZWZlcmVuY2VcIlxuICAgICAqXG4gICAgICogV2hlbiBgZXNjYXBlV2l0aFJlZmVyZW5jZWAgaXMgc2V0IHRvYHRydWVgIGFuZCByZWZlcmVuY2UgaXMgY29tcGxldGVseVxuICAgICAqIG91dHNpZGUgaXRzIGJvdW5kYXJpZXMsIHRoZSBwb3BwZXIgd2lsbCBvdmVyZmxvdyAob3IgY29tcGxldGVseSBsZWF2ZSlcbiAgICAgKiB0aGUgYm91bmRhcmllcyBpbiBvcmRlciB0byByZW1haW4gYXR0YWNoZWQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHJlZmVyZW5jZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0zMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgICBvcmRlcjogMzAwLFxuICAgICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICAgIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gICAgICAvKipcbiAgICAgICAqIEBwcm9wIHtBcnJheX0gW3ByaW9yaXR5PVsnbGVmdCcsJ3JpZ2h0JywndG9wJywnYm90dG9tJ11dXG4gICAgICAgKiBQb3BwZXIgd2lsbCB0cnkgdG8gcHJldmVudCBvdmVyZmxvdyBmb2xsb3dpbmcgdGhlc2UgcHJpb3JpdGllcyBieSBkZWZhdWx0LFxuICAgICAgICogdGhlbiwgaXQgY291bGQgb3ZlcmZsb3cgb24gdGhlIGxlZnQgYW5kIG9uIHRvcCBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAgICovXG4gICAgICBwcmlvcml0eTogWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXSxcbiAgICAgIC8qKlxuICAgICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICAgKiBBbW91bnQgb2YgcGl4ZWwgdXNlZCB0byBkZWZpbmUgYSBtaW5pbXVtIGRpc3RhbmNlIGJldHdlZW4gdGhlIGJvdW5kYXJpZXNcbiAgICAgICAqIGFuZCB0aGUgcG9wcGVyLiBUaGlzIG1ha2VzIHN1cmUgdGhlIHBvcHBlciBhbHdheXMgaGFzIGEgbGl0dGxlIHBhZGRpbmdcbiAgICAgICAqIGJldHdlZW4gdGhlIGVkZ2VzIG9mIGl0cyBjb250YWluZXJcbiAgICAgICAqL1xuICAgICAgcGFkZGluZzogNSxcbiAgICAgIC8qKlxuICAgICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3Njcm9sbFBhcmVudCdcbiAgICAgICAqIEJvdW5kYXJpZXMgdXNlZCBieSB0aGUgbW9kaWZpZXIuIENhbiBiZSBgc2Nyb2xsUGFyZW50YCwgYHdpbmRvd2AsXG4gICAgICAgKiBgdmlld3BvcnRgIG9yIGFueSBET00gZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgYm91bmRhcmllc0VsZW1lbnQ6ICdzY3JvbGxQYXJlbnQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSBzdXJlIHRoZSByZWZlcmVuY2UgYW5kIGl0cyBwb3BwZXIgc3RheSBuZWFyIGVhY2ggb3RoZXJcbiAgICAgKiB3aXRob3V0IGxlYXZpbmcgYW55IGdhcCBiZXR3ZWVuIHRoZSB0d28uIEVzcGVjaWFsbHkgdXNlZnVsIHdoZW4gdGhlIGFycm93IGlzXG4gICAgICogZW5hYmxlZCBhbmQgeW91IHdhbnQgdG8gZW5zdXJlIHRoYXQgaXQgcG9pbnRzIHRvIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICAgKiBJdCBjYXJlcyBvbmx5IGFib3V0IHRoZSBmaXJzdCBheGlzLiBZb3UgY2FuIHN0aWxsIGhhdmUgcG9wcGVycyB3aXRoIG1hcmdpblxuICAgICAqIGJldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBrZWVwVG9nZXRoZXI6IHtcbiAgICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj00MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgICBvcmRlcjogNDAwLFxuICAgICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICAgIGZuOiBrZWVwVG9nZXRoZXJcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtb2RpZmllciBpcyB1c2VkIHRvIG1vdmUgdGhlIGBhcnJvd0VsZW1lbnRgIG9mIHRoZSBwb3BwZXIgdG8gbWFrZVxuICAgICAqIHN1cmUgaXQgaXMgcG9zaXRpb25lZCBiZXR3ZWVuIHRoZSByZWZlcmVuY2UgZWxlbWVudCBhbmQgaXRzIHBvcHBlciBlbGVtZW50LlxuICAgICAqIEl0IHdpbGwgcmVhZCB0aGUgb3V0ZXIgc2l6ZSBvZiB0aGUgYGFycm93RWxlbWVudGAgbm9kZSB0byBkZXRlY3QgaG93IG1hbnlcbiAgICAgKiBwaXhlbHMgb2YgY29uanVuY3Rpb24gYXJlIG5lZWRlZC5cbiAgICAgKlxuICAgICAqIEl0IGhhcyBubyBlZmZlY3QgaWYgbm8gYGFycm93RWxlbWVudGAgaXMgcHJvdmlkZWQuXG4gICAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGFycm93OiB7XG4gICAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgICAgb3JkZXI6IDUwMCxcbiAgICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgICBmbjogYXJyb3csXG4gICAgICAvKiogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gZWxlbWVudD0nW3gtYXJyb3ddJyAtIFNlbGVjdG9yIG9yIG5vZGUgdXNlZCBhcyBhcnJvdyAqL1xuICAgICAgZWxlbWVudDogJ1t4LWFycm93XSdcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW9kaWZpZXIgdXNlZCB0byBmbGlwIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQgd2hlbiBpdCBzdGFydHMgdG8gb3ZlcmxhcCBpdHNcbiAgICAgKiByZWZlcmVuY2UgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICAgKlxuICAgICAqICoqTk9URToqKiB0aGlzIG1vZGlmaWVyIHdpbGwgaW50ZXJydXB0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZSBhbmQgd2lsbFxuICAgICAqIHJlc3RhcnQgaXQgaWYgaXQgZGV0ZWN0cyB0aGUgbmVlZCB0byBmbGlwIHRoZSBwbGFjZW1lbnQuXG4gICAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZsaXA6IHtcbiAgICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj02MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgICBvcmRlcjogNjAwLFxuICAgICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICAgIGZuOiBmbGlwLFxuICAgICAgLyoqXG4gICAgICAgKiBAcHJvcCB7U3RyaW5nfEFycmF5fSBiZWhhdmlvcj0nZmxpcCdcbiAgICAgICAqIFRoZSBiZWhhdmlvciB1c2VkIHRvIGNoYW5nZSB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50LiBJdCBjYW4gYmUgb25lIG9mXG4gICAgICAgKiBgZmxpcGAsIGBjbG9ja3dpc2VgLCBgY291bnRlcmNsb2Nrd2lzZWAgb3IgYW4gYXJyYXkgd2l0aCBhIGxpc3Qgb2YgdmFsaWRcbiAgICAgICAqIHBsYWNlbWVudHMgKHdpdGggb3B0aW9uYWwgdmFyaWF0aW9ucylcbiAgICAgICAqL1xuICAgICAgYmVoYXZpb3I6ICdmbGlwJyxcbiAgICAgIC8qKlxuICAgICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICAgKiBUaGUgcG9wcGVyIHdpbGwgZmxpcCBpZiBpdCBoaXRzIHRoZSBlZGdlcyBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAgICovXG4gICAgICBwYWRkaW5nOiA1LFxuICAgICAgLyoqXG4gICAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0ndmlld3BvcnQnXG4gICAgICAgKiBUaGUgZWxlbWVudCB3aGljaCB3aWxsIGRlZmluZSB0aGUgYm91bmRhcmllcyBvZiB0aGUgcG9wcGVyIHBvc2l0aW9uLlxuICAgICAgICogVGhlIHBvcHBlciB3aWxsIG5ldmVyIGJlIHBsYWNlZCBvdXRzaWRlIG9mIHRoZSBkZWZpbmVkIGJvdW5kYXJpZXNcbiAgICAgICAqIChleGNlcHQgaWYgYGtlZXBUb2dldGhlcmAgaXMgZW5hYmxlZClcbiAgICAgICAqL1xuICAgICAgYm91bmRhcmllc0VsZW1lbnQ6ICd2aWV3cG9ydCdcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHRoZSBwb3BwZXIgZmxvdyB0b3dhcmQgdGhlIGlubmVyIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICAgKiBCeSBkZWZhdWx0LCB3aGVuIHRoaXMgbW9kaWZpZXIgaXMgZGlzYWJsZWQsIHRoZSBwb3BwZXIgd2lsbCBiZSBwbGFjZWQgb3V0c2lkZVxuICAgICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgaW5uZXI6IHtcbiAgICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj03MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgICBvcmRlcjogNzAwLFxuICAgICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPWZhbHNlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgICAgZm46IGlubmVyXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vZGlmaWVyIHVzZWQgdG8gaGlkZSB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dHNpZGUgb2YgdGhlXG4gICAgICogcG9wcGVyIGJvdW5kYXJpZXMuIEl0IHdpbGwgc2V0IGEgYHgtb3V0LW9mLWJvdW5kYXJpZXNgIGF0dHJpYnV0ZSB3aGljaCBjYW5cbiAgICAgKiBiZSB1c2VkIHRvIGhpZGUgd2l0aCBhIENTUyBzZWxlY3RvciB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBpc1xuICAgICAqIG91dCBvZiBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBoaWRlOiB7XG4gICAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgICAgb3JkZXI6IDgwMCxcbiAgICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgICBmbjogaGlkZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgc3R5bGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50IHRvIGdldHNcbiAgICAgKiBwcm9wZXJseSBwb3NpdGlvbmVkLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHRoaXMgbW9kaWZpZXIgd2lsbCBub3QgdG91Y2ggdGhlIERPTSwgaXQganVzdCBwcmVwYXJlcyB0aGUgc3R5bGVzXG4gICAgICogc28gdGhhdCBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgY2FuIGFwcGx5IGl0LiBUaGlzIHNlcGFyYXRpb24gaXMgdXNlZnVsXG4gICAgICogaW4gY2FzZSB5b3UgbmVlZCB0byByZXBsYWNlIGBhcHBseVN0eWxlYCB3aXRoIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uLlxuICAgICAqXG4gICAgICogVGhpcyBtb2RpZmllciBoYXMgYDg1MGAgYXMgYG9yZGVyYCB2YWx1ZSB0byBtYWludGFpbiBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICogd2l0aCBwcmV2aW91cyB2ZXJzaW9ucyBvZiBQb3BwZXIuanMuIEV4cGVjdCB0aGUgbW9kaWZpZXJzIG9yZGVyaW5nIG1ldGhvZFxuICAgICAqIHRvIGNoYW5nZSBpbiBmdXR1cmUgbWFqb3IgdmVyc2lvbnMgb2YgdGhlIGxpYnJhcnkuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgY29tcHV0ZVN0eWxlOiB7XG4gICAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODUwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgICAgb3JkZXI6IDg1MCxcbiAgICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgICBmbjogY29tcHV0ZVN0eWxlLFxuICAgICAgLyoqXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzRCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICAgKi9cbiAgICAgIGdwdUFjY2VsZXJhdGlvbjogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICogQHByb3Age3N0cmluZ30gW3g9J2JvdHRvbSddXG4gICAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFggYXhpcyAoYGJvdHRvbWAgb3IgYHRvcGApLiBBS0EgWCBvZmZzZXQgb3JpZ2luLlxuICAgICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYGJvdHRvbWBcbiAgICAgICAqL1xuICAgICAgeDogJ2JvdHRvbScsXG4gICAgICAvKipcbiAgICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdsZWZ0J11cbiAgICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWSBheGlzIChgbGVmdGAgb3IgYHJpZ2h0YCkuIEFLQSBZIG9mZnNldCBvcmlnaW4uXG4gICAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgcmlnaHRgXG4gICAgICAgKi9cbiAgICAgIHk6ICdyaWdodCdcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgY29tcHV0ZWQgc3R5bGVzIHRvIHRoZSBwb3BwZXIgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgYXJlIGxpbWl0ZWQgdG8gdGhpcyBtb2RpZmllci4gVGhpcyBpcyB1c2VmdWwgaW4gY2FzZVxuICAgICAqIHlvdSB3YW50IHRvIGludGVncmF0ZSBQb3BwZXIuanMgaW5zaWRlIGEgZnJhbWV3b3JrIG9yIHZpZXcgbGlicmFyeSBhbmQgeW91XG4gICAgICogd2FudCB0byBkZWxlZ2F0ZSBhbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIHRvIGl0LlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IGlmIHlvdSBkaXNhYmxlIHRoaXMgbW9kaWZpZXIsIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICAgKiBoYXMgaXRzIHBvc2l0aW9uIHNldCB0byBgYWJzb2x1dGVgIGJlZm9yZSBQb3BwZXIuanMgY2FuIGRvIGl0cyB3b3JrIVxuICAgICAqXG4gICAgICogSnVzdCBkaXNhYmxlIHRoaXMgbW9kaWZpZXIgYW5kIGRlZmluZSB5b3VyIG93biB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBhcHBseVN0eWxlOiB7XG4gICAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9OTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgICAgb3JkZXI6IDkwMCxcbiAgICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgICBmbjogYXBwbHlTdHlsZSxcbiAgICAgIC8qKiBAcHJvcCB7RnVuY3Rpb259ICovXG4gICAgICBvbkxvYWQ6IGFwcGx5U3R5bGVPbkxvYWQsXG4gICAgICAvKipcbiAgICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4xMC4wLCB0aGUgcHJvcGVydHkgbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXJcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgICAqL1xuICAgICAgZ3B1QWNjZWxlcmF0aW9uOiB1bmRlZmluZWRcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSBgZGF0YU9iamVjdGAgaXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBpbmZvcm1hdGlvbiB1c2VkIGJ5IFBvcHBlci5qcy5cbiAgICogVGhpcyBvYmplY3QgaXMgcGFzc2VkIHRvIG1vZGlmaWVycyBhbmQgdG8gdGhlIGBvbkNyZWF0ZWAgYW5kIGBvblVwZGF0ZWAgY2FsbGJhY2tzLlxuICAgKiBAbmFtZSBkYXRhT2JqZWN0XG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmluc3RhbmNlIFRoZSBQb3BwZXIuanMgaW5zdGFuY2VcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEucGxhY2VtZW50IFBsYWNlbWVudCBhcHBsaWVkIHRvIHBvcHBlclxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCBQbGFjZW1lbnQgb3JpZ2luYWxseSBkZWZpbmVkIG9uIGluaXRcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmZsaXBwZWQgVHJ1ZSBpZiBwb3BwZXIgaGFzIGJlZW4gZmxpcHBlZCBieSBmbGlwIG1vZGlmaWVyXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5oaWRlIFRydWUgaWYgdGhlIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dCBvZiBib3VuZGFyaWVzLCB1c2VmdWwgdG8ga25vdyB3aGVuIHRvIGhpZGUgdGhlIHBvcHBlclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBkYXRhLmFycm93RWxlbWVudCBOb2RlIHVzZWQgYXMgYXJyb3cgYnkgYXJyb3cgbW9kaWZpZXJcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuc3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICAgKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5hcnJvd1N0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBhcnJvdy4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYm91bmRhcmllcyBPZmZzZXRzIG9mIHRoZSBwb3BwZXIgYm91bmRhcmllc1xuICAgKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzIFRoZSBtZWFzdXJlbWVudHMgb2YgcG9wcGVyLCByZWZlcmVuY2UgYW5kIGFycm93IGVsZW1lbnRzXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucG9wcGVyIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICAgKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5hcnJvd10gYHRvcGAgYW5kIGBsZWZ0YCBvZmZzZXRzLCBvbmx5IG9uZSBvZiB0aGVtIHdpbGwgYmUgZGlmZmVyZW50IGZyb20gMFxuICAgKi9cblxuICAvKipcbiAgICogRGVmYXVsdCBvcHRpb25zIHByb3ZpZGVkIHRvIFBvcHBlci5qcyBjb25zdHJ1Y3Rvci48YnIgLz5cbiAgICogVGhlc2UgY2FuIGJlIG92ZXJyaWRkZW4gdXNpbmcgdGhlIGBvcHRpb25zYCBhcmd1bWVudCBvZiBQb3BwZXIuanMuPGJyIC8+XG4gICAqIFRvIG92ZXJyaWRlIGFuIG9wdGlvbiwgc2ltcGx5IHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWVcbiAgICogc3RydWN0dXJlIG9mIHRoZSBgb3B0aW9uc2Agb2JqZWN0LCBhcyB0aGUgM3JkIGFyZ3VtZW50LiBGb3IgZXhhbXBsZTpcbiAgICogYGBgXG4gICAqIG5ldyBQb3BwZXIocmVmLCBwb3AsIHtcbiAgICogICBtb2RpZmllcnM6IHtcbiAgICogICAgIHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9XG4gICAqICAgfVxuICAgKiB9KVxuICAgKiBgYGBcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICB2YXIgRGVmYXVsdHMgPSB7XG4gICAgLyoqXG4gICAgICogUG9wcGVyJ3MgcGxhY2VtZW50LlxuICAgICAqIEBwcm9wIHtQb3BwZXIucGxhY2VtZW50c30gcGxhY2VtZW50PSdib3R0b20nXG4gICAgICovXG4gICAgcGxhY2VtZW50OiAnYm90dG9tJyxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIHRvIHRydWUgaWYgeW91IHdhbnQgcG9wcGVyIHRvIHBvc2l0aW9uIGl0IHNlbGYgaW4gJ2ZpeGVkJyBtb2RlXG4gICAgICogQHByb3Age0Jvb2xlYW59IHBvc2l0aW9uRml4ZWQ9ZmFsc2VcbiAgICAgKi9cbiAgICBwb3NpdGlvbkZpeGVkOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgZXZlbnRzIChyZXNpemUsIHNjcm9sbCkgYXJlIGluaXRpYWxseSBlbmFibGVkLlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBldmVudHNFbmFibGVkPXRydWVcbiAgICAgKi9cbiAgICBldmVudHNFbmFibGVkOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gYXV0b21hdGljYWxseSByZW1vdmUgdGhlIHBvcHBlciB3aGVuXG4gICAgICogeW91IGNhbGwgdGhlIGBkZXN0cm95YCBtZXRob2QuXG4gICAgICogQHByb3Age0Jvb2xlYW59IHJlbW92ZU9uRGVzdHJveT1mYWxzZVxuICAgICAqL1xuICAgIHJlbW92ZU9uRGVzdHJveTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIGNyZWF0ZWQuPGJyIC8+XG4gICAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAgICogQHByb3Age29uQ3JlYXRlfVxuICAgICAqL1xuICAgIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZSgpIHt9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkLiBUaGlzIGNhbGxiYWNrIGlzIG5vdCBjYWxsZWRcbiAgICAgKiBvbiB0aGUgaW5pdGlhbGl6YXRpb24vY3JlYXRpb24gb2YgdGhlIHBvcHBlciwgYnV0IG9ubHkgb24gc3Vic2VxdWVudFxuICAgICAqIHVwZGF0ZXMuPGJyIC8+XG4gICAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAgICogQHByb3Age29uVXBkYXRlfVxuICAgICAqL1xuICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZSgpIHt9LFxuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBtb2RpZmllcnMgdXNlZCB0byBtb2RpZnkgdGhlIG9mZnNldHMgYmVmb3JlIHRoZXkgYXJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci5cbiAgICAgKiBUaGV5IHByb3ZpZGUgbW9zdCBvZiB0aGUgZnVuY3Rpb25hbGl0aWVzIG9mIFBvcHBlci5qcy5cbiAgICAgKiBAcHJvcCB7bW9kaWZpZXJzfVxuICAgICAqL1xuICAgIG1vZGlmaWVyczogbW9kaWZpZXJzXG4gIH07XG5cbiAgLyoqXG4gICAqIEBjYWxsYmFjayBvbkNyZWF0ZVxuICAgKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAgICovXG5cbiAgLyoqXG4gICAqIEBjYWxsYmFjayBvblVwZGF0ZVxuICAgKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAgICovXG5cbiAgLy8gVXRpbHNcbiAgLy8gTWV0aG9kc1xuICB2YXIgUG9wcGVyID0gZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgUG9wcGVyLmpzIGluc3RhbmNlLlxuICAgICAqIEBjbGFzcyBQb3BwZXJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fHJlZmVyZW5jZU9iamVjdH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyB0aGUgcG9wcGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBZb3VyIGN1c3RvbSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBvbmVzIGRlZmluZWQgaW4gW0RlZmF1bHRzXSgjZGVmYXVsdHMpXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBpbnN0YW5jZSAtIFRoZSBnZW5lcmF0ZWQgUG9wcGVyLmpzIGluc3RhbmNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQb3BwZXIpO1xuXG4gICAgICB0aGlzLnNjaGVkdWxlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90aGlzLnVwZGF0ZSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBtYWtlIHVwZGF0ZSgpIGRlYm91bmNlZCwgc28gdGhhdCBpdCBvbmx5IHJ1bnMgYXQgbW9zdCBvbmNlLXBlci10aWNrXG4gICAgICB0aGlzLnVwZGF0ZSA9IGRlYm91bmNlKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgICAvLyB3aXRoIHt9IHdlIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3B0aW9ucyBpbnNpZGUgaXRcbiAgICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBQb3BwZXIuRGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBpbml0IHN0YXRlXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgICAgIGlzQ3JlYXRlZDogZmFsc2UsXG4gICAgICAgIHNjcm9sbFBhcmVudHM6IFtdXG4gICAgICB9O1xuXG4gICAgICAvLyBnZXQgcmVmZXJlbmNlIGFuZCBwb3BwZXIgZWxlbWVudHMgKGFsbG93IGpRdWVyeSB3cmFwcGVycylcbiAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5qcXVlcnkgPyByZWZlcmVuY2VbMF0gOiByZWZlcmVuY2U7XG4gICAgICB0aGlzLnBvcHBlciA9IHBvcHBlciAmJiBwb3BwZXIuanF1ZXJ5ID8gcG9wcGVyWzBdIDogcG9wcGVyO1xuXG4gICAgICAvLyBEZWVwIG1lcmdlIG1vZGlmaWVycyBvcHRpb25zXG4gICAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzID0ge307XG4gICAgICBPYmplY3Qua2V5cyhfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVycywgb3B0aW9ucy5tb2RpZmllcnMpKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIF90aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdID0gX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnNbbmFtZV0gfHwge30sIG9wdGlvbnMubW9kaWZpZXJzID8gb3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gOiB7fSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVmYWN0b3JpbmcgbW9kaWZpZXJzJyBsaXN0IChPYmplY3QgPT4gQXJyYXkpXG4gICAgICB0aGlzLm1vZGlmaWVycyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tb2RpZmllcnMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgfSwgX3RoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0pO1xuICAgICAgfSlcbiAgICAgIC8vIHNvcnQgdGhlIG1vZGlmaWVycyBieSBvcmRlclxuICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIG1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgd2hlbiBQb3BwZXIuanMgZ2V0IGluaXRlZFxuICAgICAgLy8gc3VjaCBjb2RlIGlzIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIG9mIGl0cyBtb2RpZmllclxuICAgICAgLy8gdGhleSBjb3VsZCBhZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlaXIgb3B0aW9ucyBjb25maWd1cmF0aW9uXG4gICAgICAvLyBCRSBBV0FSRTogZG9uJ3QgYWRkIG9wdGlvbnMgdG8gYG9wdGlvbnMubW9kaWZpZXJzLm5hbWVgIGJ1dCB0byBgbW9kaWZpZXJPcHRpb25zYCFcbiAgICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyT3B0aW9ucykge1xuICAgICAgICBpZiAobW9kaWZpZXJPcHRpb25zLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihtb2RpZmllck9wdGlvbnMub25Mb2FkKSkge1xuICAgICAgICAgIG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQoX3RoaXMucmVmZXJlbmNlLCBfdGhpcy5wb3BwZXIsIF90aGlzLm9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgX3RoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gZmlyZSB0aGUgZmlyc3QgdXBkYXRlIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICB2YXIgZXZlbnRzRW5hYmxlZCA9IHRoaXMub3B0aW9ucy5ldmVudHNFbmFibGVkO1xuICAgICAgaWYgKGV2ZW50c0VuYWJsZWQpIHtcbiAgICAgICAgLy8gc2V0dXAgZXZlbnQgbGlzdGVuZXJzLCB0aGV5IHdpbGwgdGFrZSBjYXJlIG9mIHVwZGF0ZSB0aGUgcG9zaXRpb24gaW4gc3BlY2lmaWMgc2l0dWF0aW9uc1xuICAgICAgICB0aGlzLmVuYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGV2ZW50c0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgLy8gV2UgY2FuJ3QgdXNlIGNsYXNzIHByb3BlcnRpZXMgYmVjYXVzZSB0aGV5IGRvbid0IGdldCBsaXN0ZWQgaW4gdGhlXG4gICAgLy8gY2xhc3MgcHJvdG90eXBlIGFuZCBicmVhayBzdHVmZiBsaWtlIFNpbm9uIHN0dWJzXG5cblxuICAgIGNyZWF0ZUNsYXNzKFBvcHBlciwgW3tcbiAgICAgIGtleTogJ3VwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlJCQxKCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSQkMSgpIHtcbiAgICAgICAgcmV0dXJuIGRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdlbmFibGVFdmVudExpc3RlbmVycycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlRXZlbnRMaXN0ZW5lcnMkJDEoKSB7XG4gICAgICAgIHJldHVybiBlbmFibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Rpc2FibGVFdmVudExpc3RlbmVycycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZUV2ZW50TGlzdGVuZXJzJCQxKCkge1xuICAgICAgICByZXR1cm4gZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2NoZWR1bGVzIGFuIHVwZGF0ZS4gSXQgd2lsbCBydW4gb24gdGhlIG5leHQgVUkgdXBkYXRlIGF2YWlsYWJsZS5cbiAgICAgICAqIEBtZXRob2Qgc2NoZWR1bGVVcGRhdGVcbiAgICAgICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICAgICAqL1xuXG5cbiAgICAgIC8qKlxuICAgICAgICogQ29sbGVjdGlvbiBvZiB1dGlsaXRpZXMgdXNlZnVsIHdoZW4gd3JpdGluZyBjdXN0b20gbW9kaWZpZXJzLlxuICAgICAgICogU3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDEuNywgdGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIG9ubHkgaWYgeW91XG4gICAgICAgKiBpbmNsdWRlIGBwb3BwZXItdXRpbHMuanNgIGJlZm9yZSBgcG9wcGVyLmpzYC5cbiAgICAgICAqXG4gICAgICAgKiAqKkRFUFJFQ0FUSU9OKio6IFRoaXMgd2F5IHRvIGFjY2VzcyBQb3BwZXJVdGlscyBpcyBkZXByZWNhdGVkXG4gICAgICAgKiBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHYyISBVc2UgdGhlIFBvcHBlclV0aWxzIG1vZHVsZSBkaXJlY3RseSBpbnN0ZWFkLlxuICAgICAgICogRHVlIHRvIHRoZSBoaWdoIGluc3RhYmlsaXR5IG9mIHRoZSBtZXRob2RzIGNvbnRhaW5lZCBpbiBVdGlscywgd2UgY2FuJ3RcbiAgICAgICAqIGd1YXJhbnRlZSB0aGVtIHRvIGZvbGxvdyBzZW12ZXIuIFVzZSB0aGVtIGF0IHlvdXIgb3duIHJpc2shXG4gICAgICAgKiBAc3RhdGljXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS44XG4gICAgICAgKiBAbWVtYmVyIFV0aWxzXG4gICAgICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAgICAgKi9cblxuICAgIH1dKTtcbiAgICByZXR1cm4gUG9wcGVyO1xuICB9KCk7XG5cbiAgLyoqXG4gICAqIFRoZSBgcmVmZXJlbmNlT2JqZWN0YCBpcyBhbiBvYmplY3QgdGhhdCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgY29tcGF0aWJsZSB3aXRoIFBvcHBlci5qc1xuICAgKiBhbmQgbGV0cyB5b3UgdXNlIGl0IGFzIHJlcGxhY2VtZW50IG9mIGEgcmVhbCBET00gbm9kZS48YnIgLz5cbiAgICogWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gcG9zaXRpb24gYSBwb3BwZXIgcmVsYXRpdmVseSB0byBhIHNldCBvZiBjb29yZGluYXRlc1xuICAgKiBpbiBjYXNlIHlvdSBkb24ndCBoYXZlIGEgRE9NIG5vZGUgdG8gdXNlIGFzIHJlZmVyZW5jZS5cbiAgICpcbiAgICogYGBgXG4gICAqIG5ldyBQb3BwZXIocmVmZXJlbmNlT2JqZWN0LCBwb3BwZXJOb2RlKTtcbiAgICogYGBgXG4gICAqXG4gICAqIE5COiBUaGlzIGZlYXR1cmUgaXNuJ3Qgc3VwcG9ydGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuICAgKiBAbmFtZSByZWZlcmVuY2VPYmplY3RcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZGF0YS5nZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAgICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzZXQgb2YgY29vcmRpbmF0ZXMgY29tcGF0aWJsZSB3aXRoIHRoZSBuYXRpdmUgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAgbWV0aG9kLlxuICAgKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRXaWR0aFxuICAgKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRIZWlnaHRcbiAgICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqL1xuXG5cbiAgUG9wcGVyLlV0aWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKS5Qb3BwZXJVdGlscztcbiAgUG9wcGVyLnBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuICBQb3BwZXIuRGVmYXVsdHMgPSBEZWZhdWx0cztcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkNCA9ICdkcm9wZG93bic7XG4gIHZhciBWRVJTSU9OJDQgPSAnNC4zLjEnO1xuICB2YXIgREFUQV9LRVkkNCA9ICdicy5kcm9wZG93bic7XG4gIHZhciBFVkVOVF9LRVkkNCA9IFwiLlwiICsgREFUQV9LRVkkNDtcbiAgdmFyIERBVEFfQVBJX0tFWSQ0ID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkNCA9ICQuZm5bTkFNRSQ0XTtcbiAgdmFyIEVTQ0FQRV9LRVlDT0RFID0gMjc7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIEVzY2FwZSAoRXNjKSBrZXlcblxuICB2YXIgU1BBQ0VfS0VZQ09ERSA9IDMyOyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBzcGFjZSBrZXlcblxuICB2YXIgVEFCX0tFWUNPREUgPSA5OyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB0YWIga2V5XG5cbiAgdmFyIEFSUk9XX1VQX0tFWUNPREUgPSAzODsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdXAgYXJyb3cga2V5XG5cbiAgdmFyIEFSUk9XX0RPV05fS0VZQ09ERSA9IDQwOyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBkb3duIGFycm93IGtleVxuXG4gIHZhciBSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0ggPSAzOyAvLyBNb3VzZUV2ZW50LndoaWNoIHZhbHVlIGZvciB0aGUgcmlnaHQgYnV0dG9uIChhc3N1bWluZyBhIHJpZ2h0LWhhbmRlZCBtb3VzZSlcblxuICB2YXIgUkVHRVhQX0tFWURPV04gPSBuZXcgUmVnRXhwKEFSUk9XX1VQX0tFWUNPREUgKyBcInxcIiArIEFSUk9XX0RPV05fS0VZQ09ERSArIFwifFwiICsgRVNDQVBFX0tFWUNPREUpO1xuICB2YXIgRXZlbnQkNCA9IHtcbiAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSQ0LFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSQ0LFxuICAgIFNIT1c6IFwic2hvd1wiICsgRVZFTlRfS0VZJDQsXG4gICAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWSQ0LFxuICAgIENMSUNLOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkNCxcbiAgICBDTElDS19EQVRBX0FQSTogXCJjbGlja1wiICsgRVZFTlRfS0VZJDQgKyBEQVRBX0FQSV9LRVkkNCxcbiAgICBLRVlET1dOX0RBVEFfQVBJOiBcImtleWRvd25cIiArIEVWRU5UX0tFWSQ0ICsgREFUQV9BUElfS0VZJDQsXG4gICAgS0VZVVBfREFUQV9BUEk6IFwia2V5dXBcIiArIEVWRU5UX0tFWSQ0ICsgREFUQV9BUElfS0VZJDRcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSQ0ID0ge1xuICAgIERJU0FCTEVEOiAnZGlzYWJsZWQnLFxuICAgIFNIT1c6ICdzaG93JyxcbiAgICBEUk9QVVA6ICdkcm9wdXAnLFxuICAgIERST1BSSUdIVDogJ2Ryb3ByaWdodCcsXG4gICAgRFJPUExFRlQ6ICdkcm9wbGVmdCcsXG4gICAgTUVOVVJJR0hUOiAnZHJvcGRvd24tbWVudS1yaWdodCcsXG4gICAgTUVOVUxFRlQ6ICdkcm9wZG93bi1tZW51LWxlZnQnLFxuICAgIFBPU0lUSU9OX1NUQVRJQzogJ3Bvc2l0aW9uLXN0YXRpYydcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDQgPSB7XG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsXG4gICAgRk9STV9DSElMRDogJy5kcm9wZG93biBmb3JtJyxcbiAgICBNRU5VOiAnLmRyb3Bkb3duLW1lbnUnLFxuICAgIE5BVkJBUl9OQVY6ICcubmF2YmFyLW5hdicsXG4gICAgVklTSUJMRV9JVEVNUzogJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuICB9O1xuICB2YXIgQXR0YWNobWVudE1hcCA9IHtcbiAgICBUT1A6ICd0b3Atc3RhcnQnLFxuICAgIFRPUEVORDogJ3RvcC1lbmQnLFxuICAgIEJPVFRPTTogJ2JvdHRvbS1zdGFydCcsXG4gICAgQk9UVE9NRU5EOiAnYm90dG9tLWVuZCcsXG4gICAgUklHSFQ6ICdyaWdodC1zdGFydCcsXG4gICAgUklHSFRFTkQ6ICdyaWdodC1lbmQnLFxuICAgIExFRlQ6ICdsZWZ0LXN0YXJ0JyxcbiAgICBMRUZURU5EOiAnbGVmdC1lbmQnXG4gIH07XG4gIHZhciBEZWZhdWx0JDIgPSB7XG4gICAgb2Zmc2V0OiAwLFxuICAgIGZsaXA6IHRydWUsXG4gICAgYm91bmRhcnk6ICdzY3JvbGxQYXJlbnQnLFxuICAgIHJlZmVyZW5jZTogJ3RvZ2dsZScsXG4gICAgZGlzcGxheTogJ2R5bmFtaWMnXG4gIH07XG4gIHZhciBEZWZhdWx0VHlwZSQyID0ge1xuICAgIG9mZnNldDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgZmxpcDogJ2Jvb2xlYW4nLFxuICAgIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gICAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gICAgZGlzcGxheTogJ3N0cmluZydcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgRHJvcGRvd24gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEcm9wZG93bihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fbWVudSA9IHRoaXMuX2dldE1lbnVFbGVtZW50KCk7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuRElTQUJMRUQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgdmFyIGlzQWN0aXZlID0gJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5TSE9XKTtcblxuICAgICAgRHJvcGRvd24uX2NsZWFyTWVudXMoKTtcblxuICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH07XG4gICAgICB2YXIgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudCQ0LlNIT1csIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgJChwYXJlbnQpLnRyaWdnZXIoc2hvd0V2ZW50KTtcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIERpc2FibGUgdG90YWxseSBQb3BwZXIuanMgZm9yIERyb3Bkb3duIGluIE5hdmJhclxuXG5cbiAgICAgIGlmICghdGhpcy5faW5OYXZiYXIpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgICAgICAgKiBQb3BwZXIgLSBodHRwczovL3BvcHBlci5qcy5vcmdcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcvKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZTsgLy8gQ2hlY2sgaWYgaXQncyBqUXVlcnkgZWxlbWVudFxuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlLmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBJZiBib3VuZGFyeSBpcyBub3QgYHNjcm9sbFBhcmVudGAsIHRoZW4gc2V0IHBvc2l0aW9uIHRvIGBzdGF0aWNgXG4gICAgICAgIC8vIHRvIGFsbG93IHRoZSBtZW51IHRvIFwiZXNjYXBlXCIgdGhlIHNjcm9sbCBwYXJlbnQncyBib3VuZGFyaWVzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjQyNTFcblxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYm91bmRhcnkgIT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICAgICAgJChwYXJlbnQpLmFkZENsYXNzKENsYXNzTmFtZSQ0LlBPU0lUSU9OX1NUQVRJQyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHRoaXMuX2dldFBvcHBlckNvbmZpZygpKTtcbiAgICAgIH0gLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcblxuXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICQocGFyZW50KS5jbG9zZXN0KFNlbGVjdG9yJDQuTkFWQkFSX05BVikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZSQ0LlNIT1cpO1xuICAgICAgJChwYXJlbnQpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZSQ0LlNIT1cpLnRyaWdnZXIoJC5FdmVudChFdmVudCQ0LlNIT1dOLCByZWxhdGVkVGFyZ2V0KSk7XG4gICAgfTtcblxuICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuRElTQUJMRUQpIHx8ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIHZhciBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50JDQuU0hPVywgcmVsYXRlZFRhcmdldCk7XG5cbiAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgICQocGFyZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZSQ0LlNIT1cpO1xuICAgICAgJChwYXJlbnQpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZSQ0LlNIT1cpLnRyaWdnZXIoJC5FdmVudChFdmVudCQ0LlNIT1dOLCByZWxhdGVkVGFyZ2V0KSk7XG4gICAgfTtcblxuICAgIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuRElTQUJMRUQpIHx8ICEkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZSQ0LlNIT1cpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH07XG4gICAgICB2YXIgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudCQ0LkhJREUsIHJlbGF0ZWRUYXJnZXQpO1xuXG4gICAgICB2YXIgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9tZW51KS50b2dnbGVDbGFzcyhDbGFzc05hbWUkNC5TSE9XKTtcbiAgICAgICQocGFyZW50KS50b2dnbGVDbGFzcyhDbGFzc05hbWUkNC5TSE9XKS50cmlnZ2VyKCQuRXZlbnQoRXZlbnQkNC5ISURERU4sIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJDQpO1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZJDQpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9tZW51ID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JDQuQ0xJQ0ssIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBfdGhpcy50b2dnbGUoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsICQodGhpcy5fZWxlbWVudCkuZGF0YSgpLCBjb25maWcpO1xuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSQ0LCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRNZW51RWxlbWVudCA9IGZ1bmN0aW9uIF9nZXRNZW51RWxlbWVudCgpIHtcbiAgICAgIGlmICghdGhpcy5fbWVudSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICB0aGlzLl9tZW51ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkNC5NRU5VKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fbWVudTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRQbGFjZW1lbnQgPSBmdW5jdGlvbiBfZ2V0UGxhY2VtZW50KCkge1xuICAgICAgdmFyICRwYXJlbnREcm9wZG93biA9ICQodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkJPVFRPTTsgLy8gSGFuZGxlIGRyb3B1cFxuXG4gICAgICBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZSQ0LkRST1BVUCkpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5UT1A7XG5cbiAgICAgICAgaWYgKCQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuTUVOVVJJR0hUKSkge1xuICAgICAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuVE9QRU5EO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDbGFzc05hbWUkNC5EUk9QUklHSFQpKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuUklHSFQ7XG4gICAgICB9IGVsc2UgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDbGFzc05hbWUkNC5EUk9QTEVGVCkpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5MRUZUO1xuICAgICAgfSBlbHNlIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZSQ0Lk1FTlVSSUdIVCkpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5CT1RUT01FTkQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fZGV0ZWN0TmF2YmFyID0gZnVuY3Rpb24gX2RldGVjdE5hdmJhcigpIHtcbiAgICAgIHJldHVybiAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoJy5uYXZiYXInKS5sZW5ndGggPiAwO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldE9mZnNldCA9IGZ1bmN0aW9uIF9nZXRPZmZzZXQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2Zmc2V0LmZuID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLm9mZnNldHMgPSBfb2JqZWN0U3ByZWFkKHt9LCBkYXRhLm9mZnNldHMsIF90aGlzMi5fY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIF90aGlzMi5fZWxlbWVudCkgfHwge30pO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0Lm9mZnNldCA9IHRoaXMuX2NvbmZpZy5vZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0UG9wcGVyQ29uZmlnID0gZnVuY3Rpb24gX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICAgIHZhciBwb3BwZXJDb25maWcgPSB7XG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgZmxpcDoge1xuICAgICAgICAgICAgZW5hYmxlZDogdGhpcy5fY29uZmlnLmZsaXBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBEaXNhYmxlIFBvcHBlci5qcyBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcblxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgICBwb3BwZXJDb25maWcubW9kaWZpZXJzLmFwcGx5U3R5bGUgPSB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBvcHBlckNvbmZpZztcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZJDQpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24odGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZJDQsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIERyb3Bkb3duLl9jbGVhck1lbnVzID0gZnVuY3Rpb24gX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCAmJiAoZXZlbnQud2hpY2ggPT09IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoICE9PSBUQUJfS0VZQ09ERSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG9nZ2xlcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQ0LkRBVEFfVE9HR0xFKSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2dnbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodG9nZ2xlc1tpXSk7XG5cbiAgICAgICAgdmFyIGNvbnRleHQgPSAkKHRvZ2dsZXNbaV0pLmRhdGEoREFUQV9LRVkkNCk7XG4gICAgICAgIHZhciByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRvZ2dsZXNbaV1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHJvcGRvd25NZW51ID0gY29udGV4dC5fbWVudTtcblxuICAgICAgICBpZiAoISQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5TSE9XKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50ICYmIChldmVudC50eXBlID09PSAnY2xpY2snICYmIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggPT09IFRBQl9LRVlDT0RFKSAmJiAkLmNvbnRhaW5zKHBhcmVudCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQkNC5ISURFLCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgJChwYXJlbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcblxuXG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgJChkcm9wZG93bk1lbnUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ0LlNIT1cpO1xuICAgICAgICAkKHBhcmVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVykudHJpZ2dlcigkLkV2ZW50KEV2ZW50JDQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCA9IGZ1bmN0aW9uIF9nZXRQYXJlbnRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgcGFyZW50O1xuICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICA7XG5cbiAgICBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gX2RhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgICAgLy8gSWYgbm90IGlucHV0L3RleHRhcmVhOlxuICAgICAgLy8gIC0gQW5kIG5vdCBhIGtleSBpbiBSRUdFWFBfS0VZRE9XTiA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYTpcbiAgICAgIC8vICAtIElmIHNwYWNlIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgICAvLyAgLSBJZiBrZXkgaXMgb3RoZXIgdGhhbiBlc2NhcGVcbiAgICAgIC8vICAgIC0gSWYga2V5IGlzIG5vdCB1cCBvciBkb3duID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIC8vICAgIC0gSWYgdHJpZ2dlciBpbnNpZGUgdGhlIG1lbnUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpID8gZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggIT09IEVTQ0FQRV9LRVlDT0RFICYmIChldmVudC53aGljaCAhPT0gQVJST1dfRE9XTl9LRVlDT0RFICYmIGV2ZW50LndoaWNoICE9PSBBUlJPV19VUF9LRVlDT0RFIHx8ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNlbGVjdG9yJDQuTUVOVSkubGVuZ3RoKSA6ICFSRUdFWFBfS0VZRE9XTi50ZXN0KGV2ZW50LndoaWNoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgJCh0aGlzKS5oYXNDbGFzcyhDbGFzc05hbWUkNC5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMpO1xuXG4gICAgICB2YXIgaXNBY3RpdmUgPSAkKHBhcmVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVyk7XG5cbiAgICAgIGlmICghaXNBY3RpdmUgfHwgaXNBY3RpdmUgJiYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSB8fCBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSkpIHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICAgIHZhciB0b2dnbGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQ0LkRBVEFfVE9HR0xFKTtcbiAgICAgICAgICAkKHRvZ2dsZSkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbXMgPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDQuVklTSUJMRV9JVEVNUykpO1xuXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpO1xuXG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX1VQX0tFWUNPREUgJiYgaW5kZXggPiAwKSB7XG4gICAgICAgIC8vIFVwXG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfRE9XTl9LRVlDT0RFICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAvLyBEb3duXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICBpdGVtc1tpbmRleF0uZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKERyb3Bkb3duLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQ0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkMjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFR5cGUkMjtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRHJvcGRvd247XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKGRvY3VtZW50KS5vbihFdmVudCQ0LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yJDQuREFUQV9UT0dHTEUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpLm9uKEV2ZW50JDQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IkNC5NRU5VLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKS5vbihFdmVudCQ0LkNMSUNLX0RBVEFfQVBJICsgXCIgXCIgKyBFdmVudCQ0LktFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5fY2xlYXJNZW51cykub24oRXZlbnQkNC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IkNC5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJyk7XG4gIH0pLm9uKEV2ZW50JDQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yJDQuRk9STV9DSElMRCwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRSQ0XSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRSQ0XS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duO1xuXG4gICQuZm5bTkFNRSQ0XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRSQ0XSA9IEpRVUVSWV9OT19DT05GTElDVCQ0O1xuICAgIHJldHVybiBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQ1ID0gJ21vZGFsJztcbiAgdmFyIFZFUlNJT04kNSA9ICc0LjMuMSc7XG4gIHZhciBEQVRBX0tFWSQ1ID0gJ2JzLm1vZGFsJztcbiAgdmFyIEVWRU5UX0tFWSQ1ID0gXCIuXCIgKyBEQVRBX0tFWSQ1O1xuICB2YXIgREFUQV9BUElfS0VZJDUgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ1ID0gJC5mbltOQU1FJDVdO1xuICB2YXIgRVNDQVBFX0tFWUNPREUkMSA9IDI3OyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5cbiAgdmFyIERlZmF1bHQkMyA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBmb2N1czogdHJ1ZSxcbiAgICBzaG93OiB0cnVlXG4gIH07XG4gIHZhciBEZWZhdWx0VHlwZSQzID0ge1xuICAgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBmb2N1czogJ2Jvb2xlYW4nLFxuICAgIHNob3c6ICdib29sZWFuJ1xuICB9O1xuICB2YXIgRXZlbnQkNSA9IHtcbiAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSQ1LFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSQ1LFxuICAgIFNIT1c6IFwic2hvd1wiICsgRVZFTlRfS0VZJDUsXG4gICAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWSQ1LFxuICAgIEZPQ1VTSU46IFwiZm9jdXNpblwiICsgRVZFTlRfS0VZJDUsXG4gICAgUkVTSVpFOiBcInJlc2l6ZVwiICsgRVZFTlRfS0VZJDUsXG4gICAgQ0xJQ0tfRElTTUlTUzogXCJjbGljay5kaXNtaXNzXCIgKyBFVkVOVF9LRVkkNSxcbiAgICBLRVlET1dOX0RJU01JU1M6IFwia2V5ZG93bi5kaXNtaXNzXCIgKyBFVkVOVF9LRVkkNSxcbiAgICBNT1VTRVVQX0RJU01JU1M6IFwibW91c2V1cC5kaXNtaXNzXCIgKyBFVkVOVF9LRVkkNSxcbiAgICBNT1VTRURPV05fRElTTUlTUzogXCJtb3VzZWRvd24uZGlzbWlzc1wiICsgRVZFTlRfS0VZJDUsXG4gICAgQ0xJQ0tfREFUQV9BUEk6IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQ1ICsgREFUQV9BUElfS0VZJDVcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSQ1ID0ge1xuICAgIFNDUk9MTEFCTEU6ICdtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZScsXG4gICAgU0NST0xMQkFSX01FQVNVUkVSOiAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnLFxuICAgIEJBQ0tEUk9QOiAnbW9kYWwtYmFja2Ryb3AnLFxuICAgIE9QRU46ICdtb2RhbC1vcGVuJyxcbiAgICBGQURFOiAnZmFkZScsXG4gICAgU0hPVzogJ3Nob3cnXG4gIH07XG4gIHZhciBTZWxlY3RvciQ1ID0ge1xuICAgIERJQUxPRzogJy5tb2RhbC1kaWFsb2cnLFxuICAgIE1PREFMX0JPRFk6ICcubW9kYWwtYm9keScsXG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gICAgREFUQV9ESVNNSVNTOiAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcbiAgICBGSVhFRF9DT05URU5UOiAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCcsXG4gICAgU1RJQ0tZX0NPTlRFTlQ6ICcuc3RpY2t5LXRvcCdcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgTW9kYWwgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9kaWFsb2cgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkNS5ESUFMT0cpO1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsO1xuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSAwO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gTW9kYWwucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDUuRkFERSkpIHtcbiAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQkNS5TSE9XLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pO1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLl9jaGVja1Njcm9sbGJhcigpO1xuXG4gICAgICB0aGlzLl9zZXRTY3JvbGxiYXIoKTtcblxuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG5cbiAgICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KCk7XG5cbiAgICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KCk7XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQkNS5DTElDS19ESVNNSVNTLCBTZWxlY3RvciQ1LkRBVEFfRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgJCh0aGlzLl9kaWFsb2cpLm9uKEV2ZW50JDUuTU9VU0VET1dOX0RJU01JU1MsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkub25lKEV2ZW50JDUuTU9VU0VVUF9ESVNNSVNTLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKF90aGlzLl9lbGVtZW50KSkge1xuICAgICAgICAgICAgX3RoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fc2hvd0JhY2tkcm9wKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50JDUuSElERSk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHZhciB0cmFuc2l0aW9uID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkNS5GQURFKTtcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKTtcblxuICAgICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKTtcblxuICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50JDUuRk9DVVNJTik7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ1LlNIT1cpO1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQkNS5DTElDS19ESVNNSVNTKTtcbiAgICAgICQodGhpcy5fZGlhbG9nKS5vZmYoRXZlbnQkNS5NT1VTRURPV05fRElTTUlTUyk7XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLl9oaWRlTW9kYWwoZXZlbnQpO1xuICAgICAgICB9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIFt3aW5kb3csIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2RpYWxvZ10uZm9yRWFjaChmdW5jdGlvbiAoaHRtbEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICQoaHRtbEVsZW1lbnQpLm9mZihFVkVOVF9LRVkkNSk7XG4gICAgICB9KTtcbiAgICAgIC8qKlxuICAgICAgICogYGRvY3VtZW50YCBoYXMgMiBldmVudHMgYEV2ZW50LkZPQ1VTSU5gIGFuZCBgRXZlbnQuQ0xJQ0tfREFUQV9BUElgXG4gICAgICAgKiBEbyBub3QgbW92ZSBgZG9jdW1lbnRgIGluIGBodG1sRWxlbWVudHNgIGFycmF5XG4gICAgICAgKiBJdCB3aWxsIHJlbW92ZSBgRXZlbnQuQ0xJQ0tfREFUQV9BUElgIGV2ZW50IHRoYXQgc2hvdWxkIHJlbWFpblxuICAgICAgICovXG5cbiAgICAgICQoZG9jdW1lbnQpLm9mZihFdmVudCQ1LkZPQ1VTSU4pO1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJDUpO1xuICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fZGlhbG9nID0gbnVsbDtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBudWxsO1xuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBudWxsO1xuICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IG51bGw7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsO1xuICAgICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSBudWxsO1xuICAgIH07XG5cbiAgICBfcHJvdG8uaGFuZGxlVXBkYXRlID0gZnVuY3Rpb24gaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgRGVmYXVsdCQzLCBjb25maWcpO1xuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSQ1LCBjb25maWcsIERlZmF1bHRUeXBlJDMpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zaG93RWxlbWVudCA9IGZ1bmN0aW9uIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHRyYW5zaXRpb24gPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQ1LkZBREUpO1xuXG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fCB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSk7XG5cbiAgICAgIGlmICgkKHRoaXMuX2RpYWxvZykuaGFzQ2xhc3MoQ2xhc3NOYW1lJDUuU0NST0xMQUJMRSkpIHtcbiAgICAgICAgdGhpcy5fZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkNS5NT0RBTF9CT0RZKS5zY3JvbGxUb3AgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUkNS5TSE9XKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9lbmZvcmNlRm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50JDUuU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZFRhcmdldFxuICAgICAgfSk7XG5cbiAgICAgIHZhciB0cmFuc2l0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiB0cmFuc2l0aW9uQ29tcGxldGUoKSB7XG4gICAgICAgIGlmIChfdGhpczMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICAgIF90aGlzMy5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgJChfdGhpczMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpO1xuICAgICAgICAkKHRoaXMuX2RpYWxvZykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2VuZm9yY2VGb2N1cyA9IGZ1bmN0aW9uIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50JDUuRk9DVVNJTikgLy8gR3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICAub24oRXZlbnQkNS5GT0NVU0lOLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50ICE9PSBldmVudC50YXJnZXQgJiYgX3RoaXM0Ll9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiYgJChfdGhpczQuX2VsZW1lbnQpLmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIF90aGlzNC5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRFc2NhcGVFdmVudCA9IGZ1bmN0aW9uIF9zZXRFc2NhcGVFdmVudCgpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQ1LktFWURPV05fRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSQxKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBfdGhpczUuaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50JDUuS0VZRE9XTl9ESVNNSVNTKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRSZXNpemVFdmVudCA9IGZ1bmN0aW9uIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgICAkKHdpbmRvdykub24oRXZlbnQkNS5SRVNJWkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczYuaGFuZGxlVXBkYXRlKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHdpbmRvdykub2ZmKEV2ZW50JDUuUkVTSVpFKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9oaWRlTW9kYWwgPSBmdW5jdGlvbiBfaGlkZU1vZGFsKCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJyk7XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLl9zaG93QmFja2Ryb3AoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ1Lk9QRU4pO1xuXG4gICAgICAgIF90aGlzNy5fcmVzZXRBZGp1c3RtZW50cygpO1xuXG4gICAgICAgIF90aGlzNy5fcmVzZXRTY3JvbGxiYXIoKTtcblxuICAgICAgICAkKF90aGlzNy5fZWxlbWVudCkudHJpZ2dlcihFdmVudCQ1LkhJRERFTik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9yZW1vdmVCYWNrZHJvcCA9IGZ1bmN0aW9uIF9yZW1vdmVCYWNrZHJvcCgpIHtcbiAgICAgIGlmICh0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX3Nob3dCYWNrZHJvcCA9IGZ1bmN0aW9uIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICB2YXIgYW5pbWF0ZSA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDUuRkFERSkgPyBDbGFzc05hbWUkNS5GQURFIDogJyc7XG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDbGFzc05hbWUkNS5CQUNLRFJPUDtcblxuICAgICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC5hZGQoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQ1LkNMSUNLX0RJU01JU1MsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChfdGhpczguX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgICAgIF90aGlzOC5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXM4Ll9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICBfdGhpczguX2VsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXM4LmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fYmFja2Ryb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDUuU0hPVyk7XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcCk7XG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFjaykuZW11bGF0ZVRyYW5zaXRpb25FbmQoYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkNS5TSE9XKTtcblxuICAgICAgICB2YXIgY2FsbGJhY2tSZW1vdmUgPSBmdW5jdGlvbiBjYWxsYmFja1JlbW92ZSgpIHtcbiAgICAgICAgICBfdGhpczguX3JlbW92ZUJhY2tkcm9wKCk7XG5cbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQ1LkZBREUpKSB7XG4gICAgICAgICAgdmFyIF9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApO1xuXG4gICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrUmVtb3ZlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrUmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9IC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAgIC8vIHRvZG8gKGZhdCk6IHRoZXNlIHNob3VsZCBwcm9iYWJseSBiZSByZWZhY3RvcmVkIG91dCBvZiBtb2RhbC5qc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICA7XG5cbiAgICBfcHJvdG8uX2FkanVzdERpYWxvZyA9IGZ1bmN0aW9uIF9hZGp1c3REaWFsb2coKSB7XG4gICAgICB2YXIgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICBpZiAoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gdGhpcy5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fcmVzZXRBZGp1c3RtZW50cyA9IGZ1bmN0aW9uIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9jaGVja1Njcm9sbGJhciA9IGZ1bmN0aW9uIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gcmVjdC5sZWZ0ICsgcmVjdC5yaWdodCA8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9nZXRTY3JvbGxiYXJXaWR0aCgpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3NldFNjcm9sbGJhciA9IGZ1bmN0aW9uIF9zZXRTY3JvbGxiYXIoKSB7XG4gICAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAgIC8vIE5vdGU6IERPTU5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0IHJldHVybnMgdGhlIGFjdHVhbCB2YWx1ZSBvciAnJyBpZiBub3Qgc2V0XG4gICAgICAgIC8vICAgd2hpbGUgJChET01Ob2RlKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSByZXR1cm5zIHRoZSBjYWxjdWxhdGVkIHZhbHVlIG9yIDAgaWYgbm90IHNldFxuICAgICAgICB2YXIgZml4ZWRDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDUuRklYRURfQ09OVEVOVCkpO1xuICAgICAgICB2YXIgc3RpY2t5Q29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQ1LlNUSUNLWV9DT05URU5UKSk7IC8vIEFkanVzdCBmaXhlZCBjb250ZW50IHBhZGRpbmdcblxuICAgICAgICAkKGZpeGVkQ29udGVudCkuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgYWN0dWFsUGFkZGluZyA9IGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0O1xuICAgICAgICAgIHZhciBjYWxjdWxhdGVkUGFkZGluZyA9ICQoZWxlbWVudCkuY3NzKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgICAgJChlbGVtZW50KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgcGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyBfdGhpczkuX3Njcm9sbGJhcldpZHRoICsgXCJweFwiKTtcbiAgICAgICAgfSk7IC8vIEFkanVzdCBzdGlja3kgY29udGVudCBtYXJnaW5cblxuICAgICAgICAkKHN0aWNreUNvbnRlbnQpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGFjdHVhbE1hcmdpbiA9IGVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHQ7XG4gICAgICAgICAgdmFyIGNhbGN1bGF0ZWRNYXJnaW4gPSAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0Jyk7XG4gICAgICAgICAgJChlbGVtZW50KS5kYXRhKCdtYXJnaW4tcmlnaHQnLCBhY3R1YWxNYXJnaW4pLmNzcygnbWFyZ2luLXJpZ2h0JywgcGFyc2VGbG9hdChjYWxjdWxhdGVkTWFyZ2luKSAtIF90aGlzOS5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCIpO1xuICAgICAgICB9KTsgLy8gQWRqdXN0IGJvZHkgcGFkZGluZ1xuXG4gICAgICAgIHZhciBhY3R1YWxQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgICAgIHZhciBjYWxjdWxhdGVkUGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuY3NzKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpLmNzcygncGFkZGluZy1yaWdodCcsIHBhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCIpO1xuICAgICAgfVxuXG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKENsYXNzTmFtZSQ1Lk9QRU4pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3Jlc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gX3Jlc2V0U2Nyb2xsYmFyKCkge1xuICAgICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICAgIHZhciBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkNS5GSVhFRF9DT05URU5UKSk7XG4gICAgICAkKGZpeGVkQ29udGVudCkuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSAkKGVsZW1lbnQpLmRhdGEoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJztcbiAgICAgIH0pOyAvLyBSZXN0b3JlIHN0aWNreSBjb250ZW50XG5cbiAgICAgIHZhciBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIlwiICsgU2VsZWN0b3IkNS5TVElDS1lfQ09OVEVOVCkpO1xuICAgICAgJChlbGVtZW50cykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG1hcmdpbiA9ICQoZWxlbWVudCkuZGF0YSgnbWFyZ2luLXJpZ2h0Jyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtYXJnaW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcsIG1hcmdpbikucmVtb3ZlRGF0YSgnbWFyZ2luLXJpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBSZXN0b3JlIGJvZHkgcGFkZGluZ1xuXG4gICAgICB2YXIgcGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuZGF0YSgncGFkZGluZy1yaWdodCcpO1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJyc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0U2Nyb2xsYmFyV2lkdGggPSBmdW5jdGlvbiBfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgICAvLyB0aHggZC53YWxzaFxuICAgICAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENsYXNzTmFtZSQ1LlNDUk9MTEJBUl9NRUFTVVJFUjtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICAgIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZJDUpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgRGVmYXVsdCQzLCAkKHRoaXMpLmRhdGEoKSwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZJDUsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldCk7XG4gICAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5zaG93KSB7XG4gICAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQ1O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkMztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKGRvY3VtZW50KS5vbihFdmVudCQ1LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3RvciQ1LkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0O1xuICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgdmFyIGNvbmZpZyA9ICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZJDUpID8gJ3RvZ2dsZScgOiBfb2JqZWN0U3ByZWFkKHt9LCAkKHRhcmdldCkuZGF0YSgpLCAkKHRoaXMpLmRhdGEoKSk7XG5cbiAgICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyICR0YXJnZXQgPSAkKHRhcmdldCkub25lKEV2ZW50JDUuU0hPVywgZnVuY3Rpb24gKHNob3dFdmVudCkge1xuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAvLyBPbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJHRhcmdldC5vbmUoRXZlbnQkNS5ISURERU4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQoX3RoaXMxMCkuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICBfdGhpczEwLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgTW9kYWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnLCB0aGlzKTtcbiAgfSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUUkNV0gPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUUkNV0uQ29uc3RydWN0b3IgPSBNb2RhbDtcblxuICAkLmZuW05BTUUkNV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkNV0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNTtcbiAgICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NC4zLjEpOiB0b29scy9zYW5pdGl6ZXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIHZhciB1cmlBdHRycyA9IFsnYmFja2dyb3VuZCcsICdjaXRlJywgJ2hyZWYnLCAnaXRlbXR5cGUnLCAnbG9uZ2Rlc2MnLCAncG9zdGVyJywgJ3NyYycsICd4bGluazpocmVmJ107XG4gIHZhciBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2k7XG4gIHZhciBEZWZhdWx0V2hpdGVsaXN0ID0ge1xuICAgIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICAgIGFyZWE6IFtdLFxuICAgIGI6IFtdLFxuICAgIGJyOiBbXSxcbiAgICBjb2w6IFtdLFxuICAgIGNvZGU6IFtdLFxuICAgIGRpdjogW10sXG4gICAgZW06IFtdLFxuICAgIGhyOiBbXSxcbiAgICBoMTogW10sXG4gICAgaDI6IFtdLFxuICAgIGgzOiBbXSxcbiAgICBoNDogW10sXG4gICAgaDU6IFtdLFxuICAgIGg2OiBbXSxcbiAgICBpOiBbXSxcbiAgICBpbWc6IFsnc3JjJywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgICBsaTogW10sXG4gICAgb2w6IFtdLFxuICAgIHA6IFtdLFxuICAgIHByZTogW10sXG4gICAgczogW10sXG4gICAgc21hbGw6IFtdLFxuICAgIHNwYW46IFtdLFxuICAgIHN1YjogW10sXG4gICAgc3VwOiBbXSxcbiAgICBzdHJvbmc6IFtdLFxuICAgIHU6IFtdLFxuICAgIHVsOiBbXVxuICAgIC8qKlxuICAgICAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAgICAgKlxuICAgICAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAgICAgKi9cblxuICB9O1xuICB2YXIgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiY6Lz8jXSooPzpbLz8jXXwkKSkvZ2k7XG4gIC8qKlxuICAgKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAgICpcbiAgICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICAgKi9cblxuICB2YXIgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFthLXowLTkrL10rPSokL2k7XG5cbiAgZnVuY3Rpb24gYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkge1xuICAgIHZhciBhdHRyTmFtZSA9IGF0dHIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICAgIGlmICh1cmlBdHRycy5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oYXR0ci5ub2RlVmFsdWUubWF0Y2goU0FGRV9VUkxfUEFUVEVSTikgfHwgYXR0ci5ub2RlVmFsdWUubWF0Y2goREFUQV9VUkxfUEFUVEVSTikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcmVnRXhwID0gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGZ1bmN0aW9uIChhdHRyUmVnZXgpIHtcbiAgICAgIHJldHVybiBhdHRyUmVnZXggaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgfSk7IC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSByZWdFeHAubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXR0ck5hbWUubWF0Y2gocmVnRXhwW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgd2hpdGVMaXN0LCBzYW5pdGl6ZUZuKSB7XG4gICAgaWYgKHVuc2FmZUh0bWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5zYWZlSHRtbDtcbiAgICB9XG5cbiAgICBpZiAoc2FuaXRpemVGbiAmJiB0eXBlb2Ygc2FuaXRpemVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNhbml0aXplRm4odW5zYWZlSHRtbCk7XG4gICAgfVxuXG4gICAgdmFyIGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgdmFyIGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpO1xuICAgIHZhciB3aGl0ZWxpc3RLZXlzID0gT2JqZWN0LmtleXMod2hpdGVMaXN0KTtcbiAgICB2YXIgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSk7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpLCBsZW4pIHtcbiAgICAgIHZhciBlbCA9IGVsZW1lbnRzW2ldO1xuICAgICAgdmFyIGVsTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmICh3aGl0ZWxpc3RLZXlzLmluZGV4T2YoZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXR0cmlidXRlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZWwuYXR0cmlidXRlcyk7XG4gICAgICB2YXIgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KHdoaXRlTGlzdFsnKiddIHx8IFtdLCB3aGl0ZUxpc3RbZWxOYW1lXSB8fCBbXSk7XG4gICAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHIsIHdoaXRlbGlzdGVkQXR0cmlidXRlcykpIHtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoaSwgbGVuKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTDtcbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQ2ID0gJ3Rvb2x0aXAnO1xuICB2YXIgVkVSU0lPTiQ2ID0gJzQuMy4xJztcbiAgdmFyIERBVEFfS0VZJDYgPSAnYnMudG9vbHRpcCc7XG4gIHZhciBFVkVOVF9LRVkkNiA9IFwiLlwiICsgREFUQV9LRVkkNjtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ2ID0gJC5mbltOQU1FJDZdO1xuICB2YXIgQ0xBU1NfUFJFRklYID0gJ2JzLXRvb2x0aXAnO1xuICB2YXIgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgQ0xBU1NfUFJFRklYICsgXCJcXFxcUytcIiwgJ2cnKTtcbiAgdmFyIERJU0FMTE9XRURfQVRUUklCVVRFUyA9IFsnc2FuaXRpemUnLCAnd2hpdGVMaXN0JywgJ3Nhbml0aXplRm4nXTtcbiAgdmFyIERlZmF1bHRUeXBlJDQgPSB7XG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICAgIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gICAgdHJpZ2dlcjogJ3N0cmluZycsXG4gICAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGh0bWw6ICdib29sZWFuJyxcbiAgICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBvZmZzZXQ6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6ICcoc3RyaW5nfGFycmF5KScsXG4gICAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICAgIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICAgIHdoaXRlTGlzdDogJ29iamVjdCdcbiAgfTtcbiAgdmFyIEF0dGFjaG1lbnRNYXAkMSA9IHtcbiAgICBBVVRPOiAnYXV0bycsXG4gICAgVE9QOiAndG9wJyxcbiAgICBSSUdIVDogJ3JpZ2h0JyxcbiAgICBCT1RUT006ICdib3R0b20nLFxuICAgIExFRlQ6ICdsZWZ0J1xuICB9O1xuICB2YXIgRGVmYXVsdCQ0ID0ge1xuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICsgJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicgKyAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICAgIHRyaWdnZXI6ICdob3ZlciBmb2N1cycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGRlbGF5OiAwLFxuICAgIGh0bWw6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiBmYWxzZSxcbiAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIG9mZnNldDogMCxcbiAgICBjb250YWluZXI6IGZhbHNlLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50OiAnZmxpcCcsXG4gICAgYm91bmRhcnk6ICdzY3JvbGxQYXJlbnQnLFxuICAgIHNhbml0aXplOiB0cnVlLFxuICAgIHNhbml0aXplRm46IG51bGwsXG4gICAgd2hpdGVMaXN0OiBEZWZhdWx0V2hpdGVsaXN0XG4gIH07XG4gIHZhciBIb3ZlclN0YXRlID0ge1xuICAgIFNIT1c6ICdzaG93JyxcbiAgICBPVVQ6ICdvdXQnXG4gIH07XG4gIHZhciBFdmVudCQ2ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZJDYsXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZJDYsXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkNixcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZJDYsXG4gICAgSU5TRVJURUQ6IFwiaW5zZXJ0ZWRcIiArIEVWRU5UX0tFWSQ2LFxuICAgIENMSUNLOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkNixcbiAgICBGT0NVU0lOOiBcImZvY3VzaW5cIiArIEVWRU5UX0tFWSQ2LFxuICAgIEZPQ1VTT1VUOiBcImZvY3Vzb3V0XCIgKyBFVkVOVF9LRVkkNixcbiAgICBNT1VTRUVOVEVSOiBcIm1vdXNlZW50ZXJcIiArIEVWRU5UX0tFWSQ2LFxuICAgIE1PVVNFTEVBVkU6IFwibW91c2VsZWF2ZVwiICsgRVZFTlRfS0VZJDZcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSQ2ID0ge1xuICAgIEZBREU6ICdmYWRlJyxcbiAgICBTSE9XOiAnc2hvdydcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDYgPSB7XG4gICAgVE9PTFRJUDogJy50b29sdGlwJyxcbiAgICBUT09MVElQX0lOTkVSOiAnLnRvb2x0aXAtaW5uZXInLFxuICAgIEFSUk9XOiAnLmFycm93J1xuICB9O1xuICB2YXIgVHJpZ2dlciA9IHtcbiAgICBIT1ZFUjogJ2hvdmVyJyxcbiAgICBGT0NVUzogJ2ZvY3VzJyxcbiAgICBDTElDSzogJ2NsaWNrJyxcbiAgICBNQU5VQUw6ICdtYW51YWwnXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG5cbiAgdmFyIFRvb2x0aXAgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb29sdGlwKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgLyoqXG4gICAgICAgKiBDaGVjayBmb3IgUG9wcGVyIGRlcGVuZGVuY3lcbiAgICAgICAqIFBvcHBlciAtIGh0dHBzOi8vcG9wcGVyLmpzLm9yZ1xuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnLyknKTtcbiAgICAgIH0gLy8gcHJpdmF0ZVxuXG5cbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJztcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7IC8vIFByb3RlY3RlZFxuXG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcblxuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBUb29sdGlwLnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZUVuYWJsZWQgPSBmdW5jdGlvbiB0b2dnbGVFbmFibGVkKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZO1xuICAgICAgICB2YXIgY29udGV4dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KTtcblxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrO1xuXG4gICAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZSQ2LlNIT1cpKSB7XG4gICAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcyk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkub2ZmKHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtcbiAgICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnKTtcblxuICAgICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAgICQodGhpcy50aXApLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBudWxsO1xuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xuICAgICAgdGhpcy50aXAgPSBudWxsO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvd0V2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpO1xuXG4gICAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gVXRpbC5maW5kU2hhZG93Um9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB2YXIgaXNJblRoZURvbSA9ICQuY29udGFpbnMoc2hhZG93Um9vdCAhPT0gbnVsbCA/IHNoYWRvd1Jvb3QgOiB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgICAgdmFyIHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKTtcbiAgICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZCk7XG4gICAgICAgIHRoaXMuc2V0Q29udGVudCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDYuRkFERSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGxhY2VtZW50ID0gdHlwZW9mIHRoaXMuY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5lbGVtZW50KSA6IHRoaXMuY29uZmlnLnBsYWNlbWVudDtcblxuICAgICAgICB2YXIgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KTtcblxuICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KTtcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fZ2V0Q29udGFpbmVyKCk7XG5cbiAgICAgICAgJCh0aXApLmRhdGEodGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKCEkLmNvbnRhaW5zKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy50aXApKSB7XG4gICAgICAgICAgJCh0aXApLmFwcGVuZFRvKGNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKTtcbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcih0aGlzLmVsZW1lbnQsIHRpcCwge1xuICAgICAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgICAgIGJlaGF2aW9yOiB0aGlzLmNvbmZpZy5mYWxsYmFja1BsYWNlbWVudFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFycm93OiB7XG4gICAgICAgICAgICAgIGVsZW1lbnQ6IFNlbGVjdG9yJDYuQVJST1dcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkNyZWF0ZTogZnVuY3Rpb24gb25DcmVhdGUoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgIF90aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZSQ2LlNIT1cpOyAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuXG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgX3RoaXMuX2ZpeFRyYW5zaXRpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcHJldkhvdmVyU3RhdGUgPSBfdGhpcy5faG92ZXJTdGF0ZTtcbiAgICAgICAgICBfdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgJChfdGhpcy5lbGVtZW50KS50cmlnZ2VyKF90aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKTtcblxuICAgICAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgICAgIF90aGlzLl9sZWF2ZShudWxsLCBfdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUkNi5GQURFKSkge1xuICAgICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMudGlwKTtcbiAgICAgICAgICAkKHRoaXMudGlwKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICB2YXIgaGlkZUV2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKF90aGlzMi5faG92ZXJTdGF0ZSAhPT0gSG92ZXJTdGF0ZS5TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMi5fY2xlYW5UaXBDbGFzcygpO1xuXG4gICAgICAgIF90aGlzMi5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpO1xuXG4gICAgICAgICQoX3RoaXMyLmVsZW1lbnQpLnRyaWdnZXIoX3RoaXMyLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTik7XG5cbiAgICAgICAgaWYgKF90aGlzMi5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMyLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkNi5TSE9XKTsgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkNMSUNLXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkZPQ1VTXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlO1xuXG4gICAgICBpZiAoJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDYuRkFERSkpIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGlwKTtcbiAgICAgICAgJCh0aXApLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJztcbiAgICB9O1xuXG4gICAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSAvLyBQcm90ZWN0ZWRcbiAgICA7XG5cbiAgICBfcHJvdG8uaXNXaXRoQ29udGVudCA9IGZ1bmN0aW9uIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldFRpdGxlKCkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uYWRkQXR0YWNobWVudENsYXNzID0gZnVuY3Rpb24gYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKENMQVNTX1BSRUZJWCArIFwiLVwiICsgYXR0YWNobWVudCk7XG4gICAgfTtcblxuICAgIF9wcm90by5nZXRUaXBFbGVtZW50ID0gZnVuY3Rpb24gZ2V0VGlwRWxlbWVudCgpIHtcbiAgICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF07XG4gICAgICByZXR1cm4gdGhpcy50aXA7XG4gICAgfTtcblxuICAgIF9wcm90by5zZXRDb250ZW50ID0gZnVuY3Rpb24gc2V0Q29udGVudCgpIHtcbiAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJCh0aXAucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQ2LlRPT0xUSVBfSU5ORVIpKSwgdGhpcy5nZXRUaXRsZSgpKTtcbiAgICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkNi5GQURFICsgXCIgXCIgKyBDbGFzc05hbWUkNi5TSE9XKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNldEVsZW1lbnRDb250ZW50ID0gZnVuY3Rpb24gc2V0RWxlbWVudENvbnRlbnQoJGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcgJiYgKGNvbnRlbnQubm9kZVR5cGUgfHwgY29udGVudC5qcXVlcnkpKSB7XG4gICAgICAgIC8vIENvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgICAgIGlmICghJChjb250ZW50KS5wYXJlbnQoKS5pcygkZWxlbWVudCkpIHtcbiAgICAgICAgICAgICRlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZWxlbWVudC50ZXh0KCQoY29udGVudCkudGV4dCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnNhbml0aXplKSB7XG4gICAgICAgICAgY29udGVudCA9IHNhbml0aXplSHRtbChjb250ZW50LCB0aGlzLmNvbmZpZy53aGl0ZUxpc3QsIHRoaXMuY29uZmlnLnNhbml0aXplRm4pO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsZW1lbnQuaHRtbChjb250ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50LnRleHQoY29udGVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5nZXRUaXRsZSA9IGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICAgICAgdmFyIHRpdGxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpO1xuXG4gICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gdHlwZW9mIHRoaXMuY29uZmlnLnRpdGxlID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcudGl0bGUuY2FsbCh0aGlzLmVsZW1lbnQpIDogdGhpcy5jb25maWcudGl0bGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2dldE9mZnNldCA9IGZ1bmN0aW9uIF9nZXRPZmZzZXQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvZmZzZXQuZm4gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGRhdGEub2Zmc2V0cyA9IF9vYmplY3RTcHJlYWQoe30sIGRhdGEub2Zmc2V0cywgX3RoaXMzLmNvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzLCBfdGhpczMuZWxlbWVudCkgfHwge30pO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0Lm9mZnNldCA9IHRoaXMuY29uZmlnLm9mZnNldDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRDb250YWluZXIgPSBmdW5jdGlvbiBfZ2V0Q29udGFpbmVyKCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gICAgICB9XG5cbiAgICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLmNvbmZpZy5jb250YWluZXIpKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMuY29uZmlnLmNvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkKGRvY3VtZW50KS5maW5kKHRoaXMuY29uZmlnLmNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0QXR0YWNobWVudCA9IGZ1bmN0aW9uIF9nZXRBdHRhY2htZW50KHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIEF0dGFjaG1lbnRNYXAkMVtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV07XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0TGlzdGVuZXJzID0gZnVuY3Rpb24gX3NldExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLmNvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJyk7XG4gICAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgJChfdGhpczQuZWxlbWVudCkub24oX3RoaXM0LmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCBfdGhpczQuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczQudG9nZ2xlKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUcmlnZ2VyLk1BTlVBTCkge1xuICAgICAgICAgIHZhciBldmVudEluID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/IF90aGlzNC5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDogX3RoaXM0LmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU47XG4gICAgICAgICAgdmFyIGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/IF90aGlzNC5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDogX3RoaXM0LmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUO1xuICAgICAgICAgICQoX3RoaXM0LmVsZW1lbnQpLm9uKGV2ZW50SW4sIF90aGlzNC5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5fZW50ZXIoZXZlbnQpO1xuICAgICAgICAgIH0pLm9uKGV2ZW50T3V0LCBfdGhpczQuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczQuX2xlYXZlKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub24oJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpczQuZWxlbWVudCkge1xuICAgICAgICAgIF90aGlzNC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLmNvbmZpZywge1xuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpeFRpdGxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fZml4VGl0bGUgPSBmdW5jdGlvbiBfZml4VGl0bGUoKSB7XG4gICAgICB2YXIgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKTtcblxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJywgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2VudGVyID0gZnVuY3Rpb24gX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZSQ2LlNIT1cpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KTtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1c7XG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2xlYXZlID0gZnVuY3Rpb24gX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpO1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuT1VUO1xuXG4gICAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgY29udGV4dC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2lzV2l0aEFjdGl2ZVRyaWdnZXIgPSBmdW5jdGlvbiBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICAgIGZvciAodmFyIHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgdmFyIGRhdGFBdHRyaWJ1dGVzID0gJCh0aGlzLmVsZW1lbnQpLmRhdGEoKTtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhQXR0cikge1xuICAgICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmluZGV4T2YoZGF0YUF0dHIpICE9PSAtMSkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LCBkYXRhQXR0cmlidXRlcywgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkNiwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcblxuICAgICAgaWYgKGNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICBjb25maWcudGVtcGxhdGUgPSBzYW5pdGl6ZUh0bWwoY29uZmlnLnRlbXBsYXRlLCBjb25maWcud2hpdGVMaXN0LCBjb25maWcuc2FuaXRpemVGbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0RGVsZWdhdGVDb25maWcgPSBmdW5jdGlvbiBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgICB2YXIgY29uZmlnID0ge307XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9jbGVhblRpcENsYXNzID0gZnVuY3Rpb24gX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgICB2YXIgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpO1xuICAgICAgdmFyIHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWCk7XG5cbiAgICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGgpIHtcbiAgICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlID0gZnVuY3Rpb24gX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgICB2YXIgcG9wcGVySW5zdGFuY2UgPSBwb3BwZXJEYXRhLmluc3RhbmNlO1xuICAgICAgdGhpcy50aXAgPSBwb3BwZXJJbnN0YW5jZS5wb3BwZXI7XG5cbiAgICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKTtcblxuICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChwb3BwZXJEYXRhLnBsYWNlbWVudCkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2ZpeFRyYW5zaXRpb24gPSBmdW5jdGlvbiBfZml4VHJhbnNpdGlvbigpIHtcbiAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgIHZhciBpbml0Q29uZmlnQW5pbWF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0aW9uO1xuXG4gICAgICBpZiAodGlwLmdldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkNi5GQURFKTtcbiAgICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGluaXRDb25maWdBbmltYXRpb247XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZJDYpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnO1xuXG4gICAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZJDYsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhUb29sdGlwLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQ2O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkNDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiTkFNRVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBOQU1FJDY7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRBVEFfS0VZXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERBVEFfS0VZJDY7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkV2ZW50XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEV2ZW50JDY7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkVWRU5UX0tFWVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBFVkVOVF9LRVkkNjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNDtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVG9vbHRpcDtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkLmZuW05BTUUkNl0gPSBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRSQ2XS5Db25zdHJ1Y3RvciA9IFRvb2x0aXA7XG5cbiAgJC5mbltOQU1FJDZdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FJDZdID0gSlFVRVJZX05PX0NPTkZMSUNUJDY7XG4gICAgcmV0dXJuIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkNyA9ICdwb3BvdmVyJztcbiAgdmFyIFZFUlNJT04kNyA9ICc0LjMuMSc7XG4gIHZhciBEQVRBX0tFWSQ3ID0gJ2JzLnBvcG92ZXInO1xuICB2YXIgRVZFTlRfS0VZJDcgPSBcIi5cIiArIERBVEFfS0VZJDc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkNyA9ICQuZm5bTkFNRSQ3XTtcbiAgdmFyIENMQVNTX1BSRUZJWCQxID0gJ2JzLXBvcG92ZXInO1xuICB2YXIgQlNDTFNfUFJFRklYX1JFR0VYJDEgPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBDTEFTU19QUkVGSVgkMSArIFwiXFxcXFMrXCIsICdnJyk7XG5cbiAgdmFyIERlZmF1bHQkNSA9IF9vYmplY3RTcHJlYWQoe30sIFRvb2x0aXAuRGVmYXVsdCwge1xuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+PC9kaXY+J1xuICB9KTtcblxuICB2YXIgRGVmYXVsdFR5cGUkNSA9IF9vYmplY3RTcHJlYWQoe30sIFRvb2x0aXAuRGVmYXVsdFR5cGUsIHtcbiAgICBjb250ZW50OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbiAgfSk7XG5cbiAgdmFyIENsYXNzTmFtZSQ3ID0ge1xuICAgIEZBREU6ICdmYWRlJyxcbiAgICBTSE9XOiAnc2hvdydcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDcgPSB7XG4gICAgVElUTEU6ICcucG9wb3Zlci1oZWFkZXInLFxuICAgIENPTlRFTlQ6ICcucG9wb3Zlci1ib2R5J1xuICB9O1xuICB2YXIgRXZlbnQkNyA9IHtcbiAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSQ3LFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSQ3LFxuICAgIFNIT1c6IFwic2hvd1wiICsgRVZFTlRfS0VZJDcsXG4gICAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWSQ3LFxuICAgIElOU0VSVEVEOiBcImluc2VydGVkXCIgKyBFVkVOVF9LRVkkNyxcbiAgICBDTElDSzogXCJjbGlja1wiICsgRVZFTlRfS0VZJDcsXG4gICAgRk9DVVNJTjogXCJmb2N1c2luXCIgKyBFVkVOVF9LRVkkNyxcbiAgICBGT0NVU09VVDogXCJmb2N1c291dFwiICsgRVZFTlRfS0VZJDcsXG4gICAgTU9VU0VFTlRFUjogXCJtb3VzZWVudGVyXCIgKyBFVkVOVF9LRVkkNyxcbiAgICBNT1VTRUxFQVZFOiBcIm1vdXNlbGVhdmVcIiArIEVWRU5UX0tFWSQ3XG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG5cbiAgdmFyIFBvcG92ZXIgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfVG9vbHRpcCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFBvcG92ZXIsIF9Ub29sdGlwKTtcblxuICAgIGZ1bmN0aW9uIFBvcG92ZXIoKSB7XG4gICAgICByZXR1cm4gX1Rvb2x0aXAuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBQb3BvdmVyLnByb3RvdHlwZTtcblxuICAgIC8vIE92ZXJyaWRlc1xuICAgIF9wcm90by5pc1dpdGhDb250ZW50ID0gZnVuY3Rpb24gaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uYWRkQXR0YWNobWVudENsYXNzID0gZnVuY3Rpb24gYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKENMQVNTX1BSRUZJWCQxICsgXCItXCIgKyBhdHRhY2htZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmdldFRpcEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRUaXBFbGVtZW50KCkge1xuICAgICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXTtcbiAgICAgIHJldHVybiB0aGlzLnRpcDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNldENvbnRlbnQgPSBmdW5jdGlvbiBzZXRDb250ZW50KCkge1xuICAgICAgdmFyICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKTsgLy8gV2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuXG4gICAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTZWxlY3RvciQ3LlRJVExFKSwgdGhpcy5nZXRUaXRsZSgpKTtcblxuICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLl9nZXRDb250ZW50KCk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb250ZW50ID0gY29udGVudC5jYWxsKHRoaXMuZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yJDcuQ09OVEVOVCksIGNvbnRlbnQpO1xuICAgICAgJHRpcC5yZW1vdmVDbGFzcyhDbGFzc05hbWUkNy5GQURFICsgXCIgXCIgKyBDbGFzc05hbWUkNy5TSE9XKTtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2dldENvbnRlbnQgPSBmdW5jdGlvbiBfZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKSB8fCB0aGlzLmNvbmZpZy5jb250ZW50O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NsZWFuVGlwQ2xhc3MgPSBmdW5jdGlvbiBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICAgIHZhciAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSk7XG4gICAgICB2YXIgdGFiQ2xhc3MgPSAkdGlwLmF0dHIoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYJDEpO1xuXG4gICAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAkdGlwLnJlbW92ZUNsYXNzKHRhYkNsYXNzLmpvaW4oJycpKTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkkNyk7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgUG9wb3Zlcih0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVkkNywgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKFBvcG92ZXIsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgLy8gR2V0dGVyc1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdCQ1O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJOQU1FXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIE5BTUUkNztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiREFUQV9LRVlcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gREFUQV9LRVkkNztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRXZlbnRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRXZlbnQkNztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRVZFTlRfS0VZXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEVWRU5UX0tFWSQ3O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0VHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ1O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQb3BvdmVyO1xuICB9KFRvb2x0aXApO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkLmZuW05BTUUkN10gPSBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRSQ3XS5Db25zdHJ1Y3RvciA9IFBvcG92ZXI7XG5cbiAgJC5mbltOQU1FJDddLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FJDddID0gSlFVRVJZX05PX0NPTkZMSUNUJDc7XG4gICAgcmV0dXJuIFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkOCA9ICdzY3JvbGxzcHknO1xuICB2YXIgVkVSU0lPTiQ4ID0gJzQuMy4xJztcbiAgdmFyIERBVEFfS0VZJDggPSAnYnMuc2Nyb2xsc3B5JztcbiAgdmFyIEVWRU5UX0tFWSQ4ID0gXCIuXCIgKyBEQVRBX0tFWSQ4O1xuICB2YXIgREFUQV9BUElfS0VZJDYgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ4ID0gJC5mbltOQU1FJDhdO1xuICB2YXIgRGVmYXVsdCQ2ID0ge1xuICAgIG9mZnNldDogMTAsXG4gICAgbWV0aG9kOiAnYXV0bycsXG4gICAgdGFyZ2V0OiAnJ1xuICB9O1xuICB2YXIgRGVmYXVsdFR5cGUkNiA9IHtcbiAgICBvZmZzZXQ6ICdudW1iZXInLFxuICAgIG1ldGhvZDogJ3N0cmluZycsXG4gICAgdGFyZ2V0OiAnKHN0cmluZ3xlbGVtZW50KSdcbiAgfTtcbiAgdmFyIEV2ZW50JDggPSB7XG4gICAgQUNUSVZBVEU6IFwiYWN0aXZhdGVcIiArIEVWRU5UX0tFWSQ4LFxuICAgIFNDUk9MTDogXCJzY3JvbGxcIiArIEVWRU5UX0tFWSQ4LFxuICAgIExPQURfREFUQV9BUEk6IFwibG9hZFwiICsgRVZFTlRfS0VZJDggKyBEQVRBX0FQSV9LRVkkNlxuICB9O1xuICB2YXIgQ2xhc3NOYW1lJDggPSB7XG4gICAgRFJPUERPV05fSVRFTTogJ2Ryb3Bkb3duLWl0ZW0nLFxuICAgIERST1BET1dOX01FTlU6ICdkcm9wZG93bi1tZW51JyxcbiAgICBBQ1RJVkU6ICdhY3RpdmUnXG4gIH07XG4gIHZhciBTZWxlY3RvciQ4ID0ge1xuICAgIERBVEFfU1BZOiAnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJyxcbiAgICBBQ1RJVkU6ICcuYWN0aXZlJyxcbiAgICBOQVZfTElTVF9HUk9VUDogJy5uYXYsIC5saXN0LWdyb3VwJyxcbiAgICBOQVZfTElOS1M6ICcubmF2LWxpbmsnLFxuICAgIE5BVl9JVEVNUzogJy5uYXYtaXRlbScsXG4gICAgTElTVF9JVEVNUzogJy5saXN0LWdyb3VwLWl0ZW0nLFxuICAgIERST1BET1dOOiAnLmRyb3Bkb3duJyxcbiAgICBEUk9QRE9XTl9JVEVNUzogJy5kcm9wZG93bi1pdGVtJyxcbiAgICBEUk9QRE9XTl9UT0dHTEU6ICcuZHJvcGRvd24tdG9nZ2xlJ1xuICB9O1xuICB2YXIgT2Zmc2V0TWV0aG9kID0ge1xuICAgIE9GRlNFVDogJ29mZnNldCcsXG4gICAgUE9TSVRJT046ICdwb3NpdGlvbidcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgU2Nyb2xsU3B5ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2Nyb2xsU3B5KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gZWxlbWVudC50YWdOYW1lID09PSAnQk9EWScgPyB3aW5kb3cgOiBlbGVtZW50O1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9zZWxlY3RvciA9IHRoaXMuX2NvbmZpZy50YXJnZXQgKyBcIiBcIiArIFNlbGVjdG9yJDguTkFWX0xJTktTICsgXCIsXCIgKyAodGhpcy5fY29uZmlnLnRhcmdldCArIFwiIFwiICsgU2VsZWN0b3IkOC5MSVNUX0lURU1TICsgXCIsXCIpICsgKHRoaXMuX2NvbmZpZy50YXJnZXQgKyBcIiBcIiArIFNlbGVjdG9yJDguRFJPUERPV05fSVRFTVMpO1xuICAgICAgdGhpcy5fb2Zmc2V0cyA9IFtdO1xuICAgICAgdGhpcy5fdGFyZ2V0cyA9IFtdO1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IDA7XG4gICAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLm9uKEV2ZW50JDguU0NST0xMLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9wcm9jZXNzKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IFNjcm9sbFNweS5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8ucmVmcmVzaCA9IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGF1dG9NZXRob2QgPSB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB0aGlzLl9zY3JvbGxFbGVtZW50LndpbmRvdyA/IE9mZnNldE1ldGhvZC5PRkZTRVQgOiBPZmZzZXRNZXRob2QuUE9TSVRJT047XG4gICAgICB2YXIgb2Zmc2V0TWV0aG9kID0gdGhpcy5fY29uZmlnLm1ldGhvZCA9PT0gJ2F1dG8nID8gYXV0b01ldGhvZCA6IHRoaXMuX2NvbmZpZy5tZXRob2Q7XG4gICAgICB2YXIgb2Zmc2V0QmFzZSA9IG9mZnNldE1ldGhvZCA9PT0gT2Zmc2V0TWV0aG9kLlBPU0lUSU9OID8gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOiAwO1xuICAgICAgdGhpcy5fb2Zmc2V0cyA9IFtdO1xuICAgICAgdGhpcy5fdGFyZ2V0cyA9IFtdO1xuICAgICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KCk7XG4gICAgICB2YXIgdGFyZ2V0cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcikpO1xuICAgICAgdGFyZ2V0cy5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldDtcbiAgICAgICAgdmFyIHRhcmdldFNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHZhciB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0QkNSLndpZHRoIHx8IHRhcmdldEJDUi5oZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gKGZhdCk6IHJlbW92ZSBza2V0Y2ggcmVsaWFuY2Ugb24galF1ZXJ5IHBvc2l0aW9uL29mZnNldFxuICAgICAgICAgICAgcmV0dXJuIFskKHRhcmdldClbb2Zmc2V0TWV0aG9kXSgpLnRvcCArIG9mZnNldEJhc2UsIHRhcmdldFNlbGVjdG9yXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBfdGhpczIuX29mZnNldHMucHVzaChpdGVtWzBdKTtcblxuICAgICAgICBfdGhpczIuX3RhcmdldHMucHVzaChpdGVtWzFdKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkkOCk7XG4gICAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLm9mZihFVkVOVF9LRVkkOCk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMuX3NlbGVjdG9yID0gbnVsbDtcbiAgICAgIHRoaXMuX29mZnNldHMgPSBudWxsO1xuICAgICAgdGhpcy5fdGFyZ2V0cyA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsO1xuICAgICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gbnVsbDtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBEZWZhdWx0JDYsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGFyZ2V0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgaWQgPSAkKGNvbmZpZy50YXJnZXQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgIGlkID0gVXRpbC5nZXRVSUQoTkFNRSQ4KTtcbiAgICAgICAgICAkKGNvbmZpZy50YXJnZXQpLmF0dHIoJ2lkJywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLnRhcmdldCA9IFwiI1wiICsgaWQ7XG4gICAgICB9XG5cbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkOCwgY29uZmlnLCBEZWZhdWx0VHlwZSQ2KTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0U2Nyb2xsVG9wID0gZnVuY3Rpb24gX2dldFNjcm9sbFRvcCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgPyB0aGlzLl9zY3JvbGxFbGVtZW50LnBhZ2VZT2Zmc2V0IDogdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0U2Nyb2xsSGVpZ2h0ID0gZnVuY3Rpb24gX2dldFNjcm9sbEhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCk7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0T2Zmc2V0SGVpZ2h0ID0gZnVuY3Rpb24gX2dldE9mZnNldEhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9wcm9jZXNzID0gZnVuY3Rpb24gX3Byb2Nlc3MoKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0O1xuXG4gICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KCk7XG5cbiAgICAgIHZhciBtYXhTY3JvbGwgPSB0aGlzLl9jb25maWcub2Zmc2V0ICsgc2Nyb2xsSGVpZ2h0IC0gdGhpcy5fZ2V0T2Zmc2V0SGVpZ2h0KCk7XG5cbiAgICAgIGlmICh0aGlzLl9zY3JvbGxIZWlnaHQgIT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbFRvcCA+PSBtYXhTY3JvbGwpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldHNbdGhpcy5fdGFyZ2V0cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbMF0gJiYgdGhpcy5fb2Zmc2V0c1swXSA+IDApIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9jbGVhcigpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9mZnNldExlbmd0aCA9IHRoaXMuX29mZnNldHMubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gb2Zmc2V0TGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIHZhciBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJiBzY3JvbGxUb3AgPj0gdGhpcy5fb2Zmc2V0c1tpXSAmJiAodHlwZW9mIHRoaXMuX29mZnNldHNbaSArIDFdID09PSAndW5kZWZpbmVkJyB8fCBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzW2kgKyAxXSk7XG5cbiAgICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9hY3RpdmF0ZSA9IGZ1bmN0aW9uIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldDtcblxuICAgICAgdGhpcy5fY2xlYXIoKTtcblxuICAgICAgdmFyIHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3Rvci5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yICsgXCJbZGF0YS10YXJnZXQ9XFxcIlwiICsgdGFyZ2V0ICsgXCJcXFwiXSxcIiArIHNlbGVjdG9yICsgXCJbaHJlZj1cXFwiXCIgKyB0YXJnZXQgKyBcIlxcXCJdXCI7XG4gICAgICB9KTtcblxuICAgICAgdmFyICRsaW5rID0gJChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcmllcy5qb2luKCcsJykpKSk7XG5cbiAgICAgIGlmICgkbGluay5oYXNDbGFzcyhDbGFzc05hbWUkOC5EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgICAkbGluay5jbG9zZXN0KFNlbGVjdG9yJDguRFJPUERPV04pLmZpbmQoU2VsZWN0b3IkOC5EUk9QRE9XTl9UT0dHTEUpLmFkZENsYXNzKENsYXNzTmFtZSQ4LkFDVElWRSk7XG4gICAgICAgICRsaW5rLmFkZENsYXNzKENsYXNzTmFtZSQ4LkFDVElWRSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmsgYXMgYWN0aXZlXG4gICAgICAgICRsaW5rLmFkZENsYXNzKENsYXNzTmFtZSQ4LkFDVElWRSk7IC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG5cbiAgICAgICAgJGxpbmsucGFyZW50cyhTZWxlY3RvciQ4Lk5BVl9MSVNUX0dST1VQKS5wcmV2KFNlbGVjdG9yJDguTkFWX0xJTktTICsgXCIsIFwiICsgU2VsZWN0b3IkOC5MSVNUX0lURU1TKS5hZGRDbGFzcyhDbGFzc05hbWUkOC5BQ1RJVkUpOyAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlIHdoZW4gLm5hdi1saW5rIGlzIGluc2lkZSAubmF2LWl0ZW1cblxuICAgICAgICAkbGluay5wYXJlbnRzKFNlbGVjdG9yJDguTkFWX0xJU1RfR1JPVVApLnByZXYoU2VsZWN0b3IkOC5OQVZfSVRFTVMpLmNoaWxkcmVuKFNlbGVjdG9yJDguTkFWX0xJTktTKS5hZGRDbGFzcyhDbGFzc05hbWUkOC5BQ1RJVkUpO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLnRyaWdnZXIoRXZlbnQkOC5BQ1RJVkFURSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NsZWFyID0gZnVuY3Rpb24gX2NsZWFyKCkge1xuICAgICAgW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yKSkuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUkOC5BQ1RJVkUpO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZSQ4LkFDVElWRSk7XG4gICAgICB9KTtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSQ4KTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFNjcm9sbFNweSh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVkkOCwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKFNjcm9sbFNweSwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT04kODtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0JDY7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNjcm9sbFNweTtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQod2luZG93KS5vbihFdmVudCQ4LkxPQURfREFUQV9BUEksIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2Nyb2xsU3B5cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQ4LkRBVEFfU1BZKSk7XG4gICAgdmFyIHNjcm9sbFNweXNMZW5ndGggPSBzY3JvbGxTcHlzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSBzY3JvbGxTcHlzTGVuZ3RoOyBpLS07KSB7XG4gICAgICB2YXIgJHNweSA9ICQoc2Nyb2xsU3B5c1tpXSk7XG5cbiAgICAgIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHNweSwgJHNweS5kYXRhKCkpO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUUkOF0gPSBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FJDhdLkNvbnN0cnVjdG9yID0gU2Nyb2xsU3B5O1xuXG4gICQuZm5bTkFNRSQ4XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRSQ4XSA9IEpRVUVSWV9OT19DT05GTElDVCQ4O1xuICAgIHJldHVybiBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkOSA9ICd0YWInO1xuICB2YXIgVkVSU0lPTiQ5ID0gJzQuMy4xJztcbiAgdmFyIERBVEFfS0VZJDkgPSAnYnMudGFiJztcbiAgdmFyIEVWRU5UX0tFWSQ5ID0gXCIuXCIgKyBEQVRBX0tFWSQ5O1xuICB2YXIgREFUQV9BUElfS0VZJDcgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ5ID0gJC5mbltOQU1FJDldO1xuICB2YXIgRXZlbnQkOSA9IHtcbiAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSQ5LFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSQ5LFxuICAgIFNIT1c6IFwic2hvd1wiICsgRVZFTlRfS0VZJDksXG4gICAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWSQ5LFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkOSArIERBVEFfQVBJX0tFWSQ3XG4gIH07XG4gIHZhciBDbGFzc05hbWUkOSA9IHtcbiAgICBEUk9QRE9XTl9NRU5VOiAnZHJvcGRvd24tbWVudScsXG4gICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICBESVNBQkxFRDogJ2Rpc2FibGVkJyxcbiAgICBGQURFOiAnZmFkZScsXG4gICAgU0hPVzogJ3Nob3cnXG4gIH07XG4gIHZhciBTZWxlY3RvciQ5ID0ge1xuICAgIERST1BET1dOOiAnLmRyb3Bkb3duJyxcbiAgICBOQVZfTElTVF9HUk9VUDogJy5uYXYsIC5saXN0LWdyb3VwJyxcbiAgICBBQ1RJVkU6ICcuYWN0aXZlJyxcbiAgICBBQ1RJVkVfVUw6ICc+IGxpID4gLmFjdGl2ZScsXG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLXRvZ2dsZT1cImxpc3RcIl0nLFxuICAgIERST1BET1dOX1RPR0dMRTogJy5kcm9wZG93bi10b2dnbGUnLFxuICAgIERST1BET1dOX0FDVElWRV9DSElMRDogJz4gLmRyb3Bkb3duLW1lbnUgLmFjdGl2ZSdcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgVGFiID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFiKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gVGFiLnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiYgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQ5LkFDVElWRSkgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkOS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0O1xuICAgICAgdmFyIHByZXZpb3VzO1xuICAgICAgdmFyIGxpc3RFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yJDkuTkFWX0xJU1RfR1JPVVApWzBdO1xuICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICBpZiAobGlzdEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGl0ZW1TZWxlY3RvciA9IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnVUwnIHx8IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnT0wnID8gU2VsZWN0b3IkOS5BQ1RJVkVfVUwgOiBTZWxlY3RvciQ5LkFDVElWRTtcbiAgICAgICAgcHJldmlvdXMgPSAkLm1ha2VBcnJheSgkKGxpc3RFbGVtZW50KS5maW5kKGl0ZW1TZWxlY3RvcikpO1xuICAgICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudCQ5LkhJREUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgICB2YXIgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudCQ5LlNIT1csIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRlRXZlbnQpO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KTtcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX2VsZW1lbnQsIGxpc3RFbGVtZW50KTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHZhciBoaWRkZW5FdmVudCA9ICQuRXZlbnQoRXZlbnQkOS5ISURERU4sIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBfdGhpcy5fZWxlbWVudFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50JDkuU0hPV04sIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgICB9KTtcbiAgICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRkZW5FdmVudCk7XG4gICAgICAgICQoX3RoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQ5KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fYWN0aXZhdGUgPSBmdW5jdGlvbiBfYWN0aXZhdGUoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBhY3RpdmVFbGVtZW50cyA9IGNvbnRhaW5lciAmJiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnVUwnIHx8IGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ09MJykgPyAkKGNvbnRhaW5lcikuZmluZChTZWxlY3RvciQ5LkFDVElWRV9VTCkgOiAkKGNvbnRhaW5lcikuY2hpbGRyZW4oU2VsZWN0b3IkOS5BQ1RJVkUpO1xuICAgICAgdmFyIGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnRzWzBdO1xuICAgICAgdmFyIGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrICYmIGFjdGl2ZSAmJiAkKGFjdGl2ZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDkuRkFERSk7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLl90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjayk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoYWN0aXZlICYmIGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmUpO1xuICAgICAgICAkKGFjdGl2ZSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDkuU0hPVykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl90cmFuc2l0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBfdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgJChhY3RpdmUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ5LkFDVElWRSk7XG4gICAgICAgIHZhciBkcm9wZG93bkNoaWxkID0gJChhY3RpdmUucGFyZW50Tm9kZSkuZmluZChTZWxlY3RvciQ5LkRST1BET1dOX0FDVElWRV9DSElMRClbMF07XG5cbiAgICAgICAgaWYgKGRyb3Bkb3duQ2hpbGQpIHtcbiAgICAgICAgICAkKGRyb3Bkb3duQ2hpbGQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ5LkFDVElWRSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUkOS5BQ1RJVkUpO1xuXG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgVXRpbC5yZWZsb3coZWxlbWVudCk7XG5cbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUkOS5GQURFKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lJDkuU0hPVyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgJChlbGVtZW50LnBhcmVudE5vZGUpLmhhc0NsYXNzKENsYXNzTmFtZSQ5LkRST1BET1dOX01FTlUpKSB7XG4gICAgICAgIHZhciBkcm9wZG93bkVsZW1lbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IkOS5EUk9QRE9XTilbMF07XG5cbiAgICAgICAgaWYgKGRyb3Bkb3duRWxlbWVudCkge1xuICAgICAgICAgIHZhciBkcm9wZG93blRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRyb3Bkb3duRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDkuRFJPUERPV05fVE9HR0xFKSk7XG4gICAgICAgICAgJChkcm9wZG93blRvZ2dsZUxpc3QpLmFkZENsYXNzKENsYXNzTmFtZSQ5LkFDVElWRSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIFRhYi5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZGF0YSA9ICR0aGlzLmRhdGEoREFUQV9LRVkkOSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUYWIodGhpcyk7XG4gICAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSQ5LCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGFiLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQ5O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUYWI7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKGRvY3VtZW50KS5vbihFdmVudCQ5LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3RvciQ5LkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgVGFiLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAnc2hvdycpO1xuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRSQ5XSA9IFRhYi5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUUkOV0uQ29uc3RydWN0b3IgPSBUYWI7XG5cbiAgJC5mbltOQU1FJDldLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FJDldID0gSlFVRVJZX05PX0NPTkZMSUNUJDk7XG4gICAgcmV0dXJuIFRhYi5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSRhID0gJ3RvYXN0JztcbiAgdmFyIFZFUlNJT04kYSA9ICc0LjMuMSc7XG4gIHZhciBEQVRBX0tFWSRhID0gJ2JzLnRvYXN0JztcbiAgdmFyIEVWRU5UX0tFWSRhID0gXCIuXCIgKyBEQVRBX0tFWSRhO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJGEgPSAkLmZuW05BTUUkYV07XG4gIHZhciBFdmVudCRhID0ge1xuICAgIENMSUNLX0RJU01JU1M6IFwiY2xpY2suZGlzbWlzc1wiICsgRVZFTlRfS0VZJGEsXG4gICAgSElERTogXCJoaWRlXCIgKyBFVkVOVF9LRVkkYSxcbiAgICBISURERU46IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkYSxcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSRhLFxuICAgIFNIT1dOOiBcInNob3duXCIgKyBFVkVOVF9LRVkkYVxuICB9O1xuICB2YXIgQ2xhc3NOYW1lJGEgPSB7XG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIEhJREU6ICdoaWRlJyxcbiAgICBTSE9XOiAnc2hvdycsXG4gICAgU0hPV0lORzogJ3Nob3dpbmcnXG4gIH07XG4gIHZhciBEZWZhdWx0VHlwZSQ3ID0ge1xuICAgIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICAgIGF1dG9oaWRlOiAnYm9vbGVhbicsXG4gICAgZGVsYXk6ICdudW1iZXInXG4gIH07XG4gIHZhciBEZWZhdWx0JDcgPSB7XG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIGF1dG9oaWRlOiB0cnVlLFxuICAgIGRlbGF5OiA1MDBcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJGEgPSB7XG4gICAgREFUQV9ESVNNSVNTOiAnW2RhdGEtZGlzbWlzcz1cInRvYXN0XCJdJ1xuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBUb2FzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvYXN0KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuXG4gICAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKTtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IFRvYXN0LnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudCRhLlNIT1cpO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lJGEuRkFERSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBfdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZSRhLlNIT1dJTkcpO1xuXG4gICAgICAgIF90aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lJGEuU0hPVyk7XG5cbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudCRhLlNIT1dOKTtcblxuICAgICAgICBpZiAoX3RoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgICAgIF90aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZSRhLkhJREUpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lJGEuU0hPV0lORyk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZSh3aXRob3V0VGltZW91dCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lJGEuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQkYS5ISURFKTtcblxuICAgICAgaWYgKHdpdGhvdXRUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9jbG9zZSgpO1xuICAgICAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZSRhLlNIT1cpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUkYS5TSE9XKTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQkYS5DTElDS19ESVNNSVNTKTtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSRhKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBEZWZhdWx0JDcsICQodGhpcy5fZWxlbWVudCkuZGF0YSgpLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSk7XG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FJGEsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3NldExpc3RlbmVycyA9IGZ1bmN0aW9uIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCRhLkNMSUNLX0RJU01JU1MsIFNlbGVjdG9yJGEuREFUQV9ESVNNSVNTLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuaGlkZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2Nsb3NlID0gZnVuY3Rpb24gX2Nsb3NlKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBfdGhpczQuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUkYS5ISURFKTtcblxuICAgICAgICAkKF90aGlzNC5fZWxlbWVudCkudHJpZ2dlcihFdmVudCRhLkhJRERFTik7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lJGEuU0hPVyk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZGF0YSA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkkYSk7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWc7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUb2FzdCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZJGEsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10odGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoVG9hc3QsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJGE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRUeXBlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdCQ3O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUb2FzdDtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkLmZuW05BTUUkYV0gPSBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUUkYV0uQ29uc3RydWN0b3IgPSBUb2FzdDtcblxuICAkLmZuW05BTUUkYV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkYV0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkYTtcbiAgICByZXR1cm4gVG9hc3QuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NC4zLjEpOiBpbmRleC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkuIGpRdWVyeSBtdXN0IGJlIGluY2x1ZGVkIGJlZm9yZSBCb290c3RyYXBcXCdzIEphdmFTY3JpcHQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJyk7XG4gICAgdmFyIG1pbk1ham9yID0gMTtcbiAgICB2YXIgbHRNYWpvciA9IDI7XG4gICAgdmFyIG1pbk1pbm9yID0gOTtcbiAgICB2YXIgbWluUGF0Y2ggPSAxO1xuICAgIHZhciBtYXhNYWpvciA9IDQ7XG5cbiAgICBpZiAodmVyc2lvblswXSA8IGx0TWFqb3IgJiYgdmVyc2lvblsxXSA8IG1pbk1pbm9yIHx8IHZlcnNpb25bMF0gPT09IG1pbk1ham9yICYmIHZlcnNpb25bMV0gPT09IG1pbk1pbm9yICYmIHZlcnNpb25bMl0gPCBtaW5QYXRjaCB8fCB2ZXJzaW9uWzBdID49IG1heE1ham9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBhdCBsZWFzdCBqUXVlcnkgdjEuOS4xIGJ1dCBsZXNzIHRoYW4gdjQuMC4wJyk7XG4gICAgfVxuICB9KSgpO1xuXG4gIGV4cG9ydHMuVXRpbCA9IFV0aWw7XG4gIGV4cG9ydHMuQWxlcnQgPSBBbGVydDtcbiAgZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG4gIGV4cG9ydHMuQ2Fyb3VzZWwgPSBDYXJvdXNlbDtcbiAgZXhwb3J0cy5Db2xsYXBzZSA9IENvbGxhcHNlO1xuICBleHBvcnRzLkRyb3Bkb3duID0gRHJvcGRvd247XG4gIGV4cG9ydHMuTW9kYWwgPSBNb2RhbDtcbiAgZXhwb3J0cy5Qb3BvdmVyID0gUG9wb3ZlcjtcbiAgZXhwb3J0cy5TY3JvbGxzcHkgPSBTY3JvbGxTcHk7XG4gIGV4cG9ydHMuVGFiID0gVGFiO1xuICBleHBvcnRzLlRvYXN0ID0gVG9hc3Q7XG4gIGV4cG9ydHMuVG9vbHRpcCA9IFRvb2x0aXA7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLmJ1bmRsZS5qcy5tYXBcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJChmdW5jdGlvbigpIHtcblxuICAkKFwiI2NvbnRhY3RGb3JtIGlucHV0LCNjb250YWN0Rm9ybSB0ZXh0YXJlYVwiKS5qcUJvb3RzdHJhcFZhbGlkYXRpb24oe1xuICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgc3VibWl0RXJyb3I6IGZ1bmN0aW9uKCRmb3JtLCBldmVudCwgZXJyb3JzKSB7XG4gICAgICAvLyBhZGRpdGlvbmFsIGVycm9yIG1lc3NhZ2VzIG9yIGV2ZW50c1xuICAgIH0sXG4gICAgc3VibWl0U3VjY2VzczogZnVuY3Rpb24oJGZvcm0sIGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IGRlZmF1bHQgc3VibWl0IGJlaGF2aW91clxuICAgICAgLy8gZ2V0IHZhbHVlcyBmcm9tIEZPUk1cbiAgICAgIHZhciBuYW1lID0gJChcImlucHV0I25hbWVcIikudmFsKCk7XG4gICAgICB2YXIgZW1haWwgPSAkKFwiaW5wdXQjZW1haWxcIikudmFsKCk7XG4gICAgICB2YXIgcGhvbmUgPSAkKFwiaW5wdXQjcGhvbmVcIikudmFsKCk7XG4gICAgICB2YXIgbWVzc2FnZSA9ICQoXCJ0ZXh0YXJlYSNtZXNzYWdlXCIpLnZhbCgpO1xuICAgICAgdmFyIGZpcnN0TmFtZSA9IG5hbWU7IC8vIEZvciBTdWNjZXNzL0ZhaWx1cmUgTWVzc2FnZVxuICAgICAgLy8gQ2hlY2sgZm9yIHdoaXRlIHNwYWNlIGluIG5hbWUgZm9yIFN1Y2Nlc3MvRmFpbCBtZXNzYWdlXG4gICAgICBpZiAoZmlyc3ROYW1lLmluZGV4T2YoJyAnKSA+PSAwKSB7XG4gICAgICAgIGZpcnN0TmFtZSA9IG5hbWUuc3BsaXQoJyAnKS5zbGljZSgwLCAtMSkuam9pbignICcpO1xuICAgICAgfVxuICAgICAgJHRoaXMgPSAkKFwiI3NlbmRNZXNzYWdlQnV0dG9uXCIpO1xuICAgICAgJHRoaXMucHJvcChcImRpc2FibGVkXCIsIHRydWUpOyAvLyBEaXNhYmxlIHN1Ym1pdCBidXR0b24gdW50aWwgQUpBWCBjYWxsIGlzIGNvbXBsZXRlIHRvIHByZXZlbnQgZHVwbGljYXRlIG1lc3NhZ2VzXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IFwiLi8uL0NvbnRyb2xsZXIvQ29udGFjdENvbnRyb2xsZXIucGhwXCIsXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBwaG9uZTogcGhvbmUsXG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBTdWNjZXNzIG1lc3NhZ2VcbiAgICAgICAgICAkKCcjc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC1zdWNjZXNzJz5cIik7XG4gICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtc3VjY2VzcycpLmh0bWwoXCI8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+JnRpbWVzO1wiKVxuICAgICAgICAgICAgLmFwcGVuZChcIjwvYnV0dG9uPlwiKTtcbiAgICAgICAgICAkKCcjc3VjY2VzcyA+IC5hbGVydC1zdWNjZXNzJylcbiAgICAgICAgICAgIC5hcHBlbmQoXCI8c3Ryb25nPllvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50LiA8L3N0cm9uZz5cIik7XG4gICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtc3VjY2VzcycpXG4gICAgICAgICAgICAuYXBwZW5kKCc8L2Rpdj4nKTtcbiAgICAgICAgICAvL2NsZWFyIGFsbCBmaWVsZHNcbiAgICAgICAgICAkKCcjY29udGFjdEZvcm0nKS50cmlnZ2VyKFwicmVzZXRcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBGYWlsIG1lc3NhZ2VcbiAgICAgICAgICAkKCcjc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC1kYW5nZXInPlwiKTtcbiAgICAgICAgICAkKCcjc3VjY2VzcyA+IC5hbGVydC1kYW5nZXInKS5odG1sKFwiPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdhbGVydCcgYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lcztcIilcbiAgICAgICAgICAgIC5hcHBlbmQoXCI8L2J1dHRvbj5cIik7XG4gICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtZGFuZ2VyJykuYXBwZW5kKCQoXCI8c3Ryb25nPlwiKS50ZXh0KFwiU29ycnkgXCIgKyBmaXJzdE5hbWUgKyBcIiwgaXQgc2VlbXMgdGhhdCBteSBtYWlsIHNlcnZlciBpcyBub3QgcmVzcG9uZGluZy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlciFcIikpO1xuICAgICAgICAgICQoJyNzdWNjZXNzID4gLmFsZXJ0LWRhbmdlcicpLmFwcGVuZCgnPC9kaXY+Jyk7XG4gICAgICAgICAgLy9jbGVhciBhbGwgZmllbGRzXG4gICAgICAgICAgJCgnI2NvbnRhY3RGb3JtJykudHJpZ2dlcihcInJlc2V0XCIpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICR0aGlzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7IC8vIFJlLWVuYWJsZSBzdWJtaXQgYnV0dG9uIHdoZW4gQUpBWCBjYWxsIGlzIGNvbXBsZXRlXG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkKHRoaXMpLmlzKFwiOnZpc2libGVcIik7XG4gICAgfSxcbiAgfSk7XG5cbiAgJChcImFbZGF0YS10b2dnbGU9XFxcInRhYlxcXCJdXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCh0aGlzKS50YWIoXCJzaG93XCIpO1xuICB9KTtcbn0pO1xuXG4vKldoZW4gY2xpY2tpbmcgb24gRnVsbCBoaWRlIGZhaWwvc3VjY2VzcyBib3hlcyAqL1xuJCgnI25hbWUnKS5mb2N1cyhmdW5jdGlvbigpIHtcbiAgJCgnI3N1Y2Nlc3MnKS5odG1sKCcnKTtcbn0pO1xuIiwiaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknXG5cbihmdW5jdGlvbigkKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvLyBTdGFydCBvZiB1c2Ugc3RyaWN0XG5cbiAgLy8gU21vb3RoIHNjcm9sbGluZyB1c2luZyBqUXVlcnkgZWFzaW5nXG4gICQoJ2EuanMtc2Nyb2xsLXRyaWdnZXJbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAodGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDcxKVxuICAgICAgICB9LCAxMDAwLCBcImVhc2VJbk91dEV4cG9cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNjcm9sbCB0byB0b3AgYnV0dG9uIGFwcGVhclxuICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjcm9sbERpc3RhbmNlID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgICBpZiAoc2Nyb2xsRGlzdGFuY2UgPiAxMDApIHtcbiAgICAgICQoJy5zY3JvbGwtdG8tdG9wJykuZmFkZUluKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5zY3JvbGwtdG8tdG9wJykuZmFkZU91dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQ2xvc2VzIHJlc3BvbnNpdmUgbWVudSB3aGVuIGEgc2Nyb2xsIHRyaWdnZXIgbGluayBpcyBjbGlja2VkXG4gICQoJy5qcy1zY3JvbGwtdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJy5uYXZiYXItY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xuICB9KTtcblxuICAvLyBBY3RpdmF0ZSBzY3JvbGxzcHkgdG8gYWRkIGFjdGl2ZSBjbGFzcyB0byBuYXZiYXIgaXRlbXMgb24gc2Nyb2xsXG4gICQoJ2JvZHknKS5zY3JvbGxzcHkoe1xuICAgIHRhcmdldDogJyNtYWluTmF2JyxcbiAgICBvZmZzZXQ6IDgwXG4gIH0pO1xuXG4gIC8vIENvbGxhcHNlIE5hdmJhclxuICB2YXIgbmF2YmFyQ29sbGFwc2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChcIiNtYWluTmF2XCIpLm9mZnNldCgpLnRvcCA+IDEwMCkge1xuICAgICAgJChcIiNtYWluTmF2XCIpLmFkZENsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIiNtYWluTmF2XCIpLnJlbW92ZUNsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcbiAgICB9XG4gIH07XG4gIC8vIENvbGxhcHNlIG5vdyBpZiBwYWdlIGlzIG5vdCBhdCB0b3BcbiAgbmF2YmFyQ29sbGFwc2UoKTtcbiAgLy8gQ29sbGFwc2UgdGhlIG5hdmJhciB3aGVuIHBhZ2UgaXMgc2Nyb2xsZWRcbiAgJCh3aW5kb3cpLnNjcm9sbChuYXZiYXJDb2xsYXBzZSk7XG5cbiAgLy8gRmxvYXRpbmcgbGFiZWwgaGVhZGluZ3MgZm9yIHRoZSBjb250YWN0IGZvcm1cbiAgJChmdW5jdGlvbigpIHtcbiAgICAkKFwiYm9keVwiKS5vbihcImlucHV0IHByb3BlcnR5Y2hhbmdlXCIsIFwiLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC12YWx1ZVwiLCAhISQoZS50YXJnZXQpLnZhbCgpKTtcbiAgICB9KS5vbihcImZvY3VzXCIsIFwiLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXBcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cC13aXRoLWZvY3VzXCIpO1xuICAgIH0pLm9uKFwiYmx1clwiLCBcIi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC1mb2N1c1wiKTtcbiAgICB9KTtcbiAgfSk7XG5cbn0pKGpRdWVyeSk7IC8vIEVuZCBvZiB1c2Ugc3RyaWN0XG4iLCJpbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSdcblxuLyoganFCb290c3RyYXBWYWxpZGF0aW9uXG4gKiBBIHBsdWdpbiBmb3IgYXV0b21hdGluZyB2YWxpZGF0aW9uIG9uIFR3aXR0ZXIgQm9vdHN0cmFwIGZvcm1hdHRlZCBmb3Jtcy5cbiAqXG4gKiB2MS4zLjZcbiAqXG4gKiBMaWNlbnNlOiBNSVQgPGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHA+IC0gc2VlIExJQ0VOU0UgZmlsZVxuICpcbiAqIGh0dHA6Ly9SZWFjdGl2ZVJhdmVuLmdpdGh1Yi5jb20vanFCb290c3RyYXBWYWxpZGF0aW9uL1xuICovXG5cbihmdW5jdGlvbiggJCApe1xuXG5cdHZhciBjcmVhdGVkRWxlbWVudHMgPSBbXTtcblxuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0b3B0aW9uczoge1xuXHRcdFx0cHJlcGVuZEV4aXN0aW5nSGVscEJsb2NrOiBmYWxzZSxcblx0XHRcdHNuaWZmSHRtbDogdHJ1ZSwgLy8gc25pZmYgZm9yICdyZXF1aXJlZCcsICdtYXhsZW5ndGgnLCBldGNcblx0XHRcdHByZXZlbnRTdWJtaXQ6IHRydWUsIC8vIHN0b3AgdGhlIGZvcm0gc3VibWl0IGV2ZW50IGZyb20gZmlyaW5nIGlmIHZhbGlkYXRpb24gZmFpbHNcblx0XHRcdHN1Ym1pdEVycm9yOiBmYWxzZSwgLy8gZnVuY3Rpb24gY2FsbGVkIGlmIHRoZXJlIGlzIGFuIGVycm9yIHdoZW4gdHJ5aW5nIHRvIHN1Ym1pdFxuXHRcdFx0c3VibWl0U3VjY2VzczogZmFsc2UsIC8vIGZ1bmN0aW9uIGNhbGxlZCBqdXN0IGJlZm9yZSBhIHN1Y2Nlc3NmdWwgc3VibWl0IGV2ZW50IGlzIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgICAgICAgICAgc2VtYW50aWNhbGx5U3RyaWN0OiBmYWxzZSwgLy8gc2V0IHRvIHRydWUgdG8gdGlkeSB1cCBnZW5lcmF0ZWQgSFRNTCBvdXRwdXRcblx0XHRcdGF1dG9BZGQ6IHtcblx0XHRcdFx0aGVscEJsb2NrczogdHJ1ZVxuXHRcdFx0fSxcbiAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiAkKHRoaXMpLmlzKFwiOnZpc2libGVcIik7IC8vIG9ubHkgdmFsaWRhdGUgZWxlbWVudHMgeW91IGNhbiBzZWVcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gdmFsaWRhdGUgZXZlcnl0aGluZ1xuICAgICAgICAgICAgfVxuXHRcdH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdCA6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkZWZhdWx0cyk7XG5cbiAgICAgICAgc2V0dGluZ3Mub3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHNldHRpbmdzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciAkc2libGluZ0VsZW1lbnRzID0gdGhpcztcblxuICAgICAgICB2YXIgdW5pcXVlRm9ybXMgPSAkLnVuaXF1ZShcbiAgICAgICAgICAkc2libGluZ0VsZW1lbnRzLm1hcCggZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICQodGhpcykucGFyZW50cyhcImZvcm1cIilbMF07XG4gICAgICAgICAgfSkudG9BcnJheSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgJCh1bmlxdWVGb3JtcykuYmluZChcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciAkZm9ybSA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIHdhcm5pbmdzRm91bmQgPSAwO1xuICAgICAgICAgIHZhciAkaW5wdXRzID0gJGZvcm0uZmluZChcImlucHV0LHRleHRhcmVhLHNlbGVjdFwiKS5ub3QoXCJbdHlwZT1zdWJtaXRdLFt0eXBlPWltYWdlXVwiKS5maWx0ZXIoc2V0dGluZ3Mub3B0aW9ucy5maWx0ZXIpO1xuICAgICAgICAgICRpbnB1dHMudHJpZ2dlcihcInN1Ym1pdC52YWxpZGF0aW9uXCIpLnRyaWdnZXIoXCJ2YWxpZGF0aW9uTG9zdEZvY3VzLnZhbGlkYXRpb25cIik7XG5cbiAgICAgICAgICAkaW5wdXRzLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKGVsKSxcbiAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cCA9ICR0aGlzLnBhcmVudHMoXCIuY29udHJvbC1ncm91cFwiKS5maXJzdCgpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLmhhc0NsYXNzKFwid2FybmluZ1wiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAucmVtb3ZlQ2xhc3MoXCJ3YXJuaW5nXCIpLmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgIHdhcm5pbmdzRm91bmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRpbnB1dHMudHJpZ2dlcihcInZhbGlkYXRpb25Mb3N0Rm9jdXMudmFsaWRhdGlvblwiKTtcblxuICAgICAgICAgIGlmICh3YXJuaW5nc0ZvdW5kKSB7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3Mub3B0aW9ucy5wcmV2ZW50U3VibWl0KSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLm9wdGlvbnMuc3VibWl0RXJyb3IpKSB7XG4gICAgICAgICAgICAgIHNldHRpbmdzLm9wdGlvbnMuc3VibWl0RXJyb3IoJGZvcm0sIGUsICRpbnB1dHMuanFCb290c3RyYXBWYWxpZGF0aW9uKFwiY29sbGVjdEVycm9yc1wiLCB0cnVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLm9wdGlvbnMuc3VibWl0U3VjY2VzcykpIHtcbiAgICAgICAgICAgICAgc2V0dGluZ3Mub3B0aW9ucy5zdWJtaXRTdWNjZXNzKCRmb3JtLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcblxuICAgICAgICAgIC8vIEdldCByZWZlcmVuY2VzIHRvIGV2ZXJ5dGhpbmcgd2UncmUgaW50ZXJlc3RlZCBpblxuICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAkY29udHJvbEdyb3VwID0gJHRoaXMucGFyZW50cyhcIi5jb250cm9sLWdyb3VwXCIpLmZpcnN0KCksXG4gICAgICAgICAgICAkaGVscEJsb2NrID0gJGNvbnRyb2xHcm91cC5maW5kKFwiLmhlbHAtYmxvY2tcIikuZmlyc3QoKSxcbiAgICAgICAgICAgICRmb3JtID0gJHRoaXMucGFyZW50cyhcImZvcm1cIikuZmlyc3QoKSxcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzID0gW107XG5cbiAgICAgICAgICAvLyBjcmVhdGUgbWVzc2FnZSBjb250YWluZXIgaWYgbm90IGV4aXN0c1xuICAgICAgICAgIGlmICghJGhlbHBCbG9jay5sZW5ndGggJiYgc2V0dGluZ3Mub3B0aW9ucy5hdXRvQWRkICYmIHNldHRpbmdzLm9wdGlvbnMuYXV0b0FkZC5oZWxwQmxvY2tzKSB7XG4gICAgICAgICAgICAgICRoZWxwQmxvY2sgPSAkKCc8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiIC8+Jyk7XG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAuZmluZCgnLmNvbnRyb2xzJykuYXBwZW5kKCRoZWxwQmxvY2spO1xuXHRcdFx0XHRcdFx0XHRjcmVhdGVkRWxlbWVudHMucHVzaCgkaGVscEJsb2NrWzBdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU05JRkYgSFRNTCBGT1IgVkFMSURBVE9SU1xuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICAgIC8vICpzbm9ydCBzbmlmZiBzbnVmZmxlKlxuXG4gICAgICAgICAgaWYgKHNldHRpbmdzLm9wdGlvbnMuc25pZmZIdG1sKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFUVEVSTlxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcInBhdHRlcm5cIikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJOb3QgaW4gdGhlIGV4cGVjdGVkIGZvcm1hdDwhLS0gZGF0YS12YWxpZGF0aW9uLXBhdHRlcm4tbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUGF0dGVybk1lc3NhZ2VcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25QYXR0ZXJuTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblBhdHRlcm5NZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblBhdHRlcm5SZWdleFwiLCAkdGhpcy5hdHRyKFwicGF0dGVyblwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1BWFxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1heFwiKSAhPT0gdW5kZWZpbmVkIHx8ICR0aGlzLmF0dHIoXCJhcmlhLXZhbHVlbWF4XCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdmFyIG1heCA9ICgkdGhpcy5hdHRyKFwibWF4XCIpICE9PSB1bmRlZmluZWQgPyAkdGhpcy5hdHRyKFwibWF4XCIpIDogJHRoaXMuYXR0cihcImFyaWEtdmFsdWVtYXhcIikpO1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJUb28gaGlnaDogTWF4aW11bSBvZiAnXCIgKyBtYXggKyBcIic8IS0tIGRhdGEtdmFsaWRhdGlvbi1tYXgtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4TWVzc2FnZVwiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heE1lc3NhZ2VcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhNZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heE1heFwiLCBtYXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNSU5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgaWYgKCR0aGlzLmF0dHIoXCJtaW5cIikgIT09IHVuZGVmaW5lZCB8fCAkdGhpcy5hdHRyKFwiYXJpYS12YWx1ZW1pblwiKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHZhciBtaW4gPSAoJHRoaXMuYXR0cihcIm1pblwiKSAhPT0gdW5kZWZpbmVkID8gJHRoaXMuYXR0cihcIm1pblwiKSA6ICR0aGlzLmF0dHIoXCJhcmlhLXZhbHVlbWluXCIpKTtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIGxvdzogTWluaW11bSBvZiAnXCIgKyBtaW4gKyBcIic8IS0tIGRhdGEtdmFsaWRhdGlvbi1taW4tbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWluTWVzc2FnZVwiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbk1lc3NhZ2VcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5NZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbk1pblwiLCBtaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQVhMRU5HVEhcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgaWYgKCR0aGlzLmF0dHIoXCJtYXhsZW5ndGhcIikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJUb28gbG9uZzogTWF4aW11bSBvZiAnXCIgKyAkdGhpcy5hdHRyKFwibWF4bGVuZ3RoXCIpICsgXCInIGNoYXJhY3RlcnM8IS0tIGRhdGEtdmFsaWRhdGlvbi1tYXhsZW5ndGgtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4bGVuZ3RoTWVzc2FnZVwiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGxlbmd0aE1lc3NhZ2VcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhsZW5ndGhNZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGxlbmd0aE1heGxlbmd0aFwiLCAkdGhpcy5hdHRyKFwibWF4bGVuZ3RoXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUlOTEVOR1RIXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWlubGVuZ3RoXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIHNob3J0OiBNaW5pbXVtIG9mICdcIiArICR0aGlzLmF0dHIoXCJtaW5sZW5ndGhcIikgKyBcIicgY2hhcmFjdGVyczwhLS0gZGF0YS12YWxpZGF0aW9uLW1pbmxlbmd0aC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiO1xuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5sZW5ndGhNZXNzYWdlXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmxlbmd0aE1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWlubGVuZ3RoXCIsICR0aGlzLmF0dHIoXCJtaW5sZW5ndGhcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVRVUlSRURcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgaWYgKCR0aGlzLmF0dHIoXCJyZXF1aXJlZFwiKSAhPT0gdW5kZWZpbmVkIHx8ICR0aGlzLmF0dHIoXCJhcmlhLXJlcXVpcmVkXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzLnJlcXVpcmVkLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvblJlcXVpcmVkTWVzc2FnZVwiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblJlcXVpcmVkTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblJlcXVpcmVkTWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTlVNQkVSXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwidHlwZVwiKSAhPT0gdW5kZWZpbmVkICYmICR0aGlzLmF0dHIoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCkgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzLm51bWJlci5tZXNzYWdlO1xuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25OdW1iZXJNZXNzYWdlXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTnVtYmVyTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk51bWJlck1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTUFJTFxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcInR5cGVcIikgIT09IHVuZGVmaW5lZCAmJiAkdGhpcy5hdHRyKFwidHlwZVwiKS50b0xvd2VyQ2FzZSgpID09PSBcImVtYWlsXCIpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiTm90IGEgdmFsaWQgZW1haWwgYWRkcmVzczwhLS0gZGF0YS12YWxpZGF0b3ItdmFsaWRlbWFpbC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiO1xuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25WYWxpZGVtYWlsTWVzc2FnZVwiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblZhbGlkZW1haWxNZXNzYWdlXCIpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uRW1haWxNZXNzYWdlXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uRW1haWxNZXNzYWdlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uVmFsaWRlbWFpbE1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUlOQ0hFQ0tFRFxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1pbmNoZWNrZWRcIikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJOb3QgZW5vdWdoIG9wdGlvbnMgY2hlY2tlZDsgTWluaW11bSBvZiAnXCIgKyAkdGhpcy5hdHRyKFwibWluY2hlY2tlZFwiKSArIFwiJyByZXF1aXJlZDwhLS0gZGF0YS12YWxpZGF0aW9uLW1pbmNoZWNrZWQtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWluY2hlY2tlZE1lc3NhZ2VcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5jaGVja2VkTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmNoZWNrZWRNZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmNoZWNrZWRNaW5jaGVja2VkXCIsICR0aGlzLmF0dHIoXCJtaW5jaGVja2VkXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQVhDSEVDS0VEXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWF4Y2hlY2tlZFwiKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlRvbyBtYW55IG9wdGlvbnMgY2hlY2tlZDsgTWF4aW11bSBvZiAnXCIgKyAkdGhpcy5hdHRyKFwibWF4Y2hlY2tlZFwiKSArIFwiJyByZXF1aXJlZDwhLS0gZGF0YS12YWxpZGF0aW9uLW1heGNoZWNrZWQtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4Y2hlY2tlZE1lc3NhZ2VcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhjaGVja2VkTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGNoZWNrZWRNZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGNoZWNrZWRNYXhjaGVja2VkXCIsICR0aGlzLmF0dHIoXCJtYXhjaGVja2VkXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT0xMRUNUIFZBTElEQVRPUiBOQU1FU1xuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICAgIC8vIEdldCBuYW1lZCB2YWxpZGF0b3JzXG4gICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEdldCBleHRyYSBvbmVzIGRlZmluZWQgb24gdGhlIGVsZW1lbnQncyBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgICAkLmVhY2goJHRoaXMuZGF0YSgpLCBmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGkucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiwkMVwiKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICBpZiAocGFydHNbMF0gPT09IFwidmFsaWRhdGlvblwiICYmIHBhcnRzWzFdKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzLnB1c2gocGFydHNbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PUk1BTElTRSBWQUxJREFUT1IgTkFNRVNcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgICB2YXIgdmFsaWRhdG9yTmFtZXNUb0luc3BlY3QgPSB2YWxpZGF0b3JOYW1lcztcbiAgICAgICAgICB2YXIgbmV3VmFsaWRhdG9yTmFtZXNUb0luc3BlY3QgPSBbXTtcblxuICAgICAgICAgIGRvIC8vIHJlcGVhdGVkbHkgZXhwYW5kICdzaG9ydGN1dCcgdmFsaWRhdG9ycyBpbnRvIHRoZWlyIHJlYWwgdmFsaWRhdG9yc1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIFVwcGVyY2FzZSBvbmx5IHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCBuYW1lXG4gICAgICAgICAgICAkLmVhY2godmFsaWRhdG9yTmFtZXMsIGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgICAgICB2YWxpZGF0b3JOYW1lc1tpXSA9IGZvcm1hdFZhbGlkYXRvck5hbWUoZWwpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgdmFsaWRhdG9yIG5hbWVzXG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lcyA9ICQudW5pcXVlKHZhbGlkYXRvck5hbWVzKTtcblxuICAgICAgICAgICAgLy8gUHVsbCBvdXQgdGhlIG5ldyB2YWxpZGF0b3IgbmFtZXMgZnJvbSBlYWNoIHNob3J0Y3V0XG4gICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdCA9IFtdO1xuICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvck5hbWVzVG9JbnNwZWN0LCBmdW5jdGlvbihpLCBlbCkge1xuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIGVsICsgXCJTaG9ydGN1dFwiKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQXJlIHRoZXNlIGN1c3RvbSB2YWxpZGF0b3JzP1xuICAgICAgICAgICAgICAgIC8vIFB1bGwgdGhlbSBvdXQhXG4gICAgICAgICAgICAgICAgJC5lYWNoKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBlbCArIFwiU2hvcnRjdXRcIikuc3BsaXQoXCIsXCIpLCBmdW5jdGlvbihpMiwgZWwyKSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdC5wdXNoKGVsMik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3MuYnVpbHRJblZhbGlkYXRvcnNbZWwudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGlzIGEgcmVjb2duaXNlZCBidWlsdC1pbj9cbiAgICAgICAgICAgICAgICAvLyBQdWxsIGl0IG91dCFcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdG9yID0gc2V0dGluZ3MuYnVpbHRJblZhbGlkYXRvcnNbZWwudG9Mb3dlckNhc2UoKV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvci50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic2hvcnRjdXRcIikge1xuICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvci5zaG9ydGN1dC5zcGxpdChcIixcIiksIGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgICAgICAgICAgICBlbCA9IGZvcm1hdFZhbGlkYXRvck5hbWUoZWwpO1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdC5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yTmFtZXMucHVzaChlbCk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lc1RvSW5zcGVjdCA9IG5ld1ZhbGlkYXRvck5hbWVzVG9JbnNwZWN0O1xuXG4gICAgICAgICAgfSB3aGlsZSAodmFsaWRhdG9yTmFtZXNUb0luc3BlY3QubGVuZ3RoID4gMClcblxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNFVCBVUCBWQUxJREFUT1IgQVJSQVlTXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgICAgdmFyIHZhbGlkYXRvcnMgPSB7fTtcblxuICAgICAgICAgICQuZWFjaCh2YWxpZGF0b3JOYW1lcywgZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgICAgICAgICAvLyBTZXQgdXAgdGhlICdvdmVycmlkZScgbWVzc2FnZVxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgZWwgKyBcIk1lc3NhZ2VcIik7XG4gICAgICAgICAgICB2YXIgaGFzT3ZlcnJpZGVNZXNzYWdlID0gKG1lc3NhZ2UgIT09IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB2YXIgZm91bmRWYWxpZGF0b3IgPSBmYWxzZTtcbiAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgPyBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICA6IFwiJ1wiICsgZWwgKyBcIicgdmFsaWRhdGlvbiBmYWlsZWQgPCEtLSBBZGQgYXR0cmlidXRlICdkYXRhLXZhbGlkYXRpb24tXCIgKyBlbC50b0xvd2VyQ2FzZSgpICsgXCItbWVzc2FnZScgdG8gaW5wdXQgdG8gY2hhbmdlIHRoaXMgbWVzc2FnZSAtLT5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA7XG5cbiAgICAgICAgICAgICQuZWFjaChcbiAgICAgICAgICAgICAgc2V0dGluZ3MudmFsaWRhdG9yVHlwZXMsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICh2YWxpZGF0b3JUeXBlLCB2YWxpZGF0b3JUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3JzW3ZhbGlkYXRvclR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yVHlwZV0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZFZhbGlkYXRvciAmJiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgZWwgKyBmb3JtYXRWYWxpZGF0b3JOYW1lKHZhbGlkYXRvclRlbXBsYXRlLm5hbWUpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzW3ZhbGlkYXRvclR5cGVdLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICQuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZm9ybWF0VmFsaWRhdG9yTmFtZSh2YWxpZGF0b3JUZW1wbGF0ZS5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvclRlbXBsYXRlLmluaXQoJHRoaXMsIGVsKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgZm91bmRWYWxpZGF0b3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKCFmb3VuZFZhbGlkYXRvciAmJiBzZXR0aW5ncy5idWlsdEluVmFsaWRhdG9yc1tlbC50b0xvd2VyQ2FzZSgpXSkge1xuXG4gICAgICAgICAgICAgIHZhciB2YWxpZGF0b3IgPSAkLmV4dGVuZCh0cnVlLCB7fSwgc2V0dGluZ3MuYnVpbHRJblZhbGlkYXRvcnNbZWwudG9Mb3dlckNhc2UoKV0pO1xuICAgICAgICAgICAgICBpZiAoaGFzT3ZlcnJpZGVNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciB2YWxpZGF0b3JUeXBlID0gdmFsaWRhdG9yLnR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICBpZiAodmFsaWRhdG9yVHlwZSA9PT0gXCJzaG9ydGN1dFwiKSB7XG4gICAgICAgICAgICAgICAgZm91bmRWYWxpZGF0b3IgPSB0cnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQuZWFjaChcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnZhbGlkYXRvclR5cGVzLFxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHZhbGlkYXRvclRlbXBsYXRlVHlwZSwgdmFsaWRhdG9yVGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvcnNbdmFsaWRhdG9yVGVtcGxhdGVUeXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1t2YWxpZGF0b3JUZW1wbGF0ZVR5cGVdID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZFZhbGlkYXRvciAmJiB2YWxpZGF0b3JUeXBlID09PSB2YWxpZGF0b3JUZW1wbGF0ZVR5cGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBlbCArIGZvcm1hdFZhbGlkYXRvck5hbWUodmFsaWRhdG9yVGVtcGxhdGUubmFtZSksIHZhbGlkYXRvclt2YWxpZGF0b3JUZW1wbGF0ZS5uYW1lLnRvTG93ZXJDYXNlKCldKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzW3ZhbGlkYXRvclR5cGVdLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmV4dGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JUZW1wbGF0ZS5pbml0KCR0aGlzLCBlbClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVmFsaWRhdG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEgZm91bmRWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgJC5lcnJvcihcIkNhbm5vdCBmaW5kIHZhbGlkYXRpb24gaW5mbyBmb3IgJ1wiICsgZWwgKyBcIidcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JFIEZBTExCQUNLIFZBTFVFU1xuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICAgICRoZWxwQmxvY2suZGF0YShcbiAgICAgICAgICAgIFwib3JpZ2luYWwtY29udGVudHNcIixcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIilcbiAgICAgICAgICAgICAgICA/ICRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpXG4gICAgICAgICAgICAgICAgOiAkaGVscEJsb2NrLmh0bWwoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAkaGVscEJsb2NrLmRhdGEoXG4gICAgICAgICAgICBcIm9yaWdpbmFsLXJvbGVcIixcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtcm9sZVwiKVxuICAgICAgICAgICAgICAgID8gJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtcm9sZVwiKVxuICAgICAgICAgICAgICAgIDogJGhlbHBCbG9jay5hdHRyKFwicm9sZVwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAkY29udHJvbEdyb3VwLmRhdGEoXG4gICAgICAgICAgICBcIm9yaWdpbmFsLWNsYXNzZXNcIixcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5kYXRhKFwib3JpZ2luYWwtY2xhc2VzXCIpXG4gICAgICAgICAgICAgICAgPyAkY29udHJvbEdyb3VwLmRhdGEoXCJvcmlnaW5hbC1jbGFzc2VzXCIpXG4gICAgICAgICAgICAgICAgOiAkY29udHJvbEdyb3VwLmF0dHIoXCJjbGFzc1wiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAkdGhpcy5kYXRhKFxuICAgICAgICAgICAgXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIixcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiKVxuICAgICAgICAgICAgICAgID8gJHRoaXMuZGF0YShcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiKVxuICAgICAgICAgICAgICAgIDogJHRoaXMuYXR0cihcImFyaWEtaW52YWxpZFwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFMSURBVElPTlxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICAgICR0aGlzLmJpbmQoXG4gICAgICAgICAgICBcInZhbGlkYXRpb24udmFsaWRhdGlvblwiLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGV2ZW50LCBwYXJhbXMpIHtcblxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBnZXRWYWx1ZSgkdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gR2V0IGEgbGlzdCBvZiB0aGUgZXJyb3JzIHRvIGFwcGx5XG4gICAgICAgICAgICAgIHZhciBlcnJvcnNGb3VuZCA9IFtdO1xuXG4gICAgICAgICAgICAgICQuZWFjaCh2YWxpZGF0b3JzLCBmdW5jdGlvbiAodmFsaWRhdG9yVHlwZSwgdmFsaWRhdG9yVHlwZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIHx8IHZhbHVlLmxlbmd0aCB8fCAocGFyYW1zICYmIHBhcmFtcy5pbmNsdWRlRW1wdHkpIHx8ICghIXNldHRpbmdzLnZhbGlkYXRvclR5cGVzW3ZhbGlkYXRvclR5cGVdLmJsb2NrU3VibWl0ICYmIHBhcmFtcyAmJiAhIXBhcmFtcy5zdWJtaXR0aW5nKSkge1xuICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvclR5cGVBcnJheSwgZnVuY3Rpb24gKGksIHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudmFsaWRhdG9yVHlwZXNbdmFsaWRhdG9yVHlwZV0udmFsaWRhdGUoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JzRm91bmQucHVzaCh2YWxpZGF0b3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGVycm9yc0ZvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAkdGhpcy5iaW5kKFxuICAgICAgICAgICAgXCJnZXRWYWxpZGF0b3JzLnZhbGlkYXRpb25cIixcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdBVENIIEZPUiBDSEFOR0VTXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICR0aGlzLmJpbmQoXG4gICAgICAgICAgICBcInN1Ym1pdC52YWxpZGF0aW9uXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiAkdGhpcy50cmlnZ2VySGFuZGxlcihcImNoYW5nZS52YWxpZGF0aW9uXCIsIHtzdWJtaXR0aW5nOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICAkdGhpcy5iaW5kKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBcImtleXVwXCIsXG4gICAgICAgICAgICAgIFwiZm9jdXNcIixcbiAgICAgICAgICAgICAgXCJibHVyXCIsXG4gICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgICAgICAgIFwia2V5cHJlc3NcIixcbiAgICAgICAgICAgICAgXCJjaGFuZ2VcIlxuICAgICAgICAgICAgXS5qb2luKFwiLnZhbGlkYXRpb24gXCIpICsgXCIudmFsaWRhdGlvblwiLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUsIHBhcmFtcykge1xuXG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKCR0aGlzKTtcblxuICAgICAgICAgICAgICB2YXIgZXJyb3JzRm91bmQgPSBbXTtcblxuICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLmZpbmQoXCJpbnB1dCx0ZXh0YXJlYSxzZWxlY3RcIikuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkQ291bnQgPSBlcnJvcnNGb3VuZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgJC5lYWNoKCQoZWwpLnRyaWdnZXJIYW5kbGVyKFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsIHBhcmFtcyksIGZ1bmN0aW9uIChqLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvcnNGb3VuZC5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcnNGb3VuZC5sZW5ndGggPiBvbGRDb3VudCkge1xuICAgICAgICAgICAgICAgICAgJChlbCkuYXR0cihcImFyaWEtaW52YWxpZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbCA9ICR0aGlzLmRhdGEoXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgICAkKGVsKS5hdHRyKFwiYXJpYS1pbnZhbGlkXCIsIChvcmlnaW5hbCAhPT0gdW5kZWZpbmVkID8gb3JpZ2luYWwgOiBmYWxzZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgJGZvcm0uZmluZChcImlucHV0LHNlbGVjdCx0ZXh0YXJlYVwiKS5ub3QoJHRoaXMpLm5vdChcIltuYW1lPVxcXCJcIiArICR0aGlzLmF0dHIoXCJuYW1lXCIpICsgXCJcXFwiXVwiKS50cmlnZ2VyKFwidmFsaWRhdGlvbkxvc3RGb2N1cy52YWxpZGF0aW9uXCIpO1xuXG4gICAgICAgICAgICAgIGVycm9yc0ZvdW5kID0gJC51bmlxdWUoZXJyb3JzRm91bmQuc29ydCgpKTtcblxuICAgICAgICAgICAgICAvLyBXZXJlIHRoZXJlIGFueSBlcnJvcnM/XG4gICAgICAgICAgICAgIGlmIChlcnJvcnNGb3VuZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBCZXR0ZXIgZmxhZyBpdCB1cCBhcyBhIHdhcm5pbmcuXG4gICAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcInN1Y2Nlc3MgZXJyb3JcIikuYWRkQ2xhc3MoXCJ3YXJuaW5nXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gSG93IG1hbnkgZXJyb3JzIGRpZCB3ZSBmaW5kP1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5vcHRpb25zLnNlbWFudGljYWxseVN0cmljdCAmJiBlcnJvcnNGb3VuZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIC8vIE9ubHkgb25lPyBCZWluZyBzdHJpY3Q/IEp1c3Qgb3V0cHV0IGl0LlxuICAgICAgICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKGVycm9yc0ZvdW5kWzBdICsgXG4gICAgICAgICAgICAgICAgICAgICggc2V0dGluZ3Mub3B0aW9ucy5wcmVwZW5kRXhpc3RpbmdIZWxwQmxvY2sgPyAkaGVscEJsb2NrLmRhdGEoXCJvcmlnaW5hbC1jb250ZW50c1wiKSA6IFwiXCIgKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIE11bHRpcGxlPyBCZWluZyBzbG9wcHk/IEdsdWUgdGhlbSB0b2dldGhlciBpbnRvIGFuIFVMLlxuICAgICAgICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKFwiPHVsIHJvbGU9XFxcImFsZXJ0XFxcIj48bGk+XCIgKyBlcnJvcnNGb3VuZC5qb2luKFwiPC9saT48bGk+XCIpICsgXCI8L2xpPjwvdWw+XCIgK1xuICAgICAgICAgICAgICAgICAgICAoIHNldHRpbmdzLm9wdGlvbnMucHJlcGVuZEV4aXN0aW5nSGVscEJsb2NrID8gJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIikgOiBcIlwiICkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLnJlbW92ZUNsYXNzKFwid2FybmluZyBlcnJvciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLmFkZENsYXNzKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKCRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwiYmx1clwiKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgICR0aGlzLmJpbmQoXCJ2YWxpZGF0aW9uTG9zdEZvY3VzLnZhbGlkYXRpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3kgOiBmdW5jdGlvbiggKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChcbiAgICAgICAgICBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cCA9ICR0aGlzLnBhcmVudHMoXCIuY29udHJvbC1ncm91cFwiKS5maXJzdCgpLFxuICAgICAgICAgICAgICAkaGVscEJsb2NrID0gJGNvbnRyb2xHcm91cC5maW5kKFwiLmhlbHAtYmxvY2tcIikuZmlyc3QoKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIG91ciBldmVudHNcbiAgICAgICAgICAgICR0aGlzLnVuYmluZCgnLnZhbGlkYXRpb24nKTsgLy8gZXZlbnRzIGFyZSBuYW1lc3BhY2VkLlxuICAgICAgICAgICAgLy8gcmVzZXQgaGVscCB0ZXh0XG4gICAgICAgICAgICAkaGVscEJsb2NrLmh0bWwoJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIikpO1xuICAgICAgICAgICAgLy8gcmVzZXQgY2xhc3Nlc1xuICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5hdHRyKFwiY2xhc3NcIiwgJGNvbnRyb2xHcm91cC5kYXRhKFwib3JpZ2luYWwtY2xhc3Nlc1wiKSk7XG4gICAgICAgICAgICAvLyByZXNldCBhcmlhXG4gICAgICAgICAgICAkdGhpcy5hdHRyKFwiYXJpYS1pbnZhbGlkXCIsICR0aGlzLmRhdGEoXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIikpO1xuICAgICAgICAgICAgLy8gcmVzZXQgcm9sZVxuICAgICAgICAgICAgJGhlbHBCbG9jay5hdHRyKFwicm9sZVwiLCAkdGhpcy5kYXRhKFwib3JpZ2luYWwtcm9sZVwiKSk7XG5cdFx0XHRcdFx0XHQvLyByZW1vdmUgYWxsIGVsZW1lbnRzIHdlIGNyZWF0ZWRcblx0XHRcdFx0XHRcdGlmIChjcmVhdGVkRWxlbWVudHMuaW5kZXhPZigkaGVscEJsb2NrWzBdKSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdCRoZWxwQmxvY2sucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR9XG5cbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgIH0sXG4gICAgICBjb2xsZWN0RXJyb3JzIDogZnVuY3Rpb24oaW5jbHVkZUVtcHR5KSB7XG5cbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZXMgPSB7fTtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICAgICAgICB2YXIgbmFtZSA9ICRlbC5hdHRyKFwibmFtZVwiKTtcbiAgICAgICAgICB2YXIgZXJyb3JzID0gJGVsLnRyaWdnZXJIYW5kbGVyKFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsIHtpbmNsdWRlRW1wdHk6IHRydWV9KTtcbiAgICAgICAgICBlcnJvck1lc3NhZ2VzW25hbWVdID0gJC5leHRlbmQodHJ1ZSwgZXJyb3JzLCBlcnJvck1lc3NhZ2VzW25hbWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJC5lYWNoKGVycm9yTWVzc2FnZXMsIGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgIGlmIChlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBlcnJvck1lc3NhZ2VzW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZXM7XG5cbiAgICAgIH0sXG4gICAgICBoYXNFcnJvcnM6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2VzID0gW107XG5cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgIGVycm9yTWVzc2FnZXMgPSBlcnJvck1lc3NhZ2VzLmNvbmNhdChcbiAgICAgICAgICAgICQoZWwpLnRyaWdnZXJIYW5kbGVyKFwiZ2V0VmFsaWRhdG9ycy52YWxpZGF0aW9uXCIpID8gJChlbCkudHJpZ2dlckhhbmRsZXIoXCJ2YWxpZGF0aW9uLnZhbGlkYXRpb25cIiwge3N1Ym1pdHRpbmc6IHRydWV9KSA6IFtdXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChlcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDApO1xuICAgICAgfSxcbiAgICAgIG92ZXJyaWRlIDogZnVuY3Rpb24gKG5ld0RlZmF1bHRzKSB7XG4gICAgICAgIGRlZmF1bHRzID0gJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG5ld0RlZmF1bHRzKTtcbiAgICAgIH1cbiAgICB9LFxuXHRcdHZhbGlkYXRvclR5cGVzOiB7XG4gICAgICBjYWxsYmFjazoge1xuICAgICAgICBuYW1lOiBcImNhbGxiYWNrXCIsXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lOiBuYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJDYWxsYmFja1wiKSxcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogJHRoaXMudmFsKCksXG4gICAgICAgICAgICBsYXN0VmFsaWQ6IHRydWUsXG4gICAgICAgICAgICBsYXN0RmluaXNoZWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XG4gICAgICAgICAgaWYgKHZhbGlkYXRvci5sYXN0VmFsdWUgPT09IHZhbHVlICYmIHZhbGlkYXRvci5sYXN0RmluaXNoZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAhdmFsaWRhdG9yLmxhc3RWYWxpZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9PT0gdHJ1ZSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIHJyanFidlZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICAgICAgICAgIHZhciBycmpxYnZUaGlzID0gJHRoaXM7XG4gICAgICAgICAgICBleGVjdXRlRnVuY3Rpb25CeU5hbWUoXG4gICAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsYmFjayxcbiAgICAgICAgICAgICAgd2luZG93LFxuICAgICAgICAgICAgICAkdGhpcyxcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJyanFidlZhbGlkYXRvci5sYXN0VmFsdWUgPT09IGRhdGEudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHJyanFidlZhbGlkYXRvci5sYXN0VmFsaWQgPSBkYXRhLnZhbGlkO1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBycmpxYnZWYWxpZGF0b3IubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJyanFidlZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcnJqcWJ2VGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgcnJqcWJ2VmFsaWRhdG9yLnZhbGlkYXRvck5hbWUgKyBcIk1lc3NhZ2VcIiwgcnJqcWJ2VmFsaWRhdG9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgLy8gVGltZW91dCBpcyBzZXQgdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgZXZlbnRzIGJlaW5nIGNvbnNpZGVyZWQgJ2FscmVhZHkgZmlyZWQnXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcnJqcWJ2VGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIik7XG4gICAgICAgICAgICAgICAgICB9LCAxKTsgLy8gZG9lc24ndCBuZWVkIGEgbG9uZyB0aW1lb3V0LCBqdXN0IGxvbmcgZW5vdWdoIGZvciB0aGUgZXZlbnQgYnViYmxlIHRvIGJ1cnN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWpheDoge1xuICAgICAgICBuYW1lOiBcImFqYXhcIixcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWU6IG5hbWUsXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJBamF4XCIpLFxuICAgICAgICAgICAgbGFzdFZhbHVlOiAkdGhpcy52YWwoKSxcbiAgICAgICAgICAgIGxhc3RWYWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RGaW5pc2hlZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcbiAgICAgICAgICBpZiAoXCJcIit2YWxpZGF0b3IubGFzdFZhbHVlID09PSBcIlwiK3ZhbHVlICYmIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IubGFzdFZhbGlkID09PSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9PT0gdHJ1ZSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgIHVybDogdmFsaWRhdG9yLnVybCxcbiAgICAgICAgICAgICAgZGF0YTogXCJ2YWx1ZT1cIiArIHZhbHVlICsgXCImZmllbGQ9XCIgKyAkdGhpcy5hdHRyKFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChcIlwiK3ZhbGlkYXRvci5sYXN0VmFsdWUgPT09IFwiXCIrZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yLmxhc3RWYWxpZCA9ICEhKGRhdGEudmFsaWQpO1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3IubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIHZhbGlkYXRvci52YWxpZGF0b3JOYW1lICsgXCJNZXNzYWdlXCIsIHZhbGlkYXRvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgIC8vIFRpbWVvdXQgaXMgc2V0IHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGV2ZW50cyBiZWluZyBjb25zaWRlcmVkICdhbHJlYWR5IGZpcmVkJ1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnRyaWdnZXIoXCJjaGFuZ2UudmFsaWRhdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgIH0sIDEpOyAvLyBkb2Vzbid0IG5lZWQgYSBsb25nIHRpbWVvdXQsIGp1c3QgbG9uZyBlbm91Z2ggZm9yIHRoZSBldmVudCBidWJibGUgdG8gYnVyc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWx1cmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IubWVzc2FnZSA9IFwiYWpheCBjYWxsIGZhaWxlZFwiO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyB2YWxpZGF0b3IudmFsaWRhdG9yTmFtZSArIFwiTWVzc2FnZVwiLCB2YWxpZGF0b3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gVGltZW91dCBpcyBzZXQgdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgZXZlbnRzIGJlaW5nIGNvbnNpZGVyZWQgJ2FscmVhZHkgZmlyZWQnXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAkdGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIik7XG4gICAgICAgICAgICAgICAgfSwgMSk7IC8vIGRvZXNuJ3QgbmVlZCBhIGxvbmcgdGltZW91dCwganVzdCBsb25nIGVub3VnaCBmb3IgdGhlIGV2ZW50IGJ1YmJsZSB0byBidXJzdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgfVxuICAgICAgfSxcblx0XHRcdHJlZ2V4OiB7XG5cdFx0XHRcdG5hbWU6IFwicmVnZXhcIixcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtyZWdleDogcmVnZXhGcm9tU3RyaW5nKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJSZWdleFwiKSl9O1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XG5cdFx0XHRcdFx0cmV0dXJuICghdmFsaWRhdG9yLnJlZ2V4LnRlc3QodmFsdWUpICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxuXHRcdFx0XHRcdFx0fHwgKHZhbGlkYXRvci5yZWdleC50ZXN0KHZhbHVlKSAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0bmFtZTogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gISEodmFsdWUubGVuZ3RoID09PSAwICAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcblx0XHRcdFx0XHRcdHx8ICEhKHZhbHVlLmxlbmd0aCA+IDAgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcblx0XHRcdFx0fSxcbiAgICAgICAgYmxvY2tTdWJtaXQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRtYXRjaDoge1xuXHRcdFx0XHRuYW1lOiBcIm1hdGNoXCIsXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xuXHRcdFx0XHRcdHZhciBlbGVtZW50ID0gJHRoaXMucGFyZW50cyhcImZvcm1cIikuZmlyc3QoKS5maW5kKFwiW25hbWU9XFxcIlwiICsgJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1hdGNoXCIpICsgXCJcXFwiXVwiKS5maXJzdCgpO1xuXHRcdFx0XHRcdGVsZW1lbnQuYmluZChcInZhbGlkYXRpb24udmFsaWRhdGlvblwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkdGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIiwge3N1Ym1pdHRpbmc6IHRydWV9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4ge1wiZWxlbWVudFwiOiBlbGVtZW50fTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xuXHRcdFx0XHRcdHJldHVybiAodmFsdWUgIT09IHZhbGlkYXRvci5lbGVtZW50LnZhbCgpICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxuXHRcdFx0XHRcdFx0fHwgKHZhbHVlID09PSB2YWxpZGF0b3IuZWxlbWVudC52YWwoKSAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xuXHRcdFx0XHR9LFxuICAgICAgICBibG9ja1N1Ym1pdDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdG1heDoge1xuXHRcdFx0XHRuYW1lOiBcIm1heFwiLFxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4ge21heDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1heFwiKX07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gKHBhcnNlRmxvYXQodmFsdWUsIDEwKSA+IHBhcnNlRmxvYXQodmFsaWRhdG9yLm1heCwgMTApICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxuXHRcdFx0XHRcdFx0fHwgKHBhcnNlRmxvYXQodmFsdWUsIDEwKSA8PSBwYXJzZUZsb2F0KHZhbGlkYXRvci5tYXgsIDEwKSAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0bWluOiB7XG5cdFx0XHRcdG5hbWU6IFwibWluXCIsXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xuXHRcdFx0XHRcdHJldHVybiB7bWluOiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiTWluXCIpfTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xuXHRcdFx0XHRcdHJldHVybiAocGFyc2VGbG9hdCh2YWx1ZSkgPCBwYXJzZUZsb2F0KHZhbGlkYXRvci5taW4pICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxuXHRcdFx0XHRcdFx0fHwgKHBhcnNlRmxvYXQodmFsdWUpID49IHBhcnNlRmxvYXQodmFsaWRhdG9yLm1pbikgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG1heGxlbmd0aDoge1xuXHRcdFx0XHRuYW1lOiBcIm1heGxlbmd0aFwiLFxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4ge21heGxlbmd0aDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1heGxlbmd0aFwiKX07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gKCh2YWx1ZS5sZW5ndGggPiB2YWxpZGF0b3IubWF4bGVuZ3RoKSAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcblx0XHRcdFx0XHRcdHx8ICgodmFsdWUubGVuZ3RoIDw9IHZhbGlkYXRvci5tYXhsZW5ndGgpICYmIHZhbGlkYXRvci5uZWdhdGl2ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRtaW5sZW5ndGg6IHtcblx0XHRcdFx0bmFtZTogXCJtaW5sZW5ndGhcIixcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHttaW5sZW5ndGg6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJNaW5sZW5ndGhcIil9O1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XG5cdFx0XHRcdFx0cmV0dXJuICgodmFsdWUubGVuZ3RoIDwgdmFsaWRhdG9yLm1pbmxlbmd0aCkgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXG5cdFx0XHRcdFx0XHR8fCAoKHZhbHVlLmxlbmd0aCA+PSB2YWxpZGF0b3IubWlubGVuZ3RoKSAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0bWF4Y2hlY2tlZDoge1xuXHRcdFx0XHRuYW1lOiBcIm1heGNoZWNrZWRcIixcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XG5cdFx0XHRcdFx0dmFyIGVsZW1lbnRzID0gJHRoaXMucGFyZW50cyhcImZvcm1cIikuZmlyc3QoKS5maW5kKFwiW25hbWU9XFxcIlwiICsgJHRoaXMuYXR0cihcIm5hbWVcIikgKyBcIlxcXCJdXCIpO1xuXHRcdFx0XHRcdGVsZW1lbnRzLmJpbmQoXCJjbGljay52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdCR0aGlzLnRyaWdnZXIoXCJjaGFuZ2UudmFsaWRhdGlvblwiLCB7aW5jbHVkZUVtcHR5OiB0cnVlfSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIHttYXhjaGVja2VkOiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiTWF4Y2hlY2tlZFwiKSwgZWxlbWVudHM6IGVsZW1lbnRzfTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xuXHRcdFx0XHRcdHJldHVybiAodmFsaWRhdG9yLmVsZW1lbnRzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+IHZhbGlkYXRvci5tYXhjaGVja2VkICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxuXHRcdFx0XHRcdFx0fHwgKHZhbGlkYXRvci5lbGVtZW50cy5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPD0gdmFsaWRhdG9yLm1heGNoZWNrZWQgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcblx0XHRcdFx0fSxcbiAgICAgICAgYmxvY2tTdWJtaXQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRtaW5jaGVja2VkOiB7XG5cdFx0XHRcdG5hbWU6IFwibWluY2hlY2tlZFwiLFxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcblx0XHRcdFx0XHR2YXIgZWxlbWVudHMgPSAkdGhpcy5wYXJlbnRzKFwiZm9ybVwiKS5maXJzdCgpLmZpbmQoXCJbbmFtZT1cXFwiXCIgKyAkdGhpcy5hdHRyKFwibmFtZVwiKSArIFwiXFxcIl1cIik7XG5cdFx0XHRcdFx0ZWxlbWVudHMuYmluZChcImNsaWNrLnZhbGlkYXRpb25cIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0JHRoaXMudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIsIHtpbmNsdWRlRW1wdHk6IHRydWV9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4ge21pbmNoZWNrZWQ6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJNaW5jaGVja2VkXCIpLCBlbGVtZW50czogZWxlbWVudHN9O1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XG5cdFx0XHRcdFx0cmV0dXJuICh2YWxpZGF0b3IuZWxlbWVudHMuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoIDwgdmFsaWRhdG9yLm1pbmNoZWNrZWQgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXG5cdFx0XHRcdFx0XHR8fCAodmFsaWRhdG9yLmVsZW1lbnRzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSB2YWxpZGF0b3IubWluY2hlY2tlZCAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xuXHRcdFx0XHR9LFxuICAgICAgICBibG9ja1N1Ym1pdDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YnVpbHRJblZhbGlkYXRvcnM6IHtcblx0XHRcdGVtYWlsOiB7XG5cdFx0XHRcdG5hbWU6IFwiRW1haWxcIixcblx0XHRcdFx0dHlwZTogXCJzaG9ydGN1dFwiLFxuXHRcdFx0XHRzaG9ydGN1dDogXCJ2YWxpZGVtYWlsXCJcblx0XHRcdH0sXG5cdFx0XHR2YWxpZGVtYWlsOiB7XG5cdFx0XHRcdG5hbWU6IFwiVmFsaWRlbWFpbFwiLFxuXHRcdFx0XHR0eXBlOiBcInJlZ2V4XCIsXG5cdFx0XHRcdHJlZ2V4OiBcIltBLVphLXowLTkuXyUrLV0rQFtBLVphLXowLTkuLV0rXFxcXFxcLltBLVphLXpdezIsNH1cIixcblx0XHRcdFx0bWVzc2FnZTogXCJOb3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzPCEtLSBkYXRhLXZhbGlkYXRvci12YWxpZGVtYWlsLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcblx0XHRcdH0sXG5cdFx0XHRwYXNzd29yZGFnYWluOiB7XG5cdFx0XHRcdG5hbWU6IFwiUGFzc3dvcmRhZ2FpblwiLFxuXHRcdFx0XHR0eXBlOiBcIm1hdGNoXCIsXG5cdFx0XHRcdG1hdGNoOiBcInBhc3N3b3JkXCIsXG5cdFx0XHRcdG1lc3NhZ2U6IFwiRG9lcyBub3QgbWF0Y2ggdGhlIGdpdmVuIHBhc3N3b3JkPCEtLSBkYXRhLXZhbGlkYXRvci1wYXN3b3JkYWdhaW4tbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxuXHRcdFx0fSxcblx0XHRcdHBvc2l0aXZlOiB7XG5cdFx0XHRcdG5hbWU6IFwiUG9zaXRpdmVcIixcblx0XHRcdFx0dHlwZTogXCJzaG9ydGN1dFwiLFxuXHRcdFx0XHRzaG9ydGN1dDogXCJudW1iZXIscG9zaXRpdmVudW1iZXJcIlxuXHRcdFx0fSxcblx0XHRcdG5lZ2F0aXZlOiB7XG5cdFx0XHRcdG5hbWU6IFwiTmVnYXRpdmVcIixcblx0XHRcdFx0dHlwZTogXCJzaG9ydGN1dFwiLFxuXHRcdFx0XHRzaG9ydGN1dDogXCJudW1iZXIsbmVnYXRpdmVudW1iZXJcIlxuXHRcdFx0fSxcblx0XHRcdG51bWJlcjoge1xuXHRcdFx0XHRuYW1lOiBcIk51bWJlclwiLFxuXHRcdFx0XHR0eXBlOiBcInJlZ2V4XCIsXG5cdFx0XHRcdHJlZ2V4OiBcIihbKy1dP1xcXFxcXGQrKFxcXFxcXC5cXFxcXFxkKik/KFtlRV1bKy1dP1swLTldKyk/KT9cIixcblx0XHRcdFx0bWVzc2FnZTogXCJNdXN0IGJlIGEgbnVtYmVyPCEtLSBkYXRhLXZhbGlkYXRvci1udW1iZXItbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxuXHRcdFx0fSxcblx0XHRcdGludGVnZXI6IHtcblx0XHRcdFx0bmFtZTogXCJJbnRlZ2VyXCIsXG5cdFx0XHRcdHR5cGU6IFwicmVnZXhcIixcblx0XHRcdFx0cmVnZXg6IFwiWystXT9cXFxcXFxkK1wiLFxuXHRcdFx0XHRtZXNzYWdlOiBcIk5vIGRlY2ltYWwgcGxhY2VzIGFsbG93ZWQ8IS0tIGRhdGEtdmFsaWRhdG9yLWludGVnZXItbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxuXHRcdFx0fSxcblx0XHRcdHBvc2l0aXZlbnVtYmVyOiB7XG5cdFx0XHRcdG5hbWU6IFwiUG9zaXRpdmVudW1iZXJcIixcblx0XHRcdFx0dHlwZTogXCJtaW5cIixcblx0XHRcdFx0bWluOiAwLFxuXHRcdFx0XHRtZXNzYWdlOiBcIk11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXI8IS0tIGRhdGEtdmFsaWRhdG9yLXBvc2l0aXZlbnVtYmVyLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcblx0XHRcdH0sXG5cdFx0XHRuZWdhdGl2ZW51bWJlcjoge1xuXHRcdFx0XHRuYW1lOiBcIk5lZ2F0aXZlbnVtYmVyXCIsXG5cdFx0XHRcdHR5cGU6IFwibWF4XCIsXG5cdFx0XHRcdG1heDogMCxcblx0XHRcdFx0bWVzc2FnZTogXCJNdXN0IGJlIGEgbmVnYXRpdmUgbnVtYmVyPCEtLSBkYXRhLXZhbGlkYXRvci1uZWdhdGl2ZW51bWJlci1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiXG5cdFx0XHR9LFxuXHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0bmFtZTogXCJSZXF1aXJlZFwiLFxuXHRcdFx0XHR0eXBlOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdG1lc3NhZ2U6IFwiVGhpcyBpcyByZXF1aXJlZDwhLS0gZGF0YS12YWxpZGF0b3ItcmVxdWlyZWQtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxuXHRcdFx0fSxcblx0XHRcdGNoZWNrb25lOiB7XG5cdFx0XHRcdG5hbWU6IFwiQ2hlY2tvbmVcIixcblx0XHRcdFx0dHlwZTogXCJtaW5jaGVja2VkXCIsXG5cdFx0XHRcdG1pbmNoZWNrZWQ6IDEsXG5cdFx0XHRcdG1lc3NhZ2U6IFwiQ2hlY2sgYXQgbGVhc3Qgb25lIG9wdGlvbjwhLS0gZGF0YS12YWxpZGF0aW9uLWNoZWNrb25lLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0dmFyIGZvcm1hdFZhbGlkYXRvck5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiBuYW1lXG5cdFx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdC8oXnxcXHMpKFthLXpdKS9nICxcblx0XHRcdFx0ZnVuY3Rpb24obSxwMSxwMikge1xuXHRcdFx0XHRcdHJldHVybiBwMStwMi50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0O1xuXHR9O1xuXG5cdHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uICgkdGhpcykge1xuXHRcdC8vIEV4dHJhY3QgdGhlIHZhbHVlIHdlJ3JlIHRhbGtpbmcgYWJvdXRcblx0XHR2YXIgdmFsdWUgPSAkdGhpcy52YWwoKTtcblx0XHR2YXIgdHlwZSA9ICR0aGlzLmF0dHIoXCJ0eXBlXCIpO1xuXHRcdGlmICh0eXBlID09PSBcImNoZWNrYm94XCIpIHtcblx0XHRcdHZhbHVlID0gKCR0aGlzLmlzKFwiOmNoZWNrZWRcIikgPyB2YWx1ZSA6IFwiXCIpO1xuXHRcdH1cblx0XHRpZiAodHlwZSA9PT0gXCJyYWRpb1wiKSB7XG5cdFx0XHR2YWx1ZSA9ICgkKCdpbnB1dFtuYW1lPVwiJyArICR0aGlzLmF0dHIoXCJuYW1lXCIpICsgJ1wiXTpjaGVja2VkJykubGVuZ3RoID4gMCA/IHZhbHVlIDogXCJcIik7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fTtcblxuICBmdW5jdGlvbiByZWdleEZyb21TdHJpbmcoaW5wdXRzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcIl5cIiArIGlucHV0c3RyaW5nICsgXCIkXCIpO1xuXHR9XG5cbiAgLyoqXG4gICAqIFRoYW5rcyB0byBKYXNvbiBCdW50aW5nIHZpYSBTdGFja092ZXJmbG93LmNvbVxuICAgKlxuICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1OTc4OC9ob3ctdG8tZXhlY3V0ZS1hLWphdmFzY3JpcHQtZnVuY3Rpb24td2hlbi1pLWhhdmUtaXRzLW5hbWUtYXMtYS1zdHJpbmcjYW5zd2VyLTM1OTkxMFxuICAgKiBTaG9ydCBsaW5rOiBodHRwOi8vdGlueXVybC5jb20vZXhlY3V0ZUZ1bmN0aW9uQnlOYW1lXG4gICoqL1xuICBmdW5jdGlvbiBleGVjdXRlRnVuY3Rpb25CeU5hbWUoZnVuY3Rpb25OYW1lLCBjb250ZXh0IC8qLCBhcmdzKi8pIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuc3BsaWNlKDIpO1xuICAgIHZhciBuYW1lc3BhY2VzID0gZnVuY3Rpb25OYW1lLnNwbGl0KFwiLlwiKTtcbiAgICB2YXIgZnVuYyA9IG5hbWVzcGFjZXMucG9wKCk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG5hbWVzcGFjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0W25hbWVzcGFjZXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFtmdW5jXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG5cdCQuZm4uanFCb290c3RyYXBWYWxpZGF0aW9uID0gZnVuY3Rpb24oIG1ldGhvZCApIHtcblxuXHRcdGlmICggZGVmYXVsdHMubWV0aG9kc1ttZXRob2RdICkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRzLm1ldGhvZHNbbWV0aG9kXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApKTtcblx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZCApIHtcblx0XHRcdHJldHVybiBkZWZhdWx0cy5tZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0JC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZCArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LmpxQm9vdHN0cmFwVmFsaWRhdGlvbicgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHR9O1xuXG4gICQuanFCb290c3RyYXBWYWxpZGF0aW9uID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAkKFwiOmlucHV0XCIpLm5vdChcIlt0eXBlPWltYWdlXSxbdHlwZT1zdWJtaXRdXCIpLmpxQm9vdHN0cmFwVmFsaWRhdGlvbi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XG4gIH07XG5cbn0pKCBqUXVlcnkgKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=