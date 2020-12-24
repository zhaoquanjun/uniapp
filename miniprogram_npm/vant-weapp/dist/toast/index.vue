<template>
<view>
<van-overlay v-if="mask || forbidClick" :show="show" :mask="mask" :z-index="zIndex"></van-overlay>
<van-transition :show="show" :custom-style="'z-index: ' + zIndex" custom-class="van-toast__container">
  <view :class="'van-toast van-toast--' + ( type === 'text' ? 'text' : 'icon' ) + ' van-toast--' + position" catch:touchmove="noop">
    <!-- text only -->
    <text v-if="type === 'text'">{{ message }}</text>

    <!-- with icon -->
    <block v-else>
      <van-loading v-if="type === 'loading'" color="white" :type="loadingType" custom-class="van-toast__loading"></van-loading>
      <van-icon v-else class="van-toast__icon" :name="type"></van-icon>
      <text v-if="message" class="van-toast__text">{{ message }}</text>
    </block>

    <slot></slot>
  </view>
</van-transition>
</view>
</template>

<script>
import { VantComponent } from '../common/component';
import vanIcon from "../icon/index";
import vanLoading from "../loading/index";
import vanOverlay from "../overlay/index";
import vanTransition from "../transition/index";

export default {
  data() {
    return {};
  },

  components: {
    vanIcon,
    vanLoading,
    vanOverlay,
    vanTransition
  },
  props: {
    show: Boolean,
    mask: Boolean,
    message: String,
    forbidClick: Boolean,
    zIndex: {
      type: Number,
      default: 1000
    },
    type: {
      type: String,
      default: 'text'
    },
    loadingType: {
      type: String,
      default: 'circular'
    },
    position: {
      type: String,
      default: 'middle'
    }
  },
  methods: {
    // for prevent touchmove
    noop() {}

  }
};
</script>
<style>
@import "./index.css";
</style>