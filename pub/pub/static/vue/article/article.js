'use strict';

define('vue/article/article', function (require, exports, module) {

    // var Vue = require('component_modules/vue.js');
    // var service = require("main/service.js");
    // var marked = require("component_modules/marked.js");
    // require("vue/article/article.css");

    'use strict';

    module.exports = Vue.extend({
        inherit: true, //集成父元素所有属性
        template: "<div class=\"page-2\">\n    <p>文章详情页：</p>\n    <div class=\"article\">\n        <div class=\"preview\">\n            <div class=\"show-content\" v-html=\"article\"></div>\n        </div>\n    </div>\n\n    <c-footer></c-footer>\n</div>\n\n",

        data: function data() {
            console.log(this.$parent.article_id);
            return {
                article: 'no',
                list: [{
                    'num': 'a1',
                    'title': '遇见安然（十四）荷兰出差 白露（8）',
                    'read': 334,
                    'like': 34,
                    'comment': 20
                }, {
                    'num': 'a2',
                    'title': '波兰独立之五：反俄的“普罗米修斯”计划',
                    'read': 3314,
                    'like': 324,
                    'comment': 20
                }, {
                    'num': 'a3',
                    'title': '【租用时光】Graceland先森',
                    'read': 3314,
                    'like': 324,
                    'comment': 20
                }]
            };
        },
        mounted: function mounted() {
            this.getArticleDetail(this.article_id);
        },
        methods: {
            getArticleDetail: function getArticleDetail(id) {

                var self = this;
                var arr = self.list;
                for (var i = 0; i < arr.length; i++) {
                    // console.log(i);
                    if (arr[i]['num'] == this.$parent.article_id) {
                        self.article = arr[i]['title'];
                    }
                };

                // var article = service.getArticleDetail(id,function(article){
                //     self.$data.article = article;
                // })
            }
        },
        filters: {
            // marked: marked
        }
    });
});