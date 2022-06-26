<!-- 关于作者 -->
<template>
  <view class="about">
	<cu-custom bgColor="bg-default" :isBack="true">
		<block slot="backText">返回</block>
		<block slot="content">关于轻食Life</block>
	</cu-custom>
    <canvas canvas-id="bubble" :style="'width:' + width + 'px;height:' + height + 'px'" class="like-fx"></canvas>
    <like-fx ref="likeFx" :width="width" :height="height"></like-fx>
	<view class="introduce">
	    <view class="headTitle">
	      <view class="bgimg">
			  <text class="headContent"><text class="heart">『用心』\n</text>做好每一份<text class="heart">『轻食菜肴』</text></text>
			  <image src="../../static/aboutbg.jpg" mode="widthFix"></image>
		  </view>
	    </view>
	
	    <view class="grid col-2 bottom">
	      <view class="col-space">
	        <view class="user-dream"><image src="../../static/wellogo.png" mode="widthFix"></image></view>
	        <view class="text-center">
				<text class="protitle">轻食Life小助手\n\n</text>
				<icon class="text-black text-bold cuIcon-discover"></icon>
				<text class="protext text-bold">官方网站\n</text>
				<text class="protext">http://47.112.114.153</text>
	        </view>
	      </view>
	
	      <view class="col-space">
	        <view class="bottom-b-r">
	          <text class="bottom-title">权威质量认证\n</text>
	          <text class="bottom-content">每个食材都经过食品监督局的严格把控\n</text>
	        </view>
	        <view class="bottom-b-r">
	          <text class="bottom-title">营养科学团队\n</text>
	          <text class="bottom-content">专业的营养科学家把控一切关乎健康的环节\n</text>
	        </view>
	        <view class="bottom-b-r">
	          <text class="bottom-title">菜肴评测标准\n</text>
	          <text class="bottom-content">有科学研究基础的补剂才会被加入推荐方案\n</text>
	        </view>
	
	      </view>
	    </view>
	  </view>
	
	  <view class="footer">
	    <text decode="true" class="footerContent">S I M P L Y &nbsp; A &nbsp;   B E T T E R &nbsp; D A Y</text>
	    <view class="line"></view>
	  </view>
	
  </view>
</template>

<script>
  import LikeFx from '@/components/likeFx/likeFx.vue'
  export default {
    components: {
      LikeFx
    },
    data() {
      return {
        animation_timer: null, // 动画定时器
        width: 375,
        height: 1920
      }
    },
    onLoad() {
      this._startLikeAnimation();
    },
    onShareAppMessage() {
      return {
        title: '快来和我们玩转软件开发吧～',
        path: '/pages/about/about?from=share'
      }
    },
    methods: {
      _startLikeAnimation() {
        this.animation_timer = setInterval(() => {
          this.$refs.likeFx.likeClick();
        }, 400)
      }
    }
  }
</script>

<style scoped>
  .about-bg {
    background-size: cover;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    color: #fff;
  }

  .edit-fixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 1024;
    box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.1);
  }

  .detail-imgs image {
    width: 100%;
    float: left;
    /* height:400rpx; 不定高了*/
    border: 0;
    padding: 0;
    margin: 0
  }

  .share-img {
    position: fixed;
    padding: 10rpx;
    width: 100rpx;
    height: 100rpx;
    bottom: 200rpx;
    right: 20rpx;
    z-index: 1024;
    opacity: 0.8;
    box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
    border: none;
  }

  .about {
    margin: 0;
    width: 100%;
    height: 100vh;
	padding-top: 20rpx;
    color: #fff;
  }

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .container {
    width: 100%;
    position: absolute;
    text-align: center;
  }

  .like-fx {
    position: fixed;
    right: 0;
    z-index: 1024;
    pointer-events: none;
  }
  
  .headTitle{
    border-top-left-radius: 36rpx;
    border-top-right-radius: 36rpx;
    margin-top: 15rpx;
    height: 380rpx;
	overflow: hidden;
    box-shadow: #afafaf 0 8px 18px;
  }
  .bgimg{
    height: 380rpx;
    z-index: 0;
    left: 0;
    top: 0;
    overflow: hidden;
    position: relative;
    border-top-left-radius: 36rpx;
    border-top-right-radius: 36rpx;
    filter:alpha(opacity=15);
  }
  .bgimg image{
    width: 720rpx;
    height: 100%;
    top: -50rpx;
  }
  .headContent{
    line-height: 100rpx;
    font-size: 55rpx;
    font-weight: bold;
    margin: 80rpx 0 0 65rpx;
    color: #a9c771;
    text-shadow: #666 1rpx 1rpx 6rpx;
    z-index: 1;
    left: 0;
    top: 0;
    position: absolute;
  }
  .heart{
    font-size: 60rpx;
    color: white;
  }
  .introduce{ 
    background-color: #fff;
    box-shadow: #b2b2b2 0 0 8px;
	margin: 18rpx;
    border-radius: 36rpx;
  }
  .col-space{ padding: 12rpx;}
  .user-dream{
    width: 200rpx;
    height: 200rpx;
    margin: 12rpx auto;
    border-radius: 50%;
  }
  .protitle{
    font-size: 35rpx;
    font-weight: bold;
    color: #555;
  }
  .protext{
    color: #333;
	margin: 6rpx;
	line-height: 45rpx;
  }
  .bottom{
	display: flex;
	align-items: center;
	justify-content: center;
  }
  .bottom-b-r{
    margin: 30rpx 10rpx 30rpx 10rpx;
  }
  .bottom-title{
    font-size: 36rpx;
    font-weight: bold;
    color: black;
  }
  .bottom-content{
    font-size: 30rpx;
    color: #666;
  }
  .detail{
    text-decoration-line: underline;
  }
  .footerContent{
	color: #666;
    font-size: 36rpx;
    font-weight: bolder;
  }
  .line{
    margin-left: 35%;
    margin-top: 20rpx;
    width: 30%;
    border-top:3px solid #a9c771 ;
  }
  .footer{
    height: 200rpx;
    margin-top: 20rpx;
    padding-top: 120rpx;
    background-color: #f3f8f8;
    text-align: center;
  }
</style>
