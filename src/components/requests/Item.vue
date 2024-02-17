<script>
export default {
  name: 'ReceivedRequestItem',
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  userEmail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const emailLink = computed(() => {
  return 'mailto:' + props.userEmail;
});
</script>

<template>
  <li>
    <div>
      <a :href="emailLink">{{ userEmail }}</a>
      <p>{{ message }}</p>
    </div>
  </li>
</template>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
