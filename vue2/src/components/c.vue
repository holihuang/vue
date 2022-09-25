<template>
    <div>
        <h3>this is c</h3>
        <p>姓名：{{person.name}}</p>
        <p>性别：{{person.sex}}</p>
        <p>爱好：{{person.hobby}}</p>
        <button @click="handleSex">添加性别</button>
        <button @click="deleteName">删除名字</button>
        <button @click="updateArr">更新数组</button>
        <h3>下面是一个子组件</h3>
        <Child :mode="mode" />
        <button @click="handleMode">mode</button>
    </div>
</template>

<script>
import Child from './child.vue'
export default {
    components: {
        Child,
    },
    data() {
        return {
            mode: 1,
            person: {
                name: '张三',
                age: 18,
                hobby: ['吃', '喝', '玩'],
            },
        }
    },
    mounted() {
        console.log('this is c component did mount...')
    },
    methods: {
        handleSex() {
            // this.person.sex = '男'
            this.$set(this.person, 'sex', '男')
        },
        deleteName() {
            this.$delete(this.person, 'name')
        },
        updateArr() {
            this.$set(this.person.hobby, 1, '睡觉')
        },
        handleMode() {
            this.mode++
        },
    },
    beforeCreate() {
        console.log('父beforeCreate...')
    },
    created() {
        console.log('父created...')
    },
    beforeMount() {
        console.log('父beforeMount...')
    },
    mounted() {
        console.log('父mounted...')
    },
    beforeUpdate() {
        console.log('父beforeUpdate...')
    },
    updated() {
        console.log('父updated...')
    },
    beforeDestroy() {
        console.log('父beforeDestroy...')
    },
    destroyed() {
        console.log('父destroyed...')
    },
}
</script>
