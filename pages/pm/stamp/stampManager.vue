<template>
	<view class="stamp-page">
		<view class="header-Bar">
			<view class="layout">
				<view class="currentName" @tap.stop="chooseCompany">
					<view class="_currentName">
						{{currentUser}}
					</view>
					<image class="select" src="https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/select_black.png"></image>
				</view>
			</view>
		</view>
		<view class="no-file" :hidden="!isShowNoListView">
			<text class="no-file-title global-title-color">{{noStampTitle}}</text>
			<text class="no-file-content global-content-color">{{noStampContent}}</text>
		</view>
		<scroll-view scroll-y nowrap class="scroll-wrapper">
			<view class="list-view">
				<view v-for="(stampData, index) in stampArray" :key="index" class="cell" :data-item="stampData" :data-index="index"
				 @tap="handleShowOperateToolsFun">
					<view class="badge" v-if="stampData.isDefault == 1">默认</view>
					<image :src="stampData.url" :data-index="index" mode="aspectFit" class="cell-stamp-image"></image>
				</view>
				<view style="width:100%;height:80rpx"></view>
			</view>
		</scroll-view>

		<view class="uploadButton" v-if="isShowAdd" @tap.stop="addStampAction">
			<text class="iconfont iconadd"></text>
		</view>

		<view :class="'user-dialog ' + ( showDialog ? 'user-dialog--show' : '' )">
			<view class="user-dialog__mask" @tap="toggleDialog"></view>
			<view class="user-dialog__container">
				<view class="userSwitch">
					切换身份
				</view>
				<scroll-view scroll-y nowrap style="height:540rpx">
					<!--  #ifdef  H5 -->
					<view v-for="(item, index) in userList" :key="index" class="userList" @tap="switchUser(item)">
						<!--  #endif -->

						<!--  #ifndef  H5 -->
						<view v-for="(item, index) in userList" :key="index" class="userList" @tap="switchUser" :data-item="item"
						 :data-index="index">
							<!--  #endif -->
							<image src="https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/user.png" v-if="item.authStatus"
							 class="userList-icon"></image>
							<image src="https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/person.png" v-if="item.auth==0||item.auth==1"
							 class="userList-icon"></image>
							<view class="userList-name">
								{{item.companyName ? item.companyName : ''}}{{item.name}}
							</view>
							<view class="userList-state" v-if="item.authStatus" :style="'background:' + (item.authStatus== 1 ? 'rgba(62,180,168,0.1)' :item.authStatus== 2 ? '#FDF0E5':'#F4F4F4') + '; color:' + (item.authStatus== 1? '#3EB4A8' : item.authStatus== 2 ? '#ED6C00':'#919191')">
								{{item.authStatus=='1'?"已认证":item.authStatus== 2?"认证中":"未认证"}}</view>
							<view class="userList-state" v-if="item.auth==0||item.auth==1" :style="'background:' + (item.auth== 1 ? 'rgba(62,180,168,0.1)' : '#F4F4F4') + '; color:' + (item.auth== 1? '#3EB4A8' : '#919191')">
								{{item.auth=='1'?"已认证":"未认证"}}</view>
						</view>
				</scroll-view>
				<view class="scroll-under">
				</view>
			</view>
		</view>
		<slider-picker ref="sliderPicker" :sliderList="list" @selectWay="handleSelectItemFun"></slider-picker>
	</view>
</template>

<script>
	import {
		get,
		put,
		post,
		postBody
	} from '../../../api/request.js'
	import {
		person_painted_list,
		company_painted_list,
		delete_painted_url
	} from '../../../api/seal.js'
	import {
		get_user_info,
		companyList
	} from '../../../api/account.js'
	var app = getApp();
	import sliderPicker from "../../../components/sliderPicker/sliderPicker";

	export default {
		data() {
			return {
				isShowAdd: true,
				showDialog: false,
				stampArray: [],
				noStampTitle: '暂无印章',
				noStampContent: '点击下方按钮生成您的印章',
				isShowListView: true,
				isShowNoListView: false,
				createSignImageText: '',
				defaultStamp: null,
				isSelect: false,
				stampLeft: -1,
				stampTop: -1,
				currentPage: -1,
				currentUser: '',
				selectedItem: '',
				userList: [],
				userList1: [],
				userList2: [],
				list: [{
					label: '设为默认',
					value: 'default'
				}, {
					label: '删除印章',
					value: 'delete'
				}],
				// 上拉菜单列表
				curItem: null,
				// 当前操作项
				curIndex: -1,
				// 当前操作索引
				currentStorage: null
			};
		},

		components: {
			sliderPicker
		},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			if (options.stampLeft != null) {
				this.setData({
					stampLeft: options.stampLeft,
					stampTop: options.stampTop,
					currentPage: options.currentPage
				});
			}

			var isSelect = options.style == 'select' ? true : false;
			this.setData({
				isSelect: isSelect
			});
		},

		onShow() {
			this.setData({
				isShowAdd: true,
				userList2: []
			});
			get({
				url: get_user_info,
				success: res => {
					this.userList2.push(res);
					this.setData({
						currentUser: res.name,
						selectedItem: res
					});
					this.requestStamp();
				}
			});
		},

		onUnload: function() {},

		onShareAppMessage() {},

		methods: {
			/**
			 * @name 获取印章列表
			 */
			requestStamp: function() {
				var reuqestUrl = '';
				var createSignImageText = '';

				if (this.selectedItem.userType == 1) {
					//个人
					console.log("手绘");
					reuqestUrl = person_painted_list;
					createSignImageText = '创建手绘签名';
				} else {
					//企业
					reuqestUrl = company_painted_list;
					createSignImageText = '创建企业公章';
				}

				this.setData({
					createSignImageText: createSignImageText
				});

				const _this = this;
				const userToken = app.globalData.getUserToken();
				const header = {
					"token": userToken,
					"Content-Type": "application/json"
				};

				if (this.selectedItem.companyId) {
					header.company_id = this.selectedItem.companyId;
				}
				console.log(header, this.selectedItem)

				postBody({
					url: reuqestUrl,
					header: header,
					params: {},
					success: function(data) {
						console.log(data);

						for (var i = 0; i < data.length; i++) {
							if (data[i].isDefault == 1) {
								_this.setData({
									defaultStamp: data[i]
								});
							}
						}

						_this.updateData(data);
					},
					fail: function(msg) {
						setTimeout(() => {
							uni.showToast({
								icon: 'none',
								title: msg
							});
						}, 50);
					},
					complete: function() {}
				});
			},

			/**
			 * 更修数据源
			 */
			updateData: function(dataArray) {
				var isShowListView = dataArray.length == 0 ? false : true;
				this.setData({
					stampArray: dataArray,
					isShowListView: isShowListView,
					isShowNoListView: !isShowListView
				});
			},


			addStampAction: function() {
				if (this.selectedItem.userType == '1') {
					uni.navigateTo({
						url: 'add/addStamp'
					});
				} else {
					uni.showModal({
						title: '请到电脑端添加公司印章',
						confirmText: '取消',
						showCancel: false
					});
				}
			},
			toggleDialog: function() {
				this.setData({
					showDialog: !this.showDialog
				});
			},
			chooseCompany: function() {
				var _this = this;

				_this.setData({
					userList1: []
				});

				get({
					url: companyList,
					success: function(res) {
						console.log(res);
						res.data.forEach(item => {
							if (item.authStatus == 1) {
								_this.userList1.push(item);
							}
						});

						_this.setData({
							userList: _this.userList2.concat(_this.userList1)
						});
					}
				});
				this.setData({
					showDialog: !this.showDialog
				});
			},

			// #ifdef  H5
			switchUser: function(item) {
				this.setData({
					selectedItem: item,
					isShowAdd: !item.companyId ? true : false,
					currentUser: item.companyId ? item.companyName : item.name,
					showDialog: !this.showDialog
				});
				this.requestStamp();
			},
			// #endif

			// #ifndef  H5
			switchUser: function(e) {
				const item = e.currentTarget.dataset.item;
				this.setData({
					selectedItem: item,
					isShowAdd: !item.companyId ? true : false,
					currentUser: item.companyId ? item.companyName : item.name,
					showDialog: !this.showDialog
				});
				this.requestStamp();
			},
			// #endif

			/**
			 * @name 展示上拉菜单
			 */
			handleShowOperateToolsFun(e) {
				if (this.selectedItem.companyId && !this.selectedItem.roleTypes.includes('1') && !this.selectedItem.roleTypes.includes(
						'2')) return;
				let list = [{
					label: '设为默认',
					value: 'default'
				}, {
					label: '删除印章',
					value: 'delete'
				}];
				if (e.currentTarget.dataset.item.status != 2 || e.currentTarget.dataset.item.isDefault == 1) list = list.slice(2);
				this.setData({
					list: list
				});
				this.setData({
					curItem: e.currentTarget.dataset.item,
					curIndex: e.currentTarget.dataset.index
				});
				this.$refs.sliderPicker.show();
			},

			/**
			 * @name 下拉菜单操作
			 */
			handleSelectItemFun(e) {
				switch (e.detail) {
					case 0:
						if (this.curItem.status == 2) {
							this.setDefaultSealFun();
						} else {
							this.isShowAdd && this.deleteStamp();
						}

						break;

					case 1:
						if (this.curItem.status == 2) {
							this.isShowAdd && this.deleteStamp();
						}

						break;

					default:
						break;
				}

				this.$refs.sliderPicker.hide();
			},

			/**
			 * @name 设置为默认印章
			 */
			setDefaultSealFun() {
				uni.showLoading({
					title: '加载中'
				});
				put({
					url: set_default_seal + '/' + this.curItem.signImageId,
					success: () => {
						this.requestStamp();
						setTimeout(() => {
							uni.showToast({
								icon: 'none',
								title: '设置成功'
							});
						}, 50);
					},
					fail: err => {
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
			 * @name 删除印章
			 */
			deleteStamp: function() {
				if (this.curItem.isDefault == 1) {
					setTimeout(() => {
						uni.showToast({
							icon: 'none',
							title: '默认印章不能删除'
						});
					}, 50);
					return false;
				}

				uni.showModal({
					title: '提示',
					content: '确认删除印章吗？',
					success: res => {
						if (res.confirm) {
							uni.showLoading({
								title: '删除中...'
							});
							let param = {
								signImageId: this.curItem.signImageId
							};
							var userToken = app.globalData.getUserToken();
							let header = {
								"token": userToken,
								"Content-Type": "application/json"
							};
							post({
								url: delete_painted_url + '/99?signImageId=' + param.signImageId,
								params: param,
								header: header,
								success: () => {
									var dataArray = this.stampArray;
									dataArray.splice(this.curIndex, 1);
									this.updateData(dataArray);
									uni.hideLoading();
									setTimeout(() => {
										uni.showToast({
											icon: 'none',
											title: '删除成功'
										});
									}, 50);
								},
								fail: err => {
									setTimeout(() => {
										uni.showToast({
											icon: 'none',
											title: err
										});
									}, 50);
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	};
</script>
<style>
	@import "./stampManager.css";
</style>
