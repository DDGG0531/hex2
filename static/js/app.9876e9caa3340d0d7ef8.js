webpackJsonp([1],{NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},i,!1,function(t){e("Z2VJ")},null,null).exports,c=e("/ocq"),l={name:"HelloWorld",data:function(){return{checked:!0,filter:"",fakedata:{}}},methods:{getData:function(){this.axios.get("https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97",{params:{limit:10}}).then(function(t){console.log(t)})}},mounted:function(){this.getData()}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[t._m(0),t._v(" "),e("div",{staticClass:"filter d-block d-md-none"},[e("div",{staticClass:"filter__section "},[e("div",{directives:[{name:"show",rawName:"v-show",value:"location"==t.filter,expression:"filter=='location'"}],staticClass:"section--open"},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{staticClass:"title"},[t._v("Location")]),t._v(" "),e("span",{on:{click:function(s){t.filter=""}}},[t._v("-")])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"location"!=t.filter,expression:"filter!='location'"}],staticClass:"section--close",on:{click:function(s){t.filter="location"}}},[t._m(2)])]),t._v(" "),e("div",{staticClass:"filter__section"},[e("div",{directives:[{name:"show",rawName:"v-show",value:"date"==t.filter,expression:"filter=='date'"}],staticClass:"section--open"},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{staticClass:"title"},[t._v("Date")]),t._v(" "),e("span",{on:{click:function(s){t.filter=""}}},[t._v("-")])]),t._v(" "),t._m(3)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"date"!=t.filter,expression:"filter!='date'"}],staticClass:"section--close",on:{click:function(s){t.filter="date"}}},[t._m(4)])]),t._v(" "),e("div",{staticClass:"filter__section"},[e("div",{directives:[{name:"show",rawName:"v-show",value:"categories"==t.filter,expression:"filter=='categories'"}],staticClass:"section--open"},[e("div",{staticClass:"d-flex justify-content-between"},[e("span",{staticClass:"title"},[t._v("Categories")]),t._v(" "),e("span",{on:{click:function(s){t.filter=""}}},[t._v("-")])]),t._v(" "),t._m(5)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"categories"!=t.filter,expression:"filter!='categories'"}],staticClass:"section--close",on:{click:function(s){t.filter="categories"}}},[t._m(6)])])]),t._v(" "),t._m(7)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"d-block d-md-none "},[s("div",{staticClass:"header__title bg-darkpurple"},[this._v("HaveFun")]),this._v(" "),s("div",{staticClass:"header__search position-relative p-3 "},[s("i",{staticClass:"fas fa-search   position-absolute text-black",staticStyle:{left:"40px",top:"50%",transform:"translateY(-50%)"}}),this._v(" "),s("input",{staticClass:"form-control form-control  pl-5 ",attrs:{type:"text",placeholder:"Explore your own activities"}})])]),this._v(" "),s("div",{staticClass:"bg-darkpurple d-none d-md-flex px-5 align-items-center "},[s("div",{staticClass:"header__title bg-darkpurple grid300"},[this._v("HaveFun")]),this._v(" "),s("div",{staticClass:"header__search position-relative "},[s("i",{staticClass:"fas fa-search   position-absolute text-white",staticStyle:{left:"50px",top:"50%",transform:"translateY(-50%)"}}),this._v(" "),s("input",{staticClass:"form-control form-control-lg border-top-0 border-left-0 border-right-0 pl-5  bg-transparent",staticStyle:{width:"388px",color:"rgb(255,255,255,.5)"},attrs:{type:"text",placeholder:"Explore your own activities"}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"text"},[this._v("Tainwa")]),this._v(" "),s("span",[this._v("+")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"title"},[this._v("Location")]),this._v(" "),s("span",[this._v("+")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"text"},[this._v("Tainwa")]),this._v(" "),s("span",[this._v("+")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"title"},[this._v("Date")]),this._v(" "),s("span",[this._v("+")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"text"},[this._v("Tainwa")]),this._v(" "),s("span",[this._v("+")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"title"},[this._v("Categories")]),this._v(" "),s("span",[this._v("+")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid px-0"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"filter--pc col-12 col-md-4 col-xl-2 d-none d-md-block "},[e("div",{staticClass:"filter--pc__section"},[e("h1",{staticClass:"title"},[t._v("Location")]),t._v(" "),e("span",[t._v("+++")])]),t._v(" "),e("div",{staticClass:"filter--pc__section"},[e("h1",{staticClass:"title"},[t._v("Location")]),t._v(" "),e("span",[t._v("+++")])]),t._v(" "),e("div",{staticClass:"filter--pc__section"},[e("h1",{staticClass:"title"},[t._v("Location")]),t._v(" "),e("span",[t._v("+++")])])]),t._v(" "),e("div",{staticClass:"cards col-12 col-md-8 col-xl-10 border-transparent"},[e("div",{},[e("div",{staticClass:"card mb-3  flex-xl-row"},[e("img",{staticClass:"card-img-top col-12 col-xl-4",attrs:{src:"http://lorempixel.com/400/200/"}}),t._v(" "),e("div",{staticClass:"card-body col-12 col-xl-8 border-0"},[e("h5",{staticClass:"card__title"},[t._v("Card title")]),t._v(" "),e("p",{staticClass:"card__text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),t._v(" "),e("span",{staticClass:"card__author"},[t._v("Ethan Foster")]),t._v(" "),e("span",{staticClass:"card__category"},[t._v("Entertainment")]),t._v(" "),e("p",{staticClass:"card__city"},[e("i",{staticClass:"fas fa-map-marker-alt pr-2"}),t._v("Kaohsuing City")]),t._v(" "),e("p",{staticClass:"card__period"},[e("i",{staticClass:"far fa-calendar-alt pr-2"}),t._v("2018/5/24-2018/5/31")])])])])])])])}]};var o=e("VU/8")(l,r,!1,function(t){e("v9UP")},"data-v-8226a55e",null).exports;a.a.use(c.a);var v=new c.a({routes:[{path:"/",name:"HelloWorld",component:o}]}),_=e("mtWM"),d=e.n(_),f=e("Rf8U"),p=e.n(f);e("q4ao");a.a.use(p.a,d.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:v,components:{App:n},template:"<App/>"})},Z2VJ:function(t,s){},q4ao:function(t,s){},v9UP:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.9876e9caa3340d0d7ef8.js.map