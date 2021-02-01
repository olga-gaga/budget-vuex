import Vue from "vue";

function checkValue({type, value}){
    if ((type === "INCOME" && value < 0) || (type === "OUTCOME" && value > 0 )){
      return value *= -1;
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
              id: 1,
            },
            2: {
              type: "OUTCOME",
              value: -50,
              comment: "Some outcome comment",
              id: 2,
            },
          },
    },
    getters: {
        budgetList: ({ list }) => Object.values(list),
        totalBalance: ({ list }) => Object.values(list).reduce( (acc, item) => (acc + item.value), 0),
    },
    mutations: {
        ADD_USER ({ list }, user) {
            Vue.set(list, user.id, user);
        },
        DELETE_USER ({ list }, id) {
            Vue.delete(list, id);
        }
    },
    actions: {
        addNewUser({ commit }, user) {
            const newUser = {
                ...user, 
                id: String(Math.random())
            };
            newUser.value = checkValue(newUser);
            commit("ADD_USER", newUser);
        },
        deleteUser({ commit }, id){
            commit("DELETE_USER", id);
        }
    }
};
export default balanceStore;