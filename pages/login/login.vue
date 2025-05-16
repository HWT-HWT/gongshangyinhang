<template>
	<view class="login">
		<occupy></occupy>
		<view class="exit">
			<image src="@/static/epass_home_close_icon.webp" mode="" @click="back"></image>
		</view>
		<view class="login-title">
			<p>你好</p>
			<p>欢迎来到中国工商银行</p>
		</view>
		<view class="login-input">
			<view class="input-box">
				<image src="@/static/login-icon.png" mode=""></image>
				<input type="tel" placeholder="请输入手机号"  placeholder-style="color:#888; font-size:38rpx" v-model="Phone" maxlength="13"/>
			</view>
		</view>
		<view class="login-checkbox">
			<label>
				<checkbox @click="checkboxBtn()" iconColor="#ce0000" activeBackgroundColor='#fff' borderColor='#ce0000' activeBorderColor='#ce0000'  :checked="Ischeckbox"/>
			</label>
			<text>我已同意<text>《电子银行个人客户服务协议》《工银融e行个人信息保护政策》</text></text>
		</view>
		<view class="login-botton" @click="initLogin">
			注册/登录
		</view>
		<view class="login-botton-text">
			帮助
		</view>
		<view class="login-wechat">
			<image src="@/static/login_manage_authorization_wx.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import occupy from '../../components/occupy.vue';
	import {gologin} from '@/components/login.js'
	export default {
		data() {
			return {
				Ischeckbox:false,
				Phone:''
			};
		},
		methods:{
			checkboxBtn(){
				this.Ischeckbox = !this.Ischeckbox
			},
			back(){
				uni.navigateBack()
			},
			initLogin(){
				let cleanedString = this.Phone.replace(/\s+/g, '')
				let Phone = Number(cleanedString);
				if(Phone === 13702430269 && this.Ischeckbox){
					uni.setStorageSync('account',Phone);
					uni.showToast({
						title:'登录成功',
						icon:'none'
					})
					
					setTimeout(()=>{
						uni.navigateBack()
					},500)
				}else{
					uni.showToast({
						title:'账户密码不正确',
						icon:'none'
					})
				}
				
			}
		},
		components:{
			occupy
		},
		watch:{
			Phone(newValue){
				if(newValue.length === 3){
					this.Phone = newValue + ' '
				}
				if(newValue.length === 8){
					this.Phone = newValue + ' '
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login{
		width: 100vw;
		height: 100vh;
		background: url('@/static/login_first_bg.webp');
		background-size: 100% 100%;
		.exit{
			width: 95%;
			margin: 0 auto;
			image{
				width: 100rpx;
				height: 100rpx;
			}
		}
		.login-title{
			width: 90%;
			margin: 0 auto;
			font-size: 50rpx;
			padding-top: 130rpx;
		}
		.login-input{
			width: 90%;
			margin: 0 auto;
			padding-bottom: 20rpx;
			border-bottom: 1rpx solid #e6e6e6;
			padding-top: 120rpx;
			.input-box{
				width: 100%;
				display: flex;
				align-items: center;
				image{
					width: 60rpx;
					height: 60rpx;
				}
				input{
					margin-left: 10rpx;
					color: #666;
					font-size: 40rpx;
				}
			}
		}
		.login-checkbox{
			width: 90%;
			margin: 0 auto;
			margin-top: 40rpx;
			font-size: 28rpx;
			display: flex;
			flex-wrap: nowrap;
			justify-content: center;
			checkbox{
				transform: scale(0.6);
				
			}
			text{
				width: 100%;
				// letter-spacing: 1rpx;
				line-height: 45rpx;
				margin-left: 10rpx;
				text{
					color: #2d84ec;
					
				}
			}
		}
		.login-botton{
			width: 90%;
			margin: 0 auto;
			background-color: #ce0000;
			text-align: center;
			margin-top: 40rpx;
			color: #fff;
			padding: 20rpx 0;
			border-radius: 10rpx;
			font-size: 40rpx
		}
		.login-botton-text{
			width: 90%;
			margin: 0 auto;
			text-align: right;
			margin-top: 40rpx;
			font-size: 30rpx;
			color: #2458c8;
		}
		.login-wechat{
			position: absolute;
			bottom: 3%;
			left: 45%;
			image{
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
</style>
