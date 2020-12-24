<template>
<!--components/rejectAlert/rejectAlert.wxml-->
<view class="input-mark" :hidden="!isShow">
  <view class="content-view-class">
    <image @tap.stop="switchEyeAction" class="eye-class" :src="eyeSrc" mode="aspectFit" v-if="isShowEye === 'show'"></image>
    <view class="input-title">{{title}}</view>
    <view class="input-bg-class">
      <input class="input-class" @input="bindKeyInput" :password="!eysIsOpen && isShowEye === 'show'" :placeholder="placeholder" :value="inputValue"></input>
    </view>
    <view class="button-box">
       <button class="button button-cancel" @tap.stop="close">{{cancelBtn}}</button>
      <view class="button-line"></view>
      <button class="button button-reject" @tap.stop="submitAction">{{okBtn}}</button> 
    </view>
  </view>
</view>
</template>

<script>

export default {
  data() {
    return {
      inputText: '',
      inputValue: '',
      isShow: false,
      eyeSrc: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/component/close_eye.png',
      eysIsOpen: false
    };
  },

  components: {},
  props: {
    title: {
      type: String,
      default: '提示'
    },
    placeholder: {
      type: String,
      default: '提示内容'
    },
    cancelBtn: {
      type: String,
      default: '取消文字'
    },
    okBtn: {
      type: String,
      default: '确认文字'
    },
    isShowEye: {
      type: String,
      default: 'show'
    }
  },
  methods: {
    show: function () {
      this.setData({
        isShow: true
      });
    },
    close: function (e) {
      this.setData({
        inputText: '',
        inputValue: '',
        isShow: false
      });
    },
    bindKeyInput: function (e) {
      this.setData({
        inputText: e.detail.value
      });
    },
    submitAction: function () {
      var text = this.inputText;
      this.$emit('okBtnAction', {
        detail: {
          inputText: text
        }
      });
    },
    switchEyeAction: function () {
      var src;

      if (this.eysIsOpen) {
        src = 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/component/close_eye.png';
      } else {
        src = 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/component/open_eye.png';
      }

      var isOpen = !this.eysIsOpen;
      this.setData({
        eysIsOpen: isOpen,
        eyeSrc: src
      });
    }
  }
};
</script>
<style>
@import "./inputAlert.css";
</style>