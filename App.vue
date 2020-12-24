<script>
var api = require("./api/request.js");

export default {
  //当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow: function (options) {
    //由于onShow中会调用getApp，但是这时候app还未加载成功
    this.globalData.loadUserInfo();
  },
  //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  onError: function (msg) {
    console.log(msg);
  },
  globalData: {
    //以下可以自定义添加函数和全局数据
    userToken: null,
    userId: '',
    userName: '',
    userType: 1,
    // 1:个人用户 2:企业用户
    isAuth: false,
    avatar: '',
    phone: '',
    lastUserInfoAuthDate: null,
    //上一次用户授权时间
    memberCompany: null,
    //对象类型
    memberType: 1,
    // 1:没有加入任何企业 2:企业普通成员 3:企业管理员
    activeTab: 'sign',
    // 证据管理选中tab
    env: 'prod',
    hasShowOverdueModal: false,
    //登陆成功保存全局数据
    loginSuccess: function (userToken, userId, userName, userType, isAuth, phone, avatar, memberCompany, memberType) {
      console.log(userToken, userId, userName, userType, isAuth, phone, avatar, memberCompany, memberType, 21121);
      this.userToken = userToken;
      this.userId = userId;
      this.userName = userName;
      this.userType = userType;
      this.isAuth = isAuth == 1 ? true : false;
      this.phone = phone;
      this.avatar = avatar;
      this.memberType = memberType;
      uni.setStorageSync("userToken", userToken);
      uni.setStorageSync("userId", userId);
      uni.setStorageSync("userName", userName);
      uni.setStorageSync("userType", userType);
      uni.setStorageSync("isAuth", isAuth);
      uni.setStorageSync("phone", phone);
      uni.setStorageSync("avatar", avatar);
      uni.setStorageSync("memberType", memberType);

      if (memberCompany != null) {
        this.memberCompany = memberCompany;
        uni.setStorageSync("memberCompany", JSON.stringify(memberCompany));
      } else {
        uni.setStorageSync("memberCompany", '');
      }
    },
    //加载用户信息
    loadUserInfo: function () {
      this.userToken = uni.getStorageSync("userToken");
      this.userId = uni.getStorageSync("userId");
      this.userName = uni.getStorageSync("userName");
      this.userType = uni.getStorageSync("userType");
      this.isAuth = uni.getStorageSync("isAuth") == 1 ? true : false;
      this.phone = uni.getStorageSync("phone");
      this.avatar = uni.getStorageSync("avatar");
      this.lastUserInfoAuthDate = uni.getStorageSync("lastUserInfoAuthDate");
      this.memberType = uni.getStorageSync("memberType");
      var memberCompanyJson = uni.getStorageSync("memberCompany");

      if (memberCompanyJson.length != 0) {
        this.memberCompany = JSON.parse(memberCompanyJson);
      }
    },

    /**
     * 更新头像
     */
    updateUserIcon: function (avatar) {
      this.avatar = avatar;
      uni.setStorageSync("avatar", avatar);
      var now = new Date();
      var nowTime = now.getTime();
      uni.setStorageSync("lastUserInfoAuthDate", nowTime);
      this.lastUserInfoAuthDate = nowTime;
      console.log(nowTime);
    },

    /**
     * 是否需要更新用户信息
     */
    isNeedUpdateUserInfo: function () {
      console.log(this.lastUserInfoAuthDate);

      if (this.lastUserInfoAuthDate == null || this.lastUserInfoAuthDate.length == 0) {
        return true;
      }

      var now = new Date();
      var nowTime = now.getTime();
      var day = parseInt((this.lastUserInfoAuthDate - nowTime) / (1000 * 60 * 60 * 24));
      console.log(nowTime);
      console.log(day);

      if (day > 3) {
        uni.setStorageSync("lastUserInfoAuthDate", nowTime);
        this.lastUserInfoAuthDate = nowTime;
        return true;
      }

      return false;
    },

    /**
     * 退出登陆
     */
    quitLogin: function () {
      this.userToken = null;
      uni.clearStorageSync();
      uni.reLaunch({
        url: '/pages/account/login/login'
      });
    },

    /**
     * 是否登录中
     */
    isLoginIn: function () {
      return this.userToken && this.userToken.length > 0;
    },

    login() {
      uni.redirectTo({
        url: '/pages/root/root'
      });
    },

    /**
     * 获取用户token
     */
    getUserToken: function () {
      return this.userToken;
    },

    /**
     * 授权成功
     */
    authSuccess: function (name, userType) {
      uni.setStorageSync("userName", userName);
      uni.setStorageSync("userType", userType);
      uni.setStorageSync("isAuth", 1);
      this.userName = name;
      this.userType = userType;
      this.isAuth = true;
    },

    /**
     * 获取用户坐标
     */
    updateUserLocal: function () {
      uni.getLocation({
        type: 'wgs84',
        success: function (res) {
          console.log(res);
          var latitude = res.latitude;
          var longitude = res.longitude;
          api.sendPost({
            url: api.upload_local,
            params: {
              latitude: latitude,
              longitude: longitude
            },
            success: function (data) {
              console.log('local上传成功');
            },
            fail: function (smg) {
              console.log('local上传失败');
            }
          });
        }
      });
    },

    /**
     * 获取用户信息
     */
    updateUserInfo: function (callback) {
      var _this = this;

      api.sendGet({
        url: api.get_user_info,
        success: function (data) {
          if (!data) {
            return;
          }

          console.log(callback);

          _this.loginSuccess(data.token, data.userId, data.name, data.userType, data.auth, data.phone, data.icon, data.joinCompany, data.userCompanyType);

          typeof callback == 'function' && callback();
        }
      });
    },

    /**
     * @name 校验是否认证了
     */
    checkHasAuth() {
      console.log(this.isAuth);
      if (!this.isAuth) {
        // 未认证
        const companyId = uni.getStorageSync('currentUser').companyId;
        const modalInfo = {
          title: companyId ? '立即进行企业实名认证' : '立即进行个人实名认证',
          url: companyId ? '/pages/authentication/company/company-auth-type/index' : '/pages/authentication/personal/personal-auth-type/index'
        };
        uni.showModal({
          title: modalInfo.title,
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
                url: modalInfo.url
              });
            }
          }
        });
        return false;
      } else {
        return true;
      }
    }

  },
  methods: {}
};
</script>
<style>
@import "./app.css";
</style>