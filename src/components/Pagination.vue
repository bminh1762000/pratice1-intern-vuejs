<template>
  <div class="flex justify-center items-center">
    <button
      @click="seeLess"
      :disabled="isPrevDisable"
      class="px-4 py-2 bg-green-400 rounded-lg mr-4"
    >
      Previous
    </button>
    <button
      v-for="(value, idx) in getPaginationGroup"
      :key="idx"
      class="py-2 px-4 bg-white rounded-md"
      :class="{ isActive: value == currentPage }"
      @click="changePage(value)"
    >
      <slot>{{ value }}</slot>
    </button>
    <button
      class="px-4 py-2 bg-green-400 rounded-lg ml-4"
      :class="{ 'btn-disabled': isNextDisable }"
      :disabled="isNextDisable"
      @click="seeMore"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    changePage: {
      type: Function,
      required: true,
    },
    seeLess: {
      type: Function,
      required: true,
    },
    seeMore: {
      type: Function,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isPrevDisable() {
      if (this.currentPage <= 1) {
        return true;
      }
      return false;
    },
    isNextDisable() {
      if (this.currentPage >= this.totalPage) {
        return true;
      }
      return false;
    },
    getPaginationGroup() {
      let start = Math.floor((this.currentPage - 1) / 3) * 3;
      return new Array(3)
        .fill()
        .map((_, idx) => start + idx + 1)
        .filter((i) => i <= this.totalPage);
    },
  },
};
</script>

<style scoped>
.isActive {
  background-color: #0984e3;
}
</style>
