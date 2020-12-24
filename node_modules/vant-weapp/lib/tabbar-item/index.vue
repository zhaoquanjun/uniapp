<template>
<view :class="( utils.bem('tabbar-item', { active }) ) + ' custom-class'" :style="'color: ' + ( active ? activeColor : inactiveColor )" @tap="onClick">
  <view :class="utils.bem('tabbar-item__icon', { dot })">
    <van-icon v-if="icon" :name="icon" customStyle="display: block"></van-icon>
    <block v-else>
      <slot v-if="active" name="icon-active"></slot>
      <slot v-else name="icon"></slot>
    </block>
    <van-info v-if="info !== null" :info="info" custom-style="margin-top: 2px"></van-info>
  </view>
  <view class="van-tabbar-item__text">
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
  props: {
    info: null,
    icon: String,
    dot: Boolean,
    name: {
      type: [String, Number]
    }
  },
  relation: {
    name: 'tabbar',
    type: 'ancestor'
  },
  data: {
    active: false
  },
  methods: {
    onClick: function () {
      if (this.parent) {
        this.parent.onChange(this);
      }

      this.$emit('click');
    },
    updateFromParent: function () {
      var parent = this.parent;

      if (!parent) {
        return;
      }

      var index = parent.children.indexOf(this);
      var parentData = parent.data;
      var data = this.data;
      var active = (data.name || index) === parentData.active;
      var patch = {};

      if (active !== data.active) {
        patch.active = active;
      }

      if (parentData.activeColor !== data.activeColor) {
        patch.activeColor = parentData.activeColor;
      }

      if (parentData.inactiveColor !== data.inactiveColor) {
        patch.inactiveColor = parentData.inactiveColor;
      }

      return Object.keys(patch).length > 0 ? this.set(patch) : Promise.resolve();
    }
  }
});<style>
@import "./index.css";
</style>