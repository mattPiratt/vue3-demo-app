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
