<template>
<view class="give-way--page">
	<view class="way-list">
		<view v-for="(item, index) in ways" :key="index" class="list-item" :data-type="item.type" ontap="_handleSelectShareWay">
			<view class="l-part">
				<view class="icon">
					<image :src="item.icon"></image>
				</view>
				<view class="desc">{{item.label}}</view>
			</view>
			<view class="r-part one one-apparrow-right"></view>
			<button open-type="share" class="share-btn" v-if="index == 0">分享</button>
		</view>
	</view>
</view>
</template>

<script>
// pages/costManage/giveWay/giveWay.js
var api = require("../../../api/request");

export default {
  data() {
    return {
      ways: [{
        icon: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/friends.png',
        label: '微信好友',
        type: 1
      }, {
        icon: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/shanqian_icon.png',
        label: '闪签用户',
        type: 2
      }],
      origin: 'card',
      id: '',
      wxShareId: '',
      money: 0,
      // 单个价格
      count: 0,
      // 个数
      shareIcon: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/share_icon.png',
      isWxShare: false
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);

    if (options.origin) {
      this.setData({
        origin: options.origin
      });
    }

    if (options.id) {
      this.setData({
        id: options.id
      });
    }

    if (options.money) {
      this.setData({
        money: options.money
      });
    }

    if (options.count) {
      this.setData({
        count: options.count
      });
    }

    this.shareCardFun();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('hide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    if (!this.isWxShare) {
      this.cancelShareFun();
    }
  },

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
  onShareAppMessage: function () {
    let shareObj = {};
    let origin = this.origin == 'give' ? 'buy' : 'rechargeCard';
    shareObj = {
      title: `${this.money}元礼品卡，点击即可领取`,
      // 分享标题
      // desc: '',
      path: `/pages/costManage/receiveCard/receiveCard?gifCardId=${this.wxShareId}`,
      imageUrl: this.shareIcon // 分享封面图

    };
    shareObj = { ...shareObj,
      success: res => {
        console.error('分享成功', res);
        setTimeout(() => {
          uni.showToast({
            icon: 'none',
            title: '分享成功'
          });
        }, 50);
      },
      fail: error => {
        console.error('分享失败', error);
        setTimeout(() => {
          uni.showToast({
            icon: 'none',
            title: '分享失败'
          });
        }, 50);
        this.cancelShareFun();
      }
    };
    console.error('shareObj', shareObj, this.id, this.wxShareId);
    return shareObj;
  },
  methods: {
    handleSelectShareWayFun(e) {
      // 1:好友 2:闪签用户 
      console.log(e.currentTarget.dataset.type);

      switch (e.currentTarget.dataset.type) {
        case 1:
          console.log('分享到好友');
          this.setData({
            isWxShare: true
          });
          break;

        case 2:
          this.cancelShareFun(() => {
            uni.navigateTo({
              url: '/pages/costManage/giving/giving?origin=' + this.origin + '&id=' + this.id + '&money=' + this.money
            });
          });
          break;

        default:
          break;
      }
    },

    /**
     * @name 获取分享id
     */
    shareCardFun() {
      uni.showLoading({
        icon: 'none',
        title: '加载中'
      });
      let options = {
        shareId: this.id,
        mode: this.origin == 'give' ? 'buy' : 'rechargeCard',
        shareNum: this.count,
        shareMoney: this.money
      };
      api.sendPostBody({
        url: api.share_card,
        params: options,
        success: res => {
          console.log(res);
          this.setData({
            wxShareId: res
          });
        },
        fail: err => {
          console.log(err);
        },
        complete: () => {
          console.log('完成了');
          uni.hideLoading();
        }
      });
    },

    /**
     * @name 取消分享
     */
    cancelShareFun(callback) {
      api.sendGet({
        url: api.cancel_hare_card + this.wxShareId,
        success: res => {
          console.log(res);
        },
        fail: err => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      });
      typeof callback == 'function' && callback();
    }

  }
};
</script>
<style>
@import "./giveWay.css";
</style>