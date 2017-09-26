<template>
    <div>
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                transitionName: 'slide-left'
            }
        },

        beforeRouteUpdate (to, from, next){
            let isBack = this.$router.isBack
            console.log(isBack);
            if (isBack) 
            {
                this.transitionName = 'slide-right'
            } 
            else 
            {
                this.transitionName = 'slide-left'
            }
            this.$router.isBack = false;
            next()
        }
    }
</script>

<style>


</style>
