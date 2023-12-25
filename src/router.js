import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coatches' },
    { path: '/coatches', component: null },
    {
      path: '/coatches:id',
      component: null,
      children: [{ path: '/contact', component: null }],
    },
    { path: '/register', component: null },
    { path: '/requests', component: null },
    { path: '/:notFound(.*)', component: null },
  ],
});

export default router;
