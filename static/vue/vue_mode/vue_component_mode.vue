<template>
    <div class='test'>
        <span class='s'>直接require引入 {{message}}</span>
    </div>
</template>

<style lang='less'>
.test {
    // float: right;
    .s{
        font-size: 28px;
    }
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