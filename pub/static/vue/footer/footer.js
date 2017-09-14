define('vue/footer/footer', function(require, exports, module) {

// var Vue = require("component_modules/vue.js");
'use strict';

module.exports = Vue.component("c-footer", {
    className: 'footer',
    template: "<div class=\"footer\">\n   测试vue模块化。<a target=\"_blank\" href=\"http://fis.baidu.com\">FIS首页</a>\n</div>\n",
    ready: function ready() {
        var self = this;
    }
});

});
