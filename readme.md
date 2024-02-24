## Vue.js App Demo

This demo showcases a Vue.js application with various features:

### Vue 2 & 3 Features:

- Components with Options API
- Interpolation in the templates
- Multiword component names (check [eslint.vuejs.org](https://eslint.vuejs.org/rules/multi-word-component-names))
- Mixins, including a global one (mixins/logger.js)
- Teleportation (used in BaseDialog.vue)
- Built-in Component component for dynamic component loading
- Built-in transition component for smooth UX (animation)
- Passing data down with provide & inject mechanism
- Properties fallthrough
- Binding all props
- Components communication through props & emits
- Support for multiple root elements inside template elements (e.g., components/ui/BaseButton.vue)

### Additional Features:

- Asynchronous component loading (e.g., /components/ui/BaseDialog.vue loaded in main.js)
- Vue Router integration with named routes
- Vuex Store organization with modules, featuring actions, getters, and mutations

### Vue 3 Composite API (Script Setup):

The Vue 3 Composite API, introduced as Script Setup, offers an alternative approach to writing components. It is showcased in the following components:

- components/coatches/Item.vue
- components/coatches/Filter.vue
- components/layout/TheHeader.vue

Additionally, there's an example of a Composite API Hook/Composable connected with the coatches/Filter.vue component.

### How to run

1. Install dependencies
   `npm install`

2. Create [Firebase account](https://firebase.google.com/), then a new project, then new realtime database. Newly generated DB URL should be copy-pasted into this project .env ( or .env.local) file as VUE_APP_FIREBASE_DB_URL

3. Firebase also offers authentication service. To enable it, go to "Authentication" module, and enable email/password by going to `Sign-in method`->`Add new provider`->`Native providers`->`Email/password` and aenable it.

4. In Firebase console, `Realtime database` panel, go to `Rules` tab and use this configuration:

```
{
  "rules": {
    "coatches" : {
      ".read": true,
      ".write": "auth != null",
    },
    "requests" : {
      ".read": "auth != null",
      ".write": true,
    },
  }
}
```

5. Start the app
   `npm run serve`

6. Go to signu-up page: http://localhost:8080/auth and create new account

7. App is ready
