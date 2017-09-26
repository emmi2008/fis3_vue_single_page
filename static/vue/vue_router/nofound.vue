<template>
    <div>
        <div class="header">
            <div class="left" @click="goback"> < </div>
                <div class="title">错误</div>
            </div>
            <div>

            没有找到此页<br />
            <router-link to="/">返回首页</router-link>

        </div>
    </div>
</template>

<script>
export default {
    name: 'notfound',
    methods: {
        goback () {
            this.$router.goBack()
        }
    }
    }
</script>
