(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/searchResult/searchResult"],{"10b9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,a=n("3b7d"),c=n("5746");function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=n("537e"),u=function(){n.e("components/search/search").then(function(){return resolve(n("5fea"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/searchHighlightTextView/searchHighlightTextView").then(function(){return resolve(n("b969"))}.bind(null,n)).catch(n.oe)},f=(r={data:function(){return{searchType:0,searchParams:"",contracts:[],timer:null,currentContractTitle:"",keyName:""}},components:{search:u,searchHighlightTextView:s},props:{},onLoad:function(t){},onShow:function(){this.getContractsFun()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}},i(r,"onShareAppMessage",(function(){})),i(r,"methods",{getCurrentContractStatusFun:function(t){switch(t){case 1:return{name:"签署中",bg:"red"};case 2:return{name:"已完成",bg:"red"};case 3:return{name:"已拒绝",bg:"red"};case 4:return{name:"已撤销",bg:"#396FFF"};case 5:return{name:"草稿",bg:"#02B449  "};case 6:return{name:"已失效",bg:"#02B449"};case 7:return{name:"填写中",bg:"red"};default:break}},inputSearchFun:function(t){var e=this;this.setData({keyName:t.detail}),this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){e.getContractsFun(t.detail)}),300)})},cancleSearchFun:function(){this.setData({pageIndex:0}),this.getContractsFun()},getContractsFun:function(t){var e=this,n=c.get_contract_list,r={searchType:0,contractTitle:t||"",pageIndex:0,pageSize:10};(0,a.get)({url:n,params:r,success:function(t){console.log(t);var n=t.data;n.map((function(t){var n=e.getCurrentContractStatusFun(t.status);t.gmtModified=e.formatTimeConvert(t.gmtModified,0),t.statusText=n.name,t.bgStyle=n.bg})),e.setData({contracts:n})},fail:function(t){o.showError(t)}})},formatDateFun:function(t){var e=this;t.forEach((function(t){t.gmtModified=e.formatTimeConvert(t.gmtModified,0)}))},formatTimeConvert:function(t,e){t+="",t=10==t.length?1e3*t:t;var n=new Date(Number(t)),r=n.getFullYear(),a=n.getMonth()+1;a=a<10?"0"+a:a;var c=n.getDate();c=c<10?"0"+c:c;var i=n.getHours();i=i<10?"0"+i:i;var o=n.getMinutes(),u=n.getSeconds();return o=o<10?"0"+o:o,u=u<10?"0"+u:u,0==e?r+"-"+a+"-"+c:r+"-"+a+"-"+c+" "+i+":"+o+":"+u},pushToDetail:function(e){var n=e.currentTarget.dataset.item.id;t.navigateTo({url:"/pages/contract/sign/next/signConfirm/signConfirm?contractId="+n})}}),r);e.default=f}).call(this,n("543d")["default"])},2401:function(t,e,n){"use strict";var r=n("e806"),a=n.n(r);a.a},"2c76":function(t,e,n){"use strict";n.r(e);var r=n("10b9"),a=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e["default"]=a.a},"7b31":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return r}));var r={search:function(){return n.e("components/search/search").then(n.bind(null,"5fea"))},searchHighlightTextView:function(){return n.e("components/searchHighlightTextView/searchHighlightTextView").then(n.bind(null,"b969"))}},a=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"7c06":function(t,e,n){"use strict";(function(t){n("e09c");r(n("66fd"));var e=r(n("e1cb"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e1cb:function(t,e,n){"use strict";n.r(e);var r=n("7b31"),a=n("2c76");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("2401");var i,o=n("f0c5"),u=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=u.exports},e806:function(t,e,n){}},[["7c06","common/runtime","common/vendor"]]]);