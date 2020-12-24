<template>
<!--pages/costManage/costManage.wxml-->
<view class="cost-manage--page">
  <view class="list-item">
     <view class="title">账户金额</view>
     <view class="content">
      <view class="balance">
        <view class="prefix">¥</view>
        <view class="amount">{{balance}}</view>
      </view>
      <view class="btn-group">
        <view class="btn" ontap="_handleRecharge">充值</view>
        <view class="btn black" ontap="_handleGiving">赠送</view>
      </view>
     </view>
     <view class="detail" ontap="_handleShowBalance">
      <view class="detail-word">收支明细</view>
      <view class="one one-apparrow-right icon"></view>
     </view>
  </view>
  <view class="list-item">
    <view class="title">礼品卡</view>
     <view class="content">
      <view class="balance card">
        <view class="amount">{{count}}</view>
        <view class="prefix">张</view>
      </view>
      <view class="btn-group">
        <view class="btn primary" ontap="_handleBuy">购买礼品卡</view>
      </view>
     </view>
     <view class="detail" ontap="_handleShowCard">
      <view class="detail-word">查看全部</view>
      <view class="one one-apparrow-right icon"></view>
     </view>
  </view>
</view>
</template>

<script>
// pages/costManage/costManage.js
var api = require("../../api/request");

export default {
  data() {
    return {
      balance: 0,
      count: 0
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getUserAccountInfoFun();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getUserAccountInfoFun();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    /**
     * @name 获取用户账户信息
     */
    getUserAccountInfoFun() {
      uni.showLoading({
        title: '加载中'
      });
      api.sendGet({
        url: api.get_accout_info,
        success: res => {
          this.setData({
            balance: (res.accountFee / 100).toFixed(2),
            count: res.couponFee
          });
        },
        fail: err => {
          console.log(err);
        },
        complete: () => {
          uni.hideLoading();
        }
      });
    },

    /**
     * @name 跳转账户余额
     */
    handleShowBalanceFun() {
      uni.navigateTo({
        url: '/pages/costManage/accountBalance/accountBalance'
      });
    },

    /**
     * @name 跳转礼品卡
     */
    handleShowCardFun() {
      uni.navigateTo({
        url: '/pages/costManage/accountCard/accountCard'
      });
    },

    /**
     * @name 充值跳转
     */
    handleRechargeFun() {
      uni.navigateTo({
        url: '/pages/costManage/recharge/recharge'
      });
    },

    /**
     * @name 赠送跳转
     */
    handleGivingFun() {
      uni.navigateTo({
        url: '/pages/costManage/buyCard/buyCard?origin=give'
      });
    },

    /**
     * @name 购买礼品卡跳转
     */
    handleBuyFun() {
      uni.navigateTo({
        url: '/pages/costManage/buyCard/buyCard?origin=buy'
      });
    }

  }
};
</script>
<style>
@import "./costManage.css";
</style>