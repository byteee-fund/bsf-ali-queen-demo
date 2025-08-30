import { isInSSRComponentSetup, injectHook, getCurrentInstance } from "vue";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_LAUNCH = "onLaunch";
const ON_LOAD = "onLoad";
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
const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = getCurrentInstance()) => {
  !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
};
const onShow = /* @__PURE__ */ createLifeCycleHook(
  ON_SHOW,
  1 | 2
  /* HookFlags.PAGE */
);
const onHide = /* @__PURE__ */ createLifeCycleHook(
  ON_HIDE,
  1 | 2
  /* HookFlags.PAGE */
);
const onLaunch = /* @__PURE__ */ createLifeCycleHook(
  ON_LAUNCH,
  1
  /* HookFlags.APP */
);
const onLoad = /* @__PURE__ */ createLifeCycleHook(
  ON_LOAD,
  2
  /* HookFlags.PAGE */
);
const { registerUTSInterface, initUTSProxyClass, initUTSProxyFunction, initUTSPackageName, initUTSIndexClassName, initUTSClassName } = uni;
const name = "bsfAliQueen";
const moduleName = "阿里云美颜SDK的UTS插件";
const moduleType = "";
const errMsg = ``;
const is_uni_modules = true;
const pkg = /* @__PURE__ */ initUTSPackageName(name, is_uni_modules);
const cls = /* @__PURE__ */ initUTSIndexClassName(name, is_uni_modules);
const exports = { __esModule: true };
exports.BsfQueueCameraComponent = {};
exports.initEngine = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "initEngineByJs", keepAlive: false, params: [{ "name": "initEngineOptions", "type": "UTSSDKModulesBsfAliQueenInitEngineOptionsJSONObject" }], return: "" });
exports.destroyEngine = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "destroyEngineByJs", keepAlive: false, params: [], return: "" });
exports.isEngineReady = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "isEngineReadyByJs", keepAlive: false, params: [], return: "" });
exports.enableBeautyType = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "enableBeautyTypeByJs", keepAlive: false, params: [{ "name": "type", "type": "number" }, { "name": "enable", "type": "boolean" }], return: "" });
exports.updateFaceShape = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "updateFaceShapeByJs", keepAlive: false, params: [{ "name": "param", "type": "number" }, { "name": "value", "type": "number" }], return: "" });
exports.setBeautyParam = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "setBeautyParamByJs", keepAlive: false, params: [{ "name": "param", "type": "number" }, { "name": "value", "type": "number" }], return: "" });
exports.beautifyImage = /* @__PURE__ */ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: "beautifyImageByJs", keepAlive: false, params: [{ "name": "beautifyImageOptions", "type": "UTSSDKModulesBsfAliQueenBeautifyImageOptionsJSONObject" }], return: "" });
uni.registerUTSPlugin("uni_modules/bsf-ali-queen", exports);
const bsfAliQueen_utsProxy = uni.requireUTSPlugin("uni_modules/bsf-ali-queen");
const _imports_0 = "/static/imgs/icon/back-prev.png";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  _export_sfc as _,
  onHide as a,
  _imports_0 as b,
  onLaunch as c,
  onLoad as d,
  bsfAliQueen_utsProxy as e,
  formatAppLog as f,
  onShow as o,
  resolveEasycom as r
};
