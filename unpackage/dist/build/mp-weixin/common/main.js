(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0708":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("3b7d"),r=n("aa5f"),a={onShow:function(e){this.globalData.loadUserInfo()},onError:function(e){console.log(e)},globalData:{userToken:null,userId:"",userName:"",userType:1,isAuth:!1,avatar:"",phone:"",lastUserInfoAuthDate:null,memberCompany:null,memberType:1,activeTab:"sign",env:"dev",hasShowOverdueModal:!1,loginSuccess:function(t,n,o,r,a,s,u,c,i){console.log(t,n,o,r,a,s,u,c,i,21121),this.userToken=t,this.userId=n,this.userName=o,this.userType=r,this.isAuth=1==a,this.phone=s,this.avatar=u,this.memberType=i,e.setStorageSync("userToken",t),e.setStorageSync("userId",n),e.setStorageSync("userName",o),e.setStorageSync("userType",r),e.setStorageSync("isAuth",a),e.setStorageSync("phone",s),e.setStorageSync("avatar",u),e.setStorageSync("memberType",i),null!=c?(this.memberCompany=c,e.setStorageSync("memberCompany",JSON.stringify(c))):e.setStorageSync("memberCompany","")},loadUserInfo:function(){this.userToken=e.getStorageSync("userToken"),this.userId=e.getStorageSync("userId"),this.userName=e.getStorageSync("userName"),this.userType=e.getStorageSync("userType"),this.isAuth=1==e.getStorageSync("isAuth"),this.phone=e.getStorageSync("phone"),this.avatar=e.getStorageSync("avatar"),this.lastUserInfoAuthDate=e.getStorageSync("lastUserInfoAuthDate"),this.memberType=e.getStorageSync("memberType");var t=e.getStorageSync("memberCompany");0!=t.length&&(this.memberCompany=JSON.parse(t))},updateUserIcon:function(t){this.avatar=t,e.setStorageSync("avatar",t);var n=new Date,o=n.getTime();e.setStorageSync("lastUserInfoAuthDate",o),this.lastUserInfoAuthDate=o,console.log(o)},isNeedUpdateUserInfo:function(){if(console.log(this.lastUserInfoAuthDate),null==this.lastUserInfoAuthDate||0==this.lastUserInfoAuthDate.length)return!0;var t=new Date,n=t.getTime(),o=parseInt((this.lastUserInfoAuthDate-n)/864e5);return console.log(n),console.log(o),o>3&&(e.setStorageSync("lastUserInfoAuthDate",n),this.lastUserInfoAuthDate=n,!0)},quitLogin:function(){this.userToken=null,e.clearStorageSync(),e.reLaunch({url:"/pages/account/login/login"})},isLoginIn:function(){return this.userToken&&this.userToken.length>0},login:function(){e.redirectTo({url:"/pages/root/root"})},getUserToken:function(){return this.userToken},authSuccess:function(t,n){e.setStorageSync("userName",userName),e.setStorageSync("userType",n),e.setStorageSync("isAuth",1),this.userName=t,this.userType=n,this.isAuth=!0},updateUserLocal:function(){e.getLocation({type:"wgs84",success:function(e){console.log(e);var t=e.latitude,n=e.longitude;(0,o.post)({url:r.upload_local,params:{latitude:t,longitude:n},success:function(e){console.log("local上传成功")},fail:function(e){console.log("local上传失败")}})}})},updateUserInfo:function(e){var t=this;(0,o.get)({url:r.get_user_info,success:function(n){n&&(console.log(e),t.loginSuccess(n.token,n.userId,n.name,n.userType,n.auth,n.phone,n.icon,n.joinCompany,n.userCompanyType),"function"==typeof e&&e())}})},checkHasAuth:function(){if(console.log(this.isAuth),this.isAuth)return!0;var t=e.getStorageSync("currentUser").companyId,n={title:t?"立即进行企业实名认证":"立即进行个人实名认证",url:t?"/pages/authentication/company/company-auth-type/index":"/pages/authentication/personal/personal-auth-type/index"};return e.showModal({title:n.title,content:"实名认证后可享受加便捷高效的电子合同服务",showCancel:!0,cancelText:"暂不认证",confirmText:"立即认证",success:function(t){if(t.cancel){var o=getCurrentPages();o.length>1&&e.navigateBack(),e.hideLoading({})}else e.navigateTo({url:n.url})}}),!1}},methods:{}};t.default=a}).call(this,n("543d")["default"])},"17bd":function(e,t,n){"use strict";var o=n("3e2b"),r=n.n(o);r.a},"2bff":function(e,t,n){"use strict";(function(e){n("e09c");var t=r(n("66fd")),o=r(n("ba71"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,t.default.mixin({methods:{setData:function(e,t){var n=this,o=function(e,t,n){return t=t.split("."),t.forEach((function(t){if(null===e[t]||void 0===e[t]){var o=/^[0-9]+$/;e[t]=o.test(n)?[]:{},e=e[t]}else e=e[t]})),e},r=function(e){return"function"==typeof e||!1};Object.keys(e).forEach((function(t){var r,a,s=e[t];t=t.replace(/\]/g,"").replace(/\[/g,".");var u=t.lastIndexOf(".");-1!=u?(a=t.slice(u+1),r=o(n,t.slice(0,u),a)):(a=t,r=n),r.$data&&void 0===r.$data[a]?(Object.defineProperty(r,a,{get:function(){return r.$data[a]},set:function(e){r.$data[a]=e,n.$forceUpdate()},enumerable:!0,configurable:!0}),r[a]=s):n.$set(r,a,s)})),r(t)&&this.$nextTick(t)}}}),o.default.mpType="app";var c=new t.default(s({},o.default));e(c).$mount()}).call(this,n("543d")["createApp"])},"3e2b":function(e,t,n){},"6e51":function(e,t,n){"use strict";n.r(t);var o=n("0708"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},ba71:function(e,t,n){"use strict";n.r(t);var o=n("6e51");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("17bd");var a,s,u,c,i=n("f0c5"),l=Object(i["a"])(o["default"],a,s,!1,null,null,null,!1,u,c);t["default"]=l.exports}},[["2bff","common/runtime","common/vendor"]]]);