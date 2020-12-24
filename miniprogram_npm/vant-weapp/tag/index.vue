<template>
<view :class="'custom-class ' + utils.bem('tag', [size, { mark, plain, round }]) + ' ' + ( plain ? 'van-hairline--surround' : '' )" :style="style">
  <slot></slot>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { RED, BLUE, GREEN, ORANGE } from '../common/color';
const DEFAULT_COLOR = '#999';
const COLOR_MAP = {
  danger: RED,
  primary: BLUE,
  success: GREEN,
  warning: ORANGE
};

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String
  },
  computed: {
    style() {
      const color = this.color || COLOR_MAP[this.type] || DEFAULT_COLOR;
      const key = this.plain ? 'color' : 'background-color';
      const style = {
        [key]: color
      };

      if (this.textColor) {
        style.color = this.textColor;
      }

      return Object.keys(style).map(key => `${key}: ${style[key]}`).join(';');
    }

  },
  methods: {}
};
</script>
<style>
@import "./index.css";
</style>