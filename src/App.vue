<template>
  <div id="app">
    <img src="./assets/logo.png">
    <person></person>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Person from './components/person/person'
export default {
  name: 'app',
  components: {
    Hello,
    Person
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
