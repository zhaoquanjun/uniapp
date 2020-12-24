<template>
<van-button square :id="id" size="large" :lang="lang" :loading="loading" :disabled="disabled" :open-type="openType" :business-id="businessId" custom-class="van-goods-action-icon" :session-from="sessionFrom" :app-parameter="appParameter" :send-message-img="sendMessageImg" :send-message-path="sendMessagePath" :show-message-card="showMessageCard" :send-message-title="sendMessageTitle" @click="onClick" @error="bindError" @contact="bindContact" @opensetting="bindOpenSetting" @getuserinfo="bindGetUserInfo" @getphonenumber="bindGetPhoneNumber" @launchapp="bindLaunchApp">
  <view class="van-goods-action-icon__content van-hairline--right">
    <van-icon size="20px" :name="icon" :info="info" class="van-goods-action-icon__icon" custom-class="icon-class"></van-icon>
    <text class="text-class">{{ text }}</text>
  </view>
</van-button>
</template>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

var link_1 = require("../mixins/link.js");

var button_1 = require("../mixins/button.js");

var open_type_1 = require("../mixins/open-type.js");

component_1.VantComponent({
  classes: ['icon-class', 'text-class'],
  mixins: [link_1.link, button_1.button, open_type_1.openType],
  props: {
    text: String,
    info: String,
    icon: String,
    disabled: Boolean,
    loading: Boolean
  },
  methods: {
    onClick: function (event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});<style>
@import "./index.css";
</style>