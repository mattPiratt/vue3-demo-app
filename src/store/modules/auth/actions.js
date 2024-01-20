import dbConnector from './../../dbConnectionHelper.js';

async function auth(commit, paload, action) {
  commit('setIsAjaxLoading', true, { root: true });
  let success = true;

  try {
    const responseData = await action(paload);

    commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  } catch (error) {
    commit('setErrorMessage', error.message || 'Something went wrong!', {
      root: true,
    });
    success = false;
  }

  commit('setIsAjaxLoading', false, { root: true });
  return success;
}

export default {
  async login({ commit }, payload) {
    return await auth(commit, payload, dbConnector.userLogin);
  },
  async signup({ commit }, payload) {
    return await auth(commit, payload, dbConnector.userRegister);
  },
};
