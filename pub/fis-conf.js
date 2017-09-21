fis.hook('module', {
    mode: 'mod'
    /*paths : {
        'main': 'components/component/main' 
    }*/
});


fis.set('project.ignore', [
  '监听.cmd',
  'README.md',
  'help.txt',
  '.gitignore',
  'pub/**'
]);



fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
})

fis.match('*', {
    useHash: false
});


fis.match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: true
    })
});

// fis.match('*.js', {
//   // fis-optimizer-uglify-js 插件进行压缩，已内置
//   optimizer: fis.plugin('uglify-js')
// });

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});


// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
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

fis.match('*.{png,jpg,gif}', {
    // useHash: true, // 开启 md5 戳
    //发布到/static/pic/xxx目录下
    release: pub_url + '$&',
    //访问url是/oo/static/baidu/xxx
    url : pub_url + '$&'
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
fis.match('static/vue/**/**.vue', {
  isMod: true,
  rExt: 'js',
  release:  '$&',
  domain:'.',
  useSameNameRequire: true,
  parser: [
      fis.plugin('vue-component', {
        // vue@2.x runtimeOnly 
        runtimeOnly: true,          // vue@2.x 有润timeOnly模式，为ture时，template会在构建时转为render方法 
   
        // styleNameJoin 
        styleNameJoin: '',          // 样式文件命名连接符 `component-xx-a.css` 
   
        extractCSS: true,           // 是否将css生成新的文件, 如果为false, 则会内联到js中 
   
        // css scoped 
        cssScopedIdPrefix: '_v-',   // hash前缀：_v-23j232jj 
        cssScopedHashType: 'sum',   // hash生成模式，num：使用`hash-sum`, md5: 使用`fis.util.md5` 
        cssScopedHashLength: 8,     // hash 长度，cssScopedHashType为md5时有效 
   
        cssScopedFlag: '__vuec__',  // 兼容旧的ccs scoped模式而存在，此例子会将组件中所有的`__vuec__`替换为 `scoped id`，不需要设为空 
      })
    ]

});

// vue组件中的sass片段处理
fis.match('static/vue/**/**.vue:less', {
  rExt: 'css',
  parser: fis.plugin('less'),
  useMap:false
});


// vue组件中js片段处理。
fis.match('static/vue/**/**.vue:js', {
  isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
  parser: [
    fis.plugin('babel-5.x', {

    })
  ]
})




// fis.match('static/lib/**.js', {
//   packTo: 'static/lib/all.js',
//   domain:'.'
// });
// 
fis.match("static/lib/**.js", {
    isMod: false,
    useMap: true,
    release:  '$&',
    domain:'.'
});


//components下面的所有js资源都是组件化资源
fis.match("static/single/**.js", {
    isMod: true,
    useMap: true,
    release:  '$&',
    domain:'.'
    //     domain:'.'
});


fis.match("static/component_modules/**.js", {
    isMod: true,
    useMap: true,
    release:  '$&',
    domain:'.'
});


//components下面的所有js资源都是组件化资源
fis.match("static/vue/**.js", {
    isMod: true,
    useMap: true,
    release:  '$&',
    domain:'.',
    parser: [
        fis.plugin('babel-5.x', {

        })
      ]
    //     domain:'.'
});



fis.match("static/use/**.js", {
    isMod: true,
    useMap: true,
    release:  '$&',
    domain:'.'
});




// 配置js
fis.match('*.es', {
    parser: fis.plugin('babel-5.x'),
    rExt: 'js',
    isMod: false,
    // release: '${project.static}/$1'
    release:  '$&',
    domain:'.'
});


// //component组件资源id支持简写
fis.match(/^\/static\/(.*)$/i, {
    id : '$1'
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



fis.match('*.{less,css}',
        {
    // 给匹配到的文件分配属性 `useSprite`
    release: pub_url + '$&',
   url : pub_url + '$&',
    postprocessor: [
        fis.plugin('px2rem',
        {
            baseDpr: 2,             // base device pixel ratio (default: 2)
            remVersion: true,       // whether to generate rem version (default: true)
            remUnit: 100,            // rem unit value (default: 75)
            remPrecision: 3         // rem precision (default: 6)
        })
    ]
})





fis.match('*.css', {
    // useHash: true, // 开启 md5 戳
    //发布到/static/pic/xxx目录下
    release: pub_url + '$&',
    //访问url是/oo/static/baidu/xxx
    url : pub_url + '$&'
});

fis.match('*.less', {
    // useHash: true, // 开启 md5 戳
    //发布到/static/pic/xxx目录下
    release: pub_url + '$&',
    //访问url是/oo/static/baidu/xxx
    url : pub_url + '$&'
});




// fis.match('::packager', {
//     // npm install [-g] fis3-postpackager-loader
//     // 分析 {
    "res": {
        "fis-conf.js": {
            "uri": "/fis-conf.js",
            "type": "js"
        },
        "node_modules/align-text/index.js": {
            "uri": "/node_modules/align-text/index.js",
            "type": "js",
            "deps": [
                "kind-of",
                "repeat-string",
                "longest"
            ]
        },
        "node_modules/ansi-regex/index.js": {
            "uri": "/node_modules/ansi-regex/index.js",
            "type": "js"
        },
        "node_modules/ansi-styles/index.js": {
            "uri": "/node_modules/ansi-styles/index.js",
            "type": "js"
        },
        "node_modules/bindings/bindings.js": {
            "uri": "/node_modules/bindings/bindings.js",
            "type": "js",
            "deps": [
                "fs",
                "path"
            ]
        },
        "node_modules/camelcase/index.js": {
            "uri": "/node_modules/camelcase/index.js",
            "type": "js"
        },
        "node_modules/center-align/index.js": {
            "uri": "/node_modules/center-align/index.js",
            "type": "js",
            "deps": [
                "node_modules/center-align/utils.js"
            ]
        },
        "node_modules/center-align/utils.js": {
            "uri": "/node_modules/center-align/utils.js",
            "type": "js",
            "deps": [
                "lazy-cache",
                "align-text"
            ]
        },
        "node_modules/chalk/index.js": {
            "uri": "/node_modules/chalk/index.js",
            "type": "js",
            "deps": [
                "escape-string-regexp",
                "ansi-styles",
                "strip-ansi",
                "has-ansi",
                "supports-color"
            ]
        },
        "node_modules/cliui/index.js": {
            "uri": "/node_modules/cliui/index.js",
            "type": "js",
            "deps": [
                "wordwrap",
                "right-align",
                "center-align"
            ]
        },
        "node_modules/cliui/test/cliui.js": {
            "uri": "/node_modules/cliui/test/cliui.js",
            "type": "js",
            "deps": [
                "chai",
                "index.html"
            ]
        },
        "node_modules/de-indent/index.js": {
            "uri": "/node_modules/de-indent/index.js",
            "type": "js"
        },
        "node_modules/de-indent/test.js": {
            "uri": "/node_modules/de-indent/test.js",
            "type": "js",
            "deps": [
                "assert",
                "node_modules/de-indent/index.js"
            ]
        },
        "node_modules/deasync/build.js": {
            "uri": "/node_modules/deasync/build.js",
            "type": "js",
            "deps": [
                "child_process",
                "fs",
                "path"
            ]
        },
        "node_modules/deasync/index.js": {
            "uri": "/node_modules/deasync/index.js",
            "type": "js",
            "deps": [
                "fs",
                "path",
                "bindings"
            ]
        },
        "node_modules/deasync/quick-test.js": {
            "uri": "/node_modules/deasync/quick-test.js",
            "type": "js",
            "deps": [
                "node_modules/deasync/index.js"
            ]
        },
        "node_modules/deasync/test.js": {
            "uri": "/node_modules/deasync/test.js",
            "type": "js",
            "deps": [
                "node_modules/deasync/index.js",
                "child_process",
                "http"
            ]
        },
        "node_modules/decamelize/index.js": {
            "uri": "/node_modules/decamelize/index.js",
            "type": "js"
        },
        "node_modules/escape-string-regexp/index.js": {
            "uri": "/node_modules/escape-string-regexp/index.js",
            "type": "js"
        },
        "node_modules/escope/escope.js": {
            "uri": "/node_modules/escope/escope.js",
            "type": "js",
            "deps": [
                "estraverse"
            ]
        },
        "node_modules/escope/gulpfile.coffee": {
            "uri": "/node_modules/escope/gulpfile.coffee",
            "type": "coffee",
            "deps": [
                "gulp",
                "gulp-mocha",
                "gulp-jshint",
                "coffee-script/register"
            ]
        },
        "node_modules/escope/node_modules/estraverse/estraverse.js": {
            "uri": "/node_modules/escope/node_modules/estraverse/estraverse.js",
            "type": "js",
            "deps": [
                "node_modules/escope/node_modules/estraverse/package.json"
            ]
        },
        "node_modules/escope/node_modules/estraverse/gulpfile.js": {
            "uri": "/node_modules/escope/node_modules/estraverse/gulpfile.js",
            "type": "js",
            "deps": [
                "gulp",
                "gulp-git",
                "gulp-bump",
                "gulp-filter",
                "gulp-tag-version"
            ]
        },
        "node_modules/esprima/bin/esparse.js": {
            "uri": "/node_modules/esprima/bin/esparse.js",
            "type": "js",
            "deps": [
                "fs",
                "esprima"
            ]
        },
        "node_modules/esprima/bin/esvalidate.js": {
            "uri": "/node_modules/esprima/bin/esvalidate.js",
            "type": "js",
            "deps": [
                "fs",
                "system",
                "./esprima",
                "esprima"
            ]
        },
        "node_modules/esprima/esprima.js": {
            "uri": "/node_modules/esprima/esprima.js",
            "type": "js"
        },
        "node_modules/estraverse/estraverse.js": {
            "uri": "/node_modules/estraverse/estraverse.js",
            "type": "js",
            "deps": [
                "node_modules/estraverse/package.json"
            ]
        },
        "node_modules/estraverse/gulpfile.js": {
            "uri": "/node_modules/estraverse/gulpfile.js",
            "type": "js",
            "deps": [
                "gulp",
                "gulp-git",
                "gulp-bump",
                "gulp-filter",
                "gulp-tag-version"
            ]
        },
        "node_modules/fis3-hook-module/index.js": {
            "uri": "/node_modules/fis3-hook-module/index.js",
            "type": "js",
            "deps": [
                "node_modules/fis3-hook-module/lib/amd.js",
                "node_modules/fis3-hook-module/lib/cmd.js",
                "node_modules/fis3-hook-module/lib/commonJs.js",
                "node_modules/fis3-hook-module/lib/helper.js"
            ]
        },
        "node_modules/fis3-hook-module/lib/amd.js": {
            "uri": "/node_modules/fis3-hook-module/lib/amd.js",
            "type": "js",
            "deps": [
                "esprima",
                "estraverse",
                "escope",
                "path",
                "node_modules/fis3-hook-module/lib/helper.js"
            ]
        },
        "node_modules/fis3-hook-module/lib/cmd.js": {
            "uri": "/node_modules/fis3-hook-module/lib/cmd.js",
            "type": "js",
            "deps": [
                "node_modules/fis3-hook-module/lib/amd.js"
            ]
        },
        "node_modules/fis3-hook-module/lib/commonJs.js": {
            "uri": "/node_modules/fis3-hook-module/lib/commonJs.js",
            "type": "js"
        },
        "node_modules/fis3-hook-module/lib/helper.js": {
            "uri": "/node_modules/fis3-hook-module/lib/helper.js",
            "type": "js"
        },
        "node_modules/fis3-hook-module/test/index2.js": {
            "uri": "/node_modules/fis3-hook-module/test/index2.js",
            "type": "js",
            "deps": [
                "fs",
                "path",
                "index.html",
                "chai",
                "node_modules/fis3-hook-module/lib/amd.js",
                "node_modules/fis3-hook-module/lib/commonJs.js",
                "fis3-plugin-module"
            ]
        },
        "node_modules/fis3-hook-module/test/project/dmath.js": {
            "uri": "/node_modules/fis3-hook-module/test/project/dmath.js",
            "type": "js"
        },
        "node_modules/fis3-hook-module/test/project/math.js": {
            "uri": "/node_modules/fis3-hook-module/test/project/math.js",
            "type": "js"
        },
        "node_modules/fis3-hook-module/test/project/test.js": {
            "uri": "/node_modules/fis3-hook-module/test/project/test.js",
            "type": "js"
        },
        "node_modules/fis3-hook-module/test/project/test2.js": {
            "uri": "/node_modules/fis3-hook-module/test/project/test2.js",
            "type": "js",
            "extras": {
                "async": [
                    "fs"
                ]
            },
            "deps": [
                "net"
            ]
        },
        "node_modules/fis3-hook-module/test/project/test3.js": {
            "uri": "/node_modules/fis3-hook-module/test/project/test3.js",
            "type": "js"
        },
        "node_modules/fis3-parser-vue-component/index.js": {
            "uri": "/node_modules/fis3-parser-vue-component/index.js",
            "type": "js",
            "deps": [
                "path",
                "object-assign",
                "hash-sum",
                "vue-template-compiler",
                "node_modules/fis3-parser-vue-component/lib/gen-id.js",
                "node_modules/fis3-parser-vue-component/lib/style-rewriter.js",
                "node_modules/fis3-parser-vue-component/lib/template-compiler.js",
                "node_modules/fis3-parser-vue-component/lib/insert-css.js",
                "node_modules/fis3-parser-vue-component/lib/replace-scoped-flag.js"
            ]
        },
        "node_modules/fis3-parser-vue-component/lib/gen-id.js": {
            "uri": "/node_modules/fis3-parser-vue-component/lib/gen-id.js",
            "type": "js",
            "deps": [
                "hash-sum"
            ]
        },
        "node_modules/fis3-parser-vue-component/lib/insert-css.js": {
            "uri": "/node_modules/fis3-parser-vue-component/lib/insert-css.js",
            "type": "js",
            "deps": [
                "uglify-js"
            ]
        },
        "node_modules/fis3-parser-vue-component/lib/replace-scoped-flag.js": {
            "uri": "/node_modules/fis3-parser-vue-component/lib/replace-scoped-flag.js",
            "type": "js"
        },
        "node_modules/fis3-parser-vue-component/lib/style-rewriter.js": {
            "uri": "/node_modules/fis3-parser-vue-component/lib/style-rewriter.js",
            "type": "js",
            "deps": [
                "postcss",
                "postcss-selector-parser",
                "lru-cache",
                "object-assign",
                "deasync"
            ]
        },
        "node_modules/fis3-parser-vue-component/lib/template-compiler.js": {
            "uri": "/node_modules/fis3-parser-vue-component/lib/template-compiler.js",
            "type": "js",
            "deps": [
                "chalk",
                "vue-template-compiler",
                "vue-template-es2015-compiler"
            ]
        },
        "node_modules/fis3-parser-vue-component/test/fis-conf.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test/fis-conf.js",
            "type": "js",
            "deps": [
                "path",
                "index.html"
            ]
        },
        "node_modules/fis3-parser-vue-component/test/src/js/engine/mod.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test/src/js/engine/mod.js",
            "type": "js"
        },
        "node_modules/fis3-parser-vue-component/test/src/js/page/index.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test/src/js/page/index.js",
            "type": "js",
            "deps": [
                "../../component/index",
                "node_modules/fis3-parser-vue-component/test/src/less/index.less"
            ]
        },
        "node_modules/fis3-parser-vue-component/test/src/less/index.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test/src/less/index.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test/src/less/other.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test/src/less/other.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test/src/less/other2.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test/src/less/other2.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test/src/scss/test.scss": {
            "uri": "/node_modules/fis3-parser-vue-component/test/src/scss/test.scss",
            "type": "scss"
        },
        "node_modules/fis3-parser-vue-component/test2/fis-conf.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test2/fis-conf.js",
            "type": "js",
            "deps": [
                "path",
                "index.html"
            ]
        },
        "node_modules/fis3-parser-vue-component/test2/src/js/engine/mod.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test2/src/js/engine/mod.js",
            "type": "js"
        },
        "node_modules/fis3-parser-vue-component/test2/src/js/page/index.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test2/src/js/page/index.js",
            "type": "js",
            "deps": [
                "node_modules/fis3-parser-vue-component/test2/src/less/index.less"
            ]
        },
        "node_modules/fis3-parser-vue-component/test2/src/less/index.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test2/src/less/index.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test2/src/less/other.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test2/src/less/other.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test2/src/less/other2.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test2/src/less/other2.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test2/src/scss/test.scss": {
            "uri": "/node_modules/fis3-parser-vue-component/test2/src/scss/test.scss",
            "type": "scss"
        },
        "node_modules/flatten/index.js": {
            "uri": "/node_modules/flatten/index.js",
            "type": "js"
        },
        "node_modules/flatten/test.js": {
            "uri": "/node_modules/flatten/test.js",
            "type": "js",
            "deps": [
                "node_modules/flatten/index.js",
                "util",
                "assert"
            ]
        },
        "node_modules/has-ansi/index.js": {
            "uri": "/node_modules/has-ansi/index.js",
            "type": "js",
            "deps": [
                "ansi-regex"
            ]
        },
        "node_modules/has-flag/index.js": {
            "uri": "/node_modules/has-flag/index.js",
            "type": "js"
        },
        "node_modules/hash-sum/hash-sum.js": {
            "uri": "/node_modules/hash-sum/hash-sum.js",
            "type": "js"
        },
        "node_modules/hash-sum/test.js": {
            "uri": "/node_modules/hash-sum/test.js",
            "type": "js",
            "deps": [
                "lodash",
                "tape",
                "."
            ]
        },
        "node_modules/he/he.js": {
            "uri": "/node_modules/he/he.js",
            "type": "js"
        },
        "node_modules/indexes-of/index.js": {
            "uri": "/node_modules/indexes-of/index.js",
            "type": "js"
        },
        "node_modules/indexes-of/test.js": {
            "uri": "/node_modules/indexes-of/test.js",
            "type": "js",
            "deps": [
                "tape",
                "."
            ]
        },
        "node_modules/is-buffer/index.js": {
            "uri": "/node_modules/is-buffer/index.js",
            "type": "js"
        },
        "node_modules/is-buffer/test/basic.js": {
            "uri": "/node_modules/is-buffer/test/basic.js",
            "type": "js",
            "deps": [
                "buffer",
                "index.html",
                "tape"
            ]
        },
        "node_modules/js-base64/base64.js": {
            "uri": "/node_modules/js-base64/base64.js",
            "type": "js",
            "deps": [
                "buffer"
            ]
        },
        "node_modules/js-base64/base64.min.js": {
            "uri": "/node_modules/js-base64/base64.min.js",
            "type": "js",
            "deps": [
                "buffer"
            ]
        },
        "node_modules/js-base64/old/base64-1.7.js": {
            "uri": "/node_modules/js-base64/old/base64-1.7.js",
            "type": "js"
        },
        "node_modules/js-base64/package.js": {
            "uri": "/node_modules/js-base64/package.js",
            "type": "js"
        },
        "node_modules/js-base64/test/dankogai.js": {
            "uri": "/node_modules/js-base64/test/dankogai.js",
            "type": "js",
            "deps": [
                "assert",
                "node_modules/js-base64/base64.js"
            ]
        },
        "node_modules/js-base64/test/es5.js": {
            "uri": "/node_modules/js-base64/test/es5.js",
            "type": "js",
            "deps": [
                "assert",
                "node_modules/js-base64/base64.js"
            ]
        },
        "node_modules/js-base64/test/large.js": {
            "uri": "/node_modules/js-base64/test/large.js",
            "type": "js",
            "deps": [
                "assert",
                "node_modules/js-base64/base64.js"
            ]
        },
        "node_modules/js-base64/test/yoshinoya.js": {
            "uri": "/node_modules/js-base64/test/yoshinoya.js",
            "type": "js",
            "deps": [
                "assert",
                "node_modules/js-base64/base64.js"
            ]
        },
        "node_modules/kind-of/index.js": {
            "uri": "/node_modules/kind-of/index.js",
            "type": "js",
            "deps": [
                "is-buffer"
            ]
        },
        "node_modules/lazy-cache/index.js": {
            "uri": "/node_modules/lazy-cache/index.js",
            "type": "js"
        },
        "node_modules/longest/index.js": {
            "uri": "/node_modules/longest/index.js",
            "type": "js"
        },
        "node_modules/lru-cache/index.js": {
            "uri": "/node_modules/lru-cache/index.js",
            "type": "js",
            "deps": [
                "pseudomap",
                "util",
                "yallist"
            ]
        },
        "node_modules/nan/include_dirs.js": {
            "uri": "/node_modules/nan/include_dirs.js",
            "type": "js",
            "deps": [
                "path"
            ]
        },
        "node_modules/nan/tools/1to2.js": {
            "uri": "/node_modules/nan/tools/1to2.js",
            "type": "js",
            "deps": [
                "commander",
                "fs",
                "glob"
            ]
        },
        "node_modules/object-assign/index.js": {
            "uri": "/node_modules/object-assign/index.js",
            "type": "js"
        },
        "node_modules/postcss-selector-parser/dist/index.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/index.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/processor.js",
                "node_modules/postcss-selector-parser/dist/selectors/attribute.js",
                "node_modules/postcss-selector-parser/dist/selectors/className.js",
                "node_modules/postcss-selector-parser/dist/selectors/combinator.js",
                "node_modules/postcss-selector-parser/dist/selectors/comment.js",
                "node_modules/postcss-selector-parser/dist/selectors/id.js",
                "node_modules/postcss-selector-parser/dist/selectors/nesting.js",
                "node_modules/postcss-selector-parser/dist/selectors/pseudo.js",
                "node_modules/postcss-selector-parser/dist/selectors/root.js",
                "node_modules/postcss-selector-parser/dist/selectors/selector.js",
                "node_modules/postcss-selector-parser/dist/selectors/string.js",
                "node_modules/postcss-selector-parser/dist/selectors/tag.js",
                "node_modules/postcss-selector-parser/dist/selectors/universal.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/parser.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/parser.js",
            "type": "js",
            "deps": [
                "flatten",
                "indexes-of",
                "uniq",
                "node_modules/postcss-selector-parser/dist/selectors/root.js",
                "node_modules/postcss-selector-parser/dist/selectors/selector.js",
                "node_modules/postcss-selector-parser/dist/selectors/className.js",
                "node_modules/postcss-selector-parser/dist/selectors/comment.js",
                "node_modules/postcss-selector-parser/dist/selectors/id.js",
                "node_modules/postcss-selector-parser/dist/selectors/tag.js",
                "node_modules/postcss-selector-parser/dist/selectors/string.js",
                "node_modules/postcss-selector-parser/dist/selectors/pseudo.js",
                "node_modules/postcss-selector-parser/dist/selectors/attribute.js",
                "node_modules/postcss-selector-parser/dist/selectors/universal.js",
                "node_modules/postcss-selector-parser/dist/selectors/combinator.js",
                "node_modules/postcss-selector-parser/dist/selectors/nesting.js",
                "node_modules/postcss-selector-parser/dist/sortAscending.js",
                "node_modules/postcss-selector-parser/dist/tokenize.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/processor.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/processor.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/parser.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/attribute.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/attribute.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/namespace.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/className.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/className.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/namespace.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/combinator.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/combinator.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/comment.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/comment.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/container.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/container.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/id.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/id.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/namespace.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/namespace.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/namespace.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/nesting.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/nesting.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/node.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/node.js",
            "type": "js"
        },
        "node_modules/postcss-selector-parser/dist/selectors/pseudo.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/pseudo.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/container.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/root.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/root.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/container.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/selector.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/selector.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/container.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/string.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/string.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/tag.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/tag.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/namespace.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/types.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/types.js",
            "type": "js"
        },
        "node_modules/postcss-selector-parser/dist/selectors/universal.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/universal.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/namespace.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/sortAscending.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/sortAscending.js",
            "type": "js"
        },
        "node_modules/postcss-selector-parser/dist/tokenize.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/tokenize.js",
            "type": "js"
        },
        "node_modules/postcss/lib/at-rule.js": {
            "uri": "/node_modules/postcss/lib/at-rule.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/container.js",
                "node_modules/postcss/lib/warn-once.js"
            ]
        },
        "node_modules/postcss/lib/comment.js": {
            "uri": "/node_modules/postcss/lib/comment.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/node.js"
            ]
        },
        "node_modules/postcss/lib/container.js": {
            "uri": "/node_modules/postcss/lib/container.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/declaration.js",
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/comment.js",
                "node_modules/postcss/lib/node.js",
                "node_modules/postcss/lib/parse.js",
                "node_modules/postcss/lib/rule.js",
                "node_modules/postcss/lib/at-rule.js",
                "node_modules/postcss/lib/root.js"
            ]
        },
        "node_modules/postcss/lib/css-syntax-error.js": {
            "uri": "/node_modules/postcss/lib/css-syntax-error.js",
            "type": "js",
            "deps": [
                "supports-color",
                "chalk",
                "node_modules/postcss/lib/terminal-highlight.js",
                "node_modules/postcss/lib/warn-once.js"
            ]
        },
        "node_modules/postcss/lib/declaration.js": {
            "uri": "/node_modules/postcss/lib/declaration.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/node.js"
            ]
        },
        "node_modules/postcss/lib/input.js": {
            "uri": "/node_modules/postcss/lib/input.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/css-syntax-error.js",
                "node_modules/postcss/lib/previous-map.js",
                "path"
            ]
        },
        "node_modules/postcss/lib/lazy-result.js": {
            "uri": "/node_modules/postcss/lib/lazy-result.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/map-generator.js",
                "node_modules/postcss/lib/stringify.js",
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/result.js",
                "node_modules/postcss/lib/parse.js"
            ]
        },
        "node_modules/postcss/lib/list.js": {
            "uri": "/node_modules/postcss/lib/list.js",
            "type": "js"
        },
        "node_modules/postcss/lib/map-generator.js": {
            "uri": "/node_modules/postcss/lib/map-generator.js",
            "type": "js",
            "deps": [
                "js-base64",
                "source-map",
                "path"
            ]
        },
        "node_modules/postcss/lib/node.js": {
            "uri": "/node_modules/postcss/lib/node.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/css-syntax-error.js",
                "node_modules/postcss/lib/stringifier.js",
                "node_modules/postcss/lib/stringify.js",
                "node_modules/postcss/lib/warn-once.js"
            ]
        },
        "node_modules/postcss/lib/parse.js": {
            "uri": "/node_modules/postcss/lib/parse.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/parser.js",
                "node_modules/postcss/lib/input.js"
            ]
        },
        "node_modules/postcss/lib/parser.js": {
            "uri": "/node_modules/postcss/lib/parser.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/declaration.js",
                "node_modules/postcss/lib/tokenize.js",
                "node_modules/postcss/lib/comment.js",
                "node_modules/postcss/lib/at-rule.js",
                "node_modules/postcss/lib/root.js",
                "node_modules/postcss/lib/rule.js"
            ]
        },
        "node_modules/postcss/lib/postcss.js": {
            "uri": "/node_modules/postcss/lib/postcss.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/declaration.js",
                "node_modules/postcss/lib/processor.js",
                "node_modules/postcss/lib/stringify.js",
                "node_modules/postcss/lib/comment.js",
                "node_modules/postcss/lib/at-rule.js",
                "node_modules/postcss/lib/vendor.js",
                "node_modules/postcss/lib/parse.js",
                "node_modules/postcss/lib/list.js",
                "node_modules/postcss/lib/rule.js",
                "node_modules/postcss/lib/root.js"
            ]
        },
        "node_modules/postcss/lib/previous-map.js": {
            "uri": "/node_modules/postcss/lib/previous-map.js",
            "type": "js",
            "deps": [
                "js-base64",
                "source-map",
                "path",
                "fs"
            ]
        },
        "node_modules/postcss/lib/processor.js": {
            "uri": "/node_modules/postcss/lib/processor.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/lazy-result.js"
            ]
        },
        "node_modules/postcss/lib/result.js": {
            "uri": "/node_modules/postcss/lib/result.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/warning.js"
            ]
        },
        "node_modules/postcss/lib/root.js": {
            "uri": "/node_modules/postcss/lib/root.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/container.js",
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/lazy-result.js",
                "node_modules/postcss/lib/processor.js"
            ]
        },
        "node_modules/postcss/lib/rule.js": {
            "uri": "/node_modules/postcss/lib/rule.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/container.js",
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/list.js"
            ]
        },
        "node_modules/postcss/lib/stringifier.js": {
            "uri": "/node_modules/postcss/lib/stringifier.js",
            "type": "js"
        },
        "node_modules/postcss/lib/stringify.js": {
            "uri": "/node_modules/postcss/lib/stringify.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/stringifier.js"
            ]
        },
        "node_modules/postcss/lib/terminal-highlight.js": {
            "uri": "/node_modules/postcss/lib/terminal-highlight.js",
            "type": "js",
            "deps": [
                "chalk",
                "node_modules/postcss/lib/tokenize.js",
                "node_modules/postcss/lib/input.js"
            ]
        },
        "node_modules/postcss/lib/tokenize.js": {
            "uri": "/node_modules/postcss/lib/tokenize.js",
            "type": "js"
        },
        "node_modules/postcss/lib/vendor.js": {
            "uri": "/node_modules/postcss/lib/vendor.js",
            "type": "js"
        },
        "node_modules/postcss/lib/warn-once.js": {
            "uri": "/node_modules/postcss/lib/warn-once.js",
            "type": "js"
        },
        "node_modules/postcss/lib/warning.js": {
            "uri": "/node_modules/postcss/lib/warning.js",
            "type": "js"
        },
        "node_modules/postcss/node_modules/supports-color/browser.js": {
            "uri": "/node_modules/postcss/node_modules/supports-color/browser.js",
            "type": "js"
        },
        "node_modules/postcss/node_modules/supports-color/index.js": {
            "uri": "/node_modules/postcss/node_modules/supports-color/index.js",
            "type": "js",
            "deps": [
                "has-flag"
            ]
        },
        "node_modules/pseudomap/map.js": {
            "uri": "/node_modules/pseudomap/map.js",
            "type": "js",
            "deps": [
                "node_modules/pseudomap/pseudomap.js"
            ]
        },
        "node_modules/pseudomap/pseudomap.js": {
            "uri": "/node_modules/pseudomap/pseudomap.js",
            "type": "js"
        },
        "node_modules/pseudomap/test/basic.js": {
            "uri": "/node_modules/pseudomap/test/basic.js",
            "type": "js",
            "deps": [
                "tap",
                "index.html"
            ]
        },
        "node_modules/repeat-string/index.js": {
            "uri": "/node_modules/repeat-string/index.js",
            "type": "js"
        },
        "node_modules/right-align/index.js": {
            "uri": "/node_modules/right-align/index.js",
            "type": "js",
            "deps": [
                "align-text"
            ]
        },
        "node_modules/source-map/dist/source-map.debug.js": {
            "uri": "/node_modules/source-map/dist/source-map.debug.js",
            "type": "js"
        },
        "node_modules/source-map/dist/source-map.js": {
            "uri": "/node_modules/source-map/dist/source-map.js",
            "type": "js"
        },
        "node_modules/source-map/dist/source-map.min.js": {
            "uri": "/node_modules/source-map/dist/source-map.min.js",
            "type": "js",
            "extras": {}
        },
        "node_modules/source-map/lib/array-set.js": {
            "uri": "/node_modules/source-map/lib/array-set.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/util.js"
            ]
        },
        "node_modules/source-map/lib/base64-vlq.js": {
            "uri": "/node_modules/source-map/lib/base64-vlq.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/base64.js"
            ]
        },
        "node_modules/source-map/lib/base64.js": {
            "uri": "/node_modules/source-map/lib/base64.js",
            "type": "js"
        },
        "node_modules/source-map/lib/binary-search.js": {
            "uri": "/node_modules/source-map/lib/binary-search.js",
            "type": "js"
        },
        "node_modules/source-map/lib/mapping-list.js": {
            "uri": "/node_modules/source-map/lib/mapping-list.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/util.js"
            ]
        },
        "node_modules/source-map/lib/quick-sort.js": {
            "uri": "/node_modules/source-map/lib/quick-sort.js",
            "type": "js"
        },
        "node_modules/source-map/lib/source-map-consumer.js": {
            "uri": "/node_modules/source-map/lib/source-map-consumer.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/util.js",
                "node_modules/source-map/lib/binary-search.js",
                "node_modules/source-map/lib/array-set.js",
                "node_modules/source-map/lib/base64-vlq.js",
                "node_modules/source-map/lib/quick-sort.js"
            ]
        },
        "node_modules/source-map/lib/source-map-generator.js": {
            "uri": "/node_modules/source-map/lib/source-map-generator.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/base64-vlq.js",
                "node_modules/source-map/lib/util.js",
                "node_modules/source-map/lib/array-set.js",
                "node_modules/source-map/lib/mapping-list.js"
            ]
        },
        "node_modules/source-map/lib/source-node.js": {
            "uri": "/node_modules/source-map/lib/source-node.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/source-map-generator.js",
                "node_modules/source-map/lib/util.js"
            ]
        },
        "node_modules/source-map/lib/util.js": {
            "uri": "/node_modules/source-map/lib/util.js",
            "type": "js"
        },
        "node_modules/source-map/source-map.js": {
            "uri": "/node_modules/source-map/source-map.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/source-map-generator.js",
                "node_modules/source-map/lib/source-map-consumer.js",
                "node_modules/source-map/lib/source-node.js"
            ]
        },
        "node_modules/strip-ansi/index.js": {
            "uri": "/node_modules/strip-ansi/index.js",
            "type": "js",
            "deps": [
                "ansi-regex"
            ]
        },
        "node_modules/supports-color/index.js": {
            "uri": "/node_modules/supports-color/index.js",
            "type": "js"
        },
        "node_modules/uglify-js/bin/extract-props.js": {
            "uri": "/node_modules/uglify-js/bin/extract-props.js",
            "type": "js",
            "deps": [
                "node_modules/uglify-js/tools/node.js",
                "fs",
                "yargs"
            ]
        },
        "node_modules/uglify-js/lib/ast.js": {
            "uri": "/node_modules/uglify-js/lib/ast.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/compress.js": {
            "uri": "/node_modules/uglify-js/lib/compress.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/mozilla-ast.js": {
            "uri": "/node_modules/uglify-js/lib/mozilla-ast.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/output.js": {
            "uri": "/node_modules/uglify-js/lib/output.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/parse.js": {
            "uri": "/node_modules/uglify-js/lib/parse.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/propmangle.js": {
            "uri": "/node_modules/uglify-js/lib/propmangle.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/scope.js": {
            "uri": "/node_modules/uglify-js/lib/scope.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/sourcemap.js": {
            "uri": "/node_modules/uglify-js/lib/sourcemap.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/transform.js": {
            "uri": "/node_modules/uglify-js/lib/transform.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/utils.js": {
            "uri": "/node_modules/uglify-js/lib/utils.js",
            "type": "js"
        },
        "node_modules/uglify-js/tools/exports.js": {
            "uri": "/node_modules/uglify-js/tools/exports.js",
            "type": "js"
        },
        "node_modules/uglify-js/tools/node.js": {
            "uri": "/node_modules/uglify-js/tools/node.js",
            "type": "js",
            "deps": [
                "path",
                "fs",
                "source-map"
            ]
        },
        "node_modules/uglify-to-browserify/index.js": {
            "uri": "/node_modules/uglify-to-browserify/index.js",
            "type": "js",
            "deps": [
                "fs",
                "stream"
            ]
        },
        "node_modules/uglify-to-browserify/test/index.js": {
            "uri": "/node_modules/uglify-to-browserify/test/index.js",
            "type": "js",
            "deps": [
                "fs",
                "index.html",
                "./output.js"
            ]
        },
        "node_modules/uniq/test/test.js": {
            "uri": "/node_modules/uniq/test/test.js",
            "type": "js",
            "deps": [
                "node_modules/uniq/uniq.js",
                "tape"
            ]
        },
        "node_modules/uniq/uniq.js": {
            "uri": "/node_modules/uniq/uniq.js",
            "type": "js"
        },
        "node_modules/vue-template-compiler/build.js": {
            "uri": "/node_modules/vue-template-compiler/build.js",
            "type": "js",
            "deps": [
                "de-indent",
                "he"
            ]
        },
        "node_modules/vue-template-compiler/index.js": {
            "uri": "/node_modules/vue-template-compiler/index.js",
            "type": "js",
            "deps": [
                "vue",
                "node_modules/vue-template-compiler/package.json",
                "node_modules/vue-template-compiler/build.js"
            ]
        },
        "node_modules/vue-template-es2015-compiler/buble.js": {
            "uri": "/node_modules/vue-template-es2015-compiler/buble.js",
            "type": "js"
        },
        "node_modules/vue-template-es2015-compiler/index.js": {
            "uri": "/node_modules/vue-template-es2015-compiler/index.js",
            "type": "js",
            "deps": [
                "node_modules/vue-template-es2015-compiler/buble.js"
            ]
        },
        "node_modules/window-size/index.js": {
            "uri": "/node_modules/window-size/index.js",
            "type": "js",
            "deps": [
                "tty"
            ]
        },
        "node_modules/wordwrap/example/center.js": {
            "uri": "/node_modules/wordwrap/example/center.js",
            "type": "js",
            "deps": [
                "wordwrap"
            ]
        },
        "node_modules/wordwrap/example/meat.js": {
            "uri": "/node_modules/wordwrap/example/meat.js",
            "type": "js",
            "deps": [
                "wordwrap"
            ]
        },
        "node_modules/wordwrap/index.js": {
            "uri": "/node_modules/wordwrap/index.js",
            "type": "js"
        },
        "node_modules/wordwrap/test/break.js": {
            "uri": "/node_modules/wordwrap/test/break.js",
            "type": "js",
            "deps": [
                "assert",
                "index.html"
            ]
        },
        "node_modules/wordwrap/test/wrap.js": {
            "uri": "/node_modules/wordwrap/test/wrap.js",
            "type": "js",
            "deps": [
                "assert",
                "wordwrap",
                "fs"
            ]
        },
        "node_modules/yallist/iterator.js": {
            "uri": "/node_modules/yallist/iterator.js",
            "type": "js",
            "deps": [
                "node_modules/yallist/yallist.js"
            ]
        },
        "node_modules/yallist/yallist.js": {
            "uri": "/node_modules/yallist/yallist.js",
            "type": "js"
        },
        "node_modules/yargs/index.js": {
            "uri": "/node_modules/yargs/index.js",
            "type": "js",
            "deps": [
                "assert",
                "path",
                "node_modules/yargs/lib/completion.js",
                "node_modules/yargs/lib/parser.js",
                "node_modules/yargs/lib/usage.js",
                "node_modules/yargs/lib/validation.js",
                "window-size"
            ]
        },
        "node_modules/yargs/lib/completion.js": {
            "uri": "/node_modules/yargs/lib/completion.js",
            "type": "js",
            "deps": [
                "fs",
                "path"
            ]
        },
        "node_modules/yargs/lib/parser.js": {
            "uri": "/node_modules/yargs/lib/parser.js",
            "type": "js",
            "deps": [
                "camelcase",
                "path"
            ]
        },
        "node_modules/yargs/lib/usage.js": {
            "uri": "/node_modules/yargs/lib/usage.js",
            "type": "js",
            "deps": [
                "cliui",
                "decamelize",
                "window-size"
            ]
        },
        "node_modules/yargs/lib/validation.js": {
            "uri": "/node_modules/yargs/lib/validation.js",
            "type": "js"
        },
        "about.js": {
            "uri": "/static/about.js",
            "type": "js"
        },
        "component_modules/director.js": {
            "uri": "./static/component_modules/director.js",
            "type": "js",
            "extras": {
                "moduleId": "component_modules/director"
            }
        },
        "component_modules/jquery-3.2.1.js": {
            "uri": "./static/component_modules/jquery-3.2.1.js",
            "type": "js",
            "extras": {
                "moduleId": "component_modules/jquery-3.2.1"
            }
        },
        "css/about.css": {
            "uri": "./static/css/about.css",
            "type": "css"
        },
        "css/common.css": {
            "uri": "./static/css/common.css",
            "type": "css"
        },
        "css/index.css": {
            "uri": "./static/css/index.css",
            "type": "css"
        },
        "css/test.less": {
            "uri": "./static/css/test.css",
            "type": "css"
        },
        "lib/mod.js": {
            "uri": "./static/lib/mod.js",
            "type": "js"
        },
        "lib/vue.js": {
            "uri": "./static/lib/vue.js",
            "type": "js"
        },
        "lib/vuex.js": {
            "uri": "./static/lib/vuex.js",
            "type": "js"
        },
        "single/car.js": {
            "uri": "./static/single/car.js",
            "type": "js",
            "extras": {
                "moduleId": "single/car"
            },
            "deps": [
                "single/engine.js"
            ]
        },
        "single/engine.js": {
            "uri": "./static/single/engine.js",
            "type": "js",
            "extras": {
                "moduleId": "single/engine"
            }
        },
        "single/hello2.js": {
            "uri": "./static/single/hello2.js",
            "type": "js",
            "extras": {
                "moduleId": "single/hello2"
            },
            "deps": [
                "single/engine.js"
            ]
        },
        "use/hello.js": {
            "uri": "./static/use/hello.js",
            "type": "js",
            "extras": {
                "moduleId": "use/hello"
            }
        },
        "use/index.js": {
            "uri": "./static/use/index.js",
            "type": "js",
            "extras": {
                "moduleId": "use/index"
            }
        },
        "use/test.es": {
            "uri": "./static/use/test.js",
            "type": "js"
        },
        "vue/article/article.css": {
            "uri": "./static/vue/article/article.css",
            "type": "css"
        },
        "vue/article/article.js": {
            "uri": "./static/vue/article/article.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/article/article"
            }
        },
        "vue/error/notfound.js": {
            "uri": "./static/vue/error/notfound.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/error/notfound"
            }
        },
        "vue/footer/footer.css": {
            "uri": "./static/vue/footer/footer.css",
            "type": "css"
        },
        "vue/footer/footer.js": {
            "uri": "./static/vue/footer/footer.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/footer/footer"
            }
        },
        "vue/home/home.css": {
            "uri": "./static/vue/home/home.css",
            "type": "css"
        },
        "vue/home/home.js": {
            "uri": "./static/vue/home/home.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/home/home"
            }
        },
        "vue/list/list.css": {
            "uri": "./static/vue/list/list.css",
            "type": "css"
        },
        "vue/list/list.js": {
            "uri": "./static/vue/list/list.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/list/list"
            }
        },
        "vue/vue_demo.js": {
            "uri": "./static/vue/vue_demo.js",
            "type": "js",
            "extras": {
                "async": [
                    "vue/article/article.js",
                    "vue/error/notfound.js"
                ],
                "moduleId": "vue/vue_demo"
            },
            "deps": [
                "vue/footer/footer.js",
                "vue/home/home.js",
                "vue/list/list.js",
                "component_modules/director.js",
                "vue/vue_mode/index.js"
            ]
        },
        "vue/vue_mode/area.vue": {
            "uri": "./static/vue/vue_mode/area.js",
            "type": "js",
            "deps": [
                "vue/vue_mode/area.css"
            ]
        },
        "vue/vue_mode/area.css": {
            "uri": "./static/vue/vue_mode/area.css",
            "type": "css"
        },
        "vue/vue_mode/index.js": {
            "uri": "./static/vue/vue_mode/index.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_mode/index"
            },
            "deps": [
                "vue/vue_mode/area.vue"
            ]
        },
        "vue/vue_mode/vue_component_config.js": {
            "uri": "./static/vue/vue_mode/vue_component_config.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_mode/vue_component_config"
            },
            "deps": [
                "vue/vue_mode/vue_component_mode.vue"
            ]
        },
        "vue/vue_mode/vue_component_mode.vue": {
            "uri": "./static/vue/vue_mode/vue_component_mode.js",
            "type": "js",
            "deps": [
                "vue/vue_mode/vue_component_mode.css"
            ]
        },
        "vue/vue_mode/vue_component_mode.css": {
            "uri": "./static/vue/vue_mode/vue_component_mode.css",
            "type": "css"
        },
        "vue/vue_x2/c_list_fav_config.js": {
            "uri": "./static/vue/vue_x2/c_list_fav_config.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_x2/c_list_fav_config"
            },
            "deps": [
                "vue/vue_x2/c_list_fav.vue"
            ]
        },
        "vue/vue_x2/c_list_fav.vue": {
            "uri": "./static/vue/vue_x2/c_list_fav.js",
            "type": "js",
            "deps": [
                "vue/vue_x2/c_list_fav.css"
            ]
        },
        "vue/vue_x2/c_list_fav.css": {
            "uri": "./static/vue/vue_x2/c_list_fav.css",
            "type": "css"
        },
        "vue/vue_x2/header_config.js": {
            "uri": "./static/vue/vue_x2/header_config.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_x2/header_config"
            },
            "deps": [
                "vue/vue_x2/header.vue"
            ]
        },
        "vue/vue_x2/header.vue": {
            "uri": "./static/vue/vue_x2/header.js",
            "type": "js",
            "deps": [
                "vue/vue_x2/header.css"
            ]
        },
        "vue/vue_x2/header.css": {
            "uri": "./static/vue/vue_x2/header.css",
            "type": "css"
        },
        "vue/vue_x2/list_config.js": {
            "uri": "./static/vue/vue_x2/list_config.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_x2/list_config"
            },
            "deps": [
                "vue/vue_x2/list.vue"
            ]
        },
        "vue/vue_x2/list.vue": {
            "uri": "./static/vue/vue_x2/list.js",
            "type": "js",
            "deps": [
                "vue/vue_x2/list.css"
            ]
        },
        "vue/vue_x2/list.css": {
            "uri": "./static/vue/vue_x2/list.css",
            "type": "css"
        },
        "vue/vue_x2/store.js": {
            "uri": "./static/vue/vue_x2/store.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_x2/store"
            }
        }
    },
    "pkg": {}
} 结构，来解决资源加载问题
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





fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 {
    "res": {
        "fis-conf.js": {
            "uri": "/fis-conf.js",
            "type": "js"
        },
        "node_modules/align-text/index.js": {
            "uri": "/node_modules/align-text/index.js",
            "type": "js",
            "deps": [
                "kind-of",
                "repeat-string",
                "longest"
            ]
        },
        "node_modules/ansi-regex/index.js": {
            "uri": "/node_modules/ansi-regex/index.js",
            "type": "js"
        },
        "node_modules/ansi-styles/index.js": {
            "uri": "/node_modules/ansi-styles/index.js",
            "type": "js"
        },
        "node_modules/bindings/bindings.js": {
            "uri": "/node_modules/bindings/bindings.js",
            "type": "js",
            "deps": [
                "fs",
                "path"
            ]
        },
        "node_modules/camelcase/index.js": {
            "uri": "/node_modules/camelcase/index.js",
            "type": "js"
        },
        "node_modules/center-align/index.js": {
            "uri": "/node_modules/center-align/index.js",
            "type": "js",
            "deps": [
                "node_modules/center-align/utils.js"
            ]
        },
        "node_modules/center-align/utils.js": {
            "uri": "/node_modules/center-align/utils.js",
            "type": "js",
            "deps": [
                "lazy-cache",
                "align-text"
            ]
        },
        "node_modules/chalk/index.js": {
            "uri": "/node_modules/chalk/index.js",
            "type": "js",
            "deps": [
                "escape-string-regexp",
                "ansi-styles",
                "strip-ansi",
                "has-ansi",
                "supports-color"
            ]
        },
        "node_modules/cliui/index.js": {
            "uri": "/node_modules/cliui/index.js",
            "type": "js",
            "deps": [
                "wordwrap",
                "right-align",
                "center-align"
            ]
        },
        "node_modules/cliui/test/cliui.js": {
            "uri": "/node_modules/cliui/test/cliui.js",
            "type": "js",
            "deps": [
                "chai",
                "index.html"
            ]
        },
        "node_modules/de-indent/index.js": {
            "uri": "/node_modules/de-indent/index.js",
            "type": "js"
        },
        "node_modules/de-indent/test.js": {
            "uri": "/node_modules/de-indent/test.js",
            "type": "js",
            "deps": [
                "assert",
                "node_modules/de-indent/index.js"
            ]
        },
        "node_modules/deasync/build.js": {
            "uri": "/node_modules/deasync/build.js",
            "type": "js",
            "deps": [
                "child_process",
                "fs",
                "path"
            ]
        },
        "node_modules/deasync/index.js": {
            "uri": "/node_modules/deasync/index.js",
            "type": "js",
            "deps": [
                "fs",
                "path",
                "bindings"
            ]
        },
        "node_modules/deasync/quick-test.js": {
            "uri": "/node_modules/deasync/quick-test.js",
            "type": "js",
            "deps": [
                "node_modules/deasync/index.js"
            ]
        },
        "node_modules/deasync/test.js": {
            "uri": "/node_modules/deasync/test.js",
            "type": "js",
            "deps": [
                "node_modules/deasync/index.js",
                "child_process",
                "http"
            ]
        },
        "node_modules/decamelize/index.js": {
            "uri": "/node_modules/decamelize/index.js",
            "type": "js"
        },
        "node_modules/escape-string-regexp/index.js": {
            "uri": "/node_modules/escape-string-regexp/index.js",
            "type": "js"
        },
        "node_modules/escope/escope.js": {
            "uri": "/node_modules/escope/escope.js",
            "type": "js",
            "deps": [
                "estraverse"
            ]
        },
        "node_modules/escope/gulpfile.coffee": {
            "uri": "/node_modules/escope/gulpfile.coffee",
            "type": "coffee",
            "deps": [
                "gulp",
                "gulp-mocha",
                "gulp-jshint",
                "coffee-script/register"
            ]
        },
        "node_modules/escope/node_modules/estraverse/estraverse.js": {
            "uri": "/node_modules/escope/node_modules/estraverse/estraverse.js",
            "type": "js",
            "deps": [
                "node_modules/escope/node_modules/estraverse/package.json"
            ]
        },
        "node_modules/escope/node_modules/estraverse/gulpfile.js": {
            "uri": "/node_modules/escope/node_modules/estraverse/gulpfile.js",
            "type": "js",
            "deps": [
                "gulp",
                "gulp-git",
                "gulp-bump",
                "gulp-filter",
                "gulp-tag-version"
            ]
        },
        "node_modules/esprima/bin/esparse.js": {
            "uri": "/node_modules/esprima/bin/esparse.js",
            "type": "js",
            "deps": [
                "fs",
                "esprima"
            ]
        },
        "node_modules/esprima/bin/esvalidate.js": {
            "uri": "/node_modules/esprima/bin/esvalidate.js",
            "type": "js",
            "deps": [
                "fs",
                "system",
                "./esprima",
                "esprima"
            ]
        },
        "node_modules/esprima/esprima.js": {
            "uri": "/node_modules/esprima/esprima.js",
            "type": "js"
        },
        "node_modules/estraverse/estraverse.js": {
            "uri": "/node_modules/estraverse/estraverse.js",
            "type": "js",
            "deps": [
                "node_modules/estraverse/package.json"
            ]
        },
        "node_modules/estraverse/gulpfile.js": {
            "uri": "/node_modules/estraverse/gulpfile.js",
            "type": "js",
            "deps": [
                "gulp",
                "gulp-git",
                "gulp-bump",
                "gulp-filter",
                "gulp-tag-version"
            ]
        },
        "node_modules/fis3-hook-module/index.js": {
            "uri": "/node_modules/fis3-hook-module/index.js",
            "type": "js",
            "deps": [
                "node_modules/fis3-hook-module/lib/amd.js",
                "node_modules/fis3-hook-module/lib/cmd.js",
                "node_modules/fis3-hook-module/lib/commonJs.js",
                "node_modules/fis3-hook-module/lib/helper.js"
            ]
        },
        "node_modules/fis3-hook-module/lib/amd.js": {
            "uri": "/node_modules/fis3-hook-module/lib/amd.js",
            "type": "js",
            "deps": [
                "esprima",
                "estraverse",
                "escope",
                "path",
                "node_modules/fis3-hook-module/lib/helper.js"
            ]
        },
        "node_modules/fis3-hook-module/lib/cmd.js": {
            "uri": "/node_modules/fis3-hook-module/lib/cmd.js",
            "type": "js",
            "deps": [
                "node_modules/fis3-hook-module/lib/amd.js"
            ]
        },
        "node_modules/fis3-hook-module/lib/commonJs.js": {
            "uri": "/node_modules/fis3-hook-module/lib/commonJs.js",
            "type": "js"
        },
        "node_modules/fis3-hook-module/lib/helper.js": {
            "uri": "/node_modules/fis3-hook-module/lib/helper.js",
            "type": "js"
        },
        "node_modules/fis3-hook-module/test/index2.js": {
            "uri": "/node_modules/fis3-hook-module/test/index2.js",
            "type": "js",
            "deps": [
                "fs",
                "path",
                "index.html",
                "chai",
                "node_modules/fis3-hook-module/lib/amd.js",
                "node_modules/fis3-hook-module/lib/commonJs.js",
                "fis3-plugin-module"
            ]
        },
        "node_modules/fis3-hook-module/test/project/dmath.js": {
            "uri": "/node_modules/fis3-hook-module/test/project/dmath.js",
            "type": "js"
        },
        "node_modules/fis3-hook-module/test/project/math.js": {
            "uri": "/node_modules/fis3-hook-module/test/project/math.js",
            "type": "js"
        },
        "node_modules/fis3-hook-module/test/project/test.js": {
            "uri": "/node_modules/fis3-hook-module/test/project/test.js",
            "type": "js"
        },
        "node_modules/fis3-hook-module/test/project/test2.js": {
            "uri": "/node_modules/fis3-hook-module/test/project/test2.js",
            "type": "js",
            "extras": {
                "async": [
                    "fs"
                ]
            },
            "deps": [
                "net"
            ]
        },
        "node_modules/fis3-hook-module/test/project/test3.js": {
            "uri": "/node_modules/fis3-hook-module/test/project/test3.js",
            "type": "js"
        },
        "node_modules/fis3-parser-vue-component/index.js": {
            "uri": "/node_modules/fis3-parser-vue-component/index.js",
            "type": "js",
            "deps": [
                "path",
                "object-assign",
                "hash-sum",
                "vue-template-compiler",
                "node_modules/fis3-parser-vue-component/lib/gen-id.js",
                "node_modules/fis3-parser-vue-component/lib/style-rewriter.js",
                "node_modules/fis3-parser-vue-component/lib/template-compiler.js",
                "node_modules/fis3-parser-vue-component/lib/insert-css.js",
                "node_modules/fis3-parser-vue-component/lib/replace-scoped-flag.js"
            ]
        },
        "node_modules/fis3-parser-vue-component/lib/gen-id.js": {
            "uri": "/node_modules/fis3-parser-vue-component/lib/gen-id.js",
            "type": "js",
            "deps": [
                "hash-sum"
            ]
        },
        "node_modules/fis3-parser-vue-component/lib/insert-css.js": {
            "uri": "/node_modules/fis3-parser-vue-component/lib/insert-css.js",
            "type": "js",
            "deps": [
                "uglify-js"
            ]
        },
        "node_modules/fis3-parser-vue-component/lib/replace-scoped-flag.js": {
            "uri": "/node_modules/fis3-parser-vue-component/lib/replace-scoped-flag.js",
            "type": "js"
        },
        "node_modules/fis3-parser-vue-component/lib/style-rewriter.js": {
            "uri": "/node_modules/fis3-parser-vue-component/lib/style-rewriter.js",
            "type": "js",
            "deps": [
                "postcss",
                "postcss-selector-parser",
                "lru-cache",
                "object-assign",
                "deasync"
            ]
        },
        "node_modules/fis3-parser-vue-component/lib/template-compiler.js": {
            "uri": "/node_modules/fis3-parser-vue-component/lib/template-compiler.js",
            "type": "js",
            "deps": [
                "chalk",
                "vue-template-compiler",
                "vue-template-es2015-compiler"
            ]
        },
        "node_modules/fis3-parser-vue-component/test/fis-conf.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test/fis-conf.js",
            "type": "js",
            "deps": [
                "path",
                "index.html"
            ]
        },
        "node_modules/fis3-parser-vue-component/test/src/js/engine/mod.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test/src/js/engine/mod.js",
            "type": "js"
        },
        "node_modules/fis3-parser-vue-component/test/src/js/page/index.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test/src/js/page/index.js",
            "type": "js",
            "deps": [
                "../../component/index",
                "node_modules/fis3-parser-vue-component/test/src/less/index.less"
            ]
        },
        "node_modules/fis3-parser-vue-component/test/src/less/index.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test/src/less/index.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test/src/less/other.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test/src/less/other.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test/src/less/other2.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test/src/less/other2.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test/src/scss/test.scss": {
            "uri": "/node_modules/fis3-parser-vue-component/test/src/scss/test.scss",
            "type": "scss"
        },
        "node_modules/fis3-parser-vue-component/test2/fis-conf.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test2/fis-conf.js",
            "type": "js",
            "deps": [
                "path",
                "index.html"
            ]
        },
        "node_modules/fis3-parser-vue-component/test2/src/js/engine/mod.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test2/src/js/engine/mod.js",
            "type": "js"
        },
        "node_modules/fis3-parser-vue-component/test2/src/js/page/index.js": {
            "uri": "/node_modules/fis3-parser-vue-component/test2/src/js/page/index.js",
            "type": "js",
            "deps": [
                "node_modules/fis3-parser-vue-component/test2/src/less/index.less"
            ]
        },
        "node_modules/fis3-parser-vue-component/test2/src/less/index.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test2/src/less/index.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test2/src/less/other.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test2/src/less/other.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test2/src/less/other2.less": {
            "uri": "./node_modules/fis3-parser-vue-component/test2/src/less/other2.css",
            "type": "css"
        },
        "node_modules/fis3-parser-vue-component/test2/src/scss/test.scss": {
            "uri": "/node_modules/fis3-parser-vue-component/test2/src/scss/test.scss",
            "type": "scss"
        },
        "node_modules/flatten/index.js": {
            "uri": "/node_modules/flatten/index.js",
            "type": "js"
        },
        "node_modules/flatten/test.js": {
            "uri": "/node_modules/flatten/test.js",
            "type": "js",
            "deps": [
                "node_modules/flatten/index.js",
                "util",
                "assert"
            ]
        },
        "node_modules/has-ansi/index.js": {
            "uri": "/node_modules/has-ansi/index.js",
            "type": "js",
            "deps": [
                "ansi-regex"
            ]
        },
        "node_modules/has-flag/index.js": {
            "uri": "/node_modules/has-flag/index.js",
            "type": "js"
        },
        "node_modules/hash-sum/hash-sum.js": {
            "uri": "/node_modules/hash-sum/hash-sum.js",
            "type": "js"
        },
        "node_modules/hash-sum/test.js": {
            "uri": "/node_modules/hash-sum/test.js",
            "type": "js",
            "deps": [
                "lodash",
                "tape",
                "."
            ]
        },
        "node_modules/he/he.js": {
            "uri": "/node_modules/he/he.js",
            "type": "js"
        },
        "node_modules/indexes-of/index.js": {
            "uri": "/node_modules/indexes-of/index.js",
            "type": "js"
        },
        "node_modules/indexes-of/test.js": {
            "uri": "/node_modules/indexes-of/test.js",
            "type": "js",
            "deps": [
                "tape",
                "."
            ]
        },
        "node_modules/is-buffer/index.js": {
            "uri": "/node_modules/is-buffer/index.js",
            "type": "js"
        },
        "node_modules/is-buffer/test/basic.js": {
            "uri": "/node_modules/is-buffer/test/basic.js",
            "type": "js",
            "deps": [
                "buffer",
                "index.html",
                "tape"
            ]
        },
        "node_modules/js-base64/base64.js": {
            "uri": "/node_modules/js-base64/base64.js",
            "type": "js",
            "deps": [
                "buffer"
            ]
        },
        "node_modules/js-base64/base64.min.js": {
            "uri": "/node_modules/js-base64/base64.min.js",
            "type": "js",
            "deps": [
                "buffer"
            ]
        },
        "node_modules/js-base64/old/base64-1.7.js": {
            "uri": "/node_modules/js-base64/old/base64-1.7.js",
            "type": "js"
        },
        "node_modules/js-base64/package.js": {
            "uri": "/node_modules/js-base64/package.js",
            "type": "js"
        },
        "node_modules/js-base64/test/dankogai.js": {
            "uri": "/node_modules/js-base64/test/dankogai.js",
            "type": "js",
            "deps": [
                "assert",
                "node_modules/js-base64/base64.js"
            ]
        },
        "node_modules/js-base64/test/es5.js": {
            "uri": "/node_modules/js-base64/test/es5.js",
            "type": "js",
            "deps": [
                "assert",
                "node_modules/js-base64/base64.js"
            ]
        },
        "node_modules/js-base64/test/large.js": {
            "uri": "/node_modules/js-base64/test/large.js",
            "type": "js",
            "deps": [
                "assert",
                "node_modules/js-base64/base64.js"
            ]
        },
        "node_modules/js-base64/test/yoshinoya.js": {
            "uri": "/node_modules/js-base64/test/yoshinoya.js",
            "type": "js",
            "deps": [
                "assert",
                "node_modules/js-base64/base64.js"
            ]
        },
        "node_modules/kind-of/index.js": {
            "uri": "/node_modules/kind-of/index.js",
            "type": "js",
            "deps": [
                "is-buffer"
            ]
        },
        "node_modules/lazy-cache/index.js": {
            "uri": "/node_modules/lazy-cache/index.js",
            "type": "js"
        },
        "node_modules/longest/index.js": {
            "uri": "/node_modules/longest/index.js",
            "type": "js"
        },
        "node_modules/lru-cache/index.js": {
            "uri": "/node_modules/lru-cache/index.js",
            "type": "js",
            "deps": [
                "pseudomap",
                "util",
                "yallist"
            ]
        },
        "node_modules/nan/include_dirs.js": {
            "uri": "/node_modules/nan/include_dirs.js",
            "type": "js",
            "deps": [
                "path"
            ]
        },
        "node_modules/nan/tools/1to2.js": {
            "uri": "/node_modules/nan/tools/1to2.js",
            "type": "js",
            "deps": [
                "commander",
                "fs",
                "glob"
            ]
        },
        "node_modules/object-assign/index.js": {
            "uri": "/node_modules/object-assign/index.js",
            "type": "js"
        },
        "node_modules/postcss-selector-parser/dist/index.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/index.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/processor.js",
                "node_modules/postcss-selector-parser/dist/selectors/attribute.js",
                "node_modules/postcss-selector-parser/dist/selectors/className.js",
                "node_modules/postcss-selector-parser/dist/selectors/combinator.js",
                "node_modules/postcss-selector-parser/dist/selectors/comment.js",
                "node_modules/postcss-selector-parser/dist/selectors/id.js",
                "node_modules/postcss-selector-parser/dist/selectors/nesting.js",
                "node_modules/postcss-selector-parser/dist/selectors/pseudo.js",
                "node_modules/postcss-selector-parser/dist/selectors/root.js",
                "node_modules/postcss-selector-parser/dist/selectors/selector.js",
                "node_modules/postcss-selector-parser/dist/selectors/string.js",
                "node_modules/postcss-selector-parser/dist/selectors/tag.js",
                "node_modules/postcss-selector-parser/dist/selectors/universal.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/parser.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/parser.js",
            "type": "js",
            "deps": [
                "flatten",
                "indexes-of",
                "uniq",
                "node_modules/postcss-selector-parser/dist/selectors/root.js",
                "node_modules/postcss-selector-parser/dist/selectors/selector.js",
                "node_modules/postcss-selector-parser/dist/selectors/className.js",
                "node_modules/postcss-selector-parser/dist/selectors/comment.js",
                "node_modules/postcss-selector-parser/dist/selectors/id.js",
                "node_modules/postcss-selector-parser/dist/selectors/tag.js",
                "node_modules/postcss-selector-parser/dist/selectors/string.js",
                "node_modules/postcss-selector-parser/dist/selectors/pseudo.js",
                "node_modules/postcss-selector-parser/dist/selectors/attribute.js",
                "node_modules/postcss-selector-parser/dist/selectors/universal.js",
                "node_modules/postcss-selector-parser/dist/selectors/combinator.js",
                "node_modules/postcss-selector-parser/dist/selectors/nesting.js",
                "node_modules/postcss-selector-parser/dist/sortAscending.js",
                "node_modules/postcss-selector-parser/dist/tokenize.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/processor.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/processor.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/parser.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/attribute.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/attribute.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/namespace.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/className.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/className.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/namespace.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/combinator.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/combinator.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/comment.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/comment.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/container.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/container.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/id.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/id.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/namespace.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/namespace.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/namespace.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/nesting.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/nesting.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/node.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/node.js",
            "type": "js"
        },
        "node_modules/postcss-selector-parser/dist/selectors/pseudo.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/pseudo.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/container.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/root.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/root.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/container.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/selector.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/selector.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/container.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/string.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/string.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/node.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/tag.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/tag.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/namespace.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/selectors/types.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/types.js",
            "type": "js"
        },
        "node_modules/postcss-selector-parser/dist/selectors/universal.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/selectors/universal.js",
            "type": "js",
            "deps": [
                "node_modules/postcss-selector-parser/dist/selectors/namespace.js",
                "node_modules/postcss-selector-parser/dist/selectors/types.js"
            ]
        },
        "node_modules/postcss-selector-parser/dist/sortAscending.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/sortAscending.js",
            "type": "js"
        },
        "node_modules/postcss-selector-parser/dist/tokenize.js": {
            "uri": "/node_modules/postcss-selector-parser/dist/tokenize.js",
            "type": "js"
        },
        "node_modules/postcss/lib/at-rule.js": {
            "uri": "/node_modules/postcss/lib/at-rule.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/container.js",
                "node_modules/postcss/lib/warn-once.js"
            ]
        },
        "node_modules/postcss/lib/comment.js": {
            "uri": "/node_modules/postcss/lib/comment.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/node.js"
            ]
        },
        "node_modules/postcss/lib/container.js": {
            "uri": "/node_modules/postcss/lib/container.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/declaration.js",
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/comment.js",
                "node_modules/postcss/lib/node.js",
                "node_modules/postcss/lib/parse.js",
                "node_modules/postcss/lib/rule.js",
                "node_modules/postcss/lib/at-rule.js",
                "node_modules/postcss/lib/root.js"
            ]
        },
        "node_modules/postcss/lib/css-syntax-error.js": {
            "uri": "/node_modules/postcss/lib/css-syntax-error.js",
            "type": "js",
            "deps": [
                "supports-color",
                "chalk",
                "node_modules/postcss/lib/terminal-highlight.js",
                "node_modules/postcss/lib/warn-once.js"
            ]
        },
        "node_modules/postcss/lib/declaration.js": {
            "uri": "/node_modules/postcss/lib/declaration.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/node.js"
            ]
        },
        "node_modules/postcss/lib/input.js": {
            "uri": "/node_modules/postcss/lib/input.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/css-syntax-error.js",
                "node_modules/postcss/lib/previous-map.js",
                "path"
            ]
        },
        "node_modules/postcss/lib/lazy-result.js": {
            "uri": "/node_modules/postcss/lib/lazy-result.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/map-generator.js",
                "node_modules/postcss/lib/stringify.js",
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/result.js",
                "node_modules/postcss/lib/parse.js"
            ]
        },
        "node_modules/postcss/lib/list.js": {
            "uri": "/node_modules/postcss/lib/list.js",
            "type": "js"
        },
        "node_modules/postcss/lib/map-generator.js": {
            "uri": "/node_modules/postcss/lib/map-generator.js",
            "type": "js",
            "deps": [
                "js-base64",
                "source-map",
                "path"
            ]
        },
        "node_modules/postcss/lib/node.js": {
            "uri": "/node_modules/postcss/lib/node.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/css-syntax-error.js",
                "node_modules/postcss/lib/stringifier.js",
                "node_modules/postcss/lib/stringify.js",
                "node_modules/postcss/lib/warn-once.js"
            ]
        },
        "node_modules/postcss/lib/parse.js": {
            "uri": "/node_modules/postcss/lib/parse.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/parser.js",
                "node_modules/postcss/lib/input.js"
            ]
        },
        "node_modules/postcss/lib/parser.js": {
            "uri": "/node_modules/postcss/lib/parser.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/declaration.js",
                "node_modules/postcss/lib/tokenize.js",
                "node_modules/postcss/lib/comment.js",
                "node_modules/postcss/lib/at-rule.js",
                "node_modules/postcss/lib/root.js",
                "node_modules/postcss/lib/rule.js"
            ]
        },
        "node_modules/postcss/lib/postcss.js": {
            "uri": "/node_modules/postcss/lib/postcss.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/declaration.js",
                "node_modules/postcss/lib/processor.js",
                "node_modules/postcss/lib/stringify.js",
                "node_modules/postcss/lib/comment.js",
                "node_modules/postcss/lib/at-rule.js",
                "node_modules/postcss/lib/vendor.js",
                "node_modules/postcss/lib/parse.js",
                "node_modules/postcss/lib/list.js",
                "node_modules/postcss/lib/rule.js",
                "node_modules/postcss/lib/root.js"
            ]
        },
        "node_modules/postcss/lib/previous-map.js": {
            "uri": "/node_modules/postcss/lib/previous-map.js",
            "type": "js",
            "deps": [
                "js-base64",
                "source-map",
                "path",
                "fs"
            ]
        },
        "node_modules/postcss/lib/processor.js": {
            "uri": "/node_modules/postcss/lib/processor.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/lazy-result.js"
            ]
        },
        "node_modules/postcss/lib/result.js": {
            "uri": "/node_modules/postcss/lib/result.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/warning.js"
            ]
        },
        "node_modules/postcss/lib/root.js": {
            "uri": "/node_modules/postcss/lib/root.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/container.js",
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/lazy-result.js",
                "node_modules/postcss/lib/processor.js"
            ]
        },
        "node_modules/postcss/lib/rule.js": {
            "uri": "/node_modules/postcss/lib/rule.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/container.js",
                "node_modules/postcss/lib/warn-once.js",
                "node_modules/postcss/lib/list.js"
            ]
        },
        "node_modules/postcss/lib/stringifier.js": {
            "uri": "/node_modules/postcss/lib/stringifier.js",
            "type": "js"
        },
        "node_modules/postcss/lib/stringify.js": {
            "uri": "/node_modules/postcss/lib/stringify.js",
            "type": "js",
            "deps": [
                "node_modules/postcss/lib/stringifier.js"
            ]
        },
        "node_modules/postcss/lib/terminal-highlight.js": {
            "uri": "/node_modules/postcss/lib/terminal-highlight.js",
            "type": "js",
            "deps": [
                "chalk",
                "node_modules/postcss/lib/tokenize.js",
                "node_modules/postcss/lib/input.js"
            ]
        },
        "node_modules/postcss/lib/tokenize.js": {
            "uri": "/node_modules/postcss/lib/tokenize.js",
            "type": "js"
        },
        "node_modules/postcss/lib/vendor.js": {
            "uri": "/node_modules/postcss/lib/vendor.js",
            "type": "js"
        },
        "node_modules/postcss/lib/warn-once.js": {
            "uri": "/node_modules/postcss/lib/warn-once.js",
            "type": "js"
        },
        "node_modules/postcss/lib/warning.js": {
            "uri": "/node_modules/postcss/lib/warning.js",
            "type": "js"
        },
        "node_modules/postcss/node_modules/supports-color/browser.js": {
            "uri": "/node_modules/postcss/node_modules/supports-color/browser.js",
            "type": "js"
        },
        "node_modules/postcss/node_modules/supports-color/index.js": {
            "uri": "/node_modules/postcss/node_modules/supports-color/index.js",
            "type": "js",
            "deps": [
                "has-flag"
            ]
        },
        "node_modules/pseudomap/map.js": {
            "uri": "/node_modules/pseudomap/map.js",
            "type": "js",
            "deps": [
                "node_modules/pseudomap/pseudomap.js"
            ]
        },
        "node_modules/pseudomap/pseudomap.js": {
            "uri": "/node_modules/pseudomap/pseudomap.js",
            "type": "js"
        },
        "node_modules/pseudomap/test/basic.js": {
            "uri": "/node_modules/pseudomap/test/basic.js",
            "type": "js",
            "deps": [
                "tap",
                "index.html"
            ]
        },
        "node_modules/repeat-string/index.js": {
            "uri": "/node_modules/repeat-string/index.js",
            "type": "js"
        },
        "node_modules/right-align/index.js": {
            "uri": "/node_modules/right-align/index.js",
            "type": "js",
            "deps": [
                "align-text"
            ]
        },
        "node_modules/source-map/dist/source-map.debug.js": {
            "uri": "/node_modules/source-map/dist/source-map.debug.js",
            "type": "js"
        },
        "node_modules/source-map/dist/source-map.js": {
            "uri": "/node_modules/source-map/dist/source-map.js",
            "type": "js"
        },
        "node_modules/source-map/dist/source-map.min.js": {
            "uri": "/node_modules/source-map/dist/source-map.min.js",
            "type": "js",
            "extras": {}
        },
        "node_modules/source-map/lib/array-set.js": {
            "uri": "/node_modules/source-map/lib/array-set.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/util.js"
            ]
        },
        "node_modules/source-map/lib/base64-vlq.js": {
            "uri": "/node_modules/source-map/lib/base64-vlq.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/base64.js"
            ]
        },
        "node_modules/source-map/lib/base64.js": {
            "uri": "/node_modules/source-map/lib/base64.js",
            "type": "js"
        },
        "node_modules/source-map/lib/binary-search.js": {
            "uri": "/node_modules/source-map/lib/binary-search.js",
            "type": "js"
        },
        "node_modules/source-map/lib/mapping-list.js": {
            "uri": "/node_modules/source-map/lib/mapping-list.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/util.js"
            ]
        },
        "node_modules/source-map/lib/quick-sort.js": {
            "uri": "/node_modules/source-map/lib/quick-sort.js",
            "type": "js"
        },
        "node_modules/source-map/lib/source-map-consumer.js": {
            "uri": "/node_modules/source-map/lib/source-map-consumer.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/util.js",
                "node_modules/source-map/lib/binary-search.js",
                "node_modules/source-map/lib/array-set.js",
                "node_modules/source-map/lib/base64-vlq.js",
                "node_modules/source-map/lib/quick-sort.js"
            ]
        },
        "node_modules/source-map/lib/source-map-generator.js": {
            "uri": "/node_modules/source-map/lib/source-map-generator.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/base64-vlq.js",
                "node_modules/source-map/lib/util.js",
                "node_modules/source-map/lib/array-set.js",
                "node_modules/source-map/lib/mapping-list.js"
            ]
        },
        "node_modules/source-map/lib/source-node.js": {
            "uri": "/node_modules/source-map/lib/source-node.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/source-map-generator.js",
                "node_modules/source-map/lib/util.js"
            ]
        },
        "node_modules/source-map/lib/util.js": {
            "uri": "/node_modules/source-map/lib/util.js",
            "type": "js"
        },
        "node_modules/source-map/source-map.js": {
            "uri": "/node_modules/source-map/source-map.js",
            "type": "js",
            "deps": [
                "node_modules/source-map/lib/source-map-generator.js",
                "node_modules/source-map/lib/source-map-consumer.js",
                "node_modules/source-map/lib/source-node.js"
            ]
        },
        "node_modules/strip-ansi/index.js": {
            "uri": "/node_modules/strip-ansi/index.js",
            "type": "js",
            "deps": [
                "ansi-regex"
            ]
        },
        "node_modules/supports-color/index.js": {
            "uri": "/node_modules/supports-color/index.js",
            "type": "js"
        },
        "node_modules/uglify-js/bin/extract-props.js": {
            "uri": "/node_modules/uglify-js/bin/extract-props.js",
            "type": "js",
            "deps": [
                "node_modules/uglify-js/tools/node.js",
                "fs",
                "yargs"
            ]
        },
        "node_modules/uglify-js/lib/ast.js": {
            "uri": "/node_modules/uglify-js/lib/ast.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/compress.js": {
            "uri": "/node_modules/uglify-js/lib/compress.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/mozilla-ast.js": {
            "uri": "/node_modules/uglify-js/lib/mozilla-ast.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/output.js": {
            "uri": "/node_modules/uglify-js/lib/output.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/parse.js": {
            "uri": "/node_modules/uglify-js/lib/parse.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/propmangle.js": {
            "uri": "/node_modules/uglify-js/lib/propmangle.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/scope.js": {
            "uri": "/node_modules/uglify-js/lib/scope.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/sourcemap.js": {
            "uri": "/node_modules/uglify-js/lib/sourcemap.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/transform.js": {
            "uri": "/node_modules/uglify-js/lib/transform.js",
            "type": "js"
        },
        "node_modules/uglify-js/lib/utils.js": {
            "uri": "/node_modules/uglify-js/lib/utils.js",
            "type": "js"
        },
        "node_modules/uglify-js/tools/exports.js": {
            "uri": "/node_modules/uglify-js/tools/exports.js",
            "type": "js"
        },
        "node_modules/uglify-js/tools/node.js": {
            "uri": "/node_modules/uglify-js/tools/node.js",
            "type": "js",
            "deps": [
                "path",
                "fs",
                "source-map"
            ]
        },
        "node_modules/uglify-to-browserify/index.js": {
            "uri": "/node_modules/uglify-to-browserify/index.js",
            "type": "js",
            "deps": [
                "fs",
                "stream"
            ]
        },
        "node_modules/uglify-to-browserify/test/index.js": {
            "uri": "/node_modules/uglify-to-browserify/test/index.js",
            "type": "js",
            "deps": [
                "fs",
                "index.html",
                "./output.js"
            ]
        },
        "node_modules/uniq/test/test.js": {
            "uri": "/node_modules/uniq/test/test.js",
            "type": "js",
            "deps": [
                "node_modules/uniq/uniq.js",
                "tape"
            ]
        },
        "node_modules/uniq/uniq.js": {
            "uri": "/node_modules/uniq/uniq.js",
            "type": "js"
        },
        "node_modules/vue-template-compiler/build.js": {
            "uri": "/node_modules/vue-template-compiler/build.js",
            "type": "js",
            "deps": [
                "de-indent",
                "he"
            ]
        },
        "node_modules/vue-template-compiler/index.js": {
            "uri": "/node_modules/vue-template-compiler/index.js",
            "type": "js",
            "deps": [
                "vue",
                "node_modules/vue-template-compiler/package.json",
                "node_modules/vue-template-compiler/build.js"
            ]
        },
        "node_modules/vue-template-es2015-compiler/buble.js": {
            "uri": "/node_modules/vue-template-es2015-compiler/buble.js",
            "type": "js"
        },
        "node_modules/vue-template-es2015-compiler/index.js": {
            "uri": "/node_modules/vue-template-es2015-compiler/index.js",
            "type": "js",
            "deps": [
                "node_modules/vue-template-es2015-compiler/buble.js"
            ]
        },
        "node_modules/window-size/index.js": {
            "uri": "/node_modules/window-size/index.js",
            "type": "js",
            "deps": [
                "tty"
            ]
        },
        "node_modules/wordwrap/example/center.js": {
            "uri": "/node_modules/wordwrap/example/center.js",
            "type": "js",
            "deps": [
                "wordwrap"
            ]
        },
        "node_modules/wordwrap/example/meat.js": {
            "uri": "/node_modules/wordwrap/example/meat.js",
            "type": "js",
            "deps": [
                "wordwrap"
            ]
        },
        "node_modules/wordwrap/index.js": {
            "uri": "/node_modules/wordwrap/index.js",
            "type": "js"
        },
        "node_modules/wordwrap/test/break.js": {
            "uri": "/node_modules/wordwrap/test/break.js",
            "type": "js",
            "deps": [
                "assert",
                "index.html"
            ]
        },
        "node_modules/wordwrap/test/wrap.js": {
            "uri": "/node_modules/wordwrap/test/wrap.js",
            "type": "js",
            "deps": [
                "assert",
                "wordwrap",
                "fs"
            ]
        },
        "node_modules/yallist/iterator.js": {
            "uri": "/node_modules/yallist/iterator.js",
            "type": "js",
            "deps": [
                "node_modules/yallist/yallist.js"
            ]
        },
        "node_modules/yallist/yallist.js": {
            "uri": "/node_modules/yallist/yallist.js",
            "type": "js"
        },
        "node_modules/yargs/index.js": {
            "uri": "/node_modules/yargs/index.js",
            "type": "js",
            "deps": [
                "assert",
                "path",
                "node_modules/yargs/lib/completion.js",
                "node_modules/yargs/lib/parser.js",
                "node_modules/yargs/lib/usage.js",
                "node_modules/yargs/lib/validation.js",
                "window-size"
            ]
        },
        "node_modules/yargs/lib/completion.js": {
            "uri": "/node_modules/yargs/lib/completion.js",
            "type": "js",
            "deps": [
                "fs",
                "path"
            ]
        },
        "node_modules/yargs/lib/parser.js": {
            "uri": "/node_modules/yargs/lib/parser.js",
            "type": "js",
            "deps": [
                "camelcase",
                "path"
            ]
        },
        "node_modules/yargs/lib/usage.js": {
            "uri": "/node_modules/yargs/lib/usage.js",
            "type": "js",
            "deps": [
                "cliui",
                "decamelize",
                "window-size"
            ]
        },
        "node_modules/yargs/lib/validation.js": {
            "uri": "/node_modules/yargs/lib/validation.js",
            "type": "js"
        },
        "about.js": {
            "uri": "/static/about.js",
            "type": "js"
        },
        "component_modules/director.js": {
            "uri": "./static/component_modules/director.js",
            "type": "js",
            "extras": {
                "moduleId": "component_modules/director"
            }
        },
        "component_modules/jquery-3.2.1.js": {
            "uri": "./static/component_modules/jquery-3.2.1.js",
            "type": "js",
            "extras": {
                "moduleId": "component_modules/jquery-3.2.1"
            }
        },
        "css/about.css": {
            "uri": "./static/css/about.css",
            "type": "css"
        },
        "css/common.css": {
            "uri": "./static/css/common.css",
            "type": "css"
        },
        "css/index.css": {
            "uri": "./static/css/index.css",
            "type": "css"
        },
        "css/test.less": {
            "uri": "./static/css/test.css",
            "type": "css"
        },
        "lib/mod.js": {
            "uri": "./static/lib/mod.js",
            "type": "js"
        },
        "lib/vue.js": {
            "uri": "./static/lib/vue.js",
            "type": "js"
        },
        "lib/vuex.js": {
            "uri": "./static/lib/vuex.js",
            "type": "js"
        },
        "single/car.js": {
            "uri": "./static/single/car.js",
            "type": "js",
            "extras": {
                "moduleId": "single/car"
            },
            "deps": [
                "single/engine.js"
            ]
        },
        "single/engine.js": {
            "uri": "./static/single/engine.js",
            "type": "js",
            "extras": {
                "moduleId": "single/engine"
            }
        },
        "single/hello2.js": {
            "uri": "./static/single/hello2.js",
            "type": "js",
            "extras": {
                "moduleId": "single/hello2"
            },
            "deps": [
                "single/engine.js"
            ]
        },
        "use/hello.js": {
            "uri": "./static/use/hello.js",
            "type": "js",
            "extras": {
                "moduleId": "use/hello"
            }
        },
        "use/index.js": {
            "uri": "./static/use/index.js",
            "type": "js",
            "extras": {
                "moduleId": "use/index"
            }
        },
        "use/test.es": {
            "uri": "./static/use/test.js",
            "type": "js"
        },
        "vue/article/article.css": {
            "uri": "./static/vue/article/article.css",
            "type": "css"
        },
        "vue/article/article.js": {
            "uri": "./static/vue/article/article.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/article/article"
            }
        },
        "vue/error/notfound.js": {
            "uri": "./static/vue/error/notfound.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/error/notfound"
            }
        },
        "vue/footer/footer.css": {
            "uri": "./static/vue/footer/footer.css",
            "type": "css"
        },
        "vue/footer/footer.js": {
            "uri": "./static/vue/footer/footer.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/footer/footer"
            }
        },
        "vue/home/home.css": {
            "uri": "./static/vue/home/home.css",
            "type": "css"
        },
        "vue/home/home.js": {
            "uri": "./static/vue/home/home.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/home/home"
            }
        },
        "vue/list/list.css": {
            "uri": "./static/vue/list/list.css",
            "type": "css"
        },
        "vue/list/list.js": {
            "uri": "./static/vue/list/list.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/list/list"
            }
        },
        "vue/vue_demo.js": {
            "uri": "./static/vue/vue_demo.js",
            "type": "js",
            "extras": {
                "async": [
                    "vue/article/article.js",
                    "vue/error/notfound.js"
                ],
                "moduleId": "vue/vue_demo"
            },
            "deps": [
                "vue/footer/footer.js",
                "vue/home/home.js",
                "vue/list/list.js",
                "component_modules/director.js",
                "vue/vue_mode/index.js"
            ]
        },
        "vue/vue_mode/area.vue": {
            "uri": "./static/vue/vue_mode/area.js",
            "type": "js",
            "deps": [
                "vue/vue_mode/area.css"
            ]
        },
        "vue/vue_mode/area.css": {
            "uri": "./static/vue/vue_mode/area.css",
            "type": "css"
        },
        "vue/vue_mode/index.js": {
            "uri": "./static/vue/vue_mode/index.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_mode/index"
            },
            "deps": [
                "vue/vue_mode/area.vue"
            ]
        },
        "vue/vue_mode/vue_component_config.js": {
            "uri": "./static/vue/vue_mode/vue_component_config.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_mode/vue_component_config"
            },
            "deps": [
                "vue/vue_mode/vue_component_mode.vue"
            ]
        },
        "vue/vue_mode/vue_component_mode.vue": {
            "uri": "./static/vue/vue_mode/vue_component_mode.js",
            "type": "js",
            "deps": [
                "vue/vue_mode/vue_component_mode.css"
            ]
        },
        "vue/vue_mode/vue_component_mode.css": {
            "uri": "./static/vue/vue_mode/vue_component_mode.css",
            "type": "css"
        },
        "vue/vue_x2/c_list_fav_config.js": {
            "uri": "./static/vue/vue_x2/c_list_fav_config.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_x2/c_list_fav_config"
            },
            "deps": [
                "vue/vue_x2/c_list_fav.vue"
            ]
        },
        "vue/vue_x2/c_list_fav.vue": {
            "uri": "./static/vue/vue_x2/c_list_fav.js",
            "type": "js",
            "deps": [
                "vue/vue_x2/c_list_fav.css"
            ]
        },
        "vue/vue_x2/c_list_fav.css": {
            "uri": "./static/vue/vue_x2/c_list_fav.css",
            "type": "css"
        },
        "vue/vue_x2/header_config.js": {
            "uri": "./static/vue/vue_x2/header_config.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_x2/header_config"
            },
            "deps": [
                "vue/vue_x2/header.vue"
            ]
        },
        "vue/vue_x2/header.vue": {
            "uri": "./static/vue/vue_x2/header.js",
            "type": "js",
            "deps": [
                "vue/vue_x2/header.css"
            ]
        },
        "vue/vue_x2/header.css": {
            "uri": "./static/vue/vue_x2/header.css",
            "type": "css"
        },
        "vue/vue_x2/list_config.js": {
            "uri": "./static/vue/vue_x2/list_config.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_x2/list_config"
            },
            "deps": [
                "vue/vue_x2/list.vue"
            ]
        },
        "vue/vue_x2/list.vue": {
            "uri": "./static/vue/vue_x2/list.js",
            "type": "js",
            "deps": [
                "vue/vue_x2/list.css"
            ]
        },
        "vue/vue_x2/list.css": {
            "uri": "./static/vue/vue_x2/list.css",
            "type": "css"
        },
        "vue/vue_x2/store.js": {
            "uri": "./static/vue/vue_x2/store.js",
            "type": "js",
            "extras": {
                "moduleId": "vue/vue_x2/store"
            }
        }
    },
    "pkg": {}
} 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        useInlineMap: true // 资源映射表内嵌
    }),
    packager: fis.plugin('map'),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })
    
})



fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: '../fis3_vue_single_page_pub'
    })
})

