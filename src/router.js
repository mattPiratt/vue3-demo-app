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
    { path: '/', redirect: '/coatches' },
    { path: '/coatches', component: CoatchesList },
    {
      path: '/coatches:id',
      component: CoatchesDetail,
      children: [{ path: '/contact', component: ContactCoatch }],
    },
    { path: '/register', component: CoatchesRegistration },
    { path: '/requests', component: ReceivedRequests },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
