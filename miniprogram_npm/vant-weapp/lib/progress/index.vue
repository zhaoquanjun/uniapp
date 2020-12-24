<template>
<view class="van-progress custom-class">
  <view class="van-progress__portion" :style="'width: ' + percentage + '%; background: ' + ( inactive ? '#cacaca' : color )">
    <view v-if="showPivot && getters.text(pivotText, percentage)" :style="'color: ' + textColor + '; background: ' + ( pivotColor ? pivotColor : inactive ? '#cacaca' : color )" class="van-progress__pivot">
      {{ getters.text(pivotText, percentage) }}
    </view>
  </view>
</view>
</template>

<script module="getters" lang="wxs" src="./index.wxs"></script>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

var color_1 = require("../common/color.js");

component_1.VantComponent({
  props: {
    inactive: Boolean,
    percentage: Number,
    pivotText: String,
    pivotColor: String,
    showPivot: {
      type: Boolean,
      value: true
    },
    color: {
      type: String,
      value: color_1.BLUE
    },
    textColor: {
      type: String,
      value: '#fff'
    }
  }
});<style>
@import "./index.css";
</style>