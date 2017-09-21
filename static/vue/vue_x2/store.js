module.exports = new Vuex.Store({
    state: {
        list : [
            {
                name : '张1',
                favorite : false
            },
            {
                name : '张2',
                favorite : false
            },
            {
                name : '张3',
                favorite : false
            }
        ],
        name_txt : ''



    },
    
    mutations:{
        ['add'](state){

            if (!state.name_txt) 
            {
                alert('亲输入昵称！');
                return ;
            }

            var item = 
            {
                name : '暂无昵称',
                favorite : false
            };

            var new_name = state.name_txt;

            // console.log(new_name);

            var new_item = {
                name : new_name,
                favorite : false
            }
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

            function extend(obj1, obj2)  
            {  
                for (var i in obj2)
                {
                     obj1[i]=obj2[i];
                } 
                return obj1
            } 

            // var obj = objMerger(item, new_item);  
            var obj = extend(item, new_item);  

            // console.log(obj);

            state.list.push(item);

            state.name_txt = ""

        },
        ['del'](state){
            state.list.splice(state, 1);
        },

        ['del_cur'](state,index){
            console.log(index);
            state.list.splice(index, 1);

        },

        ['editNote'](state,txt){
            // console.log(txt);
            state.name_txt = txt
        },

        ['fav'](state,index){
            state.list[index]['favorite'] = true;
            console.log(index);
        },

        ['cancel'](state,index){

            var arr = state.list.filter(item => item.favorite);
            arr[index]['favorite'] = false;
            console.log(index);
        }



    },


    getters : {
        list: function(state) {
            return state.list
        },
        name_txt: function(state) {
            return state.name_txt
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
        },

        editNote({commit}, text) {
          commit('editNote', text)
        },

        fav({commit}, index) {
          commit('fav', index)
        },

        cancel({commit}, index) {
          commit('cancel', index)
        }
    }
})
