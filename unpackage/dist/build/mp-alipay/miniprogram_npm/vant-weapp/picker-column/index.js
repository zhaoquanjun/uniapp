;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["miniprogram_npm/vant-weapp/picker-column/index"],{"0529":function(t,e,n){"use strict";n.r(e);var i=n("35cb"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"1f0e":function(t,e,n){"use strict";var i=n("3a4e"),r=n.n(i);r.a},"35cb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("e6d6");var i=n("6d1c"),r=200,a={data:function(){return{startY:0,offset:0,duration:0,startOffset:0,options:[],currentIndex:0}},components:{},props:{valueKey:String,className:String,itemHeight:Number,visibleItemCount:Number,initialOptions:{type:Array,default:[]},defaultIndex:{type:Number,default:0}},watch:{defaultIndex:function(t){this.setIndex(t)}},computed:{count:function(){return this.options.length},baseOffset:function(){var t=this.data;return t.itemHeight*(t.visibleItemCount-1)/2},wrapperStyle:function(){var t=this.data;return["transition: ".concat(t.duration,"ms"),"transform: translate3d(0, ".concat(t.offset+t.baseOffset,"px, 0)"),"line-height: ".concat(t.itemHeight,"px")].join("; ")}},classes:["active-class"],created:function(){var t=this,e=this.defaultIndex,n=this.initialOptions;this.set({currentIndex:e,options:n}).then((function(){t.setIndex(e)}))},methods:{onTouchStart:function(t){this.set({startY:t.touches[0].clientY,startOffset:this.offset,duration:0})},onTouchMove:function(t){var e=this.data,n=t.touches[0].clientY-e.startY;this.set({offset:(0,i.range)(e.startOffset+n,-e.count*e.itemHeight,e.itemHeight)})},onTouchEnd:function(){var t=this.data;if(t.offset!==t.startOffset){this.set({duration:r});var e=(0,i.range)(Math.round(-t.offset/t.itemHeight),0,t.count-1);this.setIndex(e,!0)}},onClickItem:function(t){var e=t.currentTarget.dataset.index;this.setIndex(e,!0)},adjustIndex:function(t){var e=this.data;t=(0,i.range)(t,0,e.count);for(var n=t;n<e.count;n++)if(!this.isDisabled(e.options[n]))return n;for(var r=t-1;r>=0;r--)if(!this.isDisabled(e.options[r]))return r},isDisabled:function(t){return(0,i.isObj)(t)&&t.disabled},getOptionText:function(t){var e=this.data;return(0,i.isObj)(t)&&e.valueKey in t?t[e.valueKey]:t},setIndex:function(t,e){var n=this,i=this.data;t=this.adjustIndex(t)||0;var r=-t*i.itemHeight;return t!==i.currentIndex?this.set({offset:r,currentIndex:t}).then((function(){e&&n.$emit("change",t)})):this.set({offset:r})},setValue:function(t){for(var e=this.options,n=0;n<e.length;n++)if(this.getOptionText(e[n])===t)return this.setIndex(n);return Promise.resolve()},getValue:function(){var t=this.data;return t.options[t.currentIndex]}}};e.default=a},"3a4e":function(t,e,n){},"936b":function(t,e,n){"use strict";n.r(e);var i=n("f3ac"),r=n("0529");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("1f0e");var s,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=u.exports},f3ac:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.options,(function(e,n){var i=t.__get_orig(e),r=t.getOptionText(e,t.valueKey);return{$orig:i,m0:r}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},a=[]}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'miniprogram_npm/vant-weapp/picker-column/index-create-component',
    {
        'miniprogram_npm/vant-weapp/picker-column/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("936b"))
        })
    },
    [['miniprogram_npm/vant-weapp/picker-column/index-create-component']]
]);