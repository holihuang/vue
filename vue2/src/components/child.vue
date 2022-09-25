<template>
    <div>
        这里是一个子组件
        <div>这是一个{{mode}}</div>
    </div>
</template>
<script>
export default {
    props: {
        mode: Number,
    },
    data() {
        return {

        }
    },
    beforeCreate() {
        console.log('子beforeCreate...')
    },
    created() {
        console.log('子created...')
    },
    beforeMount() {
        console.log('子beforeMount...')
    },
    mounted() {
        console.log('子mounted...')
    },
    beforeUpdate() {
        console.log('子beforeUpdate...')
    },
    updated() {
        console.log('子updated...')
    },
    beforeDestroy() {
        console.log('子beforeDestroy...')
    },
    destroyed() {
        console.log('子destroyed...')
    },
}
</script>
<style scoped>

</style>
