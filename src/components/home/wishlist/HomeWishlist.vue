<!-- src/components/home/wishlist/HomeWishlist.vue -->
<template>
    <div>
      <MovieWishlist />
    </div>
  </template>
  
  <script>
  import MovieWishlist from '@/views/home-wishlist/MovieWishlist.vue';
  
  export default {
    name: 'HomeWishlist',
    components: {
      MovieWishlist
    }
  };
  </script>
  
  <style scoped>
  /* 필요한 CSS가 있다면 여기에 추가하세요 */
  </style>
  