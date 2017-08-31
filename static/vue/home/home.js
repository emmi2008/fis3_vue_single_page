// var Vue = require('component_modules/vue.js');
// require('vue/footer/footer.js');
// require('vue/list/list.js');
// var $ = require('component_modules/jquery-3.2.1.js');





module.exports = Vue.extend(
{
    inherit: false, //集成父元素所有属性
    template: __inline('home.html'),

    // 每次执行
    computed:{
        inside_message: function(){
            console.log('computed');
            // console.log(this.message);
            return this.$parent.type;
        }
    },


    mounted: function() {
        // this.inside_message;
        // this.plus();
    },

    methods: { 
        plus: function () {
            console.log('methods');
            return this.$parent.type;
        }
    },

    data: function()
    {
        // 把父组件的属性拿回来
        // console.log(this.$parent.type);
        // var type = this.inside_message;
        // console.log(this.$parent.type);

        return{
            'type': this.$parent.type
        }
    },
    
    ready: function()
    {
        var self = this;
    }

});