<template>
<view class="pay-detail--page">
  <view class="title">合同主题</view>
  <view class="desc">{{contractTitle}}</view>
  <view class="title">填写发票申请</view>
  <view class="info-list">
    <view class="list-item">
      <view class="label">抬头类型</view>
      <view class="value" style="width: 80%;">
        <radio-group @change="handleSelectTypeFun">
          <label v-for="(item, index) in checkList" :key="index" style="margin-left: 16rpx;">
            <radio :value="item.value" :checked="item.checked"></radio>
            <text>{{item.label}}</text>
          </label>
        </radio-group>
      </view>
    </view>
    <view class="list-item">
      <view class="label">开票方</view>
      <view class="value">{{companyInfo.sellerCompanyName}}</view>
    </view>
    <view class="list-item" v-if="checked ==2">
      <view class="label">发票企业名称</view>
      <view class="value">
        <input type="text" data-key1="companyInfo" data-key2="buyerName" :value="companyInfo.buyerName" placeholder="请输入" @input="changeInputValueFun"></input>
      </view>
    </view>
    <view class="list-item" v-if="checked ==2">
      <view class="label">纳税人识别号</view>
      <view class="value">
        <input type="number" data-key1="companyInfo" data-key2="buyerTaxNo" :value="companyInfo.buyerTaxNo" placeholder="请输入" @input="changeInputValueFun"></input>
      </view>
    </view>
    <view class="list-item gap">
      <view class="label">发票类型</view>
      <view :class="'value select-area ' + (isDown ? 'down' : 'up')" @tap="handleSelectInvoiceTypeFun">
        {{invoiceTypeValue.label ? invoiceTypeValue.label : '请选择'}}</view>
    </view>
    <view v-if="invoiceTypeValue.value == 's'">
      <view class="list-item">
        <view class="label">地址</view>
        <input type="text" data-key1="invoiceValue" data-key2="buyerAddress" :value="invoiceValue.buyerAddress" placeholder="请输入" @input="changeInputValueFun"></input>
      </view>
      <view class="list-item">
        <view class="label">电话</view>
        <input type="number" data-key1="invoiceValue" data-key2="buyerPhone" :value="invoiceValue.buyerPhone" placeholder="请输入" @input="changeInputValueFun"></input>
      </view>
      <view class="list-item">
        <view class="label">开户行</view>
        <input type="text" data-key1="invoiceValue" data-key2="buyerBank" :value="invoiceValue.buyerBank" placeholder="请输入" @input="changeInputValueFun"></input>
      </view>
      <view class="list-item">
        <view class="label">开户账号</view>
        <input type="number" data-key1="invoiceValue" data-key2="buyerBankNo" :value="invoiceValue.buyerBankNo" placeholder="请输入" @input="changeInputValueFun"></input>
      </view>
    </view>
    <view class="list-item gap">
      <view class="label">发票推送方式</view>
      <view :class="'value select-area ' + (isDown ? 'down' : 'up')" @tap="handleSelectPostWayFun">
        {{postWayValue.label ? postWayValue.label : '请选择'}}</view>
    </view>
    <view class="list-item" v-if="postWayValue.value == '1' || postWayValue.value == '2'">
      <view class="label">手机号</view>
      <input type="number" data-key1="postvalue" data-key2="pushPhone" :value="postvalue.pushPhone" placeholder="请输入" @input="changeInputValueFun"></input>
    </view>
    <view class="list-item" v-if="postWayValue.value == '0' || postWayValue.value == '2'">
      <view class="label">邮箱</view>
      <input type="text" data-key1="postvalue" data-key2="pushEmail" :value="postvalue.pushEmail" placeholder="请输入" @input="changeInputValueFun"></input>
    </view>
  </view>
  <view class="btn-wrapper">
    <view class="confirm-btn" @tap="handleConfirmFun">申请开票</view>
  </view>
  <slider-picker ref :sliderList="list" @selectWay="handleSelectItemFun"></slider-picker>
</view>
</template>

<script>
import { get, postBody } from '../../../api/request.js'
import { get_invouce_info, get_seller_companyName, apply_invoice } from '../../../api/invoice.js'
const util = require("../../../utils/utils");
import sliderPicker from "../../../components/sliderPicker/sliderPicker";

export default {
  data() {
    return {
      operate: 1,
      isDown: true,
      checked: '1',
      checkList: [{
        label: '个人/非企业单位',
        value: '1',
        checked: true
      }, {
        label: '企业单位',
        value: '2'
      }],
      invoiceTypeValue: {
        label: '增值税普通发票',
        value: 'p'
      },
      postWayValue: {
        label: '不推送',
        value: '-1'
      },
      contractTitle: '',
      id: '',
      companyInfo: {
        sellerCompanyName: '',
        // 开票方
        buyerName: '',
        // 发票企业名称
        buyerTaxNo: '' // 纳税人识别号

      },
      invoiceValue: {
        buyerAddress: '',
        buyerPhone: '',
        buyerBank: '',
        buyerBankNo: ''
      },
      postvalue: {
        pushPhone: '',
        pushEmail: ''
      },
      list: [],
      invoiceType: [{
        label: '增值税普通发票',
        value: 'p'
      }, {
        label: '增值税专用发票',
        value: 's'
      }],
      postWay: [{
        label: '不推送',
        value: '-1'
      }, {
        label: '推送到邮箱',
        value: '0'
      }, {
        label: '推送到手机',
        value: '1'
      }, {
        label: '推送到邮箱和手机',
        value: '2'
      }],
      searchType: '',
      pageTitle: '',
      key1: ""
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
    const isCompany = uni.getStorageSync('currentUser');
    this.setData({
      contractTitle: options.title,
      id: options.id,
      searchType: options.searchType,
      pageTitle: options.pageTitle
    });
    this.getSellerNameFun();

    if (isCompany) {
      this.setData({
        checked: 2,
        checkList: [{
          label: '个人/非企业单位',
          value: '1'
        }, {
          label: '企业单位',
          value: '2',
          checked: true
        }]
      });
      this.getInvoiceInfoFun();
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
     * @name 选择发票抬头
     */
    handleSelectTypeFun(e) {
      this.setData({
        checked: e.detail.value
      });

      if (e.detail.value == 1) {}

      if (e.detail.value == 2) {}
    },

    /**
     * @name 选择发票类型呼出slider事件
     */
    handleSelectInvoiceTypeFun() {
      this.setData({
        operate: 1,
        list: this.invoiceType,
        isDown: false
      });
      this.$refs.sliderPicker.show();
    },

    /**
     * @name 发票推送方式呼出slider事件
     */
    handleSelectPostWayFun() {
      this.setData({
        operate: 2,
        list: this.postWay,
        isDown: false
      });
      this.$refs.sliderPicker.show();
    },

    /**
     * @name slider 点击事件
     */
    handleSelectItemFun(e) {
      if (this.operate == 1) {
        switch (e.detail) {
          case 0:
            this.setData({
              invoiceTypeValue: this.list[0]
            });
            console.log(this.invoiceTypeValue);
            break;

          case 1:
            this.setData({
              invoiceTypeValue: this.list[1]
            });
            break;

          default:
            break;
        }
      }

      if (this.operate == 2) {
        switch (e.detail) {
          case 0:
            this.setData({
              postWayValue: this.list[0]
            });
            break;

          case 1:
            this.setData({
              postWayValue: this.list[1]
            });
            break;

          case 2:
            this.setData({
              postWayValue: this.list[2]
            });
            break;

          case 3:
            this.setData({
              postWayValue: this.list[3]
            });
            break;

          default:
            break;
        }
      }

      this.setData({
        isDown: true
      });
      this.$refs.sliderPicker.hide();
    },

    /**
     * @name 获取开票方信息
     */
    getSellerNameFun() {
      uni.showLoading({
        title: '加载中'
      });
      get({
        url: get_seller_companyName + '/' + this.id,
        success: res => {
          let sellerInfo = JSON.parse(JSON.stringify(this.companyInfo));
          sellerInfo.sellerCompanyName = res;
          this.setData({
            companyInfo: sellerInfo
          });
          console.log(res);
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
     * @name 获取收票方信息
     */
    getInvoiceInfoFun() {
      uni.showLoading({
        title: '加载中'
      });
      get({
        url: get_invouce_info,
        success: res => {
          if (res) {
            let companyInfo = JSON.parse(JSON.stringify(this.companyInfo));
            let invoiceInfo = JSON.parse(JSON.stringify(this.invoiceValue));
            invoiceInfo.buyerAddress = res.address;
            invoiceInfo.buyerPhone = res.phone;
            invoiceInfo.buyerBank = res.bank;
            invoiceInfo.buyerBankNo = res.bankNo;
            companyInfo.buyerName = res.companyName;
            companyInfo.buyerTaxNo = res.taxNo;
            this.setData({
              invoiceValue: invoiceInfo,
              companyInfo: companyInfo
            });
          }
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
     * @name 填写input内容
     * @params {key1} data里面key
     * @params {key2} data里面数据的key
     */
    changeInputValueFun(e) {
      const key1 = e.currentTarget.dataset.key1;
      const key2 = e.currentTarget.dataset.key2;
      let data = JSON.parse(JSON.stringify(this[key1]));
      data[key2] = e.detail.value;
      this.setData({
        [key1]: data
      });
    },

    /**
     * @name 申请开票
     */
    handleConfirmFun() {
      uni.showLoading({
        title: '加载中'
      });
      let options = {
        contractSubjectId: this.id,
        sellerCompanyName: this.companyInfo.sellerCompanyName,
        pushMode: this.postWayValue.value
      };

      if (this.checked == 2) {
        if (!this.companyInfo.buyerName) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写发票企业名称'
            });
          }, 50);
          return false;
        }

        if (!this.companyInfo.buyerTaxNo) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写纳税人识别号'
            });
          }, 50);
          return false;
        }

        options.buyerName = this.companyInfo.buyerName;
        options.buyerTaxNo = this.companyInfo.buyerTaxNo;
      }

      if (this.invoiceTypeValue.value == 's') {
        if (!this.invoiceValue.buyerAddress) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写收票方地址'
            });
          }, 50);
          return false;
        }

        if (!this.invoiceValue.buyerPhone) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写收票方电话'
            });
          }, 50);
          return false;
        }

        if (!this.invoiceValue.buyerBank) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写收票方开户行'
            });
          }, 50);
          return false;
        }

        if (!this.invoiceValue.buyerBankNo) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写收票方开户行账号'
            });
          }, 50);
          return false;
        }

        options.buyerAddress = this.invoiceValue.buyerAddress;
        options.buyerPhone = this.invoiceValue.buyerPhone;
        options.buyerBank = this.invoiceValue.buyerBank;
        options.buyerBankNo = this.invoiceValue.buyerBankNo;
      }

      if (this.postWayValue.value == 0) {
        if (!this.postvalue.pushEmail) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写推送邮箱'
            });
          }, 50);
          return false;
        }

        options.pushEmail = this.postvalue.pushEmail;
      }

      if (this.postWayValue.value == 1) {
        if (!this.postvalue.pushPhone) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写推送手机号'
            });
          }, 50);
          return false;
        }

        if (!util.isTelCode(this.postvalue.pushPhone)) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写正确的推送手机号'
            });
          }, 50);
          return false;
        }

        options.pushPhone = this.postvalue.pushPhone;
      }

      if (this.postWayValue.value == 2) {
        if (!this.postvalue.pushEmail) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写推送邮箱'
            });
          }, 50);
          return false;
        }

        if (!this.postvalue.pushPhone) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写推送手机号'
            });
          }, 50);
          return false;
        }

        if (!util.isTelCode(this.postvalue.pushPhone)) {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请填写正确的推送手机号'
            });
          }, 50);
          return false;
        }

        options.pushEmail = this.postvalue.pushEmail;
        options.pushPhone = this.postvalue.pushPhone;
      }

      postBody({
        url: apply_invoice,
        params: options,
        success: res => {
          console.log(res);
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '申请成功'
            });
          }, 50);
          setTimeout(() => {
            uni.redirectTo({
              url: '/pages/contract/contractList/contract?searchType=' + this.searchType + '&pageTitle=' + this.pageTitle
            });
          }, 1000);
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
    }

  }
};
</script>
<style>
@import "./applyInvoice.css";
</style>