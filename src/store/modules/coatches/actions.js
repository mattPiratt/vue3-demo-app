export default {
  add(context, data) {
    const transformedData = {
      id: new Date().toISOString(),
      firstName: data.firstName,
      lastName: data.lastName,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.hourlyRate,
    };
    context.commit('add', transformedData);
  },
};
