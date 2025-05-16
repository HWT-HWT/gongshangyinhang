<template>
	<view class="PromissoryNote">
		<occupyVue></occupyVue>
		<view class="PromissoryNote-NavTitle">
			<backtaberVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' :RightMax='1'>
				<text style="color: #677781;">借据详情</text>
			</backtaberVue>
		</view>
		<view class="PromissoryNote-TitleBox">
			<view class="TitleBox-topText">
				<view class="text">借据编号 1 </view>
				<view class="text rigth">正常</view>
			</view>
			<view class="TitleBox-content">
				<p>800,000.00元</p>
				<span>借据金额</span>
			</view>
		</view>
		<view class="PromissoryNote-List">
			<view class="List-box" v-for="(item,index) in PromissoryList" :key="index">
				<p>{{item.name}}</p>
				<span>{{item.text}}</span>
			</view>
		</view>
		<view class="PromissoryNote-ListView">
			<ListViewBoxVue v-for="(item,index) in ContractDetailsListView" :key="index"
			:BorderBottom="index === ContractDetailsListView.length-1 ? false : true"
			:copy='item.copy'
			:icon='item.icon'
			>
				<template #name>
					{{item.name}}
				</template>
				<template #right>
					{{item.text}}
				</template>
			</ListViewBoxVue>
		</view>
		<view class="PromissoryNote-occupy"></view>
		<FooterSelectVue :list='FooterBtnList' @change='GoSelect'></FooterSelectVue>
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog :type="msgType" cancelText="取消" confirmText="我知道了" title="重要提示" content="本还款计划是按照借款合同约定的定价基准的当前值计算的，请您关注重定价日并及时重新查看还款计划表。" @confirm="dialogConfirm"
				@close="dialogClose"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import occupyVue from '../../components/occupy.vue';
	import backtaberVue from '../../components/backtaber.vue';
	import ListViewBoxVue from '../../components/ListView-box.vue';
	import FooterSelectVue from '../../components/Footer-select.vue';
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
				ContractDetails:[
					{money:'0.00元',text:'当前可提款金额',icon:'../../static/qrcode_qr_new_i.png'},
					{money:'2.520,000.00元',text:'贷款金额'}
				],
				PromissoryList:[
					{name:'60个月',text:'借据期限'},
					{name:'3.45%',text:'年化利率(单利)'},
					{name:'800,000.00元',text:'借据余额'},
				],
				ContractDetailsListView:[
					{name:'借据起止日',text:'2024-02-05至2029-02-05'},
					{name:'还款卡(账)号',text:'6222****8073'},
					{name:'还款方式 ',text:'按期还息一次还本'},
					{name:'利率变动方式 ',text:'LPR减15.00个基点'},
					{name:'当前积欠本息',text:'0.00元'},
					{name:'下期应还本息合计',text:'2,300元'},
					{name:'还款日',text:'每月10日'},
					{name:'重定价周期',text:'12个月'},
					{name:'下一重定价日',text:'2026年2月5日'}
				],
				FooterBtnList:['电子借据','还款计划','还款明细'],
				msgType: 'success',
				type: 'centent',
			};
		},
		components:{
			occupyVue,
			backtaberVue,
			ListViewBoxVue,
			FooterSelectVue
		},
		methods:{
			GoSelect(index){
				if(index === 1){
					this.msgType = this.type
					this.$refs.alertDialog.open()
				}
				index === 2 ? uni.navigateTo({url:'/pages/RepaymentDetails/RepaymentDetails'}) : ''
			},
			// dialogToggle(type) {
				
			// },
			dialogClose() {
				console.log('点击关闭')
			},
			dialogConfirm(){
				uni.navigateTo({
					url:'/pages/RepaymentPlan/RepaymentPlan'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.PromissoryNote{
		width: 100vw;
		background-color: #f7f7f7;
		.PromissoryNote-NavTitle{
			width: 100%;
			background-color: #f7f7f7;
			position: fixed;
			top: 0;
			border-bottom: 1px solid #d5d5d5;
			padding-bottom: 20rpx;
		}
		.PromissoryNote-TitleBox{
			width: 100%;
			background: #fff;
			margin-top: 90rpx;
			padding-bottom: 20rpx;
			.TitleBox-topText{
				padding: 20rpx;
				margin: 0 auto;
				display: flex;
				.text{
					width: 50%;
					font-size: 30rpx;
					color: #999;
				}
				.rigth{
					text-align: right;
					color: #6eb89a;
				}
			}
			.TitleBox-content{
				width: 100%;
				color: #fe7b75;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				margin-top: 20rpx;
				p{
					text-align: center;
					width: 100%;
					font-size: 60rpx;
				}
				span{
					font-size: 30rpx;
					margin-top: 20rpx;
					display: flex;
					align-items: center;
					color: #000;
					font-weight: bold;
					image{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
		}
		.PromissoryNote-List{
			width: 98%;
			margin: 0 auto;
			background-color: #fff;
			margin: 0 auto;
			margin-top: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			.List-box{
				width: 33%;
				padding: 20rpx;
				text-align: center;
				line-height: 50rpx;
				p{
					font-size: 34rpx;
				}
				span{
					font-size: 28rpx;
				}
					
			}
		}
		.PromissoryNote-ListView{
			margin-top: 20rpx;
			background-color: #fff;
		}
		.PromissoryNote-occupy{
			height: 175rpx;
		}
	}
</style>
