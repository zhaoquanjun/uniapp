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

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

var button_1 = require("../mixins/button.js");

var open_type_1 = require("../mixins/open-type.js");

component_1.VantComponent({
  mixins: [button_1.button, open_type_1.openType],
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
      value: 2000
    },
    confirmButtonText: {
      type: String,
      value: '确认'
    },
    cancelButtonText: {
      type: String,
      value: '取消'
    },
    showConfirmButton: {
      type: Boolean,
      value: true
    },
    overlay: {
      type: Boolean,
      value: true
    },
    transition: {
      type: String,
      value: 'scale'
    }
  },
  data: {
    loading: {
      confirm: false,
      cancel: false
    }
  },
  watch: {
    show: function (show) {
      !show && this.stopLoading();
    }
  },
  methods: {
    onConfirm: function () {
      this.handleAction('confirm');
    },
    onCancel: function () {
      this.handleAction('cancel');
    },
    onClickOverlay: function () {
      this.onClose('overlay');
    },
    handleAction: function (action) {
      var _a;

      if (this.data.asyncClose) {
        this.set((_a = {}, _a["loading." + action] = true, _a));
      }

      this.onClose(action);
    },
    close: function () {
      this.set({
        show: false
      });
    },
    stopLoading: function () {
      this.set({
        loading: {
          confirm: false,
          cancel: false
        }
      });
    },
    onClose: function (action) {
      if (!this.data.asyncClose) {
        this.close();
      }

      this.$emit('close', action); // 把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading

      this.$emit(action, {
        dialog: this
      });
      var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];

      if (callback) {
        callback(this);
      }
    }
  }
});<style>
@import "./index.css";
</style>