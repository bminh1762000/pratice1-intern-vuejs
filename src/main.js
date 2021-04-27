import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import BaseCard from "./components/UI/BaseCard.vue";


Vue.component("base-card", BaseCard);

Vue.config.productionTip = false;

const app = new Vue({
  render: (h) => h(App),
});

app.$mount("#app");
