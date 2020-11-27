import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/homePage/index'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('../views/homePage/modules/Content.vue')
      },
      {
        path: '/articleDetail',
        name: 'ArticleDetail',
        component: () => import('../views/ariticlePage/index.vue')
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import('../views/categoryPage/index.vue')
      },
      {
        path: '/diary',
        name: 'Diary',
        component: () => import('../views/diaryPage/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  window.scrollTo(0, 0);
  next()
})

export default router
