(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/contract/sign/next/companyLink/companyLink"],{1975:function(t,e,n){"use strict";n.r(e);var a=n("3bed"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=s.a},3049:function(t,e,n){},3378:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"3bed":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("3b7d"),s=n("5746"),i=n("aa5f"),o={data:function(){return{ishighLight:!1,companyName:"",userName:"",userPhone:"",companyAuth:"",personAuth:"",searchPersonResultList:[],searchCompanyResultList:[],timer:null}},props:{},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{getPersonContactList:function(t){var e=this;this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){(0,a.get)({url:s.get_signal_sign_person_list+"?contactType=1&name="+t,success:function(t){e.setData({searchPersonResultList:t})},fail:function(t){console.log(t)}})}),500)})},getCompanyContactList:function(t){var e=this;this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){(0,a.get)({url:s.get_signal_sign_person_list+"?contactType=2&name="+t,success:function(t){e.setData({searchCompanyResultList:t})},fail:function(t){console.log(t)}})}),500)})},handleSelectPersonDataFun:function(t){var e=this,n=t.target.dataset.name,a=t.target.dataset.phone;setTimeout((function(){e.setData({userName:n,userPhone:a,searchPersonResultList:[]})}),200),setTimeout((function(){e.setData({ishighLight:e.setCanNextFun()})}),300)},handleSelectCompanyDataFun:function(t){var e=this,n=t.target.dataset.name;setTimeout((function(){e.setData({companyName:n,searchCompanyResultList:[]})}),200),setTimeout((function(){e.setData({ishighLight:e.setCanNextFun()})}),300)},handleBlurFun:function(){var t=this;setTimeout((function(){t.setData({searchPersonResultList:[],searchCompanyResultList:[]})}),200)},setCanNextFun:function(){var t=!1;return""!=this.companyName&&""!=this.userPhone&&""!=this.userName&&(t=!0),t},back:function(){t.navigateBack({})},hasRepeatCompany:function(){var e=t.getStorageSync("linkMans"),n=!0;if(e.length>0)for(var a=0;a<e.length;a++){var s=e[a];s.companyName&&this.companyName==s.companyName&&s.userName==this.userName&&s.userPhone==this.userPhone&&(n=!1)}return n},next:function(){var e=this,n=this;if(!this.hasRepeatCompany())return setTimeout((function(){t.showToast({title:"你已添加该签署方信息",icon:"none"})}),50),!1;if(!/^1[345789]\d{9}$/.test(this.userPhone))return setTimeout((function(){t.showToast({title:"请输入正确的账号",icon:"none"})}),50),!1;var s=new Promise((function(t,e){(0,a.get)({url:i.company_message,params:{companyName:n.companyName},success:function(e){t(e)}})})),o=new Promise((function(t,e){(0,a.get)({url:i.person_message,params:{name:n.userName,phone:n.userPhone},success:function(e){t(e)}})}));Promise.all([s,o]).then((function(n){var a=!1,s=!1,i=[],o="";"1"==n[1]&&(a=!0),"1"==n[0]&&(s=!0),1==e.checked1&&(i.push(2),o+="企业章，"),1==e.checked2&&(i.push(3),o+="法人代表章");var u={companyName:e.companyName,userName:e.userName,userPhone:e.userPhone,processType:4,sealName:o,sealType:i.join(),status:1,relationType:"2",isCompanyAuth:s,isPersonAuth:a},r=t.getStorageSync("linkMans")||[];r.push(u),t.setStorageSync("linkMans",r),t.redirectTo({url:"/pages/contract/sign/next/next"})}))},bindKeyInput:function(t){"companyName"==t.target.dataset.field&&(this.setData({companyName:t.detail.value}),t.detail.value?this.getCompanyContactList(t.detail.value):this.setData({searchCompanyResultList:[]})),"userName"==t.target.dataset.field&&(this.setData({userName:t.detail.value}),t.detail.value?this.getPersonContactList(t.detail.value):this.setData({searchPersonResultList:[]})),"userPhone"==t.target.dataset.field&&this.setData({userPhone:t.detail.value.replace(/[^\d.]/g,"")}),this.setData({ishighLight:this.setCanNextFun()})}}};e.default=o}).call(this,n("543d")["default"])},"56fb":function(t,e,n){"use strict";n.r(e);var a=n("3378"),s=n("1975");for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);n("bb98");var o,u=n("f0c5"),r=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=r.exports},9269:function(t,e,n){"use strict";(function(t){n("e09c");a(n("66fd"));var e=a(n("56fb"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},bb98:function(t,e,n){"use strict";var a=n("3049"),s=n.n(a);s.a}},[["9269","common/runtime","common/vendor"]]]);