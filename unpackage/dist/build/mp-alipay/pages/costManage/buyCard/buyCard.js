(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/costManage/buyCard/buyCard"],{"17b1":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("3b7d"),o=n("730f"),i=function(){n.e("components/sliderPicker/sliderPicker").then(function(){return resolve(n("3422"))}.bind(null,n)).catch(n.oe)},u={data:function(){return{amountList:[{label:100,value:100},{label:500,value:500},{label:1e3,value:1e3}],selectList:[{label:"账户余额",value:"account"},{label:"微信支付",value:"wx"},{label:"取消",value:"cancel"}],origin:"buy",activeIndex:0,valueStatus:"select",rechargeValue:100,total:Number(100).toFixed(2),selectActive:100,count:1,timer:null,placeholders:["请输入10或10以上的金额","请输入10～1000整数"]}},components:{sliderPicker:i},props:{},onLoad:function(e){e.origin&&this.setData({origin:e.origin})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{handleSelectPayWayFun:function(e){this.setData({activeIndex:e.detail}),this.$refs.sliderPicker.hide()},handleSelectValueFun:function(e){var t=e.currentTarget.dataset.value;this.setData({selectActive:t,rechargeValue:t,total:(t*this.count).toFixed(2),valueStatus:"select"})},handleInputValueFun:function(e){var t=e.detail.value;return this.setData({rechargeValue:t,total:(this.count*t).toFixed(2)}),t},handleCountValueFun:function(e){var t=e.detail.value;return this.setData({count:t,total:this.rechargeValue?(this.rechargeValue*t).toFixed(2):"0.00"}),t},handleBlurCountFun:function(e){var t=e.detail.value;return t>500&&(t=500),this.setData({count:t}),t},handleFocusFun:function(){"select"==this.valueStatus&&this.setData({selectActive:-1,rechargeValue:"",valueStatus:"input",total:0})},handleSelectWayFun:function(){this.$refs.sliderPicker.show()},handleConfirmBuyFun:function(){var t=this;this.rechargeValue&&Number(this.rechargeValue)>=10?(e.showLoading({title:"支付中"}),0==this.activeIndex&&(0,a.get)({url:o.buy_card_by_account+"?amount=".concat(this.total,"&goods=").concat(this.rechargeValue,"&goodsNum=").concat(this.count),success:function(n){console.log(n),setTimeout((function(){e.showToast({icon:"none",title:"礼品卡购买成功，已存至【礼品卡 - 可使用】清单中",duration:3e3})}),50),t.setData({timer:setTimeout((function(){"give"==t.origin&&e.navigateTo({url:"/pages/costManage/giveWay/giveWay?origin="+t.origin+"&id="+n+"&money="+t.rechargeValue+"&count="+t.count}),"buy"==t.origin&&e.redirectTo({url:"/pages/costManage/accountCard/accountCard?type=1&origin=result"})}),2e3)})},fail:function(n){console.log(n),e.showModal({title:"购买失败",content:0==t.activeIndex?"账户余额不足，礼品卡购买失败，您可以先充值再购买礼品卡，或者直接使用微信支付购买":"购买失败",showCancel:!1,confirmText:"我知道了"})},complete:function(){e.hideLoading()}}),1==this.activeIndex&&this.getWxPayParamsFun()):setTimeout((function(){e.showToast({icon:"none",title:"购买金额不能小于10元"})}),50)},getWxPayParamsFun:function(){var t=this;e.showLoading({title:"创建订单中"}),(0,a.get)({url:o.get_wx_pay_params+"?amount="+this.total+"&body=微信支付&rechargeType=0&goods="+this.rechargeValue+"&goodsNum="+this.count,success:function(e){console.log(e),t.payByWxFun(e)},fail:function(t){setTimeout((function(){e.showToast({icon:"none",title:t})}),50)},complete:function(){e.hideLoading()}})},payByWxFun:function(t){var n=this;this.rechargeValue&&e.requestPayment({timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign,success:function(t){setTimeout((function(){e.showToast({icon:"none",title:"支付成功"})}),50),n.setData({timer:setTimeout((function(){"give"==n.origin&&e.navigateTo({url:"/pages/costManage/giveWay/giveWay?origin="+n.origin+"&id="+t+"&money="+n.rechargeValue+"&count="+n.count}),"buy"==n.origin&&e.redirectTo({url:"/pages/costManage/accountCard/accountCard?type=1"})}),2e3)})},fail:function(e){console.log(e)},complete:function(){}})}}};t.default=u}).call(this,n("c11b")["default"])},3616:function(e,t,n){"use strict";n.r(t);var a=n("b385"),o=n("b95d");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("ab62");var u,c=n("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=r.exports},ab62:function(e,t,n){"use strict";var a=n("e298"),o=n.n(a);o.a},b385:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement;e._self._c},i=[]},b95d:function(e,t,n){"use strict";n.r(t);var a=n("17b1"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},dd80:function(e,t,n){"use strict";(function(e){n("e09c");a(n("66fd"));var t=a(n("3616"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("c11b")["createPage"])},e298:function(e,t,n){}},[["dd80","common/runtime","common/vendor"]]]);