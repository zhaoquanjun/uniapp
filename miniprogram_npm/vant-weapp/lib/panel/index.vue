<template>
<view class="van-panel van-hairline--top-bottom custom-class">
  <van-cell v-if="title || desc || status" :title="title" :label="desc" :value="status" custom-class="header-class" value-class="van-panel__header-value"></van-cell>
  <slot v-else name="header"></slot>

  <view class="van-panel__content">
    <slot></slot>
  </view>

  <view v-if="useFooterSlot" class="van-panel__footer van-hairline--top footer-class">
    <slot name="footer"></slot>
  </view>
</view>
</template>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

component_1.VantComponent({
  classes: ['header-class', 'footer-class'],
  props: {
    desc: String,
    title: String,
    status: String,
    useFooterSlot: Boolean
  }
});<style>
@import "./index.css";
</style>