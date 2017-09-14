define('vue/vue_mode/vue_component_mode.vue', function(require, exports, module) {

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
    name: 'vue_component_mode',
    props: {
        //默认写法
        message: {
            type: String,
            'default': ''
        }

    },
    mounted: function mounted() {
        var self = this;
        self.$emit('success_3', {
            tips: self.txt
        });
    },
    data: function data() {
        return {
            txt: '3'
        };
    },
    components: {},
    computed: {},
    methods: {
        open: function open() {
            var self = this;
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
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"test"},[_c('span',{staticClass:"s"},[_vm._v("直接require引入 "+_vm._s(_vm.message))])])}
__vue__options__.staticRenderFns =[]


});
