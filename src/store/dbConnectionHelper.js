//dbConnectorMixin.js

const DB_URL =
  'https://vue-app-demo1-default-rtdb.europe-west1.firebasedatabase.app';

export default {
  async loadCoatches() {
    const response = await fetch(`${DB_URL}/coatches.json`, {
      method: 'GET',
    });
    if (!response.ok) {
      console.log('HTTP Request failed (01)');
      // TODO: handle error
    }
    let responseBody = await response.json();
    if (!responseBody || responseBody.length === 0) {
      const coatches = this.getDemoData();
      for (const coatchKey in coatches) {
        this.addCoatch(coatchKey, coatches[coatchKey]);
      }
      responseBody = coatches;
    }

    return responseBody;
  },
  async addCoatch(id, data) {
    const response = await fetch(`${DB_URL}/coatches/${id}.json`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.log('HTTP Request failed (02)');
      // TODO: handle error
    }
  },
  getDemoData() {
    return {
      c1: {
        firstName: 'Maximilian',
        lastName: 'Schwarzmüller',
        areas: ['frontend', 'backend', 'career'],
        description:
          "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        hourlyRate: 30,
      },
      c2: {
        firstName: 'Julie',
        lastName: 'Jones',
        areas: ['frontend', 'career'],
        description:
          'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
        hourlyRate: 30,
      },
    };
  },
};
