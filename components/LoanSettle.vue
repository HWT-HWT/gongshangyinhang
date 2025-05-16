<template>
	<view class="Loan-settle">
		<image src="@/static/cash_book_defaultpage.png" mode=""></image>
		<p>您暂无贷款合同</p>
	</view>
</template>

<script>
	export default {
		name:"LoanSettle",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.Loan-settle{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0 auto;
		padding-top: 60rpx;
		image{
			width: 200rpx;
			height: 200rpx;
		}
		p{
			text-align: center;
			width: 100%;
			font-size: 30rpx;
			margin-top: 20rpx;
		}
	}
</style>