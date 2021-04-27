<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
  width: 90%;
  max-width: 65rem;
}
</style>
