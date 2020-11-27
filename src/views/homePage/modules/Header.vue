<template>
  <div style="position:relative">
    <div class="header-container flex" :class="hideValid ? 'hide-header' : 'show-header'">
      <div class="head-left">
        <div class="music-container">
          <Music></Music>
        </div>
      </div>
      <div class="head-right">
        <span class="item">
          <router-link to="/"> <MallKi :className="path === '/' ? 'active-text' : ''" text="首页"></MallKi></router-link>
        </span>
        <span class="item">
          <router-link to="/category">
            <MallKi :className="path === '/category' ? 'active-text' : ''" text="归档"></MallKi>
          </router-link>
        </span>
        <span class="item">
          <router-link to="/diary">
            <MallKi :className="path === '/diary' ? 'active-text' : ''" text="杂记"></MallKi>
          </router-link>
        </span>
        <span class="item" @click="goGithub">
          <MallKi text="Github"></MallKi>
        </span>
      </div>
      <div class="right-menu">
        <img src="../../../assets/images/menu.svg" @click.stop="showMenu" />
        <transition name="slide-fade">
          <div class="menu-container" v-if="isMenu">
            <div v-for="item in menuList" :key="item.name" @click="goDetail(item)">{{ item.name }}</div>
          </div>
        </transition>
      </div>
    </div>
    <!-- <div class="bg-container" :class="{ 'bg-blur': blur }"></div>
    <div class="bg-cover" @click="blur = !blur">
      <div class="content">
        <div style="position:relative;top:40%">
          <div style="font-size:24px;margin-bottom:40px">枯木已然逢春</div>
          <div class="sign">像风走了八万里，不问归期</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import MallKi from '@/components/TextHoverEffect/Mallki.vue'
import Music from '@/components/Music/Audio.vue'
export default {
  components: { MallKi, Music },
  props: {
    isShowMenu: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      blur: false,
      hideValid: false,
      oldScrollNum: 0,
      path: '/',
      isMenu: false,
      // isShowMenu: false,
      menuList: [
        {
          name: '首页',
          path: '/',
        },
        {
          name: '归档',
          path: 'category',
        },
        {
          name: '杂谈',
          path: 'diary',
        },
      ],
    }
  },
  watch: {
    $route: {
      handler(val) {
        this.path = val.path
      },
    },
  },
  // mounted() {
  // window.addEventListener('scroll', this.scroll)
  // },
  mounted() {
    window.addEventListener('scroll', this.scroll)
    document.addEventListener('click', () => {
      this.isMenu = false
    })
  },
  methods: {
    showMenu() {
      this.isMenu = !this.isMenu
    },
    scroll() {
      this.isMenu = false
      // const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // if (scrollTop > this.oldScrollNum) {
      //   if (scrollTop > 10) {
      //     this.hideValid = true
      //   }
      // } else {
      //   if (this.oldScrollNum - scrollTop < 20) {
      //     this.hideValid = false
      //   }
      // }
      // this.oldScrollNum = scrollTop
    },
    goGithub() {
      window.open('https://github.com/yy5691', '_blank')
    },
    goDetail(item) {
      this.isShowMenu = false
      this.$router.push(item.path)
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and(min-width: 1000px) {
  .header-container {
    width: 100%;
    height: 50px;
    align-items: center;
    // position: fixed;
    // top: 0px;
    // z-index: 100;
    background-color: white;
    transition: 0.5s ease-in-out;
    // box-shadow: 0 1px 5px rgba(216, 139, 139, 0.1);
    border-bottom: 1px solid #eeeeee;
    .head-left {
      width: 70%;
      text-align: center;
    }
    .head-right {
      width: 30%;
      .item {
        cursor: pointer;
        padding: 10px 0;
        margin: 0 20px;
      }
    }
    .right-menu {
      display: none;
    }
  }
  .bg-container {
    display: block;
    height: 300px;
    // margin-top: 70px;
    width: 100%;
    background-image: url('../../../assets/images/bg.jpg');
    background-position: center;
    background-size: cover;
    position: absolute;
    filter: blur(0px);
    &.bg-blur {
      filter: blur(3px);
    }
  }
  .bg-cover {
    position: relative;
    width: 100%;
    height: 300px;
    // top: 70px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    color: #ffffff;
    .content {
      max-width: 700px;
      height: 300px;
      margin: 0 auto;
      .sign {
        // padding: 5px 15px;
        // background-color: #6fa3ef;
        border-radius: 15px;
        // border: 1px solid #6fa3ef;
        display: inline-block;
        transition: 0.5s;
      }
    }
  }

  .hide-header {
    margin-top: -70px;
  }
  .show-header {
    margin-top: 0px;
  }
}

// 移动端适配
@media screen and (max-width: 1000px) {
  .header-container {
    width: 100%;
    height: 50px;
    align-items: center;
    // position: fixed;
    // top: 0px;
    // z-index: 100;
    background-color: white;
    transition: 0.5s ease-in-out;
    // box-shadow: 0 1px 5px rgba(216, 139, 139, 0.1);
    border-bottom: 1px solid #eeeeee;
    .head-left {
      width: 70%;
      text-align: left;
    }
    .head-right {
      display: none;
    }
    .right-menu {
      flex: 1;
      text-align: right;
      padding-right: 20px;
      position: relative;
      .menu-container {
        position: fixed;
        right: 0px;
        top: 40px;
        width: 100%;
        height: 100%;
        padding: 30px;
        // justify-content: space-around;
        align-items: center;
        background: rgba(0, 0, 0, 0.99);
        display: flex;
        flex-direction: column;
        color: #ffffff;
        z-index: 999;
        div {
          margin: 20px 0;
        }
      }
    }
  }
  .bg-container {
    display: block;
    height: 300px;
    // margin-top: 70px;
    width: 100%;
    background-image: url('../../../assets/images/bg.jpg');
    background-position: center;
    background-size: cover;
    position: absolute;
    filter: blur(0px);
    &.bg-blur {
      filter: blur(3px);
    }
  }
  .bg-cover {
    position: relative;
    width: 100%;
    height: 300px;
    // top: 70px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    color: #ffffff;
    .content {
      max-width: 700px;
      height: 300px;
      margin: 0 auto;
      .sign {
        // padding: 5px 15px;
        // background-color: #6fa3ef;
        border-radius: 15px;
        // border: 1px solid #6fa3ef;
        display: inline-block;
        transition: 0.5s;
      }
    }
  }

  .hide-header {
    margin-top: -70px;
  }
  .show-header {
    margin-top: 0px;
  }
}
</style>
