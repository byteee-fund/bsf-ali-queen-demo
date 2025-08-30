"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports2, module) {
      module.exports = Vue;
    }
  });

  // ../../../../../../Users/jasonz/Code/bsf-ali-queen-demo/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var import_vue = __toESM(require_vue());
  var ON_SHOW = "onShow";
  var ON_HIDE = "onHide";
  var ON_LAUNCH = "onLaunch";
  var ON_LOAD = "onLoad";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  var createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = (0, import_vue.getCurrentInstance)()) => {
    !import_vue.isInSSRComponentSetup && (0, import_vue.injectHook)(lifecycle, hook, target);
  };
  var onShow = /* @__PURE__ */ createLifeCycleHook(
    ON_SHOW,
    1 | 2
    /* HookFlags.PAGE */
  );
  var onHide = /* @__PURE__ */ createLifeCycleHook(
    ON_HIDE,
    1 | 2
    /* HookFlags.PAGE */
  );
  var onLaunch = /* @__PURE__ */ createLifeCycleHook(
    ON_LAUNCH,
    1
    /* HookFlags.APP */
  );
  var onLoad = /* @__PURE__ */ createLifeCycleHook(
    ON_LOAD,
    2
    /* HookFlags.PAGE */
  );
  var { registerUTSInterface, initUTSProxyClass, initUTSProxyFunction, initUTSPackageName, initUTSIndexClassName, initUTSClassName } = uni;
  var name = "bsfAliQueen";
  var moduleName = "\u963F\u91CC\u4E91\u7F8E\u989CSDK\u7684UTS\u63D2\u4EF6";
  var moduleType = "";
  var errMsg = ``;
  var is_uni_modules = true;
  var pkg = /* @__PURE__ */ initUTSPackageName(name, is_uni_modules);
  var cls = /* @__PURE__ */ initUTSIndexClassName(name, is_uni_modules);
  var exports = { __esModule: true };
  exports.BsfQueueCameraComponent = {};
  exports.initEngine = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "initEngineByJs", keepAlive: false, params: [{ "name": "initEngineOptions", "type": "UTSSDKModulesBsfAliQueenInitEngineOptionsJSONObject" }], return: "" });
  exports.destroyEngine = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "destroyEngineByJs", keepAlive: false, params: [], return: "" });
  exports.isEngineReady = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "isEngineReadyByJs", keepAlive: false, params: [], return: "" });
  exports.enableBeautyType = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "enableBeautyTypeByJs", keepAlive: false, params: [{ "name": "type", "type": "number" }, { "name": "enable", "type": "boolean" }], return: "" });
  exports.updateFaceShape = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "updateFaceShapeByJs", keepAlive: false, params: [{ "name": "param", "type": "number" }, { "name": "value", "type": "number" }], return: "" });
  exports.setBeautyParam = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "setBeautyParamByJs", keepAlive: false, params: [{ "name": "param", "type": "number" }, { "name": "value", "type": "number" }], return: "" });
  exports.beautifyImage = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "beautifyImageByJs", keepAlive: false, params: [{ "name": "beautifyImageOptions", "type": "UTSSDKModulesBsfAliQueenBeautifyImageOptionsJSONObject" }], return: "" });
  uni.registerUTSPlugin("uni_modules/bsf-ali-queen", exports);
  var bsfAliQueen_utsProxy = uni.requireUTSPlugin("uni_modules/bsf-ali-queen");
  var _imports_0 = "/static/imgs/icon/back-prev.png";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../../../Users/jasonz/Code/bsf-ali-queen-demo/unpackage/dist/dev/.nvue/pages/index/test.js
  var import_vue2 = __toESM(require_vue());
  var _imports_1 = "/static/imgs/photoLibrary/p1.png";
  var _imports_2 = "/static/imgs/tryOn/camera.png";
  var _imports_3 = "/static/imgs/tryOn/turn.png";
  var _style_0 = { "selfie-ctn": { "": { "position": "relative" } }, "camera-ctn": { ".selfie-ctn ": { "position": "relative" } }, "camera-preview": { ".selfie-ctn .camera-ctn ": { "zIndex": 0 } }, "back-box": { ".selfie-ctn .camera-ctn ": { "width": "80rpx", "height": "80rpx", "borderRadius": 50, "position": "absolute", "left": "44rpx", "top": "122rpx", "zIndex": 999 } }, "prev-icon": { ".selfie-ctn .camera-ctn .back-box ": { "width": "20rpx", "height": "36rpx", "position": "absolute", "left": "30rpx", "top": "22rpx" } }, "camera-frame": { ".selfie-ctn .camera-ctn ": { "width": "312rpx", "height": "408rpx", "position": "absolute", "left": "219rpx", "top": "268rpx" } }, "left-top": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderTopWidth": "4rpx", "borderTopStyle": "solid", "borderTopColor": "#ffffff", "borderLeftWidth": "4rpx", "borderLeftStyle": "solid", "borderLeftColor": "#ffffff", "borderTopLeftRadius": "40rpx", "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0, "position": "absolute", "left": 0, "top": 0 } }, "right-top": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderTopWidth": "4rpx", "borderTopStyle": "solid", "borderTopColor": "#ffffff", "borderRightWidth": "4rpx", "borderRightStyle": "solid", "borderRightColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": "40rpx", "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0, "position": "absolute", "right": 0, "top": 0 } }, "right-bottom": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderBottomWidth": "4rpx", "borderBottomStyle": "solid", "borderBottomColor": "#ffffff", "borderRightWidth": "4rpx", "borderRightStyle": "solid", "borderRightColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": "40rpx", "borderBottomLeftRadius": 0, "position": "absolute", "right": 0, "bottom": 0 } }, "left-bottom": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderBottomWidth": "4rpx", "borderBottomStyle": "solid", "borderBottomColor": "#ffffff", "borderLeftWidth": "4rpx", "borderLeftStyle": "solid", "borderLeftColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": "40rpx", "position": "absolute", "left": 0, "bottom": 0 } }, "operate-ctn": { ".selfie-ctn ": { "height": "624rpx", "backgroundColor": "#ffffff", "borderTopLeftRadius": "40rpx", "borderTopRightRadius": "40rpx", "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0, "position": "absolute", "left": 0, "bottom": 0 } }, "text-ctn": { ".selfie-ctn .operate-ctn ": { "display": "flex", "flexDirection": "column", "justifyContent": "center", "marginTop": "60rpx", "marginBottom": "120rpx" } }, "text-box": { ".selfie-ctn .operate-ctn .text-ctn ": { "fontSize": "28rpx", "fontWeight": "500", "color": "#4a4b4d", "textAlign": "center" } }, "operate-ul": { ".selfie-ctn .operate-ctn ": { "display": "flex", "flexDirection": "row", "alignItems": "flex-end", "justifyContent": "center" } }, "photoAlbum-li": { ".selfie-ctn .operate-ctn .operate-ul ": { "display": "flex", "flexDirection": "column", "alignItems": "center", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": 0, "paddingLeft": "20rpx" } }, "photoAlbum-img": { ".selfie-ctn .operate-ctn .operate-ul .photoAlbum-li ": { "width": "100rpx", "height": "100rpx", "borderRadius": 50 } }, "camera-li": { ".selfie-ctn .operate-ctn .operate-ul ": { "width": "160rpx", "height": "160rpx", "borderRadius": 50, "backgroundColor": "#242527", "marginTop": 0, "marginRight": "74rpx", "marginBottom": 0, "marginLeft": "74rpx", "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "camera-img": { ".selfie-ctn .operate-ctn .operate-ul .camera-li ": { "width": "68rpx", "height": "60rpx" } }, "turn-li": { ".selfie-ctn .operate-ctn .operate-ul ": { "display": "flex", "flexDirection": "column", "alignItems": "center", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": 0, "paddingLeft": "20rpx" } }, "turn-img-box": { ".selfie-ctn .operate-ctn .operate-ul .turn-li ": { "width": "100rpx", "height": "100rpx", "borderRadius": 50, "boxShadow": "0rpx 0rpx 20rpx rgba(122, 122, 122, 0.3)", "backgroundColor": "#ffffff", "overflow": "hidden", "display": "flex", "alignItems": "center", "justifyContent": "center" } }, "turn-img": { ".selfie-ctn .operate-ctn .operate-ul .turn-li .turn-img-box ": { "width": "50rpx", "height": "42rpx" } } };
  var _sfc_main = {
    __name: "test",
    setup(__props, { expose: __expose }) {
      __expose();
      const screenWidth = (0, import_vue2.ref)(0);
      const screenHeight = (0, import_vue2.ref)(0);
      const CameraHeight = (0, import_vue2.ref)(0);
      const showCamera = (0, import_vue2.ref)(false);
      const CameraPreviewRef = (0, import_vue2.ref)(null);
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
        formatAppLog("log", "at pages/index/test.nvue:86", "\u6743\u9650\u88AB\u62D2\u7EDD");
        uni.showToast({
          title: "\u4F60\u62D2\u7EDD\u4E86\u6743\u9650\u8BBE\u7F6E\uFF0C\u5373\u5C06\u8FD4\u56DE\u4E0A\u4E00\u9875",
          icon: "error",
          duration: 1e3
        });
      };
      const beautys = (0, import_vue2.ref)([
        { id: 1, name: "\u78E8\u76AE", value: 1, min: 0, max: 1 },
        { id: 2, name: "\u9510\u5316", value: 1, min: 0, max: 1 },
        { id: 3, name: "\u7F8E\u767D", value: 1, min: 0, max: 1 },
        { id: 4, name: "\u53BB\u773C\u888B", value: 1, min: 0, max: 1 },
        { id: 5, name: "\u53BB\u6CD5\u4EE4\u7EB9", value: 1, min: 0, max: 1 },
        { id: 6, name: "\u8272\u5361\u6EE4\u955C\u5F3A\u5EA6", value: 0, min: 0, max: 1 },
        { id: 7, name: "\u6F02\u767D\u7259\u9F7F", value: 1, min: 0, max: 1 },
        { id: 9, name: "\u816E\u7EA2", value: 1, min: 0, max: 1 },
        { id: 8, name: "\u53E3\u7EA2", value: 0.9, min: 0, max: 1 },
        { id: 10, name: "\u53E3\u7EA2\u8272\u76F8", value: 0.5, min: -0.5, max: 0.5 },
        { id: 11, name: "\u53E3\u7EA2\u9971\u548C\u5EA6", value: 0.4, min: 0, max: 1 },
        { id: 12, name: "\u53E3\u7EA2\u660E\u5EA6", value: 0.6, min: 0, max: 1 },
        { id: 13, name: "\u4EAE\u773C", value: 0, min: 0, max: 1 },
        { id: 14, name: "\u7EA2\u6DA6", value: 0, min: 0, max: 1 },
        { id: 15, name: "\u795B\u76B1\u7EB9", value: 1, min: 0, max: 1 },
        { id: 16, name: "\u795B\u6697\u6C89", value: 1, min: 0, max: 1 },
        { id: 20, name: "\u795B\u8116\u9888\u7EB9", value: 1, min: 0, max: 1 },
        { id: 21, name: "\u795B\u989D\u5934\u7EB9", value: 1, min: 0, max: 1 },
        { id: 22, name: "\u9971\u548C\u5EA6", value: 0, min: -1, max: 1 },
        { id: 23, name: "\u5BF9\u6BD4\u5EA6", value: 0, min: -1, max: 1 },
        { id: 24, name: "\u4EBA\u8138\u9A6C\u8D5B\u514B", value: 0, min: 0, max: 1 }
      ]);
      const startBeauty = () => {
        formatAppLog("log", "at pages/index/test.nvue:117", "\u5F00\u542F\u7F8E\u989C");
        (0, import_vue2.nextTick)(() => {
          setTimeout(() => {
            formatAppLog("log", "at pages/index/test.nvue:120", "\u5F00\u542F\u7F8E\u989C22");
            setDefaultBeautyParams();
          }, 2e3);
        });
      };
      const setDefaultBeautyParams = () => {
        if (!CameraPreviewRef.value)
          return;
        try {
          CameraPreviewRef.value.enableBeautyType(0, true, 1);
          CameraPreviewRef.value.enableBeautyType(1, true, 0);
          CameraPreviewRef.value.enableBeautyType(2, true, 0);
          CameraPreviewRef.value.enableBeautyType(3, true, 12);
          CameraPreviewRef.value.enableBeautyType(4, true, 0);
          CameraPreviewRef.value.enableBeautyType(5, true, 0);
          CameraPreviewRef.value.enableBeautyType(7, true, 0);
          CameraPreviewRef.value.enableBeautyType(8, true, 0);
          CameraPreviewRef.value.enableBeautyType(15, true, 0);
          CameraPreviewRef.value.enableBeautyType(16, true, 0);
          CameraPreviewRef.value.setBeautyParam(3, 1);
          beautys.value.forEach((item) => {
            CameraPreviewRef.value.setBeautyParam(item.id, item.value);
          });
          formatAppLog("log", "at pages/index/test.nvue:164", "Default beauty params set");
        } catch (error) {
          formatAppLog("error", "at pages/index/test.nvue:166", "Failed to set default beauty params:", error);
        }
      };
      const startFrame = () => {
        formatAppLog("log", "at pages/index/test.nvue:171", "\u5F00\u542F\u6293\u5E27");
        (0, import_vue2.nextTick)(() => {
          CameraPreviewRef.value.startFrame(true);
        });
      };
      const stopFrame = () => {
        formatAppLog("log", "at pages/index/test.nvue:178", "\u505C\u6B62\u6293\u5E27");
        (0, import_vue2.nextTick)(() => {
          CameraPreviewRef.value.stopFrame(true);
        });
      };
      const onShotCut = (res) => {
        CameraPreviewRef.value.toggleCamera();
      };
      const takePhoto = () => {
        CameraPreviewRef.value.takePhoto();
      };
      const onTakePhoto = (res) => {
        formatAppLog("log", "at pages/index/test.nvue:195", "\u62CD\u7167\u7ED3\u679C:", res);
        let base64Data = "";
        if (res.detail && res.detail.base64) {
          base64Data = res.detail.base64;
        } else if (res.base64) {
          base64Data = res.base64;
        } else if (res.data && res.data.base64) {
          base64Data = res.data.base64;
        } else {
          formatAppLog("error", "at pages/index/test.nvue:207", "\u672A\u627E\u5230base64\u6570\u636E");
          uni.showToast({
            title: "\u62CD\u7167\u5931\u8D25\uFF0C\u672A\u83B7\u53D6\u5230\u56FE\u7247\u6570\u636E",
            icon: "error"
          });
          return;
        }
        if (!base64Data.startsWith("data:")) {
          base64Data = `data:image/jpeg;base64,${base64Data}`;
        }
        formatAppLog("log", "at pages/index/test.nvue:220", "\u5904\u7406\u540E\u7684base64\u6570\u636E\u957F\u5EA6:", base64Data.length);
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
        formatAppLog("log", "at pages/index/test.nvue:237", "\u83B7\u53D6\u7F8E\u989C\u540E\u7684\u7167\u7247:", res);
      };
      const convertToBase64 = (tempFilePath) => {
        if (uni.getSystemInfoSync().platform === "android" || uni.getSystemInfoSync().platform === "ios") {
          plus.io.resolveLocalFileSystemURL(tempFilePath, (entry) => {
            entry.file((file) => {
              const reader = new plus.io.FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = (e) => {
                e.target.result;
                uploadImg();
              };
            });
          });
        }
      };
      const handleImage = (tempFilePath) => {
        plus.io.requestFileSystem(plus.io.PRIVATE_DOC, (fs) => {
          const pathArr = tempFilePath.split("/");
          const fileName = pathArr[pathArr.length - 1];
          const dstPath = `${fs.root.fullPath}/${fileName}`;
          plus.zip.compressImage(
            {
              src: tempFilePath,
              dst: dstPath,
              overwrite: true,
              format: "jpg",
              quality: 90
            },
            (success) => {
              const compressedPath = success.target;
              plus.io.resolveLocalFileSystemURL(compressedPath, (entry) => {
                entry.file((file) => {
                  const fileReader = new plus.io.FileReader();
                  fileReader.onloadend = (evt) => {
                    uploadImg(evt.target.result);
                  };
                  fileReader.onerror = (error) => {
                    formatAppLog("error", "at pages/index/test.nvue:281", "\u8BFB\u53D6\u6587\u4EF6\u5931\u8D25:", error);
                  };
                  fileReader.readAsDataURL(file);
                }, (error) => {
                  formatAppLog("error", "at pages/index/test.nvue:285", "\u83B7\u53D6\u6587\u4EF6\u5931\u8D25:", error);
                });
              }, (error) => {
                formatAppLog("error", "at pages/index/test.nvue:288", "\u89E3\u6790\u8DEF\u5F84\u5931\u8D25:", error);
              });
            },
            (error) => {
              formatAppLog("error", "at pages/index/test.nvue:292", "\u538B\u7F29\u56FE\u7247\u5931\u8D25:", error);
            }
          );
        }, (error) => {
          formatAppLog("error", "at pages/index/test.nvue:296", "\u83B7\u53D6\u6587\u4EF6\u7CFB\u7EDF\u5931\u8D25:", error);
        });
      };
      const uploadImg = (base64Img) => __async(this, null, function* () {
      });
      const getHairFace = (imgUrl) => __async(this, null, function* () {
      });
      const jumpPage = (imgUrl) => __async(this, null, function* () {
        uni.showLoading({
          title: "\u52A0\u8F7D\u4E2D...",
          mask: true
        });
        uni.$store.dispatch("setIsJudge", true);
        uni.$store.dispatch("setLoadComplete", false);
        uni.$store.dispatch("setSelfieImgTemp", imgUrl);
      });
      (0, import_vue2.watch)(() => uni.$store.state.loadComplete, (newVal, oldVal) => {
        if (newVal === true && uni.$store.state.isJudge === true) {
          (0, import_vue2.nextTick)(() => {
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
        formatAppLog("log", "at pages/index/test.nvue:361", "\u83B7\u53D6\u5E27\u6570\u636E:", res);
      };
      onHide(() => {
        formatAppLog("log", "at pages/index/test.nvue:365", "\u9875\u9762\u9690\u85CF");
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
      const __returned__ = { screenWidth, screenHeight, CameraHeight, showCamera, CameraPreviewRef, onPermissionDeny, beautys, startBeauty, setDefaultBeautyParams, startFrame, stopFrame, onShotCut, takePhoto, onTakePhoto, handlePhotoAlbum, onGetBeautyImage, convertToBase64, handleImage, uploadImg, getHairFace, jumpPage, onGetFrame, handleBack, get initEngine() {
        return bsfAliQueen_utsProxy.initEngine;
      }, get enableBeautyType() {
        return bsfAliQueen_utsProxy.enableBeautyType;
      }, get setBeautyParam() {
        return bsfAliQueen_utsProxy.setBeautyParam;
      }, get updateFaceShape() {
        return bsfAliQueen_utsProxy.updateFaceShape;
      }, get beautifyImage() {
        return bsfAliQueen_utsProxy.beautifyImage;
      }, ref: import_vue2.ref, onMounted: import_vue2.onMounted, nextTick: import_vue2.nextTick, watch: import_vue2.watch, get onLaunch() {
        return onLaunch;
      }, get onShow() {
        return onShow;
      }, get onHide() {
        return onHide;
      }, get onLoad() {
        return onLoad;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    resolveEasycom((0, import_vue2.resolveDynamicComponent)("bsf-queue-camera"), bsfAliQueen_utsProxy.BsfQueueCameraComponent);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)(
        "view",
        {
          class: "selfie-ctn",
          style: (0, import_vue2.normalizeStyle)({ width: `${$setup.screenWidth}px`, height: `${$setup.screenHeight}px` })
        },
        [
          (0, import_vue2.createElementVNode)(
            "view",
            {
              class: "camera-ctn",
              style: (0, import_vue2.normalizeStyle)({ width: `${$setup.screenWidth}px`, height: `${$setup.CameraHeight}px` })
            },
            [
              $setup.showCamera ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                "bsf-queue-camera",
                {
                  key: 0,
                  style: (0, import_vue2.normalizeStyle)({ width: `${$setup.screenWidth}px`, height: `${$setup.CameraHeight}px` }),
                  class: "camera-preview",
                  ref: "CameraPreviewRef",
                  "on:onPermissionDeny": $setup.onPermissionDeny,
                  "on:onTakePhoto": $setup.onTakePhoto,
                  "on:onGetFrame": $setup.onGetFrame,
                  "on:onBeautyImage": $setup.onGetBeautyImage,
                  "on:onPermissionPermit": _cache[0] || (_cache[0] = (...args) => _ctx.onPermissionPermit && _ctx.onPermissionPermit(...args))
                },
                null,
                36
                /* STYLE, NEED_HYDRATION */
              )) : (0, import_vue2.createCommentVNode)("v-if", true),
              (0, import_vue2.createCommentVNode)(" \u8FD4\u56DE "),
              (0, import_vue2.createElementVNode)("cover-view", {
                class: "back-box",
                onClick: $setup.handleBack
              }, [
                (0, import_vue2.createElementVNode)("cover-image", {
                  src: _imports_0,
                  class: "prev-icon"
                })
              ]),
              (0, import_vue2.createCommentVNode)(" \u53D6\u666F\u6846 "),
              (0, import_vue2.createElementVNode)("view", { class: "camera-frame" }, [
                (0, import_vue2.createElementVNode)("view", { class: "left-top" }),
                (0, import_vue2.createElementVNode)("view", { class: "right-top" }),
                (0, import_vue2.createElementVNode)("view", { class: "right-bottom" }),
                (0, import_vue2.createElementVNode)("view", { class: "left-bottom" })
              ])
            ],
            4
            /* STYLE */
          ),
          (0, import_vue2.createElementVNode)(
            "view",
            {
              class: "operate-ctn",
              style: (0, import_vue2.normalizeStyle)({ width: `${$setup.screenWidth}px` })
            },
            [
              (0, import_vue2.createElementVNode)("view", { class: "text-ctn" }, [
                (0, import_vue2.createElementVNode)("view", null, [
                  (0, import_vue2.createElementVNode)("u-text", { class: "text-box" }, "\u8BF7\u5C3D\u91CF\u6458\u4E0B\u773C\u955C\u3001\u5E3D\u5B50\u3001\u53E3\u7F69\u7B49\u906E\u6321\u7269")
                ]),
                (0, import_vue2.createElementVNode)("view", null, [
                  (0, import_vue2.createElementVNode)("u-text", { class: "text-box" }, "\u5728\u5149\u7EBF\u5145\u8DB3\u7684\u5730\u65B9\u62CD\u6444")
                ])
              ]),
              (0, import_vue2.createElementVNode)("view", { class: "operate-ul" }, [
                (0, import_vue2.createElementVNode)("view", { class: "photoAlbum-li" }, [
                  (0, import_vue2.createElementVNode)("u-image", {
                    src: _imports_1,
                    class: "photoAlbum-img",
                    onClick: $setup.handlePhotoAlbum
                  }),
                  (0, import_vue2.createElementVNode)("view", null, [
                    (0, import_vue2.createElementVNode)("u-text", { style: { "font-size": "24rpx", "font-weight": "500" } }, "\u76F8\u518C")
                  ])
                ]),
                (0, import_vue2.createElementVNode)("view", {
                  class: "camera-li",
                  onClick: $setup.takePhoto
                }, [
                  (0, import_vue2.createElementVNode)("u-image", {
                    src: _imports_2,
                    class: "camera-img"
                  })
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "turn-li" }, [
                  (0, import_vue2.createElementVNode)("view", {
                    class: "turn-img-box",
                    onClick: $setup.onShotCut
                  }, [
                    (0, import_vue2.createElementVNode)("u-image", {
                      src: _imports_3,
                      class: "turn-img"
                    })
                  ]),
                  (0, import_vue2.createElementVNode)("view", null, [
                    (0, import_vue2.createElementVNode)("u-text", { style: { "font-size": "24rpx", "font-weight": "500" } }, "\u7FFB\u8F6C")
                  ])
                ])
              ])
            ],
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var test = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/jasonz/Code/bsf-ali-queen-demo/pages/index/test.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/index/test";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    test.mpType = "page";
    const app = Vue.createPageApp(test, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...test.styles || []]));
    app.mount("#root");
  }
})();
