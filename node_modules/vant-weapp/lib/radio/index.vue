<template>
<view class="van-radio custom-class">
  <view v-if="labelPosition === 'left'" :class="'label-class ' + utils.bem('radio__label', [labelPosition, { disabled }])" @tap="onClickLabel">
    <slot></slot>
  </view>
  <view class="van-radio__icon-wrap" @tap="onChange">
    <slot v-if="useIconSlot" name="icon"></slot>
    <van-icon v-else name="success" :class="utils.bem('radio__icon', [shape, { disabled, checked: value === name }])" :style="checkedColor && !disabled && value === name ? 'border-color:' + checkedColor + '; background-color:' + checkedColor : ''" custom-class="icon-class" custom-style="line-height: 20px;"></van-icon>
  </view>
  <view v-if="labelPosition === 'right'" :class="'label-class ' + utils.bem('radio__label', [labelPosition, { disabled }])" @tap="onClickLabel">
    <slot></slot>
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
  relation: {
    name: 'radio-group',
    type: 'ancestor',
    linked: function (target) {
      this.parent = target;
    },
    unlinked: function () {
      this.parent = null;
    }
  },
  classes: ['icon-class', 'label-class'],
  props: {
    value: null,
    disabled: Boolean,
    useIconSlot: Boolean,
    checkedColor: String,
    labelPosition: {
      type: String,
      value: 'right'
    },
    labelDisabled: Boolean,
    shape: {
      type: String,
      value: 'round'
    }
  },
  methods: {
    emitChange: function (value) {
      var instance = this.parent || this;
      instance.$emit('input', value);
      instance.$emit('change', value);
    },
    onChange: function (event) {
      console.log(event);
      this.emitChange(this.data.name);
    },
    onClickLabel: function () {
      var _a = this.data,
          disabled = _a.disabled,
          labelDisabled = _a.labelDisabled,
          name = _a.name;

      if (!disabled && !labelDisabled) {
        this.emitChange(name);
      }
    }
  }
});<style>
@import "./index.css";
</style>