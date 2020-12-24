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

<script>
import { VantComponent } from '../common/component';
import vanIcon from "../icon/index";

export default {
  data() {
    return {};
  },

  components: {
    vanIcon
  },
  props: {
    value: null,
    disabled: Boolean,
    useIconSlot: Boolean,
    checkedColor: String,
    labelPosition: {
      type: String,
      default: 'right'
    },
    labelDisabled: Boolean,
    shape: {
      type: String,
      default: 'round'
    }
  },
  field: true,
  relation: {
    name: 'radio-group',
    type: 'ancestor',

    linked(target) {
      this.parent = target;
    },

    unlinked() {
      this.parent = null;
    }

  },
  classes: ['icon-class', 'label-class'],
  methods: {
    emitChange(value) {
      const instance = this.parent || this;
      instance.$emit('input', value);
      instance.$emit('change', value);
    },

    onChange(event) {
      console.log(event);
      this.emitChange(this.name);
    },

    onClickLabel() {
      const {
        disabled,
        labelDisabled,
        name
      } = this;

      if (!disabled && !labelDisabled) {
        this.emitChange(name);
      }
    }

  }
};
</script>
<style>
@import "./index.css";
</style>