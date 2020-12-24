<template>
<view class="card-list-page">
	<view class="header-tab">
		<view class="tab-wrapper">
			<view v-for="(item, index) in tabs" :key="index" :class="'tab-item ' + (activeName == item.type ? active : '')" :data-type="item.type" ontap="_handleSwitchTab">{{item.label}}</view>
			<view :class="'active-bg ' + (activeName == 1 ? 'active1' : activeName == 2 ? 'active2' : activeName == 3 ? 'active3' : activeName == 4 ? 'active4' : '')"></view>
		</view>
	</view>
	<scroll-view class="scroll-area" scroll-y="true" scroll-anchoring="true" @scrolltolower="handleScrollToBottmFun">
		<view class="useful list" v-if="activeName == 1">
			<view v-for="(item, index) in useful" :key="index" :class="'card-item ' + (item.couponType == 1 ? 'vip' : item.couponType == 2 ? 'shanqian' : item.couponType == 3 ? 'lawyer' : '')">
				<view class="header">
					<view class="top">
						<view class="card-type">
							<image :src="item.couponType == 1 ? vipCard : item.couponType == 2 ? shanqianCard : item.couponType == 3 ? lawyerCard : ''" :style="'width: ' + (item.couponType == 1 ? '76rpx' : (item.couponType == 2 || item.couponType == 3) ? '28rpx' : '') + '; height: ' + (item.couponType == 1 ? '36rpx' : (item.couponType == 2 || item.couponType == 3) ? '30rpx' : '')" mode="aspectFit"></image>
							<text class="tit">{{item.couponType == 1 ? "无限使用卡" : item.couponType == 2 ? "闪签充值卡" : item.couponType == 3 ? "法律服务卡" : ""}}</text>
						</view>
						<view class="card-origin">{{item.sourceType == 1 ? "平台赠送" : item.sourceType == 2 ? "好友赠送" : item.sourceType == 3 ? "账户充值" : ""}}</view>
					</view>
					<view class="bot">
						<view class="card-amount">面值：¥ {{item.amount}}元</view>
						<view class="card-time">{{item.invalidTime}} 到期</view>
					</view>
					<image class="bg-iamge" :src="item.couponType == 1 ? vipBg : item.couponType == 2 ? shanqianBg : item.couponType == 3 ? lawyerBg : ''" mode="aspectFit"></image>
				</view>
				<view class="content">
					<view class="detail">
						<view class="balance" v-if="item.couponType != 1">
							<view class="space">余额</view>
							<view class="money">¥ {{item.balance}}</view>
						</view>
						<view class="desc">{{item.couponType == 1 ? '适用于闪签平台全部服务，不可转赠' : item.couponType == 2 ? '适用于闪签平台全部服务、法律咨询服务，可转赠' : item.couponType == 3 ? '适用于法律咨询服务，不可转赠' : ''}}</view>
					</view>
					<view class="btns">
						<view class="view-detail-btn btn" :data-item="item" ontap="_handleViewDetail">消费明细</view>
						<view class="send-btn btn" :data-item="item" ontap="_handleSend">
							<image class="icon" :src="sendIcon" mode="aspectFit"></image>
							<text>赠送好友</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="send list" v-if="activeName == 2">
			<view v-for="(item, index) in send" :key="index" :class="'card-item ' + (item.couponType == 1 ? 'vip' : item.couponType == 2 ? 'shanqian' : item.couponType == 3 ? 'lawyer' : '')">
				<view :class="'header ' + (item.receive == 1 ? 'overdue' : '')">
					<view class="top">
						<view class="card-type">
							<image :src="(item.receive == 1 && item.couponType == 1) ? vipOverdueCard : (item.receive == 1 && item.couponType == 2) ? shanqianOverdueCard : (item.receive == 1 && item.couponType == 3) ? lawyerOverdueCard : (item.receive == 0 && item.couponType == 1) ? vipCard : (item.receive == 0 && item.couponType == 2) ? shanqianCard : (item.receive == 1 && item.couponType == 3) ? lawyerOverdueCard : ''" :style="'width: ' + (item.couponType == 1 ? '76rpx' : (item.couponType == 2 || item.couponType == 3) ? '28rpx' : '') + '; height: ' + (item.couponType == 1 ? '36rpx' : (item.couponType == 2 || item.couponType == 3) ? '30rpx' : '')" mode="aspectFit"></image>
							<text class="tit">{{item.couponType == 1 ? "无限使用卡" : item.couponType == 2 ? "闪签充值卡" : item.couponType == 3 ? "法律服务卡" : ""}}</text>
						</view>
						<view class="card-origin">{{item.sourceType == 1 ? "平台赠送" : item.sourceType == 2 ? "好友赠送" : item.sourceType == 3 ? "账户充值" : ""}}</view>
					</view>
					<view class="bot">
						<view class="card-amount">面值：¥ {{item.amount}}元</view>
						<view class="card-time">{{item.invalidTime}} 到期</view>
					</view>
					<image class="bg-iamge" :src="item.receive == 1 ? overdueBg : (item.receive == 0 && item.couponType == 1) ? vipBg : (item.receive == 0 && item.couponType == 2) ? shanqianBg : (item.receive == 1 && item.couponType == 3) ? lawyerBg : ''" mode="aspectFit"></image>
				</view>
				<view :class="'content ' + (item.receive == 1 ? 'overdue' : '')">
					<view class="receive-header">
						<image class="receive-icon" :src="receiveIcon" mode="aspectFit"></image>
						<text class="header-tit">领取信息</text>
					</view>
					<view class="receive-details" v-if="item.recipientPhone">
						<view class="details-item" v-if="item.recipientCompanyName">企业名称：<text class="value">{{ item.recipientCompanyName }}</text></view>
						<view class="details-item">领取人手机号：<text class="value">{{ item.recipientPhone }}</text></view>
						<view class="details-item">领取时间：<text class="value">{{ item.recipientTime }}</text></view>
					</view>
					<view class="empty" v-if="!item.recipientPhone">暂无领取信息</view>
					<image class="receive-status" :src="item.receive == 0 ? waitReceiveIcon : item.receive == 1 ? alreadyReceiveIcon : ''" mode="aspectFit" :style="'width: ' + (item.receive == 0 ? '190rpx' : item.receive == 1 ? '190rpx' : '') + '; height: ' + (item.receive == 0 ? '94rpx' : item.receive == 1 ? '190rpx' : '') + '; bottom: ' + (item.receive == 0 ? '82rpx' : item.receive == 1 ? '20rpx' : '')"></image>
				</view>
			</view>
		</view>
		<view class="noeffect list" v-if="activeName == 3">
			<view v-for="(item, index) in noeffect" :key="index" :class="'card-item overdue ' + (item.couponType == 1 ? 'vip' : item.couponType == 2 ? 'shanqian' : item.couponType == 3 ? 'lawyer' : '')">
				<view class="header">
					<view class="top">
						<view class="card-type">
							<image :src="item.couponType == 1 ? vipOverdueCard : item.couponType == 2 ? shanqianOverdueCard : item.couponType == 3 ? lawyerOverdueCard : ''" :style="'width: ' + (item.couponType == 1 ? '76rpx' : (item.couponType == 2 || item.couponType == 3) ? '28rpx' : '') + '; height: ' + (item.couponType == 1 ? '36rpx' : (item.couponType == 2 || item.couponType == 3) ? '30rpx' : '')" mode="aspectFit"></image>
							<text class="tit">{{item.couponType == 1 ? "无限使用卡" : item.couponType == 2 ? "闪签充值卡" : item.couponType == 3 ? "法律服务卡" : ""}}</text>
						</view>
						<view class="card-origin">{{item.sourceType == 1 ? "平台赠送" : item.sourceType == 2 ? "好友赠送" : item.sourceType == 3 ? "账户充值" : ""}}</view>
					</view>
					<view class="bot">
						<view class="card-amount">面值：¥ {{item.amount}}元</view>
						<view class="card-time">{{item.invalidTime}} 到期</view>
					</view>
					<image class="bg-iamge" :src="overdueBg" mode="aspectFit"></image>
				</view>
				<view class="content">
					<view class="detail">
						<view class="balance" v-if="item.couponType != 1">
							<view class="space">余额</view>
							<view class="money">¥ {{item.balance}}</view>
						</view>
						<view class="desc">{{item.couponType == 1 ? '适用于闪签平台全部服务，不可转赠' : item.couponType == 2 ? '适用于闪签平台全部服务、法律咨询服务，可转赠' : item.couponType == 3 ? '适用于法律咨询服务，不可转赠' : ''}}</view>
					</view>
					<view class="btns">
						<view class="view-detail-btn btn" :data-item="item" ontap="_handleViewDetail">消费明细</view>
						<view class="send-btn btn hidden">
							<image class="icon" :src="sendIcon" mode="aspectFit"></image>
							<text>赠送好友</text>
						</view>
					</view>
					<image class="receive-status" :src="alreadyReceiveIcon" mode="aspectFit" style="width: 190rpx; height: 190rpx; bottom: 20rpx;"></image>
				</view>
			</view>
		</view>
		<view class="used list" v-if="activeName == 4">
			<view v-for="(item, index) in used" :key="index" :class="'card-item overdue ' + (item.couponType == 1 ? 'vip' : item.couponType == 2 ? 'shanqian' : item.couponType == 3 ? 'lawyer' : '')">
				<view class="header">
					<view class="top">
						<view class="card-type">
							<image :src="item.couponType == 1 ? vipOverdueCard : item.couponType == 2 ? shanqianOverdueCard : item.couponType == 3 ? lawyerOverdueCard : ''" :style="'width: ' + (item.couponType == 1 ? '76rpx' : (item.couponType == 2 || item.couponType == 3) ? '28rpx' : '') + '; height: ' + (item.couponType == 1 ? '36rpx' : (item.couponType == 2 || item.couponType == 3) ? '30rpx' : '')" mode="aspectFit"></image>
							<text class="tit">{{item.couponType == 1 ? "无限使用卡" : item.couponType == 2 ? "闪签充值卡" : item.couponType == 3 ? "法律服务卡" : ""}}</text>
						</view>
						<view class="card-origin">{{item.sourceType == 1 ? "平台赠送" : item.sourceType == 2 ? "好友赠送" : item.sourceType == 3 ? "账户充值" : ""}}</view>
					</view>
					<view class="bot">
						<view class="card-amount">面值：¥ {{item.amount}}元</view>
						<view class="card-time">{{item.invalidTime}} 到期</view>
					</view>
					<image class="bg-iamge" :src="overdueBg" mode="aspectFit"></image>
				</view>
				<view class="content">
					<view class="detail">
						<view class="balance" v-if="item.couponType != 1">
							<view class="space">余额</view>
							<view class="money">¥ {{item.balance}}</view>
						</view>
						<view class="desc">{{item.couponType == 1 ? '适用于闪签平台全部服务，不可转赠' : item.couponType == 2 ? '适用于闪签平台全部服务、法律咨询服务，可转赠' : item.couponType == 3 ? '适用于法律咨询服务，不可转赠' : ''}}</view>
					</view>
					<view class="btns">
						<view class="view-detail-btn btn" :data-item="item" ontap="_handleViewDetail">消费明细</view>
						<view class="send-btn btn hidden">
							<image class="icon" :src="sendIcon" mode="aspectFit"></image>
							<text>赠送好友</text>
						</view>
					</view>
					<image class="receive-status" :src="alreadyReceiveIcon" mode="aspectFit" style="width: 190rpx; height: 190rpx; bottom: 20rpx;"></image>
				</view>
			</view>
		</view>
		<view :class="'loading ' + (isRefresh ? 'show' : '')">加载中...</view>
	</scroll-view>
</view>
</template>

<script>
// pages/costManage/accountCard/accountCard.js
var api = require("../../../api/request.js");

export default {
  data() {
    return {
      vipBg: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/vip_bg.png',
      shanqianBg: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/shanqian_bg.png',
      lawyerBg: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/lawyer_bg.png',
      overdueBg: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/overdue_bg.png',
      vipCard: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/vip_card.png',
      shanqianCard: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/shanqian_card.png',
      lawyerCard: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/lawyer_card.png',
      vipOverdueCard: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/vip_overdue_card.png',
      lawyerOverdueCard: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/lawyer_overdue_card.png',
      shanqianOverdueCard: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/shanqian_overdue_card.png',
      sendIcon: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/send_icon.png',
      receiveIcon: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/receive_icon.png',
      waitReceiveIcon: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/wait_receive_icon.png',
      alreadyReceiveIcon: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/already_receive_icon.png',
      tabs: [{
        label: '可使用',
        type: 1
      }, {
        label: '已送出',
        type: 2
      }, {
        label: '已失效',
        type: 3
      }, {
        label: '已使用',
        type: 4
      }],
      activeName: 1,
      useful: [],
      send: [],
      noeffect: [],
      used: [],
      usefulTotal: 0,
      sendTotal: 0,
      noeffectTotal: 0,
      usedTotal: 0,
      usefulGet: false,
      sendGet: false,
      noeffectGet: false,
      usedGet: false,
      paginations1: {
        pageIndex: 1,
        pageSize: 10
      },
      paginations2: {
        pageIndex: 1,
        pageSize: 10
      },
      paginations3: {
        pageIndex: 1,
        pageSize: 10
      },
      paginations4: {
        pageIndex: 1,
        pageSize: 10
      },
      isRefresh: false,
      // 是否下啦刷新
      origin: '',
      waitGet: false
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

    if (options.waitGet) {
      this.setData({
        waitGet: options.waitGet
      });
    }

    this.getCardListDataFun();
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
     * @name 切换tab
     */
    handleSwitchTabFun(e) {
      this.setData({
        activeName: e.currentTarget.dataset.type
      });

      switch (this.activeName) {
        case 1:
          if (!this.usefulGet) {
            this.getCardListDataFun();
          }

          break;

        case 2:
          if (!this.sendGet) {
            this.getCardListDataFun();
          }

          break;

        case 3:
          if (!this.noeffectGet) {
            this.getCardListDataFun();
          }

          break;

        case 4:
          if (!this.usedGet) {
            this.getCardListDataFun();
          }

          break;

        default:
          break;
      }
    },

    /**
     * @name 获取卡片列表数据
     */
    getCardListDataFun() {
      uni.showLoading({
        title: '加载中'
      });
      api.sendGet({
        url: api.get_card_list + '?searchType=' + this.activeName + '&currentPage=' + this['paginations' + this.activeName].pageIndex + '&pageSize=' + this['paginations' + this.activeName].pageSize,
        success: res => {
          console.log(res);
          res.results.map(it => {
            it.recipientTime = it.recipientTime ? this.formatTimeConvertFun(it.recipientTime, 0) : '-';
            it.invalidTime = it.invalidTime ? this.formatTimeConvertFun(it.invalidTime, 0) : '-';
            it.balance = (it.balance / 100).toFixed(2);
            it.amount = (it.amount / 100).toFixed(2);
          });

          switch (Number(this.activeName)) {
            case 1:
              let useful = [...JSON.parse(JSON.stringify(this.useful))];

              if (!this.usefulGet || this.useful.length < res.total) {
                this.setData({
                  useful: [...useful, ...res.results],
                  usefulGet: true,
                  usefulTotal: res.total
                });
              }

              console.log(this.useful);
              break;

            case 2:
              let send = [...JSON.parse(JSON.stringify(this.send))];

              if (!this.sendGet || this.send.length < res.total) {
                this.setData({
                  send: [...send, ...res.results],
                  sendGet: true,
                  sendTotal: res.total
                });
              }

              break;

            case 3:
              let noeffect = [...JSON.parse(JSON.stringify(this.noeffect))];

              if (!this.noeffectGet || this.noeffect.length < res.total) {
                this.setData({
                  noeffect: [...noeffect, ...res.results],
                  noeffectGet: true,
                  noeffectTotal: res.total
                });
              }

              break;

            case 4:
              let used = [...JSON.parse(JSON.stringify(this.used))];

              if (!this.usedGet || this.used.length < res.total) {
                this.setData({
                  used: [...used, ...res.results],
                  usedGet: true,
                  usedTotal: res.total
                });
              }

              break;

            default:
              break;
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
          if (this.usefulTotal == this.useful.length) return false;
          let pagination = this.paginations1;
          pagination.pageIndex = this.paginations1.pageIndex + 1;
          this.setData({
            isRefresh: true,
            paginations1: pagination
          });
        }

        if (this.activeName == 2) {
          if (this.sendTotal == this.send.length) return false;
          let pagination = this.paginations2;
          pagination.pageIndex = this.paginations2.pageIndex + 1;
          this.setData({
            isRefresh: true,
            paginations2: pagination
          });
        }

        if (this.activeName == 3) {
          if (this.noeffectTotal == this.noeffect.length) return false;
          let pagination = this.paginations3;
          pagination.pageIndex = this.paginations3.pageIndex + 1;
          this.setData({
            isRefresh: true,
            paginations3: pagination
          });
        }

        if (this.activeName == 4) {
          if (this.usedTotal == this.used.length) return false;
          let pagination = this.paginations4;
          pagination.pageIndex = this.paginations4.pageIndex + 1;
          this.setData({
            isRefresh: true,
            paginations4: pagination
          });
        }

        this.getCardListDataFun();
      }
    },

    /**
     * @name 赠送好友
     */
    handleSendFun(e) {
      const item = e.currentTarget.dataset.item;
      uni.navigateTo({
        url: '/pages/costManage/giveSettings/giveSettings?origin=card&id=' + item.id + '&balance=' + item.balance + '&type=' + item.couponType + '&time=' + item.invalidTime
      });
    },

    /**
     * @name 查看明细
     */
    handleViewDetailFun(e) {
      const item = e.currentTarget.dataset.item;
      uni.navigateTo({
        url: '/pages/costManage/cardDetail/cardDetail?id=' + item.id
      });
    },

    /**
     * @name 格式化时间
     * @params {num} 0:y-m-d 1:y-m-d-h-m-s
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
        return y + "年" + m + "月" + d + "日";
      } else {
        return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
      }
    }

  }
};
</script>
<style>
@import "./accountCard.css";
</style>