<template>
	<view class="Zooz-Title">
		<view class="left" :style="{'fontSize' : `${LFontSize}rpx`,'fontWeight':LFontW ? 'bold':'normal','padding':Padding,'color' : Lcolor}">
			<slot name="left" ></slot>
		</view>
		<view class="rigth" :style="{'fontSize' : `${RFontSize}rpx`,'color':RColor,'fontWeight':RFontW ? 'bold':'normal'}" >
			<slot name="rigth"></slot>
			<image v-if='icon' src="@/static/right-1.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"titleVue",
		data() {
			return {
				
			};
		},
		props:{
			LFontSize:{
				type:String,
				default:"30"
			},
			RFontSize:{
				type:String,
				default:"28"
			},
			LFontW:{
				type:Boolean,
				default:true
			},
			RFontW:{
				type:Boolean,
				default:false
			},
			Padding:{
				type:String,
				default:'20rpx 0rpx'
			},
			icon:{
				type:Boolean,
				default:false
			},
			RColor:{
				type:String,
				default:'#000'
			},
			Lcolor:{
				type:String,
				default:'#000'
			}
			
		},
		created() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.Zooz-Title{
		margin: 0 auto;
		width: 90%;
		display: flex;
		align-items: center;
		justify-content:space-between;
		.left{
			flex: 1;
		}
		.rigth{
			font-weight: normal;
			color: #222222;
			display: flex;
			align-items: center;
			image{
				width: 30rpx;
				height: 30rpx;
			}
		}
	}
</style>