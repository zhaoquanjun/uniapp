<template>
<web-view :src="webSrc" @load="webLoadSuc" @error="webLoadErr"></web-view>
</template>

<script>
const app = getApp();

export default {
  data() {
    return {
      webSrc: '',
      devWebSrc: 'https://dev.shanqian.cn/juheApi/miniPay',
      prodWebSrc: 'https://shanqian.cn/juheApi/miniFill'
    };
  },

  components: {},
  props: {},
  onLoad: function (options) {
    this.setData({
      webSrc: this[app.globalData.env + 'WebSrc'] + '?u=' + options.u + '&t=' + options.t + '&r' + options.r
    });
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
    /**
     * 生命周期函数--监听页面加载
     */
    webLoadSuc(e) {
      console.log(e);
    },

    webLoadErr(e) {
      console.log(e);
    }

  }
};
</script>
<style>
@import "./nuonuoPay.css";
</style>