<template>
	<view class="user-NatLogin">
		<image src="@/static/user-head-1.png" mode=""></image>
		<p>登录后可查看您的资产情况</p>
		<view class="user-notLogin-btn" @click="Gologin()">
			点击登录
		</view>
	</view>
</template>

<script>
	import {gologin} from '@/components/login.js'
	export default {
		name:"NotLogin",
		data() {
			return {
				
			};
		},
		methods:{
			Gologin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
	.user-NatLogin{
		width: 100%;
		padding-bottom: 40rpx;
		flex-wrap: wrap;
		text-align: center;
		image{
			width: 130rpx;
			height: 130rpx;
		}
		p{
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 30rpx;
			margin: 0 auto;
			margin-bottom: 20rpx;
		}
		.user-notLogin-btn{
			margin: 0 auto;
			width: 220rpx;
			height:  70rpx;
			border: 1px solid;
			color: #e80000;
			border-radius: 50rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			font-size: 32rpx;
		}
	}
</style>