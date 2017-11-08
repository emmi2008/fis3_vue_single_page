<template>
    <div>

        <div class="w_pui_dialog cc_topic_default" style="z-index: 100000; margin-top: -100px; margin-left: -280px;" >
            <div class="cc_main">
                <div class="cc_close"> <i class="iconfont icon-close"></i>
                </div>
                <div class="cc_confirm">
                    <div class="cc_content">是否删除评论？</div>
                    <div class="cc_tools">
                        <a href="javascript:void(0)" class="gp_button gp_button_h40 gp_button_white">取消</a>
                        <a href="javascript:void(0)" class="gp_button gp_button_h40 gp_button_topic_main">确定</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="w_pui_dialog_mask" >
            <div class="cc_in" style="position: fixed;background: rgb(0, 0, 0);z-index: 99999;"></div>
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