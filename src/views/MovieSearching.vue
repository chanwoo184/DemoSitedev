// src/views/MovieSearching.vue - 영화 검색 기능 구현
<template>
  <div class="movie-search">
    <input type="text" v-model="query" @input="searchMovies" placeholder="영화 제목을 입력하세요" />
    <div class="search-results">
      <div v-for="movie in movies" :key="movie.id" class="search-result">
        <router-link :to="{ name: 'MovieDetail', params: { movieId: movie.id } }">
          <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" />
          <h3>{{ movie.title }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'MovieSearching',
  setup() {
    const query = ref('');
    const movies = ref([]);

    const searchMovies = async () => {
      if (query.value.length < 3) return;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&language=ko-KR&query=${query.value}`
        );
        movies.value = response.data.results;
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    const getImageUrl = (path) => `https://image.tmdb.org/t/p/w300${path}`;

    return {
      query,
      movies,
      searchMovies,
      getImageUrl,
    };
  },
};
</script>

<style scoped>
.movie-search {
  max-width: 600px;
  margin: 20px auto;
}
.movie-search input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}
.search-results {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.search-result {
  width: calc(33.333% - 20px);
  text-align: center;
}
.search-result img {
  width: 100%;
  border-radius: 8px;
}
</style>
