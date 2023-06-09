import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // That might be loaded by default when visited from the root
      component: HomeView,
      meta: {
        description: 'Home page',
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        description: 'About page',
      },
    },
  ],
});
