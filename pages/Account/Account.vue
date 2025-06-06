<template>
	<view class="MyAccount">
		<occupyVue></occupyVue>
		<view class="AccountDatali-NavTitle">
			<backtaberVue :TitleImage='TitleImage' :RightMax='1' :isText='true'>
				<text style="color: #677781;">我的账户</text>
				<template #text>
					更多
				</template>
			</backtaberVue>
		</view>
		
		<view class="MyAccount-card" v-for="(item,index) in 1" :key="index" @click="GoAccountDatali(index+1)" :style="{margin:index === 1 ? '0 auto' :''}" >
			<cardBoxVue :index="index+1" ></cardBoxVue>
		</view>
		
		
		<view class="MyAccount-Show">
			<image src="@/static/card_shade.webp" mode=""></image>
		</view>
		
		<view class="MyAccount-ListView">
			<accountListVue :leftIcon='"../../static/account-icon-1.png"' :rightIcon='"../../static/nine_search_right_arrow.png"'>境外账户</accountListVue>
			<accountListVue :leftIcon='"../../static/account-icon-2.png"' :rightIcon='"../../static/nine_search_right_arrow.png"'>待添加卡</accountListVue>
			<view class="MyAccount-AddCard">
				<view class="AddCard-text">
					+ 添加本人其他银行卡
				</view>
				<view class="AddCard-footer-text">添加家庭账户</view>
			</view>
			<accountListVue :leftIcon='"../../static/account-icon-3.png"' :rightIcon='"../../static/nine_search_right_arrow.png"'>数字人民币</accountListVue>
			<accountListVue :leftIcon='"../../static/account-icon-4.png"' :rightIcon='"../../static/nine_search_right_arrow.png"'>投资理财账户</accountListVue>
		</view>
		
		<view class="MyAccount-Zooz">
			<titleVue LFontSize="32" :LFontW="false" RColor="#666">
				<template #left>
					账户服务
				</template>
				<template #rigth>
					更多
				</template>
			</titleVue>
			<view class="card-icon-text">
				<view class="icon-text" v-for="(item,index) in cardLoan" :key="index">
					<image :src="`../../static/card-loan-${index+1}.png`" mode=""></image>
					<view class="text">
						<p>{{item.title}}</p>
						<span>{{item.text}}</span>
					</view>
				</view>
			</view>
		</view>
	
		<view class="MyAccount-footer">
			<image src="@/static/account-footer-bg-1.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import cardBoxVue from '../../components/card-Box.vue';
	import backtaberVue from '../../components/backtaber.vue';
	import accountListVue from '../../components/account-List.vue';
	import titleVue from '../../components/titleVue.vue';
	import BoxImageVue from '../../components/Box-image.vue';
	import occupyVue from '../../components/occupy.vue';
	export default {
		data() {
			return {
				TitleImage:"../../static/icon_go_left-1.png",
				cardLoan:[
					{title:'账户解控',text:'一键查询 便捷解控'},
					{title:'明细打印',text:'发送至邮箱自助打印'},
					{title:'资信证明',text:'开立和查询进度'},
					{title:'工银信使',text:'动账信息及时通知'}
				],
			};
		},
		components:{
			backtaberVue,
			accountListVue,
			titleVue,
			BoxImageVue,
			occupyVue,
			cardBoxVue
		},
		methods:{
			GoAccountDatali(index){
				uni.navigateTo({
					url:`/pages/AccountDatali/AccountDatali?id=${index+1}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.MyAccount{
		width: 100vw;
		background-color: #f8f8f8;
		.AccountDatali-NavTitle{
			width: 100%;
			background-color: #f7f7f7;
			position: fixed;
			top: 0;
			border-bottom: 1px solid #d5d5d5;
			padding-bottom: 20rpx;
			z-index: 999;
		}
		
		.MyAccount-card{
			margin-top: 100rpx;
		}
		
		.MyAccount-Show{
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: -50rpx;
			image{
				width: 100%;
				height: 120rpx;
			}
		}
		.MyAccount-ListView{
			margin-top: -100rpx;
			z-index: 999;
			position: relative;
			top: 0;
			.MyAccount-AddCard{
				width: 92%;
				background-color: #fff;
				margin: 0 auto;
				padding: 30rpx 0;
				text-align: center;
				.AddCard-text{
					width:80%;
					margin: 0 auto;
					background-color:#fef4f3 ;
					border: 1px solid red;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 20rpx 30rpx;
					font-size: 40rpx;
					color: red;
					border-radius: 10rpx;
				}
				.AddCard-footer-text{
					font-size: 30rpx;	
					margin-top: 40rpx;
					padding: 0 0 20rpx 0;
					color: #476faa;
				}
			}
		}
		.MyAccount-Zooz{
			width: 95%;
			margin: 0 auto;
			background-color: #f8f8f8;
			margin-top: 20rpx;
			border-radius: 20rpx;
			padding-bottom: 10rpx;
			.card-icon-text{
				width: 100%;
				margin: 0 auto;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-evenly;
				.icon-text{
					width: 48%;
					display: flex;
					align-items: center;
					padding: 20rpx 0;
					border-radius: 5rpx;
					background-color: #fff;
					margin-top: 10rpx;
					image{
						width: 60rpx;
						height: 60rpx;
						margin-left: 20rpx;
					}
					.text{
						padding-left: 10rpx;
						p{
							font-size: 28rpx;
							font-weight: bold;
						}
						span{
							font-size: 23rpx;
							color: #555;
							
						}
					}
				}
			}
		}
		.MyAccount-footer{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 20rpx;
			padding-bottom: 50rpx;
			image{
				width: 320rpx;
				height: 200rpx;
			}
		}
	}
</style>

						<span>{{item.text}}</span>
					</view>
				</view>
			</view>
		</view>
	
