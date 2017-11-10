define('vue/vue_mode/pop_confirm_component.vue', function(require, exports, module) {

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

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var global_location_data = {};
exports["default"] = {
    name: 'pop_confirm_component',
    props: {
        //默认写法
        "pop_is_show": {
            "type": [String, Boolean],
            "default": ''
        },
        "pop_is_show_mask": {
            "type": [String, Boolean],
            "default": ''
        },
        "background": {
            "type": String,
            "default": "#000"
        }
    },
    mounted: function mounted() {
        var self = this;
    },
    data: function data() {
        return {};
    },
    components: {},

    computed: {},

    methods: {
        cancel: function cancel() {
            var self = this;
            this.$emit("cancel");
        },
        confirm: function confirm() {
            var self = this;
            this.$emit("confirm");
        },
        fn_after_hide: function fn_after_hide() {
            this.$emit("emit_hide");
        },
        fn_after_show: function fn_after_show() {
            this.$emit("emit_show");
        }
    }
};
module.exports = exports["default"];
var __vue__options__;
if(exports && exports.__esModule && exports.default){
  __vue__options__ = exports.default;
}else{
  __vue__options__ = module.exports;
}
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('transition',{attrs:{"name":"slide_down"},on:{"after-leave":_vm.fn_after_hide}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.pop_is_show),expression:"pop_is_show"}],staticClass:"w_pui_dialog cc_topic_default",staticStyle:{"z-index":"100000","margin-top":"-100px","margin-left":"-280px"}},[_c('div',{staticClass:"cc_main"},[_c('div',{staticClass:"cc_close",on:{"click":function($event){_vm.cancel()}}},[_c('i',{staticClass:"iconfont icon-close"},[_c('img',{attrs:{"src":"./static/images/close.jpg"}})])]),_vm._v(" "),_c('div',{staticClass:"cc_confirm"},[_c('div',{staticClass:"cc_content"},[_vm._t("txt")],2),_vm._v(" "),_c('div',{staticClass:"cc_tools"},[_c('a',{staticClass:"gp_button gp_button_h40 gp_button_white",attrs:{"href":"javascript:void(0)"},on:{"click":function($event){_vm.cancel()}}},[_vm._v("取消")]),_vm._v(" "),_c('a',{staticClass:"gp_button gp_button_h40 gp_button_topic_main",attrs:{"href":"javascript:void(0)"},on:{"click":function($event){_vm.confirm()}}},[_vm._v("确定")])])])])])]),_vm._v(" "),_c('div',{staticClass:"w_pui_dialog_mask"},[_c('transition',{attrs:{"name":"fade"},on:{"after-enter":_vm.fn_after_show}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.pop_is_show_mask),expression:"pop_is_show_mask"}],staticClass:"cc_in",style:({background:_vm.background})})])],1)],1)}
__vue__options__.staticRenderFns =[]


});
