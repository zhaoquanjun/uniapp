<template>
<view :class="'custom-class ' + utils.bem('steps', [direction])">
  <view class="van-step__wrapper">
    <view v-for="(item, index) in steps" :key="index" :class="utils.bem('step', [direction, status(index, active)]) + ' van-hairline'">
      <view class="van-step__title" :style="index === active ? 'color: ' + activeColor : ''">
        <view>{{ item.text }}</view>
        <view>{{ item.desc }}</view>
      </view>
      <view class="van-step__circle-container">
        <view class="van-step__circle" v-if="index !== active" :style="index < active ? 'background-color: ' + activeColor : ''"></view>
        <van-icon v-else name="checked" :color="activeColor" custom-class="van-step__active"></van-icon>
      </view>
      <view v-if="index !== steps.length - 1" class="van-step__line" :style="index < active ? 'background-color: ' + activeColor : ''"></view>
    </view>
  </view>
</view>
</template>

<script module="status" lang="wxs" src="./status.wxs"></script>
<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { GREEN } from '../common/color';
import vanIcon from "../icon/index";

export default {
  data() {
    return {};
  },

  components: {
    vanIcon
  },
  props: {
    icon: String,
    steps: Array,
    active: Number,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: GREEN
    }
  },
  methods: {}
};
</script>
<style>
@import "./index.css";
</style>