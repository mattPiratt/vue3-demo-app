import dbConnector from './../../dbConnectionHelper.js';

export default {
  async contactCoatch({ commit }, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    commit('setIsAjaxLoading', true, { root: true });

    try {
      const requestResponse = await dbConnector.addRequest(
        payload.coatchId,
        newRequest
      );
      newRequest.id = requestResponse.name;
      newRequest.coatchId = payload.coatchId;
      commit('add', newRequest);
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
