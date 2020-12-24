<template>
<view :class="'custom-class ' + utils.bem('switch', { on: value === activeValue, disabled })" :style="'font-size: ' + size + '; ' + ( (checked ? activeColor : inactiveColor) ? 'background-color: ' + (checked ? activeColor : inactiveColor ) : '' )" @tap="onClick">
  <view class="van-switch__node node-class">
    <van-loading v-if="loading" size="50%" custom-class="van-switch__loading"></van-loading>
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import vanLoading from "../loading/index";

export default {
  data() {
    return {};
  },

  components: {
    vanLoading
  },
  props: {
    checked: null,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    size: {
      type: String,
      default: '30px'
    },
    activeValue: {
      type: null,
      default: true
    },
    inactiveValue: {
      type: null,
      default: false
    }
  },
  watch: {
    checked(value) {
      this.set({
        value
      });
    }

  },
  field: true,
  classes: ['node-class'],

  created() {
    this.set({
      value: this.checked
    });
  },

  methods: {
    onClick() {
      const {
        activeValue,
        inactiveValue
      } = this;

      if (!this.disabled && !this.loading) {
        const checked = this.checked === activeValue;
        const value = checked ? inactiveValue : activeValue;
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }

  }
};
</script>
<style>
@import "./index.css";
</style>