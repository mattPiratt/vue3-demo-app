import dbConnector from './../../dbConnectionHelper.js';

export default {
  async add(context, data) {
    const coatchId = context.rootGetters.contextUserId;
    const transformedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.hourlyRate,
    };

    dbConnector.addCoatch(coatchId, transformedData);
    context.commit('add', { ...transformedData, id: coatchId });
  },
};
