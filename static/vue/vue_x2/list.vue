<template>
    <div>
        <ul class="list clearfix">
            <li v-for="(item, index) in list">
                序列号：{{index+1}}
                <br/>
                姓名：{{item.name}}  <span class="del" @click="del_cur(index)">删除当前</span>


            </li>
        </ul>   
    </div>
</template>

<style lang='less'>
    li{
        margin-bottom:10px;
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
              return this.$store.state.list
            },
        },
        methods :
        {
            del_cur(index)
            {
                this.$store.dispatch('del_cur',index)
            }
        }
    }
</script>