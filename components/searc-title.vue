<template>
	<view class="title-all">
		<view class="text-search-iocn">
			<slot name="LeftIcon"></slot>
		</view>
		<view class="search-input">
			<view class="search-input-box">
				<slot name="input"></slot>
			</view>
		</view>
		<view class="home-title-icon">
			<view>
				<slot name="RightIcon"></slot>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		name:"searc-title",
		data() {
			return {
				
			};
		},
		props:{
			 bgWB:{
				 type:Boolean,
				 default:true,
			 },
		},
		methods:{
			QuitLogin(){
				this.$emit('quit',true)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.title-all{
		width: 100%;
		margin: 0 auto;
		display: flex;
		align-content: center;
		justify-content: space-between;
		z-index: 999 !important;
		.text-search-iocn{
			margin: 0 auto;
			display: flex;
			align-items: center;
			.text-icon{
				display: flex;
				align-items: center;
				view{
					display: flex;
					align-items: center;
				}
				image{
					width: 80rpx;
					height: 80rpx;
				}
				text{
					font-size: 28rpx;
					margin-left: -10rpx;
				}
			}
			.text-icon-w{
				display: flex;
				align-items: center;
				justify-content: center;
				image{
					width: 80rpx;
					height: 80rpx;
				}
				text{
					font-size: 28rpx;
					margin-left: -10rpx;
					color: #fff;
				}
			}
		}
		
		
		.search-input{
			flex: 1;
			display: flex;
			align-items: center;
			padding: 0 10rpx;
			.search-input-box{
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: rgba(0, 0, 0, .1);
				border-radius: 50rpx;
				padding:10rpx;
			}
			.search-input-box-w{
				display: flex;
				align-items: center;
				border: 1px solid #fff;
				background-color: rgba(0, 0, 0, .1);
				border-radius: 50rpx;
				padding:10rpx;
				image{
					display: flex;
					width: 40rpx;
					height: 40rpx;
					padding:0 10rpx ;
				}
				input{
					color: #fff;
					flex: 1;
					font-size: 25rpx;
				}
			}
		}
		.home-title-icon{
			display: flex;
			align-items: center;
			image{
				width: 95rpx;
				height: 95rpx;
				
			}
		}
	}
</style>