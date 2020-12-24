<template>
<view>
<view class="certificate-detail-box">
 
  <view style="display:flex; justify-content:space-between">
        <view class="certificate-title">存证名称</view>
        <view style="display:flex; justify-content:flex-end;">
        <view :class="'certificate-detail-preview ' + ((dataList.status === 1 ?  '': 'failed' ))" @tap="showSlideMenu" v-if="type == 'sign'">更多操作</view>
         <view :class="'certificate-detail-preview ' + ((dataList.status === 1 ?  '': 'failed' ))" @tap="previewCertificate" v-if="type == 'data'">查看证书</view>
        </view>
</view>
  <view class="certificate-detail-items">
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证名称</view>
      <view class="certificate-detail-item-value">{{dataList.name || ''}}</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证类型</view>
      <view class="certificate-detail-item-value">{{dataList.fileType ==1 ? "文本" : dataList.fileType==2 ? "图片" : dataList.fileType == 3 ? "语音" : dataList.fileType == 4 ?" 视频": "签署存证"}}</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证渠道</view>
      <view class="certificate-detail-item-value">手机端</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证方式</view>
      <view class="certificate-detail-item-value">{{dataList.uploadMethod ==1 ? "上传":"拍摄"}}</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证时间</view>
      <view class="certificate-detail-item-value">{{tools.formatTime(dataList.gmtCreate,'Y-M-D h:m:s')}}</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证状态</view>
      <view class="certificate-detail-item-value">{{dataList.status ==0 ? "出证中...":dataList.status==1?"出证成功":"出证失败"}}</view>
    </view>
  </view>
    <view class="certificate-title">文件信息</view>
    <view class="certificate-detail-file">
       <view v-if="dataList.fileType === 1" class="certificate-detail-file-text">{{textContext}}</view>
      <image @tap.stop="checkImage" mode="aspectFit" v-if="dataList.fileType === 2" class="certificate-detail-file-content-picture" :data-src="dataList.filePath" :src="dataList.filePath"></image>
       <view v-if="dataList.fileType === 3" class="add-certificate-voice">
          <audio :src="dataList.filePath" :name="dataList.name" author id="myAudio" ontap="_handlePlay" @ended="playToEndFun" controls></audio>
        </view>
       <video @tap.stop="checkVideo" v-if="dataList.fileType === 4" id="videoBox" class="certificate-detail-file-content-video" :src="dataList.filePath" @Error="videoError"></video>
       <view class="pdf-file" v-if="dataList.fileType === 5" ontap="_handleViewDetail">
        <image src="https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/file.png" class="file-image"></image>
        <text>{{dataList.fileName}}</text>
      </view>
    </view>
    <view style="display:flex; justify-content:space-between">
        <view class="certificate-title">证书信息</view>
       
  </view>
    <view class="certificate-detail-items">
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证hash</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-value">{{dataList.hash || ''}}</view>
    </view>
    </view>
    <view style="height:20rpx; width=100%; background:#F7F8F9"></view>
    <view class="certificate-detail-items">
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">认证时间</view>
      <view class="certificate-detail-item-value">{{tools.formatTime(dataList.gmtModified,'Y-M-D h:m:s')}}</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">证书状态</view>
      <view class="certificate-detail-item-value">{{dataList.status ==0 ? "出证中...":dataList.status==1?"出证成功":"出证失败"}}</view>
    </view>
    </view>
    <!-- 关联合同 -->
     <view class="certificate-title" v-if="type=='data' && contractList.length > 0">关联合同</view>
     <view class="certificate-detail-items" v-if="type=='data'">
     <view v-for="(item, index) in contractList" :key="index" class="certificate-detail-item">
      <view class="certificate-detail-item-name undeContranct" :data-contractid="item.id" @tap="goContractDetail">{{ item.contractTitle }}</view>
    </view>
    </view>
     </view>

<!-- 证据链菜单 -->
<halfSlideItem :isShow="evidenceMenuShow">
	<view class="slide-menu_list">
		<view class="slide-menu_item" @tap="previewCertificate">查看证书</view>
		<view class="slide-menu_item" @tap="goChainListPage">查看证据链</view>
	</view>
</halfSlideItem>
  <!-- <view class='empty-data placeholder-color' wx:if="{{dataList.length <= 0}}">暂无数据</view> -->
</view>
</template>

<script module="tools" lang="wxs" src="../../utils/tools.wxs"></script>

<script>
let api = require("../../api/request.js");
let utils = require("../../utils/utils.js");
let app = getApp();
let timer = null;
let innerAudioContext = uni.createInnerAudioContext();
let videoBox = null; // 存证类型icon的MAP
// 存证类型icon的MAP
let iconMap = {
  1: 'one-filetype-doc',
  2: 'one-filetype-image',
  3: 'one-filetype-music',
  4: 'one-filetype-video',
  5: 'one-contract'
};
import halfSlideItem from "../../components/halfSlideItem/halfSlideItem";

export default {
  data() {
    return {
      imageSrc: '',
      // 图像src
      id: '',
      // 存证id，路由获取
      dataList: {},
      // 存证详情数据
      icon: 'one-filetype-image',
      // 存证类型icon
      duration: 0,
      //声音类型音频时长
      isPlay: false,
      // 声音是否播放
      videoPlayTime: 0,
      // 音频播放时间time
      showVideoPlayTime: '00:00:00',
      //音频播放显示时间
      textContext: '',
      // 文本内容
      pdfUrl: '',
      contractId: "",
      type: 'sign',
      audioContext: null,
      contractList: [],
      evidenceMenuShow: false,
      durationShow: ""
    };
  },

  components: {
    halfSlideItem
  },
  props: {},
  // 页面load加载数据
  onLoad: function (options) {
    this.setData({
      id: options.id,
      type: options.type
    });
    this.fetchRecords();

    if (options.type == 'data') {
      this.getContractList();
    }
  },

  onReady() {
    this.setData({
      audioContext: uni.createAudioContext('myAudio')
    });
  },

  methods: {
    handlePlayFun(e) {
      console.log(this.audioContext, this.audioContext._getAppStatus());
      this.audioContext.play();
      console.log(this.audioContext._getAppStatus());
    },

    playToEndFun(e) {
      this.audioContext.pause();
      this.audioContext.seek(0);
      this.audioContext.pause();
    },

    // 获取存证详情
    fetchRecords: function () {
      var that = this;
      uni.showLoading({
        title: '加载中'
      });
      var url = api.evidence_detail + '?id=' + this.id;
      api.sendGet({
        // get请求
        url: url,
        success: res => {
          uni.hideLoading();
          let icon = iconMap[res.fileType];
          that.setData({
            dataList: res || {},
            icon: icon,
            contractId: res.filePath
          }); // 存证类型为文件时（1为txt）

          if (res.fileType === 1) {
            that.openTxt();
          } // 存证类型为图像 


          if (res.fileType === 2) {} // 存证类型为音频（fileType为3）


          if (res.fileType === 3) {}

          if (res.fileType === 5) {
            const url = api.get_certificate_address + "/" + this.dataList.id;
            uni.showLoading({
              title: '加载中'
            });
            api.sendGet({
              url: url,
              success: res => {
                this.downloadPdfFun(res, 0);
              },
              fail: function (err) {
                uni.hideLoading(); // utils.showError(err)
              }
            });
          }
        },
        fail: err => {
          uni.hideLoading();
          utils.showError(err);
        }
      });
    },

    handleViewDetailFun() {
      if (this.type == 'sign') {
        uni.navigateTo({
          url: `/pages/home/sign/next/contractDetail/contractDetail?contractId=${this.contractId}`
        });
      } else {
        this.previewCertificate();
      }
    },

    // 打开txt文本函数 先downloadFile下载，再fs.readFile读取
    openTxt: function () {
      let that = this;
      let fs = uni.getFileSystemManager();
      uni.downloadFile({
        url: this.dataList.filePath,
        success: function (res) {
          const filePath = res.tempFilePath;
          fs.readFile({
            filePath: filePath,
            encoding: 'utf8',

            complete(res) {
              console.log(res.data);
              that.setData({
                textContext: JSON.parse(res.data).context || ''
              });
            }

          });
        }
      });
    },
    // 
    checkImage: function (e) {
      this.setData({
        imageSrc: e.currentTarget.dataset.url
      });
      uni.navigateTo({
        url: '?imageSrc=' + this.imageSrc
      });
    },
    // 打开音频函数 试用innerAudioContext的api
    setVoice: function () {
      var that = this;
      var url = this.dataList.filePath;
      innerAudioContext.src = url || '';
      setTimeout(function () {
        var _durationShow = that.showTime(innerAudioContext.duration); // 播放时间显示


        that.setData({
          duration: innerAudioContext.duration,
          durationShow: _durationShow
        });
        innerAudioContext.onError(res => {
          console.log(res.errMsg);
        });
        innerAudioContext.onEnded(res => {
          innerAudioContext.stop();
          clearInterval(timer);
          that.setData({
            isPlay: false,
            videoPlayTime: 0,
            showVideoPlayTime: '00:00:00'
          });
        });
        innerAudioContext.onTimeUpdate(res => {
          if (innerAudioContext.duration && !that.duration) {
            _durationShow = that.showTime(innerAudioContext.duration);
            that.setData({
              duration: innerAudioContext.duration,
              durationShow: _durationShow
            });
          }
        });
      }, 200);
    },
    // 音频显示函数
    showTime: function (time) {
      function formatShow(value) {
        return value < 10 ? '0' + value : value;
      }

      var sec = parseInt(time % 60);

      var _min = parseInt(time / 60);

      var min = parseInt(_min % 24);
      var hour = parseInt(_min / 24);
      hour = formatShow(hour);
      min = formatShow(min);
      sec = formatShow(sec);
      return hour + ':' + min + ':' + sec;
    },
    // 设置定时函数 显示播放时间
    setTime: function () {
      var that = this;
      timer = setInterval(function () {
        let _time = that.videoPlayTime + 1;

        var _formatTime = that.showTime(_time);

        that.setData({
          videoPlayTime: _time,
          showVideoPlayTime: _formatTime
        });
      }, 1000);
    },
    //播放声音函数
    playVoice: function () {
      var that = this; // if (!this.data.duration) return

      if (this.isPlay) {
        innerAudioContext.pause();
        clearInterval(timer);
        innerAudioContext.onPause(() => {
          that.setData({
            isPlay: false
          });
        });
      } else {
        innerAudioContext.play();
        innerAudioContext.onPlay(() => {
          clearInterval(timer);
          that.setData({
            isPlay: true
          }); // 设置定时函数同步显示时间

          this.setTime();
        });
      }
    },
    // 预览下载
    previewCertificate: function (e) {
      var that = this;

      if (this.dataList.status !== 1) {
        setTimeout(() => {
          uni.showToast({
            title: '出证中，请稍后再试',
            icon: 'none'
          });
        }, 50);
        return;
      }

      var hash = this.dataList.hash;
      if (!hash) return;
      var url = api.get_certificate_address + "/" + this.dataList.id;
      uni.showLoading({
        title: '加载中'
      }); // 下载成功 打开pdf

      api.sendGet({
        url: url,
        success: function (res) {
          that.downloadPdfFun(res, 1);
        },
        fail: function (err) {
          uni.hideLoading();
          utils.showError(err);
        }
      });
    },

    // 打开pdf文件
    downloadPdfFun(url, status) {
      console.log(url);
      uni.downloadFile({
        url: url,
        success: res => {
          uni.hideLoading();
          const filePath = res.tempFilePath;
          this.setData({
            pdfUrl: filePath
          });
          if (status) this.openPdfFun(filePath);
        },
        fail: function (res) {
          uni.hideLoading();
          console.log(res);
        },
        complete: function (res) {}
      });
    },

    openPdfFun(filePath) {
      console.log(filePath);
      uni.openDocument({
        filePath: filePath,
        fileType: 'pdf',
        showMenu: true,
        success: res => {
          console.log(res, 'success');
        },
        fail: err => {
          console.log(err, 'fail');
        },
        complete: () => {
          console.log('complete');
        }
      });
    },

    /**
     * @desc 获取关联合同
     */
    getContractList() {
      const params = {
        certificateEvidenceId: this.id,
        pageIndex: 0,
        pageSize: 1000
      };
      api.sendGet({
        url: api.findContractSubject,
        params: params,
        success: res => {
          this.setData({
            contractList: res.data
          });
        }
      });
    },

    /**
     * @desc 跳转合同详情
     */
    goContractDetail(e) {
      const contractId = e.currentTarget.dataset.contractid;
      uni.navigateTo({
        url: "/pages/home/sign/next/contractDetail/contractDetail?contractId=" + contractId
      });
    },

    /**
     * @desc 更多操作
     */
    showSlideMenu() {
      this.setData({
        evidenceMenuShow: true
      });
    },

    /**
     * @desc 查看证据链
     */
    goChainListPage() {
      this.setData({
        evidenceMenuShow: false
      });
      uni.navigateTo({
        url: "/pages/home/contract/chains/chains?id=" + this.id
      });
    }

  }
};
</script>
<style>
@import "./certificateDetail.css";
</style>