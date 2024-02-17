<template>
  <TheHeader />
  <NotificationArea v-if="!!notification">{{ notification }}</NotificationArea>
  <base-dialog
    :show="!!errorMsg"
    title="An error occured."
    @close="handleErrorClose"
  >
    <p>{{ errorMsg }}</p>
  </base-dialog>
  <router-view v-slot="slotProps">
    <Transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </Transition>
  </router-view>
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
  computed: {
    errorMsg() {
      return this.$store.getters.errorMessage;
    },
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  methods: {
    handleErrorClose() {
      this.$store.commit('setErrorMessage', false);
      this.$store.commit('setIsAjaxLoading', false, { root: true });
    },
  },
  created() {
    this.$store.dispatch('loginFromLocalStorage');
  },
  watch: {
    didAutoLogout(newVal, oldVal) {
      if (newVal === true && newVal !== oldVal) {
        this.$router.replace({ name: 'home' });
      }
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

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
