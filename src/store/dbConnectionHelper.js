//dbConnectorMixin.js

const DB_URL = process.env.VUE_APP_FIREBASE_DB_URL;
const FIREBASE_API_KEY = process.env.VUE_APP_FIREBASE_API_KEY;

async function auth(data, APIMethod, errorMsg) {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:${APIMethod}?key=${FIREBASE_API_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(response.message || errorMsg);
  }

  const responseData = await response.json();
  return responseData;
}

export default {
  async loadCoatches(authToken) {
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
        await this.addCoatch(coatchKey, coatches[coatchKey], authToken).catch(
          (e) => {
            throw new Error(e.message);
          }
        );
      }
      responseBody = coatches;
    }

    return responseBody;
  },
  async addCoatch(id, data, authToken) {
    const response = await fetch(
      `${DB_URL}/coatches/${id}.json?auth=${authToken}`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error(
        response.message || 'HTTP error: Failed to add new coatch.'
      );
    }
  },
  async loadRequests(coatchId, authToken) {
    const response = await fetch(
      `${DB_URL}/requests/${coatchId}.json?auth=${authToken}`,
      {
        method: 'GET',
      }
    );
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

  async userRegister(data) {
    return await auth(
      data,
      'signUp',
      'HTTP error: Failed to register new user.'
    );
  },
  async userLogin(data) {
    return await auth(
      data,
      'signInWithPassword',
      'HTTP error: Failed to login a user.'
    );
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
