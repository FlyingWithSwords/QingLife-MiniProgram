<template>
	<view class="u-wrap">
		<cu-custom bgColor="bg-default" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">食谱</block>
		</cu-custom>
		
		<view class="u-search-box">
				<u-search class="u-search-text" bg-color="FFFFFF" border-color="#9F9F9F" height="69" placeholder="搜索食谱"
				 v-model="keywords" shape="round" @custom="search" @search="search"></u-search>
		</view>
		<view class="u-menu-wrap">
			<block>
				<scroll-view scroll-y class="right-box">
					<view class="page-view">
						<view class="class-item">
							<view class="item-container">
								<view class="thumb-box radius" v-for="(item, index) in recipes" :key="index" @click="gotoDetail(item.recId)">
									<image class="item-menu-image" :src="('http://47.112.114.153/'+item.imgsrc)" mode=""></image>
									<view class="item-menu-name margin-top-sm">{{item.title}}</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</block>
		</view>
	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				keywords: '',
				recipes: [],
				scrollTop: 0, //tab标题的滚动条位置
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
			}
		},
		mounted() {
			this.getData();
		},
		computed: {
			
		},
		methods: {
			getData(data) {
				let opts = {
					url: 'recipes/queryRecipesAll',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				});
				request.httpRequest(opts, data).then(res => {
					// console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.recipes = res.data.data;
						console.log(this.recipes);
					} else {
						console.log('数据请求错误～');
					}
				});
			},
			getImg() {
				return Math.floor(Math.random() * 35);
			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				if(index == this.current) return ;
				this.current = index;
				// 如果为0，意味着尚未初始化
				if(this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({size: true},res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if(!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return ;
						}
						this[dataVal] = res.height;
					}).exec();
				})
			},
			gotoDetail(e){
				console.log(e);
				uni.navigateTo({
					url: '../recipes/recipes?id='+ e,
				})
			},
			search() {
				let value = this.keywords;
				if (!value) {
					this.getData();
					uni.showToast({
						title: '查询内容不能为空！',
						icon: 'none'
					});
					return false;
				}
				else{
					this.getData({title: value});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		padding: 12rpx 30rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}

	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}

	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}
	
	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}
	
	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}

	.u-tab-view {
		height: 100%;
	}
	
	.right-box {
		background-color: rgb(250, 250, 250);
	}
	
	.page-view {
		padding: 16rpx;
	}
	
	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}
	
	.item-title {
		font-size: 30rpx;
		color: $u-main-color;
		font-weight: bold;
		margin: 10rpx 0;
	}
	
	.item-menu-name {
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box; 
		-webkit-box-orient: vertical; 
		-webkit-line-clamp: 1; 
		overflow: hidden;
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}
	
	.item-container {
		display: flex;
		flex-wrap: wrap;
	}
	
	.thumb-box {
		width: 33.333333%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 10rpx 0;
		padding: 30rpx 9rpx;
	}
	
	.item-menu-image {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100rpx;
	}
</style>
