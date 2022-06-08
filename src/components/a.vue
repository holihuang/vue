<template>
    <div>
        <div>this is a</div>
        <el-button>确认</el-button>
        <el-input v-model="ipt" placeholder="请输入" />
        <el-slider v-model="v1" />
        <router-view />
    </div>
</template>
<script>
export default {
    data() {
        return {
            ipt: '',
            v1: 0,
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log(to, from, 112233)
        next((vm) => {
            console.log(vm, 555)
        })
    },
    beforeRouteUpdate(to, from, next) {
        console.log(to, from, next, 666)
        next()
    },
    beforeRouteLeave(to, from, next) {
        if(confirm('确定要离开吗？')) {
            next()
        } else {
            next(false)
        }
    },
}
</script>

