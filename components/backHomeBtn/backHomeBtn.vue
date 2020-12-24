<template>
<!--components/backHomeBtn/backHomeBtn.wxml-->
<view class="back-home-btn" @tap.stop="backHome">
  <image src="https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/component/back_home.png"></image>
</view>
</template>

<script>
import icon from "../icon/icon";

export default {
  data() {
    return {};
  },

  components: {
    icon
  },
  props: {},
  methods: {
    backHome: function () {
      uni.reLaunch({
        url: "/pages/pm/pmHome"
      });
    }
  }
};
</script>
<style>
@import "./backHomeBtn.css";
</style>