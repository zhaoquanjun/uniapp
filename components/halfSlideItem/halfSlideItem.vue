<template>
<!--components/halfSlideItem/halfSlideItem.wxml-->
<view class="page">
	<view class="page-container" v-if="dialog1">
		<view class="weui-mask" @tap="close"></view>
		<view :class="'weui-half-screen-dialog ' + (contentShow ? 'show' : '')">
			<view class="weui-half-screen-dialog__bd">
				<slot></slot>
			</view>
			<view class="weui-half-screen-dialog__hd__side" @tap="close">取消</view>
		</view>
	</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      dialog1: false,
      contentShow: false
    };
  },

  components: {},
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isShow: {
      handler: function (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.setData({
            dialog1: newVal
          });
          setTimeout(() => {
            this.setData({
              contentShow: true
            });
          });
        }
      },
      immediate: true
    }
  },
  methods: {
    close: function () {
      this.setData({
        contentShow: false
      });
      setTimeout(() => {
        this.setData({
          dialog1: false,
          isShow: false
        });
      }, 250);
    }
  }
};
</script>
<style>
@import "./halfSlideItem.css";
</style>