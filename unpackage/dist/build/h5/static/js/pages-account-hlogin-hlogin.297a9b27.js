(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-account-hlogin-hlogin"],{"1bdd":function(t,e,n){var o=n("e156");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("7cd2b06c",o,!0,{sourceMap:!1,shadowMode:!1})},"1d22":function(t,e,n){"use strict";var o=n("1bdd"),i=n.n(o);i.a},"1f8c":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"h-login--page"},[n("v-uni-view",{staticClass:"login-content"},[n("v-uni-view",{staticClass:"logo-area"},[n("v-uni-image",{attrs:{src:"/static/images/pm/miniH5_login.png",mode:""}})],1),n("v-uni-view",{staticClass:"account-area"},[n("v-uni-view",{staticClass:"label"},[t._v("手机号")]),n("v-uni-view",{staticClass:"value"},[n("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"label yzm"},[t._v("验证码")]),n("v-uni-view",{staticClass:"value"},[n("v-uni-input",{staticClass:"code",attrs:{type:"number",maxlength:"6",placeholder:"请输入验证码"},model:{value:t.yzm,callback:function(e){t.yzm=e},expression:"yzm"}}),n("v-uni-view",{staticClass:"getcode-btn",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getYzmCode.apply(void 0,arguments)}}},[t._v(t._s(t.getCodeBtnWords))])],1),n("v-uni-view",{staticClass:"login-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("登录")])],1)],1),n("v-uni-view",{staticClass:"circle"})],1)},a=[]},"266c":function(t,e,n){"use strict";n.r(e);var o=n("1f8c"),i=n("eeb9");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("1d22");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"1307dc62",null,!1,o["a"],r);e["default"]=s.exports},"537e":function(t,e,n){function o(t){return t=t.toString(),t[1]?t:"0"+t}function i(t,e){var n=new Date(t);return a(n,e)}function a(t,e){var n=["Y","M","D","h","m","s"],i=[];for(var a in i.push(t.getFullYear()),i.push(o(t.getMonth()+1)),i.push(o(t.getDate())),i.push(o(t.getHours())),i.push(o(t.getMinutes())),i.push(o(t.getSeconds())),i)e=e.replace(n[a],i[a]);return e}function r(t){var e=/^[1][3,4,5,7,8][0-9]{9}$/;return e.test(t)}function c(t){var e="出错了";"string"===typeof t?e=t:t.errMsg&&(e=t.errMsg),setTimeout((function(){uni.showToast({duration:2e3,icon:"none",title:e})}),50)}function s(t){setTimeout((function(){uni.showToast({title:t})}),50)}function u(t){var e=["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"];return t.replace(new RegExp(e.join("|"),"g"),"")}function l(t){return d(t,"分","秒")}function d(t,e,n){if(t=t%6e4/1e3,t>-1){var o=Math.floor(t/60),i=Math.floor(t%60);return o<=0?i+n:o+e+i+n}return 0+n}function f(){var t=getCurrentPages(),e=(t[t.length-1],t[t.length-2]);return e}function g(t){return t.replace(/(^\s*)|(\s*$)/g,"")}n("a15b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("498a"),t.exports.formatTimeSecond=l,t.exports.formatTimeSecondWithSign=d,t.exports.formatTime=i,t.exports.formatDate=a,t.exports.isTelCode=r,t.exports.showError=c,t.exports.showSuccess=s,t.exports.filterEmoji=u,t.exports.getPreviousPage=f,t.exports.trim=g},aa2d:function(t,e,n){"use strict";var o=n("4ea4");n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("537e")),a=n("3b7d"),r=n("aa5f"),c={data:function(){return{phone:"",yzm:"",timer:null,time:60,getCodeBtnWords:"获取验证码"}},onLoad:function(){},onShow:function(){},methods:{_handleFormatPhoneNumber:function(t){this.phone=t.replace(/[^\d.]/g,"")},_handleFormatYzmCode:function(t){this.yzm=t.replace(/[^\d.]/g,"")},getYzmCode:function(){var t=this;i.default.isTelCode(this.phone)&&!this.timer?(0,a.get)({url:r.h5_get_yzm_code+this.phone,success:function(e){t.timer&&clearInterval(t.timer),t.timer=setInterval((function(){t.time>1?(t.time--,t.getCodeBtnWords=t.time+"s后再次获取"):(clearInterval(t.timer),t.timer=null,t.time=60,t.getCodeBtnWords="获取验证码")}),1e3)},fail:function(){setTimeout((function(){uni.showToast({icon:"none",title:"获取验证码失败"})}),50)}}):this.timer||setTimeout((function(){uni.showToast({icon:"none",title:"请输入正确手机号"})}),50)},login:function(){var t=this;(0,a.post)({url:r.h5_login,params:{phone:this.phone,phoneCode:this.yzm},success:function(e){t.setlocalStorage({token:e.token,userAccout:e.account,userId:e.userId,phone:e.phone}),console.log("/pages/home/home"),uni.navigateTo({url:"/pages/home/home"})},fail:function(t){uni.showToast({icon:"none",title:t})}})},setlocalStorage:function(t){for(var e in t)localStorage.setItem(e,t[e])}},destroyed:function(){this.timer&&clearInterval(this.timer)}};e.default=c},e156:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".h-login--page[data-v-1307dc62]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#f0f2f6}.h-login--page .circle[data-v-1307dc62]{position:absolute;left:%?-152?%;top:%?-2?%;width:%?272?%;height:%?272?%;border-radius:50%;background:#f0f2f6;box-shadow:%?16?% %?22?% %?44?% 0 rgba(209,215,222,.5),%?-14?% %?-14?% %?30?% 0}.login-content[data-v-1307dc62]{padding-top:%?88?%}.login-content .logo-area[data-v-1307dc62]{margin:%?40?% auto 0;width:%?424?%;height:%?350?%}.login-content .logo-area uni-image[data-v-1307dc62]{width:%?424?%;height:%?350?%}.login-content .account-area[data-v-1307dc62]{margin:%?-36?% auto 0;padding:%?80?% %?48?% %?100?%;width:%?654?%;height:%?700?%;background:#f0f2f6;box-shadow:%?16?% %?22?% %?44?% 0 #d1d7de,%?-14?% %?-14?% %?30?% 0 #fff;border-radius:%?24?%;background-color:#f0f2f6;box-sizing:border-box}.login-content .account-area .label[data-v-1307dc62]{font-size:%?28?%;color:#666;line-height:%?28?%}.login-content .account-area .value[data-v-1307dc62]{margin-top:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.login-content .account-area .value uni-input[data-v-1307dc62]{border:none;outline:none;width:100%;padding:0 0 %?10?%;font-size:%?32?%;height:%?40?%;line-height:%?38?%;color:#464646;border-bottom:%?2?% solid hsla(0,0%,83.1%,.8);border-radius:0;background-color:#f0f2f6;box-sizing:border-box}.login-content .account-area .yzm[data-v-1307dc62]{margin-top:%?72?%}.login-content .account-area .getcode-btn[data-v-1307dc62]{padding:%?18?% 0;width:%?232?%;font-size:%?24?%;color:#464646;text-align:center;border-radius:%?36?%;border:%?2?% solid hsla(0,0%,59.2%,.2)}.login-content .account-area .value .code[data-v-1307dc62]{width:48%}.login-content .account-area .login-btn[data-v-1307dc62]{margin:%?84?% auto 0;width:%?560?%;height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;font-size:%?32?%;border-radius:%?8?%;background-color:#464646}",""]),t.exports=e},eeb9:function(t,e,n){"use strict";n.r(e);var o=n("aa2d"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a}}]);