<template>
<view class="receive-card--page">
  <image class="page-bg" :src="bg" mode="widthFix"></image>
  <view class="content">
    <view class="label">手机号</view>
    <input placeholder="请输入手机号" maxlength="11" class="input-block" type="number" @input="handleInputTelFun"></input>
    <view class="label">验证码</view>
    <view class="input-area">
      <input placeholder="请输入验证码" maxlength="6" class="yzm-input" type="number" @input="handleInputYzmFun"></input>
      <view class="get-code" @tap="handleGetCodeFun">{{btnWords}}</view>
    </view>
    <view class="get-card-btn" @tap="handlePcLoginFun">手机号登录领取</view>
    <view class="divider">
      <view class="line"></view>
      <view class="tips">其他方式登录</view>
      <view class="line"></view>
    </view>
    <view class="wx-login-btn">
      <button class="wx-login" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信登录</button>
      <image class="wx-logo" :src="wx_icon" mode="aspectFit"></image>
      <view class="btn-words">微信授权登录</view>
    </view>
  </view>
</view>
</template>

<script>
	import {get, post} from '../../../api/request.js'
	import { get_gift_card_from_wx, get_gift_card_status } from '../../../api/cost.js'
	import { get_register_sms_code_url, pc_login, get_phone_wx_code, decode_phone } from '../../../api/account.js'
var utils = require("../../../utils/utils.js");
const app = getApp();

export default {
  data() {
    return {
      tel: '',
      yzm: '',
      cardId: '',
      btnWords: "获取验证码",
      time: 60,
      timer: null,
      bg: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/receive_card_bg.png',
      wx_icon: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/cost/wx_logo.png',
      wxCode: '',
      openId: '',
      unionId: '',
      loginPhone: '',
      isShowMark: false,
      originType: null,
      isBindOpenId: true,
      bandPhone: ''
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.gifCardId) {
      this.setData({
        cardId: options.gifCardId
      });
    }

    if (uni.getStorageSync('userToken')) {
      this.getGiftCardStatusFun(this.getGiftCardFun);
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
     * @name 获取验证码
     */
    handleGetCodeFun() {
      console.log(this.tel);

      if (!utils.isTelCode(this.tel)) {
        setTimeout(() => {
          uni.showToast({
            icon: 'none',
            title: '请输入正确手机号'
          });
        }, 50);
        return false;
      }

      if (this.timer) {
        setTimeout(() => {
          uni.showToast({
            icon: 'none',
            title: '验证码已发送，请耐心等待'
          });
        }, 50);
        return false;
      }

      uni.showLoading({
        title: '获取中'
      });
      get({
        url: get_register_sms_code_url + '/' + this.tel,
        success: () => {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '发送成功,请注意查收'
            });
          }, 50);
          this.setData({
            timer: setInterval(() => {
              if (this.time >= 1) {
                let curTime = this.time - 1;
                this.setData({
                  time: curTime,
                  btnWords: curTime + 's后再次获取'
                });
              } else {
                clearInterval(this.timer);
                this.setData({
                  time: 60,
                  timer: null,
                  btnWords: '获取验证码'
                });
              }
            }, 1000)
          });
        },
        fail: err => {
          setTimeout(() => {
            uni.showToast({
              title: err,
              icon: "none"
            });
          }, 50);
        },
        complete: () => {
          uni.hideLoading();
        }
      });
    },

    /**
     * @name pc登录
     */
    handlePcLoginFun() {
      uni.showLoading({
        title: '登录领取中'
      });
      const options = {
        phone: this.tel,
        phoneCode: this.yzm
      };
      post({
        url: pc_login,
        params: options,
        success: res => {
          console.log(res);
          uni.setStorageSync('userToken', res.token);
          app.globalData.userToken = res.token;
          this.getGiftCardStatusFun(this.getGiftCardFun);
        },
        fail: () => {
          setTimeout(() => {
            uni.showToast({
              title: '领取失败',
              icon: "none"
            });
          }, 100);
        }
      });
    },

    /**
     * @name 微信登陆
     * @param {*} callback 回调
     */
    loginWxFun(callback) {
      uni.login({
        success: res => {
          if (res.code) {
            this.setData({
              wxCode: res.code
            });
            typeof callback == 'function' && callback();
          } else {
            setTimeout(() => {
              uni.showToast({
                icon: 'none',
                title: '请先授权微信登陆'
              });
            }, 50);
          }
        },
        fail: function () {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '请先授权微信登陆'
            });
          }, 50);
        }
      });
    },

    handleLoginByPhoneFun() {
      this.loginWxFun(() => {
        this.getUserRegisterInfoFun();
      });
    },

    /**
     * 根据code获取用户是否已经注册
     */
    getUserRegisterInfoFun() {
      get({
        url: get_phone_wx_code + '/' + this.wxCode + '?wxAppType=2',
        success: data => {
          if (data.isRegister) {
            this.setData({
              bandPhone: data.phone,
              openId: data.openId,
              unionId: data.unionId,
              isBindOpenId: true
            });
            uni.navigateTo({
              url: "/pages/account/loginVerify/loginVerify?phone=" + this.bandPhone + "&unionId=" + this.unionId + "&openId=" + this.openId + "&originType=" + this.originType
            });
          } else {
            setTimeout(() => {
              uni.showToast({
                icon: 'none',
                title: '信息获取失败，请授权登录',
                duration: 3000
              });
            }, 50);
            this.setData({
              isBindOpenId: false
            });
          }
        },
        fail: err => {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '登陆信息获取失败：' + err
            });
          }, 50);
          this.setData({
            isBindOpenId: false
          });
        }
      });
    },

    /**
     * @name 通过按钮获取参数，请求后台获取手机号以及微信信息
     */
    getPhoneNumber(e) {
      if ("getPhoneNumber:ok" != e.detail.errMsg) {
        setTimeout(() => {
          uni.showToast({
            icon: 'none',
            title: '快捷登陆失败'
          });
        }, 50);
        return;
      }

      this.loginWxFun(() => {
        this.getPhoneFun(e);
      });
    },

    /**
     * @name 获取手机号以及微信信息
     * @param {*} e 
     */
    getPhoneFun(e) {
      post({
        url: decode_phone,
        params: {
          encrypted: e.detail.encryptedData,
          iv: e.detail.iv,
          code: this.wxCode,
          wxAppType: 2
        },
        success: data => {
          //判断用户是否已经注册
          this.setData({
            bandPhone: data.phone,
            loginPhone: data.phone,
            openId: data.openId,
            unionId: data.unionId,
            isShowMark: true,
            isBindOpenId: true
          });
          uni.navigateTo({
            url: "/pages/account/loginVerify/loginVerify?phone=" + data.phone + "&unionId=" + data.unionId + "&openId=" + data.openId + '&isCard=true&cardId=' + this.cardId
          });
        },
        fail: msg => {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: msg
            });
          }, 50);
        }
      });
    },

    /**
     * @name 输入手机号
     */
    handleInputTelFun(e) {
      this.setData({
        tel: e.detail.value
      });
      return e.detail.value;
    },

    /**
     * @name 输入验证码
     */
    handleInputYzmFun(e) {
      this.setData({
        yzm: e.detail.value
      });
      return e.detail.value;
    },

    /**
     * @name 领取礼品卡
     */
    getGiftCardFun() {
      uni.showLoading({
        title: '领取中'
      });
      get({
        url: get_gift_card_from_wx + this.cardId,
        success: res => {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '礼品卡领取成功'
            });
          }, 50);
          setTimeout(() => {
            uni.redirectTo({
              url: '/pages/costManage/accountCard/accountCard?type=1'
            });
          }, 2500);
        },
        fail: err => {
          console.log(err);
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
     * @name 获取礼品卡状态
     */
    getGiftCardStatusFun(callback) {
     get({
        url: get_gift_card_status + this.cardId,
        success: res => {
          console.log(res);

          if (!res) {
            setTimeout(() => {
              uni.showToast({
                icon: 'none',
                title: '礼品卡已被领取'
              });
            }, 50);
            setTimeout(() => {
              uni.switchTab({
                url: '/pages/home/home'
              });
            }, 1500);
          } else {
            typeof callback == 'function' && callback();
          }
        },
        fail: err => {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: err
            });
          }, 50);
          setTimeout(() => {
            uni.switchTab({
              url: '/pages/home/home'
            });
          }, 1500);
        }
      });
    }

  }
};
</script>
<style>
@import "./receiveCard.css";
</style>