(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-preview-index"],{"0767":function(n,e,t){"use strict";t.r(e);var o=t("1bbf"),a=t("3551");for(var c in a)"default"!==c&&function(n){t.d(e,n,(function(){return a[n]}))}(c);t("6ccc");var r,i=t("f0c5"),u=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"50fe3cf2",null,!1,o["a"],r);e["default"]=u.exports},"1bbf":function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",[t("v-uni-web-view",{attrs:{src:n.webSrc},on:{load:function(e){arguments[0]=e=n.$handleEvent(e),n.webLoadSuc.apply(void 0,arguments)},error:function(e){arguments[0]=e=n.$handleEvent(e),n.webLoadErr.apply(void 0,arguments)}}})],1)},c=[]},3551:function(n,e,t){"use strict";t.r(e);var o=t("dc47"),a=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=a.a},"5aee":function(n,e,t){var o=t("9c75");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var a=t("4f06").default;a("160978c4",o,!0,{sourceMap:!1,shadowMode:!1})},"6ccc":function(n,e,t){"use strict";var o=t("5aee"),a=t.n(o);a.a},"9c75":function(n,e,t){var o=t("24fb");e=o(!1),e.push([n.i,"/* pages/template/preview/index.wxss */",""]),n.exports=e},dc47:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=getApp(),o={data:function(){return{webSrc:"",devWebSrc:"https://dev.shanqian.cn/miniPreview",prodWebSrc:"https://shanqian.cn/miniPreview"}},components:{},props:{},onLoad:function(e){n.log(e);var o=t.globalData.getUserToken(),a=uni.getStorageSync("currentUser"),c=this[t.globalData.env+"WebSrc"]+"?templateId="+e.templateId+"&id="+e.id+"&token="+o;a&&a.companyId&&(c+="&companyId="+a.companyId),n.log(c),this.setData({webSrc:c})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{webLoadSuc:function(e){n.log(e)},webLoadErr:function(e){n.log(e)},back:function(){uni.navigateBack()}}};e.default=o}).call(this,t("5a52")["default"])}}]);