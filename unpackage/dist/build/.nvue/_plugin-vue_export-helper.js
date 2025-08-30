import { isInSSRComponentSetup, injectHook, getCurrentInstance } from "vue";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
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
  bsfAliQueen_utsProxy as c,
  formatAppLog as f,
  onShow as o,
  resolveEasycom as r
};
