<template>
<view class="invoice-list--page">
  <view class="search-area">
    <search @inputChanged="inputSearchFun" @cancelClicked="cancleSearchFun" onTimeSearch="true" isShowCancel="true"></search>
  </view>
  <scroll-view scroll-y="true" refresher-enabled="true" lower-threshold="0" scroll-anchoring="true" :refresher-triggered="isPullDown" class="invoice-list" @refresherrefresh="handlePullDownFun" @scrolltolower="handleToBottomFun">
    <view v-for="(item, index) in invoiceData" :key="index" class="list-item">
      <view class="title">
        <view class="tit">{{item.contractSubjectTitle}}</view>
        <view :class="'status ' + (item.status == 0 || item.status == 1 || item.status == 6 ? 'daishenpi' : item.status == 2 ? 'yikaiju' : item.status == 3 ? 'yijujue' : item.status == 4 ? 'yibohui' : '')">{{item.statusText}}</view>
      </view>
      <view class="desc">
        <view class="des">发起方：{{item.sellerCompanyName}}</view>
        <view class="view-wrapper" :data-item="item" @tap="handleShowSliderFun" v-if="item.status == 2 || item.status == 3">
          <view class="more"></view>
        </view>
      </view>
      <view class="date">
        <view>申请时间</view>
        <view class="divider"></view>
        <view>{{item.gmtCreate}}</view>
      </view>
    </view>
    <view :class="'space ' + (isBottomRefresh ? 'refresh' : '')"></view>
  </scroll-view>
  <slider-picker id="sliderPicker" :sliderList="list" @selectWay="handleSelectItemFun"></slider-picker>
  <message-box id="messageBox" :messageInfo="messageInfo"></message-box>
</view>
</template>

<script>
// pages/home/invoice/invoice.js
var api = require("../../../api/request");
import search from "../../../components/search/search";
import sliderPicker from "../../../components/sliderPicker/sliderPicker";
import messageBox from "../../../components/messageBox/messageBox";

export default {
  data() {
    return {
      searchType: 2,
      pageIndex: 1,
      pageSize: 10,
      total: 1,
      searchParams: '',
      invoiceData: [],
      loading: false,
      timer: null,
      isPullDown: false,
      isBottomRefresh: false,
      curItem: '',
      refuse: [{
        label: '查看拒绝原因',
        value: 'refuse'
      }, {
        label: '取消',
        value: 'cancel'
      }],
      check: [{
        label: '查看发票',
        value: 'invoice'
      }, {
        label: '取消',
        value: 'cancel'
      }],
      list: [],
      messageInfo: {
        title: '拒绝原因',
        content: '',
        btnWords: '知道了'
      }
    };
  },

  components: {
    search,
    sliderPicker,
    messageBox
  },
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
    this.getInvoiceDataFun();
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    /**
     * @name 获取发票申请数据
     */
    getInvoiceDataFun(isPullDown) {
      uni.showLoading({
        title: '加载中'
      });
      this.setData({
        loading: true
      });
      api.sendGet({
        url: api.get_invoice_data + '/' + this.searchType + '?pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize + '&contractSubjectTitle=' + this.searchParams,
        success: res => {
          res.results.forEach(it => {
            it.gmtCreate = this.formatTimeConvertFun(it.gmtCreate, 1);
          });

          if (isPullDown) {
            this.setData({
              isPullDown: false,
              invoiceData: res.results,
              total: res.total,
              loading: false
            });
          } else {
            this.setData({
              invoiceData: [...res.results, ...this.invoiceData],
              total: res.total,
              loading: false,
              isBottomRefresh: false
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
     * @name 自定义下拉刷新
     */
    handlePullDownFun() {
      if (!this.loading && this.total > this.invoiceData.length) {
        this.setData({
          isPullDown: true
        });
        this.getInvoiceDataFun(true);
      } else {
        if (this.timer) clearTimeout(this.timer);
        this.setData({
          timer: setTimeout(() => {
            this.setData({
              isPullDown: false
            });
          }, 200)
        });
      }
    },

    /**
     * @name 触底加载
     */
    handleToBottomFun() {
      this.setData({
        isBottomRefresh: true
      });

      if (!this.loading && this.total > this.invoiceData.length) {
        this.getInvoiceDataFun();
      } else {
        if (this.timer) clearTimeout(this.timer);
        this.setData({
          timer: setTimeout(() => {
            this.setData({
              isBottomRefresh: false
            });
          }, 300)
        });
      }
    },

    /**
     * @name 搜索
     * @param {*} e 事件源 
     */
    inputSearchFun: function (e) {
      if (this.timer) clearTimeout(this.timer);
      this.setData({
        searchParams: e.detail,
        pageIndex: 1,
        timer: setTimeout(() => {
          this.getInvoiceDataFun(true);
        }, 300)
      });
    },

    /**
     * @name 取消搜索
     */
    cancleSearchFun() {
      this.setData({
        searchParams: ''
      });
      this.getInvoiceDataFun(true);
    },

    /**
     * @name 选择操作项
     */
    handleSelectItemFun(e) {
      // 已开具
      if (this.curItem.status == 2) {
        uni.showLoading({
          title: '加载中'
        });
        uni.downloadFile({
          url: this.curItem.invoiceFile,
          success: res => {
            console.log(res);
            uni.openDocument({
              filePath: res.tempFilePath
            });
          },
          err: err => {
            console.log(err);
          },
          complete: () => {
            uni.hideLoading();
          }
        });
      } // 拒绝


      if (this.curItem.status == 3) {
        let options = JSON.parse(JSON.stringify(this.messageInfo));
        options.content = this.curItem.refuseReason;
        this.setData({
          messageInfo: options
        });
        this.selectComponent('#messageBox').show();
      }

      this.selectComponent('#sliderPicker').hide();
    },

    /**
     * @name 呼出slider
     */
    handleShowSliderFun(e) {
      this.setData({
        curItem: e.currentTarget.dataset.item,
        list: e.currentTarget.dataset.item.status == 2 ? this.check : this.refuse
      });
      this.selectComponent('#sliderPicker').show();
    },

    /**
     * @name 格式化时间
     * @params {num} 格式参数
     */
    formatTimeConvertFun(timestamp, num) {
      timestamp = timestamp + "";
      timestamp = timestamp.length == 10 ? timestamp * 1000 : timestamp;
      var date = new Date(Number(timestamp));
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;

      if (num == 0) {
        return y + "-" + m + "-" + d;
      } else {
        return y + "" + m + "." + d + " " + h + ":" + minute + ":" + second;
      }
    }

  }
};
</script>
<style>
@import "./invoice.css";
</style>