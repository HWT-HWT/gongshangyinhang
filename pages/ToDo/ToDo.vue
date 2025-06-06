<template>
	<view class="ToDo">
		<view class="ToDo-NavTitle">
			<backtaberVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' :RightMax='1'>
				<text style="color: #677781;">待办事项</text>
			</backtaberVue>
		</view>
		
		<view class="ToDo-Tabs" >
			<view class="Tabs" v-for="(item,index) in TabsList" :key="index" @click="GetIndex(index)" >
				<span>{{item}}</span>
				<view :class="{'viewBgColor' : index === select}" >
				</view>
			</view>
		</view>
		
		<view class="Loan-settle" v-if="select === 0">
			<image src="@/static/cash_book_defaultpage.png" mode=""></image>
			<p>暂无待办事项</p>
		</view>
		
		<view class="Loan-settle" v-else>
			<image src="@/static/cash_book_defaultpage.png" mode=""></image>
			<p>暂无待办事项</p>
		</view>
		
		<!-- <view class="complete" v-else>
			<view class="complete-title">
				<view>
					<span>个人贷款申请表</span>
					<view class="box">
						本人申请
					</view>
				</view>
				<text>已确认材料</text>
			</view>
			<view class="list" v-for="(item,index) in list" :key="index">{{item}}</view>
			
		</view> -->
	</view>
</template>

<script>
	import backtaberVue from '../../components/backtaber.vue';
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
				TabsList:['待办事项','已完成事项'],
				select:0,
				list:['主申请人 : *演乐','借款品种 : 个人房产抵押消费与经营组合贷款','贷款支行 : 广州南庄支行','确认时间 : 2024-02-01 09:59:03']
			};
		},
		components:{
			backtaberVue
		},
		methods:{
			GetIndex(index){
				this.select = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ToDo{
		width: 100vw;
		height: 100vh;
		background-color: #f7f7f7;
		.ToDo-NavTitle{
			background-color: #fff;
		}
		.ToDo-Tabs{
			display: flex;
			margin: 0 auto;
			padding-top: 20rpx;
			justify-content: center;
			background-color: #fff;
			.Tabs{
				width: 50%;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				span{
					text-align: center;
					width: 100%;

				}
				view{
					margin-top: 10rpx;
					width: 100%;
					height: 5rpx;
					background: #ddd;
				}
				.viewBgColor{
					background: #fa5050;
				}
			}
		}
		.Loan-settle{
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin: 0 auto;
			padding-top: 400rpx;
			image{
				width: 300rpx;
				height: 300rpx;
			}
			p{
				text-align: center;
				width: 100%;
				font-size: 34rpx;
				margin-top: 20rpx;
				color: #888;
			}
		}
		.complete{
			width: 95%;
			margin: 0 auto;
			margin-top: 20rpx;
			.complete-title{
				width: 95%;
				background-color: #fff;
				border-radius: 20rpx 20rpx 0 0;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #ddd;
				padding: 20rpx;
				view{
					display: flex;
					align-items: center;
					font-weight: bold;
					.box{
						padding: 10rpx 20rpx;
						border-radius: 10rpx;
						background-color: #fa5050;
						color: #fff;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 25rpx;
						margin-left: 20rpx;
						font-weight: normal;
					}
				}
				text{
					color: #fa5050;
				}
			}
			.list{
				background-color: #fff;
				padding: 10rpx 20rpx;
				font-size: 30rpx;
				color: #666;
			}
		}
	}
</style>
