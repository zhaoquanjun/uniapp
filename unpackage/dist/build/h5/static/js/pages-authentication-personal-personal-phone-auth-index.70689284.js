(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-authentication-personal-personal-phone-auth-index"],{"0b6f":function(e,t,i){var n=i("1ef3");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("06b95500",n,!0,{sourceMap:!1,shadowMode:!1})},"0cfba":function(e,t,i){"use strict";i.r(t);var n=i("aa85"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"0e39":function(e,t,i){"use strict";var n=i("0b6f"),a=i.n(n);a.a},"1ef3":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".modal-area[data-v-1b15876c]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:99}.modal-wrapper[data-v-1b15876c]{position:absolute;top:45%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#f5f5f5;min-width:%?580?%;border-radius:%?20?%}.modal-wrapper .header[data-v-1b15876c]{width:100%;height:%?100?%;line-height:%?100?%;text-align:center;font-size:%?32?%;color:#333;font-weight:500;border-top-left-radius:%?20?%;border-top-right-radius:%?20?%;background-color:#fff}.modal-wrapper .content[data-v-1b15876c]{margin-top:%?4?%;padding:%?24?% %?48?%;background-color:#fff}.modal-wrapper .content .inner[data-v-1b15876c]{max-height:%?400?%}.modal-wrapper .content .inner .item[data-v-1b15876c]{padding-bottom:%?8?%;line-height:%?48?%;color:#666}.modal-wrapper .footer[data-v-1b15876c]{margin-top:%?4?%;width:100%;height:%?100?%;line-height:%?100?%;text-align:center;font-size:%?32?%;font-weight:500;border-bottom-left-radius:%?20?%;border-bottom-right-radius:%?20?%;background-color:#fff}",""]),e.exports=t},2170:function(e,t,i){"use strict";var n=i("9771"),a=i.n(n);a.a},"462b":function(e,t,i){"use strict";i.r(t);var n=i("92e2"),a=i("f0e7");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("0e39");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"1b15876c",null,!1,n["a"],s);t["default"]=r.exports},5999:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},components:{},props:{content:{type:Array,default:[]},title:{type:String,default:""},isShow:{type:Boolean,default:!1}},methods:{handleCloseFun:function(){this.$emit("triggerEvent")}}};t.default=n},"7b53":function(e,t,i){"use strict";i.r(t);var n=i("95f6"),a=i("0cfba");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("2170");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"4b74e15e",null,!1,n["a"],s);t["default"]=r.exports},"92e2":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isShow?i("v-uni-view",{staticClass:"modal-area"},[i("v-uni-view",{staticClass:"modal-wrapper"},[i("v-uni-view",{staticClass:"header"},[e._v(e._s(e.title))]),i("v-uni-view",{staticClass:"content"},[i("v-uni-scroll-view",{staticClass:"inner",attrs:{"scroll-y":"true"}},e._l(e.content,(function(t,n){return i("v-uni-view",{key:n,staticClass:"item"},[e._v(e._s(t))])})),1)],1),i("v-uni-view",{staticClass:"footer",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleCloseFun.apply(void 0,arguments)}}},[e._v("知道了")])],1)],1):e._e()},o=[]},"95f6":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={modal:i("462b").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"personal-info"},[i("v-uni-view",{staticClass:"type-select-header"},[i("v-uni-view",{staticClass:"type-text"},[e._v("个人信息")]),i("v-uni-view",{staticClass:"right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showSafeInfo.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"safe-tip",attrs:{src:"/static/images/authen/safe.png"}}),e._v("安全声明")],1)],1),i("v-uni-view",{staticClass:"base-info-container"},[i("v-uni-view",{staticClass:"field-item"},[i("v-uni-label",{staticClass:"name"},[e._v("姓名")]),i("v-uni-input",{staticClass:"value-input",attrs:{placeholder:"请输入姓名",value:e.name,"data-field":"name"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.bindKeyInput.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"field-item"},[i("v-uni-label",{staticClass:"name"},[e._v("证件类型")]),i("v-uni-label",{staticClass:"value-select"},[e._v("居民身份证"),i("v-uni-text",{staticClass:"one one-arrow-down"})],1)],1),i("v-uni-view",{staticClass:"field-item"},[i("v-uni-label",{staticClass:"name"},[e._v("证件号")]),i("v-uni-input",{staticClass:"value-input",attrs:{placeholder:"请输入证件号",value:e.idCard,"data-field":"idCard"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.bindKeyInput.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"field-item-division"}),i("v-uni-view",{staticClass:"base-info-container"},[i("v-uni-view",{staticClass:"field-item"},[i("v-uni-label",{staticClass:"name"},[e._v("手机号")]),i("v-uni-input",{staticClass:"value-input",attrs:{placeholder:"请输入手机号",value:e.phone,"data-field":"phone"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.bindKeyInput.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"field-item"},[i("v-uni-label",{staticClass:"name"},[e._v("验证码")]),i("v-uni-input",{staticClass:"value-input",attrs:{placeholder:"请输入验证码","data-field":"phoneCode"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.bindKeyInput.apply(void 0,arguments)}}}),i("v-uni-label",{staticClass:"code-line"}),i("v-uni-label",{staticClass:"get-code",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getPhoneCode.apply(void 0,arguments)}}},[e._v(e._s(e.smsButtonText))])],1)],1),i("v-uni-view",{staticClass:"base-info-reminder"},[i("v-uni-label",{staticClass:"radio",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.checkedTap.apply(void 0,arguments)}}},[i("v-uni-radio",{attrs:{value:"r1",checked:e.checked}})],1),i("v-uni-view",{staticStyle:{color:"#999999","margin-top":"4rpx"}},[e._v("我已阅读并同意")]),i("v-uni-view",{staticStyle:{color:"#6E87B8","margin-top":"4rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleShowSecretFun.apply(void 0,arguments)}}},[e._v("《隐私保护协议》")])],1),i("v-uni-view",{staticClass:"bottom-btn-container"},[i("v-uni-text",{staticClass:"back",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[e._v("返回")]),i("v-uni-text",{staticClass:"next",style:"background:"+(e.ishighLight?"#464646":"#B7B7B7"),on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.next.apply(void 0,arguments)}}},[e._v("下一步")])],1),i("modal",{attrs:{content:e.warnTips,title:e.warnTitle,isShow:e.isShow},on:{triggerEvent:function(t){arguments[0]=t=e.$handleEvent(t),e.handleEmitFun.apply(void 0,arguments)}}})],1)},o=[]},9771:function(e,t,i){var n=i("9e5d");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("888fe4d6",n,!0,{sourceMap:!1,shadowMode:!1})},"9e5d":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"\n.personal-info[data-v-4b74e15e]{font-size:%?32?%}.personal-info .type-select-header[data-v-4b74e15e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?36?%;font-weight:500;color:#333;padding:%?26?% %?48?% %?28?% %?48?%}.personal-info .type-select-header .right[data-v-4b74e15e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;font-size:%?26?%;font-weight:400;color:#30b456;margin-top:%?12?%}.personal-info .type-select-header .right .safe-tip[data-v-4b74e15e]{width:%?26?%;height:%?26?%;margin-right:%?8?%;margin-top:%?8?%}.personal-info .type-select-header .type-text[data-v-4b74e15e]{height:%?40?%;line-height:%?40?%;font-size:%?32?%;font-weight:500;color:#333;margin-top:%?12?%;padding-left:%?20?%;border-left:%?8?% solid #ee7005}.personal-info .base-info-container[data-v-4b74e15e]{padding:0 %?48?%;background:#fff}.personal-info .base-info-container .field-item[data-v-4b74e15e]{background:#fff;height:%?126?%;line-height:%?126?%;display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:%?2?% solid #f5f5f5}.field-item-division[data-v-4b74e15e]{width:100%;height:%?20?%;background-color:#f7f8f9}.personal-info .base-info-container .field-item .name[data-v-4b74e15e]{font-size:%?32?%;font-weight:500;color:#333;line-height:%?126?%;display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1}.personal-info .base-info-container .field-item .get-code[data-v-4b74e15e]{font-size:%?28?%;font-weight:400;color:#6e87b8;text-align:right}.personal-info .base-info-container .field-item .code-line[data-v-4b74e15e]{border-left:%?2?% solid #d8d8d8;height:%?32?%;width:%?1?%;position:relative;top:%?46?%;margin:0 %?10?% 0 %?30?%}.personal-info .base-info-container .field-item .value-input[data-v-4b74e15e],.value-select[data-v-4b74e15e]{font-size:%?28?%;font-weight:400;color:#333;line-height:%?126?%;text-align:right;height:%?126?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.base-info-reminder[data-v-4b74e15e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;margin-top:%?32?%;margin-left:%?48?%;font-size:%?26?%}.bottom-btn-container[data-v-4b74e15e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;margin-top:%?40?%;position:fixed;bottom:%?40?%}.bottom-btn-container .back[data-v-4b74e15e]{width:%?160?%;height:%?100?%;font-size:%?32?%;font-weight:400;color:#666;display:inline-block;text-align:center;line-height:%?100?%;margin-left:%?32?%}.bottom-btn-container .next[data-v-4b74e15e]{width:%?478?%;text-align:center;display:inline-block;height:%?100?%;line-height:%?100?%;background:#b7b7b7;border-radius:%?8?%;color:#fff;margin-left:%?40?%}  \n/*  重写 radio 样式  */  \n/* 未选中的 背景样式 */uni-radio .wx-radio-input[data-v-4b74e15e]{border-radius:0;width:%?28?%;height:%?28?%;border:%?2?% solid #ccc;background:#f7f8f9}  \n/* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */uni-radio .wx-radio-input.wx-radio-input-checked[data-v-4b74e15e]{border:%?2?% solid #ee7005;background:#ee7005}  \n/* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */uni-radio .wx-radio-input.wx-radio-input-checked[data-v-4b74e15e]::before{width:%?28?%; /* 选中后对勾大小，不要超过背景的尺寸 */height:%?28?%; /* 选中后对勾大小，不要超过背景的尺寸 */line-height:%?24?%;text-align:center;font-size:%?20?%; /* 对勾大小 30rpx */color:#fff; /* 对勾颜色*/transform:translate(-50%,-50%) scale(1);-webkit-transform:translate(-50%,-50%) scale(1)}body.?%PAGE?%[data-v-4b74e15e]{background:#f7f8f9}",""]),e.exports=t},aa85:function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("a15b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("ade3")),o=i("3b7d"),s=i("e9ef"),l=i("aa5f"),r=n(i("462b")),c={data:function(){return{ishighLight:!1,smsButtonText:"获取验证码",name:"",idCard:"",userId:"",phone:"",phoneCode:"",checked:!1,warnTips:["1、在您使用闪签账号签发文件前，您需要进行实名认证，实名认证需要提供您的真实姓名、身份证号码、手机号码；收集此类信息是纯属满足相关法律法规的实名制要求，若您不提供这类信息，您将无法完成实名认证，亦无法以实名身份签发文件。","2、实名认证通过后会由权威CA机构为您颁发数字证书，我们会保留您的数字证书信息，此信息包含您的姓名、身份证件信息，以及为您申请的数字证书序列号，以便供您在签发文件时调用。若您不授权我们保存此信息，您将无法正常使用我们的签发服务。"],warnTitle:"隐私保护协议",isShow:!1,field:"",codeTime:""}},components:{modal:r.default},props:{},onLoad:function(e){},onShareAppMessage:function(){},methods:{handleShowSecretFun:function(){this.setData({isShow:!0})},handleEmitFun:function(){this.setData({isShow:!1})},showSafeInfo:function(){uni.showModal({title:"个人身份隐私安全声明",showCancel:!1,confirmText:"知道了",content:"您输入的身份信息仅用于个人实名认证和获取CA认证证书"})},checkedTap:function(){var e=this.checked;this.setData({checked:!e});var t=this.name,i=this.idCard,n=this.checked,a=this.phone,o=this.phoneCode;void 0==t||""==t||void 0==i||""==i||null==n||""==a||void 0==a||""==o||void 0==o?this.setData({ishighLight:!1}):this.setData({ishighLight:!0})},bindKeyInput:function(e){var t=this.name,i=this.idCard,n=this.checked,o=this.phone,s=this.phoneCode,l=e.target.dataset.field,r=e.detail.value;this.setData((0,a.default)({},l,r)),void 0==t||""==t||void 0==i||""==i||null==n||""==o||void 0==o||""==s||void 0==s?this.setData({ishighLight:!1}):this.setData({ishighLight:!0})},changeCodeText:function(){var e=this,t=60,i=setInterval((function(){t-=1,t>0?e.setData({smsButtonText:"重新获取 ".concat(t,"s"),codeTime:t}):(clearInterval(i),e.setData({smsButtonText:"重新获取",codeTime:t}))}),1e3)},getPhoneCode:function(){var e=this.phone,t=this.codeTime,i=this;if(!t){if(!e)return setTimeout((function(){uni.showToast({icon:"none",title:"请输入正确的手机号码"})}),50),!1;uni.showLoading({title:"加载中..."}),(0,o.get)({url:s.smsSend+e,success:function(){uni.hideLoading(),setTimeout((function(){uni.showToast({icon:"none",title:"短信验证码发送成功"},50)})),i.changeCodeText()},fail:function(){uni.hideLoading(),setTimeout((function(){uni.showToast({icon:"none",title:"短信验证码发送失败"})}),50)}})}},back:function(){uni.navigateBack()},next:function(){var e=this.name,t=this.idCard,i=this.phone,n=this.phoneCode,a=this.checked,r=[];if(e||r.push("姓名"),t||r.push("证件号"),i||r.push("手机号"),n||r.push("验证码"),r.length)return setTimeout((function(){uni.showToast({icon:"none",title:r.join("、")+"不能为空"})}),50),!1;var c=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;return c.test(t)?0==a?(console.log("name"),setTimeout((function(){uni.showToast({icon:"none",title:"请阅读并同意《隐私保护协议》"})}),50),!1):(uni.showLoading({title:"加载中"}),uni.setStorageSync("personInfo",{name:e,idCard:t,phone:i}),void(0,o.postBody)({url:"".concat(s.authPhone,"?phoneCode=").concat(n),params:{name:e,idCard:t,phone:i},success:function(e){console.log(e),uni.hideLoading(),(0,o.get)({url:l.get_user_info,success:function(e){var t=uni.getStorageSync("currentUser");t.name=e.name,t.auth=1,uni.setStorageSync("currentUser",t)}}),uni.navigateTo({url:"/pages/authentication/personal/auth-result/index?result=s&type=phone"})},fail:function(e){console.log(e),uni.hideLoading(),uni.navigateTo({url:"/pages/authentication/personal/auth-result/index?result=f&type=phone&desc="+e})}})):(setTimeout((function(){uni.showToast({icon:"none",title:"请输入正确的身份证号码"})}),50),!1)}}};t.default=c},e9ef:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.authPhone=t.smsSend=t.applyAuth=t.authFace=t.companyHandle=t.companyAuth=t.businessLicenseUpload=t.createCompany=void 0;var n=i("3b7d"),a=n.host+"/v1/account/create/company";t.createCompany=a;var o=n.host+"/v1/account/apply/auth/businessLicense";t.businessLicenseUpload=o;var s=n.host+"/v1/account/apply/auth/company";t.companyAuth=s;var l=n.host+"/v1/account/apply/auth/company/handle";t.companyHandle=l;var r=n.host+"/v1/account/auth/face";t.authFace=r;var c=n.host+"/v1/account/apply/auth";t.applyAuth=c;var d=n.host+"/v1/sms/";t.smsSend=d;var u=n.host+"/v1/account/auth/phone";t.authPhone=u},f0e7:function(e,t,i){"use strict";i.r(t);var n=i("5999"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a}}]);