(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/account/loginVerify/loginVerify"],{"163b":function(n,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return u})),o.d(e,"a",(function(){return t}));var t={verifycode:function(){return o.e("components/verifycode/verifycode").then(o.bind(null,"df35"))}},i=function(){var n=this,e=n.$createElement;n._self._c},u=[]},"255a":function(n,e,o){},"307d":function(n,e,o){"use strict";(function(n){o("e09c");t(o("66fd"));var e=t(o("eb10"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,o("c11b")["createPage"])},"4dfc":function(n,e,o){"use strict";var t=o("255a"),i=o.n(t);i.a},"6a24":function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o("3b7d"),i=o("aa5f"),u=o("730f"),a={data:function(){return{openId:"",unionId:"",originType:null,isCard:!1,cardId:"",mode:""}},components:{},props:{},onLoad:function(n){console.log(n,"dasdasdasdas");var e=n.phone;console.log(n),null!=n.originType&&this.setData({originType:n.originType}),n.isCard&&this.setData({isCard:!0}),n.cardId&&this.setData({cardId:n.cardId}),this.setData({openId:n.openId,unionId:n.unionId}),this.verifycode=this.$refs.verifycode,this.sendPhoneCodeFun(e);var o=this;this.verifycode.showView({userPhone:e,inputSuccess:function(n){o.loginFun(e,n),o.verifycode.clearCode()},againSend:function(){o.sendPhoneCodeFun(e)}})},onShareAppMessage:function(){},methods:{loginFun:function(e,o){var u=this;n.hideLoading(),n.showLoading({title:"登陆中..."});var a=this;(0,t.post)({url:i.login_url,params:{phone:e,phoneCode:o,openId:a.openId,unionId:a.unionId},success:function(e){console.log(e);var o=getApp();o.globalData.loginSuccess(e.token,e.userId,e.name,e.userType,e.auth,e.phone,e.icon,e.joinCompany,e.userCompanyType),n.hideLoading();var t=a.originType;console.log(u.isCard),u.isCard?u.getGiftCardStatusFun(u.getGiftCardFun):"auth"==t?n.navigateBack({delta:3}):n.reLaunch({url:"/pages/home/home"})},fail:function(e){n.hideLoading(),setTimeout((function(){n.showToast({title:e,icon:"none",duration:2e3})}),50)}})},sendPhoneCodeFun:function(e){var o=this;n.showLoading({title:"验证码发送中"}),(0,t.get)({url:i.get_register_sms_code_url+"/"+e,success:function(e){n.hideLoading(),setTimeout((function(){n.showToast({icon:"none",title:"发送成功,请注意查收"})}),50),o.verifycode.clearCode(),o.verifycode.sendSuccess()},fail:function(e){n.hideLoading(),setTimeout((function(){n.showToast({title:e,icon:"none"})}),50)}})},getGiftCardFun:function(){n.showLoading({title:"领取中"}),(0,t.get)({url:u.get_gift_card_from_wx+this.cardId,success:function(){setTimeout((function(){n.showToast({icon:"none",title:"礼品卡领取成功"})}),50),setTimeout((function(){n.redirectTo({url:"/pages/costManage/accountCard/accountCard?type=1"})}),1500)},fail:function(e){setTimeout((function(){n.showToast({icon:"none",title:e})}),50),setTimeout((function(){n.redirectTo({url:"/pages/home/home"})}),21500)},complete:function(){n.hideLoading()}})},getGiftCardStatusFun:function(e){(0,t.get)({url:u.get_gift_card_status+this.cardId,success:function(o){console.log(o),o?"function"==typeof e&&e():(setTimeout((function(){n.showToast({icon:"none",title:"礼品卡已被领取"})}),50),setTimeout((function(){n.switchTab({url:"/pages/home/home"})}),1500))},fail:function(e){setTimeout((function(){n.showToast({icon:"none",title:e})}),50),setTimeout((function(){n.switchTab({url:"/pages/home/home"})}),1500)}})}}};e.default=a}).call(this,o("c11b")["default"])},b57b:function(n,e,o){"use strict";o.r(e);var t=o("6a24"),i=o.n(t);for(var u in t)"default"!==u&&function(n){o.d(e,n,(function(){return t[n]}))}(u);e["default"]=i.a},eb10:function(n,e,o){"use strict";o.r(e);var t=o("163b"),i=o("b57b");for(var u in i)"default"!==u&&function(n){o.d(e,n,(function(){return i[n]}))}(u);o("4dfc");var a,c=o("f0c5"),s=Object(c["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],a);e["default"]=s.exports}},[["307d","common/runtime","common/vendor"]]]);