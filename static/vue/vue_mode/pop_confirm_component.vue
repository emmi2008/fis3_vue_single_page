<template>
    <div>
        
        <transition name="slide_down" @after-leave="fn_after_hide">
            <div class="w_pui_dialog cc_topic_default" v-show="pop_is_show" style="z-index: 100000; margin-top: -100px; margin-left: -280px;" >
                    <div class="cc_main">
                        <div class="cc_close"  @click="cancel()"> <i class="iconfont icon-close"><img src="../../images/close.jpg" /></i>
                        </div>
                        <div class="cc_confirm">
                            <div class="cc_content">这里是提示文案</div>
                            <div class="cc_tools">
                                <a href="javascript:void(0)" @click="cancel()" class="gp_button gp_button_h40 gp_button_white">取消</a>
                                <a href="javascript:void(0)" @click="confirm()" class="gp_button gp_button_h40 gp_button_topic_main">确定</a>
                            </div>
                        </div>
                    </div>
            </div>
        </transition>



        <div class="w_pui_dialog_mask" >
            <transition name="fade"    @after-enter = "fn_after_show">
                <div class="cc_in" :style="{background:background}"  v-show="pop_is_show_mask"></div>
            </transition>
        </div>


    </div>

</template>

<script type='text/babel'>
    let global_location_data = {};
    export default
    {
        name : 'pop_confirm_component',
        props : {
            //默认写法
            "pop_is_show" : {
                "type" : [String,Boolean],
                "default" : ''
            },
            "pop_is_show_mask" : {
                "type" : [String,Boolean],
                "default" : ''
            },
            "background":{
                "type":String,
                "default":"#000"
            },
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
            cancel()
            {
                var self = this;
                this.$emit("cancel");
            },

            confirm()
            {
                var self = this;
                this.$emit("confirm");

            },


            fn_after_hide:function(){
                console.log(11);
                this.$emit("emit_hide");
            },


            fn_after_show:function(){
                console.log(22);
                this.$emit("emit_show");
            },

        

        }
    }
</script>