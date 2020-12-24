<template>
<view>
<!--pages/pm/stamp/add/addStamp.wxml-->
<canvas canvas-id="stampCanvas" id="stampCanvas" class="stamp-canvas" disable-scroll="false" @touchstart="touchStart" @touchmove="touchMove"> 
    <image class="watermark" src="/static/pages/pm/stamp/add/watermark.png"></image>    
</canvas>
<canvas class="stamp-canvas copy-canvas" canvas-id="myCanvas" id="myCanvas" style="z-index: -11; opacity: 0; visiblity: hidden;"></canvas>
<view class="operation-btn-view">
    <view :class="'first-pen-btn pen-btn ' + (color==='#000'?'active':'') + '}'" data-color="#000" @tap.stop="switchColor">
        <view class="one one-dot" style="background-color:#000"></view>
    </view>
    <view :class="'pen-btn ' + (color==='#22ACF8'?'active':'')" data-color="#22ACF8" @tap.stop="switchColor">
        <view class="one one-dot" style="background-color:#22ACF8"></view>
    </view>
    <view :class="'pen-btn ' + (color==='#FE4E51'?'active':'')" data-color="#FE4E51" @tap.stop="switchColor">
        <view class="one one-dot" style="background-color:#FE4E51"></view>
    </view>
    <view class="line"></view>
    <image src="/static/pages/pm/stamp/add/pen.png" :class="'pen-btn pen-size ' + (pen=='4'?'active-pen':'')" @tap.stop="switchPen" data-pen="4"></image>
    <image src="/static/pages/pm/stamp/add/pen1.png" :class="'pen-btn pen-size ' + (pen=='6'?'active-pen':'')" @tap.stop="switchPen" data-pen="6"></image>
    <image src="/static/pages/pm/stamp/add/pen2.png" :class="'pen-btn pen-size ' + (pen=='8'?'active-pen':'')" @tap.stop="switchPen" data-pen="8"></image>
    <view class="clean-btn" @tap.stop="clearAction">
        <text class="clean-text">清除</text>
    </view>
    <view class="submit-btn" @tap.stop="submitAction">
        <text class="submit-text">提交</text>
    </view>

</view>
</view>
</template>

<script>
// pages/pm/stamp/add/addStamp.js
var api = require("../../../../api/request.js");
const app = getApp();

export default {
  data() {
    return {
      stampUrl: '',
      color: '#000',
      pen: '4',
      penSizeShow: false
    };
  },

  components: {},
  props: {},
  onShow: function () {
    setTimeout(() => {
      uni.showToast({
        icon: 'none',
        title: '请将手机横屏'
      });
    }, 50);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  onShareAppMessage() {},

  methods: {
    canvasIdErrorCallback: function (e) {
      console.error('canvas error:' + e.detail.errMsg);
    },
    //手指触摸动作开始
    touchStart: function (e) {
      //得到触摸点的坐标
      this.startX = e.changedTouches[0].x;
      this.startY = e.changedTouches[0].y;
      this.context = uni.createCanvasContext('stampCanvas');
      this.context.setStrokeStyle(this.color);
      this.context.setLineWidth(this.pen);
      this.context.setLineCap('round'); // 让线条圆润

      this.context.beginPath();
    },
    //手指触摸后移动
    touchMove: function (e) {
      var startX1 = e.changedTouches[0].x;
      var startY1 = e.changedTouches[0].y;
      this.context.moveTo(this.startX, this.startY);
      this.context.lineTo(startX1, startY1);
      this.context.stroke();
      this.startX = startX1;
      this.startY = startY1;
      this.context.draw(true); //只是一个记录方法调用的容器，用于生成记录绘制行为的actions数组。context跟<canvas/>不存在对应关系，一个context生成画布的绘制动作数组可以应用于多个<canvas/>
      // wx.drawCanvas({
      //   canvasId: 'stampCanvas',
      //   reserve: true,
      //   actions: this.context.getActions() // 获取绘图动作数组
      // })
    },
    switchPen: function (e) {
      console.log('切换font');
      var pen = e.currentTarget.dataset.pen;
      this.setData({
        pen: pen
      });
    },

    switchColor: function (e) {
      console.log('切换color');
      var color = e.currentTarget.dataset.color;
      this.setData({
        color: color
      });
    },
    clearAction: function () {
      console.log('清除');
      this.context.clearRect(0, 0, 750, 1334);
      this.context.draw();
    },
    submitAction: function () {
      const query = uni.createSelectorQuery();
      query.select('#stampCanvas').boundingClientRect(rect => {
        const width = rect.width;
        const height = rect.height;
        uni.canvasToTempFilePath({
          canvasId: 'stampCanvas',
          // fileType:'jpg',
          x: 0,
          y: 0,
          width: width,
          height: height,

          success(res) {
            var tempFilePath = res.tempFilePath;
            console.log(tempFilePath);
            const ctx = uni.createCanvasContext('myCanvas');
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, width, height);
            const ratio = width / height;
            ctx.rotate(-90 * Math.PI / 180);
            ctx.scale(ratio, ratio);
            ctx.translate(-width * 1.5, 0);
            ctx.drawImage(tempFilePath, 0, 0, width, height);
            ctx.draw(true, () => {
              uni.canvasToTempFilePath({
                canvasId: 'myCanvas',
                x: 0,
                y: 0,
                width: height,
                height: width,
                success: res => {
                  uni.showLoading({
                    title: '',
                    mask: true
                  });
                  api.uploadFile({
                    url: api.upload_painted_wx_url,
                    filePath: res.tempFilePath,
                    key: 'file',
                    // formData: {
                    //   "":sfg,
                    // },
                    success: function (data) {
                      console.log(data);
                      var userToken = app.globalData.getUserToken();
                      var header = {
                        "token": userToken,
                        "Content-Type": "application/json"
                      };
                      api.sendPostBody({
                        url: api.save_personnal_seal,
                        header: header,
                        params: {
                          "name": "印章",
                          "url": data.url,
                          "originType": 1
                        },
                        success: function (e) {
                          console.log(e); // var dataArray = _this.data.stampArray;
                          // dataArray.splice(index, 1);
                          // _this.updateData(dataArray);

                          uni.hideLoading();
                          uni.navigateBack({
                            delta: getCurrentPages.length - 1
                          });
                        },
                        fail: function (err) {
                          // wx.showToast({
                          //   icon: 'none',
                          //   title: err
                          // })
                          uni.hideLoading();
                          uni.navigateBack({
                            delta: getCurrentPages.length - 1
                          });
                        }
                      });
                    },
                    fail: function (msg) {
                      console.log(msg);
                      uni.hideLoading();
                    }
                  });
                }
              });
            });
          },

          fail(e) {
            console.log(e);
          }

        });
      }).exec();
    }
  }
};
</script>
<style>
@import "./addStamp.css";
</style>