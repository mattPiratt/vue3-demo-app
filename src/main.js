import { createApp } from 'vue';
import App from './App.vue';
import Router from './router.js';
import Store from './store/index.js';

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.use(Router);
app.use(Store);
app.mount('#app');
