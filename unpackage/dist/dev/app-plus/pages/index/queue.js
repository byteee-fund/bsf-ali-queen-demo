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

  // ../../../../../../Users/jasonz/Code/bsf-ali-queen-demo/unpackage/dist/dev/.nvue/pages/index/queue.js
  var import_vue2 = __toESM(require_vue());
  var _style_0 = { "selfie-ctn": { "": { "position": "relative" } }, "camera-ctn": { ".selfie-ctn ": { "position": "relative" } }, "camera-preview": { ".selfie-ctn .camera-ctn ": { "zIndex": 0 } }, "camera-frame": { ".selfie-ctn .camera-ctn ": { "width": "312rpx", "height": "408rpx", "position": "absolute", "left": "219rpx", "top": "268rpx" } }, "left-top": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderTopWidth": "4rpx", "borderTopStyle": "solid", "borderTopColor": "#ffffff", "borderLeftWidth": "4rpx", "borderLeftStyle": "solid", "borderLeftColor": "#ffffff", "borderTopLeftRadius": "40rpx", "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0, "position": "absolute", "left": 0, "top": 0 } }, "right-top": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderTopWidth": "4rpx", "borderTopStyle": "solid", "borderTopColor": "#ffffff", "borderRightWidth": "4rpx", "borderRightStyle": "solid", "borderRightColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": "40rpx", "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0, "position": "absolute", "right": 0, "top": 0 } }, "right-bottom": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderBottomWidth": "4rpx", "borderBottomStyle": "solid", "borderBottomColor": "#ffffff", "borderRightWidth": "4rpx", "borderRightStyle": "solid", "borderRightColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": "40rpx", "borderBottomLeftRadius": 0, "position": "absolute", "right": 0, "bottom": 0 } }, "left-bottom": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderBottomWidth": "4rpx", "borderBottomStyle": "solid", "borderBottomColor": "#ffffff", "borderLeftWidth": "4rpx", "borderLeftStyle": "solid", "borderLeftColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": "40rpx", "position": "absolute", "left": 0, "bottom": 0 } }, "list-container": { "": { "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "item": { ".list-container ": { "display": "flex", "flexDirection": "row", "alignItems": "center", "marginBottom": "20rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "borderRadius": "12rpx" } }, "label": { ".list-container ": { "width": "250rpx", "fontSize": "20rpx" } }, "stepper": { ".list-container ": { "flex": 1, "display": "flex", "flexDirection": "row", "marginLeft": "20rpx", "justifyContent": "space-between", "alignItems": "center" } }, "input": { ".list-container ": { "flex": 1, "minWidth": "100rpx", "textAlign": "center", "marginTop": 0, "marginRight": "10rpx", "marginBottom": 0, "marginLeft": "10rpx", "fontSize": "32rpx" } } };
  var _sfc_main = {
    __name: "queue",
    setup(__props, { expose: __expose }) {
      __expose();
      const screenWidth = (0, import_vue2.ref)(0);
      const screenHeight = (0, import_vue2.ref)(0);
      const CameraHeight = (0, import_vue2.ref)(0);
      const showCamera = (0, import_vue2.ref)(false);
      const beautyList = (0, import_vue2.computed)(() => {
        if (uni.getSystemInfoSync().platform === "android") {
          return [
            { id: 1, name: "\u78E8\u76AE", value: 0.3, min: 0, max: 1 },
            { id: 2, name: "\u9510\u5316", value: 0.3, min: 0, max: 1 },
            { id: 3, name: "\u7F8E\u767D", value: 0, min: 0, max: 1 },
            { id: 4, name: "\u53BB\u773C\u888B", value: 0.2, min: 0, max: 1 },
            { id: 5, name: "\u53BB\u6CD5\u4EE4\u7EB9", value: 0.3, min: 0, max: 1 },
            { id: 6, name: "\u8272\u5361\u6EE4\u955C\u5F3A\u5EA6", value: 0, min: 0, max: 1 },
            { id: 7, name: "\u6F02\u767D\u7259\u9F7F", value: 1, min: 0, max: 1 },
            { id: 9, name: "\u816E\u7EA2", value: 0, min: 0, max: 1 },
            { id: 8, name: "\u53E3\u7EA2", value: 0.3, min: 0, max: 1 },
            { id: 10, name: "\u53E3\u7EA2\u8272\u76F8", value: 0, min: -0.5, max: 0.5 },
            { id: 11, name: "\u53E3\u7EA2\u9971\u548C\u5EA6", value: 0.3, min: 0, max: 1 },
            { id: 12, name: "\u53E3\u7EA2\u660E\u5EA6", value: 0.1, min: 0, max: 1 },
            { id: 13, name: "\u4EAE\u773C", value: 0.6, min: 0, max: 1 },
            { id: 14, name: "\u7EA2\u6DA6", value: 0.2, min: 0, max: 1 },
            { id: 15, name: "\u795B\u76B1\u7EB9", value: 0.2, min: 0, max: 1 },
            { id: 16, name: "\u795B\u6697\u6C89", value: 0, min: 0, max: 1 },
            { id: 20, name: "\u795B\u8116\u9888\u7EB9", value: 0, min: 0, max: 1 },
            { id: 21, name: "\u795B\u989D\u5934\u7EB9", value: 0, min: 0, max: 1 },
            { id: 22, name: "\u9971\u548C\u5EA6", value: 0.2, min: -1, max: 1 },
            { id: 23, name: "\u5BF9\u6BD4\u5EA6", value: 0.2, min: -1, max: 1 },
            { id: 24, name: "\u4EBA\u8138\u9A6C\u8D5B\u514B", value: 0, min: 0, max: 1 }
          ];
        } else {
          return [
            { id: 1, name: "\u78E8\u76AE", value: 0.3, min: 0, max: 1 },
            { id: 2, name: "\u9510\u5316", value: 0.3, min: 0, max: 1 },
            { id: 3, name: "\u7F8E\u767D", value: 0, min: 0, max: 1 },
            { id: 4, name: "\u53BB\u773C\u888B", value: 0.2, min: 0, max: 1 },
            { id: 5, name: "\u53BB\u6CD5\u4EE4\u7EB9", value: 0.3, min: 0, max: 1 },
            { id: 6, name: "\u8272\u5361\u6EE4\u955C\u5F3A\u5EA6", value: 0, min: 0, max: 1 },
            { id: 7, name: "\u6F02\u767D\u7259\u9F7F", value: 1, min: 0, max: 1 },
            { id: 9, name: "\u816E\u7EA2", value: 0, min: 0, max: 1 },
            { id: 8, name: "\u53E3\u7EA2", value: 0.3, min: 0, max: 1 },
            { id: 10, name: "\u53E3\u7EA2\u8272\u76F8", value: 0, min: -0.5, max: 0.5 },
            { id: 11, name: "\u53E3\u7EA2\u9971\u548C\u5EA6", value: 0.3, min: 0, max: 1 },
            { id: 12, name: "\u53E3\u7EA2\u660E\u5EA6", value: 0.1, min: 0, max: 1 },
            { id: 13, name: "\u4EAE\u773C", value: 0.6, min: 0, max: 1 },
            { id: 14, name: "\u7EA2\u6DA6", value: 0.2, min: 0, max: 1 },
            { id: 15, name: "\u795B\u76B1\u7EB9", value: 0.1, min: 0, max: 1 },
            { id: 16, name: "\u795B\u6697\u6C89", value: 0, min: 0, max: 1 },
            { id: 20, name: "\u795B\u8116\u9888\u7EB9", value: 0, min: 0, max: 1 },
            { id: 21, name: "\u795B\u989D\u5934\u7EB9", value: 0, min: 0, max: 1 },
            { id: 22, name: "\u9971\u548C\u5EA6", value: 0.2, min: -1, max: 1 },
            { id: 23, name: "\u5BF9\u6BD4\u5EA6", value: 0.2, min: -1, max: 1 },
            { id: 24, name: "\u4EBA\u8138\u9A6C\u8D5B\u514B", value: 0, min: 0, max: 1 }
          ];
        }
      });
      const beautys = (0, import_vue2.ref)(beautyList.value);
      const shapes = (0, import_vue2.computed)(() => {
        if (uni.getSystemInfoSync().platform === "android") {
          return [
            { id: 0, name: "\u98A7\u9AA8", value: 0, min: 0, max: 1 },
            { id: 1, name: "\u524A\u8138", value: 0.3, min: 0, max: 1 },
            { id: 2, name: "\u7626\u8138", value: 0.3, min: 0, max: 1 },
            { id: 3, name: "\u8138\u957F", value: 0.2, min: 0, max: 1 },
            { id: 4, name: "\u4E0B\u5DF4\u7F29\u77ED", value: 0, min: -1, max: 1 },
            { id: 5, name: "\u4E0B\u5DF4\u62C9\u957F", value: 0, min: -1, max: 1 },
            { id: 6, name: "\u7626\u4E0B\u5DF4", value: 0, min: 0, max: 1 },
            { id: 7, name: "\u7626\u4E0B\u988C", value: 0.2, min: 0, max: 1 },
            { id: 8, name: "\u5927\u773C", value: 0.3, min: 0, max: 1 },
            { id: 9, name: "\u773C\u89D21", value: 0, min: 0, max: 1 },
            { id: 10, name: "\u773C\u8DDD", value: 0, min: -1, max: 1 },
            { id: 11, name: "\u62C9\u5BBD\u773C\u8DDD", value: 0, min: -1, max: 1 },
            { id: 12, name: "\u773C\u89D22", value: 0, min: -1, max: 1 },
            { id: 13, name: "\u773C\u775B\u9AD8\u5EA6", value: 0, min: -1, max: 1 },
            { id: 14, name: "\u7626\u9F3B", value: 0.2, min: 0, max: 1 },
            { id: 15, name: "\u9F3B\u7FFC", value: 0, min: 0, max: 1 },
            { id: 16, name: "\u9F3B\u957F", value: 0, min: -1, max: 1 },
            { id: 17, name: "\u9F3B\u5934\u957F", value: 0, min: -1, max: 1 },
            { id: 18, name: "\u5507\u5BBD", value: 0, min: -1, max: 1 },
            { id: 19, name: "\u5634\u5507\u5927\u5C0F", value: 0.1, min: -1, max: 1 },
            { id: 20, name: "\u5507\u9AD8", value: 0, min: -1, max: 1 },
            { id: 21, name: "\u4EBA\u4E2D", value: 0, min: -1, max: 1 },
            { id: 22, name: "\u53D1\u9645\u7EBF", value: 0, min: -1, max: 1 },
            { id: 23, name: "\u5634\u89D2\u4E0A\u626C", value: 0, min: 0, max: 1 },
            { id: 24, name: "\u6700\u5927\u503C\uFF08\u4FDD\u7559\uFF09", value: 0, min: 0, max: 1 }
          ];
        } else {
          return [
            { id: 0, name: "\u98A7\u9AA8", value: 0, min: 0, max: 1 },
            { id: 1, name: "\u524A\u8138", value: 0.3, min: 0, max: 1 },
            { id: 2, name: "\u7626\u8138", value: 0.3, min: 0, max: 1 },
            { id: 3, name: "\u8138\u957F", value: 0.2, min: 0, max: 1 },
            { id: 4, name: "\u4E0B\u5DF4\u7F29\u77ED", value: 0, min: -1, max: 1 },
            { id: 5, name: "\u4E0B\u5DF4\u62C9\u957F", value: 0, min: -1, max: 1 },
            { id: 6, name: "\u7626\u4E0B\u5DF4", value: 0, min: 0, max: 1 },
            { id: 7, name: "\u7626\u4E0B\u988C", value: 0.2, min: 0, max: 1 },
            { id: 8, name: "\u5927\u773C", value: 0.3, min: 0, max: 1 },
            { id: 9, name: "\u773C\u89D21", value: 0, min: 0, max: 1 },
            { id: 10, name: "\u773C\u8DDD", value: 0, min: -1, max: 1 },
            { id: 11, name: "\u62C9\u5BBD\u773C\u8DDD", value: 0, min: -1, max: 1 },
            { id: 12, name: "\u773C\u89D22", value: 0, min: -1, max: 1 },
            { id: 13, name: "\u773C\u775B\u9AD8\u5EA6", value: 0, min: -1, max: 1 },
            { id: 14, name: "\u7626\u9F3B", value: 0.2, min: 0, max: 1 },
            { id: 15, name: "\u9F3B\u7FFC", value: 0, min: 0, max: 1 },
            { id: 16, name: "\u9F3B\u957F", value: 0, min: -1, max: 1 },
            { id: 17, name: "\u9F3B\u5934\u957F", value: 0, min: -1, max: 1 },
            { id: 18, name: "\u5507\u5BBD", value: 0, min: -1, max: 1 },
            { id: 19, name: "\u5634\u5507\u5927\u5C0F", value: 0.1, min: -1, max: 1 },
            { id: 20, name: "\u5507\u9AD8", value: 0, min: -1, max: 1 },
            { id: 21, name: "\u4EBA\u4E2D", value: 0, min: -1, max: 1 },
            { id: 22, name: "\u53D1\u9645\u7EBF", value: 0, min: -1, max: 1 },
            { id: 23, name: "\u5634\u89D2\u4E0A\u626C", value: 0, min: 0, max: 1 },
            { id: 24, name: "\u6700\u5927\u503C\uFF08\u4FDD\u7559\uFF09", value: 0, min: 0, max: 1 }
          ];
        }
      });
      const increase = (index, arr) => {
        const item = arr[index];
        if (item.value < item.max) {
          item.value = Number((item.value + 0.1).toFixed(2));
          handleChange(index, arr);
        }
      };
      const decrease = (index, arr) => {
        const item = arr[index];
        if (item.value > item.min) {
          item.value = Number((item.value - 0.1).toFixed(2));
          formatAppLog("log", "at pages/index/queue.nvue:191", item.value);
          handleChange(index, arr);
        }
      };
      const handleChange = (index, arr) => {
        const item = arr[index];
        item.value = Number(item.value);
        formatAppLog("log", "at pages/index/queue.nvue:202", `\u53D8\u66F4\uFF1A${item.name} \u5F53\u524D\u503C ${item.value}`);
        if (arr[0].name === "\u98A7\u9AA8") {
          CameraPreviewRef.value.updateFaceShape(item.id, item.value);
        } else {
          CameraPreviewRef.value.setBeautyParam(item.id, item.value);
        }
      };
      const onInput = (e, index) => {
        let val = e.detail.value;
        const validPattern = /^(\d*\.\d{0,1})?$/;
        if (validPattern.test(val) || val === "") {
          beautys.value[index].value = val;
        } else {
          beautys.value[index].value = 0;
        }
      };
      const CameraPreviewRef = (0, import_vue2.ref)(null);
      onShow(() => {
        formatAppLog("log", "at pages/index/queue.nvue:229", "queen onShow");
        const systemInfo = uni.getSystemInfoSync();
        screenWidth.value = systemInfo.windowWidth;
        screenHeight.value = systemInfo.windowHeight;
        CameraHeight.value = screenHeight.value - uni.upx2px(624);
        showCamera.value = true;
      });
      onHide(() => {
        if (CameraPreviewRef.value) {
          CameraPreviewRef.value.destoryCamera();
        }
        showCamera.value = false;
      });
      const onPermissionDeny = () => {
        formatAppLog("log", "at pages/index/queue.nvue:254", "\u6743\u9650\u88AB\u62D2\u7EDD");
        uni.showToast({
          title: "\u4F60\u62D2\u7EDD\u4E86\u6743\u9650\u8BBE\u7F6E\uFF0C\u5373\u5C06\u8FD4\u56DE\u4E0A\u4E00\u9875",
          icon: "error",
          duration: 1e3
        });
      };
      let isBeauty = (0, import_vue2.ref)(false);
      const startBeauty = () => {
        formatAppLog("log", "at pages/index/queue.nvue:264", "\u5F00\u542F\u7F8E\u989C");
        (0, import_vue2.nextTick)(() => {
          CameraPreviewRef.value.toggleBeauty();
          isBeauty.value = true;
          setDefaultBeautyParams();
        });
      };
      const toggleBeauty = () => {
        isBeauty.value = !isBeauty.value;
        CameraPreviewRef.value.toggleBeauty();
        if (isBeauty.value) {
          setDefaultBeautyParams();
        }
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
          CameraPreviewRef.value.enableBeautyType(12, true, 12);
          CameraPreviewRef.value.enableBeautyType(15, true, 0);
          CameraPreviewRef.value.enableBeautyType(16, true, 0);
          beautys.value.forEach((item) => {
            CameraPreviewRef.value.setBeautyParam(item.id, item.value);
          });
          shapes.value.forEach((item) => {
            CameraPreviewRef.value.updateFaceShape(item.id, item.value);
          });
          formatAppLog("log", "at pages/index/queue.nvue:314", "Default beauty params set");
        } catch (error) {
          formatAppLog("error", "at pages/index/queue.nvue:316", "Failed to set default beauty params:", error);
        }
      };
      const startFrame = () => {
        formatAppLog("log", "at pages/index/queue.nvue:321", "\u5F00\u542F\u6293\u5E27");
        (0, import_vue2.nextTick)(() => {
          CameraPreviewRef.value.startFrame(true);
        });
      };
      const stopFrame = () => {
        formatAppLog("log", "at pages/index/queue.nvue:328", "\u505C\u6B62\u6293\u5E27");
        (0, import_vue2.nextTick)(() => {
          CameraPreviewRef.value.stopFrame(true);
        });
      };
      const onShotCut = (res) => {
        CameraPreviewRef.value.toggleCamera();
      };
      const takePhoto = () => {
        CameraPreviewRef.value.takePhoto(
          {
            isExif: true,
            //是否写入exif信息
            quality: 100,
            //返回图像质量 默认90  1-100
            width: 0,
            //返回图像宽度 默认300  原图设置0
            returnFile: false,
            //是否返回文件  默认false
            crop: []
            // crop ? [0, 0, 100, 100 * (this.scale.split(':')[1] / this.scale.split(':')[0])] : [] //成像自动裁剪，可以不传  案例计算为上半部分的正方形  0 0 50 50 表示右上方1/4区域
          },
          (res) => {
            uni.$store.dispatch("setSelfieImgBase64", `data:image/jpg;base64,${res.data}`);
            uni.navigateTo({
              url: "/pages/index/tryOn/photoConfirm"
            });
            stopFrame();
            uni.hideLoading();
          }
        );
      };
      const handlePhotoAlbum = () => {
        uni.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album"],
          //从相册选择
          success: function(res) {
            return __async(this, null, function* () {
              handleImage(res.tempFilePaths[0]);
            });
          }
        });
      };
      const processImageBeauty = () => {
        try {
          uni.chooseImage({
            count: 1,
            success: (res) => {
              const imagePath = res.tempFilePaths[0];
              uni.showToast({
                title: "\u56FE\u7247\u7F8E\u989C\u529F\u80FD\u5F85\u5B9E\u73B0",
                icon: "none"
              });
              formatAppLog("log", "at pages/index/queue.nvue:399", "Selected image path:", imagePath);
            },
            fail: (error) => {
              formatAppLog("error", "at pages/index/queue.nvue:402", "Failed to choose image:", error);
              uni.showToast({
                title: "\u9009\u62E9\u56FE\u7247\u5931\u8D25",
                icon: "error"
              });
            }
          });
        } catch (error) {
          formatAppLog("error", "at pages/index/queue.nvue:410", "Failed to process image beauty:", error);
          uni.showToast({
            title: "\u56FE\u7247\u7F8E\u989C\u5904\u7406\u5931\u8D25",
            icon: "error"
          });
        }
      };
      const convertToBase64 = (tempFilePath) => {
        if (uni.getSystemInfoSync().platform === "android" || uni.getSystemInfoSync().platform === "ios") {
          plus.io.resolveLocalFileSystemURL(tempFilePath, (entry) => {
            entry.file((file) => {
              const reader = new plus.io.FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = (e) => {
                const base64Img = e.target.result;
                uploadImg(base64Img);
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
                    formatAppLog("error", "at pages/index/queue.nvue:458", "\u8BFB\u53D6\u6587\u4EF6\u5931\u8D25:", error);
                  };
                  fileReader.readAsDataURL(file);
                }, (error) => {
                  formatAppLog("error", "at pages/index/queue.nvue:462", "\u83B7\u53D6\u6587\u4EF6\u5931\u8D25:", error);
                });
              }, (error) => {
                formatAppLog("error", "at pages/index/queue.nvue:465", "\u89E3\u6790\u8DEF\u5F84\u5931\u8D25:", error);
              });
            },
            (error) => {
              formatAppLog("error", "at pages/index/queue.nvue:469", "\u538B\u7F29\u56FE\u7247\u5931\u8D25:", error);
            }
          );
        }, (error) => {
          formatAppLog("error", "at pages/index/queue.nvue:473", "\u83B7\u53D6\u6587\u4EF6\u7CFB\u7EDF\u5931\u8D25:", error);
        });
      };
      const uploadImg = (base64Img) => __async(this, null, function* () {
        try {
          const res = yield api.base64ToImg({
            base64: base64Img
          });
          if (res == null ? void 0 : res.data) {
            getHairFace(res == null ? void 0 : res.data);
          }
        } catch (err) {
          formatAppLog("log", "at pages/index/queue.nvue:487", err);
        }
      });
      const getHairFace = (imgUrl) => __async(this, null, function* () {
        var _a;
        try {
          let params = {
            img: imgUrl,
            isLocal: true
          };
          const res = yield api.getHairFace(params);
          if ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.faceDetail) {
            setData("selfieImgUrl", imgUrl);
            (0, import_vue2.nextTick)(() => {
              jumpPage(imgUrl);
            });
          }
        } catch (err) {
          formatAppLog("log", "at pages/index/queue.nvue:506", "err", err);
        }
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
      const handleBack = () => {
        uni.navigateBack({
          delta: 1
          // 返回上一页
        });
      };
      const __returned__ = { screenWidth, screenHeight, CameraHeight, showCamera, beautyList, beautys, shapes, increase, decrease, handleChange, onInput, CameraPreviewRef, onPermissionDeny, get isBeauty() {
        return isBeauty;
      }, set isBeauty(v) {
        isBeauty = v;
      }, startBeauty, toggleBeauty, setDefaultBeautyParams, startFrame, stopFrame, onShotCut, takePhoto, handlePhotoAlbum, processImageBeauty, convertToBase64, handleImage, uploadImg, getHairFace, jumpPage, handleBack, ref: import_vue2.ref, computed: import_vue2.computed, onMounted: import_vue2.onMounted, onUnmounted: import_vue2.onUnmounted, nextTick: import_vue2.nextTick, watch: import_vue2.watch, get onLaunch() {
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
    const _component_button = (0, import_vue2.resolveComponent)("button");
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
                  "on:onTakePhoto": _cache[0] || (_cache[0] = (...args) => _ctx.onTakePhoto && _ctx.onTakePhoto(...args)),
                  "on:onGetFrame": _cache[1] || (_cache[1] = (...args) => _ctx.onGetFrame && _ctx.onGetFrame(...args))
                },
                null,
                36
                /* STYLE, NEED_HYDRATION */
              )) : (0, import_vue2.createCommentVNode)("v-if", true),
              (0, import_vue2.createCommentVNode)(" \u8FD4\u56DE "),
              (0, import_vue2.createElementVNode)("cover-view", {
                class: "prevIcon-box",
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
          (0, import_vue2.createCommentVNode)(" \u8BBE\u7F6E\u7F8E\u989C\u53C2\u6570 "),
          (0, import_vue2.createElementVNode)(
            "scroll-view",
            {
              class: "list-container",
              scrollY: "",
              style: (0, import_vue2.normalizeStyle)({ height: `${$setup.screenHeight - $setup.CameraHeight}px` })
            },
            [
              (0, import_vue2.createCommentVNode)(" toggleBeauty "),
              (0, import_vue2.createVNode)(_component_button, { onClick: $setup.toggleBeauty }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createTextVNode)(
                    (0, import_vue2.toDisplayString)($setup.isBeauty ? "\u5DF2\u5173\u95ED" : "\u5DF2\u6253\u5F00") + "\u7F8E\u989C\uFF08\u4F1A\u91CD\u7F6E\uFF09 ",
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_button, { onClick: $setup.onShotCut }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createTextVNode)("\u5207\u6362\u6444\u50CF\u5934")
                ]),
                _: 1
                /* STABLE */
              }),
              ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                import_vue2.Fragment,
                null,
                (0, import_vue2.renderList)($setup.beautys, (item, index) => {
                  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                    class: "item",
                    key: item.id
                  }, [
                    (0, import_vue2.createElementVNode)("view", { class: "label" }, [
                      (0, import_vue2.createElementVNode)(
                        "u-text",
                        null,
                        (0, import_vue2.toDisplayString)(item.name),
                        1
                        /* TEXT */
                      )
                    ]),
                    (0, import_vue2.createElementVNode)("view", { class: "stepper" }, [
                      (0, import_vue2.createVNode)(_component_button, {
                        onClick: ($event) => $setup.decrease(index, $setup.beautys),
                        disabled: item.value <= item.min
                      }, {
                        default: (0, import_vue2.withCtx)(() => [
                          (0, import_vue2.createTextVNode)("-")
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["onClick", "disabled"]),
                      (0, import_vue2.createElementVNode)("u-input", {
                        class: "input",
                        type: "text",
                        modelValue: item.value,
                        onInput: [($event) => item.value = $event.detail.value, ($event) => $setup.onInput($event, index)],
                        onChange: ($event) => $setup.handleChange(index, $setup.beautys),
                        min: item.min,
                        max: item.max
                      }, null, 40, ["modelValue", "onInput", "onChange", "min", "max"]),
                      (0, import_vue2.createVNode)(_component_button, {
                        onClick: ($event) => $setup.increase(index, $setup.beautys),
                        disabled: item.value >= item.max
                      }, {
                        default: (0, import_vue2.withCtx)(() => [
                          (0, import_vue2.createTextVNode)("+")
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["onClick", "disabled"])
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                import_vue2.Fragment,
                null,
                (0, import_vue2.renderList)($setup.shapes, (item, index) => {
                  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                    class: "item",
                    key: item.id
                  }, [
                    (0, import_vue2.createElementVNode)("view", { class: "label" }, [
                      (0, import_vue2.createElementVNode)(
                        "u-text",
                        null,
                        (0, import_vue2.toDisplayString)(item.name),
                        1
                        /* TEXT */
                      )
                    ]),
                    (0, import_vue2.createElementVNode)("view", { class: "stepper" }, [
                      (0, import_vue2.createVNode)(_component_button, {
                        onClick: ($event) => $setup.decrease(index, $setup.shapes),
                        disabled: item.value <= item.min
                      }, {
                        default: (0, import_vue2.withCtx)(() => [
                          (0, import_vue2.createTextVNode)("-")
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["onClick", "disabled"]),
                      (0, import_vue2.createElementVNode)("u-input", {
                        class: "input",
                        type: "text",
                        modelValue: item.value,
                        onInput: [($event) => item.value = $event.detail.value, ($event) => $setup.onInput($event, index)],
                        onChange: ($event) => $setup.handleChange(index, $setup.shapes),
                        min: item.min,
                        max: item.max
                      }, null, 40, ["modelValue", "onInput", "onChange", "min", "max"]),
                      (0, import_vue2.createVNode)(_component_button, {
                        onClick: ($event) => $setup.increase(index, $setup.shapes),
                        disabled: item.value >= item.max
                      }, {
                        default: (0, import_vue2.withCtx)(() => [
                          (0, import_vue2.createTextVNode)("+")
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["onClick", "disabled"])
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
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
  var queue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/jasonz/Code/bsf-ali-queen-demo/pages/index/queue.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/index/queue";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    queue.mpType = "page";
    const app = Vue.createPageApp(queue, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...queue.styles || []]));
    app.mount("#root");
  }
})();
