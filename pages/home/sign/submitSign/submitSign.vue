<template>
<!--pages/home/sign/submitSign/submitSign.wxml-->
 <verifycode id="verifycode"></verifycode>
</template>

<script>
// pages/home/sign/submitSign/submitSign.js
var api = require("../../../../api/request.js");
var app = getApp();
import verifycode from "../../../../components/verifycode/verifycode";

export default {
  data() {
    return {
      contractId: '',
      stampId: '',
      stampLeft: 0,
      stampTop: 0,
      currentPage: 1,
      isLaunch: 0
    };
  },

  components: {
    verifycode
  },
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.verifycode = this.selectComponent("#verifycode");
    var contractId = options.contractId;
    var stampId = options.stampId;
    var stampLeft = options.stampLeft;
    var stampTop = options.stampTop;
    var currentPage = options.currentPage;
    var isLaunch = options.isLaunch;
    this.setData({
      contractId: contractId,
      stampId: stampId,
      stampLeft: stampLeft,
      stampTop: stampTop,
      currentPage: currentPage,
      isLaunch: isLaunch
    });

    var _this = this;

    var phone = app.globalData.phone;
    this.sendPhoneCode(); //弹出verifycode

    this.verifycode.showView({
      userPhone: phone,
      inputSuccess: function (phoneCode) {
        uni.showModal({
          title: '签署提示',
          content: '是否完成全部签署',
          cancelText: '继续签署',
          confirmText: '完成签署',
          success: function (res) {
            if (res.confirm) {
              _this.submitSignFun(true, phoneCode);
            } else if (res.cancel) {
              _this.submitSignFun(false, phoneCode);
            }
          }
        });

        _this.verifycode.clearCode();
      },
      againSend: function () {
        //重新发送
        _this.sendPhoneCode();
      }
    });
  },

  onShareAppMessage() {},

  methods: {
    /**
     * 发送验证码
     */
    sendPhoneCode: function () {
      var _this = this; //成功后授后发送验证码


      uni.showLoading({
        title: '验证码发送中'
      });
      api.sendGet({
        url: api.get_sign_sms_code_url + '/' + app.globalData.userId,
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
     * 提交签署
     */
    submitSignFun: function (finish, code) {
      uni.showLoading({
        title: '签署中...'
      });

      var _this = this;

      api.sendPost({
        url: api.add_sign_url,
        params: {
          signImageId: this.stampId,
          signFileId: this.contractId,
          page: this.currentPage,
          offsetX: parseInt(this.stampLeft),
          offsetY: parseInt(this.stampTop),
          code: code,
          finish: finish
        },
        success: function (data) {
          uni.hideLoading();
          var hint = finish == true ? '您已完成全部签署,确认返回' : '您已完成本次签署,继续签署';
          uni.showModal({
            title: '签署提示',
            content: hint,
            showCancel: false,
            confirmText: '确认',
            complete: function () {
              if (finish == false) {
                uni.navigateBack({
                  delta: 1
                });
              } else if (_this.isLaunch == 1) {
                var backCount = getCurrentPages().length;
                console.log(1111111111);
                uni.navigateBack({
                  delta: backCount
                });
              } else {
                uni.navigateBack({
                  delta: 2
                });
              }
            }
          });
        },
        fail: function (msg) {
          uni.hideLoading();
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: msg
            });
          }, 50);
        }
      });
    }
  }
};
</script>
<style>
@import "./submitSign.css";
</style>