<template>
<view class="custom-class van-card">
  <view :class="utils.bem('card__header', { center: centered })">
    <view class="van-card__thumb" @tap="onClickThumb">
      <image v-if="thumb" :src="thumb" :mode="thumbMode" :lazy-load="lazyLoad" class="van-card__img thumb-class"></image>
      <slot name="thumb"></slot>
      <van-tag v-if="tag" mark type="danger" custom-class="van-card__tag">
        {{ tag }}
      </van-tag>
    </view>

    <view class="van-card__content">
      <view v-if="title" class="van-card__title title-class">{{ title }}</view>
      <slot v-else name="title"></slot>

      <view v-if="desc" class="van-card__desc desc-class">{{ desc }}</view>
      <slot v-else name="desc"></slot>

      <slot name="tags"></slot>

      <view class="van-card__bottom">
        <view v-if="price || price === 0" class="van-card__price price-class">{{ currency }} {{ price }}</view>
        <view v-if="originPrice || originPrice === 0" class="van-card__origin-price origin-price-class">{{ currency }} {{ originPrice }}</view>
        <view v-if="num" class="van-card__num num-class">x {{ num }}</view>
        <slot name="bottom"></slot>
      </view>
    </view>
  </view>

  <view class="van-card__footer">
    <slot name="footer"></slot>
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { link } from '../mixins/link';
import { VantComponent } from '../common/component';
import vanTag from "../tag/index";

export default {
  data() {
    return {};
  },

  components: {
    vanTag
  },
  props: {
    tag: String,
    num: String,
    desc: String,
    thumb: String,
    title: String,
    price: String,
    centered: Boolean,
    lazyLoad: Boolean,
    thumbLink: String,
    originPrice: String,
    thumbMode: {
      type: String,
      default: 'aspectFit'
    },
    currency: {
      type: String,
      default: '¥'
    }
  },
  classes: ['num-class', 'desc-class', 'thumb-class', 'title-class', 'price-class', 'origin-price-class'],
  mixins: [link],
  methods: {
    onClickThumb() {
      this.jumpLink('thumbLink');
    }

  }
};
</script>
<style>
@import "./index.css";
</style>