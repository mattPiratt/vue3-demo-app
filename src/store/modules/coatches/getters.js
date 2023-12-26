export default {
  getList(state) {
    return state.coatchesList;
  },
  isEmpty(state) {
    return state.coatchesList && state.coatchesList.length === 0;
  },
};
