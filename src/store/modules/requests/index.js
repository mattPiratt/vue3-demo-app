import mutations from './mutators.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      requestsList: [],
    };
  },
  mutations,
  getters,
  actions,
};
