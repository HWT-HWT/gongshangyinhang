<template>
	<view class="pension-backtaber">
		<occupyVue></occupyVue>
		<view class="backtaber-box">
			<view class="backtaber-title" :style="{color:Color}">
				<slot></slot>
			</view>
		
		</view>
		
		<view class="backtaber-icon" >
			<image :src="TitleImage" mode="" @click="back"></image>
			<view class="backtaber-right-icon">
				<image :style="{'transform':`scale(${RightMax})`}" :src="item" mode="" v-for="(item,index) in rigthIcon" :key="index"></image>
				<text v-if="isText" :style="{'fontSize' : rightText + 'rpx'}"><slot name="text"></slot></text>
			</view>
		</view>
	</view>
</template>

<script>
	import occupyVue from './occupy.vue';
	export default {
		name:"backtaber",
		data() {
			return {
				
			};
		},
		props:{
			TitleImage:{
				type:String
			},
			rigthIcon:{
				type:Array,
			},
			RightMax:{
				type:Number,
				default:1.8
			},
			isText:{
				type:Boolean,
				default:false
			},
			rightText:{
				type:String,
				default:'30'
			},
			Color:{
				type:String,
				default:'#000'
			}
		},
		methods:{
			back(){
				uni.navigateBack()
			}
		},
		components:{
			occupyVue
		}
	}
</script>

<style lang="scss" scoped>
	.pension-backtaber{
		width: 90%;
		margin: 0 auto;
		padding-bottom: 20rpx;
		.backtaber-box{
			display: flex;
			align-items: center;
			justify-content: center;
			.backtaber-title{
				font-size: 40rpx;
			}
			
		}
		.backtaber-icon{
			width: 95%;
			display: flex;
			justify-content: space-between;
			position: absolute;
			top: 95rpx;
			image{
				width: 50rpx;
				height: 50rpx;
			}
			.backtaber-right-icon{
				display: flex;
				align-items: center;
				justify-content: center;
				image{
					width: 50rpx;
					height: 50rpx;
					padding:0 15rpx
				}
			}
		}
	}
</style>