<template>
    <div class="title">
        b
    </div>
    <button @click="handleAdd">+</button>
    <div>
        {{data.b}}
    </div>
    <Child :num="data.b" />
</template>
<script>
    import {
        defineComponent,
    } from 'vue'
    import {
        useStore
    } from 'vuex';
    import Child from './Child.vue'
    export default defineComponent({
        components: {
            Child,
        },
        setup() {
            const store = useStore();
            const data = store.state.b;

            function handleAdd() {
                store.commit('b/add')
            }
            return {
                data,
                handleAdd,
            };
        },
    })
</script>
<style scoped lang="less">
    .title {
        color: red;
    }
</style>