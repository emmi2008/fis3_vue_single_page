module.exports = new Vuex.Store({
    state: {
        list : [
            {
                name : '张1',
                cur : true
            },
            {
                name : '张2',
                cur : false
            },
            {
                name : '张3',
                cur : false
            },
            {
                name : '张4',
                cur : false
            },
            {
                name : '张5',
                cur : false
            }
        ]
    },
    
    mutations:{
        ['add'](state){

            var item = 
            {
                name : '新建项目',
                cur : false
            };
            state.list.push(item);
        },
        ['del'](state){
            state.list.splice(state, 1);
        },

        ['del_cur'](state,index){
            console.log(index);
            state.list.splice(index, 1);
        }

    },


    getters : {
        list: function(state) {
            return state.list
        },
    },

    actions: {
        add({commit}) {
            commit('add')
        },
        del({commit}) {
            commit('del')
        },
        del_cur({commit},index) {
            commit('del_cur',index)
        }
    }
})
