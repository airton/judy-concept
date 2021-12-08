import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes";
import { Tabs, Tab } from "vue-tabs-component";
import VueScrollmagic from "vue-scrollmagic";
import VueMeta from "vue-meta";

Vue.use(VueScrollmagic);
Vue.use(VueMeta);
Vue.config.productionTip = false;

import "swiper/css/swiper.css";
import "./assets/css/style.css";
import "vue-owl-carousel/dist/vue-owl-carousel";

Vue.component("tabs", Tabs);
Vue.component("tab", Tab);

// Router
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

// Scrollmagic
Vue.use(VueScrollmagic, {
  vertical: true,
  globalSceneOptions: {},
  loglevel: 2,
  refreshInterval: 100,
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
