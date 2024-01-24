import mutations from './mutators.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
  namespaced: false,
  state() {
    return {
      contextUserId: null,
      token: null,
      didAutoLogout: false,
    };
  },
  mutations,
  getters,
  actions,
};
