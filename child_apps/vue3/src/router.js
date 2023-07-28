import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './Dashboard.vue'
import MyPage from './my-page.vue'

console.log('window.__MICRO_APP_BASE_ROUTE__', window.__MICRO_APP_BASE_ROUTE__)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: '/my-page', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'my-page',
    component: MyPage,
  },
]

const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || '/'),
  routes, // `routes: routes` 的缩写
})

export default router
