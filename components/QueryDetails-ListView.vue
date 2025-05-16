<template>
	<view class="list-box" :style="{'borderBottom' :'1px solid #eee'}">
		<view class="Time">
			<p :style="{'opacity':list.date ? 1 : 0,'color' : weekend}">{{!list.date ? '00' : list.date}}</p>
			<p class="text" :style="{'color' : weekend}">{{list.week}}</p>
		</view>
		<view class="list-content">
			<view style="display: flex; align-items: center;">
				<!-- <view class="text-image">
					<image src="@/static/QueryDetails-ListView-1.png" mode=""></image>
				</view> -->
				<view class="text">
					<p>{{list.notes}}</p>
					<p style="color: #677781;" :style="{'opacity':list.source ? 1 : 0}">{{!list.source ? '00' : list.source}}</p>
					<p class="mini-P">{{list.time}}</p>
				</view>
			</view>
			<view class="money">
				<p class="Big-Money" :style="{'color' : color ? '#e80000' :'#888'}">{{color ? '+'+list.AddDete :'-'+ list.AddDete }}</p>
				<p>{{list.balance}}</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"QueryDetails-ListView",
		data() {
			return {
				
			};
		},
		props:{
			list:{
				type:[Array,Object]
			},
			color:{
				type:Boolean,
				default:false
			},
			weekend:{
				type:String,
				default:'#888'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-box{
		display: flex;
		.Time{
			padding: 20rpx;
			background-color: #fbfbfb;
			color: #4075c9;
			p{
				font-size: 35rpx;
			}
			.text{
				width: 100%;
				font-size: 20rpx;
			}
		}
		.list-content{
			flex: 1;
			display: flex;
			justify-content: space-between;
			line-height: 40rpx;
			padding: 25rpx;
			.text-image{
				margin-right: 25rpx;
				image{
					width: 50rpx;
					height: 50rpx;
				}
			}
			.text{
				font-size: 28rpx;
				.mini-P{
					font-size: 24rpx;
					color: #888;
					margin: 10rpx 0;
				}
			}
			.money{
				text-align: right;
				font-size: 28rpx;
				color: #555;
				.Big-Money{
					color: #e80000;
					font-size: 40rpx;
					margin: 25rpx 0;
				}
			}
		}
	}
</style>