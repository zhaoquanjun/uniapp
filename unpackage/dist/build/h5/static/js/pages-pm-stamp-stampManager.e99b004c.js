(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pm-stamp-stampManager"],{"0aa0":function(t,e,a){"use strict";var i=a("dc39"),s=a.n(i);s.a},1259:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.save_personnal_seal=e.upload_painted_wx_url=e.delete_painted_url=e.set_default_seal=e.company_painted_list=e.person_painted_list=e.upload_person_seal=e.upload_company_seal=e.create_seal=void 0;var i=a("3b7d"),s=i.host+"/v1/pass/uploadImgByBase64String";e.create_seal=s;var n=i.host+"/v1/file/saveCompanySeal";e.upload_company_seal=n;var o=i.host+"/v1/file/savePersonalSeal";e.upload_person_seal=o;var r=i.host+"/v1/file/getPersonalSealList";e.person_painted_list=r;var l=i.host+"/v1/file/getEnterpriseSealList";e.company_painted_list=l;var c=i.host+"/v1/file/painted/default";e.set_default_seal=c;var u=i.host+"/v1/file/handleSignImageStatus";e.delete_painted_url=u;var d=i.host+"/v1/pass/uploadFile";e.upload_painted_wx_url=d;var p=i.host+"/v1/file/savePersonalSeal";e.save_personnal_seal=p,t.exports.create_company_cachet_url=i.host+"/v1/file/create/cachet"},"1eaf":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{wrapperShow:!1,contentShow:!1}},components:{},props:{sliderList:{type:Array,default:[]}},methods:{show:function(){var t=this;this.setData({wrapperShow:!0}),setTimeout((function(){t.setData({contentShow:!0})}),200)},hide:function(){var t=this;this.setData({contentShow:!1}),setTimeout((function(){t.setData({wrapperShow:!1})}),200)},handleSelectSliderValueFun:function(t){var e=t.currentTarget.dataset.index;if(e==this.sliderList.length-1)return this.hide(),!1;this.$emit("selectWay",{detail:e})}}};e.default=i},"20b4":function(t,e,a){var i=a("dcbe");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("38d22402",i,!0,{sourceMap:!1,shadowMode:!1})},3422:function(t,e,a){"use strict";a.r(e);var i=a("c3be"),s=a("7fed");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("0aa0");var o,r=a("f0c5"),l=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"e95c2d94",null,!1,i["a"],o);e["default"]=l.exports},7521:function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("4160"),a("caad"),a("fb6a"),a("a434"),a("2532"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a("3b7d"),n=a("1259"),o=a("aa5f"),r=i(a("3422")),l=getApp(),c={data:function(){return{isShowAdd:!0,showDialog:!1,stampArray:[],noStampTitle:"暂无印章",noStampContent:"点击下方按钮生成您的印章",isShowListView:!0,isShowNoListView:!1,createSignImageText:"",defaultStamp:null,isSelect:!1,stampLeft:-1,stampTop:-1,currentPage:-1,currentUser:"",selectedItem:"",userList:[],userList1:[],userList2:[],list:[{label:"设为默认",value:"default"},{label:"删除印章",value:"delete"},{label:"取消",value:"cancel"}],curItem:null,curIndex:-1,currentStorage:null}},components:{sliderPicker:r.default},props:{},onLoad:function(t){null!=t.stampLeft&&this.setData({stampLeft:t.stampLeft,stampTop:t.stampTop,currentPage:t.currentPage});var e="select"==t.style;this.setData({isSelect:e})},onShow:function(){var t=this;this.setData({isShowAdd:!0,userList2:[]}),(0,s.get)({url:o.get_user_info,success:function(e){t.userList2.push(e),t.setData({currentUser:e.name,selectedItem:e}),t.requestStamp()}})},onUnload:function(){},onShareAppMessage:function(){},methods:{requestStamp:function(){var t="",e="";1==this.selectedItem.userType?(console.log("手绘"),t=n.person_painted_list,e="创建手绘签名"):(t=n.company_painted_list,e="创建企业公章"),this.setData({createSignImageText:e});var a=this,i=l.globalData.getUserToken(),o={token:i,"Content-Type":"application/json"};this.selectedItem.companyId&&(o.company_id=this.selectedItem.companyId),(0,s.postBody)({url:t,header:o,params:{},success:function(t){console.log(t);for(var e=0;e<t.length;e++)1==t[e].isDefault&&a.setData({defaultStamp:t[e]});a.updateData(t)},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)},complete:function(){}})},updateData:function(t){var e=0!=t.length;this.setData({stampArray:t,isShowListView:e,isShowNoListView:!e})},addStampAction:function(){"1"==this.selectedItem.userType?uni.navigateTo({url:"add/addStamp"}):uni.showModal({title:"请到电脑端添加公司印章",confirmText:"取消",showCancel:!1})},toggleDialog:function(){this.setData({showDialog:!this.showDialog})},chooseCompany:function(){var t=this;t.setData({userList1:[]}),(0,s.get)({url:o.companyList,success:function(e){console.log(e),e.data.forEach((function(e){1==e.authStatus&&t.userList1.push(e)})),t.setData({userList:t.userList2.concat(t.userList1)})}}),this.setData({showDialog:!this.showDialog})},switchUser:function(t){var e=t.currentTarget.dataset.item;this.setData({selectedItem:e,isShowAdd:!e.companyId,currentUser:e.companyId?e.companyName:e.name,showDialog:!this.showDialog}),this.requestStamp()},handleShowOperateToolsFun:function(t){if(!this.selectedItem.companyId||this.selectedItem.roleTypes.includes("1")||this.selectedItem.roleTypes.includes("2")){var e=[{label:"设为默认",value:"default"},{label:"删除印章",value:"delete"},{label:"取消",value:"cancel"}];2==t.currentTarget.dataset.item.status&&1!=t.currentTarget.dataset.item.isDefault||(e=e.slice(2)),this.setData({list:e}),this.setData({curItem:t.currentTarget.dataset.item,curIndex:t.currentTarget.dataset.index}),this.$refs.sliderPicker.show()}},handleSelectItemFun:function(t){switch(t.detail){case 0:2==this.curItem.status?this.setDefaultSealFun():this.isShowAdd&&this.deleteStamp();break;case 1:2==this.curItem.status&&this.isShowAdd&&this.deleteStamp();break;default:break}this.$refs.sliderPicker.hide()},setDefaultSealFun:function(){var t=this;uni.showLoading({title:"加载中"}),(0,s.put)({url:set_default_seal+"/"+this.curItem.signImageId,success:function(){t.requestStamp(),setTimeout((function(){uni.showToast({icon:"none",title:"设置成功"})}),50)},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)},complete:function(){uni.hideLoading()}})},deleteStamp:function(){var t=this;if(1==this.curItem.isDefault)return setTimeout((function(){uni.showToast({icon:"none",title:"默认印章不能删除"})}),50),!1;uni.showModal({title:"提示",content:"确认删除印章吗？",success:function(e){if(e.confirm){uni.showLoading({title:"删除中..."});var a={signImageId:t.curItem.signImageId},i=l.globalData.getUserToken(),o={token:i,"Content-Type":"application/json"};(0,s.post)({url:n.delete_painted_url+"/99?signImageId="+a.signImageId,params:a,header:o,success:function(){var e=t.stampArray;e.splice(t.curIndex,1),t.updateData(e),uni.hideLoading(),setTimeout((function(){uni.showToast({icon:"none",title:"删除成功"})}),50)},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)}})}else e.cancel&&console.log("用户点击取消")}})}}};e.default=c},"7b4c":function(t,e,a){"use strict";a.r(e);var i=a("7521"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"7fed":function(t,e,a){"use strict";a.r(e);var i=a("1eaf"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"8c74":function(t,e,a){"use strict";a.r(e);var i=a("ffdd"),s=a("7b4c");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("e422");var o,r=a("f0c5"),l=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"1c4358cb",null,!1,i["a"],o);e["default"]=l.exports},a04e:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".slider-picker--area[data-v-e95c2d94]{position:fixed;top:0;left:0;width:100%;height:100%;display:none;z-index:39}.wrapper-show[data-v-e95c2d94]{display:block}.slider-picker--area .mask[data-v-e95c2d94]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.slider-picker--area .slider-box[data-v-e95c2d94]{position:absolute;left:0;bottom:0;-webkit-transform:translateY(100%);transform:translateY(100%);padding:%?10?% %?48?%;width:100%;background-color:#fff;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;box-sizing:border-box}.slider-picker--area .slider-box.content-show[data-v-e95c2d94]{-webkit-transform:translateY(0);transform:translateY(0)}.slider-picker--area .slider-box .slider-item[data-v-e95c2d94]{width:100%;height:%?104?%;line-height:%?104?%;text-align:center;border-bottom:%?2?% solid #e6e6e6;font-size:%?32?%;color:#212121}.slider-picker--area .slider-box .slider-item[data-v-e95c2d94]:last-of-type{color:#999;border-bottom:none}",""]),t.exports=e},c3be:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"slider-picker--area "+(t.wrapperShow?"wrapper-show":"")},[a("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}}),a("v-uni-view",{class:"slider-box "+(t.contentShow?"content-show":"")},t._l(t.sliderList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"slider-item",attrs:{"data-value":e.value,"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectSliderValueFun.apply(void 0,arguments)}}},[t._v(t._s(e.label))])})),1)],1)},n=[]},dc39:function(t,e,a){var i=a("a04e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("13913480",i,!0,{sourceMap:!1,shadowMode:!1})},dcbe:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"/* pages/pm/stamp/stampManager.wxss */.list-view[data-v-1c4358cb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?48?%;width:100%;height:100%;box-sizing:border-box}.cell[data-v-1c4358cb]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?48?%;width:%?300?%;height:%?300?%;background:rgba(247,248,249,.4);border-radius:%?8?%;border:1px solid hsla(0,0%,90.2%,.4)}.cell-stamp-image[data-v-1c4358cb]{float:left;display:block;width:%?220?%;height:%?220?%}.badge[data-v-1c4358cb]{position:absolute;top:0;left:0;font-size:%?24?%;color:#999;padding:%?8?% %?16?%;border-top-left-radius:%?8?%;background-color:#eee}.header-Bar[data-v-1c4358cb]{height:%?120?%;background-color:#f7f8f9}.layout[data-v-1c4358cb]{width:%?670?%;margin-left:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.currentName[data-v-1c4358cb]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?35?%;margin-left:%?16?%;height:%?46?%;color:#333;font-size:%?34?%;font-weight:500}._currentName[data-v-1c4358cb]{max-width:%?408?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;height:100%}.select[data-v-1c4358cb]{display:inline-block;width:%?26?%;height:%?15?%;margin-top:%?20?%;margin-left:%?10?%}.uploadButton[data-v-1c4358cb]{position:fixed;width:%?110?%;height:%?110?%;bottom:%?48?%;left:%?598?%;z-index:10;background:#464646;border-radius:%?110?%;text-align:center;vertical-align:middle;line-height:%?110?%}.uploadButton .one[data-v-1c4358cb]{color:#fff;font-size:%?40?%;position:relative;top:%?4?%}.no-file[data-v-1c4358cb]{position:fixed;width:100%;height:100%}.no-file-title[data-v-1c4358cb]{position:fixed;width:100%;height:%?40?%;top:%?300?%;text-align:center;font-size:%?34?%;font-weight:300}.no-file-content[data-v-1c4358cb]{position:fixed;width:100%;height:%?40?%;top:%?360?%;text-align:center;font-size:%?26?%;font-weight:200}.operation-view[data-v-1c4358cb]{float:left;margin-top:%?32?%;width:100%;height:%?95?%;border-top:%?1?% #f5f5f5 solid}.default-btn[data-v-1c4358cb]{float:left;margin-left:%?32?%;margin-top:%?24?%;width:%?200?%;height:%?48?%}.delete-btn[data-v-1c4358cb]{position:absolute;right:0;top:0;font-size:%?40?%;width:%?50?%;height:%?50?%;color:#fff;background:#464646;text-align:center}.user-dialog__mask[data-v-1c4358cb]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:10;background:rgba(0,0,0,.5);display:none}.user-dialog__container[data-v-1c4358cb]{position:fixed;top:%?240?%;width:%?606?%;\n    /*弹窗布局宽*/min-height:%?458?%;\n    /*弹窗布局高，与下面弹出距离transform有关*/margin-left:%?72?%;background:#fff;-webkit-transform:translateY(-200%);transform:translateY(-200%);\n    /*弹框弹出距离，与弹框布局高度有关，如300%表示弹起距离为3倍弹窗高度*/-webkit-transition:all .25s ease-in;transition:all .25s ease-in;z-index:12;border-radius:%?12?%}.user-dialog--show .user-dialog__container[data-v-1c4358cb]{-webkit-transform:translateY(0);transform:translateY(0)}.user-dialog--show .user-dialog__mask[data-v-1c4358cb]{display:block}.userSwitch[data-v-1c4358cb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:%?16?% %?48?% %?0?% %?48?%;height:%?96?%;line-height:%?96?%;color:#999;font-size:%?28?%;border-bottom:%?2?% solid #eee}.userList[data-v-1c4358cb]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?108?%;margin:%?0?% %?48?%;font-size:%?30?%;font-weight:400;color:#333;border-bottom:%?2?% solid #f5f5f5}.userList-icon[data-v-1c4358cb]{margin-top:%?34?%;width:%?40?%;height:%?40?%}.userList-name[data-v-1c4358cb]{margin-top:%?34?%;margin-left:%?16?%;width:%?328?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.userList-state[data-v-1c4358cb]{width:%?92?%;height:%?40?%;line-height:%?40?%;font-size:%?20?%;background-color:rgba(62,180,168,.1);color:#3eb4a8;margin-top:%?32?%;margin-left:%?32?%;text-align:center;font-weight:600}.scroll-under[data-v-1c4358cb]{height:%?32?%}",""]),t.exports=e},e422:function(t,e,a){"use strict";var i=a("20b4"),s=a.n(i);s.a},ffdd:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"header-Bar"},[a("v-uni-view",{staticClass:"layout"},[a("v-uni-view",{staticClass:"currentName",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.chooseCompany.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"_currentName"},[t._v(t._s(t.currentUser))]),a("v-uni-image",{staticClass:"select",attrs:{src:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/select_black.png"}})],1)],1)],1),a("v-uni-view",{staticClass:"no-file",attrs:{hidden:!t.isShowNoListView}},[a("v-uni-text",{staticClass:"no-file-title global-title-color"},[t._v(t._s(t.noStampTitle))]),a("v-uni-text",{staticClass:"no-file-content global-content-color"},[t._v(t._s(t.noStampContent))])],1),a("v-uni-view",{staticClass:"list-view"},[t._l(t.stampArray,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cell",attrs:{"data-item":e,"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleShowOperateToolsFun.apply(void 0,arguments)}}},[1==e.isDefault?a("v-uni-view",{staticClass:"badge"},[t._v("默认")]):t._e(),a("v-uni-image",{staticClass:"cell-stamp-image",attrs:{src:e.url,"data-index":i,mode:"aspectFit"}})],1)})),a("v-uni-view",{staticStyle:{width:"100%",height:"80rpx"}})],2),t.isShowAdd?a("v-uni-view",{staticClass:"uploadButton",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.addStampAction.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"one one-add"})],1):t._e(),a("v-uni-view",{class:"user-dialog "+(t.showDialog?"user-dialog--show":"")},[a("v-uni-view",{staticClass:"user-dialog__mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleDialog.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"user-dialog__container"},[a("v-uni-view",{staticClass:"userSwitch"},[t._v("切换身份")]),a("v-uni-scroll-view",{staticStyle:{height:"540rpx"},attrs:{"scroll-y":!0,nowrap:!0}},t._l(t.userList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"userList",attrs:{"data-item":e,"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchUser.apply(void 0,arguments)}}},[e.authStatus?a("v-uni-image",{staticClass:"userList-icon",attrs:{src:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/user.png"}}):t._e(),0==e.auth||1==e.auth?a("v-uni-image",{staticClass:"userList-icon",attrs:{src:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/person.png"}}):t._e(),a("v-uni-view",{staticClass:"userList-name"},[t._v(t._s(e.companyName?e.companyName:"")+t._s(e.name))]),e.authStatus?a("v-uni-view",{staticClass:"userList-state",style:"background:"+(1==e.authStatus?"rgba(62,180,168,0.1)":2==e.authStatus?"#FDF0E5":"#F4F4F4")+"; color:"+(1==e.authStatus?"#3EB4A8":2==e.authStatus?"#ED6C00":"#919191")},[t._v(t._s("1"==e.authStatus?"已认证":2==e.authStatus?"认证中":"未认证"))]):t._e(),0==e.auth||1==e.auth?a("v-uni-view",{staticClass:"userList-state",style:"background:"+(1==e.auth?"rgba(62,180,168,0.1)":"#F4F4F4")+"; color:"+(1==e.auth?"#3EB4A8":"#919191")},[t._v(t._s("1"==e.auth?"已认证":"未认证"))]):t._e()],1)})),1),a("v-uni-view",{staticClass:"scroll-under"})],1)],1),a("slider-picker",{ref:"sliderPicker",attrs:{sliderList:t.list},on:{selectWay:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectItemFun.apply(void 0,arguments)}}})],1)},n=[]}}]);