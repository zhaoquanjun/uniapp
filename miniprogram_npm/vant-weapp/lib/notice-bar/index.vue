<template>
<view v-if="show" :class="'custom-class ' + ( utils.bem('notice-bar', { withicon: mode, wrapable }) )" :style="'color: ' + color + '; background-color: ' + backgroundColor + ';'" @tap="onClick">
  <van-icon v-if="leftIcon" size="16px" :name="leftIcon" class="van-notice-bar__left-icon"></van-icon>

  <view class="van-notice-bar__wrap">
    <view :class="'van-notice-bar__content ' + ( !scrollable && !wrapable ? 'van-ellipsis' : '' )" :animation="animationData">
      {{ text }}
    </view>
  </view>

  <van-icon v-if="mode === 'closeable'" class="van-notice-bar__right-icon" name="cross" @tap="onClickIcon"></van-icon>
  <navigator v-if="mode === 'link'" :url="url" :open-type="openType">
    <van-icon class="van-notice-bar__right-icon" name="arrow"></van-icon>
  </navigator>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

var FONT_COLOR = '#ed6a0c';
var BG_COLOR = '#fffbe8';
component_1.VantComponent({
  props: {
    text: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: 'navigate'
    },
    delay: {
      type: Number,
      value: 1
    },
    speed: {
      type: Number,
      value: 50
    },
    scrollable: {
      type: Boolean,
      value: true
    },
    leftIcon: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: FONT_COLOR
    },
    backgroundColor: {
      type: String,
      value: BG_COLOR
    },
    wrapable: Boolean
  },
  data: {
    show: true
  },
  watch: {
    text: function () {
      this.set({}, this.init);
    }
  },
  created: function () {
    this.resetAnimation = uni.createAnimation({
      duration: 0,
      timingFunction: 'linear'
    });
  },
  destroyed: function () {
    this.timer && clearTimeout(this.timer);
  },
  methods: {
    init: function () {
      var _this = this;

      Promise.all([this.getRect('.van-notice-bar__content'), this.getRect('.van-notice-bar__wrap')]).then(function (rects) {
        var contentRect = rects[0],
            wrapRect = rects[1];

        if (contentRect == null || wrapRect == null || !contentRect.width || !wrapRect.width) {
          return;
        }

        var _a = _this.data,
            speed = _a.speed,
            scrollable = _a.scrollable,
            delay = _a.delay;

        if (scrollable && wrapRect.width < contentRect.width) {
          var duration = contentRect.width / speed * 1000;
          _this.wrapWidth = wrapRect.width;
          _this.contentWidth = contentRect.width;
          _this.duration = duration;
          _this.animation = uni.createAnimation({
            duration: duration,
            timingFunction: 'linear',
            delay: delay
          });

          _this.scroll();
        }
      });
    },
    scroll: function () {
      var _this = this;

      this.timer && clearTimeout(this.timer);
      this.timer = null;
      this.set({
        animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
      });
      setTimeout(function () {
        _this.set({
          animationData: _this.animation.translateX(-_this.contentWidth).step().export()
        });
      }, 20);
      this.timer = setTimeout(function () {
        _this.scroll();
      }, this.duration);
    },
    onClickIcon: function () {
      this.timer && clearTimeout(this.timer);
      this.timer = null;
      this.set({
        show: false
      });
    },
    onClick: function (event) {
      this.$emit('click', event);
    }
  }
});<style>
@import "./index.css";
</style>