(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contract-sign-next-companyLink-companyLink"],{"0405":function(t,e,n){"use strict";var a=n("cd72"),i=n.n(a);i.a},1975:function(t,e,n){"use strict";n.r(e);var a=n("fc9b"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},2949:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"\n.item-title[data-v-39bd0057]{padding:%?0?% %?48?%;font-size:%?32?%;color:#333;font-weight:500;height:%?110?%;line-height:%?110?%}.item-Content[data-v-39bd0057]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;height:%?106?%;background-color:#fff;padding-left:%?48?%}.item-Content .search-result--list[data-v-39bd0057]{position:absolute;top:100%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin-top:%?4?%;padding:%?16?% 0;width:100%;opacity:0;border:%?2?% solid #d7d8d9;background-color:#fff;\n  /* box-shadow: 0 8rpx 8rpx #666; */z-index:-11;box-sizing:border-box;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.item-Content .search-result--list .list-item[data-v-39bd0057]{padding:%?24?% %?48?%;font-size:%?32?%;line-height:%?40?%;color:#666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item-Content .search-result--list.show[data-v-39bd0057]{-webkit-transform:translateY(0);transform:translateY(0);z-index:11;opacity:1}.item-Content .message[data-v-39bd0057]{width:%?654?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f5f5f5;font-size:%?30?%;font-weight:400}.item-Content .message uni-input[data-v-39bd0057]{text-align:right}.bottom-btn-container[data-v-39bd0057]{position:fixed;height:%?100?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;bottom:%?40?%;margin-top:%?40?%}.bottom-btn-container .back[data-v-39bd0057]{width:%?160?%;height:%?100?%;font-size:%?32?%;font-weight:400;color:#666;display:inline-block;text-align:center;line-height:%?100?%;margin-left:%?32?%}.bottom-btn-container .next[data-v-39bd0057]{width:%?478?%;text-align:center;display:inline-block;height:%?100?%;line-height:%?100?%;background:#464646;border-radius:%?8?%;color:#fff;margin-left:%?40?%;font-size:%?32?%}body.?%PAGE?%[data-v-39bd0057]{background-color:#f7f8f9}",""]),t.exports=e},"56fb":function(t,e,n){"use strict";n.r(e);var a=n("af67"),i=n("1975");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("0405");var o,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"39bd0057",null,!1,a["a"],o);e["default"]=r.exports},5746:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.get_signal_sign_person_list=e.get_contract_launch=e.get_contract_detail=e.deleteContractEvidenceRel=e.getChainsList=e.saveContractEvidenceRel=e.findNoRelatedContractEvidence=e.saveEvidenceContractRel=e.findNoRelatedContractSubject=e.previewChainImg=e.get_all_contract_list=e.get_contract_list=void 0;var a=n("3b7d"),i=a.host+"/v2/contract/list";e.get_contract_list=i;var s=a.host+"/v2/contract/count";e.get_all_contract_list=s;var o=a.host+"/v1/blockchain/contractCert/preview/";e.previewChainImg=o;var c=a.host+"/v1/contractEvidence/findNoRelatedContractSubject";e.findNoRelatedContractSubject=c;var r=a.host+"/v1/contractEvidence/saveEvidenceContractRel";e.saveEvidenceContractRel=r;var l=a.host+"/v1/contractEvidence/findNoRelatedContractEvidence";e.findNoRelatedContractEvidence=l;var u=a.host+"/v1/contractEvidence/saveContractEvidenceRel";e.saveContractEvidenceRel=u;var d=a.host+"/v1/contractEvidence/findContractEvidence";e.getChainsList=d;var h=a.host+"/v1/contractEvidence/deleteContractEvidenceRel";e.deleteContractEvidenceRel=h;var v=a.host+"/v2/contract/detail";e.get_contract_detail=v;var f=a.host+"/v2/contract/launch";e.get_contract_launch=f;var p=a.host+"/v1/contacts/findContacts";e.get_signal_sign_person_list=p},af67:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"pageContent"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"item-title"},[t._v("输入信息")]),n("v-uni-view",{staticClass:"item-Content"},[n("v-uni-view",{staticClass:"message"},[n("v-uni-text",[t._v("公司")]),n("v-uni-input",{attrs:{type:"text",value:t.companyName,placeholder:"请输入","data-field":"companyName"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlurFun.apply(void 0,arguments)}}})],1),n("v-uni-view",{class:"search-result--list "+(t.searchCompanyResultList.length>0?"show":"")},t._l(t.searchCompanyResultList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"list-item",attrs:{"data-name":e.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectCompanyDataFun.apply(void 0,arguments)}}},[t._v(t._s(e.name))])})),1)],1),n("v-uni-view",{staticClass:"item-Content"},[n("v-uni-view",{staticClass:"message"},[n("v-uni-text",[t._v("经办人姓名")]),n("v-uni-input",{attrs:{type:"text",value:t.userName,placeholder:"请输入","data-field":"userName"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyInput.apply(void 0,arguments)}}})],1),n("v-uni-view",{class:"search-result--list "+(t.searchPersonResultList.length>0?"show":"")},t._l(t.searchPersonResultList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"list-item",attrs:{"data-name":e.name,"data-phone":e.phone},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectPersonDataFun.apply(void 0,arguments)}}},[t._v(t._s(e.name)+" - "+t._s(e.phone))])})),1)],1),n("v-uni-view",{staticClass:"item-Content"},[n("v-uni-view",{staticClass:"message"},[n("v-uni-text",[t._v("经办人手机号")]),n("v-uni-input",{attrs:{type:"text",value:t.userPhone,maxlength:"11",placeholder:"请输入手机号","data-field":"userPhone"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyInput.apply(void 0,arguments)}}})],1)],1)],1),n("v-uni-view",{staticClass:"bottom-btn-container"},[n("v-uni-text",{staticClass:"back",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("返回")]),t.ishighLight?t._e():n("v-uni-text",{staticClass:"next",staticStyle:{background:"#999999"}},[t._v("确定")]),t.ishighLight?n("v-uni-text",{staticClass:"next",staticStyle:{background:"#464646"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.next.apply(void 0,arguments)}}},[t._v("确定")]):t._e()],1)],1)},s=[]},cd72:function(t,e,n){var a=n("2949");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("f6826016",a,!0,{sourceMap:!1,shadowMode:!1})},fc9b:function(t,e,n){"use strict";(function(t){n("a15b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("3b7d"),i=n("5746"),s=n("aa5f"),o={data:function(){return{ishighLight:!1,companyName:"",userName:"",userPhone:"",companyAuth:"",personAuth:"",searchPersonResultList:[],searchCompanyResultList:[],timer:null}},props:{},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{getPersonContactList:function(e){var n=this;this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){(0,a.get)({url:i.get_signal_sign_person_list+"?contactType=1&name="+e,success:function(t){n.setData({searchPersonResultList:t})},fail:function(e){t.log(e)}})}),500)})},getCompanyContactList:function(e){var n=this;this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){(0,a.get)({url:i.get_signal_sign_person_list+"?contactType=2&name="+e,success:function(t){n.setData({searchCompanyResultList:t})},fail:function(e){t.log(e)}})}),500)})},handleSelectPersonDataFun:function(t){var e=this,n=t.target.dataset.name,a=t.target.dataset.phone;setTimeout((function(){e.setData({userName:n,userPhone:a,searchPersonResultList:[]})}),200),setTimeout((function(){e.setData({ishighLight:e.setCanNextFun()})}),300)},handleSelectCompanyDataFun:function(t){var e=this,n=t.target.dataset.name;setTimeout((function(){e.setData({companyName:n,searchCompanyResultList:[]})}),200),setTimeout((function(){e.setData({ishighLight:e.setCanNextFun()})}),300)},handleBlurFun:function(){var t=this;setTimeout((function(){t.setData({searchPersonResultList:[],searchCompanyResultList:[]})}),200)},setCanNextFun:function(){var t=!1;return""!=this.companyName&&""!=this.userPhone&&""!=this.userName&&(t=!0),t},back:function(){uni.navigateBack({})},hasRepeatCompany:function(){var t=uni.getStorageSync("linkMans"),e=!0;if(t.length>0)for(var n=0;n<t.length;n++){var a=t[n];a.companyName&&this.companyName==a.companyName&&a.userName==this.userName&&a.userPhone==this.userPhone&&(e=!1)}return e},next:function(){var t=this,e=this;if(!this.hasRepeatCompany())return setTimeout((function(){uni.showToast({title:"你已添加该签署方信息",icon:"none"})}),50),!1;if(!/^1[345789]\d{9}$/.test(this.userPhone))return setTimeout((function(){uni.showToast({title:"请输入正确的账号",icon:"none"})}),50),!1;var n=new Promise((function(t,n){(0,a.get)({url:s.company_message,params:{companyName:e.companyName},success:function(e){t(e)}})})),i=new Promise((function(t,n){(0,a.get)({url:s.person_message,params:{name:e.userName,phone:e.userPhone},success:function(e){t(e)}})}));Promise.all([n,i]).then((function(e){var n=!1,a=!1,i=[],s="";"1"==e[1]&&(n=!0),"1"==e[0]&&(a=!0),1==t.checked1&&(i.push(2),s+="企业章，"),1==t.checked2&&(i.push(3),s+="法人代表章");var o={companyName:t.companyName,userName:t.userName,userPhone:t.userPhone,processType:4,sealName:s,sealType:i.join(),status:1,relationType:"2",isCompanyAuth:a,isPersonAuth:n},c=uni.getStorageSync("linkMans")||[];c.push(o),uni.setStorageSync("linkMans",c),uni.redirectTo({url:"/pages/contract/sign/next/next"})}))},bindKeyInput:function(t){"companyName"==t.target.dataset.field&&(this.setData({companyName:t.detail.value}),t.detail.value?this.getCompanyContactList(t.detail.value):this.setData({searchCompanyResultList:[]})),"userName"==t.target.dataset.field&&(this.setData({userName:t.detail.value}),t.detail.value?this.getPersonContactList(t.detail.value):this.setData({searchPersonResultList:[]})),"userPhone"==t.target.dataset.field&&this.setData({userPhone:t.detail.value.replace(/[^\d.]/g,"")}),this.setData({ishighLight:this.setCanNextFun()})}}};e.default=o}).call(this,n("5a52")["default"])}}]);