module.exports = new Vuex.Store({
    state: {
        list : [
            {
                name : '张1',
                cur : true,
                num : 1
            },
            {
                name : '张2',
                cur : false,
                num : 2
            },
            {
                name : '张3',
                cur : false,
                num : 3
            },
            {
                name : '张4',
                cur : false,
                num : 4
            },
            {
                name : '张4',
                cur : false,
                num : 5
            }
        ]
    },
    
    mutations: {

    },


    getters : {
        list: function(state) {
            return state.list
        },
    }
})
