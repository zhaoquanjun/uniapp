<template>
<!--pages/collection/dirctCollection/receipt.wxml-->
<view class="pageContent">
	<view class="pageHeader">
		<view class="title">{{title1}}</view>
		<view class="amount">
			<view class="prefix">¥</view>
			<input class="value-input" type="text" @input="bindKeyInput" @blur="handleBlurInputFun" :value="inputAmount" data-field="inputAmount"></input>
		</view>
	</view>

	<view class="receipt-message">
		<view class="title" style="border-bottom:2rpx solid #F5F5F5">{{title2}}</view>
		<view class="input-message-box">
			<textarea name="content" maxlength="100" @input="textInput" placeholder="请输入收款信息" :value="receiptMessage"></textarea>
			<text class="input-tip">{{receiptMessage.length}}/100</text>
		</view>
	</view>

	<view class="payer-info">
		<view class="title">付款方信息</view>
		<view class="info-wrapper">
			<input type="text" maxlength="50" @input="handleInputPayerFun"></input>
		</view>
	</view>

	<view class="payer-info">
		<view class="title">备注</view>
		<view class="info-wrapper">
			<input type="text" maxlength="100" @input="handleInputRemarkFun"></input>
		</view>
	</view>

	<button class="nextButton" style="background-color:#464646" v-if="ishighLight" @tap.stop="codeGenerate">{{nextText}}</button>
	<button class="nextButton" v-if="!ishighLight" style="background:#B7B7B7">{{nextText}}</button>
</view>
</template>

<script>
import { postBody } from '../../../api/request.js'
import { get_sell_pay_QrCode, get_pay_QrCode } from '../../../api/collection.js'
var utils = require("../../../utils/utils.js");
var app = getApp();

export default {
  data() {
    return {
      buttonClicked: true,
      title1: "收款金额",
      title2: "收款信息",
      receiptMessage: '',
      ishighLight: false,
      inputAmount: '',
      nextText: "生成收款码",
      hour: " ",
      minute: " ",
      isTemplate: 0,
      templateId: '',
      payerName: '',
      // 付款方名称
      remark: '' // 备注

    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.isTemplate) {
      this.setData({
        isTemplate: options.isTemplate
      });
    }

    if (options.templateId) {
      this.setData({
        templateId: options.templateId
      });
    }

    this.setData({
      inputAmount: options.templateAmount,
      receiptMessage: options.templateName
    });
    this.getHighLight();
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      buttonClicked: true
    });
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
    // 文字输入函数
    textInput: function (event) {
      let value = event.detail.value;
      this.setData({
        receiptMessage: value
      });
      this.getHighLight();
    },

    bindKeyInput(e) {
      console.log(e);
      const inputValue = e.detail.value;
      var value = inputValue.replace(/[^\d.]/g, "").replace(/^\./g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
      this.setData({
        inputAmount: value
      });
      this.getHighLight();
      return value;
    },

    handleBlurInputFun() {
      this.setData({
        inputAmount: Number(this.inputAmount).toFixed(2)
      });
    },

    /**
     * @name 填写付款方
     */
    handleInputPayerFun(e) {
      this.setData({
        payerName: e.detail.value
      });
    },

    /**
     * @name 填写备注
     */
    handleInputRemarkFun(e) {
      this.setData({
        remark: e.detail.value
      });
    },

    // 提交存证是否高亮函数
    getHighLight: function () {
      if (this.receiptMessage && this.inputAmount) {
        this.setData({
          ishighLight: true
        });
      } else {
        this.setData({
          ishighLight: false
        });
      }
    },

    codeGenerate() {
      if (this.inputAmount == 0) {
        utils.showError("请输入收款金额");
        return;
      }

      if (!this.payerName) {
        utils.showError("请输入付款方");
        return;
      }

      this.setData({
        buttonClicked: false
      });
      const {
        inputAmount,
        receiptMessage,
        isTemplate
      } = this;
      const params = {
        name: receiptMessage,
        amount: inputAmount * 100,
        id: this.templateId,
        payerName: this.payerName,
        remark: this.remark
      };
      const url = isTemplate == 1 ? get_sell_pay_QrCode : get_pay_QrCode;
      postBody({
        url: url,
        params: params,
        success: res => {
          uni.hideLoading({});
          uni.navigateTo({
            url: '/pages/collection/dirctCollection/dirctCollectionLaunch/dirctCollectionLaunch?inputAmount= ' + inputAmount + '&receiptMessage=' + receiptMessage + '&qrCodeUrl=' + res.qrCodeUrl + '&isTemplate=' + isTemplate + '&url=' + res.url
          });
        },
        fail: function (err) {
          uni.hideLoading();
          utils.showError(err);
        }
      });
    }

  }
};
</script>
<style>
@import "./dirctCollection.css";
</style>