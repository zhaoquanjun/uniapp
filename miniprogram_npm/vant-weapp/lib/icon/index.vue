<template>
<view :class="'custom-class ' + classPrefix + ' ' + ( utils.isSrc(name) ? 'van-icon--image' : classPrefix + '-' + name )" :style="( color ? 'color: ' + color + ';' : '' ) + '' + ( size ? 'font-size: ' + size + ';' : '' ) + '' + customStyle" @tap="onClick">
  <van-info v-if="info !== null" :info="info" custom-class="van-icon__info"></van-info>
  <image v-if="utils.isSrc(name)" :src="name" mode="aspectFit" class="van-icon__image"></image>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

component_1.VantComponent({
  props: {
    info: null,
    name: String,
    size: String,
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      value: 'van-icon'
    }
  },
  methods: {
    onClick: function () {
      this.$emit('click');
    }
  }
});<style>
@import "./index.css";
</style>