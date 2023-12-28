export default {
  getList(state) {
    return state.coatchesList;
  },
  getOne: (state) => (id) => {
    // using Function Currying :)
    return state.coatchesList.find((coatch) => coatch.id === id);
  },
  isEmpty(state) {
    return state.coatchesList && state.coatchesList.length === 0;
  },
};
