'use strict';

define('vue/vue_x2/header.vue', function (require, exports, module) {

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
        computed: {},
        methods: {
            add: function add() {
                var self = this;
                console.log('增加');
                this.$store.dispatch('add');
            },
            del: function del() {
                var self = this;
                console.log('删除');
                this.$store.dispatch('del');
            }

        }
    };
    module.exports = exports['default'];
    var __vue__options__;
    if (exports && exports.__esModule && exports['default']) {
        __vue__options__ = exports['default'];
    } else {
        __vue__options__ = module.exports;
    }
    __vue__options__.render = function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { staticClass: "mod", on: { "click": _vm.add } }, [_vm._v("\n        增加\n    ")]), _vm._v(" "), _c('div', { staticClass: "mod", on: { "click": _vm.del } }, [_vm._v("\n        删除 \n    ")])]);
    };
    __vue__options__.staticRenderFns = [];
});