<template>
  <div>
    <div class="main-container">
      <div
        class="item-container"
        v-for="item in articleList"
        :key="item.id"
        @click="fetchDetail(item.id)"
        @mouseover="handleOver(item.id)"
        @mouseleave="handleLeave(item.id)"
      >
        <div class="bg-container">
          <div
            class="bg-image"
            :class="isHover && item.id === id ? 'active-image' : ''"
            :style="{ background: 'url(' + item.coverImage + ') 0% 0% / cover' }"
          ></div>
        </div>
        <a>
          <div class="bg-cover" :class="item.id === id && isHover ? 'hover-bg' : ''">
            <p class="" :class="item.id === id && isHover ? 'hover-text' : 'bg-text'">
              {{ item.description }}
            </p>
          </div>
        </a>
        <div class="other-cover right-cover"></div>
        <div class=" other-cover left-cover"></div>
        <div class="desc">
          <a class="title">{{ item.title }}</a>
          <p class="desc-bottom">
            {{ item.createdAt }} {{ item.author }}
            <span style="float:right;color:orange">
              {{ item.category }}
            </span>
          </p>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
  </div>
</template>

<script>
import { getArticleByCategory } from '../../api/category'
export default {
  name: 'Content',
  data() {
    return {
      articleList: [],
      isHover: false,
      id: '',
      category: this.$route.query.category,
    }
  },
  watch: {
    $route: {
      handler(val) {
        if (!val.query.category) {
          this.fetchArticleList()
        }
      },
    },
  },
  mounted() {
    this.fetchArticleList()
  },
  methods: {
    fetchArticleList() {
      getArticleByCategory({ category: '杂谈' }).then((res) => {
        this.articleList = res
      })
    },
    fetchDetail(id) {
      this.$router.push({ path: 'articleDetail', query: { id } })
    },
    handleOver(id) {
      this.isHover = true
      this.id = id
    },
    handleLeave() {
      this.isHover = false
      this.id = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  max-width: 960px;
  min-height: 650px;
  background-color: #ffffff;
  margin: 0 auto;
  // padding-bottom: 20px;
  .item-container {
    cursor: pointer;
    position: relative;
    width: 280px;
    float: left;
    height: 340px;
    margin: 20px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    -webkit-box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.08);
    .bg-container {
      .bg-image {
        height: 230px;
        border-radius: 5px 5px 0 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .active-image {
        filter: blur(3px);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    .bg-cover {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 40px 28px;
      overflow: hidden;
      .bg-text {
        display: -webkit-box;
        padding: 0;
        margin: 0;
        margin-top: 26px;
        overflow: hidden;
        font-size: 14px;
        line-height: 26px;
        color: #fff;
        opacity: 0;
        -webkit-box-orient: vertica;
      }
    }

    .hover-bg {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 40px 28px;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-transition: 0.5s;
      transition: 0.5s;
    }

    .hover-text {
      display: -webkit-box;
      padding: 0;
      margin: 0;
      margin-top: 0;
      overflow: hidden;
      font-size: 14px;
      line-height: 26px;
      color: #fff;
      opacity: 1;
      transition: 0.5s;
      -webkit-box-orient: vertica;
    }

    .other-cover {
      position: absolute;
      right: 0;
      bottom: 1px;
      left: 0;
      z-index: 0;
      width: 110%;
      min-height: 100px;
    }
    .right-cover {
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0.7;
      -webkit-transform: rotate(-10deg) translate(10px, -30px);
      transform: rotate(-10deg) translate(10px, -30px);
    }
    .left-cover {
      background-color: #fff;
      -webkit-transform: rotate(5deg) translate(-10px, -30px);
      transform: rotate(5deg) translate(-10px, -30px);
    }
    .desc {
      position: relative;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      height: 110px;
      padding: 7px 15px 10px;
      background: #fff;
      .title {
        display: -webkit-inline-box;
        overflow: hidden;
        font-size: 16px;
        color: #000;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .desc-bottom {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        padding: 0 15px 10px;
        font-size: 12px;
      }
    }
  }
}
</style>
