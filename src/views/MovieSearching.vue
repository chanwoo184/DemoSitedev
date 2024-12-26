<template>
  <div class="movie-search">
    <input
      type="text"
      v-model="query"
      @focus="showRecentSearches = true"
      @input="debouncedSearch"
      @blur="hideRecentSearches"
      placeholder="영화 제목을 입력하세요"
    />
    <div class="recent-searches" v-if="showRecentSearches && recentSearches.length > 0">
      <p>최근 검색어</p>
      <ul>
        <li v-for="(search, index) in recentSearches" :key="index" @click="searchFromRecent(search)">
          {{ search }}
        </li>
      </ul>
    </div>
    <div class="search-results">
      <div v-if="loading" class="loading">검색 중...</div>
      <div v-else-if="movies.length === 0 && query.length >= 3" class="no-results">
        검색 결과가 없습니다.
      </div>
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
import debounce from 'lodash/debounce';

export default {
  name: 'MovieSearching',
  setup() {
    const query = ref('');
    const movies = ref([]);
    const loading = ref(false);
    const showRecentSearches = ref(false);

    // 로컬스토리지에서 최근 검색어 가져오기
    const recentSearches = ref(
      JSON.parse(localStorage.getItem('recentSearches')) || []
    );

    // 검색어 저장 함수
    const saveRecentSearch = (term) => {
      if (!recentSearches.value.includes(term)) {
        recentSearches.value.unshift(term); // 가장 최근 검색어를 배열 앞에 추가
        if (recentSearches.value.length > 10) {
          recentSearches.value.pop(); // 최대 10개 유지
        }
        localStorage.setItem(
          'recentSearches',
          JSON.stringify(recentSearches.value)
        );
      }
    };

    // 최근 검색어에서 검색
    const searchFromRecent = (term) => {
      query.value = term;
      searchMovies();
      showRecentSearches.value = false;
    };

    // 영화 검색 함수
    const searchMovies = async () => {
      if (query.value.trim().length < 3) return; // 최소 3글자 입력 후 검색

      loading.value = true;

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&language=ko-KR&query=${query.value.trim()}`
        );
        movies.value = response.data.results;
        saveRecentSearch(query.value.trim());
      } catch (error) {
        console.error('Error searching movies:', error);
      } finally {
        loading.value = false;
      }
    };

    // 검색창 포커스 해제 시 최근 검색어 숨기기
    const hideRecentSearches = () => {
      setTimeout(() => {
        showRecentSearches.value = false;
      }, 200);
    };

    // Debounce 적용
    const debouncedSearch = debounce(searchMovies, 300);

    const getImageUrl = (path) => {
      return path
        ? `https://image.tmdb.org/t/p/w300${path}`
        : '/placeholder-image.jpg';
    };

    return {
      query,
      movies,
      loading,
      showRecentSearches,
      recentSearches,
      searchFromRecent,
      debouncedSearch,
      hideRecentSearches,
      getImageUrl,
    };
  },
};
</script>

<style scoped>
.movie-search {
  max-width: 800px;
  margin: 20px auto;
  position: relative;
}
.movie-search input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}
.recent-searches {
  position: absolute;
  top: 40px;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 100;
}
.recent-searches p {
  margin: 10px;
  font-size: 14px;
  color: #666;
}
.recent-searches ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.recent-searches li {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}
.recent-searches li:hover {
  background: #f5f5f5;
}
.search-results {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;  
  gap: 10px;
  justify-content: center; /* 포스터들을 중앙으로 정렬 */
}
.search-result {
  width: calc(12% - 10px);
  text-align: center;
}
.search-result img {
  width: 100% !important; 
  max-height: 200px; /* 포스터의 최대 높이를 제한 */
  object-fit: cover; /* 이미지를 잘 맞게 조정 */  
  border-radius: 8px !important;
}
.loading {
  text-align: center;
  font-size: 1rem;
  color: #666;
}
.no-results {
  text-align: center;
  font-size: 1rem;
  color: #999;
}
@media (max-width: 768px) {
  .search-result {
    width: calc(25% - 10px); /* 모바일에서는 한 줄에 4개 */
  }
}

</style>
