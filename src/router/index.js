import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewArticleView from '../views/NewArticleView.vue'
import ArticleView from '../views/ArticleView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new-article',
      name: 'new-article',
      component: NewArticleView
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleView
    }
  ]
})

export default router
