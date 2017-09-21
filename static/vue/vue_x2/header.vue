<template>
    <div>
        <div class='mod' @click="add">
            增加
        </div>


        <div class='mod' @click="del">
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
        name : 'header',
        mounted()
        {

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
            add()
            {
                var self = this;
                console.log('增加');
                this.$store.dispatch('add')
            },
            del()
            {
                var self = this;
                console.log('删除');
                this.$store.dispatch('del')
            },
            
        }
    }
</script>