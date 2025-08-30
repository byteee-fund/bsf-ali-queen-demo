
const { registerUTSInterface, initUTSProxyClass, initUTSProxyFunction, initUTSPackageName, initUTSIndexClassName, initUTSClassName } = uni
const name = 'bsfAliQueen'
const moduleName = '阿里云美颜SDK的UTS插件'
const moduleType = ''
const errMsg = ``
const is_uni_modules = true
const pkg = /*#__PURE__*/ initUTSPackageName(name, is_uni_modules)
const cls = /*#__PURE__*/ initUTSIndexClassName(name, is_uni_modules)

const exports = { __esModule: true }

exports.BsfQueueCameraComponent = {}

exports.initEngine = /*#__PURE__*/ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: 'initEngineByJs', keepAlive: false, params: [{"name":"initEngineOptions","type":"UTSSDKModulesBsfAliQueenInitEngineOptionsJSONObject"}], return: ""})
exports.destroyEngine = /*#__PURE__*/ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: 'destroyEngineByJs', keepAlive: false, params: [], return: ""})
exports.isEngineReady = /*#__PURE__*/ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: 'isEngineReadyByJs', keepAlive: false, params: [], return: ""})
exports.enableBeautyType = /*#__PURE__*/ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: 'enableBeautyTypeByJs', keepAlive: false, params: [{"name":"type","type":"number"},{"name":"enable","type":"boolean"}], return: ""})
exports.updateFaceShape = /*#__PURE__*/ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: 'updateFaceShapeByJs', keepAlive: false, params: [{"name":"param","type":"number"},{"name":"value","type":"number"}], return: ""})
exports.setBeautyParam = /*#__PURE__*/ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: 'setBeautyParamByJs', keepAlive: false, params: [{"name":"param","type":"number"},{"name":"value","type":"number"}], return: ""})
exports.beautifyImage = /*#__PURE__*/ initUTSProxyFunction(false, { moduleName, moduleType, errMsg, main: true, package: pkg, class: cls, name: 'beautifyImageByJs', keepAlive: false, params: [{"name":"beautifyImageOptions","type":"UTSSDKModulesBsfAliQueenBeautifyImageOptionsJSONObject"}], return: ""})
uni.registerUTSPlugin('uni_modules/bsf-ali-queen', exports)
