(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/template/useTemplate/index"],{"0ed7":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement;e._self._c},o=[]},3854:function(e,t,n){"use strict";n.r(t);var a=n("64d1"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"54e8":function(e,t,n){},"566f":function(e,t,n){"use strict";(function(e){n("e09c");a(n("66fd"));var t=a(n("f09b"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("c11b")["createPage"])},"64d1":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("3b7d"),i=n("0fe3"),o=(n("537e"),{data:function(){return{addIcon:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/contract/addsign.png",fileIcon:"/static/images/template/file_icon.png",templateData:null,fileList:[{name:"12312321"}],attachment:[],signEndTime:"",fileEndTime:"",id:"",origin:"",operate:"",index:""}},components:{},props:{},onLoad:function(e){var t=e.id,n=[];this.setData({id:t,origin:e.origin||"",operate:e.operate||"",index:e.index||-1}),"person"==e.origin&&n.push({userName:e.name,userPhone:e.phone,isNew:!0,relationType:1,personAuthStatus:e.personAuthStatus||-1}),"company"==e.origin&&n.push({companyName:e.companyName,userName:e.name,userPhone:e.phone,isNew:!0,relationType:2,personAuthStatus:e.personAuthStatus||-1,companyAuthStatus:e.companyAuthStatus||-1}),this.getTemplateDetailFun(n)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{getTemplateDetailFun:function(t){var n=this;e.showLoading({title:"加载中"}),(0,a.get)({url:i.get_template_detail+"?contractTemplateId="+this.id,success:function(a){if(console.log(a),a.templateSigns.forEach((function(t){if(t.sealWords=n.conversionSealsFun(t.sealTypes),1==t.templateUserType){var a=e.getStorageSync("currentUser"),i=e.getStorageSync("userName"),o=e.getStorageSync("userAccount");t.companyName=a.companyName,t.userName=i,t.userPhone=o}})),n.origin){var i=e.getStorageSync("templateCcs"),o=e.getStorageSync("templateSigns");"add"==n.operate&&i.push(t[0]),a.templateCcs=i,"edit"==n.operate&&(o[n.index].userName=t[0].userName,o[n.index].userPhone=t[0].userPhone,o[n.index].personAuthStatus=t[0].personAuthStatus,"company"==n.origin&&(o[n.index].companyName=t[0].companyName,o[n.index].companyAuthStatus=t[0].companyAuthStatus)),a.templateSigns=o}e.setStorageSync("templateCcs",a.templateCcs),e.setStorageSync("templateSigns",a.templateSigns),n.setData({templateData:a,fileList:a.contractTemplateFiles.filter((function(e){return 0==e.attachment})),attachment:a.contractTemplateFiles.filter((function(e){return 1==e.attachment}))})},fail:function(t){setTimeout((function(){e.showToast({icon:"none",title:t})}),50)},complete:function(){e.hideLoading()}})},handleChangeContractTitleFun:function(e){var t=this.templateData;t.name=e.detail.value,this.setData({templateData:t})},handleClearContractTitleFun:function(){var e=this.templateData;e.name="",this.setData({templateData:e})},handleSelectDateFun:function(e){var t=e.currentTarget.dataset.type;switch(t){case"file":this.setData({fileEndTime:e.detail.value});break;case"sign":this.setData({signEndTime:e.detail.value});break;default:break}},conversionSealsFun:function(e){var t="";return e.forEach((function(e){switch(e){case"1":t+="手绘章,";break;case"2":t+="企业章,";break;case"3":t+="法人代表章,";break;case"4":t+="模版章,";break;default:break}})),t=t.slice(0,t.length-1),t},handleDeleteCcsFun:function(e){var t=this.templateData;t.templateCcs.splice(e.currentTarget.dataset.index,1),this.setData({templateData:t})},handleAddCompanyFun:function(){e.navigateTo({url:"/pages/template/addCompany/index?id="+this.id})},handleAddPersonFun:function(){e.navigateTo({url:"/pages/template/addPerson/index?id="+this.id})},handleEditItemFun:function(t){var n=t.currentTarget.dataset.item,a=t.currentTarget.dataset.index,i="/pages/template";1==n.relationType&&(i+="/addPerson/index?index="+a+"&id="+this.id+"&name="+(n.userName?n.userName:"")+"&phone="+(n.userPhone?n.userPhone:"")),2==n.relationType&&(i+="/addCompany/index?index="+a+"&id="+this.id+"&name="+(n.userName?n.userName:"")+"&phone="+(n.userPhone?n.userPhone:"")+"&companyName="+(n.companyName?n.companyName:"")),e.navigateTo({url:i})},handlePreviewFileFun:function(t){var n=t.currentTarget.dataset.item;e.navigateTo({url:"/pages/template/preview/index?templateId="+this.id+"&id="+n.id})},handleLaunchConfirmFun:function(){if(this.checkSubmitInfosFun()){var t=[],n=[];this.templateData.templateSigns.forEach((function(e){if(e.hasSign){var a=JSON.parse(JSON.stringify(e));a.id=e.signId,t.push(a)}if(e.hasFill){var i=JSON.parse(JSON.stringify(e));i.id=e.fillId,n.push(i)}}));var o={createTime:this.templateData.createTime,fileTermination:this.fileEndTime,id:this.templateData.id,modifyTime:this.templateData.modifyTime,relationId:this.templateData.relationId,relationType:this.templateData.relationType,signingDeadline:this.signEndTime,status:this.templateData.status,name:this.templateData.name,userOrder:this.templateData.userOrder,contractTemplateFiles:this.templateData.contractTemplateFiles,templateCcs:this.templateData.templateCcs,templateFillers:n,templateSigners:t,contractSigners:t};e.showLoading({title:"发起中"}),(0,a.postBody)({url:i.confirm_contract_launch_by_template,params:o,success:function(t){setTimeout((function(){e.showToast({icon:"none",title:"合同发起成功"})}),50);var a="";a=n.length>0?"/pages/contract/fill/fill?contractId="+t:"/pages/contract/sign/next/signConfirm/signConfirm?contractId="+t,setTimeout((function(){e.redirectTo({url:a})}),1500)},fail:function(t){setTimeout((function(){e.showToast({icon:"none",title:t})}),50)},complete:function(){e.hideLoading()}})}},checkSubmitInfosFun:function(){if(0==this.templateData.name.length)return setTimeout((function(){e.showToast({icon:"none",title:"请输入合同主题"})}),50),!1;if(this.templateData.templateSigns.filter((function(e){return 2==e.relationType})).some((function(e){return!e.companyName})))return setTimeout((function(){e.showToast({icon:"none",title:"签署方企业名称不能为空"})}),50),!1;if(this.templateData.templateSigns.some((function(e){return!e.userName})))return setTimeout((function(){e.showToast({icon:"none",title:"签署方经办人姓名不能为空"})}),50),!1;if(this.templateData.templateSigns.some((function(e){return!e.userPhone})))return setTimeout((function(){e.showToast({icon:"none",title:"签署方经办人手机号不能为空"})}),50),!1;var t=this.checkSignRepeatFun();if(!t.flag)return setTimeout((function(){e.showToast({icon:"none",title:t.msg})}),50),!1;if(this.templateData.templateCcs&&this.templateData.templateCcs.length>0){var n=this.checkCcRepeatFun();if(!n.flag)return setTimeout((function(){e.showToast({icon:"none",title:n.msg})}),50),!1}return!0},checkSignRepeatFun:function(){var e=!0,t="",n=[],a=[],i=[],o=[];this.templateData.templateSigns.forEach((function(e){1==e.relationType&&3==e.templateUserType&&(n.push(e),i.push(e.userPhone)),2==e.relationType&&3==e.templateUserType&&(a.push(e),o.push(e.userPhone))}));var s=n.filter((function(e,t){return i.indexOf(e.userPhone)!==t})),r=a.filter((function(e,t){return o.indexOf(e.userPhone)!==t}));return s.length>0&&(e=!1,t="存在重复参与人，请删除重复用户"+s[0].itemName+"后再尝试发起"),r.length>0&&(e=!1,t="存在重复参与人，请删除重复用户"+r[0].itemName+"后再尝试发起"),{flag:e,msg:t}},checkCcRepeatFun:function(){var e=!0,t="",n=[],a=[],i=[],o=[];this.templateData.templateCcs.forEach((function(e){1==e.relationType&&(n.push(e),i.push(e.userPhone)),2==e.relationType&&(a.push(e),o.push(e.userPhone))}));var s=n.filter((function(e,t){return i.indexOf(e.userPhone)!==t})),r=a.filter((function(e,t){return o.indexOf(e.userPhone)!==t}));return console.log(s[0],r[0]),s.length>0&&(e=!1,t="存在重复抄送人，请删除重复用户"+(1==s[0].relationType?s[0].userName:s[0].companyName)+"后再尝试发起"),r.length>0&&(e=!1,t="存在重复抄送人，请删除重复用户"+(1==r[0].relationType?r[0].userName:r[0].companyName)+"后再尝试发起"),{flag:e,msg:t}}}});t.default=o}).call(this,n("c11b")["default"])},"6b2e":function(e,t,n){"use strict";var a=n("54e8"),i=n.n(a);i.a},f09b:function(e,t,n){"use strict";n.r(t);var a=n("0ed7"),i=n("3854");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("6b2e");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=u.exports}},[["566f","common/runtime","common/vendor"]]]);