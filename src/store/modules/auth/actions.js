import dbConnector from './../../dbConnectionHelper.js';

//global var to hold logout timer Callback
let timerCallback = null;

async function auth(context, paload, action) {
  context.commit('setIsAjaxLoading', true, { root: true });
  let success = true;
  timerCallback;

  try {
    const responseData = await action(paload);

    const expiresIn = +responseData.expiresIn * 1000;

    const contextData = {
      token: responseData.idToken,
      contextUserId: responseData.localId,
      expirationDate: new Date().getTime() + expiresIn,
    };
    localStorage.setItem('contextUser', JSON.stringify(contextData));

    // automatically logout user after the token timeout
    timerCallback = setTimeout(() => {
      context.dispatch('autoLogOut');
    }, expiresIn);

    context.commit('didAutoLogout', false);
    context.commit('setUser', contextData);
  } catch (error) {
    context.commit(
      'setErrorMessage',
      error.message || 'Something went wrong!',
      {
        root: true,
      }
    );
    success = false;
  }

  context.commit('setIsAjaxLoading', false, { root: true });
  return success;
}

export default {
  async login(context, payload) {
    return await auth(context, payload, dbConnector.userLogin);
  },
  async signup(context, payload) {
    return await auth(context, payload, dbConnector.userRegister);
  },
  async logout({ commit }) {
    clearTimeout(timerCallback);
    localStorage.removeItem('contextUser');

    commit('didAutoLogout', false);
    commit('setUser', {
      contextUserId: null,
      token: null,
    });
  },
  loginFromLocalStorage({ commit, dispatch }) {
    const contextDataJSON = localStorage.getItem('contextUser');

    if (contextDataJSON) {
      let contextData = JSON.parse(contextDataJSON);
      const expiresIn = +contextData.expirationDate - new Date().getTime();
      if (expiresIn < 0) {
        //token already outdated
        localStorage.removeItem('contextUser');
        return;
      }

      // automatically logout user after the token timeout
      timerCallback = setTimeout(() => {
        dispatch('autoLogOut');
      }, expiresIn);

      commit('setUser', contextData);
    }
  },
  autoLogOut({ dispatch, commit }) {
    dispatch('logout');
    commit('didAutoLogout', true);
  },
};
