<template>
<view class="pageContent">
	<view class="item">
		<view class="item-title">输入信息</view>
		<view class="item-Content">
			<view class="message">
				<text>公司</text>
				<input type="text" :value="companyName" @input="bindKeyInput" @blur="handleBlurFun" placeholder="请输入" data-field="companyName"></input>
			</view>
			<view :class="'search-result--list ' + (searchCompanyResultList.length > 0 ? 'show' : '')">
				<view v-for="(item, index) in searchCompanyResultList" :key="index" class="list-item" @tap="handleSelectCompanyDataFun" :data-name="item.name">{{item.name}}</view>
			</view>
		</view>
		<view class="item-Content">
			<view class="message">
				<text>经办人姓名</text>
				<input type="text" :value="userName" @input="bindKeyInput" @blur="handleBlurFun" placeholder="请输入" data-field="userName"></input>
			</view>
			<view :class="'search-result--list ' + (searchPersonResultList.length > 0 ? 'show' : '')">
				<view v-for="(item, index) in searchPersonResultList" :key="index" class="list-item" @tap="handleSelectPersonDataFun" :data-name="item.name" :data-phone="item.phone">{{item.name}} - {{item.phone}}</view>
			</view>
		</view>
    <view class="item-Content">
			<view class="message">
				<text>经办人手机号</text>
				<input type="text" :value="userPhone" @input="bindKeyInput" maxlength="11" placeholder="请输入手机号" data-field="userPhone"></input>
			</view>
		</view>
	</view>
  	<view class="item">
		<view class="item-title">签署要求</view>
		<view class="item-Content">
			<view class="othermessage" @tap.stop="checkedTap1">
        <radio value="r1" :checked="checked1"></radio>
				<view style="margin-left:8rpx; padding-top:8rpx">企业章</view>
			</view>
		</view>
		<view class="item-Content">
			<view class="othermessage" @tap.stop="checkedTap2">
        <radio value="r2" :checked="checked2"></radio>
				<view style=" margin-left:8rpx; padding-top:8rpx">法人代表章</view>
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
import { company_message, person_message } from '../../../../../api/account.js'

export default {
  data() {
    return {
      ishighLight: false,
      checked1: true,
      checked2: false,
      chapter: [],
      sealType: '',
      companyName: '',
      userName: '',
      userPhone: '',
      companyAuth: '',
      personAuth: '',
      searchPersonResultList: [],
      searchCompanyResultList: [],
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
    checkedTap1: function () {
      var newchecked = this.checked1;
      this.setData({
        "checked1": !newchecked
      });
    },
    checkedTap2: function () {
      var newchecked = this.checked2;
      this.setData({
        "checked2": !newchecked
      });
    },

    getPersonContactList(name) {
      if (this.timer) clearTimeout(this.timer);
      this.setData({
        timer: setTimeout(() => {
          get({
            url: get_signal_sign_person_list + '?contactType=1&name=' + name,
            success: res => {
              this.setData({
                searchPersonResultList: res
              });
            },
            fail: err => {
              console.log(err);
            }
          });
        }, 500)
      });
    },

    getCompanyContactList(name) {
      if (this.timer) clearTimeout(this.timer);
      this.setData({
        timer: setTimeout(() => {
          get({
            url: get_signal_sign_person_list + '?contactType=2&name=' + name,
            success: res => {
              console.log(res);
              this.setData({
                searchCompanyResultList: res
              });
            },
            fail: err => {
              console.log(err);
            }
          });
        }, 500)
      });
    },

    handleSelectPersonDataFun(e) {
      console.log(e);
      const name = e.target.dataset.name;
      const phone = e.target.dataset.phone;
      setTimeout(() => {
        this.setData({
          userName: name,
          userPhone: phone,
          searchPersonResultList: []
        });
      }, 200);
      setTimeout(() => {
        this.setData({
          ishighLight: this.setCanNextFun()
        });
      }, 300);
    },

    handleSelectCompanyDataFun(e) {
      const name = e.target.dataset.name;
      setTimeout(() => {
        this.setData({
          companyName: name,
          searchCompanyResultList: []
        });
      }, 200);
      setTimeout(() => {
        ishighLight: this.setCanNextFun();
      }, 300);
    },

    handleBlurFun() {
      setTimeout(() => {
        this.setData({
          searchPersonResultList: [],
          searchCompanyResultList: []
        });
      }, 200);
    },

    setCanNextFun() {
      let flag = false;
      if (this.companyName != '' && this.userPhone != '' && this.userName != '') flag = true;
      return flag;
    },

    back() {
      uni.navigateBack({});
    },

    hasRepeatCompany() {
      let company = uni.getStorageSync('signMans');
      let flag = true;

      if (company.length > 0) {
        for (var i = 0; i < company.length; i++) {
          const item = company[i];

          if (item.companyName && this.companyName == item.companyName && item.userName == this.userName && item.userPhone == this.userPhone) {
            flag = false;
          }
        }
      }

      return flag;
    },

    next() {
      var that = this;

      if (!this.hasRepeatCompany()) {
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

      let promise1 = new Promise(function (resolve, reject) {
        get({
          url: company_message,
          params: {
            "companyName": that.companyName
          },
          success: function (res) {
            resolve(res);
          }
        });
      });
      let promise2 = new Promise(function (resolve, reject) {
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
      Promise.all([promise1, promise2]).then(res => {
        let isPersonAuth = false;
        let isCompannyAuth = false;
        let sealsArr = [];
        let sealStr = '';

        if (res[1] == '1') {
          isPersonAuth = true;
        }

        if (res[0] == '1') {
          isCompannyAuth = true;
        }

        if (this.checked1 == true) {
          sealsArr.push(2);
          sealStr += '企业章，';
        }

        if (this.checked2 == true) {
          sealsArr.push(3);
          sealStr += '法人代表章';
        }

        const item = {
          companyName: this.companyName,
          userName: this.userName,
          userPhone: this.userPhone,
          processType: 2,
          sealName: sealStr,
          sealType: sealsArr.join(),
          status: 1,
          relationType: '2',
          isCompanyAuth: isCompannyAuth,
          isPersonAuth: isPersonAuth
        };
        let signs = uni.getStorageSync('signMans');
        signs.push(item);
        uni.setStorageSync('signMans', signs);
        uni.redirectTo({
          url: '/pages/contract/sign/next/next'
        });
      });
    },

    bindKeyInput(e) {
      if (e.target.dataset.field == 'companyName') {
        this.setData({
          companyName: e.detail.value
        });

        if (e.detail.value) {
          this.getCompanyContactList(e.detail.value);
        } else {
          this.setData({
            searchCompanyResultList: []
          });
        }
      }

      if (e.target.dataset.field == 'userName') {
        this.setData({
          userName: e.detail.value
        });

        if (e.detail.value) {
          this.getPersonContactList(e.detail.value);
        } else {
          this.setData({
            searchPersonResultList: []
          });
        }
      }

      if (e.target.dataset.field == 'userPhone') {
        this.setData({
          userPhone: e.detail.value.replace(/[^\d.]/g, "")
        });
      }

      this.setData({
        ishighLight: this.setCanNextFun()
      });
    }

  }
};
</script>
<style>
@import "./companySign.css";
</style>