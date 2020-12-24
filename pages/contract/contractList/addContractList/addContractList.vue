<template>
<view>
<!--pages/contract/contractList/addContractList/addContractList.wxml-->
<view class="pl-search">
	<search @inputChanged="inputSearchFun" @cancelClicked="cancleSearchFun" onTimeSearch="true" isShowCancel="true"></search>
</view>
<view class="list-wrapper_title">已选：{{ selectList.length }}</view>
<scroll-view class="list-wrapper" scroll-y="true" scroll-anchoring="true" scroll-with-animation="true" @scrolltolower="scrollToBottom">
	<checkbox-group @change="getSelectList">
		<view v-for="(item, index) in contracts" :key="index" class="contract" @tap="pushToDetail" :data-index="index" :data-item="item">
			<view class="checkbox-wrap">
				<checkbox :value="item.id">
					<view class="checkbox-content">
						<view class="contract-introduce">
							<view class="contract-title">
								<searchHighlightTextView highlight="highlight" :text="item.contractTitle" :keyword="searchParams"></searchHighlightTextView>
								<text v-if="searchType == 2">（{{item.approve == 1 ? '待审批' : '待签署'}}）</text>
							</view>
							<view class="contract-right">
								<view class="status-icon" :style="'background: ' + item.bgStyle + ';'"></view>
								<view class="contract-state">{{searchType == 2 && item.approve == 1 ? '待审批' : searchType == 2 && item.approve != 1 ? '待签署' : item.statusText}}</view>
							</view>
						</view>
						<view class="contract-related">
							<view class="contract-sponsor">发起方：{{item.initiatorName}}
							</view>
							<view class="contract-signatory">签署方：{{item.signNames}}
							</view>
						</view>
						<view class="contract-other">
							<view class="contract-updatetime">更新时间
							</view>
							<view class="contract-updatetime-middle"></view>
							<view class="time">{{item.gmtModified}}
							</view>
						</view>
					</view>
				</checkbox>
			</view>
		</view>
	</checkbox-group>
</scroll-view>
<view class="empty-data placeholder-color" v-if="contracts.length <= 0">暂无数据</view>

<button class="launchButton" :style="'background:' + (selectList.length > 0 ? '#464646' : '#B7B7B7')" @tap="saveContractEvidenceRel">确定添加</button>
</view>
</template>

<script>
// pages/contract/contractList/addContractList/addContractList.js
var api = require("../../../../api/request.js");
var utils = require("../../../../utils/utils.js");
import search from "../../../../components/search/search";
import searchHighlightTextView from "../../../../components/searchHighlightTextView/searchHighlightTextView";
import halfSlideItem from "../../../../components/halfSlideItem/halfSlideItem";

export default {
  data() {
    return {
      searchType: 0,
      pageIndex: 0,
      pageSize: 10,
      searchParams: '',
      contracts: [],
      timer: null,
      canScroll: true,
      selectList: [],
      pageId: null
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
    var pageId = options.id;
    this.setData({
      pageId
    });
    this.getChainsFun(true);
  },

  /**
   * @desc 下拉刷新
   */
  onPullDownRefresh() {
    this.getChainsFun(true);
  },

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
  methods: {
    /**
    * 获取列表
    */
    getChainsFun(isSearch) {
      var self = this;
      var url = api.findNoRelatedContractSubject;
      var params = {
        contractTitle: this.searchParams ? this.searchParams : '',
        certificateEvidenceId: this.pageId
      };
      api.sendGet({
        url: url,
        params: params,
        success: function (res) {
          var contracts = res;

          if (res.length > 0) {
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
    scrollToBottom() {},

    /**
     * @desc 获取选中的值
     */
    getSelectList(e) {
      console.log(e.detail.value);
      this.setData({
        selectList: e.detail.value
      });
    },

    /**
     * @desc 添加证据链关联
     */
    saveContractEvidenceRel() {
      if (this.selectList.length == 0) {
        return;
      }

      const params = {
        certificateEvidenceId: this.pageId,
        contractSubjectIds: [...this.selectList]
      };
      api.sendPostBody({
        url: api.saveEvidenceContractRel,
        params: params,
        success: res => {
          this.getChainsFun();
          uni.showModal({
            title: '提交成功',
            content: '',
            showCancel: false,
            success: data => {
              if (data.confirm) {
                uni.navigateBack({});
              }
            }
          });
        },
        fail: err => {
          console.log(err);
        }
      });
    }

  }
};
</script>
<style>
@import "./addContractList.css";
</style>