<template>
	<view>
		<!--components/verifycode/verifycode.wxml-->


		<view class="wx-verify-bg" :hidden="!isShow">
			<view class="wx-mask"></view>
			<text class="verify-title">{{title}}</text>
			<text class="verify-content">{{content}}{{phone}}</text>
			<view class="verify-code-view" @tap.stop="openKeyboard">
				<view v-for="(code, index) in codes" :key="index" :class="'verify-input-view ' + (index==0?'verify-input-view-first':'')">
					<text class="verify-text">{{code}}</text>
				</view>
				<input class="key-input" type="number" adjust-position="false" confirm-type="done" :focus="isFocus" :value="inputValue"
				 @input="listenKeyInput"></input>
			</view>
			<text class="again-send-class" :style="'color:' + againSendTextColor" @tap.stop="againSendAction">{{againSendText}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				isFocus: false,
				title: '请输入验证码',
				content: '已发送到手机号:',
				againSendText: '重新发送',
				phone: '',
				codes: ["", "", "", "", "", ""],
				inputValue: '',
				timeCount: 60,
				againSendTextColor: '#FF9F3D'
			};
		},

		components: {},
		props: {},
		options: {
			multipleSlots: true // 在组件定义时的选项中启用多slot支持

		},
		methods: {
			//展示
			showView({
				userPhone,
				inputSuccess,
				againSend
			}) {
				this.againSend = againSend;
				this.inputSuccess = inputSuccess;
				var mPhone = userPhone.substr(0, 3) + '****' + userPhone.substr(7);
				this.setData({
					isShow: !this.isShow,
					phone: mPhone,
					isFocus: true,
					codes: ["", "", "", "", "", ""]
				});
			},

			closeView() {
				this.setData({
					isShow: !this.isShow,
					isFocus: false,
					inputValue: ''
				});
			},

			/**
			 * 清除验证码
			 */
			clearCode() {
				this.setData({
					codes: ["", "", "", "", "", ""],
					inputValue: ''
				});
			},

			/**
			 * 点击输入框
			 */
			openKeyboard: function() {
				this.setData({
					isFocus: true
				});
			},

			/**
			 * 监听键盘输入
			 */
			listenKeyInput: function(e) {
				var text = e.detail.value;
				var textLength = text.length;
				var codeArray = new Array();

				for (var i = 0; i < (textLength > 6 ? 6 : textLength); i++) {
					var code = text.substr(i, 1);
					codeArray[i] = code;
				}

				for (var i = codeArray.length; i < 6; i++) {
					codeArray.push("");
				}

				this.setData({
					codes: codeArray
				});

				if (textLength > 5) {
					var returnString = text.substr(0, 6);
					this.inputSuccess(returnString);
					return returnString;
				}
			},
			againSendAction: function() {
				if (this.timeCount != 60) {
					return;
				}

				this.againSend();
			},
			sendSuccess: function() {
				//开始计时
				var _this = this;

				this.timer = setInterval(function() {
					var tCount = _this.timeCount;
					tCount = tCount - 1;

					_this.setData({
						againSendText: tCount + '秒后重新发送',
						timeCount: tCount,
						againSendTextColor: '#808080'
					});

					if (tCount == 0) {
						clearInterval(_this.timer);

						_this.setData({
							againSendText: '重新发送',
							timeCount: 60,
							againSendTextColor: '#FF9F3D'
						});
					}
				}, 1000);
			}
		}
	};
</script>
<style>
	@import "./verifycode.css";
</style>
