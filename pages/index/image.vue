<template>
	<view class="image-display-container">
		<!-- 返回按钮 -->
		<view class="back-button" @click="handleBack">
			<text class="back-text">返回</text>
		</view>
		
		<!-- 图片显示区域 -->
		<view class="image-container">
			<!-- 加载状态 -->
			
			
			<!-- 图片显示 -->
			<image 
				:src="imageSrc" 
				class="display-image"
				mode="aspectFill"
				:style="{ width: `${screenWidth}px`, height: `${screenHeight}px` }"
				@load="onImageLoad"
				@error="onImageError"
			/>
		</view>
		
		<!-- 操作按钮区域 -->
		<view class="action-buttons">
			<view class="action-button" @click="handleRetake">
				<text class="button-text">重新拍照</text>
			</view>
			<view class="action-button primary" @click="handleConfirm">
				<text class="button-text">确认使用</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const imageSrc = ref('');
const screenWidth = ref(0);
const screenHeight = ref(0);
const isLoading = ref(true);
const hasError = ref(false);

onMounted(() => {
	// 获取屏幕尺寸
	const systemInfo = uni.getSystemInfoSync();
	screenWidth.value = systemInfo.windowWidth;	
	screenHeight.value = systemInfo.windowHeight - uni.upx2px(594);
	
	console.log('图片显示页面加载');
	console.log('Store状态:', uni.$store.state);
	
	// 从store获取图片数据
	const selfieImgBase64 = uni.$store.state.selfieImgBase64;
	console.log('获取到的图片数据长度:', selfieImgBase64 ? selfieImgBase64.length : 0);
	
	if (selfieImgBase64 && selfieImgBase64.length > 0) {
		imageSrc.value = selfieImgBase64;
		console.log('设置图片源成功');
	} else {
		hasError.value = true;
		console.error('未找到图片数据');
		uni.showToast({
			title: '未找到图片数据',
			icon: 'error'
		});
		setTimeout(() => {
			uni.navigateBack();
		}, 1500);
	}
});

// 图片加载成功
const onImageLoad = (e) => {
	console.log('图片加载成功', e);
	isLoading.value = false;
	hasError.value = false;
};

// 图片加载失败
const onImageError = (e) => {
	console.log('图片加载失败', e);
	isLoading.value = false;
	hasError.value = true;
	uni.showToast({
		title: '图片加载失败',
		icon: 'error'
	});
};

// 返回上一页
const handleBack = () => {
	uni.navigateBack();
};

// 重新拍照
const handleRetake = () => {
	uni.navigateBack();
};

// 确认使用图片
const handleConfirm = () => {
	uni.showToast({
		title: '图片已确认',
		icon: 'success'
	});
	// 这里可以添加确认后的逻辑，比如跳转到其他页面
	// uni.navigateTo({
	// 	url: '/pages/index/next-page'
	// });
};
</script>

<style lang="scss" scoped>
.image-display-container {
	width: 100vw;
	height: 100vh;
	background-color: #000;
	position: relative;
	display: flex;
	flex-direction: column;
}

.back-button {
	position: absolute;
	top: 60rpx;
	left: 40rpx;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 50rpx;
	padding: 20rpx 30rpx;
	
	.back-text {
		color: #fff;
		font-size: 28rpx;
		font-weight: 500;
	}
}

.image-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	
	.loading-container,
	.error-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	
	.loading-text,
	.error-text {
		color: #fff;
		font-size: 32rpx;
		text-align: center;
	}
	
	.error-text {
		color: #ff6b6b;
	}
	
	.display-image {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
	}
}

.action-buttons {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
	padding: 60rpx 40rpx 80rpx 40rpx;
	display: flex;
	justify-content: space-between;
	gap: 40rpx;
	z-index: 10;
}

.action-button {
	flex: 1;
	height: 88rpx;
	border-radius: 44rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.2);
	border: 2rpx solid rgba(255, 255, 255, 0.3);
	
	&.primary {
		background-color: #007AFF;
		border-color: #007AFF;
	}
	
	.button-text {
		color: #fff;
		font-size: 32rpx;
		font-weight: 600;
	}
}
</style> 