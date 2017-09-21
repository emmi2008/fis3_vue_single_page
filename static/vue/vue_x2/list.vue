<template>
    <div>
        <ul class="list clearfix">
            <li v-for="item in list">
                序列号：{{item.num}}
                <br/>
                姓名：{{item.name}}
            </li>
        </ul>   
    </div>
</template>

<style lang='less'>

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
            // open()
            // {
            //     var self = this;
    
            // }
        }
    }
</script>