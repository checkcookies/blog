<template>
  <div class="main-container">
    <div style="text-align:center;margin-bottom:20px;" class="pc-title">{{ articleModel.title }}</div>
    <div class="title flex" style="justify-content:center;align-items:center;margin:20px 0 30px">
      <div style="margin:0 10px;">创建于:{{ articleModel.createdAt }}</div>
      <div>分类:{{ articleModel.category }}</div>
    </div>
    <div class="title-mobile">
      <h3>
        {{ articleModel.title }}
      </h3>
      <div>创建于:{{ articleModel.createdAt }}</div>
    </div>
    <!-- <div class="line" style="background:none;margin:30px 0"></div> -->
    <div>
      <div class="content markdown-body" v-html="articleModel.content"></div>
    </div>
    <div class="line" style="width:20%;background:orange"></div>
    <div class="update-date">文章最后一次编辑于 {{ articleModel.updatedAt }}</div>
    <div class="update-date">作者：{{ articleModel.author }}</div>
  </div>
</template>

<script>
import { getArticleDetail } from '../../api/article'
export default {
  name: 'index',
  data() {
    return {
      articleModel: {},
    }
  },
  mounted() {
    getArticleDetail({ id: this.$route.query.id }).then((res) => {
      this.articleModel = res
    })
  },
}
</script>

<style lang="scss" scoped>
@media screen and(min-width: 1000px) {
  .main-container {
    width: 40%;
    margin: 0 auto;
    min-height: 650px;
    border: 0;
    padding: 20px;
    .title-mobile {
      display: none;
    }
    .line {
      width: 40%;
      height: 1px;
      background-color: #cccccc;
      margin: 40px auto;
    }
    .update-date {
      margin: 40px 0;
      text-align: center;
    }
  }
}
@media screen and(max-width: 1000px) {
  .main-container {
    width: 100%;
    margin: 0 auto;
    min-height: 650px;
    border: 0;
    padding: 20px;
    .pc-title{
      display: none;
    }
    .title {
      display: none;
    }
    .title-mobile {
      text-align: center;
      margin-bottom: 20px;
    }
    .line {
      width: 40%;
      height: 1px;
      background-color: #cccccc;
      margin: 30px auto;
    }
    .update-date {
      margin: 40px 0;
      text-align: center;
    }
  }
}
</style>
