(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/collection/templateCollection/templateCollection"],{"1b21":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("3b7d"),i=n("1d1a");function o(t){return l(t)||u(t)||c(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function l(t){if(Array.isArray(t))return s(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n("537e");var f=function(){n.e("components/search/search").then(function(){return resolve(n("5fea"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/searchHighlightTextView/searchHighlightTextView").then(function(){return resolve(n("b969"))}.bind(null,n)).catch(n.oe)},d={data:function(){return{payTemplates:[],timer:null,keyName:"",pageIndex:1,pageSize:10,total:0,isTemplate:1,isPullingDown:!1,isLoadingMore:!1}},components:{search:f,searchHighlightTextView:m},props:{},onLoad:function(t){this.setData({isTemplate:t.isTemplate}),this.getTemplate()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onShareAppMessage:function(){},methods:{getTemplate:function(){var e=this,n={name:this.keyName||"",pageIndex:this.pageIndex,pageSize:this.pageSize};(0,a.get)({url:i.get_pay_template_list,params:n,success:function(t){var n=t.data;n.map((function(t){t.gmtModified=e.formatTimeConvert(t.gmtModified,1),t.amount=(t.amount/100).toFixed(2)})),e.setData({payTemplates:[].concat(o(e.payTemplates),o(n)),total:t.totalCount,isPullingDown:!1,isLoadingMore:!1})},fail:function(e){setTimeout((function(){t.showToast({icon:"none",title:e})}),50)}})},handlePullDownFun:function(){this.setData({pageIndex:1,pageSize:10,total:0,payTemplates:[],isPullingDown:!0}),this.getTemplate()},handleToBottomFun:function(){this.total<=this.contractTemplates.length||(this.setData({pageIndex:this.pageIndex+1,isLoadingMore:!0}),this.getTemplate())},formatTimeConvert:function(t,e){t+="",t=10==t.length?1e3*t:t;var n=new Date(Number(t)),a=n.getFullYear(),i=n.getMonth()+1;i=i<10?"0"+i:i;var o=n.getDate();o=o<10?"0"+o:o;var r=n.getHours();r=r<10?"0"+r:r;var c=n.getMinutes(),u=n.getSeconds();return c=c<10?"0"+c:c,u=u<10?"0"+u:u,0==e?a+"年"+i+"月"+o+"日":a+"年"+i+"月"+o+"日 "+r+":"+c+":"+u},templateSelect:function(e){var n=e.currentTarget.dataset.name,a=e.currentTarget.dataset.amount,i=e.currentTarget.dataset.id;t.navigateTo({url:"/pages/collection/dirctCollection/dirctCollection?templateName=".concat(n,"&templateAmount=").concat(a,"&isTemplate=").concat(this.isTemplate,"&templateId=").concat(i)})},inputSearchFun:function(t){var e=this;this.setData({keyName:t.detail,pageIndex:1,total:0}),this.timer&&clearTimeout(this.timer),this.setData({timer:setTimeout((function(){e.getTemplate(t.detail)}),300)})},cancleSearchFun:function(){this.setData({keyName:"",pageIndex:1,payTemplates:[]}),this.getTemplate()}}};e.default=d}).call(this,n("543d")["default"])},"2a88":function(t,e,n){},"2aa9":function(t,e,n){"use strict";var a=n("2a88"),i=n.n(a);i.a},"6a79":function(t,e,n){"use strict";(function(t){n("e09c");a(n("66fd"));var e=a(n("7911"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"70b1":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={search:function(){return n.e("components/search/search").then(n.bind(null,"5fea"))},searchHighlightTextView:function(){return n.e("components/searchHighlightTextView/searchHighlightTextView").then(n.bind(null,"b969"))}},i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},7911:function(t,e,n){"use strict";n.r(e);var a=n("70b1"),i=n("f1911");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("2aa9");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=u.exports},f1911:function(t,e,n){"use strict";n.r(e);var a=n("1b21"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}},[["6a79","common/runtime","common/vendor"]]]);