<template>
    <div class="budget-list-wrap">
        <ElCard >
            <div slot="header" class="">
                <h3> {{ header }} </h3>
                <SortButton @changeType="onChangeType" />
            </div>
            <template v-if="!isEmpty">
                <BudgetListItem v-for="item in sortedList" :key="item.id" :item="item" :changeStyle="changeStyle" @getItem="onGetItem" />
            </template>
            <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
        </ElCard>
        <ConfirmDialog :item="item" @confirmDelete="onConfirmDelete"/>
    </div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem.vue';
import SortButton from '@/components/SortButton.vue';
import ConfirmDialog from '@/components/ConfirmDialog.vue';

export default {
    name: 'BudgetList',
    components: {
        BudgetListItem,
        SortButton,
        ConfirmDialog,
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
        item: {},
    }),
    computed: {
        deletedItem: {
            get() {
                return {...this.item};
            },
            set(value) {
                if ( typeof value === "object" ) {
                    this.item = value;
                }
            },
        },
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
        onGetItem(item) {
            this.deletedItem = item;

        },
        onConfirmDelete(id) {
            this.$emit('deleteItem', id);
        },
        onChangeType(type){
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