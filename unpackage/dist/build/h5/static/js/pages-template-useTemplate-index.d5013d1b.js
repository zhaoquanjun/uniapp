(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-useTemplate-index"],{"0489":function(t,e,a){"use strict";a("4de4"),a("4160"),a("c975"),a("fb6a"),a("45fc"),a("a434"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("3b7d"),n=a("0fe3"),s=(a("537e"),{data:function(){return{addIcon:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/contract/addsign.png",fileIcon:"/static/images/template/file_icon.png",templateData:null,fileList:[{name:"12312321"}],attachment:[],signEndTime:"",fileEndTime:"",id:"",origin:"",operate:"",index:""}},components:{},props:{},onLoad:function(t){var e=t.id,a=[];this.setData({id:e,origin:t.origin||"",operate:t.operate||"",index:t.index||-1}),"person"==t.origin&&a.push({userName:t.name,userPhone:t.phone,isNew:!0,relationType:1,personAuthStatus:t.personAuthStatus||-1}),"company"==t.origin&&a.push({companyName:t.companyName,userName:t.name,userPhone:t.phone,isNew:!0,relationType:2,personAuthStatus:t.personAuthStatus||-1,companyAuthStatus:t.companyAuthStatus||-1}),this.getTemplateDetailFun(a)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{getTemplateDetailFun:function(t){var e=this;uni.showLoading({title:"加载中"}),(0,i.get)({url:n.get_template_detail+"?contractTemplateId="+this.id,success:function(a){if(console.log(a),a.templateSigns.forEach((function(t){if(t.sealWords=e.conversionSealsFun(t.sealTypes),1==t.templateUserType){var a=uni.getStorageSync("currentUser"),i=uni.getStorageSync("userName"),n=uni.getStorageSync("userAccount");t.companyName=a.companyName,t.userName=i,t.userPhone=n}})),e.origin){var i=uni.getStorageSync("templateCcs"),n=uni.getStorageSync("templateSigns");"add"==e.operate&&i.push(t[0]),a.templateCcs=i,"edit"==e.operate&&(n[e.index].userName=t[0].userName,n[e.index].userPhone=t[0].userPhone,n[e.index].personAuthStatus=t[0].personAuthStatus,"company"==e.origin&&(n[e.index].companyName=t[0].companyName,n[e.index].companyAuthStatus=t[0].companyAuthStatus)),a.templateSigns=n}uni.setStorageSync("templateCcs",a.templateCcs),uni.setStorageSync("templateSigns",a.templateSigns),e.setData({templateData:a,fileList:a.contractTemplateFiles.filter((function(t){return 0==t.attachment})),attachment:a.contractTemplateFiles.filter((function(t){return 1==t.attachment}))})},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)},complete:function(){uni.hideLoading()}})},handleChangeContractTitleFun:function(t){var e=this.templateData;e.name=t.detail.value,this.setData({templateData:e})},handleClearContractTitleFun:function(){var t=this.templateData;t.name="",this.setData({templateData:t})},handleSelectDateFun:function(t){var e=t.currentTarget.dataset.type;switch(e){case"file":this.setData({fileEndTime:t.detail.value});break;case"sign":this.setData({signEndTime:t.detail.value});break;default:break}},conversionSealsFun:function(t){var e="";return t.forEach((function(t){switch(t){case"1":e+="手绘章,";break;case"2":e+="企业章,";break;case"3":e+="法人代表章,";break;case"4":e+="模版章,";break;default:break}})),e=e.slice(0,e.length-1),e},handleDeleteCcsFun:function(t){var e=this.templateData;e.templateCcs.splice(t.currentTarget.dataset.index,1),this.setData({templateData:e})},handleAddCompanyFun:function(){uni.navigateTo({url:"/pages/template/addCompany/index?id="+this.id})},handleAddPersonFun:function(){uni.navigateTo({url:"/pages/template/addPerson/index?id="+this.id})},handleEditItemFun:function(t){var e=t.currentTarget.dataset.item,a=t.currentTarget.dataset.index,i="/pages/template";1==e.relationType&&(i+="/addPerson/index?index="+a+"&id="+this.id+"&name="+(e.userName?e.userName:"")+"&phone="+(e.userPhone?e.userPhone:"")),2==e.relationType&&(i+="/addCompany/index?index="+a+"&id="+this.id+"&name="+(e.userName?e.userName:"")+"&phone="+(e.userPhone?e.userPhone:"")+"&companyName="+(e.companyName?e.companyName:"")),uni.navigateTo({url:i})},handlePreviewFileFun:function(t){var e=t.currentTarget.dataset.item;uni.navigateTo({url:"/pages/template/preview/index?templateId="+this.id+"&id="+e.id})},handleLaunchConfirmFun:function(){if(this.checkSubmitInfosFun()){var t=[],e=[];this.templateData.templateSigns.forEach((function(a){if(a.hasSign){var i=JSON.parse(JSON.stringify(a));i.id=a.signId,t.push(i)}if(a.hasFill){var n=JSON.parse(JSON.stringify(a));n.id=a.fillId,e.push(n)}}));var a={createTime:this.templateData.createTime,fileTermination:this.fileEndTime,id:this.templateData.id,modifyTime:this.templateData.modifyTime,relationId:this.templateData.relationId,relationType:this.templateData.relationType,signingDeadline:this.signEndTime,status:this.templateData.status,name:this.templateData.name,userOrder:this.templateData.userOrder,contractTemplateFiles:this.templateData.contractTemplateFiles,templateCcs:this.templateData.templateCcs,templateFillers:e,templateSigners:t,contractSigners:t};uni.showLoading({title:"发起中"}),(0,i.postBody)({url:n.confirm_contract_launch_by_template,params:a,success:function(t){setTimeout((function(){uni.showToast({icon:"none",title:"合同发起成功"})}),50);var a="";a=e.length>0?"/pages/contract/fill/fill?contractId="+t:"/pages/contract/sign/next/signConfirm/signConfirm?contractId="+t,setTimeout((function(){uni.redirectTo({url:a})}),1500)},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)},complete:function(){uni.hideLoading()}})}},checkSubmitInfosFun:function(){if(0==this.templateData.name.length)return setTimeout((function(){uni.showToast({icon:"none",title:"请输入合同主题"})}),50),!1;if(this.templateData.templateSigns.filter((function(t){return 2==t.relationType})).some((function(t){return!t.companyName})))return setTimeout((function(){uni.showToast({icon:"none",title:"签署方企业名称不能为空"})}),50),!1;if(this.templateData.templateSigns.some((function(t){return!t.userName})))return setTimeout((function(){uni.showToast({icon:"none",title:"签署方经办人姓名不能为空"})}),50),!1;if(this.templateData.templateSigns.some((function(t){return!t.userPhone})))return setTimeout((function(){uni.showToast({icon:"none",title:"签署方经办人手机号不能为空"})}),50),!1;var t=this.checkSignRepeatFun();if(!t.flag)return setTimeout((function(){uni.showToast({icon:"none",title:t.msg})}),50),!1;if(this.templateData.templateCcs&&this.templateData.templateCcs.length>0){var e=this.checkCcRepeatFun();if(!e.flag)return setTimeout((function(){uni.showToast({icon:"none",title:e.msg})}),50),!1}return!0},checkSignRepeatFun:function(){var t=!0,e="",a=[],i=[],n=[],s=[];this.templateData.templateSigns.forEach((function(t){1==t.relationType&&3==t.templateUserType&&(a.push(t),n.push(t.userPhone)),2==t.relationType&&3==t.templateUserType&&(i.push(t),s.push(t.userPhone))}));var o=a.filter((function(t,e){return n.indexOf(t.userPhone)!==e})),l=i.filter((function(t,e){return s.indexOf(t.userPhone)!==e}));return o.length>0&&(t=!1,e="存在重复参与人，请删除重复用户"+o[0].itemName+"后再尝试发起"),l.length>0&&(t=!1,e="存在重复参与人，请删除重复用户"+l[0].itemName+"后再尝试发起"),{flag:t,msg:e}},checkCcRepeatFun:function(){var t=!0,e="",a=[],i=[],n=[],s=[];this.templateData.templateCcs.forEach((function(t){1==t.relationType&&(a.push(t),n.push(t.userPhone)),2==t.relationType&&(i.push(t),s.push(t.userPhone))}));var o=a.filter((function(t,e){return n.indexOf(t.userPhone)!==e})),l=i.filter((function(t,e){return s.indexOf(t.userPhone)!==e}));return console.log(o[0],l[0]),o.length>0&&(t=!1,e="存在重复抄送人，请删除重复用户"+(1==o[0].relationType?o[0].userName:o[0].companyName)+"后再尝试发起"),l.length>0&&(t=!1,e="存在重复抄送人，请删除重复用户"+(1==l[0].relationType?l[0].userName:l[0].companyName)+"后再尝试发起"),{flag:t,msg:e}}}});e.default=s},"0fe3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.confirm_contract_launch_by_template=e.get_template_detail=e.get_templateList=e.get_signal_sign_person_list=void 0;var i=a("3b7d"),n=i.host+"/v1/contacts/findContacts";e.get_signal_sign_person_list=n;var s=i.host+"/v1/contract/template/templateList";e.get_templateList=s;var o=i.host+"/v1/contract/template/detail";e.get_template_detail=o;var l=i.host+"/v1/contract/template/launch";e.confirm_contract_launch_by_template=l},"24bc":function(t,e,a){var i=a("2b7b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3b4a92dd",i,!0,{sourceMap:!1,shadowMode:!1})},"2b7b":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"\nuni-view[data-v-36aadba6]{box-sizing:border-box}.title[data-v-36aadba6]{padding:0 %?48?%;width:100%;height:%?80?%;line-height:%?80?%;font-size:%?24?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#333;background-color:#f7f8f9}.arrow[data-v-36aadba6]{font-size:%?32?%;color:#cecece}.input-area[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?48?%;width:100%;height:%?116?%;line-height:%?116?%;background-color:#fff;font-size:%?30?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#333}.input-area uni-input[data-v-36aadba6]{position:relative;padding-right:%?32?%;width:100%}.input-area .delete[data-v-36aadba6]{font-size:%?28?%;color:#666}.file-list[data-v-36aadba6]{padding:0 %?48?%;background-color:#fff}.file-item[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?104?%;line-height:%?104?%;border-bottom:%?2?% solid #f5f5f5}.file-item[data-v-36aadba6]:last-of-type{border-bottom:none}.file-item .l-wrapper[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.file-item .icon[data-v-36aadba6]{width:%?32?%;height:%?32?%}.file-item .icon uni-image[data-v-36aadba6]{display:block;width:100%;height:100%}.file-item .name[data-v-36aadba6]{margin-left:%?8?%;font-size:%?26?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#666;line-height:%?48?%}.sign-list[data-v-36aadba6]{background-color:#f7f8f9}.sign-list .sign-item[data-v-36aadba6]{margin-bottom:%?16?%;background-color:#fff;padding:%?32?% %?48?%}.sign-item .user-info[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?32?%;border-bottom:%?2?% solid #f5f5f5}.name-auth[data-v-36aadba6], .phone-auth[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.phone-auth[data-v-36aadba6]{padding-top:%?18?%}.name-auth .name[data-v-36aadba6]{font-size:%?30?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#212121;line-height:%?40?%}.name-auth .auth-status[data-v-36aadba6], .phone-auth .auth-status[data-v-36aadba6]{margin-left:%?16?%;padding:%?8?% %?16?%;font-size:%?20?%;font-family:PingFangSC-Medium\\, PingFang SC;font-weight:500;color:#333}.name-auth .auth-status.authed[data-v-36aadba6], .phone-auth .auth-status.authed[data-v-36aadba6]{color:#3eb4a8;background-color:rgba(62,180,168,.1)}.name-auth .auth-status.unauth[data-v-36aadba6], .phone-auth .auth-status.unauth[data-v-36aadba6]{color:#666;background-color:#f4f4f4}.user-info .info .phone[data-v-36aadba6]{font-size:%?24?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#666;line-height:%?30?%}.user-info .info .seals[data-v-36aadba6]{padding-top:%?16?%;font-size:%?24?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#999;line-height:%?30?%}.user-info .edit[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#999;line-height:%?24?%}.sign-item .order[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:%?26?%}.order .sub-title[data-v-36aadba6]{font-size:%?24?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#666;line-height:%?30?%}.order .order-detail[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order .order-detail .item[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?24?%;font-size:%?24?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#666;line-height:%?28?%}.order .order-detail .item[data-v-36aadba6]:last-of-type{margin-right:0}.order .order-detail .item .order-words[data-v-36aadba6]{margin-left:%?12?%;padding:%?2?% %?4?%;min-width:%?24?%;min-height:%?24?%;font-size:%?18?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;text-align:center;color:#fff;background-color:#888}.add-cc[data-v-36aadba6]{width:100%;height:%?106?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff}.add-cc .add-btn[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:50%;font-size:%?30?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#6e82a9;line-height:%?30?%}.add-cc .add-btn[data-v-36aadba6]:first-of-type{border-right:%?2?% solid #d8d8d8}.add-cc .add-btn uni-image[data-v-36aadba6]{margin-right:%?16?%;width:%?30?%;height:%?30?%}.cc-item[data-v-36aadba6]{position:relative;margin-top:%?16?%;padding:%?36?% %?48?% %?32?%;background-color:#fff}.cc-item .phone[data-v-36aadba6]{padding-top:%?18?%;font-size:%?24?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#666;line-height:%?30?%}.cc-item .delete[data-v-36aadba6]{position:absolute;top:%?40?%;right:%?38?%;font-size:%?28?%;color:#999}.other-setting[data-v-36aadba6]{padding:0 %?48?%;background-color:#fff}.setting-item[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?112?%;border-bottom:%?2?% solid #f5f5f5}.setting-item[data-v-36aadba6]:last-of-type{border-bottom:none}.setting-item .sub-title[data-v-36aadba6]{font-size:%?32?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#333;line-height:%?32?%}.setting-item .date-picker[data-v-36aadba6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;font-family:PingFangSC-Regular\\, PingFang SC;font-weight:400;color:#999;line-height:%?32?%}.setting-item .date-picker uni-input[data-v-36aadba6]{text-align:right}.launch-btn[data-v-36aadba6]{position:absolute;left:%?40?%;bottom:%?100?%;width:calc(100% - %?80?%);height:%?100?%;line-height:%?100?%;background-color:#464646;font-size:%?32?%;font-family:PingFangSC-Medium\\, PingFang SC;font-weight:500;color:#fff;text-align:center;border-radius:%?8?%}body.?%PAGE?%[data-v-36aadba6]{background-color:#f7f8f9}",""]),t.exports=e},3854:function(t,e,a){"use strict";a.r(e);var i=a("0489"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"537e":function(t,e,a){function i(t){return t=t.toString(),t[1]?t:"0"+t}function n(t,e){var a=new Date(t);return s(a,e)}function s(t,e){var a=["Y","M","D","h","m","s"],n=[];for(var s in n.push(t.getFullYear()),n.push(i(t.getMonth()+1)),n.push(i(t.getDate())),n.push(i(t.getHours())),n.push(i(t.getMinutes())),n.push(i(t.getSeconds())),n)e=e.replace(a[s],n[s]);return e}function o(t){var e=/^[1][3,4,5,7,8][0-9]{9}$/;return e.test(t)}function l(t){var e="出错了";"string"===typeof t?e=t:t.errMsg&&(e=t.errMsg),setTimeout((function(){uni.showToast({duration:2e3,icon:"none",title:e})}),50)}function r(t){setTimeout((function(){uni.showToast({title:t})}),50)}function u(t){var e=["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"];return t.replace(new RegExp(e.join("|"),"g"),"")}function c(t){return d(t,"分","秒")}function d(t,e,a){if(t=t%6e4/1e3,t>-1){var i=Math.floor(t/60),n=Math.floor(t%60);return i<=0?n+a:i+e+n+a}return 0+a}function f(){var t=getCurrentPages(),e=(t[t.length-1],t[t.length-2]);return e}function p(t){return t.replace(/(^\s*)|(\s*$)/g,"")}a("a15b"),a("d3b7"),a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("498a"),t.exports.formatTimeSecond=c,t.exports.formatTimeSecondWithSign=d,t.exports.formatTime=n,t.exports.formatDate=s,t.exports.isTelCode=o,t.exports.showError=l,t.exports.showSuccess=r,t.exports.filterEmoji=u,t.exports.getPreviousPage=f,t.exports.trim=p},"7ed4":function(t,e,a){"use strict";var i=a("24bc"),n=a.n(i);n.a},"990c":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"use-template--page"},[a("v-uni-view",{staticClass:"title"},[t._v("合同主题")]),a("v-uni-view",{staticClass:"input-area"},[a("v-uni-input",{attrs:{type:"text",maxlength:"100",value:t.templateData.name},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleChangeContractTitleFun.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"delete one one-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClearContractTitleFun.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"title"},[t._v("合同文件")]),a("v-uni-view",{staticClass:"file-list"},t._l(t.fileList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"file-item",attrs:{"data-item":e},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handlePreviewFileFun.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"l-wrapper"},[a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:t.fileIcon,mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.fileName))])],1),a("v-uni-text",{staticClass:"one one-apparrow-right arrow"})],1)})),1),a("v-uni-view",{staticClass:"title"},[t._v("合同附件")]),a("v-uni-view",{staticClass:"file-list"},t._l(t.attachment,(function(e,i){return a("v-uni-view",{key:i,staticClass:"file-item",attrs:{"data-item":e},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handlePreviewFileFun.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"l-wrapper"},[a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:t.fileIcon,mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.fileName))])],1),a("v-uni-text",{staticClass:"one one-apparrow-right arrow"})],1)})),1),a("v-uni-view",{staticClass:"title"},[t._v("参与方")]),a("v-uni-view",{staticClass:"sign-list"},t._l(t.templateData.templateSigns,(function(e,i){return a("v-uni-view",{key:i,staticClass:"sign-item"},[a("v-uni-view",{staticClass:"user-info"},[a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"name-auth"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(2==e.relationType?e.companyName?e.companyName:"待填写":1==e.relationType&&e.userName?e.userName:"待填写"))]),a("v-uni-view",{class:"auth-status "+(2==e.relationType&&e.companyAuthStatus||1==e.relationType&&e.personAuthStatus?"authed":"unauth")},[t._v(t._s(2==e.relationType&&e.companyAuthStatus||1==e.relationType&&e.personAuthStatus?"已认证":"未认证"))])],1),a("v-uni-view",{staticClass:"phone-auth"},[a("v-uni-view",{staticClass:"phone"},[2==e.relationType?a("v-uni-text",[t._v(t._s(e.userName?e.userName:"待填写"))]):t._e(),t._v(t._s(e.userPhone?e.userPhone:""))],1),e.userName&&2==e.relationType?a("v-uni-view",{class:"auth-status "+(e.personAuthStatus?"authed":"unauth")},[t._v(t._s(e.personAuthStatus?"已认证":"未认证"))]):t._e()],1),a("v-uni-view",{staticClass:"seals"},[t._v(t._s(e.sealWords))])],1),2==e.templateUserType?a("v-uni-view",{staticClass:"edit",attrs:{"data-item":e,"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleEditItemFun.apply(void 0,arguments)}}},[a("v-uni-text",[t._v("编辑")]),a("v-uni-text",{staticClass:"one one-apparrow-right arrow"})],1):t._e()],1),a("v-uni-view",{staticClass:"order"},[a("v-uni-view",{staticClass:"sub-title"},[t._v("参与顺序")]),a("v-uni-view",{staticClass:"order-detail"},[e.hasFill&&e.fillOrder>-1?a("v-uni-view",{staticClass:"fill item"},[t._v("填写"),a("v-uni-text",{staticClass:"order-words"},[t._v(t._s(e.fillOrder+1))])],1):t._e(),e.hasSign&&e.signOrder>-1?a("v-uni-view",{staticClass:"sign item"},[t._v("签署"),a("v-uni-text",{staticClass:"order-words"},[t._v(t._s(e.signOrder+1))])],1):t._e()],1)],1)],1)})),1),a("v-uni-view",{staticClass:"title"},[t._v("抄送方")]),a("v-uni-view",{staticClass:"add-cc"},[a("v-uni-view",{staticClass:"add-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleAddCompanyFun.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"addSign",attrs:{mode:"aspectFit",src:t.addIcon}}),t._v("添加企业")],1),a("v-uni-view",{staticClass:"add-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleAddPersonFun.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"addSign",attrs:{mode:"aspectFit",src:t.addIcon}}),t._v("添加个人")],1)],1),a("v-uni-view",{staticClass:"cc-list"},t._l(t.templateData.templateCcs,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cc-item"},[a("v-uni-view",{staticClass:"name-auth"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(2==e.relationType?e.companyName:e.userName))])],1),a("v-uni-view",{staticClass:"phone"},[2==e.relationType?a("v-uni-text",[t._v(t._s(e.userName))]):t._e(),t._v(t._s(e.userPhone))],1),e.isNew?a("v-uni-text",{staticClass:"delete one one-close",attrs:{"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDeleteCcsFun.apply(void 0,arguments)}}}):t._e()],1)})),1),a("v-uni-view",{staticClass:"title"},[t._v("其他设置")]),a("v-uni-view",{staticClass:"other-setting"},[a("v-uni-view",{staticClass:"setting-item"},[a("v-uni-text",{staticClass:"sub-title"},[t._v("签署截止时间")]),a("v-uni-view",{staticClass:"date-picker"},[a("v-uni-picker",{attrs:{mode:"date",value:t.date,start:"2019-10-01",end:!0,"data-type":"file"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectDateFun.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"pickDate"},[a("v-uni-input",{attrs:{type:"date",disabled:"true",name:"addtime",value:t.signEndTime,placeholder:"请选择"}})],1)],1),a("v-uni-text",{staticClass:"one one-apparrow-right"})],1)],1),a("v-uni-view",{staticClass:"setting-item"},[a("v-uni-text",{staticClass:"sub-title"},[t._v("合同终止时间")]),a("v-uni-view",{staticClass:"date-picker"},[a("v-uni-picker",{attrs:{mode:"date",value:t.date,start:"2019-10-01",end:!0,"data-type":"file"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectDateFun.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"pickDate"},[a("v-uni-input",{attrs:{type:"date",disabled:"true",name:"addtime",value:t.fileEndTime,placeholder:"请选择"}})],1)],1),a("v-uni-text",{staticClass:"one one-apparrow-right"})],1)],1)],1),a("v-uni-view",{staticClass:"launch-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLaunchConfirmFun.apply(void 0,arguments)}}},[t._v("发起签署")])],1)},s=[]},f09b:function(t,e,a){"use strict";a.r(e);var i=a("990c"),n=a("3854");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("7ed4");var o,l=a("f0c5"),r=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"36aadba6",null,!1,i["a"],o);e["default"]=r.exports}}]);