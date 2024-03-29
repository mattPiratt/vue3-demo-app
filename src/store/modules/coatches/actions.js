import dbConnector from './../../dbConnectionHelper.js';

export default {
  async add({ commit, rootGetters }, data) {
    // above, a feature of argument destructuring (ES2015)

    commit('setIsAjaxLoading', true, { root: true });

    const coatchId = rootGetters.contextUserId;
    const transformedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.hourlyRate,
    };

    try {
      await dbConnector.addCoatch(coatchId, transformedData, rootGetters.token);
    } catch (error) {
      return commit(
        'setErrorMessage',
        error.message || 'Something went wrong!',
        { root: true }
      );
    }
    commit('add', { ...transformedData, id: coatchId });

    commit('setIsAjaxLoading', false, { root: true });
  },
  async loadDataFromExtDB({ commit, state, rootGetters }) {
    if (state.coatchesList.length === 0) {
      commit('setIsAjaxLoading', true, { root: true });

      try {
        const dbCoatches = await dbConnector.loadCoatches(rootGetters.token);
        for (const coatchId in dbCoatches) {
          commit('add', {
            ...dbCoatches[coatchId],
            id: coatchId,
          });
        }
      } catch (error) {
        return commit(
          'setErrorMessage',
          error.message || 'Something went wrong!',
          {
            root: true,
          }
        );
      }

      commit('setIsAjaxLoading', false, { root: true });
    }
  },
};
