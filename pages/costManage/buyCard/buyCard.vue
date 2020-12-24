<template>
<view class="buy-card--page">
	<view class="buy-amount--section section">
		<view class="amount-list">
			<view class="label">面值金额</view>
			<view class="list-area">
				<view v-for="(item, index) in amountList" :key="index" :class="'list-item ' + (selectActive == item.value && valueStatus == 'select' ? 'active' : '')" :data-value="item.value" ontap="_handleSelectValue">{{item.label}}元
				</view>
			</view>
		</view>
		<view class="amount-input--area">
			<input :placeholder="placeholders[activeIndex]" type="number" @input="handleInputValueFun" @focus="handleFocusFun"></input>
			<view class="prefix">元</view>
		</view>
	</view>
	<view class="total-way--seciton section">
		<view class="select-count--area item">
			<view class="label">购买数量</view>
			<view class="count-area">
				<!-- <view class="minus" ontap="_handleMius">-</view>
				<view class="count">{{count}}</view>
				<view class="incres" ontap="_handleIncres">+</view> -->
				<input placeholder="请输入礼品卡个数" type="number" :value="count" @input="handleCountValueFun" @blur="handleBlurCountFun"></input>
				<view class="prefix">个</view>
			</view>
		</view>
		<view class="total--area item">
			<view class="label">总金额</view>
			<view class="value">¥ {{total}}</view>
		</view>
		<view class="way-select--area item">
			<view class="label">购买方式</view>
			<view class="way-select--area" ontap="_handleSelectWay">
				<view class="select-value">{{selectList[activeIndex].label}}</view>
				<view class="trangle"></view>
			</view>
		</view>
	</view>
	<slider-picker id="sliderPicker" :sliderList="selectList" @selectWay="handleSelectPayWayFun"></slider-picker>
	<view class="confirm-btn" ontap="_handleConfirmBuy">确认购买</view>
</view>
</template>

<script>
// pages/costManage/buyCard/buyCard.js
var api = require("../../../api/request");
import sliderPicker from "../../../components/sliderPicker/sliderPicker";

export default {
  data() {
    return {
      amountList: [{
        // 选择金额列表
        label: 100,
        value: 100
      }, {
        label: 500,
        value: 500
      }, {
        label: 1000,
        value: 1000
      }],
      selectList: [{
        label: '账户余额',
        value: 'account'
      }, {
        label: '微信支付',
        value: 'wx'
      }, {
        label: '取消',
        value: 'cancel'
      }],
      origin: 'buy',
      activeIndex: 0,
      valueStatus: 'select',
      // 金额填写方式
      rechargeValue: 100,
      // 实时金额
      total: Number(100).toFixed(2),
      // 总额
      selectActive: 100,
      // 面值数值选择
      count: 1,
      // 购买数量
      timer: null,
      placeholders: ['请输入10或10以上的金额', '请输入10～1000整数']
    };
  },

  components: {
    sliderPicker
  },
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.origin) {
      this.setData({
        origin: options.origin
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

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
     * @name 选择支付方式
     */
    handleSelectPayWayFun(e) {
      this.setData({
        activeIndex: e.detail
      });
      this.selectComponent('#sliderPicker').hide();
    },

    /**
     * @name 选择充值金额
     */
    handleSelectValueFun(e) {
      const value = e.currentTarget.dataset.value;
      this.setData({
        selectActive: value,
        rechargeValue: value,
        total: (value * this.count).toFixed(2),
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
        total: (this.count * value).toFixed(2)
      });
      return value;
    },

    /**
     * @name 输入数量
     */
    handleCountValueFun(e) {
      const value = e.detail.value;
      this.setData({
        count: value,
        total: this.rechargeValue ? (this.rechargeValue * value).toFixed(2) : '0.00'
      });
      return value;
    },

    /**
     * @name 输入数量失去焦点
     */
    handleBlurCountFun(e) {
      let value = e.detail.value;
      if (value > 500) value = 500;
      this.setData({
        count: value
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
          valueStatus: 'input',
          total: 0
        });
      }
    },

    /**
     * @name 选择支付方式
     */
    handleSelectWayFun() {
      this.selectComponent('#sliderPicker').show();
    },

    /**
     * @name 确认购买
     */
    handleConfirmBuyFun() {
      if (this.rechargeValue && Number(this.rechargeValue) >= 10) {
        uni.showLoading({
          title: '支付中'
        });

        if (this.activeIndex == 0) {
          api.sendGet({
            url: api.buy_card_by_account + `?amount=${this.total}&goods=${this.rechargeValue}&goodsNum=${this.count}`,
            success: res => {
              console.log(res);
              setTimeout(() => {
                uni.showToast({
                  icon: 'none',
                  title: '礼品卡购买成功，已存至【礼品卡 - 可使用】清单中',
                  duration: 3000
                });
              }, 50);
              this.setData({
                timer: setTimeout(() => {
                  if (this.origin == 'give') {
                    uni.navigateTo({
                      url: '/pages/costManage/giveWay/giveWay?origin=' + this.origin + '&id=' + res + '&money=' + this.rechargeValue + '&count=' + this.count
                    });
                  }

                  if (this.origin == 'buy') {
                    uni.redirectTo({
                      url: '/pages/costManage/accountCard/accountCard?type=1&origin=result'
                    });
                  }
                }, 2000)
              });
            },
            fail: err => {
              console.log(err);
              uni.showModal({
                title: '购买失败',
                content: this.activeIndex == 0 ? "账户余额不足，礼品卡购买失败，您可以先充值再购买礼品卡，或者直接使用微信支付购买" : "购买失败",
                showCancel: false,
                confirmText: '我知道了'
              });
            },
            complete: () => {
              uni.hideLoading();
            }
          });
        }

        if (this.activeIndex == 1) {
          this.getWxPayParamsFun();
        }
      } else {
        setTimeout(() => {
          uni.showToast({
            icon: 'icon',
            title: '购买金额不能小于10元'
          });
        }, 50);
      }
    },

    /**
     * @name 创建订单获取微信支付参数
     */
    getWxPayParamsFun() {
      uni.showLoading({
        title: '创建订单中'
      });
      api.sendGet({
        url: api.get_wx_pay_params + '?amount=' + this.total + '&body=微信支付&rechargeType=0&goods=' + this.rechargeValue + '&goodsNum=' + this.count,
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
        uni.requestPayment({
          'timeStamp': data.timeStamp,
          'nonceStr': data.nonceStr,
          'package': data.package,
          'signType': data.signType,
          'paySign': data.paySign,
          'success': res => {
            setTimeout(() => {
              uni.showToast({
                icon: 'none',
                title: '支付成功'
              });
            }, 50);
            this.setData({
              timer: setTimeout(() => {
                if (this.origin == 'give') {
                  uni.navigateTo({
                    url: '/pages/costManage/giveWay/giveWay?origin=' + this.origin + '&id=' + res + '&money=' + this.rechargeValue + '&count=' + this.count
                  });
                }

                if (this.origin == 'buy') {
                  uni.redirectTo({
                    url: '/pages/costManage/accountCard/accountCard?type=1'
                  });
                }
              }, 2000)
            });
          },
          'fail': err => {
            console.log(err);
          },
          'complete': () => {}
        });
      }
    }

  }
};
</script>
<style>
@import "./buyCard.css";
</style>