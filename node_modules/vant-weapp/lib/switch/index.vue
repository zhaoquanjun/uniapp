<template>
<view :class="'custom-class ' + utils.bem('switch', { on: value === activeValue, disabled })" :style="'font-size: ' + size + '; ' + ( (checked ? activeColor : inactiveColor) ? 'background-color: ' + (checked ? activeColor : inactiveColor ) : '' )" @tap="onClick">
  <view class="van-switch__node node-class">
    <van-loading v-if="loading" size="50%" custom-class="van-switch__loading"></van-loading>
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

component_1.VantComponent({
  field: true,
  classes: ['node-class'],
  props: {
    checked: null,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    size: {
      type: String,
      value: '30px'
    },
    activeValue: {
      type: null,
      value: true
    },
    inactiveValue: {
      type: null,
      value: false
    }
  },
  watch: {
    checked: function (value) {
      this.set({
        value: value
      });
    }
  },
  created: function () {
    this.set({
      value: this.data.checked
    });
  },
  methods: {
    onClick: function () {
      var _a = this.data,
          activeValue = _a.activeValue,
          inactiveValue = _a.inactiveValue;

      if (!this.data.disabled && !this.data.loading) {
        var checked = this.data.checked === activeValue;
        var value = checked ? inactiveValue : activeValue;
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }
  }
});<style>
@import "./index.css";
</style>