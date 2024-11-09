<template>
  <div id="app">
    <Header /> 
    <HomeMain />
  </div>
</template>

<script>
import Header from './layout/header/Header.vue';
import HomeMain from './components/home/main/HomeMain.vue';

export default {
  name: 'App',
  components: {
    Header, // Header 등록
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
