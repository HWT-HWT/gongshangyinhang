<template>
	<view class="ContractDetails">
		<occupyVue></occupyVue>
		<view class="ContractDetails-NavTitle">
			<backtaberVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' :RightMax='1'>
				<text style="color: #677781;">合同详情</text>
			</backtaberVue>
		</view>
		<view class="ContractDetails-TitleBox">
			<view class="TitleBox-topText">
				<view class="text">个人房产抵押消费与经营组合贷款</view>
				<view class="text rigth">正常</view>
			</view>
			<view class="TitleBox-content">
				<p>800,000.00元</p>
				<span>贷款余额 <image src="@/static/qrcode_qr_new_i.png" mode=""></image> </span>
			</view>
			<view class="TitleBox-footer">
				<view class="footer-box" v-for="(item,index) in ContractDetails" :key="index">
					<p>{{item.money}}</p>
					<span class="footer-box-text">{{item.text}} <image v-if="item.icon" :src="item.icon" mode=""></image> </span>
				</view>
			</view>
		</view>
		<view class="ContractDetails-List">
			<view class="List-box" v-for="(item,index) in ContractDetailsList" :key="index" @click="GoPage(index)">
				<image :src="`../../static/cont-${index+1}.png`" mode=""></image>
				<p>{{item}}</p>
			</view>
		</view>
		<view class="ContractDetails-ListView">
			<ListViewBoxVue v-for="(item,index) in ContractDetailsListView" :key="index" 
			:BorderBottom="index === ContractDetailsListView.length-2 ? false : true"
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
		<view class="ContractDetails-datali-title">
			<titleVue :icon="true" :RColor="'#4169af'">
				<template #left>
					借据信息
				</template>
				<template #rigth>
					<text>
						更多
					</text>
				</template>
			</titleVue>
		</view>
		<view class="ContractDetails-datali" @click="GoPromissoryNote">
			<view class="datali-text">
				<titleVue :LFontW='false' :LFontSize="'25'" :RFontSize="'25'" :RColor="'#7cc0a4'" :Lcolor="'#888'">
					<template #left>
						借据编号 1
					</template>
					<template #rigth>
						正常
					</template>
				</titleVue>
				<titleVue :LFontW='false' :LFontSize="'25'" :RFontSize="'25'" :RColor="'#888'" :Lcolor="'#888'" :RFontW='true'>
					<template #left>
						借据金额 <text style="font-size: 34rpx; color: #000; font-weight: bold; margin-left: 10rpx;">800,000.00元</text>
					</template>
					<template #rigth>
						2024.02.05-2029.02.05
					</template>
				</titleVue>
			</view>
			<view class="datali-icon">
				<image src="@/static/nine_search_right_arrow.png" mode=""></image>
			</view>
		</view>
		<view class="ContractDetails-occupy"></view>
		<FooterSelectVue :list='FooterBtnList' @change="ClickGo"></FooterSelectVue>
	</view>
</template>

<script>
	import occupyVue from '../../components/occupy.vue';
	import backtaberVue from '../../components/backtaber.vue';
	import ListViewBoxVue from '../../components/ListView-box.vue';
	import titleVue from '../../components/titleVue.vue';
	import FooterSelectVue from '../../components/Footer-select.vue';
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				rigthIcon:['../../static/base_im_icon_service.png','../../static/base_im_icon_more.png'],
				ContractDetails:[
					{money:'0.00元',text:'当前可提款金额',icon:'../../static/qrcode_qr_new_i.png'},
					{money:'800,000.00元',text:'贷款金额'}
				],
				ContractDetailsList:['服务行信息','调整最高还款额','变更还款账号','变更还款日'],
				ContractDetailsListView:[
					{name:'贷款合同',text:'20132000000000250121',copy:true},
					{name:'是否循环贷款',text:'是'},
					{name:'提款截止日期 ',text:'2034-01-29',icon:true},
					{name:'可用尾款金额 ',text:'0.00元',icon:true},
					{name:'贷款用途',text:'经营'},
					{name:'当前累计发放贷款',text:'800,000.00元'},
					{name:'金额'}
				],
				FooterBtnList:['还款','贷款明细打印','贷款结清证明']
			};
		},
		components:{
			occupyVue,
			backtaberVue,
			ListViewBoxVue,
			titleVue,
			FooterSelectVue
		},
		methods:{
			GoPromissoryNote(){
				uni.navigateTo({
					url:'/pages/PromissoryNote/PromissoryNote'
				})
			},
			GoPage(index){
				index === 1 ? uni.navigateTo({
					url:'/pages/AdjustSelection/AdjustSelection'
				}) : ''
			},
			ClickGo(index){
				index === 0 ? uni.navigateTo({
					url:'/pages/repayment/repayment'
				}) : ''
				index === 1 ? uni.navigateTo({
					url:'/pages/PrintHistory/PrintHistory'
				}) : ''
				index === 2 ? uni.navigateTo({
					url:'/pages/Settlement/Settlement'
				}) : ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ContractDetails{
		width: 100vw;
		background-color: #f7f7f7;
		.ContractDetails-NavTitle{
			width: 100%;
			background-color: #f7f7f7;
			position: fixed;
			top: 0;
			border-bottom: 1px solid #d5d5d5;
			padding-bottom: 20rpx;
			z-index: 999;
		}
		.ContractDetails-TitleBox{
			width: 100%;
			background: #cf1f1f;
			margin-top: 90rpx;
			.TitleBox-topText{
				padding: 20rpx;
				margin: 0 auto;
				display: flex;
				.text{
					width: 50%;
					font-size: 30rpx;
					color: #fff;
				}
				.rigth{
					text-align: right;
				}
			}
			.TitleBox-content{
				width: 100%;
				color: #fff;
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
					margin-top: 10rpx;
					display: flex;
					align-items: center;
					image{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
			.TitleBox-footer{
				width: 100%;
				background-color: rgba(255, 255, 255, 0.2);
				padding: 20rpx 0;
				margin-top: 20rpx;
				display: flex;
				.footer-box{
					width: 50%;
					color: #fff;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					p{
						text-align: center;
						width: 100%;
						font-size: 34rpx;
					}
					span{
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 25rpx;
						height: 50rpx;
						image{
							width: 50rpx;
							height: 50rpx;
						}
					}
				}
			}
		}
		.ContractDetails-List{
			display: flex;
			background-color: #fff;
			width: 98%;
			margin: 0 auto;
			margin-top: 20rpx;
			.List-box{
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				font-size: 25rpx;
				padding: 30rpx 0;
				image{
					width:70rpx;
					height: 70rpx;
				}
				p{
					text-align: center;
					width: 100%;
					margin-top: 10rpx;
				}
			}
		}
		.ContractDetails-ListView{
			margin-top: 20rpx;
			background-color: #fff;
		}
		.ContractDetails-datali{
			margin: 0 auto;
			background-color: #fff;
			display: flex;
			align-items: center;
			.datali-text{
				flex: 1;
			}
			.datali-icon{
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
		.ContractDetails-occupy{
			height: 200rpx;
		}
	}
</style>
