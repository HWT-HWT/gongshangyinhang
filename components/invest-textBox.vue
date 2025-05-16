<template>
	<view class="wealth-invest-textBox" >
		<view class="Optimal-money" :style="{'borderBottom': list.border ? '1px solid #ccc' : ''}">
			<view class="money-title">
				{{list.title}}
			</view>
			<view class="Optimal-list">
				<view class="Optimal-list-left">
					<p class="Optimal-list-left-MaxTitle">{{list.leftTop}}</p>
					<p class="Optimal-list-left-MiniTitle">{{list.leftBottom}}</p>
				</view>	
				<view class="Optimal-list-rigth">
					<p class="Optimal-list-left-MaxTitle">{{list.rigthTop}}</p>
					<p class="Optimal-list-left-MiniText">
						<text :style="{'borderRight' : index+1 === list.rigthBottom.length ? 'none' :'1px solid #ccc'}" v-for="(item,index) in list.rigthBottom" :key="index">{{item}}</text>
					</p>
				</view>
			</view>
			<view class="Optimal-bottom" v-if="list.Optimal">
				<p>{{list.Optimal}}</p>
			</view>
			<view class="Optimal-tisi" v-if="list.tisiText || list.tisiFooter">
				<view class="Optimal-tisi-text-icon" v-if="list.tisiText">
					<view class="tisi-text">
						{{list.tisiText}}
					</view>
					<view class="tisi-icon">
						<image src="@/static/nine_search_right_arrow.png" mode=""></image>
					</view>
				</view>
				<p  v-if="list.tisiFooter">{{list.tisiFooter}}</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"invest-textBox",
		data() {
			return {
				
			};
		},
		props:{
			list:{
				type:[Object,Array]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wealth-invest-textBox{
		width: 90%;
		margin: 0 auto;
		padding-bottom:10rpx;
		.Optimal-money{
			width: 100%;
			margin-top: 20rpx;
			padding-bottom:10rpx;
			.money-title{
				width:100%;
				margin: 10rpx auto;
				font-size: 28rpx;
				.uni-tag{
					background-color: #eff6ff; border-color: #eff6ff; color: #2979ff; font-weight:bold;
				}
			}
			.Optimal-list{
				width: 100%;
				margin: 0 auto;
				padding-bottom: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.Optimal-list-left{
					width: 45%;
					.Optimal-list-left-MaxTitle{
						font-size: 35rpx;
						color: #9a3b45;
						font-weight: bold;
						margin: 10rpx auto;
					}
					.Optimal-list-left-MiniTitle{
						font-size: 23rpx;
						color: #888;
					}
				}
				.Optimal-list-rigth{
					flex: 1;
					.Optimal-list-left-MaxTitle{
						font-size: 30rpx;
						font-weight: bold;
						margin: 10rpx auto;
						padding: 0 15rpx;
					}
					.Optimal-list-left-MiniText{
						font-size: 23rpx;
						color: #888;
						text{
							padding: 0 15rpx;
						}
					}
				}
			}
			.Optimal-bottom{
				font-size: 25rpx;
				color: #555;
				
			}
			.Optimal-tisi{
				width: 100%;
				background-color: #f2f2f2;
				.Optimal-tisi-text-icon{
					width: 100%;
					display: flex;
					justify-content: space-between;
					margin-top: 10rpx;
					padding: 10rpx;
					// border: 1px solid;
					.tisi-text{
						width: 90%;
						// border: 1px solid;
						color: #b56b4d;
						font-size: 20rpx;
					}
					.tisi-icon{
						flex: 1;
						transform: rotateZ(90deg);
						display: flex;
						justify-content: center;
						align-self: self-start;
						image{
							width: 25rpx;
							height: 25rpx;
						}
					}
				}
				p{
					font-size: 23rpx;
					padding:10rpx;
					display: flex;
					align-items: center;
				}
			}
		}
	}
</style>