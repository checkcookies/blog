<template>
  <div>
    <my-header></my-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <vueToTop></vueToTop>
  </div>
</template>

<script>
import { MyHeader } from './modules'
import vueToTop from 'vue-totop'

export default {
  data() {
    return {}
  },
  components: { MyHeader, vueToTop },

  methods: {},
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
