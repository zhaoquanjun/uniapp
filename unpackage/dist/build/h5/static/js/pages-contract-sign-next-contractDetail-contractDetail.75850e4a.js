(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contract-sign-next-contractDetail-contractDetail"],{1537:function(t,a,e){"use strict";e.r(a);var n=e("ce31"),c=e("d7dd");for(var i in c)"default"!==i&&function(t){e.d(a,t,(function(){return c[t]}))}(i);e("d8b4");var o,r=e("f0c5"),s=Object(r["a"])(c["default"],n["b"],n["c"],!1,null,"3e0c1840",null,!1,n["a"],o);a["default"]=s.exports},"1f4c":function(t,a,e){"use strict";(function(t){var n=e("4ea4");e("4de4"),e("4160"),e("a9e3"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=e("3b7d"),i=e("5746"),o=n(e("1537")),r={data:function(){return{contractData:null}},components:{avatar:o.default},props:{},onLoad:function(a){t.log(a),this.getDetailDataFun(a.contractId)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{getDetailDataFun:function(a){var e=this;(0,c.get)({url:i.get_contract_detail,params:{id:a},success:function(a){t.log(a);var n=a.contractFlowTasks.filter((function(t){return 2==t.processType}));a.contractFlowTasks=n;var c=a.contractSubject;c.gmtCreate&&(a.contractSubject.gmtCreate=e.formatTimeConvert(c.gmtCreate,1)),c.signingDeadline&&(a.contractSubject.signingDeadline=e.formatTimeConvert(c.signingDeadline,1)),c.fileTermination&&(a.contractSubject.fileTermination=e.formatTimeConvert(c.fileTermination,1)),a.timeProcessVOS.forEach((function(t){t.time=e.formatTimeConvert(t.relationTime,1)})),e.setData({contractData:a})},fail:function(a){t.log(a)}})},watchSeason:function(a){t.log(a);var e=a.currentTarget.dataset.item.reason||" ";uni.showModal({title:"查看原因",content:e,confirmText:"知道了",showCancel:!1})},formatTimeConvert:function(t,a){t+="",t=10==t.length?1e3*t:t;var e=new Date(Number(t)),n=e.getFullYear(),c=e.getMonth()+1;c=c<10?"0"+c:c;var i=e.getDate();i=i<10?"0"+i:i;var o=e.getHours();o=o<10?"0"+o:o;var r=e.getMinutes(),s=e.getSeconds();return r=r<10?"0"+r:r,s=s<10?"0"+s:s,0==a?n+"-"+c+"-"+i:n+"-"+c+"-"+i+" "+o+":"+r+":"+s},back:function(){uni.navigateBack()}}};a.default=r}).call(this,e("5a52")["default"])},"4bafc":function(t,a,e){"use strict";e.r(a);var n=e("1f4c"),c=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=c.a},5746:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.get_signal_sign_person_list=a.get_contract_launch=a.get_contract_detail=a.deleteContractEvidenceRel=a.getChainsList=a.saveContractEvidenceRel=a.findNoRelatedContractEvidence=a.saveEvidenceContractRel=a.findNoRelatedContractSubject=a.previewChainImg=a.get_all_contract_list=a.get_contract_list=void 0;var n=e("3b7d"),c=n.host+"/v2/contract/list";a.get_contract_list=c;var i=n.host+"/v2/contract/count";a.get_all_contract_list=i;var o=n.host+"/v1/blockchain/contractCert/preview/";a.previewChainImg=o;var r=n.host+"/v1/contractEvidence/findNoRelatedContractSubject";a.findNoRelatedContractSubject=r;var s=n.host+"/v1/contractEvidence/saveEvidenceContractRel";a.saveEvidenceContractRel=s;var l=n.host+"/v1/contractEvidence/findNoRelatedContractEvidence";a.findNoRelatedContractEvidence=l;var d=n.host+"/v1/contractEvidence/saveContractEvidenceRel";a.saveContractEvidenceRel=d;var v=n.host+"/v1/contractEvidence/findContractEvidence";a.getChainsList=v;var f=n.host+"/v1/contractEvidence/deleteContractEvidenceRel";a.deleteContractEvidenceRel=f;var u=n.host+"/v2/contract/detail";a.get_contract_detail=u;var b=n.host+"/v2/contract/launch";a.get_contract_launch=b;var p=n.host+"/v1/contacts/findContacts";a.get_signal_sign_person_list=p},"6ab7":function(t,a,e){var n=e("f937");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=e("4f06").default;c("f07d0c62",n,!0,{sourceMap:!1,shadowMode:!1})},"6e96":function(t,a,e){"use strict";var n=e("c1df"),c=e.n(n);c.a},"88b7":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{}},components:{},props:{text:{type:String,default:"A"},serverAvatarUrl:{type:String,default:""},localAvatarName:{type:String,default:""},fontSize:{type:String,default:"40rpx"}},methods:{}};a.default=n},"9d78":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return c})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return null!=t.contractData?e("v-uni-view",{staticClass:"contract-page--section"},[e("v-uni-view",{staticClass:"contract-subject--area"},[e("v-uni-view",{staticClass:"subject-title title"},[t._v("合同主题")]),e("v-uni-view",{staticClass:"subject-desc"},[t._v(t._s(t.contractData.contractSubject.contractTitle))])],1),e("v-uni-view",{staticClass:"contract-info--area"},[e("v-uni-view",{staticClass:"info-title title"},[t._v("合同信息")]),e("v-uni-view",{staticClass:"info-list"},[e("v-uni-view",{staticClass:"info-list-item"},[e("v-uni-text",{staticClass:"item-title"},[t._v("发起方")]),e("v-uni-text",{staticClass:"item-content"},[t._v(t._s(t.contractData.initiatorName))])],1),e("v-uni-view",{staticClass:"info-list-item"},[e("v-uni-text",{staticClass:"item-title"},[t._v("发起时间")]),e("v-uni-text",{staticClass:"item-content"},[t._v(t._s(t.contractData.contractSubject.gmtCreate?t.contractData.contractSubject.gmtCreate:""))])],1),t.contractData.contractSubject.signingDeadline?e("v-uni-view",{staticClass:"info-list-item"},[e("v-uni-text",{staticClass:"item-title"},[t._v("签署截止时间")]),e("v-uni-text",{staticClass:"item-content"},[t._v(t._s(t.contractData.contractSubject.signingDeadline))])],1):t._e(),t.contractData.contractSubject.fileTermination?e("v-uni-view",{staticClass:"info-list-item"},[e("v-uni-text",{staticClass:"item-title"},[t._v("文件有效签署时间")]),e("v-uni-text",{staticClass:"item-content"},[t._v(t._s(t.contractData.contractSubject.fileTermination))])],1):t._e()],1)],1),e("v-uni-view",{staticClass:"contract-status"},[e("v-uni-view",{staticClass:"base-title title"},[t._v("合同状态")]),e("v-uni-view",{staticClass:"status-wrapper"},[e("v-uni-view",{staticClass:"base-list-item"},[e("v-uni-text",{staticClass:"item-title"},[t._v(t._s(1==t.contractData.type&&2==t.contractData.secondType&&0==t.contractData.myselfSigned?"等待签署方完成签署":1==t.contractData.type&&0==t.contractData.secondType?"待自己签署":1==t.contractData.type&&2==t.contractData.secondType&&1==t.contractData.myselfSigned?"未轮到自己签署，等待他人签署":1==t.contractData.type&&2==t.contractData.secondType&&2==t.contractData.myselfSigned?"你已完成本文件签署，等待他人签署":1==t.contractData.type&&1==t.contractData.secondType?"等待用印审批通过":1==t.contractData.type&&4==t.contractData.secondType?"你已撤回本合同文件":1==t.contractData.type&&5==t.contractData.secondType?"合同被拒签，无法继续签署":1==t.contractData.type&&3==t.contractData.secondType?"已完成":1==t.contractData.type&&5==t.contractData.secondType&&6==t.contractData.secondType?"已超过签署截止日期，无法继续签署":1==t.contractData.type&&5==t.contractData.secondType&&6!=t.contractData.secondType&&t.contractData.secondType<8?"合同文件已失效":1==t.contractData.type&&8==t.contractData.secondType?"等待用印审批通过":2==t.contractData.type&&0==t.contractData.secondType?"待自己签署":2==t.contractData.type&&1==t.contractData.secondType?t.contractData.approvalSponsor+"签署了文件，等待你的用印审批":2==t.contractData.type&&2==t.contractData.secondType&&2==t.contractData.myselfSigned?"你已完成本文件签署，等待他人签署":2==t.contractData.type&&8==t.contractData.secondType?"你已完成文件签署，等待用印审批通过":2==t.contractData.type&&3==t.contractData.secondType?"已完成":2==t.contractData.type&&4==t.contractData.secondType?"被发起方撤回":2==t.contractData.type&&5==t.contractData.secondType?t.contractData.myselfRejected?"本文件你已拒签":"合同被拒签，无法继续签署":2==t.ontractData.type&&t.contractData.secondType>5&&t.contractData.secondType<8&&6!=t.contractData.secondType?"合同文件已失效":t.contractData.secondType>5&&t.contractData.secondType<8?"已超过签署截止日期，无法继续签署":""))])],1)],1)],1),e("v-uni-view",{staticClass:"contract-base--area"},[e("v-uni-view",{staticClass:"base-title title"},[t._v("合同签署方")]),e("v-uni-view",{staticClass:"base-list"},t._l(t.contractData.contractFlowTasks,(function(a,n){return e("v-uni-view",{key:n,staticClass:"base-list-item"},[e("v-uni-text",{staticClass:"item-title"},[t._v(t._s(1===a.relationType?a.userName:2===a.relationType?a.companyName+"（"+a.userName+"）":"")+" - "+t._s(a.userPhone))]),e("v-uni-text",{staticClass:"item-content"},[t._v(t._s(1===a.status?"未签署":2===a.status?"已签署":3===a.status?"审批中":4===a.status?"已拒签":5===a.status?"抄送方":""))])],1)})),1)],1),e("v-uni-view",{staticClass:"contract-sign-flow"},[e("v-uni-view",{staticClass:"flow-title title"},[t._v("合同签署时间流")]),e("v-uni-view",{staticClass:"flow-content--area"},t._l(t.contractData.timeProcessVOS,(function(a,n){return e("v-uni-view",{key:n,staticClass:"flow-content-item"},[e("v-uni-view",{staticClass:"item-info"},[e("v-uni-text",{staticClass:"item-result"},[t._v(t._s(a.name)+t._s(a.actionName))]),e("v-uni-text",{staticClass:"item-time"},[t._v(t._s(a.time))])],1),a.reason?e("v-uni-view",{staticClass:"item-reason",attrs:{"data-item":a},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.watchSeason.apply(void 0,arguments)}}},[t._v("查看原因")]):t._e(),e("v-uni-view",{class:"item-flag "+(2==a.status?"success":3==a.status?"active":4==a.status?"fail":t.fail)})],1)})),1)],1)],1):t._e()},i=[]},c1df:function(t,a,e){var n=e("dac8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=e("4f06").default;c("267d6a7d",n,!0,{sourceMap:!1,shadowMode:!1})},ce31:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return c})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"avatar-box"},[(!t.serverAvatarUrl||t.serverAvatarUrl.length<=0)&&(!t.localAvatarName||t.localAvatarName.length<=0)?e("v-uni-view",{staticClass:"avatar-default"},[e("v-uni-image",{staticClass:"avatar-bg",attrs:{src:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/avatar_bg_icon.png"}}),e("v-uni-view",{staticClass:"avatar-text-box"},[e("v-uni-view",{staticClass:"avatar-text",style:"font-size:"+t.fontSize},[t._v(t._s(t.text))])],1)],1):t._e(),t.serverAvatarUrl&&t.serverAvatarUrl.length>0||t.localAvatarName&&t.localAvatarName.length>0?e("v-uni-image",{staticClass:"avatar-custom",attrs:{src:t.serverAvatarUrl&&t.serverAvatarUrl.length>0?t.serverAvatarUrl:t.localAvatarName}}):t._e()],1)},i=[]},d7dd:function(t,a,e){"use strict";e.r(a);var n=e("88b7"),c=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=c.a},d88c:function(t,a,e){"use strict";e.r(a);var n=e("9d78"),c=e("4bafc");for(var i in c)"default"!==i&&function(t){e.d(a,t,(function(){return c[t]}))}(i);e("6e96");var o,r=e("f0c5"),s=Object(r["a"])(c["default"],n["b"],n["c"],!1,null,"e62d90b0",null,!1,n["a"],o);a["default"]=s.exports},d8b4:function(t,a,e){"use strict";var n=e("6ab7"),c=e.n(n);c.a},dac8:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"\nuni-view[data-v-e62d90b0]{box-sizing:border-box}.title[data-v-e62d90b0]{padding:0 %?48?%;width:100%;height:%?112?%;line-height:%?112?%;font-size:%?32?%;font-weight:500}.contract-subject--area .subject-desc[data-v-e62d90b0]{padding:%?32?% %?48?%;font-size:%?28?%;line-height:%?52?%;color:#333;background-color:#fff}.contract-info--area .info-list[data-v-e62d90b0]{padding:0 %?48?%;background-color:#fff}.contract-info--area .info-list-item[data-v-e62d90b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?108?%;line-height:%?108?%;border-bottom:%?2?% solid #f5f5f5}.contract-info--area .info-list-item .item-title[data-v-e62d90b0]{font-size:%?30?%;color:#666}.contract-info--area .info-list-item .item-content[data-v-e62d90b0]{font-size:%?32?%;color:#1a1a1a}.contract-info--area .info-list-item[data-v-e62d90b0]:last-of-type{border-bottom:none}.contract-status .status-wrapper[data-v-e62d90b0]{padding:0 %?48?%;background-color:#fff}.contract-status .status-wrapper .base-list-item[data-v-e62d90b0]{border-bottom:%?2?% solid #f5f5f5}.contract-status .status-wrapper .base-list-item[data-v-e62d90b0]:last-of-type{border-bottom:none}.contract-status .status-wrapper .base-list-item uni-text[data-v-e62d90b0]{font-size:%?32?%;color:#1a1a1a}.contract-status .status-wrapper .base-list-item[data-v-e62d90b0]{height:%?110?%;line-height:%?110?%}.contract-base--area .base-list[data-v-e62d90b0]{padding:0 %?48?%;background-color:#fff}.contract-base--area .base-list-item[data-v-e62d90b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?108?%;line-height:%?108?%;border-bottom:%?2?% solid #f5f5f5}.contract-base--area .base-list-item .item-title[data-v-e62d90b0]{font-size:%?30?%;color:#1a1a1a}.contract-base--area .base-list-item .item-content[data-v-e62d90b0]{font-size:%?32?%;color:#1a1a1a}.contract-info--area .base-list-item[data-v-e62d90b0]:last-of-type{border-bottom:none}.contract-sign-flow .flow-content--area[data-v-e62d90b0]{padding:%?46?% %?48?%;background-color:#fff}.contract-sign-flow .flow-content--area  .flow-content-item[data-v-e62d90b0]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?48?%;width:100%;border-left:%?2?% dashed #ebebeb}.contract-sign-flow .flow-content--area .flow-content-item[data-v-e62d90b0]:last-of-type{border-left:none}.contract-sign-flow .flow-content--area  .flow-content-item .item-reason[data-v-e62d90b0]{position:absolute;right:0;top:0;font-size:%?24?%;line-height:%?34?%;color:#6e87b8}.contract-sign-flow .flow-content--area  .flow-content-item .item-flag[data-v-e62d90b0]{position:absolute;top:0;left:0;margin-left:%?-8?%;width:%?16?%;height:%?16?%;border-radius:50%;background-color:#999}.contract-sign-flow .flow-content--area  .flow-content-item .item-flag.active[data-v-e62d90b0]{background-color:#ed6c00}.contract-sign-flow .flow-content--area  .flow-content-item .item-flag.fail[data-v-e62d90b0]{background-color:#f56c6c}.contract-sign-flow .flow-content--area  .flow-content-item .item-flag.success[data-v-e62d90b0]{background-color:#67c23a}.contract-sign-flow .flow-content--area  .flow-content-item .item-info[data-v-e62d90b0]{margin-top:%?-12?%;text-indent:%?74?%}.contract-sign-flow .flow-content--area  .flow-content-item .item-info uni-text[data-v-e62d90b0]{display:block}.contract-sign-flow .flow-content--area  .flow-content-item .item-info uni-text.item-result[data-v-e62d90b0]{font-size:%?28?%;line-height:%?40?%;color:#333}.contract-sign-flow .flow-content--area  .flow-content-item .item-info uni-text.item-time[data-v-e62d90b0]{padding-top:%?12?%;font-size:%?24?%;line-height:%?34?%;color:#a9a9a9}body.?%PAGE?%[data-v-e62d90b0]{background-color:#f7f8f9}",""]),t.exports=a},f937:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"/* components/avatar/avatar.wxss */.avatar-box[data-v-3e0c1840]{width:100%;height:100%;border-radius:50%}.avatar-box .avatar-default[data-v-3e0c1840]{width:100%;height:100%}.avatar-box .avatar-default .avatar-bg[data-v-3e0c1840]{width:100%;height:100%;display:block;float:left}.avatar-box .avatar-default .avatar-text-box[data-v-3e0c1840]{float:left;width:100%;height:100%;margin-top:-100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.avatar-box .avatar-default .avatar-text-box .avatar-text[data-v-3e0c1840]{color:#603813;font-weight:500;text-align:center}.avatar-box .avatar-custom[data-v-3e0c1840]{border-radius:100%;width:100%;height:100%;background-color:#e5e5e5;display:block}",""]),t.exports=a}}]);