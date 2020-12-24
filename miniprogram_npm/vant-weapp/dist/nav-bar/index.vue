<template>
<view :class="( utils.bem('nav-bar', { fixed }) ) + ' custom-class ' + ( border ? 'van-hairline--bottom' : '' )" :style="'z-index: ' + zIndex + '; ' + ( safeAreaInsetTop ? 'padding-top: ' + statusBarHeight + 'px;' : '' )">
  <view class="van-nav-bar__left" @tap="onClickLeft">
    <block v-if="leftArrow || leftText">
      <van-icon v-if="leftArrow" size="16px" name="arrow-left" custom-class="van-nav-bar__arrow"></van-icon>
      <view v-if="leftText" class="van-nav-bar__text" hover-class="van-nav-bar__text--hover" hover-stay-time="70">{{ leftText }}</view>
    </block>
    <slot v-else name="left"></slot>
  </view>
  <view class="van-nav-bar__title title-class van-ellipsis">
    <block v-if="title">{{ title }}</block>
    <slot v-else name="title"></slot>
  </view>
  <view class="van-nav-bar__right" @tap="onClickRight">
    <view v-if="rightText" class="van-nav-bar__text" hover-class="van-nav-bar__text--hover" hover-stay-time="70">{{ rightText }}</view>
    <slot v-else name="right"></slot>
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';
import vanIcon from "../icon/index";

export default {
  data() {
    return {};
  },

  components: {
    vanIcon
  },
  props: {
    title: String,
    fixed: Boolean,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    border: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 120
    }
  },
  mixins: [safeArea({
    safeAreaInsetTop: true
  })],
  classes: ['title-class'],
  methods: {
    onClickLeft() {
      this.$emit('click-left');
    },

    onClickRight() {
      this.$emit('click-right');
    }

  }
};
</script>
<style>
@import "./index.css";
</style>