<template>
	<view class="index-message">
		<view class="message-kingkong">
			<view class="kingkong-box">
				<view class="kingkong-box-image">
					<image src="@/static/campus_kingkong_caishang.png" mode=""></image>
					<image src="@/static/campus_kingkong_ditan.png" mode=""></image>
					<image src="@/static/campus_kingkong_gongyi.png" mode=""></image>
					<image src="@/static/campus_kingkong_quanyi.png" mode=""></image>
				</view>
				<view class="kingkong-text-box">
					<view class="text-box">
						<image src="@/static/campus_magic.png" mode=""></image>
						<view class="text">
							<p>魔法空间</p>
							<span>且以星光 点亮成长</span>
						</view>
					</view>
					<image src="@/static/campus_magic_btn.png" mode=""></image>
				</view>
			</view>
		</view>
		<swiperBannerVue :swiperHeight='200' :swiperImage="swiperImage"></swiperBannerVue>
		<view class="home-Hot">
			<titleVue>
				<template #left>
					粤享理财
				</template>
				<template #rigth>
					更多
				</template>
			</titleVue>
			<BoxImageVue :list='hot'></BoxImageVue>
		</view>
	</view>
</template>

<script>
	import titleVue from './titleVue.vue';
	import BoxImageVue from './Box-image.vue';
	import swiperBannerVue from './swiper-banner.vue';
	export default {
		name:"index-message",
		data() {
			return {
				hot:['../../static/Hot-1.png','../../static/Hot-2.png','../../static/Hot-3.png','../../static/Hot-4.png'],
				swiperImage:['../../static/gg-1.png','../../static/gg-2.png','../../static/gg-3.png','../../static/gg-4.png','../../static/gg-5.png'],
			};
		},
		components:{
			titleVue,
			BoxImageVue,
			swiperBannerVue
		}
	}
</script>

<style scoped lang="scss"> 
	.index-message{
		width: 100%;
		margin: 0 auto;
		.message-kingkong{
			width: 90%;
			margin: 0 auto;
			padding-bottom: 20rpx;
			border-radius: 0 0 20rpx 20rpx;
			background: #fff;
			.kingkong-box{
				width: 95%;
				padding: 10rpx 0;
				margin: 0 auto;
				background: url("@/static/campus_jinggangqu_bg.webp");
				background-size: 100% 100%;
				.kingkong-box-image{
					display: flex;
					justify-content: space-evenly;
					margin-bottom: 10rpx;
					image{
						width: 130rpx;
						height: 120rpx;
					}
				}
				.kingkong-text-box{
					padding:30rpx;
					display: flex;
					justify-content: space-between; 
					align-items: center;
					.text-box{
						display: flex;
						align-items: center;
						
						image{
							width: 40rpx;
							height: 45rpx;
						}
						.text{
							display: flex;
							flex-wrap: wrap;
							align-items: center;
							margin: 0 15rpx;
							p{
								width: 100%;
								font-size: 30rpx;
							}
							span{
								font-size: 19rpx
							}
						}
					}
					image{
						width: 150rpx;
						height: 50rpx;
					}
				}
			}
			
		}
		.home-Hot{
			width: 90%;
			background-color: #fff;
			margin: 0 auto;
			margin-top: 30rpx;
			border-radius: 20rpx;
			.Hot-image{
				width: 95%;
				margin: 0 auto;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				.image-box{
					padding-bottom:20rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-left: 20rpx;
					image{
						width: 300rpx;
						height: 110rpx;
					}
				}
			}
		}
	}
</style>