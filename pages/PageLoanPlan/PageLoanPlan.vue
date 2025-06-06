<template>
	<view class="PageLoanPlan">
		<view class="PageLoanPlan-title">
			<loanTitleVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' Color="#607483" name='还款计划'></loanTitleVue>
		</view>
		<view class="PageLoanPlan-content">
			<view class="content-title">
				<span>网贷通(e抵快贷)</span>
				<view class="content-btn" @click="Next">
					还款计划
				</view>
			</view>
			<view class="content-Money">
				<view class="list">
					<span>贷款额度(元)</span>
					<text>1,900,000.00</text>
				</view>
				<view class="list right">
					<span>贷款额度(元)</span>
					<text>1,900,000.00</text>
				</view>
			</view>
			<view class="p">合同起止日2025.02.25-2035.02.18</view>
		</view>
	</view>
</template>

<script>
	import loanTitleVue from '../../components/loan-Title.vue';
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
			};
		},
		components:{
			loanTitleVue
		},
		methods:{
			Next(){
				uni.navigateTo({
					url:'/pages/Loan/Loan'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.PageLoanPlan{
		width: 100vw;
		height: 100vh;
		background-color: #f4f4f4;
		.PageLoanPlan-title{
			background-color: #fff;
		}
		.PageLoanPlan-content{
			background-color: #fff;
			margin-top: 20rpx;
			.content-title{
				padding: 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size:32rpx;
				.content-btn{
					padding:10rpx 30rpx;
					font-size: 25rpx;
					border: 1px solid;
					color: #aa5500;
					border-radius: 50rpx;
				}
			}
			.content-Money{
				display: flex;
				justify-content: space-between;
				padding:0rpx 20rpx;
				.list{
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					span{
						width: 100%;
					}
					text{
						width: 100%;
						font-weight: bold;
					}
					
				}
				.right{
					text-align: right;
					text{
						color: #aa5500;
					}
				}
				
			}
			.p{
				padding: 20rpx;
				font-size: 25rpx;
			}
		}
	}
</style>
