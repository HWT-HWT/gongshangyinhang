<template>
	<view class="QueryDetails">
		<occupyVue></occupyVue>
		<view class="QueryDetails-NavTitle">
			<backtaberVue :TitleImage='TitleImage':RightMax='1' :isText='true' :rightText='"34"'>
				<text style="color: #677781;">查询明细</text>
				<template #text>
					<text @click="GOSearchMore">查询更多</text>
				</template>
			</backtaberVue>
		</view>
		<view class="QueryDetails-card">
			<view class="Card-content" v-if="cardIndex===1">
				<image src="@/static/account-cart-2.png" mode=""></image>
				<view class="content-text" >
					<p>理财金账户(I类) 尾号8073</p>
					<span>人民币余额:1,210.67</span>
				</view>
			</view>
			<view class="Card-content" v-else>
				<image src="@/static/account-cart-1.png" mode=""></image>
				<view class="content-text" >
					<p>理财金账户(I类) 尾号7107</p>
				</view>
			</view>
			
			<view class="Card-Money">
				<view class="CommonMoney">
					当前汇总笔数:{{cardIndex === 2 ? "0" :12}}
				</view>
				<view class="RevenueExpenditure">
					<p class="Revenue"> 
						<image src="@/static/all_small_i_tip_9.png" mode=""></image>
						<text>收</text>¥{{cardIndex === 2 ? "0.00" :totalAdd}}
					</p>
					<p class="Expenditure">
						<text>支</text>¥{{cardIndex === 2 ? "0.00" :totalDele}} 
					</p>
				</view>
			</view>
		</view>
		
		<view class="QueryDetails-SubTitle"   v-if="cardIndex === 2">
			<view class="tisi">
				您最近一个月没有账户交易明细，如需查询更长时间范围的明细，请点击右上角“更多查询”。
			</view>
		</view>
		
		<view class="QueryDetails-SubTitle" v-for='(item,index) in listTrue' :key="index" v-else>
			<titleVue :LFontW="false">
				<template #left>
					{{item.time}}
				</template>
			</titleVue>
			
			<view class="QueryDetails-list" v-for="(sum,num) in item.QueryDetails" :key="num">
				<QueryDetailsListViewVue :list='sum' :color='sum.isTrue' :weekend='sum.weekend'></QueryDetailsListViewVue>
			</view>
		</view>
		
	</view>
</template>

<script>
	import backtaberVue from '../../components/backtaber.vue';
	import titleVue from '../../components/titleVue.vue';
	import QueryDetailsListViewVue from '../../components/QueryDetails-ListView.vue';
	import occupyVue from '../../components/occupy.vue';
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				list:[
					{
						time:'2024年12月',
						QueryDetails:[
							{date:'05',week:'周六',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡8073 21:34:35',AddDete:'2,300.00',balance:'余额:2,412.50',weekend:'#4075c9'},
							{date:'',week:'',notes:'银联入账',source:'网上银行',time:'工银借记卡8073 11:14:38',AddDete:'2,000.00',balance:'余额:3,510.67',color:'#e80000'},
						]
					}
				],
				listTrue:[
					{
						time:'2025年3月',
						ImageUrl:'../../static/February.png',
						QueryDetails:[
							{date:'05',week:'周三',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡8073 14:02:40',AddDete:'2,300.00',balance:'余额:1,210.67',isTrue:false},
						]
					},
					{
						time:'2025年2月',
						ImageUrl:'../../static/February.png',
						QueryDetails:[
							{date:'05',week:'周三',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡8073 14:02:40',AddDete:'2,300.00',balance:'余额:3,510.67',isTrue:false},
						]
					},
					{
						time:'2025年1月',
						ImageUrl:'../../static/January.png',
						QueryDetails:[
							{date:'05',week:'周日',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡8073 14:02:56',AddDete:'2,300.00',balance:'余额:5,816.67',isTrue:false,weekend:'#4075c9'},
						]
					},
					{
						time:'2024年12月',
						ImageUrl:'../../static/December.png',
						QueryDetails:[
							{date:'05',week:'周日',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡8073 14:03:12',AddDete:'2,300.00',balance:'余额:8,116.67',isTrue:false},
						]
					},
					{
						time:'2024年11月',
						ImageUrl:'../../static/November.png',
						QueryDetails:[
							{date:'05',week:'周二',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡8073 14:02:32',AddDete:'2,300.00',balance:'余额:10,416.67',isTrue:false},
						]
					},
					{
						time:'2024年10月',
						ImageUrl:'../../static/October.png',
						QueryDetails:[
							{date:'05',week:'周六',notes:'贷款本息',source:'中国工商银行',time:'工银借记卡8073 14:02:25',AddDete:'2,300.00',balance:'余额:12,716.67',isTrue:false,weekend:'#4075c9'},
						]
					},
					
				],
				totalAdd:0,
				totalDele:0,
				cardIndex:1
			};
		},
		components:{
			backtaberVue,
			titleVue,
			QueryDetailsListViewVue,
			occupyVue
		},
		created() {
			this.calculateTotalAddDete()
		},
		methods:{
			GOSearchMore(){
				uni.navigateTo({
					url:"/pages/SearchMore/SearchMore"
				})
			},
			calculateTotalAddDete() {
				
				// const formatter = new Intl.NumberFormat('en-US', {
				//   minimumFractionDigits: 2,
				//   maximumFractionDigits: 2,
				//   style: 'decimal'
				// });
				
				function formatNumberWithCommasAndDecimals(numStr){
					let num = parseFloat(numStr);
					let fixedNumStr = num.toFixed(2); // 获取两位小数的字符串，但不包括逗号
					let parts = fixedNumStr.split('.'); // 分割整数部分和小数部分
					let integerPart = parts[0]; // 整数部分
					let decimalPart = parts[1]; // 小数部分
					let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
					let result = formattedIntegerPart + '.' + decimalPart;
					return result;
				}
				
			  this.listTrue.forEach(month => {
				month.QueryDetails.forEach(detail => {
				  if(detail.isTrue){
					 this.totalAdd +=Number(parseFloat(detail.AddDete.replace(/[,元]/g, '')))
				  }else{
					this.totalDele +=Number(parseFloat(detail.AddDete.replace(/[,元]/g, '')))
				  }
				});
			  });
			  
			 // if(formatter){
				//  this.totalAdd = formatter.format(this.totalAdd) ?  formatter.format(this.totalAdd) : this.totalAdd;
				//  this.totalDele = formatter.format(this.totalDele) ? formatter.format(this.totalDele) : this.totalDele;
			 // }
			  this.totalAdd = formatNumberWithCommasAndDecimals(this.totalAdd)
			  this.totalDele = formatNumberWithCommasAndDecimals(this.totalDele)
			},
		},
		onLoad(url) {
			this.cardIndex = +url.id
			console.log(this.cardIndex);
		}
	}
</script>

<style lang="scss" scoped>
	.QueryDetails{
		width: 100vw;
		min-height: 100vh;
		background-color: #eeeeee;
		.QueryDetails-NavTitle{
			width: 100%;
			background-color: #f7f7f7;
			position: fixed;
			top: 0;
			border-bottom: 1px solid #d5d5d5;
			padding-bottom: 20rpx;
			z-index: 999;
		}
		.QueryDetails-card{
			width: 100%;
			margin: 0 auto;
			margin-top: 80rpx;
			background-color: #fff;
			padding-bottom: 20rpx;
			.Card-content{
				width: 90%;
				display: flex;
				margin: 0 auto;
				padding: 40rpx 0;
				image{
					width: 120rpx;
					height:90rpx;
				}
				.content-text{
					margin-top: 5rpx;
					margin-left: 20rpx;
					p{
						font-size: 30rpx;
					}
					span{
						font-size: 28rpx;
						color:#888;
					}
				}
			}
			.Card-Money{
				width: 90%;
				margin: 0 auto;
				background-color: #fffdf4;
				padding: 20rpx;
				display: flex;
				justify-content: space-between;
				.CommonMoney{
					font-size: 25rpx;
					color:#555;
				}
				.RevenueExpenditure{
					position: relative;
					.Revenue{
						width: 100%;
						display: flex;
						align-items: center;
						image{
							position: absolute;
							top: 8rpx;
							left: -30rpx;
							width: 30rpx;
							height: 30rpx;
						}
						font-size: 32rpx;
						color: #e80000;
					}
					.Expenditure{
						width: 100%;
						font-size: 30rpx;
						color: #888;
						margin: 5rpx 0;
						font-size: 32rpx;
						display: flex;
						align-items: center;
					}
					text{
						font-size: 25rpx;
						margin: 0 10rpx;
						color: #222;
					}
				}
			}
		}
		.QueryDetails-SubTitle{
			.QueryDetails-list{
				width: 100%;
				background-color: #fff;
			}
			.tisi{
				padding: 20rpx;
				text-align: center;
				color: #888;
				font-size: 30rpx
			}
		}
		
	}
</style>
