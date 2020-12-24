<template>
<view class="personal-face-auth">
    <view class="type-select-header">
        <view class="type-text">个人信息</view>
        <view class="right" @tap="showSafeInfo">
        <!--   <text class="one one-locked"></text>-->
          <image src="/static/images/authen/safe.png" class="safe-tip"></image>   
            安全声明
        </view>
    </view>
    <view class="base-info-container">

        <view class="field-item">
            <label class="name">姓名</label>
            <input class="value-input" placeholder="请输入姓名" @input="bindKeyInput" :value="name" data-field="name"></input>
        </view>
        <view class="field-item">
            <label class="name">证件类型</label>
            <label class="value-select">
                居民身份证
            <!--    <text class="one one-arrow-down"></text>-->
            </label>
        </view>
        <view class="field-item">
            <label class="name">证件号</label>
            <input class="value-input" placeholder="请输入证件号" @input="bindKeyInput" :value="idCard" data-field="idCard"></input>
        </view>
    </view>
    <view class="base-info-reminder">
      <label class="radio" @tap.stop="checkedTap">
      <radio value="r1" :checked="checked"></radio>
      </label>
      <view style="color:#999999; margin-top:4rpx">我已阅读并同意</view>
      <view style="color:#6E87B8; margin-top:4rpx" ontap="_handleShowSecret">《隐私保护协议》</view>
    </view>

    <view class="bottom-btn-container">
        <text class="back" @tap="back">返回</text>
        <text class="next" @tap="chooseVideo" :style="'background:' + (ishighLight ? '#464646' : '#B7B7B7')">下一步</text>
    </view>
    <modal :content="warnTips" :title="warnTitle" :isShow="isShow" @triggerEvent="handleEmitFun"></modal>
</view>
</template>

<script>
// authentication/auth-type/index.js
const api = require("../../../../api/request.js");
import modal from "../../../../components/modal/modal";

export default {
  data() {
    return {
      ishighLight: false,
      name: '',
      idCard: '',
      checked: false,
      warnTips: ['1、在您使用闪签账号签发文件前，您需要进行实名认证，实名认证需要提供您的真实姓名、身份证号码、手机号码；收集此类信息是纯属满足相关法律法规的实名制要求，若您不提供这类信息，您将无法完成实名认证，亦无法以实名身份签发文件。', '2、实名认证通过后会由权威CA机构为您颁发数字证书，我们会保留您的数字证书信息，此信息包含您的姓名、身份证件信息，以及为您申请的数字证书序列号，以便供您在签发文件时调用。若您不授权我们保存此信息，您将无法正常使用我们的签发服务。'],
      warnTitle: '隐私保护协议',
      isShow: false,
      isFinished: false,
      field: ""
    };
  },

  components: {
    modal
  },
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    uni.getLocation({
      type: 'wgs84',
      success: function (location) {
        uni.setStorageSync('location', location);
      },
      fail: function (errorRes) {
        setTimeout(() => {
          uni.showToast({
            icon: "none",
            title: "获取位置信息失败，您的认证将不能使用，请允许获取位置信息"
          });
        }, 50);
      }
    });
  },

  onShareAppMessage() {},

  methods: {
    handleShowSecretFun() {
      this.setData({
        isShow: true
      });
    },

    handleEmitFun() {
      this.setData({
        isShow: false
      });
    },

    checkedTap: function () {
      var newchecked = this.checked;
      this.setData({
        "checked": !newchecked
      });
      const {
        name,
        idCard,
        checked
      } = this;

      if (name == undefined || name == '' || idCard == undefined || idCard == "" || checked == false) {
        this.setData({
          ishighLight: false
        });
      } else {
        this.setData({
          ishighLight: true
        });
      }
    },

    showSafeInfo() {
      uni.showModal({
        title: '个人身份隐私安全声明',
        showCancel: false,
        confirmText: '知道了',
        content: '您输入的身份信息仅用于个人实名认证和获取CA认证证书'
      });
    },

    bindKeyInput(e) {
      const {
        name,
        idCard,
        checked
      } = this;
      const {
        field
      } = e.target.dataset;
      const {
        value
      } = e.detail;
      this.setData({
        [field]: value
      });

      if (name == undefined || name == '' || idCard == undefined || idCard == "" || checked == false) {
        this.setData({
          ishighLight: false
        });
      } else {
        this.setData({
          ishighLight: true
        });
      }
    },

    videoAuth(tmpUrl) {
      uni.showLoading({
        title: '认证中'
      });
      api.uploadFile({
        url: api.authFace,
        filePath: tmpUrl,
        key: 'faceVideo',
        success: res => {
          console.log(res);
          this.setData({
            isFinished: true
          });
          api.sendGet({
            url: api.get_user_info,
            success: function (res) {
              let currentUser = uni.getStorageSync('currentUser');
              currentUser.name = res.name;
              currentUser.auth = 1;
              uni.setStorageSync('currentUser', currentUser);
            },
            complete: () => {
              uni.hideLoading();
              uni.navigateTo({
                url: '/pages/authentication/personal/auth-result/index?result=s&type=face'
              });
            }
          });
        },
        fail: function (err) {
          uni.hideLoading();
          uni.navigateTo({
            url: '/pages/authentication/personal/auth-result/index?result=f&type=face&desc=' + err
          });
        }
      });
    },

    chooseVideo() {
      const {
        name,
        idCard,
        checked
      } = this;
      let mgs = [];
      let that = this;

      if (!name) {
        mgs.push('姓名');
      }

      if (!idCard) {
        mgs.push('证件号');
      }

      if (mgs.length) {
        setTimeout(() => {
          uni.showToast({
            icon: 'none',
            title: mgs.join('、') + '不能为空'
          });
        }, 50);
        return false;
      }

      const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

      if (!reg.test(idCard)) {
        setTimeout(() => {
          uni.showToast({
            icon: 'none',
            title: '请输入正确的身份证号码'
          });
        }, 50);
        return false;
      }

      if (checked == false) {
        setTimeout(() => {
          uni.showToast({
            icon: 'none',
            title: '请阅读并同意《隐私保护协议》'
          });
        }, 50);
        return false;
      }

      if (this.isFinished) return;
      uni.setStorageSync('personInfo', {
        name,
        idCard
      });
      uni.showLoading({
        title: '加载中'
      });
      api.sendPostBody({
        url: api.applyAuth,
        params: {
          name,
          idCard
        },
        success: function (res) {
          console.log(res);
          uni.chooseMedia({
            count: 1,
            mediaType: ['video'],
            sourceType: ['camera'],
            maxDuration: 10,
            camera: 'front',

            success(res) {
              uni.hideLoading();
              that.videoAuth(res.tempFiles[0].tempFilePath);
            }

          });
        },
        fail: function (err) {
          console.log(err);
          uni.hideLoading();
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: err,
              duration: 5000
            });
          }, 50);
        },
        complete: function () {
          uni.hideLoading();
        }
      });
    },

    getPhoneCode() {
      const {
        phone
      } = this;
    },

    back() {
      uni.navigateBack();
    }

  }
};
</script>
<style>
@import "./index.css";
</style>