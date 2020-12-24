<template>
<view class="page">
		<image src="https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/component/newadd.png" class="weui-btn_default--fixed" @tap.stop="open"></image>
    <!-- <image ></image>
    </view> -->
    <view class="fadeIn" v-if="wrapperShow">
        <view class="weui-mask" @tap="close"></view>
        <view :class="'weui-half-screen-dialog ' + (contentShow ? 'show' : '')">
            <view class="weui-half-screen-dialog__bd">
                <view v-for="(item, index) in menuList" :key="index" class="meun-list__item" :data-item="item" :data-type="item.type" @tap.stop="openMenu">
                  <image :src="item.imgUrl" mode="aspectFit"></image>
                  <text>{{item.name}}</text>
                </view>
            </view>
             <view class="weui-half-screen-dialog__hd__side" @tap="close">取消</view>
        </view>
    </view>
</view>
</template>

<script>

export default {
  data() {
    return {
      wrapperShow: false,
      contentShow: false,
      menuList: [{
        type: 'image',
        imgUrl: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/image.png',
        id: '1',
        name: '图片存证'
      }, {
        type: 'file',
        imgUrl: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/file.png',
        id: '5',
        name: '文件存证'
      }, {
        type: 'voice',
        imgUrl: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/voice.png',
        id: '3',
        name: '语音存证'
      }, {
        type: 'video',
        imgUrl: 'https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/video.png',
        id: '4',
        name: '视频存证'
      }]
    };
  },

  components: {},
  props: {},
  methods: {
    close: function () {
      this.setData({
        contentShow: false
      });
      setTimeout(() => {
        this.setData({
          wrapperShow: false
        });
      }, 250);
    },

    open() {
      this.setData({
        wrapperShow: true
      });
      setTimeout(() => {
        this.setData({
          contentShow: true
        });
      }, 250);
    },

    openMenu(e) {
      const app = getApp();

      if (!app.globalData.isLoginIn()) {
        uni.switchTab({
          url: '/pages/pm/pmHome'
        });
        return false;
      }

      var type = e.currentTarget.dataset.type;
      const currentUser = uni.getStorageSync('currentUser');
      let isAuth = false;

      if (currentUser.companyId && currentUser.authStatus == 1 || !currentUser.companyId && currentUser.auth == 1) {
        isAuth = true;
      }

      if (!isAuth && currentUser.companyId) {
        uni.showModal({
          title: '立即进行企业实名认证',
          content: '实名认证后可享受加便捷高效的电子合同服务',
          showCancel: true,
          cancelText: '暂不认证',
          confirmText: '立即认证',
          success: function (res) {
            if (res.cancel) {
              const pages = getCurrentPages();

              if (pages.length > 1) {
                uni.navigateBack();
              }

              uni.hideLoading({});
            } else {
              uni.navigateTo({
                url: "/pages/authentication/company/company-auth-type/index"
              });
            }
          }
        });
        return false;
      }

      if (!isAuth && !currentUser.companyId) {
        uni.showModal({
          title: '立即进行个人实名认证',
          content: '实名认证后可享受加便捷高效的电子合同服务',
          showCancel: true,
          cancelText: '暂不认证',
          confirmText: '立即认证',
          success: function (res) {
            if (res.cancel) {
              const pages = getCurrentPages();

              if (pages.length > 1) {
                uni.navigateBack();
              }

              uni.hideLoading({});
            } else {
              uni.navigateTo({
                url: "/pages/authentication/person/person-auth-type/index"
              });
            }
          }
        });
        return false;
      }

      if (type == 'video') {
        uni.navigateTo({
          url: '/pages/evidence/videoRecord/videoRecord?type=' + type
        });
      } else {
        uni.navigateTo({
          url: '/pages/evidence/addCertificate/addCertificate?type=' + type
        });
      }
    }

  }
};
</script>
<style>
@import "./half-screen-dialog.css";
</style>