<template>
    <div  class="pop_confirm" :class="pop_confirm_is_show">

        <div class="w_pui_dialog cc_topic_default" style="z-index: 100000; margin-top: -100px; margin-left: -280px;" >
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

        <div class="w_pui_dialog_mask">
            <div class="cc_in"></div>
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
            "pop_confirm_is_show" : {
                "type" : String,
                "default" : ''
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
            cancel()
            {
                var self = this;
                this.$emit("cancel");
            },

            confirm()
            {
                var self = this;
                this.$emit("confirm");

            }

            


        }
    }
</script>