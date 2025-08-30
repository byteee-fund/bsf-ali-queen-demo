import { _ as _export_sfc, o as onShow, f as formatAppLog, a as onHide, r as resolveEasycom, b as _imports_0, c as bsfAliQueen_utsProxy } from "../../_plugin-vue_export-helper.js";
import { ref, watch, nextTick, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, createCommentVNode } from "vue";
const _imports_1 = "/static/imgs/photoLibrary/p1.png";
const _imports_2 = "/static/imgs/tryOn/camera.png";
const _imports_3 = "/static/imgs/tryOn/turn.png";
const _style_0 = { "selfie-ctn": { "": { "position": "relative" } }, "camera-ctn": { ".selfie-ctn ": { "position": "relative" } }, "camera-preview": { ".selfie-ctn .camera-ctn ": { "zIndex": 0 } }, "back-box": { ".selfie-ctn .camera-ctn ": { "width": "80rpx", "height": "80rpx", "borderRadius": 50, "position": "absolute", "left": "44rpx", "top": "122rpx", "zIndex": 999 } }, "prev-icon": { ".selfie-ctn .camera-ctn .back-box ": { "width": "20rpx", "height": "36rpx", "position": "absolute", "left": "30rpx", "top": "22rpx" } }, "camera-frame": { ".selfie-ctn .camera-ctn ": { "width": "312rpx", "height": "408rpx", "position": "absolute", "left": "219rpx", "top": "268rpx" } }, "left-top": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderTopWidth": "4rpx", "borderTopStyle": "solid", "borderTopColor": "#ffffff", "borderLeftWidth": "4rpx", "borderLeftStyle": "solid", "borderLeftColor": "#ffffff", "borderTopLeftRadius": "40rpx", "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0, "position": "absolute", "left": 0, "top": 0 } }, "right-top": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderTopWidth": "4rpx", "borderTopStyle": "solid", "borderTopColor": "#ffffff", "borderRightWidth": "4rpx", "borderRightStyle": "solid", "borderRightColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": "40rpx", "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0, "position": "absolute", "right": 0, "top": 0 } }, "right-bottom": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderBottomWidth": "4rpx", "borderBottomStyle": "solid", "borderBottomColor": "#ffffff", "borderRightWidth": "4rpx", "borderRightStyle": "solid", "borderRightColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": "40rpx", "borderBottomLeftRadius": 0, "position": "absolute", "right": 0, "bottom": 0 } }, "left-bottom": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderBottomWidth": "4rpx", "borderBottomStyle": "solid", "borderBottomColor": "#ffffff", "borderLeftWidth": "4rpx", "borderLeftStyle": "solid", "borderLeftColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": "40rpx", "position": "absolute", "left": 0, "bottom": 0 } }, "operate-ctn": { ".selfie-ctn ": { "height": "624rpx", "backgroundColor": "#ffffff", "borderTopLeftRadius": "40rpx", "borderTopRightRadius": "40rpx", "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0, "position": "absolute", "left": 0, "bottom": 0 } }, "text-ctn": { ".selfie-ctn .operate-ctn ": { "display": "flex", "flexDirection": "column", "justifyContent": "center", "marginTop": "60rpx", "marginBottom": "120rpx" } }, "text-box": { ".selfie-ctn .operate-ctn .text-ctn ": { "fontSize": "28rpx", "fontWeight": "500", "color": "#4a4b4d", "textAlign": "center" } }, "operate-ul": { ".selfie-ctn .operate-ctn ": { "display": "flex", "flexDirection": "row", "alignItems": "flex-end", "justifyContent": "center" } }, "photoAlbum-li": { ".selfie-ctn .operate-ctn .operate-ul ": { "display": "flex", "flexDirection": "column", "alignItems": "center", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": 0, "paddingLeft": "20rpx" } }, "photoAlbum-img": { ".selfie-ctn .operate-ctn .operate-ul .photoAlbum-li ": { "width": "100rpx", "height": "100rpx", "borderRadius": 50 } }, "camera-li": { ".selfie-ctn .operate-ctn .operate-ul ": { "width": "160rpx", "height": "160rpx", "borderRadius": 50, "backgroundColor": "#242527", "marginTop": 0, "marginRight": "74rpx", "marginBottom": 0, "marginLeft": "74rpx", "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "camera-img": { ".selfie-ctn .operate-ctn .operate-ul .camera-li ": { "width": "68rpx", "height": "60rpx" } }, "turn-li": { ".selfie-ctn .operate-ctn .operate-ul ": { "display": "flex", "flexDirection": "column", "alignItems": "center", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": 0, "paddingLeft": "20rpx" } }, "turn-img-box": { ".selfie-ctn .operate-ctn .operate-ul .turn-li ": { "width": "100rpx", "height": "100rpx", "borderRadius": 50, "boxShadow": "0rpx 0rpx 20rpx rgba(122, 122, 122, 0.3)", "backgroundColor": "#ffffff", "overflow": "hidden", "display": "flex", "alignItems": "center", "justifyContent": "center" } }, "turn-img": { ".selfie-ctn .operate-ctn .operate-ul .turn-li .turn-img-box ": { "width": "50rpx", "height": "42rpx" } } };
const _sfc_main = {
  __name: "test",
  setup(__props) {
    const screenWidth = ref(0);
    const screenHeight = ref(0);
    const CameraHeight = ref(0);
    const showCamera = ref(false);
    const CameraPreviewRef = ref(null);
    onShow(() => {
      const systemInfo = uni.getSystemInfoSync();
      formatAppLog("log", "at pages/index/test.nvue:70", systemInfo);
      screenWidth.value = systemInfo.windowWidth;
      screenHeight.value = systemInfo.windowHeight;
      CameraHeight.value = screenHeight.value - uni.upx2px(624);
      formatAppLog("log", "at pages/index/test.nvue:75", "camera size", screenWidth.value, CameraHeight.value);
      showCamera.value = true;
    });
    const onPermissionDeny = () => {
      formatAppLog("log", "at pages/index/test.nvue:86", "权限被拒绝");
      uni.showToast({
        title: "你拒绝了权限设置，即将返回上一页",
        icon: "error",
        duration: 1e3
      });
    };
    ref([
      { id: 1, name: "磨皮", value: 1, min: 0, max: 1 },
      { id: 2, name: "锐化", value: 1, min: 0, max: 1 },
      { id: 3, name: "美白", value: 1, min: 0, max: 1 },
      { id: 4, name: "去眼袋", value: 1, min: 0, max: 1 },
      { id: 5, name: "去法令纹", value: 1, min: 0, max: 1 },
      { id: 6, name: "色卡滤镜强度", value: 0, min: 0, max: 1 },
      { id: 7, name: "漂白牙齿", value: 1, min: 0, max: 1 },
      { id: 9, name: "腮红", value: 1, min: 0, max: 1 },
      { id: 8, name: "口红", value: 0.9, min: 0, max: 1 },
      { id: 10, name: "口红色相", value: 0.5, min: -0.5, max: 0.5 },
      { id: 11, name: "口红饱和度", value: 0.4, min: 0, max: 1 },
      { id: 12, name: "口红明度", value: 0.6, min: 0, max: 1 },
      { id: 13, name: "亮眼", value: 0, min: 0, max: 1 },
      { id: 14, name: "红润", value: 0, min: 0, max: 1 },
      { id: 15, name: "祛皱纹", value: 1, min: 0, max: 1 },
      { id: 16, name: "祛暗沉", value: 1, min: 0, max: 1 },
      { id: 20, name: "祛脖颈纹", value: 1, min: 0, max: 1 },
      { id: 21, name: "祛额头纹", value: 1, min: 0, max: 1 },
      { id: 22, name: "饱和度", value: 0, min: -1, max: 1 },
      { id: 23, name: "对比度", value: 0, min: -1, max: 1 },
      { id: 24, name: "人脸马赛克", value: 0, min: 0, max: 1 }
    ]);
    const onShotCut = (res) => {
      CameraPreviewRef.value.toggleCamera();
    };
    const takePhoto = () => {
      CameraPreviewRef.value.takePhoto();
    };
    const onTakePhoto = (res) => {
      formatAppLog("log", "at pages/index/test.nvue:195", "拍照结果:", res);
      let base64Data = "";
      if (res.detail && res.detail.base64) {
        base64Data = res.detail.base64;
      } else if (res.base64) {
        base64Data = res.base64;
      } else if (res.data && res.data.base64) {
        base64Data = res.data.base64;
      } else {
        formatAppLog("error", "at pages/index/test.nvue:207", "未找到base64数据");
        uni.showToast({
          title: "拍照失败，未获取到图片数据",
          icon: "error"
        });
        return;
      }
      if (!base64Data.startsWith("data:")) {
        base64Data = `data:image/jpeg;base64,${base64Data}`;
      }
      formatAppLog("log", "at pages/index/test.nvue:220", "处理后的base64数据长度:", base64Data.length);
      uni.$store.dispatch("setSelfieImgBase64", base64Data);
      setTimeout(() => {
        uni.navigateTo({
          url: "/pages/index/image"
        });
      }, 100);
    };
    const handlePhotoAlbum = () => {
      uni.navigateTo({
        url: "/pages/index/ablum"
      });
    };
    const onGetBeautyImage = (res) => {
      formatAppLog("log", "at pages/index/test.nvue:237", "获取美颜后的照片:", res);
    };
    watch(() => uni.$store.state.loadComplete, (newVal, oldVal) => {
      if (newVal === true && uni.$store.state.isJudge === true) {
        nextTick(() => {
          uni.$store.dispatch("setIsJudge", false);
          const pages = getCurrentPages();
          const tIdx = pages.findIndex((page) => page.route === "pages/index/tryOn/index");
          const delta = pages.length - tIdx - 1;
          uni.hideLoading();
          uni.navigateBack({
            delta
          });
        });
      }
    });
    const onGetFrame = (res) => {
      formatAppLog("log", "at pages/index/test.nvue:361", "获取帧数据:", res);
    };
    onHide(() => {
      formatAppLog("log", "at pages/index/test.nvue:365", "页面隐藏");
      if (CameraPreviewRef.value) {
        CameraPreviewRef.value.destoryCamera();
      }
      showCamera.value = false;
    });
    const handleBack = () => {
      uni.navigateBack({
        delta: 1
        // 返回上一页
      });
    };
    return (_ctx, _cache) => {
      resolveEasycom(resolveDynamicComponent("bsf-queue-camera"), bsfAliQueen_utsProxy.BsfQueueCameraComponent);
      return openBlock(), createElementBlock("scroll-view", {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
        style: { flexDirection: "column" }
      }, [
        createElementVNode("view", {
          class: "selfie-ctn",
          style: normalizeStyle({ width: `${screenWidth.value}px`, height: `${screenHeight.value}px` })
        }, [
          createElementVNode("view", {
            class: "camera-ctn",
            style: normalizeStyle({ width: `${screenWidth.value}px`, height: `${CameraHeight.value}px` })
          }, [
            showCamera.value ? (openBlock(), createElementBlock("bsf-queue-camera", {
              key: 0,
              style: normalizeStyle({ width: `${screenWidth.value}px`, height: `${CameraHeight.value}px` }),
              class: "camera-preview",
              ref_key: "CameraPreviewRef",
              ref: CameraPreviewRef,
              "on:onPermissionDeny": onPermissionDeny,
              "on:onTakePhoto": onTakePhoto,
              "on:onGetFrame": onGetFrame,
              "on:onBeautyImage": onGetBeautyImage,
              "on:onPermissionPermit": _cache[0] || (_cache[0] = (...args) => _ctx.onPermissionPermit && _ctx.onPermissionPermit(...args))
            }, null, 36)) : createCommentVNode("", true),
            createElementVNode("cover-view", {
              class: "back-box",
              onClick: handleBack
            }, [
              createElementVNode("cover-image", {
                src: _imports_0,
                class: "prev-icon"
              })
            ]),
            createElementVNode("view", { class: "camera-frame" }, [
              createElementVNode("view", { class: "left-top" }),
              createElementVNode("view", { class: "right-top" }),
              createElementVNode("view", { class: "right-bottom" }),
              createElementVNode("view", { class: "left-bottom" })
            ])
          ], 4),
          createElementVNode("view", {
            class: "operate-ctn",
            style: normalizeStyle({ width: `${screenWidth.value}px` })
          }, [
            createElementVNode("view", { class: "text-ctn" }, [
              createElementVNode("view", null, [
                createElementVNode("u-text", { class: "text-box" }, "请尽量摘下眼镜、帽子、口罩等遮挡物")
              ]),
              createElementVNode("view", null, [
                createElementVNode("u-text", { class: "text-box" }, "在光线充足的地方拍摄")
              ])
            ]),
            createElementVNode("view", { class: "operate-ul" }, [
              createElementVNode("view", { class: "photoAlbum-li" }, [
                createElementVNode("u-image", {
                  src: _imports_1,
                  class: "photoAlbum-img",
                  onClick: handlePhotoAlbum
                }),
                createElementVNode("view", null, [
                  createElementVNode("u-text", { style: { "font-size": "24rpx", "font-weight": "500" } }, "相册")
                ])
              ]),
              createElementVNode("view", {
                class: "camera-li",
                onClick: takePhoto
              }, [
                createElementVNode("u-image", {
                  src: _imports_2,
                  class: "camera-img"
                })
              ]),
              createElementVNode("view", { class: "turn-li" }, [
                createElementVNode("view", {
                  class: "turn-img-box",
                  onClick: onShotCut
                }, [
                  createElementVNode("u-image", {
                    src: _imports_3,
                    class: "turn-img"
                  })
                ]),
                createElementVNode("view", null, [
                  createElementVNode("u-text", { style: { "font-size": "24rpx", "font-weight": "500" } }, "翻转")
                ])
              ])
            ])
          ], 4)
        ], 4)
      ]);
    };
  }
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  test as default
};
