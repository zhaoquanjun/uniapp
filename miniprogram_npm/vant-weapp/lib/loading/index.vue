<template>
<view class="van-loading custom-class" :style="'width: ' + size + '; height: ' + size">
  <view :class="'van-loading__spinner van-loading__spinner--' + type" :style="'color: ' + color + ';'">
    <view v-for="(item, index) in 12" :key="index" v-if="type === 'spinner'" class="van-loading__dot"></view>
  </view>
</view>
</template>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

component_1.VantComponent({
  props: {
    size: {
      type: String,
      value: '30px'
    },
    type: {
      type: String,
      value: 'circular'
    },
    color: {
      type: String,
      value: '#c9c9c9'
    }
  }
});<style>
@import "./index.css";
</style>