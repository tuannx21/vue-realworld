import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../pages/Home.vue')
    },
    {
      name: 'home-with-tag',
      path: '/#:tag',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/article',
      component: () => import('../pages/Article.vue')
    },
    {
      path: '/article-edit',
      component: () => import('../pages/ArticleEdit.vue')
    },
    {
      path: '/login',
      component: () => import('../pages/Login.vue')
    },
    {
      path: '/register',
      component: () => import('../pages/Register.vue')
    },
    {
      path: '/@:username',
      name: 'profile',
      component: () => import('../pages/Profile.vue')
    },
    {
      path: '/setting',
      component: () => import('../pages/Setting.vue')
    }
  ]
});
