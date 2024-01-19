import dbConnector from './../../dbConnectionHelper.js';

export default {
  login() {
    // TODO: implement
  },
  async signup({ commit }, paload) {
    console.log('action:signup');
    console.log(paload);

    commit('setIsAjaxLoading', true, { root: true });

    try {
      const responseData = await dbConnector.userRegister(paload);

      commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    } catch (error) {
      return commit(
        'setErrorMessage',
        error.message || 'Something went wrong!',
        { root: true }
      );
    }

    commit('setIsAjaxLoading', false, { root: true });
  },
};
