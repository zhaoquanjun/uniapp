<template>
<view class="van-checkbox custom-class">
  <view class="van-checkbox__icon-wrap" @tap="toggle">
    <slot v-if="useIconSlot" name="icon"></slot>
    <van-icon v-else name="success" :class="utils.bem('checkbox__icon', [shape, { disabled, checked: value }])" :style="checkedColor && value && !disabled ? 'border-color:' + checkedColor + '; background-color:' + checkedColor : ''" custom-class="icon-class" custom-style="line-height: 20px;"></van-icon>
  </view>
  <view :class="'label-class ' + utils.bem('checkbox__label', [labelPosition, { disabled }])" @tap="onClickLabel">
    <slot></slot>
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
function emit(target, value) {
  target.$emit('input', value);
  target.$emit('change', value);
}
import vanIcon from "../icon/index";

export default {
  data() {
    return {};
  },

  components: {
    vanIcon
  },
  props: {
    value: Boolean,
    disabled: Boolean,
    useIconSlot: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
    shape: {
      type: String,
      default: 'round'
    }
  },
  field: true,
  relation: {
    name: 'checkbox-group',
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
      if (this.parent) {
        this.setParentValue(this.parent, value);
      } else {
        emit(this, value);
      }
    },

    toggle() {
      const {
        disabled,
        value
      } = this;

      if (!disabled) {
        this.emitChange(!value);
      }
    },

    onClickLabel() {
      const {
        labelDisabled,
        disabled,
        value
      } = this;

      if (!disabled && !labelDisabled) {
        this.emitChange(!value);
      }
    },

    setParentValue(parent, value) {
      const parentValue = parent.data.value.slice();
      const {
        name
      } = this;
      const {
        max
      } = parent.data;

      if (value) {
        if (max && parentValue.length >= max) {
          return;
        }

        if (parentValue.indexOf(name) === -1) {
          parentValue.push(name);
          emit(parent, parentValue);
        }
      } else {
        const index = parentValue.indexOf(name);

        if (index !== -1) {
          parentValue.splice(index, 1);
          emit(parent, parentValue);
        }
      }
    }

  }
};
</script>
<style>
@import "./index.css";
</style>