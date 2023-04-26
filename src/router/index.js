import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import QuestionPage from '@/pages/QuestionPage.vue'
import ProcessingPage from '@/pages/ProcessingPage.vue'
import ResultPage from '@/pages/ResultPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/question/:id',
    name: 'question',
    component: QuestionPage,
  },
  {
    path: '/processing',
    name: 'processing',
    component: ProcessingPage,
  },
  {
    path: '/result',
    name: 'result',
    component: ResultPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
