<template>
	<view class="MyAccount-List">
		<view class="list-text-icon">
			<image :src="leftIcon" mode=""></image>
			<text><slot></slot></text>
		</view>
		<image :src="rightIcon" mode=""></image>
	</view>
</template>

<script>
	export default {
		name:"account-List",
		data() {
			return {
				
			};
		},
		props:{
			leftIcon:{
				type:String,
			},
			rightIcon:{
				type:String,
			},
		}
	}
</script>

<style lang="scss" scoped>
	.MyAccount-List{
		width: 90%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		padding: 20rpx 10rpx;
		border-radius: 10rpx;
		margin-top: 40rpx;
		.list-text-icon{
			display: flex;
			align-items: center;
			font-size: 32rpx;
			image{
				width:60rpx;
				height: 60rpx;
				padding:0 20rpx;
			}
		}
		image{
			width:40rpx;
			height: 40rpx;
			padding:0 20rpx;
		}
	}
</style>