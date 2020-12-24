<template>
<!--components/halfSlideItem/halfSlideItem.wxml-->
<view class="page">
	<view class="page-container" v-if="wrapperShow">
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
      wrapperShow: false,
      contentShow: false
    };
  },

  components: {},
  methods: {
    close: function () {
      this.setData({
        contentShow: false
      });
      setTimeout(() => {
        this.setData({
          wrapperShow: false
        });
      }, 250);
    },
    
    open() {
      this.setData({
        wrapperShow: true
      });
      setTimeout(() => {
        this.setData({
          contentShow: true
        });
      }, 250);
    },
  }
};
</script>
<style>
@import "./halfSlideItem.css";
</style>