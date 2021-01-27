import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/store/index';

window.testStore = process.env.NODE_ENV === 'development' ? store : null;

const routes = [
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
  {
    path: '/widget/:id',
    name: 'SingleWidget',
    component: () => import('../views/SingleWidget.vue'),
    meta: {
      title: 'Панель управления',
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

router.beforeEach((to, from, next) => {
  if (!to.name) {
    next({ name: 'Login' });
    return;
  }
  const token = store.state.authToken;
  if (token && ['Login'].includes(to.name)) {
    next({ name: 'Groups' });
    return;
  }
  next();
});

export default router;
