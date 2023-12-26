<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link :to="{ name: 'register' }">Register as coatch</router-link>
    </div>
    <ul v-if="hasCoatches">
      List of coatches
      <CoatchItem
        v-for="coatch in filteredCoatches"
        :key="coatch.id"
        v-bind="coatch"
      ></CoatchItem>
    </ul>
    <p v-else>No coaches found.</p>
  </section>
</template>

<script>
import CoatchItem from '../../components/coatches/Item.vue';

export default {
  components: {
    CoatchItem,
  },
  computed: {
    filteredCoatches() {
      return this.$store.getters['coatches/getList'];
    },
    hasCoatches() {
      return !this.$store.getters['coatches/isEmpty'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
