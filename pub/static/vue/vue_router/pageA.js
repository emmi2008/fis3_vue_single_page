define('vue/vue_router/pageA.vue', function(require, exports, module) {

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
    name: 'pageA',
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
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"header"},[_c('div',{staticClass:"left",on:{"click":_vm.goback}},[_vm._v(" < ")]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("pageA")])]),_vm._v(" "),_c('div',[_c('router-link',{attrs:{"to":"/pageB"}},[_vm._v("这里是A页面的内容")])],1)])}
__vue__options__.staticRenderFns =[]


});
