(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-account-loginVerify-loginVerify"],{"348a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"/* pages/account/loginVerify/loginVerify.wxss */",""]),t.exports=e},5145:function(t,e,n){"use strict";var i=n("e455"),o=n.n(i);o.a},5627:function(t,e,n){var i=n("7890");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("13a366fd",i,!0,{sourceMap:!1,shadowMode:!1})},"730f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.buy_package=e.get_package_list=e.get_account_and_card_info=e.send_card_directive=e.send_by_buy=e.get_company_auth_status=e.get_personal_auth_status=e.cancel_hare_card=e.share_card=e.get_wx_pay_params=e.buy_card_by_account=e.get_card_list=e.get_balance_list=e.get_accout_info=e.get_gift_card_status=e.get_gift_card_from_wx=void 0;var i=n("3b7d"),o=i.host+"/v1/expense/receiveShareGiftCard/";e.get_gift_card_from_wx=o;var a=i.host+"/v1/expense/transferGiftCardTimeout/";e.get_gift_card_status=a;var s=i.host+"/v1/account/getCurrentUserOrCompanyInfo";e.get_accout_info=s;var u=i.host+"/v1/expense/consumptionDetailsList";e.get_balance_list=u;var r=i.host+"/v1/expense/couponList";e.get_card_list=r;var c=i.host+"/v1/pay/account/pay";e.buy_card_by_account=c;var f=i.host+"/v1/pay/create/order";e.get_wx_pay_params=f;var d=i.host+"/v1/expense/shareGiftCard";e.share_card=d;var l=i.host+"/v1/expense/cancelShareGiftCard/";e.cancel_hare_card=l;var h=i.host+"/v1/account/user/getAuthUserInfoByNameAndPhone";e.get_personal_auth_status=h;var v=i.host+"/v1/account/company/getOneAuthCompanyByName";e.get_company_auth_status=v;var p=i.host+"/v1/expense/batchTransfer";e.send_by_buy=p;var g=i.host+"/v1/expense/transfer";e.send_card_directive=g;var _=i.host+"/v1/expense/accountBalance";e.get_account_and_card_info=_;var y=i.host+"/v1/contractExpense/listContractSetMeals";e.get_package_list=y;var b=i.host+"/v1/contractExpense/purchaseContractSetMeal";e.buy_package=b},7890:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"/* components/verifycode/verifycode.wxss */.key-input[data-v-244bf8ef]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;z-index:11}.wx-mask[data-v-244bf8ef]{position:fixed;top:0;right:0;left:0;bottom:0;background:#fff}.verify-title[data-v-244bf8ef]{position:fixed;width:%?750?%;height:%?46?%;top:%?48?%;font-size:%?46?%;color:#000;text-align:center}.verify-content[data-v-244bf8ef]{position:fixed;display:block;width:100%;height:%?32?%;top:%?158?%;font-size:%?30?%;color:#b2b2b2;text-align:center;font-weight:200}.verify-code-view[data-v-244bf8ef]{position:fixed;width:%?390?%;height:%?80?%;top:%?254?%;left:%?180?%}.verify-input-view[data-v-244bf8ef]{float:left;width:%?48?%;height:%?80?%;margin-left:%?20?%}.verify-input-view-first[data-v-244bf8ef]{margin-left:%?0?%}.verify-text[data-v-244bf8ef]{float:left;display:block;width:%?48?%;height:%?80?%;line-height:%?80?%;border-bottom:%?2?% #b2b2b2 solid;color:#606060;text-align:center;font-size:%?80?%;font-weight:200}.again-send-class[data-v-244bf8ef]{position:fixed;width:100%;height:%?32?%;top:%?398?%;font-size:%?32?%;font-weight:200;color:#ff9f3d;text-align:center}",""]),t.exports=e},"87c8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("3b7d"),o=n("aa5f"),a=n("730f"),s={data:function(){return{openId:"",unionId:"",originType:null,isCard:!1,cardId:"",mode:""}},components:{},props:{},onLoad:function(e){var n=e.phone;t.log(e),null!=e.originType&&this.setData({originType:e.originType}),e.isCard&&this.setData({isCard:!0}),e.cardId&&this.setData({cardId:e.cardId}),this.setData({openId:e.openId,unionId:e.unionId}),this.verifycode=this.$refs.verifycode,this.sendPhoneCodeFun(n);var i=this;this.verifycode.showView({userPhone:n,inputSuccess:function(t){i.loginFun(n,t),i.verifycode.clearCode()},againSend:function(){i.sendPhoneCodeFun(n)}})},onShareAppMessage:function(){},methods:{loginFun:function(e,n){var a=this;uni.hideLoading(),uni.showLoading({title:"登陆中..."});var s=this;(0,i.post)({url:o.login_url,params:{phone:e,phoneCode:n,openId:s.openId,unionId:s.unionId},success:function(e){t.log(e);var n=getApp();n.globalData.loginSuccess(e.token,e.userId,e.name,e.userType,e.auth,e.phone,e.icon,e.joinCompany,e.userCompanyType),uni.hideLoading();var i=s.originType;t.log(a.isCard),a.isCard?a.getGiftCardStatusFun(a.getGiftCardFun):"auth"==i?uni.navigateBack({delta:3}):uni.reLaunch({url:"/pages/home/home"})},fail:function(t){uni.hideLoading(),setTimeout((function(){uni.showToast({title:t,icon:"none",duration:2e3})}),50)}})},sendPhoneCodeFun:function(t){var e=this;uni.showLoading({title:"验证码发送中"}),(0,i.get)({url:o.get_register_sms_code_url+"/"+t,success:function(t){uni.hideLoading(),setTimeout((function(){uni.showToast({icon:"none",title:"发送成功,请注意查收"})}),50),e.verifycode.clearCode(),e.verifycode.sendSuccess()},fail:function(t){uni.hideLoading(),setTimeout((function(){uni.showToast({title:t,icon:"none"})}),50)}})},getGiftCardFun:function(){uni.showLoading({title:"领取中"}),(0,i.get)({url:a.get_gift_card_from_wx+this.cardId,success:function(){setTimeout((function(){uni.showToast({icon:"none",title:"礼品卡领取成功"})}),50),setTimeout((function(){uni.redirectTo({url:"/pages/costManage/accountCard/accountCard?type=1"})}),1500)},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50),setTimeout((function(){uni.redirectTo({url:"/pages/home/home"})}),21500)},complete:function(){uni.hideLoading()}})},getGiftCardStatusFun:function(e){(0,i.get)({url:a.get_gift_card_status+this.cardId,success:function(n){t.log(n),n?"function"==typeof e&&e():(setTimeout((function(){uni.showToast({icon:"none",title:"礼品卡已被领取"})}),50),setTimeout((function(){uni.switchTab({url:"/pages/home/home"})}),1500))},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50),setTimeout((function(){uni.switchTab({url:"/pages/home/home"})}),1500)}})}}};e.default=s}).call(this,n("5a52")["default"])},"8cb2":function(t,e,n){"use strict";n.r(e);var i=n("f847"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},b206:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={verifycode:n("df35").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("verifycode",{ref:"verifycode"})},a=[]},b57b:function(t,e,n){"use strict";n.r(e);var i=n("87c8"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},b5b3:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"wx-verify-bg",attrs:{hidden:!t.isShow}},[n("v-uni-view",{staticClass:"wx-mask"}),n("v-uni-text",{staticClass:"verify-title"},[t._v(t._s(t.title))]),n("v-uni-text",{staticClass:"verify-content"},[t._v(t._s(t.content)+t._s(t.phone))]),n("v-uni-view",{staticClass:"verify-code-view",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.openKeyboard.apply(void 0,arguments)}}},[t._l(t.codes,(function(e,i){return n("v-uni-view",{key:i,class:"verify-input-view "+(0==i?"verify-input-view-first":"")},[n("v-uni-text",{staticClass:"verify-text"},[t._v(t._s(e))])],1)})),n("v-uni-input",{staticClass:"key-input",attrs:{type:"number","adjust-position":"false","confirm-type":"done",focus:t.isFocus,value:t.inputValue},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.listenKeyInput.apply(void 0,arguments)}}})],2),n("v-uni-text",{staticClass:"again-send-class",style:"color:"+t.againSendTextColor,on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.againSendAction.apply(void 0,arguments)}}},[t._v(t._s(t.againSendText))])],1)],1)},a=[]},df35:function(t,e,n){"use strict";n.r(e);var i=n("b5b3"),o=n("8cb2");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("f2ed");var s,u=n("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"244bf8ef",null,!1,i["a"],s);e["default"]=r.exports},e455:function(t,e,n){var i=n("348a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("2bd0f9ce",i,!0,{sourceMap:!1,shadowMode:!1})},eb10:function(t,e,n){"use strict";n.r(e);var i=n("b206"),o=n("b57b");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("5145");var s,u=n("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"4586d8a0",null,!1,i["a"],s);e["default"]=r.exports},f2ed:function(t,e,n){"use strict";var i=n("5627"),o=n.n(i);o.a},f847:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{isShow:!1,isFocus:!1,title:"请输入验证码",content:"已发送到手机号:",againSendText:"重新发送",phone:"",codes:["","","","","",""],inputValue:"",timeCount:60,againSendTextColor:"#FF9F3D"}},components:{},props:{},options:{multipleSlots:!0},methods:{showView:function(t){var e=t.userPhone,n=t.inputSuccess,i=t.againSend;this.againSend=i,this.inputSuccess=n;var o=e.substr(0,3)+"****"+e.substr(7);this.setData({isShow:!this.isShow,phone:o,isFocus:!0,codes:["","","","","",""]})},closeView:function(){this.setData({isShow:!this.isShow,isFocus:!1,inputValue:""})},clearCode:function(){this.setData({codes:["","","","","",""],inputValue:""})},openKeyboard:function(){this.setData({isFocus:!0})},listenKeyInput:function(t){for(var e=t.detail.value,n=e.length,i=new Array,o=0;o<(n>6?6:n);o++){var a=e.substr(o,1);i[o]=a}for(o=i.length;o<6;o++)i.push("");if(this.setData({codes:i}),n>5){var s=e.substr(0,6);return this.inputSuccess(s),s}},againSendAction:function(){60==this.timeCount&&this.againSend()},sendSuccess:function(){var t=this;this.timer=setInterval((function(){var e=t.timeCount;e-=1,t.setData({againSendText:e+"秒后重新发送",timeCount:e,againSendTextColor:"#808080"}),0==e&&(clearInterval(t.timer),t.setData({againSendText:"重新发送",timeCount:60,againSendTextColor:"#FF9F3D"}))}),1e3)}}};e.default=i}}]);