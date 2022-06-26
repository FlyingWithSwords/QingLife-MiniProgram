<!-- TabBar 文章资讯 -->
<template>
	<view>
		<cu-custom bgColor="bg-default" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">文章资讯</block>
		</cu-custom>
		
		<view class="cu-card article no-card">
			<view class="cu-item shadow borderBottom" v-for="(item, index) in newsList" :key="index" @click="goNews(item.id)">
				<view class="title"><view class="text-cut">{{item.title}}</view></view>
				<view class="content">
					<image :src="item.tImg" mode="aspectFit"></image>
					<view class="desc">
						<rich-text class="text-content" :nodes="item.content.substring(0,200)"></rich-text>
						<view class="margin-top-xs">
							<view class="text-gray light sm round fl">{{item.time}}</view>
							<view class="text-gray light sm round fr">
								<text class="text-gray cuIcon-mark" style="font-size: 34rpx;"></text>
								<text>{{item.read}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		

	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				newsList: ''
			};
		},
		mounted() {
			this.getData();
		},
		methods: {
			getData() {
				let opts = {
					url: 'api/news-0.json',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				});
				request.httpRequest(opts).then(res => {
					// console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.newsList = res.data.data;
						console.log(this.newsList);
					} else {
						console.log('数据请求错误～');
					}
				});
			},
			goNews(id){
				uni.navigateTo({
					url: '../news/news?id='+ id,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.borderBottom{
		border-bottom: 1px solid #f2f2f2;
	}
</style>
