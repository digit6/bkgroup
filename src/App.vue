<template>
  <v-app id="app">
 <v-content>
     <router-view></router-view>
 </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'app',
  components: {
   
  }
}
</script>

<style>
@import url('./assets/app.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
