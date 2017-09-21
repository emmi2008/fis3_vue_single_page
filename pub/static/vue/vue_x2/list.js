define('vue/vue_x2/list.vue', function(require, exports, module) {

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
var global_location_data = {};
exports['default'] = {
    name: 'header',
    mounted: function mounted() {},
    data: function data() {
        return {};
    },
    components: {},
    computed: {
        list: function list() {
            return this.$store.state.list;
        }
    },
    methods: {
        del_cur: function del_cur(index) {
            this.$store.dispatch('del_cur', index);
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
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"list clearfix"},_vm._l((_vm.list),function(item,index){return _c('li',[_vm._v("\n       \n           \n            姓名："+_vm._s(item.name)+"  "),_c('span',{staticClass:"del",on:{"click":function($event){_vm.del_cur(index)}}},[_vm._v("删除当前")])])}))])}
__vue__options__.staticRenderFns =[]


});
