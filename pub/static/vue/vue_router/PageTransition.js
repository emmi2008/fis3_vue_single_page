define('vue/vue_router/PageTransition.vue', function(require, exports, module) {

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
    data: function data() {
        return {
            transitionName: 'slide-left'
        };
    }

};
module.exports = exports['default'];
// beforeRouteUpdate (to, from, next){
//     let isBack = this.$router.isBack
//     console.log(isBack);
//     if (isBack)
//     {
//         this.transitionName = 'slide-right'
//     }
//     else
//     {
//         this.transitionName = 'slide-left'
//     }
//     this.$router.isBack = false;
//     next()
// }
var __vue__options__;
if(exports && exports.__esModule && exports.default){
  __vue__options__ = exports.default;
}else{
  __vue__options__ = module.exports;
}
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('transition',{attrs:{"name":_vm.transitionName}},[_c('router-view',{staticClass:"child-view"})],1)],1)}
__vue__options__.staticRenderFns =[]


});
