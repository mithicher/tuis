(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showNav: true
    };
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.showNav = !this.showNav;
    },
    isUrl: function isUrl() {
      for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
        urls[_key] = arguments[_key];
      }

      if (urls[0] === "") {
        return location.pathname.substr(1) === "";
      }

      return urls.filter(function (url) {
        return location.pathname.substr(1).startsWith(url);
      }).length;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active,\n.active-left {\n  position: relative;\n}\n.active:after {\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  content: \"\";\n  height: 3px;\n  width: 100%;\n  border-radius: 1000px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  background-color: #4299e1;\n}\n.active-left:after {\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  display: block;\n  margin-top: auto;\n  margin-bottom: auto;\n  content: \"\";\n  height: 80%;\n  width: 5px;\n  border-radius: 1000px;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  background-color: #4299e1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [
    _c("header", { staticClass: "bg-white shadow-base z-50 relative" }, [
      _c(
        "div",
        { staticClass: "px-5 flex justify-between mx-auto items-center" },
        [
          _c("div", { staticClass: "flex items-center" }, [
            !_vm.isUrl("")
              ? _c(
                  "div",
                  {
                    staticClass:
                      "inline-block inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full mr-2 cursor-pointer",
                    on: { click: _vm.toggleMenu }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "fill-current text-gray-600",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"
                          }
                        })
                      ]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center hidden sm:flex" },
            [
              _c(
                "inertia-link",
                {
                  staticClass: "font-medium inline-block py-5 px-5",
                  class: _vm.isUrl("") ? "active text-blue-500" : "",
                  attrs: { href: "/" }
                },
                [_vm._v("Home")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass:
                    "font-medium inline-block py-5 px-5 hover:text-blue-500",
                  attrs: { href: "/alert" }
                },
                [_vm._v("UI Components")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass:
                    "font-medium inline-block py-5 px-5 hover:text-blue-500",
                  attrs: { href: "/example-navbar" }
                },
                [_vm._v("Examples")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(1)
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center block sm:hidden flex justify-between" },
        [
          _c(
            "inertia-link",
            {
              staticClass: "font-medium inline-block py-2 px-5",
              class: _vm.isUrl("") ? "active text-blue-500" : "",
              attrs: { href: "/" }
            },
            [_vm._v("Home")]
          ),
          _vm._v(" "),
          _c(
            "inertia-link",
            {
              staticClass:
                "font-medium inline-block py-2 px-5 hover:text-blue-500",
              class: _vm.isUrl("about") ? "active text-blue-500" : "",
              attrs: { href: "/about" }
            },
            [_vm._v("About")]
          ),
          _vm._v(" "),
          _c(
            "inertia-link",
            {
              staticClass:
                "font-medium inline-block py-2 px-5 hover:text-blue-500",
              attrs: { href: "/contact" }
            },
            [_vm._v("Examples")]
          ),
          _vm._v(" "),
          _c(
            "inertia-link",
            {
              staticClass:
                "font-medium inline-block py-2 px-5 hover:text-blue-500",
              attrs: { href: "/contact" }
            },
            [_vm._v("UI Components")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("article", [
      _c("div", { staticClass: "flex" }, [
        _vm.showNav && !_vm.isUrl("")
          ? _c(
              "div",
              {
                staticClass:
                  "h-screen sticky top-0 bg-white w-64 overflow-y-auto"
              },
              [
                _c(
                  "div",
                  { staticClass: "py-5 mx-2" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "uppercase tracking-wider text-sm px-5 text-gray-500 mb-1 font-bold"
                      },
                      [_vm._v("Components")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("alert")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/alert" }
                      },
                      [_vm._v("Alert")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("avatar")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/avatar" }
                      },
                      [_vm._v("Avatar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("badge")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/badge" }
                      },
                      [_vm._v("Badge")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("button")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/button" }
                      },
                      [_vm._v("Button")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("card")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/card" }
                      },
                      [_vm._v("Card")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        attrs: { href: "/contact" }
                      },
                      [_vm._v("Checkbox")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("datepicker")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/datepicker" }
                      },
                      [_vm._v("Datepicker")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("dropdown")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/dropdown" }
                      },
                      [_vm._v("Dropdown")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        attrs: { href: "/contact" }
                      },
                      [_vm._v("Empty State")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("heading")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/heading" }
                      },
                      [_vm._v("Heading")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        attrs: { href: "/contact" }
                      },
                      [_vm._v("Icon")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("input")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/input" }
                      },
                      [_vm._v("Input")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("radio")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/radio" }
                      },
                      [_vm._v("Radio")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("simple-editor")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/simple-editor" }
                      },
                      [_vm._v("Simple Editor")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("select")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/select" }
                      },
                      [_vm._v("Select")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("search")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/search" }
                      },
                      [_vm._v("Search")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("spinner")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/spinner" }
                      },
                      [_vm._v("Spinner")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("switch")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/switch" }
                      },
                      [_vm._v("Switch")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("table")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/table" }
                      },
                      [_vm._v("Table")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        attrs: { href: "/contact" }
                      },
                      [_vm._v("Text Editor")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("toast")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/toast" }
                      },
                      [_vm._v("Toast")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        attrs: { href: "/contact" }
                      },
                      [_vm._v("Uploader")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "py-5 mx-2" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "uppercase tracking-wider text-sm px-5 text-gray-500 mb-1 font-bold"
                      },
                      [_vm._v("UI Examples")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("example-navbar")
                          ? "text-blue-500 bg-gray-100"
                          : "",
                        attrs: { href: "/example-navbar" }
                      },
                      [_vm._v("Navbar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("login") ? "text-blue-500" : "",
                        attrs: { href: "/login" }
                      },
                      [_vm._v("Login")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("register") ? "text-blue-500" : "",
                        attrs: { href: "/register" }
                      },
                      [_vm._v("Register")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("layout-one") ? "text-blue-500" : "",
                        attrs: { href: "/layout-one" }
                      },
                      [_vm._v("Example Layout")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("layout-two") ? "text-blue-500" : "",
                        attrs: { href: "/layout-two" }
                      },
                      [_vm._v("Example Layout Two")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        class: _vm.isUrl("landing-page") ? "text-blue-500" : "",
                        attrs: { href: "/landing-page" }
                      },
                      [_vm._v("Landing Page")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        attrs: { href: "/contact" }
                      },
                      [_vm._v("Table")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",
                        attrs: { href: "/contact" }
                      },
                      [_vm._v("Modal")]
                    )
                  ],
                  1
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "px-6 py-10 flex-1" },
          [_vm._t("default"), _vm._v(" "), _vm._m(2)],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "inline-flex", attrs: { href: "/" } }, [
      _c("img", {
        attrs: { src: "/september_ui_logo.png", alt: "logo", width: "40" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "a",
        { staticClass: "font-medium inline-block py-5", attrs: { href: "#" } },
        [_vm._v("version v1.0.0")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "mt-16 border-t-2 py-6 text-center md:max-w-6xl mx-auto" },
      [
        _c("p", { staticClass: "text-gray-500 text-sm" }, [
          _vm._v("Made in Guwahati. Copyright © 2019")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Shared/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086& */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=6bf30086& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);