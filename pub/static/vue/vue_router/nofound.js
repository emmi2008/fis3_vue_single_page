define('vue/vue_router/nofound.vue', function(require, exports, module) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {
    name: 'notfound',
    methods: {
        goback: function goback() {
            this.$router.goBack();
        }
    }
};
module.exports = exports['default'];
var __vue__options__;
if(exports && exports.__esModule && exports.default){
  __vue__options__ = exports.default;
}else{
  __vue__options__ = module.exports;
}
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"header"},[_c('div',{staticClass:"left",on:{"click":_vm.goback}},[_vm._v(" < ")]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("错误")])]),_vm._v(" "),_c('div',[_vm._v("\n\n        没有找到此页"),_c('br'),_vm._v(" "),_c('router-link',{attrs:{"to":"/"}},[_vm._v("返回首页")])],1)])}
__vue__options__.staticRenderFns =[]


});
