import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index.js';

const CoatchesDetail = () => import('./pages/coatches/Detail.vue');
const CoatchesList = () => import('./pages/coatches/List.vue');
const CoatchesRegistration = () => import('./pages/coatches/Registration.vue');
const ContactCoatch = () => import('./pages/requests/ContactCoatch.vue');
const ReceivedRequests = () => import('./pages/requests/Received.vue');
const NotFound = () => import('./pages/NotFound.vue');
const UserAuth = () => import('./pages/auth/UserAuth.vue');

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
