(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/contract/sign/next/personSign/personSign"],{"185a":function(e,t,n){"use strict";n.r(t);var s=n("57e9"),a=n("b0bb");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("c84e");var u,o=n("f0c5"),c=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],u);t["default"]=c.exports},"436f":function(e,t,n){},"57e9":function(e,t,n){"use strict";var s;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},b0bb:function(e,t,n){"use strict";n.r(t);var s=n("ed9b"),a=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,(function(){return s[e]}))}(i);t["default"]=a.a},be77:function(e,t,n){"use strict";(function(e){n("e09c");s(n("66fd"));var t=s(n("185a"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("c11b")["createPage"])},c84e:function(e,t,n){"use strict";var s=n("436f"),a=n.n(s);a.a},ed9b:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("3b7d"),a=n("5746"),i=n("aa5f"),u={data:function(){return{ishighLight:!1,checked1:!0,checked2:!0,chapter:[],userName:"",userPhone:"",searchResultList:[],timer:null}},props:{},onLoad:function(e){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{checkedTap1:function(){var e=this.checked1;this.setData({checked1:!e})},checkedTap2:function(){var e=this.checked2;this.setData({checked2:!e})},back:function(){e.navigateBack({})},hasRepeatPserson:function(){var t=e.getStorageSync("signMans"),n=!0;if(t.length>0)for(var s=0;s<t.length;s++){var a=t[s];this.userName!=a.userName||a.userPhone!=this.userPhone||a.companyName||(n=!1)}return n},next:function(){var t=this;if(!this.hasRepeatPserson())return setTimeout((function(){e.showToast({title:"你已添加该签署方信息",icon:"none"})}),50),!1;if(!/^1[345789]\d{9}$/.test(this.userPhone))return setTimeout((function(){e.showToast({title:"请输入正确的账号",icon:"none"})}),50),!1;var n=this,a=new Promise((function(e,t){(0,s.get)({url:i.person_message,params:{name:n.userName,phone:n.userPhone},success:function(t){e(t)}})}));Promise.all([a]).then((function(n){var s=!1,a=[],i="";"1"==n[0]&&(s=!0),1==t.checked1&&(a.push(1),i+="手绘章，"),1==t.checked2&&(a.push(4),i+="个人模版章");var u={userName:t.userName,userPhone:t.userPhone,processType:2,sealName:i,sealType:a.join(),relationType:1,status:1,isPersonAuth:s},o=e.getStorageSync("signMans");o.push(u),e.setStorageSync("signMans",o),e.redirectTo({url:"/pages/contract/sign/next/next"})}))},bindKeyInput:function(e){"userName"==e.target.dataset.field?(this.setData({userName:e.detail.value}),e.detail.value?this.getContactList(e.detail.value):this.setData({searchResultList:[]})):this.setData({userPhone:e.detail.value.replace(/[^\d.]/g,"")}),this.setData({ishighLight:this.setCanNextFun()})},getContactList:function(e){var t=this;this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){(0,s.get)({url:a.get_signal_sign_person_list+"?contactType=1&name="+e,success:function(e){t.setData({searchResultList:e})},fail:function(e){console.log(e)}})}),500)})},handleSelectDataFun:function(e){var t=this,n=e.target.dataset.name,s=e.target.dataset.phone;setTimeout((function(){t.setData({userName:n,userPhone:s,searchResultList:[]})}),200),setTimeout((function(){t.setData({ishighLight:t.setCanNextFun()})}),300)},handleBlurFun:function(){var e=this;setTimeout((function(){e.setData({searchResultList:[]})}),200)},setCanNextFun:function(){var e=!1;return""!=this.userPhone&&""!=this.userName&&(e=!0),e}}};t.default=u}).call(this,n("c11b")["default"])}},[["be77","common/runtime","common/vendor"]]]);