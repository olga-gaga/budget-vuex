<template>
    <div class="list-item">
        <i :class="icon"></i>
        <span class="budget-comment"> {{ item.comment }} </span>
        <span class="budget-value" :class="color"> {{ item.value }} </span>
        <ElButton type="danger" size="mini" @click="dialogVisible=true">Delete</ElButton>
        
        <ElDialog :visible.sync="dialogVisible" width="30%" >
            <span>Are you sure you want to delete the item{{ comment }}?</span>
            <span slot="footer" class="dialog-footer">
                <ElButton @click="onConfirmClick" value="false">Cancel</ElButton>
                <ElButton type="primary" @click="onConfirmClick" value="true">Confirm</ElButton>
            </span>
        </ElDialog>
    </div>
</template>

<script>
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
    data: () => ({
        dialogVisible: false,
    }),
    methods: {
        confirm() {
            this.visible = true;
        },
        onConfirmClick(e) {
            
            const button = e.target.closest('button');
            if(button && button.value === "true"){
                this.$emit("deleteItem", this.item.id);
            }
            this.dialogVisible = false;
        },
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
    }
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