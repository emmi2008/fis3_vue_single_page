<template>
    <div>
        <div class="header">
            <div class="left" @click="goback"> < </div>
                <div class="title">pageA</div>
            </div>
            <div>
            <router-link to="/pageB">这里是A页面的内容</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pageA',
    methods: {
        goback () {
            this.$router.goBack()
        }
    }
    }
</script>
