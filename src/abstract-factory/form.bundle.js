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

	"use strict";
	var factory_1 = __webpack_require__(1);
	var factory_2 = __webpack_require__(1);
	var 
	//the factory
	factory = factory_1["default"](window.location.hash === '#kiosk' ? factory_2.Channels.KIOSK : factory_2.Channels.ONLINE), 
	//form controls
	username = factory.createText('Username'), password = factory.createPassword('Password'), remember = factory.createCheckbox('Remember me'), 
	//dom placeholders
	form = document.querySelector('.form'), formControls = form.querySelector('.controls'), out = document.querySelector('#out');
	formControls.appendChild(username.getElement());
	formControls.appendChild(password.getElement());
	formControls.appendChild(remember.getElement());
	form.addEventListener('submit', function (ev) {
	    out.innerHTML =
	        "<p>Username: " + username.getValue() + "</p>\n         <p>Password: " + password.getValue() + "</p>\n         <p>Remember me: " + (remember.getValue() ? 'Yes' : 'No') + "</p>";
	    ev.preventDefault();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var kiosk_input_control_factory_1 = __webpack_require__(2);
	var online_input_control_factory_1 = __webpack_require__(7);
	function getFactory(env) {
	    if (env === Channels.ONLINE) {
	        return new online_input_control_factory_1["default"]();
	    }
	    else if (env === Channels.KIOSK) {
	        return new kiosk_input_control_factory_1["default"]();
	    }
	    else {
	        throw new Error('Environment not supported');
	    }
	}
	exports.__esModule = true;
	exports["default"] = getFactory;
	var Channels;
	(function (Channels) {
	    Channels[Channels["KIOSK"] = 0] = "KIOSK";
	    Channels[Channels["ONLINE"] = 1] = "ONLINE";
	})(Channels || (Channels = {}));
	exports.Channels = Channels;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var input_control_factory_1 = __webpack_require__(3);
	var kiosk_text_1 = __webpack_require__(4);
	var kiosk_checkbox_1 = __webpack_require__(5);
	var kiosk_password_1 = __webpack_require__(6);
	var KioskInputControlFactory = (function (_super) {
	    __extends(KioskInputControlFactory, _super);
	    function KioskInputControlFactory() {
	        return _super.apply(this, arguments) || this;
	    }
	    KioskInputControlFactory.prototype.createText = function (question) {
	        return new kiosk_text_1["default"](question);
	    };
	    KioskInputControlFactory.prototype.createCheckbox = function (question) {
	        return new kiosk_checkbox_1["default"](question);
	    };
	    KioskInputControlFactory.prototype.createPassword = function (question) {
	        return new kiosk_password_1["default"](question);
	    };
	    return KioskInputControlFactory;
	}(input_control_factory_1["default"]));
	exports.__esModule = true;
	exports["default"] = KioskInputControlFactory;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var InputControlFactory = (function () {
	    function InputControlFactory() {
	    }
	    return InputControlFactory;
	}());
	exports.__esModule = true;
	exports["default"] = InputControlFactory;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var KioskText = (function () {
	    function KioskText(question) {
	        var html = "<label>" + question + " <input type=text></label>";
	        var el = document.createElement('div');
	        el.classList.add('form-item', 'kiosk-form-item', 'kiosk-text');
	        el.innerHTML = html;
	        this.el = el;
	    }
	    KioskText.prototype.getValue = function () {
	        return this.el.querySelector('input').value;
	    };
	    KioskText.prototype.getElement = function () {
	        return this.el;
	    };
	    return KioskText;
	}());
	exports.__esModule = true;
	exports["default"] = KioskText;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var KioskCheckbox = (function () {
	    function KioskCheckbox(question) {
	        var html = "<label>" + question + " <input type=checkbox></label>";
	        var el = document.createElement('div');
	        el.classList.add('form-item', 'kiosk-form-item', 'kiosk-checkbox');
	        el.innerHTML = html;
	        this.el = el;
	    }
	    KioskCheckbox.prototype.getValue = function () {
	        return this.el.querySelector('input').checked;
	    };
	    KioskCheckbox.prototype.getElement = function () {
	        return this.el;
	    };
	    return KioskCheckbox;
	}());
	exports.__esModule = true;
	exports["default"] = KioskCheckbox;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var KioskPassword = (function () {
	    function KioskPassword(question) {
	        var html = "<label>" + question + " <input type=password></label>";
	        var el = document.createElement('div');
	        el.classList.add('form-item', 'kiosk-form-item', 'kiosk-password');
	        el.innerHTML = html;
	        this.el = el;
	    }
	    KioskPassword.prototype.getValue = function () {
	        return this.el.querySelector('input').value;
	    };
	    KioskPassword.prototype.getElement = function () {
	        return this.el;
	    };
	    return KioskPassword;
	}());
	exports.__esModule = true;
	exports["default"] = KioskPassword;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var input_control_factory_1 = __webpack_require__(3);
	var online_text_1 = __webpack_require__(8);
	var online_checkbox_1 = __webpack_require__(9);
	var online_password_1 = __webpack_require__(10);
	var OnlineInputControlFactory = (function (_super) {
	    __extends(OnlineInputControlFactory, _super);
	    function OnlineInputControlFactory() {
	        return _super.apply(this, arguments) || this;
	    }
	    OnlineInputControlFactory.prototype.createText = function (question) {
	        return new online_text_1["default"](question);
	    };
	    OnlineInputControlFactory.prototype.createCheckbox = function (question) {
	        return new online_checkbox_1["default"](question);
	    };
	    OnlineInputControlFactory.prototype.createPassword = function (question) {
	        return new online_password_1["default"](question);
	    };
	    return OnlineInputControlFactory;
	}(input_control_factory_1["default"]));
	exports.__esModule = true;
	exports["default"] = OnlineInputControlFactory;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	var OnlineText = (function () {
	    function OnlineText(question) {
	        var html = "<label>" + question + " <input type=text></label>";
	        var el = document.createElement('div');
	        el.classList.add('form-item', 'online-form-item', 'online-text');
	        el.innerHTML = html;
	        this.el = el;
	    }
	    OnlineText.prototype.getValue = function () {
	        return this.el.querySelector('input').value;
	    };
	    OnlineText.prototype.getElement = function () {
	        return this.el;
	    };
	    return OnlineText;
	}());
	exports.__esModule = true;
	exports["default"] = OnlineText;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	var OnlineCheckbox = (function () {
	    function OnlineCheckbox(question) {
	        var html = "<label>" + question + " <input type=checkbox></label>";
	        var el = document.createElement('div');
	        el.classList.add('form-item', 'online-form-item', 'online-checkbox');
	        el.innerHTML = html;
	        this.el = el;
	    }
	    OnlineCheckbox.prototype.getValue = function () {
	        return this.el.querySelector('input').checked;
	    };
	    OnlineCheckbox.prototype.getElement = function () {
	        return this.el;
	    };
	    return OnlineCheckbox;
	}());
	exports.__esModule = true;
	exports["default"] = OnlineCheckbox;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	var OnlinePassword = (function () {
	    function OnlinePassword(question) {
	        var html = "<label>" + question + " <input type=password></label>";
	        var el = document.createElement('div');
	        el.classList.add('form-item', 'online-form-item', 'online-password');
	        el.innerHTML = html;
	        this.el = el;
	    }
	    OnlinePassword.prototype.getValue = function () {
	        return this.el.querySelector('input').value;
	    };
	    OnlinePassword.prototype.getElement = function () {
	        return this.el;
	    };
	    return OnlinePassword;
	}());
	exports.__esModule = true;
	exports["default"] = OnlinePassword;


/***/ }
/******/ ]);