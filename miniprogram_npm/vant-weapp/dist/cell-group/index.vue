<template>
<view>
<view v-if="title" class="van-cell-group__title">
  {{ title }}
</view>
<view :class="'custom-class van-cell-group ' + ( border ? 'van-hairline--top-bottom' : '' )">
  <slot></slot>
</view>
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
    title: String,
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {}
};
</script>
<style>
@import "./index.css";
</style>