<template>
	<view class="SearchMore">
		<occupyVue></occupyVue>
		<occupyVue></occupyVue>
		<view class="SearchMore-NavTitle">
			<backtaberVue :TitleImage='TitleImage':RightMax='1' :rigthIcon='rigthIcon' :isText='true' :rightText='"34"'>
				<text style="color: #677781;">查询申请结果</text>
			</backtaberVue>
		</view>
		<view class="SearchMore-Style">
			<SearchMoreListViewVue color="#000">
				<template #name>
					选择贷款
				</template>
				<template #style>
					<text style="color: #2764e3;">贷款进度</text>
				</template>
			</SearchMoreListViewVue>
		</view>
		<view class="SearchMore-Time">
			<view class="Select-Time">
				<view class="btn" v-for="(item,index) in time" :key="index">{{item}}</view>
			</view>
		</view>
		
		<SearchMoreListViewVue>
			<template #name>
				起始时间
			</template>
			<template #style>
				<SelectDataVue @Date="Data" :StartedEnd='0'></SelectDataVue>
			</template>
		</SearchMoreListViewVue>
		
		<SearchMoreListViewVue>
			<template #name>
				截止时间
			</template>
			<template #style>
				<SelectDataVue @Date="Data" :StartedEnd='1'></SelectDataVue>
			</template>
		</SearchMoreListViewVue>
		
		<view class="btn">
			<view class="Search-Btn " @click="SearchBtn">
				查询
			</view>
		</view>
		
		<view class="prompt">
			<view class="">
				
			</view>
			温馨提示
			<view class="">
				
			</view>
		</view>
		
		<view class="footer-text">
			如选择交易类型为变更贷款，可查询提前还款、预约还款、变更贷款期限、变更还款方式等申请结果。
		</view>
	</view>
</template>

<script>
	import backtaberVue from '../../components/backtaber.vue';
	import titleVue from '../../components/titleVue.vue';
	import occupyVue from '../../components/occupy.vue';
	import SearchMoreListViewVue from '../../components/SearchMore-ListView.vue';
	import SelectDataVue from '../../components/SelectData.vue';
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
				time:['近1周','近1月','近3月','近6月','近一年'],
				index: 0,
				array: ['全部', '收入', '支出',],
				endData:{},
				startedData:{}
			};
		},
		components:{
			backtaberVue,
			titleVue,
			occupyVue,
			SearchMoreListViewVue,
			SelectDataVue
		},
		methods:{
			SearchBtn(){
				uni.navigateBack()
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},
			Data(data,num){
				console.log(data,num);
				num === 1  ? this.endData = data : this.startedData = data
				console.log(this.endData,this.startedData);
			}
		},
		computed: {
		},
	}
</script>

<style lang="scss">
	.SearchMore{
		width: 100vw;
		height: 100vh;
		background-color: #eeeeee;
		.SearchMore-NavTitle{
			width: 100%;
			background-color: #f7f7f7;
			position: fixed;
			top: 0;
			border-bottom: 1px solid #d5d5d5;
			padding-bottom: 20rpx;
			z-index: 999;
		}
		.SearchMore-Time{
			width: 100%;
			
			margin-top: 20rpx;
			.Select-Time{
				width: 100%;
				display: flex;
				padding: 30rpx 0;
				justify-content: center;
				
				margin-bottom: 20rpx;
				.btn{
					padding: 10rpx 15rpx;
					border-radius: 10rpx;
					background-color: #fff;
					font-size: 25rpx;
					border: 1px solid #000;
					margin:0 10rpx;
				}
				.btn:hover{
					color: #2764d4;
					border: 1px solid;
				}
			}
		}
		.btn{
			display: flex;
			.Search-Btn{
				width: 95%;
				padding: 20rpx 0;
				margin: 0 auto;
				background-color: #fa5050;
				margin-top:20rpx;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 5rpx;
				font-size:35rpx;
			}
		}	
		.SearchMore-email{
			margin-top: 20rpx;
		}
		.login-checkbox{
			margin: 0 auto;
			margin-top: 20rpx;
			font-size: 28rpx;
			display: flex;
			flex-wrap: nowrap;
			justify-content: center;
			checkbox{
				transform: scale(0.65);
			}
			text{
				width: 100%;
				line-height: 45rpx;
				text{
					color: #2d84ec;
					
				}
			}
		}
		.prompt{
			width: 95%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 50rpx;
			color: #666;
			view{
				width: 38%;
				background-color: #ddd;
				height: 5rpx;
			}
		}
		.footer-text{
			width: 95%;
			margin: 0 auto;
			margin-top: 20rpx;
			font-size: 25rpx;
		}
	}
</style>