import Vue from "vue";
import Vuex from "vuex";
import balance from "./modules/balance";
import styleStorage from "./modules/style";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    balance,
    styleStorage,
  }
});
