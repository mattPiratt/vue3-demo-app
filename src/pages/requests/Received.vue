<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul>
        <received-request-item
          v-for="receivedRequest in receivedRequests"
          v-bind="receivedRequest"
          :key="receivedRequest.id"
        />
      </ul>
      <h3 v-if="!receivedRequests">You have not received any requests yet.</h3>
    </base-card>
  </section>
</template>

<script>
import ReceivedRequestItem from './../../components/requests/Item.vue';

export default {
  components: {
    ReceivedRequestItem,
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/list'];
    },
    hasRequests() {
      return !this.$store.getters['requests/isEmpty'];
    },
    isLoading() {
      return this.$store.getters['isAjaxLoading'];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
