<template>
  <base-card>
    <div class="flex justify-between items-center p-4">
      <div>
        <p class="text-bold text-left">Lead</p>
        <p class="text-gray-400">19,805$ - 2 deals</p>
      </div>
      <div>
        <label for="search" class="mr-4">Search</label>
        <input type="text" id="search" class="border border-gray-400 rounded-xl"/>
      </div>
      <div>
        <p>{{ currentPage }}/{{ totalPage }}</p>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
