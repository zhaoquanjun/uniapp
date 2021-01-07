(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/evidence/addCertificate/addCertificate"],{"0fc1":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("3b7d"),n=i("26c2"),o=i("537e"),s=e.getRecorderManager(),l=e.createInnerAudioContext(),c=null,r={text:{title:"文字存证",value:1},image:{title:"图片存证",value:2},voice:{title:"语音存证",value:3},video:{title:"视频存证",value:4},file:{title:"文件存证",value:5}},d={image:"addCertificateImageUrl",video:"addCertificateVideo",voice:"addCertificateVoice",file:"addCertificateFile"},u={data:function(){return{ishighLight:!1,type:"",fileType:"",nameValue:"",typeValue:2,addCertificateImageUrl:"",addCertificateText:"",addCertificateVoice:"",addCertificateVideo:"",addCertificateFile:"",isVoiceRecord:!1,time:0,showTime:0,recording:!1,duration:0,isPlay:!1,videoPlayTime:0,showVideoPlayTime:"00:00:00",showDurationTime:"00:00:00",isLoading:!1,uploadMethod:2,addFileInfo:null,formId:null}},components:{},props:{},onLoad:function(t){var i=t.type,a=t.fromId;this.setData({type:i,fileType:r[i].value,formId:a}),e.setNavigationBarTitle({title:r[i].title})},onReady:function(){},methods:{nameInput:function(e){var t=e.detail.value;this.setData({nameValue:t}),this.getHighLight()},tapAddImage:function(){var t=this;e.showActionSheet({itemList:["拍照","从相册选择"],success:function(e){console.log(e.tapIndex),t.chooseImage(0==e.tapIndex?"camera":"album"),0==e.tapIndex?t.setData({uploadMethod:2}):t.setData({uploadMethod:1})}})},chooseImage:function(t){var i=this,a=this;e.chooseImage({count:1,sizeType:"compressed",maxDuration:10,sourceType:[t],success:function(e){var t=e.tempFiles[0].path.slice(e.tempFiles[0].path.lastIndexOf("/")+1).split("."),n=i.random_string()+"."+t[t.length-1];console.log(t);var o={size:(e.tempFiles[0].size/1024/1e3).toFixed(2),path:e.tempFiles[0].path,name:n,originName:e.tempFiles[0].path.slice(e.tempFiles[0].path.lastIndexOf("/")+1)};i.setData({addFileInfo:o});var s=e.tempFilePaths;a.setData({addCertificateImageUrl:s[0]}),a.getHighLight()}})},tapDeleteImage:function(e){var t=this;t.setData({addCertificateImageUrl:""}),t.getHighLight()},checkAllowUploadFun:function(e){var t=[".doc",".docx",".pdf",".bpm"],i=!1;return t.map((function(t){e.indexOf(t)>-1&&(i=!0)})),i},handleChooseFileFun:function(){var t=this;e.chooseMessageFile({count:1,type:"file",success:function(i){console.log(i);var a=i.tempFiles[0].path.slice(i.tempFiles[0].path.lastIndexOf("/")+1).split("."),n=t.random_string()+"."+a[a.length-1],o={size:(i.tempFiles[0].size/1024/1e3).toFixed(2),path:i.tempFiles[0].path,name:n,originName:i.tempFiles[0].path.slice(i.tempFiles[0].path.lastIndexOf("/")+1)};t.setData({addFileInfo:o}),t.checkAllowUploadFun(i.tempFiles[0].name)?(t.setData({addCertificateFile:i.tempFiles[0].path}),t.getHighLight()):setTimeout((function(){e.showToast({title:"文件格式必须为pdf、doc、docx或者bpm",icon:"none",duration:2e3,mask:!0})}),50)},fail:function(t){setTimeout((function(){e.showToast({title:t})}),50)}})},openVoiceRecord:function(){this.setData({isVoiceRecord:!0})},longPressBtn:function(){var e=this;console.log(123123123),clearInterval(c),e.recording?(e.setData({recording:!1}),e.stop()):(e.setData({recording:!0}),e.start())},start:function(){var e=this,t={duration:6e4,sampleRate:16e3,numberOfChannels:1,encodeBitRate:96e3,format:"mp3",frameSize:50};e.openInterval(),s.start(t),s.onStart((function(){console.log("recorder start")})),s.onError((function(e){console.log(e)}))},stop:function(){var e=this,t=this;clearInterval(c),s.stop(),s.onStop((function(i){t.tempFilePath=i.tempFilePath,console.log("停止录音",i);var a=i.tempFilePath,n=i.duration,o=(i.fileSize,i.tempFilePath.slice(i.tempFilePath.lastIndexOf("/")+1).split(".")),s=e.random_string()+"."+o[o.length-1],r={size:(i.fileSize/1024/1e3).toFixed(2),path:i.tempFilePath,name:s,originName:i.tempFilePath.slice(i.tempFilePath.lastIndexOf("/")+1)};e.setData({addCertificateVoice:a,isVoiceRecord:!1,duration:n,showDurationTime:e.showTimeFun(n/1e3),addFileInfo:r}),l.src=a,l.onError((function(e){console.log(e.errMsg),console.log(e.errCode)})),l.onEnded((function(e){l.stop(),t.setData({isPlay:!1,videoPlayTime:0,showVideoPlayTime:"00:00:00"}),clearInterval(c)})),l.onTimeUpdate((function(){}))}))},openInterval:function(){var e=this;function t(e){return e<10?"0"+e:e}c=setInterval((function(){var i=e.time+1,a=parseInt(i%60),n=parseInt(i/60),o=parseInt(n%24),s=parseInt(n/24);s=t(s),o=t(o),a=t(a),e.setData({time:i,showTime:s+":"+o+":"+a})}),1e3)},showTimeFun:function(e){function t(e){return e<10?"0"+e:e}var i=parseInt(e%60),a=parseInt(e/60),n=parseInt(a%24),o=parseInt(a/24);return o=t(o),n=t(n),i=t(i),o+":"+n+":"+i},setTime:function(){var e=this;function t(e){return e<10?"0"+e:e}c=setInterval((function(){var i=e.videoPlayTime+1,a=parseInt(i%60),n=parseInt(i/60),o=parseInt(n%24),s=parseInt(n/24);s=t(s),o=t(o),a=t(a),e.setData({videoPlayTime:i,showVideoPlayTime:s+":"+o+":"+a})}),1e3)},playVoice:function(){var e=this,t=this;console.log(this.isPlay,l),this.isPlay?(l.pause(),l.onPause((function(){console.log("暂停播放"),clearInterval(c),t.setData({isPlay:!1})}))):(l.play(),l.onPlay((function(){console.log("开始播放"),clearInterval(c),t.setData({isPlay:!0}),e.setTime()})))},random_string:function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",i=t.length,a="",n=0;n<e;n++)a+=t.charAt(Math.floor(Math.random()*i));return a},tapDeleteVoice:function(){l.stop(),l.destroy(),this.setData({addCertificateVoice:"",time:0,showTime:0,recording:!1,duration:0,isPlay:!1,videoPlayTime:0,showVideoPlayTime:"00:00:00",showDurationTime:"00:00:00"}),this.getHighLight()},addCertificateSubmit:function(t){var i=this,s=this;if(!s.isLoading){var l=t.detail.value,c=d[this.type];if(o.trim(l.name)&&l.type&&o.trim(this[c])){var r=/[/：\*\？#”<>|。]/;if(r.test(l.name))o.showError("含有特殊字符，请输入正确文件名称后再上传");else{var u=this[c]||"";(0,a.get)({url:n.get_upload_policy+"?ossPrefixKey=blockchain/",success:function(t){e.showLoading({title:"上传中"}),(0,a.upload)({url:t.host,filePath:u,key:"file",name:"file",formData:{key:t.dir+i.addFileInfo.name,policy:t.policy,OSSAccessKeyId:t.accessid,signature:t.signature,success_action_status:"200"},success:function(){var o=l.type,c=l.name,r={filePath:t.ossUrl+t.dir+i.addFileInfo.name,fileName:i.addFileInfo.originName,name:c,type:o,fileType:i.fileType,uploadMethod:i.uploadMethod,uploadChannel:2};console.log(r),s.formId?s.saveChain(r):(0,a.upload)({url:n.add_certificate_file,filePath:u,key:"file",formData:r,success:function(){e.hideLoading(),e.showModal({title:"提交成功",content:"",showCancel:!1,success:function(e){e.confirm&&i.switchTabBarFun()}})},fail:function(t){e.hideLoading(),e.showModal({title:"提交失败",content:"",cancelText:"关闭",confirmText:"继续提交",success:function(e){e.confirm?s.addCertificateSubmit():e.cancel&&i.switchTabBarFun()}})}})},fail:function(e){console.log(e)}})},fail:function(t){console.log(t),setTimeout((function(){e.showToast({title:t})}),50)}})}}else o.showError("请完善信息后再上传")}},switchTabBarFun:function(){var t=getApp();t.globalData.activeTab="data",e.switchTab({url:"/pages/evidence/index"})},getHighLight:function(){var e=d[this.type],t=this[e];t&&this.nameValue?this.setData({ishighLight:!0}):this.setData({ishighLight:!1})},saveChain:function(t){(0,a.post)({url:n.saveChainToContract+"?contractSubjectId="+this.formId+"&fileName="+t.name+"&filePath="+t.filePath+"&uploadMethod="+t.uploadMethod+"&type=2&uploadChannel=2",success:function(t){e.navigateBack({})},fail:function(t){setTimeout((function(){e.showToast({title:t})}),50)}})}}};t.default=u}).call(this,i("543d")["default"])},5342:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement;e._self._c},o=[]},5388:function(e,t,i){"use strict";i.r(t);var a=i("0fc1"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"838e":function(e,t,i){"use strict";(function(e){i("e09c");a(i("66fd"));var t=a(i("da8a"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},a0ba:function(e,t,i){"use strict";var a=function(e){e.options.wxsCallMethods||(e.options.wxsCallMethods=[])};t["a"]=a},c0bf:function(e,t,i){"use strict";var a=i("ec30"),n=i.n(a);n.a},da8a:function(e,t,i){"use strict";i.r(t);var a=i("5342"),n=i("5388");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("c0bf");var s,l=i("f0c5"),c=i("a0ba"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);"function"===typeof c["a"]&&Object(c["a"])(r),t["default"]=r.exports},ec30:function(e,t,i){}},[["838e","common/runtime","common/vendor"]]]);