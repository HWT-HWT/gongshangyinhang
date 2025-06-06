<template>
	<view class="PageLoan">
		<view class="PageLoan-title">
			<loanTitleVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' Color="#607483" name='贷款' :Scollor='TopTitle'></loanTitleVue>
		</view>
		
		<view class="PageLoan-Money">
			<view>
				<view class="Money">
					<view @click="NextEye"> 
						贷款余额 
						<image v-if="eye" src="../../static/mine_asset_eyeon_5th_white.png" mode=""></image>
						<image v-else src="../../static/mine_asset_eyeoff_5th_white.png" mode=""></image>
					</view>
					<span  v-if="eye">0.00</span>
					<span v-else>****</span>
				</view>
				
				<view class="btn" @click="GoLoan">
					
				</view>
			</view>
			
			<view class="Sub-Money">
				<view>
					<view class="title"> 最近一期还款金额(元) <image src="../../static/all_small_i_tip_9_white.png" mode=""></image> </view>
					<span  v-if="eye">0.00</span>
					<span v-else>****</span>
				</view>
				<view class="right">
					<view class="title">还款日</view>
					<span  v-if="eye">0.00</span>
					<span v-else>****</span>
				</view>
			</view>
		
			<view class="List-Money">
				<view class="list" v-for="(item,index) in ListMoney" :key="index" :style="{borderRight:index === 0 ? '1px solid #fff' : 'none'}" @click="Next(index)">
					{{item}}
				</view>
			</view>
		</view>
		
		<view class="PageLoan-tisi">
			<view class="tisi-box">
				<image src="../../static/Page-Loan-icon-1.png" mode=""></image>
				<text>申请进度·网贷通(e抵快贷)-贷款受理</text>
			</view>
			<image src="@/static/nine_search_right_arrow.png" mode=""></image>
		</view>
		
		<swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="home-list-content-icons">
					<view class="content-icons-text" v-for="(item,index) in listcontentIcons" :key="index" @click="GetIndex(index)">
						<image :src="`../../static/Page-Loan-icon-${index+2}.png`" mode=""></image>
						<view>{{item}}</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="home-list-content-icons">
					<view class="content-icons-text" v-for="(item,index) in listcontentIconsT" :key="index" @click="GetIndex(index)">
						<image :src="`../../static/home_list_icon${index+1}.png`" mode=""></image>
						<view>{{item}}</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="PageLoan-image">
			<view class="image" v-for="(item,index) in boxImage" :key="index">
				<image :src="item" mode=""></image>
			</view>
		</view>
		
		<view class="PageLoan-loan">
			<view class="tisi-box">
				<image src="../../static/Page-Loan-icon-7.png" mode=""></image>
				<view>
					不知道贷款如何挑选
					<p>花一分钟帮你定制</p>
				</view>
			</view>
			<view class="btn">
				去试试
			</view>
		</view>
		<view class="wealth-invest">
			<titleVueVue LFontSize="35">
				<template #left>	
					优选产品
				</template>
			</titleVueVue>
			<view class="view">
				<view class="Optimal-title-btn">
					<view class="Optimal-btn" v-for="(item,index) in wealthInvest" :key="index">
						{{item}}
					</view>
				</view>
			</view>
			<view class="wealth-invest-textBox" style="border-bottom: 1px solid #efefef;">
				<view class="Optimal-money">
					<view class="money-title">
						个人信用贷款
						<uni-tag class="uni-tag" text="纯信用" style="margin-left: 20rpx;" type="error" size="mini"/>
						<uni-tag class="uni-tag" text="无抵押" style="margin-left: 20rpx;" type="error" size="mini"/>
						<uni-tag class="uni-tag" text="免担保" style="margin-left: 20rpx;" type="error" size="mini"/>
					</view>
					<view class="Optimal-list">
						<view class="Optimal-list-left">
							<p class="Optimal-list-left-MaxTitle">100万</p>
							<p class="Optimal-list-left-MiniTitle">最高可申请</p>
						</view>	
						<view class="Optimal-list-rigth">
							<p class="Optimal-list-left-MaxTitle">融e借 最快实时到账</p>
							<p class="Optimal-list-left-MiniText">
								<text style="border: none;">最长7年</text>
							</p>
						</view>
						<image style="width: 30rpx; height: 30rpx;" src="@/static/nine_search_right_arrow.png" mode=""></image>
					</view>
				</view>
			</view>
			
			<view class="wealth-invest-textBox" style="border-bottom: 1px solid #efefef;">
				<view class="Optimal-money">
					<view class="money-title">
						助商组合贷
						<uni-tag class="uni-tag" text="线上申请" style="margin-left: 20rpx;" type="error" size="mini"/>
						<uni-tag class="uni-tag" text="用途灵活" style="margin-left: 20rpx;" type="error" size="mini"/>
						<uni-tag class="uni-tag" text="随借随还" style="margin-left: 20rpx;" type="error" size="mini"/>
					</view>
					<view class="Optimal-list">
						<view class="Optimal-list-left">
							<p class="Optimal-list-left-MaxTitle">30万</p>
							<p class="Optimal-list-left-MiniTitle">最高可申请</p>
						</view>	
						<view class="Optimal-list-rigth">
							<p class="Optimal-list-left-MaxTitle">服务小微商户 支持消费经营</p>
							<p class="Optimal-list-left-MiniText">
								<text style="border: none;">最长3年</text>
							</p>
						</view>
						<image style="width: 30rpx; height: 30rpx;" src="@/static/nine_search_right_arrow.png" mode=""></image>
					</view>
				</view>
			</view>
			
			<view class="wealth-invest-textBox" style="border-bottom: 1px solid #efefef;">
				<view class="Optimal-money">
					<view class="money-title">
						个人房抵贷 
						<uni-tag class="uni-tag" text="期限长" style="margin-left: 20rpx;" type="error" size="mini"/>
						<uni-tag class="uni-tag" text="额度高" style="margin-left: 20rpx;" type="error" size="mini"/>
						<uni-tag class="uni-tag" text="还款方式多样" style="margin-left: 20rpx;" type="error" size="mini"/>
					</view>
					<view class="Optimal-list">
						<view class="Optimal-list-left">
							<p class="Optimal-list-left-MaxTitle">1200万</p>
							<p class="Optimal-list-left-MiniTitle">最高可申请</p>
						</view>	
						<view class="Optimal-list-rigth">
							<p class="Optimal-list-left-MaxTitle">一站式满足消费经营用途</p>
							<p class="Optimal-list-left-MiniText">
								<text style="border: none;">消费用途最长7年 经营用途最长10年</text>
							</p>
						</view>
						<image style="width: 30rpx; height: 30rpx;" src="@/static/nine_search_right_arrow.png" mode=""></image>
					</view>
				</view>
			</view>
			
			<view class="wealth-invest-textBox" style="border-bottom: 1px solid #efefef;">
				<view class="Optimal-money">
					<view class="money-title">
						随房e借 
						<uni-tag class="uni-tag" text="纯信用" style="margin-left: 20rpx;" type="error" size="mini"/>
						<uni-tag class="uni-tag" text="线上申请" style="margin-left: 20rpx;" type="error" size="mini"/>
						<uni-tag class="uni-tag" text="免担保" style="margin-left: 20rpx;" type="error" size="mini"/>
					</view>
					<view class="Optimal-list">
						<view class="Optimal-list-left">
							<p class="Optimal-list-left-MaxTitle">500万</p>
							<p class="Optimal-list-left-MiniTitle">最高可申请</p>
						</view>	
						<view class="Optimal-list-rigth">
							<p class="Optimal-list-left-MaxTitle">方便快捷 房产抵押客户专享</p>
							<p class="Optimal-list-left-MiniText">
								<text style="border: none;">最长7年</text>
							</p>
						</view>
						<image style="width: 30rpx; height: 30rpx;" src="@/static/nine_search_right_arrow.png" mode=""></image>
					</view>
				</view>
			</view>
			
			<view class="wealth-invest-textBox" style="border-bottom: 1px solid #efefef;">
				<view class="Optimal-money">
					<view class="money-title">
						金融资产贷 
						<uni-tag class="uni-tag" text="期限灵活" style="margin-left: 20rpx;" type="error" size="mini"/>
						<uni-tag class="uni-tag" text="线上申请" style="margin-left: 20rpx;" type="error" size="mini"/>
						<uni-tag class="uni-tag" text="自助提款" style="margin-left: 20rpx;" type="error" size="mini"/>
					</view>
					<view class="Optimal-list">
						<view class="Optimal-list-left">
							<p class="Optimal-list-left-MaxTitle">230万</p>
							<p class="Optimal-list-left-MiniTitle">最高可申请</p>
						</view>	
						<view class="Optimal-list-rigth">
							<p class="Optimal-list-left-MaxTitle">质物多样 方便快捷</p>
							<p class="Optimal-list-left-MiniText">
								<text style="border: none;">最长1年</text>
							</p>
						</view>
						<image style="width: 30rpx; height: 30rpx;" src="@/static/nine_search_right_arrow.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import loanTitleVue from '../../components/loan-Title.vue';
	import BoxImageVue from '../../components/Box-image.vue';
	import titleVueVue from '../../components/titleVue.vue';
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
				listcontentIcons:['我的贷款','房贷重定价周期调整','房贷二套转首套','贷款计算器','信用报告'],
				listcontentIconsT:['房产估值','房贷报税信息','征信授权','流水授权','房贷利率调整'],
				boxImage:['../../static/Page-Loan-image-2.png','../../static/Zooz-3.png'],
				wealthInvest:['消费贷','经营贷','购房贷','惠普贷'],
				eye:false,
				ListMoney:['还款计划','我要提款'],
				TopTitle:0
			};
		},
		components:{
			loanTitleVue,
			BoxImageVue,
			titleVueVue
		},
		methods:{
			NextEye(){
				this.eye = !this.eye
			},
			GoLoan(){
				uni.navigateTo({
					url:'/pages/Loan/Loan'
				})
			},
			Next(index){
				index === 0 ? uni.navigateTo({
					url:'/pages/PageLoanPlan/PageLoanPlan'
				}) : ''
			}
		},
		onPageScroll(TopTitle) {
			this.TopTitle = TopTitle.scrollTop
		}
	}
</script>

<style lang="scss" scoped>
	.PageLoan{
		width: 100vw;
		min-height: 100vh;
		background-color: #f4f5f7;
		.PageLoan-title{
			background-color: #fff;
		}
		.PageLoan-Money{
			width: 95%;
			margin: 0 auto;
			margin-top: 20rpx;
			background: url('@/static/PageLoan-image-1.png');
			background-size: 100% 100%;
			view{
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				.Money{
					flex: 1;
					padding: 20rpx;
					view{
						width: 100%;
						display: flex;
						align-items: center;
						color: #fff;
						font-size:32rpx;
						image{
							width: 40rpx;
							height: 40rpx;
							margin: 0 15rpx;
						}
					}
					span{
						color: #fff;
						font-size:50rpx;
					}
				}
				.btn{
					width: 200rpx;
					height: 60rpx;
				}
			}
			
			.Sub-Money{
				padding: 20rpx;
				display: flex;
				justify-content: space-between;
				.right{
					justify-content: right;
					display: flex;
					text-align: right;
				}
				.title{
					display: flex;
					align-items: center;
					color: #fff;
					font-size:25rpx;
					image{
						width: 25rpx;
						height: 25rpx;
						margin: 0 15rpx;
					}
				}
				span{
					color: #fff;
					font-size:40rpx;
					width: 100%;
				}
			}
			.List-Money{
				display: flex;
				justify-content: space-betwee;
				padding: 20rpx;
				font-size: 32rpx;
				.list{
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
				}
			}
		}
		.PageLoan-tisi{
			width: 95%;
			margin: 0 auto;
			margin-top: 20rpx;
			background: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-radius: 20rpx;
			.tisi-box{
				padding: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 30rpx;
				image{
					width: 50rpx;
					height: 50rpx;
				}
				text{
					margin-left: 10rpx;
				}
			}
			image{
				width: 30rpx;
				height: 30rpx;  
				margin-right: 20rpx;
			}
		}
		swiper{
			width: 95%;
			background-color: #fff;
			border-radius: 20rpx;
			margin: 0 auto;
			margin-top: 20rpx;
			height: 200rpx;
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
						width: 60rpx;
						height: 60rpx;
					}
					view{
						width: 100%;
						height: 40rpx;
						font-size: 28rpx;
						text-align: center;
						margin-top: 5rpx;
					}
				}
			}
		}
		.PageLoan-image{
			width: 95%;
			margin: 0 auto;
			margin-top: 20rpx;
			display: flex;
			.image{
				width: 50%;
				display: flex;
				justify-content: center;
				image{
					width: 340rpx;
					height: 130rpx;
				}
			}
		}
		.PageLoan-loan{
			width: 95%;
			margin: 0 auto;
			margin-top: 20rpx;
			background: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-radius: 20rpx;
			.tisi-box{
				padding: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 30rpx;
				image{
					width: 120rpx;
					height: 120rpx;
				}
				view{
					margin-left: 20rpx;
					font-size: 32rpx;
					font-weight: bold;
					p{
						font-weight: normal;
						font-size: 28rpx;
						margin-top: 10rpx;
					}
				}
			}
			.btn{
				width: 100rpx;
				margin-right: 20rpx;
				border: 1px solid #b42728;
				padding:10rpx 20rpx;
				border-radius: 50rpx;
				font-size: 30rpx;
				text-align: center;
			}
		}
		.wealth-invest{
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			background-color: #fff;
			border-radius: 20rpx;
			.view{
				width: 100%;
				margin: 0 auto;
				.Optimal-title-btn{
					padding-left: 10rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 20rpx;
					.Optimal-btn{
						height: 45rpx;
						padding: 0 20rpx;
						border-radius: 40rpx;
						font-size: 28rpx;
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
							background-color: #f9e5e4; 
							border-color: #f9e5e4; 
							color: #bb1f1f; 
							font-weight:bold;
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
							width: 25%;
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
	}
</style>
