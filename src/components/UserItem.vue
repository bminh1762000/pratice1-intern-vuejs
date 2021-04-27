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
      Sort
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
};
</script>

<style scoped>
/* tr {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 2rem;
} */
</style>
