<template>
    <div>
        <div class="header">
            <div class="left" @click="goback"> < </div>
                <div class="title">pageB</div>
            </div>
            <div>
            <router-link to="/pageA">这里是B页面的内容</router-link>
            <div>
                而自9月11日，也就是苹果推出新产品的前一天以来，该股已经累计下跌了10.95美元，跌幅为6.8%。按照7月21日的最新注册资料，苹果公司的外部流通股为51.7亿股。自推出新款iPhone产品以来，苹果股价已经下跌10.95美元，意味着约有565.6亿美元的市值已化为乌有。损失的市值甚至了超过了Target、eBay、福特等公司的市值（这些公司市值少于500亿美元）。
            </div>
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
