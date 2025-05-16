<template>
	<view class="RepaymentDetails">
		<occupyVue></occupyVue>
		<view class="RepaymentDetails-NavTitle">
			<backtaberVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' :RightMax='1'>
				<text style="color: #677781;">还款明细</text>
			</backtaberVue>
		</view>
		<view class="RepaymentDetails-TitleBox">
			<view class="TitleBox-box">
				<view class="btn">
					筛选
				</view>
				<view class="text">
					<p>累计已还本息合计</p>
					<span>{{TotalMoney}}元</span>
				</view>
			</view>
			<view class="TitleBox-box">
				<view class="text left">
					<p>累计已还本金</p>
					<span>0.00元</span>
				</view>
				<view class="text">
					<p>累计已还利息</p>
					<span>{{TotalMoney}}元</span>
				</view>
			</view>
		</view>
		<view class="RepaymentDetails-listTtle">
			<titleVue :RFontW="true" RColor="#666" Lcolor="#666" RFontSize="30" >
				<template #left>
					期数/业务发生时间
				</template>
				<template #rigth>
					本息合计/业务性质
				</template>
			</titleVue>
		</view>
		<view class="RepaymentDetails-listView">
			<view class="listView" v-for="(item,index) in RepaymentDetailsListView" :key="index">
				<view class="ListView-box">
					<titleVue :LFontW="false" :RFontW="false" RColor="#666" Lcolor="#000" RFontSize="32"  LFontSize="32" Padding="0 0">
						<template #left>
							{{item.num}}
						</template>
						<template #rigth>
							{{item.money}}
						</template>
					</titleVue>
					<titleVue :LFontW="false" :RFontW="false" RColor="#666" Lcolor="#666" RFontSize="25"  LFontSize="25" Padding="0 0">
						<template #left>
							{{item.time}}
						</template>
						<template #rigth>
							{{item.sub}}
						</template>
					</titleVue>
				</view>
				<view class="ListView-icon">
					<image src="@/static/nine_search_right_arrow.png" mode=""></image>
				</view>
				
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import occupyVue from '../../components/occupy.vue';
	import backtaberVue from '../../components/backtaber.vue';
	import titleVue from '../../components/titleVue.vue';
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
				RepaymentDetailsListView:[
					{num:'0',money:'800,000.00元',time:'2024-02-05',sub:'发放',Istrue:true},
					{num:'1',money:'2,684.33元',time:'2024-03-05',sub:'正常扣款'},
					{num:'2',money:'2,300.00元',time:'2024-04-05',sub:'正常扣款'},
					{num:'3',money:'2,300.00元',time:'2024-05-05',sub:'正常扣款'},
					{num:'4',money:'2,300.00元',time:'2024-06-05',sub:'正常扣款'},
					{num:'5',money:'2,300.00元',time:'2024-07-05',sub:'正常扣款'},
					{num:'6',money:'2,300.00元',time:'2024-08-05',sub:'正常扣款'},
					{num:'7',money:'2,300.00元',time:'2024-09-05',sub:'正常扣款'},
					{num:'8',money:'2,300.00元',time:'2024-10-05',sub:'正常扣款'},
					{num:'9',money:'2,300.00元',time:'2024-11-05',sub:'正常扣款'},
					{num:'10',money:'2,300.00元',time:'2024-12-05',sub:'正常扣款'},
					{num:'11',money:'2,300.00元',time:'2025-01-05',sub:'正常扣款'},
					{num:'12',money:'2,300.00元',time:'2024-02-05',sub:'正常扣款'},
					{num:'13',money:'2,300.00元',time:'2025-03-05',sub:'正常扣款'},
				],
				num:0,
			};
		},
		components:{
			occupyVue,
			backtaberVue,
			titleVue
		},
		computed:{
			TotalMoney() {
			    return this.RepaymentDetailsListView.map(item => {
			      if (!item.Istrue) {
			        const money = Number(parseFloat(item.money.replace(/[,元]/g, '')));
			        return money;
			      } else {
			        return 0;
			      }
			    }).reduce((pre, cur) => pre + cur, 0).toFixed(2);
			  }
		}
	}
</script>

<style lang="scss" scoped>
	.RepaymentDetails{
		width: 100vw;
		height: 100vh;
		.RepaymentDetails-NavTitle{
			width: 100%;
			background-color: #f7f7f7;
			position: fixed;
			top: 0;
			border-bottom: 1px solid #d5d5d5;
			padding-bottom: 20rpx;
		}
		.RepaymentDetails-TitleBox{
			width: 100%;
			padding-bottom: 20rpx;
			background-color: #fd7b7b;
			margin-top: 90rpx;
			.TitleBox-box{
				display: flex;
				justify-content: space-between;	
				padding: 0 20rpx;
				padding-top: 50rpx;
				.btn{
					display: flex;
					align-items: center;
					justify-content: center;
					border: 1px solid;
					padding: 0 60rpx;
					font-size: 30rpx;
					border-radius: 50rpx;
					color: #fd7b7b;
					background-color: #fff;
				}
				.text{
					text-align: right;
					color: #fff;
					p{
						font-size: 28rpx;
					}
					span{
						font-size: 32rpx;
						font-weight: bold;
					}
				}
				.left{
					text-align: left;
				}
			}
		}
		.RepaymentDetails-listTtle{
			background-color:#f6f7f9 ;
		}
		.RepaymentDetails-listView{
			width: 100%;
			.listView{
				width: 100%;
				display: flex;
				align-items: center;
				border: 1rpx solid #eee;
				.ListView-box{
					flex: 1;
					padding: 20rpx 0;
				}
				.ListView-icon{
					image{
						width: 30rpx;
						height: 30rpx;
						margin-right: 20rpx;
					}
				}
			}
			
		}
	}
</style>
