<!-- 欢迎页 -->
<template>
	<view class="container">
	  <image class="user-dream" src="../../static/wellogo.png"></image>
	  <image class="name" src="http://47.112.114.153/upload/welcome.gif"></image>
	  <!-- <image class="load" bindtap="onTap" src="/images/load.gif"></image> -->
	  <view class="load tui-loading-row">
	    <view class="tui-loading-cell" @click="onTap">
			<view class="circle-line">
				<text></text>
				<text></text>
				<text></text>
				<text></text>
				<text></text>
				<text></text>
				<text></text>
				<text></text>
			</view>
	    </view>
	  </view>
	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {}
		},
		methods: {
			onLoad(option) {
				setTimeout(function() {
					console.log("开始进行跳转");
					uni.redirectTo({
						url: "../index/tabbar"
					})
				}, 1500);
			},
			onTap:function(event){
				uni.redirectTo({
					url: "../index/tabbar"
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	page{
	  height: 100%;
	  background-color: #fff;
	}
	.container{
	  margin-left: 20rpx;
	  width: 95%;
	  height: 100%;
	  display:flex;
	  flex-direction:column;
	  align-items: center;
	}
	.user-dream{
	  width: 180rpx;
	  height:180rpx;
	  margin-top: 200rpx;
	  border-radius: 50%;
	}
	.name{
	  margin-top: 0rpx;
	  width: 500rpx;
	  height: 300rpx;
	}
	.load{
	  width: 50rpx;
	  height: 50rpx;
	  margin-top: 260rpx;
	}
	
	.tui-loading-row{
	  width: 100%;
	  display: table;
	  table-layout: fixed;
	}
	.tui-loading-cell{
	width: 100%;
	display: table-cell;
	text-align: center;
	}
	.circle-line{
	  width: 100px;
	  height: 100px;
	  display: inline-block;
	  position: relative;
	}
	.circle-line text{
	  display: block;
	  width: 50%;
	  height: 5px;
	  opacity: .5;
	  position: absolute;
	  top: calc(50% - 2.5px);
	  left: 0px;
	  transform-origin: center right;
	  animation: circle 1s linear infinite; 
	}
	.circle-line text::before{
	  content: '';
	  display: block;
	  border-radius: 50%;
	  width: 5px;
	  height: 7px;
	  position: absolute;
	  top: 0;
	  right: 8px;
	  background-color: #666;
	}
	.circle-line text:nth-child(1){
	  transform: rotate(0deg);
	  animation-delay: 0.125s;
	}
	.circle-line text:nth-child(2){
	  transform: rotate(45deg);
	  animation-delay: 0.25s;
	}
	.circle-line text:nth-child(3){
	  transform: rotate(90deg);
	  animation-delay: 0.375s;
	}
	.circle-line text:nth-child(4){
	  transform: rotate(135deg);
	  animation-delay: 0.5s;
	}
	.circle-line text:nth-child(5){
	  transform: rotate(180deg);
	  animation-delay: 0.625s;
	}
	.circle-line text:nth-child(6){
	  transform: rotate(225deg);
	  animation-delay: 0.75s;
	}
	.circle-line text:nth-child(7){
	  transform: rotate(270deg);
	  animation-delay: 0.875s;
	}
	.circle-line text:nth-child(8){
	  transform: rotate(315deg);
	  animation-delay: 1s;
	}
	@keyframes circle {
	  0%{
	      opacity: 0.05;
	  }
	  100%{
	      opacity: 0.9;
	  }
	}
</style>
