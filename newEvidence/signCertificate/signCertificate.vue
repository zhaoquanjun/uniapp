<template>
<view class="sign-certificate-box">
  <view class="sign-certificate-name">*出证名称</view>
  <input class="sign-certificate-input" :value="inputName"></input>
  <view class="sign-certificate-name">*出证类型</view>
  <input class="sign-certificate-input" value="签署存证" disabled="disabled"></input>
  <view class="sign-certificate-type">
     <label>
        <radio value="1" name="type" checked></radio>
        <text class="label-text">司法存证</text>
        <view class="label-detail">安全可信存证、国家授权时间、数据直连司法、司法效力安全可信存证、国家授权时间、数据直连司法、司法效力</view>
      </label>
  </view>
  <view class="sign-certificate-description">
    <view>说明</view>
    <view>1.所选文件将按照国密SM3算法计算Hash；</view>
    <view>2.链上不存储原文件，仅存储Hash。</view>
  </view>
  <view class="sign-certificate-add" @tap.stop="addCertificate">出证</view>
</view>
</template>

<script>
// pages/pm/project/projectList.js
var api = require("../../api/request.js");

export default {
  data() {
    return {
      inputName: '',
      signFileId: '',
      type: 1
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      signFileId: options.id,
      inputName: options.name
    });
  },

  onShareAppMessage() {},

  methods: {
    addCertificate: function () {
      var that = this;
      uni.showLoading({
        title: '出证中...'
      });
      let params = {
        type: 2,
        name: this.inputName,
        contractSubjectId: this.signFileId
      };
      api.sendGet({
        url: api.sign_certificate_add,
        params,
        success: function (res) {
          console.log(res);
          uni.hideLoading();
          uni.showModal({
            title: '提交成功',
            content: '提示:上链需要3-5分钟，超市重试',
            showCancel: false,

            success(res) {
              if (res.confirm) {
                uni.navigateTo({
                  url: '/newEvidence/evidenceManage/evidenceManage'
                });
              }
            }

          });
        },
        fail: function (err) {
          console.log(err);
          uni.hideLoading();

          if (err == '已经出证') {
            uni.showModal({
              title: '',
              content: '已经出证',
              showCancel: false,

              success(res) {
                if (res.confirm) {
                  uni.navigateTo({
                    url: '/newEvidence/evidenceManage/evidenceManage'
                  });
                }
              }

            });
          } else {
            uni.showModal({
              title: '提交失败',
              content: '提示:上链需要3-5分钟，超时重试',
              cancelText: '关闭',
              confirmText: '继续提交',

              success(res) {
                if (res.confirm) {
                  that.addCertificate();
                } else if (res.cancel) {
                  uni.navigateTo({
                    url: '/newEvidence/evidenceManage/evidenceManage'
                  });
                }
              }

            });
          }
        }
      });
    }
  }
};
</script>
<style>
@import "./signCertificate.css";
</style>