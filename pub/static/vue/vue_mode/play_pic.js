define('vue/vue_mode/play_pic.vue', function(require, exports, module) {

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

// 图片数组格式
// [
//     {
//         "image" :"******"
//     },
//     {
//         "image" :"******"
//     }
// ]

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = {
    name: 'play_pic',
    props: {
        "select": Number,
        "image_list": Array,
        "is_show": Boolean,
        "son": Number
    },
    data: function data() {
        return {
            "current_pos": this.select || 0,
            "son_data": this.son
        };
    },

    mounted: function mounted() {
        var self = this;
        console.log(this.son);
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 37) {
                // console.log("左键");
                self.current_pos--;
            }
            if (e && e.keyCode == 39) {
                //右键
                self.current_pos++;
            }
        };
    },
    components: {},
    computed: {
        "count": function count() {
            return this.image_list.length || 0;
        },

        "test_num": function test_num() {
            return 66;
        }

    },

    watch: {
        "select": function select() {
            this.current_pos = this.select || 0;
            // console.log(this.select);
        },

        "current_pos": function current_pos() {
            var self = this;
            if (self.current_pos < 0) {
                self.current_pos = 0;
            } else if (self.current_pos > self.count - 1) {
                self.current_pos = self.count - 1;
            }
            self.son_data++;
            // console.log(self.son_data);
            self.$emit("update:son", this.son_data);
            // this.$emit("update:select",this.current_pos);
        }
    },

    methods: {
        "fn_close": function fn_close() {
            this.$emit("close");
            // console.log("关闭");
        },

        "fn_mousewheel": function fn_mousewheel(e) {
            var cc_which = e.detail ? -e.detail : e.wheelDelta;
            if (cc_which < 0) {
                this.current_pos++;
            } else {
                this.current_pos--;
            }
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
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.is_show)?_c('div',{staticClass:"play_pic",on:{"mousewheel":function($event){$event.preventDefault();_vm.fn_mousewheel($event)},"DOMMouseScroll":function($event){$event.preventDefault();_vm.fn_mousewheel($event)}}},[_c('a',{staticClass:"close",attrs:{"href":"javascript:void(0);"},on:{"click":function($event){_vm.fn_close()}}},[_c('img',{attrs:{"src":"./static/images/close.png"}})]),_vm._v(" "),(_vm.current_pos > 0)?_c('div',{staticClass:"lbox",on:{"click":function($event){_vm.current_pos--}}},[_c('img',{attrs:{"src":"./static/images/l.png"}})]):_vm._e(),_vm._v(" "),(_vm.current_pos < _vm.count - 1)?_c('div',{staticClass:"rbox",on:{"click":function($event){_vm.current_pos++}}},[_c('img',{attrs:{"src":"./static/images/r.png"}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"tips"},[_c('span',{domProps:{"textContent":_vm._s(_vm.current_pos+1)}}),_vm._v("/"),_c('span',{domProps:{"textContent":_vm._s(_vm.count)}})]),_vm._v(" "),_c('div',{staticClass:"cbox"},[_c('span',[_c('img',{attrs:{"src":_vm.image_list[_vm.current_pos] && _vm.image_list[_vm.current_pos].image}})])])]):_vm._e()}
__vue__options__.staticRenderFns =[]


});
