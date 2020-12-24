<template>
<view class="van-submit-bar custom-class">
  <slot name="top"></slot>

  <view class="van-submit-bar__tip">
    <van-icon v-if="tipIcon" size="12px" :name="tipIcon" custom-class="van-submit-bar__tip-icon"></van-icon>
    <view v-if="hasTip" class="van-submit-bar__tip-text">
      {{ tip }}
    </view>
    <slot name="tip"></slot>
  </view>

  <view :class="'bar-class ' + ( utils.bem('submit-bar__bar', { safe: safeAreaInsetBottom && isIPhoneX }) )">
    <slot></slot>
    <view v-if="hasPrice" class="van-submit-bar__text">
      <text>{{ label || '合计：' }}</text>
      <text class="van-submit-bar__price price-class">
        <text class="van-submit-bar__currency">{{ currency }} </text>
        <text>{{ priceStr }}</text>
      </text>
      <text class="van-submit-bar__suffix-label">{{ suffixLabel }}</text>
    </view>
    <van-button square size="large" :type="buttonType" :loading="loading" :disabled="disabled" class="van-submit-bar__button" custom-class="button-class" @click="onSubmit">
      {{ loading ? '' : buttonText }}
    </van-button>
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';
import vanButton from "../button/index";
import vanIcon from "../icon/index";

export default {
  data() {
    return {};
  },

  components: {
    vanButton,
    vanIcon
  },
  props: {
    tip: {
      type: null
    },
    tipIcon: String,
    type: Number,
    price: {
      type: null
    },
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'danger'
    },
    decimalLength: {
      type: Number,
      default: 2
    },
    suffixLabel: String
  },
  watch: {
    tip: {
      handler: 'updateTip',
      immediate: true
    },
    price: {
      handler: 'updatePrice',
      immediate: true
    },
    decimalLength: {
      handler: 'updatePrice',
      immediate: true
    }
  },
  mixins: [safeArea()],
  classes: ['bar-class', 'price-class', 'button-class'],
  methods: {
    updatePrice() {
      const {
        price,
        decimalLength
      } = this;
      this.set({
        hasPrice: typeof price === 'number',
        priceStr: (price / 100).toFixed(decimalLength)
      });
    },

    updateTip() {
      this.set({
        hasTip: typeof this.tip === 'string'
      });
    },

    onSubmit(event) {
      this.$emit('submit', event.detail);
    }

  }
};
</script>
<style>
@import "./index.css";
</style>