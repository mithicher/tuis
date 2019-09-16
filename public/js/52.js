(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Select.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Select.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _Shared_tuis_SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/SelectInput */ "./resources/js/Shared/tuis/SelectInput.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var code = "<select-input v-model=\"fruitName\" label=\"Select fruit\" :options=\"fruitOptions\">\n\t<option value=\"null\" disabled>Select a fruit</option>\n</select-input>";
var code2 = "<select-input\n\tv-model=\"fruitName\"\n\tlabel=\"Select fruit\"\n\t:options=\"fruitOptions\"\n\t:errors=\"errors['fruitName']\"\n\t@input=\"delete errors['fruitName']\"\n>\n\t<option value=\"null\" disabled>Select a fruit</option>\n</select-input>";
var jsCode = "import SelectInput from @/Shared/tuis/SelectInput\";\n\nexport default { \n\tcomponents: {\n\t\tSelectInput\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tfruitName: null,\n\n\t\t\terrors: {\n\t\t\t\tfruitName: [\"Name is required\"]\n\t\t\t},\n\n\t\t\tfruitOptions: [\n\t\t\t\t{\n\t\t\t\t\tlabel: \"Apple\",\n\t\t\t\t\tvalue: \"Apple\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tlabel: \"Mango\",\n\t\t\t\t\tvalue: \"Mango\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tlabel: \"Orange\",\n\t\t\t\t\tvalue: \"Orange\"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}";
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    CodeBlock: _Shared_tuis_CodeBlock__WEBPACK_IMPORTED_MODULE_1__["default"],
    BasicTable: _Shared_tuis_BasicTable__WEBPACK_IMPORTED_MODULE_3__["default"],
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_4__["default"],
    SelectInput: _Shared_tuis_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"],
    Box: _Shared_tuis_Box__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      fruitName: null,
      errors: {
        fruitName: ["Name is required"]
      },
      fruitOptions: [{
        label: "Apple",
        value: "Apple"
      }, {
        label: "Mango",
        value: "Mango"
      }, {
        label: "Orange",
        value: "Orange"
      }],
      code: code,
      code2: code2,
      jsCode: jsCode,
      datas: [{
        name: "type",
        type: "String",
        "default": "text",
        description: "email, number, tel etc..."
      }, {
        name: "label",
        type: "String",
        "default": "empty",
        description: "label of the input field"
      }, {
        name: "errors",
        type: "Array",
        "default": "[]",
        description: "Display error message"
      }, {
        name: "v-model",
        type: "String",
        "default": "",
        description: "For data binding"
      }, {
        name: "@input",
        type: "event",
        "default": "",
        description: ""
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Select.vue?vue&type=template&id=07cbede5&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Select.vue?vue&type=template&id=07cbede5& ***!
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
          _vm._v("Select")
        ]),
        _vm._v(" "),
        _c(
          "box",
          { staticClass: "mb-10" },
          [
            _c("template", { slot: "title" }, [_vm._v("Example")]),
            _vm._v(" "),
            _c(
              "template",
              { slot: "body" },
              [
                _c(
                  "select-input",
                  {
                    attrs: { label: "Select fruit", options: _vm.fruitOptions },
                    model: {
                      value: _vm.fruitName,
                      callback: function($$v) {
                        _vm.fruitName = $$v
                      },
                      expression: "fruitName"
                    }
                  },
                  [
                    _c("option", { attrs: { value: "null", disabled: "" } }, [
                      _vm._v("Select a fruit")
                    ])
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
          "box",
          { staticClass: "mb-10" },
          [
            _c("template", { slot: "title" }, [_vm._v("Example with Error")]),
            _vm._v(" "),
            _c(
              "template",
              { slot: "body" },
              [
                _c(
                  "select-input",
                  {
                    attrs: {
                      label: "Select fruit",
                      options: _vm.fruitOptions,
                      errors: _vm.errors["fruitName"]
                    },
                    on: {
                      input: function($event) {
                        delete _vm.errors["fruitName"]
                      }
                    },
                    model: {
                      value: _vm.fruitName,
                      callback: function($$v) {
                        _vm.fruitName = $$v
                      },
                      expression: "fruitName"
                    }
                  },
                  [
                    _c("option", { attrs: { value: "null", disabled: "" } }, [
                      _vm._v("Select a fruit")
                    ])
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

/***/ "./resources/js/Pages/Select.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Select.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select_vue_vue_type_template_id_07cbede5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.vue?vue&type=template&id=07cbede5& */ "./resources/js/Pages/Select.vue?vue&type=template&id=07cbede5&");
/* harmony import */ var _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Select_vue_vue_type_template_id_07cbede5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Select_vue_vue_type_template_id_07cbede5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Select.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Select.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Select.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Select.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Select.vue?vue&type=template&id=07cbede5&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Select.vue?vue&type=template&id=07cbede5& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_07cbede5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Select.vue?vue&type=template&id=07cbede5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Select.vue?vue&type=template&id=07cbede5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_07cbede5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_07cbede5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);