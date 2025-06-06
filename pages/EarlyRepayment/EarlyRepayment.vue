<template>
	<view class="EarlyRepayment">
		<view class="Loan-NavTitle">
			<backtaberVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' :RightMax='1'>
				<text style="color: #677781;">提前还款</text>
			</backtaberVue>
		</view>
		
		<view class="EarlyRepayment-listView">
			<view class="EarlyRepayment-box">
				<view class="name">
					个人房产抵押消费与经营组合贷款
				</view>
				<view class="SubName">
					<view class="btn">
						还款
					</view>
				</view>
			</view>
			<view class="EarlyRepayment-box">
				<view class="name">
					<span>贷款额度(元)</span>
					<text>1,900,000.00</text>
				</view>
				<view class="SubName">
					<span>贷款余额(元)</span>
					<text>1,900,000.00</text>
				</view>
			</view>
			<view class="EarlyRepayment-box">
				<view class="name">
					个人房产抵押消费与经营组合贷款
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import backtaberVue from '../../components/backtaber.vue';
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
			};
		},
		components:{
			backtaberVue
		}
	}
</script>

<style lang="scss">
	.EarlyRepayment{
		width: 100vw;
		height: 100vh;
		background-color: #f7f7f7;
		.Loan-NavTitle{
			background-color: #fff;
		}
		.EarlyRepayment-listView{
			background-color: #fff;
			padding-bottom: 20rpx;
			margin-top:10rpx;
			.EarlyRepayment-box{
				width: 90%;
				margin: 0 auto;
				padding: 10rpx 0;
				display: flex;
				justify-content: space-between;
				font-size: 30rpx;
				.name{
					flex:1;
					display: flex;
					flex-wrap: wrap;
					color: #000;
					span{
						width: 100%;
					}
					text{
						font-weight: bold;
						color: #000;
					}
				}
				.SubName{
					flex:1;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					span{
						width: 100%;
						text-align: right;
						
					}
					text{
						width: 100%;
						text-align: right;
						color: #e2615d;
						font-weight: bold;
					}
					.btn{
						border-radius: 50rpx;
						border: 1px solid ;
						color:#ae3b3a ;
						padding: 5rpx 35rpx;
						font-size: 28rpx;
						margin-left: 60%;
					}
				}
			}
		}
		
	}
</style>
