(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-addCompany-index"],{"0d17":function(t,e,n){var i=n("69a4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("59d14a46",i,!0,{sourceMap:!1,shadowMode:!1})},"0efa":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"add-person--page"},[n("v-uni-view",{staticClass:"title"},[t._v("输入信息")]),n("v-uni-view",{staticClass:"value-list"},[n("v-uni-view",{staticClass:"list-item"},[n("v-uni-text",{staticClass:"sub-tit"},[t._v("公司")]),n("v-uni-input",{attrs:{type:"text",placeholder:"请输入",value:t.companyName},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInputCompanyNameFun.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlurCompanyNameFun.apply(void 0,arguments)}}}),n("v-uni-view",{class:"suggest-list "+(t.companySuggests?"show":"")},t._l(t.companySuggests,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item",attrs:{"data-item":e},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleSelectCompanySuggestFun.apply(void 0,arguments)}}},[t._v(t._s(e.name)+" - "+t._s(e.phone))])})),1)],1),n("v-uni-view",{staticClass:"list-item"},[n("v-uni-text",{staticClass:"sub-tit"},[t._v("经办人姓名")]),n("v-uni-input",{attrs:{type:"text",placeholder:"请输入",value:t.name},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInputUserNameFun.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlurUserNameFun.apply(void 0,arguments)}}}),n("v-uni-view",{class:"suggest-list "+(t.suggests?"show":"")},t._l(t.suggests,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item",attrs:{"data-item":e},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleSelectPersonSuggestFun.apply(void 0,arguments)}}},[t._v(t._s(e.name)+" - "+t._s(e.phone))])})),1)],1),n("v-uni-view",{staticClass:"list-item"},[n("v-uni-text",{staticClass:"sub-tit"},[t._v("经办人账号")]),n("v-uni-input",{attrs:{type:"number",maxlength:"11",value:t.phone,placeholder:"请输入"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInputUserPhoneFun.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"btn-group"},[n("v-uni-view",{staticClass:"cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBackFun.apply(void 0,arguments)}}},[t._v("撤回")]),n("v-uni-view",{class:"confirm "+(t.canNext?"canNext":""),on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleConfirmFun.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},o=[]},"0fe3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.confirm_contract_launch_by_template=e.get_template_detail=e.get_templateList=e.get_signal_sign_person_list=void 0;var i=n("3b7d"),a=i.host+"/v1/contacts/findContacts";e.get_signal_sign_person_list=a;var o=i.host+"/v1/contract/template/templateList";e.get_templateList=o;var s=i.host+"/v1/contract/template/detail";e.get_template_detail=s;var u=i.host+"/v1/contract/template/launch";e.confirm_contract_launch_by_template=u},"1b33":function(t,e,n){"use strict";n.r(e);var i=n("53c4"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"537e":function(t,e,n){function i(t){return t=t.toString(),t[1]?t:"0"+t}function a(t,e){var n=new Date(t);return o(n,e)}function o(t,e){var n=["Y","M","D","h","m","s"],a=[];for(var o in a.push(t.getFullYear()),a.push(i(t.getMonth()+1)),a.push(i(t.getDate())),a.push(i(t.getHours())),a.push(i(t.getMinutes())),a.push(i(t.getSeconds())),a)e=e.replace(n[o],a[o]);return e}function s(t){var e=/^[1][3,4,5,7,8][0-9]{9}$/;return e.test(t)}function u(t){var e="出错了";"string"===typeof t?e=t:t.errMsg&&(e=t.errMsg),setTimeout((function(){uni.showToast({duration:2e3,icon:"none",title:e})}),50)}function r(t){setTimeout((function(){uni.showToast({title:t})}),50)}function c(t){var e=["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"];return t.replace(new RegExp(e.join("|"),"g"),"")}function l(t){return f(t,"分","秒")}function f(t,e,n){if(t=t%6e4/1e3,t>-1){var i=Math.floor(t/60),a=Math.floor(t%60);return i<=0?a+n:i+e+a+n}return 0+n}function p(){var t=getCurrentPages(),e=(t[t.length-1],t[t.length-2]);return e}function m(t){return t.replace(/(^\s*)|(\s*$)/g,"")}n("a15b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("498a"),t.exports.formatTimeSecond=l,t.exports.formatTimeSecondWithSign=f,t.exports.formatTime=a,t.exports.formatDate=o,t.exports.isTelCode=s,t.exports.showError=u,t.exports.showSuccess=r,t.exports.filterEmoji=c,t.exports.getPreviousPage=p,t.exports.trim=m},"53c4":function(t,e,n){"use strict";n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("3b7d"),a=n("0fe3"),o=n("aa5f"),s=n("537e"),u={data:function(){return{companySuggests:[],suggests:[],timer:null,companyName:"",name:"",phone:"",id:"",canNext:!1,index:-1}},components:{},props:{},onLoad:function(t){this.setData({id:t.id,index:t.index,companyName:t.companyName||"",name:t.name||"",phone:t.phone||""})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{handleInputCompanyNameFun:function(t){var e=this,n=t.detail.value.trim();n&&(this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){e.setData({companyName:n,canNext:!!(e.name&&e.phone&&n)}),e.getContactList(n,2)}),250)}))},handleInputUserNameFun:function(t){var e=this,n=t.detail.value.trim();n&&(this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){e.setData({name:n,canNext:!(!n||!e.phone)}),e.getContactList(n,1)}),250)}))},handleInputUserPhoneFun:function(t){var e=this,n=t.detail.value;n&&(this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){e.setData({phone:n,canNext:!(!e.name||!n)})}),250)}))},handleBlurUserNameFun:function(){var t=this;setTimeout((function(){t.setData({suggests:[]})}),250)},handleBlurCompanyNameFun:function(){var t=this;setTimeout((function(){t.setData({companySuggests:[]})}),250)},getContactList:function(t,e){var n=this;this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){(0,i.get)({url:a.get_signal_sign_person_list+"?contactType=1&name="+t+"&contactType="+e,success:function(t){1==e&&n.setData({suggests:t}),2==e&&n.setData({companySuggests:t})},fail:function(t){console.log(t)}})}),500)})},handleSelectPersonSuggestFun:function(t){var e=t.currentTarget.dataset.item;this.setData({name:e.name,phone:e.phone,suggests:[],canNext:!!(e.name&&e.phone&&this.companyName)})},handleSelectCompanySuggestFun:function(t){var e=t.currentTarget.dataset.item;this.setData({companyName:e.name,companySuggests:[],canNext:!!(this.name&&this.phone&&e.companyName)})},handleBackFun:function(){uni.navigateBack(-1)},handleConfirmFun:function(){var t=this;if(!this.companyName)return setTimeout((function(){uni.showToast({icon:"none",title:"请填写公司名称"})}),50),!1;if(!this.name)return setTimeout((function(){uni.showToast({icon:"none",title:"请填写经办人姓名"})}),50),!1;if(!this.phone)return setTimeout((function(){uni.showToast({icon:"none",title:"请填写经办人账号"})}),50),!1;if(!s.isTelCode(this.phone))return setTimeout((function(){uni.showToast({icon:"none",title:"请填写正确手机号"})}),50),!1;if(this.index>-1){uni.showLoading({title:"获取认证信息中"});var e=-1,n=-1;(0,i.get)({url:o.company_message+"?companyName="+this.companyName,success:function(a){console.log(a),e=a,(0,i.get)({url:o.person_message+"?name="+t.name+"&phone="+t.phone,success:function(i){n=i,uni.redirectTo({url:"/pages/template/useTemplate/index?origin=company&operate=edit&index="+t.index+"&companyName="+t.companyName+"&name="+t.name+"&phone="+t.phone+"&id="+t.id+"&personAuthStatus="+n+"&companyAuthStatus="+e})},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)},complete:function(){uni.hideLoading()}})},fail:function(t){setTimeout((function(){uni.showToast({title:t})}),50)},complete:function(){uni.hideLoading()}})}else uni.redirectTo({url:"/pages/template/useTemplate/index?origin=company&operate=add&index="+this.index+"&companyName="+this.companyName+"&name="+this.name+"&phone="+this.phone+"&id="+this.id})}}};e.default=u},"69a4":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\nuni-view[data-v-68e6f955]{box-sizing:border-box}.title[data-v-68e6f955]{padding:0 %?48?%;height:%?110?%;line-height:%?110?%;font-size:%?32?%;font-family:PingFangSC-Medium\\, PingFang SC;font-weight:500;color:#333}.value-list[data-v-68e6f955]{background-color:#fff}.suggest-list[data-v-68e6f955]{position:absolute;top:%?112?%;left:%?-48?%;-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0;padding:0 %?48?%;width:calc(100% + %?96?%);background-color:#fff;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;box-shadow:%?4?% 0 %?4?% #eee;z-index:11}.suggest-list.show[data-v-68e6f955]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.suggest-list .item[data-v-68e6f955]{height:%?110?%;line-height:%?110?%;font-size:%?32?%;color:#666}.list-item[data-v-68e6f955]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 %?48?%;height:%?110?%;border-bottom:%?2?% solid #f5f5f5}.list-item[data-v-68e6f955]:last-of-type{border-bottom:none}.list-item .sub-tit[data-v-68e6f955]{font-size:%?30?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#212121;line-height:%?30?%}.list-item uni-input[data-v-68e6f955]{width:70%;font-size:%?30?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#212121;line-height:%?30?%;text-align:right}.btn-group[data-v-68e6f955]{position:absolute;bottom:%?100?%;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.btn-group .cancel[data-v-68e6f955]{width:%?220?%;height:%?100?%;line-height:%?100?%;text-align:center;font-size:%?32?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#666}.btn-group .confirm[data-v-68e6f955]{width:%?460?%;height:%?100?%;line-height:%?100?%;background:#999;border-radius:%?8?%;text-align:center;font-size:%?32?%;font-family:PingFangSC-Medium\\, PingFang SC;font-weight:500;color:#fff}.canNext[data-v-68e6f955]{background-color:#464646!important}body.?%PAGE?%[data-v-68e6f955]{background-color:#f7f8f9}",""]),t.exports=e},"9ea7":function(t,e,n){"use strict";n.r(e);var i=n("0efa"),a=n("1b33");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("ac89");var s,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"68e6f955",null,!1,i["a"],s);e["default"]=r.exports},ac89:function(t,e,n){"use strict";var i=n("0d17"),a=n.n(i);a.a}}]);