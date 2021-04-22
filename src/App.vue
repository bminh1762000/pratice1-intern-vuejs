<template>
  <base-card>
    <div>
      <div class="flex justify-between items-center p-4">
        <div>
          <p>Lead</p>
          <p>250$</p>
        </div>
        <div class="float-right">
          <button @click="modeView === 'more' ? seeLess : seeMore">
            {{ modeView === "more" ? "See less" : "See more" }}
          </button>
        </div>
      </div>
      <ul>
        <user-item
          v-for="info in userInfos"
          :key="info.id"
          :info="info"
        ></user-item>
      </ul>
    </div>
  </base-card>
</template>

<script>
import UserItem from "./components/UserItem.vue";
import  axios  from "axios";

export default {
  name: "App",
  components: {
    UserItem,
  },
  data() {
    return {
      userInfos: [
        {
          id: 1,
          fullName: "John Kenady",
          role: "CEO",
          company: "Block Inc.",
          telephone: "(407)594-49-27",
          status: "open",
        },
        {
          id: 2,
          fullName: "Nicholas Crawford",
          role: "Sales Manager",
          company: "Toob Inc.",
          telephone: "(407)546-44-27",
          status: "closed",
        },
        {
          id: 3,
          fullName: "John Kenady",
          role: "Sales Manager",
          company: "Toob Inc.",
          telephone: "(407)546-44-27",
          status: "open",
        },
        {
          id: 4,
          fullName: "John Kenady",
          role: "Sales Manager",
          company: "Toob Inc.",
          telephone: "(407)546-44-27",
          status: "open",
        },
        {
          id: 5,
          fullName: "John Kenady",
          role: "Sales Manager",
          company: "Toob Inc.",
          telephone: "(407)546-44-27<",
          status: "closed",
        },
      ],
      filterUserInfo: [],
      modeView: "more",
    };
  },
  methods: {
    seeLess() {
      this.modeView = "less";
      this.filterUserInfo = this.userInfos.filter((info) => info.id <= 3);
    },
    seeMore() {
      this.modeView = "more";
      this.this.filterUserInfo = this.userInfos;
    },
  },
  async created() {
    const resData = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(resData);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
