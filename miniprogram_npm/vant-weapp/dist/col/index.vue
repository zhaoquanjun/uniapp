<template>
<view :class="'custom-class ' + utils.bem('col', [span]) + ' ' + ( offset ? 'van-col--offset-' + offset : '' )" :style="style">
  <slot></slot>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';

export default {
  data() {
    return {
      style: ''
    };
  },

  components: {},
  props: {
    span: Number,
    offset: Number
  },
  relation: {
    name: 'row',
    type: 'ancestor'
  },
  methods: {
    setGutter(gutter) {
      const padding = `${gutter / 2}px`;
      const style = gutter ? `padding-left: ${padding}; padding-right: ${padding};` : '';

      if (style !== this.style) {
        this.set({
          style
        });
      }
    }

  }
};
</script>
<style>
@import "./index.css";
</style>