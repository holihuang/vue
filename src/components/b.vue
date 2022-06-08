<template>
    <div>this is b</div>
</template>

<script>

export default {
    // name: 'b',
    mounted() {
        console.log('b component mounted...')
    },
    activated() {
        console.log('b component activeted...')
    },
    deactivated() {
        console.log('b component deactivated...')
    }
}
</script>

