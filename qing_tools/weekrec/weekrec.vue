<!-- 课程班级 -->
<template>
	<view>
		<cu-custom bgColor="bg-default" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">一周食谱</block>
		</cu-custom>
		<view class="wrap">
			<view class="page-box">
				<form class="form-all" @submit="onWeekrec">
					<view class="t-a">
						<view class="day">DAY1</view>
						<view class="line"></view>
						<view class="multiple-select">
							<view style="height:40px;word-break:break-all;overflow: auto;" @tap="sel_show = true">{{sel_value || "请选择食谱套餐"}}</view>
							<multiple-select v-model="sel_show" :data="array_mules" :default-selected="defaultSelected" @confirm="mulsel_confirm"></multiple-select>
						</view>
					</view>
					<view class="t-a">
						<view class="day">DAY2</view>
						<view class="line"></view>
						<view class="multiple-select">
							<view style="height:40px;word-break:break-all;overflow: auto;" @tap="sel_show = true">{{sel_value || "请选择食谱套餐"}}</view>
							<multiple-select v-model="sel_show" :data="array_mules" :default-selected="defaultSelected" @confirm="mulsel_confirm"></multiple-select>
						</view>
					</view>
					<view class="t-a">
						<view class="day">DAY3</view>
						<view class="line"></view>
						<view class="multiple-select">
							<view style="height:40px;word-break:break-all;overflow: auto;" @tap="sel_show = true">{{sel_value || "请选择食谱套餐"}}</view>
							<multiple-select v-model="sel_show" :data="array_mules" :default-selected="defaultSelected" @confirm="mulsel_confirm"></multiple-select>
						</view>
					</view>
					<view class="t-a">
						<view class="day">DAY4</view>
						<view class="line"></view>
						<view class="multiple-select">
							<view style="height:40px;word-break:break-all;overflow: auto;" @tap="sel_show = true">{{sel_value || "请选择食谱套餐"}}</view>
							<multiple-select v-model="sel_show" :data="array_mules" :default-selected="defaultSelected" @confirm="mulsel_confirm"></multiple-select>
						</view>
					</view>
					<view class="t-a">
						<view class="day">DAY5</view>
						<view class="line"></view>
						<view class="multiple-select">
							<view style="height:40px;word-break:break-all;overflow: auto;" @tap="sel_show = true">{{sel_value || "请选择食谱套餐"}}</view>
							<multiple-select v-model="sel_show" :data="array_mules" :default-selected="defaultSelected" @confirm="mulsel_confirm"></multiple-select>
						</view>
					</view>
					<view class="t-a">
						<view class="day">DAY6</view>
						<view class="line"></view>
						<view class="multiple-select">
							<view style="height:40px;word-break:break-all;overflow: auto;" @tap="sel_show = true">{{sel_value || "请选择食谱套餐"}}</view>
							<multiple-select v-model="sel_show" :data="array_mules" :default-selected="defaultSelected" @confirm="mulsel_confirm"></multiple-select>
						</view>
					</view>
					<view class="t-a">
						<view class="day">DAY7</view>
						<view class="line"></view>
						<view class="multiple-select">
							<view style="height:40px;word-break:break-all;overflow: auto;" @tap="sel_show = true">{{sel_value || "请选择食谱套餐"}}</view>
							<multiple-select v-model="sel_show" :data="array_mules" :default-selected="defaultSelected" @confirm="mulsel_confirm"></multiple-select>
						</view>
					</view>
					<button form-type="submit" class="bg-default">提 交</button>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect.vue";
export default {
	data() {
		return {
			list: [],
			sel_show: false,
			sel_value: "",
			defaultSelected: [],
			array_mules: [{label: '测试1', value: '1', disabled: false},{label: '测试2', value: '2', disabled: false},{label: '测试3', value: '3', disabled: false}],
		};
	},
	onLoad() {
	},
	components: {
		multipleSelect
	},
	computed: {
	},
	methods: {
		mulsel_confirm(data) {
			console.log(data);
			this.sel_value = data.map((el) => el.label).join(", ");
			this.defaultSelected = this.sel_value.split(", ");
			console.log(this.defaultSelected);
		},
		onWeekrec(e) {
			console.log(e.target.value);
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

.form-all input, .form-all .multiple-select {
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

.form-all .t-a .day {
	width: 40rpx;
	height: 40rpx;
	position: absolute;
	left: 20rpx;
	top: 28rpx;
	margin-right: 20rpx;
	font-weight: bold;
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

