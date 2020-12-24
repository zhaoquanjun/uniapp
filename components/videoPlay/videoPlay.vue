<template>
<view class="voice-play">
<view class="add-certificate-voice-progress">
    <view :class="'add-certificate-voice-progress--btn ' + (isPlay ? 'one-stop-round' : 'one-start-round' )" @tap.stop="playVoice">
    </view>
    <text class="add-certificate-voice-progress--start">00:00</text>
    <view class="add-certificate-voice-progress--loading"></view>
    <text class="add-certificate-voice-progress--end">{{showTime}}</text>
</view>
<view class="add-certificate-voice-delete" @tap.stop="tapDeleteVoice"></view>
</view>
</template>

<script>
// components/videoPlay.js
const innerAudioContext = uni.createInnerAudioContext();

export default {
  data() {
    return {
      isPlay: false,
      endTime: '',
      startTime: '00:00',
      progress: 0,
      duration: 0,
      innerAudioContextUrl: '',
      durationShow: "",
      isPlayTime: 0,
      addCertificateVoice: ""
    };
  },

  components: {},
  props: {
    voiceUrl: {
      type: String,
      default: ''
    }
  },
  watch: {
    'voiceUrl': function (url) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        innerAudioContextUrl: url || properties.voiceUrl
      });

      if (url) {
        this.setVoice();
      }
    }
  },
  methods: {
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
    setVoice: function () {
      // innerAudioContext.autoplay = true
      innerAudioContext.src = this.innerAudioContextUrl || this.properties.voiceUrl;

      var _durationShow = this.showTime(innerAudioContext.duration);

      this.setData({
        duration: innerAudioContext.duration,
        durationShow: _durationShow
      });
      innerAudioContext.onError(res => {
        console.log(res.errMsg);
        console.log(res.errCode);
      });
      innerAudioContext.onEnded(res => {
        innerAudioContext.stop();
        that.setData({
          isPlay: false
        });
      });
      innerAudioContext.onTimeUpdate(() => {
        console.log(innerAudioContext);
      });
    },
    //播放声音
    playVoice: function () {
      var that = this;
      console.log(this.isPlay, innerAudioContext);

      if (this.isPlay) {
        innerAudioContext.pause();
        innerAudioContext.onPause(() => {
          console.log('暂停播放');
          that.setData({
            isPlay: false,
            isPlayTime: 0
          });
        });
      } else {
        innerAudioContext.play();
        innerAudioContext.onPlay(() => {
          console.log('开始播放');
          that.setData({
            isPlay: true
          });
        });
      }
    },
    tapDeleteVoice: function () {
      innerAudioContext.stop();
      innerAudioContext.destroy();
      this.setData({
        addCertificateVoice: ''
      });
    }
  }
};
</script>
<style>
@import "./videoPlay.css";
</style>