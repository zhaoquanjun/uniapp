(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/addPerson/index"],{"4b07":function(e,t,n){"use strict";n.r(t);var o=n("f2cd"),i=n("aed3");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("b7ad");var s,u=n("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=c.exports},"92ee":function(e,t,n){"use strict";(function(e){n("e09c");o(n("66fd"));var t=o(n("4b07"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},aed3:function(e,t,n){"use strict";n.r(t);var o=n("f922"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},b7ad:function(e,t,n){"use strict";var o=n("f244"),i=n.n(o);i.a},f244:function(e,t,n){},f2cd:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement;e._self._c},a=[]},f922:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("3b7d"),i=n("0fe3"),a=n("aa5f"),s=n("537e"),u={data:function(){return{suggests:[],timer:null,name:"",phone:"",id:"",canNext:!1,index:-1}},components:{},props:{},onLoad:function(e){this.setData({id:e.id,index:e.index,name:e.name||"",phone:e.phone||"",canNext:e.name&&e.phone})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{handleInputUserNameFun:function(e){var t=this,n=e.detail.value.trim();n&&(this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){t.setData({name:n,canNext:!(!n||!t.phone)}),t.getContactList(n),console.log(t.name,t.phone,t.canNext,1111)}),250)}))},handleInputUserPhoneFun:function(e){var t=this,n=e.detail.value;n&&(this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){t.setData({phone:n,canNext:!(!t.name||!n)}),console.log(t.name,t.phone,t.canNext,222)}),250)}))},handleBlurUserNameFun:function(){var e=this;setTimeout((function(){e.setData({suggests:[]})}),250)},getContactList:function(e,t){var n=this;this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){(0,o.get)({url:i.get_signal_sign_person_list+"?contactType=1&name="+e+"&contactType="+t,success:function(e){n.setData({suggests:e})},fail:function(e){console.log(e)}})}),500)})},handleSelectSuggestFun:function(e){var t=e.currentTarget.dataset.item;this.setData({name:t.name,phone:t.phone,suggests:[],canNext:!(!t.name||!t.phone)})},handleBackFun:function(){e.navigateBack(-1)},handleConfirmFun:function(){var t=this;return this.name?this.phone?s.isTelCode(this.phone)?void(this.index>-1?(e.showLoading({title:"获取认证信息中"}),(0,o.get)({url:a.person_message+"?name="+this.name+"&phone="+this.phone,success:function(n){console.log(n),e.redirectTo({url:"/pages/template/useTemplate/index?origin=person&operate=edit&index="+t.index+"&name="+t.name+"&phone="+t.phone+"&id="+t.id+"&personAuthStatus="+n})},fail:function(t){setTimeout((function(){e.showToast({icon:"none",title:t})}),50)},complete:function(){e.hideLoading()}})):e.redirectTo({url:"/pages/template/useTemplate/index?origin=person&operate=add&index="+this.index+"&name="+this.name+"&phone="+this.phone+"&id="+this.id})):(setTimeout((function(){e.showToast({icon:"none",title:"请填写正确手机号"})}),50),!1):(setTimeout((function(){e.showToast({icon:"none",title:"请填写账号"})}),50),!1):(setTimeout((function(){e.showToast({icon:"none",title:"请填写姓名"})}),50),!1)}}};t.default=u}).call(this,n("543d")["default"])}},[["92ee","common/runtime","common/vendor"]]]);