<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link :to="{ name: 'register' }">Register as coatch</router-link>
    </div>
    <ul v-if="hasCoatches">
      List of coatches
      <li v-for="coatch in filteredCoatches" :key="coatch.id">
        {{ coatch.firstName }} {{ coatch.lastName }}
      </li>
    </ul>
    <p v-else>No coaches found.</p>
  </section>
</template>

<script>
export default {
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
