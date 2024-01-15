import { createStore } from 'vuex';
import coatchesModule from './modules/coatches/index.js';
import requestsModule from './modules/requests/index.js';
import dbConnector from './dbConnectionHelper.js';

const store = createStore({
  state() {
    return {
      contextUserId: 'u3',
      isAjaxLoading: false,
      errorMessage: false,
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
    isAjaxLoading(state) {
      return state.isAjaxLoading;
    },
    errorMessage(state) {
      return state.errorMessage;
    },
  },
  actions: {
    async loadDataFromExtDB({ commit }) {
      commit('setIsAjaxLoading', true, { root: true });

      try {
        const dbCoatches = await dbConnector.loadCoatches();
        for (const coatchId in dbCoatches) {
          commit('coatches/add', {
            ...dbCoatches[coatchId],
            id: coatchId,
          });
        }
      } catch (error) {
        return commit(
          'setErrorMessage',
          error.message || 'Something went wrong!',
          { root: true }
        );
      }

      commit('setIsAjaxLoading', false, { root: true });
    },
  },
  mutations: {
    setIsAjaxLoading(state, newState) {
      state.isAjaxLoading = newState;
    },
    setErrorMessage(state, newVal) {
      state.errorMessage = newVal;
    },
  },
});

export default store;
