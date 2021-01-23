<script>
	import {
		get,
		post
	} from './api/request.js'
	import {
		get_user_info,
		upload_local
	} from './api/account.js'

	export default {
		//当小程序启动，或从后台进入前台显示，会触发 onShow
		onShow: function(options) {
			//由于onShow中会调用getApp，但是这时候app还未加载成功
			this.globalData.loadUserInfo();
		},
		//当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
		onError: function(msg) {
			console.log(msg);
		},
		globalData: {
			//以下可以自定义添加函数和全局数据
			userToken: null,
			authCode: '',
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
			env: 'dev',
			hasShowOverdueModal: false,
			getUserAuthCode: function(callback) {
				// #ifdef MP-ALIPAY
				my.getAuthCode({
					scopes: 'auth_user',
					success: (res) => {
						this.authCode = res.authCode
						console.log(this.authCode, 9999)
						// typeof callback == 'function' && callback()
					},
				});
				// #endif
			},
			//登陆成功保存全局数据
			loginSuccess: function(userToken, userId, userName, userType, isAuth, phone, avatar, memberCompany, memberType) {
				console.log(userToken, userId, userName, userType, isAuth, phone, avatar, memberCompany, memberType, 21121);
				this.userToken = userToken;
				this.userId = userId;
				this.userName = userName;
				this.userType = userType;
				this.isAuth = isAuth == 1 ? true : false;
				this.phone = phone;
				this.avatar = avatar;
				this.memberType = memberType;

				// #ifdef H5
				localStorage.setItem("userToken", userToken);
				localStorage.setItem("userId", userId);
				localStorage.setItem("userName", userName);
				localStorage.setItem("userType", userType);
				localStorage.setItem("isAuth", isAuth);
				localStorage.setItem("phone", phone);
				localStorage.setItem("avatar", avatar);
				localStorage.setItem("memberType", memberType);
				if (memberCompany != null) {
					this.memberCompany = memberCompany;
					localStorage.setItem("memberCompany", JSON.stringify(memberCompany));
				} else {
					localStorage.setItem("memberCompany", '');
				}
				// #endif

				// #ifndef H5
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
				// #endif

			},
			//加载用户信息
			loadUserInfo: function() {
				// #ifdef H5
				this.userToken = localStorage.getItem("userToken");
				this.userId = localStorage.getItem("userId");
				this.userName = localStorage.getItem("userName");
				this.userType = localStorage.getItem("userType");
				this.isAuth = localStorage.getItem("isAuth") == 1 ? true : false;
				this.phone = localStorage.getItem("phone");
				this.avatar = localStorage.getItem("avatar");
				this.lastUserInfoAuthDate = localStorage.getItem("lastUserInfoAuthDate");
				this.memberType = localStorage.getItem("memberType");
				var memberCompanyJson = localStorage.getItem("memberCompany");
				// #endif
				
				// #ifndef H5
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
				// #endif


				if (memberCompanyJson && memberCompanyJson.length != 0) {
					this.memberCompany = JSON.parse(memberCompanyJson);
				}
			},

			/**
			 * 更新头像
			 */
			updateUserIcon: function(avatar) {
				this.avatar = avatar;
				var now = new Date();
				var nowTime = now.getTime();
				this.lastUserInfoAuthDate = nowTime;

				// #ifdef H5
				localStorage.setItem("avatar", avatar);
				localStorage.setItem("lastUserInfoAuthDate", nowTime);
				// #endif

				// #ifndef H5
				uni.setStorageSync("avatar", avatar);
				uni.setStorageSync("lastUserInfoAuthDate", nowTime);
				// #endif
			},
			/**
			 * 退出登陆
			 */
			quitLogin: function() {
				this.userToken = null;

				// #ifdef H5
				localStorage.clear()
				uni.reLaunch({
					url: '/pages/account/hlogin/hlogin'
				})
				// #endif

				// #ifndef H5
				uni.clearStorageSync();
				uni.reLaunch({
					url: '/pages/account/login/login'
				});
				// #endif


			},

			/**
			 * 是否登录中
			 */
			isLoginIn: function() {
				return Boolean(this.userToken && this.userToken.length > 0);
			},

			login() {
				// #ifdef H5
				uni.redirectTo({
					url: '/pages/account/hlogin/hlogin'
				});
				// #endif
				// #ifndef H5
				uni.redirectTo({
					url: '/pages/root/root'
				});
				// #endif

			},

			/**
			 * 获取用户token
			 */
			getUserToken: function() {
				return this.userToken;
			},

			/**
			 * 获取用户信息
			 */
			updateUserInfo: function(callback) {
				var _this = this;

				get({
					url: get_user_info,
					success: function(data) {
						if (!data) return;
						_this.loginSuccess(data.token, data.userId, data.name, data.userType, data.auth, data.phone, data.icon, data.joinCompany,
							data.userCompanyType);
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
					// #ifdef H5
					const companyId = JSON.parse(localStorage.getItem('currentUser')).companyId;
					// #endif
					// #ifndef H5
					const companyId = uni.getStorageSync('currentUser').companyId;
					// #endif
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
						success: function(res) {
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
	@import "./static/font/iconfont.css";
</style>
