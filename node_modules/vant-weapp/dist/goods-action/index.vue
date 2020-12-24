<template>
<view :class="'custom-class ' + ( utils.bem('goods-action', { safe: isIPhoneX && safeAreaInsetBottom }) )">
  <slot></slot>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';

export default {
  data() {
    return {};
  },

  components: {},
  props: {},
  mixins: [safeArea()],
  methods: {}
};
</script>
<style>
@import "./index.css";
</style>