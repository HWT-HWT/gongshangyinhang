<template>
	<view class="MyAccount-Card" :style="{background:index === 2 ? '#fff' : ''}" >
		 <view v-for="(item,index) in listTow" :key="index" >
		 	<view class="Card-content">
		 		<image :src="item.image" mode=""></image>
				<view class="content-text">
					<p>{{item.name}}</p>
					<span>{{item.CarNumber}}</span>
				</view>
		 	</view>
		 	<view class="Card-Money" v-if='!Account'>
		 		<view class="span">人民币余额 <image v-if="item.icon" src="@/static/nine_title_fresh.png" mode=""></image> </view>
		 		<text v-if='item.money'>{{item.money}}</text>
				<!-- <view v-else class="btn">
					点击查看
				</view> -->
		 	</view>
		 	<view class="Card-Money Account" v-else>
		 		<span>柜面注册</span>
		 	</view>
		 </view>
	</view>
</template>

<script>
	export default {
		name:"card-Box",
		data() {
			return {
				// list:[{name:'广州 理财金账户(I类)', CarNumber:'6222****8073',icon:true, image:'../../static/account-cart-2.png',money:'1,210.67'}],
				listTow:[{name:'广州 借记卡(I类)', CarNumber:'6222****0693',icon:false, image:'../../static/account-cart-1.png'}],
			};
		},
		props:{
			Account:{
				type:Boolean,
				default:false
			},
			BgColor:{
				type:String
			},
			index:{
				type:Number,
				default:1
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.MyAccount-Card{
		width: 90%;
		margin: 0 auto;
		box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
		border-radius: 20rpx;
		background: url('@/static/account-bg-2.png')no-repeat;
		background-size: 100% 100%;
		margin-top: 20rpx;
		.Card-content{
			width: 90%;
			display: flex;
			margin: 0 auto;
			align-items: center;
			padding: 30rpx 0;
			image{
				width: 100rpx;
				height: 80rpx;
			}
			.content-text{
				margin-left: 20rpx;
				p{
					font-size: 28rpx
				}
				span{
					font-size: 32rpx
				}
			}
		}
		.Card-Money{
			width: 90%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 30rpx;
			padding-top: 20rpx;
			font-size: 32rpx;
			.span{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				image{
					margin-left: 10rpx;
					width: 30rpx;
					height: 30rpx;
				}
			}
			.btn{
				font-size: 25rpx;
				border: 1px solid;
				padding: 10rpx 20rpx;
				border-radius: 50rpx;
				color: #4d66a6;
				font-weight: bold;
			}
		}
		.Account{
			border-top: 1px solid #f5f5f5 ;
			span{
				color: #888; 
				font-size: 25rpx;
			}
		}
	}
</style>