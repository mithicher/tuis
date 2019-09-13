(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Card.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Card.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_CodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/CodeBlock */ "./resources/js/Shared/tuis/CodeBlock.vue");
/* harmony import */ var _Shared_tuis_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Box */ "./resources/js/Shared/tuis/Box.vue");
/* harmony import */ var _Shared_tuis_BasicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/BasicTable */ "./resources/js/Shared/tuis/BasicTable.vue");
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/Card */ "./resources/js/Shared/tuis/Card.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var code = "<card>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</card>";
var code2 = "<card with-header with-footer>\n\t<template slot=\"header\">Card Header</template>\n\tLorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet repellat culpa veritatis.\n\t<template\n\t\tslot=\"footer\"\n\t>Card Footer</template>\n</card>";
var jsCode = "import Card from @/Shared/tuis/Card\";\n\nexport default { \n\tcomponents: {\n\t\tCard\n\t}\n}";
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    CodeBlock: _Shared_tuis_CodeBlock__WEBPACK_IMPORTED_MODULE_1__["default"],
    BasicTable: _Shared_tuis_BasicTable__WEBPACK_IMPORTED_MODULE_3__["default"],
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_4__["default"],
    Card: _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_5__["default"],
    Box: _Shared_tuis_Box__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      code: code,
      code2: code2,
      jsCode: jsCode,
      datas: [{
        name: "with-header",
        type: "Boolean",
        "default": false,
        description: "If true, header section is shown"
      }, {
        name: "with-footer",
        type: "Boolean",
        "default": false,
        description: "If true, footer section is shown"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Card.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/Card.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Card",
  props: {
    withHeader: {
      type: Boolean,
      "default": false
    },
    withFooter: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Card.vue?vue&type=template&id=f23e2b8e&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Card.vue?vue&type=template&id=f23e2b8e& ***!
  \**************************************************************************************************************************************************************************************************/
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
          _vm._v("Card")
        ]),
        _vm._v(" "),
        _c(
          "box",
          { staticClass: "mb-10" },
          [
            _c("template", { slot: "title" }, [_vm._v("Card Basic")]),
            _vm._v(" "),
            _c(
              "template",
              { slot: "body" },
              [
                _c("card", [
                  _vm._v(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  )
                ])
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
            _c("template", { slot: "title" }, [
              _vm._v("Card with Header and Footer")
            ]),
            _vm._v(" "),
            _c(
              "template",
              { slot: "body" },
              [
                _c(
                  "card",
                  { attrs: { "with-header": "", "with-footer": "" } },
                  [
                    _c("template", { slot: "header" }, [_vm._v("Card Header")]),
                    _vm._v(
                      "\n\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit.\n\t\t\t\t\t"
                    ),
                    _c("template", { slot: "footer" }, [_vm._v("Card Footer")])
                  ],
                  2
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Card.vue?vue&type=template&id=bc5bb470&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/Card.vue?vue&type=template&id=bc5bb470& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "shadow w-full rounded-lg bg-white overflow-hidden w-full" },
    [
      _vm.withHeader
        ? _c(
            "div",
            {
              staticClass:
                "card-header border-0 flex items-center justify-between px-8 py-3 bg-gray-100"
            },
            [
              _c(
                "div",
                { staticClass: "text-truncate" },
                [_vm._t("header")],
                2
              ),
              _vm._v(" "),
              _c("div", [_vm._t("header-action")], 2)
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "px-8 py-6" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _vm.withFooter
        ? _c(
            "div",
            { staticClass: "px-8 py-3 bg-gray-100" },
            [_vm._t("footer")],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Card.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Card.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_vue_vue_type_template_id_f23e2b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=f23e2b8e& */ "./resources/js/Pages/Card.vue?vue&type=template&id=f23e2b8e&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_f23e2b8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Card_vue_vue_type_template_id_f23e2b8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Card.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Card.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Card.vue?vue&type=template&id=f23e2b8e&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Card.vue?vue&type=template&id=f23e2b8e& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f23e2b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=template&id=f23e2b8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Card.vue?vue&type=template&id=f23e2b8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f23e2b8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f23e2b8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/Card.vue":
/*!*******************************************!*\
  !*** ./resources/js/Shared/tuis/Card.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_vue_vue_type_template_id_bc5bb470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=bc5bb470& */ "./resources/js/Shared/tuis/Card.vue?vue&type=template&id=bc5bb470&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_bc5bb470___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Card_vue_vue_type_template_id_bc5bb470___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/Card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/Card.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/tuis/Card.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/Card.vue?vue&type=template&id=bc5bb470&":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/tuis/Card.vue?vue&type=template&id=bc5bb470& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_bc5bb470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=template&id=bc5bb470& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Card.vue?vue&type=template&id=bc5bb470&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_bc5bb470___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_bc5bb470___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);