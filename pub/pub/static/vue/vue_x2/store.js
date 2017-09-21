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
                cur: true
            }, {
                name: '张2',
                cur: false
            }, {
                name: '张3',
                cur: false
            }, {
                name: '张4',
                cur: false
            }, {
                name: '张5',
                cur: false
            }]
        },

        mutations: (_mutations = {}, _defineProperty(_mutations, 'add', function add(state) {

            var item = {
                name: '新建项目',
                cur: false
            };
            state.list.push(item);
        }), _defineProperty(_mutations, 'del', function del(state) {
            state.list.splice(state, 1);
        }), _defineProperty(_mutations, 'del_cur', function del_cur(state, index) {
            console.log(index);
            state.list.splice(index, 1);
        }), _mutations),

        getters: {
            list: function list(state) {
                return state.list;
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
            }
        }
    });
});