<template>
<view class="custom-class van-row" :style="style">
  <slot></slot>
</view>
</template>

<script>
import { VantComponent } from '../common/component';

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    gutter: Number
  },
  watch: {
    gutter: 'setGutter'
  },
  relation: {
    name: 'col',
    type: 'descendant',

    linked(target) {
      if (this.gutter) {
        target.setGutter(this.gutter);
      }
    }

  },

  mounted() {
    if (this.gutter) {
      this.setGutter();
    }
  },

  methods: {
    setGutter() {
      const {
        gutter
      } = this;
      const margin = `-${Number(gutter) / 2}px`;
      const style = gutter ? `margin-right: ${margin}; margin-left: ${margin};` : '';
      this.set({
        style
      });
      this.getRelationNodes('../col/index').forEach(col => {
        col.setGutter(this.gutter);
      });
    }

  }
};
</script>
<style>
@import "./index.css";
</style>