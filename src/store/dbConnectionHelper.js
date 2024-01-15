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
      throw new Error(
        response.message || 'HTTP error:Failed to fetch coatches list.'
      );
    }
    let responseBody = await response.json();
    if (!responseBody || responseBody.length === 0) {
      const coatches = this.getDemoData();
      for (const coatchKey in coatches) {
        await this.addCoatch(coatchKey, coatches[coatchKey]).catch((e) => {
          throw new Error(e.message);
        });
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
      throw new Error(
        response.message || 'HTTP error: Failed to add new coatch.'
      );
    }
  },
  async loadRequests(coatchId) {
    const response = await fetch(`${DB_URL}/requests/${coatchId}.json`, {
      method: 'GET',
    });
    if (!response.ok) {
      console.log('HTTP Request failed (01)');
      throw new Error(
        response.message || 'HTTP error:Failed to fetch requests list.'
      );
    }
    const responseBody = await response.json();
    for (let itemKey in responseBody) {
      responseBody[itemKey].id = itemKey;
      responseBody[itemKey].coatchId = coatchId;
    }
    return responseBody;
  },
  async addRequest(id, data) {
    const response = await fetch(`${DB_URL}/requests/${id}.json`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(
        response.message || 'HTTP error: Failed to add new coatch.'
      );
    }
    return response;
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
