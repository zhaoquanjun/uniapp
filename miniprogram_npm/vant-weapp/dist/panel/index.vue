<template>
<view class="van-panel van-hairline--top-bottom custom-class">
  <van-cell v-if="title || desc || status" :title="title" :label="desc" :value="status" custom-class="header-class" value-class="van-panel__header-value"></van-cell>
  <slot v-else name="header"></slot>

  <view class="van-panel__content">
    <slot></slot>
  </view>

  <view v-if="useFooterSlot" class="van-panel__footer van-hairline--top footer-class">
    <slot name="footer"></slot>
  </view>
</view>
</template>

<script>
import { VantComponent } from '../common/component';
import vanCell from "../cell/index";

export default {
  data() {
    return {};
  },

  components: {
    vanCell
  },
  props: {
    desc: String,
    title: String,
    status: String,
    useFooterSlot: Boolean
  },
  classes: ['header-class', 'footer-class'],
  methods: {}
};
</script>
<style>
@import "./index.css";
</style>