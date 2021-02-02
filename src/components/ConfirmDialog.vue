<template>
    <ElDialog :visible.sync="dialogVisible" width="30%" >
        <span>Are you sure you want to delete the item {{ comment }}?</span>
        <span slot="footer" class="dialog-footer">
            <ElButton @click="onConfirmClick" value="false">Cancel</ElButton>
            <ElButton type="primary" @click="onConfirmClick" value="true">Confirm</ElButton>
        </span>
    </ElDialog>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: 'ConfirmDialog',
    props: {
        item: {
            type: Object,
        }
    },
    computed: {
        ...mapGetters("confirm", ["visible"]),
        dialogVisible: {
            get() {
                return this.visible;
            },
            set(value) {
                this.changeVisible(value);
            }
        },
        
        comment: {
            get() {
                return this.item.comment || '';
            },
        },
    },
    methods: {
        ...mapActions("confirm", ["changeVisible"]),
        onConfirmClick(e) {
            const button = e.target.closest('button');
            if(button && button.value === "true"){
                this.$emit("confirmDelete", this.item.id);
            }
            this.dialogVisible = false;
        },
    }
}
</script>