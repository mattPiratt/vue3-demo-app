import { createRouter, createWebHistory } from 'vue-router';

import CoatchesDetail from './pages/coatches/Detail.vue';
import CoatchesList from './pages/coatches/List.vue';
import CoatchesRegistration from './pages/coatches/Registration.vue';
import ContactCoatch from './pages/requests/ContactCoatch.vue';
import ReceivedRequests from './pages/requests/Received.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', redirect: '/coatches' },
    { path: '/coatches', name: 'coatchesList', component: CoatchesList },
    {
      path: '/coatches/:id',
      name: 'coachDetail',
      props: true,
      component: CoatchesDetail,
      children: [
        { path: 'contact', name: 'CoatchContact', component: ContactCoatch },
      ],
    },
    {
      path: '/register',
      name: 'register',
      component: CoatchesRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      name: 'receivedRequests',
      component: ReceivedRequests,
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      name: 'auth',
      component: UserAuth,
      meta: { requiresUnAuth: true },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: 'auth' });
  } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
