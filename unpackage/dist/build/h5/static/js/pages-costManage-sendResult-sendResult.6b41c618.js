(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-costManage-sendResult-sendResult"],{"250b":function(t,e,n){"use strict";n.r(e);var a=n("53c5"),i=n("dde3");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("dc63");var o,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"df3b27aa",null,!1,a["a"],o);e["default"]=r.exports},"475c":function(t,e,n){var a=n("eb2f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("45bfc5da",a,!0,{sourceMap:!1,shadowMode:!1})},"53c5":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"send-result-page"},["s"==t.result?n("v-uni-view",{staticClass:"success-result"},[n("v-uni-view",{staticClass:"result-icon"},[n("v-uni-image",{attrs:{src:t.success,mode:"aspectFit"}})],1),n("v-uni-view",{staticClass:"result-title"},[t._v("已赠送至对方用户")]),n("v-uni-view",{staticClass:"result-desc"},[t._v("等待对方确认（"+t._s(t.time)+"s后自动返回至费用管理页）")]),n("v-uni-view",{staticClass:"back-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBackToCostFun.apply(void 0,arguments)}}},[t._v("返回至费用管理页")])],1):t._e(),"f"==t.result?n("v-uni-view",{staticClass:"fail-result"},[n("v-uni-view",{staticClass:"result-icon"},[n("v-uni-image",{attrs:{src:t.fail,mode:"aspectFit"}})],1),n("v-uni-view",{staticClass:"result-title"},[t._v("赠送失败")]),n("v-uni-view",{staticClass:"result-desc"},[t._v("赠送失败，请检查后重试")]),n("v-uni-view",{staticClass:"btn-groups"},[n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBackToCostFun.apply(void 0,arguments)}}},[t._v("返回")]),n("v-uni-view",{staticClass:"btn buy-again black",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleReBuyFun.apply(void 0,arguments)}}},[t._v("重新购买")])],1)],1):t._e()],1)},s=[]},9938:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{result:"f",success:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/success_result.png",fail:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/fail_result.png",timer:null,time:3}},components:{},props:{},onLoad:function(t){var e=this;t.result&&this.setData({result:t.result}),this.setData({timer:setInterval((function(){var t=e.time;e.time>1?e.setData({time:t-1}):(clearInterval(e.timer),e.handleBackToCostFun())}),1e3)})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{handleReBuyFun:function(){clearInterval(this.timer),uni.redirectTo({url:"/pages/costManage/buyCard/buyCard?origin=give"})},handleBackToCostFun:function(){clearInterval(this.timer),uni.reLaunch({url:"/pages/costManage/costManage"})}}};e.default=a},dc63:function(t,e,n){"use strict";var a=n("475c"),i=n.n(a);i.a},dde3:function(t,e,n){"use strict";n.r(e);var a=n("9938"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},eb2f:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"\nuni-view[data-v-df3b27aa]{box-sizing:border-box}.result-icon[data-v-df3b27aa]{margin:%?80?% auto 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?162?%;height:%?162?%;background:#f9f9f9;border:%?2?% solid #dcdcdc;border-radius:50%}.result-icon uni-image[data-v-df3b27aa]{width:%?70?%;height:%?70?%}.result-title[data-v-df3b27aa]{padding-top:%?52?%;font-size:%?36?%;line-height:%?48?%;color:#212121;text-align:center}.result-desc[data-v-df3b27aa]{padding-top:%?18?%;font-size:%?28?%;line-height:%?40?%;color:#999;text-align:center}.back-btn[data-v-df3b27aa]{margin:%?134?% auto 0;height:%?100?%;line-height:%?100?%;width:calc(100% - %?96?%);text-align:center;color:#fff;font-size:%?32?%;font-weight:500;border-radius:%?8?%;background-color:#464646}.btn-groups[data-v-df3b27aa]{position:absolute;bottom:%?80?%;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?40?%}.btn-groups .btn[data-v-df3b27aa]{width:40%;height:%?100?%;line-height:%?100?%;text-align:center;color:#333;font-size:%?30?%}.btn-groups .btn.black[data-v-df3b27aa]{width:60%;color:#fff;border-radius:%?8?%;background-color:#464646}body.?%PAGE?%[data-v-df3b27aa]{background-color:#fff}",""]),t.exports=e}}]);