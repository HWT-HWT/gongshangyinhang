<template>
	<view class="live">
		<view class="search-top">
			<occupy></occupy>
			<searcTitleVue>
				<template #LeftIcon>
					<view class="search-Left-icon">
						<image src="@/static/location_mine_light.png" mode=""></image>
						佛山
					</view>
				</template>
				<template #input>
					<view class="search-input">
						<view>
							<image src="@/static/toolbar_search.png" mode=""></image>
							<text>微信绑定</text>
						</view>
						<image src="@/static/standard_favorite_searchview_microphone-1.png" mode=""></image>
					</view>
				</template>
				<template #RightIcon>
					<view class="search-right-icon">
						<image src="@/static/standard_personal_8_service_w.png" mode=""></image>
						<image src="@/static/msg_mine_light.png" mode=""></image>
						<image src="@/static/more_mine_light.png" mode=""></image>
					</view>
				</template>
			</searcTitleVue>
		</view>
		
		<view class="search" :style='{"opacity": search , "background" : `rgba(255, 255, 255, ${search})`}' v-if="search === 0 ? false:true">
			<occupy></occupy>
			<searcTitleVue>
				<template #LeftIcon>
					<view class="search-Left-icon">
						<image src="@/static/location_mine_black.png" mode=""></image>
						佛山
					</view>
				</template>
				<template #input>
					<view class="search-input">
						<view>
							<image src="@/static/standard_favorite_searchview_magnifier.png" mode=""></image>
							<text>微信绑定</text>
						</view>
						<image src="@/static/standard_favorite_searchview_microphone.png" mode=""></image>
					</view>
				</template>
				<template #RightIcon>
					<view class="search-right-icon">
						<image src="@/static/epass_home_service_icon.webp" mode=""></image>
						<image src="@/static/msg_mine_black.png" mode=""></image>
						<image src="@/static/more_mine_black.png" mode=""></image>
					</view>
				</template>
			</searcTitleVue>
		</view>
		
		<view class="live-banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
				<swiper-item>
					<image src="@/static/live-banner-3.png" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="@/static/live-banner-4.png" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="live-List">
			<liveListVue :list='LiveIcons'></liveListVue>
		</view>
		<view class="live-hot">
			<titleVue>
				<template #left>
					热门活动
				</template>
			</titleVue>
			<BoxImageVue :list='hot'></BoxImageVue>
		</view>
		<view class="live-tabs">
			<z-tabs :list="liveTabs" active-color='#000' bg-color='#f7f7f7'></z-tabs>
		</view>
		<view class="live-government">
			<titleVue>
				<template #left>
					政务服务
				</template>
			</titleVue>
			<view class="Zooz-image">
				<view class="image" v-for="(item,index) in 4" :key="index">
					<image :src="`../../static/live-government-${index+1}.png`" mode=""></image>
				</view>
			</view>
		</view>
		<view class="live-local">
			<titleVue>
				<template #left>
					本地服务
				</template>
			</titleVue>
			<view class="local-image">
				<image src="@/static/live-footer-1.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import occupy from '../../components/occupy.vue'
	import searcTitleVue from '../../components/searc-title.vue'
	import titleVue from '../../components/titleVue.vue';
	import liveListVue from '../../components/live-list.vue';
	import BoxImageVue from '../../components/Box-image.vue';
	export default {
		data() {
			return {
				search:0,
				LiveIcons:[
					{name:'生活缴费',images:'../../static/live-icon-1.png'},
					{name:'权益中心',images:'../../static/live-icon-2.png'},
					{name:'以旧换新',images:'../../static/live-icon-3.png'},
					{name:'便民服务',images:'../../static/live-icon-4.png'},
					{name:'任务中心',images:'../../static/live-icon-5.png'},
					{name:'美食兑换',images:'../../static/live-icon-6.png'},
					{name:'品质外卖',images:'../../static/live-icon-7.png'},
					{name:'积分专区',images:'../../static/live-icon-8.png'},
					{name:'爱购8.8',images:'../../static/live-icon-9.png'},
					{name:'爱全部',images:'../../static/live-icon-10.png'}
				],
				liveTabs:['本地','好物','购车'],
				hot:['../../static/Hot-1.png','../../static/Hot-2.png','../../static/Hot-3.png','../../static/Hot-4.png']
			};
		},
		components:{
			occupy,
			searcTitleVue,
			titleVue,
			liveListVue,
			BoxImageVue
		},
		onPageScroll(Top) {
			this.search =  Top.scrollTop / 100
		}
	}
</script>

<style lang="scss" scoped>
	.live{
		width: 100vw;
		padding-bottom: 50rpx;
		background-color: #f7f7f7;
		position: relative;
		.search-top{
			width: 100%;
			position: absolute;
			top: 0;
			z-index: 999;
			.search-Left-icon{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				color: #fff;
				image{
					margin-right: -15rpx;
					width: 80rpx;
					height: 80rpx;
				}
			}
			.search-input{
				width: 100%;
				padding: 0 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 25rpx;
				color: #fff;
				view{
					display: flex;
					align-items: center;
					text{
						margin:0 10rpx;
					}
				}
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
			.search-right-icon{
				image{
					width: 90rpx;
					height: 90rpx;
				}
			}
		}
		.search{
			width: 100%;
			position: fixed;
			top: 0;
			z-index: 999;
			.search-Left-icon{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				image{
					margin-right: -15rpx;
					width: 80rpx;
					height: 80rpx;
				}
			}
			.search-input{
				width: 100%;
				padding: 0 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 25rpx;
				view{
					display: flex;
					align-items: center;
					text{
						margin:0 10rpx;
					}
				}
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
			.search-right-icon{
				image{
					width: 90rpx;
					height: 90rpx;
				}
			}
		}
		
		.live-banner{
			width: 100%;
			margin: 0 auto;
			background-color: #fff;
			swiper{
				width: 100%;
				height: 500rpx;
				& /deep/ .uni-swiper-dots-horizontal{
					bottom: 15%;
				}
				& /deep/ .uni-swiper-dot{
					width: 9rpx;
					height: 9rpx;
					border-radius: 50%;
					margin-left: -5rpx;
					background: rgba(255, 255, 255, .5);
				}
				& /deep/ .uni-swiper-dot-active{
					width: 22rpx;
					height: 8rpx;
					background: #fff;
					border-radius: 0;
					border-radius: 30%;
				}
				swiper-item{
					image{
						width: 100%;
						height: 500rpx;
					}
				}
			}
		}
		.live-List{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			border-radius: 20rpx;
			margin-top: -60rpx;
			position: relative;
		}
		.live-hot{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			margin-top: 20rpx;
			border-radius: 20rpx;
			padding-bottom: 10rpx;
			.Zooz-image{
				width: 95%;
				margin: 0 auto;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				.image{
					width: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom:20rpx;
					image{
						width: 300rpx;
						height: 110rpx;
					}
				}
			}
		}
		.live-tabs{
			width: 90%;
			margin: 0 auto;
		}
		.live-government{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			margin-top: 20rpx;
			border-radius: 20rpx;
			padding-bottom: 10rpx;
			.Zooz-image{
				width: 95%;
				margin: 0 auto;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				.image{
					width: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom:20rpx;
					image{
						width: 300rpx;
						height: 110rpx;
					}
				}
			}
		}
		.live-local{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			margin-top: 20rpx;
			padding-bottom: 20rpx;
			border-radius: 20rpx;
			.local-image{
				width: 90%;
				margin: 0 auto;
				image{
					width: 100%;
					height: 150rpx;
				}
			}
			
		}
	}
</style>
