(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/contract/index"],{"24b7":function(t,n,e){"use strict";e.r(n);var a=e("69c2"),c=e("5810");for(var o in c)"default"!==o&&function(t){e.d(n,t,(function(){return c[t]}))}(o);e("fbbf");var i,r=e("f0c5"),u=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=u.exports},"2ad7":function(t,n,e){"use strict";(function(t){e("e09c");a(e("66fd"));var n=a(e("24b7"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("c11b")["createPage"])},5810:function(t,n,e){"use strict";e.r(n);var a=e("960e"),c=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=c.a},"69c2":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var c=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"960e":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("3b7d"),c=e("5746"),o=getApp(),i={data:function(){return{items:[],isLogin:!0}},components:{},props:{},onLoad:function(){this.setData({isLogin:o.globalData.isLoginIn()}),console.log(this.isLogin)},onShow:function(){this.getContractDataAndCount()},onShareAppMessage:function(){},methods:{goPage:function(n){if(!o.globalData.isLoginIn())return t.switchTab({url:"/pages/pm/pmHome"}),!1;var e=n.currentTarget.dataset.type,a=n.currentTarget.dataset.name,c=t.getStorageSync("currentUser"),i=!1;return(c.companyId&&1==c.authStatus||!c.companyId&&1==c.auth)&&(i=!0),!i&&c.companyId?(t.showModal({title:"立即进行企业实名认证",content:"实名认证后可享受加便捷高效的电子合同服务",showCancel:!0,cancelText:"暂不认证",confirmText:"立即认证",success:function(n){if(n.cancel){var e=getCurrentPages();e.length>1&&t.navigateBack(),t.hideLoading({})}else t.navigateTo({url:"/pages/authentication/company/company-auth-type/index"})}}),!1):i||c.companyId?void t.navigateTo({url:"/pages/contract/contractList/contractList?searchType=".concat(e,"&pageTitle=").concat(a)}):(t.showModal({title:"立即进行个人实名认证",content:"实名认证后可享受加便捷高效的电子合同服务",showCancel:!0,cancelText:"暂不认证",confirmText:"立即认证",success:function(n){if(n.cancel){var e=getCurrentPages();e.length>1&&t.navigateBack(),t.hideLoading({})}else t.navigateTo({url:"/pages/authentication/person/person-auth-type/index"})}}),!1)},getContractDataAndCount:function(){var t=this;(0,a.get)({url:c.get_all_contract_list,success:function(n){t.setData({items:n})}})}}};n.default=i}).call(this,e("c11b")["default"])},adb2:function(t,n,e){},fbbf:function(t,n,e){"use strict";var a=e("adb2"),c=e.n(a);c.a}},[["2ad7","common/runtime","common/vendor"]]]);