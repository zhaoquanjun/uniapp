<template>
<view>
<view class="company-auth-result" v-if="result=='f'">
    <view class="result-top">
        <view class="icon-container">
            <text class="iconfont iconwarningo"></text>
        </view>
        <view class="result-text">认证失败</view>
        <view class="result-reason"> 法人信息不一致，请核对身份信息</view>
    </view>
    <view class="type-select-header">
        <text class="type-text">核对企业信息</text>
    </view>
    <view class="base-info-container">
        <view class="field-item">
            <label class="name">企业名称</label>
            <text class="value-input">{{company.companyName || '-'}}</text>
        </view>
        <view class="line"></view>
        <view class="field-item">
            <label class="name">统一社会信用代码</label>
            <text class="value-input">{{company.creditCode || '-'}}</text>
        </view>
        <view class="line"></view>
        <view class="field-item">
            <label class="name">法定代表人姓名</label>
            <text class="value-input">{{company.legalPersonName || '-'}}</text>
        </view>
                <view class="field-item">
            <label class="name">法定代表人身份证号</label>
            <text class="value-input">{{}}</text>
        </view>
    </view>

    <view class="bottom-btn-container" @tap.stop="reDo" style="margin-top:194rpx">
        <text class="next">修改信息重新认证</text>
    </view>
</view>

<view class="company-auth-result" v-if="result=='ing'" style="height:1800rpx; background:#ffffff">
    <view class="result-top">
        <view class="icon-container">
            <text class="iconfont iconwarningo ing"></text>
        </view>
        <view class="result-text">企业认证中</view>
        <view class="result-reason">企业正在认证中，请耐心等待</view>
    </view>
    <view class="bottom-btn-container" style="margin-top:50rpx" @tap.stop="bacoToHome">
        <text class="next">返回首页</text>
    </view>
</view>

<view class="company-auth-result" v-if="result=='s'" style="height:1800rpx; background:#ffffff">
    <view class="result-top">
        <view class="icon-container">
            <text class="iconfont iconSuccess success"></text>
        </view>
        <view class="result-text">认证成功</view>
        <view class="result-reason">企业认证成功</view>
    </view>
    <view class="bottom-btn-container" style="margin-top:50rpx" @tap.stop="goSign">
        <text class="next">发起合同签署</text>
    </view>
</view>

<canvas id="myCanvas" canvas-id="myCanvas" style="z-index: -11; opacity: 0; visiblity: hidden; position: absolute; left: -100%; top: -100%; width: 300px; height: 300px;"></canvas>
</view>
</template>

<script>

export default {
  data() {
    return {
      company: {},
      result: 'f'
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
			// #ifdef  H5
			company: JSON.parse(localStorage.getItem('currentUser')),
			// #endif
			
			// #ifndef  H5
			company: uni.getStorageSync('currentUser'),
			// #endif
      
      result: options.result
    });
  },

  onShareAppMessage() {},

  methods: {
    showSafeInfo() {
      uni.showModal({
        title: '个人身份隐私安全声明',
        showCancel: false,
        confirmText: '知道了',
        content: '您输入的身份信息仅用于个人实名认证和获取'
      });
    },

    reDo() {
      uni.navigateBack();
    },

    goSign() {
      app.globalData.updateUserInfo(function () {
        uni.reLaunch({
          url: '/pages/home/home'
        });
      });
    },

    bacoToHome() {
      uni.reLaunch({
        url: '/pages/home/home'
      });
    }

  }
};
</script>
<style>
@import "./index.css";
</style>