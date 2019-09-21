(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_Heading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/Heading.vue */ "./resources/js/Shared/tuis/Heading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var code = "<form @submit.prevent=\"save\" enctype=\"multipart/form-data\" method=\"post\">\n\t<card with-header with-footer>\n\t\t<template slot=\"header\">\n\t\t\t<heading size=\"heading\">Form with Image Upload</heading>\n\t\t</template>\n\n\t\t<select-input\n\t\t\tclass=\"mb-5\"\n\t\t\tlabel=\"Select fruit\"\n\t\t\tv-model=\"selectedValue\"\n\t\t\t:options=\"options\"\n\t\t\t:errors=\"errors['selectedValue']\"\n\t\t\t@input=\"delete errors['selectedValue']\"\n\t\t></select-input>\n\n\t\t<text-input\n\t\t\tclass=\"mb-5\"\n\t\t\tlabel=\"Text Input\"\n\t\t\tv-model=\"text\"\n\t\t\t:errors=\"errors['text']\"\n\t\t\t@input=\"delete errors['text']\"\n\t\t></text-input>\n\n\t\t<file-input\n\t\t\tv-model=\"photo\"\n\t\t\tclass=\"pr-6 pb-8 w-full lg:w-1/2\"\n\t\t\ttype=\"file\"\n\t\t\taccept=\"image/*\"\n\t\t\tlabel=\"Photo\"\n\t\t\t:errors=\"errors['photo']\"\n\t\t/>\n\n\t\t<template slot=\"footer\">\n\t\t\t<loading-button\n\t\t\t\tref=\"cancelButton\"\n\t\t\t\tvariant=\"secondary\"\n\t\t\t\tvariant-type=\"outline\"\n\t\t\t\ttype=\"submit\"\n\t\t\t>Cancel</loading-button>\n\t\t\t<loading-button ref=\"submitButton\" variant=\"primary\" type=\"submit\">Save Button</loading-button>\n\t\t</template>\n\t</card>\n</form>";
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    Heading: _Shared_tuis_Heading_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    errors: Object
  },
  data: function data() {
    return {
      code: code,
      loading: false,
      photo: null,
      text: "",
      selectedValue: "Apple",
      options: [{
        label: "Apple",
        value: "Apple"
      }, {
        label: "Banana",
        value: "Banana"
      }, {
        label: "Blueberry",
        value: "Blueberry"
      }, {
        label: "Kiwi",
        value: "Kiwi"
      }, {
        label: "Pear",
        value: "Pear"
      }, {
        label: "Pineapple",
        value: "Pineapple"
      }, {
        label: "Watermelon",
        value: "Watermelon"
      }] // errors: {
      // 	selectedValue: ["This field is required"]
      // }
      // errors: {}

    };
  },
  methods: {
    save: function save() {
      var _this = this;

      var data = new FormData();
      data.append("selectedValue", this.selectedValue || "");
      data.append("photo", this.photo || "");
      data.append("text", this.text || "");
      this.$refs.submitButton.startLoading();
      this.$inertia.post("/test/store", data).then(function () {
        _this.$refs.submitButton.stopLoading();
      })["catch"](function () {
        _this.$refs.submitButton.stopLoading();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Heading.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/Heading.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    tag: {
      type: String,
      "default": "p"
    },
    size: {
      type: String,
      "default": "normal"
    },
    color: {
      type: String,
      "default": ""
    }
  },
  computed: {
    cssClasses: function cssClasses() {
      return [{
        "text-sm text-gray-600 leading-normal": this.size == "small",
        "text-base text-gray-600 leading-normal": this.size == "normal",
        "text-lg text-gray-700 font-semibold leading-normal": this.size == "large",
        "text-2xl text-gray-700 font-bold leading-tight": this.size == "heading",
        "text-4xl text-gray-700 font-bold leading-tight": this.size == "heading2",
        "text-gray-500 text-xs font-bold tracking-wider uppercase": this.size == "small-caps",
        "text-5xl text-gray-700 leading-none font-bold tracking-tight": this.size == "display",
        "text-6xl text-gray-700 leading-none font-bold tracking-tight": this.size == "display2"
      }, this.color];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e& ***!
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
  return _c("layout", [
    _c("div", { staticClass: "container mx-auto py-10 md:py-20" }, [
      _c("div", { staticClass: "md:flex max-w-6xl mx-auto items-center" }, [
        _c(
          "div",
          { staticClass: "md:w-1/2" },
          [
            _c(
              "heading",
              {
                staticClass: "mb-5 hidden md:block",
                attrs: { size: "display2" }
              },
              [_vm._v("September UI")]
            ),
            _vm._v(" "),
            _c(
              "heading",
              { staticClass: "mb-5 md:hidden", attrs: { size: "heading2" } },
              [_vm._v("September UI Components")]
            ),
            _vm._v(" "),
            _c("heading", { attrs: { size: "normal" } }, [
              _vm._v(
                "Build Laravel-Vue websites with speed. A collection of simple, modular and component library that gives you the building blocks you need to build your Laravel-Vue applications."
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-6 mb-6" }, [
              _c(
                "a",
                {
                  staticClass:
                    "inline-flex align-items-center justify-center rounded-lg font-semibold mr-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3",
                  attrs: { href: "/alert" }
                },
                [_vm._v("Get Started")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "inline-flex align-items-center justify-center rounded-lg font-semibold bg-gray-300 hover:bg-gray-400 text-gray-800 px-8 py-3",
                  attrs: { href: "https://github.com/mithicher/tuis" }
                },
                [_vm._v("Github")]
              )
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-gray-600" }, [
              _vm._v("current version v1.0.0")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "md:w-1/2" }, [
          _c("img", {
            staticClass: "mx-auto",
            attrs: { src: "/bg.svg", alt: "hero-bg", width: "450" }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Heading.vue?vue&type=template&id=49b8eb7a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/Heading.vue?vue&type=template&id=49b8eb7a& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.tag == "p"
      ? _c("p", { class: _vm.cssClasses }, [_vm._t("default")], 2)
      : _vm._e(),
    _vm._v(" "),
    _vm.tag == "h1"
      ? _c("h1", { class: _vm.cssClasses }, [_vm._t("default")], 2)
      : _vm._e(),
    _vm._v(" "),
    _vm.tag == "h2"
      ? _c("h2", { class: _vm.cssClasses }, [_vm._t("default")], 2)
      : _vm._e(),
    _vm._v(" "),
    _vm.tag == "h3"
      ? _c("h3", { class: _vm.cssClasses }, [_vm._t("default")], 2)
      : _vm._e(),
    _vm._v(" "),
    _vm.tag == "h4"
      ? _c("h4", { class: _vm.cssClasses }, [_vm._t("default")], 2)
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Welcome.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Welcome.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=317d1a6e& */ "./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Welcome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=317d1a6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/Heading.vue":
/*!**********************************************!*\
  !*** ./resources/js/Shared/tuis/Heading.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Heading_vue_vue_type_template_id_49b8eb7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.vue?vue&type=template&id=49b8eb7a& */ "./resources/js/Shared/tuis/Heading.vue?vue&type=template&id=49b8eb7a&");
/* harmony import */ var _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/Heading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Heading_vue_vue_type_template_id_49b8eb7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Heading_vue_vue_type_template_id_49b8eb7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/Heading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/Heading.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/tuis/Heading.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Heading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Heading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/Heading.vue?vue&type=template&id=49b8eb7a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Shared/tuis/Heading.vue?vue&type=template&id=49b8eb7a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_49b8eb7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Heading.vue?vue&type=template&id=49b8eb7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Heading.vue?vue&type=template&id=49b8eb7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_49b8eb7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_49b8eb7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);