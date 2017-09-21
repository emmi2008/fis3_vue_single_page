define('vue/error/notfound', function(require, exports, module) {

// var Vue = require('component_modules/vue.js');
"use strict";

module.exports = Vue.extend({
    template: "<div><span>页面找不到</span><a href='./index.html'>返回首页</a></div>",
    data: function data() {
        return {};
    }
});

});
