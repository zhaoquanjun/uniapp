<template>
	<view class="project-members--page">
		<view class="creator-area" v-if="creator">
			<view class="title">创建者</view>
			<view class="item" v-for="(item, index) in creator" :key="index">
				<view class="wrapper">
					<view class="avator">
						<image src="../../../static/images/pm/av.png" mode="aspectFit"></image>
					</view>
					<view class="info">
						<text class="name">{{ item.userName }}</text>
						<text class="phone">{{ item.phone }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="members-area" v-if="members.length > 0">
			<view class="title">成员</view>
			<view class="item" v-for="(item, index) in members" :key="index">
				<view class="wrapper">
					<view class="avator">
						<image src="../../../static/images/pm/av.png" mode="aspectFit"></image>
					</view>
					<view class="info">
						<text class="name">{{ item.userName }}</text>
						<text class="phone">{{ item.phone }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				creator: null,
				members: []
			}
		},
		onShow() {
			console.log(1111)
			this._getMembers()
		},
		methods: {
			_getMembers() {
				// #ifdef  H5
				const members = JSON.parse(localStorage.getItem('projectMembers'))
				// #endif
				
				// #ifndef  H5
				const members = uni.getStorageSync('projectMembers')
				// #endif
				
				this.setData({
					creator: members.filter(item => {
						return item.creator == 1
					}),
					members: members.filter(item => {
						return item.creator !== 1
					})
				})
				console.log(this.creator, this.members, 222)
			}
		}
	}
</script>

<style>
	@import './index.css'
</style>
