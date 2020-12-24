<template>
<!--components/rejectAlert/rejectAlert.wxml-->
<view class="reject-mask" :hidden="hidden" catchtouchmove="preventMove">
  <view class="reject-box">
    <form @submit="submitInput" @reset="resetInput">
      <view class="reject-title">拒签文件</view>
      <textarea class="reject-input" name="textarea" :value="value" fixed="true" adjust-position="true" placeholder="请输入拒签理由" placeholder-style="color:#B2B2B2"></textarea>
      <view class="button-box clearfix">
        <button class="button button-cancel" form-type="reset">取消</button>
        <view class="button-line"></view>
        <button class="button button-reject" form-type="submit">拒签</button>
      </view>
    </form>
  </view>
</view>
</template>

<script>

export default {
  data() {
    return {
      text: '',
      hidden: true,
      value: ''
    };
  },

  components: {},
  props: {},
  methods: {
    //input
    inputChanged: function (e) {
      this.setData({
        text: e.detail.value
      });
    },
    //show hide
    show: function () {
      this.setData({
        hidden: false,
        value: ''
      });
    },
    hide: function () {
      this.setData({
        hidden: true,
        value: ''
      });
    },
    //reset
    resetInput: function (e) {
      this.hide();
    },
    //提交表单
    submitInput: function (e) {
      this.$emit('rejectEvent', {
        detail: e.detail.value.textarea
      });
    },
    preventMove: function () {//禁止滑动
    }
  }
};
</script>
<style>
@import "./rejectAlert.css";
</style>