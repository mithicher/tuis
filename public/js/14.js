(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+Kpa":function(t,e,a){var r=a("xxAB");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},"+SZM":function(t,e,a){"use strict";var r={data:function(){return{showNav:!0}},methods:{toggleMenu:function(){this.showNav=!this.showNav},isUrl:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return""===e[0]?""===location.pathname.substr(1):e.filter(function(t){return location.pathname.substr(1).startsWith(t)}).length}}},s=a("KHd+"),l=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("header",{staticClass:"bg-white shadow-base z-50 relative"},[a("div",{staticClass:"px-5 flex justify-between mx-auto items-center"},[a("div",{staticClass:"flex items-center"},[t.isUrl("")?t._e():a("div",{staticClass:"inline-block inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full mr-2 cursor-pointer",on:{click:t.toggleMenu}},[a("svg",{staticClass:"fill-current text-gray-600",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"}})])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"text-center hidden sm:flex"},[a("inertia-link",{staticClass:"font-medium inline-block py-5 px-5",class:t.isUrl("")?"active text-blue-500":"",attrs:{href:"/"}},[t._v("Home")]),t._v(" "),a("inertia-link",{staticClass:"font-medium inline-block py-5 px-5 hover:text-blue-500",attrs:{href:"/alert"}},[t._v("UI Components")]),t._v(" "),a("inertia-link",{staticClass:"font-medium inline-block py-5 px-5 hover:text-blue-500",attrs:{href:"/example-navbar"}},[t._v("Examples")])],1),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"text-center block sm:hidden flex justify-between"},[a("inertia-link",{staticClass:"font-medium inline-block py-2 px-5",class:t.isUrl("")?"active text-blue-500":"",attrs:{href:"/"}},[t._v("Home")]),t._v(" "),a("inertia-link",{staticClass:"font-medium inline-block py-2 px-5 hover:text-blue-500",class:t.isUrl("about")?"active text-blue-500":"",attrs:{href:"/about"}},[t._v("About")]),t._v(" "),a("inertia-link",{staticClass:"font-medium inline-block py-2 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Examples")]),t._v(" "),a("inertia-link",{staticClass:"font-medium inline-block py-2 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("UI Components")])],1)]),t._v(" "),a("article",[a("div",{staticClass:"flex"},[t.showNav&&!t.isUrl("")?a("div",{staticClass:"h-screen sticky top-0 bg-white w-64 overflow-y-auto"},[a("div",{staticClass:"py-5 mx-2"},[a("div",{staticClass:"uppercase tracking-wider text-sm px-5 text-gray-500 mb-1 font-bold"},[t._v("\n                        Components\n                    ")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("alert")?"text-blue-500 bg-gray-100":"",attrs:{href:"/alert"}},[t._v("Alert")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("avatar")?"text-blue-500 bg-gray-100":"",attrs:{href:"/avatar"}},[t._v("Avatar")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("badge")?"text-blue-500 bg-gray-100":"",attrs:{href:"/badge"}},[t._v("Badge")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("button")?"text-blue-500 bg-gray-100":"",attrs:{href:"/button"}},[t._v("Button")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("card")?"text-blue-500 bg-gray-100":"",attrs:{href:"/card"}},[t._v("Card")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Checkbox")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("datepicker")?"text-blue-500 bg-gray-100":"",attrs:{href:"/datepicker"}},[t._v("Datepicker")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("dropdown")?"text-blue-500 bg-gray-100":"",attrs:{href:"/dropdown"}},[t._v("Dropdown")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Empty State")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("heading")?"text-blue-500 bg-gray-100":"",attrs:{href:"/heading"}},[t._v("Heading")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Icon")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("input")?"text-blue-500 bg-gray-100":"",attrs:{href:"/input"}},[t._v("Input")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("paragraph")?"text-blue-500 bg-gray-100":"",attrs:{href:"/paragraph"}},[t._v("Paragraph")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("radio")?"text-blue-500 bg-gray-100":"",attrs:{href:"/radio"}},[t._v("Radio")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("simple-editor")?"text-blue-500 bg-gray-100":"",attrs:{href:"/simple-editor"}},[t._v("Simple Editor")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("select")?"text-blue-500 bg-gray-100":"",attrs:{href:"/select"}},[t._v("Select")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("search")?"text-blue-500 bg-gray-100":"",attrs:{href:"/search"}},[t._v("Search")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("spinner")?"text-blue-500 bg-gray-100":"",attrs:{href:"/spinner"}},[t._v("Spinner")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("switch")?"text-blue-500 bg-gray-100":"",attrs:{href:"/switch"}},[t._v("Switch")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("table")?"text-blue-500 bg-gray-100":"",attrs:{href:"/table"}},[t._v("Table")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Text Editor")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("toast")?"text-blue-500 bg-gray-100":"",attrs:{href:"/toast"}},[t._v("Toast")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Uploader")])],1),t._v(" "),a("div",{staticClass:"py-5 mx-2"},[a("div",{staticClass:"uppercase tracking-wider text-sm px-5 text-gray-500 mb-1 font-bold"},[t._v("\n                        UI Examples\n                    ")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("example-navbar")?"text-blue-500 bg-gray-100":"",attrs:{href:"/example-navbar"}},[t._v("Navbar")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("login")?"text-blue-500":"",attrs:{href:"/login"}},[t._v("Login")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("register")?"text-blue-500":"",attrs:{href:"/register"}},[t._v("Register")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("layout-one")?"text-blue-500":"",attrs:{href:"/layout-one"}},[t._v("Example Layout")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("layout-two")?"text-blue-500":"",attrs:{href:"/layout-two"}},[t._v("Example Layout Two")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",class:t.isUrl("landing-page")?"text-blue-500":"",attrs:{href:"/landing-page"}},[t._v("Landing Page")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Table")]),t._v(" "),a("inertia-link",{staticClass:"rounded-lg hover:bg-gray-100 text-gray-800 font-medium block py-1 px-5 hover:text-blue-500",attrs:{href:"/contact"}},[t._v("Modal")])],1)]):t._e(),t._v(" "),a("div",{staticClass:"px-6 py-10 flex-1"},[t._t("default"),t._v(" "),t._m(2)],2)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"inline-flex font-bold text-xl",attrs:{href:"/"}},[e("img",{attrs:{src:"/SeptemberUI.svg",alt:"septemberui",width:"150"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"font-medium inline-block py-5",attrs:{href:"#"}},[this._v("version v1.0.1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-16 border-t-2 py-6 text-center md:max-w-6xl mx-auto"},[e("p",{staticClass:"text-gray-600 text-sm"},[this._v("\n                        Made with\n                        "),e("span",{staticClass:"text-red-400"},[this._v("♥")]),this._v(" Guwahati.\n                        Created by\n                        "),e("a",{staticClass:"text-blue-500 hover:text-blue-700",attrs:{href:"https://twitter.com/mithicher",target:"_blank"}},[this._v("@mithicher")]),this._v(".\n                    ")])])}],!1,null,null,null);e.a=l.exports},"1JnD":function(t,e,a){"use strict";var r=a("r6nZ");a.n(r).a},"3Fcs":function(t,e,a){"use strict";var r={props:{datas:{type:Array,default:function(){return[]}},headings:{type:Array,default:function(){return[]}},theme:{type:String,default:"normal"}},computed:{classes:function(){return{"table-striped":"striped"===this.theme}}}},s=(a("XJwL"),a("KHd+")),l=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overflow-x-auto bg-white rounded-lg shadow"},[a("table",{staticClass:"w-full whitespace-no-wrap bg-white overflow-hidden",class:t.classes},[a("thead",[a("tr",{staticClass:"text-left"},t._l(t.headings,function(e,r){return a("th",{key:r,staticClass:"px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs",class:{"text-right":"right"===e.align&&void 0!==e.align,"text-center":"center"===e.align&&void 0!==e.align}},[void 0!==e.title?[t._v(t._s(e.title))]:[t._v(t._s(e))]],2)}),0)]),t._v(" "),a("tbody",[t._t("default")],2)])])},[],!1,null,null,null);e.a=l.exports},MG0K:function(t,e,a){"use strict";var r={props:{tag:{type:String,default:"h2"},size:{type:String,default:"normal"},color:{type:String,default:""},to:{type:String}},computed:{cssClasses:function(){return[{"text-sm text-gray-600 leading-normal":"small"==this.size,"text-base text-gray-600 leading-normal":"normal"==this.size,"text-lg text-gray-700 font-semibold leading-normal font-serif":"large"==this.size,"text-xl md:text-2xl text-gray-700 font-bold leading-tight tracking-tight font-serif":"heading"==this.size,"text-2xl md:text-3xl text-gray-700 font-bold leading-tight tracking-tight font-serif":"heading2"==this.size,"text-gray-500 text-xs font-bold tracking-wider uppercase":"small-caps"==this.size,"text-3xl md:text-5xl text-gray-700 leading-none font-bold tracking-tight font-serif":"display"==this.size,"text-4xl md:text-6xl text-gray-700 leading-none font-bold tracking-tight font-serif":"display2"==this.size},this.color]}}},s=a("KHd+"),l=Object(s.a)(r,function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.cssClasses,attrs:{href:this.to}},[this._t("default")],2)},[],!1,null,null,null);e.a=l.exports},OFBp:function(t,e,a){"use strict";a("wZee");var r=a("QxqB"),s={props:["code","language"],components:{PrismEditor:a.n(r).a}},l=a("KHd+"),i=Object(l.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"bg-gray-100 shadow rounded-lg border overflow-hidden"},[e("div",{staticClass:"flex items-center justify-between px-4 py-2 bg-white"},[e("h2",{staticClass:"text-sm text-gray-600 font-semibold uppercase tracking-wide"},[this._t("default")],2),this._v(" "),e("div",[e("svg",{staticClass:"fill-current text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M8.293 6.293L2.586 12 8.293 17.707 9.707 16.293 5.414 12 9.707 7.707zM15.707 17.707L21.414 12 15.707 6.293 14.293 7.707 18.586 12 14.293 16.293z"}})])])]),this._v(" "),e("prism-editor",{attrs:{code:this.code,language:this.language}})],1)])},[],!1,null,null,null);e.a=i.exports},XJwL:function(t,e,a){"use strict";var r=a("+Kpa");a.n(r).a},"hs/n":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".form-date svg {\n  right: 50px !important;\n}\n",""])},kG9p:function(t,e,a){"use strict";var r={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:String,label:String,errors:{type:Array,default:function(){return[]}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},s=(a("1JnD"),a("KHd+")),l=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.label?a("label",{staticClass:"form-label block mb-1 font-semibold text-gray-700",attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),t._v(" "),a("div",{staticClass:"relative"},[a("input",t._b({ref:"input",staticClass:"px-2 py-2 h-12 leading-normal block w-full border-2 text-gray-800 bg-white font-sans rounded-lg text-left appearance-none focus:border-blue-600 outline-none",class:{"border-red-400":t.errors.length},attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},keydown:function(e){return t.$emit("keydown",e)},blur:function(e){return t.$emit("blur",e)},keyup:function(e){return t.$emit("keyup",e)}}},"input",t.$attrs,!1)),t._v(" "),t.errors.length?a("div",{staticClass:"text-red-600 mt-1 text-sm"},[t._v(t._s(t.errors[0]))]):t._e(),t._v(" "),t.errors.length?a("svg",{staticClass:"absolute text-red-600 fill-current",staticStyle:{top:"12px",right:"12px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"}})]):t._e()])])},[],!1,null,null,null);e.a=l.exports},r6nZ:function(t,e,a){var r=a("hs/n");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},ueNy:function(t,e,a){"use strict";a.r(e);var r=a("+SZM"),s=a("OFBp"),l=a("v8Ej"),i=a("3Fcs"),n=a("MG0K"),o=a("kG9p"),c={components:{Layout:r.a,CodeBlock:s.a,BasicTable:i.a,Heading:n.a,TextInput:o.a,Box:l.a},data:function(){return{fullname:null,errors:{fullname:["Fullname is required"]},code:'<text-input v-model="fullname" label="Full name"></text-input>',code2:'<text-input\n\tv-model="fullname"\n\tlabel="Full name"\n\ttype="text"\n\t:errors="errors[\'fullname\']"\n\t@keydown="delete errors[\'fullname\']"\n></text-input>',jsCode:'import TextInput from @/Shared/tuis/TextInput";\n\nexport default { \n\tcomponents: {\n\t\tTextInput\n\t}\n}',datas:[{name:"type",type:"String",default:"text",description:"email, number, tel etc..."},{name:"label",type:"String",default:"empty",description:"label of the input field"},{name:"errors",type:"Array",default:"[]",description:"Display error message"},{name:"v-model",type:"String",default:"",description:"For data binding"},{name:"@keydown",type:"event",default:"",description:""}]}}},u=a("KHd+"),d=Object(u.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",[a("div",{staticClass:"mb-10 w-2/3 mx-auto"},[a("h1",{staticClass:"text-3xl font-bold mb-10 text-gray-800"},[t._v("Input")]),t._v(" "),a("box",{staticClass:"mb-10"},[a("template",{slot:"title"},[t._v("Example")]),t._v(" "),a("template",{slot:"body"},[a("text-input",{attrs:{label:"Full name"},model:{value:t.fullname,callback:function(e){t.fullname=e},expression:"fullname"}})],1)],2),t._v(" "),a("code-block",{staticClass:"mb-10",attrs:{code:t.code,language:"html"}},[t._v("Template Code")]),t._v(" "),a("box",{staticClass:"mb-10"},[a("template",{slot:"title"},[t._v("Example with Error")]),t._v(" "),a("template",{slot:"body"},[a("text-input",{attrs:{label:"Full name",type:"text",errors:t.errors.fullname},on:{keydown:function(e){delete t.errors.fullname}},model:{value:t.fullname,callback:function(e){t.fullname=e},expression:"fullname"}})],1)],2),t._v(" "),a("code-block",{staticClass:"mb-10",attrs:{code:t.code2,language:"html"}},[t._v("Template Code")]),t._v(" "),a("code-block",{staticClass:"mb-10",attrs:{code:t.jsCode,language:"js"}},[t._v("JS Code")]),t._v(" "),a("h1",{staticClass:"text-2xl font-bold mb-4 text-gray-800 mt-10"},[t._v("Props")]),t._v(" "),a("basic-table",{attrs:{headings:["Name","Type","Default","Description"]}},t._l(t.datas,function(e,r){return a("tr",{key:r,staticClass:"hover:bg-grey-lightest focus-within:bg-grey-lightest"},[a("td",{staticClass:"border-t"},[a("span",{staticClass:"text-gray-700 px-6 py-4 flex items-center focus:text-indigo"},[t._v(t._s(e.name))])]),t._v(" "),a("td",{staticClass:"border-t"},[a("span",{staticClass:"text-gray-700 px-6 py-4 flex items-center focus:text-indigo"},[t._v(t._s(e.type))])]),t._v(" "),a("td",{staticClass:"border-t"},[a("span",{staticClass:"text-gray-700 px-6 py-4 flex items-center focus:text-indigo"},[t._v(t._s(e.default))])]),t._v(" "),a("td",{staticClass:"border-t"},[a("span",{staticClass:"text-gray-700 px-6 py-4 flex items-center focus:text-indigo"},[t._v(t._s(e.description))])])])}),0)],1)])},[],!1,null,null,null);e.default=d.exports},v8Ej:function(t,e,a){"use strict";var r=a("KHd+"),s=Object(r.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white shadow rounded-lg border"},[e("div",{staticClass:"flex items-center justify-between px-4 py-2 bg-gray-100 overflow-hidden rounded-t-lg"},[e("h2",{staticClass:"text-sm text-gray-600 font-semibold uppercase tracking-wide"},[this._t("title")],2),this._v(" "),e("div",[e("svg",{staticClass:"fill-current text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M8.293 6.293L2.586 12 8.293 17.707 9.707 16.293 5.414 12 9.707 7.707zM15.707 17.707L21.414 12 15.707 6.293 14.293 7.707 18.586 12 14.293 16.293z"}})])])]),this._v(" "),e("div",{staticClass:"p-4"},[this._t("body")],2)])},[],!1,null,null,null);e.a=s.exports},xxAB:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".table-striped tbody tr:nth-child(even) {\n  background-color: #f7fafc;\n}\n",""])}}]);
//# sourceMappingURL=14.js.map?id=203b602acdc01976d7f4