<template>
  <div>
    <div v-if="filterUserInfo.length > 0">
      <base-card>
        <div class="flex justify-between items-center p-4">
          <div>
            <p class="text-bold text-left">Lead</p>
            <p class="text-gray-400">19,805$ - 2 deals</p>
          </div>
          <div class="float-right">
            <button @click="seeLess" v-if="modeView === 'more'">
              Seeless
            </button>
            <button @click="seeMore" v-if="modeView === 'less'">
              Seemore
            </button>
          </div>
        </div>
      </base-card>
      <table class="mx-auto" style="width: 90%">
        <user-item
          v-for="info in filterUserInfo"
          :key="info.id"
          :info="info"
        ></user-item>
      </table>
    </div>
    <div v-if="filterUserInfo.length === 0">
      <with-spinner></with-spinner>
    </div>
  </div>
</template>

<script>
import UserItem from "./components/UserItem.vue";
import WithSpinner from "./components/WithSpinner.vue";
import { getListUser } from "./api/getListUser.js";

export default {
  name: "App",
  components: {
    UserItem,
    WithSpinner,
  },
  data() {
    return {
      userInfos: [],
      filterUserInfo: [],
      modeView: "more",
    };
  },
  methods: {
    seeLess() {
      this.modeView = "less";
      const length = this.userInfos.length / 2;
      this.filterUserInfo = this.userInfos.filter((info) => info.id <= length);
    },
    seeMore() {
      this.modeView = "more";
      this.filterUserInfo = this.userInfos;
    },
  },
  async mounted() {
    const listUser = await getListUser();
    this.userInfos = listUser;
    this.filterUserInfo = listUser;
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
</style>
