import { createStore } from 'vuex';
import coatchesModule from './modules/coatches/index.js';
import requestsModule from './modules/requests/index.js';
import dbConnector from './dbConnectionHelper.js';

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
  actions: {
    async loadDataFromExtDB(context) {
      const dbCoatches = await dbConnector.loadCoatches();
      for (const coatchId in dbCoatches) {
        context.commit('coatches/add', {
          ...dbCoatches[coatchId],
          id: coatchId,
        });
      }
    },
  },
});

export default store;
