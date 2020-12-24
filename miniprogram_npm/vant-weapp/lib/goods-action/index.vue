<template>
<view :class="'custom-class ' + ( utils.bem('goods-action', { safe: isIPhoneX && safeAreaInsetBottom }) )">
  <slot></slot>
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
  mixins: [safe_area_1.safeArea()]
});<style>
@import "./index.css";
</style>