<template>
    <div class="list-item">
        <i :class="icon"></i>
        <span class="budget-comment"> {{ item.comment }} </span>
        <span class="budget-value" :class="color"> {{ item.value }} </span>
        <ElButton type="danger" size="mini" @click="onDeleteClick">Delete</ElButton>
        
        <ElDialog :visible.sync="visible" width="30%" >
            <span>Are you sure you want to delete the item{{ comment }}?</span>
            <span slot="footer" class="dialog-footer">
                <ElButton @click="onConfirmClick" value="false">Cancel</ElButton>
                <ElButton type="primary" @click="onConfirmClick" value="true">Confirm</ElButton>
            </span>
        </ElDialog>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

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
        //dialogVisible: this.visible,
    }),
    computed: {
        ...mapGetters("styleStorage", ["visible"]),
        
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
        ...mapActions("styleStorage", ["changeVisible"]),
        onDeleteClick() {
            this.changeVisible(true);
        },
        onConfirmClick(e) {
            
            const button = e.target.closest('button');
            if(button && button.value === "true"){
                this.$emit("deleteItem", this.item.id);
            }
            //this.dialogVisible = false;
            this.changeVisible(false);
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