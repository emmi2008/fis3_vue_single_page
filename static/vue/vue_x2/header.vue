<template>
    <div>
        <div class='mod'>
            增加
        </div>


        <div class='mod'>
            删除
        </div>
    </div>
</template>

<style lang='less'>
.mod{
    width:80px;
    height:40px;
    line-height:40px;
    background:#666;
    color:#fff;
    text-align: center;
    margin:15px 0;
}
</style>

<script type='text/babel'>
    let global_location_data = {};
    export default
    {
        name : 'vue_component_mode',
        props : {
            //默认写法
            message :
            {
                type : String,
                default: ''
            }

        },
        mounted()
        {
            var self = this;
            self.$emit('success_3',{
                tips: self.txt
            })
        },
        data()
        {
            return {
                txt : '3'
            }
        },
        components:
        {
          
        },
        computed:
        {

        },
        methods :
        {
            open()
            {
                var self = this;
    
            }
        }
    }
</script>