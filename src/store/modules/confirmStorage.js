import Vue from "vue";

const consirmStorage = {
  namespaced: true,
  state: {
    dialogVisible: false
  },
  getters: {
    visible: ({ dialogVisible }) => dialogVisible
  },
  mutations: {
    CHANGE_VISIBLE(state, value) {
      Vue.set(state, "dialogVisible", value);
    }
  },
  actions: {
    changeVisible({ commit, state: { visible } }, value) {
      if (visible !== value) {
        commit("CHANGE_VISIBLE", value);
      }
    }
  }
};

export default consirmStorage;
