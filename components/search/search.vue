<template>
<!--components/searchInput/searchInput.wxml-->
<view class="search-box">
  <view class="search">
    <image @tap="searchClicked" class="icon-search" src="https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/component/search_icon.png"></image>
    <input class="search-input" placeholder-style="color:#B2B2B2" placeholder="请输入文件名称" @input="inputChanged" :disabled="isDisableInput" :focus="isAutoFocus" :value="inputValue"></input>
    <!-- <view class="cancel-button" >取消</view> -->
		<text class="iconfont iconbaseline-close-px cancel-button" v-if="(isShowCancel && inputValue)" @tap="cancelClicked"></text>
  </view>
</view>
</template>

<script>

export default {
  data() {
    return {
      timer: null,
      inputValue: ''
    };
  },

  components: {},
  props: {
    isShowCancel: {
      type: Boolean,
      default: false
    },
    isAutoFocus: {
      type: Boolean,
      default: false
    },
    isDisableInput: {
      type: Boolean,
      default: false
    },
    timeSearch: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    searchClicked: function () {
      this.$emit('searchClicked', {
        detail: this.data.inputValue
      });
    },
    inputChanged: function (e) {
      if (this.timer) clearTimeout(this.timer);
      this.setData({
        timer: setTimeout(() => {
          var text = e.detail.value;
          console.log(text);
          this.setData({
            inputValue: text
          });
					console.log(this.timeSearch, this.isShowCancel)
          if (this.timeSearch) {
            this.$emit('inputChanged', {
              detail: text
            });
          }
        }, 300)
      });
    },
    cancelClicked: function (e) {
      this.setData({
        inputValue: ''
      });
      this.$emit('cancelClicked');
    }
  }
};
</script>
<style>
@import "./search.css";
</style>