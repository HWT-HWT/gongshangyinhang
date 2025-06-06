<template>
	<view class="AccountDatali">
		<occupyVue></occupyVue>
		<view class="AccountDatali-NavTitle">
			<backtaberVue :TitleImage='TitleImage' :rigthIcon='rigthIcon' :RightMax='1' 
			:isText='false'>
				<text style="color: #677781;">账户详情</text>
			</backtaberVue>
		</view>
		<view class="AccountDatali-Card">
			<cardBoxVue :index="CardIndex" :Account='true'></cardBoxVue>
		</view>
		<view class="AccountDatali-Money">
			<text>人民币余额</text>
			<span>{{CardIndex === 1 ? '1,210.67':'3,510.67'}}</span>
		</view>
		<view class="AccountDatali-List">
			<liveListVue :list='LiveIcons' width="80" height="80" BoxWodth="25%" :Border="true" 
			@index='GoPage'>
			</liveListVue>
		</view>
		<view class="AccountDatali-ListBox">
			<ListViewBoxVue v-for="(item,index) in ContractDetailsListView" :key="index"
				:BorderBottom="index === ContractDetailsListView.length-1 ? false : true" 
				:copy='item.copy'
				:icon='item.icon' :RightImage="item.Rimage" :Rcolor='"#000"' :TBPadding='"40rpx"'>
				<template #name>
					{{item.name}}
				</template>
				<template #right>
					{{item.text}}
				</template>
			</ListViewBoxVue>
		</view>

		<view class="AccountDatali-Tow">
			<view class="AccountDatali-box">
				<text>其他</text>
				<image src="@/static/nine_search_right_arrow.png" mode=""></image>
			</view>
			<view class="AccountDatali-box">
				<text>删除账户</text>
				<image src="@/static/nine_search_right_arrow.png" mode=""></image>
			</view>
		</view>

		<view class="AccountDatali-footer">
			<image src="@/static/account-footer-bg-1.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import cardBoxVue from '../../components/card-Box.vue';
	import backtaberVue from '../../components/backtaber.vue';
	import liveListVue from '../../components/live-list.vue';
	import ListViewBoxVue from '../../components/ListView-box.vue';
	import occupyVue from '../../components/occupy.vue';
	export default {
		data() {
			return {
				TitleImage: "../../static/icon_go_left-1.png",
				rigthIcon: [
						'../../static/base_im_icon_service.png', 
						'../../static/base_im_icon_more.png'
					],
				LiveIcons: [{
						name: '查询明细',
						images: '../../static/accountDatali-icon-1.png'
					},
					{
						name: '复制卡号',
						images: '../../static/accountDatali-icon-2.png'
					},
					{
						name: '账户挂失',
						images: '../../static/accountDatali-icon-3.png'
					},
					{
						name: '开户网点',
						images: '../../static/accountDatali-icon-4.png'
					},
					{
						name: '密码管理',
						images: '../../static/accountDatali-icon-5.png'
					},
					{
						name: '工银信使',
						images: '../../static/accountDatali-icon-6.png'
					},
					{
						name: '投资理财',
						images: '../../static/accountDatali-icon-7.png'
					},
					{
						name: '转账汇款',
						images: '../../static/accountDatali-icon-8.png'
					},
				],
				ContractDetailsListView: [{
						name: '基本账户',
						text: '3602*****8810',
						Rimage: true
					},
					{
						name: '启用日期',
						text: '2024年12月13日'
					},
					{
						name: '到期日期 ',
						text: '2034年10月',
						icon: true
					},
					{
						name: '设置别名 ',
						text: '此卡别名',
						Rimage: true
					},
					{
						name: '账户互转',
						Rimage: true
					},
					{
						name: '当面收款',
						Rimage: true
					},
					{
						name: '绑手机号',
						Rimage: true
					},
				],
				CardIndex: 1
			};
		},
		components: {
			backtaberVue,
			liveListVue,
			ListViewBoxVue,
			occupyVue,
			cardBoxVue
		},
		methods: {
			GoPage(index) {
				index === 0 ? uni.navigateTo({
					url: `/pages/QueryDetails/QueryDetails?id=${this.CardIndex}`
				}) : ''
			}
		},
		onLoad(url) {
			this.CardIndex = +url.id
			console.log(this.CardIndex);
		}
	}
</script>

<style lang="scss" scoped>
	.AccountDatali {
		width: 100vw;
		height: 100vh;
		background-color: #f8f8f8;

		.AccountDatali-NavTitle {
			width: 100%;
			background-color: #f7f7f7;
			position: fixed;
			top: 0;
			border-bottom: 1px solid #d5d5d5;
			padding-bottom: 20rpx;
			z-index: 999;
		}

		.AccountDatali-Card {
			margin-top: 100rpx;
		}

		.AccountDatali-Money {
			margin: 0 auto;
			margin-top: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 30rpx 40rpx;
			background-color: #fff;
			border-radius: 10rpx;

			text {
				font-size: 30rpx;
			}

			span {
				font-size: 32rpx;
			}

		}

		.AccountDatali-List {
			width: 100%;
			margin: 0 auto;
			background-color: #fff;
			margin-top: 20rpx;
		}

		.AccountDatali-ListBox {
			width: 100%;
			background-color: #fff;
			margin-top: 20rpx;
		}

		.AccountDatali-Tow {
			width: 100%;
			margin: 0 auto;
			font-size: 30rpx;

			.AccountDatali-box {
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-top: 20rpx solid #f8f8f8;
				padding: 30rpx 40rpx;

				image {
					width: 30rpx;
					height: 30rpx;
				}
			}
		}

		.AccountDatali-footer {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 20rpx;
			padding-bottom: 50rpx;
			border-top: 20rpx solid #f8f8f8;

			image {
				margin-top: 50rpx;
				width: 320rpx;
				height: 200rpx;
			}
		}
	}
</style>