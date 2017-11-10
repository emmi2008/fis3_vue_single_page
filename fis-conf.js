fis.hook('module',
{
    mode: 'mod'
        /*paths : {
            'main': 'components/component/main' 
        }*/
});

// 排除不发布文件
fis.set('project.ignore', [
    '监听.cmd',
    'README.md',
    'help.txt',
    '.gitignore',
    'fis-conf.js',
    'node_modules/**',
    'pub/**'
]);



// fis.match('*.less', {
//     // fis-parser-less 插件进行解析
//     parser: fis.plugin('less'),
//     // .less 文件后缀构建后被改成 .css 文件
//     rExt: '.css'
// })



fis.match('*',
{
    useHash: false
});


fis.match('::package',
{
    postpackager: fis.plugin('loader',
    {
        allInOne: true
    })
});

// fis.match('*.js', {
//   // fis-optimizer-uglify-js 插件进行压缩，已内置
//   optimizer: fis.plugin('uglify-js')
// });

fis.match('*.css',
{
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});


// 启用 fis-spriter-csssprites 插件
fis.match('::package',
{
    spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css',
{
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

// //所有的css文件
// fis.match('**.js', {
//     //发布到/static/css/xxx目录下
//     release : '../pub/js$0'
// });


// fis.match('*.{js,css,png,jpg,gif}', {
//     useHash: true // 开启 md5 戳
// });

var pub_url = '.';

// fis.match('*.{js,css,png,jpg,gif}', {
//     // useHash: true, // 开启 md5 戳
//     //发布到/static/pic/xxx目录下
//     release: pub_url + 'static/$1',
//     //访问url是/oo/static/baidu/xxx
//     url : pub_url + 'static/$1'
// });

fis.match('*.{png,jpg,gif}',
{
    // useHash: true, // 开启 md5 戳
    //发布到/static/pic/xxx目录下
    release: pub_url + '$&',
    //访问url是/oo/static/baidu/xxx
    url: pub_url + '$&'
});

// fis.match('*.{css,less}', {
//   packTo: '/static/aio.css',
//   domain:'.'
// });
// 


// fis.match('*.js', {
//   packTo: '/static/aio.js',
//   domain:'.'
// });


// fis.match("**.js", {
//     isMod: true,
//     release: pub_url + '$&',
//     domain:'.'
// });


// fis.match('static/component_modules/jquery-3.2.1.js', {
//     id: 'jquery',
//     isMod: true,
//     release:  '$&',
//     domain:'.'
// });



// vue组件本身配置
fis.match('static/vue/**/**.vue',
{
    isMod: true,
    rExt: 'js',
    release: '$&',
    domain: '.',
    useSameNameRequire: true,
    parser: [
        fis.plugin('vue-component',
        {
            // vue@2.x runtimeOnly 
            runtimeOnly: true, // vue@2.x 有润timeOnly模式，为ture时，template会在构建时转为render方法 

            // styleNameJoin 
            styleNameJoin: '', // 样式文件命名连接符 `component-xx-a.css` 

            extractCSS: true, // 是否将css生成新的文件, 如果为false, 则会内联到js中 

            // css scoped 
            cssScopedIdPrefix: '_v-', // hash前缀：_v-23j232jj 
            cssScopedHashType: 'sum', // hash生成模式，num：使用`hash-sum`, md5: 使用`fis.util.md5` 
            cssScopedHashLength: 8, // hash 长度，cssScopedHashType为md5时有效 

            cssScopedFlag: '__vuec__', // 兼容旧的ccs scoped模式而存在，此例子会将组件中所有的`__vuec__`替换为 `scoped id`，不需要设为空 
        })
    ]

});

// vue组件中的sass片段处理
fis.match('static/vue/**/**.vue:less',
{
    rExt: 'css',
    parser: fis.plugin('less'),
    useMap: false
});


// vue组件中js片段处理。
fis.match('static/vue/**/**.vue:js',
{
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
    parser: [
        fis.plugin('babel-5.x',
        {

        })
    ]
})



// fis.match('static/lib/**.js', {
//   packTo: 'static/lib/all.js',
//   domain:'.'
// });
// 
fis.match("static/lib/**.js",
{
    isMod: false,
    useMap: true,
    release: '$&',
    domain: '.'
});


//components下面的所有js资源都是组件化资源
fis.match("static/single/**.js",
{
    isMod: true,
    useMap: true,
    release: '$&',
    domain: '.'
        //     domain:'.'
});


fis.match("static/component_modules/**.js",
{
    isMod: true,
    useMap: true,
    release: '$&',
    domain: '.'
});


//components下面的所有js资源都是组件化资源
fis.match("static/vue/**.js",
{
    isMod: true,
    useMap: true,
    release: '$&',
    domain: '.',
    parser: [
            fis.plugin('babel-5.x',
            {

            })
        ]
        //     domain:'.'
});



fis.match("static/use/**.js",
{
    isMod: true,
    useMap: true,
    release: '$&',
    domain: '.'
});



// 配置js
fis.match('*.es',
{
    parser: fis.plugin('babel-5.x'),
    rExt: 'js',
    isMod: false,
    // release: '${project.static}/$1'
    release: '$&',
    domain: '.'
});


// //component组件资源id支持简写
fis.match(/^\/static\/(.*)$/i,
{
    id: '$1'
});


// fis.match('::package', {
//   packager: fis.plugin('map', {
//     '/static/aio.js': [
//       '/static/about.js',
//       '/static/index.js'
//     ]
//   })
// })



// fis.hook('commonjs', {
//   // baseUrl: './',
//   packages: [
//     {
//       name: 'foo',
//       location: './static/single/',
//       main: 'car.js'
//     }
//   ]
// });



fis.match('*.scss',
{

    parser: fis.plugin('node-sass',
    {
        // options...
    }),
    rExt: '.css',

    url : "." + '$&'
})



fis.match('*.{scss,css}',
{
    // 给匹配到的文件分配属性 `useSprite`
    // release: pub_url + '$&',
    // url : pub_url + '$&',
    postprocessor: [
        fis.plugin('px2rem',
        {
            baseDpr: 2, // base device pixel ratio (default: 2)
            remVersion: true, // whether to generate rem version (default: true)
            remUnit: 100, // rem unit value (default: 75)
            remPrecision: 3 // rem precision (default: 6)
        })
    ]
})



fis.match('*.css',
{
    // useHash: true, // 开启 md5 戳
    //发布到/static/pic/xxx目录下
    release: pub_url + '$&',
    //访问url是/oo/static/baidu/xxx
    url: pub_url + '$&'
});

fis.match('*.less',
{
    // useHash: true, // 开启 md5 戳
    //发布到/static/pic/xxx目录下
    release: pub_url + '$&',
    //访问url是/oo/static/baidu/xxx
    url: pub_url + '$&'
});



// fis.match('::packager', {
//     // npm install [-g] fis3-postpackager-loader
//     // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
//     postpackager: fis.plugin('loader', {
//         resourceType: 'mod',
//         useInlineMap: true // 资源映射表内嵌
//     }),
//     packager: fis.plugin('map'),
//     spriter: fis.plugin('csssprites', {
//         layout: 'matrix',
//         margin: '15'
//     })

// })



fis.match('::packager',
{
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader',
    {
        resourceType: 'mod',
        useInlineMap: true // 资源映射表内嵌
    }),
    packager: fis.plugin('map'),
    spriter: fis.plugin('csssprites',
    {
        layout: 'matrix',
        margin: '15'
    })

})



fis.match('*',
{
    deploy: fis.plugin('local-deliver',
    {
        to: '../fis3_vue_single_page_pub'
    })
})