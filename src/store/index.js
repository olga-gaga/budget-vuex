import Vue from "vue";
import Vuex from "vuex";
import balance from "./modules/balance";
import confirm from "./modules/confirmStorage";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    balance,
    confirm,
  }
});
