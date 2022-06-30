<!-- 首页 -->
<template>
	<view>
		<cu-custom bgColor="bg-default" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">首页</block>
		</cu-custom>

		<add-tip :tip="tip" :duration="duration" />
		
		<!-- 流量主-腾讯广告 -->
		<!-- <ad unit-id="adunit-961458988ac9ad8b" ad-intervals="30"></ad> -->
		
		<!-- 导航栏 -->
		<view class="cu-list grid solids-bottom col-4 no-border" style="padding-bottom: 0;">
			<view class="cu-item" v-for="(item, index) in categories" :key="index"
				:style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]" @click="goCategorieslist"
				:data-mid="item.mid">
				<view :class="['cuIcon-' + item.cuIcon, 'text-' + item.color, 'line-' + item.color]" :style="[{width: '36px', height: '36px', margin: 'auto', padding: '3px 0', borderRadius: '20rpx', border: '1rpx solid'}]">
					<!-- <view class="cu-tag badge" v-if="item.count != 0">
						<block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
					</view> -->
				</view>
				<text>{{ item.name }}</text>
			</view>
		</view>

		<!-- banner图 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" circular="true" autoplay="true" interval="3500"
						duration="600">
						<swiper-item class="swiper-list" v-for="(item, index) in bannerList" :key="index">
							<view class="grid col-3" style="margin: 20rpx 12rpx;">
								<view class="health-left">
									<text class="health-num">0</text>
									<text class="health-title">今日摄入（千卡）</text>
								</view>
								<view class="health-left">
									<text class="health-num">0</text>
									<text class="health-title">今日消耗（千卡）</text>
								</view>
								<view class="health-left">
									<text class="health-num">0</text>
									<text class="health-title">还可摄入（千卡）</text>
								</view>
							</view>
							<view class="choice-bar">
								<view class="chioce-item" hover-class="click-once-opaque">
									<image style="width:60rpx;height:60rpx;margin: 0 30rpx 0 10rpx;" :src="item.icon" />
									<view @tap="openBanner" data-item="1" style="width:85%;display: flex;flex-direction: row;">
										<text style="font-size:36rpx;font-weight:bold;color:black;">{{item.type}}</text>
										<view style="margin-top:6rpx">{{banstart}}</view>
									</view>
									<view style="font-size: 30rpx;margin: 12rpx;"
										:class="!isopen?iconup: icondown">
									</view>
								</view>
							</view>
							<view :class="isopen?'sorting-list chioce-list-hide':'sorting-list chioce-list-show'">
								<view v-for="(item, index) in item.lists" class="sorting-item" hover-class="click-once" :key="index" style="display: flex;flex-direction: row;" >
									<view style="width:50%;">{{item.name}}</view>
									<view style="width:49%;text-align:right">{{item.calorie}}</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-default text-shadow">最新资讯</text>
				<text class="text-ABC text-default">LasterNews</text>
			</view>
			<view class="action" @click="goProjectList"><text class="text-lg text-grey text-shadow">更多</text></view>
		</view>

		<view class="cu-card case no-card">
			<view @click="goProject(item.id)" class="cu-item shadow" v-for="(item, index) in projectList" :key="index">
				<view class="image">
					<image :src="item.tImg" mode="widthFix"></image>
					<view class="cu-tag bg-gradual-orange">{{ item.tabs }}</view>
					<view class="cu-bar bg-shadeBottom">
						<text class="text-cut">{{ item.type }}</text>
					</view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="margin-lr flex-sub">
							<view class="item-name text-grey text-lg">{{ item.title }}</view>
							<view class="text-gray text-sm flex justify-between">
								{{ item.time }}
								<view class="text-gray text-sm">
									<text class="cuIcon-attentionfill margin-lr-xs"></text>
									{{ item.user[0].read }}
									<text class="cuIcon-appreciatefill margin-lr-xs"></text>
									{{ item.user[0].like }}
									<text class="cuIcon-shopfill margin-lr-xs"></text>
									{{ item.user[0].use }}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view style="height: 140rpx;width: 1rpx;"></view>
	</view>
</template>

<script>
	import request from '@/common/request.js';
	import addTip from '../../components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip.vue';
	export default {
		components: {
			addTip
		},
		data() {
			return {
				tip: '点击「添加小程序」，下次访问更便捷',
				duration: 1,

				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				isopen: false,
				icondown:"cuIcon-unfold",
				iconup:"cuIcon-fold",
				banstart: "",
				bannerList: [{
						type: '运动',
						lists: [{
								name: "走路（慢）",
								calorie: '213千卡/60分钟'
							},
							{
								name: "跑步（慢）",
								calorie: '601千卡/60分钟'
							},
							{
								name: "爬楼梯",
								calorie: '591千卡/60分钟'
							},
							{
								name: "跳绳",
								calorie: '628千卡/60分钟'
							},
							{
								name: "游泳",
								calorie: '601千卡/60分钟'
							},
							{
								name: "自行车",
								calorie: '628千卡/60分钟'
							},
						],
						icon: '../../static/icon/index-icon1.png'
					},
					{
						type: '早餐',
						lists: [{
								name: "葱蒸干贝",
								calorie: '109千卡'
							},
							{
								name: "脱脂奶粉",
								calorie: '356千卡'
							},
							{
								name: "黄米",
								calorie: '351千卡'
							},
							{
								name: "酸豆奶",
								calorie: '67千卡'
							},
							{
								name: "番茄虾仁",
								calorie: '64千卡'
							},
							{
								name: "白玉豆腐",
								calorie: '75千卡'
							},
						],
						icon: '../../static/icon/index-icon2.png'
					},
					{
						type: '午餐',
						lists: [{
								name: "白炒虾球",
								calorie: '102千卡'
							},
							{
								name: "双菇竹笋汤",
								calorie: '49千卡'
							},
							{
								name: "鱼香全茄",
								calorie: '139千卡'
							},
							{
								name: "海米油菜心",
								calorie: '73千卡'
							},
							{
								name: "番茄虾仁",
								calorie: '64千卡'
							},
							{
								name: "白玉豆腐",
								calorie: '75千卡'
							},
						],
						icon: '../../static/icon/index-icon3.png'
					},
					{
						type: '晚餐',
						lists: [{
								name: "菠菜猪肝汤",
								calorie: '12千卡'
							},
							{
								name: "鲜菇炒菜花",
								calorie: '94千卡'
							},
							{
								name: "三色鱼丸",
								calorie: '109千卡'
							},
							{
								name: "清炖鲫鱼",
								calorie: '96千卡'
							},
							{
								name: "香米",
								calorie: '347千卡'
							},
							{
								name: "白玉豆腐",
								calorie: '75千卡'
							},
						],
						icon: '../../static/icon/index-icon4.png'
					},
					{
						type: '加餐',
						lists: [{
								name: "黄米",
								calorie: '351千卡'
							},
							{
								name: "脱脂奶粉",
								calorie: '356千卡'
							},
							{
								name: "酸豆奶",
								calorie: '67千卡'
							},
							{
								name: "番茄虾仁",
								calorie: '64千卡'
							},
							{
								name: "葱蒸干贝",
								calorie: '109千卡'
							},
							{
								name: "白玉豆腐",
								calorie: '75千卡'
							},
						],
						icon: '../../static/icon/index-icon5.png'
					}
				],
				categories: [{
						cuIcon: 'activity',
						color: 'red',
						badge: '',
						mid: '1',
						name: '健康打卡'
					},
					{
						cuIcon: 'discover',
						color: 'blue',
						badge: '',
						mid: '2',
						name: '美食地图'
					},
					{
						cuIcon: 'cart',
						color: 'yellow',
						badge: '',
						mid: '3',
						name: '一周食谱'
					},
					{
						cuIcon: 'calendar',
						color: 'cyan',
						badge: '',
						mid: '4',
						name: '问卷填写'
					}
				],
				projectList: []
			};
		},
		watch: {},
		mounted() {
			console.log(this.projectList);
			this.getData();


			// 在页面中定义插屏广告
			let interstitialAd = null

			// 在页面onLoad回调事件中创建插屏广告实例
			if (wx.createInterstitialAd) {
				interstitialAd = wx.createInterstitialAd({
					adUnitId: 'adunit-0843cdd8084e561d'
				})
				interstitialAd.onLoad(() => {})
				interstitialAd.onError((err) => {})
				interstitialAd.onClose(() => {})
			}

			// 在适合的场景显示插屏广告
			if (interstitialAd) {
				interstitialAd.show().catch((err) => {
					console.error(err)
				})
			}
			// 插屏广告结束
		},
		methods: {
			getData() {
				console.log('数据加载');
				let opts = {
					url: 'json/project.json',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				});
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.projectList = res.data.data;
					} else {}
				});
			},
			scroll: function(e) {
				console.log(e);
				this.old.scrollTop = e.detail.scrollTop;
			},
			goCategorieslist: function(e) {
				// console.log(e.currentTarget.dataset.mid)
				if (e.currentTarget.dataset.mid == 1) {
					uni.navigateTo({
						url: '/qing_tools/hearecord/hearecord'
					});
				} else if (e.currentTarget.dataset.mid == 2) {
					uni.navigateTo({
						url: '/qing_tools/shopmap/shopmap'
					});
				} else if (e.currentTarget.dataset.mid == 3) {
					uni.navigateTo({
						url: '/qing_tools/weekrec/weekrec'
					});
				} else if (e.currentTarget.dataset.mid == 4) {
					uni.navigateTo({
						url: '../me/mentalTest/index'
					})
				}
			},
			goProjectList() {
				this.$emit('ShowNews', 'news')
			},
			goProject(id) {
				uni.navigateTo({
					url: '../project/project?proId=' + id
				});
			},
			openBanner: function(e) {
				console.log(e.currentTarget);
				switch (e.currentTarget.dataset.item) {
					case "1":
						if (this.$data.isopen) {
							this.$data.isopen = false;
						} else {
							this.$data.isopen = true;
						}
						break;
				}
			}
		}
	};
</script>
<style lang="scss" scoped>
	.swiper{
		height: 900rpx;
		background: #FFF;
		// background: url(http://ra0qa8uy3.hn-bkt.clouddn.com/banner0.jpg) no-repeat center;
	}
	
	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}
	.health-left {
		display: flex;
		flex-direction: column;
		text-align: center;
		font-family: Geometr706 BlkCn BT;
	}
	.choice-bar {
		display: flex;
		width: 100%;
		font-size: 14px;
	}
	.chioce-item {
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		width: 100%;
		height: 120rpx;
		border-bottom-left-radius: 0.5em;
		border-bottom-right-radius: 0.5em;
		background: #fff6;
		box-shadow: #b2b2b2 0 0 4px;
		margin: 0 12px;
	}
	.icon-chioce {
		height: 30rpx;
		width: 30rpx;
	}

	.health-num {
		text-align: center;
		margin-bottom: 25rpx;
		font-size: 60rpx;
		font-weight: bold;
		color: black;
		font-family: Geometr706 BlkCn BT;
	}
	.health-title {
		font-size: 26rpx;
		color: #7f7f7f;
	}
	.district-list,.sorting-list,.filter-list {
		margin-top: 2rpx;
		top: 120rpx;
		left: 0;
		width: 100%;
		z-index: -1;
		font-size: 14px;
	}
	.sorting-item {
		height: 100rpx;
		line-height: 100rpx;
		padding: 0 40rpx;
	}
	.chioce-list-hide {
		display: none !important;
	}
	.chioce-list-show {
		animation: slide 500ms;
	}

	.message-box {
		width: 100%;
		height: 120rpx;
		background: url(https://zhoukaiwen.com/img/icon/clock.gif) #FFFFFF;
		background-repeat: no-repeat;
		background-size: 100rpx 100rpx;
		background-position: 15rpx 10rpx;
		margin: 0rpx 0rpx 10rpx 0rpx;
		padding-left: 130rpx;

		.message-tltle {
			height: 65rpx;
			line-height: 70rpx;
			font-weight: 600;
			font-size: 28rpx;
		}

		.message-content {
			color: #0081ff;

			span {
				background-color: #0081ff;
				color: #FFFFFF;
				padding: 2rpx 8rpx;
				border-radius: 8rpx;
				margin-right: 8rpx;
			}
		}
	}

	/*scroll-view外层*/
	.skill-sequence-panel-content-wrapper {
		position: relative;
		white-space: nowrap;
		padding: 10rpx 0 10rpx 10rpx;
	}

	/*左右渐变遮罩*/
	.hide-content-box {
		position: absolute;
		top: 0;
		height: 100%;
		width: 10px;
		z-index: 2;
	}

	.hide-content-box-left {
		left: 0;
		background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #f3f3f3 60%);
	}

	.hide-content-box-right {
		right: 0;
		background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #f3f3f3 60%);
	}

	.kite-classify-scroll {
		width: 100%;
		height: 380rpx;
		overflow: hidden;
		white-space: nowrap;
	}

	.kite-classify-cell {
		display: inline-block;
		width: 266rpx;
		height: 370rpx;
		margin-right: 20rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		overflow: hidden;
		box-shadow: 2px 2px 3px rgba(26, 26, 26, 0.2);
	}

	.nav-li {
		padding: 40rpx 30rpx;
		width: 100%;
		background-image: url(https://s1.ax1x.com/2020/06/27/NyU04x.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}

	.nav-name::before {
		content: '';
		position: absolute;
		display: block;
		width: 40rpx;
		height: 6rpx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: '';
		position: absolute;
		display: block;
		width: 100rpx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40rpx;
		opacity: 0.3;
	}

	.nav-content {
		width: 100%;
		padding: 15rpx;
		display: inline-block;
		overflow-wrap: break-word;
		white-space: normal;
	}

	.nav-btn {
		width: 200rpx;
		height: 60rpx;
		margin: 8rpx auto;
		text-align: center;
		line-height: 60rpx;
		border-radius: 10rpx;
	}

	.bg-index1 {
		background-color: #19cf8a;
		color: #fff;
	}

	.bg-index2 {
		background-color: #954ff6;
		color: #fff;
	}

	.bg-index3 {
		background-color: #5177ee;
		color: #fff;
	}

	.bg-index4 {
		background-color: #f49a02;
		color: #fff;
	}

	.bg-index5 {
		background-color: #ff4f94;
		color: #fff;
	}

	.bg-index6 {
		background-color: #7fd02b;
		color: #fff;
	}

	.item-name {
		margin-bottom: 15rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
</style>
