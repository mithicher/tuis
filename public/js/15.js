(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+Kpa":function(t,e,r){var a=r("xxAB");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(a,n);a.locals&&(t.exports=a.locals)},"+SZM":function(t,e,r){"use strict";var a={data:function(){return{showNav:!0}},methods:{toggleMenu:function(){this.showNav=!this.showNav},isUrl:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return""===e[0]?""===location.pathname.substr(1):e.filter(function(t){return location.pathname.substr(1).startsWith(t)}).length}}},n=r("KHd+"),i=Object(n.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("header",{staticClass:"bg-white shadow-base z-50 relative"},[r("div",{staticClass:"px-5 flex justify-between mx-auto items-center"},[r("div",{staticClass:"flex items-center"},[t.isUrl("")?t._e():r("div",{staticClass:"inline-block inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full mr-2 cursor-pointer",on:{click:t.toggleMenu}},[r("svg",{staticClass:"fill-current text-gray-600",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"}})])]),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"text-center hidden sm:flex"},[r("inertia-link",{staticClass:"font-medium inline-block py-5 px-5",class:t.isUrl("")?"active text-blue-500":"",attrs:{href:"/"}},[t._v("Home")]),t._v(" "),r("inertia-link",{staticClass:"font-medium inline-block py-5 px-5 hover:text-blue-500",attrs:{href:"/alert"}},[t._v("UI Components")]),t._v(" "),r("inertia-link",{staticClass:"font-medium inline-block py-5 px-5 hover:text-blue-500",attrs:{href:"/example-navbar"}},[t._v("Examples")])],1),t._v(" "),t._m(1)]),t._v(" "),r("div",{staticClass:"text-center block sm:hidden flex justify-between"},[r("inertia-link",{staticClass:"font-medium inline-block py-2 px-5",class:t.isUrl("")?"active text-blue-500":"",attrs:{href:"/"}},[t._v("Home")]),t._v(" "),r("inertia-link",{staticClass:"font-medium inline-block py-2 px-5 hover:text-blue-500",class:t.isUrl("about")?"active text-blue-500":"",attrs:{href:"/about"}},[t._v("About")]),t._v(" "),r("inertia-link",{staticClass:"font-medium inline-block py-2 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Examples")]),t._v(" "),r("inertia-link",{staticClass:"font-medium inline-block py-2 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("UI Components")])],1)]),t._v(" "),r("article",[r("div",{staticClass:"flex"},[t.showNav&&!t.isUrl("")?r("div",{staticClass:"h-screen sticky top-0 bg-white w-64 overflow-y-auto"},[r("div",{staticClass:"py-5 mx-2"},[r("div",{staticClass:"uppercase tracking-wider text-sm px-5 text-gray-500 mb-1 font-bold"},[t._v("\n                        Components\n                    ")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("alert")?"text-blue-500 bg-gray-100":"",attrs:{href:"/alert"}},[t._v("Alert")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("avatar")?"text-blue-500 bg-gray-100":"",attrs:{href:"/avatar"}},[t._v("Avatar")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("badge")?"text-blue-500 bg-gray-100":"",attrs:{href:"/badge"}},[t._v("Badge")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("button")?"text-blue-500 bg-gray-100":"",attrs:{href:"/button"}},[t._v("Button")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("card")?"text-blue-500 bg-gray-100":"",attrs:{href:"/card"}},[t._v("Card")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Checkbox")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("datepicker")?"text-blue-500 bg-gray-100":"",attrs:{href:"/datepicker"}},[t._v("Datepicker")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("dropdown")?"text-blue-500 bg-gray-100":"",attrs:{href:"/dropdown"}},[t._v("Dropdown")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Empty State")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("heading")?"text-blue-500 bg-gray-100":"",attrs:{href:"/heading"}},[t._v("Heading")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Icon")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("input")?"text-blue-500 bg-gray-100":"",attrs:{href:"/input"}},[t._v("Input")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("paragraph")?"text-blue-500 bg-gray-100":"",attrs:{href:"/paragraph"}},[t._v("Paragraph")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("radio")?"text-blue-500 bg-gray-100":"",attrs:{href:"/radio"}},[t._v("Radio")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("simple-editor")?"text-blue-500 bg-gray-100":"",attrs:{href:"/simple-editor"}},[t._v("Simple Editor")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("select")?"text-blue-500 bg-gray-100":"",attrs:{href:"/select"}},[t._v("Select")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("search")?"text-blue-500 bg-gray-100":"",attrs:{href:"/search"}},[t._v("Search")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("spinner")?"text-blue-500 bg-gray-100":"",attrs:{href:"/spinner"}},[t._v("Spinner")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("switch")?"text-blue-500 bg-gray-100":"",attrs:{href:"/switch"}},[t._v("Switch")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("table")?"text-blue-500 bg-gray-100":"",attrs:{href:"/table"}},[t._v("Table")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Text Editor")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("toast")?"text-blue-500 bg-gray-100":"",attrs:{href:"/toast"}},[t._v("Toast")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Uploader")])],1),t._v(" "),r("div",{staticClass:"py-5 mx-2"},[r("div",{staticClass:"uppercase tracking-wider text-sm px-5 text-gray-500 mb-1 font-bold"},[t._v("\n                        UI Examples\n                    ")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("example-navbar")?"text-blue-500 bg-gray-100":"",attrs:{href:"/example-navbar"}},[t._v("Navbar")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("login")?"text-blue-500":"",attrs:{href:"/login"}},[t._v("Login")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("register")?"text-blue-500":"",attrs:{href:"/register"}},[t._v("Register")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("layout-one")?"text-blue-500":"",attrs:{href:"/layout-one"}},[t._v("Example Layout")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("layout-two")?"text-blue-500":"",attrs:{href:"/layout-two"}},[t._v("Example Layout Two")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("landing-page")?"text-blue-500":"",attrs:{href:"/landing-page"}},[t._v("Landing Page")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Table")]),t._v(" "),r("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Modal")])],1)]):t._e(),t._v(" "),r("div",{staticClass:"px-6 py-10 flex-1"},[t._t("default"),t._v(" "),t._m(2)],2)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"inline-flex font-bold text-xl",attrs:{href:"/"}},[e("img",{attrs:{src:"/SeptemberUI.svg",alt:"septemberui",width:"150"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"font-medium inline-block py-5",attrs:{href:"#"}},[this._v("version v1.0.1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-16 border-t-2 py-6 text-center md:max-w-6xl mx-auto"},[e("p",{staticClass:"text-gray-600 text-sm"},[this._v("\n                        Made with\n                        "),e("span",{staticClass:"text-red-400"},[this._v("♥")]),this._v(" Guwahati.\n                        Created by\n                        "),e("a",{staticClass:"text-blue-500 hover:text-blue-700",attrs:{href:"https://twitter.com/mithicher",target:"_blank"}},[this._v("@mithicher")]),this._v(".\n                    ")])])}],!1,null,null,null);e.a=i.exports},"3Fcs":function(t,e,r){"use strict";var a={props:{datas:{type:Array,default:function(){return[]}},headings:{type:Array,default:function(){return[]}},theme:{type:String,default:"normal"}},computed:{classes:function(){return{"table-striped":"striped"===this.theme}}}},n=(r("XJwL"),r("KHd+")),i=Object(n.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overflow-x-auto bg-white rounded-lg shadow"},[r("table",{staticClass:"w-full whitespace-no-wrap bg-white overflow-hidden",class:t.classes},[r("thead",[r("tr",{staticClass:"text-left"},t._l(t.headings,function(e,a){return r("th",{key:a,staticClass:"px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs",class:{"text-right":"right"===e.align&&void 0!==e.align,"text-center":"center"===e.align&&void 0!==e.align}},[void 0!==e.title?[t._v(t._s(e.title))]:[t._v(t._s(e))]],2)}),0)]),t._v(" "),r("tbody",[t._t("default")],2)])])},[],!1,null,null,null);e.a=i.exports},"8lM5":function(t,e,r){"use strict";var a=r("PObh");r.n(a).a},MG0K:function(t,e,r){"use strict";var a={props:{tag:{type:String,default:"h2"},size:{type:String,default:"normal"},color:{type:String,default:""},to:{type:String}},computed:{cssClasses:function(){return[{"text-sm text-gray-600 leading-normal":"small"==this.size,"text-base text-gray-600 leading-normal":"normal"==this.size,"text-lg text-gray-700 font-semibold leading-normal font-serif":"large"==this.size,"text-xl md:text-2xl text-gray-700 font-bold leading-tight tracking-tight font-serif":"heading"==this.size,"text-2xl md:text-3xl text-gray-700 font-bold leading-tight tracking-tight font-serif":"heading2"==this.size,"text-gray-500 text-xs font-bold tracking-wider uppercase":"small-caps"==this.size,"text-3xl md:text-5xl text-gray-700 leading-none font-bold tracking-tight font-serif":"display"==this.size,"text-4xl md:text-6xl text-gray-700 leading-none font-bold tracking-tight font-serif":"display2"==this.size},this.color]}}},n=r("KHd+"),i=Object(n.a)(a,function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.cssClasses,attrs:{href:this.to}},[this._t("default")],2)},[],!1,null,null,null);e.a=i.exports},OFBp:function(t,e,r){"use strict";r("wZee");var a=r("QxqB"),n={props:["code","language"],components:{PrismEditor:r.n(a).a}},i=r("KHd+"),s=Object(i.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"bg-gray-100 shadow rounded-lg border overflow-hidden"},[e("div",{staticClass:"flex items-center justify-between px-4 py-2 bg-white"},[e("h2",{staticClass:"text-sm text-gray-600 font-semibold uppercase tracking-wide"},[this._t("default")],2),this._v(" "),e("div",[e("svg",{staticClass:"fill-current text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M8.293 6.293L2.586 12 8.293 17.707 9.707 16.293 5.414 12 9.707 7.707zM15.707 17.707L21.414 12 15.707 6.293 14.293 7.707 18.586 12 14.293 16.293z"}})])])]),this._v(" "),e("prism-editor",{attrs:{code:this.code,language:this.language}})],1)])},[],!1,null,null,null);e.a=s.exports},PObh:function(t,e,r){var a=r("nCx0");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(a,n);a.locals&&(t.exports=a.locals)},XJwL:function(t,e,r){"use strict";var a=r("+Kpa");r.n(a).a},c5lM:function(t,e,r){"use strict";r.r(e);var a=r("+SZM"),n=r("OFBp"),i=r("v8Ej"),s=r("3Fcs"),l=r("MG0K"),o={components:{Layout:a.a,CodeBlock:n.a,BasicTable:s.a,Heading:l.a,Box:i.a},data:function(){return{code:'@keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.spinner {\n  position: relative;\n  overflow: hidden;\n}\n\n.spinner:before {\n  content: "";\n  box-sizing: border-box;\n  position: absolute;\n  background-color: inherit;\n  width: 100%;\n  height: 100%;\n  display: block;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  opacity: 0.95;\n}\n\n.spinner:after {\n  content: "";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-left-color: inherit;\n  animation: spinner 0.65s linear infinite;\n  z-index: 2;\n}\n\n.spinner-md:after {\n  border-width: 3px;\n  width: 32px !important;\n  height: 32px !important;\n}\n\n.spinner-blue {\n  border-left-color: #3490DC !important;\n}\n.spinner-red {\n\tborder-left-color: #e3342f !important;\n}',code2:'<div class="spinner spinner-md spinner-blue w-16 h-16 block"></div>',datas:[{name:"label",type:"String",default:"empty",description:"label of the input field"},{name:"v-model",type:"String",default:"",description:"For data binding"},{name:"options",type:"array",default:"[]",description:"[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]"},{name:"stacked",type:"Boolean",default:"true",description:"If false, radio inputs are inlined"}]}}},d=(r("8lM5"),r("KHd+")),c=Object(d.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout",[r("div",{staticClass:"mb-10 w-2/3 mx-auto"},[r("h1",{staticClass:"text-3xl font-bold mb-10 text-gray-800"},[t._v("Spinner")]),t._v(" "),r("box",{staticClass:"mb-10"},[r("template",{slot:"title"},[t._v("Spinner Blue")]),t._v(" "),r("template",{slot:"body"},[r("div",{staticClass:"spinner spinner-md spinner-blue w-16 h-16 block"})])],2),t._v(" "),r("box",{staticClass:"mb-10"},[r("template",{slot:"title"},[t._v("Spinner Red")]),t._v(" "),r("template",{slot:"body"},[r("div",{staticClass:"spinner spinner-md spinner-red w-16 h-16 block"})])],2),t._v(" "),r("code-block",{staticClass:"mb-10",attrs:{code:t.code2,language:"html"}},[t._v("Template Code")]),t._v(" "),r("code-block",{staticClass:"mb-10",attrs:{code:t.code,language:"css"}},[t._v("CSS Code")])],1)])},[],!1,null,null,null);e.default=c.exports},nCx0:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,'@-webkit-keyframes spinner {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.spinner {\n  position: relative;\n  overflow: hidden;\n}\n.spinner:before {\n  content: "";\n  box-sizing: border-box;\n  position: absolute;\n  background-color: inherit;\n  width: 100%;\n  height: 100%;\n  display: block;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  opacity: 0.95;\n}\n.spinner:after {\n  content: "";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-left-color: inherit;\n  -webkit-animation: spinner 0.65s linear infinite;\n          animation: spinner 0.65s linear infinite;\n  z-index: 2;\n}\n.spinner-md:after {\n  border-width: 3px;\n  width: 32px !important;\n  height: 32px !important;\n}\n.spinner-blue {\n  border-left-color: #3490dc !important;\n}\n.spinner-red {\n  border-left-color: #e3342f !important;\n}\n',""])},v8Ej:function(t,e,r){"use strict";var a=r("KHd+"),n=Object(a.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white shadow rounded-lg border"},[e("div",{staticClass:"flex items-center justify-between px-4 py-2 bg-gray-100 overflow-hidden rounded-t-lg"},[e("h2",{staticClass:"text-sm text-gray-600 font-semibold uppercase tracking-wide"},[this._t("title")],2),this._v(" "),e("div",[e("svg",{staticClass:"fill-current text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M8.293 6.293L2.586 12 8.293 17.707 9.707 16.293 5.414 12 9.707 7.707zM15.707 17.707L21.414 12 15.707 6.293 14.293 7.707 18.586 12 14.293 16.293z"}})])])]),this._v(" "),e("div",{staticClass:"p-4"},[this._t("body")],2)])},[],!1,null,null,null);e.a=n.exports},xxAB:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".table-striped tbody tr:nth-child(even) {\n  background-color: #f7fafc;\n}\n",""])}}]);
//# sourceMappingURL=15.js.map?id=4880962e38a5de390022