<!-- src/components/home/Home.vue -->
<template>
    <div id="app">
      <Header />
      <div id="container">
        <router-view /> <!-- <router-outlet>에 해당하는 부분 -->
      </div>
    </div>
  </template>
  
  <script>
  // Header 컴포넌트 가져오기
  import Header from '@/components/layout/Header.vue';
  
  export default {
    name: 'Home',
    components: {
      Header
    }
  };
</script>
  
<style scoped>
#app {
  width: 95vw;
  height: 95vh;
  overflow-x: hidden;
  margin: auto;
}
</style>
