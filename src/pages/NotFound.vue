<template>
  <section>
    <base-card>
      <h2>Page not found!</h2>
      <p>
        Maybe check our
        <router-link :to="{ name: 'coatchesList' }">coatches page!</router-link>
      </p>
    </base-card>
  </section>
</template>
