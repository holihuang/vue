<template>
    <div class="wrapper">
        <div>child</div>
        <div>{{num}}</div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            num: Number,
        },
        setup() {
            return {}
        }
    }
</script>

<style scoped lang="less">
    .wrapper {
        width: 200px;
        height: 200px;
        border: 1px solid red;
    }
</style>