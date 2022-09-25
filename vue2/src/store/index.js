import Vue from "vue";
import Vuex from "vuex";

import card from "./modules/card";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1,
  },
  modules: {
    card,
  },
});

export default store;
