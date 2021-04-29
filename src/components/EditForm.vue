<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <span class="btn-close" @click="close">&times;</span>
      <div class="form-edit">
        <div class="form-control mt-4">
          <label for="name" class="block mb-3">Name</label>
          <input type="text" id="name" class="rounded-md" />
        </div>
        <div class="form-control mt-4">
          <label for="phone" class="block mb-3">Name</label>
          <input type="text" id="name" class="rounded-md" />
        </div>
        <div class="form-control mt-4">
          <label for="name" class="block mb-3">Name</label>
          <input type="text" id="name" class="rounded-md" />
        </div>
        <div class="form-control mt-4">
          <label for="name" class="block mb-3">Name</label>
          <input type="text" id="name" class="rounded-md" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      valueForm: {
        name: "",

      },
    };
  },
  methods: {
    close() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 5rem auto 3rem auto;
  border-radius: 10px;
  padding: 1rem 2rem;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 5%;
  font-size: 26px;
}
</style>
