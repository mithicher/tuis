(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Heading.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Heading.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_CodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/CodeBlock */ "./resources/js/Shared/tuis/CodeBlock.vue");
/* harmony import */ var _Shared_tuis_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Box */ "./resources/js/Shared/tuis/Box.vue");
/* harmony import */ var _Shared_tuis_BasicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/BasicTable */ "./resources/js/Shared/tuis/BasicTable.vue");
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/SelectInput */ "./resources/js/Shared/tuis/SelectInput.vue");
/* harmony import */ var _Shared_tuis_RadioInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/tuis/RadioInput */ "./resources/js/Shared/tuis/RadioInput.vue");
/* harmony import */ var _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/tuis/Alert */ "./resources/js/Shared/tuis/Alert.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var code = "<radio-input\n\tlabel=\"Select Gender\"\n\thelp-text=\"select aleast one\"\n\tv-model=\"genderType\"\n\t:options=\"genders\"\n\tname=\"gender\"\n>\n\t<template slot-scope=\"option\">{{ option.row.label }}</template>\n</radio-input>";
var code2 = "<radio-input v-model=\"colorType\" :options=\"colors\" name=\"color\" :stacked=\"false\">\n\t<template slot-scope=\"option\">{{ option.row.label }}</template>\n</radio-input>";
var jsCode = "import RadioInput from @/Shared/tuis/RadioInput\";\n\nexport default { \n\tcomponents: {\n\t\tRadioInput\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tgenderType: \"male\",\n\t\t\tgenders: [\n\t\t\t\t{ label: \"Male\", value: \"male\" },\n\t\t\t\t{ label: \"Female\", value: \"female\" },\n\t\t\t\t{ label: \"Other\", value: \"others\" }\n\t\t\t],\n\n\t\t\tcolorType: \"red\",\n\t\t\tcolors: [\n\t\t\t\t{ label: \"Red\", value: \"red\" },\n\t\t\t\t{ label: \"Green\", value: \"green\" },\n\t\t\t\t{ label: \"Yellow\", value: \"yellow\" }\n\t\t\t],\n\t\t}\n\t}\n}";
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    CodeBlock: _Shared_tuis_CodeBlock__WEBPACK_IMPORTED_MODULE_1__["default"],
    BasicTable: _Shared_tuis_BasicTable__WEBPACK_IMPORTED_MODULE_3__["default"],
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_4__["default"],
    SelectInput: _Shared_tuis_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"],
    RadioInput: _Shared_tuis_RadioInput__WEBPACK_IMPORTED_MODULE_6__["default"],
    Box: _Shared_tuis_Box__WEBPACK_IMPORTED_MODULE_2__["default"],
    Alert: _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      genderType: "male",
      genders: [{
        label: "Male",
        value: "male"
      }, {
        label: "Female",
        value: "female"
      }, {
        label: "Other",
        value: "others"
      }],
      colorType: "red",
      colors: [{
        label: "Red",
        value: "red"
      }, {
        label: "Green",
        value: "green"
      }, {
        label: "Yellow",
        value: "yellow"
      }],
      code: code,
      code2: code2,
      jsCode: jsCode,
      datas: [{
        name: "tag",
        type: "String",
        "default": "p",
        description: ""
      }, {
        name: "text-size",
        type: "String",
        "default": "normal",
        description: "heading|heading2|small-caps|display|display2"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Heading.vue?vue&type=template&id=0991f52e&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Heading.vue?vue&type=template&id=0991f52e& ***!
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
    _c(
      "div",
      { staticClass: "mb-10 w-2/3 mx-auto" },
      [
        _c("h1", { staticClass: "text-3xl font-bold mb-10 text-gray-800" }, [
          _vm._v("Heading")
        ]),
        _vm._v(" "),
        _c(
          "box",
          { staticClass: "mb-10" },
          [
            _c("template", { slot: "title" }, [_vm._v("Stacked Radio")]),
            _vm._v(" "),
            _c(
              "template",
              { slot: "body" },
              [
                _c("alert", { staticClass: "mb-4" }, [
                  _c("strong", [_vm._v("Note:")]),
                  _vm._v(
                    " All radio inputs must have a default value.\n\t\t\t\t"
                  )
                ]),
                _vm._v(" "),
                _c("radio-input", {
                  attrs: {
                    label: "Select Gender",
                    "help-text": "select aleast one",
                    options: _vm.genders,
                    name: "gender"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(option) {
                        return [_vm._v(_vm._s(option.row.label))]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.genderType,
                    callback: function($$v) {
                      _vm.genderType = $$v
                    },
                    expression: "genderType"
                  }
                }),
                _vm._v(" "),
                _c("code", [_vm._v(_vm._s(_vm.genderType))])
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
          "box",
          { staticClass: "mb-10" },
          [
            _c("template", { slot: "title" }, [_vm._v("Inline Radio")]),
            _vm._v(" "),
            _c(
              "template",
              { slot: "body" },
              [
                _c("alert", { staticClass: "mb-4" }, [
                  _c("strong", [_vm._v("Note:")]),
                  _vm._v(
                    " All radio inputs must have a default value.\n\t\t\t\t"
                  )
                ]),
                _vm._v(" "),
                _c("radio-input", {
                  attrs: { options: _vm.colors, name: "color", stacked: false },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(option) {
                        return [_vm._v(_vm._s(option.row.label))]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.colorType,
                    callback: function($$v) {
                      _vm.colorType = $$v
                    },
                    expression: "colorType"
                  }
                }),
                _vm._v(" "),
                _c("code", [_vm._v(_vm._s(_vm.colorType))])
              ],
              1
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "code-block",
          {
            staticClass: "mb-10",
            attrs: { code: _vm.code2, language: "html" }
          },
          [_vm._v("Template Code")]
        ),
        _vm._v(" "),
        _c(
          "code-block",
          { staticClass: "mb-10", attrs: { code: _vm.jsCode, language: "js" } },
          [_vm._v("JS Code")]
        ),
        _vm._v(" "),
        _c(
          "h1",
          { staticClass: "text-2xl font-bold mb-4 text-gray-800 mt-10" },
          [_vm._v("Props")]
        ),
        _vm._v(" "),
        _c(
          "basic-table",
          { attrs: { headings: ["Name", "Type", "Default", "Description"] } },
          _vm._l(_vm.datas, function(data, dataIndex) {
            return _c(
              "tr",
              {
                key: dataIndex,
                staticClass:
                  "hover:bg-grey-lightest focus-within:bg-grey-lightest"
              },
              [
                _c("td", { staticClass: "border-t" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "text-gray-700 px-6 py-4 flex items-center focus:text-indigo"
                    },
                    [_vm._v(_vm._s(data.name))]
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border-t" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "text-gray-700 px-6 py-4 flex items-center focus:text-indigo"
                    },
                    [_vm._v(_vm._s(data.type))]
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border-t" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "text-gray-700 px-6 py-4 flex items-center focus:text-indigo"
                    },
                    [_vm._v(_vm._s(data.default))]
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border-t" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "text-gray-700 px-6 py-4 flex items-center focus:text-indigo"
                    },
                    [_vm._v(_vm._s(data.description))]
                  )
                ])
              ]
            )
          }),
          0
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Heading.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Heading.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Heading_vue_vue_type_template_id_0991f52e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.vue?vue&type=template&id=0991f52e& */ "./resources/js/Pages/Heading.vue?vue&type=template&id=0991f52e&");
/* harmony import */ var _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Heading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Heading_vue_vue_type_template_id_0991f52e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Heading_vue_vue_type_template_id_0991f52e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Heading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Heading.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Heading.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Heading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Heading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Heading.vue?vue&type=template&id=0991f52e&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Heading.vue?vue&type=template&id=0991f52e& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_0991f52e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Heading.vue?vue&type=template&id=0991f52e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Heading.vue?vue&type=template&id=0991f52e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_0991f52e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_0991f52e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);