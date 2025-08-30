<template>
	<view class="album-container">
		<!-- 顶部导航栏 -->
		<view class="nav-bar">
			<view class="back-btn" @click="handleBack">
				<text class="back-icon">‹</text>
			</view>
			<text class="nav-title">相册美颜</text>
			<view class="placeholder"></view>
		</view>

		<!-- 主要内容区域 -->
		<view class="main-content">
			<!-- 图片预览区域 -->
			<view class="image-preview" v-if="selectedImage">
				<image :src="beautifiedImage || selectedImage" class="preview-image" mode="aspectFit" />
				<view class="image-overlay" v-if="isProcessing">
					<view class="loading-spinner"></view>
					<text class="loading-text">美颜处理中...</text>
				</view>
				<!-- 美颜完成后的标签 -->
				<view class="beauty-complete" v-if="beautifiedImage && !isProcessing">
					<text class="complete-text">美颜完成</text>
				</view>
			</view>

			<!-- 默认提示区域 -->
			<view class="default-hint" v-else>
				<image src="/static/imgs/photoLibrary/p1.png" class="hint-icon" />
				<text class="hint-text">请选择一张图片进行美颜</text>
			</view>



			<!-- 操作按钮区域 -->
			<view class="action-buttons">
				<button class="select-btn" @click="selectImage" :disabled="isProcessing">
					<text class="btn-text">{{ isProcessing ? '处理中...' : '选择图片' }}</text>
				</button>
				<button class="save-btn" @click="saveImage" :disabled="!beautifiedImage || isProcessing">
					<text class="btn-text">保存图片</text>
				</button>
				<button class="reset-btn" @click="resetAll" :disabled="isProcessing">
					<text class="btn-text">重置</text>
				</button>
			</view>
		</view>
		
		<!-- 隐藏的canvas用于图片转换 -->
		<canvas canvas-id="beautyCanvas" style="position: absolute; left: -9999px; width: 300px; height: 300px;"></canvas>
	</view>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { initEngine, enableBeautyType, setBeautyParam, beautifyImage, destroyEngine } from '../../uni_modules/bsf-ali-queen'

// 响应式数据
const selectedImage = ref('')
const beautifiedImage = ref('')
const isProcessing = ref(false)

// 默认美颜参数
const defaultBeautyParams = [
	{ id: 1, value: 0.6 }, // 磨皮
	{ id: 2, value: 0.5 }, // 锐化
	{ id: 3, value: 0.4 }, // 美白
	{ id: 4, value: 0.7 }, // 去眼袋
	{ id: 5, value: 0.6 }, // 去法令纹
	{ id: 7, value: 0.5 }, // 漂白牙齿
	{ id: 9, value: 0.3 }, // 腮红
	{ id: 8, value: 0.4 }, // 口红
	{ id: 13, value: 0.5 }, // 亮眼
	{ id: 14, value: 0.3 }, // 红润
	{ id: 15, value: 0.6 }, // 祛皱纹
	{ id: 16, value: 0.5 }, // 祛暗沉
]

// 初始化美颜引擎
const initBeautyEngine = () => {
	try {
		initEngine({
			licenseKey: "vPbqtgx4UHuy4gJobc5640b9145fe4770820af1eac919c258",
			licenseFile: "AliVideoCert-com_byteee_uniappdemo-20250630094102.crt",
		})
		
		// 开启基础美颜功能
		enableBeautyType(0, true, 0) // 磨皮
		enableBeautyType(1, true, 0) // 高级美颜
		enableBeautyType(2, true, 0) // 美妆
		enableBeautyType(4, true, 0) // 美白
		
		console.log('美颜引擎初始化成功')
	} catch (error) {
		console.error('美颜引擎初始化失败:', error)
		uni.showToast({
			title: '美颜引擎初始化失败',
			icon: 'error'
		})
	}
}

// 选择图片并直接美颜
const selectImage = () => {
	uni.chooseImage({
		count: 1,
		sizeType: ['compressed'],
		sourceType: ['album'],
		success: (res) => {
			const imagePath = res.tempFilePaths[0]
			selectedImage.value = imagePath
			beautifiedImage.value = '' // 清空之前的美颜结果
			console.log('选择的图片路径:', imagePath)
			
			// 显示选择成功提示
			uni.showToast({
				title: '图片选择成功，开始美颜处理...',
				icon: 'success',
				duration: 1500
			})
			
			// 直接开始美颜处理
			setTimeout(() => {
				applyBeauty()
			}, 500)
		},
		fail: (err) => {
			console.error('选择图片失败:', err)
			uni.showToast({
				title: '选择图片失败',
				icon: 'error'
			})
		}
	})
}



// 应用美颜
const applyBeauty = async () => {
	if (!selectedImage.value) {
		uni.showToast({
			title: '请先选择图片',
			icon: 'none'
		})
		return
	}

	isProcessing.value = true
	
	try {
		// 设置默认美颜参数
		defaultBeautyParams.forEach(item => {
			setBeautyParam(item.id, item.value)
		})

		// 处理图片路径
		let imagePath = selectedImage.value
		if (imagePath.startsWith('file://')) {
			imagePath = imagePath.replace(/^file:\/+/, '')
		}

		// 执行美颜处理
		beautifyImage({
			path: imagePath,
			success: (result) => {
				console.log('美颜处理成功:', result)
				// 处理返回的数据格式
				let base64Data = ''
				if (typeof result === 'string') {
					base64Data = result
				} else if (result.base64) {
					base64Data = result.base64
				} else if (result.data) {
					base64Data = result.data
				} else {
					console.error('未知的返回数据格式:', result)
					uni.showToast({
						title: '美颜处理返回数据格式错误',
						icon: 'error'
					})
					isProcessing.value = false
					return
				}
				
				// 确保base64数据格式正确
				if (!base64Data.startsWith('data:')) {
					base64Data = `data:image/jpeg;base64,${base64Data}`
				}
				
				beautifiedImage.value = base64Data
				isProcessing.value = false
				
				uni.showToast({
					title: '美颜处理完成',
					icon: 'success'
				})
			},
			fail: (error) => {
				console.error('美颜处理失败:', error)
				isProcessing.value = false
				
				uni.showToast({
					title: '美颜处理失败',
					icon: 'error'
				})
			}
		})
	} catch (error) {
		console.error('美颜处理异常:', error)
		isProcessing.value = false
		
		uni.showToast({
			title: '美颜处理异常',
			icon: 'error'
		})
	}
}

// 保存图片
const saveImage = () => {
	if (!beautifiedImage.value) {
		uni.showToast({
			title: '没有可保存的图片',
			icon: 'none'
		})
		return
	}

	// 将base64转换为临时文件路径
	const base64Data = beautifiedImage.value.startsWith('data:') 
		? beautifiedImage.value 
		: `data:image/jpeg;base64,${beautifiedImage.value}`

	// 使用canvas转换base64为临时文件
	const canvas = uni.createCanvasContext('beautyCanvas')
	canvas.drawImage(base64Data, 0, 0, 300, 300)
	canvas.draw(false, () => {
		setTimeout(() => {
			uni.canvasToTempFilePath({
				canvasId: 'beautyCanvas',
				success: (res) => {
					uni.saveImageToPhotosAlbum({
						filePath: res.tempFilePath,
						success: () => {
							uni.showToast({
								title: '图片已保存到相册',
								icon: 'success'
							})
						},
						fail: (error) => {
							console.error('保存图片失败:', error)
							uni.showToast({
								title: '保存图片失败',
								icon: 'error'
							})
						}
					})
				},
				fail: (error) => {
					console.error('转换图片失败:', error)
					uni.showToast({
						title: '转换图片失败',
						icon: 'error'
					})
				}
			})
		}, 100) // 延迟100ms确保canvas绘制完成
	})
}

// 重置所有数据
const resetAll = () => {
	selectedImage.value = ''
	beautifiedImage.value = ''
	isProcessing.value = false
	
	uni.showToast({
		title: '已重置',
		icon: 'success'
	})
}

// 返回上一页
const handleBack = () => {
	uni.navigateBack({
		delta: 1
	})
}

// 页面加载时初始化
onMounted(() => {
	initBeautyEngine()
})

// 页面卸载时销毁引擎
onUnmounted(() => {
	console.log("onUnload")
	try {
		destroyEngine()
		console.log('美颜引擎已销毁')
	} catch (error) {
		console.error('销毁美颜引擎失败:', error)
	}
})
</script>

<style lang="scss" scoped>
.album-container {
	width: 100vw;
	height: 100vh;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	display: flex;
	flex-direction: column;
}

.nav-bar {
	height: 120rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40rpx;
	padding-top: 60rpx;
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(10px);

	.back-btn {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;

		.back-icon {
			font-size: 40rpx;
			color: #fff;
			font-weight: bold;
		}
	}

	.nav-title {
		font-size: 36rpx;
		color: #fff;
		font-weight: 600;
	}

	.placeholder {
		width: 80rpx;
	}
}

.main-content {
	flex: 1;
	padding: 40rpx;
	display: flex;
	flex-direction: column;
}

.image-preview {
	width: 100%;
	height: 600rpx;
	border-radius: 20rpx;
	overflow: hidden;
	background: #fff;
	margin-bottom: 40rpx;
	position: relative;

	.preview-image {
		width: 100%;
		height: 100%;
	}

	.image-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.loading-spinner {
			width: 80rpx;
			height: 80rpx;
			border: 4rpx solid rgba(255, 255, 255, 0.3);
			border-top: 4rpx solid #fff;
			border-radius: 50%;
			animation: spin 1s linear infinite;
		}

		.loading-text {
			color: #fff;
			font-size: 28rpx;
			margin-top: 20rpx;
		}
	}

	.beauty-complete {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		background: rgba(76, 175, 80, 0.9);
		padding: 10rpx 20rpx;
		border-radius: 20rpx;

		.complete-text {
			color: #fff;
			font-size: 24rpx;
			font-weight: 600;
		}
	}
}

.default-hint {
	width: 100%;
	height: 600rpx;
	border-radius: 20rpx;
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(10px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 40rpx;

	.hint-icon {
		width: 120rpx;
		height: 120rpx;
		margin-bottom: 20rpx;
		opacity: 0.7;
	}

	.hint-text {
		color: rgba(255, 255, 255, 0.8);
		font-size: 28rpx;
	}
}



.action-buttons {
	display: flex;
	gap: 20rpx;
	padding-bottom: 40rpx;
	flex-wrap: wrap;
}

.select-btn, .save-btn, .reset-btn {
	flex: 1;
	min-width: 200rpx;
	height: 100rpx;
	border-radius: 50rpx;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28rpx;
	font-weight: 600;
	transition: all 0.3s ease;

	&:disabled {
		opacity: 0.5;
	}
}

.select-btn {
	background: rgba(255, 255, 255, 0.2);
	color: #fff;

	&:active {
		background: rgba(255, 255, 255, 0.3);
	}
}



.save-btn {
	background: linear-gradient(135deg, #4ECDC4, #44A08D);
	color: #fff;

	&:active {
		transform: scale(0.95);
	}
}

.reset-btn {
	background: linear-gradient(135deg, #FF6B6B, #FF8E53);
	color: #fff;

	&:active {
		transform: scale(0.95);
	}
}

.btn-text {
	color: inherit;
	font-size: inherit;
	font-weight: inherit;
}

@keyframes spin {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}
</style>