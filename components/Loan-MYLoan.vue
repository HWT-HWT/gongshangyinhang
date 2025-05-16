<template>
	<view class="Loan-MYLoan">
		<titleVue>
			<template #left>
				我的抵押贷款
			</template>
		</titleVue>
		
		<view class="MYLoan-box">
			<titleVue :LFontW="false" :Padding="'10rpx 0'">
				<template #left>
					<text style="color:#555">签订日期 : 2024-02-05</text>
				</template>
				<template #rigth>
					<text style="color:#333">正常</text>
				</template>
			</titleVue>
			<titleVue :LFontSize="'28'" :Padding="'10rpx 0'">
				<template #left>
					<text style="color:#555">个人房产抵押消费与经营组 <br> 合贷款</text>
				</template>
				<template #rigth>
					<view style="color:#506ea4;display: flex; align-items: center; " @click="GoContractDetails">
						合同详情 
						<image style="width: 30rpx; height: 30rpx;" src="@/static/nine_search_right_arrow.png" mode=""></image> 
					</view>
				</template>
			</titleVue>
			
			<titleVue :LFontSize="'28'" :Padding="'10rpx 0'">
				<template #left>
					<text style="color:#555">本金余额 800,000.00</text>
				</template>
				<template #rigth>
					<view style="color:#555;display: flex; align-items: center;">
						可提款余额 0.00
					</view>
				</template>
			</titleVue>
			
			<view class="MYLoan-footer">
				<text>下期还款金额 2,300.00</text>
				<span>下期还款日 2025-04-10</span>
			</view>
		</view>
	</view>
</template>

<script>
	import titleVue from './titleVue.vue';
	export default {
		name:"Loan-MYLoan",
		data() {
			return {
				
			};
		},
		components:{
			titleVue
		},
		methods:{
			GoContractDetails(){
				uni.navigateTo({
					url:'/pages/ContractDetails/ContractDetails'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Loan-MYLoan{
		width: 95%;
		margin: 0 auto;
		background-color: #ffffff;
		margin-top: 20rpx;
		border-radius: 20rpx;
		padding-bottom: 20rpx;
		.MYLoan-box{
			width: 95%;
			margin: 0 auto;
			border-top: 1px solid #eee;
			.MYLoan-footer{
				width: 90%;
				margin: 0 auto;
				border-radius: 10rpx;
				padding:5rpx;
				background-color: #fffaf7;
				display: flex;
				align-items: center;
				font-size: 25rpx;
				justify-content: space-between;
				border: 1px solid #eee;
				text{
					color: #555;
					font-size: 26rpx;
					font-weight: bold;
				}
				span{
					color: #9f1414;
					font-size: 26rpx;
					font-weight: bold;
				}
			}
		}
	}
</style>