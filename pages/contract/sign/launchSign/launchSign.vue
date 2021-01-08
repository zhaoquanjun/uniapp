<template>
<view>
<view class="pageContent">
    <view class="pageHeader">
        <view class="theme-title">{{themeTitle}}</view>
        <view class="input-name-box">
            <textarea name="content" maxlength="100" @input="textInput" placeholder="请不要包括特殊字符，且长度不要超过100字">
          </textarea>
            <text class="input-tip">{{contractTitle.length}}/100</text>
        </view>
    </view>

    <view class="file-content">
        <text class="file-title">{{fileTitle}}</text>
        <view class="file-view" @tap.stop="checkFileAction">
            <image src="https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/file.png" class="file-image"></image>
            <text class="file-name text-apostrophe">{{fileName}}</text>
            <text class="file-format text-apostrophe"></text>
        </view>
    </view>

    <view class="file-signer">
        <text class="linkman-title">{{linkmanTitle}}</text>
        <view class="linkman-add-sponsor">
            <text class="sponsor">{{sponsor}}</text>
        </view>
    </view>
    <button class="nextButton" style="background-color:#464646" v-if="ishighLight" @tap.stop="launchSignAction">{{signText}}</button>
    <button class="nextButton" v-if="!ishighLight" style="background:#B7B7B7">{{signText}}</button>
</view>

<view :class="'user-dialog ' + ( showDialog ? 'user-dialog--show' : '' )">
    <view class="user-dialog__mask" @tap="toggleDialog"></view>
    <view class="user-dialog__container">
        <view class="userSwitch">
            切换身份
        </view>
        <scroll-view scroll-y nowrap style="height:540rpx">
            <view v-for="(item, index) in companyList" :key="index" class="userList" @tap="chooseSponsor" :data-item="item" :data-index="index">
                <image src="https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/account/user.png" class="userList-icon"></image>
                <view class="userList-name">
                    {{item.companyName}}
                </view>
            </view>
        </scroll-view>
        <view class="scroll-under">
        </view>
    </view>
</view>
</view>
</template>

<script>
import { get } from '../../../../api/request.js'
import { companyList } from '../../../../api/account.js'
require("../../../../prototype/prototype.js");
let utils = require("../../../../utils/utils.js");
var app = getApp();

export default {
  data() {
    return {
      showDialog: false,
      ishighLight: false,
      contractTitle: '',
      contractInfo: null,
      sponsor: '',
      linkmans: [],
      themeTitle: "合同主题",
      theme: '',
      fileTitle: '合同文件',
      fileName: '',
      url: '',
      linkmanTitle: '发起方',
      signText: '下一步',
      isScanOpen: false,
      companyList: '',
      currentUser: '',
      coverUrl: "",
      backfileName: "",
      filePath: ""
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData);
    let userName = app.globalData.userName;
    this.setData({
      fileName: options.fileName,
      url: options.url,
      coverUrl: options.coverUrl,
      backfileName: options.backfileName
    });
    let currentUser = uni.getStorageSync('currentUser');

    if (currentUser) {
      this.setData({
        currentUser: currentUser
      });
    } else {
      this.setData({
        sponsor: userName
      });
    }

    if (currentUser.name) {
      this.setData({
        sponsor: currentUser.name
      });
    }

    if (currentUser.companyName) {
      this.setData({
        sponsor: currentUser.companyName
      });
    }
  },
  onShow: function () {},

  onShareAppMessage() {},

  methods: {
    chooseSponsor: function () {
      var _this = this;

      get({
        url: companyList,
        success: function (res) {
          let authcompanyList = [];
          res.data.forEach(function (item) {
            if (item.authStatus == 1) authcompanyList.push(item);
          });

          _this.setData({
            companyList: authcompanyList
          });
        }
      });
      this.setData({
        showDialog: !this.showDialog
      });
    },
    chooseCompany: function (e) {
      var temp = e.currentTarget.dataset.item;
      console.log(temp);
      this.setData({
        sponsor: temp.companyName,
        showDialog: false
      });
    },
    toggleDialog: function () {
      this.setData({
        showDialog: !this.showDialog
      });
    },
    // 文字输入函数
    textInput: function (event) {
      let value = event.detail.value;
      this.setData({
        contractTitle: value
      });
      this.getHighLight();
    },
    setDataFun: function (fileInfo) {
      this.setData({
        fileName: fileInfo.fileName,
        filePath: fileInfo.url
      });
    },
    setLinkmanFun: function (linkmans) {
      this.setData({
        linkmans: linkmans
      });
    },
    bindKeyInput: function (e) {
      this.setData({
        theme: e.detail.value
      });
    },

    /**
     *打开文件
     */
    checkFileAction: function () {
      uni.showLoading({
        title: '下载中...'
      });
      var url = this.url;
      this.openPdf(url);
    },
    // 打开pdf文件
    openPdf: function (url) {
      uni.downloadFile({
        url: url,
        success: function (res) {
          uni.hideLoading();
          var filePath = res.tempFilePath;
          uni.openDocument({
            filePath: filePath,
            fileType: 'pdf',
            showMenu: true,
            success: function (res) {},
            fail: function (res) {
              console.log(res);
            },
            complete: function (res) {
              console.log(res);
            }
          });
        },
        fail: function (res) {
          uni.hideLoading();
          console.log(res);
        },
        complete: function (res) {}
      });
    },
    launchSignAction: function () {
      const contractData = {
        contractTitle: this.contractTitle,
        fileName: this.fileName,
        url: this.url,
        coverUrl: this.coverUrl
      };
      uni.setStorageSync('contractData', contractData);
      uni.navigateTo({
        url: '/pages/contract/sign/next/next'
      });
    },
    // 提交存证是否高亮函数
    getHighLight: function () {
      if (this.contractTitle && this.fileName) {
        this.setData({
          ishighLight: true
        });
      } else {
        this.setData({
          ishighLight: false
        });
      }
    }
  }
};
</script>
<style>
@import "./launchSign.css";
</style>