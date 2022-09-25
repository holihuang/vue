<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>Ecosystem</h3>
        <div>{{content}}</div>
        <p>---分割线---</p>
        <div>{{txt}}</div>
        <div>{{name}}</div>
        <A />
    </div>
</template>

<script lang="ts">
    import {
        defineComponent,
        reactive,
        toRefs,
    } from 'vue';

    import A from './a/index.vue'

    export default defineComponent({
        name: 'HelloWorld',
        props: {
            msg: String,
            content: String,
            txt: String,
        },
        components: {
            A,
        },
        setup() {
            const state = reactive({
                name: 'huang'
            })
            return {
                ...toRefs(state),
            };
        },
    });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>