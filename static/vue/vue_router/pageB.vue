<template>
    <div>
        <div class="header">
            <div class="left" @click="goback"> < </div>
                <div class="title">pageB</div>
            </div>
            <div>
            <router-link to="/pageA">这里是B页面的内容</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pageB',
    methods: {
        goback () {
            this.$router.goBack()
        }
    }
    }
</script>
