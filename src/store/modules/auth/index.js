import mutations from './mutators.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
  namespaced: false,
  state() {
    return {
      contextUserId: null,
      tokenExpiration: null,
      token: null,
    };
  },
  mutations,
  getters,
  actions,
};
