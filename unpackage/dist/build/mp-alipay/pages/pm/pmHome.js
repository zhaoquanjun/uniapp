(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/pm/pmHome"],{"148e":function(e,n,t){"use strict";(function(e){t("e09c");a(t("66fd"));var n=a(t("2d2c"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("c11b")["createPage"])},"2d2c":function(e,n,t){"use strict";t.r(n);var a=t("b421"),o=t("73c3");for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t("e37d");var c,s=t("f0c5"),r=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);n["default"]=r.exports},5627:function(e,n,t){},"73c3":function(e,n,t){"use strict";t.r(n);var a=t("b196"),o=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=o.a},b196:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("3b7d"),o=t("aa5f"),i=getApp(),c=function(){t.e("components/icon/icon").then(function(){return resolve(t("c5a1"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/avatar/avatar").then(function(){return resolve(t("1537"))}.bind(null,t)).catch(t.oe)},r=function(){t.e("components/wechatUserInfo/wechatUserInfo").then(function(){return resolve(t("9465"))}.bind(null,t)).catch(t.oe)},l=function(){t.e("components/halfSlideItem/halfSlideItem").then(function(){return resolve(t("933a"))}.bind(null,t)).catch(t.oe)},u=function(){t.e("components/sliderPicker/sliderPicker").then(function(){return resolve(t("3422"))}.bind(null,t)).catch(t.oe)},f={data:function(){return{items:[{icon:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/seal_icon.png",name:"印章管理",hasAuth:!0},{icon:"https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/cost_icon.png",name:"费用管理",hasAuth:!0},{icon:"/static/images/invoice/invoice_apply_icon.png",name:"发票申请",hasAuth:!0},{icon:"/static/images/invoice/invoice_apply_icon.png",name:"收款",hasAuth:!0}],sliderList:[{label:"销售模版发起收款",value:0},{label:"独立收款",value:1},{label:"取消",value:2}],isShowReceiptMethod:!1,isAdmin:!1,wechatUserInfoShow:!1,waitAffirmCount:0,unreadContractMessageCount:0,username:"",userPhone:"",userToken:"",isAuth:!1}},components:{icon:c,avatar:s,wechatUserInfo:r,halfSlideItem:l,sliderPicker:u},props:{},onLoad:function(n){if(null!=n.navigateUrl){var t=n.navigateUrl.replace(":","?");t=t.replace("#","="),e.navigateTo({url:t})}},onShow:function(){var n=3==i.globalData.memberType;if(this.setData({isAdmin:n}),this.init(),i.globalData.isLoginIn()){var t=e.getStorageSync("currentUser"),a=this.items;(t.companyId&&t.roleTypes&&!t.roleTypes.includes("1")&&!t.roleTypes.includes("2")||t.companyId&&null==t.roleTypes||!i.globalData.isLoginIn())&&(a[1].hasAuth=!1),(t.companyId&&2!=t.payStatus||!t.companyId)&&(a[3].hasAuth=!1),this.setData({items:a})}else this.setData({items:[]})},onShareAppMessage:function(){},methods:{init:function(){this.setData({username:i.globalData.userName,userPhone:i.globalData.phone,userToken:i.globalData.userToken,isAuth:i.globalData.isAuth})},login:function(){e.redirectTo({url:"/pages/root/root"})},checkUserInfo:function(){e.navigateTo({url:"/pages/pm/mine/mine"})},tapItem:function(n){if(!i.globalData.isLoginIn())return i.globalData.login(),!1;var t=n.currentTarget.dataset.index,a="";switch(t){case 0:a="/pages/pm/stamp/stampManager";break;case 1:a="/pages/costManage/costManage";break;case 2:a="/pages/invoice/invoice";break;case 3:this.selectReceipMathod();break;default:a="/pages/pm/project/projectList";break}3!=t&&e.navigateTo({url:a})},getUserInfo:function(){var n=this;e.getSetting({success:function(t){t.authSetting["scope.userInfo"]?e.getUserInfo({success:function(e){n.getWechatUserInfo({detail:e.userInfo})},fail:function(){n.setData({wechatUserInfoShow:!0})}}):n.setData({wechatUserInfoShow:!0})}})},getWechatUserInfo:function(e){console.log(e.detail),this.setData({wechatUserInfoShow:!1}),(0,a.put)({url:o.update_usericon,params:{iconUrl:e.detail.avatarUrl,nickname:e.detail.nickName},success:function(){i.globalData.updateUserIcon(e.detail.avatarUrl)}})},authAction:function(){this.isAuth||e.navigateTo({url:"/pages/authentication/personal/personal-auth-type/index"})},selectReceipMathod:function(){this.$refs.sliderPicker.show()},handleSliderOperateFun:function(n){switch(console.log(n,222),n.detail){case 0:e.navigateTo({url:"/pages/collection/templateCollection/templateCollection?isTemplate=1"});break;case 1:e.navigateTo({url:"/pages/collection/dirctCollection/dirctCollection?isTemplate=0"});break;default:break}this.$refs.sliderPicker.hide()}}};n.default=f}).call(this,t("c11b")["default"])},b421:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var a={wechatUserInfo:function(){return t.e("components/wechatUserInfo/wechatUserInfo").then(t.bind(null,"9465"))}},o=function(){var e=this,n=e.$createElement;e._self._c},i=[]},e37d:function(e,n,t){"use strict";var a=t("5627"),o=t.n(a);o.a}},[["148e","common/runtime","common/vendor"]]]);