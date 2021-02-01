<template>
    <div class="total-value" :class="color"> Balance: {{ total }} </div>
</template>

<script>
export default {
    name: "TotalBalance",
    props: {
        total: {
            type: Number,
            default: 0,
        },
        changeStyle: {
            type: Function,
        },
    },
    computed: {
       color:  {
           get(){
               return this.changeStyle(this.total);
           }
       }
    },
}
</script>

<style scoped>
    .total-value {
        font-size: 26px;
        text-transform: uppercase;
        padding: 20px;
        text-align: center;
    }

</style>