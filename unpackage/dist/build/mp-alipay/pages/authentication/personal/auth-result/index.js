(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/authentication/personal/auth-result/index"],{"24f5":function(n,e,t){"use strict";t.r(e);var o=t("682d"),a=t("5b66");for(var u in a)"default"!==u&&function(n){t.d(e,n,(function(){return a[n]}))}(u);t("d048");var r,s=t("f0c5"),c=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports},"56d2":function(n,e,t){},"5b66":function(n,e,t){"use strict";t.r(e);var o=t("eabf"),a=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=a.a},"682d":function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement;n._self._c},u=[]},9663:function(n,e,t){"use strict";(function(n){t("e09c");o(t("66fd"));var e=o(t("24f5"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("c11b")["createPage"])},d048:function(n,e,t){"use strict";var o=t("56d2"),a=t.n(o);a.a},eabf:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("3b7d"),a=t("1259"),u=t("adf8"),r=getApp(),s={data:function(){return{type:"",userInfo:{},result:"s",desc:""}},components:{},props:{},onLoad:function(e){this.setData({type:e.type,result:e.result,userInfo:n.getStorageSync("personInfo"),desc:e.desc}),"s"==e.result&&this.getSealBase64Fun()},onShareAppMessage:function(){},methods:{showSafeInfo:function(){n.showModal({title:"个人身份隐私安全声明",showCancel:!1,confirmText:"知道了",content:"您输入的身份信息仅用于个人实名认证和获取CA认证证书"})},reDo:function(){n.navigateBack()},goSign:function(){r.globalData.updateUserInfo((function(){n.reLaunch({url:"/pages/home/home"})}))},getSealBase64Fun:function(){var n=0;u.FXQ.personal(this.userInfo.name||"个人",n,3,1,0,this.createSealFun)},createSealFun:function(n){var e=this;(0,o.postBody)({url:a.create_seal,params:{base64String:n},success:function(n){e.uploadPersonalSealFun(n)},fail:function(n){console.log(n)}})},uploadPersonalSealFun:function(e){var t={name:"个人印章",url:e.url,originType:4};(0,o.postBody)({url:a.upload_person_seal,params:t,success:function(){console.log("印章制作完成")},fail:function(e){n.hideLoading(),setTimeout((function(){n.showToast({icon:"none",title:e})}),50)}})}}};e.default=s}).call(this,t("c11b")["default"])}},[["9663","common/runtime","common/vendor"]]]);