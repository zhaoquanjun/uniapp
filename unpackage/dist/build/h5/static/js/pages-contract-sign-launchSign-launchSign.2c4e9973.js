(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contract-sign-launchSign-launchSign"],{"2b0d":function(t,e,i){"use strict";i.r(e);var n=i("7822"),a=i("9200");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b663");var s,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"ad4907d2",null,!1,n["a"],s);e["default"]=l.exports},"537e":function(t,e,i){function n(t){return t=t.toString(),t[1]?t:"0"+t}function a(t,e){var i=new Date(t);return o(i,e)}function o(t,e){var i=["Y","M","D","h","m","s"],a=[];for(var o in a.push(t.getFullYear()),a.push(n(t.getMonth()+1)),a.push(n(t.getDate())),a.push(n(t.getHours())),a.push(n(t.getMinutes())),a.push(n(t.getSeconds())),a)e=e.replace(i[o],a[o]);return e}function s(t){var e=/^[1][3,4,5,7,8][0-9]{9}$/;return e.test(t)}function r(t){var e="出错了";"string"===typeof t?e=t:t.errMsg&&(e=t.errMsg),setTimeout((function(){uni.showToast({duration:2e3,icon:"none",title:e})}),50)}function l(t){setTimeout((function(){uni.showToast({title:t})}),50)}function c(t){var e=["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"];return t.replace(new RegExp(e.join("|"),"g"),"")}function d(t){return u(t,"分","秒")}function u(t,e,i){if(t=t%6e4/1e3,t>-1){var n=Math.floor(t/60),a=Math.floor(t%60);return n<=0?a+i:n+e+a+i}return 0+i}function f(){var t=getCurrentPages(),e=(t[t.length-1],t[t.length-2]);return e}function h(t){return t.replace(/(^\s*)|(\s*$)/g,"")}i("a15b"),i("d3b7"),i("4d63"),i("ac1f"),i("25f0"),i("5319"),i("498a"),t.exports.formatTimeSecond=d,t.exports.formatTimeSecondWithSign=u,t.exports.formatTime=a,t.exports.formatDate=o,t.exports.isTelCode=s,t.exports.showError=r,t.exports.showSuccess=l,t.exports.filterEmoji=c,t.exports.getPreviousPage=f,t.exports.trim=h},"75aa":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\n.theme-title[data-v-ad4907d2]{padding:%?0?% %?48?%;font-size:%?32?%;color:#333;font-weight:500;height:%?110?%;line-height:%?110?%}.input-name-box[data-v-ad4907d2]{position:relative;width:100%;padding-bottom:%?60?%;background-color:#fff}.input-name-box uni-textarea[data-v-ad4907d2]{min-height:%?112?%;width:%?654?%;margin-right:%?48?%;margin-left:%?48?%;padding-top:%?32?%;font-size:%?28?%}.input-tip[data-v-ad4907d2]{font-size:%?24?%;position:absolute;right:%?48?%;bottom:%?32?%;color:#999}.file-title[data-v-ad4907d2]{padding:%?0?% %?48?%;font-size:%?32?%;color:#333;font-weight:500;height:%?110?%;line-height:%?110?%}.file-view[data-v-ad4907d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;height:%?112?%;line-height:%?112?%;padding-left:%?48?%;padding-right:%?48?%;background:#fff;font-size:%?28?%;color:#6e87b8}.file-name[data-v-ad4907d2]{margin-left:%?16?%;max-width:%?560?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.file-format[data-v-ad4907d2]{font-family:PingFangSC-Medium,PingFang SC;font-weight:500}.file-image[data-v-ad4907d2]{width:%?36?%;height:%?36?%}.linkman-title[data-v-ad4907d2]{padding:%?0?% %?48?%;font-size:%?32?%;color:#333;font-weight:500;height:%?110?%;line-height:%?110?%}.linkman-add-sponsor[data-v-ad4907d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;height:%?112?%;padding-left:%?48?%;padding-right:%?48?%;font-size:%?30?%;font-weight:400}.linkman-add-sponsor .sponsor[data-v-ad4907d2]{max-width:%?420?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.linkman-add-sponsor .right[data-v-ad4907d2]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;color:#999;font-weight:400}.linkman-add-sponsor .right .one[data-v-ad4907d2]{position:relative;top:%?4?%;left:%?8?%}  \n/*\n.linkman-item{\n  position: relative;\n  float: left;\n  margin-top: 20rpx;\n  margin-left: 48rpx;\n  height: 182rpx;\n  width: 132rpx;\n}\n.linkman-icon{\n  position: absolute;\n  width: 120rpx;\n  height: 120rpx;\n  top: 12rpx;\n  left: 0rpx;\n}\n.item-one-row{\n  margin-top: 0rpx;\n}\n.item-one-line{\n  margin-left: 0rpx;\n}\n.bottom{\n  float: left;\n  width: 100%;\n  height: 96rpx;\n  margin-left: 32rpx;\n}*/.nextButton[data-v-ad4907d2]{position:fixed;bottom:%?40?%;width:%?670?%;margin-left:%?40?%;height:%?96?%;line-height:%?96?%;font-size:%?32?%;font-weight:500;color:#fff;text-align:center;border-radius:%?8?%}.user-dialog__mask[data-v-ad4907d2]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:10;background:rgba(0,0,0,.5);display:none}.user-dialog__container[data-v-ad4907d2]{position:fixed;top:%?240?%;width:%?606?%;/*弹窗布局宽*/min-height:%?458?%;/*弹窗布局高，与下面弹出距离transform有关*/margin-left:%?72?%;background:#fff;-webkit-transform:translateY(-200%);transform:translateY(-200%);/*弹框弹出距离，与弹框布局高度有关，如300%表示弹起距离为3倍弹窗高度*/-webkit-transition:all .2s ease-in;transition:all .2s ease-in;z-index:12;border-radius:%?12?%}.user-dialog--show .user-dialog__container[data-v-ad4907d2]{-webkit-transform:translateY(0);transform:translateY(0)}.user-dialog--show .user-dialog__mask[data-v-ad4907d2]{display:block}.userSwitch[data-v-ad4907d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:%?16?% %?48?% %?0?% %?48?%;height:%?96?%;line-height:%?96?%;color:#999;font-size:%?28?%;border-bottom:%?2?% solid #eee}.company[data-v-ad4907d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?158?%;color:#6e82a9}.company-icon[data-v-ad4907d2]{width:%?28?%;height:%?28?%;margin-top:%?34?%}.company-add[data-v-ad4907d2]{width:75%;text-align:right}.userList[data-v-ad4907d2]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?108?%;margin:%?0?% %?48?%;font-size:%?30?%;font-weight:400;color:#333;border-bottom:%?2?% solid #f5f5f5}.userList-icon[data-v-ad4907d2]{margin-top:%?34?%;width:%?40?%;height:%?40?%}.userList-name[data-v-ad4907d2]{margin-top:%?34?%;margin-left:%?16?%;width:%?328?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.userList-state[data-v-ad4907d2]{width:%?92?%;height:%?40?%;line-height:%?40?%;font-size:%?20?%;background-color:rgba(62,180,168,.1);color:#3eb4a8;margin-top:%?32?%;margin-left:%?32?%;text-align:center;font-weight:600}.scroll-under[data-v-ad4907d2]{height:%?32?%}body.?%PAGE?%[data-v-ad4907d2]{background-color:#f7f8f9}",""]),t.exports=e},7822:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"pageContent"},[i("v-uni-view",{staticClass:"pageHeader"},[i("v-uni-view",{staticClass:"theme-title"},[t._v(t._s(t.themeTitle))]),i("v-uni-view",{staticClass:"input-name-box"},[i("v-uni-textarea",{attrs:{name:"content",maxlength:"100",placeholder:"请不要包括特殊字符，且长度不要超过100字"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.textInput.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"input-tip"},[t._v(t._s(t.contractTitle.length)+"/100")])],1)],1),i("v-uni-view",{staticClass:"file-content"},[i("v-uni-text",{staticClass:"file-title"},[t._v(t._s(t.fileTitle))]),i("v-uni-view",{staticClass:"file-view",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.checkFileAction.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"file-image",attrs:{src:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/file.png"}}),i("v-uni-text",{staticClass:"file-name text-apostrophe"},[t._v(t._s(t.fileName))]),i("v-uni-text",{staticClass:"file-format text-apostrophe"})],1)],1),i("v-uni-view",{staticClass:"file-signer"},[i("v-uni-text",{staticClass:"linkman-title"},[t._v(t._s(t.linkmanTitle))]),i("v-uni-view",{staticClass:"linkman-add-sponsor"},[i("v-uni-text",{staticClass:"sponsor"},[t._v(t._s(t.sponsor))])],1)],1),t.ishighLight?i("v-uni-button",{staticClass:"nextButton",staticStyle:{"background-color":"#464646"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.launchSignAction.apply(void 0,arguments)}}},[t._v(t._s(t.signText))]):t._e(),t.ishighLight?t._e():i("v-uni-button",{staticClass:"nextButton",staticStyle:{background:"#B7B7B7"}},[t._v(t._s(t.signText))])],1),i("v-uni-view",{class:"user-dialog "+(t.showDialog?"user-dialog--show":"")},[i("v-uni-view",{staticClass:"user-dialog__mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleDialog.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"user-dialog__container"},[i("v-uni-view",{staticClass:"userSwitch"},[t._v("切换身份")]),i("v-uni-scroll-view",{staticStyle:{height:"540rpx"},attrs:{"scroll-y":!0,nowrap:!0}},t._l(t.companyList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"userList",attrs:{"data-item":e,"data-index":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseSponsor.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"userList-icon",attrs:{src:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/user.png"}}),i("v-uni-view",{staticClass:"userList-name"},[t._v(t._s(e.companyName))])],1)})),1),i("v-uni-view",{staticClass:"scroll-under"})],1)],1)],1)},o=[]},"82f3":function(t,e,i){i("c975"),i("fb6a"),i("a434");var n=i("537e");Array.prototype.remove=function(t){var e=this.indexOf(t);e>-1&&this.splice(e,1)},String.prototype.hiddenCardId=function(t,e){for(var i=this.length-t-e,n="",a=0;a<i;a++)n+="*";return this.substr(0,t)+n+this.substr(this.length-e)},String.prototype.firstLogicChar=function(){var t=this;if(!t||0===t.length)return"#";if(1===t.length)return t;var e=n.filterEmoji(t),i=t.indexOf(e);return 0!==e.length&&0===i?t.slice(0,1).toUpperCase():t.slice(0,2)}},"8ab6":function(t,e,i){var n=i("75aa");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("33c1b9b0",n,!0,{sourceMap:!1,shadowMode:!1})},9200:function(t,e,i){"use strict";i.r(e);var n=i("b2c2"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},b2c2:function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("3b7d"),a=i("aa5f");i("82f3");i("537e");var o=getApp(),s={data:function(){return{showDialog:!1,ishighLight:!1,contractTitle:"",contractInfo:null,sponsor:"",linkmans:[],themeTitle:"合同主题",theme:"",fileTitle:"合同文件",fileName:"",url:"",linkmanTitle:"发起方",signText:"下一步",isScanOpen:!1,companyList:"",currentUser:"",coverUrl:"",backfileName:"",filePath:""}},components:{},props:{},onLoad:function(t){console.log(o.globalData);var e=o.globalData.userName;this.setData({fileName:t.fileName,url:t.url,coverUrl:t.coverUrl,backfileName:t.backfileName});var i=uni.getStorageSync("currentUser");i?this.setData({currentUser:i}):this.setData({sponsor:e}),i.name&&this.setData({sponsor:i.name}),i.companyName&&this.setData({sponsor:i.companyName})},onShow:function(){},onShareAppMessage:function(){},methods:{chooseSponsor:function(){var t=this;(0,n.get)({url:a.companyList,success:function(e){var i=[];e.data.forEach((function(t){1==t.authStatus&&i.push(t)})),t.setData({companyList:i})}}),this.setData({showDialog:!this.showDialog})},chooseCompany:function(t){var e=t.currentTarget.dataset.item;console.log(e),this.setData({sponsor:e.companyName,showDialog:!1})},toggleDialog:function(){this.setData({showDialog:!this.showDialog})},textInput:function(t){var e=t.detail.value;this.setData({contractTitle:e}),this.getHighLight()},setDataFun:function(t){this.setData({fileName:t.fileName,filePath:t.url})},setLinkmanFun:function(t){this.setData({linkmans:t})},bindKeyInput:function(t){this.setData({theme:t.detail.value})},checkFileAction:function(){uni.showLoading({title:"下载中..."});var t=this.url;this.openPdf(t)},openPdf:function(t){uni.downloadFile({url:t,success:function(t){uni.hideLoading();var e=t.tempFilePath;uni.openDocument({filePath:e,fileType:"pdf",showMenu:!0,success:function(t){},fail:function(t){console.log(t)},complete:function(t){console.log(t)}})},fail:function(t){uni.hideLoading(),console.log(t)},complete:function(t){}})},launchSignAction:function(){var t={contractTitle:this.contractTitle,fileName:this.fileName,url:this.url,coverUrl:this.coverUrl};uni.setStorageSync("contractData",t),uni.navigateTo({url:"/pages/contract/sign/next/next"})},getHighLight:function(){this.contractTitle&&this.fileName?this.setData({ishighLight:!0}):this.setData({ishighLight:!1})}}};e.default=s},b663:function(t,e,i){"use strict";var n=i("8ab6"),a=i.n(n);a.a}}]);