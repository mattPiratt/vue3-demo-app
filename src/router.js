import { createRouter, createWebHistory } from 'vue-router';

import CoatchesDetail from './pages/coatches/Detail.vue';
import CoatchesList from './pages/coatches/List.vue';
import CoatchesRegistration from './pages/coatches/Registration.vue';
import ContactCoatch from './pages/requests/ContactCoatch.vue';
import ReceivedRequests from './pages/requests/Received.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', redirect: '/coatches' },
    { path: '/coatches', name: 'coatchesList', component: CoatchesList },
    {
      path: '/coatches:id',
      name: 'CoachDetail',
      component: CoatchesDetail,
      children: [
        { path: 'contact', name: 'CoatchContact', component: ContactCoatch },
      ],
    },
    { path: '/register', name: 'register', component: CoatchesRegistration },
    {
      path: '/requests',
      name: 'receivedRequests',
      component: ReceivedRequests,
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
