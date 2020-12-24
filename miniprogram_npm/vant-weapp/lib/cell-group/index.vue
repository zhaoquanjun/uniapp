<template>
<view>
<view v-if="title" class="van-cell-group__title">
  {{ title }}
</view>
<view :class="'custom-class van-cell-group ' + ( border ? 'van-hairline--top-bottom' : '' )">
  <slot></slot>
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
    title: String,
    border: {
      type: Boolean,
      value: true
    }
  }
});<style>
@import "./index.css";
</style>