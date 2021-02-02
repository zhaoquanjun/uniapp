<template>
	<view class="project-members--page">
		<view></view>
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
