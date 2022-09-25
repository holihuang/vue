<template>
    <div class="head">
        <div @click="handleToggle">按钮</div>
        <div>head</div>
    </div>
    <div class="wrapper">
        <div :class="isVisible ? 'side_show' : 'side_hide'">
            <router-link to="/a">a</router-link>
            <router-link to="/b">b</router-link>
        </div>
        <div>
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
    import {
        defineComponent,
        reactive,
        toRefs,
    } from 'vue'


    export default defineComponent({
        setup() {
            const state = reactive({
                isVisible: true,
            })

            function handleToggle() {
                state.isVisible = !state.isVisible
            }
            return {
                ...toRefs(state),
                handleToggle,
            };
        }
    })
</script>

<style scoped lang="less">
    .head {
        background: red;
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper {
        display: flex;
        flex: 1;
        flex-direction: row;

        .side_show {
            width: 200px;
            background: yellow;
            display: flex;
            flex-direction: column;
            animation: mymove 3s ease;
        }

        .side_hide {
            width: 40px;
            background: yellow;
            display: flex;
            flex-direction: column;
            animation: mymove 3s ease;
        }

        @keyframes mymove {}
    }
</style>