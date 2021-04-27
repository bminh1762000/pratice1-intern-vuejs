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
      <div>
        <ul class="text-left">
          <user-item
            v-for="info in filterUserInfo"
            :key="info.id"
            :info="info"
          ></user-item>
        </ul>
      </div>
      <!-- <div>
        <table-user :listUser="filterUserInfo"></table-user>
      </div> -->
    </div>
    <div v-if="filterUserInfo.length === 0">
      <with-spinner></with-spinner>
    </div>
  </div>
</template>

<script>
import UserItem from "./components/UserItem.vue";
import WithSpinner from "./components/WithSpinner.vue";
// import TableUser from "./components/TableUser.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    UserItem,
    WithSpinner,
    // TableUser,
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
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resData) => {
      const listUser = resData.data.map((user) => {
        return {
          id: user.id,
          street: user.address.street,
          name: user.name,
          phone: user.phone,
          company: user.company.name,
          status: user.id % 2 === 0 ? "open" : "closed",
        };
      });
      this.userInfos = listUser;
      this.filterUserInfo = listUser;
    });
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
</style>
