define('vue/vue_demo', function(require, exports, module) {

// var Vue = require('component_modules/vue.js');
'use strict';

var footer = require('vue/footer/footer.js');
var home = require('vue/home/home.js');
var list = require('vue/list/list.js');
var Router = require('component_modules/director.js').Router;

var vue_mode = require('vue/vue_mode/index.js');

Vue.component(vue_mode.name, vue_mode);

console.log(vue_mode);
window.app = new Vue({
    el: '#app',
    data: {
        'currentView': 'home', //默认首页
        'type': 'hot',
        'cate': '',
        'article_id': ''
    },
    components: {
        'home': home
    },
    methods: {

        // show_child_of_parents: function (cate) {
        //     for(let i=0;i<this.$children.length;i++)
        //     {
        //         console.log(this.$children[i]);
        //         this.$children[i]['type'] = cate
        //     }
        // }
    }

});

var router = new Router();

//文章列表页通用处理
function listHandler(cate) {
    app.$data.type = cate;
    console.log(app.$data.type);
    // console.log(type);
    require.async(['vue/home/home.js'], function (pageComponent) {
        // var components = app.$options.components;
        // if (!components['article'])
        // {
        //     components['article'] = pageComponent;
        // }
        // app.$data.article_id = id;
        //
        app.currentView = pageComponent;
    });

    console.log(app.$children[1]);

    app.$children[1]['type'] = cate;
}

//热门文章
router.on('/hot/:cate', function (cate) {
    // console.log(cate);
    // app.$data.type = cate;
    listHandler(cate);
});

//今日看点
router.on('/notes/:cate', function (cate) {
    // console.log(cate);
    // app.$data.type = cate;
    listHandler(cate);
});

//我的订阅
router.on('/subscribe/:cate', function (cate) {
    // console.log(cate);
    // app.$data.type = cate;
    listHandler(cate);
});

//文章详细
router.on('/p/:id', function (id) {
    // console.log(id);
    app.$data.article_id = id;
    require.async(['vue/article/article.js'], function (pageComponent) {
        // var components = app.$options.components;
        // if (!components['article'])
        // {
        //     components['article'] = pageComponent;
        // }
        // app.$data.article_id = id;
        app.currentView = pageComponent;
    });
});

/*错误页*/
router.on('/error/notfound', function () {
    require.async(['vue/error/notfound.js'], function (pageComponent) {
        // var components = app.$options.components;
        // if (!components['not-found']) {
        //     components['not-found'] = pageComponent;
        // }
        app.currentView = pageComponent;
    });
});

//页面未找到
router.configure({
    notfound: function notfound() {
        router.setRoute('/error/notfound');
    }
});

//默认首页
//router.init('/hot/:cate');
router.init('hot/hot');

});
