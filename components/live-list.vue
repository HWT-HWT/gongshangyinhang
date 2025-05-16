<template>
	<view class="List-box">
		<view class="home-list-content-icons">
			<view class="content-icons-text" v-for="(item,index) in list" :key="index" :style="{'width': BoxWodth}" @click="ListIndex(index)">
				<image :src="item.images" mode="" 
				:style="{'transform' : `scale(${Maxtransform})`,'width':`${width}rpx`,'height':`${height}rpx`,'borderRadius':Border ? '50rpx' :'','border':Border ? '1px solid #eee' :''}"></image>
				<view>{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"live-list",
		data() {
			return {
				
			};
		},
		methods:{
			ListIndex(index){
				this.$emit('index',index)
			}
		},
		props:{
			list:{
				type:Array
			},
			Maxtransform:{
				type:Number,
				default:1
			},
			width:{
				type:String,
				default:'90'
			},
			height:{
				type:String,
				default:'80'
			},
			BoxWodth:{
				type:String,
				default:'19%'
			},
			Border:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style lang="scss">
	.List-box{
		width: 100%;
		.home-list-content-icons{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-evenly;
			.content-icons-text{
				width: 19%;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				margin-top: 10rpx;
				margin-bottom: 20rpx;
				image{
					width: 90rpx;
					height: 80rpx;
				}
				view{
					width: 100%;
					height: 50rpx;
					font-size: 28rpx;
					text-align: center;
					margin-top: 15rpx;
				}
			}
		}
	}
</style>