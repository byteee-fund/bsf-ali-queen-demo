## 关于项目

`bsf-ali-queen` 是一款阿里云美颜SDK实现的适用于Uniapp/UniappX的插件

##  插件配置

1. 在阿里云控制台申请美颜SDK参数，因为阿里云的美颜参数和报名绑定的，因此需要注意打包或基座时候的报名保持一致。

1. 将`bsf-ali-queen` 插件复制到项目中的uni_modules目录下

2. 将生成好的.crt文件拷贝插件目录下的`app-android`下的`assets`目录下，另外 修改 `AndroidManifest.xml`文件的下的参数，保持一致

```xml
 <application>
  <meta-data
  android:name="com.aliyun.alivc_license.licensekey" 
  android:value="vPbqtgx4UHuy4gJobc5640b9145fe4770820af1eac919c258"/> 
  <meta-data
  android:name="com.aliyun.alivc_license.licensefile"
  android:value="AliVideoCert-com_byteee_uniappdemo-20250630094102.crt"/> 

 </application>
```

3. 将生成好的.crt文件拷贝插件目录下的`app-ios`下的`Resources`目录下`,另外修改`app-ios`目录下的`Info.plist`文件




## 使用方法

美颜SDK和相机已经被封装为了UTS组件，需要在nvue页面里使用，使用样例

```js
<bsf-queue-camera
    style="width: 100%; height: 800rpx;" 
    ref="CameraView" 
    class="camera-view" 
    @onPermissionDeny="onPermissionDeny" 
    @onGetFrame="onGetFrame">
</bsf-queue-camera>
```

组件内部，已经自动处理，以下工作：

* 权限申请
* 创建相机
* 初始化美颜引擎


## 接口列表

如果需要对相机进行操作，请使用ref属性获取组件实例，然后调用对应的方法


### 切换手电筒

```js
this.$refs.CameraView.toggleTorch();
```

### 切换前后摄像头

```js
this.$refs.CameraView.toggleCamera();
```

### 切换美颜开关

```js
this.$refs.CameraView.toggleBeauty();
```

### 开启美颜功能

具体参数类型参看附件

```js
this.$refs.CameraView.enableBeautyType(1, 0.5f);
```   


### 设置美颜参数

具体参数类型参看附件

```js
this.$refs.CameraView.setBeautyParams(1, 0.5f);
```   


### 设置美型参数

具体参数类型参看附件

```js
this.$refs.CameraView.updateFaceShape(7, 0.5f);
```   


### 开启抓帧

抓帧后的数据通过onFrame回调base64图片

```js
this.$refs.CameraView.startFrame();
```


### 停止抓帧

```js
this.$refs.CameraView.stopFrame();
```




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