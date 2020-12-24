<template>
<view>
<!--pages/chains/chains.wxml-->
<view class="pl-search">
	<search @inputChanged="inputSearchFun" @cancelClicked="cancleSearchFun" onTimeSearch="true" isShowCancel="true"></search>
</view>

<scroll-view class="list-wrapper" scroll-y="true" scroll-anchoring="true" scroll-with-animation="true" @scrolltolower="scrollToBottom">
	<view v-for="(item, index) in contracts" :key="index" class="contract" @tap="pushToDetail" :data-index="index" :data-item="item">
		<view class="contract-introduce">
			<view class="contract-title">
				<searchHighlightTextView highlight="highlight" :text="item.name" :keyword="searchParams"></searchHighlightTextView>
			</view>
			<view class="contract-right">
				<view :class="'status-icon ' + (item.status == 1 ? 'success' : item.status == 99 ? 'fail' : '')"></view>
				<view class="contract-state">{{item.status == 0 ? '存证中...' : item.status == 1 ? '存证成功' : item.status == 99 ? '存证失败' : ''}}</view>
			</view>
		</view>
		<view class="contract-related">
			<view class="contract-sponsor">存证类型：{{item.evidenceType == 2 ? '数据存证' : '签署存证'}}
			<text style="margin-left: 20rpx">操作人：{{ item.userName }}</text>
			</view>
		</view>
		<view class="contract-operate" @tap.stop="showMenu" :data-activeitem="item">
			<view class="contract-operate_item"></view>
			<view class="contract-operate_item"></view>
			<view class="contract-operate_item"></view>
		</view>
		<view class="contract-other">
			<view class="contract-updatetime">存证时间
			</view>
			<view class="contract-updatetime-middle"></view>
			<view class="time">{{item.gmtModified}}
			</view>
		</view>
	</view>
</scroll-view>
<view class="empty-data placeholder-color" v-if="contracts.length <= 0">暂无数据</view>
<view class="launchButton" @tap.stop="addChainBtn">
	添加证据
</view>

<!-- 证据链菜单 -->
<halfSlideItem :isShow="evidenceMenuShow">
	<view class="slide-menu_list">
		<view class="slide-menu_item" @tap="goChainDetail">查看证据详情</view>
		<view class="slide-menu_item" @tap="deleteContractEvidenceRelWarn">取消关联</view>
	</view>
</halfSlideItem>
<!-- 添加证据链菜单 -->
<halfSlideItem :isShow="addEvidenceMenuShow">
	<view class="slide-menu_list">
		<view class="slide-menu_item" @tap="goPicChain" data-totype="image">图片存证</view>
		<view class="slide-menu_item" @tap="goPicChain" data-totype="file">文件存证</view>
		<view class="slide-menu_item" @tap="goPicChain" data-totype="voice">语音存证</view>
		<view class="slide-menu_item" @tap="goPicChain" data-totype="video">视频存证</view>
		<view class="slide-menu_item" @tap="addChainFromList">从证据列表添加</view>
	</view>
</halfSlideItem>
</view>
</template>

<script>
// pages/chains/chains.js
var api = require("../../../../api/request.js");
var utils = require("../../../../utils/utils.js");
import search from "../../../../components/search/search";
import searchHighlightTextView from "../../../../components/searchHighlightTextView/searchHighlightTextView";
import halfSlideItem from "../../../../components/halfSlideItem/halfSlideItem";

export default {
  data() {
    return {
      pageIndex: 0,
      pageSize: 10,
      searchParams: '',
      contracts: [],
      timer: null,
      canScroll: true,
      queryId: null,
      evidenceMenuShow: false,
      addEvidenceMenuShow: false,
      activeItme: {}
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
    this.setData({
      queryId: options.id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.initQuery();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * @desc 下拉刷新
   */
  onPullDownRefresh() {
    this.initQuery();
  },

  methods: {
    /**
    * 获取列表
    */
    getChainsFun(isSearch) {
      var self = this;
      var url = api.getChainsList;
      var params = {
        name: this.searchParams ? this.searchParams : '',
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        contractSubjectId: this.queryId
      };
      api.sendGet({
        url: url,
        params: params,
        success: function (res) {
          console.log(res);
          var contracts = res.data;

          if (res.data.length > 0) {
            self.setData({
              canScroll: true
            });
          } else {
            self.setData({
              canScroll: false
            });
          }

          contracts.map(it => {
            it.gmtModified = self.formatTimeConvert(it.gmtModified, 1);
          });
          let arr = [];

          if (isSearch) {
            arr = contracts;
          } else {
            arr = [...self.contracts, ...contracts];
          }

          self.setData({
            contracts: arr
          });
          console.log(self.contracts);
        },
        fail: function (err) {
          utils.showError(err);
        }
      });
    },

    /**
     * @name 搜索
     * @param {*} e 事件源 
     */
    inputSearchFun: function (e) {
      if (this.timer) clearTimeout(this.timer);
      this.setData({
        searchParams: e.detail,
        pageIndex: 0,
        timer: setTimeout(() => {
          this.getChainsFun(true);
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
      this.getChainsFun(true);
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
     * @name 滑动触底
     */
    scrollToBottom() {
      if (this.canScroll) {
        this.setData({
          pageIndex: this.pageIndex + 1
        });
        this.getChainsFun();
      }
    },

    /**
     * @desc 打开菜单
     */
    showMenu(arg) {
      let itemInfo = arg.currentTarget.dataset.activeitem;
      this.setData({
        evidenceMenuShow: true,
        activeItme: itemInfo
      });
    },

    /**
     * @desc 取消关联请求
     */
    deleteContractEvidenceRel() {
      var that = this;
      let params = {
        contractSubjectId: this.queryId,
        certificateEvidenceIds: this.activeItme.id
      };
      api.sendPostBody({
        url: api.deleteContractEvidenceRel,
        params: params,
        success: res => {
          setTimeout(() => {
            uni.showToast({
              title: '解除关联成功'
            });
          }, 50);
          that.initQuery();
        },
        fail: err => {
          setTimeout(() => {
            uni.showToast({
              title: err
            });
          }, 50);
        }
      });
    },

    /**
     * @desc 取消关联提示
     */
    deleteContractEvidenceRelWarn() {
      var that = this;
      this.setData({
        evidenceMenuShow: false
      });
      uni.showModal({
        title: '提示',
        content: '取消关联操作不可撤回，是否确认取消关联吗？',
        success: function (res) {
          if (res.confirm) {
            that.deleteContractEvidenceRel();
          } else {
            console.log('点击取消回调');
          }
        }
      });
    },

    /**
     * @desc 查看证据详情
     */
    goChainDetail() {
      this.setData({
        evidenceMenuShow: false
      });
      let queryStr = '?id=' + this.activeItme.id + '&type=' + (this.activeItme.evidenceType == 2 ? 'data' : 'sign');
      uni.redirectTo({
        url: '/newEvidence/certificateDetail/certificateDetail' + queryStr
      });
    },

    /**
     * @desc 添加证据
     */
    addChainBtn() {
      this.setData({
        addEvidenceMenuShow: true
      });
    },

    /**
     * @desc 进行图片存证
     */
    goPicChain(e) {
      var toType = e.currentTarget.dataset.totype;
      this.setData({
        evidenceMenuShow: false,
        addEvidenceMenuShow: false
      });

      if (toType == 'video') {
        uni.navigateTo({
          url: "/newEvidence/videoRecord/videoRecord?type=" + toType + "&fromId=" + this.queryId + "&from=1"
        });
      } else {
        uni.navigateTo({
          url: "/newEvidence/addCertificate/addCertificate?type=" + toType + "&fromId=" + this.queryId
        });
      }
    },

    /**
     * @desc 从证据列表添加
     */
    addChainFromList() {
      this.setData({
        evidenceMenuShow: false,
        addEvidenceMenuShow: false
      });
      uni.navigateTo({
        url: "/pages/contract/contractList/chainList/chainList?id=" + this.queryId
      });
    },

    /**
     * @desc 初始化搜索
     */
    initQuery() {
      this.setData({
        pageIndex: 0
      });
      this.getChainsFun(true);
    }

  }
};
</script>
<style>
@import "./chains.css";
</style>