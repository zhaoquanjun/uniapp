(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/collection/dirctCollection/dirctCollectionLaunch/dirctCollectionLaunch"],{"0202":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isTemplate:!1,isCopySuccess:!0,url:"",title:"合同收款",tip:"打开微信、支付宝扫码付钱",receiveAmount:"",decimal:"",receiptMessage:"",qrCodeUrl:"",countDownText:"",timer:null,hour:1,minute:58,delay:118}},components:{},props:{},onLoad:function(t){console.log(t),this.setData({receiveAmount:t.inputAmount.slice(0,t.inputAmount.indexOf(".")),decimal:t.inputAmount.slice(t.inputAmount.indexOf(".")),receiptMessage:t.receiptMessage,qrCodeUrl:t.qrCodeUrl,isTemplate:t.isTemplate,url:t.url}),this.changeVaildTime(),console.log(this.isTemplate)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{changeVaildTime:function(){var t=this,e=118;this.timer&&clearInterval(this.timer),this.setData({timer:setInterval((function(){e-=1,e>0?t.setData({hour:Math.floor(e/60),minute:e%60,delay:e}):clearInterval(t.timer)}),6e4)})},copyBtn:function(e){var n=this;t.setClipboardData({data:n.url,success:function(){setTimeout((function(){t.showToast({title:"链接已复制"})}),50)}}),n.setData({isCopySuccess:!1})}}};e.default=n}).call(this,n("543d")["default"])},2999:function(t,e,n){"use strict";n.r(e);var o=n("0202"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=i.a},"350b":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"3f43":function(t,e,n){"use strict";var o=n("de7a"),i=n.n(o);i.a},"430c":function(t,e,n){"use strict";(function(t){n("e09c");o(n("66fd"));var e=o(n("6f1b"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"6f1b":function(t,e,n){"use strict";n.r(e);var o=n("350b"),i=n("2999");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("3f43");var u,a=n("f0c5"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=r.exports},de7a:function(t,e,n){}},[["430c","common/runtime","common/vendor"]]]);