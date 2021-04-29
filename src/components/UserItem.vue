<template>
  <tr>
    <td>
      <img
        src="https://thumbs.dreamstime.com/z/gentleman-avatar-profile-icon-image-default-user-hairstyle-vector-illustration-182197665.jpg"
        alt=""
        class="w-10 h-10 rounded-full object-cover"
      />
    </td>
    <td>
      <p>
        <a href="#">{{ info.name }}</a>
      </p>
    </td>
    <td>
      <p>{{ info.street }}</p>
    </td>
    <td>
      <p>{{ info.company }}</p>
    </td>
    <td>
      <p>{{ info.phone }}</p>
    </td>
    <td>
      <div>
        <span :style="userStatus">
          {{
            info.status === "open"
              ? "Open - Not contacted"
              : "Closed - Disqualfied"
          }}
        </span>
      </div>
    </td>
    <td>
      <button class="text-blue-400">Edit</button>
    </td>
    <td>
      <button class="text-red-500" @click="deleteItem">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  computed: {
    userStatus() {
      if (this.info.status === "open") {
        return { color: "#4f6ee0" };
      }
      return { color: "red" };
    },
  },
  methods: {
    deleteItem() {
      this.$emit("delete-item", this.info.id);
    },
    onEdit(){
      this.$emit('on-edit');
    }
  },
};
</script>
