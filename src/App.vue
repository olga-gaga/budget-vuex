<template>
  <div id="app">
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :changeStyle="changeStyle" :total="totalBalance" />
    <BudgetList :changeStyle="changeStyle" :list="list" @onDeleteItem="deleteItem"/>
  </div>
</template>

<script>
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
  data: () => ({
    type: "all",
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
    
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce( (acc, item) => (acc + item.value), 0);
    },
    
  },
  methods: {
    onFormSubmit(data){
      const newObj = {
        ...data, 
        id: String(Math.random()),
      };
      newObj.value = this.checkValue(newObj);
      this.$set(this.list, newObj.id, newObj);
    },
    
    checkValue({type, value}){
        if ((type === "INCOME" && value < 0) || (type === "OUTCOME" && value > 0 )){
          return value *= -1;
        }
        return value;
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
    deleteItem(id) {
      this.$delete(this.list, id);
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