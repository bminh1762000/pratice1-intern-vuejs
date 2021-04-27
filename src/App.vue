<template>
  <div>
    <div v-if="filterUserInfo.length > 0">
      <base-card>
        <div class="flex justify-between items-center p-4">
          <div>
            <p class="text-bold text-left">Lead</p>
            <p class="text-gray-400">19,805$ - 2 deals</p>
          </div>
          <div>
            <p>{{ currentPage }}/{{ totalPage }}</p>
          </div>
          <div>
            <button
              @click="seeLess"
              :disabled="isPrevDisable"
              class="px-4 py-2 bg-green-400 rounded-lg mr-4"
            >
              Previous
            </button>
            <button
              class="px-4 py-2 bg-green-400 rounded-lg"
              :class="{ 'btn-disabled': isNextDisable }"
              :disabled="isNextDisable"
              @click="seeMore"
            >
              Next
            </button>
          </div>
        </div>
      </base-card>
      <table-user :listUser="filterUserInfo"></table-user>
    </div>
    <div v-if="filterUserInfo.length === 0">
      <with-spinner></with-spinner>
    </div>
  </div>
</template>

<script>
import TableUser from "./components/TableUser.vue";
import WithSpinner from "./components/WithSpinner.vue";
import { getListUser } from "./api/getListUser.js";

export default {
  name: "App",
  components: {
    TableUser,
    WithSpinner,
  },
  data() {
    return {
      userInfos: [],
      filterUserInfo: [],
      modeView: "more",
      itemPerpage: 3,
      currentPage: 1,
      totalPage: 0,
    };
  },
  methods: {
    seeLess() {
      if (this.currentPage <= 1) {
        this.currentPage = 1;
      }
      if (this.currentPage > 1 && this.currentPage <= this.totalPage) {
        this.currentPage--;
      }
      this.filterUserInfo = this.userInfos.slice(
        (this.currentPage - 1) * this.itemPerpage,
        this.currentPage * this.itemPerpage
      );
    },
    seeMore() {
      if (this.currentPage == this.totalPage) {
        this.currentPage = this.totalPage;
      }
      if (this.currentPage) {
        this.currentPage++;
      }
      this.filterUserInfo = this.userInfos.slice(
        (this.currentPage - 1) * this.itemPerpage,
        this.currentPage * this.itemPerpage
      );
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
  },
  async mounted() {
    const listUser = await getListUser();
    console.log(listUser)
    this.userInfos = listUser;
    this.totalPage = Math.ceil(this.userInfos.length / this.itemPerpage);
    this.filterUserInfo = listUser.slice(0, this.itemPerpage);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
}

html {
  margin: 0;
}

table,
th,
td {
  padding: 5px;
}
table {
  border-spacing: 2rem;
}

button:focus,
input:focus {
  outline: none;
}

.btn-disabled {
  background-color: none!;
  cursor: not-allowed;
}
</style>
