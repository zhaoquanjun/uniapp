<template>
<view>
<view class="pl-search">
	<search @inputChanged="inputSearchFun" @cancelClicked="cancleSearchFun" :timeSearch="true" :isShowCancel="true"></search>
</view>
<scroll-view class="list-wrapper" scroll-y="true" scroll-anchoring="true" refresher-enabled="true" :refresher-triggered="topShow" scroll-with-animation="true" @scrolltolower="scrollToBottom" @refresherrefresh="pullingDownRefresh" @refresherrestore="pullingDownRefreshStore" @refresherabort="pullingDownRefreshStore">
	<view v-for="(item, index) in contracts" :key="index" class="contract" @tap="pushToDetail" :data-id="item.id" :data-status="item.status" :data-index="index" :data-item="item">
		<view class="contract-introduce">
			<view class="contract-title">
				<searchHighlightTextView highlight="highlight" :text="item.contractTitle" :keyword="searchParams"></searchHighlightTextView>
			</view>
			<view class="contract-right">
				<view class="status-icon" :style="'background: ' + item.bgStyle + ';'"></view>
				<view class="contract-state">{{item.statusText}}</view>
			</view>
		</view>
		<view class="contract-related">
			<view class="contract-sponsor">发起方：{{item.initiatorName}}
			</view>
			<view class="contract-signatory">签署方：{{item.signNames}}
			</view>
		</view>
		<view class="contract-operate" v-if="searchType < 8" @tap.stop="showChainsMenu" :data-activeitem="item" :data-activeit="JSON.stringify(item)">
			<view class="contract-operate_item"></view>
			<view class="contract-operate_item"></view>
			<view class="contract-operate_item"></view>
		</view>
		<view class="contract-other">
			<view class="contract-updatetime">更新时间
			</view>
			<view class="contract-updatetime-middle"></view>
			<view class="time">{{item.gmtModified}}
			</view>
		</view>
	</view>
	<view :class="'bottom-loading ' + (bottomShow ? 'bottom-show' : '')" v-if="bottomShow">加载中...</view>
</scroll-view>
<view class="empty-data placeholder-color" v-if="contracts.length <= 0">暂无相关合同</view>

<!-- 证据链菜单 -->
<halfSlideItem ref="operate">
	<view class="slide-menu_list">
		<view class="slide-menu_item" @tap="handleApplyInvoiceFun" v-if="applyInvoice">申请开票</view>
		<view class="slide-menu_item" @tap="handleViewPayDetailFun" v-if="payDetail">付款详情</view>
		<view class="slide-menu_item" @tap="goChainListPage">查看证据链</view>
		<view class="slide-menu_item" @tap="showAddEvidenceMenuShow">添加证据</view>
	</view>
</halfSlideItem>
<!-- 添加证据链菜单 -->
<halfSlideItem ref="evidence">
	<view class="slide-menu_list">
		<view class="slide-menu_item" @tap="goPicChain" data-totype="image">图片存证</view>
		<view class="slide-menu_item" @tap="goPicChain" data-totype="file">文件存证</view>
		<view class="slide-menu_item" @tap="goPicChain" data-totype="voice">语音存证</view>
		<view class="slide-menu_item" @tap="goPicChain" data-totype="video">视频存证</view>
		<view class="slide-menu_item" @tap="addChainFromList">从证据列表添加</view>
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
import { get } from '../../../api/request.js'
import { get_contract_list, previewChainImg } from '../../../api/contract.js'
var utils = require("../../../utils/utils.js");
import search from "../../../components/search/search";
import searchHighlightTextView from "../../../components/searchHighlightTextView/searchHighlightTextView";
import halfSlideItem from "../../../components/halfSlideItem/halfSlideItem";

export default {
  data() {
    return {
      searchType: 0,
      title: '',
      pageIndex: 0,
      pageSize: 10,
      searchParams: '',
      contracts: [],
      timer: null,
      canScroll: true,
      // 添加证据链
      payDetail: false,
      // 付款详情
      payContract: false,
      // 支付合同
      applyInvoice: false,
      // 申请开票
      activeItme: {},
      chainImg: null,
      showChainImg: false,
      topShow: false,
      // top loading show flag
      bottomShow: false // bottom loading show flag

    };
  },

  components: {
    search,
    searchHighlightTextView,
    halfSlideItem
  },
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    uni.setNavigationBarTitle({
      title: options.pageTitle
    });
    this.setData({
      searchType: options.searchType,
      title: options.pageTitle
    });
  },
  onShow: function () {
    this.getContractsFun(0);
  },
  onPullDownRefresh: function () {
    this.getContractsFun(1);
  },

  onShareAppMessage() {},

  methods: {
    /**
     * @name 滑动触底
     */
    scrollToBottom() {
      if (this.canScroll) {
        this.setData({
          bottomShow: true,
          pageIndex: this.pageIndex + 1
        });
        this.getContractsFun(2);
      }
    },

    /**
     * @name 下拉刷新
     */
    pullingDownRefresh() {
      this.setData({
        topShow: true,
        pageIndex: 0
      });
      this.getContractsFun(1);
    },

    /**
     * @name 下拉刷新停止
     */
    pullingDownRefreshStore() {
      this.setData({
        topShow: false
      });
    },

    /**
     * 获取文件列表
     * 状态（ 0:全部合同,1:我发起的,2:待自己处理,3:待他人处理,4:已完成,5:已失效,6:已拒签,7:抄送我的,8:草稿箱）
     * @params {operateType} 操作类型 0-初次请求 1-下拉刷新 2-触底加载更多 3-搜索
     */
    getContractsFun(operateType) {
      var params = {
        searchType: this.searchType,
        contractTitle: this.searchParams ? this.searchParams : '',
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      };
      get({
        url: get_contract_list,
        params: params,
        success: res => {
          var contracts = res.data;

          if (res.data.length > 0) {
            this.setData({
              canScroll: true
            });
          } else {
            this.setData({
              canScroll: false
            });
          }

          contracts.map(it => {
            let result = this.getCurrentContractStatusFun(it.status);
            it.statusText = result.name;
            it.bgStyle = result.bg;
            it.gmtModified = this.formatTimeConvert(it.gmtModified, 1);
          });
          let arr = [];

          switch (operateType) {
            case 0:
              this.setData({
                contracts: contracts
              });
              break;

            case 1:
              this.setData({
                topShow: false,
                contracts: contracts
              });
              break;

            case 2:
              arr = contracts;
              this.setData({
                bottomShow: false,
                contracts: [...this.contracts, ...arr]
              });
              break;

            case 3:
              this.setData({
                contracts: contracts
              });
              break;
          }
        },
        fail: function (err) {
          utils.showError(err);
        }
      });
    },

    /**
     * @name 获取当前合同状态值
     * @param {status} 当前状态 
     */
    getCurrentContractStatusFun(status) {
      switch (status) {
        case 1:
          return {
            name: '签署中',
            bg: '#66B5ED'
          };
          break;

        case 2:
          return {
            name: '已完成',
            bg: '#78B03B'
          };
          break;

        case 3:
          return {
            name: '已拒绝',
            bg: '#E27777'
          };
          break;

        case 4:
          return {
            name: '已撤销',
            bg: '#999999'
          };
          break;

        case 5:
          return {
            name: '草稿',
            bg: ''
          };
          break;

        case 6:
          return {
            name: '已失效',
            bg: '#C7C7C7'
          };
          break;

        case 7:
          return {
            name: '填写中',
            bg: '#66B5ED'
          };
          break;

        default:
          break;
      }
    },

    /**
     * @name 搜索
     * @param {*} e 事件源 
     */
    inputSearchFun: function (e) {
      console.log(e);
      if (this.timer) clearTimeout(this.timer);
      this.setData({
        searchParams: e.detail,
        pageIndex: 0,
        timer: setTimeout(() => {
          this.getContractsFun(3);
        }, 300)
      });
    },

    /**
     * @name 取消搜索
     */
    cancleSearchFun() {
      this.setData({
        searchParams: ''
      });
      this.getContractsFun(0);
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
        return y + '-' + m + '-' + d;
      } else {
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
      }
    },

    /**
     * 跳转到详情
     */
    pushToDetail: function (e) {
			// #ifndef  H5
			const contractId = e.currentTarget.dataset.item.id;
			const status = e.currentTarget.dataset.item.status;
			// #endif
			
			// #ifdef  H5
			console.log(e.currentTarget.dataset)
			const contractId = e.currentTarget.dataset.id;
			const status = e.currentTarget.dataset.status;
			// #endif
      
      let url = '';

      if (this.searchType == 8) {
        url = '/pages/contract/sign/next/next?isdraft=1&contractId=' + contractId;
      } else if (status == 7) {
        url = '/pages/contract/fill/fill?contractId=' + contractId;
      } else {
        url = '/pages/contract/sign/next/signConfirm/signConfirm?contractId=' + contractId;
      }

      uni.navigateTo({
        url: url
      });
    },

    /**
     * 状态 与 index 之间的关系
     * 状态（1：所有合同 2：我发起的 3：待签署 4：等别人签署合同（我已签署完成）5:已完成 6:已撤销 7:已拒签 8:已作废）
     * index (0 1 2 3 4)
     */
    statusByIndexFun: function (index) {
      var status = 1;

      switch (index) {
        case 0:
          status = 1;
          break;

        case 1:
          status = 3;
          break;

        case 2:
          status = 4;
          break;

        case 3:
          status = 5;
          break;

        case 4:
          status = 8;
          break;

        default:
          break;
      }

      return status;
    },

    /**
     * @desc 显示证据链弹窗
     */
    showChainsMenu(arg) {
			// #ifdef  H5
			const itemInfo = JSON.parse(arg.currentTarget.dataset.activeit);
			// #endif
			
			// #ifndef  H5
			const itemInfo = arg.currentTarget.dataset.activeitem;
			// #endif
      
      if (!itemInfo.id) {
        return;
      }
			
			this.$refs.operate.open()

      this.setData({
        activeItme: itemInfo,
        payDetail: itemInfo.hasPay,
        payContract: itemInfo.needPay,
        applyInvoice: itemInfo.isOpenInvoice
      });
    },

    /**
     * @desc 显示添加证据弹窗
     */
    showAddEvidenceMenuShow() {
      if (!this.activeItme.id) {
        return;
      }
			this.$refs.operate.close()
			this.$refs.evidence.open()
    },

    /**
     * @desc 进行图片存证
     */
    goPicChain(e) {
      var toType = e.currentTarget.dataset.totype;
			this.$refs.operate.close()
			this.$refs.evidence.close()

      if (toType == 'video') {
        const queryString = "&searchType=" + this.searchType + "&pageTitle=" + this.title;
        uni.navigateTo({
          url: "/pages/evidence/videoRecord/videoRecord?type=" + toType + "&fromId=" + this.activeItme.id + queryString
        });
      } else {
        uni.navigateTo({
          url: "/pages/evidence/addCertificate/addCertificate?type=" + toType + "&fromId=" + this.activeItme.id
        });
      }
    },

    /**
     * @desc 从证据列表添加
     */
    addChainFromList() {
      this.$refs.operate.close()
      this.$refs.evidence.close()
      uni.navigateTo({
        url: "/pages/contract/contractList/chainList/chainList?id=" + this.activeItme.id
      });
    },

    /**
     * @desc 查看存证证书
     */
    previewContractChain() {
      get({
        url: previewChainImg + this.activeItme.id,
        success: res => {
          this.setData({
            chainImg: res,
            showChainImg: true
          });
        },
        fail: res => {
          this.setData({
            chainImg: null
          });
        }
      });
    },

    /**
     * @desc 查看证据链
     */
    goChainListPage() {
      this.$refs.operate.close()
      uni.navigateTo({
        url: "/pages/contract/contractList/chains/chains?id=" + this.activeItme.id
      });
    },

    /**
     * @name 支付合同
     */
    handlePayContractFun() {
			this.$refs.operate.close()
      uni.navigateTo({
        url: '/pages/invvoice/payContract/payContract?id=' + this.activeItme.id + '&receiveName=' + this.activeItme.initiatorName
      });
    },

    /**
     * @name 申请开票
     */
    handleApplyInvoiceFun() {
      this.$refs.operate.close()
      let url = '/pages/invoice/applyInvoice/applyInvoice?id=' + this.activeItme.id + '&title=' + this.activeItme.contractTitle + '&searchType=' + this.searchType + '&pageTitle=' + this.title;
			
			// #ifndef  H5
			const isCompay = uni.getStorageSync('currentUser').companyId;
			// #endif
			
			// #ifdef  H5
			const isCompay = JSON.parse(localStorage.getItem('currentUser')).companyId;
			// #endif

      if (isCompay) {
        url += '&initiatorName=' + this.activeItme.initiatorName + '&';
      }

      uni.navigateTo({
        url: url
      });
    },

    /**
     * @name 支付详情
     */
    handleViewPayDetailFun() {
      this.$refs.operate.close()
      uni.navigateTo({
        url: '/pages/invvoice/payDetail/payDetail?id=' + this.activeItme.id
      });
    }

  }
};
</script>
<style>
@import "./contractList.css";
</style>