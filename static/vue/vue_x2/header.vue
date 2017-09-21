<template>
    <div>
        <div>请输入姓名：</div>
        <textarea   v-model="name_txt" class="textarea-class"  :value="activeNoteText"  @input="editorNote" ></textarea>
        <br/>

        <div class='mod' @click="add">增加</div>
        <div class='mod' @click="del">删除</div>
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
    display: inline-block;
    cursor: pointer;
}
.add{
    cursor: pointer;
}
.del{
    cursor: pointer;
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
            name_txt() {
                return this.$store.state.name_txt
            },

            activeNoteText(){
                return this.$store.getters.name_txt
            }
        },
        methods :
        {
            add()
            {   

                var self = this;
                console.log('增加');
                self.$store.dispatch('add')
            },
            del()
            {
                var self = this;
                console.log('删除');
                self.$store.dispatch('del')
            },

            editorNote(e) {
                var self = this;
                console.log('修改');
                self.$store.dispatch('editNote', e.target.value)
            }

        }
    }
</script>