<template>
<view class="van-stepper custom-class">
  <view :class="'minus-class ' + utils.bem('stepper__minus', { disabled: minusDisabled })" :style="showMinus ? '' : 'display: none;'" hover-class="van-stepper__minus--hover" hover-stay-time="70" @tap="onMinus"></view>
  <input :type="integer ? 'number' : 'digit'" :class="'input-class ' + utils.bem('stepper__input', { disabled: disabled || disableInput })" :style="inputWidth ? 'width: ' + inputWidth : ''" :value="value" :focus="focus" :disabled="disabled || disableInput" @input="onInput" @focus="onFocus" @blur="onBlur"></input>
  <view :class="'plus-class ' + utils.bem('stepper__plus', { disabled: plusDisabled })" :style="showPlus ? '' : 'display: none;'" hover-class="van-stepper__plus--hover" hover-stay-time="70" @tap="onPlus"></view>
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
  classes: ['input-class', 'plus-class', 'minus-class'],
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: String,
    asyncChange: Boolean,
    disableInput: Boolean,
    min: {
      type: null,
      value: 1
    },
    max: {
      type: null,
      value: Number.MAX_SAFE_INTEGER
    },
    step: {
      type: null,
      value: 1
    },
    showPlus: {
      type: Boolean,
      value: true
    },
    showMinus: {
      type: Boolean,
      value: true
    },
    disablePlus: Boolean,
    disableMinus: Boolean
  },
  computed: {
    minusDisabled: function () {
      return this.data.disabled || this.data.disableMinus || this.data.value <= this.data.min;
    },
    plusDisabled: function () {
      return this.data.disabled || this.data.disablePlus || this.data.value >= this.data.max;
    }
  },
  watch: {
    value: function (value) {
      if (value === '') {
        return;
      }

      var newValue = this.range(value);

      if (typeof newValue === 'number' && +this.data.value !== newValue) {
        this.set({
          value: newValue
        });
      }
    },
    max: 'check',
    min: 'check'
  },
  data: {
    focus: false
  },
  created: function () {
    this.set({
      value: this.range(this.data.value)
    });
  },
  methods: {
    check: function () {
      var newValue = this.range(this.data.value);

      if (typeof newValue === 'number' && +this.data.value !== newValue) {
        this.set({
          value: newValue
        });
      }
    },
    onFocus: function (event) {
      this.$emit('focus', event.detail);
    },
    onBlur: function (event) {
      var value = this.range(this.data.value);
      this.triggerInput(value);
      this.$emit('blur', event.detail);
    },
    // limit value range
    range: function (value) {
      value = String(value).replace(/[^0-9.-]/g, '');
      return Math.max(Math.min(this.data.max, value), this.data.min);
    },
    onInput: function (event) {
      var _a = (event.detail || {}).value,
          value = _a === void 0 ? '' : _a;
      this.triggerInput(value);
    },
    onChange: function (type) {
      if (this.data[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.data.step : +this.data.step;
      var value = Math.round((+this.data.value + diff) * 100) / 100;
      this.triggerInput(this.range(value));
      this.$emit(type);
    },
    onMinus: function () {
      this.onChange('minus');
    },
    onPlus: function () {
      this.onChange('plus');
    },
    triggerInput: function (value) {
      this.set({
        value: this.data.asyncChange ? this.data.value : value
      });
      this.$emit('change', value);
    }
  }
});<style>
@import "./index.css";
</style>