<template>
<view :class="( utils.bem('nav-bar', { fixed }) ) + ' custom-class ' + ( border ? 'van-hairline--bottom' : '' )" :style="'z-index: ' + zIndex + '; ' + ( safeAreaInsetTop ? 'padding-top: ' + statusBarHeight + 'px;' : '' )">
  <view class="van-nav-bar__left" @tap="onClickLeft">
    <block v-if="leftArrow || leftText">
      <van-icon v-if="leftArrow" size="16px" name="arrow-left" custom-class="van-nav-bar__arrow"></van-icon>
      <view v-if="leftText" class="van-nav-bar__text" hover-class="van-nav-bar__text--hover" hover-stay-time="70">{{ leftText }}</view>
    </block>
    <slot v-else name="left"></slot>
  </view>
  <view class="van-nav-bar__title title-class van-ellipsis">
    <block v-if="title">{{ title }}</block>
    <slot v-else name="title"></slot>
  </view>
  <view class="van-nav-bar__right" @tap="onClickRight">
    <view v-if="rightText" class="van-nav-bar__text" hover-class="van-nav-bar__text--hover" hover-stay-time="70">{{ rightText }}</view>
    <slot v-else name="right"></slot>
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

var safe_area_1 = require("../mixins/safe-area.js");

component_1.VantComponent({
  mixins: [safe_area_1.safeArea({
    safeAreaInsetTop: true
  })],
  classes: ['title-class'],
  props: {
    title: String,
    fixed: Boolean,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    border: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 120
    }
  },
  methods: {
    onClickLeft: function () {
      this.$emit('click-left');
    },
    onClickRight: function () {
      this.$emit('click-right');
    }
  }
});<style>
@import "./index.css";
</style>