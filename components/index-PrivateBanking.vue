<template>
	<view class="index-PrivateBanking">
		<view class="PrivateBanking-list-content">
			<view class="PrivateBanking-list-content-top">
				<image src="@/static/PrivateBanking-top.png" mode=""></image>
			</view>
			<swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="PrivateBanking-list-content-icons">
						<view class="content-icons-text" v-for="(item,index) in listcontentIcons" :key="index">
							<image :src="`../../static/PrivateBanking-icon-${index+1}.png`" mode=""></image>
							<text>{{item}}</text>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="PrivateBanking-list-content-icons">
						<view class="content-icons-text" v-for="(item,index) in listcontentIconsT" :key="index">
							<image :src="`../../static/PrivateBanking-icon-${index+11}.png`" mode=""></image>
							<text>{{item}}</text>
						</view>
					</view>
				</swiper-item>
				
			</swiper>
			
		</view>
		<view class="PrivateBanking-Notice">
			<view class="PrivateBanking-Notice-box">
				<swiper circular :current="currentIndex" @change="onSwiperChange">
					<swiper-item class="Notice-image-text" v-for="(item,index) in 4" :key="index">
						<image :src="`../../static/gg-${index+7}.png`" mode=""></image>
					</swiper-item>
				</swiper>
				
				<view class="Notice-number">
					<view class="number-text">
						{{currentIndex+1}}/4
					</view>
					<text>广告</text>
				</view>
			</view>
		</view>
		<view class="PrivateBanking-rili">
			<titleVue>
				<template #left>
					金融日历
				</template>
				<template #rigth>
					更多
				</template>
			</titleVue>
			<view class="PrivateBanking-time">
				<view class="time" v-for="(item,index) in 7" :key="index">
					<view class="time-box" :style="{'border' : index === 3 ? '1px solid #e80000' : '1px solid #000','color' :index === 3 ? '#e80000' : ' #000'}">
						{{22+index}}
					</view>
					<p :style="{'color' :index === 3 ? '#e80000' : ' #000'}">{{PrivateBankingTime[index]}}</p>
				</view>
			</view>
			<view class="PrivateBanking-club">
				<image src="@/static/xiaoxiang-icon.png" mode=""></image>
				<view class="club-text">
					<p>小象俱乐部</p>
					<text>全新权益快来体验</text>
				</view>
				<view class="club-btn">
					点击进入
				</view>
			</view>
		</view>
		<view class="PrivateBanking-Zooz">
			<titleVue>
				<template #left>
					增值服务
				</template>
			</titleVue>
			<view class="Zooz-image">
				<view class="image" v-for="(item,index) in 6" :key="index">
					<image :src="`../../static/PrivateBanking-added-${index+1}.png`" mode=""></image>
				</view>
			</view>
		</view>
		<view class="PrivateBanking-Hot">
			<titleVue>
				<template #left>
					家业服务
				</template>
			</titleVue>
			<view class="Hot-image">
				<view class="image-box" v-for="(item,index) in 2" :key="index">
					<image :src="`../../static/PrivateBanking-added-${index+7}.png`" mode=""></image>
				</view>
			</view>
		</view>
		<view class="PrivateBanking-fuelUp">
			<titleVue>
				<template #left>
					企业家加油站
				</template>
			</titleVue>
			<view class="PrivateBanking-fuelUp-image">
				<image src="@/static/PrivateBanking-added-9.png" mode=""></image>
			</view>
		</view>
		<view class="PrivateBanking-Hot">
			<titleVue>
				<template #left>
					了解更多
				</template>
			</titleVue>
			<view class="Hot-image">
				<view class="image-box" v-for="(item,index) in 2" :key="index">
					<image :src="`../../static/PrivateBanking-meun-${index+1}.png`" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import titleVue from './titleVue.vue';
	
	export default {
		name:"index-common",
		data() {
			return {
				listTopName:['账户','收支','个人养老金','支付'],
				listcontentIcons:['收支','贷款','支付','贵金属','慈善信托','生活缴费','数字藏品','碳空间','远程办','更多'],
				listcontentIconsT:['碳空间','远程办','更多'],
				PrivateBankingTime:['周日','周一','周二','周三','周四','周五','周六'],
				currentIndex: 0,
				Ztabs:['常用','私银'],
				search:0,
			};
		},
		methods: {
			onSwiperChange(event) {
			  // event.detail.current 表示当前滑动到的索引
			  this.currentIndex = event.detail.current;
			  // 在这里可以执行其他操作，比如更新页面状态或发送请求等
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
		},
		components:{
			titleVue,
		},

	}
</script>

<style lang="scss" scoped>
	.PrivateBanking-list-title{
		width: 90%;
		margin: 0 auto;
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #f7d0d1;
		border-radius: 20rpx 20rpx 0 0;
		.text{
			flex: 1;
			display: flex;
			align-items: center;
			.text-title-one{
				width: 30%;;
				font-size: 30rpx;
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			
				text{
					margin-right: 25rpx;
				}
			}
			.text-title-Tow{
				width: 35%;
				font-size: 30rpx;
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-left: -50rpx;
			}
			.text-title-one-image{
				background: url('@/static/tab_left.png')no-repeat;
				background-size: 100% 100%;
			}
			.text-title-Tow-image{
				background: url('@/static/tab_center.png')no-repeat;
				background-size: 100% 100%;
			}
		}
		image{
			margin: 0 20rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
	.PrivateBanking-list-content{
		width: 90%;
		// height: 200rpx;
		background-color: #fff;
		margin: 0 auto;
		border-radius: 0 0 20rpx 20rpx;
		.PrivateBanking-list-content-top{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			padding-top: 20rpx;
			image{
				width: 90%;
				height: 251rpx;
			}
		}
		swiper{
			width: 100%;
			height: 380rpx;
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
			.PrivateBanking-list-content-icons{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				.content-icons-text{
					width: 20%;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
					margin: 25rpx 0;
					image{
						width: 95rpx;
						height: 85rpx;
					}
					text{
						width: 100%;
						font-size: 28rpx;
						text-align: center;
						margin-top: 5rpx;
					}
				}
			}
		}
		
	}
	.PrivateBanking-Notice{
		width: 100%;
		margin: 0 auto;
		background:url('@/static/shouyesiyin_body_bg.png')no-repeat;
		background-size:100%;
		background-position:bottom ;
		.PrivateBanking-Notice-box{
			width: 90%;
			height: 100%;
			margin: 0 auto;
			border-radius: 20rpx;
			background: linear-gradient(to bottom, rgba(255, 229, 217, 1.0),1%, rgba(255, 255, 255, 0),);
			position: relative;
			.Notice-image-text{
				width: 100%;
				margin: 0 auto;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 700rpx;
					height: 251rpx;
				}
			}
			.Notice-number{
				// width: 50rpx;
				// height: 25rpx;
				border: 1px solid;
				font-size: 15rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				bottom: 20%;
				left: 7%;
				.number-text{
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0 5rpx;
					background: #000;
					color: #fff;
				}
				text{
					padding: 0 5rpx;
					flex: 1;
					text-align: center;
				}
			}
		}
	}
	.PrivateBanking-rili{
		width: 90%;
		margin: 0 auto;
		background-color: #fff;
		border-radius: 20rpx;
		padding-bottom: 20rpx;
		.PrivateBanking-time{
			width: 100%;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			.time{
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				.time-box{
					width: 50rpx;
					height: 50rpx;
					border: 1px solid;
					border-radius: 50rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
				}
				p{
					width: 100%;
					font-size: 20rpx;
					text-align: center;
					margin-top: 5rpx;
				}
			}
		}
		.PrivateBanking-club{
			width: 90%;
			margin: 0 auto;
			margin-top: 40rpx;
			display: flex;
			align-items: center;
			image{
				width: 60rpx;
				height: 70rpx;
			}
			.club-text{
				flex: 1;
				margin-left: 15rpx;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				p{
					width: 100%;
					font-size: 25rpx
				}
				text{
					margin-top: 10rpx;
					font-size: 23rpx
				}
			}
			.club-btn{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				padding: 5rpx 15rpx;
				border-radius: 50rpx;
				border: 1px solid;
				color: #c80607;
			}
		}
	}
	.PrivateBanking-Zooz{
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
	.PrivateBanking-Hot{
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
	.PrivateBanking-fuelUp{
		width: 90%;
		margin: 0 auto;
		background-color: #fff;
		margin-top: 20rpx;
		border-radius: 20rpx;
		padding-bottom: 20rpx;
		.PrivateBanking-fuelUp-image{
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 90%;
				height: 150rpx;
			}
		}
	}
</style>