<template>
	<view class="Loan">
		<view class="Loan-NavTitle">
			<backtaberVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' :RightMax='1'>
				<text style="color: #677781;">我的贷款</text>
			</backtaberVue>
		</view>
		<view class="Loan-balance">
			<view class="balance-money">
				<view class="balance-money-text" @click="IsEye">
					贷款余额 
					<image src="@/static/upsdk_balance_show.png" v-if="eye" mode=""></image> 
					<image src="@/static/upsdk_balance_show-1.png" v-else mode=""></image> 
				</view>
				<span v-if="eye">800,000.00</span>
				<span v-else >****</span>
			</view>
			<view class="balance-list">
				<view v-for="(item,index) in balance" :key="index" @click="ClickGo(index)" >
					<text :style="{'border-right':index === 0 ? '1px solid rgba(255,255,255,0.5)' : '' }">{{item}}</text>
				</view>
				
			</view>
		</view>
		<view class="Loan-list">
			<liveListVue :list='LiveIcons' :width="'70'" :height="'70'" @index='GetIndex'></liveListVue>
		</view>
		<view class="Loan-datali">
			<titleVue :LFontSize="'35'">
				<template #left>
					我的贷款合同
				</template>
			</titleVue>
			<z-tabs :list="Ztabs"   @change="LoanTab" :tabs-style='{"width":"100%"}' active-color='#98313f' inactive-color='#636363' bar-width="320" bar-height="5"></z-tabs>
		</view>
		<LoanMYLoanVue v-if='tabIdex === 0'></LoanMYLoanVue>
		<LoanSettleVue  v-if='tabIdex === 1'></LoanSettleVue>
	</view>
</template>

<script>
	import occupyVue from '../../components/occupy.vue';
	import backtaberVue from '../../components/backtaber.vue';
	import liveListVue from '../../components/live-list.vue';
	import titleVue from '../../components/titleVue.vue';
	import LoanMYLoanVue from '../../components/Loan-MYLoan.vue';
	import LoanSettleVue from '../../components/LoanSettle.vue';
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
				balance:['申请进度','我的待办'],
				LiveIcons:[
					{name:'提前还款',images:'../../static/loan-icon-1.png'},
					{name:'智享还',images:'../../static/loan-icon-2.png'},
					{name:'贷款结清证明',images:'../../static/loan-icon-3.png'},
					{name:'贷款明细打印',images:'../../static/loan-icon-4.png'},
					{name:'还款计划',images:'../../static/loan-icon-5.png'},
				],
				Ztabs:['未结清','已结清'],
				eye:true,
				tabIdex:0,
			};
		},
		components:{
			occupyVue,
			backtaberVue,
			liveListVue,
			titleVue,
			LoanMYLoanVue,
			LoanSettleVue
		},
		methods:{
			IsEye(){
				this.eye = !this.eye 
			},
			LoanTab(index){
				this.tabIdex = index
			},
			ClickGo(index){
				index === 0 ? uni.navigateTo({
					url:'/pages/QueryResults/QueryResults'
				}):''
				index === 1 ? uni.navigateTo({
					url:'/pages/ToDo/ToDo'
				}):''
			},
			GetIndex(index){
				console.log(index);
				index === 0 ? uni.navigateTo({
					url:'/pages/EarlyRepayment/EarlyRepayment'
				}):''
				index === 2 ? uni.navigateTo({
					url:'/pages/Settlement/Settlement'
				}):''
				index === 3 ? uni.navigateTo({
					url:'/pages/PrintHistory/PrintHistory'
				}):''
				index === 4 ? uni.navigateTo({
					url:'/pages/RepaymentPlan/RepaymentPlan'
				}):''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Loan{
		width: 100vw;
		height: 100vh;
		background-color: #f6f7f9;
		.Loan-balance{
			width: 100%;
			height: 350rpx;
			background: url('@/static/loan-bg.png');
			background-size:100% 100%;
			margin-top: 20rpx;
			.balance-money{
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				margin-left: 40rpx;
				line-height: 80rpx;
				.balance-money-text{
					width: 100%;
					margin-top: 20rpx;
					display: flex;
					align-items: center;
					font-size: 32rpx;
					color: rgba(255, 255, 255, 0.6);
					image{
						margin: 10rpx;
						width: 45rpx;
						height: 45rpx;
					}
				}
				span{
					font-size: 60rpx;
					color: #ffffff;
				}
			}
			.balance-list{
				width: 100%;
				margin-top:40rpx;
				background-color: rgba(255, 255, 255, 0.2);
				color: #ffffff;
				display: flex;
				justify-content: space-evenly;
				view{
					padding: 20rpx;
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					text{
						width: 100%;
						text-align: center;
					}
				}
			}
		}
		.Loan-list{
			margin: 0 auto;
			margin-top: -55rpx;
			background-color: #ffffff;
			padding: 0 40rpx;
			border-radius: 50rpx 50rpx 0 0;
			padding-top: 30rpx;
		}
		.Loan-datali{
			padding-top: 50rpx;
			background-color: #ffffff;
		}
	
	}
</style>
