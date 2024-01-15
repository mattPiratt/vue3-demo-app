<template>
  <CoatchFilter @change-filter="setFilters" />
  <section>
    <base-card>
      <div class="controls">
        <base-button
          link
          :to="{ name: 'register' }"
          v-if="!isRegisteredAsCoatch && !isLoading"
          >Register as coatch</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoatches">
        <h2>List of coatches</h2>
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
import CoatchFilter from '../../components/coatches/Filter.vue';

export default {
  components: {
    CoatchItem,
    CoatchFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoatches() {
      const coatches = this.$store.getters['coatches/list'];
      return coatches.filter((coatch) => {
        if (
          this.activeFilters.frontend === true &&
          coatch.areas.includes('frontend')
        ) {
          return true;
        }
        if (
          this.activeFilters.backend === true &&
          coatch.areas.includes('backend')
        ) {
          return true;
        }
        if (
          this.activeFilters.career === true &&
          coatch.areas.includes('career')
        ) {
          return true;
        }
        return false;
      });
    },
    hasCoatches() {
      return !this.$store.getters['coatches/isEmpty'];
    },

    isRegisteredAsCoatch() {
      return this.$store.getters['coatches/isRegisteredAsCoatch'];
    },
    isLoading() {
      return this.$store.getters['isAjaxLoading'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
