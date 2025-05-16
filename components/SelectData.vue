<template>
	<view class="SelectData">
		<view class="uni-padding-wrap">
			<view class="uni-title" @click="toggle('bottom')" >{{year}}-{{month < 10 ? '0' + month : month}}-{{day < 10 ? '0' + day : day}}</view>
		</view>
		
		<uni-popup ref="popup" background-color="#fff" @change="change">
			
			<ContainerTitleVue>
				<template>
					筛选
				</template>
			</ContainerTitleVue>
			
			<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<picker-view v-if="visible" :indicator-style="indicatorStyle" :value="valueData" @change="bindChange" class="picker-view">
				    <picker-view-column>
				        <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
				    </picker-view-column>
				    <picker-view-column>
				        <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
				    </picker-view-column>
				    <picker-view-column>
				        <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
				    </picker-view-column>
				</picker-view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import ContainerTitleVue from './ContainerTitle.vue'
	export default {
		data: function () {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			for (let i = 1990; i <= date.getFullYear(); i++) {
				years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			return {
				years,
				year,
				months,
				month,
				days,
				day,
				valueData: [9999, month - 1, day - 1],
				visible: true,
				indicatorStyle: `height: 50px;`,
				type: 'center',
				msgType: 'success',
				messageText: '这是一条成功提示',
				value: ''
			}
		},
		methods: {
			bindChange: function (e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},
			// 检测时间选择器状态 打开为 true 关闭 false
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			
			// 打开弹出层
			toggle(type) {
				this.type = type
				this.$refs.popup.open(type)
			},
			// 关闭弹出层
			Right(index){
				this.$refs.popup.close()
				index === 1 ?  	this.$emit('Date',{year:this.year,month:this.month,day:this.day},this.$props.StartedEnd) : console.log('点击了取消');
			},
			
		},
		props:{
				StartedEnd:{
					type:Number
				},
		},
		components:{
			ContainerTitleVue
		},
	}
</script>

<style lang="scss" scoped>
	.SelectData{
		.uni-title{
			 color: #2764d4;
		}
	}
	
	.picker-view {
		width: 750rpx;
		height: 600rpx;
		margin-top: 20rpx;
	}
	.item {
		line-height: 100rpx;
		text-align: center;
	}
	.popup-Top-Btn{
		padding: 20rpx;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		span{
			color: dodgerblue;
		}
	}
</style>