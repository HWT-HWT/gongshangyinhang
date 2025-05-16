<template>
	<view class="card">
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
		<view class="peony-card">
			<image src="@/static/peony-card-bg.png" mode=""></image>
		</view>
		<view class="peony-card-text">
			<p>真回馈、真减费、真让利</p>
			<p>多平台消费立减</p>
			<view class="peony-card-btn">
				申请信用卡
			</view>
		</view>
		<view class="swiper-list">
			<swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="home-list-content-icons">
						<view class="content-icons-text" v-for="(item,index) in cardListOne" :key="index">
							<image :src="`../../static/card-list-${index+1}.png`" mode=""></image>
							<text>{{item}}</text>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="home-list-content-icons">
						<view class="content-icons-text" v-for="(item,index) in cardListTow" :key="index">
							<image :src="`../../static/card-list-2-${index+1}.png`" mode=""></image>
							<text>{{item}}</text>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="home-list-content-icons">
						<view class="content-icons-text" v-for="(item,index) in cardListThree" :key="index">
							<image :src="`../../static/card-list-3-${index+1}.png`" mode=""></image>
							<text>{{item}}</text>
						</view>
					</view>
				</swiper-item> 
			</swiper>
		</view>
		<view class="card-loan">
			<titleVue LFontSize="40">
				<template #left>
					借款专区
				</template>
			</titleVue>
			<view class="card-loan-list">
				<view class="card-loan-list-text">
					<p>账单分期</p>
					<span>还款无忧 最长60期</span>
				</view>
				<view class="card-loan-list-btn">
					<view class="loan-btn">
						立即办理
					</view>
				</view>
			</view>
			<view class="card-icon-text">
				<view class="icon-text" v-for="(item,index) in cardLoan" :key="index" :style="{'boxShadow': index % 2 === 0 ? '1rpx 0 0rpx rgba(0, 0, 0, .1)' : ''}">
					<image :src="`../../static/card-loan-${index+1}.png`" mode=""></image>
					<view class="text">
						<p>{{item.title}}</p>
						<span>{{item.text}}</span>
					</view>
				</view>
			</view>
		</view>
		<view class="card-Notice">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in 8 " :key="index">
					<image :src="`../../static/card-Notice-${index+1}.png`" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="card-introduce">
			<titleVue LFontSize="40" RFontSize="30">
				<template #left>
					卡片推荐
				</template>
				<template #rigth>
					更多
				</template>
			</titleVue>
			<view class="introduce-Maxcard">
				<view class="Maxcard-text">
					<p>工银生肖信用卡</p>
					<span>工银生肖信用卡，兔年印章已解锁</span>
				</view>
				<image src="../../static/card-title-1.png" mode=""></image>
			</view>
			<view class="introduce-list">
				<view class="list-card">
					<image src="@/static/card-1.png" mode=""></image>
					<p>牡丹超惠信用卡</p>
					<span>6折透支 6折分期 </span>
				</view>
				<view class="list-card">
					<image src="@/static/card-2.png" mode=""></image>
					<p>宇宙星座信用卡</p>
					<span>解锁你的星座权益</span>
				</view>
				<view class="list-card">
					<image src="@/static/card-3.png" mode=""></image>
					<p>无界白金数字卡</p>
					<span>1元停车</span>
				</view>
			</view>
		</view>
		<view class="card-rights">
			<titleVue LFontSize="40">
				<template #left>
					活动权益
				</template>
			</titleVue>
			<view class="MaxBanner">
				<swiper :indicator-dots="true"  circular>
					<swiper-item>
						<image src="../../static/care-rights-mini-1.png" mode=""></image>
						<image src="../../static/care-rights-mini-2.png" mode=""></image>
						<image src="../../static/care-rights-mini-3.png" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/care-rights-mini-4.png" mode=""></image>
						<image src="../../static/care-rights-mini-5.png" mode=""></image>
						<image src="../../static/care-rights-mini-6.png" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/care-rights-mini-7.png" mode=""></image>
						<image src="../../static/care-rights-mini-8.png" mode=""></image>
						<image src="../../static/care-rights-mini-9.png" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/care-rights-mini-10.png" mode=""></image>
						<image src="../../static/care-rights-mini-11.png" mode=""></image>
						<image src="../../static/care-rights-mini-12.png" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="Text">
				<view class="Text-icon">
					<image src="@/static/care-rights-bottom-1.png" mode=""></image>
					<view class="text">
						<p>爱购新客礼</p>
						<span>新客办卡首刷即享</span>
					</view>
				</view>
				<view class="Text-icon">
					<image src="@/static/care-rights-bottom-2.png" mode=""></image>
					<view class="text">
						<p>工银爱享礼</p>
						<span>花开爱享，礼跃</span>
					</view>
				</view>
				<view class="Text-icon">
					<image src="@/static/care-rights-bottom-3.png" mode=""></image>
					<view class="text">
						<p>推荐办卡</p>
						<span>最高超万元奖励</span>
					</view>
				</view>
				<view class="Text-icon">
					<image src="@/static/care-rights-bottom-4.png" mode=""></image>
					<view class="text">
						<p>出行权益</p>
						<span>机场高铁出行权益</span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import occupy from '../../components/occupy.vue'
	import searcTitleVue from '../../components/searc-title.vue'
	import titleVue from '../../components/titleVue.vue';
	export default {
		data() {
			return {
				search:0,
				cardListOne:['申请办卡','申请进度','卡片启用','支付聚惠','家装分期','分期付款','现金分期','卡片权益 ','一键绑卡','积分兑换'],
				cardListTow:['自动还款','数字卡','云闪付','账户安全锁','查额度','年费查询','急用钱','e分期 ','信用报告','分期甄选'],
				cardListThree:['智行天下',],
				cardLoan:[
					{title:'现金分期',text:'最高5万元'},
					{title:'e分期',text:'5折优惠 随心花'},
					{title:'一键家装',text:'尊享服务 利率优惠'},
					{title:'分期甄选',text:'好物推荐 免息分期'}
				]
			};
		},
		components:{
			occupy,
			searcTitleVue,
			titleVue
		},
		onPageScroll(Top) {
			this.search =  Top.scrollTop / 100
		}
	}
</script>

<style lang="scss" scoped>
	.card{
		width: 100vw;
		// height: 100vh;
		background: url('@/static/creditpage_top_bg.webp')no-repeat;
		background-color: #fff;
		background-size: 100%;
		padding-bottom: 50rpx;
		.search-top{
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
		.peony-card{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top:20rpx ;
			image{
				width: 600rpx;
				height: 235rpx;
			}
		}
		.peony-card-text{
			width: 100%;
			box-shadow: 0 5rpx 20rpx rgba(0, 0, 0, .1);
			padding: 100rpx 0;
			background-color: #fff;
			text-align: center;		
			p{
				width: 100%;
				font-size: 28rpx;
				font-weight: bold;
				color: #555;
				margin: 15rpx 0;
			}
			.peony-card-btn{
				width: 300rpx;
				height: 70rpx;
				background: #ce0000;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50rpx;
				font-size: 30rpx;
				margin: 0 auto;
				margin-top: 30rpx;
			}
		}
		.swiper-list{
			width: 90%;
			background-color: #fff;
			margin: 0 auto;
			border-radius:20rpx;
			margin-top: 20rpx;
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
							font-size: 28rpx;
							text-align: center;
							margin-top: 5rpx;
						}
					}
				}
			}
		}
		.card-loan{
			width: 90%;
			margin: 0 auto;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1),;
			border-radius: 20rpx;
			padding-bottom: 40rpx;
			margin-top: 40rpx;
			.card-loan-list{
				width: 90%;
				background: #fff0e4;
				margin: 0 auto;
				border-radius: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 5rpx 0;
				.card-loan-list-text{
					width: 50%;
					padding: 20rpx;
					p{
						font-size: 34rpx;
						font-weight: bold;
						margin-top: 10rpx;
					}
					span{
						font-size: 24rpx;
					}
				}
				.card-loan-list-btn{
					width: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					.loan-btn{
						background-color: #f6bd78;
						border-radius: 50rpx;
						padding:10rpx 30rpx;
						color: #fff;
						font-weight: bold;
						font-size: 28rpx;
					}
				}
			}
			.card-icon-text{
				width: 90%;
				margin: 0 auto;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-evenly;
				margin-top: 20rpx;
				.icon-text{
					width: 50%;
					display: flex;
					align-items: center;
					padding: 10rpx 0;
					border-radius: 5rpx;
					image{
						width: 60rpx;
						height: 60rpx;
						margin-left: 20rpx;
					}
					.text{
						padding-left: 10rpx;
						p{
							font-size: 28rpx;
							font-weight: bold;
						}
						span{
							font-size: 23rpx;
							color: #555;
							
						}
					}
				}
			}
		}
		.card-Notice{
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			& /deep/ .uni-swiper-dots-horizontal{
				left: 15%;
			}
			& /deep/ .uni-swiper-dot{
				transform: scale(0.8);
				width: 18rpx;
				height: 8rpx;
				border-radius: 50rpx;
				margin-left: -15rpx;
				background: rgba(255, 255, 255, 0.6);
			}
			& /deep/ .uni-swiper-dot-active{
				transform: scale(0.8);
				width: 18rpx;
				height: 8rpx;
				background: #c80607;
				border-radius: 0;
				border-radius: 30%;
			}
			swiper{
				width: 100%;
				height: 180rpx;
				swiper-item{
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.card-introduce{
			width: 90%;
			margin:0 auto;
			margin-top: 20rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1),;
			border-radius: 20rpx;	
			.introduce-Maxcard{
				width: 90%;
				// padding: 0 30rpx;
				margin: 0 auto;
				border-radius:20rpx;
				background: linear-gradient(to right,#fbe2c1 , #fef8dd);
				display: flex;
				align-items: center;
				// justify-content: space-between;
				.Maxcard-text{
					padding: 30rpx;
					p{
						font-size: 30rpx;
						font-weight: bold;
					}
					span{
						font-size: 25rpx;
					}
				}
				image{
					width: 70rpx;
					height:  95rpx;
					margin-left: 20rpx;
				}
			}
			.introduce-list{
				width: 90%;
				margin: 0 auto;
				margin-top: 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				padding-bottom: 30rpx;
				.list-card{
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
					text-align: center;
					line-height: 35rpx;
					image{
						width:150rpx;
						height:100rpx;
					}
					p{
						font-size: 24rpx;
					}
					span{
						font-size: 22rpx;
						color: #666;
					}
				}
			}
		}
		.card-rights{
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			border-radius: 20rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			position: relative;	
			.MaxBanner{
				width: 90%;
				height: 450rpx;
				margin: 0 auto;
				position: relative;
				background-color: #fff;
				background: url('@/static/card-rights-bg-1.png') no-repeat;
				background-size: 100% 100%;
				swiper{
					width: 100%;
					height: 100rpx;
					position: absolute;
					bottom: 15rpx;
					& /deep/ .uni-swiper-dots-horizontal{
						display: none;
					}
					swiper-item{
						display: flex;
						justify-content: space-evenly;
						align-items: center;
						image{
							width: 30%;
							height: 90rpx;
						}
						image:hover{
							border: 4rpx solid #fff;
							border-radius: 20rpx;
						}
					}
				}
				
			}
			.Text{
				width: 90%;
				margin: 0 auto;
				// margin-top: 20rpx;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content:space-evenly;
				padding-bottom: 40rpx;
				.Text-icon{
					width: 45%;
					display: flex;
					align-items: center;
					background-color: #fef9f3;
					padding: 20rpx 0;
					margin: 0 15rpx;
					margin-top: 20rpx;
					
					border-radius: 20rpx;
					image{
						width: 70rpx;
						height: 100rpx;
					}
					.text{
						margin-left: 10rpx;
						
						p{
							font-size: 25rpx;
							font-weight: bold;
						}
						span{
							font-size: 23rpx;
						}
					}
				}
			}
		}
	}
</style>
