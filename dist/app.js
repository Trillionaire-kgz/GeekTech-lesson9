/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/Button.js":
/*!******************************!*\
  !*** ./Components/Button.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = /*#__PURE__*/function () {
  function Button(title) {
    _classCallCheck(this, Button);

    _defineProperty(this, "title", void 0);

    this.title = title;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return "<button type=\"button\" class=\"filter-btn\" data-filter=\"".concat(this.title, "\">").concat(this.title, "</button>");
    }
  }]);

  return Button;
}();



/***/ }),

/***/ "./Components/MenuItem.js":
/*!********************************!*\
  !*** ./Components/MenuItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItem)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MenuItem = /*#__PURE__*/function () {
  function MenuItem(_ref) {
    var id = _ref.id,
        title = _ref.title,
        price = _ref.price,
        category = _ref.category,
        img = _ref.img,
        desc = _ref.desc;

    _classCallCheck(this, MenuItem);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "title", void 0);

    _defineProperty(this, "price", void 0);

    _defineProperty(this, "category", void 0);

    _defineProperty(this, "img", void 0);

    _defineProperty(this, "desc", void 0);

    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.img = img;
    this.desc = desc;
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      return "\n        <article class=\"menu-item\">\n        <img src=\"".concat(this.img, "\" \n        alt=\"").concat(this.title, "\" width=\"350\" height=\"200\" class=\"photo\"/>\n        <div class=\"menu-item-content\">\n            <div class=\"title\">\n                <h2>").concat(this.title, "</h2>\n                <div class=\"price\">").concat(this.price, "</div> \n            </div>\n                <p>").concat(this.desc, "</p>\n            </div>\n            </article>");
    }
  }]);

  return MenuItem;
}();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Button */ "./Components/Button.js");
/* harmony import */ var _Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/MenuItem */ "./Components/MenuItem.js");


var menu = [new _Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({
  id: 1,
  title: "buttermilk pancakes",
  category: "breakfast",
  price: 15.99,
  img: "./images/item-1.jpeg",
  desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
}), new _Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({
  id: 2,
  title: "diner double",
  category: "lunch",
  price: 13.99,
  img: "./images/item-2.jpeg",
  desc: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats'
}), new _Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({
  id: 3,
  title: "godzilla milkshake",
  category: "shakes",
  price: 6.99,
  img: "./images/item-3.jpeg",
  desc: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.'
}), new _Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({
  id: 4,
  title: "country delight",
  category: "breakfast",
  price: 20.99,
  img: "./images/item-4.jpeg",
  desc: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,'
}), new _Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({
  id: 5,
  title: "egg attack",
  category: "lunch",
  price: 22.99,
  img: "./images/item-5.jpeg",
  desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
}), new _Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({
  id: 6,
  title: "oreo dream",
  category: "shakes",
  price: 18.99,
  img: "./images/item-6.jpeg",
  desc: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday'
}), new _Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({
  id: 7,
  title: "bacon overflow",
  category: "breakfast",
  price: 8.99,
  img: "./images/item-7.jpeg",
  desc: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird'
}), new _Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({
  id: 8,
  title: "american classic",
  category: "lunch",
  price: 12.99,
  img: "./images/item-8.jpeg",
  desc: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut'
}), new _Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({
  id: 9,
  title: "quarantine buddy",
  category: "shakes",
  price: 16.99,
  img: "./images/item-9.jpeg",
  desc: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.'
})];
var buttonsContainer = document.querySelector('#section2');
var menuContainer = document.querySelector('#section3');

function displayMenuItems(menuItems) {
  var displayItems = menuItems.map(function (item) {
    return item.render();
  }).join('');
  menuContainer.innerHTML = displayItems;
}

function displayFilterButtons(menuItems) {
  var categoriesBtns = ["all"];
  var categories = menuItems.map(function (item) {
    return item.category;
  }).forEach(function (category) {
    if (categoriesBtns.includes(category) === false) {
      categoriesBtns.push(category);
    }
  }); // let categories = ["all"].concat(
  //   Array.from(new Set(menuItems.map((item) => item.category)))
  // );

  categoriesBtns = categoriesBtns.map(function (category) {
    return new _Components_Button__WEBPACK_IMPORTED_MODULE_0__.default(category);
  }); // categories = categories.map((category) => new Button(category));
  // buttonsContainer.innerHTML = categories.map((btn) => btn.render()).join('')

  buttonsContainer.innerHTML = categoriesBtns.map(function (btn) {
    return btn.render();
  }).join('');
  var filterBtns = buttonsContainer.querySelectorAll('.filter-btn');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      var filterCondition = event.currentTarget.dataset.filter;
      var filteredMenu = menu.filter(function (MenuItem) {
        switch (filterCondition) {
          case 'all':
            return true;

          case 'breakfast':
            return MenuItem.category === 'breakfast';

          case 'lunch':
            return MenuItem.category === 'lunch';

          case 'shakes':
            return MenuItem.category === 'shakes';

          default:
            return false;
        }
      });
      displayMenuItems(filteredMenu);
    });
  });
}

displayMenuItems(menu);
displayFilterButtons(menu);
})();

/******/ })()
;
//# sourceMappingURL=app.js.map