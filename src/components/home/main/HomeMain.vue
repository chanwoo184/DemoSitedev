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
    // API 키 가져오기
    const apiKey = localStorage.getItem('TMDb-Key') || '';

    // 반응형 데이터 정의
    const featuredMovie = ref(null);
    const popularMoviesUrl = ref(URLService.getURL4PopularMovies(apiKey));
    const newReleasesUrl = ref(URLService.getURL4ReleaseMovies(apiKey));
    const actionMoviesUrl = ref(URLService.getURL4GenreMovies(apiKey, '28'));

    // 대표 영화 불러오기 함수
    const loadFeaturedMovie = async () => {
      try {
        featuredMovie.value = await URLService.fetchFeaturedMovie(apiKey);
      } catch (error) {
        console.error("Error fetching featured movie:", error);
      }
    };

    // 스크롤 리스너 초기화 함수
    const scrollListener = () => {
      const header = document.querySelector('.app-header');
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    // 컴포넌트 라이프사이클: 마운트 시 스크롤 리스너 등록
    onMounted(() => {
      loadFeaturedMovie();
      window.addEventListener('scroll', scrollListener);
    });

    // 컴포넌트 라이프사이클: 언마운트 시 스크롤 리스너 해제
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', scrollListener);
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
.home {
  display: block; /* :host 대체 */
}

/* 스크롤바 설정 */
html,
body {
  overflow-y: scroll;
}

body {
  background-color: #141414;
}
</style>
