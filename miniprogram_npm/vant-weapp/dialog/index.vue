<template>
<van-popup :show="show" :z-index="zIndex" :overlay="overlay" :custom-class="'van-dialog ' + className" :transition="transition" :custom-style="customStyle" :close-on-click-overlay="closeOnClickOverlay" @close="onClickOverlay">
  <view v-if="title" :class="'van-dialog__header ' + ( message || useSlot ? '' : 'van-dialog--isolated' )">
    {{ title }}
  </view>

  <slot v-if="useSlot"></slot>
  <view v-else-if="message" :class="'van-dialog__message ' + ( title ? 'van-dialog__message--has-title' : '' ) + ' ' + ( messageAlign ? 'van-dialog__message--' + messageAlign : '' )">
    <text>{{ message }}</text>
  </view>

  <view class="van-hairline--top van-dialog__footer">
    <van-button v-if="showCancelButton" size="large" :loading="loading.cancel" class="van-dialog__button van-hairline--right" custom-class="van-dialog__cancel" @click="onCancel">
      {{ cancelButtonText }}
    </van-button>
    <van-button v-if="showConfirmButton" size="large" class="van-dialog__button" :loading="loading.confirm" custom-class="van-dialog__confirm" :open-type="confirmButtonOpenType" :lang="lang" :business-id="businessId" :session-from="sessionFrom" :send-message-title="sendMessageTitle" :send-message-path="sendMessagePath" :send-message-img="sendMessageImg" :show-message-card="showMessageCard" :app-parameter="appParameter" @click="onConfirm" @getuserinfo="bindGetUserInfo" @contact="bindContact" @getphonenumber="bindGetPhoneNumber" @error="bindError" @launchapp="bindLaunchApp" @opensetting="bindOpenSetting">
      {{ confirmButtonText }}
    </van-button>
  </view>
</van-popup>
</template>

<script>
import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
import vanPopup from "../popup/index";
import vanButton from "../button/index";

export default {
  data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },

  components: {
    vanPopup,
    vanButton
  },
  props: {
    show: Boolean,
    title: String,
    message: String,
    useSlot: Boolean,
    className: String,
    customStyle: String,
    asyncClose: Boolean,
    messageAlign: String,
    showCancelButton: Boolean,
    closeOnClickOverlay: Boolean,
    confirmButtonOpenType: String,
    zIndex: {
      type: Number,
      default: 2000
    },
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: String,
      default: 'scale'
    }
  },
  watch: {
    show(show) {
      !show && this.stopLoading();
    }

  },
  mixins: [button, openType],
  methods: {
    onConfirm() {
      this.handleAction('confirm');
    },

    onCancel() {
      this.handleAction('cancel');
    },

    onClickOverlay() {
      this.onClose('overlay');
    },

    handleAction(action) {
      if (this.asyncClose) {
        this.set({
          [`loading.${action}`]: true
        });
      }

      this.onClose(action);
    },

    close() {
      this.set({
        show: false
      });
    },

    stopLoading() {
      this.set({
        loading: {
          confirm: false,
          cancel: false
        }
      });
    },

    onClose(action) {
      if (!this.asyncClose) {
        this.close();
      }

      this.$emit('close', action); // 把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading

      this.$emit(action, {
        dialog: this
      });
      const callback = this[action === 'confirm' ? 'onConfirm' : 'onCancel'];

      if (callback) {
        callback(this);
      }
    }

  }
};
</script>
<style>
@import "./index.css";
</style>