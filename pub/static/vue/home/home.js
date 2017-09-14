define('vue/home/home', function(require, exports, module) {

// var Vue = require('component_modules/vue.js');
// require('vue/footer/footer.js');
// require('vue/list/list.js');
// var $ = require('component_modules/jquery-3.2.1.js');

'use strict';

module.exports = Vue.extend({
    inherit: false, //集成父元素所有属性
    template: "<!-- 注意，组件模板最外层只能有一个大div包着，否则会报错  -->\r\n\r\n<div class=\"page-1\">\r\n\r\n  <ul class=\"recommened-nav navigation clearfix\">\r\n\r\n    <li data-name=\"trending_notes\">\r\n      <a data-pjax=\"true\" href=\"#hot/hot\">热门文章</a>\r\n    </li>\r\n\r\n    <li data-name=\"recommended_notes\" class=\"active\">\r\n      <a data-pjax=\"true\" href=\"#notes/today\">今日看点</a>\r\n    </li>\r\n\r\n    <li data-name=\"subscription_notes\">\r\n      <a data-pjax=\"true\" href=\"#subscribe/my\">我的订阅</a>\r\n    </li>\r\n\r\n  </ul>\r\n\r\n  <div class=\"a1\"></div>\r\n  <div class=\"a2\"></div>\r\n\r\n  <br />\r\n  <br />\r\n  <!-- 文章列表 -->\r\n  <c-list  :message=\"type\"></c-list>\r\n  <br />\r\n  <br />\r\n\r\n  <c-footer></c-footer>\r\n\r\n</div>",

    // 每次执行
    computed: {
        inside_message: function inside_message() {
            console.log('computed');
            // console.log(this.message);
            return this.$parent.type;
        }
    },

    mounted: function mounted() {
        // this.inside_message;
        // this.plus();
    },

    methods: {
        plus: function plus() {
            console.log('methods');
            return this.$parent.type;
        }
    },

    data: function data() {
        // 把父组件的属性拿回来
        // console.log(this.$parent.type);
        // var type = this.inside_message;
        // console.log(this.$parent.type);

        return {
            'type': this.$parent.type
        };
    },

    ready: function ready() {
        var self = this;
    }

});

});
