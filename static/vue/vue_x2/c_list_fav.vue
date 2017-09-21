<template>
    <div>
        收藏列表：
        <ul class="list clearfix">
            <li v-for="(item, index) in list">
                姓名：{{item.name}} 
                <span v-if="item.favorite"><span class="del" @click="cancel(index)">取消收藏</span></span>
            </li>
        </ul>   
    </div>
</template>

<style lang='less'>
    li{
        margin-bottom:5px;
    }
    .del{
        margin-left:15px;
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
            list() {
                // return this.$store.state.list
                return this.$store.state.list.filter(item => item.favorite)
            },
        },
        methods :
        {
            cancel(index)
            {
                var self = this;
                this.$store.dispatch('cancel',index)
            },
        }
    }
</script>