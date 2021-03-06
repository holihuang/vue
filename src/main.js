import Vue from "vue";
import { Button, Input, Slider } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Input);
Vue.use(Slider);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
