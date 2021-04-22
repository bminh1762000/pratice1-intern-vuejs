<template>
  <base-card>
    <div>
      <div class="flex justify-between items-center p-4">
        <div>
          <p>Lead</p>
          <p>250$</p>
        </div>
        <div class="float-right">
          <button>See less</button>
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
import BaseCard from "./components/UI/BaseCard.vue";

export default {
  name: "App",
  components: {
    UserItem,
    BaseCard,
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
    };
  },
  methods: {
    seeLess(){
      
    }
  }
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
