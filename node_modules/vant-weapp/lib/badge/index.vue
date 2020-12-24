<template>
<view :class="utils.bem('badge', { active }) + ' van-hairline custom-class'" hover-class="van-badge--hover" hover-stay-time="70" @tap="onClick">
  <view class="van-badge__text">
    <van-info v-if="info !== null" :info="info" custom-style="right: 4px"></van-info>
    {{ title }}
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
  relation: {
    type: 'ancestor',
    name: 'badge-group',
    linked: function (target) {
      this.parent = target;
    }
  },
  props: {
    info: null,
    title: String
  },
  methods: {
    onClick: function () {
      var _this = this;

      var parent = this.parent;

      if (!parent) {
        return;
      }

      var index = parent.badges.indexOf(this);
      parent.setActive(index).then(function () {
        _this.$emit('click', index);

        parent.$emit('change', index);
      });
    },
    setActive: function (active) {
      return this.set({
        active: active
      });
    }
  }
});<style>
@import "./index.css";
</style>