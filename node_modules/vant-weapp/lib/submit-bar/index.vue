<template>
<view class="van-submit-bar custom-class">
  <slot name="top"></slot>

  <view class="van-submit-bar__tip">
    <van-icon v-if="tipIcon" size="12px" :name="tipIcon" custom-class="van-submit-bar__tip-icon"></van-icon>
    <view v-if="hasTip" class="van-submit-bar__tip-text">
      {{ tip }}
    </view>
    <slot name="tip"></slot>
  </view>

  <view :class="'bar-class ' + ( utils.bem('submit-bar__bar', { safe: safeAreaInsetBottom && isIPhoneX }) )">
    <slot></slot>
    <view v-if="hasPrice" class="van-submit-bar__text">
      <text>{{ label || '合计：' }}</text>
      <text class="van-submit-bar__price price-class">
        <text class="van-submit-bar__currency">{{ currency }} </text>
        <text>{{ priceStr }}</text>
      </text>
      <text class="van-submit-bar__suffix-label">{{ suffixLabel }}</text>
    </view>
    <van-button square size="large" :type="buttonType" :loading="loading" :disabled="disabled" class="van-submit-bar__button" custom-class="button-class" @click="onSubmit">
      {{ loading ? '' : buttonText }}
    </van-button>
  </view>
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
  mixins: [safe_area_1.safeArea()],
  classes: ['bar-class', 'price-class', 'button-class'],
  props: {
    tip: {
      type: null,
      observer: 'updateTip'
    },
    tipIcon: String,
    type: Number,
    price: {
      type: null,
      observer: 'updatePrice'
    },
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      value: '¥'
    },
    buttonType: {
      type: String,
      value: 'danger'
    },
    decimalLength: {
      type: Number,
      value: 2,
      observer: 'updatePrice'
    },
    suffixLabel: String
  },
  methods: {
    updatePrice: function () {
      var _a = this.data,
          price = _a.price,
          decimalLength = _a.decimalLength;
      this.set({
        hasPrice: typeof price === 'number',
        priceStr: (price / 100).toFixed(decimalLength)
      });
    },
    updateTip: function () {
      this.set({
        hasTip: typeof this.data.tip === 'string'
      });
    },
    onSubmit: function (event) {
      this.$emit('submit', event.detail);
    }
  }
});<style>
@import "./index.css";
</style>