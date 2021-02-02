<template>
    <div class="list-item" >
        <i :class="icon"></i>
        <span class="budget-comment"> {{ item.comment }} </span>
        <span class="budget-value" :class="color"> {{ item.value }} </span>
        <ElButton type="danger" size="mini" @click="onDeleteClick">Delete</ElButton>

    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "BudgetListItem",
    components: {
    },
    props: {
        item: {
            type: Object,
        },
        changeStyle: {
            type: Function,
        }
    },
    computed: {
        color:  {
           get(){
               return this.changeStyle(this.item.value);
           }
       },
       icon: {
           get() {
               if (this.item.type === "OUTCOME"){
                   return 'el-icon-bottom';
               }
               return 'el-icon-top';
            }
        },
        comment: {
            get(){
                if(this.item.comment) {
                    return ` with comment "${this.item.comment}"`;
                }
                return "";
            }
        },
    },
    methods: {
        ...mapActions("confirm", ["changeVisible"]),
        onDeleteClick() {
            this.$emit("getItem", this.item);
            this.changeVisible(true);
        },
    },
    
}
</script>

<style scoped>
.list-item {
    display: flex;
    align-items: center;
    padding: 10px;
}
.budget-value {
    font-weight: bold;
    margin-left: auto;
    margin-right: 20px;
}
</style>