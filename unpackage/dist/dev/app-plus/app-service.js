if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    methods: {
      goToQueue() {
        uni.navigateTo({
          url: "/pages/index/queue"
        });
      },
      goToTest() {
        uni.navigateTo({
          url: "/pages/index/test"
        });
      },
      goToImage() {
        uni.$store.dispatch("setSelfieImgBase64", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=");
        uni.navigateTo({
          url: "/pages/index/image"
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(' <button class="nav-button" @click="goToQueue">进入队列页面</button> '),
      vue.createElementVNode("button", {
        class: "nav-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.goToTest && $options.goToTest(...args))
      }, "进入测试页面"),
      vue.createCommentVNode(' <button class="nav-button" @click="goToImage">测试图片显示页面</button> ')
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/jasonz/Code/bsf-ali-queen-demo/pages/index/index.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$2 = {
    __name: "image",
    setup(__props, { expose: __expose }) {
      __expose();
      const imageSrc = vue.ref("");
      const screenWidth = vue.ref(0);
      const screenHeight = vue.ref(0);
      const isLoading = vue.ref(true);
      const hasError = vue.ref(false);
      vue.onMounted(() => {
        const systemInfo = uni.getSystemInfoSync();
        screenWidth.value = systemInfo.windowWidth;
        screenHeight.value = systemInfo.windowHeight - uni.upx2px(594);
        formatAppLog("log", "at pages/index/image.vue:51", "图片显示页面加载");
        formatAppLog("log", "at pages/index/image.vue:52", "Store状态:", uni.$store.state);
        const selfieImgBase64 = uni.$store.state.selfieImgBase64;
        formatAppLog("log", "at pages/index/image.vue:56", "获取到的图片数据长度:", selfieImgBase64 ? selfieImgBase64.length : 0);
        if (selfieImgBase64 && selfieImgBase64.length > 0) {
          imageSrc.value = selfieImgBase64;
          formatAppLog("log", "at pages/index/image.vue:60", "设置图片源成功");
        } else {
          hasError.value = true;
          formatAppLog("error", "at pages/index/image.vue:63", "未找到图片数据");
          uni.showToast({
            title: "未找到图片数据",
            icon: "error"
          });
          setTimeout(() => {
            uni.navigateBack();
          }, 1500);
        }
      });
      const onImageLoad = (e) => {
        formatAppLog("log", "at pages/index/image.vue:76", "图片加载成功", e);
        isLoading.value = false;
        hasError.value = false;
      };
      const onImageError = (e) => {
        formatAppLog("log", "at pages/index/image.vue:83", "图片加载失败", e);
        isLoading.value = false;
        hasError.value = true;
        uni.showToast({
          title: "图片加载失败",
          icon: "error"
        });
      };
      const handleBack = () => {
        uni.navigateBack();
      };
      const handleRetake = () => {
        uni.navigateBack();
      };
      const handleConfirm = () => {
        uni.showToast({
          title: "图片已确认",
          icon: "success"
        });
      };
      const __returned__ = { imageSrc, screenWidth, screenHeight, isLoading, hasError, onImageLoad, onImageError, handleBack, handleRetake, handleConfirm, ref: vue.ref, onMounted: vue.onMounted };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "image-display-container" }, [
      vue.createCommentVNode(" 返回按钮 "),
      vue.createElementVNode("view", {
        class: "back-button",
        onClick: $setup.handleBack
      }, [
        vue.createElementVNode("text", { class: "back-text" }, "返回")
      ]),
      vue.createCommentVNode(" 图片显示区域 "),
      vue.createElementVNode("view", { class: "image-container" }, [
        vue.createCommentVNode(" 加载状态 "),
        vue.createCommentVNode(" 图片显示 "),
        vue.createElementVNode("image", {
          src: $setup.imageSrc,
          class: "display-image",
          mode: "aspectFill",
          style: vue.normalizeStyle({ width: `${$setup.screenWidth}px`, height: `${$setup.screenHeight}px` }),
          onLoad: $setup.onImageLoad,
          onError: $setup.onImageError
        }, null, 44, ["src"])
      ]),
      vue.createCommentVNode(" 操作按钮区域 "),
      vue.createElementVNode("view", { class: "action-buttons" }, [
        vue.createElementVNode("view", {
          class: "action-button",
          onClick: $setup.handleRetake
        }, [
          vue.createElementVNode("text", { class: "button-text" }, "重新拍照")
        ]),
        vue.createElementVNode("view", {
          class: "action-button primary",
          onClick: $setup.handleConfirm
        }, [
          vue.createElementVNode("text", { class: "button-text" }, "确认使用")
        ])
      ])
    ]);
  }
  const PagesIndexImage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-5591506f"], ["__file", "/Users/jasonz/Code/bsf-ali-queen-demo/pages/index/image.vue"]]);
  const { registerUTSInterface, initUTSProxyClass, initUTSProxyFunction, initUTSPackageName, initUTSIndexClassName, initUTSClassName } = uni;
  const name = "bsfAliQueen";
  const moduleName = "阿里云美颜SDK的UTS插件";
  const moduleType = "";
  const errMsg = ``;
  const is_uni_modules = true;
  const pkg = /* @__PURE__ */ initUTSPackageName(name, is_uni_modules);
  const cls = /* @__PURE__ */ initUTSIndexClassName(name, is_uni_modules);
  const exports$1 = { __esModule: true };
  exports$1.BsfQueueCameraComponent = {};
  exports$1.initEngine = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "initEngineByJs", keepAlive: false, params: [{ "name": "initEngineOptions", "type": "UTSSDKModulesBsfAliQueenInitEngineOptionsJSONObject" }], return: "" });
  exports$1.destroyEngine = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "destroyEngineByJs", keepAlive: false, params: [], return: "" });
  exports$1.isEngineReady = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "isEngineReadyByJs", keepAlive: false, params: [], return: "" });
  exports$1.enableBeautyType = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "enableBeautyTypeByJs", keepAlive: false, params: [{ "name": "type", "type": "number" }, { "name": "enable", "type": "boolean" }], return: "" });
  exports$1.updateFaceShape = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "updateFaceShapeByJs", keepAlive: false, params: [{ "name": "param", "type": "number" }, { "name": "value", "type": "number" }], return: "" });
  exports$1.setBeautyParam = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "setBeautyParamByJs", keepAlive: false, params: [{ "name": "param", "type": "number" }, { "name": "value", "type": "number" }], return: "" });
  exports$1.beautifyImage = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "beautifyImageByJs", keepAlive: false, params: [{ "name": "beautifyImageOptions", "type": "UTSSDKModulesBsfAliQueenBeautifyImageOptionsJSONObject" }], return: "" });
  uni.registerUTSPlugin("uni_modules/bsf-ali-queen", exports$1);
  const bsfAliQueen_utsProxy = uni.requireUTSPlugin("uni_modules/bsf-ali-queen");
  const _imports_0 = "/static/imgs/photoLibrary/p1.png";
  const _sfc_main$1 = {
    __name: "ablum",
    setup(__props, { expose: __expose }) {
      __expose();
      const selectedImage = vue.ref("");
      const beautifiedImage = vue.ref("");
      const isProcessing = vue.ref(false);
      const defaultBeautyParams = [
        { id: 1, value: 0.6 },
        // 磨皮
        { id: 2, value: 0.5 },
        // 锐化
        { id: 3, value: 0.4 },
        // 美白
        { id: 4, value: 0.7 },
        // 去眼袋
        { id: 5, value: 0.6 },
        // 去法令纹
        { id: 7, value: 0.5 },
        // 漂白牙齿
        { id: 9, value: 0.3 },
        // 腮红
        { id: 8, value: 0.4 },
        // 口红
        { id: 13, value: 0.5 },
        // 亮眼
        { id: 14, value: 0.3 },
        // 红润
        { id: 15, value: 0.6 },
        // 祛皱纹
        { id: 16, value: 0.5 }
        // 祛暗沉
      ];
      const initBeautyEngine = () => {
        try {
          bsfAliQueen_utsProxy.initEngine({
            licenseKey: "vPbqtgx4UHuy4gJobc5640b9145fe4770820af1eac919c258",
            licenseFile: "AliVideoCert-com_byteee_uniappdemo-20250630094102.crt"
          });
          bsfAliQueen_utsProxy.enableBeautyType(0, true, 0);
          bsfAliQueen_utsProxy.enableBeautyType(1, true, 0);
          bsfAliQueen_utsProxy.enableBeautyType(2, true, 0);
          bsfAliQueen_utsProxy.enableBeautyType(4, true, 0);
          formatAppLog("log", "at pages/index/ablum.vue:93", "美颜引擎初始化成功");
        } catch (error) {
          formatAppLog("error", "at pages/index/ablum.vue:95", "美颜引擎初始化失败:", error);
          uni.showToast({
            title: "美颜引擎初始化失败",
            icon: "error"
          });
        }
      };
      const selectImage = () => {
        uni.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          sourceType: ["album"],
          success: (res) => {
            const imagePath = res.tempFilePaths[0];
            selectedImage.value = imagePath;
            beautifiedImage.value = "";
            formatAppLog("log", "at pages/index/ablum.vue:113", "选择的图片路径:", imagePath);
            uni.showToast({
              title: "图片选择成功，开始美颜处理...",
              icon: "success",
              duration: 1500
            });
            setTimeout(() => {
              applyBeauty();
            }, 500);
          },
          fail: (err) => {
            formatAppLog("error", "at pages/index/ablum.vue:128", "选择图片失败:", err);
            uni.showToast({
              title: "选择图片失败",
              icon: "error"
            });
          }
        });
      };
      const applyBeauty = async () => {
        if (!selectedImage.value) {
          uni.showToast({
            title: "请先选择图片",
            icon: "none"
          });
          return;
        }
        isProcessing.value = true;
        try {
          defaultBeautyParams.forEach((item) => {
            bsfAliQueen_utsProxy.setBeautyParam(item.id, item.value);
          });
          let imagePath = selectedImage.value;
          if (imagePath.startsWith("file://")) {
            imagePath = imagePath.replace(/^file:\/+/, "");
          }
          bsfAliQueen_utsProxy.beautifyImage({
            path: imagePath,
            success: (result) => {
              formatAppLog("log", "at pages/index/ablum.vue:167", "美颜处理成功:", result);
              let base64Data = "";
              if (typeof result === "string") {
                base64Data = result;
              } else if (result.base64) {
                base64Data = result.base64;
              } else if (result.data) {
                base64Data = result.data;
              } else {
                formatAppLog("error", "at pages/index/ablum.vue:177", "未知的返回数据格式:", result);
                uni.showToast({
                  title: "美颜处理返回数据格式错误",
                  icon: "error"
                });
                isProcessing.value = false;
                return;
              }
              if (!base64Data.startsWith("data:")) {
                base64Data = `data:image/jpeg;base64,${base64Data}`;
              }
              beautifiedImage.value = base64Data;
              isProcessing.value = false;
              uni.showToast({
                title: "美颜处理完成",
                icon: "success"
              });
            },
            fail: (error) => {
              formatAppLog("error", "at pages/index/ablum.vue:200", "美颜处理失败:", error);
              isProcessing.value = false;
              uni.showToast({
                title: "美颜处理失败",
                icon: "error"
              });
            }
          });
        } catch (error) {
          formatAppLog("error", "at pages/index/ablum.vue:210", "美颜处理异常:", error);
          isProcessing.value = false;
          uni.showToast({
            title: "美颜处理异常",
            icon: "error"
          });
        }
      };
      const saveImage = () => {
        if (!beautifiedImage.value) {
          uni.showToast({
            title: "没有可保存的图片",
            icon: "none"
          });
          return;
        }
        const base64Data = beautifiedImage.value.startsWith("data:") ? beautifiedImage.value : `data:image/jpeg;base64,${beautifiedImage.value}`;
        const canvas = uni.createCanvasContext("beautyCanvas");
        canvas.drawImage(base64Data, 0, 0, 300, 300);
        canvas.draw(false, () => {
          setTimeout(() => {
            uni.canvasToTempFilePath({
              canvasId: "beautyCanvas",
              success: (res) => {
                uni.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: () => {
                    uni.showToast({
                      title: "图片已保存到相册",
                      icon: "success"
                    });
                  },
                  fail: (error) => {
                    formatAppLog("error", "at pages/index/ablum.vue:252", "保存图片失败:", error);
                    uni.showToast({
                      title: "保存图片失败",
                      icon: "error"
                    });
                  }
                });
              },
              fail: (error) => {
                formatAppLog("error", "at pages/index/ablum.vue:261", "转换图片失败:", error);
                uni.showToast({
                  title: "转换图片失败",
                  icon: "error"
                });
              }
            });
          }, 100);
        });
      };
      const resetAll = () => {
        selectedImage.value = "";
        beautifiedImage.value = "";
        isProcessing.value = false;
        uni.showToast({
          title: "已重置",
          icon: "success"
        });
      };
      const handleBack = () => {
        uni.navigateBack({
          delta: 1
        });
      };
      vue.onMounted(() => {
        initBeautyEngine();
      });
      vue.onUnmounted(() => {
        formatAppLog("log", "at pages/index/ablum.vue:298", "onUnload");
        try {
          bsfAliQueen_utsProxy.destroyEngine();
          formatAppLog("log", "at pages/index/ablum.vue:301", "美颜引擎已销毁");
        } catch (error) {
          formatAppLog("error", "at pages/index/ablum.vue:303", "销毁美颜引擎失败:", error);
        }
      });
      const __returned__ = { selectedImage, beautifiedImage, isProcessing, defaultBeautyParams, initBeautyEngine, selectImage, applyBeauty, saveImage, resetAll, handleBack, ref: vue.ref, onMounted: vue.onMounted, onUnmounted: vue.onUnmounted, get initEngine() {
        return bsfAliQueen_utsProxy.initEngine;
      }, get enableBeautyType() {
        return bsfAliQueen_utsProxy.enableBeautyType;
      }, get setBeautyParam() {
        return bsfAliQueen_utsProxy.setBeautyParam;
      }, get beautifyImage() {
        return bsfAliQueen_utsProxy.beautifyImage;
      }, get destroyEngine() {
        return bsfAliQueen_utsProxy.destroyEngine;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "album-container" }, [
      vue.createCommentVNode(" 顶部导航栏 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", {
          class: "back-btn",
          onClick: $setup.handleBack
        }, [
          vue.createElementVNode("text", { class: "back-icon" }, "‹")
        ]),
        vue.createElementVNode("text", { class: "nav-title" }, "相册美颜"),
        vue.createElementVNode("view", { class: "placeholder" })
      ]),
      vue.createCommentVNode(" 主要内容区域 "),
      vue.createElementVNode("view", { class: "main-content" }, [
        vue.createCommentVNode(" 图片预览区域 "),
        $setup.selectedImage ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "image-preview"
        }, [
          vue.createElementVNode("image", {
            src: $setup.beautifiedImage || $setup.selectedImage,
            class: "preview-image",
            mode: "aspectFit"
          }, null, 8, ["src"]),
          $setup.isProcessing ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "image-overlay"
          }, [
            vue.createElementVNode("view", { class: "loading-spinner" }),
            vue.createElementVNode("text", { class: "loading-text" }, "美颜处理中...")
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 美颜完成后的标签 "),
          $setup.beautifiedImage && !$setup.isProcessing ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "beauty-complete"
          }, [
            vue.createElementVNode("text", { class: "complete-text" }, "美颜完成")
          ])) : vue.createCommentVNode("v-if", true)
        ])) : (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 1 },
          [
            vue.createCommentVNode(" 默认提示区域 "),
            vue.createElementVNode("view", { class: "default-hint" }, [
              vue.createElementVNode("image", {
                src: _imports_0,
                class: "hint-icon"
              }),
              vue.createElementVNode("text", { class: "hint-text" }, "请选择一张图片进行美颜")
            ])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        )),
        vue.createCommentVNode(" 操作按钮区域 "),
        vue.createElementVNode("view", { class: "action-buttons" }, [
          vue.createElementVNode("button", {
            class: "select-btn",
            onClick: $setup.selectImage,
            disabled: $setup.isProcessing
          }, [
            vue.createElementVNode(
              "text",
              { class: "btn-text" },
              vue.toDisplayString($setup.isProcessing ? "处理中..." : "选择图片"),
              1
              /* TEXT */
            )
          ], 8, ["disabled"]),
          vue.createElementVNode("button", {
            class: "save-btn",
            onClick: $setup.saveImage,
            disabled: !$setup.beautifiedImage || $setup.isProcessing
          }, [
            vue.createElementVNode("text", { class: "btn-text" }, "保存图片")
          ], 8, ["disabled"]),
          vue.createElementVNode("button", {
            class: "reset-btn",
            onClick: $setup.resetAll,
            disabled: $setup.isProcessing
          }, [
            vue.createElementVNode("text", { class: "btn-text" }, "重置")
          ], 8, ["disabled"])
        ])
      ]),
      vue.createCommentVNode(" 隐藏的canvas用于图片转换 "),
      vue.createElementVNode("canvas", {
        "canvas-id": "beautyCanvas",
        style: { "position": "absolute", "left": "-9999px", "width": "300px", "height": "300px" }
      })
    ]);
  }
  const PagesIndexAblum = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-27397d27"], ["__file", "/Users/jasonz/Code/bsf-ali-queen-demo/pages/index/ablum.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/index/image", PagesIndexImage);
  __definePage("pages/index/ablum", PagesIndexAblum);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/jasonz/Code/bsf-ali-queen-demo/App.vue"]]);
  const state = vue.reactive({
    selfieImgBase64: "",
    isJudge: false,
    loadComplete: false,
    selfieImgTemp: ""
  });
  const actions = {
    setSelfieImgBase64(base64) {
      state.selfieImgBase64 = base64;
    },
    setIsJudge(value) {
      state.isJudge = value;
    },
    setLoadComplete(value) {
      state.loadComplete = value;
    },
    setSelfieImgTemp(url) {
      state.selfieImgTemp = url;
    }
  };
  const store = {
    state,
    dispatch(action, payload) {
      if (actions[action]) {
        actions[action](payload);
      }
    }
  };
  function createApp() {
    const app = vue.createVueApp(App);
    app.config.globalProperties.$store = store;
    uni.$store = store;
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
