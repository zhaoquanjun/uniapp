<template>
<van-transition name="slide-down" :show="show" custom-class="van-notify" :custom-style="'background-color:' + backgroundColor + '; color: ' + color + '; z-index: ' + zIndex + ';'">
  <view v-if="safeAreaInsetTop" class="van-notify__safe-top" :style="'padding-top: ' + statusBarHeight + 'px'"></view>
  {{ text }}
</van-transition>
</template>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

var color_1 = require("../common/color.js");

var safe_area_1 = require("../mixins/safe-area.js");

component_1.VantComponent({
  mixins: [safe_area_1.safeArea()],
  props: {
    text: String,
    color: {
      type: String,
      value: '#fff'
    },
    backgroundColor: {
      type: String,
      value: color_1.RED
    },
    duration: {
      type: Number,
      value: 3000
    },
    zIndex: {
      type: Number,
      value: 110
    }
  },
  methods: {
    show: function () {
      var _this = this;

      var duration = this.data.duration;
      clearTimeout(this.timer);
      this.set({
        show: true
      });

      if (duration > 0 && duration !== Infinity) {
        this.timer = setTimeout(function () {
          _this.hide();
        }, duration);
      }
    },
    hide: function () {
      clearTimeout(this.timer);
      this.set({
        show: false
      });
    }
  }
});<style>
@import "./index.css";
</style>