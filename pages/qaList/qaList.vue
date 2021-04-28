<template>
	<view class="qa">
		<view class="container">
			<block v-for="item,index in list">
				<text class="question">{{index+1}}.{{item.q}}</text>
				<text class="answer">{{item.a}}</text>
			</block>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		async initData(){
			
		},
		async onLoad() {
			console.log('qa页面加载中');
			const res = await this.$request.get("/qa/list");
			this.list = res.data.list;
		}
	}
</script>

<style lang="scss">
.qa{
	background-color: #f0e9e9;
	height: 100vh;
	overflow: hidden;
	
	.container{
		background-color: #FFFFFF;
		width: 670rpx;
		border-radius: 12rpx;
		padding: 32rpx;
		margin: 0 auto;
		margin-top: 40rpx;
		box-sizing: border-box;
		
		.question,.answer{
			display: block;
			margin: 12rpx 0;
		}
		
		.question{
			color: #333333;
			font-size: 28rpx;
			font-weight: bold;
		}
		
		.answer{
			font-size: 24rpx;
			margin-bottom: 32rpx;
		}
	}
}
</style>
