(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"0189":function(t,e,a){var i=a("a38e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0f678a26",i,!0,{sourceMap:!1,shadowMode:!1})},"0aa0":function(t,e,a){"use strict";var i=a("dc39"),n=a.n(i);n.a},"1eaf":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{wrapperShow:!1,contentShow:!1}},components:{},props:{sliderList:{type:Array,default:[]}},methods:{show:function(){var t=this;this.setData({wrapperShow:!0}),setTimeout((function(){t.setData({contentShow:!0})}),200)},hide:function(){var t=this;this.setData({contentShow:!1}),setTimeout((function(){t.setData({wrapperShow:!1})}),200)},handleSelectSliderValueFun:function(t){var e=t.currentTarget.dataset.index;if(e==this.sliderList.length-1)return this.hide(),!1;this.$emit("selectWay",{detail:e})}}};e.default=i},2815:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={homeAddDataStorge:a("6ed3").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"header-Bar"},[a("v-uni-view",{staticClass:"layout"},[a("v-uni-view",{staticClass:"currentName",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleLaunchUserSwitchFun.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"_currentName"},[t._v(t._s(t.userName))]),a("v-uni-image",{staticClass:"select",attrs:{src:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/select.png"}})],1),a("v-uni-view",{staticClass:"layout-middle"}),a("v-uni-view",{staticClass:"search",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleToSearchPageFun.apply(void 0,arguments)}}},[a("v-uni-icon",{staticStyle:{width:"26rpx",height:"26rpx","margin-left":"44rpx","margin-top":"18rpx"},attrs:{size:"15",color:"white",type:"search"}}),a("v-uni-view",{staticClass:"underSearch"})],1)],1),a("v-uni-view",{staticClass:"home-count-view"},[a("v-uni-view",{staticClass:"file-count-content-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToViewContractForSelfFun.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"count-text global-title-color"},[t._v(t._s(t.mineSignCount))]),a("v-uni-text",{staticClass:"count-title global-content-color"},[t._v("待自己处理")])],1),a("v-uni-view",{staticClass:"file-count-content-view-middle"}),a("v-uni-view",{staticClass:"file-count-content-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToViewContractForOthersFun.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"count-text global-title-color"},[t._v(t._s(t.otherSignCount))]),a("v-uni-text",{staticClass:"count-title global-content-color"},[t._v("待他人处理")])],1)],1)],1),a("v-uni-view",{staticClass:"launchButton",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleLaunchContractFun.apply(void 0,arguments)}}},[t._v("从聊天文件发起签署")]),a("home-add-dataStorge",{ref:"homeadddataStorge"}),a("slider-picker",{ref:"sliderPicker",attrs:{sliderList:t.sliderList},on:{selectWay:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSliderOperateFun.apply(void 0,arguments)}}}),!t.hasAuth&&t.isLogin?a("v-uni-view",{staticClass:"warning",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.authAction.apply(void 0,arguments)}}},[1==t.authType?a("v-uni-text",{staticClass:"warn-title"},[t._v("您的账号尚未实名认证")]):t._e(),2==t.authType?a("v-uni-text",{staticClass:"warn-title"},[t._v("企业尚未实名认证")]):t._e(),a("v-uni-text",{staticClass:"warn-content"},[t._v("实名认证后可享受加便捷高效的电子合同服务")])],1):t._e(),a("v-uni-view",{class:"user-dialog "+(t.showDialog?"user-dialog--show":"")},[a("v-uni-view",{staticClass:"user-dialog__mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleCloseUserDialogFun.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"user-dialog__container"},[a("v-uni-view",{staticClass:"userSwitch"},[t._v("切换身份"),a("v-uni-view",{staticClass:"company"},[a("v-uni-image",{staticClass:"company-icon",attrs:{src:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/company.png"}}),a("v-uni-view",{staticClass:"company-add",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleCreateCompanyFun.apply(void 0,arguments)}}},[t._v("创建企业")])],1)],1),a("v-uni-scroll-view",{staticStyle:{height:"540rpx"},attrs:{"scroll-y":!0,nowrap:!0}},t._l(t.userList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"userList",attrs:{"data-item":e,"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchUser.apply(void 0,arguments)}}},[e.authStatus?a("v-uni-image",{staticClass:"userList-icon",attrs:{src:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/user.png"}}):t._e(),0==e.auth||1==e.auth?a("v-uni-image",{staticClass:"userList-icon",attrs:{src:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/person.png"}}):t._e(),a("v-uni-view",{staticClass:"userList-name"},[t._v(t._s(e.companyName?e.companyName:e.name?e.name:"未认证用户"))]),e.authStatus?a("v-uni-view",{staticClass:"userList-state",style:"background:"+(1==e.authStatus?"rgba(62,180,168,0.1)":2==e.authStatus?"#FDF0E5":"#F4F4F4")+"; color:"+(1==e.authStatus?"#3EB4A8":2==e.authStatus?"#ED6C00":"#919191")},[t._v(t._s("1"==e.authStatus?"已认证":2==e.authStatus?"认证中":"未认证"))]):t._e(),0==e.auth||1==e.auth?a("v-uni-view",{staticClass:"userList-state",style:"background:"+(1==e.auth?"rgba(62,180,168,0.1)":"#F4F4F4")+"; color:"+(1==e.auth?"#3EB4A8":"#919191")},[t._v(t._s("1"==e.auth?"已认证":"未认证"))]):t._e()],1)})),1),a("v-uni-view",{staticClass:"scroll-under"})],1)],1)],1)},o=[]},3422:function(t,e,a){"use strict";a.r(e);var i=a("c3be"),n=a("7fed");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("0aa0");var s,r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"e95c2d94",null,!1,i["a"],s);e["default"]=l.exports},6046:function(t,e,a){var i=a("84b8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("dd91b76c",i,!0,{sourceMap:!1,shadowMode:!1})},"6b8c":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"weui-half-screen-dialog__bd"},[a("v-uni-view",{staticClass:"item-header"},[a("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[a("v-uni-view",{staticClass:"label"}),a("v-uni-view",{staticClass:"title"},[t._v("云公证")])],1),a("v-uni-view",{staticClass:"checkAll",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.skiptoEvidence.apply(void 0,arguments)}}},[t._v("查看全部")])],1),a("v-uni-view",{staticClass:"item-content"},t._l(t.menuList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"meun-list__item",attrs:{"data-item":e,"data-type":e.type},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.openMenu.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"img",attrs:{src:e.imgUrl,mode:"aspectFit"}}),a("v-uni-text",{staticClass:"words"},[t._v(t._s(e.name))])],1)})),1)],1)},o=[]},"6cbf":function(t,e,a){"use strict";var i=a("6046"),n=a.n(i);n.a},"6ed3":function(t,e,a){"use strict";a.r(e);var i=a("6b8c"),n=a("fb3e");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("b378");var s,r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"5417f622",null,!1,i["a"],s);e["default"]=l.exports},"7fed":function(t,e,a){"use strict";a.r(e);var i=a("1eaf"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"84b8":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"\n.header-Bar[data-v-44022252]{height:%?256?%;background:#333}.layout[data-v-44022252]{width:%?670?%;margin-left:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.currentName[data-v-44022252]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?52?%;margin-left:%?16?%;height:%?46?%;color:#fff;font-size:%?34?%;font-weight:500}._currentName[data-v-44022252]{max-width:%?408?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;height:100%}.layout-middle[data-v-44022252]{width:%?104?%;margin-top:%?56?%;height:%?46?%}.select[data-v-44022252]{display:inline-block;width:%?26?%;height:%?15?%;margin-top:%?20?%;margin-left:%?10?%}.search[data-v-44022252]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?120?%;height:%?64?%;border-radius:%?42?%;margin-top:%?44?%;position:relative;\n   /* 从最下面开始布局 */-webkit-box-align:flex-center;-webkit-align-items:flex-center;align-items:flex-center;color:#fff}.underSearch[data-v-44022252]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?120?%;height:%?64?%;background-color:#fff;opacity:.1;border-radius:%?42?%;position:absolute}.nameselect[data-v-44022252]{position:fixed;height:%?458?%;width:%?670?%;left:%?40?%;top:%?310?%;background:#ff0;border-radius:%?12?%}.file-count-content-view[data-v-44022252]{margin-left:%?16?%;width:%?319?%;height:%?216?%;z-index:5}.file-count-content-view-middle[data-v-44022252]{width:%?1?%;height:%?80?%;margin-top:%?68?%;border-left:%?1?% solid #e1e1e1;z-index:5}.count-text[data-v-44022252]{float:left;display:block;width:100%;height:%?64?%;line-height:%?64?%;margin-top:%?54?%;font-size:%?72?%;font-weight:700;text-align:center}.count-title[data-v-44022252]{float:left;display:block;width:100%;height:%?28?%;margin-top:%?30?%;font-size:%?28?%;font-weight:400;text-align:center;color:#666}.launchButton[data-v-44022252]{width:%?670?%;height:%?100?%;line-height:%?100?%;margin-top:%?130?%;margin-left:%?40?%;font-weight:500;color:#fff;font-size:%?32?%;background:#464646;border-radius:%?8?%;color:#fff;text-align:center}.navigationupdate[data-v-44022252]{float:left;height:%?38?%;width:%?24?%;border-left:%?10?% solid #ee7005;margin-left:%?44?%;margin-top:%?60?%}.recentUpdate[data-v-44022252]{float:left;height:%?44?%;line-height:%?32?%;font-weight:600 ;font-size:%?32?%;margin-top:%?64?%;color:#212121}.page-section-spacing[data-v-44022252]{float:left;margin-top:%?32?%}.contract[data-v-44022252]{float:left;width:%?670?%;height:%?222?%;background:#fff;margin-left:%?40?%;margin-top:%?32?%}.contract-introduce[data-v-44022252]{height:%?96?%;width:%?604?%;margin-left:%?32?%;border-bottom:%?2?% solid #f5f5f5}.contract-title[data-v-44022252]{float:left;width:%?426?%;height:%?48?%;margin-top:%?32?%;font-size:%?30?%;font-weight:500;color:#333;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.contract-right[data-v-44022252]{float:right;height:%?96?%}.contract-reminder[data-v-44022252]{width:%?16?%;height:%?16?%;margin-right:%?8?%;margin-top:%?44?%}.contract-state[data-v-44022252]{float:right;height:%?24?%;margin-top:%?30?%;font-size:%?24?%}.contract-related[data-v-44022252]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;height:%?62?%;width:%?604?%;margin-left:%?32?%;font-size:%?24?%;font-weight:400;color:#666}.contract-other[data-v-44022252]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:1;flex-shrink:1;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;margin-left:%?32?%}.contract-sponsor[data-v-44022252]{max-width:%?264?%;height:%?34?%;margin-top:%?16?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.contract-signatory[data-v-44022252]{width:%?302?%;height:%?34?%;margin-left:%?32?%;margin-top:%?16?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.contract-updatetime[data-v-44022252]{height:%?22?%;font-size:%?22?%;color:#999}.contract-updatetime-middle[data-v-44022252]{height:%?16?%;width:%?18?%;border-left:%?1?% solid #d8d8d8;margin-left:%?16?%;margin-top:%?10?%}.time[data-v-44022252]{height:%?22?%;font-size:%?22?%;color:#999}.userinfo-bg-view[data-v-44022252]{float:left;position:relative;width:%?686?%;height:%?420?%;margin-top:%?12?%;margin-left:%?32?%}.circle-view[data-v-44022252]{position:absolute;width:%?140?%;height:%?140?%;border-radius:50%;margin-left:%?42?%;background-color:#fff}.home-userinfo-view[data-v-44022252]{position:absolute;width:%?640?%;height:%?216?%;margin-top:%?20?%;margin-bottom:%?20?%;background-color:#fff}.userinfo-cell[data-v-44022252]{float:left;width:100%;height:%?140?%}.user-icon[data-v-44022252]{float:left;width:%?120?%;height:%?120?%;border-radius:50%;margin-left:%?53?%;margin-top:%?0?%;overflow:hidden;display:block}.username-text[data-v-44022252]{float:left;margin-left:%?32?%;height:%?40?%;margin-top:%?20?%;font-size:%?34?%}.auth-btn[data-v-44022252]{float:left;margin-left:%?32?%;width:%?130?%;height:%?40?%;margin-top:%?20?%;border-bottom:%?1?% #e5e5e5 solid;color:#ff9f3d;line-height:%?40?%;font-size:%?30?%}.auth-icon[data-v-44022252]{float:left;display:block;width:%?180?%;height:%?40?%;margin-top:%?12?%;margin-left:%?32?%;margin-right:%?200?%}.user-content-cell[data-v-44022252]{position:relative;float:left;width:100%;height:%?113?%;border-top:%?1?% #e5e5e5 solid}.user-content-cell[data-v-44022252]:first-child{border-top:none}.wait-affirm-count[data-v-44022252]{position:absolute;right:%?50?%;width:%?50?%;height:%?50?%;border-radius:50%;text-align:center;font-size:%?28?%;font-weight:200;color:#fff;top:%?31.5?%;line-height:%?50?%}.user-content-cell-icon[data-v-44022252]{float:left;width:%?40?%;height:%?40?%;margin-top:%?36.5?%;margin-left:%?20?%}.user-content-cell-text[data-v-44022252]{float:left;width:auto;height:%?113?%;margin-left:%?20?%;line-height:%?113?%;font-size:%?30?%;font-weight:400}.home-count-view[data-v-44022252]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?670?%;height:%?216?%;border-radius:%?8?%;margin-left:%?40?%;margin-top:%?32?%;background-color:#fff;margin-right:%?40?%;box-shadow:%?2?% %?2?% %?2?% %?2?% hsla(0,0%,78.4%,.1)}.home-count-bg[data-v-44022252]{position:absolute;width:%?750?%;height:%?312?%;left:%?0?%;top:0;z-index:-1}.userinfo-cover-view[data-v-44022252]{float:left;width:100%;height:%?108?%}\n.warning[data-v-44022252]{position:fixed;bottom:%?100?%;left:%?0?%;height:%?148?%;width:%?670?%;margin:%?32?% %?40?%;border-top:%?1?% #e5e5e5 solid;border-radius:%?8?%;border-left:%?8?% solid #464646;background:#fff}\n.warn-title[data-v-44022252]{display:block;margin-top:%?32?%;margin-left:%?48?%;height:%?42?%;font-size:%?30?%;color:#202020}.warn-content[data-v-44022252]{display:block;margin-top:%?10?%;margin-left:%?48?%;height:%?32?%;font-size:%?24?%;color:#999}.user-dialog__mask[data-v-44022252]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:10;background:rgba(0,0,0,.5);display:none}.user-dialog__container[data-v-44022252]{position:fixed;top:%?240?%;width:%?606?%;/*弹窗布局宽*/min-height:%?458?%;/*弹窗布局高，与下面弹出距离transform有关*/margin-left:%?72?%;background:#fff;-webkit-transform:translateY(-200%);transform:translateY(-200%);/*弹框弹出距离，与弹框布局高度有关，如300%表示弹起距离为3倍弹窗高度*/-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;z-index:12;border-radius:%?12?%}.user-dialog--show .user-dialog__container[data-v-44022252]{-webkit-transform:translateY(0);transform:translateY(0)}.user-dialog--show .user-dialog__mask[data-v-44022252]{display:block}.userSwitch[data-v-44022252]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:%?16?% %?48?% %?0?% %?48?%;height:%?96?%;line-height:%?96?%;color:#999;font-size:%?28?%;border-bottom:%?2?% solid #eee}.company[data-v-44022252]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?158?%;color:#6e82a9}.company-icon[data-v-44022252]{width:%?28?%;height:%?28?%;margin-top:%?34?%}.company-add[data-v-44022252]{width:75%;text-align:right}.userList[data-v-44022252]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?108?%;margin:%?0?% %?48?%;font-size:%?30?%;font-weight:400;color:#333;border-bottom:%?2?% solid #f5f5f5}.userList-icon[data-v-44022252]{margin-top:%?34?%;width:%?40?%;height:%?40?%}.userList-name[data-v-44022252]{margin-top:%?34?%;margin-left:%?16?%;width:%?328?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.userList-state[data-v-44022252]{width:%?92?%;height:%?40?%;line-height:%?40?%;font-size:%?20?%;background-color:rgba(62,180,168,.1);color:#3eb4a8;margin-top:%?32?%;margin-left:%?32?%;text-align:center;font-weight:600}.scroll-under[data-v-44022252]{height:%?32?%}body.?%PAGE?%[data-v-44022252]{background-color:#f7f8f9}",""]),t.exports=e},a04e:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".slider-picker--area[data-v-e95c2d94]{position:fixed;top:0;left:0;width:100%;height:100%;display:none;z-index:39}.wrapper-show[data-v-e95c2d94]{display:block}.slider-picker--area .mask[data-v-e95c2d94]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}\n.slider-picker--area .slider-box[data-v-e95c2d94]{position:absolute;left:0;bottom:50px;-webkit-transform:translateY(100%);transform:translateY(100%);padding:%?10?% %?48?%;width:100%;background-color:#fff;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;box-sizing:border-box}\n.slider-picker--area .slider-box.content-show[data-v-e95c2d94]{-webkit-transform:translateY(0);transform:translateY(0)}.slider-picker--area .slider-box .slider-item[data-v-e95c2d94]{width:100%;height:%?104?%;line-height:%?104?%;text-align:center;border-bottom:%?2?% solid #e6e6e6;font-size:%?32?%;color:#212121}.slider-picker--area .slider-box .slider-item[data-v-e95c2d94]:last-of-type{color:#999;border-bottom:none}",""]),t.exports=e},a38e:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"/* components/home-add-dataStorge/home-add-dataStorge.wxss */\n/*!\n * WeUI v2.3.0 (https://github.com/weui/weui-wxss)\n * Copyright 2020 Tencent, Inc.\n * Licensed under the MIT license\n */.weui-half-screen-dialog__bd[data-v-5417f622]{margin:%?40?% %?40?% %?0?% %?40?%;width:%?670?%;padding:0}.item-header[data-v-5417f622]{margin-left:%?8?%;margin-right:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?80?%}.label[data-v-5417f622]{height:%?34?%;border-left:%?8?% solid #ee7005}.title[data-v-5417f622]{padding-left:%?20?%;font-size:%?32?%}.checkAll[data-v-5417f622]{font-size:%?28?%;color:#999}.item-content[data-v-5417f622]{padding:%?38?% 0 %?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;background:#fff}.meun-list__item[data-v-5417f622]{text-align:center}.meun-list__item .img[data-v-5417f622]{width:%?84?%;height:%?84?%}.meun-list__item .words[data-v-5417f622]{display:block;font-size:%?24?%;line-height:%?24?%;font-weight:400;color:#999}",""]),t.exports=e},a932:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=getApp(),n={data:function(){return{dialog1:!1,menuList:[{type:"image",imgUrl:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/image.png",id:"1",name:"图片存证"},{type:"file",imgUrl:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/file.png",id:"5",name:"文件存证"},{type:"voice",imgUrl:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/voice.png",id:"3",name:"语音存证"},{type:"video",imgUrl:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/video.png",id:"4",name:"视频存证"}]}},components:{},props:{},methods:{openMenu:function(t){if(!i.globalData.isLoginIn())return uni.switchTab({url:"/pages/pm/pmHome"}),!1;var e=t.currentTarget.dataset.type,a=JSON.parse(localStorage.getItem("currentUser")),n=!1;return(a.companyId&&1==a.authStatus||!a.companyId&&1==a.auth)&&(n=!0),!n&&a.companyId?(uni.showModal({title:"立即进行企业实名认证",content:"实名认证后可享受加便捷高效的电子合同服务",showCancel:!0,cancelText:"暂不认证",confirmText:"立即认证",success:function(t){if(t.cancel){var e=getCurrentPages();e.length>1&&uni.navigateBack(),uni.hideLoading({})}else uni.navigateTo({url:"/pages/authentication/company/company-auth-type/index"})}}),!1):n||a.companyId?void("video"==e?uni.navigateTo({url:"/pages/evidence/videoRecord/videoRecord?type="+e}):"file"==e||uni.navigateTo({url:"/pages/evidence/addCertificate/addCertificate?type="+e})):(uni.showModal({title:"立即进行个人实名认证",content:"实名认证后可享受加便捷高效的电子合同服务",showCancel:!0,cancelText:"暂不认证",confirmText:"立即认证",success:function(t){if(t.cancel){var e=getCurrentPages();e.length>1&&uni.navigateBack(),uni.hideLoading({})}else uni.navigateTo({url:"/pages/authentication/person/person-auth-type/index"})}}),!1)},skiptoEvidence:function(){uni.switchTab({url:"/pages/evidence/index"})}}};e.default=n},b1f8:function(t,e,a){"use strict";function i(t){throw new Error('"'+t+'" is read-only')}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},b378:function(t,e,a){"use strict";var i=a("0189"),n=a.n(i);n.a},c3be:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"slider-picker--area "+(t.wrapperShow?"wrapper-show":"")},[a("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}}),a("v-uni-view",{class:"slider-box "+(t.contentShow?"content-show":"")},t._l(t.sliderList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"slider-item",attrs:{"data-value":e.value,"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectSliderValueFun.apply(void 0,arguments)}}},[t._v(t._s(e.label))])})),1)],1)},o=[]},c5a3:function(t,e,a){"use strict";a.r(e);var i=a("f7d4"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},d348:function(t,e,a){"use strict";a.r(e);var i=a("2815"),n=a("c5a3");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("6cbf");var s,r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"44022252",null,!1,i["a"],s);e["default"]=l.exports},dc39:function(t,e,a){var i=a("a04e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("13913480",i,!0,{sourceMap:!1,shadowMode:!1})},f7d4:function(t,e,a){"use strict";(function(t){var i=a("4ea4");a("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("b1f8")),o=a("3b7d"),s=a("aa5f"),r=i(a("6ed3")),l=i(a("3422")),c=getApp(),u={data:function(){return{showDialog:!1,mineSignCount:"0",otherSignCount:"0",hasAuth:!1,fileName:"",userName:"",userList:[],sliderList:[{label:"发起文件签署",value:1},{label:"从合同模版发起签署",value:2},{label:"取消",value:2}],authType:1,isLogin:""}},components:{homeAddDataStorge:r.default,sliderPicker:l.default},props:{},onLoad:function(){},onShow:function(){this.initUserStatusOnLoadingFun()},onUnload:function(){},onShareAppMessage:function(){},methods:{initUserStatusOnLoadingFun:function(){var t=JSON.parse(localStorage.getItem("currentUser")),e="";t&&(e=t.companyId?t.companyName:t.name&&""!=t.name?t.name:"未登录用户"),this.setData({userName:e,isLogin:c.globalData.isLoginIn()}),this.getCompanyUserInfoFun(),this.getContractCountFun()},getSignalUsersInfoFun:function(){var t=this;uni.showLoading({title:"加载中"}),(0,o.get)({url:s.get_user_info,success:function(e){var a=JSON.parse(localStorage.getItem("currentUser")),i=JSON.parse(JSON.stringify(t.userList));i.unshift(e),a||(uni.setStorageSync("currentUser",e),(0,n.default)("currentUser"),a=e),uni.setStorageSync("userAccount",e.account),t.setData({userList:i,userName:a&&a.companyId?a.compantName:e.name?e.name:"未认证用户",authType:1,hasAuth:!!(a.companyId&&1==a.authStatus||1==a.auth)}),c.globalData.isAuth=!!(a.companyId&&1==a.authStatus||1==a.auth)},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)},complete:function(){uni.hideLoading()}})},getCompanyUserInfoFun:function(){var t=this;uni.showLoading({title:"加载中"}),(0,o.get)({url:s.companyList,success:function(e){var a=e.data;t.setData({userList:a}),t.getSignalUsersInfoFun()},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)},complete:function(){uni.hideLoading()}})},handleToSearchPageFun:function(){if(!this.handleGetUserLoginStatusFun())return c.globalData.login(),!1;c.globalData.checkHasAuth()&&uni.navigateTo({url:"/pages/searchResult/searchResult"})},handleCloseUserDialogFun:function(){this.setData({showDialog:!1})},handleLaunchUserSwitchFun:function(){if(!this.handleGetUserLoginStatusFun())return c.globalData.login(),!1;this.setData({showDialog:!0})},switchUser:function(e){var a=e.currentTarget.dataset.item,i=a.companyId?a.companyName:a.name;t.log(a,999),this.setData({userName:i||"未认证用户",showDialog:!1,authType:a.companyId?2:1,hasAuth:!!(a.companyId&&1==a.authStatus||!a.companyId&&1==a.auth)}),c.globalData.isAuth=!!(a.companyId&&1==a.authStatus||!a.companyId&&1==a.auth),uni.setStorageSync("currentUser",a),this.getContractCountFun()},handleCreateCompanyFun:function(){if(!this.handleGetUserLoginStatusFun())return c.globalData.login(),!1;c.globalData.checkHasAuth()&&uni.navigateTo({url:"/pages/authentication/company/company-create/index"})},handleToViewContractForSelfFun:function(){if(!this.handleGetUserLoginStatusFun())return c.globalData.login(),!1;c.globalData.checkHasAuth()&&uni.navigateTo({url:"/pages/contract/contractList/contractList?searchType=2&pageTitle=待自己处理"})},handleToViewContractForOthersFun:function(){if(!this.handleGetUserLoginStatusFun())return c.globalData.login(),!1;c.globalData.checkHasAuth()&&uni.navigateTo({url:"/pages/contract/contractList/contract?searchType=3&pageTitle=待他人处理"})},handleLaunchContractFun:function(){if(!this.handleGetUserLoginStatusFun())return c.globalData.login(),!1},handleSliderOperateFun:function(t){switch(t.detail){case 0:this.handleLaunchByfileFun();break;case 1:this.handleLaunchByTemplateFun();break;default:break}this.$refs.sliderPicker.hide()},handleLaunchByfileFun:function(){uni.chooseMessageFile({count:1,type:"file",success:function(t){var e=t.tempFiles[0].name,a=t.tempFiles[0].name+"";return-1==a.indexOf(".pdf")&&-1==a.indexOf(".doc")?(setTimeout((function(){uni.showToast({title:"文件格式必须为.pdf或.doc",icon:"none",duration:2e3,mask:!0})}),50),!1):t.tempFiles[0].size>5242880?(setTimeout((function(){uni.showToast({title:"文件大小不能超过5MB",icon:"none",duration:2e3,mask:!0})}),50),!1):void(0,o.upload)({url:s.get_contract_uploadFile,filePath:t.tempFiles[0].path,key:"file",success:function(t){uni.navigateTo({url:"/pages/contract/sign/launchSign/launchSign?fileName="+e+"&url="+t.url+"&coverUrl="+t.coverUrl+"&backfileName="+t.fileName})},fail:function(t){setTimeout((function(){uni.showToast({title:t,icon:"none"})}),50)}})},fail:function(t){setTimeout((function(){uni.showToast({title:t})}),50)}})},handleLaunchByTemplateFun:function(){uni.navigateTo({url:"/pages/template/contractTemplate/contractTemplate"})},getContractCountFun:function(){var t=this;(0,o.get)({url:s.update_count,success:function(e){t.setData({otherSignCount:"undefined"==e?0:e.otherContractCount,mineSignCount:"undefined"==e?0:e.myContractCount})},fail:function(t){setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)}})},authAction:function(){var t=JSON.parse(localStorage.getItem("currentUser")).companyId;void 0==t?uni.navigateTo({url:"/pages/authentication/personal/personal-auth-type/index"}):uni.navigateTo({url:"/pages/authentication/company/company-auth-type/index"})},handleGetUserLoginStatusFun:function(){return c.globalData.isLoginIn()}}};e.default=u}).call(this,a("5a52")["default"])},fb3e:function(t,e,a){"use strict";a.r(e);var i=a("a932"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);