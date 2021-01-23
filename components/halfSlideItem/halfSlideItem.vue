<template>
<!--components/halfSlideItem/halfSlideItem.wxml-->
<view class="page">
	<view class="page-container" v-if="wrapperShow">
		<view class="weui-mask" @tap="close"></view>
		
		<!--  #ifndef  H5 -->
		<view :class="'weui-half-screen-dialog ' + (contentShow ? 'show' : '')">
			<view class="weui-half-screen-dialog__bd">
				<slot></slot>
			</view>
			<view class="weui-half-screen-dialog__hd__side" @tap="close">取消</view>
		</view>
		<!--  #endif -->
		
		<!--  #ifdef H5 -->
		<view :class="'weui-half-screen-dialog ' + (contentShow ? 'show' : '')" :style="{'bottom': bottom + 'rpx'}">
			<view class="weui-half-screen-dialog__bd">
				<slot></slot>
			</view>
			<view class="weui-half-screen-dialog__hd__side" @tap="close">取消</view>
		</view>
		<!--  #endif -->
	</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      wrapperShow: false,
      contentShow: false,
			bottom: 0,
			hasTabbar: false,
			tabbarPageList: ['pages/home/home', 'pages/contract/index', 'pages/evidence/index', 'pages/pm/pmHome']
    };
  },

  components: {},
	created() {
		const pages = getCurrentPages()
		const currentPage = pages[pages.length - 1]
		// #ifdef  H5
		if (this.tabbarPageList.indexOf(currentPage.route) > -1) {
			this.setData({
				bottom: 100
			})
		} else {
			this.setData({
				bottom: 0
			})
		}
		// #endif
		
		// #ifndef  H5
		this.setData({
			isH5: false
		})
		// #endif
	},
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