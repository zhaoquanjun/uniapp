(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-costManage-receiveCard-receiveCard"],{4777:function(t,e,n){"use strict";n.r(e);var i=n("c772"),o=n("589c");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c664");var s,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"5f6382ea",null,!1,i["a"],s);e["default"]=u.exports},"537e":function(t,e,n){function i(t){return t=t.toString(),t[1]?t:"0"+t}function o(t,e){var n=new Date(t);return a(n,e)}function a(t,e){var n=["Y","M","D","h","m","s"],o=[];for(var a in o.push(t.getFullYear()),o.push(i(t.getMonth()+1)),o.push(i(t.getDate())),o.push(i(t.getHours())),o.push(i(t.getMinutes())),o.push(i(t.getSeconds())),o)e=e.replace(n[a],o[a]);return e}function s(t){var e=/^[1][3,4,5,7,8][0-9]{9}$/;return e.test(t)}function r(t){var e="出错了";"string"===typeof t?e=t:t.errMsg&&(e=t.errMsg),setTimeout((function(){uni.showToast({duration:2e3,icon:"none",title:e})}),50)}function u(t){setTimeout((function(){uni.showToast({title:t})}),50)}function c(t){var e=["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"];return t.replace(new RegExp(e.join("|"),"g"),"")}function d(t){return l(t,"分","秒")}function l(t,e,n){if(t=t%6e4/1e3,t>-1){var i=Math.floor(t/60),o=Math.floor(t%60);return i<=0?o+n:i+e+o+n}return 0+n}function f(){var t=getCurrentPages(),e=(t[t.length-1],t[t.length-2]);return e}function g(t){return t.replace(/(^\s*)|(\s*$)/g,"")}n("a15b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("498a"),t.exports.formatTimeSecond=d,t.exports.formatTimeSecondWithSign=l,t.exports.formatTime=o,t.exports.formatDate=a,t.exports.isTelCode=s,t.exports.showError=r,t.exports.showSuccess=u,t.exports.filterEmoji=c,t.exports.getPreviousPage=f,t.exports.trim=g},"589c":function(t,e,n){"use strict";n.r(e);var i=n("9ba6"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"730f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.send_card_directive=e.send_by_buy=e.get_company_auth_status=e.get_personal_auth_status=e.cancel_hare_card=e.share_card=e.get_wx_pay_params=e.buy_card_by_account=e.get_card_list=e.get_balance_list=e.get_accout_info=e.get_gift_card_status=e.get_gift_card_from_wx=void 0;var i=n("3b7d"),o=i.host+"/v1/expense/receiveShareGiftCard/";e.get_gift_card_from_wx=o;var a=i.host+"/v1/expense/transferGiftCardTimeout/";e.get_gift_card_status=a;var s=i.host+"/v1/account/getCurrentUserOrCompanyInfo";e.get_accout_info=s;var r=i.host+"/v1/expense/consumptionDetailsList";e.get_balance_list=r;var u=i.host+"/v1/expense/couponList";e.get_card_list=u;var c=i.host+"/v1/pay/account/pay";e.buy_card_by_account=c;var d=i.host+"/v1/pay/create/order";e.get_wx_pay_params=d;var l=i.host+"/v1/expense/shareGiftCard";e.share_card=l;var f=i.host+"/v1/expense/cancelShareGiftCard/";e.cancel_hare_card=f;var g=i.host+"/v1/account/user/getAuthUserInfoByNameAndPhone";e.get_personal_auth_status=g;var p=i.host+"/v1/account/company/getOneAuthCompanyByName";e.get_company_auth_status=p;var h=i.host+"/v1/expense/batchTransfer";e.send_by_buy=h;var v=i.host+"/v1/expense/transfer";e.send_card_directive=v},"772e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\nuni-view[data-v-5f6382ea]{box-sizing:border-box}.receive-card--page[data-v-5f6382ea]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#201d21;overflow:hidden}.receive-card--page .page-bg[data-v-5f6382ea]{position:absolute;top:0;left:0;width:100%;height:100%}.receive-card--page .content[data-v-5f6382ea]{position:absolute;top:%?376?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);padding:%?72?% %?48?%;width:85%;background-color:#fff;border-radius:%?24?%}.content .label[data-v-5f6382ea]{padding-bottom:%?24?%;font-size:%?28?%;line-height:%?28?%;color:#333;font-family:PingFangSC-Regular\\,PingFang SC}.content uni-input[data-v-5f6382ea]{padding:%?4?% 0 %?8?%;font-size:%?32?%;line-height:%?32?%;color:#333;font-family:PingFangSC-Regular\\,PingFang SC;border-bottom:%?2?% solid #d4d4d4}.yzm-input[data-v-5f6382ea]{margin-right:%?20?%}.content .input[data-v-5f6382ea]::-webkit-input-placeholder{font-size:%?28?%;color:#bfbfbf}.content .input[data-v-5f6382ea]::placeholder{font-size:%?28?%;color:#bfbfbf}.input-block[data-v-5f6382ea]{margin-bottom:%?52?%;border:none;width:100%}.input-area[data-v-5f6382ea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?18?%}.input-area .get-code[data-v-5f6382ea]{width:%?232?%;height:%?72?%;line-height:%?72?%;text-align:center;border:1px solid hsla(0,0%,59.2%,.2);border-radius:%?36?%;font-family:PingFangSC-Regular\\,PingFang SC;font-size:%?26?%;color:#666}.get-card-btn[data-v-5f6382ea]{margin-top:%?32?%;width:100%;height:%?100?%;line-height:%?100?%;text-align:center;background-color:rgba(52,50,51,.1);border-radius:%?50?%;font-size:%?30?%;color:#201d21;font-family:PingFangSC-Regular\\,PingFang SC}.divider[data-v-5f6382ea]{padding-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.divider .line[data-v-5f6382ea]{width:%?160?%;height:%?2?%;background-color:#d4d4d4}.divider .tips[data-v-5f6382ea]{font-size:%?24?%;line-height:%?34?%;color:#c1c5ca;font-family:PingFangSC-Regular\\,PingFang SC}.wx-login-btn[data-v-5f6382ea]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?40?%;width:100%;height:%?100?%;background:-webkit-linear-gradient(295deg,#646162,#636062 0,#201e1f);background:linear-gradient(155deg,#646162,#636062 0,#201e1f);border-radius:%?50?%}.wx-login-btn uni-image[data-v-5f6382ea]{margin-right:%?20?%;width:%?54?%;height:%?54?%}.wx-login[data-v-5f6382ea]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;z-index:1}.wx-login-btn .btn-words[data-v-5f6382ea]{font-family:PingFangSC-Medium\\,PingFang SC;font-size:%?30?%;line-height:%?42?%;color:#ffdeae;font-weight:500}body.?%PAGE?%[data-v-5f6382ea]{background-color:#201d21}",""]),t.exports=e},"9ba6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("3b7d"),o=n("730f"),a=n("aa5f"),s=n("537e"),r=getApp(),u={data:function(){return{tel:"",yzm:"",cardId:"",btnWords:"获取验证码",time:60,timer:null,bg:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/receive_card_bg.png",wx_icon:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/wx_logo.png",wxCode:"",openId:"",unionId:"",loginPhone:"",isShowMark:!1,originType:null,isBindOpenId:!0,bandPhone:""}},components:{},props:{},onLoad:function(t){t.gifCardId&&this.setData({cardId:t.gifCardId}),uni.getStorageSync("userToken")&&this.getGiftCardStatusFun(this.getGiftCardFun)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{handleGetCodeFun:function(){var t=this;return console.log(this.tel),s.isTelCode(this.tel)?this.timer?(setTimeout((function(){uni.showToast({icon:"none",title:"验证码已发送，请耐心等待"})}),50),!1):(uni.showLoading({title:"获取中"}),void(0,i.get)({url:a.get_register_sms_code_url+"/"+this.tel,success:function(){setTimeout((function(){uni.showToast({icon:"none",title:"发送成功,请注意查收"})}),50),t.setData({timer:setInterval((function(){if(t.time>=1){var e=t.time-1;t.setData({time:e,btnWords:e+"s后再次获取"})}else clearInterval(t.timer),t.setData({time:60,timer:null,btnWords:"获取验证码"})}),1e3)})},fail:function(t){setTimeout((function(){uni.showToast({title:t,icon:"none"})}),50)},complete:function(){uni.hideLoading()}})):(setTimeout((function(){uni.showToast({icon:"none",title:"请输入正确手机号"})}),50),!1)},handlePcLoginFun:function(){var t=this;uni.showLoading({title:"登录领取中"});var e={phone:this.tel,phoneCode:this.yzm};(0,i.post)({url:a.pc_login,params:e,success:function(e){console.log(e),uni.setStorageSync("userToken",e.token),r.globalData.userToken=e.token,t.getGiftCardStatusFun(t.getGiftCardFun)},fail:function(){setTimeout((function(){uni.showToast({title:"领取失败",icon:"none"})}),100)}})},loginWxFun:function(t){var e=this;uni.login({success:function(n){n.code?(e.setData({wxCode:n.code}),"function"==typeof t&&t()):setTimeout((function(){uni.showToast({icon:"none",title:"请先授权微信登陆"})}),50)},fail:function(){setTimeout((function(){uni.showToast({icon:"none",title:"请先授权微信登陆"})}),50)}})},handleLoginByPhoneFun:function(){var t=this;this.loginWxFun((function(){t.getUserRegisterInfoFun()}))},getUserRegisterInfoFun:function(){var t=this;(0,i.get)({url:a.get_phone_wx_code+"/"+this.wxCode+"?wxAppType=2",success:function(e){e.isRegister?(t.setData({bandPhone:e.phone,openId:e.openId,unionId:e.unionId,isBindOpenId:!0}),uni.navigateTo({url:"/pages/account/loginVerify/loginVerify?phone="+t.bandPhone+"&unionId="+t.unionId+"&openId="+t.openId+"&originType="+t.originType})):(setTimeout((function(){uni.showToast({icon:"none",title:"信息获取失败，请授权登录",duration:3e3})}),50),t.setData({isBindOpenId:!1}))},fail:function(e){setTimeout((function(){uni.showToast({icon:"none",title:"登陆信息获取失败："+e})}),50),t.setData({isBindOpenId:!1})}})},getPhoneNumber:function(t){var e=this;"getPhoneNumber:ok"==t.detail.errMsg?this.loginWxFun((function(){e.getPhoneFun(t)})):setTimeout((function(){uni.showToast({icon:"none",title:"快捷登陆失败"})}),50)},getPhoneFun:function(t){var e=this;(0,i.post)({url:a.decode_phone,params:{encrypted:t.detail.encryptedData,iv:t.detail.iv,code:this.wxCode,wxAppType:2},success:function(t){e.setData({bandPhone:t.phone,loginPhone:t.phone,openId:t.openId,unionId:t.unionId,isShowMark:!0,isBindOpenId:!0}),uni.navigateTo({url:"/pages/account/loginVerify/loginVerify?phone="+t.phone+"&unionId="+t.unionId+"&openId="+t.openId+"&isCard=true&cardId="+e.cardId})},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)}})},handleInputTelFun:function(t){return this.setData({tel:t.detail.value}),t.detail.value},handleInputYzmFun:function(t){return this.setData({yzm:t.detail.value}),t.detail.value},getGiftCardFun:function(){uni.showLoading({title:"领取中"}),(0,i.get)({url:o.get_gift_card_from_wx+this.cardId,success:function(t){setTimeout((function(){uni.showToast({icon:"none",title:"礼品卡领取成功"})}),50),setTimeout((function(){uni.redirectTo({url:"/pages/costManage/accountCard/accountCard?type=1"})}),2500)},fail:function(t){console.log(t),setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)},complete:function(){uni.hideLoading()}})},getGiftCardStatusFun:function(t){(0,i.get)({url:o.get_gift_card_status+this.cardId,success:function(e){console.log(e),e?"function"==typeof t&&t():(setTimeout((function(){uni.showToast({icon:"none",title:"礼品卡已被领取"})}),50),setTimeout((function(){uni.switchTab({url:"/pages/home/home"})}),1500))},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50),setTimeout((function(){uni.switchTab({url:"/pages/home/home"})}),1500)}})}}};e.default=u},a992:function(t,e,n){var i=n("772e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("bbb70416",i,!0,{sourceMap:!1,shadowMode:!1})},c664:function(t,e,n){"use strict";var i=n("a992"),o=n.n(i);o.a},c772:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"receive-card--page"},[n("v-uni-image",{staticClass:"page-bg",attrs:{src:t.bg,mode:"widthFix"}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"label"},[t._v("手机号")]),n("v-uni-input",{staticClass:"input-block",attrs:{placeholder:"请输入手机号",maxlength:"11",type:"number"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInputTelFun.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"label"},[t._v("验证码")]),n("v-uni-view",{staticClass:"input-area"},[n("v-uni-input",{staticClass:"yzm-input",attrs:{placeholder:"请输入验证码",maxlength:"6",type:"number"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInputYzmFun.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"get-code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetCodeFun.apply(void 0,arguments)}}},[t._v(t._s(t.btnWords))])],1),n("v-uni-view",{staticClass:"get-card-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlePcLoginFun.apply(void 0,arguments)}}},[t._v("手机号登录领取")]),n("v-uni-view",{staticClass:"divider"},[n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"tips"},[t._v("其他方式登录")]),n("v-uni-view",{staticClass:"line"})],1),n("v-uni-view",{staticClass:"wx-login-btn"},[n("v-uni-button",{staticClass:"wx-login",attrs:{"open-type":"getPhoneNumber"},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getPhoneNumber.apply(void 0,arguments)}}},[t._v("微信登录")]),n("v-uni-image",{staticClass:"wx-logo",attrs:{src:t.wx_icon,mode:"aspectFit"}}),n("v-uni-view",{staticClass:"btn-words"},[t._v("微信授权登录")])],1)],1)],1)},a=[]}}]);