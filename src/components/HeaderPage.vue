<template>
  <base-card>
    <div class="flex justify-between items-center p-4">
      <div>
        <p class="text-bold text-left">Lead</p>
        <p class="text-gray-400">19,805$ - 2 deals</p>
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
