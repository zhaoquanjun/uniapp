<template>
<view class="balance-list--page">
	<view class="header-tab">
		<view v-for="(item, index) in tabs" :key="index" :class="'tab-item ' + ( activeName == item.type ? 'active' : '' )" @tap="handleSwitchTabFun" :data-type="item.type">{{item.name}}</view>
		<view :class="'active-bg ' + (activeName == 2 ? 'focus' : '')"></view>
	</view>
	<view class="content">
		<scroll-view class="scroll-area" scroll-y="true" scroll-anchoring="true" @scrolltolower="handleScrollToBottmFun">
			<view class="pay-list balance-list" v-if="activeName == 1">
				<view v-for="(item, index) in payList" :key="index" class="list-item">
					<view class="top">
						<view class="name">{{item.consumptionTypeText}}</view>
						<view class="money">- {{item.consumptionMoney}}</view>
					</view>
					<view class="bot">
						<view class="time">支出时间：{{item.consumptionTime}}</view>
						<view class="type">{{item.deductionName}}</view>
					</view>
				</view>
			</view>
			<view class="income-list balance-list" v-if="activeName == 2">
				<view v-for="(item, index) in incomeList" :key="index" class="list-item">
					<view class="top">
						<view class="name">{{item.consumptionTypeText}}</view>
						<view class="money">+ {{item.consumptionMoney}}</view>
					</view>
					<view class="bot">
						<view class="time">收入时间：{{item.consumptionTime}}</view>
						<view class="type">{{item.deductionName}}</view>
					</view>
				</view>
			</view>
			<view :class="'loading ' + (isRefresh ? 'show' : '')">加载中...</view>
		</scroll-view>
	</view>
  <view class="btn-groups">
    <view class="recharge btn" @tap="handleReadyToChargeFun">账户充值</view>
    <view class="send btn" @tap="handleReadyToSendFun">赠送好友</view>
  </view>
</view>
</template>

<script>
import { get } from '../../../api/request.js'
import { get_balance_list } from '../../../api/cost.js'

export default {
  data() {
    return {
      tabs: [{
        name: '支出明细',
        type: 1
      }, {
        name: '收入明细',
        type: 2
      }],
      activeName: 1,
      payList: [],
      incomeList: [],
      payTotal: 0,
      incomeTotal: 0,
      payPagination: {
        pageIndex: 1,
        pageSize: 10
      },
      incomePagination: {
        pageIndex: 1,
        pageSize: 10
      },
      isRefresh: false,
      origin: ''
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type) {
      this.setData({
        activeName: options.type
      });
    }

    if (options.result) {
      this.setData({
        origin: options.result
      });
    }

    this.getBalanceListFun();
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
  onUnload: function () {
    if (this.origin) {
      uni.redirectTo({
        url: '/pages/costManage/costManage'
      });
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    if (this.activeName == 1) {
      let paypagination = this.payPagination;
      paypagination.pageIndex = 1;
      this.setData({
        payPagination: paypagination
      });
    }

    if (this.activeName == 2) {
      let incomepagination = this.incomePagination;
      incomepagination.pageIndex = 1;
      this.setData({
        incomePagination: incomepagination
      });
    }

    this.getBalanceListFun();
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
     * @name 获取列表数据
     */
    getBalanceListFun() {
      let options = {
        consumptionDetailsType: this.activeName,
        pageSize: this.activeName == 1 ? this.payPagination.pageSize : this.incomePagination.pageSize,
        currentPage: this.activeName == 1 ? this.payPagination.pageIndex : this.incomePagination.pageIndex
      };
      uni.showLoading({
        title: '加载中'
      });
      get({
        url: get_balance_list,
        params: options,
        success: res => {
          res.results.forEach(it => {
            it.consumptionTime = this.formatTimeConvertFun(it.consumptionTime, 0);
            it.consumptionMoney = (it.consumptionMoney / 100).toFixed(2);
          });

          if (this.activeName == 1) {
            let arr = [...this.payList, ...res.results];
            this.setData({
              payList: arr,
              payTotal: res.total
            });
          }

          if (this.activeName == 2) {
            let arr = [...this.incomeList, ...res.results];
            this.setData({
              incomeList: arr,
              incomeTotal: res.total
            });
          }
        },
        fail: err => {
          console.log(err);
        },
        complete: () => {
          uni.hideLoading();

          if (this.isRefresh) {
            this.setData({
              isRefresh: false
            });
          }
        }
      });
    },

    /**
     * @name 触底加载
     */
    handleScrollToBottmFun() {
      if (!this.isRefresh) {
        if (this.activeName == 1) {
          if (this.payTotal == this.payList.length) return false;
          let pagination = this.payPagination;
          pagination.pageIndex = this.payPagination.pageIndex + 1;
          this.setData({
            isRefresh: true,
            payPagination: pagination
          });
        }

        if (this.activeName == 2) {
          if (this.incomeTotal == this.incomeList.length) return false;
          let pagination = this.incomePagination;
          pagination.pageIndex = this.incomePagination.pageIndex + 1;
          this.setData({
            isRefresh: true,
            incomePagination: pagination
          });
        }

        this.getBalanceListFun();
      }
    },

    /**
     * @name 切换tab
     */
    handleSwitchTabFun(e) {
      const type = e.currentTarget.dataset.type;
      this.setData({
        activeName: type
      });

      switch (type) {
        case 1:
          if (this.payList.length == 0) this.getBalanceListFun();
          break;

        case 2:
          if (this.incomeList.length == 0) this.getBalanceListFun();
          break;

        default:
          break;
      }
    },

    /**
     * @name 充值
     */
    handleReadyToChargeFun() {
      uni.navigateTo({
        url: '/pages/costManage/recharge/recharge'
      });
    },

    /**
     * @name 赠送好友
     */
    handleReadyToSendFun() {
      uni.navigateTo({
        url: '/pages/costManage/buyCard/buyCard' + '?type=1' // 1:赠送 2:购买

      });
    },

    /**
     * @name 格式化时间
     * @params num:0 YYYY-MM-DD
     * @params num:1  YYYY-MM-DD hh:mm:ss
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
        return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
      }
    }

  }
};
</script>
<style>
@import "./accountBalance.css";
</style>