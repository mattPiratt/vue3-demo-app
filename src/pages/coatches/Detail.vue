<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ coatchDetails.rate }}/h</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="{ name: 'CoatchContact' }"
            >Contact</base-button
          >
        </header>
        <RouterView />
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in coatchDetails.areas"
          :key="area"
          :type="area"
          :styleMode="area"
          :title="area"
        ></base-badge>
        <p>{{ coatchDetails.description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      coatchDetails: {
        rate: 0,
        areas: [],
        description: '',
      },
    };
  },
  computed: {
    fullName() {
      return this.coatchDetails.firstName + ' ' + this.coatchDetails.lastName;
    },
  },
  beforeMount() {
    this.coatchDetails = this.$store.getters['coatches/byId'](this.id);
  },
};
</script>
