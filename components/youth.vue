<template>
	<view class="youth">
		<view class="youth-account" style="margin-top: 0; border: none;">
			<titleVue>
				<template #left>
					动帐通知
				</template>
				<template #rigth>
					更多
				</template>
			</titleVue>
			<view class="image-box">
				<image src="@/static/youth-1.png" mode=""></image>
			</view>
		</view>
		<view class="youth-account">
			<titleVue>
				<template #left>
					服务提醒
				</template>
			</titleVue>
			<view class="image-box">
				<image src="@/static/youth-2.png" mode=""></image>
			</view>
		</view>
		<view class="youth-account">
			<titleVue>
				<template #left>
					精选内容
				</template>
			</titleVue>
			<view class="image-box">
				<image src="@/static/youth-3.png" mode=""></image>
			</view>
		
		</view>
	</view>
</template>

<script>
	import titleVue from './titleVue.vue';
	export default {
		name:"youth",
		data() {
			return {
				
			};
		},
		components:{
			titleVue
		}
	}
</script>

<style lang="scss" scoped>
	.youth{
		width: 90%;
		margin: 0 auto;
		.youth-account{
			background-color: #fff;
			padding-bottom: 20rpx;
			margin-top: 20rpx;
			border-radius: 20rpx;
			.image-box{
				width:90%;
				margin: 0 auto;
				image{
					width:100%;
					height: 200rpx;
				}
			}
			
		}
	}
</style>