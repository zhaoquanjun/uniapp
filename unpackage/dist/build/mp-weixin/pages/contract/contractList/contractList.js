(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/contract/contractList/contractList"],{"067e":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={search:function(){return a.e("components/search/search").then(a.bind(null,"5fea"))},searchHighlightTextView:function(){return a.e("components/searchHighlightTextView/searchHighlightTextView").then(a.bind(null,"b969"))},halfSlideItem:function(){return a.e("components/halfSlideItem/halfSlideItem").then(a.bind(null,"933a"))}},i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"118d":function(t,e,a){"use strict";a.r(e);var n=a("067e"),i=a("1378");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("9f7c");var c,o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=s.exports},1378:function(t,e,a){"use strict";a.r(e);var n=a("463f"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"2b53":function(t,e,a){},3548:function(t,e,a){"use strict";(function(t){a("e09c");n(a("66fd"));var e=n(a("118d"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"463f":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("3b7d"),i=a("5746");function r(t){return u(t)||s(t)||o(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"===typeof t)return l(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var h=a("537e"),f=function(){a.e("components/search/search").then(function(){return resolve(a("5fea"))}.bind(null,a)).catch(a.oe)},d=function(){a.e("components/searchHighlightTextView/searchHighlightTextView").then(function(){return resolve(a("b969"))}.bind(null,a)).catch(a.oe)},g=function(){a.e("components/halfSlideItem/halfSlideItem").then(function(){return resolve(a("933a"))}.bind(null,a)).catch(a.oe)},p={data:function(){return{searchType:0,title:"",pageIndex:0,pageSize:10,searchParams:"",contracts:[],timer:null,canScroll:!0,payDetail:!1,payContract:!1,applyInvoice:!1,activeItme:{},chainImg:null,showChainImg:!1,topShow:!1,bottomShow:!1}},components:{search:f,searchHighlightTextView:d,halfSlideItem:g},props:{},onLoad:function(e){t.setNavigationBarTitle({title:e.pageTitle}),this.setData({searchType:e.searchType,title:e.pageTitle})},onShow:function(){this.getContractsFun(0)},onPullDownRefresh:function(){this.getContractsFun(1)},onShareAppMessage:function(){},methods:{scrollToBottom:function(){this.canScroll&&(this.setData({bottomShow:!0,pageIndex:this.pageIndex+1}),this.getContractsFun(2))},pullingDownRefresh:function(){this.setData({topShow:!0,pageIndex:0}),this.getContractsFun(1)},pullingDownRefreshStore:function(){this.setData({topShow:!1})},getContractsFun:function(t){var e=this,a={searchType:this.searchType,contractTitle:this.searchParams?this.searchParams:"",pageIndex:this.pageIndex,pageSize:this.pageSize};(0,n.get)({url:i.get_contract_list,params:a,success:function(a){var n=a.data;a.data.length>0?e.setData({canScroll:!0}):e.setData({canScroll:!1}),n.map((function(t){var a=e.getCurrentContractStatusFun(t.status);t.statusText=a.name,t.bgStyle=a.bg,t.gmtModified=e.formatTimeConvert(t.gmtModified,1)}));var i=[];switch(t){case 0:e.setData({contracts:n});break;case 1:e.setData({topShow:!1,contracts:n});break;case 2:i=n,e.setData({bottomShow:!1,contracts:[].concat(r(e.contracts),r(i))});break;case 3:e.setData({contracts:n});break}},fail:function(t){h.showError(t)}})},getCurrentContractStatusFun:function(t){switch(t){case 1:return{name:"签署中",bg:"#66B5ED"};case 2:return{name:"已完成",bg:"#78B03B"};case 3:return{name:"已拒绝",bg:"#E27777"};case 4:return{name:"已撤销",bg:"#999999"};case 5:return{name:"草稿",bg:""};case 6:return{name:"已失效",bg:"#C7C7C7"};case 7:return{name:"填写中",bg:"#66B5ED"};default:break}},inputSearchFun:function(t){var e=this;console.log(t),this.timer&&clearTimeout(this.timer),this.setData({searchParams:t.detail,pageIndex:0,timer:setTimeout((function(){e.getContractsFun(3)}),300)})},cancleSearchFun:function(){this.setData({searchParams:""}),this.getContractsFun(0)},formatTimeConvert:function(t,e){t+="",t=10==t.length?1e3*t:t;var a=new Date(Number(t)),n=a.getFullYear(),i=a.getMonth()+1;i=i<10?"0"+i:i;var r=a.getDate();r=r<10?"0"+r:r;var c=a.getHours();c=c<10?"0"+c:c;var o=a.getMinutes(),s=a.getSeconds();return o=o<10?"0"+o:o,s=s<10?"0"+s:s,0==e?n+"-"+i+"-"+r:n+"-"+i+"-"+r+" "+c+":"+o+":"+s},pushToDetail:function(e){var a=e.currentTarget.dataset.item.id,n=e.currentTarget.dataset.item.status,i="";i=8==this.searchType?"/pages/contract/sign/next/next?isdraft=1&contractId="+a:7==n?"/pages/contract/fill/fill?contractId="+a:"/pages/contract/sign/next/signConfirm/signConfirm?contractId="+a,t.navigateTo({url:i})},statusByIndexFun:function(t){var e=1;switch(t){case 0:e=1;break;case 1:e=3;break;case 2:e=4;break;case 3:e=5;break;case 4:e=8;break;default:break}return e},showChainsMenu:function(t){var e=t.currentTarget.dataset.activeitem;e.id&&(this.$refs.operate.open(),this.setData({activeItme:e,payDetail:e.hasPay,payContract:e.needPay,applyInvoice:e.isOpenInvoice}),console.log(this.applyInvoice,e,222))},showAddEvidenceMenuShow:function(){this.activeItme.id&&(this.$refs.operate.close(),this.$refs.evidence.open())},goPicChain:function(e){var a=e.currentTarget.dataset.totype;if(this.$refs.operate.close(),this.$refs.evidence.close(),"video"==a){var n="&searchType="+this.searchType+"&pageTitle="+this.title;t.navigateTo({url:"/evidence/videoRecord/videoRecord?type="+a+"&fromId="+this.activeItme.id+n})}else t.navigateTo({url:"/evidence/addCertificate/addCertificate?type="+a+"&fromId="+this.activeItme.id})},addChainFromList:function(){this.$refs.operate.close(),this.$refs.evidence.close(),t.navigateTo({url:"/pages/contract/contractList/chainList/chainList?id="+this.activeItme.id})},previewContractChain:function(){var t=this;(0,n.get)({url:i.previewChainImg+this.activeItme.id,success:function(e){t.setData({chainImg:e,showChainImg:!0})},fail:function(e){t.setData({chainImg:null})}})},goChainListPage:function(){this.$refs.operate.close(),t.navigateTo({url:"/pages/contract/contractList/chains/chains?id="+this.activeItme.id})},handlePayContractFun:function(){this.$refs.operate.close(),t.navigateTo({url:"/pages/invvoice/payContract/payContract?id="+this.activeItme.id+"&receiveName="+this.activeItme.initiatorName})},handleApplyInvoiceFun:function(){this.$refs.operate.close();var e="/pages/invvoice/applyInvoice/applyInvoice?id="+this.activeItme.id+"&title="+this.activeItme.contractTitle+"&searchType="+this.searchType+"&pageTitle="+this.title,a=t.getStorageSync("currentUser").companyId;console.log(a),a&&(e+="&initiatorName="+this.activeItme.initiatorName+"&"),t.navigateTo({url:e})},handleViewPayDetailFun:function(){this.$refs.operate.close(),t.navigateTo({url:"/pages/invvoice/payDetail/payDetail?id="+this.activeItme.id})}}};e.default=p}).call(this,a("543d")["default"])},"9f7c":function(t,e,a){"use strict";var n=a("2b53"),i=a.n(n);i.a}},[["3548","common/runtime","common/vendor"]]]);