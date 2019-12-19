import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);
import login from "./login";
import path from "./path";

const store = new Vuex.Store({
  modules: {
    login,
    path
  }
});

export default store;
