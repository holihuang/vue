<template>
    <router-view />
</template>

<script lang="ts">
    import {
        defineComponent
    } from 'vue';
    import HelloWorld from './components/HelloWorld.vue';

    export default defineComponent({
        name: 'App',
        components: {
            HelloWorld
        }
    });
</script>

<style>
    html,
    body {
        height: 100%;
        margin: 0px;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
    }
</style>