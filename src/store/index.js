import { createStore } from 'vuex';
import coatchesModule from './modules/coatches/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  state() {
    return {
      contextUserId: 'u3',
    };
  },
  modules: {
    coatches: coatchesModule,
    requests: requestsModule,
  },
  getters: {
    contextUserId(state) {
      return state.contextUserId;
    },
  },
});

export default store;
