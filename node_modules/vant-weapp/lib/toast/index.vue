<template>
<view>
<van-overlay v-if="mask || forbidClick" :show="show" :mask="mask" :z-index="zIndex"></van-overlay>
<van-transition :show="show" :custom-style="'z-index: ' + zIndex" custom-class="van-toast__container">
  <view :class="'van-toast van-toast--' + ( type === 'text' ? 'text' : 'icon' ) + ' van-toast--' + position" catch:touchmove="noop">
    <!-- text only -->
    <text v-if="type === 'text'">{{ message }}</text>

    <!-- with icon -->
    <block v-else>
      <van-loading v-if="type === 'loading'" color="white" :type="loadingType" custom-class="van-toast__loading"></van-loading>
      <van-icon v-else class="van-toast__icon" :name="type"></van-icon>
      <text v-if="message" class="van-toast__text">{{ message }}</text>
    </block>

    <slot></slot>
  </view>
</van-transition>
</view>
</template>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

component_1.VantComponent({
  props: {
    show: Boolean,
    mask: Boolean,
    message: String,
    forbidClick: Boolean,
    zIndex: {
      type: Number,
      value: 1000
    },
    type: {
      type: String,
      value: 'text'
    },
    loadingType: {
      type: String,
      value: 'circular'
    },
    position: {
      type: String,
      value: 'middle'
    }
  },
  methods: {
    // for prevent touchmove
    noop: function () {}
  }
});<style>
@import "./index.css";
</style>