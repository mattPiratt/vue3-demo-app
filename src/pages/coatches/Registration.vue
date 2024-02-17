<template>
  <section>
    <base-card>
      <h2>Register as a coatch now!</h2>
      <coatch-form @new-coatch-added="saveData"></coatch-form>
    </base-card>
  </section>
</template>

<script>
import CoatchForm from '../../components/coatches/Form.vue';

export default {
  name: 'CoatchesRegistration',
  components: {
    CoatchForm,
  },
  methods: {
    async saveData(data) {
      await this.$store.dispatch('coatches/add', data);
      this.$router.replace({ name: 'coatchesList' });
    },
  },
};
</script>
