<template>
	<view class="pension-banner">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :style="{'height':swiperHeight+'rpx'}">
			<swiper-item v-for="(item,index) in swiperImage" :key="index">
				<image :src="item" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"swiper-banner",
		data() {
			return {
				
			};
		},
		props:{
			swiperHeight:{
				type:Number,
				default:160
			},
			swiperImage:{
				type:Array
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pension-banner{
		width: 90%;
		margin: 0 auto;
		margin-top: 20rpx;
		swiper{
			width: 100%;
			height: 160rpx;
			& /deep/ .uni-swiper-dot{
				width: 9rpx;
				height: 9rpx;
				border-radius: 50%;
				margin-left: -5rpx;
			}
			& /deep/ .uni-swiper-dot-active{
				width: 22rpx;
				height: 8rpx;
				background: #c80607;
				border-radius: 0;
				border-radius: 30%;
			}
			swiper-item{
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>