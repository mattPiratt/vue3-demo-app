export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.contextUserId = payload.contextUserId;
  },
  didAutoLogout(state, payload) {
    state.didAutoLogout = !!payload;
  },
};
