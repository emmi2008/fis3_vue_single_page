'use strict';

define('vue/vue_x2/store', function (require, exports, module) {

    'use strict';

    var _mutations;

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
        } else {
            obj[key] = value;
        }return obj;
    }

    module.exports = new Vuex.Store({
        state: {
            list: [{
                name: '张1',
                favorite: true
            }, {
                name: '张2',
                favorite: false
            }, {
                name: '张3',
                favorite: false
            }],
            name_txt: ''

        },

        mutations: (_mutations = {}, _defineProperty(_mutations, 'add', function add(state) {

            var item = {
                name: '暂无昵称',
                favorite: false
            };

            var new_name = state.name_txt;

            // console.log(new_name);

            var new_item = {
                name: new_name,
                favorite: false
            };
            // function objMerger(obj1, obj2)
            // {
            //     for(var i in obj2)
            //     {
            //         console.log(i);
            //         // console.log("obj1." +i + "=obj2." + i);
            //         // console.log(eval("obj1." +i + "=obj2." + i));
            //         eval("obj1." +i + "=obj2." + i);
            //         // obj1.i = obj2.i
            //     }
            //     return obj1;
            // }

            function extend(obj1, obj2) {
                for (var i in obj2) {
                    obj1[i] = obj2[i];
                }
                return obj1;
            }

            // var obj = objMerger(item, new_item);
            var obj = extend(item, new_item);

            // console.log(obj);

            state.list.push(item);

            state.name_txt = "";
        }), _defineProperty(_mutations, 'del', function del(state) {
            state.list.splice(state, 1);
        }), _defineProperty(_mutations, 'del_cur', function del_cur(state, index) {
            console.log(index);
            state.list.splice(index, 1);
        }), _defineProperty(_mutations, 'editNote', function editNote(state, txt) {
            console.log(txt);
            state.name_txt = txt;
        }), _mutations),

        getters: {
            list: function list(state) {
                return state.list;
            },
            name_txt: function name_txt(state) {
                return state.name_txt;
            }
        },

        actions: {
            add: function add(_ref) {
                var commit = _ref.commit;

                commit('add');
            },
            del: function del(_ref2) {
                var commit = _ref2.commit;

                commit('del');
            },
            del_cur: function del_cur(_ref3, index) {
                var commit = _ref3.commit;

                commit('del_cur', index);
            },

            editNote: function editNote(_ref4, text) {
                var commit = _ref4.commit;

                commit('editNote', text);
            }
        }
    });
});