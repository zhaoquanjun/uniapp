<template>
	<view class="project-detail--page" v-if="projectDetail">
		<view class="project-info section">
			<view class="title">{{ projectDetail.name }}</view>
			<view class="time-status">
				<text class="'status ' + (projectDetail.status == 1 ? 'going' : projectDetail.status == 2 ? 'complete' : '')">{{ projectDetail.status == 1 ? '进行中' : projectDetail.status == 2 ? '已完成' : '' }}</text>
				<text class="time">创建时间：{{ projectDetail.gmtCreate ? formatTimeConvert(projectDetail.gmtCreate, 1) : '' }}</text>
			</view>
			<view class="desc">
				<view class="words" v-if="projectDetail.description" @tap="_handleAddDesc">{{ projectDetail.description }}</view>
				<view class="empty" v-else @tap="_handleAddDesc">点击添加项目描述 <text class="iconfont "></text></view>
			</view>
		</view>
		<view class="project-members section" @tap="_handleViewMembers">
			<text class="text">项目成员</text>
			<text class="iconfont iconright-arrow"></text>
		</view>
		<view class="evidence-list section">
			<view class="title">证据列表</view>
			<view v-if="evidences.length > 0">
				<view class="item" v-for="(item, index) in evidences" :key="index">
					<view class="content">
						<view class="title"></view>
						<view class="time"></view>
					</view>
					<view class="more">
						<text class="iconfont iconmore"></text>
					</view>
				</view>
			</view>
			<view class="ev-empty" v-else>暂无关联证据</view>
		</view>
	</view>
</template>

<script>
	import {
		get
	} from '../../../api/request.js'

	import {
		get_project_detail,
		get_contact_evidence
	} from '../../../api/evidence.js'

	export default {
		data() {
			return {
				projectId: '',
				projectDetail: null,
				evidences: [],
				pageIndex: 1,
				pageSize: 10,
				total: 0
			}
		},
		onLoad(options) {
			this.setData({
				projectId: '2526ef3e651e11eb8ab27cd30aeb1494' //options.id
			})
		},
		onShow() {
			this._getProjectDetail()
			this._getContactEvidence()
		},
		methods: {
			/**
			 * @name 获取项目详情
			 */
			_getProjectDetail() {
				get({
					url: get_project_detail,
					params: {
						projectId: this.projectId
					},
					success: res => {
						console.log(res)
						this.setData({
							projectDetail: res
						})
					},
					fail: err => {
						setTimeout(() => {
							uni.showToast({
								icon: 'none',
								title: err
							})
						})
					}
				})
			},
			/**
			 * @name 获取项目关联证据
			 */
			_getContactEvidence() {
				get({
					url: get_contact_evidence,
					params: {
						projectId: this.projectId,
						pageIndex: this.pageIndex,
						pageSize: this.pageSize
					},
					success: res => {
						this.setData({
							evidences: res.data,
							total: res.totalCount
						})
					},
					fail: err => {
						setTimeout(() => {
							uni.showToast({
								icon: 'none',
								title: err
							})
						}, 50)
					}
				})
			},
			/**
			 * @name 添加项目描述
			 */
			_handleAddDesc() {
				if (this.projectDetail && this.projectDetail.description) {
					// #ifdef  H5
					localStorage.setItem('projectDesc', this.projectDetail.description)
					// #endif

					// #ifndef  H5
					uni.setStorageSync('projectDesc', this.projectDetail.description)
					// #endif
				}

				uni.navigateTo({
					url: '/pages/evidence/projectDetail/addDesc/index?id=' + this.projectId
				})
			},
			/**
			 * @name 查看成员
			 */
			_handleViewMembers() {
				if (this.projectDetail && this.projectDetail.projectUsers) {
					// #ifdef  H5
					localStorage.setItem('projectMembers', JSON.stringify(this.projectDetail.projectUsers))
					// #endif

					// #ifndef  H5
					uni.setStorageSync('projectMembers', this.projectDetail.projectUsers)
					// #endif
				}
				uni.navigateTo({
					url: '/pages/evidence/projectMembers/index'
				})

			},
			/**
			 * @name 时间格式化
			 * @param {*} timestamp 
			 * @param {*} num 
			 */
			formatTimeConvert(timestamp, num) {
				timestamp = timestamp + '';
				timestamp = timestamp.length == 10 ? timestamp * 1000 : timestamp;
				var date = new Date(Number(timestamp));
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				m = m < 10 ? '0' + m : m;
				var d = date.getDate();
				d = d < 10 ? '0' + d : d;
				var h = date.getHours();
				h = h < 10 ? '0' + h : h;
				var minute = date.getMinutes();
				var second = date.getSeconds();
				minute = minute < 10 ? '0' + minute : minute;
				second = second < 10 ? '0' + second : second;

				if (num == 0) {
					return y + '年' + m + '月' + d + '日';
				} else {
					return y + '年' + m + '月' + d + '日' + ' ' + h + ':' + minute + ':' + second;
				}
			},
		}
	}
</script>

<style>
	@import './index.css'
</style>
