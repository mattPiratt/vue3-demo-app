<template>
  <TheHeader />
  <NotificationArea v-if="errorMsg">{{ errorMsg }}</NotificationArea>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import NotificationArea from './components/layout/NotificationArea.vue';
export default {
  data() {
    return {};
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
