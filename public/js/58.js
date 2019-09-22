(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

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



/***/ })

}]);