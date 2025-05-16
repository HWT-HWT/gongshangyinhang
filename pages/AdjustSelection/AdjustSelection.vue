<template>
	<view class="AdjustSelection">
		<occupyVue></occupyVue>
		<view class="AdjustSelection-NavTitle">
			<backtaberVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' :RightMax='1'>
				<text style="color: #677781;">调整借据选择</text>
			</backtaberVue>
		</view>
		<view class="AdjustSelection-TextBox">
			<view class="TextBox-title">
				<text>编号1</text>
				<image src="@/static/Ad-bg-1.png" mode=""></image>
			</view>
			<view class="TextBox-list">
				<view class="list-box">
					<text class="text">贷款金额</text>
					<text>800,000.00元</text>
				</view>
				<view class="list-box">
					<text  class="text">借据起止日</text>
					<text>2024.07.10-2029.07.10</text>
				</view>
				<view class="list-box">
					<text  class="text">最低还款额</text>
					<text>0.00元</text>
				</view>
				<view class="list-box">
					<text  class="text">最高还款额</text>
					<text>0.00元</text>
				</view>
			</view>
			<view class="TextBox-btn">
				<view style="flex: 1;">
					
				</view>
				<view class="btn">
					记录查询
				</view>
				<view class="btn">
					调整
				</view>
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
		.AdjustSelection-TextBox{
			width: 100%;
			background-color: #fff;
			margin-top: 80rpx;
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
				width: 95%;
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
			.TextBox-btn{
				width: 95%;
				margin: 0 auto;
				display: flex;
				padding: 20rpx;
				.btn{
					border: 1px solid;
					padding:15rpx 30rpx;
					border-radius: 50rpx;
					color:#954041;
					margin-left: 20rpx;
					font-size: 30rpx
				}
			}
		}
	}
</style>
