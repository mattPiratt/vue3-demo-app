<template>
  <section>Filter</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button styleMode="outline">Refresh</base-button>
        <base-button link :to="{ name: 'register' }"
          >Register as coatch</base-button
        >
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
    </base-card>
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
