<template>
  <div class="mb-8">
    <table class="mx-auto" style="width: 90%">
      <thead class="mb-4">
        <tr>
          <td>Avatar</td>
          <td>Name</td>
          <td>Street</td>
          <td>Company</td>
          <td>Telehone</td>
          <td>Status</td>
        </tr>
      </thead>
      <user-item
        v-for="info in listUser"
        :key="info.id"
        :info="info"
        @delete-item="$emit('delete-item', $event)"
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
  data() {
    return {
      dataHeader: ["", "Name", ""],
    };
  },
};
</script>
