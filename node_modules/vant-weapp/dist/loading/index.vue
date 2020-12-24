<template>
<view class="van-loading custom-class" :style="'width: ' + size + '; height: ' + size">
  <view :class="'van-loading__spinner van-loading__spinner--' + type" :style="'color: ' + color + ';'">
    <view v-for="(item, index) in 12" :key="index" v-if="type === 'spinner'" class="van-loading__dot"></view>
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
    size: {
      type: String,
      default: '30px'
    },
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: '#c9c9c9'
    }
  },
  methods: {}
};
</script>
<style>
@import "./index.css";
</style>