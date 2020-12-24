<template>
<!--components/videoPlayer/videoPlayer.wxml-->
<view class="mark-class" @tap.stop="closeViewAction" :hidden="!isShowView" catchtouchmove="customerMove">
  <video id="videoId" class="voide-view-class" controls :src="videoSrc" :poster="coverImage" :duration="loneTime"></video>
</view>
</template>

<script>

export default {
  data() {
    return {
      videoSrc: "",
      loneTime: 0,
      coverImage: "",
      isShowView: false
    };
  },

  components: {},
  props: {},
  methods: {
    player: function (url, loneTime, coverImage) {
      console.log(url);
      this.setData({
        isShowView: true,
        videoSrc: url,
        loneTime: loneTime,
        coverImage: coverImage
      });
    },
    closeViewAction: function () {
      this.videoContext = uni.createVideoContext('videoId');
      this.videoContext.pause();
      this.setData({
        isShowView: false
      });
    }
  }
};
</script>
<style>
@import "./videoPlayer.css";
</style>