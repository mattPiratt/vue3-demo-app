import { createStore } from 'vuex';
import coatchesModule from './modules/coatches/index.js';
import requestsModule from './modules/requests/index.js';

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
