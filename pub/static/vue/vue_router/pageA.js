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
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"header"},[_c('div',{staticClass:"left",on:{"click":_vm.goback}},[_vm._v(" < ")]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("pageA")])]),_vm._v(" "),_c('div',[_c('router-link',{attrs:{"to":"/pageB"}},[_vm._v("这里是A页面的内容")]),_vm._v(" "),_c('div',[_vm._v("\n            市场分析人士表示，万达商业2015年9月提交的招股说明书发现，万达商业IPO文件中募资需求的包括万达电商、万达酒店等。2017年7月10日，万达集团在官网宣布，融创房地产分别以295.75亿元和335.9526亿元收购大连万达商业13个文化旅游项目及76家城市酒店，这笔交易总代价为631.7亿元。这部分资产本应该在万达商业A股上市的资产包里，如今已经不再其中，万达商业的募资主体发生重大变化，IPO排名退后或许相关。\n        ")])],1)])}
__vue__options__.staticRenderFns =[]


});
