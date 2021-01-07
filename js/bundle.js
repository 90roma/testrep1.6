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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/button.js":
/*!**************************!*\
  !*** ./src/js/button.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var btn = document.querySelectorAll('.btn');
var btnIcon = document.querySelectorAll('.btn-icon');
var btnText = document.querySelectorAll('.btn-text');
var body = document.querySelector('.body');

function bodyFixed() {
  if (bgSlide.className === 'menu-bg menu-bg--open') {
    body.className = 'body body--overflow';
  } else {
    body.className = 'body';
  }
}

;
var aboutUsWrapper = document.querySelector('.section-services__text-wrapper');
var brandWrapper = document.querySelector('.section-brand__wrapper');
var techWrapper = document.querySelector('.section-technics__wrapper');

function clickBtn() {
  var _loop = function _loop(i) {
    btn[i].addEventListener('click', function () {
      btnIcon[i].classList.toggle('rotate');

      if (btnText[i].innerText === 'Показать всё') {
        btnText[i].innerText = 'Скрыть';
      } else {
        btnText[i].innerText = 'Показать всё';
      }
    });
  };

  for (var i = 0; i < btn.length; i++) {
    _loop(i);
  }
}

clickBtn();
var btnServ = document.getElementById('section-service__btn');
btnServ.addEventListener('click', function () {
  clickBtn();
  aboutUsWrapper.classList.toggle('section-services__text-wrapper--show');
  clickBtn();
});
var btnBrand = document.getElementById('section-brand__btn');
btnBrand.addEventListener('click', function () {
  clickBtn();
  brandWrapper.classList.toggle('section-brand__wrapper');
  clickBtn();
});
var btnTech = document.getElementById('section-technics__btn');
btnTech.addEventListener('click', function () {
  clickBtn();
  techWrapper.classList.toggle('section-technics__wrapper');
  clickBtn();
});
var bgSlide = document.querySelector('.menu-bg');
var mainMenu = document.querySelector('.main-menu');
var menuChat = document.querySelector('.menu-chat');
var menuCall = document.querySelector('.menu-call');
var btnBurger = document.querySelector('.btn-circle--burger');
btnBurger.addEventListener('click', function () {
  if (mainMenu.className === 'main-menu main-menu--close') {
    mainMenu.className = 'main-menu main-menu--open';
    bgSlide.className = 'menu-bg menu-bg--open';
    bodyFixed();
  } else {
    mainMenu.className = 'main-menu main-menu--close';
    bgSlide.className = 'menu-bg menu-bg--close';
  }

  mainMenu.classList.toggle('main-menu--shadow');
});

function close() {
  bgSlide.className = 'menu-bg menu-bg--close';
  mainMenu.className = 'main-menu main-menu--close';
  menuChat.className = 'menu-chat menu-chat--close';
  menuCall.className = 'menu-call menu-call--close';
}

bgSlide.addEventListener('click', function () {
  close();
  bodyFixed();
});
var btnClose = document.querySelectorAll('.btn-circle--close');

for (var i = 0; i < btnClose.length; i++) {
  btnClose[i].onclick = function () {
    close();
    bodyFixed();
  };
}

var btnCall = document.querySelectorAll('.btn-circle--call');

for (var _i = 0; _i < btnCall.length; _i++) {
  btnCall[_i].addEventListener('click', function () {
    if (menuCall.className === 'menu-call menu-call--close') {
      menuCall.className = 'menu-call menu-call--open';
      bgSlide.className = 'menu-bg menu-bg--open';
      mainMenu.className = 'main-menu main-menu--close';
      menuChat.className = 'menu-chat menu-chat--close';
      bodyFixed();
    } else {
      menuCall.className = 'menu-call menu-call--close';
      bgSlide.className = 'menu-bg menu-bg--close';
    }
  });
}

var btnChat = document.querySelectorAll('.btn-circle--chat');

for (var _i2 = 0; _i2 < btnChat.length; _i2++) {
  btnChat[_i2].addEventListener('click', function () {
    if (menuChat.className === 'menu-chat menu-chat--close') {
      menuChat.className = 'menu-chat menu-chat--open';
      bgSlide.className = 'menu-bg menu-bg--open';
      mainMenu.className = 'main-menu main-menu--close';
      menuCall.className = 'menu-call menu-call--close';
      bodyFixed();
    } else {
      menuChat.className = 'menu-chat menu-chat--close';
      bgSlide.className = 'menu-bg menu-bg--close';
    }
  });
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_basic_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/basic.scss */ "./src/scss/basic.scss");
/* harmony import */ var _scss_basic_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_basic_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/fonts.scss */ "./src/scss/fonts.scss");
/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_fonts_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_mobile_swiper_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/mobile-swiper.scss */ "./src/scss/mobile-swiper.scss");
/* harmony import */ var _scss_mobile_swiper_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_mobile_swiper_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/nav.js */ "./src/js/nav.js");
/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_nav_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/swiper.js */ "./src/js/swiper.js");
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_swiper_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/button.js */ "./src/js/button.js");
/* harmony import */ var _js_button_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_button_js__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var activeVertical = document.querySelectorAll('.main-menu__nav-item');
var activeHorizon = document.querySelectorAll('.section-services__nav-item');

for (var i = 0; i < activeVertical.length; i++) {
  activeVertical[i].addEventListener('click', function () {
    for (var _i = 0; _i < activeVertical.length; _i++) {
      activeVertical[_i].classList.remove('nav-item--vertical--active');
    }

    this.classList.add('nav-item--vertical--active');
  });
}

for (var _i2 = 0; _i2 < activeHorizon.length; _i2++) {
  activeHorizon[_i2].addEventListener('click', function () {
    for (var _i3 = 0; _i3 < activeHorizon.length; _i3++) {
      activeHorizon[_i3].classList.remove('nav-item--horizon--active');
    }

    this.classList.add('nav-item--horizon--active');
  });
}

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sliders = document.querySelectorAll('.swiper-container');
sliders.forEach(function (el) {
  var swiper = new Swiper(el, {
    slidesPerView: 1.3,
    spaceBetween: 16,
    pagination: {
      el: el.querySelector('.swiper-pagination'),
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16
      },
      560: {
        slidesPerView: 1.3,
        spaceBetween: 24
      }
    }
  });
});

/***/ }),

/***/ "./src/scss/basic.scss":
/*!*****************************!*\
  !*** ./src/scss/basic.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/fonts.scss":
/*!*****************************!*\
  !*** ./src/scss/fonts.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/mobile-swiper.scss":
/*!*************************************!*\
  !*** ./src/scss/mobile-swiper.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map