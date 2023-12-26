import { createStore } from 'vuex';
import coatchesModule from './modules/coatches/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  store() {
    return {};
  },
  modules: {
    coatches: coatchesModule,
    requests: requestsModule,
  },
});

export default store;
