<template>
	<view class="wealth">
		<view class="search-top">
			<occupy></occupy>
			<searcTitleVue>
				<template #LeftIcon>
					<view class="search-Left-icon">
						<image src="@/static/location_mine_light.png" mode=""></image>
						广州
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
						广州
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
		<view class="wealth-topTitle" v-if='!token'>
			<view class="topTitle-btn" @click="Gologin">
				点击登录
			</view>
			<p>登录后查看您的投资资产</p>
		</view>
		<view class="wealth-topTitle-Logon" v-else>
			<view class="wealth-Logon-title" >
				<view class="Logon-title">
					<view class="left">
						我的投资资产(元) 
						<image src="@/static/mine_asset_eyeon_5th.png" mode="" v-if="Eye" @click="wealthEye"></image> 
						<image src="@/static/mine_asset_eyeoff_5th.png" mode="" v-else @click="wealthEye"></image> 
					</view>
					<view class="right">
						我的关注 
						<text v-if="Eye">0</text>
						<image src="@/static/nine_search_right_arrow.png" mode=""></image> 
					</view>
				</view>
				<view class="money" v-if="Eye">0.00 <image src="@/static/nine_search_right_arrow.png" mode=""></image> </view>
				<view class="money" v-else>****</view>
			</view>
			<view class="footer">
				<text>天天盈</text>
				<image src="@/static/nine_search_right_arrow.png" mode=""></image>
			</view>
		</view>
		<view class="wealth-swiper">
			<swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="home-list-content-icons">
						<view class="content-icons-text" v-for="(item,index) in wealthIcons" :key="index">
							<image :src="`../../static/wealth-list-${index+1}.png`" mode=""></image>
							<view>{{item}}</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="home-list-content-icons">
						<view class="content-icons-text" v-for="(item,index) in wealthIconsT" :key="index">
							<image :src="`../../static/wealth-list-${index+11}.png`" mode=""></image>
							<view>{{item}}</view>
						</view>
					</view>
				</swiper-item>
				
			</swiper>
		</view>
		<view class="wealth-selected">
			<titleVueVue>
				<template #left>	
					财富精选
				</template>
				<template #rigth>
					<text style="color: #555;">更多精选 快来研选</text>
				</template>
			</titleVueVue>
			<scroll-view scroll-x="true">
				<view class="Optimal-title-btn">
					<view class="Optimal-btn" v-for="(item,index) in wealthSelected" :key="index">
						{{item}}
					</view>
				</view>
			</scroll-view>
			<view class="wealth-selected-image">
				<image src="../../static/wealth-selected-image.png" mode=""></image>
			</view>
		</view>
		<view class="wealth-invest">
			<titleVueVue>
				<template #left>	
					四笔钱
				</template>
			</titleVueVue>
			<scroll-view scroll-x="true">
				<view class="Optimal-title-btn">
					<view class="Optimal-btn" v-for="(item,index) in wealthInvest" :key="index">
						{{item}}
					</view>
				</view>
			</scroll-view>
			<view class="wealth-invest-textBox" style="border-bottom: 1px solid #efefef;">
				<view class="Optimal-money">
					<view class="money-title">
						工银理财·添利宝现金管理类开放净值型理财产品2号(23GS2066)
						<uni-tag class="uni-tag" text="理财" style="margin-left: 20rpx;" type="primary" size="mini"/>
					</view>
					<view class="Optimal-list">
						<view class="Optimal-list-left">
							<p class="Optimal-list-left-MaxTitle">1.4374%</p>
							<p class="Optimal-list-left-MiniTitle">七日年化收益率</p>
						</view>	
						<view class="Optimal-list-rigth">
							<p class="Optimal-list-left-MaxTitle">随时申赎，活钱添利</p>
							<p class="Optimal-list-left-MiniText">
								<text>1元起购</text>
								<text>低风险</text>
								<text style="border: none;">代销</text>
							</p>
						</view>
					</view>
					<view class="Optimal-bottom">
						<p>业绩周期 2024.12.16-2024.12.22</p>
					</view>
					<view class="Optimal-tisi">
						<view class="Optimal-tisi-text-icon">
							<view class="tisi-text">
								理财产品过往业绩不代表其未来表现，不等于理财产品实际收益，投资须谨慎。
							</view>
							<view class="tisi-icon">
								<image src="@/static/nine_search_right_arrow.png" mode=""></image>
							</view>
						</view>
						<p>业绩来源:本理财产品过往业绩由产品管理人工银理财...</p>
					</view>
				</view>
			</view>
			
			<view class="wealth-invest-textBox">
				<view class="Optimal-money">
					<view class="money-title">
						工银理财·添利宝鑫享净值型理财产品(21GS2699)
						<uni-tag class="uni-tag" text="理财" style="margin-left: 20rpx;" type="primary" size="mini"/>
					</view>
					<view class="Optimal-list">
						<view class="Optimal-list-left">
							<p class="Optimal-list-left-MaxTitle">1.8215%</p>
							<p class="Optimal-list-left-MiniTitle">七日年化收益率</p>
						</view>	
						<view class="Optimal-list-rigth">
							<p class="Optimal-list-left-MaxTitle">申赎灵活，打理活钱</p>
							<p class="Optimal-list-left-MiniText">
								<text>1元起购</text>
								<text>低风险</text>
								<text style="border: none;">代销</text>
							</p>
						</view>
					</view>
					<view class="Optimal-bottom">
						<p>业绩周期 2024.12.16-2024.12.22</p>
					</view>
					<view class="Optimal-tisi">
						<view class="Optimal-tisi-text-icon">
							<view class="tisi-text">
								理财产品过往业绩不代表其未来表现，不等于理财产品实际收益，投资须谨慎。
							</view>
							<view class="tisi-icon">
								<image src="@/static/nine_search_right_arrow.png" mode=""></image>
							</view>
						</view>
						<p>业绩来源:本理财产品过往业绩由产品管理人工银理财...</p>
					</view>
				</view>
			</view>
		</view>
		<view class="wealth-activity">
			<titleVueVue RFontSize="24">
				<template #left>
					财富活动
				</template>
				<template #rigth>
					<text >更多活动 快来参与</text>
				</template>
			</titleVueVue>
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
				<swiper-item v-for="(item,index) in 5" :key="index">
					<image :src="`../../static/card-footer-${index+1}.png`" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="wealth-collect">
			<titleVueVue RFontSize="24">
				<template #left>
					财富聚焦
				</template>
				<template #rigth>
					<text >更多精彩 快来社区</text>
				</template>
			</titleVueVue>
			<view class="collect-image">
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<image src="@/static/card-collect-1.png" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image src="@/static/card-collect-2.png" mode=""></image>
					</swiper-item>
				</swiper>
				<view class="image">
					<image src="@/static/card-collect-1-1.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="wealth-study">
			<titleVueVue>
				<template #left>
					财富学苑
				</template>
				<template #rigth>
					<text >更多知识 快来学习</text>
				</template>
			</titleVueVue>
			<view class="study-image">
				<image src="@/static/card-footer-6.png" mode=""></image>
			</view>
			<view class="study-list" v-for="(item,index) in study" :key="index">
				<image src="@/static/card-collect-icon-1.png" mode=""></image>
				<text>{{item}}</text>
				<image src="@/static/nine_search_right_arrow.png" mode="" style="transform: scale(0.55);"></image>
			</view>
		</view>
		<view class="wealth-Ztabs">
			<z-tabs :list="Ztabs" active-color='#000' bg-color='#f7f7f7'></z-tabs>
		</view>
		<view class="wealth-Ztabs-list"v-for="(item,index) in Ztabslist" :key="index">
			<view class="Ztabs-text" >
				<p>{{item.name}}</p>
				<p><uni-tag class="uni-tag" :text="sum" type="primary" size="mini" v-for="(sum,num) in item.list" :key="num"/> <text>{{item.time}}</text> </p>
			</view>
			<image :src="`../../static/Ztaber-footer-${index+1}.png`" mode=""></image>
		</view>
	</view>
</template>

<script>
	import occupy from '../../components/occupy.vue'
	import searcTitleVue from '../../components/searc-title.vue'
	import titleVueVue from '../../components/titleVue.vue';
	import {gologin} from '@/components/login.js'
	export default {
		data() {
			return {
				search:0,
				wealthIcons:['资产诊断','柜台债券','实物贵金属','账户能源','AI投','产品信息查询','外汇买卖 ','积存贵','账户基本金属','更多'],
				wealthIconsT:['风险能力评测','存款','理财','基金','贵金属','保险','结售汇','外币兑换 ','证券','储蓄国债'],
				wealthSelected:['为您挑选','随心快赎','乐享系列','基金精选','黄金投资'],
				wealthInvest:['活钱生利','低波稳健','进取投资'],
				study:['指数有哪些类别?','适合稳健投资者的基金产品有哪些?','净值型理财产品的净值为什么会波动?'],
				Ztabs:['看市场','短视频','学知识','财富号'],
				Ztabslist:[
					{name:'中央经济会议召开，释放哪些积极信号',time:'富国基金 12-16',list:['经济会议']},
					{name:'市场日报(2024.12.20)',time:'工银财富 12-20',list:['A股','收盘']},
					{name:'市场直通车',time:'工银理财 12-17',list:['A股','收盘']},
					{name:'博时基金热点解析',time:'博时基金 昨天 08:36',list:['欧美','经..']},
					{name:'市场日报(2024.12.20)',time:'工银财富 12-20',list:['A股','收盘']},
					{name:'王帅:AI推动光模块迭代板块机会来了?',time:'银华基金12-18',list:['TMT','人工智能']},
				],
				Eye:false,
				token:null
			};
		},
		components:{
			occupy,
			searcTitleVue,
			titleVueVue
		},
		onPageScroll(Top) {
			this.search =  Top.scrollTop / 100
		},
		methods:{
			wealthEye(){
				this.Eye = !this.Eye
			},
			checkLogin(){
				this.token = uni.getStorageSync('account')
			},
			Gologin(){
				gologin('/pages/login/login')
			}
		},
		onShow() {
			this.checkLogin()
		}
	}
</script>

<style lang="scss" scoped>
	.wealth{
		width: 100vw;
		// height: 100vh;
		background: url('@/static/invest9_bg.webp')no-repeat;
		background-color: #f5f7f9;
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
		.wealth-topTitle{
			width: 90%;
			height: 310rpx;
			background: url('@/static/wealth-Totitle.png')no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
			border-radius: 20rpx;
			box-shadow: 0 5rpx 10rpx rgba(0, 0, 0, 0.1);
			.topTitle-btn{
				width: 250rpx;
				height: 75rpx;
				border: 1px solid;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 40rpx;
				font-weight: bold;
				border-radius: 50rpx;
				color: #c80607;
				margin: 0 auto;
				position: relative;
				top: 140rpx;
			}
			p{
				width: 100%;
				text-align: center;
				font-size: 28rpx;
				color: #555;
				margin-top: 10rpx;
				position: relative;
				top: 150rpx;
			}
		}
		.wealth-topTitle-Logon{
			width: 90%;
			height: 310rpx;
			background: url('@/static/wealth-Totitle-1.png')no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
			border-radius: 20rpx;
			box-shadow: 0 5rpx 10rpx rgba(0, 0, 0, 0.1);
			position: relative;
			.wealth-Logon-title{
				width: 95%;
				margin: 0 auto;
				.Logon-title{
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-top: 30rpx;
					.left{
						display: flex;
						align-items: center;
						font-size: 25rpx;
						color: #666;
						image{
							width: 30rpx;
							height: 30rpx;
							margin-left: 20rpx;
						}
					}
					.right{
						display: flex;
						align-items: center;
						font-size: 30rpx;
						color: #b78e4c;
						text{
							margin-left:10rpx;
						}
						image{
							width: 25rpx;
							height: 25rpx;
							margin-left: 5rpx;
						}
					}
				}
				.money{
					font-size: 45rpx;
					margin-top: 20rpx;
					display: flex;
					align-items: center;
					image{
						width: 25rpx;
						height: 25rpx;
						margin-left: 10rpx;
					}
				}
			}
			.footer{
				width: 100%;
				color: #b78e4c;
				font-size: 25rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 0 auto;
				background-color: #f5f5f5;
				position: absolute;
				bottom: 0;
				text{
					margin: 20rpx;
					font-size: 25rpx
				}
				image{
					margin: 20rpx;
					width: 25rpx;
					height: 25rpx;
				}
			}
		}
		.wealth-swiper{
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			background-color: #fff;
			border-radius: 20rpx;
			swiper{
				width: 100%;
				height: 400rpx;
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
							height: 80rpx;
						}
						view{
							width: 100%;
							height: 50rpx;
							font-size: 28rpx;
							text-align: center;
							padding: 0 10rpx;
							display: flex;
							justify-content: center;
						}
					}
				}
			}
		}
		.wealth-selected{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			margin-top: 20rpx;
			border-radius: 20rpx;
			scroll-view{
				width: 90%;
				margin: 0 auto;
				display: flex;
				.Optimal-title-btn{
					width: 120%;
					padding-left: 10rpx;
					display: flex;
					align-items: center;
					.Optimal-btn{
						height: 45rpx;
						padding: 0 20rpx;
						border-radius: 40rpx;
						font-size: 23rpx;
						background-color: #e5e5e5;
						color: #333;
						display: flex; 	
						align-items: center;
						margin: 0 10rpx;
					}
					.Optimal-btn:hover{
						color: #961715;
					}
				}
			}
			.wealth-selected-image{
				width: 90%;
				margin: 0 auto;
				margin-top: 20rpx;
				image{
					width: 100%;
					height: 400rpx;
				}
			}
		}
		.wealth-invest{
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			background-color: #fff;
			border-radius: 20rpx;
			scroll-view{
				width: 90%;
				margin: 0 auto;
				display: flex;
				.Optimal-title-btn{
					width: 100%;
					padding-left: 10rpx;
					display: flex;
					align-items: center;
					.Optimal-btn{
						height: 45rpx;
						padding: 0 20rpx;
						border-radius: 40rpx;
						font-size: 23rpx;
						background-color: #e5e5e5;
						color: #333;
						display: flex; 	
						align-items: center;
						margin: 0 10rpx;
					}
					.Optimal-btn:hover{
						color: #961715;
					}
				}
			}
			.wealth-invest-textBox{
				width: 90%;
				margin: 0 auto;
				padding-bottom: 20rpx;
				
				.Optimal-money{
					width: 100%;
					margin-top: 20rpx;
					.money-title{
						width:100%;
						margin: 0 auto;
						font-size: 28rpx;
						.uni-tag{
							background-color: #eff6ff; border-color: #eff6ff; color: #2979ff; font-weight:bold;
						}
					}
					.Optimal-list{
						width: 100%;
						margin: 0 auto;
						padding-bottom: 20rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						.Optimal-list-left{
							width: 45%;
							.Optimal-list-left-MaxTitle{
								font-size: 35rpx;
								color: #9a3b45;
								font-weight: bold;
								margin: 10rpx auto;
							}
							.Optimal-list-left-MiniTitle{
								font-size: 23rpx;
								color: #888;
							}
						}
						.Optimal-list-rigth{
							flex: 1;
							.Optimal-list-left-MaxTitle{
								font-size: 30rpx;
								font-weight: bold;
								margin: 10rpx auto;
								padding: 0 15rpx;
							}
							.Optimal-list-left-MiniText{
								font-size: 23rpx;
								color: #888;
								text{
									padding: 0 15rpx;
									border-right:1px solid #ccc ;
								}
							}
						}
					}
					.Optimal-bottom{
						font-size: 25rpx;
						color: #555;
						
					}
					.Optimal-tisi{
						width: 100%;
						background-color: #f2f2f2;
						.Optimal-tisi-text-icon{
							width: 100%;
							display: flex;
							justify-content: space-between;
							margin-top: 10rpx;
							padding: 10rpx;
							// border: 1px solid;
							.tisi-text{
								width: 90%;
								// border: 1px solid;
								color: #b56b4d;
								font-size: 20rpx;
							}
							.tisi-icon{
								flex: 1;
								transform: rotateZ(90deg);
								display: flex;
								justify-content: center;
								align-self: self-start;
								image{
									width: 25rpx;
									height: 25rpx;
								}
							}
						}
						p{
							font-size: 23rpx;
							padding:0 10rpx 10rpx 10rpx;
						}
					}
				}
			}
		}
		.wealth-activity{
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			background-color: #fff;
			border-radius: 20rpx;
			swiper{
				width: 90%;
				height: 200rpx;
				margin: 0 auto;
				swiper-item{
					width: 100%;
					height: 180rpx;
					image{
						width: 100%;
						height: 150rpx;
					}
				}
				& /deep/ .uni-swiper-dot{
					width: 9rpx;
					height: 9rpx;
					border-radius: 50%;
					margin-left: -10rpx;
					transform: scale(0.8);
				}
				& /deep/ .uni-swiper-dot-active{
					width: 22rpx;
					height: 8rpx;
					background: #c80607;
					border-radius: 0;
					border-radius: 30%;
				}
			}
		}
		.wealth-collect{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			border-radius: 20rpx;
			margin-top: 20rpx;
			padding-bottom: 20rpx;
			.collect-image{
				width: 90%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				swiper{
					width: 48%;
					height: 350rpx;
					& /deep/ .uni-swiper-dots-horizontal{
						left: 15%;
						bottom: 8%;
					}
					& /deep/ .uni-swiper-dot{
						width: 9rpx;
						height: 9rpx;
						border-radius: 50%;
						margin-left: -10rpx;
						transform: scale(0.8);
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
							height: 340rpx;
						}
					}
				}
				.image{
					width: 48%;
					image{
						width: 100%;
						height: 340rpx;
					}
				}
			}
		}
		.wealth-study{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			margin-top: 20rpx;
			border-radius: 20rpx;
			.study-image{
				width: 90%;
				margin: 0 auto;
				image{
					width: 100%;
					height: 140rpx;
					
				}
			}
			.study-list{
				width: 90%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				image{
					width: 60rpx;
					height: 55rpx;
				}
				text{
					flex: 1;
					padding: 20rpx 0;
					margin: 0 10rpx;
					font-weight: bold;
					font-size: 28rpx;
				}
			}
		}
		.wealth-Ztabs{
			width: 90%;
			margin: 0 auto;
		}
		.wealth-Ztabs-list{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			margin-top: 10rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			p{	
				font-size: 25rpx;
				margin-left: 20rpx;
				margin-top: 10rpx;
				.uni-tag{
					background-color: #edf5f4;
					color: #2979ff;
					border: none;
					font-weight: bold;
					margin-right: 5rpx;
				}
				text{
					font-size: 24rpx;
					margin-left: 10rpx;
					color: #888;
				}
			}
			
			image{
				width: 200rpx;
				height: 120rpx;
				padding:20rpx;
				margin-right: 10rpx;
			}
		}
	}
</style>
