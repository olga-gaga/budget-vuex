<template>
    <ElRow>
        <ElButton type="" @click="onClick" value="all"> All </ElButton>
        <ElButton type="success" @click="onClick" value="INCOME"> Income </ElButton>
        <ElButton type="danger" @click="onClick" value="OUTCOME"> Outcome </ElButton>
    </ElRow>
</template>

<script>
export default {
    name: "SortButton",
    data: () => ({
        type: "all",
    }),
    methods: {
        onClick(e) {
            const button = e.target.closest('button')
            this.type = button.value || "all";
            this.$emit('changeType', this.type);
        }
    }
}
</script>

<style lang="stylus">

</style>