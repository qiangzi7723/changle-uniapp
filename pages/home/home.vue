<template>
	<view class="home">
		<view class="banner">
			<swiper class="swiper-container">
				<block v-for="item in imgUrls" key={{item}}>
					<swiper-item><view class="swiper-item" :style="{ backgroundImage: `url(${item})` }"></view></swiper-item>
				</block>
			</swiper>
		</view>
		<view class="app-container">
			<view class="content">
				<!-- 4个入口 -->
				<view class="entry">
					<view v-for="item,index in entryList" class="entry-item" key={{index}}>
						<view :style="{ backgroundImage: `url(${item.img})` }" class="entry-icon"></view>
						<text class="entry-text">{{ item.text }}</text>
					</view>
				</view>
				<!-- 公告消息 -->
				<view class="msg">
					<view class="msg-title"></view>
					<text class="msg-text">12月第四周扫码排行榜公布啦，小道消息</text>
					<text class="msg-btn">消息</text>
				</view>
				<!-- 热门活动 -->
				<view class="hot">
					<view class="hot-title">
						<view class="hot-icon"></view>
						<text class="hot-text">热门活动</text>
					</view>
					<view class="hot-list">
						<view class="hot-banner" v-for="item,index in hotList" key={{index}}>
							<view class="hot-img" :style="{ backgroundImage: `url(${item.img})` }"></view>
							<view class="hot-description">
								<text class="hot-des-content">{{ item.text }}</text>
								<view class="hot-des-entry">参与活动</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 首页轮播图数据
			imgUrls: ['"../../static/asset/img/屏幕快照 2020-05-19 17.32.04.png"'],
			entryList: [
				{ text: '长乐签', img: '"../../static/asset/img/home/icon-长乐签@2x.png"' },
				{ text: '草莓园', img: '"../../static/asset/img/home/icon-草莓园@2x.png"' },
				{ text: '有惊喜', img: '"../../static/asset/img/home/icon-有惊喜@2x.png"' },
				{ text: '了解我', img: '"../../static/asset/img/home/icon-了解我@2x.png"' }
			],
			// 热门活动数据
			hotList: [
				{
					text: '开辟你的专属草莓园 收获幸运礼物！',
					img: '"../../static/asset/img/屏幕快照 2020-05-19 17.32.04.png"'
				},
				{
					text: '开辟你的专属草莓园 收获幸运礼物！',
					img: '"../../static/asset/img/屏幕快照 2020-05-19 17.32.04.png"'
				}
			]
		};
	},
	async onLoad() {
		console.log('home页面加载中');
		const res = await this.$request.get('/home/msg/list')
	}
};
</script>

<style lang="scss">
.home {
	// 顶部轮播样式
	.banner {
		width: 750rpx;
		height: 420rpx;

		.swiper-item {
			width: 750rpx;
			height: 420rpx;

			background-size: cover;
			background-position: center;
		}

		.swiper-container {
			width: 750rpx;
			height: 420rpx;
		}
	}

	// 内容区域容器
	.app-container {
		background-color: #f0e9e9;
		width: 100vw;
		border-radius: 40rpx 40rpx 0 0;

		position: absolute;
		margin-top: -40rpx;
		z-index: 2;
		
	}

	.content {
		width: 670rpx;
		margin: 0 auto;
		margin-bottom: 40rpx;
	}

	/* 入口样式 */
	.entry {
		margin-top: 52rpx;
		width: 100%;
		display: flex;
		box-sizing: border-box;
	}

	.entry-item {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.entry-icon {
		background-size: contain;
		width: 100rpx;
		height: 100rpx;
	}

	.entry-text {
		margin-top: 12rpx;
	}

	/* 公告栏目 */
	.msg {
		width: 670rpx;
		height: 80rpx;
		background-color: #fff;
		border-radius: 80rpx;
		margin-top: 56rpx;

		display: flex;
	}

	.msg-title {
		width: 164rpx;
		/* TODO 需要探讨图片资源如何存储 */
		background-image: url('http://192.168.31.161:8000/asset/img/home/title@2x.png');
		background-size: contain;
		background-position: center;
	}

	.msg-text {
		font-size: 26rpx;
		line-height: 80rpx;
		width: 404rpx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.msg-btn {
		width: 68rpx;
		text-align: center;
		line-height: 40rpx;
		height: 40rpx;
		border: 2rpx solid #4a90e2;
		color: #4a90e2;
		border-radius: 6rpx;
		font-size: 24rpx;
		margin-top: 20rpx;
	}

	/* 热门活动 */
	.hot {
		margin-top: 60rpx;
	}

	.hot-title {
		display: flex;
	}

	.hot-icon {
		width: 60rpx;
		height: 40rpx;

		background-image: url('http://192.168.31.161:8000/asset/img/home/icon-热门活动@2x.png');
		background-size: contain;
		background-position: center;

		margin-right: 4rpx;
		margin-top: 4rpx;
	}

	.hot-text {
		font-weight: bold;
		color: #181818;
		font-size: 34rpx;
	}

	.hot-list {
		margin-top: 12rpx;
	}

	.hot-banner {
		background-color: #fff;
		border-radius: 20rpx;
		overflow: hidden;
		margin-bottom: 40rpx;
	}

	.hot-img {
		width: 670rpx;
		height: 318rpx;
		background-size: contain;
		background-position: center;
	}

	.hot-description {
		height: 142rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		font-weight: 500;
		padding: 0 24rpx;
	}

	.hot-des-content {
		color: #333333;
		width: 260rpx;
	}

	.hot-des-entry {
		background-color: #ca171d;
		color: #fff;
		height: 60rpx;
		width: 168rpx;
		border-radius: 60rpx;
		text-align: center;
		line-height: 60rpx;
		font-weight: 400;
	}
}
</style>
