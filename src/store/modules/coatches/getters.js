export default {
  list(state) {
    return state.coatchesList;
  },
  byId: (state) => (id) => {
    // using Function Currying :)
    return state.coatchesList.find((item) => item.id === id);
  },
  isEmpty(state) {
    return state.coatchesList && state.coatchesList.length === 0;
  },
  isRegisteredAsCoatch(state, _, _2, rootGetters) {
    const coatches = state.coatchesList;
    const contextUserId = rootGetters.contextUserId;

    return coatches.some((coatch) => coatch.id === contextUserId);
  },
};
