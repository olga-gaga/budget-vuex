<template>
  <div id="app">
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :changeStyle="changeStyle" :total="totalBalance" />
    <BudgetList :changeStyle="changeStyle" :list="budgetList" @deleteItem="onDeleteItem"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BudgetList from '@/components/BudgetList.vue';
import TotalBalance from '@/components/TotalBalance.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  computed: {
    ...mapGetters('balance', ["budgetList", "totalBalance"]),
  },
  methods: {
    ...mapActions('balance', ["addNewItem", "deleteItem"]),
   onFormSubmit(data){
      this.addNewItem(data);
    },

    onDeleteItem(id) {
      this.deleteItem(id);
    },

    changeStyle(value = 0) {
      if (value > 0) {
        return "green";
      }
      else if (value < 0) {
        return "red";
      }
      return "black";
    },
  }, 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.red {
  color: red;
}
.black {
  color: black;
}
.green {
  color: green;
}
</style>