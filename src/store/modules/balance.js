import Vue from "vue";

function checkValue({ type, value }) {
  if ((type === "INCOME" && value < 0) || (type === "OUTCOME" && value > 0)) {
    return (value *= -1);
  }
  return value;
}

const balanceStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2
      }
    }
  },
  getters: {
    budgetList: ({ list }) => Object.values(list),
    totalBalance: ({ list }) =>
      Object.values(list).reduce((acc, item) => acc + item.value, 0)
  },
  mutations: {
    ADD_ITEM({ list }, user) {
      Vue.set(list, user.id, user);
    },
    DELETE_ITEM({ list }, id) {
      Vue.delete(list, id);
    }
  },
  actions: {
    addNewItem({ commit }, data) {
      const newItem = {
        ...data,
        id: String(Math.random())
      };
      newItem.value = checkValue(newItem);
      commit("ADD_ITEM", newItem);
    },
    deleteItem({ commit }, id) {
      commit("DELETE_ITEM", id);
    }
  }
};

export default balanceStore;
