(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/contract/sign/next/personSign/personSign"],{"185a":function(e,t,n){"use strict";n.r(t);var a=n("57e9"),s=n("b0bb");for(var i in s)"default"!==i&&function(e){n.d(t,e,(function(){return s[e]}))}(i);n("c84e");var u,o=n("f0c5"),r=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=r.exports},"436f":function(e,t,n){},"57e9":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var s=function(){var e=this,t=e.$createElement;e._self._c},i=[]},b0bb:function(e,t,n){"use strict";n.r(t);var a=n("ed9b"),s=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=s.a},be77:function(e,t,n){"use strict";(function(e){n("e09c");a(n("66fd"));var t=a(n("185a"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},c84e:function(e,t,n){"use strict";var a=n("436f"),s=n.n(a);s.a},ed9b:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("3b7d"),s=n("5746"),i=n("aa5f"),u={data:function(){return{ishighLight:!1,checked1:!0,checked2:!0,chapter:[],userName:"",userPhone:"",searchResultList:[],timer:null}},props:{},onLoad:function(e){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{checkedTap1:function(){var e=this.checked1;this.setData({checked1:!e})},checkedTap2:function(){var e=this.checked2;this.setData({checked2:!e})},back:function(){e.navigateBack({})},hasRepeatPserson:function(){var t=e.getStorageSync("signMans"),n=!0;if(t.length>0)for(var a=0;a<t.length;a++){var s=t[a];this.userName!=s.userName||s.userPhone!=this.userPhone||s.companyName||(n=!1)}return n},next:function(){var t=this;if(!this.hasRepeatPserson())return setTimeout((function(){e.showToast({title:"你已添加该签署方信息",icon:"none"})}),50),!1;if(!/^1[345789]\d{9}$/.test(this.userPhone))return setTimeout((function(){e.showToast({title:"请输入正确的账号",icon:"none"})}),50),!1;var n=this,s=new Promise((function(e,t){(0,a.get)({url:i.person_message,params:{name:n.userName,phone:n.userPhone},success:function(t){e(t)}})}));Promise.all([s]).then((function(n){var a=!1,s=[],i="";"1"==n[0]&&(a=!0),1==t.checked1&&(s.push(1),i+="手绘章，"),1==t.checked2&&(s.push(4),i+="个人模版章");var u={userName:t.userName,userPhone:t.userPhone,processType:2,sealName:i,sealType:s.join(),relationType:1,status:1,isPersonAuth:a},o=e.getStorageSync("signMans");o.push(u),e.setStorageSync("signMans",o),e.redirectTo({url:"/pages/contract/sign/next/next"})}))},bindKeyInput:function(e){"userName"==e.target.dataset.field?(this.setData({userName:e.detail.value}),e.detail.value?this.getContactList(e.detail.value):this.setData({searchResultList:[]})):this.setData({userPhone:e.detail.value.replace(/[^\d.]/g,"")}),this.setData({ishighLight:this.setCanNextFun()})},getContactList:function(e){var t=this;this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){(0,a.get)({url:s.get_signal_sign_person_list+"?contactType=1&name="+e,success:function(e){t.setData({searchResultList:e})},fail:function(e){console.log(e)}})}),500)})},handleSelectDataFun:function(e){var t=this,n=e.target.dataset.name,a=e.target.dataset.phone;setTimeout((function(){t.setData({userName:n,userPhone:a,searchResultList:[]})}),200),setTimeout((function(){t.setData({ishighLight:t.setCanNextFun()})}),300)},handleBlurFun:function(){var e=this;setTimeout((function(){e.setData({searchResultList:[]})}),200)},setCanNextFun:function(){var e=!1;return""!=this.userPhone&&""!=this.userName&&(e=!0),e}}};t.default=u}).call(this,n("543d")["default"])}},[["be77","common/runtime","common/vendor"]]]);