<template>
  <div>
    <div v-if="filterUserInfo.length > 0">
      <header-page
        :currentPage="currentPage"
        :totalPage="totalPage"
      ></header-page>
      <table-user
        :listUser="filterUserInfo"
        @delete-item="deleteItem"
      ></table-user>
      <pagination
        :currentPage="currentPage"
        :totalPage="totalPage"
        :changePage="changePage"
        :seeLess="seeLess"
        :seeMore="seeMore"
      ></pagination>
    </div>
    <div v-if="filterUserInfo.length === 0">
      <with-spinner></with-spinner>
    </div>
    <edit-form ></edit-form>
  </div>
</template>

<script>
import TableUser from "./components/TableUser.vue";
import WithSpinner from "./components/WithSpinner.vue";
import Pagination from "./components/Pagination.vue";
import HeaderPage from "./components/HeaderPage.vue";
import EditForm from "./components/EditForm.vue";
import { getListUser } from "./api/getListUser.js";

export default {
  name: "App",
  components: {
    TableUser,
    WithSpinner,
    Pagination,
    HeaderPage,
    EditForm,
  },
  data() {
    return {
      userInfos: [],
      filterUserInfo: [],
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
    changePage(value) {
      this.currentPage = value;
      this.filterUserInfo = this.userInfos.slice(
        (this.currentPage - 1) * this.itemPerpage,
        this.currentPage * this.itemPerpage
      );
    },
    deleteItem(id) {
      this.userInfos = this.userInfos.filter((user) => user.id !== id);
      this.totalPage = Math.ceil(this.userInfos.length / this.itemPerpage);
      this.filterUserInfo = this.userInfos.slice(
        (this.currentPage - 1) * this.itemPerpage,
        this.currentPage * this.itemPerpage
      );
      alert("Delete successfull");
    },
  },
  async mounted() {
    const listUser = await getListUser();
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
  background-color: none !important;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
