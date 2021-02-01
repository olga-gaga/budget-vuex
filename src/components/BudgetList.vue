<template>
    <div class="budget-list-wrap">
        <ElCard >
            <div slot="header" class="">
                <h3> {{ header }} </h3>
                <SortButton @onChangeType="changeType" />
            </div>
            <template v-if="!isEmpty">
                <BudgetListItem v-for="item in sortedList" :key="item.id" :item="item" :changeStyle="changeStyle" @deleteItem="onDeleteItem" />
            </template>
            <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
        </ElCard>
    </div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem.vue';
import SortButton from '@/components/SortButton.vue';
export default {
    name: 'BudgetList',
    components: {
        BudgetListItem,
        SortButton,
    },
    props: {
        list: {
            type: Array,
            default: () => ({}),
        }, 
        changeStyle: {
            type: Function,
        }
    },
    data: () => ({
        header: "Budget List",
        emptyTitle: "Empty List",
        type: "all",
    }),
    computed: {
        isEmpty() {
            return !this.list.length;
        },
        sortedList: {
            get(){
                if (!this.type || this.type === "all") {
                    return this.list;
                }
  
                return this.list.reduce( (acc, element) => {
                    if (element.type === this.type) {
                        acc[element.id] = element;
                    }
                    return acc;
                }, {} );
            },
        },
    },
    methods: {
        onDeleteItem(id) {
            this.$emit('onDeleteItem', id);
        },
        changeType(type){
            this.type = type;
        },
    },
}
</script>

<style scoped>
.budget-list-wrap {
    max-width: 500px;
    margin: auto;
}
</style>