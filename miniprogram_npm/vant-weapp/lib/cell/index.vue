<template>
<view :class="'custom-class ' + utils.bem('cell', [size, { center, required, borderless: !border, clickable: isLink || clickable }])" hover-class="van-cell--hover hover-class" hover-stay-time="70" :style="customStyle" @tap="onClick">
  <van-icon v-if="icon" :name="icon" class="van-cell__left-icon-wrap" custom-class="van-cell__left-icon"></van-icon>
  <slot v-else name="icon"></slot>

  <view :style="titleWidth ? 'max-width:' + titleWidth + ';min-width:' + titleWidth : ''" class="van-cell__title title-class">
    <block v-if="title">{{ title }}</block>
    <slot v-else name="title"></slot>

    <view v-if="label || useLabelSlot" class="van-cell__label label-class">
      <slot v-if="useLabelSlot" name="label"></slot>
      <block v-else-if="label">{{ label }}</block>
    </view>
  </view>

  <view class="van-cell__value value-class">
    <block v-if="value || value === 0">{{ value }}</block>
    <slot v-else></slot>
  </view>

  <van-icon v-if="isLink" :name="arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow'" class="van-cell__right-icon-wrap right-icon-class" custom-class="van-cell__right-icon"></van-icon>
  <slot v-else name="right-icon"></slot>

  <slot name="extra"></slot>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var link_1 = require("../mixins/link.js");

var component_1 = require("../common/component.js");

component_1.VantComponent({
  classes: ['title-class', 'label-class', 'value-class', 'right-icon-class', 'hover-class'],
  mixins: [link_1.link],
  props: {
    title: null,
    value: null,
    icon: String,
    size: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    arrowDirection: String,
    useLabelSlot: Boolean,
    border: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onClick: function (event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});<style>
@import "./index.css";
</style>