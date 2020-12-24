<template>
<van-button square :id="id" size="large" :lang="lang" :type="type" :loading="loading" :disabled="disabled" :open-type="openType" custom-class="custom-class" :business-id="businessId" :session-from="sessionFrom" :app-parameter="appParameter" :send-message-img="sendMessageImg" :send-message-path="sendMessagePath" :show-message-card="showMessageCard" :send-message-title="sendMessageTitle" @click="onClick" @error="bindError" @contact="bindContact" @opensetting="bindOpenSetting" @getuserinfo="bindGetUserInfo" @getphonenumber="bindGetPhoneNumber" @launchapp="bindLaunchApp">
  {{ text }}
</van-button>
</template>

<script>
import { VantComponent } from '../common/component';
import { link } from '../mixins/link';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
import vanButton from "../button/index";

export default {
  data() {
    return {};
  },

  components: {
    vanButton
  },
  props: {
    text: String,
    loading: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default: 'danger'
    }
  },
  mixins: [link, button, openType],
  methods: {
    onClick(event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }

  }
};
</script>
<style>
@import "./index.css";
</style>