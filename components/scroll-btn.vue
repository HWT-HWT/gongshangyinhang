<template>
	<view>
		<scroll-view scroll-x="true">
			<view class="Optimal-title-btn">
				<view class="Optimal-btn" v-for="(item,index) in list" :key="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"scroll-btn",
		data() {
			return {
				
			};
		},
		props:{
			list:{
				type:Array
			}
		}
	}
</script>

<style lang="scss" scoped>
	scroll-view{
		width: 90%;
		margin: 0 auto;
		display: flex;
		.Optimal-title-btn{
			width: 100%;
			padding-left: 10rpx;
			display: flex;
			align-items: center;
			.Optimal-btn{
				height: 45rpx;
				padding: 0 30rpx;
				border-radius: 40rpx;
				font-size: 23rpx;
				background-color: #e5e5e5;
				color: #333;
				display: flex; 	
				align-items: center;
				margin: 0 10rpx;
			}
			.Optimal-btn:hover{
				color: #961715;
			}
		}
	}
</style>