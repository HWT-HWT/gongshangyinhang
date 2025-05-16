<template>
	<view class="RepaymentPlan">
		<view class="PromissoryNote-NavTitle">
			<backtaberVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' :RightMax='1'>
				<text style="color: #677781;">还款计划</text>
			</backtaberVue>
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
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
				RepaymentPlanList:[
					[
						{name:'贷款金额',text:'800,000.00'},
						{name:'贷款发放日',text:'2024-02-05'},
						{name:'还款方式 ',text:'按期还息一次还本'},
						{name:'还款卡(账)号 ',text:'6222****8073'},
					],
					
					[
						{name:'期数',text:'14'},
						{name:'还款日期',text:'2025-04-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					
					[
						{name:'期数',text:'15'},
						{name:'还款日期',text:'2025-05-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					
					[
						{name:'期数',text:'16'},
						{name:'还款日期',text:'2025-06-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					
					[
						{name:'期数',text:'17'},
						{name:'还款日期',text:'2025-07-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					
					[
						{name:'期数',text:'18'},
						{name:'还款日期',text:'2025-08-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					
					[
						{name:'期数',text:'19'},
						{name:'还款日期',text:'2025-09-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					
					[
						{name:'期数',text:'20'},
						{name:'还款日期',text:'2025-10-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					
					[
						{name:'期数',text:'21'},
						{name:'还款日期',text:'2025-11-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					
					[
						{name:'期数',text:'22'},
						{name:'还款日期',text:'2025-12-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					
					[
						{name:'期数',text:'23'},
						{name:'还款日期',text:'2026-01-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'24'},
						{name:'还款日期',text:'2026-02-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'25'},
						{name:'还款日期',text:'2026-03-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'26'},
						{name:'还款日期',text:'2026-04-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'27'},
						{name:'还款日期',text:'2026-05-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'28'},
						{name:'还款日期',text:'2026-06-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'29'},
						{name:'还款日期',text:'2026-07-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'30'},
						{name:'还款日期',text:'2026-08-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'31'},
						{name:'还款日期',text:'2026-09-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'32'},
						{name:'还款日期',text:'2026-10-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'33'},
						{name:'还款日期',text:'2026-11-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'34'},
						{name:'还款日期',text:'2026-12-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'35'},
						{name:'还款日期',text:'2027-01-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
					[
						{name:'期数',text:'36'},
						{name:'还款日期',text:'2027-02-10'},
						{name:'应还本金 ',text:'0.00元'},
						{name:'应还利息 ',text:'2,300元'},
						{name:'贴息金额',text:'0.00元'},
						{name:'本息合计',text:'2,300元'},
					],
				]
				
				
				
				
			};
		},
		components:{
			occupyVue,
			backtaberVue,
			ListViewBoxVue
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
