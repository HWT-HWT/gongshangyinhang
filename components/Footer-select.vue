<template>
	<view class="ContractDetails-footer">
		<view class="footer-btn" :class="{'select' : index === 0}" v-for="(item,index) in list" :key="index" @click="btn(index)">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"Footer-select",
		data() {
			return {
				
			};
		},
		props:{
			list:{
				type:Array
			}
		},
		methods:{
			btn(index){
				this.$emit('change',index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ContractDetails-footer{
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: #fff;
		margin-top: 20rpx;
		display: flex;
		padding: 40rpx 0;
		.footer-btn{
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 10rpx;
			padding: 25rpx 0;
			font-size: 35rpx;
			color: #ce0000;
			font-weight: bold;
			border: 1px solid;
		}
		.select{
			background-color: #ce0000;
			color: #fff;
			border: 1px solid #ce0000;
		}
	}
</style>