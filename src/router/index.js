import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../components/home.vue'),
  },
  {
    path: '/projekti',
    name: 'Projekti',
    component: ()=> import('../components/projekti.vue'),
  },
  {
    path: '/onama',
    name: 'Onama',
    component: ()=> import('../components/onama.vue'),
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: ()=> import('../components/kontakt.vue'),
  },
  { path: '/project/:id',
  component: ()=> import('../components/projekti_detalji.vue'), 
   name: 'project-details',
   props: true 
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top:0 }
  }
})

export default router