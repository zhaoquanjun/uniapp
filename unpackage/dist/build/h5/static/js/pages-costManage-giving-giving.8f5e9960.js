(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-costManage-giving-giving"],{"0aa0":function(t,e,a){"use strict";var n=a("dc39"),s=a.n(n);s.a},"1eaf":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{wrapperShow:!1,contentShow:!1}},components:{},props:{sliderList:{type:Array,default:[]}},methods:{show:function(){var t=this;this.setData({wrapperShow:!0}),setTimeout((function(){t.setData({contentShow:!0})}),200)},hide:function(){var t=this;this.setData({contentShow:!1}),setTimeout((function(){t.setData({wrapperShow:!1})}),200)},handleSelectSliderValueFun:function(t){var e=t.currentTarget.dataset.index;if(e==this.sliderList.length-1)return this.hide(),!1;this.$emit("selectWay",{detail:e})}}};e.default=n},3422:function(t,e,a){"use strict";a.r(e);var n=a("c3be"),s=a("7fed");for(var i in s)"default"!==i&&function(t){a.d(e,t,(function(){return s[t]}))}(i);a("0aa0");var o,u=a("f0c5"),r=Object(u["a"])(s["default"],n["b"],n["c"],!1,null,"e95c2d94",null,!1,n["a"],o);e["default"]=r.exports},"3ff8":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a("3b7d"),i=a("730f"),o=n(a("3422")),u=a("537e"),r={data:function(){return{shanqian_icon:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/shanqian_icon.png",accountList:[{label:"个人账户",type:"signal"},{label:"企业账户",type:"company"},{label:"取消",type:"cancel"}],origin:"give",id:"",money:0,activeIndex:0,userName:"",companyUserName:"",personPhone:"",companyPhone:"",companyName:"",personalAuthStatus:-1,companyPersonAuthStatus:-1,companyAuthStatus:-1}},components:{sliderPicker:o.default},props:{},onLoad:function(t){t.origin&&this.setData({origin:t.origin}),t.id&&this.setData({id:t.id}),t.money&&(console.log(t),this.setData({money:t.money}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{handleSelectWayFun:function(){this.$refs.sliderPicker.show()},handleSelectAccoutFun:function(t){this.setData({activeIndex:t.detail}),this.$refs.sliderPicker.hide()},handleInputPhoneFun:function(t){return t.detail.value},handleBlurPhoneInputFun:function(t){var e=t.currentTarget.dataset.type,a=t.detail.value;if(!u.isTelCode(a))return setTimeout((function(){uni.showToast({icon:"none",title:"请输入正确的手机号"})}),50),!1;"signal"==e&&(this.setData({personPhone:a}),this.personalIsAuthFun(a,"signal")),"company"==e&&(this.setData({companyPhone:a}),this.personalIsAuthFun(a,"company"))},handleBlurCompanyNameInputFun:function(t){var e=t.detail.value;this.setData({companyName:e}),this.comapnyIsAuthFun(e)},handleInputCompanyNameFun:function(t){var e=t.detail.value;return this.setData({companyName:e}),console.log(this.companyName),e},personalIsAuthFun:function(t,e){var a=this;uni.showLoading({title:"查询中"}),(0,s.get)({url:i.get_personal_auth_status+"?phone="+t,success:function(t){"signal"==e&&(0==t||2==t?a.setData({personalAuthStatus:t,userName:""}):(a.setData({personalAuthStatus:1,userName:t}),console.log(a.personalAuthStatus,a.userName))),"company"==e&&(0==t||2==t?a.setData({companyPersonAuthStatus:t,companyUserName:""}):a.setData({companyPersonAuthStatus:1,companyUserName:t}))},fail:function(t){console.log(t)},complete:function(){uni.hideLoading()}})},comapnyIsAuthFun:function(t){var e=this;uni.showLoading({title:"查询中"}),(0,s.get)({url:i.get_company_auth_status+"?companyName="+t,success:function(t){e.setData({companyAuthStatus:t})},fail:function(t){console.log(t)},complete:function(){uni.hideLoading()}})},handleConfirmSendFun:function(){this.money<10&&setTimeout((function(){uni.showToast({title:"不能赠送小于10元的礼品卡"})}),50),"give"==this.origin&&this.sendByGiveFun(),"card"==this.origin&&this.sendByCardFun()},sendByGiveFun:function(){var t={transferId:this.id,acceptUserType:this.activeIndex+1,acceptUserPhone:0==this.activeIndex?this.personPhone:this.companyPhone};1==this.activeIndex&&(t.acceptCompanyName=this.companyName),uni.showLoading({title:"赠送中"}),(0,s.postBody)({url:i.send_by_buy,params:t,success:function(t){console.log(t),setTimeout((function(){uni.showToast({icon:"none",title:"礼品卡赠送成功"})}),50),setTimeout((function(){uni.navigateTo({url:"/pages/costManage/sendResult/sendResult?result=s"})}),1500)},fail:function(t){console.log(t),uni.navigateTo({url:"/pages/costManage/sendResult/sendResult?result=f"})},complete:function(){uni.hideLoading()}})},sendByCardFun:function(){var t={transferId:this.id,transferMoney:this.money,acceptUserType:this.activeIndex+1,acceptUserPhone:0==this.activeIndex?this.personPhone:this.companyPhone};1==this.activeIndex&&(t.acceptCompanyName=this.companyName),uni.showLoading({title:"赠送中"}),(0,s.postBody)({url:i.send_card_directive,params:t,success:function(t){setTimeout((function(){uni.showToast({icon:"none",title:"礼品卡赠送成功"})}),50),setTimeout((function(){uni.navigateTo({url:"/pages/costManage/sendResult/sendResult?result=s"})}),1500)},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50),setTimeout((function(){uni.navigateTo({url:"/pages/costManage/sendResult/sendResult?result=f"})}),1500)},complete:function(){uni.hideLoading()}})}}};e.default=r},"537e":function(t,e,a){function n(t){return t=t.toString(),t[1]?t:"0"+t}function s(t,e){var a=new Date(t);return i(a,e)}function i(t,e){var a=["Y","M","D","h","m","s"],s=[];for(var i in s.push(t.getFullYear()),s.push(n(t.getMonth()+1)),s.push(n(t.getDate())),s.push(n(t.getHours())),s.push(n(t.getMinutes())),s.push(n(t.getSeconds())),s)e=e.replace(a[i],s[i]);return e}function o(t){var e=/^[1][3,4,5,7,8][0-9]{9}$/;return e.test(t)}function u(t){var e="出错了";"string"===typeof t?e=t:t.errMsg&&(e=t.errMsg),setTimeout((function(){uni.showToast({duration:2e3,icon:"none",title:e})}),50)}function r(t){setTimeout((function(){uni.showToast({title:t})}),50)}function c(t){var e=["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"];return t.replace(new RegExp(e.join("|"),"g"),"")}function l(t){return d(t,"分","秒")}function d(t,e,a){if(t=t%6e4/1e3,t>-1){var n=Math.floor(t/60),s=Math.floor(t%60);return n<=0?s+a:n+e+s+a}return 0+a}function h(){var t=getCurrentPages(),e=(t[t.length-1],t[t.length-2]);return e}function p(t){return t.replace(/(^\s*)|(\s*$)/g,"")}a("a15b"),a("d3b7"),a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("498a"),t.exports.formatTimeSecond=l,t.exports.formatTimeSecondWithSign=d,t.exports.formatTime=s,t.exports.formatDate=i,t.exports.isTelCode=o,t.exports.showError=u,t.exports.showSuccess=r,t.exports.filterEmoji=c,t.exports.getPreviousPage=h,t.exports.trim=p},"6b39":function(t,e,a){var n=a("9d4f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=a("4f06").default;s("437d12a2",n,!0,{sourceMap:!1,shadowMode:!1})},"730f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.send_card_directive=e.send_by_buy=e.get_company_auth_status=e.get_personal_auth_status=e.cancel_hare_card=e.share_card=e.get_wx_pay_params=e.buy_card_by_account=e.get_card_list=e.get_balance_list=e.get_accout_info=e.get_gift_card_status=e.get_gift_card_from_wx=void 0;var n=a("3b7d"),s=n.host+"/v1/expense/receiveShareGiftCard/";e.get_gift_card_from_wx=s;var i=n.host+"/v1/expense/transferGiftCardTimeout/";e.get_gift_card_status=i;var o=n.host+"/v1/account/getCurrentUserOrCompanyInfo";e.get_accout_info=o;var u=n.host+"/v1/expense/consumptionDetailsList";e.get_balance_list=u;var r=n.host+"/v1/expense/couponList";e.get_card_list=r;var c=n.host+"/v1/pay/account/pay";e.buy_card_by_account=c;var l=n.host+"/v1/pay/create/order";e.get_wx_pay_params=l;var d=n.host+"/v1/expense/shareGiftCard";e.share_card=d;var h=n.host+"/v1/expense/cancelShareGiftCard/";e.cancel_hare_card=h;var p=n.host+"/v1/account/user/getAuthUserInfoByNameAndPhone";e.get_personal_auth_status=p;var f=n.host+"/v1/account/company/getOneAuthCompanyByName";e.get_company_auth_status=f;var v=n.host+"/v1/expense/batchTransfer";e.send_by_buy=v;var m=n.host+"/v1/expense/transfer";e.send_card_directive=m},"7fed":function(t,e,a){"use strict";a.r(e);var n=a("1eaf"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=s.a},8270:function(t,e,a){"use strict";a.r(e);var n=a("3ff8"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=s.a},"9d4f":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"\nuni-view[data-v-01481f0d]{box-sizing:border-box}.giving-page .giving-content[data-v-01481f0d]{margin:%?14?% 0;padding:0 %?48?%;background-color:#fff}.flex-box[data-v-01481f0d]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.label[data-v-01481f0d],\n.value[data-v-01481f0d]{font-size:%?30?%;line-height:%?48?%;color:#333}.label[data-v-01481f0d]{min-width:%?200?%}.user-type[data-v-01481f0d]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;width:100%;height:%?162?%;border-bottom:%?2?% solid #f5f5f5}.user-type uni-image[data-v-01481f0d]{width:%?56?%;height:%?56?%}.user-type uni-text[data-v-01481f0d]{padding-left:%?24?%;font-size:%?30?%;line-height:%?30?%;color:#212121}.type-select[data-v-01481f0d], .user-phone[data-v-01481f0d], .user-company[data-v-01481f0d]{height:%?142?%;border-bottom:%?2?% solid #f5f5f5}.type-select .value[data-v-01481f0d]{padding-right:%?26?%}.type-select .trangle[data-v-01481f0d]{position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:0;height:0;border-left:%?10?% solid transparent;border-right:%?10?% solid transparent;border-top:%?18?% solid #666}.has-isAuth .input-area[data-v-01481f0d]{position:relative}.has-isAuth .input-area .is-auth[data-v-01481f0d]{position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:none;padding:%?6?% %?12?%;font-size:%?20?%}.has-isAuth .input-area .user-name[data-v-01481f0d]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:none;font-size:%?30?%;color:#333}.has-isAuth .input-area .user-name.has-result[data-v-01481f0d]{display:block;right:%?100?%}.has-isAuth .input-area .user-name.has-long-result[data-v-01481f0d]{display:block;right:%?150?%}.has-isAuth .input-area uni-input[data-v-01481f0d]{text-align:right}.has-isAuth .input-area uni-input.has-result[data-v-01481f0d]{padding-right:%?100?%}.has-isAuth .input-area uni-input.has-long-result[data-v-01481f0d]{padding-right:%?150?%}.has-isAuth .input-area uni-input.has-result-auth[data-v-01481f0d]{padding-right:%?200?%}.has-isAuth .input-area uni-input.has-long-result-auth[data-v-01481f0d]{padding-right:%?250?%}.has-isAuth .input-area uni-input[data-v-01481f0d]::-webkit-input-placeholder{font-size:%?28?%;color:#999}.has-isAuth .input-area uni-input[data-v-01481f0d]::placeholder{font-size:%?28?%;color:#999}.has-isAuth .input-area .is-auth.no-auth[data-v-01481f0d]{display:block;color:#666;background-color:#f4f4f4}.has-isAuth .input-area .is-auth.already-auth[data-v-01481f0d]{display:block;color:#3eb4a8;background-color:rgba(62,180,168,.1)}.confirm-btn[data-v-01481f0d]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:%?80?%;height:%?100?%;line-height:%?100?%;width:calc(100% - %?96?%);text-align:center;color:#fff;font-size:%?32?%;font-weight:500;border-radius:%?8?%;background-color:#464646}body.?%PAGE?%[data-v-01481f0d]{background-color:#f5f5f5}",""]),t.exports=e},a04e:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".slider-picker--area[data-v-e95c2d94]{position:fixed;top:0;left:0;width:100%;height:100%;display:none;z-index:39}.wrapper-show[data-v-e95c2d94]{display:block}.slider-picker--area .mask[data-v-e95c2d94]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.slider-picker--area .slider-box[data-v-e95c2d94]{position:absolute;left:0;bottom:0;-webkit-transform:translateY(100%);transform:translateY(100%);padding:%?10?% %?48?%;width:100%;background-color:#fff;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;box-sizing:border-box}.slider-picker--area .slider-box.content-show[data-v-e95c2d94]{-webkit-transform:translateY(0);transform:translateY(0)}.slider-picker--area .slider-box .slider-item[data-v-e95c2d94]{width:100%;height:%?104?%;line-height:%?104?%;text-align:center;border-bottom:%?2?% solid #e6e6e6;font-size:%?32?%;color:#212121}.slider-picker--area .slider-box .slider-item[data-v-e95c2d94]:last-of-type{color:#999;border-bottom:none}",""]),t.exports=e},a1ab:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"giving-page"},[a("v-uni-view",{staticClass:"giving-content"},[a("v-uni-view",{staticClass:"user-type flex-box"},[a("v-uni-image",{attrs:{src:t.shanqian_icon,mode:"aspectFit"}}),a("v-uni-text",[t._v("闪签用户")])],1),a("v-uni-view",{staticClass:"type-select flex-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectWayFun.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"label"},[t._v("账户类型")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.accountList[t.activeIndex].label))]),a("v-uni-view",{staticClass:"trangle"})],1),0==t.activeIndex?a("v-uni-view",{staticClass:"signal"},[a("v-uni-view",{staticClass:"user-phone has-isAuth flex-box"},[a("v-uni-view",{staticClass:"label"},[t._v("手机号")]),a("v-uni-view",{staticClass:"value input-area"},[a("v-uni-input",{class:2==t.personalAuthStatus?"has-long-result":0==t.personalAuthStatus?"has-result":1==t.personalAuthStatus?"has-result-auth":"",attrs:{maxlength:"11",type:"number",placeholder:"请输入对方手机号","data-type":"signal"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInputPhoneFun.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlurPhoneInputFun.apply(void 0,arguments)}}}),a("v-uni-view",{class:"is-auth "+(0==t.personalAuthStatus||2==t.personalAuthStatus?"no-auth":1==t.personalAuthStatus?"already-auth":"")},[t._v(t._s(0==t.personalAuthStatus?"未认证":1==t.personalAuthStatus?"已认证":2==t.personalAuthStatus?"已注册未认证":""))]),a("v-uni-view",{class:"user-name "+(2==t.personalAuthStatus?"has-long-result":0==t.personalAuthStatus||1==t.personalAuthStatus?"has-result":"")},[t._v(t._s(t.userName))])],1)],1)],1):t._e(),1==t.activeIndex?a("v-uni-view",{staticClass:"company"},[a("v-uni-view",{staticClass:"user-company has-isAuth flex-box"},[a("v-uni-view",{staticClass:"label"},[t._v("企业名称")]),a("v-uni-view",{staticClass:"value input-area"},[a("v-uni-input",{class:2==t.companyAuthStatus?"has-long-result":0==t.companyAuthStatus||1==t.companyAuthStatus?"has-result":"",attrs:{placeholder:"请输入对方企业名称"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlurCompanyNameInputFun.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInputCompanyNameFun.apply(void 0,arguments)}}}),a("v-uni-view",{class:"is-auth "+(0==t.companyAuthStatus||2==t.companyAuthStatus?"no-auth":1==t.companyAuthStatus?"already-auth":"")},[t._v(t._s(0==t.companyAuthStatus?"未认证":1==t.companyAuthStatus?"已认证":2==t.companyAuthStatus?"已注册未认证":""))]),a("v-uni-view",{class:"user-name "+(2==t.companyAuthStatus?"has-long-result":0==t.companyAuthStatus||1==t.companyAuthStatus?"has-result":"")},[t._v(t._s(t.userName))])],1)],1),a("v-uni-view",{staticClass:"user-phone has-isAuth flex-box"},[a("v-uni-view",{staticClass:"label"},[t._v("经办人手机号")]),a("v-uni-view",{staticClass:"value input-area"},[a("v-uni-input",{class:2==t.companyPersonAuthStatus?"has-long-result":0==t.companyPersonAuthStatus?"has-result":1==t.companyPersonAuthStatus?"has-result-auth":"",attrs:{maxlength:"11",type:"number",placeholder:"请输入经办人手机号","data-type":"company"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInputPhoneFun.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlurPhoneInputFun.apply(void 0,arguments)}}}),a("v-uni-view",{class:"is-auth "+(0==t.companyPersonAuthStatus||2==t.companyPersonAuthStatus?"no-auth":1==t.companyPersonAuthStatus?"already-auth":"")},[t._v(t._s(0==t.companyPersonAuthStatus?"未认证":1==t.companyPersonAuthStatus?"已认证":2==t.companyPersonAuthStatus?"已注册未认证":""))]),a("v-uni-view",{class:"user-name "+(2==t.companyPersonAuthStatus?"has-long-result":0==t.companyPersonAuthStatus||1==t.companyPersonAuthStatus?"has-result":"")},[t._v(t._s(t.companyUserName))])],1)],1)],1):t._e()],1),a("v-uni-view",{staticClass:"confirm-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleConfirmSendFun.apply(void 0,arguments)}}},[t._v("确认赠送")]),a("slider-picker",{ref:"sliderPicker",attrs:{sliderList:t.accountList},on:{selectWay:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectAccoutFun.apply(void 0,arguments)}}})],1)},i=[]},a650:function(t,e,a){"use strict";a.r(e);var n=a("a1ab"),s=a("8270");for(var i in s)"default"!==i&&function(t){a.d(e,t,(function(){return s[t]}))}(i);a("dcea");var o,u=a("f0c5"),r=Object(u["a"])(s["default"],n["b"],n["c"],!1,null,"01481f0d",null,!1,n["a"],o);e["default"]=r.exports},c3be:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"slider-picker--area "+(t.wrapperShow?"wrapper-show":"")},[a("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}}),a("v-uni-view",{class:"slider-box "+(t.contentShow?"content-show":"")},t._l(t.sliderList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"slider-item",attrs:{"data-value":e.value,"data-index":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectSliderValueFun.apply(void 0,arguments)}}},[t._v(t._s(e.label))])})),1)],1)},i=[]},dc39:function(t,e,a){var n=a("a04e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=a("4f06").default;s("13913480",n,!0,{sourceMap:!1,shadowMode:!1})},dcea:function(t,e,a){"use strict";var n=a("6b39"),s=a.n(n);s.a}}]);