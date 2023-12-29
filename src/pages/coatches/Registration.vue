<template>
  <section>
    <base-card>
      <h2>Register as a coatch now!</h2>
      <coatch-form></coatch-form>
    </base-card>
  </section>
</template>

<script>
import CoatchForm from '../../components/coatches/Form.vue';

export default {
  components: {
    CoatchForm,
  },
};
</script>
