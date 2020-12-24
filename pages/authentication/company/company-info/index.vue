<template>
<view class="company-info">
    <view class="type-select-header">
        <text class="type-text">企业基本信息</text>
    </view>
    <view class="upload-container">
        <view class="title">
            多合一营业执照
            <view class="line"></view>
        </view>
        <view class="upload-bottom">
            <view class="left" @tap.stop="chooseImage">
                <image :src="businessImage" v-if="businessImage"></image>
                <text class="one one-add" v-if="!businessImage"></text>
            </view>
            <view class="right">
                <view style="tip">1.请确保营业执照勿遮挡、缺边</view>
                <view style="tip">2.请确保图片中所有字体清晰可见</view>
                <view style="tip">3.图片大小不超过8M</view>
            </view>
        </view>
    </view>
    <view class="base-info-container">
        <view class="field-item">
            <label class="name">企业类型</label>
            <picker @change="bindPickerChange" range-key="label" :value="companyTypeIndex" :range="companyTypes">
                <label class="value-select">
                    {{companyTypes[companyTypeIndex].label}}
                    <text class="one one-arrow-down"></text>
                </label>
            </picker>

        </view>
        <view class="field-item">
            <label class="name">企业名称</label>
            <input class="value-input" placeholder="请输入" @input="bindKeyInput" :value="companyName" data-field="companyName"></input>
        </view>
        <view class="field-item">
            <label class="name">统一社会信用代码</label>
            <input class="value-input" placeholder="请输入" :value="creditCode" @input="bindKeyInput" data-field="creditCode"></input>
        </view>
        <view class="field-item">
            <label class="name">法定代表人姓名</label>
            <input class="value-input" placeholder="请输入" :value="legalPersonName" @input="bindKeyInput" data-field="legalPersonName"></input>
        </view>
    </view>

    <view class="bottom-btn-container">
        <text class="back" @tap.stop="back">返回</text>
        <text class="next" @tap.stop="next" :style="'background:' + (ishighLight ? '#464646' : '#B7B7B7')">下一步</text>
    </view>

</view>
</template>

<script>
// authentication/auth-type/index.js
import { postBody, upload } from '../../../../api/request.js'
import { businessLicenseUpload, companyAuth, companyHandle } from '../../../../api/authen.js'
import { create_seal, upload_company_seal } from '../../../../api/seal.js'
const FXQ = require("../../../../utils/FXQ");

export default {
  data() {
    return {
      ishighLight: false,
      businessImage: null,
      companyName: '',
      companyId: '',
      creditCode: '',
      companyTypeIndex: 0,
      legalPersonName: '',
      companyTypes: [{
        label: '企业',
        value: 1
      }, {
        label: '个体工商户',
        value: 2
      }, {
        label: '律所',
        value: 6
      }, {
        label: '其他组织',
        value: 5
      }],
      query: "",
      field: ""
    };
  },

  components: {},
  props: {},

  onLoad(option) {
    this.setData({
      query: option
    });
    console.log(option);
  },

  onShow() {
    if (this.query.type == 'legent') {
      this.setData({
        companyTypes: [{
          label: '企业',
          value: 1
        }, {
          label: '个体工商户',
          value: 2
        }]
      });
    } else {
      this.setData({
        companyTypes: [{
          label: '企业',
          value: 1
        }, {
          label: '个体工商户',
          value: 2
        }, {
          label: '律所',
          value: 6
        }, {
          label: '其他组织',
          value: 5
        }]
      });
    }
  },

  onShareAppMessage() {},

  methods: {
    uploadImage(tmpUrl) {
      let that = this;
      uni.showLoading({
        title: '识别中...'
      });
      upload({
        url: businessLicenseUpload,
        filePath: tmpUrl,
        key: 'businessImage',
        success: function (res) {
          uni.hideLoading();
          console.log(res);
          that.setData(res);
          const {
            companyName,
            creditCode,
            legalPersonName,
            businessImage
          } = that;

          if (companyName == undefined || companyName == '' || creditCode == undefined || creditCode == '' || legalPersonName == '' || legalPersonName == undefined || businessImage == null) {
            console.log("come in");
            that.setData({
              ishighLight: false
            });
          } else {
            that.setData({
              ishighLight: true
            });
          }
        },
        fail: function (res) {
          uni.hideLoading();
          setTimeout(() => {
            uni.showToast({
              title: res,
              icon: 'none'
            });
          }, 50);
        }
      });
    },

    bindPickerChange(e) {
      this.setData({
        companyTypeIndex: e.detail.value
      });
    },

    chooseImage() {
      const that = this;
      uni.chooseImage({
        count: 1,
        // 默认9
        sizeType: ['compressed'],
        // 可以指定是原图还是压缩图，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          let tempFilePaths = res.tempFilePaths;
          that.setData({
            businessImage: tempFilePaths[0]
          });
          that.uploadImage(tempFilePaths[0]);
        }
      });
    },

    next() {
      const {
        companyTypeIndex,
        companyName,
        creditCode,
        legalPersonName,
        query
      } = this;
      const currentUser = uni.getStorageSync('currentUser');
      let mgs = [];

      if (!companyName) {
        mgs.push('企业名称');
      }

      if (!creditCode) {
        mgs.push('统一社会信用代码');
      }

      if (!legalPersonName) {
        mgs.push('法定代表人姓名');
      }

      if (!/^9+/.test(creditCode)) {
        setTimeout(() => {
          uni.showToast({
            icon: 'none',
            title: '法人认证统一社会信用代码需为9开头，非9请走代理人认证'
          });
        }, 50);
        return false;
      }

      if (mgs.length) {
        setTimeout(() => {
          uni.showToast({
            icon: 'none',
            title: mgs.join('、') + '不能为空'
          });
        }, 50);
        return false;
      }

      let params = {
        companyType: companyTypeIndex + 1,
        companyName,
        creditCode,
        legalPersonName,
        companyId: currentUser.companyId || query.companyId,
        authChannel: 2
      };
      uni.showLoading({
        title: '加载中'
      }); // 法人

      if (query.type == 'legent') {
        postBody({
          url: companyAuth,
          params,
          success: () => {
            const newUser = Object.assign({}, currentUser, params);
            this.getSealBase64Fun();
            uni.hideLoading();
            uni.setStorageSync('currentUser', newUser);
            uni.navigateTo({
              url: '/pages/authentication/company/auth-result/index?result=s'
            });
          },
          fail: err => {
            uni.hideLoading();
            setTimeout(() => {
              uni.showToast({
                title: err,
                icon: 'none'
              });
            }, 50);
          }
        });
      } else {
        postBody({
          url: companyHandle,
          params,
          success: () => {
            uni.hideLoading();
            let currentUser = uni.getStorageSync('currentUser');
            currentUser.authStatus = 1;
            uni.setStorageSync('currentUser', currentUser);
            uni.setStorageSync('companyInfoApply', params);
            uni.navigateTo({
              url: '/pages/authentication/company/company-pay-info/index'
            });
          },
          fail: () => {
            uni.hideLoading();
            uni.navigateTo({
              url: '/pages/authentication/company/auth-result/index?result=f'
            });
          }
        });
      }
    },

    bindKeyInput(e) {
      const {
        field
      } = e.target.dataset;
      const {
        value
      } = e.detail;
      this.setData({
        [field]: value
      });
      const {
        companyName,
        creditCode,
        legalPersonName,
        businessImage
      } = this;

      if (companyName == undefined || companyName == '' || creditCode == undefined || creditCode == '' || legalPersonName == '' || legalPersonName == undefined || businessImage == null) {
        this.setData({
          ishighLight: false
        });
      } else {
        this.setData({
          ishighLight: true
        });
      }
    },

    back() {
      uni.navigateBack();
    },

    /**
     * @name 生成base
     */
    getSealBase64Fun() {
      FXQ.FXQ.companySeal(this.company.companyName || '公司名字', 0, 0, '', '  ', this.createSealFun);
    },

    /**
     * @name 生成印章
     */
    createSealFun(base64) {
      postBody({
        url: create_seal,
        params: {
          base64String: base64
        },
        success: res => {
          this.uploadCompanySealFun(res);
        },
        fail: err => {
          console.log(err);
        }
      });
    },

    /**
     * @name 上传印章
     * @param {*} url path
     */
    uploadCompanySealFun(data) {
      let options = {
        name: "公司印章",
        url: data.url,
        auto: true
      };
      postBody({
        url: upload_company_seal + '?auto=' + true,
        params: options,
        success: () => {
          console.log('印章制作完成');
        },
        fail: error => {
          uni.hideLoading();
          setTimeout(() => {
            uni.showToast({
              icon: 'none',
              title: error
            });
          }, 50);
        }
      });
    }

  }
};
</script>
<style>
@import "./index.css";
</style>