<template>
<view class="recharge-page">
  <view class="recharge-account">
    <text class="label">充值账户</text>
    <text class="value">{{ userName }}</text>
  </view>
  <view class="recharge-amount--section">
    <view class="amount-list">
      <view class="label">面值金额</view>
      <view class="list-area">
        <view v-for="(item, index) in amountList" :key="index" :class="'list-item ' + (selectActive == item.value && valueStatus == 'select' ? 'active' : '')" :data-value="item.value" @tap="handleSelectValueFun">{{item.label}}</view>
      </view>
    </view>
    <view class="amount-input--area">
    <!-- type="number" -->
      <input placeholder="请输入10～1000整数" type="number" @input="handleInputValueFun" @focus="handleFocusFun"></input>
      <view class="prefix">元</view>
    </view>
    <view class="total-area">
      <view class="label">总金额</view>
      <view class="value">¥ {{total}}</view>
    </view>
  </view>
  <view class="confirm-btn" @tap="handleConfirmRechargeFun">确认充值</view>
</view>
</template>

<script>
import { get } from '../../../api/request.js'
import { get_wx_pay_params } from '../../../api/cost.js'

export default {
  data() {
    return {
      userName: '',
      amountList: [{
        label: 100,
        value: 100
      }, {
        label: 500,
        value: 500
      }, {
        label: 1000,
        value: 1000
      }],
      valueStatus: 'select',
      rechargeValue: 100,
      total: 100.00,
      selectActive: 100
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
    this.getCurrentUserNameFun();
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
  onPullDownRefresh: function () {},

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
     * @name 获取当前账户主体
     */
    getCurrentUserNameFun() {
      let userName = '';
      const currentUser = uni.getStorageSync('currentUser');
      console.log(currentUser);

      if (currentUser.companyId) {
        userName = currentUser.companyName;
      } else {
        userName = currentUser.name;
      }

      this.setData({
        userName: userName
      });
    },

    /**
     * @name 选择充值金额
     */
    handleSelectValueFun(e) {
      const value = e.currentTarget.dataset.value;
      this.setData({
        selectActive: value,
        rechargeValue: value,
        total: value.toFixed(2),
        valueStatus: 'select'
      });
    },

    /**
     * @name 输入充值金额
     */
    handleInputValueFun(e) {
      const value = e.detail.value;
      this.setData({
        rechargeValue: value,
        total: value
      });
      return value;
    },

    /**
     * @name input 获取焦点
     */
    handleFocusFun() {
      if (this.valueStatus == 'select') {
        this.setData({
          selectActive: -1,
          rechargeValue: '',
          valueStatus: 'input'
        });
      }
    },

    /**
     * @name 获取微信支付参数
     */
    getWxPayParamsFun() {
      uni.showLoading({
        title: '创建订单中'
      });
     get({
        url: get_wx_pay_params + '?amount=' + this.rechargeValue + '&body=微信支付&rechargeType=1&goods=' + this.rechargeValue + '&goodsNum=1',
        success: res => {
          console.log(res);
          this.payByWxFun(res);
        },
        fail: err => {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: err
            });
          }, 50);
        },
        complete: () => {
          uni.hideLoading();
        }
      });
    },

    /**
     * @name 微信支付
     */
    payByWxFun(data) {
      if (this.rechargeValue) {
        console.log(data, {
          'timeStamp': data.timeStamp,
          'nonceStr': data.nonceStr,
          'package': data.package,
          'signType': data.signType,
          'paySign': data.paySign
        });
        uni.requestPayment({
          'timeStamp': data.timeStamp,
          'nonceStr': data.nonceStr,
          'package': data.package,
          'signType': data.signType,
          'paySign': data.paySign,
          'success': res => {
            console.log(res);
            setTimeout(() => {
              uni.showToast({
                icon: 'none',
                title: '支付成功'
              });
            }, 50);
            setTimeout(() => {
              uni.redirectTo({
                url: '/pages/costManage/accountBalance/accountBalance?type=2&origin=result'
              });
            }, 1500);
          },
          'fail': err => {
            console.log(err);
          },
          'complete': () => {}
        });
      }
    },

    /**
     * @name 确认充值
     */
    handleConfirmRechargeFun() {
      if (this.rechargeValue && Number(this.rechargeValue) >= 10) {
        this.getWxPayParamsFun();
      } else {
        setTimeout(() => {
          uni.showToast({
            icon: 'none',
            title: '充值金额不能小于10元'
          });
        }, 50);
      }
    }

  }
};
</script>
<style>
@import "./recharge.css";
</style>