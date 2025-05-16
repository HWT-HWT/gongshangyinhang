<template>
	<view class="Settlement">
		<view class="Settlement-title">
			<backtaberVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' :RightMax='1'>
				<text style="color: #677781;">个人贷款结清证明</text>
			</backtaberVue>
		</view>
		
		<view class="Loan-settle">
			<image src="@/static/cash_book_defaultpage.png" mode=""></image>
			<p>您当前不存在符合要求的记录,无法办理此业务</p>
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

<style lang="scss" scoped>
	.Settlement{
		width: 100vw;
		min-height: 100vh;
		background-color: #f7f7f7;
		.Settlement-title{
			background-color: #fff;
		}
		.Loan-settle{
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin: 0 auto;
			padding: 30rpx 0;
			align-items: center;
			margin-top: 20rpx;
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
	}
</style>
