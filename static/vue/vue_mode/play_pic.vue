<template>
    <div class='play_pic'  v-if="is_show"  @mousewheel.prevent="fn_mousewheel"  @DOMMouseScroll.prevent="fn_mousewheel" >

        <a  href="javascript:void(0);" class="close" @click="fn_close()">
            <img src="../../images/close.jpg" />
        </a>

        <div class="lbox" v-if="current_pos > 0" @click="current_pos--">
            <img src="../../images/l.jpg" />
        </div>

        <div class="tips">
            <span v-text="current_pos+1"></span>/<span v-text="count"></span> 
        </div>

        <div class="cbox">
            <span>
                <img  :src="image_list[current_pos] && image_list[current_pos].image" />
            </span>
        </div>

        <div class="rbox" v-if="current_pos < count - 1" @click="current_pos++">
            span
            <img src="../../images/r.jpg" />
        </div>
    </div>
</template>

<style lang='sass'>

    html, body{
        padding:0 !important;
    }
    .play_pic{
        background: rgba(0,0,0,.8);
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9990;
    }

    .lbox{
        display: block;
        position: absolute;
        top:50%;
        height:56px;
        width: 30px;
        margin-top:-28px;
        line-height: 1;
        cursor: pointer;
        z-index:3;
        left:20px;
    }

    .cbox{
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 90px 0;
        z-index: 2;
        box-sizing: border-box;
    }
    .cbox img{
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        width: auto;
        max-width: 100%;
        max-height: 100%;
        -webkit-transform: translate3d(-50%,-50%,0);
        -ms-transform: translate3d(-50%,-50%,0);
        -moz-transform: translate3d(-50%,-50%,0);
        transform: translate3d(-50%,-50%,0);
    }
    .cbox span{
        display: block;
        position: relative;
        width: 100%;
        height: 100%; 
    }
    
    .rbox{
        display: block;
        position: absolute;
        top:50%;
        height:56px;
        width: 30px;
        margin-top:-28px;
        line-height: 1;
        cursor: pointer;
        z-index:3;
        right:40px;
    }

    .tips{
        color: #fff;
        position: absolute;
        width: 100%;
        text-align: center;
        left: 0;
        top: 35px;
        font-size: 18px;
        z-index: 3;
    }
    .close{
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        z-index: 11;
        cursor: pointer;
    }
</style>

<script type='text/babel'>
    // 图片数组格式
    // [
    //     {
    //         "image" :"******"
    //     },
    //     {
    //         "image" :"******"
    //     }
    // ]

    let global_location_data = {};
    export default
    {
        name : 'play_pic',
        props : 
        {
            "select" : Number,
            "image_list" : Array,
            "is_show"  : Boolean,
            "son"  : Number
        },
        data()
        {
            return {
                "current_pos" : this.select || 0,
                "son_data" : this.son
            }
        },

        mounted()
        {
            var self = this;
            console.log(this.son);
            document.onkeydown=function(event){
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if(e && e.keyCode==37)
                {   
                    // console.log("左键");
                    self.current_pos--;
                }
                if(e && e.keyCode==39)
                {
                    //右键
                    self.current_pos++;
                }
            };
        },

        components:
        {
          
        },
        computed:
        {
            "count":function () {
                return this.image_list.length || 0;
            },
            "test_num":function () {
                return 66;
            }

        },

        watch:{
            "select":function ()
             {
                this.current_pos = this.select || 0;
                console.log(this.select);
            },

            "current_pos":function () 
            {
                var self = this;
                if(self.current_pos < 0) 
                    self.current_pos = 0;
                else if(self.current_pos > self.count-1)
                {
                    self.current_pos = self.count-1;
                }
                self.son_data++;
                console.log(self.son_data);
                self.$emit("update:father", this.son_data);
                // this.$emit("update:select",this.current_pos);
            }
        },

        methods :
        {
            "fn_close":function () 
            {
                this.$emit("close");
                // console.log("关闭");
            },

            "fn_mousewheel":function (e) 
            {
                var cc_which = e.detail ? - e.detail : e.wheelDelta;
                if(cc_which < 0)
                {
                    this.current_pos++;
                }
                else{
                    this.current_pos--;
                }
            }
        }
    }
</script>