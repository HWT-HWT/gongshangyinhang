<template>
	<view class="AdjustSelection">
		<occupyVue></occupyVue>
		<view class="AdjustSelection-NavTitle">
			<backtaberVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' :RightMax='1'>
				<text style="color: #677781;">还款</text>
			</backtaberVue>
		</view>
		
		<view class="AdjustSelection-data">
			<p>签订日期: 2024-02-05</p>
			<span>个人房产抵押消费与经营组合贷款</span>
			<text>贷款余额 0.00</text>
		</view>
		
		<view class="AdjustSelection-text">
			请选择该笔合同下的借据
		</view>
		
		<view class="AdjustSelection-TextBox">
			<view class="TextBox-title">
				<text>借据编号1</text>
				<image src="@/static/Ad-bg-1.png" mode=""></image>
			</view>
			<view class="TextBox-list">
				<view class="list-box">
					<text class="text">贷款金额</text>
					<text>800,000.00元</text>
				</view>
				<view class="list-box">
					<text  class="text">借据起止日</text>
					<text>2024.02.05-2029.02.05</text>
				</view>
			</view>
			<view class="icon">
				<image src="@/static/nine_search_right_arrow.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import occupyVue from '../../components/occupy.vue'
	import backtaberVue from '../../components/backtaber.vue'
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
			}
		},
		methods: {
			
		},
		components:{
			occupyVue,
			backtaberVue
		}
	}
</script>

<style scoped lang="scss">
	.AdjustSelection{
		width: 100vw;
		height: 100vh;
		background-color: #f7f7f7;
		.AdjustSelection-NavTitle{
			width: 100%;
			background-color: #f7f7f7;
			position: fixed;
			top: 0;
			border-bottom: 1px solid #d5d5d5;
			padding-bottom: 20rpx;
		}
		.AdjustSelection-data{
			margin-top: 100rpx;
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;
			padding: 20rpx 30rpx;
			line-height: 60rpx;
			font-size: 32rpx;
			p{
				width: 100%;
				color: #888;
			}
			span{
				width: 100%;
				font-size: 35rpx;
			}
			text{
				width: 100%;
				
			}
		}
		.AdjustSelection-text{
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			color: #888;
		}
		.AdjustSelection-TextBox{
			width: 100%;
			background-color: #fff;
			margin-top: 20rpx;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			.TextBox-title{
				width: 95%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #eee;
				padding: 20rpx 35rpx;
				text{
					font-size: 32rpx;
				}
				image{
					width: 95rpx;
					height: 55rpx;
				}
			}
			.TextBox-list{
				width: 90%;
				margin: 0 auto;
				margin-top: 20rpx;
				border-bottom: 1px solid #eee;
				.list-box{
					display: flex;
					justify-content: space-between;
					padding: 10rpx 15rpx;
					margin-top: 10rpx;
					.text{
						color: #333;
					}
				}
			}
			.icon{
				height: 100%;
				image{
					width: 40rpx;
					height: 40rpx;
					margin-top:20rpx;
				}
			}
		}
	}
</style>
