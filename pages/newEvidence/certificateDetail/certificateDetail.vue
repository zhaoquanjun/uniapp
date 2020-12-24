<template>
<view class="certificate-detail-box">
  <view style="display:flex; justify-content:space-between">
    <view class="certificate-title">存证信息</view>
    <view style="display:flex; justify-content:flex-end;">
      <view :class="'certificate-detail-preview ' + ((dataList.status === 1 ?  '': 'failed' ))" @tap="previewCertificate">查看证书</view>
    </view>
  </view>
  <view class="certificate-detail-items">
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证名称</view>
      <view class="certificate-detail-item-value">{{dataList.name || ''}}</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证类型</view>
      <view class="certificate-detail-item-value">
        {{dataList.fileType==2 ? "图片" : dataList.fileType == 4 ?" 视频": ''}}
      </view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证渠道</view>
      <view class="certificate-detail-item-value">手机端</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证方式</view>
      <view class="certificate-detail-item-value">{{dataList.uploadMethod ==1 ? "上传":"拍摄"}}</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证时间</view>
      <view class="certificate-detail-item-value">{{tools.formatTime(dataList.gmtCreate,'Y-M-D h:m:s')}}</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证状态</view>
      <view class="certificate-detail-item-value">{{dataList.status ==0 ? "出证中...":dataList.status==1?"出证成功":"出证失败"}}
      </view>
    </view>
  </view>
  <view class="certificate-title">文件信息</view>
  <view class="certificate-detail-file">
    <image mode="aspectFit" v-if="dataList.fileType === 2" class="certificate-detail-file-content-picture" :src="dataList.filePath">
    </image>
    <video @tap.stop="checkVideo" v-if="dataList.fileType === 4" id="videoBox" class="certificate-detail-file-content-video" :src="dataList.filePath" @Error="videoError"></video>
    <view class="pdf-file" v-if="dataList.fileType === 5" ontap="previewCertificate">
      <image src="https://shouyiner-prod.oss-cn-beijing.aliyuncs.com/wxapp/shanqian/certificate/file.png" class="file-image"></image>
      <text>{{dataList.fileName}}</text>
    </view>
  </view>
  <view style="display:flex; justify-content:space-between">
    <view class="certificate-title">证书信息</view>
  </view>
  <view class="certificate-detail-items">
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">存证hash</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-value">{{dataList.hash || ''}}</view>
    </view>
  </view>
  <view style="height:20rpx; width=100%; background:#F7F8F9"></view>
  <view class="certificate-detail-items">
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">认证时间</view>
      <view class="certificate-detail-item-value">{{tools.formatTime(dataList.gmtModified,'Y-M-D h:m:s')}}</view>
    </view>
    <view class="certificate-detail-item">
      <view class="certificate-detail-item-name">证书状态</view>
      <view class="certificate-detail-item-value">{{dataList.status ==0 ? "出证中...":dataList.status==1?"出证成功":"出证失败"}}
      </view>
    </view>
  </view>

  <view class="share-btn" @tap="_createShareImage" v-if="dataList.fileType === 2">分享存证</view>
  <!-- 分享图组件 -->
  <share-box id="shareBox" :posterInfo="dataList" @initData="createShareImage"></share-box>
</view>
</template>

<script module="tools" lang="wxs" src="../../../utils/tools.wxs"></script>


	<script>
		
		export default {
			props: []
		}
    </script>

									