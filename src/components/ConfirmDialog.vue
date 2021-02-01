<template>
    <ElDialog :visible.sync="visible" width="30%" >
        <span>Are you sure you want to delete the item{{ comment }}?</span>
        <span slot="footer" class="dialog-footer">
            <ElButton @click="onConfirmClick" value="false">Cancel</ElButton>
            <ElButton type="primary" @click="onConfirmClick" value="true">Confirm</ElButton>
        </span>
    </ElDialog>
</template>

<script>
export default {
    name: 'ConfirmDialog',
    props: {
        item: {
            type: Object, 
            default: () => ({}),
        },
    },
    computed: {
        
    }
}
</script>