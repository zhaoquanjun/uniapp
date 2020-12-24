<template>
<van-popup :show="show" position="bottom" :z-index="zIndex" :overlay="overlay" :custom-style="customStyle" :overlay-style="overlayStyle" custom-class="van-action-sheet" :safe-area-inset-bottom="safeAreaInsetBottom" :close-on-click-overlay="closeOnClickOverlay" @close="onClose">
  <view v-if="title" class="van-hairline--bottom van-action-sheet__header">
    {{ title }}
    <van-icon name="close" custom-class="van-action-sheet__close" @click="onClose"></van-icon>
  </view>
  <view v-if="actions && actions.length">
    <!-- button外包一层view，防止actions动态变化，导致渲染时button被打散 -->
    <button v-for="(item, index) in actions" :key="index" :open-type="item.openType" :class="( utils.bem('action-sheet__item', { disabled: item.disabled || item.loading }) ) + ' van-hairline--top ' + item.className || ''" hover-class="van-action-sheet__item--hover" :data-index="index" @tap="onSelect">
      <block v-if="!item.loading">
        {{ item.name }}
        <text v-if="item.subname" class="van-action-sheet__subname">{{ item.subname }}</text>
      </block>
      <van-loading v-else size="20px"></van-loading>
    </button>
  </view>
  <slot></slot>
  <view v-if="cancelText" class="van-action-sheet__cancel" hover-class="van-action-sheet__cancel--hover" hover-stay-time="70" @tap="onCancel">
    {{ cancelText }}
  </view>
</van-popup>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

var safe_area_1 = require("../mixins/safe-area.js");

component_1.VantComponent({
  mixins: [safe_area_1.safeArea()],
  props: {
    show: Boolean,
    title: String,
    cancelText: String,
    customStyle: String,
    overlayStyle: String,
    zIndex: {
      type: Number,
      value: 100
    },
    actions: {
      type: Array,
      value: []
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onSelect: function (event) {
      var index = event.currentTarget.dataset.index;
      var item = this.data.actions[index];

      if (item && !item.disabled && !item.loading) {
        this.$emit('select', item);
      }
    },
    onCancel: function () {
      this.$emit('cancel');
    },
    onClose: function () {
      this.$emit('close');
    }
  }
});<style>
@import "./index.css";
</style>