<template>
<view>
<!--pages/account/login/login.wxml-->
<image :src="loginBgSrc" class="login-bg"></image>
<text class="login-title">{{loginTitle}}</text>

 <button class="btn" v-if="!isBindOpenId" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">{{quickLoginTitle}}</button>
 <button class="btn" v-if="isBindOpenId" @tap.stop="_handleLoginByPhone">{{quickLoginTitle}}</button>

 <view class="mark-view" :hidden="!isShowMark">
    <view class="mark-content-view global-shadow">
      <input class="mark-phone-input" @input="bindKeyInput" placeholder="请输入手机号码" :value="loginPhone" type="number"></input>
      <view class="mark-btn" @tap.stop="bindPhoneAction">确认绑定此号码</view>
    </view>
 </view>
</view>
</template>

<script>
import { get, post } from '../../../api/request';
import { get_phone_wx_code, decode_phone } from '../../../api/account';

export default {
  data() {
    return {
      wxCode: '',
      openId: '',
      unionId: '',
      loginPhone: '',
      quickLoginTitle: "微信账号快速登陆",
      loginTitle: '闪签快捷登陆',
      isShowMark: false,
      isBindOpenId: false,
      bandPhone: ''
    };
  },

  components: {},
  props: {},
  onLoad: function (options) {},
  onShow: function () {
    this.getRegisterStatusFun();
  },

  onShareAppMessage() {},

  methods: {
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

    /**
     * @name 获取注册状态
     */
    getRegisterStatusFun() {
      const canNavigate = false;
      this.loginWxFun(() => {
        this.getUserRegisterInfoFun(canNavigate);
      });
    },

    /**
     * @name 通过手机号登陆
     */
    handleLoginByPhoneFun() {
      const canNavigate = true;
      this.loginWxFun(() => {
        this.getUserRegisterInfoFun(canNavigate);
      });
    },

    /**
     * 根据code获取用户是否已经注册
     */
    getUserRegisterInfoFun(canNavigate) {
      if (!this.isBindOpenId) {
        get({
          url: get_phone_wx_code + '/' + this.wxCode,
          success: data => {
            if (data.isRegister) {
              this.setData({
                bandPhone: data.phone,
                openId: data.openId,
                unionId: data.unionId,
                isBindOpenId: true
              });

              if (canNavigate) {
                uni.navigateTo({
                  url: "/pages/account/loginVerify/loginVerify?phone=" + this.bandPhone + "&unionId=" + this.unionId + "&openId=" + this.openId + "&originType=" + this.originType
                });
              }
            } else {
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
      } else {
        if (canNavigate) {
          uni.navigateTo({
            url: "/pages/account/loginVerify/loginVerify?phone=" + this.bandPhone + "&unionId=" + this.unionId + "&openId=" + this.openId + "&originType=" + this.originType
          });
        }
      }
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
            isBindOpenId: true
          });
          uni.navigateTo({
            url: "/pages/account/loginVerify/loginVerify?phone=" + data.phone + "&unionId=" + data.unionId + "&openId=" + data.openId
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

    bindKeyInput: function (e) {
      var inputValue = e.detail.value;
      console.log(inputValue.length);

      if (inputValue.length > 11) {
        return inputValue.substr(0, 11);
      }

      this.setData({
        loginPhone: e.detail.value
      });
    },

    /**
     * 绑定手机号码
     */
    bindPhoneAction: function () {
      uni.navigateTo({
        url: "/pages/account/loginVerify/loginVerify?phone=" + this.loginPhone + "&unionId=" + this.unionId + "&openId=" + this.openId
      });
    }
  }
};
</script>
<style>
@import "./login.css";
</style>