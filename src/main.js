import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import BaseCard from "./components/UI/BaseCard.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue), Vue.use(IconsPlugin);

Vue.component("base-card", BaseCard);

Vue.config.productionTip = false;

const app = new Vue({
  render: (h) => h(App),
});

app.$mount("#app");
