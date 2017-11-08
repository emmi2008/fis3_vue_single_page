<template>
    <div class='pop-area'>
        <span class='click' @click="click()">点击弹出</span>
    </div>
</template>

<script type='text/babel'>
    let global_location_data = {};
    export default
    {
        name : 'pop_confirm_component',
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
 
        },
        data()
        {
            return {

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
            click()
            {
                var self = this;
                console.log('点击');
            }
        }
    }
</script>