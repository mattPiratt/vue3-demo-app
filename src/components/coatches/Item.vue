<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ hourlyRate }}/h</h4>
    <base-badge
      v-for="area in areas"
      :key="area"
      :title="area"
      :styleMode="area"
    ></base-badge>
    <div class="actions">
      <base-button
        link
        styleMode="outline"
        :to="{ name: 'CoatchContact', params: { id: id } }"
        >Contact</base-button
      >
      <base-button link :to="{ name: 'coachDetail', params: { id: id } }"
        >Details</base-button
      >
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'areas', 'description', 'hourlyRate'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
