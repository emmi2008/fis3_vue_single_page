define('vue/vue_router/pageB.vue', function(require, exports, module) {

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
    name: 'pageB',
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
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"header"},[_c('div',{staticClass:"left",on:{"click":_vm.goback}},[_vm._v(" < ")]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("pageB")])]),_vm._v(" "),_c('div',[_c('router-link',{attrs:{"to":"/pageA"}},[_vm._v("这里是B页面的内容")]),_vm._v(" "),_c('div',[_vm._v("\n            而自9月11日，也就是苹果推出新产品的前一天以来，该股已经累计下跌了10.95美元，跌幅为6.8%。按照7月21日的最新注册资料，苹果公司的外部流通股为51.7亿股。自推出新款iPhone产品以来，苹果股价已经下跌10.95美元，意味着约有565.6亿美元的市值已化为乌有。损失的市值甚至了超过了Target、eBay、福特等公司的市值（这些公司市值少于500亿美元）。\n        ")])],1)])}
__vue__options__.staticRenderFns =[]


});
