;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/half-screen-dialog/half-screen-dialog"],{"03fa":function(e,t,n){"use strict";n.r(t);var a=n("8a50"),i=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a},"5f0c":function(e,t,n){},8166:function(e,t,n){"use strict";n.r(t);var a=n("992e"),i=n("03fa");for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("a6d2");var o,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=s.exports},"8a50":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{wrapperShow:!1,contentShow:!1,menuList:[{type:"image",imgUrl:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/image.png",id:"1",name:"图片存证"},{type:"file",imgUrl:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/file.png",id:"5",name:"文件存证"},{type:"voice",imgUrl:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/voice.png",id:"3",name:"语音存证"},{type:"video",imgUrl:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/video.png",id:"4",name:"视频存证"}]}},components:{},props:{},methods:{close:function(){var e=this;this.setData({contentShow:!1}),setTimeout((function(){e.setData({wrapperShow:!1})}),250)},open:function(){var e=this;this.setData({wrapperShow:!0}),setTimeout((function(){e.setData({contentShow:!0})}),250)},openMenu:function(t){var n=getApp();if(!n.globalData.isLoginIn())return e.switchTab({url:"/pages/pm/pmHome"}),!1;var a=t.currentTarget.dataset.type,i=e.getStorageSync("currentUser"),c=!1;return(i.companyId&&1==i.authStatus||!i.companyId&&1==i.auth)&&(c=!0),!c&&i.companyId?(e.showModal({title:"立即进行企业实名认证",content:"实名认证后可享受加便捷高效的电子合同服务",showCancel:!0,cancelText:"暂不认证",confirmText:"立即认证",success:function(t){if(t.cancel){var n=getCurrentPages();n.length>1&&e.navigateBack(),e.hideLoading({})}else e.navigateTo({url:"/pages/authentication/company/company-auth-type/index"})}}),!1):c||i.companyId?void("video"==a?e.navigateTo({url:"/pages/evidence/videoRecord/videoRecord?type="+a}):e.navigateTo({url:"/pages/evidence/addCertificate/addCertificate?type="+a})):(e.showModal({title:"立即进行个人实名认证",content:"实名认证后可享受加便捷高效的电子合同服务",showCancel:!0,cancelText:"暂不认证",confirmText:"立即认证",success:function(t){if(t.cancel){var n=getCurrentPages();n.length>1&&e.navigateBack(),e.hideLoading({})}else e.navigateTo({url:"/pages/authentication/person/person-auth-type/index"})}}),!1)}}};t.default=n}).call(this,n("c11b")["default"])},"992e":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement;e._self._c},c=[]},a6d2:function(e,t,n){"use strict";var a=n("5f0c"),i=n.n(a);i.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/half-screen-dialog/half-screen-dialog-create-component',
    {
        'components/half-screen-dialog/half-screen-dialog-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("8166"))
        })
    },
    [['components/half-screen-dialog/half-screen-dialog-create-component']]
]);
