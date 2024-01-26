import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import Router from './router.js';
import Store from './store/index.js';

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
const BaseDialog = defineAsyncComponent(() =>
  import('./components/ui/BaseDialog.vue')
);

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.use(Router);
app.use(Store);
app.mount('#app');
