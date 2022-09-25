<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div>header</div>
    <button @click="push">push</button>
    <button @click="get">get</button> -->
    <div class="bottom">
        <router-link to="/">跳转到a</router-link>
        <router-link to="/b">跳转到b</router-link>
        <router-link to="/c">跳转到c</router-link>
        <!-- <keep-alive> -->
            <router-view></router-view>
        <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
      push() {
          console.log(111)
          this.$router.push({
              path: '/b',
              query: {
                  value: 2,
              },
              replace: true,
          })
      },
      get() {
          console.log(this.$route, 1122)
      }
  },
}
</script>

<style>
html, body {
    height: 100%;
    margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.bottom {
    display: flex;
    flex: 1;
}
</style>
