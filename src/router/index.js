// import { createRouter, createWebHistory } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: { name: 'Intro' },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Авторизация',
    },
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import('../views/Intro.vue'),
    meta: {
      title: 'Информация',
    },
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import('../views/Panel.vue'),
    meta: {
      title: 'Панель управления | Все устройства',
    },
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import('../views/Panel.vue'),
    meta: {
      title: 'Панель управления | Избранное',
    },
  },
];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
