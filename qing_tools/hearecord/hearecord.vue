<!-- 课程班级 -->
<template>
	<view>
		<cu-custom bgColor="bg-default" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">健康打卡</block>
		</cu-custom>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#0081ff" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<!-- 第一页 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<form class="form-all" @submit="onEveryday">
								<view class="t-a">
									<image src="/static/icon/stype.png"></image>
									<view class="line"></view>
									<picker @change="pickerChange_sport" :value="array_sp[index_sp]" :range="array_sp" style="position: static;">
										<view v-if="index_sp==-1" style="color: #888;">请选择运动类型</view>
										<view v-else>{{array_sp[index_sp]}}</view>
										<view hidden="true"><input type="hidden" name="type3" :value="value_sp[index_sp]" /></view>
									</picker>
								</view>
								<view class="t-a">
									<image src="/static/icon/stime.png"></image>
									<view class="line"></view>
									<input type="number" name="weight1" placeholder="请输入持续时间(min)" maxlength="24" v-model="weight1" />
								</view>
								<view class="cuIcon cuIcon-roundadd addbtn" hover-class="cuIcon-roundaddfill"></view>
								<button form-type="submit" class="bg-default">提 交</button>
							</form>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 第二页 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<form class="form-all" @submit="onEveryday">
								<view class="t-a">
									<image src="/static/icon/ftype.png"></image>
									<view class="line"></view>
									<picker @change="pickerChange_sport" :value="array_sp[index_sp]" :range="array_sp" style="position: static;">
										<view v-if="index_sp==-1" style="color: #888;">请选择食物套餐</view>
										<view v-else>{{array_sp[index_sp]}}</view>
										<view hidden="true"><input type="hidden" name="type3" :value="value_sp[index_sp]" /></view>
									</picker>
								</view>
								<view class="t-a">
									<image src="/static/icon/fweight.png"></image>
									<view class="line"></view>
									<input type="number" name="weight1" placeholder="请输入食物重量(g)" maxlength="24" v-model="weight1" />
								</view>
								<button form-type="submit" class="bg-default">提 交</button>
							</form>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 第三页 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<form class="form-all" @submit="onEveryday">
								<view class="t-a">
									<image src="/static/icon/ftype.png"></image>
									<view class="line"></view>
									<picker @change="pickerChange_sport" :value="array_sp[index_sp]" :range="array_sp" style="position: static;">
										<view v-if="index_sp==-1" style="color: #888;">请选择食物套餐</view>
										<view v-else>{{array_sp[index_sp]}}</view>
										<view hidden="true"><input type="hidden" name="type3" :value="value_sp[index_sp]" /></view>
									</picker>
								</view>
								<view class="t-a">
									<image src="/static/icon/fweight.png"></image>
									<view class="line"></view>
									<input type="number" name="weight1" placeholder="请输入食物重量(g)" maxlength="24" v-model="weight1" />
								</view>
								<button form-type="submit" class="bg-default">提 交</button>
							</form>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 第四页 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<form class="form-all" @submit="onEveryday">
								<view class="t-a">
									<image src="/static/icon/ftype.png"></image>
									<view class="line"></view>
									<picker @change="pickerChange_sport" :value="array_sp[index_sp]" :range="array_sp" style="position: static;">
										<view v-if="index_sp==-1" style="color: #888;">请选择食物套餐</view>
										<view v-else>{{array_sp[index_sp]}}</view>
										<view hidden="true"><input type="hidden" name="type3" :value="value_sp[index_sp]" /></view>
									</picker>
								</view>
								<view class="t-a">
									<image src="/static/icon/fweight.png"></image>
									<view class="line"></view>
									<input type="number" name="weight1" placeholder="请输入食物重量(g)" maxlength="24" v-model="weight1" />
								</view>
								<button form-type="submit" class="bg-default">提 交</button>
							</form>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 第五页 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<form class="form-all" @submit="onEveryday">
								<view class="t-a">
									<image src="/static/icon/ftype.png"></image>
									<view class="line"></view>
									<picker @change="pickerChange_sport" :value="array_sp[index_sp]" :range="array_sp" style="position: static;">
										<view v-if="index_sp==-1" style="color: #888;">请选择食物套餐</view>
										<view v-else>{{array_sp[index_sp]}}</view>
										<view hidden="true"><input type="hidden" name="type3" :value="value_sp[index_sp]" /></view>
									</picker>
								</view>
								<view class="t-a">
									<image src="/static/icon/fweight.png"></image>
									<view class="line"></view>
									<input type="number" name="weight1" placeholder="请输入食物重量(g)" maxlength="24" v-model="weight1" />
								</view>
								<button form-type="submit" class="bg-default">提 交</button>
							</form>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			percent: 50,
			activeColor: '#0081ff',
			striped: false,
			stripedActive: false,
			weight1: '',
			list: [
				{
					name: '运动'
				},
				{
					name: '早餐'
				},
				{
					name: '午餐'
				},
				{
					name: '晚餐'
				},
				{
					name: '加餐'
				}
			],
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			array_sp: ['--低强度(小于3MET)--','缓慢步行','轻度工作(坐姿)','轻度家务(洗碗等)','休闲活动身体(钓鱼、台球等)',
			'--中等强度(3-6MET)--','步行3.0mph','非常快的步行4.0mph','中等强度工作(搬运等)','中等强度家务(拖地等)','羽毛球-娱乐性',
			'篮球-娱乐性','骑自行车-低强度10-12mph','跳舞-跳慢舞','跳舞-跳快舞','高尔夫','帆船、冲浪','悠闲的游泳','双人网球','排球-娱乐性',
			'跳舞-跳慢舞','--剧烈运动(大于6MET)--','极快速度步行4.5mph','慢跑5mph','慢跑6mph','跑步7mph','繁重的工作(农活)','篮球比赛',
			'骑自行车-中等强度12-14mph','足球-娱乐性','足球比赛','游泳-费力','网球单打','排球竞技'],
			value_sp: ['','2.0','1.5','2.0','2.5','','3.0','5.0','5.5','3.5','4.5','4.5','6.0','3.0','4.5','4.3','3.0','6.0','5.0','3.5','6.0',
			'','6.3','8.0','10.0','11.5','8.0','8.0','10.0','7.0','10.0','11.0','8.0','8.0'],
			index_sp: -1
		};
	},
	onLoad() {
	},
	computed: {
	},
	methods: {
		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		},
		pickerChange_sport: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.index_sp = e.target.value;
		},
		onSport(e) {
			console.log(e.target.value);
			var time = e.target.value.time3;
			var weight = e.target.value.weight3;
			var sport_type = e.target.value.type3;
			//一升氧气产生5大卡热量
			var oxygen_consumption_kaluli = 5;
			var met = 3.5;
			//判断输入的三个数字是否为数字,如果为数字，返回结果为false
			time = parseFloat(time);
			weight = parseFloat(weight);
			var sport_type = parseFloat(sport_type);
			var isNotNumber = isNaN(time) || isNaN(weight) || isNaN(sport_type);
			if (!isNotNumber) {
				if(time>0 && weight>0 && sport_type>0){
					var oxygen_consumption = sport_type*met;
					var total_oxygen_consumption = oxygen_consumption*weight*0.001;//L/min 升每分钟
					var kaluli_consumption_min = total_oxygen_consumption*oxygen_consumption_kaluli;
					var kaluli = kaluli_consumption_min*time;
					uni.showModal({
						title: '结果',
						content: '您该项运动的耗氧量为：'+total_oxygen_consumption+' L/min'+'\n您每分钟消耗卡路里为：'+kaluli_consumption_min+' kcal/min'+'\n您在该运动消耗的卡路里为：'+kaluli+' kcal',
						editable: true,
						showCancel: false
					});
				}else{
					uni.showModal({
						title: '提示',
						content: '请输入大于0的数字',
						showCancel:false
					});
				}
			} else {
				uni.showModal({
					title: '提示',
					content: '请输入数字或者选择正确的运动类型',
					showCancel:false
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #f2f2f2;
}
/* #endif */
</style>

<style lang="scss" scoped>
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
.page-box{
	margin: 36rpx;
}
.addbtn {
	margin-bottom: 36rpx;
	text-align: center;
	font-size: 36rpx;
	font-weight: bold;
}

.form-all {
	width: 650rpx;
	margin: 0 auto;
	font-size: 28rpx;
	color: #000;
}

.form-all button {
	font-size: 28rpx;
	color: #fff;
	height: 90rpx;
	line-height: 90rpx;
	border-radius: 50rpx;
	box-shadow: 0 5px 7px 0 rgba(159, 252, 82, 0.2);
}

.form-all input, .form-all picker {
	padding: 0 20rpx 0 120rpx;
	height: 90rpx;
	line-height: 90rpx;
	margin-bottom: 50rpx;
	background: #ffffff;
	border: 1px solid #e9e9e9;
	font-size: 28rpx;
	border-radius: 50rpx;
}

.form-all .t-a {
	position: relative;
}

.form-all .t-a image {
	width: 40rpx;
	height: 40rpx;
	position: absolute;
	left: 40rpx;
	top: 28rpx;
	margin-right: 20rpx;
}
.form-all .t-a .line{
	width: 2rpx;
	height: 40rpx;
	background-color: #dedede;
	position: absolute;
	top: 28rpx;
	left: 98rpx;
}

</style>

