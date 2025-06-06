<template>
	<view>
		<view class="home-list-content">
			<view class="home-list-content-top">
				<view class="icon-text" v-for="(item,index) in listTopName" :key="index" @click="listTop(index)">
					<image :src="`../../static/index-icon-bg-${index+1}.png`" mode=""></image>
				</view>
			</view>
			<swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="home-list-content-icons">
						<view class="content-icons-text" v-for="(item,index) in listcontentIcons" :key="index" @click="GetIndex(index)">
							<image :src="`../../static/home_list_icon${index+1}.png`" mode=""></image>
							<text>{{item}}</text>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="home-list-content-icons">
						<view class="content-icons-text" v-for="(item,index) in listcontentIconsT" :key="index">
							<image :src="`../../static/home_list_icon2_${index+1}.png`" mode=""></image>
							<text>{{item}}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
			
		</view>
		
		<swiperBannerVue :swiperHeight='200' :swiperImage="swiperImage">
			
		</swiperBannerVue>
			
		<view class="home-image">
			
		</view>
		
		<view class="home-wealth">
			<titleVue>
				<template #left>
					工银财富
				</template>
				<template #rigth>
					更多
				</template>
			</titleVue>
			<BoxImageVue :list='boxImage'></BoxImageVue>
			<scrollBtnVue :list='wealthInvest'></scrollBtnVue>
			<investTextBoxVue :list="TextBox"></investTextBoxVue>
			<investTextBoxVue :list="TextBoxs"></investTextBoxVue>
		</view>
		
		<view class="home-Zooz">
			<titleVue>
				<template #left>
					客群专区
				</template>
			</titleVue>
			<BoxImageVue :list='ZozzImage'></BoxImageVue>
		</view>
		<view class="home-video">
			<view class="video-text">
				<view class="video-top">
					<titleVue>
						<template #left>
							云网点
						</template>
						<template #rigth>
								更多
						</template>
					</titleVue>
					<view class="video-top-content">
						<p>广州新华支行</p>
						<uni-tag text="营业中" type="primary" size="mini" style="background-color: #2a67a0; border: none; font-weight:bold;" /><text class="video-top-content-name">距您3.9KM</text>
					</view>	
					<view class="video-top-bottom">
						<view class="video-top-bottom-box">
							<image src="../static/branchesearch_9_standard_net_order.png" mode=""></image>
							<p>预约取号</p>
						</view>
						<view class="video-top-bottom-box">
							<image src="../static/branchesearch_9_standard_navigation.png" mode=""></image>
							<p>导航前往</p>
						</view>
					</view>
				</view>
				<view class="video-footer">
					<p>最近转账 一点即转账</p>
					<view class="video-footer-box">
						去转账
					</view>
				</view>
			</view>
			<view class="video-box">
				<video 
					id="myVideo" 
					class="video-mp4" 
					src="@/static/mp4/WeChat_20241220100542.mp4"
					@error="videoErrorCallback" 
					:enable-progress-gesture="false" 
					:controls="true"
					:loop="true" 
					autoplay 
					:muted="true"
					object-fit="fill"
				>
				</video>
			</view>
		</view>
		<view class="home-Hot">
			<titleVue>
				<template #left>
					热门活动
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
	import swiperBannerVue from './swiper-banner.vue';
	import scrollBtnVue from './scroll-btn.vue';
	import investTextBoxVue from './invest-textBox.vue';
	import BoxImageVue from './Box-image.vue';
	import { gologin } from '@/components/login.js'
	export default {
		name:"index-common",
		data() {
			return {
				listTopName:['账户','收支','个人养老金','支付'],
				listcontentIcons:['存款','e通办','天天盈','贷款','生活缴费','资产','薪管家','"工"迎新春 ','养老金融','贵金属'],
				listcontentIconsT:['财富','家庭财富','任务中心','分期付款','一键绑卡','安全中心','投诉咨询','自动归集 ','更多'],
				currentIndex: 0,
				Ztabs:['常用','私银'],
				search:0,
				swiperImage:['../../static/gg-1.png','../../static/gg-2.png','../../static/gg-3.png','../../static/gg-4.png','../../static/gg-5.png'],
				wealthInvest:['活钱生利','低波稳健','进取投资'],
				TextBox:{
					border:true,
					title:'天天盈',
					leftTop:'2.3190%',
					leftBottom:'最高七日年化收..',
					rigthTop:'7*24小时快赎服务',
					rigthBottom:['随用随取','1分起购','低风险'],
					tisiFooter:'*关联货币基金七日年化分布在1.1970%-2.3190%'
				},
				TextBoxs:{
					title:'工银理财“添利宝”净值型理财产品(XLT1801)',
					leftTop:'1.5379%',
					leftBottom:'七日年化收益率',
					rigthTop:'老牌产品，活钱添利',
					rigthBottom:['1元起购 ','风险低','代销'],
					tisiFooter:'*关联货币基金七日年化分布在1.1970%-2.3190%',
					Optimal:'业绩周期 2024.12.19-2024.12.25',
					tisiText:'理财产品过往业绩不代表其未来表现，不等于理财产品实际收益，投资须谨慎。',
					tisiFooter:'业绩来源:本理财产品过往业绩由产品管理人工银理...'
				},
				boxImage:['../../static/Zooz-1.png','../../static/Zooz-2.png'],
				ZozzImage:['../../static/Zooz-1.png','../../static/Zooz-2.png','../../static/Zooz-3.png','../../static/Zooz-4.png','../../static/Zooz-5.png','../../static/Zooz-6.png'],
				hot:['../../static/Hot-1.png','../../static/Hot-2.png','../../static/Hot-3.png','../../static/Hot-4.png']
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
			listTop(index){
				
				index === 0 ? gologin('/pages/Account/Account'): '';
				index === 1 ? gologin('/pages/RevenueExpenditure/RevenueExpenditure'): '';
				index === 2 ? uni.navigateTo({
					url:'/pages/pension/pension'
				}) : ''
			},
			GetIndex(index){
				index === 3 ? uni.navigateTo({
					url:'/pages/PageLoan/PageLoan'
				}) : ''
			}
		},
		components:{
			titleVue,
			swiperBannerVue,
			scrollBtnVue,
			investTextBoxVue,
			BoxImageVue
		},

	}
</script>

<style lang="scss" scoped>
	.home-list-title{
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
	.home-list-content{
		width: 90%;
		// height: 200rpx;
		background-color: #fff;
		margin: 0 auto;
		border-radius: 0 0 20rpx 20rpx;
		.home-list-content-top{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			padding-top: 30rpx;
			.icon-text{
				width: 23%;
				height: 220rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				background-size: 100% 100%;
				padding: 0 5rpx;
				image{
					width: 100%;
					height: 100%;
				}
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
			.home-list-content-icons{
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
						font-size: 25rpx;
						text-align: center;
						margin-top: 5rpx;
					}
				}
			}
		}
		
	}
	.home-image{
		width: 90%;
		height: 251rpx;
		margin: 0 auto;
		border-radius: 10rpx;
		margin-top: 20rpx;
		background:url('@/static/home_bj.png') no-repeat;
		background-size: 100% 100%;
	}
	
	.home-wealth{
		width: 90%;
		margin: 0 auto;
		border-radius: 20rpx;
		margin-top: 20rpx;
		background-color: #fff;
	}
	
	.home-Zooz{
		width: 90%;
		margin: 0 auto;
		background-color: #fff;
		margin-top: 20rpx;
		border-radius: 20rpx;
		padding-bottom: 10rpx;
	}
	.home-video{
		width: 90%;
		margin: 0 auto;
		margin-top: 20rpx;
		position: relative;
		display: flex;
		.video-text{
			flex: 1;
			padding-right: 20rpx;
			.video-top{
				width: 100%;
				background-color: #fff;
				border-radius: 20rpx;
				padding-bottom:40rpx;
				.video-top-content{
					width: 90%;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					padding: 20rpx 0;
					margin: 0 auto;
					background-color: #f0f4ff;
					border-radius: 10rpx;
					p{
						padding-left: 20rpx;
						font-size: 28rpx;
						font-weight: bold;
					}
					text{
						margin-top: 10rpx;
						margin-left: 20rpx;
					}
					.video-top-content-name{
						font-size: 23rpx;
						color:dodgerblue;
						margin-left: 10rpx;
					}
				}
				.video-top-bottom{
					width: 90%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 0 auto;
					margin-top: 20rpx;
					.video-top-bottom-box{
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						justify-content: center;
						image{
							width: 65rpx;
							height: 65rpx;
						}
						p{
							text-align: center;
							width: 100%;
							font-size: 25rpx;
							font-weight: bold;
							margin-top: 5rpx;
						}
					}
					
				}
			}
			.video-footer{
				width: 100%;
				padding: 30rpx 0;
				background-color: #fff;
				border-radius: 20rpx;
				margin-top: 40rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-content: center;
				p{
					font-size: 28rpx;
					text-align: center;
					font-weight: bold;
				}
				.video-footer-box{
					border: 1px solid;
					border-radius: 50rpx;
					font-size: 28rpx;
					padding:5rpx 25rpx;
					color: #c80607;
					margin-top: 20rpx;
				}
			}
		}
		.video-box{
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			z-index: 1;
			.video-mp4{
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
				
				& /deep/ .uni-video-bar{
					background-color: rgba(0, 0, 0, 0.2);
				}
				& /deep/ .uni-video-current-time{
					display: none !important;
				}
				& /deep/ .uni-video-progress-container{
					display: none !important;
				}
				& /deep/ .uni-video-duration{
					display: none !important;
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
</style>