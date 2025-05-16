<template>
	<view class="Earth">
		<image :src="image" mode=""></image>
	</view>
</template>

<script>
	export default {
		name:"Earth",
		data() {
			return {
				index:0,
				image:'../../static/ninth_ball00.png',
				EarthID:null
			};
		},
		created() {
			this.Earth()
		},
		methods:{
			Earth(){
				this.EarthID = setInterval(()=>{
					if(this.index >= 46){
						this.index = 0
					}
					this.index < 10 ? this.image = `../../static/ninth_ball0${this.index}.png`: this.image = `../../static/ninth_ball${this.index}.png`
					this.index++
				},50)
			}
		},
		beforeDestroy() {
			// 在组件销毁前清除定时器
			if (this.EarthID) {
				clearInterval(this.EarthID);
				this.EarthID = null; // 清除引用
			}
		},
	}
</script>

<style lang="scss">
	.Earth{
		position: absolute;
		margin: 0 auto;
		top: 0;
		left: 40%;
		display: flex;
		justify-content: center;
		z-index: 1;
		image{
			width: 140rpx;
			height: 180rpx;
		}
	}
</style>