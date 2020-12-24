<template>
<view class="van-stepper custom-class">
  <view :class="'minus-class ' + utils.bem('stepper__minus', { disabled: minusDisabled })" :style="showMinus ? '' : 'display: none;'" hover-class="van-stepper__minus--hover" hover-stay-time="70" @tap="onMinus"></view>
  <input :type="integer ? 'number' : 'digit'" :class="'input-class ' + utils.bem('stepper__input', { disabled: disabled || disableInput })" :style="inputWidth ? 'width: ' + inputWidth : ''" :value="value" :focus="focus" :disabled="disabled || disableInput" @input="onInput" @focus="onFocus" @blur="onBlur"></input>
  <view :class="'plus-class ' + utils.bem('stepper__plus', { disabled: plusDisabled })" :style="showPlus ? '' : 'display: none;'" hover-class="van-stepper__plus--hover" hover-stay-time="70" @tap="onPlus"></view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';

export default {
  data() {
    return {
      focus: false
    };
  },

  components: {},
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: String,
    asyncChange: Boolean,
    disableInput: Boolean,
    min: {
      type: null,
      default: 1
    },
    max: {
      type: null,
      default: Number.MAX_SAFE_INTEGER
    },
    step: {
      type: null,
      default: 1
    },
    showPlus: {
      type: Boolean,
      default: true
    },
    showMinus: {
      type: Boolean,
      default: true
    },
    disablePlus: Boolean,
    disableMinus: Boolean
  },
  watch: {
    value(value) {
      if (value === '') {
        return;
      }

      const newValue = this.range(value);

      if (typeof newValue === 'number' && +this.value !== newValue) {
        this.set({
          value: newValue
        });
      }
    },

    max: 'check',
    min: 'check'
  },
  computed: {
    minusDisabled() {
      return this.disabled || this.disableMinus || this.value <= this.min;
    },

    plusDisabled() {
      return this.disabled || this.disablePlus || this.value >= this.max;
    }

  },
  field: true,
  classes: ['input-class', 'plus-class', 'minus-class'],

  created() {
    this.set({
      value: this.range(this.value)
    });
  },

  methods: {
    check() {
      const newValue = this.range(this.value);

      if (typeof newValue === 'number' && +this.value !== newValue) {
        this.set({
          value: newValue
        });
      }
    },

    onFocus(event) {
      this.$emit('focus', event.detail);
    },

    onBlur(event) {
      const value = this.range(this.value);
      this.triggerInput(value);
      this.$emit('blur', event.detail);
    },

    // limit value range
    range(value) {
      value = String(value).replace(/[^0-9.-]/g, '');
      return Math.max(Math.min(this.max, value), this.min);
    },

    onInput(event) {
      const {
        value = ''
      } = event.detail || {};
      this.triggerInput(value);
    },

    onChange(type) {
      if (this[`${type}Disabled`]) {
        this.$emit('overlimit', type);
        return;
      }

      const diff = type === 'minus' ? -this.step : +this.step;
      const value = Math.round((+this.value + diff) * 100) / 100;
      this.triggerInput(this.range(value));
      this.$emit(type);
    },

    onMinus() {
      this.onChange('minus');
    },

    onPlus() {
      this.onChange('plus');
    },

    triggerInput(value) {
      this.set({
        value: this.asyncChange ? this.value : value
      });
      this.$emit('change', value);
    }

  }
};
</script>
<style>
@import "./index.css";
</style>