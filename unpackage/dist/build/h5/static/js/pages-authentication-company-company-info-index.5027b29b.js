(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-authentication-company-company-info-index"],{1259:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.save_personnal_seal=t.upload_painted_wx_url=t.delete_painted_url=t.set_default_seal=t.company_painted_list=t.person_painted_list=t.upload_person_seal=t.upload_company_seal=t.create_seal=void 0;var n=a("3b7d"),i=n.host+"/v1/pass/uploadImgByBase64String";t.create_seal=i;var o=n.host+"/v1/file/saveCompanySeal";t.upload_company_seal=o;var s=n.host+"/v1/file/savePersonalSeal";t.upload_person_seal=s;var l=n.host+"/v1/file/getPersonalSealList";t.person_painted_list=l;var c=n.host+"/v1/file/getEnterpriseSealList";t.company_painted_list=c;var r=n.host+"/v1/file/painted/default";t.set_default_seal=r;var u=n.host+"/v1/file/handleSignImageStatus";t.delete_painted_url=u;var d=n.host+"/v1/pass/uploadFile";t.upload_painted_wx_url=d;var f=n.host+"/v1/file/savePersonalSeal";t.save_personnal_seal=f,e.exports.create_company_cachet_url=n.host+"/v1/file/create/cachet"},"1f45":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"\n.company-info[data-v-984b780a]{padding-bottom:%?180?%;font-size:%?32?%}.company-info .type-select-header[data-v-984b780a]{font-size:%?36?%;font-weight:500;color:#333;padding:%?32?% 0 %?32?% %?48?%}.company-info .type-select-header .type-text[data-v-984b780a]{font-size:%?32?%;display:inline-block;line-height:%?32?%;font-weight:500;color:#333;padding-left:%?20?%;border-left:%?8?% solid #ee7005}.company-info .upload-container[data-v-984b780a]{background:#fff;height:%?416?%}.company-info .upload-container .upload-bottom[data-v-984b780a]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?48?%}.company-info .upload-container .title[data-v-984b780a]{font-size:%?32?%;font-weight:500;color:#333;margin:0 %?48?%;height:%?110?%;line-height:%?110?%;border-bottom:%?2?% solid #f5f5f5}.company-info .upload-container .one[data-v-984b780a]{font-size:%?76?%;color:#ccc;position:relative;top:%?60?%}.company-info .upload-container .upload-bottom .left[data-v-984b780a]{width:%?310?%;height:%?216?%;text-align:center;vertical-align:middle;background:#f9f9f9;border-radius:%?12?%;margin-left:%?40?%;margin-right:%?20?%}.company-info .upload-container .upload-bottom .left uni-image[data-v-984b780a]{width:100%;height:%?216?%}.company-info .upload-container .upload-bottom .right[data-v-984b780a]{font-size:%?24?%;font-weight:400;color:#999;line-height:%?48?%;margin-right:%?20?%}.tip[data-v-984b780a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.company-info .base-info-container[data-v-984b780a]{padding:0 %?48?%;background:#fff;margin-top:%?20?%}.company-info .base-info-container .field-item[data-v-984b780a]{background:#fff;height:%?128?%;line-height:%?128?%;display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:%?2?% solid #f5f5f5}.company-info .base-info-container .field-item .name[data-v-984b780a]{font-size:%?32?%;font-weight:500;color:#333;line-height:%?128?%;display:inline-block;-webkit-box-flex:2;-webkit-flex:2;flex:2}.company-info .base-info-container .field-item .value-input[data-v-984b780a],.value-select[data-v-984b780a]{font-size:%?28?%;font-weight:400;color:#333;line-height:%?126?%;text-align:right;height:%?126?%;-webkit-box-flex:3;-webkit-flex:3;flex:3}.bottom-btn-container[data-v-984b780a]{position:fixed;height:%?100?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;bottom:%?40?%;margin-top:%?40?%}.bottom-btn-container .back[data-v-984b780a]{width:%?160?%;height:%?100?%;font-size:%?32?%;font-weight:400;color:#666;display:inline-block;text-align:center;line-height:%?100?%;margin-left:%?32?%}.bottom-btn-container .next[data-v-984b780a]{width:%?478?%;text-align:center;display:inline-block;height:%?100?%;line-height:%?100?%;background:#464646;border-radius:%?8?%;color:#fff;margin-left:%?40?%}body.?%PAGE?%[data-v-984b780a]{background:#f7f8f9}",""]),e.exports=t},"7e05":function(e,t,a){"use strict";var n=a("c5a0"),i=a.n(n);i.a},8572:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"company-info"},[a("v-uni-view",{staticClass:"type-select-header"},[a("v-uni-text",{staticClass:"type-text"},[e._v("企业基本信息")])],1),a("v-uni-view",{staticClass:"upload-container"},[a("v-uni-view",{staticClass:"title"},[e._v("多合一营业执照"),a("v-uni-view",{staticClass:"line"})],1),a("v-uni-view",{staticClass:"upload-bottom"},[a("v-uni-view",{staticClass:"left",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[e.businessImage?a("v-uni-image",{attrs:{src:e.businessImage}}):e._e(),e.businessImage?e._e():a("v-uni-text",{staticClass:"one one-add"})],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticStyle:{}},[e._v("1.请确保营业执照勿遮挡、缺边")]),a("v-uni-view",{staticStyle:{}},[e._v("2.请确保图片中所有字体清晰可见")]),a("v-uni-view",{staticStyle:{}},[e._v("3.图片大小不超过8M")])],1)],1)],1),a("v-uni-view",{staticClass:"base-info-container"},[a("v-uni-view",{staticClass:"field-item"},[a("v-uni-label",{staticClass:"name"},[e._v("企业类型")]),a("v-uni-picker",{attrs:{"range-key":"label",value:e.companyTypeIndex,range:e.companyTypes},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[a("v-uni-label",{staticClass:"value-select"},[e._v(e._s(e.companyTypes[e.companyTypeIndex].label)),a("v-uni-text",{staticClass:"one one-arrow-down"})],1)],1)],1),a("v-uni-view",{staticClass:"field-item"},[a("v-uni-label",{staticClass:"name"},[e._v("企业名称")]),a("v-uni-input",{staticClass:"value-input",attrs:{placeholder:"请输入",value:e.companyName,"data-field":"companyName"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.bindKeyInput.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"field-item"},[a("v-uni-label",{staticClass:"name"},[e._v("统一社会信用代码")]),a("v-uni-input",{staticClass:"value-input",attrs:{placeholder:"请输入",value:e.creditCode,"data-field":"creditCode"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.bindKeyInput.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"field-item"},[a("v-uni-label",{staticClass:"name"},[e._v("法定代表人姓名")]),a("v-uni-input",{staticClass:"value-input",attrs:{placeholder:"请输入",value:e.legalPersonName,"data-field":"legalPersonName"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.bindKeyInput.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"bottom-btn-container"},[a("v-uni-text",{staticClass:"back",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[e._v("返回")]),a("v-uni-text",{staticClass:"next",style:"background:"+(e.ishighLight?"#464646":"#B7B7B7"),on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.next.apply(void 0,arguments)}}},[e._v("下一步")])],1)],1)},o=[]},8908:function(e,t,a){"use strict";a.r(t);var n=a("f257"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},adf8:function(e,t,a){"use strict";a("cb29"),a("26e9"),a("e25e"),a("ac1f"),a("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.FXQ=void 0;var n={colors:["#EC0400","#2527FA","#272727"],fonts:['"STSong", "NSimSun"',"YouYuan","KaiTi","STHeiti"],baseConf:{color:null,font:null},commonMethod:function(e,t){var a=null;a=this.colors[e],void 0!==a&&"undefined"!=a||(a=this.colors[0]);var n=this.fonts[t];void 0!==n&&"undefined"!=n||(n=this.fonts[0]),this.baseConf.color=a,this.baseConf.font=n},companySeal:function(e,t,a,i,o,s){var l=uni.createSelectorQuery().select("#myCanvas"),c=uni.createCanvasContext("myCanvas");l.width=300,l.height=300,this.commonMethod(t,a);var r=l.width/2,u=l.height/2;function d(){c.translate(0,0),c.lineWidth=5,c.strokeStyle=n.baseConf.color,c.beginPath(),c.arc(r,u,145,0,2*Math.PI),c.stroke(),c.save()}function f(){c.save(),c.fillStyle=n.baseConf.color,c.translate(r,u),c.rotate(Math.PI),c.beginPath();for(var e=Math.PI/5*4,t=0;t<5;t++){var a=Math.sin(t*e),i=Math.cos(t*e);c.lineTo(45*a,45*i)}c.closePath(),c.stroke(),c.fill(),c.restore()}function p(){var e="";e=i;var t=22;e.length>7&&(t=7/e.length*22),c.font=t+"px "+n.baseConf.font,c.textBaseline="middle",c.textAlign="center",c.lineWidth=1,c.fontWeight=200,c.fillStyle=n.baseConf.color,c.fillText(e,r,u+80)}function h(){c.font="900 42px "+n.baseConf.font;for(var t,a=e.length,i=-4*Math.PI/(3*(a-1)),o=e.split(""),s=o.reverse(),l=0;l<a;l++)t=s[l],0==l?c.rotate(5*Math.PI/6.1):c.rotate(i),c.save(),c.translate(120,0),c.rotate(Math.PI/2),c.fillText(t,0,5),c.restore()}function v(e){c.translate(r,u),c.font="18px "+n.baseConf.font;for(var t=e.length,a=-2*Math.PI/(6*(t-1)),i=e.split(""),o=0;o<t;o++){var s=i[o];0==o?c.rotate(10*Math.PI/5.95):c.rotate(a),c.save(),c.translate(-120,5),c.rotate(Math.PI/2),c.fillStyle=n.baseConf.color,c.fillText(s,0,5),c.restore()}}d(),f(30,0),p(),v(o),h(e),c.draw(!0,setTimeout((function(){uni.canvasToTempFilePath({canvasId:"myCanvas",x:0,y:0,width:300,height:300,fileType:"png",success:function(e){uni.getFileSystemManager().readFile({filePath:e.tempFilePath,encoding:"base64",success:function(e){"function"==typeof s&&s("data:image/png;base64,"+e.data)}})},fail:function(e){console.log(e,2222)}})}),500))},personal:function(e,t,a,i,o,s){this.commonMethod(t,a);var l=n.baseConf.color,c=n.baseConf.font,r=uni.createSelectorQuery().select("#myCanvas"),u=uni.createCanvasContext("myCanvas");r.width=120,r.height=120;var d=e.length;if(console.log(u,r),0==i)0==o&&(u.rect(10,35,100,50),u.strokeStyle=l,u.lineWidth=4,u.stroke()),u.font="30px "+c,d>3&&(u.font="24px "+c),u.textBaseline="middle",u.textAlign="center",u.lineWidth=1,u.fillStyle=l,u.textAlign="center",u.fillText(e,60,60);else{var f="";switch(e.length){case 3:e+="印";break;case 2:e+="之印";break;default:break}var p=e.split("");f=p[2]+p[0]+p[3]+p[1],0==o&&(u.rect(6,6,108,108),u.strokeStyle=l,u.lineWidth=2,u.stroke()),u.font="40px "+c,u.fillStyle=l,this.wrapText(u,f,15,50,80,40)}u.draw(!0,setTimeout((function(){uni.canvasToTempFilePath({x:0,y:0,width:120,height:120,fileType:"png",canvasId:"myCanvas",success:function(e){console.log(e,1111),uni.getFileSystemManager().readFile({filePath:e.tempFilePath,encoding:"base64",success:function(e){"function"==typeof s&&s("data:image/png;base64,"+e.data)}})},fail:function(e){console.log(e,2222)}})}),500))},companyEllipse:function(e,t,a,i){var o=140,s=90;this.commonMethod(i,a);var l=n.baseConf.color,c=n.baseConf.font,r=document.createElement("canvas");r.width=300,r.height=300,r.width=2*o+5,r.height=2*s+5;var u=r.getContext("2d");function d(e,t){var a=180;c="20px "+c,e||(a=60,c="10px "+c);var n=t.length,i=o+u.lineWidth,r=s+u.lineWidth,d=.9,f=1==e?-90-a/2:90-a/2,p=.5,h=Math.ceil(a/p)+1,v=new Array(h),m=new Array(h),g=0,y=0;v[g]=f,m[g]=y,g++;for(var b=f*Math.PI/180,x=o*Math.cos(b)+i,w=s*Math.sin(b)+r,C=f+p;g<h;C+=p){b=C*Math.PI/180;var _=o*Math.cos(b)+i,S=s*Math.sin(b)+r;y+=Math.sqrt((x-_)*(x-_)+(w-S)*(w-S)),v[g]=C,m[g]=y,x=_,w=S,g++}for(var k=y/n,I=0;I<n;I++){for(var M=I*k+k/2,P=0,T=0;T<m.length-1;T++)if(m[T]<=M&&M<=m[T+1]){P=M>=(m[T]+m[T+1])/2?v[T+1]:v[T];break}b=P*Math.PI/180;var L=o*Math.cos(b)+o,F=s*Math.sin(b)+s,A=Math.atan2(s*Math.cos(b),-o*Math.sin(b)),N=A+Math.PI/2,B=1==e?I:n-1-I,E=t[B],D=25,W=31;e||(D=2,W=10),L+=W*d*Math.cos(N),F+=W*d*Math.sin(N),e?(L+=-D/2*Math.cos(A),F+=-D/2*Math.sin(A)):(L+=D/2*Math.cos(A),F+=D/2*Math.sin(A)),u.save(),u.translate(L,F),1==e?u.rotate((180*N/Math.PI-90)*Math.PI/180):u.rotate((180*N/Math.PI+180-90)*Math.PI/180),u.translate(-L,-F),u.fillStyle=l,u.font=c,u.fillText(E,L,F),u.restore()}}function f(){u.fillStyle=l,u.font="20px SimSun",u.textAlign="center",u.fillText("合同专用章",o,s+20),u.restore()}function p(){u.ellipse(o+u.lineWidth+1,s+u.lineWidth+1,o,s,0,0,2*Math.PI),u.fillStyle="rgba(255, 255, 255, 0)",u.strokeStyle=l,u.lineWidth=3,u.fill(),u.stroke()}return d(!0,e),d(!1,t),f(),p(),r.toDataURL()},wrapText:function(e,t,a,n,i,o){if("string"==typeof t&&"number"==typeof a&&"number"==typeof n){var s=e,l=s.canvas;"undefined"==typeof i&&(i=l&&l.width||112),"undefined"==typeof o&&(o=l&&parseInt(window.getComputedStyle(l).lineHeight)||parseInt(window.getComputedStyle(document.body).lineHeight));for(var c=t.split(""),r="",u=0;u<c.length;u++){var d=r+c[u],f=s.measureText(d),p=f.width;p>i&&u>0?(s.fillText(c[0],a,n),s.fillText(c[1],a+50,n),r=c[u],n+=o):r=d}s.fillText(c[2],a,n+10),s.fillText(c[3],a+50,n+10)}}};t.FXQ=n},c5a0:function(e,t,a){var n=a("1f45");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("1f4706f0",n,!0,{sourceMap:!1,shadowMode:!1})},cb29:function(e,t,a){var n=a("23e7"),i=a("81d5"),o=a("44d2");n({target:"Array",proto:!0},{fill:i}),o("fill")},e30a:function(e,t,a){"use strict";a.r(t);var n=a("8572"),i=a("8908");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("7e05");var s,l=a("f0c5"),c=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"984b780a",null,!1,n["a"],s);t["default"]=c.exports},e9ef:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.authPhone=t.smsSend=t.applyAuth=t.authFace=t.companyHandle=t.companyAuth=t.businessLicenseUpload=t.createCompany=void 0;var n=a("3b7d"),i=n.host+"/v1/account/create/company";t.createCompany=i;var o=n.host+"/v1/account/apply/auth/businessLicense";t.businessLicenseUpload=o;var s=n.host+"/v1/account/apply/auth/company";t.companyAuth=s;var l=n.host+"/v1/account/apply/auth/company/handle";t.companyHandle=l;var c=n.host+"/v1/account/auth/face";t.authFace=c;var r=n.host+"/v1/account/apply/auth";t.applyAuth=r;var u=n.host+"/v1/sms/";t.smsSend=u;var d=n.host+"/v1/account/auth/phone";t.authPhone=d},f257:function(e,t,a){"use strict";var n=a("4ea4");a("a15b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("ade3")),o=a("3b7d"),s=a("e9ef"),l=a("1259"),c=a("adf8"),r={data:function(){return{ishighLight:!1,businessImage:null,companyName:"",companyId:"",creditCode:"",companyTypeIndex:0,legalPersonName:"",companyTypes:[{label:"企业",value:1},{label:"个体工商户",value:2},{label:"律所",value:6},{label:"其他组织",value:5}],query:"",field:""}},components:{},props:{},onLoad:function(e){this.setData({query:e}),console.log(e)},onShow:function(){"legent"==this.query.type?this.setData({companyTypes:[{label:"企业",value:1},{label:"个体工商户",value:2}]}):this.setData({companyTypes:[{label:"企业",value:1},{label:"个体工商户",value:2},{label:"律所",value:6},{label:"其他组织",value:5}]})},onShareAppMessage:function(){},methods:{uploadImage:function(e){var t=this;uni.showLoading({title:"识别中..."}),(0,o.upload)({url:s.businessLicenseUpload,filePath:e,key:"businessImage",success:function(e){uni.hideLoading(),console.log(e),t.setData(e);var a=t.companyName,n=t.creditCode,i=t.legalPersonName,o=t.businessImage;void 0==a||""==a||void 0==n||""==n||""==i||void 0==i||null==o?(console.log("come in"),t.setData({ishighLight:!1})):t.setData({ishighLight:!0})},fail:function(e){uni.hideLoading(),setTimeout((function(){uni.showToast({title:e,icon:"none"})}),50)}})},bindPickerChange:function(e){this.setData({companyTypeIndex:e.detail.value})},chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],success:function(t){var a=t.tempFilePaths;e.setData({businessImage:a[0]}),e.uploadImage(a[0])}})},next:function(){var e=this,t=this.companyTypeIndex,a=this.companyName,n=this.creditCode,i=this.legalPersonName,l=this.query,c=uni.getStorageSync("currentUser"),r=[];if(a||r.push("企业名称"),n||r.push("统一社会信用代码"),i||r.push("法定代表人姓名"),!/^9+/.test(n))return setTimeout((function(){uni.showToast({icon:"none",title:"法人认证统一社会信用代码需为9开头，非9请走代理人认证"})}),50),!1;if(r.length)return setTimeout((function(){uni.showToast({icon:"none",title:r.join("、")+"不能为空"})}),50),!1;var u={companyType:t+1,companyName:a,creditCode:n,legalPersonName:i,companyId:c.companyId||l.companyId,authChannel:2};uni.showLoading({title:"加载中"}),"legent"==l.type?(0,o.postBody)({url:s.companyAuth,params:u,success:function(){var t=Object.assign({},c,u);e.getSealBase64Fun(),uni.hideLoading(),uni.setStorageSync("currentUser",t),uni.navigateTo({url:"/pages/authentication/company/auth-result/index?result=s"})},fail:function(e){uni.hideLoading(),setTimeout((function(){uni.showToast({title:e,icon:"none"})}),50)}}):(0,o.postBody)({url:s.companyHandle,params:u,success:function(){uni.hideLoading();var e=uni.getStorageSync("currentUser");e.authStatus=1,uni.setStorageSync("currentUser",e),uni.setStorageSync("companyInfoApply",u),uni.navigateTo({url:"/pages/authentication/company/company-pay-info/index"})},fail:function(){uni.hideLoading(),uni.navigateTo({url:"/pages/authentication/company/auth-result/index?result=f"})}})},bindKeyInput:function(e){var t=e.target.dataset.field,a=e.detail.value;this.setData((0,i.default)({},t,a));var n=this.companyName,o=this.creditCode,s=this.legalPersonName,l=this.businessImage;void 0==n||""==n||void 0==o||""==o||""==s||void 0==s||null==l?this.setData({ishighLight:!1}):this.setData({ishighLight:!0})},back:function(){uni.navigateBack()},getSealBase64Fun:function(){c.FXQ.companySeal(this.company.companyName||"公司名字",0,0,"","  ",this.createSealFun)},createSealFun:function(e){var t=this;(0,o.postBody)({url:l.create_seal,params:{base64String:e},success:function(e){t.uploadCompanySealFun(e)},fail:function(e){console.log(e)}})},uploadCompanySealFun:function(e){var t={name:"公司印章",url:e.url,auto:!0};(0,o.postBody)({url:l.upload_company_seal+"?auto="+!0,params:t,success:function(){console.log("印章制作完成")},fail:function(e){uni.hideLoading(),setTimeout((function(){uni.showToast({icon:"none",title:e})}),50)}})}}};t.default=r}}]);