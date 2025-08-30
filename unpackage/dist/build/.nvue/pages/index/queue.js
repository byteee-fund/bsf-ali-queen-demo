import { _ as _export_sfc, o as onShow, f as formatAppLog, a as onHide, r as resolveEasycom, b as _imports_0, c as bsfAliQueen_utsProxy } from "../../_plugin-vue_export-helper.js";
import { ref, computed, watch, nextTick, resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, createCommentVNode, createVNode, withCtx, createTextVNode, toDisplayString, unref, Fragment, renderList } from "vue";
const _style_0 = { "selfie-ctn": { "": { "position": "relative" } }, "camera-ctn": { ".selfie-ctn ": { "position": "relative" } }, "camera-preview": { ".selfie-ctn .camera-ctn ": { "zIndex": 0 } }, "camera-frame": { ".selfie-ctn .camera-ctn ": { "width": "312rpx", "height": "408rpx", "position": "absolute", "left": "219rpx", "top": "268rpx" } }, "left-top": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderTopWidth": "4rpx", "borderTopStyle": "solid", "borderTopColor": "#ffffff", "borderLeftWidth": "4rpx", "borderLeftStyle": "solid", "borderLeftColor": "#ffffff", "borderTopLeftRadius": "40rpx", "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0, "position": "absolute", "left": 0, "top": 0 } }, "right-top": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderTopWidth": "4rpx", "borderTopStyle": "solid", "borderTopColor": "#ffffff", "borderRightWidth": "4rpx", "borderRightStyle": "solid", "borderRightColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": "40rpx", "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0, "position": "absolute", "right": 0, "top": 0 } }, "right-bottom": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderBottomWidth": "4rpx", "borderBottomStyle": "solid", "borderBottomColor": "#ffffff", "borderRightWidth": "4rpx", "borderRightStyle": "solid", "borderRightColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": "40rpx", "borderBottomLeftRadius": 0, "position": "absolute", "right": 0, "bottom": 0 } }, "left-bottom": { ".selfie-ctn .camera-ctn .camera-frame ": { "width": "80rpx", "height": "80rpx", "borderBottomWidth": "4rpx", "borderBottomStyle": "solid", "borderBottomColor": "#ffffff", "borderLeftWidth": "4rpx", "borderLeftStyle": "solid", "borderLeftColor": "#ffffff", "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": "40rpx", "position": "absolute", "left": 0, "bottom": 0 } }, "list-container": { "": { "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "item": { ".list-container ": { "display": "flex", "flexDirection": "row", "alignItems": "center", "marginBottom": "20rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "borderRadius": "12rpx" } }, "label": { ".list-container ": { "width": "250rpx", "fontSize": "20rpx" } }, "stepper": { ".list-container ": { "flex": 1, "display": "flex", "flexDirection": "row", "marginLeft": "20rpx", "justifyContent": "space-between", "alignItems": "center" } }, "input": { ".list-container ": { "flex": 1, "minWidth": "100rpx", "textAlign": "center", "marginTop": 0, "marginRight": "10rpx", "marginBottom": 0, "marginLeft": "10rpx", "fontSize": "32rpx" } } };
const _sfc_main = {
  __name: "queue",
  setup(__props) {
    const screenWidth = ref(0);
    const screenHeight = ref(0);
    const CameraHeight = ref(0);
    const showCamera = ref(false);
    const beautyList = computed(() => {
      if (uni.getSystemInfoSync().platform === "android") {
        return [
          { id: 1, name: "磨皮", value: 0.3, min: 0, max: 1 },
          { id: 2, name: "锐化", value: 0.3, min: 0, max: 1 },
          { id: 3, name: "美白", value: 0, min: 0, max: 1 },
          { id: 4, name: "去眼袋", value: 0.2, min: 0, max: 1 },
          { id: 5, name: "去法令纹", value: 0.3, min: 0, max: 1 },
          { id: 6, name: "色卡滤镜强度", value: 0, min: 0, max: 1 },
          { id: 7, name: "漂白牙齿", value: 1, min: 0, max: 1 },
          { id: 9, name: "腮红", value: 0, min: 0, max: 1 },
          { id: 8, name: "口红", value: 0.3, min: 0, max: 1 },
          { id: 10, name: "口红色相", value: 0, min: -0.5, max: 0.5 },
          { id: 11, name: "口红饱和度", value: 0.3, min: 0, max: 1 },
          { id: 12, name: "口红明度", value: 0.1, min: 0, max: 1 },
          { id: 13, name: "亮眼", value: 0.6, min: 0, max: 1 },
          { id: 14, name: "红润", value: 0.2, min: 0, max: 1 },
          { id: 15, name: "祛皱纹", value: 0.2, min: 0, max: 1 },
          { id: 16, name: "祛暗沉", value: 0, min: 0, max: 1 },
          { id: 20, name: "祛脖颈纹", value: 0, min: 0, max: 1 },
          { id: 21, name: "祛额头纹", value: 0, min: 0, max: 1 },
          { id: 22, name: "饱和度", value: 0.2, min: -1, max: 1 },
          { id: 23, name: "对比度", value: 0.2, min: -1, max: 1 },
          { id: 24, name: "人脸马赛克", value: 0, min: 0, max: 1 }
        ];
      } else {
        return [
          { id: 1, name: "磨皮", value: 0.3, min: 0, max: 1 },
          { id: 2, name: "锐化", value: 0.3, min: 0, max: 1 },
          { id: 3, name: "美白", value: 0, min: 0, max: 1 },
          { id: 4, name: "去眼袋", value: 0.2, min: 0, max: 1 },
          { id: 5, name: "去法令纹", value: 0.3, min: 0, max: 1 },
          { id: 6, name: "色卡滤镜强度", value: 0, min: 0, max: 1 },
          { id: 7, name: "漂白牙齿", value: 1, min: 0, max: 1 },
          { id: 9, name: "腮红", value: 0, min: 0, max: 1 },
          { id: 8, name: "口红", value: 0.3, min: 0, max: 1 },
          { id: 10, name: "口红色相", value: 0, min: -0.5, max: 0.5 },
          { id: 11, name: "口红饱和度", value: 0.3, min: 0, max: 1 },
          { id: 12, name: "口红明度", value: 0.1, min: 0, max: 1 },
          { id: 13, name: "亮眼", value: 0.6, min: 0, max: 1 },
          { id: 14, name: "红润", value: 0.2, min: 0, max: 1 },
          { id: 15, name: "祛皱纹", value: 0.1, min: 0, max: 1 },
          { id: 16, name: "祛暗沉", value: 0, min: 0, max: 1 },
          { id: 20, name: "祛脖颈纹", value: 0, min: 0, max: 1 },
          { id: 21, name: "祛额头纹", value: 0, min: 0, max: 1 },
          { id: 22, name: "饱和度", value: 0.2, min: -1, max: 1 },
          { id: 23, name: "对比度", value: 0.2, min: -1, max: 1 },
          { id: 24, name: "人脸马赛克", value: 0, min: 0, max: 1 }
        ];
      }
    });
    const beautys = ref(beautyList.value);
    const shapes = computed(() => {
      if (uni.getSystemInfoSync().platform === "android") {
        return [
          { id: 0, name: "颧骨", value: 0, min: 0, max: 1 },
          { id: 1, name: "削脸", value: 0.3, min: 0, max: 1 },
          { id: 2, name: "瘦脸", value: 0.3, min: 0, max: 1 },
          { id: 3, name: "脸长", value: 0.2, min: 0, max: 1 },
          { id: 4, name: "下巴缩短", value: 0, min: -1, max: 1 },
          { id: 5, name: "下巴拉长", value: 0, min: -1, max: 1 },
          { id: 6, name: "瘦下巴", value: 0, min: 0, max: 1 },
          { id: 7, name: "瘦下颌", value: 0.2, min: 0, max: 1 },
          { id: 8, name: "大眼", value: 0.3, min: 0, max: 1 },
          { id: 9, name: "眼角1", value: 0, min: 0, max: 1 },
          { id: 10, name: "眼距", value: 0, min: -1, max: 1 },
          { id: 11, name: "拉宽眼距", value: 0, min: -1, max: 1 },
          { id: 12, name: "眼角2", value: 0, min: -1, max: 1 },
          { id: 13, name: "眼睛高度", value: 0, min: -1, max: 1 },
          { id: 14, name: "瘦鼻", value: 0.2, min: 0, max: 1 },
          { id: 15, name: "鼻翼", value: 0, min: 0, max: 1 },
          { id: 16, name: "鼻长", value: 0, min: -1, max: 1 },
          { id: 17, name: "鼻头长", value: 0, min: -1, max: 1 },
          { id: 18, name: "唇宽", value: 0, min: -1, max: 1 },
          { id: 19, name: "嘴唇大小", value: 0.1, min: -1, max: 1 },
          { id: 20, name: "唇高", value: 0, min: -1, max: 1 },
          { id: 21, name: "人中", value: 0, min: -1, max: 1 },
          { id: 22, name: "发际线", value: 0, min: -1, max: 1 },
          { id: 23, name: "嘴角上扬", value: 0, min: 0, max: 1 },
          { id: 24, name: "最大值（保留）", value: 0, min: 0, max: 1 }
        ];
      } else {
        return [
          { id: 0, name: "颧骨", value: 0, min: 0, max: 1 },
          { id: 1, name: "削脸", value: 0.3, min: 0, max: 1 },
          { id: 2, name: "瘦脸", value: 0.3, min: 0, max: 1 },
          { id: 3, name: "脸长", value: 0.2, min: 0, max: 1 },
          { id: 4, name: "下巴缩短", value: 0, min: -1, max: 1 },
          { id: 5, name: "下巴拉长", value: 0, min: -1, max: 1 },
          { id: 6, name: "瘦下巴", value: 0, min: 0, max: 1 },
          { id: 7, name: "瘦下颌", value: 0.2, min: 0, max: 1 },
          { id: 8, name: "大眼", value: 0.3, min: 0, max: 1 },
          { id: 9, name: "眼角1", value: 0, min: 0, max: 1 },
          { id: 10, name: "眼距", value: 0, min: -1, max: 1 },
          { id: 11, name: "拉宽眼距", value: 0, min: -1, max: 1 },
          { id: 12, name: "眼角2", value: 0, min: -1, max: 1 },
          { id: 13, name: "眼睛高度", value: 0, min: -1, max: 1 },
          { id: 14, name: "瘦鼻", value: 0.2, min: 0, max: 1 },
          { id: 15, name: "鼻翼", value: 0, min: 0, max: 1 },
          { id: 16, name: "鼻长", value: 0, min: -1, max: 1 },
          { id: 17, name: "鼻头长", value: 0, min: -1, max: 1 },
          { id: 18, name: "唇宽", value: 0, min: -1, max: 1 },
          { id: 19, name: "嘴唇大小", value: 0.1, min: -1, max: 1 },
          { id: 20, name: "唇高", value: 0, min: -1, max: 1 },
          { id: 21, name: "人中", value: 0, min: -1, max: 1 },
          { id: 22, name: "发际线", value: 0, min: -1, max: 1 },
          { id: 23, name: "嘴角上扬", value: 0, min: 0, max: 1 },
          { id: 24, name: "最大值（保留）", value: 0, min: 0, max: 1 }
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
      formatAppLog("log", "at pages/index/queue.nvue:202", `变更：${item.name} 当前值 ${item.value}`);
      if (arr[0].name === "颧骨") {
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
    const CameraPreviewRef = ref(null);
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
      formatAppLog("log", "at pages/index/queue.nvue:254", "权限被拒绝");
      uni.showToast({
        title: "你拒绝了权限设置，即将返回上一页",
        icon: "error",
        duration: 1e3
      });
    };
    let isBeauty = ref(false);
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
    const onShotCut = (res) => {
      CameraPreviewRef.value.toggleCamera();
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
    const handleBack = () => {
      uni.navigateBack({
        delta: 1
        // 返回上一页
      });
    };
    return (_ctx, _cache) => {
      resolveEasycom(resolveDynamicComponent("bsf-queue-camera"), bsfAliQueen_utsProxy.BsfQueueCameraComponent);
      const _component_button = resolveComponent("button");
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
              "on:onTakePhoto": _cache[0] || (_cache[0] = (...args) => _ctx.onTakePhoto && _ctx.onTakePhoto(...args)),
              "on:onGetFrame": _cache[1] || (_cache[1] = (...args) => _ctx.onGetFrame && _ctx.onGetFrame(...args))
            }, null, 36)) : createCommentVNode("", true),
            createElementVNode("cover-view", {
              class: "prevIcon-box",
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
          createElementVNode("scroll-view", {
            class: "list-container",
            scrollY: "",
            style: normalizeStyle({ height: `${screenHeight.value - CameraHeight.value}px` })
          }, [
            createVNode(_component_button, { onClick: toggleBeauty }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(isBeauty) ? "已关闭" : "已打开") + "美颜（会重置） ", 1)
              ]),
              _: 1
            }),
            createVNode(_component_button, { onClick: onShotCut }, {
              default: withCtx(() => [
                createTextVNode("切换摄像头")
              ]),
              _: 1
            }),
            (openBlock(true), createElementBlock(Fragment, null, renderList(beautys.value, (item, index) => {
              return openBlock(), createElementBlock("view", {
                class: "item",
                key: item.id
              }, [
                createElementVNode("view", { class: "label" }, [
                  createElementVNode("u-text", null, toDisplayString(item.name), 1)
                ]),
                createElementVNode("view", { class: "stepper" }, [
                  createVNode(_component_button, {
                    onClick: ($event) => decrease(index, beautys.value),
                    disabled: item.value <= item.min
                  }, {
                    default: withCtx(() => [
                      createTextVNode("-")
                    ]),
                    _: 2
                  }, 1032, ["onClick", "disabled"]),
                  createElementVNode("u-input", {
                    class: "input",
                    type: "text",
                    modelValue: item.value,
                    onInput: [($event) => item.value = $event.detail.value, ($event) => onInput($event, index)],
                    onChange: ($event) => handleChange(index, beautys.value),
                    min: item.min,
                    max: item.max
                  }, null, 40, ["modelValue", "onInput", "onChange", "min", "max"]),
                  createVNode(_component_button, {
                    onClick: ($event) => increase(index, beautys.value),
                    disabled: item.value >= item.max
                  }, {
                    default: withCtx(() => [
                      createTextVNode("+")
                    ]),
                    _: 2
                  }, 1032, ["onClick", "disabled"])
                ])
              ]);
            }), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(shapes.value, (item, index) => {
              return openBlock(), createElementBlock("view", {
                class: "item",
                key: item.id
              }, [
                createElementVNode("view", { class: "label" }, [
                  createElementVNode("u-text", null, toDisplayString(item.name), 1)
                ]),
                createElementVNode("view", { class: "stepper" }, [
                  createVNode(_component_button, {
                    onClick: ($event) => decrease(index, shapes.value),
                    disabled: item.value <= item.min
                  }, {
                    default: withCtx(() => [
                      createTextVNode("-")
                    ]),
                    _: 2
                  }, 1032, ["onClick", "disabled"]),
                  createElementVNode("u-input", {
                    class: "input",
                    type: "text",
                    modelValue: item.value,
                    onInput: [($event) => item.value = $event.detail.value, ($event) => onInput($event, index)],
                    onChange: ($event) => handleChange(index, shapes.value),
                    min: item.min,
                    max: item.max
                  }, null, 40, ["modelValue", "onInput", "onChange", "min", "max"]),
                  createVNode(_component_button, {
                    onClick: ($event) => increase(index, shapes.value),
                    disabled: item.value >= item.max
                  }, {
                    default: withCtx(() => [
                      createTextVNode("+")
                    ]),
                    _: 2
                  }, 1032, ["onClick", "disabled"])
                ])
              ]);
            }), 128))
          ], 4)
        ], 4)
      ]);
    };
  }
};
const queue = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  queue as default
};
