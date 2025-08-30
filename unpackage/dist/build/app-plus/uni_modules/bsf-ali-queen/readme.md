# bsf-ali-queen

阿里云美颜 SDK uni-app 插件，基于 UTS 技术实现，提供实时美颜、虚拟化妆、背景虚化等视频处理能力。

## 📋 功能特性

- 🎨 **实时美颜处理** - 磨皮、美白、红润等基础美颜功能
- 🔍 **高级美颜与美型** - 高级美颜与美型功能的视线
- 📱 **跨平台支持** - iOS、Android 双端适配
- ⚡ **高性能** - 基于原生 SDK，确保流畅的实时处理体验

## 🛠 技术架构

- **UTS 层**: 提供统一的 TypeScript 接口
- **iOS 层**: 基于 Queen.framework，使用 Objective-C/Swift
- **Android 层**: 基于阿里云 Queen SDK，使用 Kotlin
- **跨平台**: 支持 uni-app Vue2/Vue3 项目

## 📦 安装配置

### 1. 添加插件

请登录阿里云控制购买并申请美颜功能，获取到下载证书和参数。


### 2. 下载插件

将插件放置在项目的 `uni_modules` 目录下：

```
your-project/
├── uni_modules/
│   └── bsf-ali-queen/
└── ...
```

### 3. 配置插件

安卓端配置：

将证书文件放置到到插件app-android/assets目录下，

配置app-android/AndroidManifest.xml：

```xml
 <application>
  <meta-data
  android:name="com.aliyun.alivc_license.licensekey" 
  android:value="xxxxx"/> 
  <meta-data
  android:name="com.aliyun.alivc_license.licensefile"
  android:value="xxxx.crt"/> 

 </application>
```

IOS端配置：

将证书文件放置到到插件app-ios/Resources目录下，

初始化的时候传入密钥和证书文件名


### 3. SDK 资源配置

确保以下资源文件已正确配置：

- **iOS**: `queen.framework` 及 `queen-ios.Bundle` 资源包
- **Android**: Queen SDK 相关资源文件

## 🚀 快速开始

### 基础使用

```vue
<template>
  <view class="container">
    <!-- 美颜相机组件 -->
    <bsf-queue-camera 
      ref="camera"
      @onTakePhoto="handleTakePhoto"
      @onGetFrame="handleGetFrame"
      @onPermissionDeny="handlePermissionDeny"
      @onPermissionPermit="handlePermissionPermit"
      @onBeautyImage="handleBeautyImage"
    />
    
    <!-- 控制按钮 -->
    <view class="controls">
      <button @click="takePhoto">拍照</button>
      <button @click="toggleCamera">切换摄像头</button>
      <button @click="toggleBeauty">开关美颜</button>
      <button @click="toggleTorch">开关闪光灯</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cameraRef: null
    }
  },
  onReady() {
    this.cameraRef = this.$refs.camera
  },
  methods: {
    // 拍照
    takePhoto() {
      this.cameraRef?.takePhoto()
    },
    
    // 切换摄像头
    toggleCamera() {
      this.cameraRef?.toggleCamera()
    },
    
    // 开关美颜
    toggleBeauty() {
      this.cameraRef?.toggleBeauty()
    },
    
    // 开关闪光灯
    toggleTorch() {
      this.cameraRef?.toggleTorch()
    },
    
    // 拍照回调
    handleTakePhoto(e) {
      const { base64 } = e.detail
      console.log('拍照结果:', base64)
      // 处理拍照结果
    },
    
    // 实时帧数据回调
    handleGetFrame(e) {
      const { base64 } = e.detail
      // 处理实时帧数据
    },
    
    // 权限被拒绝
    handlePermissionDeny() {
      console.log('相机权限被拒绝')
    },
    
    // 权限已授予
    handlePermissionPermit() {
      console.log('相机权限已授予')
    },
    
    // 图片美颜处理结果
    handleBeautyImage(e) {
      const { base64 } = e.detail
      console.log('美颜处理结果:', base64)
    }
  }
}
</script>
```

## 📚 API 文档

### 组件事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| `@onTakePhoto` | 拍照完成回调 | `{detail: {base64: string}}` |
| `@onGetFrame` | 实时帧数据回调 | `{detail: {base64: string}}` |
| `@onPermissionDeny` | 相机权限被拒绝 | - |
| `@onPermissionPermit` | 相机权限已授予 | - |
| `@onBeautyImage` | 图片美颜处理完成 | `{detail: {base64: string}}` |

### 组件方法

#### 基础控制方法

##### `toggleCamera()`
切换前后摄像头

```javascript
this.$refs.camera.toggleCamera()
```

##### `toggleBeauty()`
开关美颜功能

```javascript
this.$refs.camera.toggleBeauty()
```

##### `toggleTorch()`
开关闪光灯

```javascript
this.$refs.camera.toggleTorch()
```

##### `takePhoto()`
拍照

```javascript
this.$refs.camera.takePhoto()
```

##### `stopCamera()`
停止相机

```javascript
this.$refs.camera.stopCamera()
```

##### `destoryCamera()`
销毁相机资源

```javascript
this.$refs.camera.destoryCamera()
```

#### 实时帧处理方法

##### `startFrame()`
开始获取实时帧数据

```javascript
this.$refs.camera.startFrame()
```

##### `stopFrame()`
停止获取实时帧数据

```javascript
this.$refs.camera.stopFrame()
```

#### 美颜参数设置方法

##### `enableBeautyType(type, enable, mode)`
启用/禁用特定美颜类型

**参数:**
- `type` (number): 美颜类型
- `enable` (boolean): 是否启用
- `mode` (number): 模式参数，默认为 0

```javascript
// 启用磨皮
this.$refs.camera.enableBeautyType(1, true, 0)

// 禁用美白
this.$refs.camera.enableBeautyType(2, false)
```

##### `setBeautyParam(type, value)`
设置美颜参数值

**参数:**
- `type` (number): 美颜参数类型
- `value` (number): 参数值 (0.0 - 1.0)

```javascript
// 设置磨皮强度为 0.8
this.$refs.camera.setBeautyParam(1, 0.8)

// 设置美白强度为 0.6
this.$refs.camera.setBeautyParam(2, 0.6)
```

##### `updateFaceShape(type, value)`
更新面部塑形参数

**参数:**
- `type` (number): 塑形类型
- `value` (number): 塑形强度 (0.0 - 1.0)

```javascript
// 设置瘦脸强度
this.$refs.camera.updateFaceShape(1, 0.5)

// 设置大眼强度
this.$refs.camera.updateFaceShape(2, 0.3)
```

##### `beautifyImage(filePath)`
对指定图片进行美颜处理

**参数:**
- `filePath` (string): 图片文件路径

```javascript
// 处理本地图片
this.$refs.camera.beautifyImage('/path/to/image.jpg')
```

## 🎯 美颜参数说明

## 参数映射表

### 类型参数

|  值 | 常量名                                     | 功能描述                   |
| -: | --------------------------------------- | ---------------------- |
|  0 | `kQueenBeautyTypeSkinBuffing`           | 基础美颜（磨皮、锐化）            |
|  1 | `kQueenBeautyTypeFaceBuffing`           | 脸部美颜（去眼袋、法令纹、白牙、口红、腮红） |
|  2 | `kQueenBeautyTypeMakeup`                | 美妆（整妆、高光、美瞳、口红、眼妆）     |
|  3 | `kQueenBeautyTypeFaceShape`             | 美型（瘦脸、瘦下巴、大眼、瘦鼻、美唇等）   |
|  4 | `kQueenBeautyTypeSkinWhiting`           | 基础美颜——美白               |
|  5 | `kQueenBeautyTypeLUT`                   | 滤镜（可指定 LUT 色卡）         |
|  6 | `kQueenBeautyTypeBackgroundProcess`     | 背景处理（实景抠图、背景虚化）        |
|  7 | `kQueenBeautyTypeAutoFilter`            | 智能美颜                   |
|  8 | `kQueenBeautyTypeBodyShape`             | 美体                     |
|  9 | `kQueenBeautyTypeHandGestureDetect`     | 手势检测                   |
| 10 | `kQueenBeautyTypeFaceExpressionDetect`  | 脸部表情检测                 |
| 11 | `kQueenBeautyTypeHairColor`             | 换发色                    |
| 12 | `kQueenBeautyTypeAutoFaceShape`         | 智能美型                   |
| 13 | `kQueenBeautyTypeFaceDetect`            | 人脸检测                   |
| 14 | `kQueenBeautyTypeBodyDetect`            | 人体检测                   |
| 15 | `kQueenBeautyTypeHSV`                   | 色相/饱和度/明度（HSV 调节）      |
| 16 | `kQueenBeautyTypeFaceMosaicing`         | 人脸打马赛克                 |
| 17 | `kQueenBeautyTypeARWriting`             | 隔空写字特效                 |
| 18 | `kQueenBeautyTypedConcentrationDetect`  | 专注度检测                  |
| 19 | `kQueenBeautyTypedAbnormalActionDetect` | 异常行为（物体）检测             |
| 20 | `kQueenBeautyTypedLivingHumanDetect`    | 活体检测                   |
| 21 | `kQueenBeautyTypeMax`                   | 最大值（类型数量）              |


### 模型参数

|  值 | 常量名                                         | 功能描述             |
| -: | ------------------------------------------- | ---------------- |
|  0 | `kQueenBeautyFilterModeDefault`             | 默认模式             |
|  1 | `kQueenBeautyFilterModeSkinBuffing_Natural` | 磨皮—自然模式          |
|  2 | `kQueenBeautyFilterModeSkinBuffing_Strong`  | 磨皮—明显（强）模式       |
| 11 | `kQueenBeautyFilterModeFaceShape_Baseline`  | 美型—基准线模式         |
| 12 | `kQueenBeautyFilterModeFaceShape_Main`      | 美型—主流模式          |
| 13 | `kQueenBeautyFilterModeFaceShape_High`      | 美型—偏大变化（高）模式     |
| 14 | `kQueenBeautyFilterModeFaceShape_Max`       | 美型—夸张（最大）模式      |
| 21 | `kQueenBeautyFilterModeFaceMakeup_Baseline` | 美妆—基准线模式         |
| 22 | `kQueenBeautyFilterModeFaceMakeup_High`     | 美妆—强烈（高）模式       |
| 31 | `kQueenBeautyFilterModeArWriting_Writer`    | AR 隔空写字—写字（作者）模式 |
| 32 | `kQueenBeautyFilterModeArWriting_Drawer`    | AR 隔空写字—绘画（画家）模式 |




### 美颜参数

|  值 | 功能描述                         | 参数范围         | 前提                                 |
| -: | ---------------------------- | ------------ | ---------------------------------- |
|  1 | 磨皮 Buffing                   | \[0, 1]      | 开启 `基础美颜`   |
|  2 | 锐化 Sharpen                   | \[0, 1]      | 开启 `基础美颜`   |
|  3 | 美白 Whitening                 | \[0, 1]      | 开启 `基础美颜`   |
|  4 | 去眼袋 Remove Pouch             | \[0, 1]      | 开启 `高级美颜`   |
|  5 | 去法令纹 Remove Nasolabial Folds | \[0, 1]      | 开启 `高级美颜`   |
|  6 | 色卡滤镜强度 Filter Alpha          | \[0, 1]      | 开启 `滤镜`           |
|  7 | 漂白牙齿 White Teeth             | \[0, 1]      | 开启 `高级美颜`   |
|  8 | 口红 Lipstick                  | \[0, 1]      | 开启 `高级美颜`   |
|  9 | 腮红 Blush                     | \[0, 1]      | 开启 `高级美颜`   |
| 10 | 口红色相 Lipstick Color Param    | \[-0.5, 0.5] | 开启 `高级美颜`   |
| 11 | 口红饱和度 Lipstick Gloss Param   | \[0, 1]      | 开启 `高级美颜`   |
| 12 | 口红明度 Lipstick Brightness     | \[0, 1]      | 开启 `高级美颜`   |
| 13 | 亮眼 Brighten Eye              | \[0, 1]      | 开启 `高级美颜`   |
| 14 | 红润 Skin Red                  | \[0, 1]      | 开启 `高级美颜`   |
| 15 | 祛皱纹 Wrinkles                 | \[0, 1]      | 开启 `高级美颜`   |
| 16 | 祛暗沉 Brighten Face            | \[0, 1]      | 开启 `高级美颜`   |
| 20 | 祛脖颈纹 Neck                    | \[0, 1]      | 开启 `高级美颜`   |
| 21 | 祛额头纹 Forehead                | \[0, 1]      | 开启 `高级美颜`   |
| 22 | 饱和度 Saturation               | \[-1, 1]     | 开启 `色相饱和度明度`           |
| 23 | 对比度 Contrast                 | \[-1, 1]     | 开启 `色相饱和度明度`           |
| 24 | 人脸马赛克 Face Mosaicing         | \[0, 1]      | 开启 `人脸打马赛克` |



### 美型参数

|  值 | 功能描述（中英文）         | 参数范围     | 前提   |
| -: | ----------------- | -------- | ---- |
|  0 | 颧骨 CutCheek       | \[0, 1]  | 无    |
|  1 | 削脸 CutFace        | \[0, 1]  | 无    |
|  2 | 瘦脸 ThinFace       | \[0, 1]  | 无    |
|  3 | 脸长 LongFace       | \[0, 1]  | 无    |
|  4 | 下巴缩短 LowerJaw     | \[-1, 1] | 无    |
|  5 | 下巴拉长 HigherJaw    | \[-1, 1] | 无    |
|  6 | 瘦下巴 ThinJaw       | \[0, 1]  | 无    |
|  7 | 瘦下颌 ThinMandible  | \[0, 1]  | 无    |
|  8 | 大眼 BigEye         | \[0, 1]  | 无    |
|  9 | 眼角1 EyeAngle1     | \[0, 1]  | 无    |
| 10 | 眼距 Canthus        | \[-1, 1] | 无    |
| 11 | 拉宽眼距 Canthus1     | \[-1, 1] | 无    |
| 12 | 眼角2 EyeAngle2     | \[-1, 1] | 无    |
| 13 | 眼睛高度 Eye Height   | \[-1, 1] | 无    |
| 14 | 瘦鼻 ThinNose       | \[0, 1]  | 无    |
| 15 | 鼻翼 Nosewing       | \[0, 1]  | 无    |
| 16 | 鼻长 NasalHeight    | \[-1, 1] | 无    |
| 17 | 鼻头长 NoseTipHeight | \[-1, 1] | 无    |
| 18 | 唇宽 Mouth Width    | \[-1, 1] | 无    |
| 19 | 嘴唇大小 Mouth Size   | \[-1, 1] | 无    |
| 20 | 唇高 Mouth High     | \[-1, 1] | 无    |
| 21 | 人中 Philtrum       | \[-1, 1] | 无    |
| 22 | 发际线 Hair Line     | \[-1, 1] | 无    |
| 23 | 嘴角上扬（微笑）Smile     | \[0, 1]  | 无    |
| 24 | 最大值（保留）MAX        | -        | 系统保留 |


### 安卓美颜失败代码

int QUEEN_OK = 0;
int QUEEN_FAIL = -1;
int QUEEN_INVALID_HANDLE = -2;
int QUEEN_INVALID_PARAMS = -3;
int QUEEN_TIMEOUT = -4;
int QUEEN_FILE_ERROR = -5;
int QUEEN_FILE_NOT_EXIST = -6;
int QUEEN_UNZIP_ERROR = -7;
int QUEEN_NET_ERROR = -8;
int QUEEN_INVALID_LICENSE = -9;
int QUEEN_NO_EFFECT = -10;

## 💡 使用示例

### 1. 实时美颜相机

```javascript
export default {
  onReady() {
    const camera = this.$refs.camera
    
    // 启用基础美颜
    camera.enableBeautyType(1, true) // 磨皮
    camera.enableBeautyType(2, true) // 美白
    
    // 设置美颜强度
    camera.setBeautyParam(1, 0.8) // 磨皮强度
    camera.setBeautyParam(2, 0.6) // 美白强度
    
    // 设置面部塑形
    camera.updateFaceShape(1, 0.3) // 轻微瘦脸
    camera.updateFaceShape(2, 0.2) // 轻微大眼
  }
}
```

### 2. 图片美颜处理

```javascript
export default {
  methods: {
    async processImage() {
      // 选择图片
      uni.chooseImage({
        count: 1,
        success: (res) => {
          const imagePath = res.tempFilePaths[0]
          
          // 对图片进行美颜处理
          this.$refs.camera.beautifyImage(imagePath)
        }
      })
    },
    
    handleBeautyImage(e) {
      const { base64 } = e.detail
      
      // 处理美颜后的图片
      console.log('美颜处理完成:', base64)
      
      // 可以保存到相册或显示
      // ...
    }
  }
}
```

### 3. 实时帧数据处理

```javascript
export default {
  methods: {
    startVideoProcess() {
      // 开始获取实时帧
      this.$refs.camera.startFrame()
    },
    
    stopVideoProcess() {
      // 停止获取实时帧
      this.$refs.camera.stopFrame()
    },
    
    handleGetFrame(e) {
      const { base64 } = e.detail
      
      // 处理实时帧数据，可以用于:
      // 1. 实时滤镜效果
      // 2. 人脸识别
      // 3. 手势识别
      // 4. 其他 AI 分析
    }
  }
}
```

## ⚠️ 注意事项

1. **性能优化**
   - 实时美颜处理对性能要求较高，建议在中高端设备上使用
   - 可根据设备性能调整美颜参数，避免过度处理

2. **权限处理**
   - 使用前确保已获得相机权限
   - 处理权限被拒绝的情况，引导用户手动开启

3. **资源管理**
   - 及时调用 `destoryCamera()` 释放资源
   - 避免内存泄漏

4. **兼容性**
   - iOS 最低支持版本: iOS 11.0
   - Android 最低支持版本: API Level 21 (Android 5.0)
