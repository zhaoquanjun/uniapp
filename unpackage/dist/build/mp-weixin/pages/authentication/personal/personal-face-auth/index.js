(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/authentication/personal/personal-face-auth/index"],{19752:function(t,e,n){},"19a3":function(t,e,n){"use strict";n.r(e);var i=n("f14a"),o=n("44ba");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("3b13");var s,c=n("f0c5"),u=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=u.exports},"3b13":function(t,e,n){"use strict";var i=n("19752"),o=n.n(i);o.a},"44ba":function(t,e,n){"use strict";n.r(e);var i=n("fc8b"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"5a01":function(t,e,n){"use strict";(function(t){n("e09c");i(n("66fd"));var e=i(n("19a3"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f14a:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={modal:function(){return n.e("components/modal/modal").then(n.bind(null,"462b"))}},o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},fc8b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("3b7d"),o=n("e9ef"),a=n("aa5f");function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){n.e("components/modal/modal").then(function(){return resolve(n("462b"))}.bind(null,n)).catch(n.oe)},u={data:function(){return{ishighLight:!1,name:"",idCard:"",checked:!1,warnTips:["1、在您使用闪签账号签发文件前，您需要进行实名认证，实名认证需要提供您的真实姓名、身份证号码、手机号码；收集此类信息是纯属满足相关法律法规的实名制要求，若您不提供这类信息，您将无法完成实名认证，亦无法以实名身份签发文件。","2、实名认证通过后会由权威CA机构为您颁发数字证书，我们会保留您的数字证书信息，此信息包含您的姓名、身份证件信息，以及为您申请的数字证书序列号，以便供您在签发文件时调用。若您不授权我们保存此信息，您将无法正常使用我们的签发服务。"],warnTitle:"隐私保护协议",isShow:!1,isFinished:!1,field:""}},components:{modal:c},props:{},onLoad:function(e){t.getLocation({type:"wgs84",success:function(e){t.setStorageSync("location",e)},fail:function(e){setTimeout((function(){t.showToast({icon:"none",title:"获取位置信息失败，您的认证将不能使用，请允许获取位置信息"})}),50)}})},onShareAppMessage:function(){},methods:{handleShowSecretFun:function(){this.setData({isShow:!0})},handleEmitFun:function(){this.setData({isShow:!1})},checkedTap:function(){var t=this.checked;this.setData({checked:!t});var e=this.name,n=this.idCard,i=this.checked;void 0==e||""==e||void 0==n||""==n||0==i?this.setData({ishighLight:!1}):this.setData({ishighLight:!0})},showSafeInfo:function(){t.showModal({title:"个人身份隐私安全声明",showCancel:!1,confirmText:"知道了",content:"您输入的身份信息仅用于个人实名认证和获取CA认证证书"})},bindKeyInput:function(t){var e=this.name,n=this.idCard,i=this.checked,o=t.target.dataset.field,a=t.detail.value;this.setData(s({},o,a)),void 0==e||""==e||void 0==n||""==n||0==i?this.setData({ishighLight:!1}):this.setData({ishighLight:!0})},videoAuth:function(e){var n=this;t.showLoading({title:"认证中"}),(0,i.upload)({url:o.authFace,filePath:e,key:"faceVideo",success:function(e){console.log(e),n.setData({isFinished:!0}),(0,i.get)({url:a.get_user_info,success:function(e){var n=t.getStorageSync("currentUser");n.name=e.name,n.auth=1,t.setStorageSync("currentUser",n)},complete:function(){t.hideLoading(),t.navigateTo({url:"/pages/authentication/personal/auth-result/index?result=s&type=face"})}})},fail:function(e){t.hideLoading(),t.navigateTo({url:"/pages/authentication/personal/auth-result/index?result=f&type=face&desc="+e})}})},chooseVideo:function(){var e=this.name,n=this.idCard,a=this.checked,s=[],c=this;if(e||s.push("姓名"),n||s.push("证件号"),s.length)return setTimeout((function(){t.showToast({icon:"none",title:s.join("、")+"不能为空"})}),50),!1;var u=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;return u.test(n)?0==a?(setTimeout((function(){t.showToast({icon:"none",title:"请阅读并同意《隐私保护协议》"})}),50),!1):void(this.isFinished||(t.setStorageSync("personInfo",{name:e,idCard:n}),t.showLoading({title:"加载中"}),(0,i.postBody)({url:o.applyAuth,params:{name:e,idCard:n},success:function(e){console.log(e),t.chooseMedia({count:1,mediaType:["video"],sourceType:["camera"],maxDuration:10,camera:"front",success:function(e){t.hideLoading(),c.videoAuth(e.tempFiles[0].tempFilePath)}})},fail:function(e){console.log(e),t.hideLoading(),setTimeout((function(){t.showToast({icon:"none",title:e,duration:5e3})}),50)},complete:function(){t.hideLoading()}}))):(setTimeout((function(){t.showToast({icon:"none",title:"请输入正确的身份证号码"})}),50),!1)},getPhoneCode:function(){this.phone},back:function(){t.navigateBack()}}};e.default=u}).call(this,n("543d")["default"])}},[["5a01","common/runtime","common/vendor"]]]);