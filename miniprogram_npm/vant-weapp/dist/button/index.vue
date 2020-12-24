<template>
<button :id="id" :class="'custom-class ' + utils.bem('button', [type, size, { block, round, plain, square, loading, disabled, hairline, unclickable: disabled || loading }]) + ' ' + ( hairline ? 'van-hairline--surround' : '' )" :open-type="openType" hover-class="van-button--active hover-class" :style="color ? 'border-color: ' + color + ';' + (plain ? 'color: ' + color : 'color: #fff; background-color: ' + color) : ''" :lang="lang" :business-id="businessId" :session-from="sessionFrom" :send-message-title="sendMessageTitle" :send-message-path="sendMessagePath" :send-message-img="sendMessageImg" :show-message-card="showMessageCard" :app-parameter="appParameter" :aria-label="ariaLabel" @tap="onClick" @getuserinfo="bindGetUserInfo" @contact="bindContact" @getphonenumber="bindGetPhoneNumber" @error="bindError" @launchapp="bindLaunchApp" @opensetting="bindOpenSetting">
  <block v-if="loading">
    <van-loading custom-class="loading-class" :size="loadingSize" :color="type === 'default' ? '#c9c9c9' : ''"></van-loading>
    <view v-if="loadingText" class="van-button__loading-text">
      {{ loadingText }}
    </view>
  </block>
  <block v-else>
    <van-icon v-if="icon" size="1.2em" :name="icon" class="van-button__icon" custom-style="line-height: inherit;"></van-icon>
    <view class="van-button__text">
      <slot></slot>
    </view>
  </block>
</button>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
import vanIcon from "../icon/index";
import vanLoading from "../loading/index";

export default {
  data() {
    return {};
  },

  components: {
    vanIcon,
    vanLoading
  },
  props: {
    icon: String,
    color: String,
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingText: String,
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    loadingSize: {
      type: String,
      default: '20px'
    }
  },
  mixins: [button, openType],
  classes: ['hover-class', 'loading-class'],
  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        this.$emit('click');
      }
    }

  }
};
</script>
<style>
@import "./index.css";
</style>