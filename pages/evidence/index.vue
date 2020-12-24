<template>
<view>
<view class="evidence-manager--area">
	<view class="content">
		<view class="search">
			<search @inputChanged="changeSearchParamsFun" @cancelClicked="clearSearchParamsFun" isShowCancel="true" onTimeSearch="true"></search>
		</view>
		<scroll-view class="scroll-area" scroll-y="true" scroll-anchoring="true" refresher-enabled="true" :refresher-triggered="isTriggered" @refresherrefresh="pullDownRefreshFun" @scrolltolower="getMoreDataFun">
			<view class="sign-area list-area" v-if="activeName == 'sign' && signs.length > 0">
				<view v-for="(item, index) in signs" :key="index" class="list-item" :data-type="item.evidenceType == 1 ? 'sign' : 'data'" :data-id="item.id" @tap="viewDetailFun">
					<view class="item-detail">
						<view class="title">{{item.name}}</view>
						<view class="type">存证类型：{{ item.evidenceType==2 ? '数据存证' : '签署存证' }}</view>
						<view :class="'time ' + (item.status != 1 ? 'hidden' : '')">存证时间：{{item.gmtModified}}</view>
					</view>
					<view class="contract-operate" @tap.stop="showChainsMenu" :data-activeitem="item">
						<view class="contract-operate_item"></view>
						<view class="contract-operate_item"></view>
						<view class="contract-operate_item"></view>
					</view>
					<view class="item-status">
						<view :class="'status-icon ' + (item.status == 1 ? 'success' : item.status == 99 ? 'fail' : '')"></view>
						<view>{{item.status == 0 ? '存证中...' : item.status == 1 ? '存证成功' : item.status == 99 ? '存证失败' : ''}}</view>
					</view>
				</view>
			</view>
			<view class="data-area list-area" v-else-if="activeName == 'data' && datas.length > 0">
				<view v-for="(item, index) in datas" :key="index" class="list-item" data-type="data" :data-id="item.id" @tap="viewDetailFun">
					<view class="item-detail">
						<view class="title">{{item.name}}</view>
						<view class="type">存证类型：{{item.fileType == 1 ? '文本' : item.fileType == 2 ? '图片' : item.fileType == 3 ? '语音' : item.fileType == 4 ? '视频' : item.fileType == 5 ? '文件' : ''}}</view>
						<view :class="'time ' + (item.status != 1 ? 'hidden' : '')">存证时间：{{item.gmtModified}}</view>
					</view>
					<view class="contract-operate" @tap.stop="showChainsMenu" :data-activeitem="item">
						<view class="contract-operate_item"></view>
						<view class="contract-operate_item"></view>
						<view class="contract-operate_item"></view>
					</view>
					<view class="item-status">
						<view :class="'status-icon ' + (item.status == 1 ? 'success' : item.status == 99 ? 'fail' : '')"></view>
						<view>{{item.status == 0 ? '存证中...' : item.status == 1 ? '存证成功' : item.status == 99 ? '存证失败' : ''}}</view>
					</view>
				</view>
			</view>
			<view class="empty" v-else>
				<text>暂无数据</text>
			</view>
		</scroll-view>
	</view>
</view>
<mp-halfScreenDialog ref="mphalfScreenDialog"></mp-halfScreenDialog>

<!-- 证据链菜单 -->
<halfSlideItem :isShow="evidenceMenuShow">
	<view class="slide-menu_list">
		<view :class="'slide-menu_item ' + ( activeItme.status == 1 ? '' : 'noUseSlide' )" @tap="previewContractChain">查看存证证书</view>
		<view class="slide-menu_item" @tap="addChainFromList">关联合同</view>
		<view class="slide-menu_item" @tap="handleStartDownloadFun" v-if="canDownload">下载源文件</view>
	</view>
</halfSlideItem>
<!-- 存证证书预览 -->
<view class="chain-wrap" v-if="showChainImg">
	<view class="chain-mask"></view>
	<view class="chain-img">
		<web-view :src="chainImg" class="chainImgItem"></web-view>
	</view>
</view>
</view>
</template>

<script>
// authentication/auth-type/index.js
var api = require("../../api/request.js");
var util = require("../../utils/utils");
const app = getApp();
import search from "../../components/search/search";
import mpHalfScreenDialog from "../../components/half-screen-dialog/half-screen-dialog";
import halfSlideItem from "../../components/halfSlideItem/halfSlideItem";

export default {
  data() {
    return {
      tabs: [{
        name: '签署存证',
        type: 'sign'
      }, {
        name: '数据存证',
        type: 'data'
      }],
      signs: [],
      datas: [],
      signPageIndex: 1,
      dataPageIndex: 1,
      signTotal: 0,
      dataTotal: 0,
      activeName: 'sign',
      searchParams: '',
      pageSize: 10,
      isTriggered: false,
      // 是否容器下拉刷新
      evidenceMenuShow: false,
      activeItme: null,
      canDownload: "",
      pdfUrl: ""
    };
  },

  components: {
    search,
    mpHalfScreenDialog,
    halfSlideItem
  },
  props: {},

  onLoad() {},

  onShow() {
    const activeTab = 'sign';
    this.setData({
      activeName: activeTab,
      signPageIndex: 1
    });
    this.getPageDataFun(this.activeName, 1, this.getPageDataFun(activeTab == 'sign' ? 'data' : 'sign', 1));
  },

  onReady() {
    this.dialog = this.$refs.mphalfScreenDialog;
  },

  onHide() {
    this.dialog && this.dialog.close();
  },

  onUnload() {
    app.globalData.activeTab = 'sign';
  },

  onPullDownRefresh() {
    console.log('页面下拉了');
    this.getPageDataFun(this.activeName, 1);
  },

  onShareAppMessage() {},

  methods: {
    // 滚动容器下啦刷新
    pullDownRefreshFun() {
      console.log('容器下拉了');
      this.setData({
        isTriggered: true,
        signPageIndex: 1,
        dataPageIndex: 1
      });
      this.getPageDataFun(this.activeName, 1, () => {
        this.setData({
          isTriggered: false
        });
      });
    },

    /**
     * @name 切换tab选项卡
     * @param {*} e 事件源
     */
    changeTabsFun(e) {
      this.setData({
        activeName: e.currentTarget.dataset.name,
        searchParams: ''
      });
      if (this[this.activeName + 's'].length > 0) return;
      this.getPageDataFun(this.activeName, 1);
    },

    /**
     * @name 获取数据
     * @param {*} type 获取存证的类型 （1 - 签署， 2 - 数据）
     * @param {*} callback 回调函数
     */
    getPageDataFun(name, type, callback) {
      if (!app.globalData.isLoginIn()) return;
      const url = api.certificate_record_list + '?currentPage=' + (name == 'sign' ? this.signPageIndex : this.dataPageIndex) + '&pageSize=' + this.pageSize + (this.searchParams ? '&name=' + this.searchParams : '');
      uni.showLoading({
        title: '加载中...'
      });
      api.sendGet({
        url: url,
        success: res => {
          uni.hideLoading({});
          if (typeof callback == 'function') setTimeout(() => {
            callback(res);
          });

          if (res.results && res.results.length > 0) {
            res.results.map(it => {
              return it.gmtModified = util.formatTime(it.gmtModified, 'Y-M-D h:m:s');
            });
          }

          let arr = [];

          if (type == 1) {
            arr = res.results;
          } else {
            arr = this[this.activeName + 's'].concat(res.results);
          }

          if (name == 'sign') {
            this.setData({
              signs: arr,
              signTotal: res.total
            });
          } else {
            this.setData({
              datas: arr,
              dataTotal: res.total
            });
          }
        }
      });
    },

    /**
     * @name 触底加载更多
     */
    getMoreDataFun() {
      if (this[this.activeName + 's'].length < this[this.activeName + 'Total']) {
        this.setData({
          [this.activeName + 'PageIndex']: parseInt(this[this.activeName + 'PageIndex']) + 1
        });
        this.getPageDataFun(this.activeName, 2);
      }
    },

    /**
     * @name 模糊搜索
     * @param {*} msg 返回搜索字段
     */
    changeSearchParamsFun(msg) {
      this.setData({
        searchParams: msg.detail
      });
      this.getPageDataFun(this.activeName, 1);
    },

    /**
     * @name 情况搜索条件
     */
    clearSearchParamsFun() {
      this.setData({
        searchParams: ''
      });
      this.getPageDataFun(this.activeName, 1);
    },

    viewDetailFun(e) {
      const id = e.currentTarget.dataset.id;
      const type = e.currentTarget.dataset.type;
      const url = '/newEvidence/certificateDetail/certificateDetail?id=' + id + '&type=' + type;
      uni.navigateTo({
        url: url
      });
    },

    /**
     * @desc 显示证据链弹窗
     */
    showChainsMenu(arg) {
      let itemInfo = arg.currentTarget.dataset.activeitem;
      const type = itemInfo.filePath.slice(itemInfo.filePath.lastIndexOf('.') + 1);
      const canDownloadList = ['png', 'jpeg', 'jpg', 'mp4', 'mov', 'avi', 'rmvb', 'flv'];
      let flag = false;

      if (canDownloadList.indexOf(type.toLowerCase()) == -1 || itemInfo.evidenceType == 1) {
        flag = false;
      } else {
        flag = true;
      }

      this.setData({
        evidenceMenuShow: true,
        activeItme: itemInfo,
        canDownload: flag
      });
    },

    /**
     * @desc 从证据列表添加
     */
    addChainFromList() {
      this.setData({
        evidenceMenuShow: false
      });
      uni.navigateTo({
        url: "/pages/contract/contractList/addContractList/addContractList?id=" + this.activeItme.id
      });
    },

    previewContractChain(e) {
      var that = this;

      if (this.activeItme.status !== 1) {
        return;
      }

      var hash = this.activeItme.hash;
      if (!hash) return;
      var url = this.activeItme.url;
      uni.showLoading({
        title: '加载中'
      }); // 下载成功 打开pdf

      that.downloadPdfFun(url, 1);
      this.setData({
        evidenceMenuShow: false
      });
    },

    // 打开pdf文件
    downloadPdfFun(url, status) {
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
     * @name 下载源文件
     */
    handleStartDownloadFun() {
      this.setData({
        evidenceMenuShow: false
      });
      this.gettingAuth(this.activeItme.filePath);
    },

    /**
     * @name 获取下载到相册权限
     * @param {*} filePath 下载路径
     */
    gettingAuth(filePath) {
      uni.getSetting({
        success: res => {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            uni.authorize({
              scope: 'scope.writePhotosAlbum',
              success: () => {
                this.download(filePath);
              },
              // 拒绝授权时，则进入手机设置页面，可进行授权设置
              fail: () => {
                uni.openSetting({
                  success: () => {
                    console.log("openSetting success");
                  },
                  fail: () => {
                    console.log("openSetting fail");
                  }
                });
              }
            });
          } else {
            // 已授权则直接进行保存图片
            this.download(filePath);
          }
        },
        fail: err => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      });
    },

    /**
     * @name 执行下载操作
     * @param {*} filePath 下载路径
     */
    download(filePath) {
      uni.showLoading({
        title: '下载中'
      });
      const type = filePath.slice(filePath.lastIndexOf('.') + 1);
      uni.downloadFile({
        url: filePath,
        success: res => {
          console.log(22222);

          if (type.toLowerCase() == 'png' || type.toLowerCase() == 'jpeg' || type.toLowerCase() == 'jpg') {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              // 此为图片路径
              success: res => {
                console.log(res, 3333);
                uni.hideLoading();
                setTimeout(() => {
                  uni.showToast({
                    icon: 'none',
                    title: '已成功保存到相册'
                  });
                }, 50);
              },
              fail: err => {
                console.log(err, 44444);
                setTimeout(() => {
                  uni.showToast({
                    icon: 'none',
                    title: '下载失败'
                  });
                }, 50);
              }
            });
          }

          if (type.toLowerCase() == 'mp4' || type.toLowerCase() == 'mov' || type.toLowerCase() == 'avi' || type.toLowerCase() == 'rmvb' || type.toLowerCase() == 'flv') {
            uni.saveVideoToPhotosAlbum({
              filePath: res.tempFilePath,
              success: res => {
                console.log(res.errMsg, '下载成功了');
                uni.hideLoading();
                setTimeout(() => {
                  uni.showToast({
                    icon: 'none',
                    title: '已成功保存到相册'
                  });
                }, 50);
              },
              fail: err => {
                console.log(err, '失败了');
                setTimeout(() => {
                  uni.showToast({
                    icon: 'none',
                    title: '下载失败'
                  });
                }, 50);
              }
            });
          }
        }
      });
    }

  }
};
</script>
<style>
@import "./index.css";
</style>