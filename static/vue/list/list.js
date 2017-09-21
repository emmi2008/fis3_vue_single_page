// var Vue = require("component_modules/vue.js");
module.exports = Vue.component("c-list",
{

    // 定义给子组件的值
    props: ['message'],

    template: __inline('list.html'),

    // 每次执行
    computed:
    {
        inside_message: function()
        {
            // console.log(this.message);
            return this.message;
        }
    },

    // 只执行一次
    mounted: function()
    {
        this.getCateList();
    },

    data: function()
    {
        // console.log(this.message);
        return {
            'cates': [],
            'articles': []
        }
    },

    watch:
    {
        // cate : function(){
        //     console.log("cate change",this.cate);
        //     var cates = this.cates;
        //     for (var i = 0; i < cates.length; i++) {
        //         cates[i]['active'] = this.cate == cates[i]['id'];
        //     };
        //     // this.getArticleList(this.type,this.cate);
        // },
        // 监听 inside_message 的值发生变化，然后刷新视图
        'inside_message': function()
        {
            // console.log("type change ", this.type);
            // console.log(myMessage);
            this.getCateList();
        }
    },

    filters:
    {

    },

    methods:
    {
        /*获取分类列表*/
        getCateList: function()
        {
            var type = this.inside_message;
            var cateList = {
                'hot': [
                {
                    'id': '#p/a1',
                    'name': '热门1'
                },
                {
                    'id': '#p/a2',
                    'name': '热门2'
                },
                {
                    'id': '#p/a3',
                    'name': '热门3'
                }],
                'today': [
                {
                    'id': '#t/a1',
                    'name': '今日看点1'
                },
                {
                    'id': '#t/a1',
                    'name': '今日看点2'
                },
                {
                    'id': '#t/a1',
                    'name': '今日看点3'
                },
                {
                    'id': '#t/a1',
                    'name': '今日看点4'
                }],
                'my': [
                {
                    'id': '#m/a1',
                    'name': '我的订阅1'
                },
                {
                    'id': '#m/a1',
                    'name': '我的订阅2'
                },
                {
                    'id': '#m/a1',
                    'name': '我的订阅3'
                },
                {
                    'id': '#m/a1',
                    'name': '我的订阅4'
                }]
            };

            var list = cateList[type] || [];
            // for (var i = 0; i < list.length; i++) {
            //     list[i]['active'] = list[i]['id'] == cate;
            // };      
            this.cates = list;
            // console.log(list);

        },
        
        /*获取某个分类下的文章列表*/
        // getArticleList: function (type,cate) {
        //     var self = this;
        //     service.getArticleList(type,cate,function(articles){
        //         self.$data.articles = articles;
        //     })
        // },
    }
});