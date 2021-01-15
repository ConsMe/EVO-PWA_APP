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
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import('../views/Intro.vue'),
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
