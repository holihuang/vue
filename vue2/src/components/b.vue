<template>
    <div>
        <div>this is b</div>
        <div>{{card}}</div>
        <button @click="handle">+</button>
        <button @click="handleAsync">async +</button>

    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    // name: 'b',
    mounted() {
        console.log(this.$store, 'bbb...')
        console.log('b component mounted...')
    },
    computed: {
        ...mapState('card', {
            card: state => state.card
        })
    },
    methods: {
        ...mapMutations('card', ['add']),
        ...mapActions('card', ['addAsync']),
        handle() {
            this.add(this.card[this.card.length - 1] + 1)
        },
        handleAsync() {
            this.addAsync(this.card[this.card.length - 1] + 1)
        },
    },
    activated() {
        console.log('b component activeted...')
    },
    deactivated() {
        console.log('b component deactivated...')
    }
}
</script>

