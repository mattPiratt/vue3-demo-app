<template>
  <section>
    <div>
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ed8fed;
  color: #fff;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #bb3131;
  border-radius: 11px;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
