<template>
    <div>
        <ul class="list clearfix">
            <li v-for="(item, index) in list">
                姓名：{{item.name}}  <span class="del" @click="del_cur(index)">删除</span> 

                <span v-if="item.favorite"></span>
                <span v-else><span class="del" @click="fav(index)">收藏</span></span>
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
                show : true
            }
        },
        components:
        {
          
        },
        computed:
        {
            list() {

                return this.$store.state.list
            },
        },
        methods :
        {
            del_cur(index)
            {
                this.$store.dispatch('del_cur',index)
            },

            fav(index)
            {
                var self = this;
                this.$store.dispatch('fav',index)
            },
        }
    }
</script>