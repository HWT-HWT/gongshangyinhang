<template>
	<view class="user">
		<occupy></occupy>
		<view class="user-Navtitle" :style="{'opacity':search === 0 ?  1 : 0}" >
			<view class="Navtitle-Wz">
				<image src="@/static/location_mine_black.png" mode=""></image>
				<text>佛山</text>
			</view>
			<view class="Navtitle-icon">
				<image src="@/static/set_mine_black.png" mode=""></image>
				<image src="@/static/msg_mine_black.png" mode=""></image>
				<image src="@/static/more_mine_black.png" mode=""></image>
			</view>
		</view>
		<view class="user-hideTitle" :style="{'opacity':search}">
			<occupy></occupy>
			<view class="user-Navtitle">
				<view class="Navtitle-Wz">
					<image src="@/static/location_mine_black.png" mode=""></image>
					<text>佛山</text>
				</view>
				<view class="Navtitle-icon">
					<image src="@/static/set_mine_black.png" mode="" @click="close(token)"></image>
					<image src="@/static/msg_mine_black.png" mode=""></image>
					<image src="@/static/more_mine_black.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<NotLoginVue v-if="!token"></NotLoginVue>
		<LogonVue v-else></LogonVue>
		
		<view class="user-swiper">
			<liveListVue :list='LiveIcons'></liveListVue>
		</view>
		<view class="user-safe">
			<titleVueVue LFontSize="34" RFontSize="30">
				<template #left>
					<p>
						安全中心
						<image src="@/static/user-safe.png" mode=""></image>
						<text>实时保护中</text>
					</p>
				</template>
				<template #rigth>
					更多
				</template>
			</titleVueVue>
			
			<view class="safe-box">
				<image src="@/static/user-safe-bg.png" mode=""></image>
				<liveListVue :list='safeIcon' :Maxtransform="1.2"></liveListVue>
			</view>
		</view>
	</view>
</template>

<script>
	import occupy from '../../components/occupy.vue'
	import searcTitleVue from '../../components/searc-title.vue'
	import titleVueVue from '../../components/titleVue.vue';
	import liveListVue from '../../components/live-list.vue';
	import NotLoginVue from '../../components/NotLogin.vue';
	import LogonVue from '../../components/Logon.vue';
	export default {
		data() {
			return {
				search:0,
				wealthIconsT:['云保管','办理进度','用印信息验证','涉外收入申报','电子发票申请'],
				LiveIcons:[
					{name:'月度账单',images:'../../static/user-list-2.png'},
					{name:'订单',images:'../../static/user-list-6.png'},
					{name:'成长嘉年华',images:'../../static/user-list-9.png'},
					{name:'投诉咨询',images:'../../static/user-list-7.png'},
					{name:'更多',images:'../../static/wealth-list-10.png'},
				],
				safeIcon:[
					{name:'登录管理',images:'../../static/user-safe-1.png'},
					{name:'安全介质管理',images:'../../static/user-safe-2.png'},
					{name:'支付限额',images:'../../static/user-safe-3.png'},
					{name:'账户安全锁',images:'../../static/user-safe-2.png'},
				],
				token:null,
			}
		},
		methods: {
			checkLogin(){
				this.token = uni.getStorageSync('account')
			},
			close(token){
				if(token){
					uni.removeStorageSync('account')
					this.token = null;
					uni.showToast({
						title:'退出登录成功',
						icon:'none'
					})
				}
			}
		},
		components:{
			occupy,
			searcTitleVue,
			titleVueVue,
			liveListVue,
			NotLoginVue,
			LogonVue
		},
		onPageScroll(Top) {
			this.search =  Top.scrollTop / 100
		},
		onShow(){
			this.checkLogin();
		}
	}
</script>

<style lang="scss" scoped>
	.user{
		width: 100vw;
		// height: 100vh;
		background: url('@/static/ic_mine_top_bg.webp') no-repeat;
		background-size: 100%;
		background-color: #fff;
		overflow: hidden;
		.user-Navtitle{
			width: 100%;
			margin: 0 auto;
			// background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.Navtitle-Wz{
				display: flex;
				align-items: center;
				image{
					width: 90rpx;
					height: 90rpx;
				}
				text{
					font-size: 30rpx;
					margin-left: -10rpx;
				}
			}
			.Navtitle-icon{
				display: flex;
				align-items: center;
				image{
					width: 90rpx;
					height: 90rpx;
				}
			}
		}
		.user-hideTitle{
			width: 100%;
			background-color: #fff;
			position: fixed;
			top: 0;
			z-index: 999;
			.user-Navtitle{
				width: 100%;
				margin: 0 auto;
				// background-color: #fff;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.Navtitle-Wz{
					display: flex;
					align-items: center;
					image{
						width: 90rpx;
						height: 90rpx;
					}
					text{
						font-size: 30rpx;
						margin-left: -10rpx;
					}
				}
				.Navtitle-icon{
					display: flex;
					align-items: center;
					image{
						width: 90rpx;
						height: 90rpx;
					}
				}
			}
		}
		
		.user-swiper{
			width: 90%;
			margin: 0 auto;
			background-color: #fff;
			border-radius: 20rpx;
			margin-top: 20rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
		}
		.user-safe{
			width: 90%;
			margin: 0 auto;
			margin-top: 30rpx;
			border-radius: 20rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
			p{
				display: flex;
				align-items: center;
				image{
					width: 45rpx;
					height: 40rpx;
					margin-left: 10rpx;
					margin-top: 5rpx;
				}
				text{
					font-weight: normal;
					font-size: 25rpx;
					margin-left: 5rpx;
					color: #619c8b;
				}
			}
			.safe-box{
				width: 100%;
				margin: 0 auto;
				padding-bottom: 20rpx;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				image{
					width: 90%;
					height: 150rpx;
					margin-bottom: 10rpx;
					margin: 0 auto;
				}
			}
		}
	}
</style>
