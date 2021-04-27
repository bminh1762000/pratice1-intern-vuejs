<template>
  <div class="mb-8">
    <table class="mx-auto" style="width: 90%">
      <user-item
        v-for="info in listUser"
        :key="info.id"
        :info="info"
      ></user-item>
    </table>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";
export default {
  components: {
    UserItem,
  },
  props: {
    listUser: {
      type: Array,
      required: true,
    },
  },
};
</script>
