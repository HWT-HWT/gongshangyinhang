<template>
	<view class="ContainerTitle">
		<image src="@/static/background_myaccount_xiangqingmingxi_cancle.webp" mode="" ></image>
		<view class="Container-Title" @click="$emit('close')">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"ContainerTitle",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.ContainerTitle{
		margin: 0 auto;
		display: flex;
		align-items: center;
		padding: 20rpx;
		border-bottom: 1px solid #f3f3f3;
		image{
			width: 60rpx;
			height: 60rpx;
		}
		.Container-Title{
			flex: 1;
			text-align: center;
			font-size: 30rpx;
			margin-right: 60rpx;
		}
	}
</style>