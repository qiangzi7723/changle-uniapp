<template>
	<view class="profile">
		<view class="banner"><text class="title">个人中心</text></view>
		<view class="avatar-conatiner">
			<view class="avatar"><view class="avatar-text">默认头像</view></view>
			<text class="avatar-des">点击授权用户信息</text>
		</view>
		<view class="container">
			<view class="main-container">
				<block v-for="item in mainList">
					<view class="main-item">
						<view class="main-icon" :style="{ backgroundImage: `url(${item.img})` }"></view>
						<text>{{ item.text }}</text>
					</view>
				</block>
			</view>
			<view class="tab-container">
				<block v-for="item in tabList">
					<view class="tab-item" @click="jumpTo(item)">
						<view class="tab-left">
							<view class="tab-icon" :style="{ backgroundImage: `url(${item.img})` }"></view>
							<text>{{ item.text }}</text>
						</view>
						<view class="tab-entry" :style="{ backgroundImage: `url(../../static/asset/img/profile/进入图标@2x.png)` }"></view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			mainList: [
				{
					img: "'../../static/asset/img/profile/icon-我的消息@2x.png'",
					text: '我的消息'
				},
				{
					img: "'../../static/asset/img/profile/icon-账号设置@2x.png'",
					text: '账号设置'
				}
			],
			tabList: [
				{
					img: "'../../static/asset/img/profile/icon-常见问题@2x.png'",
					text: '常见问题',
					url: '/pages/qaList/qaList'
				},
				{
					img: "'../../static/asset/img/profile/icon-意见反馈@2x.png'",
					text: '意见反馈'
				},
				{
					img: "'../../static/asset/img/profile/icon-关于我们@2x.png'",
					text: '关于我们'
				}
			]
		};
	},
	methods:{
		jumpTo(item){
			if(item.url){
				uni.navigateTo({
					url: item.url
				})
			}
		}
	}
};
</script>

<style lang="scss">
// 这样子才能正常引入
@import '@/style/extend.scss';

.profile {
	background-color: #f0e9e9;
	overflow: hidden;
	height: 100vh;

	// 顶部红色背景色样式
	.banner {
		width: 750rpx;
		height: 560rpx;
		@include bg-reset(contain);
		background-image: url(../../static/asset/img/profile/BG@2x.png);
		text-align: center;
		position: absolute;
		top: 0;
		z-index: 0;

		.title {
			font-size: 36rpx;
			color: #fff;
			margin-top: 60rpx;
			display: block;
		}
	}

	// 头像样式
	.avatar-conatiner {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 156rpx;
		font-weight: 200;
		text-align: center;
		position: relative;
		z-index: 1;

		.avatar {
			width: 160rpx;
			height: 160rpx;
			background-color: #6f757c;
			border-radius: 50%;
			border: 2rpx solid #ffffff;
			display: flex;
			justify-content: center;
			align-items: center;

			.avatar-text {
				color: #ffffff;
				width: 80rpx;
			}
		}

		.avatar-des {
			margin-top: 22rpx;
			color: #ffffff;
			font-size: 32rpx;
		}
	}

	// 公共内容区域
	.container {
		width: 670rpx;
		height: 100vh;
		margin: 0 auto;
		margin-top: 30rpx;
	}

	// 我的消息 | 账号设置
	.main-container {
		background-color: #ffffff;
		height: 200rpx;
		position: relative;
		z-index: 1;

		box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.06);
		border-radius: 20rpx;

		padding: 0 108rpx;

		display: flex;
		justify-content: space-between;

		.main-item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.main-icon {
				@include bg-reset(contain);
				width: 60rpx;
				height: 60rpx;
				margin-bottom: 12rpx;
			}
		}
	}

	// 底部列表
	.tab-container {
		background-color: #ffffff;
		box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.06);
		border-radius: 20rpx;
		padding: 0 32rpx;
		margin-top: 20rpx;

		.tab-item {
			height: 112rpx;
			display: flex;
			border-bottom: 1px solid;
			border-color: rgba(0, 0, 0, 0.1);
			align-items: center;
			justify-content: space-between;
		}

		.tab-item:last-of-type {
			border: none;
		}

		.tab-left {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.tab-icon {
			width: 48rpx;
			height: 48rpx;
			@include bg-reset(contain);

			margin-right: 30rpx;
		}

		.tab-entry {
			width: 16rpx;
			height: 26rpx;
			@include bg-reset(contain);
		}
	}
}
</style>
