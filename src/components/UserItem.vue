<template>
  <base-card>
    <li>
      <ul class="list-none flex flex-row justify-between items-center">
        <li class="text-left">
          <img
            src="https://thumbs.dreamstime.com/z/gentleman-avatar-profile-icon-image-default-user-hairstyle-vector-illustration-182197665.jpg"
            alt=""
            class="w-10 h-10 rounded-full object-cover"
          />
        </li>
        <li class="pr-4">
          <p>
            <a href="">{{ info.fullName }}</a>
          </p>
        </li>
        <li class="pr-4">
          <p>{{ info.role }}</p>
        </li>
        <li class="pr-4">
          <p>{{ info.company }}</p>
        </li>
        <li class="pr-4">
          <p>{{ info.telephone }}</p>
        </li>
        <li class="pr-4">
          <div>
            <span :style="userStatus">
              Open - Not contacted
            </span>
          </div>
        </li>
      </ul>
    </li>
  </base-card>
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
