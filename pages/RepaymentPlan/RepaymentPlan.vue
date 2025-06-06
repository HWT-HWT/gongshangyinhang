<template>
	<view class="RepaymentPlan">
		<view class="PromissoryNote-NavTitle">
			<loanTitleVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' Color="#607483" name='还款计划' :Scollor='TopTitle'></loanTitleVue>
		</view>
		<view class="RepaymentPlan-ListView" v-for="(item,index) in RepaymentPlanList" :key="index" >
			<ListViewBoxVue 
			v-for="(sum,num) in item"
			:key="num"
			:BorderBottom="false"
			TBPadding="20rpx"
			>
				<template #name>
					{{sum.name}}
				</template>
				<template #right>
					{{sum.text}}
				</template>
			</ListViewBoxVue>
		</view>
	</view>
</template>

<script>
	import backtaberVue from '../../components/backtaber.vue';
	import occupyVue from '../../components/occupy.vue';
	import ListViewBoxVue from '../../components/ListView-box.vue';
	import loanTitleVue from '../../components/loan-Title.vue'
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
				RepaymentPlanList:[
					[
						{name:'贷款金额',text:'1,900,000.00'},
						{name:'贷款发放日',text:'2024-02-05'},
						{name:'还款方式 ',text:'按期还息一次还本'},
						{name:'还款卡(账)号 ',text:'6222****8073'},
					],
					
					[
						{name:'期数',text:'4'},
						{name:'还款日期',text:'2025-06-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					
					[
						{name:'期数',text:'5'},
						{name:'还款日期',text:'2025-07-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					
					[
						{name:'期数',text:'6'},
						{name:'还款日期',text:'2025-08-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					
					[
						{name:'期数',text:'7'},
						{name:'还款日期',text:'2025-09-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					
					[
						{name:'期数',text:'8'},
						{name:'还款日期',text:'2025-10-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					
					[
						{name:'期数',text:'9'},
						{name:'还款日期',text:'2025-11-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					
					[
						{name:'期数',text:'10'},
						{name:'还款日期',text:'2025-12-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					
					[
						{name:'期数',text:'11'},
						{name:'还款日期',text:'2026-01-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					
					[
						{name:'期数',text:'12'},
						{name:'还款日期',text:'2026-02-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					
					[
						{name:'期数',text:'13'},
						{name:'还款日期',text:'2026-03-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'14'},
						{name:'还款日期',text:'2026-04-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'15'},
						{name:'还款日期',text:'2026-05-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'16'},
						{name:'还款日期',text:'2026-06-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'17'},
						{name:'还款日期',text:'2026-07-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'18'},
						{name:'还款日期',text:'2026-08-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'19'},
						{name:'还款日期',text:'2026-09-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'20'},
						{name:'还款日期',text:'2026-10-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'21'},
						{name:'还款日期',text:'2026-11-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'22'},
						{name:'还款日期',text:'2026-12-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'23'},
						{name:'还款日期',text:'2027-1-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'24'},
						{name:'还款日期',text:'2027-2-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'25'},
						{name:'还款日期',text:'2027-03-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'26'},
						{name:'还款日期',text:'2027-04-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
					[
						{name:'期数',text:'26'},
						{name:'还款日期',text:'2027-05-15'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'25,916.67元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'25,916.67元'},
					],
				],
				TopTitle:''
			};
		},
		components:{
			occupyVue,
			backtaberVue,
			ListViewBoxVue,
			loanTitleVue
		},
		onPageScroll(TopTitle) {
			this.TopTitle = TopTitle.scrollTop
		}
	}
</script>

<style lang="scss">
	.RepaymentPlan{
		width: 100vw;
		background-color: #f4f4f4;
		.PromissoryNote-NavTitle{
			background-color: #fff;
		}
		.RepaymentPlan-ListView{
			margin-top: 20rpx;
			background-color: #fff;
		}
	}
</style>
