<template>
	<view class="Zooz-image">
		<view class="image" v-for="(item,index) in list" :key="index">
			<image :src="item" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Box-image",
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

<style lang="scss">
	.Zooz-image{
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		.image{
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom:20rpx;
			image{
				width: 300rpx;
				height: 115rpx;
			}
		}
	}
</style>