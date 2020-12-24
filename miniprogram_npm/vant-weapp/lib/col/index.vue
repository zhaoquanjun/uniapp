<template>
<view :class="'custom-class ' + utils.bem('col', [span]) + ' ' + ( offset ? 'van-col--offset-' + offset : '' )" :style="style">
  <slot></slot>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

component_1.VantComponent({
  relation: {
    name: 'row',
    type: 'ancestor'
  },
  props: {
    span: Number,
    offset: Number
  },
  data: {
    style: ''
  },
  methods: {
    setGutter: function (gutter) {
      var padding = gutter / 2 + "px";
      var style = gutter ? "padding-left: " + padding + "; padding-right: " + padding + ";" : '';

      if (style !== this.data.style) {
        this.set({
          style: style
        });
      }
    }
  }
});<style>
@import "./index.css";
</style>