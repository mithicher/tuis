(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Switch.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Switch.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_CodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/CodeBlock */ "./resources/js/Shared/tuis/CodeBlock.vue");
/* harmony import */ var _Shared_tuis_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Box */ "./resources/js/Shared/tuis/Box.vue");
/* harmony import */ var _Shared_tuis_BasicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/BasicTable */ "./resources/js/Shared/tuis/BasicTable.vue");
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_SwitchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/SwitchInput */ "./resources/js/Shared/tuis/SwitchInput.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var code = "<switch-input color=\"#F5BF21\" v-model=\"switchInput\">\n\t<span v-if=\"switchInput == true\">Active</span>\n\t<span v-if=\"switchInput == false\">Not Active</span>\n</switch-input>";
var jsCode = "import SwitchInput from \"@/components/SwitchInput.vue\";\n\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tswitchInput: false\n\t\t};\n\t},\n\n\tcomponents: {\n\t\tSwitchInput\n\t}\n};";
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    CodeBlock: _Shared_tuis_CodeBlock__WEBPACK_IMPORTED_MODULE_1__["default"],
    BasicTable: _Shared_tuis_BasicTable__WEBPACK_IMPORTED_MODULE_3__["default"],
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_4__["default"],
    Box: _Shared_tuis_Box__WEBPACK_IMPORTED_MODULE_2__["default"],
    SwitchInput: _Shared_tuis_SwitchInput__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      switchInput: false,
      code: code,
      jsCode: jsCode,
      datas: [{
        name: "label",
        type: "String",
        "default": "empty",
        description: "label of the input field"
      }, {
        name: "v-model",
        type: "String",
        "default": "",
        description: "For data binding"
      }, {
        name: "options",
        type: "array",
        "default": "[]",
        description: "[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]"
      }, {
        name: "stacked",
        type: "Boolean",
        "default": "true",
        description: "If false, radio inputs are inlined"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SwitchInput",
  model: {
    prop: "isEnabled",
    event: "toggle"
  },
  props: {
    isEnabled: {
      type: Boolean,
      "default": true
    },
    color: {
      type: String,
      required: false,
      "default": "#4D4D4D"
    }
  },
  methods: {
    toggle: function toggle() {
      this.$emit("toggle", !this.isEnabled);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".switch-button-control[data-v-75f0f46e] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.switch-button-control .switch-button[data-v-75f0f46e] {\n  height: 1.6em;\n  width: calc(1.6em * 2);\n  /* border: 2px solid #ddd; */\n  /* box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.33); */\n  border-radius: 1.6em;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  background: #ddd;\n  box-sizing: border-box;\n}\n.switch-button-control .switch-button .button[data-v-75f0f46e] {\n  height: 1.6em;\n  width: 1.6em;\n  border: 2px solid #ddd;\n  border-radius: 1.6em;\n  background-color: #fff;\n  transition: all 0.3s ease-in-out;\n  box-sizing: border-box;\n}\n.switch-button-control .switch-button.enabled[data-v-75f0f46e] {\n  background-color: var(--color);\n  box-shadow: none;\n}\n.switch-button-control .switch-button.enabled .button[data-v-75f0f46e] {\n  background: white;\n  border: 2px solid var(--color);\n  transform: translateX(calc(calc(1.6em - (2 * 2px)) + (2 * 2px)));\n}\n.switch-button-control .switch-button-label[data-v-75f0f46e] {\n  margin-left: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Switch.vue?vue&type=template&id=55cc941d&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Switch.vue?vue&type=template&id=55cc941d& ***!
  \****************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "mb-10 w-2/3 mx-auto" },
      [
        _c("h1", { staticClass: "text-3xl font-bold mb-10 text-gray-800" }, [
          _vm._v("Switch")
        ]),
        _vm._v(" "),
        _c(
          "box",
          { staticClass: "mb-10" },
          [
            _c("template", { slot: "title" }, [_vm._v("Switch")]),
            _vm._v(" "),
            _c(
              "template",
              { slot: "body" },
              [
                _c(
                  "switch-input",
                  {
                    attrs: { color: "#4299e1" },
                    model: {
                      value: _vm.switchInput,
                      callback: function($$v) {
                        _vm.switchInput = $$v
                      },
                      expression: "switchInput"
                    }
                  },
                  [
                    _vm.switchInput == true
                      ? _c("span", [_vm._v("Active")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.switchInput == false
                      ? _c("span", [_vm._v("Not Active")])
                      : _vm._e()
                  ]
                )
              ],
              1
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "code-block",
          { staticClass: "mb-10", attrs: { code: _vm.code, language: "html" } },
          [_vm._v("Template Code")]
        ),
        _vm._v(" "),
        _c(
          "code-block",
          { staticClass: "mb-10", attrs: { code: _vm.jsCode, language: "js" } },
          [_vm._v("JS Code")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Box.vue?vue&type=template&id=60a6627a&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/Box.vue?vue&type=template&id=60a6627a& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "bg-white shadow rounded-lg border" }, [
    _c(
      "div",
      {
        staticClass:
          "flex items-center justify-between px-4 py-2 bg-gray-100 overflow-hidden rounded-t-lg"
      },
      [
        _c(
          "h2",
          {
            staticClass:
              "text-sm text-gray-600 font-semibold uppercase tracking-wide"
          },
          [_vm._t("title")],
          2
        ),
        _vm._v(" "),
        _c("div", [
          _c(
            "svg",
            {
              staticClass: "fill-current text-gray-500",
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
                  d:
                    "M8.293 6.293L2.586 12 8.293 17.707 9.707 16.293 5.414 12 9.707 7.707zM15.707 17.707L21.414 12 15.707 6.293 14.293 7.707 18.586 12 14.293 16.293z"
                }
              })
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "p-4" }, [_vm._t("body")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "switch-button-control" }, [
      _c(
        "div",
        {
          staticClass: "switch-button",
          class: { enabled: _vm.isEnabled },
          style: { "--color": _vm.color },
          on: { click: _vm.toggle }
        },
        [_c("div", { staticClass: "button" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "switch-button-label" }, [_vm._t("default")], 2)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Switch.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Switch.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switch_vue_vue_type_template_id_55cc941d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch.vue?vue&type=template&id=55cc941d& */ "./resources/js/Pages/Switch.vue?vue&type=template&id=55cc941d&");
/* harmony import */ var _Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switch.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Switch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Switch_vue_vue_type_template_id_55cc941d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Switch_vue_vue_type_template_id_55cc941d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Switch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Switch.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Switch.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Switch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Switch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Switch.vue?vue&type=template&id=55cc941d&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Switch.vue?vue&type=template&id=55cc941d& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_55cc941d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Switch.vue?vue&type=template&id=55cc941d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Switch.vue?vue&type=template&id=55cc941d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_55cc941d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_55cc941d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/Box.vue":
/*!******************************************!*\
  !*** ./resources/js/Shared/tuis/Box.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Box_vue_vue_type_template_id_60a6627a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box.vue?vue&type=template&id=60a6627a& */ "./resources/js/Shared/tuis/Box.vue?vue&type=template&id=60a6627a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Box_vue_vue_type_template_id_60a6627a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Box_vue_vue_type_template_id_60a6627a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/Box.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/Box.vue?vue&type=template&id=60a6627a&":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/tuis/Box.vue?vue&type=template&id=60a6627a& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_template_id_60a6627a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Box.vue?vue&type=template&id=60a6627a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Box.vue?vue&type=template&id=60a6627a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_template_id_60a6627a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_template_id_60a6627a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/SwitchInput.vue":
/*!**************************************************!*\
  !*** ./resources/js/Shared/tuis/SwitchInput.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchInput_vue_vue_type_template_id_75f0f46e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=template&id=75f0f46e&scoped=true& */ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e&scoped=true&");
/* harmony import */ var _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SwitchInput_vue_vue_type_style_index_0_id_75f0f46e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css& */ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchInput_vue_vue_type_template_id_75f0f46e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchInput_vue_vue_type_template_id_75f0f46e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75f0f46e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/SwitchInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_75f0f46e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&id=75f0f46e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_75f0f46e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_75f0f46e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_75f0f46e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_75f0f46e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_75f0f46e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_75f0f46e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=template&id=75f0f46e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_75f0f46e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_75f0f46e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);