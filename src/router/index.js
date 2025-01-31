import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/main/Main.page.vue'
import AboutUs from '../pages/about-us/AboutUs.page.vue'
import PageNotFound from '../pages/errors/404.page.vue';
import MQ3Available from '../pages/news/mq3-available.page.vue'
import FPEmpren2024 from '../pages/news/fpemprem-2024.page.vue'
import ImpulsFP2024 from '../pages/news/impulsfp-2024.page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFound }, 
    {
      path: '/',
      name: 'main-page',
      component: Main,
    },
    {
      path: '/sobre-nosotros',
      name: 'sobre-nosotros',
      component: AboutUs,
    },
    {
      path: '/noticias/meta-quest-3-disponibles',
      name: 'meta-quest-3-disponibles',
      component: MQ3Available,
    },
    {
      path: '/noticias/fpemprem-premio-2024',
      name: 'fpemprem-premio-2024',
      component: FPEmpren2024,
    },
    {
      path: '/noticias/impulsfp-premio-2024',
      name: 'impulsfp-premio-2024',
      component: ImpulsFP2024,
    }
  ]
})

export default router
