import { createStore } from 'vuex';
import coatchesModule from './modules/coatches/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  state() {
    return {
      isAjaxLoading: false,
      errorMessage: false,
    };
  },
  modules: {
    coatches: coatchesModule,
    requests: requestsModule,
    auth: authModule,
  },
  getters: {
    isAjaxLoading(state) {
      return state.isAjaxLoading;
    },
    errorMessage(state) {
      return state.errorMessage;
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
