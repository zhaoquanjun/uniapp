<template>
<!--pages/contract/sign/next/personLink/personLink.wxml-->
<view class="pageContent">
	<view class="item">
		<view class="item-title">输入信息</view>
		<view class="item-Content">
			<view class="message">
				<text>姓名</text>
				<input type="text" :value="userName" @input="bindKeyInput" @blur="handleBlurFun" placeholder="请输入" data-field="userName"></input>
			</view>
			<view :class="'search-result--list ' + (searchResultList.length > 0 ? 'show' : '')">
				<view v-for="(item, index) in searchResultList" :key="index" class="list-item" @tap="handleSelectDataFun" :data-name="item.name" :data-phone="item.phone">{{item.name}} - {{item.phone}}</view>
			</view>
		</view>
		<view class="item-Content">
			<view class="message">
				<text>手机号</text>
				<input type="text" :value="userPhone" maxlength="11" @input="bindKeyInput" placeholder="请输入" data-field="userPhone"></input>
			</view>
		</view>
	</view>

<view class="bottom-btn-container">
	<text class="back" @tap.stop="back">返回</text>
  <text class="next" v-if="!ishighLight" style="background:#999999">确定</text>
  <text class="next" @tap.stop="next" v-if="ishighLight" style="background:#464646">确定</text>
</view>
</view>
</template>

<script>
import { get } from '../../../../../api/request.js'
import { get_signal_sign_person_list } from '../../../../../api/contract.js'
import { person_message } from '../../../../../api/account.js'

export default {
  data() {
    return {
      ishighLight: false,
      checked1: false,
      checked2: false,
      userName: '',
      userPhone: '',
      searchResultList: [],
      timer: null
    };
  },

  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    back() {
      uni.navigateBack({});
    },

    hasRepeatPserson() {
      let person = uni.getStorageSync('linkMans');
      let flag = true;

      if (person.length > 0) {
        for (var i = 0; i < person.length; i++) {
          const item = person[i];

          if (this.userName == item.userName && item.userPhone == this.userPhone && !this.companyName) {
            flag = false;
          }
        }
      }

      return flag;
    },

    next() {
      if (!this.hasRepeatPserson()) {
        setTimeout(() => {
          uni.showToast({
            title: '你已添加该签署方信息',
            icon: 'none'
          });
        }, 50);
        return false;
      }

      if (!/^1[345789]\d{9}$/.test(this.userPhone)) {
        setTimeout(() => {
          uni.showToast({
            title: '请输入正确的账号',
            icon: 'none'
          });
        }, 50);
        return false;
      }

      var that = this;
      let promise1 = new Promise(function (resolve, reject) {
        get({
          url: person_message,
          params: {
            "name": that.userName,
            "phone": that.userPhone
          },
          success: function (res) {
            resolve(res);
          }
        });
      });
      Promise.all([promise1]).then(res => {
        let isPersonAuth = false;
        let sealsArr = [];
        let sealStr = '';

        if (res[0] == '1') {
          isPersonAuth = true;
        }

        if (this.checked1 == true) {
          sealsArr.push(1);
          sealStr += '手绘章，';
        }

        if (this.checked2 == true) {
          sealsArr.push(4);
          sealStr += '个人模版章';
        }

        const item = {
          userName: this.userName,
          userPhone: this.userPhone,
          processType: 4,
          sealName: sealStr,
          sealType: sealsArr.join(),
          relationType: 1,
          status: 1,
          isPersonAuth: isPersonAuth
        };
        let links = uni.getStorageSync('linkMans') ? uni.getStorageSync('linkMans') : [];
        links.push(item);
        uni.setStorageSync('linkMans', links);
        uni.redirectTo({
          url: '/pages/contract/sign/next/next'
        });
      });
    },

    bindKeyInput(e) {
      if (e.target.dataset.field == 'userName') {
        this.setData({
          userName: e.detail.value
        });

        if (e.detail.value) {
          this.getContactList(e.detail.value);
        } else {
          this.setData({
            searchResultList: []
          });
        }
      } else {
        this.setData({
          userPhone: e.detail.value.replace(/[^\d.]/g, "")
        });
      }

      this.setData({
        ishighLight: this.setCanNextFun()
      });
    },

    getContactList(name) {
      if (this.timer) clearTimeout(this.timer);
      this.setData({
        timer: setTimeout(() => {
          get({
            url: get_signal_sign_person_list + '?contactType=1&name=' + name,
            success: res => {
              console.log(res);
              this.setData({
                searchResultList: res
              });
              console.log(this.searchResultList);
            },
            fail: err => {
              console.log(err);
            }
          });
        }, 500)
      });
    },

    handleSelectDataFun(e) {
      const name = e.target.dataset.name;
      const phone = e.target.dataset.phone;
      setTimeout(() => {
        this.setData({
          userName: name,
          userPhone: phone,
          searchResultList: []
        });
      }, 200);
      setTimeout(() => {
        this.setData({
          ishighLight: this.setCanNextFun()
        });
      }, 300);
    },

    handleBlurFun() {
      setTimeout(() => {
        this.setData({
          searchResultList: []
        });
      }, 200);
    },

    setCanNextFun() {
      let flag = false;
      if (this.userPhone != '' && this.userName != '') flag = true;
      return flag;
    }

  }
};
</script>
<style>
@import "./personLink.css";
</style>