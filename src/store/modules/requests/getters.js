export default {
  list(state, _, _2, rootGetters) {
    const contextUserId = rootGetters.contextUserId;
    return state.requestsList.filter((item) => contextUserId === item.coatchId);
  },
  byId: (state) => (id) => {
    // using Function Currying :)
    return state.requestsList.find((item) => item.id === id);
  },
  isEmpty(_, getters) {
    return getters.list && getters.list.length === 0;
  },
};
