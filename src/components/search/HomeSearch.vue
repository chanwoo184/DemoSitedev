<!--@/components/search/HomeSearch.vue-->
<template>
  <div class="container-search">
    <div class="container-search-bar">
      <MovieSearch @changeOptions="changeOptions" />
    </div>
    <div class="content-search">
      <MovieInfiniteScroll
        :apiKey="apiKey"
        :genreCode="genreId"
        :sortingOrder="sortId"
        :voteAverage="ageId"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import MovieSearch from '@/views/search/MovieSearch.vue';
import MovieInfiniteScroll from '@/views/views/MovieInfiniteScroll.vue';

export default {
  name: 'HomeSearch',
  components: {
    MovieSearch,
    MovieInfiniteScroll,
  },
  setup() {
    const apiKey = ref(localStorage.getItem('TMDb-Key') || '');
    const genreId = ref('28');
    const ageId = ref(-1);
    const sortId = ref('all');

    const genreCode = {
      '장르 (전체)': 0,
      Action: 28,
      Adventure: 12,
      Comedy: 35,
      Crime: 80,
      Family: 10751,
    };

    const sortingCode = {
      '언어 (전체)': 'all',
      영어: 'en',
      한국어: 'ko',
    };

    const ageCode = {
      '평점 (전체)': -1,
      '9~10': 9,
      '8~9': 8,
      '7~8': 7,
      '6~7': 6,
      '5~6': 5,
      '4~5': 4,
      '4점 이하': -2,
    };
    const changeOptions = (options) => {
      genreId.value = genreCode[options.originalLanguage] || "0";
      sortId.value = sortingCode[options.sorting] || "all";
      ageId.value = ageCode[options.translationLanguage] || -1;
    };


    return {
      apiKey,
      genreId,
      ageId,
      sortId,
      changeOptions,
    };
  },
};
</script>
