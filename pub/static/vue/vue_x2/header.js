define('vue/vue_x2/header.vue', function(require, exports, module) {

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
        name_txt: function name_txt() {
            return this.$store.state.name_txt;
        },

        activeNoteText: function activeNoteText() {
            return this.$store.getters.name_txt;
        }
    },
    methods: {
        add: function add() {

            var self = this;
            console.log('增加');
            self.$store.dispatch('add');
        },
        del: function del() {
            var self = this;
            console.log('删除');
            self.$store.dispatch('del');
        },

        editorNote: function editorNote(e) {
            var self = this;
            console.log('修改');
            self.$store.dispatch('editNote', e.target.value);
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
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_vm._v("请输入姓名：")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.name_txt),expression:"name_txt"}],staticClass:"textarea-class",domProps:{"value":_vm.activeNoteText,"value":(_vm.name_txt)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.name_txt=$event.target.value},_vm.editorNote]}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"mod",on:{"click":_vm.add}},[_vm._v("增加")]),_vm._v(" "),_c('div',{staticClass:"mod",on:{"click":_vm.del}},[_vm._v("删除")])])}
__vue__options__.staticRenderFns =[]


});
