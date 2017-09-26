<template>
    <div>
        <div class="header">
            <div class="left" @click="goback"> < </div>
                <div class="title">pageA</div>
            </div>
            <div>
            <router-link to="/pageB">这里是A页面的内容</router-link> 
            <div>
                市场分析人士表示，万达商业2015年9月提交的招股说明书发现，万达商业IPO文件中募资需求的包括万达电商、万达酒店等。2017年7月10日，万达集团在官网宣布，融创房地产分别以295.75亿元和335.9526亿元收购大连万达商业13个文化旅游项目及76家城市酒店，这笔交易总代价为631.7亿元。这部分资产本应该在万达商业A股上市的资产包里，如今已经不再其中，万达商业的募资主体发生重大变化，IPO排名退后或许相关。
            </div>
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
