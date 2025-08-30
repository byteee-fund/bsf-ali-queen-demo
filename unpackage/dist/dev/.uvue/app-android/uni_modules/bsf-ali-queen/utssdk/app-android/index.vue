<template>
  <view>
  </view>
</template>

<script lang="uts">
 
  import CameraContainer from 'uts.sdk.modules.bsfAliunQueen.CameraContainer';
  import FrameLayout from  'android.widget.FrameLayout';
  import Activity from 'android.app.Activity';

  //原生提供以下属性或方法的实现
  export default {
    /**
     * 组件名称，也就是开发者使用的标签
     */
    name: "bsf-queue-camera",
    /**
     * 组件涉及的事件声明，只有声明过的事件，才能被正常发送
     */
    emits: ["onTakePhoto", "onGetFrame", "onPermissionDeny", "onBeautyImage", "onPermissionPermit"],
    /**
     * 属性声明，组件的使用者会传递这些属性值到组件
     */
    props: {
 
    },
    /**
     * 组件内部变量声明
     */
    data() {
      return {}
    },
    /**
     * 属性变化监听器实现
     */
    watch: {
    
    },
    /**
     * 规则：如果没有配置expose，则methods中的方法均对外暴露，如果配置了expose，则以expose的配置为准向外暴露
     * ['publicMethod'] 含义为：只有 `publicMethod` 在实例上可用
     */
    expose: ['toggleCamera','toggleBeauty','destoryCamera','toggleTorch', "takePhoto", "startFrame", "stopFrame", "enableBeautyType",  "setBeautyParam", "updateFaceShape","beautifyImage","stopCamera"],
    methods: {
		toggleCamera() {
		  this.$el?.toggleCamera()
		},
	  toggleBeauty() {
	    this.$el?.toggleBeauty()
	  },
	  startCamera() {
	  	this.$el?.startCamera()	
	  },
	  stopCamera() {
		  console.log("stop camera");
		this.$el?.stopCamera()	
	  },

    enableBeautyType(type: number, enable: boolean, mode: number = 0) {
		this.$el?.enableBeautyType(type.toInt(), enable, mode.toInt())	
	  },
	 updateFaceShape(type: number, value: number) {
		this.$el?.updateFaceShape(type.toInt(), value.toFloat())	
	  },
   
     setBeautyParam(type: number, value: number) {
		this.$el?.setBeautyParam(type.toInt(), value.toFloat())	
	  },
	  destoryCamera() {
		this.$el?.stopCamera()	
	  },
	  toggleTorch() {
	    this.$el?.toggleTorch()
	  },
	  takePhoto() {
		const _this = this;
		this.$el?.takePhoto((res: string) => {
	        if (res != "") {
				let map : Map<string,any> = new Map();
				map.set('base64',res);
				let params : Map<string,any>= new Map();
				params.put("detail", map);
				_this.fireEvent("onTakePhoto", params);
	        } 
	    });
	  },
	  beautifyImage(filePath:string) {
	  		// const _this = this;
	  		// this.$el?.beautifyImage(filePath,(res: string) => {
	    //     if (res != "") {
	  		// 		let map : Map<string,any> = new Map();
	  		// 		map.set('base64',res);
	  		// 		let params : Map<string,any>= new Map();
	  		// 		params.put("detail", map);
	  		// 		_this.fireEvent("onBeautyImage", params);
	    //     } 
	    // });
	  },
	  startFrame() {
		  const _this = this;
	  	this.$el?.startAnalyzing( (res: string) => {
	        let map : Map<string,any> = new Map();
	        map.set('base64',res);
	        let params : Map<string,any>= new Map();
	        params.put("detail", map);
	        _this.fireEvent("onGetFrame", params);
	    });
	  },
	  stopFrame() {
	  	this.$el?.stopAnalyzing();
	  },
	  
	  showPermissionModal() {
		  let permissionCheck:string[] = ["android.permission.CAMERA"];
		  uni.showModal({
		  	title: "系统提示",
		  	content: "您拒绝了相机权限，如需重新设置可点击'去设置'按钮。设置后，重新打开本页面。",
		  	cancelText: "我已设置",
		  	confirmText: "去设置",
		  	success: (res) => {
		  		if(res.confirm == true){
		  		  UTSAndroid.gotoSystemPermissionActivity(UTSAndroid.getUniActivity()!,permissionCheck)
				  showPermissionModal()
		  		} else {
					console.log("cancel");
		  			if (UTSAndroid.checkSystemPermissionGranted(UTSAndroid.getUniActivity()!, permissionCheck)) {
		  				// 启动相机
						console.log("check success");
		  				this.$el?.startCamera();
		  			} else {
						console.log("check fail");
						 showPermissionModal()
					}
		  		}
		  	}
		  });
	  },

      /**
       * 内部使用的组件方法
       */
      privateMethod() {
	
      }
    },
    /**
     * [可选实现] 组件被创建，组件第一个生命周期，
     * 在内存中被占用的时候被调用，开发者可以在这里执行一些需要提前执行的初始化逻辑
     */
    created() {

    },
    /**
     * [可选实现] 对应平台的view载体即将被创建，对应前端beforeMount
     */
    NVBeforeLoad() {

    },
    /**
     * [必须实现] 创建原生View，必须定义返回值类型
     * 开发者需要重点实现这个函数，声明原生组件被创建出来的过程，以及最终生成的原生组件类型
     * （Android需要明确知道View类型，需特殊校验）
     */
    NVLoad() : CameraContainer {
      let previewView = new CameraContainer(this.$androidContext!,this as UTSComponent<FrameLayout>)
      return previewView
    },
    /**
     * [可选实现] 原生View已创建
     */
    NVLoaded() {
	let permissionCheck:string[] = ["android.permission.CAMERA","android.permission.WRITE_EXTERNAL_STORAGE"]
      // 请求拍照权限
      if (UTSAndroid.checkSystemPermissionGranted(this.$androidContext! as Activity, permissionCheck)) {
        // 启动相机
		this.fireEvent("onPermissionPermit", null);
        this.$el?.startCamera();
      }else{
        // 请求权限
        UTSAndroid.requestSystemPermission(this.$androidContext! as Activity, permissionCheck, function (allRight : boolean, _ : string[]) {
          if (allRight) {
            // 权限请求成功
			this.fireEvent("onPermissionPermit", null);
            this.$el?.startCamera();
          } else {
            console.log("权限请求失败")
          } 
        }, function (_ : boolean, _ : string[]) {
          console.log("权限请求失败")
          this.fireEvent("onPermissionDeny", null);		
        })
        
      }
    },
    /**
     * [可选实现] 原生View布局完成
     */
    NVLayouted() {
		console.log("layouted", this.$el?.width, this.$el?.height);
    },
    /**
     * [可选实现] 原生View将释放
     */
    NVBeforeUnload() {
		
    },
    /**
     * [可选实现] 原生View已释放，这里可以做释放View之后的操作
     */
    NVUnloaded() {

    },
    /**
     * [可选实现] 组件销毁
     */
    unmounted() {

    },
    /**
     * [可选实现] 自定组件布局尺寸，用于告诉排版系统，组件自身需要的宽高
     * 一般情况下，组件的宽高应该是由终端系统的排版引擎决定，组件开发者不需要实现此函数
     * 但是部分场景下，组件开发者需要自己维护宽高，则需要开发者重写此函数
     */
    // NVMeasure(size : UTSSize) : UTSSize {
    //   // size.width = 300.0.toFloat();
    //   // size.height = 200.0.toFloat();
    //   return size;
    // }
  }
  


</script>

<style>

</style>