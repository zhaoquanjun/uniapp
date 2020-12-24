<template>
<!--components/sliderPicker/sliderPicker.wxml-->
<view :class="'slider-picker--area ' + (wrapperShow ? 'wrapper-show' : '')">
  <view class="mask" @tap="hide"></view>
  <view :class="'slider-box ' + (contentShow ? 'content-show' : '')">
    <view v-for="(item, index) in sliderList" :key="index" class="slider-item" @tap="handleSelectSliderValueFun" :data-value="item.value" :data-index="index">{{item.label}}</view>
  </view>
</view>
</template>

<script>

export default {
  data() {
    return {
      wrapperShow: false,
      contentShow: false
    };
  },

  components: {},
  props: {
    sliderList: {
      type: Array,
      default: []
    }
  },
  methods: {
    show() {
      this.setData({
        wrapperShow: true
      });
      setTimeout(() => {
        this.setData({
          contentShow: true
        });
      }, 200);
    },

    hide() {
      this.setData({
        contentShow: false
      });
      setTimeout(() => {
        this.setData({
          wrapperShow: false
        });
      }, 200);
    },

    handleSelectSliderValueFun(e) {
      let value = e.currentTarget.dataset.index;

      if (value == this.properties.sliderList.length - 1) {
        this.hide();
        return false;
      }

      this.$emit('selectWay', {
        detail: value
      });
    }

  }
};
</script>
<style>
@import "./sliderPicker.css";
</style>