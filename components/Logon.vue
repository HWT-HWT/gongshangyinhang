<template>
	<view class="Logon">
		<view class="Logon-head">
			<image src="@/static/user-head-1.png" mode=""></image>
			<view class="Logon-head-text">
				<p>*演乐 <image src="@/static/dis_renwu_next.png" mode=""></image> </p>
				<span>上次登录2025-03-11 17:43:29</span>
			</view>
		</view>
		<view class="Logon-list">
			<view class="list-box">
				<view class="text-box" v-for="(item,index) in list" :key="index">
					<p>{{item.name}}</p>
					<span>{{item.num}}</span>
				</view>
			</view>
			<view class="list-image">
				
			</view>
		</view>
		<view class="Logon-load">
			<p class="time">时间 2025-03-11 17:45:35</p>
			<view class="load-title">
				<titleVue :LFontSize="'30'">
					<template #left>
						<span>
							资产负债 
							<image src="@/static/all_small_i_tip_9.png" mode=""></image> 
							<image class="eye" src="@/static/mine_asset_eyeoff_5th.png" v-if="dataliEye" mode="" @click="EyeOne"></image>
							<image class="eye" src="@/static/mine_asset_eyeon_5th.png" v-else mode="" @click="EyeOne"></image>
						</span>
					</template>
					<template #rigth>
						<text style="color: #888;">详情</text>
					</template>
				</titleVue>
			</view>
			<view class="load-datali" :class="{'isTrue' : money, 'isFalse':!money}">
				<view class="datali-title">
					<view class="datali-title-text select-color" @click="MonetIs(true)">
						<p>总资产(元)</p>
						<span v-if="dataliEye">****</span>
						<span v-else >{{MyMoney}}</span>
					</view>
					<view class="datali-title-text"  @click="MonetIs(false)">
						<p>总负债(元)</p>
						<span v-if="dataliEye">****</span>
						<span v-else>{{LoadMoney}}</span>
					</view>
				</view>
				<view class="datali-li" v-if="money">
					<view class="li-money">
						<text >存款</text>
						<view class="li-money-box">
							<span v-if="dataliEye">****</span>
							<span v-else >{{MyMoney}}</span>
							<image src="../static/nine_search_right_arrow.png" mode=""></image>
						</view>
					</view>
					<view class="li-money-x">
						<text v-if="dataliEye">****</text>
						<text v-else :style="{'color': money ? '#ab2d2d':''}">100.00%</text>
						<view class="li-money-box-x">
						</view>
					</view>
				</view>
				<view class="datali-li" v-else>
					<view class="li-money" @click="Goloan">
						<text >贷款</text>
						<view class="li-money-box">
							<span v-if="dataliEye">****</span>
							<span v-else>{{LoadMoney}}</span>
							<image src="../static/nine_search_right_arrow.png" mode=""></image>
						</view>
					</view>
					<view class="li-money-x">
						<text v-if="dataliEye">****</text>
						<text v-else>100.00%</text>
						<view class="li-money-box-x">
						</view>
					</view>
				</view>
				<view class="jt" :style="{'bottom' : money ? '-105rpx' : '-20rpx'}">
					<image src="@/static/desc_up.png" mode=""></image>
				</view>
			</view>
			<view class="load-footer" v-if="money">
				<view class="footer-text">
					<image src="@/static/wealth-list-1.png" mode=""></image>
					<p>给资产做个诊断，实现财富增值</p>
				</view>
				<view class="footer-btn">
					去诊断
				</view>
			</view>
		</view>
		<view class="Logon-money">
			<view class="moeny-title">
				<titleVue :LFontSize="'30'">
					<template #left>
						<span>
							本月收支
							<image src="@/static/all_small_i_tip_9.png" mode=""></image> 
							<image class="eye" src="@/static/mine_asset_eyeoff_5th.png" v-if="LogonEye" mode="" @click="EyeTow()"></image>
							<image class="eye" src="@/static/mine_asset_eyeon_5th.png" v-else  mode="" @click="EyeTow()"></image>
						</span>
					</template>
				</titleVue>
			</view>
			
			<view class="revenue-and-expenditure">
				<view class="revenue">
					<p>本月收入(元)</p>
					<span v-if="LogonEye" >****</span>
					<span v-else >00.00</span>
				</view>
				<view class="expenditure">
					<p>本月支出(元)</p>
					<span v-if="LogonEye">****</span>
					<span v-else >2,300.00</span>
				</view>
			</view>
			
			<view class="Logon-XT" v-if="!LogonEye">
				<view class="Money-XT">
					
				</view>
			</view>
			
			<view class="text" v-if="!LogonEye"><span>本月结余</span>-2,300.00</view>
		</view>
	</view>
</template>

<script>
	import titleVue from './titleVue.vue';
	export default {
		name:"Logon",
		data() {
			return {
				list:[
					{name:'银行卡',num:2},
					{name:'优惠卷',num:0},
					{name:'积分',num:0},
					{name:'立减金额',num:0},
					{name:'绿色能量',num:600}
				],
				money:true,
				dataliEye:true,
				LogonEye:true,
				MyMoney:'4,721.34',
				LoadMoney:'1,900,000.00',
			};
		},
		components:{
			titleVue
		},
		methods:{
			MonetIs(checke){
				this.money = checke
			},
			EyeOne(){
				this.dataliEye  = !this.dataliEye
			},
			EyeTow(){
				this.LogonEye  = !this.LogonEye
			},
			Goloan(){
				uni.navigateTo({
					url:'/pages/Loan/Loan'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Logon{
		width: 95%;
		margin: 0 auto;
		.Logon-head{
			display: flex;
			align-items: center;
			image{
				width: 130rpx;
				height: 130rpx;
				margin: 0 20rpx;
			}
			.Logon-head-text{
				line-height: 55rpx;
				p{
					font-size: 35rpx;
					image{
						width: 25rpx;
						height: 25rpx;
						margin: 0 10rpx;
					}
				}
				span{
					font-size: 25rpx;
					color: #333;;
				}
			}
		}
		.Logon-list{
			width: 95%;
			margin: 0 auto;
			background-color: #fff;
			border-radius: 20rpx;
			margin-top: 20rpx;
			display: flex;
			padding-bottom: 20rpx;
			flex-wrap: wrap;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
			.list-box{
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding:30rpx 40rpx;
				.text-box{
					line-height: 45rpx;
					text-align: center;
					p{
						font-size: 25rpx;
						color: #666;
					}
					span{
						font-size: 38rpx;
					}
				}
			}
			.list-image{
				width: 90%;
				height: 85rpx;
				margin: 0 auto;
				background: url('@/static/user-erxing-1.png') no-repeat;
				background-size:100% 100% ;
			}
		}
		.Logon-load{
			width: 95%;
			margin: 0 auto;
			background-color:#fff;
			margin-top: 20rpx;
			border-radius: 20rpx;
			padding-bottom: 30rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
			.time{
				padding: 20rpx;
				background-color: #fefcfd;
				font-size: 20rpx;
				color: #555;
				border-radius: 20rpx;
			}
			.load-title{
				span{
					display: flex;
					align-items: center;
					image{
						width: 30rpx;
						height: 30rpx;
						margin: 0 20rpx;
					}
					.eye{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
			.isTrue{
				background: url('@/static/user-moeny-1.png');
				background-size:100% 100% ;
			}
			.isFalse{
				background: url('@/static/user-moeny-2.png');
				background-size:100% 100% ;
			}
			.load-datali{
				width: 95%;
				margin: 0 auto;
				position: relative;
				.datali-title{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 0 auto;
					padding: 25rpx 20rpx;
					.select-color{
						color:#666;
					}
					.datali-title-text{
						p{
							font-size: 28rpx
						}
						span{
							font-size: 45rpx
						}
					}
				}
				.datali-li{
					padding: 25rpx 20rpx;
					.li-money{
						display: flex;
						align-items: center;
						justify-content: space-between;
						.li-money-box{
							display: flex;
							align-items: center;;
							span{
								font-size: 30rpx;
								font-size: 28rpx
							}
							image{
								width: 30rpx;
								height: 30rpx;
							}
						}
					}
					.li-money-x{
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 10rpx;
						text{
							color: #999;
							font-size: 25rpx
						}
						.li-money-box-x{
							width: 500rpx;
							height: 5rpx;
							border-radius: 3rpx;
							background-color: #eee;
						}
					}
				}
				.jt{
					width: 45rpx;
					height: 45rpx;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #fff;
					position: absolute;
					z-index: 999;
					bottom: -20rpx;
					left: 48%;
					image{
						width: 35rpx;
						height: 35rpx;
					}
				}
			}
			.load-footer{
				width: 95%;
				margin: 0 auto;
				background-color: #f7f6fb;
				display: flex;
				justify-content: space-between;
				border-radius:  0 0 20rpx 20rpx;
				padding: 15rpx 0;
				.footer-text{
					display:flex;
					align-items: center;
					p{
						font-size: 25rpx
					}
					image{
						transform: scaleX(-1);
						width: 50rpx;
						height: 45rpx;
						margin: 0 15rpx;
					}
				}
				.footer-btn{
					font-size: 25rpx;
					padding: 10rpx 20rpx;
					border: 1px solid ;
					border-radius: 50rpx;
					color:#9a413d;
					margin-right: 20rpx;
				}
				.jt{
					width: 45rpx;
					height: 45rpx;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #fff;
					position: absolute;
					z-index: 999;
					bottom: -20rpx;
					left: 45%;
					image{
						width: 35rpx;
						height: 35rpx;
					}
				}
			}
		}
		.Logon-money{
			width: 95%;
			margin: 0 auto;
			border-radius: 20rpx;
			background: #fff;
			margin-top: 20rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
			padding-bottom: 20rpx;
			.moeny-title{
				span{
					display: flex;
					align-items: center;
					image{
						width: 30rpx;
						height: 30rpx;
						margin: 0 20rpx;
					}
					.eye{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
			.revenue-and-expenditure{
				width: 90%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.revenue{
					line-height: 70rpx;
					p{
						font-size:30rpx;
					}
					span{
						font-size: 40rpx;
					}
				}
				.expenditure{
					line-height: 70rpx;
					p{
						font-size:30rpx;
					}
					span{
						font-size: 40rpx;
					}
				}
			}
			.Logon-XT{
				width: 95%;
				height: 8rpx;
				background-color: #ee3a88;
				margin: 0 auto;
				border-radius: 4rpx;
				.Money-XT{
					width: 50%;
					height: 8rpx;
					background-color: #9a413d;
					border-radius: 4rpx;
				}
			}
			.text{
				width: 94%;
				margin: 0 auto;
				text-align: right;
				margin-top:10rpx;
				font-size: 30rpx;
				color: #bd0000;
				span{
					margin-right: 10rpx;
					color: #333;
				}
			}
		}
	}
</style>