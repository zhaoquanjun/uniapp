(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/preview/index"],{"0767":function(n,e,t){"use strict";t.r(e);var o=t("0d31"),a=t("3551");for(var c in a)"default"!==c&&function(n){t.d(e,n,(function(){return a[n]}))}(c);t("8ea6");var u,r=t("f0c5"),i=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=i.exports},"0d31":function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement;n._self._c},c=[]},"27ff":function(n,e,t){},3551:function(n,e,t){"use strict";t.r(e);var o=t("9d75"),a=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=a.a},"72fe":function(n,e,t){"use strict";(function(n){t("e09c");o(t("66fd"));var e=o(t("0767"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"8ea6":function(n,e,t){"use strict";var o=t("27ff"),a=t.n(o);a.a},"9d75":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=getApp(),o={data:function(){return{webSrc:"",devWebSrc:"https://dev.shanqian.cn/miniPreview",prodWebSrc:"https://shanqian.cn/miniPreview"}},components:{},props:{},onLoad:function(e){console.log(e);var o=t.globalData.getUserToken(),a=n.getStorageSync("currentUser"),c=this[t.globalData.env+"WebSrc"]+"?templateId="+e.templateId+"&id="+e.id+"&token="+o;a&&a.companyId&&(c+="&companyId="+a.companyId),console.log(c),this.setData({webSrc:c})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{webLoadSuc:function(n){console.log(n)},webLoadErr:function(n){console.log(n)},back:function(){n.navigateBack()}}};e.default=o}).call(this,t("543d")["default"])}},[["72fe","common/runtime","common/vendor"]]]);