(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/evidence/videoRecord/videoRecord"],{"10c1":function(n,e,t){"use strict";(function(n){t("e09c");o(t("66fd"));var e=o(t("9db4"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"1e19":function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement;n._self._c},c=[]},"65f0":function(n,e,t){"use strict";t.r(e);var o=t("f823"),a=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=a.a},"78da":function(n,e,t){},"9db4":function(n,e,t){"use strict";t.r(e);var o=t("1e19"),a=t("65f0");for(var c in a)"default"!==c&&function(n){t.d(e,n,(function(){return a[n]}))}(c);t("f3d4");var r,u=t("f0c5"),i=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=i.exports},f3d4:function(n,e,t){"use strict";var o=t("78da"),a=t.n(o);a.a},f823:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=getApp(),o={data:function(){return{env:"dev",devSrc:"https://dev.shanqian.cn/videoRecord",prodSrc:"https://shanqian.cn/videoRecord",webSrc:""}},components:{},props:{},onLoad:function(e){var o=t.globalData.getUserToken(),a=n.getStorageSync("currentUser"),c=this[t.globalData.env+"Src"]+"?fileType="+e.type+"&token="+o;if(a.companyId&&(c+="&companyId="+a.companyId),e.fromId){var r="";for(var u in e)e.hasOwnProperty(u)&&"type"!=u&&(console.log(e[u]),r+="&"+u+"="+e[u]);c+=r}console.log(c),this.setData({webSrc:c})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{getRecordVideoFun:function(n){t.globalData.activeTab=n.detail.data[0].type}}};e.default=o}).call(this,t("543d")["default"])}},[["10c1","common/runtime","common/vendor"]]]);