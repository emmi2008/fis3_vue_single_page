// var Vue = require('component_modules/vue.js');
// var service = require("main/service.js");
// var marked = require("component_modules/marked.js");
// require("vue/article/article.css");

module.exports = Vue.extend(
{
    inherit: true, //集成父元素所有属性
    template: __inline('article.html'),


    data: function()
    {
        console.log(this.$parent.article_id);
        return{
            article: 'no',
            list : 
            [
                {
                    'num'      : 'a1',
                    'title'    : '遇见安然（十四）荷兰出差 白露（8）',
                    'read'     : 334,
                    'like'     : 34,
                    'comment'  : 20
                },
                {
                    'num'      : 'a2',
                    'title'    : '波兰独立之五：反俄的“普罗米修斯”计划',
                    'read'     : 3314,
                    'like'     : 324,
                    'comment'  : 20
                },
                {
                    'num'      : 'a3',
                    'title'    : '【租用时光】Graceland先森',
                    'read'     : 3314,
                    'like'     : 324,
                    'comment'  : 20
                }

            ]
        }
    },
    mounted: function()
    {
        this.getArticleDetail(this.article_id);
    },
    methods:
    {
        getArticleDetail: function(id)
        {

            var self = this;
            var arr = self.list
            for (var i = 0; i < arr.length; i++) 
            {
                // console.log(i);
                if (arr[i]['num'] == this.$parent.article_id ) 
                {
                    self.article = arr[i]['title']
                }
            };

            // var article = service.getArticleDetail(id,function(article){
            //     self.$data.article = article;
            // })
        }
    },
    filters:
    {
        // marked: marked
    }
});