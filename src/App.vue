<template>
  <TheHeader />
  <NotificationArea v-if="!!notification">{{ notification }}</NotificationArea>
  <base-dialog
    :show="!!errorMsg"
    title="An error occured."
    @close="handleError"
  >
    <p>{{ errorMsg }}</p>
  </base-dialog>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import NotificationArea from './components/layout/NotificationArea.vue';

export default {
  data() {
    return {
      notification: null,
    };
  },
  components: {
    TheHeader,
    NotificationArea,
  },
  mounted() {
    this.$store.dispatch('loadDataFromExtDB');
  },
  computed: {
    errorMsg() {
      return this.$store.getters['errorMessage'];
    },
  },
  methods: {
    handleError() {
      this.$store.commit('setErrorMessage', false);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
