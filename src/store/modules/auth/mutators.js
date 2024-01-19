export default {
  setUser(state, payload) {
    console.log('mutator:setUser');
    console.log(payload);
    state.token = payload.token;
    state.contextUserId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};
