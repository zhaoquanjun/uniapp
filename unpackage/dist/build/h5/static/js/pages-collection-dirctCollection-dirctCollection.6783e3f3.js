(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-collection-dirctCollection-dirctCollection"],{"05fb":function(t,e,i){"use strict";i.r(e);var n=i("5a6c"),a=i("07d8");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0aa7");var r,u=i("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"3726f8ec",null,!1,n["a"],r);e["default"]=s.exports},"0615":function(t,e,i){"use strict";(function(t){i("a9e3"),i("b680"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("3b7d"),a=i("1d1a"),o=i("537e"),r=(getApp(),{data:function(){return{buttonClicked:!0,title1:"收款金额",title2:"收款信息",receiptMessage:"",ishighLight:!1,inputAmount:"",nextText:"生成收款码",hour:" ",minute:" ",isTemplate:0,templateId:"",payerName:"",remark:""}},components:{},props:{},onLoad:function(e){e.isTemplate&&this.setData({isTemplate:e.isTemplate}),e.templateId&&this.setData({templateId:e.templateId}),this.setData({inputAmount:e.templateAmount,receiptMessage:e.templateName}),this.getHighLight(),t.log(e)},onReady:function(){},onShow:function(){this.setData({buttonClicked:!0})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{textInput:function(t){var e=t.detail.value;this.setData({receiptMessage:e}),this.getHighLight()},bindKeyInput:function(e){t.log(e);var i=e.detail.value,n=i.replace(/[^\d.]/g,"").replace(/^\./g,"").replace(/\.{2,}/g,".").replace(".","$#$").replace(/\./g,"").replace("$#$",".").replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3");return this.setData({inputAmount:n}),this.getHighLight(),n},handleBlurInputFun:function(){this.setData({inputAmount:Number(this.inputAmount).toFixed(2)})},handleInputPayerFun:function(t){this.setData({payerName:t.detail.value})},handleInputRemarkFun:function(t){this.setData({remark:t.detail.value})},getHighLight:function(){this.receiptMessage&&this.inputAmount?this.setData({ishighLight:!0}):this.setData({ishighLight:!1})},codeGenerate:function(){if(0!=this.inputAmount)if(this.payerName){this.setData({buttonClicked:!1});var t=this.inputAmount,e=this.receiptMessage,i=this.isTemplate,r={name:e,amount:100*t,id:this.templateId,payerName:this.payerName,remark:this.remark},u=1==i?a.get_sell_pay_QrCode:a.get_pay_QrCode;(0,n.postBody)({url:u,params:r,success:function(n){uni.hideLoading({}),uni.navigateTo({url:"/pages/collection/dirctCollection/dirctCollectionLaunch/dirctCollectionLaunch?inputAmount= "+t+"&receiptMessage="+e+"&qrCodeUrl="+n.qrCodeUrl+"&isTemplate="+i+"&url="+n.url})},fail:function(t){uni.hideLoading(),o.showError(t)}})}else o.showError("请输入付款方");else o.showError("请输入收款金额")}}});e.default=r}).call(this,i("5a52")["default"])},"07d8":function(t,e,i){"use strict";i.r(e);var n=i("0615"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"0aa7":function(t,e,i){"use strict";var n=i("cea6"),a=i.n(n);a.a},1148:function(t,e,i){"use strict";var n=i("a691"),a=i("1d80");t.exports="".repeat||function(t){var e=String(a(this)),i="",o=n(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(i+=e);return i}},"1d1a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.get_pay_QrCode=e.get_sell_pay_QrCode=e.get_pay_template_list=void 0;var n=i("3b7d"),a=n.host+"/v1/pay/template/list";e.get_pay_template_list=a;var o=n.host+"/v1/pay/template/use";e.get_sell_pay_QrCode=o;var r=n.host+"/v1/pay/info/createQrCodePost";e.get_pay_QrCode=r},"408a":function(t,e,i){var n=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"537e":function(t,e,i){function n(t){return t=t.toString(),t[1]?t:"0"+t}function a(t,e){var i=new Date(t);return o(i,e)}function o(t,e){var i=["Y","M","D","h","m","s"],a=[];for(var o in a.push(t.getFullYear()),a.push(n(t.getMonth()+1)),a.push(n(t.getDate())),a.push(n(t.getHours())),a.push(n(t.getMinutes())),a.push(n(t.getSeconds())),a)e=e.replace(i[o],a[o]);return e}function r(t){var e=/^[1][3,4,5,7,8][0-9]{9}$/;return e.test(t)}function u(t){var e="出错了";"string"===typeof t?e=t:t.errMsg&&(e=t.errMsg),setTimeout((function(){uni.showToast({duration:2e3,icon:"none",title:e})}),50)}function s(t){setTimeout((function(){uni.showToast({title:t})}),50)}function l(t){var e=["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"];return t.replace(new RegExp(e.join("|"),"g"),"")}function c(t){return f(t,"分","秒")}function f(t,e,i){if(t=t%6e4/1e3,t>-1){var n=Math.floor(t/60),a=Math.floor(t%60);return n<=0?a+i:n+e+a+i}return 0+i}function p(){var t=getCurrentPages(),e=(t[t.length-1],t[t.length-2]);return e}function d(t){return t.replace(/(^\s*)|(\s*$)/g,"")}i("a15b"),i("d3b7"),i("4d63"),i("ac1f"),i("25f0"),i("5319"),i("498a"),t.exports.formatTimeSecond=c,t.exports.formatTimeSecondWithSign=f,t.exports.formatTime=a,t.exports.formatDate=o,t.exports.isTelCode=r,t.exports.showError=u,t.exports.showSuccess=s,t.exports.filterEmoji=l,t.exports.getPreviousPage=p,t.exports.trim=d},"5a6c":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"pageContent"},[i("v-uni-view",{staticClass:"pageHeader"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title1))]),i("v-uni-view",{staticClass:"amount"},[i("v-uni-view",{staticClass:"prefix"},[t._v("¥")]),i("v-uni-input",{staticClass:"value-input",attrs:{type:"text",value:t.inputAmount,"data-field":"inputAmount"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlurInputFun.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"receipt-message"},[i("v-uni-view",{staticClass:"title",staticStyle:{"border-bottom":"2rpx solid #F5F5F5"}},[t._v(t._s(t.title2))]),i("v-uni-view",{staticClass:"input-message-box"},[i("v-uni-textarea",{attrs:{name:"content",maxlength:"100",placeholder:"请输入收款信息",value:t.receiptMessage},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.textInput.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"input-tip"},[t._v(t._s(t.receiptMessage.length)+"/100")])],1)],1),i("v-uni-view",{staticClass:"payer-info"},[i("v-uni-view",{staticClass:"title"},[t._v("付款方信息")]),i("v-uni-view",{staticClass:"info-wrapper"},[i("v-uni-input",{attrs:{type:"text",maxlength:"50"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInputPayerFun.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"payer-info"},[i("v-uni-view",{staticClass:"title"},[t._v("备注")]),i("v-uni-view",{staticClass:"info-wrapper"},[i("v-uni-input",{attrs:{type:"text",maxlength:"100"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInputRemarkFun.apply(void 0,arguments)}}})],1)],1),t.ishighLight?i("v-uni-button",{staticClass:"nextButton",staticStyle:{"background-color":"#464646"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.codeGenerate.apply(void 0,arguments)}}},[t._v(t._s(t.nextText))]):t._e(),t.ishighLight?t._e():i("v-uni-button",{staticClass:"nextButton",staticStyle:{background:"#B7B7B7"}},[t._v(t._s(t.nextText))])],1)},o=[]},b680:function(t,e,i){"use strict";var n=i("23e7"),a=i("a691"),o=i("408a"),r=i("1148"),u=i("d039"),s=1..toFixed,l=Math.floor,c=function(t,e,i){return 0===e?i:e%2===1?c(t,e-1,i*t):c(t*t,e/2,i)},f=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},p=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){s.call({})}));n({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,i,n,u,s=o(this),p=a(t),d=[0,0,0,0,0,0],h="",g="0",v=function(t,e){var i=-1,n=e;while(++i<6)n+=t*d[i],d[i]=n%1e7,n=l(n/1e7)},m=function(t){var e=6,i=0;while(--e>=0)i+=d[e],d[e]=l(i/t),i=i%t*1e7},b=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==d[t]){var i=String(d[t]);e=""===e?i:e+r.call("0",7-i.length)+i}return e};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(h="-",s=-s),s>1e-21)if(e=f(s*c(2,69,1))-69,i=e<0?s*c(2,-e,1):s/c(2,e,1),i*=4503599627370496,e=52-e,e>0){v(0,i),n=p;while(n>=7)v(1e7,0),n-=7;v(c(10,n,1),0),n=e-1;while(n>=23)m(1<<23),n-=23;m(1<<n),v(1,1),m(2),g=b()}else v(0,i),v(1<<-e,0),g=b()+r.call("0",p);return p>0?(u=g.length,g=h+(u<=p?"0."+r.call("0",p-u)+g:g.slice(0,u-p)+"."+g.slice(u-p))):g=h+g,g}})},cea6:function(t,e,i){var n=i("ff05");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("70015784",n,!0,{sourceMap:!1,shadowMode:!1})},ff05:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\n.pageContent[data-v-3726f8ec]{padding-bottom:%?140?%}.pageHeader[data-v-3726f8ec]{background-color:#fff;margin:%?54?% %?30?% %?16?% %?30?%;height:%?236?%;border-radius:%?4?%;padding-left:%?40?%;padding-right:%?40?%}.title[data-v-3726f8ec]{height:%?98?%;line-height:%?118?%;font-size:%?26?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.amount[data-v-3726f8ec]{display:-webkit-box;display:-webkit-flex;display:flex}.value-input[data-v-3726f8ec]{height:%?106?%}.prefix[data-v-3726f8ec]{height:%?106?%;line-height:%?106?%;font-size:28px;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#333;margin-right:%?24?%}.value-input[data-v-3726f8ec]{font-size:%?60?%}.receipt-message[data-v-3726f8ec]{background-color:#fff;margin:%?0?% %?30?% %?16?% %?30?%;border-radius:%?4?%;padding-left:%?40?%;padding-right:%?40?%}.input-message-box[data-v-3726f8ec]{position:relative;width:100%;padding-bottom:%?60?%}.input-message-box uni-textarea[data-v-3726f8ec]{min-height:%?112?%;padding-top:%?32?%;font-size:%?28?%;width:100%;height:%?160?%}.payer-info[data-v-3726f8ec]{margin:%?16?% %?30?%;padding:%?16?% %?40?%;background-color:#fff}.payer-info .title[data-v-3726f8ec]{font-size:%?24?%;line-height:%?98?%;border-bottom:1px solid #f5f5f5}.payer-info .info-wrapper[data-v-3726f8ec]{padding-top:%?16?%}.payer-info .info-wrapper uni-input[data-v-3726f8ec]{border:none;font-size:%?28?%}.input-tip[data-v-3726f8ec]{font-size:%?24?%;position:absolute;right:%?0?%;bottom:%?32?%;color:#999}.nextButton[data-v-3726f8ec]{position:fixed;bottom:%?40?%;width:%?670?%;margin-left:%?40?%;height:%?96?%;line-height:%?96?%;font-size:%?32?%;font-weight:500;color:#fff;text-align:center;border-radius:%?8?%}body.?%PAGE?%[data-v-3726f8ec]{background-color:#f7f8f9}",""]),t.exports=e}}]);