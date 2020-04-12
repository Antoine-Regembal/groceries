import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

require("./styling/index.scss");

new Vue({
  render: h => h(App)
}).$mount("#app");
