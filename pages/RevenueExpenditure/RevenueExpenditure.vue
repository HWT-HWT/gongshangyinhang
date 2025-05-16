<template>
	<view class="RevenueExpenditure">
		<occupyVue></occupyVue>
		<occupyVue></occupyVue>
		<view class="search-top">
			<occupyVue></occupyVue>
			<view class="search-title">
				<searcTitleVue>
					<template #LeftIcon>
						<view class="search-Left-icon" @click="Back">
							<image src="@/static/icon_go_left.png" mode=""></image>
						</view>
					</template>
					<template #input>
						<view class="search-input">
							<view>
								<image src="@/static/standard_favorite_searchview_magnifier-1.png" mode=""></image>
								<text>搜索关键词</text>
							</view>	
						</view>
					</template>
					<template #RightIcon>
						<view class="search-right-icon">
							<image src="@/static/base_im_icon_service.png" mode=""></image>
							<image src="@/static/base_im_icon_more.png" mode=""></image>
						</view>
					</template>
				</searcTitleVue>
			</view>
			
			<view class="search-Select">
				<view class="selectBtn" @click="open(0)">
					*洪斌
					<image src="@/static/my_detail_classify_down_icon.png" mode=""></image>
				</view>
				<view class="selectBtn" @click="open(1)" :style="{color:CardIndex !==0 ? '#c56a70' :'#000',fontWeight:CardIndex !==0 ? 'bold' :'normal'}">
					{{CardIndex === 0 ? '全部账户' : ''}}
					{{CardIndex === 1 ? '尾号8073' : ''}}
					{{CardIndex === 2 ? '尾号7107' : ''}}
					<image src="@/static/my_detail_classify_down_icon.png" mode=""></image>
				</view>
				<view class="selectBtn" @click="open(2)">
					筛选
					<image src="@/static/my_detail_classify_down_icon.png" mode=""></image>
				</view>
				<view class="selectBtn" @click="toggle(type)">
					选择时间
					<image src="@/static/my_detail_classify_down_icon.png" mode=""></image>
				</view>
				
			</view>
		</view>
		
		
		<view class="RevenueExpenditure-listView" v-if="CardIndex === 1">
			<p>本月无交易记录</p>
		</view>
		
		<view class="QueryDetails-SubTitle" v-for='(item,index) in listTrue' :key="index" v-else>
			<view class="RevenueExpenditure-listViewBox" :style="{'background' : 'url('+item.ImageUrl+')','backgroundSize':'100% 100%'}">
				<view class="">
					
				</view>
				<view class="listViewBox-money">
					<text><span>收</span> ￥{{item.QueryDetails[1] ? item.QueryDetails[1].AddDete : '0.00'}}</text>
					<p><span>支</span> ￥{{item.QueryDetails[0].AddDete}}</p>
				</view>
			</view>
			
			<view class="QueryDetails-list" v-for="(sum,num) in item.QueryDetails" :key="num">
				<QueryDetailsListViewVue :list='sum' :color='sum.isTrue' :weekend='sum.weekend'></QueryDetailsListViewVue>
			</view>
		</view>
		
		<uni-popup ref="popup" type="bottom" border-radius="10px 10px 0 0">
			<view class="QueryDetails-Container" v-if="TopIndex === 0">
				<ContainerTitleVue @close='colse()'>
					<template>
						用户选择
					</template>
				</ContainerTitleVue>
				<view class="Container">
					<image src="@/static/qr_radio_check.png" mode=""></image>
					<view class="Container-Title">
						*洪斌
					</view>
				</view>
				<view class="btn" @click="colse()">
					确定
				</view>
			</view>
			
			<view class="QueryDetails-Account" v-if="TopIndex === 1">
				<ContainerTitleVue @close='colse()'>
					<template>
						账户选择
					</template>
				</ContainerTitleVue>
				
				<view class="Container" @click="SelectCard(0)" >
					<image src="@/static/scene_authorization_checkbox_on.png" mode="" v-if="CardIndex===0"></image>
					<image class="checkImage" src="@/static/scene_authorization_checkbox_off.png" mode="" v-else></image>
					<view class="Container-Title">
						全部账户
					</view>
				</view>
				
				<view class="Card-content" @click="SelectCard(1)" >
					<image class="checkImage" src="@/static/scene_authorization_checkbox_on.png" mode=""  v-if="CardIndex===1"></image>
					<image class="checkImage" src="@/static/scene_authorization_checkbox_off.png" mode="" v-else></image>
					<image src="@/static/account-cart-2.png" mode=""></image>
					<view class="content-text">
						<p>广州 借记卡(I类)</p>
						<span>6222****8073</span>
					</view>
				</view>
				
				<view class="Card-content" @click="SelectCard(2)">
					<image class="checkImage" src="@/static/scene_authorization_checkbox_on.png" mode="" v-if="CardIndex===2"></image>
					<image class="checkImage" src="@/static/scene_authorization_checkbox_off.png" mode="" v-else></image>
					<image src="@/static/account-cart-1.png" mode=""></image>
					<view class="content-text">
						<p>广州 借记卡(I类)</p>
						<span>9558****7107</span>
					</view>
				</view>
				
				<view class="btn" @click="GetCardList(CardIndex)">
					确定
				</view>
			</view>
			
			
			<view class="QueryDetails-Select" v-if="TopIndex === 2">
				
				<ContainerTitleVue @close='colse()'>
					<template>
						筛选
					</template>
				</ContainerTitleVue>
				
				<view class="Select-View" v-for="(item,index) in Select" :key="index">
					<p>{{item.name}}</p>
					<view class="View-box" >
						<view class="View-btn" v-for="(sum,num) in item.list" :key="num">
							{{sum}}
						</view>
					</view>
				</view>
				
				<view class="Select-btn">
					<view class="btn">
						重置
					</view>
					<view class="btn selsct">
						确定
					</view>
				</view>
			</view>
		</uni-popup>
		
		<view class="SelectData">
			<uni-popup ref="SelectData" background-color="#fff" @change="change">
				
				<ContainerTitleVue>
					<template>
						筛选
					</template>
				</ContainerTitleVue>
				
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
					<picker-view v-if="visible" :indicator-style="indicatorStyle" :value="valueData" @change="bindChange" class="picker-view">
					    <picker-view-column>
					        <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
					    </picker-view-column>
					    <picker-view-column>
					        <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
					    </picker-view-column>
					    <picker-view-column>
					        <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
					    </picker-view-column>
					</picker-view>
				</view>
				
				<view class="btn" @click="Right">
					完成
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import searcTitleVue from '../../components/searc-title.vue';
	import occupyVue from '../../components/occupy.vue';
	import QueryDetailsListViewVue from '../../components/QueryDetails-ListView.vue';
	import ContainerTitleVue from '../../components/ContainerTitle.vue';
	import SelectDataVue from '../../components/SelectData.vue';
	export default {
		data:function (){
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			for (let i = 1990; i <= date.getFullYear(); i++) {
				years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			return {
				years,
				year,
				months,
				month,
				days,
				day,
				valueData: [9999, month - 1, day - 1],
				visible: true,
				indicatorStyle: `height: 50px;`,
				type: 'center',
				msgType: 'success',
				messageText: '这是一条成功提示',
				value: '',
				listTrue:[
					{
						time:'2024年2月',
						ImageUrl:'../../static/February.png',
						QueryDetails:[
							{date:'15',week:'周日',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡4404 14:02:40',AddDete:'2,300.00',balance:'余额:3,510.67',weekend:'#4075c9',isTrue:false},
						]
					},
					{
						time:'2024年1月',
						ImageUrl:'../../static/January.png',
						QueryDetails:[
							{date:'15',week:'周三',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡4404 14:02:56',AddDete:'2,300.00',balance:'余额:5,811.67',isTrue:false},
						]
					},
					{
						time:'2024年12月',
						ImageUrl:'../../static/December.png',
						QueryDetails:[
							{date:'15',week:'周日',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡4404 14:03:12',AddDete:'2,300.00',balance:'余额:8,112.67',weekend:'#4075c9',isTrue:false},
						]
					},
					{
						time:'2024年11月',
						ImageUrl:'../../static/November.png',
						QueryDetails:[
							{date:'15',week:'周六',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡4404 14:02:32',AddDete:'2,300.00',balance:'余额:10,413.67',weekend:'#4075c9',isTrue:false},
						]
					},
					{
						time:'2024年10月',
						ImageUrl:'../../static/October.png',
						QueryDetails:[
							{date:'15',week:'周三',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡4404 14:02:25',AddDete:'2,300.00',balance:'余额:12,714.67',isTrue:false},
						]
					},
					{
						time:'2024年9月',
						ImageUrl:'../../static/September.png',
						QueryDetails:[
							{date:'15',week:'周日',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡4404 14:02:38',AddDete:'2,300.00',balance:'余额:15,015.67',weekend:'#4075c9',isTrue:false},
						]
					},
					{
						time:'2024年8月',
						ImageUrl:'../../static/August.png',
						QueryDetails:[
							{date:'15',week:'周四',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡4404 14:02:08',AddDete:'2,683.33',balance:'余额:17,316.67',isTrue:false},
							{date:'',week:'',notes:'银联入账',source:'网上银行',time:'工银借记卡4404 11:14:38',AddDete:'20,000.00',balance:'余额:20,000.00',isTrue:true},
						]
					},
				],
				TopIndex:0,
				Select:[
					{
						name:'收支类型',
						list:['支出','收入']
					},
					{
						name:'交易类型',
						list:['消费','贷款','工资','信用卡','还款','支付宝','财付通','展开']
					},
					{
						name:'交易金额类型',
						list:['小于5千','5千-1万','1万-5万','大于5万'],
						Select:true
					},
					{
						name:'交易币种',
						list:['人民币','美元','港币','欧元','英镑','瑞士法郎','新加坡元','日元','加拿大元','澳大利亚元']
					}
				],
				CardIndex:0
			};
		},
		components:{
			searcTitleVue,
			occupyVue,
			QueryDetailsListViewVue,
			ContainerTitleVue,
			SelectDataVue
		},
		methods:{
			Back(){
				uni.navigateBack()
			},
			open(index){
				
				this.TopIndex = index
				
				this.$refs.popup.open('bottom')
			},
			colse(){
				this.$refs.popup.close()
			},
			bindChange: function (e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},
			// 检测时间选择器状态 打开为 true 关闭 false
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			
			// 打开弹出层
			toggle(type) {
				this.type = 'bottom'
				this.$refs.SelectData.open('bottom')
			},
			// 关闭弹出层
			Right(index){
				this.$refs.SelectData.close()
			},
			SelectCard(index){
				
				this.CardIndex = index
				console.log(this.CardIndex);
			},
			GetCardList(CardIndex){
				console.log(CardIndex);
				this.$refs.popup.close()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.RevenueExpenditure{
		width: 100vw;
		height: 120vh;
		.search-top{
			width: 100%;
			position: fixed;
			top: 0;
			background-color: #fff;
			.search-title{
				display: flex;
				align-items: center;
				.search-Left-icon{
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
					image{
						width: 50rpx;
						height: 50rpx;
						padding: 0 20rpx;
					}
				}
				.search-input{
					width: 100%;
					padding: 0 20rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 25rpx;
					color: #888;
					view{
						display: flex;
						align-items: center;
						text{
							margin:0 10rpx;
						}
					}
					image{
						width: 40rpx;
						height: 40rpx;
					}
				}
				.search-right-icon{
					image{
						width: 45rpx;
						height: 45rpx;
						margin: 0 15rpx;
					}
				}
			}
			.search-Select{
				display: flex;
				padding: 20rpx;
				
				.selectBtn{
					padding: 10rpx 10rpx;
					display: flex;
					align-items: center;
					font-size: 28rpx;
					margin:0 10rpx;
					image{
						width: 20rpx;
						height: 20rpx;
						margin: 0 10rpx;
						margin-top: 10rpx;
					}
				}
			}
			.Select-ListView{
				width: 90%;
				border: 1px solid;
				margin: 0 auto;
			}
		}
		.RevenueExpenditure-listView{
			width: 100%;
			height: 150rpx;
			background: url('@/static/March.png');
			background-size: 100% 100%;
			margin-top: 70rpx;
			display: flex;
			align-items: center;
			font-size: 28rpx;
			p{
				width: 100%;
				text-align: right;
				padding:0 30rpx;
			}
		}
		.RevenueExpenditure-listViewBox{
			width: 100%;
			height: 150rpx;
			background: url('@/static/December.png');
			background-size: 100% 100%;
			line-height: 50rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.listViewBox-money{
				font-size: 35rpx;
				padding: 0 30rpx;
				text{
					color: #e80000;
					span{
						font-size: 30rpx;
						margin:0 10rpx;
						color: #000;
					}
				}
				p{
					color: #888;
					span{
						font-size: 30rpx;
						margin:0 10rpx;
					}
				}
			}
		}
		.QueryDetails-SubTitle{
			margin-top: 50rpx;
			.QueryDetails-list{
				width: 100%;
				background-color: #fff;
			}
			.tisi{
				padding: 20rpx 0;
				text-align: center;
				color: #888;
				font-size: 30rpx
			}
		}
		.uni-popup{
			.QueryDetails-Container{
				width: 100%;
				background-color: #fff;
				padding-bottom: 20rpx;
				.ContainerTitle{
					margin: 0 auto;
					display: flex;
					align-items: center;
					padding: 20rpx;
					border-bottom: 1px solid #f3f3f3;
					image{
						width: 60rpx;
						height: 60rpx;
					}
					.Container-Title{
						flex: 1;
						text-align: center;
						font-size: 30rpx;
					}
				}
				.Container{
					margin: 0 auto;
					display: flex;
					align-items: center;
					padding: 35rpx ;
					border-bottom: 1px solid #f3f3f3;
					image{
						width: 35rpx;
						height: 35rpx;
					}
					.Container-Title{
						font-size: 28rpx;
						margin-left: 10rpx;
					}
				}
				.btn{
					width: 90%;
					margin: 0 auto;
					display: flex;
					align-items: center;
					justify-content: center;
					padding:20rpx 0;
					margin-top: 20rpx;
					background-color: #da4453;
					color: #fff;
				}
			}
			.QueryDetails-Account{
				width: 100%;
				background-color: #fff;
				border-bottom: 1px solid #f3fef3;
				.Container{
					margin: 0 auto;
					display: flex;
					align-items: center;
					padding: 35rpx ;
					border-bottom: 1px solid #f3f3f3;
					image{
						width: 35rpx;
						height: 35rpx;
					}
					.Container-Title{
						font-size: 28rpx;
						margin-left: 10rpx;
					}
				}
				.Card-content{
					width: 100%;
					margin: 0 auto;
					display: flex;
					align-items: center;
					padding: 35rpx;
					background-color: #fff;
					image{
						width: 80rpx;
						height: 60rpx;
						margin-left: 20rpx;
					}
					.checkImage{
						width: 35rpx;
						height: 35rpx;
						margin-left: 0;
					}
					.content-text{
						margin-left: 20rpx;
						p{
							font-size: 25rpx
						}
						span{
							font-size: 28rpx
						}
					}
				}
				.btn{
					width: 90%;
					margin: 20rpx auto;
					border-radius: 5rpx;
					display: flex;
					justify-content: center;
					padding: 20rpx 0;
					margin-top: 50rpx;
					color: #fff;
					background-color: #da4453;
				}
			}
			.QueryDetails-Select{
				width: 100%;
				background-color: #fff;
				border-bottom: 1px solid #f3fef3;
				.Select-View{
					width: 90%;
					margin: 0 auto;
					margin-top: 20rpx;
					p{
						font-size: 28rpx;
					}
					.View-box{
						width: 100%;
						margin-top: 20rpx;
						display: flex;
						flex-wrap: wrap;
						.View-btn{
							width: 23%;
							padding: 15rpx 0;
							margin-top: 15rpx;
							border-radius: 5rpx;
							margin-right: 14rpx;
							background-color: #ebebeb;
							display: flex;
							justify-content: center;
							align-items: center;
							font-size: 23rpx;
						}
					}
				}
				.Select-btn{
					width: 100%;
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					margin: 20rpx 0;
					.btn{
						width: 45%;
						padding: 20rpx 0;
						display: flex;
						justify-content: center;
						font-size: 30rpx;
						border: 1px solid #da4453;
						color: #da4453;
						border-radius: 5rpx;
					}
					.selsct{
						background-color:#da4453;
						color: #fff;
					}
				}
			}
			
		}
		.SelectData{
			.uni-title{
				 color: #2764d4;
			}
			.picker-view {
				width: 750rpx;
				height: 300rpx;
				margin-top: 20rpx;
			}
			.item {
				line-height: 100rpx;
				text-align: center;
			}
			.popup-Top-Btn{
				padding: 20rpx;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				span{
					color: dodgerblue;
				}
			}
			.btn{
				width: 90%;
				margin: 20rpx auto;
				border-radius: 5rpx;
				display: flex;
				justify-content: center;
				padding: 20rpx 0;
				margin-top: 50rpx;
				color: #fff;
				background-color: #da4453;
			}
		}
		
		
	}
</style>
