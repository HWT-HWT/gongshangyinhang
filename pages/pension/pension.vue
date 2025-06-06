<template>
	<view class="pension">
		<loanTitleVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' Color="#000" name='贷款' :Scollor='TopTitle'></loanTitleVue>
		<view class="pension-bg"></view>
		<view class="pension-account">
			<titleVue>
				<template #left>
						个人养老金资金账户
				</template>
			</titleVue>
			<view class="pension-account-text">
				<view class="text" v-for="(item,index) in pensionAccount" :key="index"> <image :src="`../../static/pension-icon-${index+1}.png`" mode=""></image> {{item}} </view>
			</view>
			<view class="pension-account-btn">
				点击开立/查看账户
			</view>
		</view>
		<swiperBannerVue :swiperImage="swiperImage"></swiperBannerVue>
		<view class="pension-selected">
			<titleVue>
				<template #left>	
					优选产品
				</template>
			</titleVue>
			<scrollBtnVue :list='scrollList'></scrollBtnVue>
			<investTextBoxVue :list='TextBox'></investTextBoxVue>
			<investTextBoxVue :list='TextBoxS'></investTextBoxVue>
			<view class="pension-btn">
				查看更多
			</view>
		</view>
		<view class="pension-classroom">
			<titleVue>
				<template #left>
					养老课堂
				</template>
				<template #rigth>
					更多
				</template>
			</titleVue>
			
			<view class="classroom-list-box">
				<view class="classroom-left">
					<p>2023年个人养老金缴存可以办理退税了</p>
					<text>2024-03</text>
				</view>
				<image src="@/static/Ztaber-footer-1.png" mode=""></image>
			</view>
			<view class="classroom-list-box">
				<view class="classroom-left">
					<p>年度个人养老金税收优惠倒计时</p>
					<text>2024-03</text>
				</view>
				<image src="@/static/Ztaber-footer-2.png" mode=""></image>
			</view>
			<view class="classroom-list-box">
				<view class="classroom-left">
					<p>财富之上更有如意人生</p>
					<text>2024-03</text>
				</view>
				<image src="@/static/Ztaber-footer-3.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import occupyVue from '../../components/occupy.vue';
	import backtaberVue from '../../components/backtaber.vue';
	import titleVue from '../../components/titleVue.vue';
	import scrollBtnVue from '../../components/scroll-btn.vue';
	import investTextBoxVue from '../../components/invest-textBox.vue';
	import swiperBannerVue from '../../components/swiper-banner.vue';
	import loanTitleVue from '../../components/loan-Title.vue';
	export default {
		data() {
			return {
				title:false,
				TitleImage:"../../static/icon_go_left.png",
				rigthIcon:['../../static/titbar_serviceicon.png','../../static/titbar_serviceicon-1.png'],
				pensionAccount:['税收优惠','专款专用','养老优选产品'],
				scrollList:['存款','理财','基金','保险'],
				TextBox:{
					border:true,
					title:'个人养老金专属存款3年期',
					leftTop:'1.90%',
					leftBottom:'年利率最高可至',
					rigthTop:'个人养老金专属',
					rigthBottom:['3年','100.00元起存'],
				},
				TextBoxS:{
					title:'个人养老金专属存款5年期',
					leftTop:'1.95%',
					leftBottom:'年利率最高可至',
					rigthTop:'个人养老金专属',
					rigthBottom:['5年','100.00元起存'],
				},
				swiperImage:['../../static/ponsion-banner-1.png','../../static/ponsion-banner-2.png','../../static/ponsion-banner-3.png','../../static/ponsion-banner-4.png']
			};
		},
		created() {
			
		},
		components:{
			occupyVue,
			backtaberVue,
			titleVue,
			scrollBtnVue,
			investTextBoxVue,
			swiperBannerVue,
			loanTitleVue
		},
		onPageScroll(scroll) {
			scroll.scrollTop > 50 ? this.title = true : this.title = false
		}
	}
</script>

<style lang="scss" scoped>
	.pension{
		width: 100vw;
		background: url('@/static/pension-bg.png');
		background-size: 100% 100%;
		padding-bottom: 50rpx;
		.pension-title{
			width: 100%;
			background-color: #fff;
			color: #555;
			position: fixed;
			top: 0;
			padding-bottom: 20rpx;
			z-index: 999;
		}
		.pension-bg{
			width: 90%;
			height: 240rpx;
			background:url('../../static/pension-bg-1.png')no-repeat;
			background-size: 100%;
			margin: 0 auto;
			margin-top: 20rpx;
		}
		.pension-account{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			border-radius: 20rpx;
			margin-top: -10rpx;
			padding-bottom: 20rpx;
			.pension-account-text{
				width: 92%;
				display: flex;
				align-items: center;
				margin: 0 auto;
				.text{
					display: flex;
					align-items: center;
					color: #666;
					font-size: 22rpx;
					image{
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
			.pension-account-btn{
				width: 80%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #ce0000;
				color: #fff;
				margin-top: 20rpx;
				border-radius: 50rpx;
				font-size: 30rpx;
				padding: 10rpx 0;
				font-weight: bold;
			}
		}
		.pension-selected{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			margin-top: 20rpx;
			border-radius: 20rpx;
			.pension-btn{
				width: 90%;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 20rpx;
				font-size: 28rpx;
				color: blueviolet;
				margin: 0 auto;
			}
		}
		.pension-classroom{
			width: 90%;
			margin: 0 auto;
			border-radius: 20rpx;
			background-color: #fff;
			margin-top: 20rpx;
			.classroom-list-box{
				width: 90%;
				margin: 0 auto;
				display: flex;
				padding-bottom: 20rpx;
				.classroom-left{
					flex: 1;
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					p{
						width: 100%;
						font-size: 28rpx;
					}
					text{
						font-size: 22rpx;
						color: #888;
					}
				}
				image{
					width: 200rpx;
					height: 120rpx;
				}
			}
		}
	}
</style>
