(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f206044"],{8374:function(t,e,a){"use strict";a("8f68")},"84af":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inpageBanner align-items-center align-items-lg-end",style:"background-image: url('/images/"+t.bannerImg+".jpg');"},[a("div",{staticClass:"text-center mt-5 mb-lg-5 animate__animated animate__bounceIn"},[a("div",{staticClass:"titleName"},[t._v(t._s(t.cnTitle))]),a("div",{staticClass:"subName"},[t._v(t._s(t.enTitle))])])])},r=[],n=(a("b0c0"),{computed:{cnTitle:function(){switch(this.$route.name){case"Products":return"產品介紹";case"Cart":return"購物車";case"Info":return"訂購人資料";case"Checkout":return"確認訂單";default:return"產品介紹"}},enTitle:function(){switch(this.$route.name){case"Products":return"Products";case"/Cart":return"Shopping Cart";case"Info":return"Customer Information";case"Checkout":return"Confirm Order";default:return"Products"}},bannerImg:function(){switch(this.$route.name){case"Products":return"products";case"Cart":return"cart";case"Info":return"info";case"Checkout":return"checkout";default:return"products"}}}}),i=n,o=(a("a2fd"),a("2877")),c=Object(o["a"])(i,s,r,!1,null,"6888a03b",null);e["a"]=c.exports},"8f68":function(t,e,a){},"9bff":function(t,e,a){},a2fd:function(t,e,a){"use strict";a("9bff")},b0c0:function(t,e,a){var s=a("83ab"),r=a("9bf2").f,n=Function.prototype,i=n.toString,o=/^\s*function ([^ (]*)/,c="name";s&&!(c in n)&&r(n,c,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(t){return""}}})},bb22:function(t,e,a){},ce4a:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex align-items-center justify-content-center flex-wrap my-5"},[a("div",{staticClass:"d-flex"},[a("div",{class:["step",t.cartActive]},[t._v("1")]),a("div",{class:["stepText",t.cartActive]},[t._v("確認購物車")])]),t._m(0),a("div",{staticClass:"d-flex"},[a("div",{class:["step",t.infoActive]},[t._v("2")]),a("div",{class:["stepText",t.infoActive]},[t._v("填寫資料")])]),t._m(1),a("div",{staticClass:"d-flex"},[a("div",{class:["step",t.checkoutActive]},[t._v("3")]),a("div",{class:["stepText",t.checkoutActive]},[t._v("確認訂單")])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stepArrow d-none d-md-block"},[a("i",{staticClass:"fas fa-angle-right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stepArrow d-none d-md-block"},[a("i",{staticClass:"fas fa-angle-right"})])}],n=(a("b0c0"),{computed:{cartActive:function(){return"Cart"===this.$route.name?"active":""},infoActive:function(){return"Info"===this.$route.name?"active":""},checkoutActive:function(){return"Checkout"===this.$route.name?"active":""}}}),i=n,o=(a("df20"),a("2877")),c=Object(o["a"])(i,s,r,!1,null,"501e788a",null);e["a"]=c.exports},df20:function(t,e,a){"use strict";a("bb22")},e8f2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("banner"),a("cart-step"),a("div",{staticClass:"container mt-5 animate__animated animate__fadeIn"},[a("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid;return[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"userName"}},[t._v("姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],class:["form-control",r],attrs:{type:"text",id:"userName",name:"姓名"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"tel"}},[t._v("電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],class:["form-control",r],attrs:{id:"tel",type:"tel",name:"電話"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"email"}},[t._v("E-mail")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],class:["form-control",r],attrs:{type:"email",id:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"address"}},[t._v("地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],class:["form-control",r],attrs:{type:"text",id:"address",name:"地址"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"payment"}},[t._v("付款方式")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],class:["form-control",r],attrs:{id:"payment",name:"付款方式"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v(" 請選擇付款方式 ")]),t._l(t.pay,(function(e){return a("option",{key:e,staticClass:"text-dark",domProps:{value:e}},[t._v(t._s(e))])}))],2),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"msg"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{type:"text",id:"msg",rows:"8"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})])])]),a("div",{staticClass:"d-flex justify-content-between my-3"},[a("router-link",{staticClass:"outlineBtn",attrs:{to:"/cart"}},[a("span",{staticClass:"angleLineRight mr-2"}),t._v(" 上一步 ")]),a("button",{staticClass:"outlineBtn next",attrs:{type:"button",disabled:s},on:{click:t.submitForm}},[t._v(" 下一步 "),a("span",{staticClass:"angleLineLeft ml-2"})])],1)])]}}])})],1)],1)},r=[],n=a("84af"),i=a("ce4a"),o={components:{banner:n["a"],cartStep:i["a"]},data:function(){return{form:{name:"",tel:"",email:"",address:"",payment:"",message:""},pay:["WebATM","ATM","CVS","Barcode","Credit","ApplePay","GooglePay"]}},methods:{submitForm:function(){sessionStorage.setItem("form",JSON.stringify(this.form)),this.$router.push("/checkout")}}},c=o,l=(a("8374"),a("2877")),u=Object(l["a"])(c,s,r,!1,null,"5149fdd8",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-5f206044.f24d0e68.js.map