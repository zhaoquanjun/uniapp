(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-authentication-personal-auth-result-index"],{1259:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.save_personnal_seal=e.upload_painted_wx_url=e.delete_painted_url=e.set_default_seal=e.company_painted_list=e.person_painted_list=e.upload_person_seal=e.upload_company_seal=e.create_seal=void 0;var n=a("3b7d"),i=n.host+"/v1/pass/uploadImgByBase64String";e.create_seal=i;var o=n.host+"/v1/file/saveCompanySeal";e.upload_company_seal=o;var s=n.host+"/v1/file/savePersonalSeal";e.upload_person_seal=s;var l=n.host+"/v1/file/getPersonalSealList";e.person_painted_list=l;var r=n.host+"/v1/file/getEnterpriseSealList";e.company_painted_list=r;var c=n.host+"/v1/file/painted/default";e.set_default_seal=c;var f=n.host+"/v1/file/handleSignImageStatus";e.delete_painted_url=f;var u=n.host+"/v1/pass/uploadFile";e.upload_painted_wx_url=u;var d=n.host+"/v1/file/savePersonalSeal";e.save_personnal_seal=d,t.exports.create_company_cachet_url=n.host+"/v1/file/create/cachet"},"24f5":function(t,e,a){"use strict";a.r(e);var n=a("7f78"),i=a("5b66");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("9f47");var s,l=a("f0c5"),r=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"4e093f15",null,!1,n["a"],s);e["default"]=r.exports},"5b66":function(t,e,a){"use strict";a.r(e);var n=a("fce6"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"78d4":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"\n.personal-auth-result[data-v-4e093f15]{padding-bottom:%?140?%;font-size:%?32?%}.personal-auth-result .result-top[data-v-4e093f15]{font-size:%?94?%;background:#fff;padding-top:%?108?%;padding-bottom:%?108?%;text-align:center}.personal-auth-result .result-text[data-v-4e093f15]{font-size:%?36?%;font-weight:500;margin-top:%?48?%;color:#212121}.personal-auth-result .result-reason[data-v-4e093f15]{font-size:%?28?%;font-weight:400;margin-top:%?20?%;color:#999}.personal-auth-result .result-top .icon-container[data-v-4e093f15]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 auto;width:%?164?%;height:%?164?%;border-radius:%?82?%;background:#f9f9f9;border:%?2?% solid #dcdcdc;color:#ff7451}.personal-auth-result .result-top .iconfont[data-v-4e093f15]{font-size:%?70?%;position:relative}.personal-auth-result .result-top .iconfont.success[data-v-4e093f15]{color:#5ad18a}.personal-auth-result .type-select-header[data-v-4e093f15]{font-size:%?36?%;font-weight:500;color:#333;padding:%?26?% %?48?% %?28?% %?48?%}.personal-auth-result .type-select-header .type-text[data-v-4e093f15]{font-size:%?32?%;display:inline-block;line-height:%?32?%;font-weight:500;color:#333;padding-left:%?20?%;border-left:%?8?% solid #ee7005}.personal-auth-result .base-info-container[data-v-4e093f15]{padding:0 %?48?%;background:#fff}.personal-auth-result .base-info-container .field-item[data-v-4e093f15]{background:#fff;height:%?126?%;line-height:%?126?%;display:-webkit-box;display:-webkit-flex;display:flex}.personal-auth-result .base-info-container .field-item .name[data-v-4e093f15]{font-size:%?32?%;font-weight:500;color:#333;line-height:%?126?%;display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1}.personal-auth-result .base-info-container .field-item .get-code[data-v-4e093f15]{width:%?198?%;font-size:%?28?%;font-weight:400;color:#6e87b8;text-align:center}.personal-auth-result .base-info-container .field-item .code-line[data-v-4e093f15]{border-left:%?2?% solid #d8d8d8;height:%?32?%;width:%?1?%;position:relative;top:%?46?%;margin:0 %?10?% 0 %?30?%}.personal-auth-result .base-info-container .field-item .value-input[data-v-4e093f15],\r\n.value-select[data-v-4e093f15]{font-size:%?28?%;font-weight:400;color:#333;line-height:%?126?%;text-align:right;height:%?126?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.line[data-v-4e093f15]{border-bottom:%?2?% solid #f5f5f5;width:100%}.bottom-btn-container[data-v-4e093f15]{position:fixed;width:100%;bottom:%?20?%;text-align:center}.bottom-btn-container .next[data-v-4e093f15]{width:%?690?%;text-align:center;display:inline-block;height:%?100?%;line-height:%?100?%;background:#464646;border-radius:%?8?%;color:#fff}body.?%PAGE?%[data-v-4e093f15]{background:#f7f8f9}",""]),t.exports=e},"7f78":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",["f"==t.result?a("v-uni-view",{staticClass:"personal-auth-result"},[a("v-uni-view",{staticClass:"result-top"},[a("v-uni-view",{staticClass:"icon-container"},[a("v-uni-text",{staticClass:"iconfont iconwarningo"})],1),a("v-uni-view",{staticClass:"result-text"},[t._v("认证失败")]),a("v-uni-view",{staticClass:"result-reason"},[t._v(t._s(t.desc))])],1),a("v-uni-view",{staticClass:"type-select-header"},[a("v-uni-text",{staticClass:"type-text"},[t._v("核对身份信息")])],1),a("v-uni-view",{staticClass:"base-info-container"},[a("v-uni-view",{staticClass:"field-item"},[a("v-uni-label",{staticClass:"name"},[t._v("姓名")]),a("v-uni-text",{staticClass:"value-input"},[t._v(t._s(t.userInfo.name))])],1),a("v-uni-view",{staticClass:"line"}),a("v-uni-view",{staticClass:"field-item"},[a("v-uni-label",{staticClass:"name"},[t._v("证件类型")]),a("v-uni-label",{staticClass:"value-select"},[t._v("居民身份证")])],1),a("v-uni-view",{staticClass:"line"}),a("v-uni-view",{staticClass:"field-item"},[a("v-uni-label",{staticClass:"name"},[t._v("证件号")]),a("v-uni-text",{staticClass:"value-input"},[t._v(t._s(t.userInfo.idCard))])],1),"phone"==t.type?a("v-uni-view",{staticClass:"line"}):t._e(),"phone"==t.type?a("v-uni-view",{staticClass:"field-item"},[a("v-uni-label",{staticClass:"name"},[t._v("手机号")]),a("v-uni-text",{staticClass:"value-input"},[t._v(t._s(t.userInfo.phone))])],1):t._e()],1),a("v-uni-view",{staticClass:"bottom-btn-container",staticStyle:{"margin-top":"194rpx"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.reDo.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"next"},[t._v("修改信息重新认证")])],1)],1):t._e(),"s"==t.result?a("v-uni-view",{staticClass:"personal-auth-result",staticStyle:{height:"1800rpx",background:"#ffffff"}},[a("v-uni-view",{staticClass:"result-top"},[a("v-uni-view",{staticClass:"icon-container"},[a("v-uni-text",{staticClass:"iconfont iconSuccess success"})],1),a("v-uni-view",{staticClass:"result-text"},[t._v("认证成功")]),a("v-uni-view",{staticClass:"result-reason"},[t._v(t._s("phone"===t.type?"手机":"人脸")+"对比通过，可以进行合同签署")])],1),a("v-uni-view",{staticClass:"bottom-btn-container",staticStyle:{"margin-top":"50rpx"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.goSign.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"next"},[t._v("发起合同签署")])],1)],1):t._e(),a("v-uni-canvas",{staticStyle:{"z-index":"-11",opacity:"0",visiblity:"hidden",position:"absolute",left:"-100%",top:"-100%",width:"300px",height:"300px"},attrs:{id:"myCanvas","canvas-id":"myCanvas"}})],1)},o=[]},"9f47":function(t,e,a){"use strict";var n=a("c687"),i=a.n(n);i.a},adf8:function(t,e,a){"use strict";(function(t){a("cb29"),a("26e9"),a("e25e"),a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.FXQ=void 0;var n={colors:["#EC0400","#2527FA","#272727"],fonts:['"STSong", "NSimSun"',"YouYuan","KaiTi","STHeiti"],baseConf:{color:null,font:null},commonMethod:function(t,e){var a=null;a=this.colors[t],void 0!==a&&"undefined"!=a||(a=this.colors[0]);var n=this.fonts[e];void 0!==n&&"undefined"!=n||(n=this.fonts[0]),this.baseConf.color=a,this.baseConf.font=n},companySeal:function(e,a,i,o,s,l){var r=uni.createSelectorQuery().select("#myCanvas"),c=uni.createCanvasContext("myCanvas");r.width=300,r.height=300,this.commonMethod(a,i);var f=r.width/2,u=r.height/2;function d(){c.translate(0,0),c.lineWidth=5,c.strokeStyle=n.baseConf.color,c.beginPath(),c.arc(f,u,145,0,2*Math.PI),c.stroke(),c.save()}function v(){c.save(),c.fillStyle=n.baseConf.color,c.translate(f,u),c.rotate(Math.PI),c.beginPath();for(var t=Math.PI/5*4,e=0;e<5;e++){var a=Math.sin(e*t),i=Math.cos(e*t);c.lineTo(45*a,45*i)}c.closePath(),c.stroke(),c.fill(),c.restore()}function h(){var t="";t=o;var e=22;t.length>7&&(e=7/t.length*22),c.font=e+"px "+n.baseConf.font,c.textBaseline="middle",c.textAlign="center",c.lineWidth=1,c.fontWeight=200,c.fillStyle=n.baseConf.color,c.fillText(t,f,u+80)}function p(){c.font="900 42px "+n.baseConf.font;for(var t,a=e.length,i=-4*Math.PI/(3*(a-1)),o=e.split(""),s=o.reverse(),l=0;l<a;l++)t=s[l],0==l?c.rotate(5*Math.PI/6.1):c.rotate(i),c.save(),c.translate(120,0),c.rotate(Math.PI/2),c.fillText(t,0,5),c.restore()}function g(t){c.translate(f,u),c.font="18px "+n.baseConf.font;for(var e=t.length,a=-2*Math.PI/(6*(e-1)),i=t.split(""),o=0;o<e;o++){var s=i[o];0==o?c.rotate(10*Math.PI/5.95):c.rotate(a),c.save(),c.translate(-120,5),c.rotate(Math.PI/2),c.fillStyle=n.baseConf.color,c.fillText(s,0,5),c.restore()}}d(),v(30,0),h(),g(s),p(e),c.draw(!0,setTimeout((function(){uni.canvasToTempFilePath({canvasId:"myCanvas",x:0,y:0,width:300,height:300,fileType:"png",success:function(t){uni.getFileSystemManager().readFile({filePath:t.tempFilePath,encoding:"base64",success:function(t){"function"==typeof l&&l("data:image/png;base64,"+t.data)}})},fail:function(e){t.log(e,2222)}})}),500))},personal:function(e,a,i,o,s,l){this.commonMethod(a,i);var r=n.baseConf.color,c=n.baseConf.font,f=uni.createSelectorQuery().select("#myCanvas"),u=uni.createCanvasContext("myCanvas");f.width=120,f.height=120;var d=e.length;if(t.log(u,f),0==o)0==s&&(u.rect(10,35,100,50),u.strokeStyle=r,u.lineWidth=4,u.stroke()),u.font="30px "+c,d>3&&(u.font="24px "+c),u.textBaseline="middle",u.textAlign="center",u.lineWidth=1,u.fillStyle=r,u.textAlign="center",u.fillText(e,60,60);else{var v="";switch(e.length){case 3:e+="印";break;case 2:e+="之印";break;default:break}var h=e.split("");v=h[2]+h[0]+h[3]+h[1],0==s&&(u.rect(6,6,108,108),u.strokeStyle=r,u.lineWidth=2,u.stroke()),u.font="40px "+c,u.fillStyle=r,this.wrapText(u,v,15,50,80,40)}u.draw(!0,setTimeout((function(){uni.canvasToTempFilePath({x:0,y:0,width:120,height:120,fileType:"png",canvasId:"myCanvas",success:function(e){t.log(e,1111),uni.getFileSystemManager().readFile({filePath:e.tempFilePath,encoding:"base64",success:function(t){"function"==typeof l&&l("data:image/png;base64,"+t.data)}})},fail:function(e){t.log(e,2222)}})}),500))},companyEllipse:function(t,e,a,i){var o=140,s=90;this.commonMethod(i,a);var l=n.baseConf.color,r=n.baseConf.font,c=document.createElement("canvas");c.width=300,c.height=300,c.width=2*o+5,c.height=2*s+5;var f=c.getContext("2d");function u(t,e){var a=180;r="20px "+r,t||(a=60,r="10px "+r);var n=e.length,i=o+f.lineWidth,c=s+f.lineWidth,u=.9,d=1==t?-90-a/2:90-a/2,v=.5,h=Math.ceil(a/v)+1,p=new Array(h),g=new Array(h),b=0,m=0;p[b]=d,g[b]=m,b++;for(var y=d*Math.PI/180,x=o*Math.cos(y)+i,w=s*Math.sin(y)+c,_=d+v;b<h;_+=v){y=_*Math.PI/180;var C=o*Math.cos(y)+i,S=s*Math.sin(y)+c;m+=Math.sqrt((x-C)*(x-C)+(w-S)*(w-S)),p[b]=_,g[b]=m,x=C,w=S,b++}for(var M=m/n,k=0;k<n;k++){for(var P=k*M+M/2,I=0,T=0;T<g.length-1;T++)if(g[T]<=P&&P<=g[T+1]){I=P>=(g[T]+g[T+1])/2?p[T+1]:p[T];break}y=I*Math.PI/180;var F=o*Math.cos(y)+o,A=s*Math.sin(y)+s,z=Math.atan2(s*Math.cos(y),-o*Math.sin(y)),W=z+Math.PI/2,B=1==t?k:n-1-k,E=e[B],j=25,L=31;t||(j=2,L=10),F+=L*u*Math.cos(W),A+=L*u*Math.sin(W),t?(F+=-j/2*Math.cos(z),A+=-j/2*Math.sin(z)):(F+=j/2*Math.cos(z),A+=j/2*Math.sin(z)),f.save(),f.translate(F,A),1==t?f.rotate((180*W/Math.PI-90)*Math.PI/180):f.rotate((180*W/Math.PI+180-90)*Math.PI/180),f.translate(-F,-A),f.fillStyle=l,f.font=r,f.fillText(E,F,A),f.restore()}}function d(){f.fillStyle=l,f.font="20px SimSun",f.textAlign="center",f.fillText("合同专用章",o,s+20),f.restore()}function v(){f.ellipse(o+f.lineWidth+1,s+f.lineWidth+1,o,s,0,0,2*Math.PI),f.fillStyle="rgba(255, 255, 255, 0)",f.strokeStyle=l,f.lineWidth=3,f.fill(),f.stroke()}return u(!0,t),u(!1,e),d(),v(),c.toDataURL()},wrapText:function(t,e,a,n,i,o){if("string"==typeof e&&"number"==typeof a&&"number"==typeof n){var s=t,l=s.canvas;"undefined"==typeof i&&(i=l&&l.width||112),"undefined"==typeof o&&(o=l&&parseInt(window.getComputedStyle(l).lineHeight)||parseInt(window.getComputedStyle(document.body).lineHeight));for(var r=e.split(""),c="",f=0;f<r.length;f++){var u=c+r[f],d=s.measureText(u),v=d.width;v>i&&f>0?(s.fillText(r[0],a,n),s.fillText(r[1],a+50,n),c=r[f],n+=o):c=u}s.fillText(r[2],a,n+10),s.fillText(r[3],a+50,n+10)}}};e.FXQ=n}).call(this,a("5a52")["default"])},c687:function(t,e,a){var n=a("78d4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5ff3b8b9",n,!0,{sourceMap:!1,shadowMode:!1})},cb29:function(t,e,a){var n=a("23e7"),i=a("81d5"),o=a("44d2");n({target:"Array",proto:!0},{fill:i}),o("fill")},fce6:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("3b7d"),i=a("1259"),o=a("adf8"),s=getApp(),l={data:function(){return{type:"",userInfo:{},result:"s",desc:""}},components:{},props:{},onLoad:function(t){this.setData({type:t.type,result:t.result,userInfo:uni.getStorageSync("personInfo"),desc:t.desc}),"s"==t.result&&this.getSealBase64Fun()},onShareAppMessage:function(){},methods:{showSafeInfo:function(){uni.showModal({title:"个人身份隐私安全声明",showCancel:!1,confirmText:"知道了",content:"您输入的身份信息仅用于个人实名认证和获取CA认证证书"})},reDo:function(){uni.navigateBack()},goSign:function(){s.globalData.updateUserInfo((function(){uni.reLaunch({url:"/pages/home/home"})}))},getSealBase64Fun:function(){var t=0;o.FXQ.personal(this.userInfo.name||"个人",t,3,1,0,this.createSealFun)},createSealFun:function(e){var a=this;(0,n.postBody)({url:i.create_seal,params:{base64String:e},success:function(t){a.uploadPersonalSealFun(t)},fail:function(e){t.log(e)}})},uploadPersonalSealFun:function(e){var a={name:"个人印章",url:e.url,originType:4};(0,n.postBody)({url:i.upload_person_seal,params:a,success:function(){t.log("印章制作完成")},fail:function(t){uni.hideLoading(),setTimeout((function(){uni.showToast({icon:"none",title:t})}),50)}})}}};e.default=l}).call(this,a("5a52")["default"])}}]);