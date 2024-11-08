<template>
    <div class="home">
      <Banner :movie="featuredMovie" />
      <MovieRow title="인기 영화" :fetchUrl="popularMoviesUrl" />
      <MovieRow title="최신 영화" :fetchUrl="newReleasesUrl" />
      <MovieRow title="액션 영화" :fetchUrl="actionMoviesUrl" />
    </div>
  </template>
  
  <script>
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  import Banner from '@/views/home-main/MovieBanner.vue';
  import MovieRow from '@/views/home-main/MovieRow.vue';
  import URLService from '@/util/movie/URL';
  
  export default {
    name: 'HomeMain',
    components: {
      Banner,
      MovieRow,
    },
    setup() {
      const apiKey = localStorage.getItem('TMDb-Key') || '';
      const featuredMovie = ref(null);
      const popularMoviesUrl = ref(URLService.getURL4PopularMovies(apiKey));
      const newReleasesUrl = ref(URLService.getURL4ReleaseMovies(apiKey));
      const actionMoviesUrl = ref(URLService.getURL4GenreMovies(apiKey, '28'));
  
      const loadFeaturedMovie = async () => {
        featuredMovie.value = await URLService.fetchFeaturedMovie(apiKey);
      };
  
      const initializeScrollListener = () => {
        const scrollListener = () => {
          const header = document.querySelector('.app-header');
          if (window.scrollY > 50) {
            header?.classList.add('scrolled');
          } else {
            header?.classList.remove('scrolled');
          }
        };
        window.addEventListener('scroll', scrollListener);
  
        onBeforeUnmount(() => {
          window.removeEventListener('scroll', scrollListener);
        });
      };
  
      onMounted(() => {
        loadFeaturedMovie();
        initializeScrollListener();
      });
  
      return {
        featuredMovie,
        popularMoviesUrl,
        newReleasesUrl,
        actionMoviesUrl,
      };
    },
  };
  </script>
  
  <style scoped>
  /* 홈 컴포넌트 스타일 */
  </style>
  