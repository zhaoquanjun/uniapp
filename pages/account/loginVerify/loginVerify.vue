<template>
<!--pages/account/loginVerify/loginVerify.wxml-->

 <verifycode id="verifycode"></verifycode>
</template>

<script>
// pages/account/loginVerify/loginVerify.js
var api = require("../../../api/request.js");

export default {
  data() {
    return {
      openId: '',
      unionId: '',
      originType: null,
      isCard: false,
      cardId: '',
      mode: ''
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, 'dasdasdasdas');
    var phone = options.phone;
    console.log(options);

    if (options.originType != null) {
      this.setData({
        originType: options.originType
      });
    }

    if (options.isCard) {
      this.setData({
        isCard: true
      });
    }

    if (options.cardId) {
      this.setData({
        cardId: options.cardId
      });
    }

    this.setData({
      openId: options.openId,
      unionId: options.unionId
    });
    this.verifycode = this.selectComponent("#verifycode");
    this.sendPhoneCodeFun(phone); //弹出verifycode

    var _this = this;

    this.verifycode.showView({
      userPhone: phone,
      inputSuccess: function (phoneCode) {
        _this.loginFun(phone, phoneCode);

        _this.verifycode.clearCode();
      },
      againSend: function () {
        //重新发送
        _this.sendPhoneCodeFun(phone);
      }
    });
  },

  onShareAppMessage() {},

  methods: {
    /**
     * 微信登陆
     */
    loginFun: function (phone, code) {
      uni.hideLoading();
      uni.showLoading({
        title: '登陆中...'
      });

      var _this = this;

      api.sendPost({
        url: api.login_url,
        params: {
          phone: phone,
          phoneCode: code,
          openId: _this.openId,
          unionId: _this.unionId
        },
        success: data => {
          //存储用户数据
          console.log(data);
          var app = getApp();
          app.loginSuccess(data.token, data.userId, data.name, data.userType, data.auth, data.phone, data.icon, data.joinCompany, data.userCompanyType);
          uni.hideLoading(); //判断登陆来源

          var originType = _this.originType;
          console.log(this.isCard);

          if (this.isCard) {
            this.getGiftCardStatusFun(this.getGiftCardFun);
          } else if (originType == "auth") {
            uni.navigateBack({
              delta: 3
            });
          } else {
            // 进入首页
            uni.reLaunch({
              url: '/pages/home/home'
            });
          }
        },
        fail: function (msg) {
          uni.hideLoading();
          setTimeout(() => {
            uni.showToast({
              title: msg,
              icon: "none",
              duration: 2000
            });
          }, 50);
        }
      });
    },

    /**
     * 发送验证码
     */
    sendPhoneCodeFun: function (userPhone) {
      var _this = this; //成功后授后发送验证码


      uni.showLoading({
        title: '验证码发送中'
      });
      api.sendGet({
        url: api.get_register_sms_code_url + '/' + userPhone,
        success: function (data) {
          uni.hideLoading();
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: '发送成功,请注意查收'
            });
          }, 50);

          _this.verifycode.clearCode();

          _this.verifycode.sendSuccess();
        },
        fail: function (msg) {
          uni.hideLoading();
          setTimeout(() => {
            uni.showToast({
              title: msg,
              icon: "none"
            });
          }, 50);
        }
      });
    },

    /**
     * @name 领取礼品卡
     */
    getGiftCardFun() {
      uni.showLoading({
        title: '领取中'
      });
      api.sendGet({
        url: api.get_gift_card_from_wx + this.cardId,
        success: () => {
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
          }, 1500);
        },
        fail: err => {
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: err
            });
          }, 50);
          setTimeout(() => {
            uni.redirectTo({
              url: '/pages/home/home'
            });
          }, 21500);
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
      api.sendGet({
        url: api.get_gift_card_status + this.cardId,
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
@import "./loginVerify.css";
</style>