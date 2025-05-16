<template>
	<view class="home">
		
		<view class="search-top">
			<occupy></occupy>
			<searcTitleVue>
				<template #LeftIcon>
					<view class="search-Left-icon">
						<image src="@/static/location_mine_black.png" mode=""></image>
						<text v-if='!token' @click="GoLogin">登录</text>
						<text v-else @click="quitLogin">退出</text>
					</view>
				</template>
				<template #input>
					<view class="search-input">
						<view>
							<image src="@/static/standard_favorite_searchview_magnifier.png" mode=""></image>
							<text>微信绑定</text>
						</view>
						<image src="@/static/standard_favorite_searchview_microphone.png" mode=""></image>
					</view>
				</template>
				<template #RightIcon>
					<view class="search-right-icon">
						<image src="@/static/epass_home_service_icon.webp" mode=""></image>
						<image src="@/static/msg_mine_black.png" mode=""></image>
						<image src="@/static/more_mine_black.png" mode=""></image>
					</view>
				</template>
			</searcTitleVue>
		</view>
		
		<view class="search" :style='{"opacity": search , "background" : `rgba(255, 255, 255, ${search})`}' v-if="search === 0 ? false:true">
			<occupy></occupy>
			<searcTitleVue>
				<template #LeftIcon>
					<view class="search-Left-icon">
						<image src="@/static/location_mine_black.png" mode=""></image>
						佛山
					</view>
				</template>
				<template #input>
					<view class="search-input">
						<view>
							<image src="@/static/standard_favorite_searchview_magnifier.png" mode=""></image>
							<text>微信绑定</text>
						</view>
						<image src="@/static/standard_favorite_searchview_microphone.png" mode=""></image>
					</view>
				</template>
				<template #RightIcon>
					<view class="search-right-icon">
						<image src="@/static/epass_home_service_icon.webp" mode=""></image>
						<image src="@/static/msg_mine_black.png" mode=""></image>
						<image src="@/static/more_mine_black.png" mode=""></image>
					</view>
				</template>
			</searcTitleVue>
			<z-tabs :list="Ztabs" :current="listTitleImage" :tabs-style='{"width":"400rpx"}' active-color='#000' @change='change'></z-tabs>
		</view>
		
		<view class="home-list-title">
			<z-tabs :list="Ztabs" :current="listTitleImage" :tabs-style='{"borderRadius" : "20rpx"}' active-color='#000' @change='change'></z-tabs>
			<image src="@/static/iv_tab_setting.png" mode=""></image>
		</view>
		
		<indexCommonVue v-if="listTitleImage === 0"></indexCommonVue>
		<youthVue v-if="listTitleImage === 1"></youthVue>
		<indexPrivateBankingVue v-if="listTitleImage === 2"></indexPrivateBankingVue>
		<indexMessageVue v-if="listTitleImage === 3"></indexMessageVue>
	
		
		<view class="home-footer">
			<view class="btn">
				发现更多服务
			</view>
			<text>打造个性化首页</text>
		</view>
		<view class="home-tisi">
			<view class="tisi-box">
				<image src="../../static/bottom_tousu_icon.webp" mode=""></image>
				<text>客户投诉指南</text>
			</view>
			<image src="@/static/nine_search_right_arrow.png" mode=""></image>
		</view>
		<view class="home-footer-image-box">
			<image src="@/static/bottom_shilao_new.png" mode=""></image>
			<image src="@/static/bottom_cunkuan_new.png" mode=""></image>
			<image src="@/static/bottom_beian_new.png" mode=""></image>
		</view>
		<view class="image-footer"></view>
		<view class="text-footer">
			<p>ICP备案号:京ICP证030247号-60A</p>
			<p>备案系统网址<text> https://beian.miit.gov.cn/</text></p>
		</view>
		<!-- <indexCommonVue></indexCommonVue> -->
	</view>
</template>

<script>
	import Earth from '../../components/Earth.vue'
	import occupy from '../../components/occupy.vue'
	import titleVue from '../../components/titleVue.vue'
	import searcTitleVue from '../../components/searc-title.vue'
	import indexCommonVue from '../../components/index-common.vue'
	import indexPrivateBankingVue from '../../components/index-PrivateBanking.vue'
	import indexMessageVue from '../../components/index-message.vue'
	import youthVue from '../../components/youth.vue'
	export default {
		data() {
			return {
				listTitleImage:0,
				Ztabs:['常用','消息','私银','广东'],
				search:0,
				token:null,
			}
		},
		onLoad() {

		},
		methods: {
			TitleImage(index){
				this.listTitleImage = index
				console.log(index);
			},
			GoLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			change(index){
				console.log(index);
				this.listTitleImage = index
			},
			quitLogin(bool){
				if(bool){
					uni.removeStorageSync('account')
					this.token = null
					uni.showToast({
						title:'退出成功',
						icon:'none'
					})
				}
				
			},
		},
		components:{
			Earth,
			occupy,
			titleVue,
			searcTitleVue,
			indexCommonVue,
			indexPrivateBankingVue,
			youthVue,
			indexMessageVue
		},
		onPageScroll(Top) {
			this.search =  Top.scrollTop / 100
		},
		onShow() {
			 uni.getStorageSync('account') ? this.token = true : this.token=false
		}
	}
</script>

<style scoped lang="scss">
	.home{
		width: 100vw;
		padding-bottom: 40rpx;
		background: url('../../static/favorite_component_center_bg.png')no-repeat;
		background-size: 100%;
		background-color: #f5f2f5;
		.search-top{
			.search-Left-icon{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				image{
					margin-right: -15rpx;
					width: 80rpx;
					height: 80rpx;
				}
			}
			.search-input{
				width: 100%;
				padding: 0 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 25rpx;
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
					width: 90rpx;
					height: 90rpx;
				}
			}
		}
		.search{
			width: 100%;
			position: fixed;
			top: 0;
			z-index: 999;
			.search-Left-icon{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				image{
					margin-right: -15rpx;
					width: 80rpx;
					height: 80rpx;
				}
			}
			.search-input{
				width: 100%;
				padding: 0 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 25rpx;
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
					width: 90rpx;
					height: 90rpx;
				}
			}
		}
		.home-title{
			width: 100%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			z-index: 999;
			text{
				font-size: 30rpx;
				color: #000;
				margin-left: 30rpx;
				margin-bottom: 5rpx;
				font-weight: bold;
			}
			.home-title-icon{
				display: flex;
				align-items: center;
				image{
					width: 95rpx;
					height: 95rpx;
				}
			}
		}
		.home-search{
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			background: linear-gradient(to bottom, #fecfd2, #fde5e8);
			border-radius: 50rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding:15rpx 0;
			image{
				width: 40rpx;
				height: 40rpx;
				margin: 0 15rpx;
			}
			text{
				font-size: 28rpx;
				flex: 1;
				color: #666;
			}
		}
		.home-list-title{
			width: 90%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #fdfdfd;
			border-radius: 20rpx 20rpx 0 0;
			image{
				margin: 0 20rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}
		
		.home-footer{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			margin-top: 20rpx;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			border-radius:20rpx ;
			.btn{
				border: 1px solid;
				padding:15rpx 40rpx;
				border-radius: 50rpx;
				color: royalblue;
				margin-top: 30rpx;
				font-size: 35rpx;
				font-weight: bold;
			}
			text{
				padding: 20rpx;
				width: 100%;
				font-size: 25rpx;
				color: #333;
				text-align: center;
				margin-bottom: 10rpx;
			}
		}
		.home-tisi{
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			background: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-radius: 20rpx;
			.tisi-box{
				padding: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				font-weight: bold;
				image{
					width: 60rpx;
					height: 60rpx;
				}
				text{
					margin-left: 10rpx;
				}
			}
			image{
				width: 30rpx;
				height: 30rpx;  
				margin-right: 20rpx;
			}
		}
		.home-footer-image-box{
			width: 90%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 20rpx;
			image{
				width: 200rpx;
				height: 90rpx;
			}
		}
		.image-footer{
			width: 90%;
			height: 90rpx;
			background: #fff;
			margin: 0 auto;
			margin-top: 20rpx;
			background:url('@/static/bottom_ipv6_new.png')no-repeat;
			background-size: 100%;
		}
		.text-footer{
			width: 90%;
			margin: 0 auto;
			text-align: center;
			font-size: 20rpx;
			line-height: 20px;
			color: #333;
			text{
				color: dodgerblue;
				margin-left: 5rpx;
			}
		}
	}
</style>
