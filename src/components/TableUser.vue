<template>
  <div>
    <b-table :items="listUser" thead-class="thead-d" tbody-tr-class="style-row">
      <template #table-caption>This is a table caption at the top.</template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    listUser: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.thead-d {
  display: none;
}

.style-row {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
  width: 90%;
  max-width: 65rem;
}
</style>
