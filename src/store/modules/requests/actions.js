export default {
  async contactCoatch(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coatchId: payload.coatchId,
      userEmail: payload.email,
      message: payload.message,
    };

    context.commit('addRequest', newRequest);
  },
};
