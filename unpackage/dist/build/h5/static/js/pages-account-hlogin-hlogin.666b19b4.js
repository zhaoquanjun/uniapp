(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-account-hlogin-hlogin"],{"0fb7":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"h-login--page"},[n("v-uni-view",{staticClass:"login-content"},[n("v-uni-view",{staticClass:"logo-area"},[n("v-uni-image",{attrs:{src:"/static/images/pm/miniH5_login.png",mode:""}})],1),n("v-uni-view",{staticClass:"account-area"},[n("v-uni-view",{staticClass:"label"},[e._v("手机号")]),n("v-uni-view",{staticClass:"value"},[n("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),n("v-uni-view",{staticClass:"label yzm"},[e._v("验证码")]),n("v-uni-view",{staticClass:"value"},[n("v-uni-input",{staticClass:"code",attrs:{type:"number",maxlength:"6",placeholder:"请输入验证码"},model:{value:e.yzm,callback:function(t){e.yzm=t},expression:"yzm"}}),n("v-uni-view",{staticClass:"getcode-btn",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getYzmCode.apply(void 0,arguments)}}},[e._v(e._s(e.getCodeBtnWords))])],1),n("v-uni-view",{staticClass:"login-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v("登录")])],1)],1),n("v-uni-view",{staticClass:"circle"})],1)},a=[]},"266c":function(e,t,n){"use strict";n.r(t);var o=n("0fb7"),i=n("eeb9");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("e690");var r,u=n("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"ed0d1e94",null,!1,o["a"],r);t["default"]=c.exports},"348d":function(e,t,n){var o=n("6391");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("753eb6ac",o,!0,{sourceMap:!1,shadowMode:!1})},"537e":function(e,t,n){function o(e){return e=e.toString(),e[1]?e:"0"+e}function i(e,t){var n=new Date(e);return a(n,t)}function a(e,t){var n=["Y","M","D","h","m","s"],i=[];for(var a in i.push(e.getFullYear()),i.push(o(e.getMonth()+1)),i.push(o(e.getDate())),i.push(o(e.getHours())),i.push(o(e.getMinutes())),i.push(o(e.getSeconds())),i)t=t.replace(n[a],i[a]);return t}function r(e){var t=/^[1][3,4,5,7,8][0-9]{9}$/;return t.test(e)}function u(e){var t="出错了";"string"===typeof e?t=e:e.errMsg&&(t=e.errMsg),setTimeout((function(){uni.showToast({duration:2e3,icon:"none",title:t})}),50)}function c(e){setTimeout((function(){uni.showToast({title:e})}),50)}function s(e){var t=["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"];return e.replace(new RegExp(t.join("|"),"g"),"")}function d(e){return l(e,"分","秒")}function l(e,t,n){if(e=e%6e4/1e3,e>-1){var o=Math.floor(e/60),i=Math.floor(e%60);return o<=0?i+n:o+t+i+n}return 0+n}function f(){var e=getCurrentPages(),t=(e[e.length-1],e[e.length-2]);return t}function g(e){return e.replace(/(^\s*)|(\s*$)/g,"")}n("a15b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("498a"),e.exports.formatTimeSecond=d,e.exports.formatTimeSecondWithSign=l,e.exports.formatTime=i,e.exports.formatDate=a,e.exports.isTelCode=r,e.exports.showError=u,e.exports.showSuccess=c,e.exports.filterEmoji=s,e.exports.getPreviousPage=f,e.exports.trim=g},6391:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,".h-login--page[data-v-ed0d1e94]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#f0f2f6}.h-login--page .circle[data-v-ed0d1e94]{position:absolute;left:%?-152?%;top:%?-2?%;width:%?272?%;height:%?272?%;border-radius:50%;background:#f0f2f6;box-shadow:%?16?% %?22?% %?44?% 0 rgba(209,215,222,.5),%?-14?% %?-14?% %?30?% 0}.login-content[data-v-ed0d1e94]{padding-top:%?88?%}.login-content .logo-area[data-v-ed0d1e94]{margin:%?40?% auto 0;width:%?424?%;height:%?350?%}.login-content .logo-area uni-image[data-v-ed0d1e94]{width:%?424?%;height:%?350?%}.login-content .account-area[data-v-ed0d1e94]{margin:%?-36?% auto 0;padding:%?80?% %?48?% %?100?%;width:%?654?%;height:%?700?%;background:#f0f2f6;box-shadow:%?16?% %?22?% %?44?% 0 #d1d7de,%?-14?% %?-14?% %?30?% 0 #fff;border-radius:%?24?%;background-color:#f0f2f6;box-sizing:border-box}.login-content .account-area .label[data-v-ed0d1e94]{font-size:%?28?%;color:#666;line-height:%?28?%}.login-content .account-area .value[data-v-ed0d1e94]{margin-top:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.login-content .account-area .value uni-input[data-v-ed0d1e94]{border:none;outline:none;width:100%;padding:0 0 %?10?%;font-size:%?32?%;height:%?40?%;line-height:%?38?%;color:#464646;border-bottom:%?2?% solid hsla(0,0%,83.1%,.8);border-radius:0;background-color:#f0f2f6;box-sizing:border-box}.login-content .account-area .yzm[data-v-ed0d1e94]{margin-top:%?72?%}.login-content .account-area .getcode-btn[data-v-ed0d1e94]{margin-top:%?-28?%;padding:%?18?% 0;width:%?232?%;font-size:%?24?%;color:#464646;text-align:center;border-radius:%?36?%;border:%?2?% solid hsla(0,0%,59.2%,.2)}.login-content .account-area .value .code[data-v-ed0d1e94]{width:48%}.login-content .account-area .login-btn[data-v-ed0d1e94]{margin:%?84?% auto 0;width:%?560?%;height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;font-size:%?32?%;border-radius:%?8?%;background-color:#464646}",""]),e.exports=t},aa2d:function(e,t,n){"use strict";var o=n("4ea4");n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("537e")),a=n("3b7d"),r=n("aa5f"),u=getApp(),c={data:function(){return{phone:"",yzm:"",timer:null,time:60,getCodeBtnWords:"获取验证码"}},onLoad:function(){},onShow:function(){},methods:{_handleFormatPhoneNumber:function(e){this.phone=e.replace(/[^\d.]/g,"")},_handleFormatYzmCode:function(e){this.yzm=e.replace(/[^\d.]/g,"")},getYzmCode:function(){var e=this;i.default.isTelCode(this.phone)&&!this.timer?(0,a.get)({url:r.h5_get_yzm_code+this.phone,success:function(t){e.timer&&clearInterval(e.timer),e.timer=setInterval((function(){e.time>1?(e.time--,e.getCodeBtnWords=e.time+"s后再次获取"):(clearInterval(e.timer),e.timer=null,e.time=60,e.getCodeBtnWords="获取验证码")}),1e3)},fail:function(){setTimeout((function(){uni.showToast({icon:"none",title:"获取验证码失败"})}),50)}}):this.timer||setTimeout((function(){uni.showToast({icon:"none",title:"请输入正确手机号"})}),50)},login:function(){var e=this;(0,a.post)({url:r.h5_login,params:{phone:this.phone,phoneCode:this.yzm},success:function(t){e.setlocalStorage({token:t.token,userAccout:t.account,userId:t.userId,phone:t.phone,currentUser:JSON.stringify(t)}),u.globalData.loginSuccess(t.token,t.userId,t.name,t.userType,t.auth,t.phone,t.icon,t.joinCompany,t.userCompanyType),uni.reLaunch({url:"/pages/home/home"})},fail:function(e){uni.showToast({icon:"none",title:e})}})},setlocalStorage:function(e){for(var t in e)localStorage.setItem(t,e[t])}},destroyed:function(){this.timer&&clearInterval(this.timer)}};t.default=c},e690:function(e,t,n){"use strict";var o=n("348d"),i=n.n(o);i.a},eeb9:function(e,t,n){"use strict";n.r(t);var o=n("aa2d"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a}}]);