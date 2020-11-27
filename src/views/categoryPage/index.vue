<template>
  <div class="content">
    <div v-for="item in categoryList" :key="item.id" class="item-container">
      <div class="title" v-show="item.articleList">
        <h3 class="title-detail" :style="{ color: item.articleList && item.articleList.length === 0 ? '#ccc' : '' }" @click="getArticleList(item)">
          <!-- <img src="../../assets/images/category-logo.svg" style="width:30px;height:30px" alt="" srcset="" /> -->
          &nbsp;&nbsp;{{ item.category }} ({{ item.articleList && item.articleList.length }})
        </h3>
        <div class="description">
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCategoryList } from '../../api/category'
import { getArticleList } from '../../api/article'
export default {
  data() {
    return {
      categoryList: [],
    }
  },
  mounted() {
    getCategoryList().then((res) => {
      // this.categoryList = res
      const categories = res
      getArticleList().then((res) => {
        let finaArr = []
        categories.map((item) => {
          finaArr.push({
            category: item.label,
            description: item.description,
            articleList: res.filter((v) => {
              return v.category === item.label
            }),
          })
        })
        this.categoryList = finaArr
      })
    })
  },
  methods: {
    getArticleList(item) {
      if (item.articleList.length === 0) {
        return
      } else {
        this.$router.push({ path: '/', query: { category: item.category } })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and(min-width: 1000px) {
  .content {
    width: 50%;
    margin: 0 auto;
    padding-top: 20px;
    min-height: 650px;
    .title {
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid #eeeeee;
      padding: 10px 20px;
      margin: 20px 0;
      height: 150px;
      color: #000000;
      background-color: #ffffff;
      cursor: pointer;
      transition: all 0.3s linear;
      &:hover {
        transform: translateX(-10px);
      }
      .title-detail {
        display: flex;
        align-items: center;
      }
    }
  }
}

@media screen and(max-width: 1000px) {
  .content {
    width: 90%;
    margin: 0 auto;
    padding-top: 10px;
    min-height: 650px;
    .title {
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid #eeeeee;
      padding: 10px 20px;
      margin: 20px 0;
      height: 150px;
      color: #000000;
      background-color: #ffffff;
      cursor: pointer;
      transition: all 0.3s linear;
      &:hover {
        transform: translateX(-10px);
      }
      .title-detail {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
