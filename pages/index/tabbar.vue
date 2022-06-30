<template>
	<view>
		<index @ShowNews="ShowNews" v-if="PageCur=='index'"></index>
		<recipes v-if="PageCur=='recipes'"></recipes>
		<tools v-if="PageCur=='tools'"></tools>
		<news v-if="PageCur=='news'"></news>
		<me v-if="PageCur=='me'"></me>

		<view class="box">
			<view class="cu-bar tabbar bg-white shadow foot animation-slide-bottom">				
				<view class="action" @click="NavChange" data-cur="index">
					<view class='cuIcon-cu-image'>
						<image v-if="PageCur=='index'" src="../../static/tabBar/index_cur.png"></image>
						<image v-if="PageCur != 'index'" src="../../static/tabBar/index.png"></image>
					</view>
					<view :class="PageCur=='index'?'color_main':'text-gray'">首页</view>
				</view>

				<view class="action" @click="NavChange" data-cur="recipes">
					<view class='cuIcon-cu-image'>
						<image v-if="PageCur=='recipes'" src="../../static/tabBar/shop_cur.png"></image>
						<image v-if="PageCur != 'recipes'" src="../../static/tabBar/shop.png"></image>
					</view>
					<view :class="PageCur=='recipes'?'color_main':'text-gray'">食谱</view>
				</view>

				<view @click="NavChange" class="action text-gray add-action" data-cur="tools">
					<image class="logo_btn" mode="widthFix" src="../../static/logo.png"></image>
					<view :class="PageCur=='tools'?'color_main':'text-gray'">实用工具</view>
				</view>

				<view class="action" @click="NavChange" data-cur="news">
					<view class='cuIcon-cu-image'>
						<!-- <view class="cu-tag badge">{{message}}</view> -->
						<image v-if="PageCur=='news'" src="../../static/tabBar/order_cur.png"></image>
						<image v-if="PageCur != 'news'" src="../../static/tabBar/order.png"></image>
					</view>
					<view :class="PageCur=='news'?'color_main':'text-gray'">资讯</view>
				</view>

				<view class="action" @click="NavChange" data-cur="me">
					<view class='cuIcon-cu-image'>
						<!-- <view class="cu-tag badge"> --><!-- 红点 --><!-- </view> -->
						<image v-if="PageCur=='me'" src="../../static/tabBar/me_cur.png"></image>
						<image v-if="PageCur != 'me'" src="../../static/tabBar/me.png"></image>
					</view>
					<view :class="PageCur=='me'?'color_main':'text-gray'">我的</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	import index from "./index.vue";	//首页
	import recipes from "./recipes.vue";	//技术视频
	import tools from "./main.vue";	//宅家学
	import news from "./news.vue";	//资讯
	import me from "./me.vue";	//个人中心
	export default {
		components: {
			index,
			recipes,
			tools,
			news,
			me
		},
		data() {
			return {
				PageCur: 'index',
				message: '2',
				openId:'',
				access_token:'',
				tip:"我是提示",
				duration:1

			};
		},
		// 分享小程序
		onShareAppMessage(res) {
			return {
				title: '学技术·找案例，快来「前端铺子」吧！',
			};
		},
		onLoad(){
			wx.showShareMenu({
				withShareTicket: true
			})
		},
		onShareTimeline() {
			return {
				title: '学技术·找案例，快来「前端铺子」吧！',
			}
		},
		onLoad() {
			//获取退出时的tabbar记录
			// uni.getStorage({
			// 	key: 'PageCur',
			// 	success: function(res) {
			// 		that.PageCur = res.data;
			// 	},
			// 	fail: function(res) {}
			// });
		},
		methods: {
			ShowNews(e){
				console.log(e)
				this.PageCur = e;
			},
			NavChange: function(e) {
				console.log(e.currentTarget.dataset.cur)

				this.PageCur = e.currentTarget.dataset.cur;

				if (this.PageCur == 'index') {
					// document.title = '首页'
				} else if (this.PageCur == 'component') {
					// document.title = '积分商城'
				} else if (this.PageCur == 'tools') {
					// document.title = '宅家学'
				} else if (this.PageCur == 'news') {
					// document.title = '文章资讯'
				} else if (this.PageCur == 'me') {
					// document.title = '个人中心'
				}

				// uni.setStorage({
				// 	key: 'PageCur',
				// 	data: this.PageCur,
				// 	success: function() {
				// 		console.log('保存成功！');
				// 	}
				// });
			},
			NavChange_xd: function() {
				uni.navigateTo({
					url: 'publish',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				});
			}
		}
	}
</script>

<style lang="scss">
	.color_main{
		color: #000000;
		font-weight: 900;
	}
	.box {
		margin: 20upx 0;
	}
	.box view.cu-bar {
		margin-top: 20upx;
	}
	
	.logo_btn{
		width: 38*2rpx;
		height: 38*2rpx;
		position: absolute;
		z-index: 2;
		border-radius: 0%;
		top: -35rpx;
		left: 0rpx;
		right: 0;
		margin: auto;
		padding: 0;
	}
	.cu-bar.tabbar .action.add-action {
	    padding-top: 56rpx !important;
	}
</style>
