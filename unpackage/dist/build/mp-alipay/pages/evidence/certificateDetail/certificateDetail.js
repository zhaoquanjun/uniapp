(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/evidence/certificateDetail/certificateDetail"],{2338:function(t,e,n){"use strict";n.r(e);var i=n("fefc"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},4133:function(t,e,n){},"5b3f":function(t,e,n){"use strict";(function(t){n("e09c");i(n("66fd"));var e=i(n("d8c9"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])},8610:function(t,e,n){"use strict";var i=n("4133"),a=n.n(i);a.a},"8fd6":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={halfSlideItem:function(){return n.e("components/halfSlideItem/halfSlideItem").then(n.bind(null,"933a"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.tools.formatTime(t.dataList.gmtCreate,"Y-M-D h:m:s")),i=t.tools.formatTime(t.dataList.gmtModified,"Y-M-D h:m:s");t.$mp.data=Object.assign({},{$root:{g0:n,g1:i}})},o=[]},d8c9:function(t,e,n){"use strict";n.r(e);var i=n("8fd6"),a=n("2338");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("8610");var c,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=u.exports},fefc:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("3b7d"),a=n("26c2"),o=n("537e"),c=(getApp(),null),s=t.createInnerAudioContext(),u={1:"one-filetype-doc",2:"one-filetype-image",3:"one-filetype-music",4:"one-filetype-video",5:"one-contract"},r=function(){n.e("components/halfSlideItem/halfSlideItem").then(function(){return resolve(n("933a"))}.bind(null,n)).catch(n.oe)},d={data:function(){return{imageSrc:"",id:"",dataList:{},icon:"one-filetype-image",duration:0,isPlay:!1,videoPlayTime:0,showVideoPlayTime:"00:00:00",textContext:"",pdfUrl:"",contractId:"",type:"sign",audioContext:null,contractList:[],evidenceMenuShow:!1,durationShow:""}},components:{halfSlideItem:r},props:{},onLoad:function(t){this.setData({id:t.id,type:t.type}),this.fetchRecords(),"data"==t.type&&this.getContractList()},onReady:function(){this.setData({audioContext:t.createAudioContext("myAudio")})},methods:{handlePlayFun:function(t){console.log(this.audioContext,this.audioContext._getAppStatus()),this.audioContext.play(),console.log(this.audioContext._getAppStatus())},playToEndFun:function(t){this.audioContext.pause(),this.audioContext.seek(0),this.audioContext.pause()},fetchRecords:function(){var e=this,n=this;t.showLoading({title:"加载中"});var c=a.evidence_detail+"?id="+this.id;(0,i.get)({url:c,success:function(o){t.hideLoading();var c=u[o.fileType];if(n.setData({dataList:o||{},icon:c,contractId:o.filePath}),1===o.fileType&&n.openTxt(),o.fileType,o.fileType,5===o.fileType){var s=a.get_certificate_address+"/"+e.dataList.id;t.showLoading({title:"加载中"}),(0,i.get)({url:s,success:function(t){e.downloadPdfFun(t,0)},fail:function(e){t.hideLoading()}})}},fail:function(e){t.hideLoading(),o.showError(e)}})},handleViewDetailFun:function(){"sign"==this.type?t.navigateTo({url:"/pages/contract/sign/next/contractDetail/contractDetail?contractId=".concat(this.contractId)}):this.previewCertificate()},openTxt:function(){var e=this,n=t.getFileSystemManager();t.downloadFile({url:this.dataList.filePath,success:function(t){var i=t.tempFilePath;n.readFile({filePath:i,encoding:"utf8",complete:function(t){console.log(t.data),e.setData({textContext:JSON.parse(t.data).context||""})}})}})},checkImage:function(e){this.setData({imageSrc:e.currentTarget.dataset.url}),t.navigateTo({url:"?imageSrc="+this.imageSrc})},setVoice:function(){var t=this,e=this.dataList.filePath;s.src=e||"",setTimeout((function(){var e=t.showTime(s.duration);t.setData({duration:s.duration,durationShow:e}),s.onError((function(t){console.log(t.errMsg)})),s.onEnded((function(e){s.stop(),clearInterval(c),t.setData({isPlay:!1,videoPlayTime:0,showVideoPlayTime:"00:00:00"})})),s.onTimeUpdate((function(n){s.duration&&!t.duration&&(e=t.showTime(s.duration),t.setData({duration:s.duration,durationShow:e}))}))}),200)},showTime:function(t){function e(t){return t<10?"0"+t:t}var n=parseInt(t%60),i=parseInt(t/60),a=parseInt(i%24),o=parseInt(i/24);return o=e(o),a=e(a),n=e(n),o+":"+a+":"+n},setTime:function(){var t=this;c=setInterval((function(){var e=t.videoPlayTime+1,n=t.showTime(e);t.setData({videoPlayTime:e,showVideoPlayTime:n})}),1e3)},playVoice:function(){var t=this,e=this;this.isPlay?(s.pause(),clearInterval(c),s.onPause((function(){e.setData({isPlay:!1})}))):(s.play(),s.onPlay((function(){clearInterval(c),e.setData({isPlay:!0}),t.setTime()})))},previewCertificate:function(e){var n=this;if(1===this.dataList.status){var c=this.dataList.hash;if(c){var s=a.get_certificate_address+"/"+this.dataList.id;t.showLoading({title:"加载中"}),(0,i.get)({url:s,success:function(t){n.downloadPdfFun(t,1)},fail:function(e){t.hideLoading(),o.showError(e)}})}}else setTimeout((function(){t.showToast({title:"出证中，请稍后再试",icon:"none"})}),50)},downloadPdfFun:function(e,n){var i=this;console.log(e),t.downloadFile({url:e,success:function(e){t.hideLoading();var a=e.tempFilePath;i.setData({pdfUrl:a}),n&&i.openPdfFun(a)},fail:function(e){t.hideLoading(),console.log(e)},complete:function(t){}})},openPdfFun:function(e){console.log(e),t.openDocument({filePath:e,fileType:"pdf",showMenu:!0,success:function(t){console.log(t,"success")},fail:function(t){console.log(t,"fail")},complete:function(){console.log("complete")}})},getContractList:function(){var t=this,e={certificateEvidenceId:this.id,pageIndex:0,pageSize:1e3};(0,i.get)({url:a.findContractSubject,params:e,success:function(e){t.setData({contractList:e.data})}})},goContractDetail:function(e){var n=e.currentTarget.dataset.contractid;t.navigateTo({url:"/pages/contract/sign/next/contractDetail/contractDetail?contractId="+n})},showSlideMenu:function(){this.setData({evidenceMenuShow:!0})},goChainListPage:function(){this.setData({evidenceMenuShow:!1}),t.navigateTo({url:"/pages/contract/contractList/chains/chains?id="+this.id})}}};e.default=d}).call(this,n("c11b")["default"])}},[["5b3f","common/runtime","common/vendor"]]]);