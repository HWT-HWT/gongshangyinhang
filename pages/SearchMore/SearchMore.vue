<template>
	<view class="SearchMore">
		<occupyVue></occupyVue>
		<occupyVue></occupyVue>
		<view class="SearchMore-NavTitle">
			<backtaberVue :TitleImage='TitleImage':RightMax='1' :rigthIcon='rigthIcon' :isText='true' :rightText='"34"'>
				<text style="color: #677781;">查询明细</text>
			</backtaberVue>
		</view>
		<view class="SearchMore-Style">
			<SearchMoreListViewVue>
				<template #name>
					收支类别
				</template>
				<template #style>
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
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
		
		<view class="Search-Btn" @click="SearchBtn">
			确定
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
				time:['本日','近1周','近1月','近3月','近6月'],
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
			background-color: #fff;
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
					font-size: 25rpx;
					border: 1px solid #d8d8d8;
					margin:0 10rpx;
				}
				.btn:hover{
					color: #2764d4;
					border: 1px solid;
				}
			}
		}
		.Search-Btn{
			width: 95%;
			padding: 20rpx 0;
			margin: 0 auto;
			background-color: #ce0000;
			margin-top:20rpx;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 10rpx;
			font-size:35rpx;
		}
	}
</style>
