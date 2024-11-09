<template>
  <div id="app">
    <HomeMain />
  </div>
</template>

<script>
import HomeMain from './components/home/main/HomeMain.vue';


export default {
  name: 'App',
  components: {
    HomeMain,
  },
};
</script>

<style>
/* App 스타일 추가 */
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
