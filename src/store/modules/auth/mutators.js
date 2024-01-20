export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.contextUserId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};
