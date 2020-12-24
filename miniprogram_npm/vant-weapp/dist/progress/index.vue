<template>
<view class="van-progress custom-class">
  <view class="van-progress__portion" :style="'width: ' + percentage + '%; background: ' + ( inactive ? '#cacaca' : color )">
    <view v-if="showPivot && getters.text(pivotText, percentage)" :style="'color: ' + textColor + '; background: ' + ( pivotColor ? pivotColor : inactive ? '#cacaca' : color )" class="van-progress__pivot">
      {{ getters.text(pivotText, percentage) }}
    </view>
  </view>
</view>
</template>

<script module="getters" lang="wxs" src="./index.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { BLUE } from '../common/color';

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    inactive: Boolean,
    percentage: Number,
    pivotText: String,
    pivotColor: String,
    showPivot: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: BLUE
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },
  methods: {}
};
</script>
<style>
@import "./index.css";
</style>