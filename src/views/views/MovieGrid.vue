<!--@/views/views/MovieGrid.vue-->
<template>
  <div class="movie-grid" ref="gridContainer">
    <div :class="['grid-container', currentView]">
      <div
        v-for="(movieGroup, i) in visibleMovieGroups"
        :key="i"
        :class="['movie-row', { full: movieGroup.length === rowSize }]"
      >
        <div
          v-for="movie in movieGroup"
          :key="movie.id"
          class="movie-card"
          @mouseup="toggleWishlist(movie)" 
        >
          <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" />
          <div class="movie-title">{{ movie.title }}</div>
          <div v-if="isInWishlist(movie.id)" class="wishlist-indicator">👍</div>
        </div>
      </div>
    </div>
    <div class="pagination" v-if="totalPages > 1">
      <button @click="prevPage" :disabled="currentPage === 1">&lt; 이전</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">다음 &gt;</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import { useWishlist } from '@/util/movie/wishlist';

export default {
  name: 'MovieGrid',
  props: {
    fetchUrl: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { toggleWishlist, isInWishlist } = useWishlist(); // useWishlist에서 toggleWishlist와 isInWishlist 가져오기
    const gridContainer = ref(null);
    const movies = ref([]);
    const currentPage = ref(1);
    const rowSize = ref(4);
    const moviesPerPage = ref(20);
    const isMobile = ref(window.innerWidth <= 768);
    const currentView = ref('grid');
    let wishlistTimer = null;

    const fetchMovies = async () => {
      try {
        const totalMoviesNeeded = 120;
        const numberOfPages = Math.ceil(totalMoviesNeeded / 20);
        let allMovies = [];

        for (let page = 1; page <= numberOfPages; page++) {
          const response = await axios.get(props.fetchUrl, {
            params: {
              page,
              per_page: moviesPerPage.value,
            },
          });
          allMovies = [...allMovies, ...response.data.results];
        }

        movies.value = allMovies.slice(0, totalMoviesNeeded);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    const getImageUrl = (path) => `https://image.tmdb.org/t/p/w300${path}`;

    const visibleMovieGroups = computed(() => {
      const startIndex = (currentPage.value - 1) * moviesPerPage.value;
      const endIndex = startIndex + moviesPerPage.value;
      const paginatedMovies = movies.value.slice(startIndex, endIndex);

      return paginatedMovies.reduce((resultArray, item, index) => {
        const groupIndex = Math.floor(index / rowSize.value);
        if (!resultArray[groupIndex]) {
          resultArray[groupIndex] = [];
        }
        resultArray[groupIndex].push(item);
        return resultArray;
      }, []);
    });

    const totalPages = computed(() => Math.ceil(movies.value.length / moviesPerPage.value));

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
      calculateLayout();
    };

    const calculateLayout = () => {
      if (gridContainer.value) {
        const container = gridContainer.value;
        const containerWidth = container.offsetWidth;
        const containerHeight = window.innerHeight - container.offsetTop;
        const movieCardWidth = isMobile.value ? 90 : 200;
        const movieCardHeight = isMobile.value ? 150 : 220;
        const horizontalGap = isMobile.value ? 10 : 15;
        const verticalGap = -10;

        rowSize.value = Math.floor(containerWidth / (movieCardWidth + horizontalGap));
        const maxRows = Math.floor(containerHeight / (movieCardHeight + verticalGap));
        moviesPerPage.value = rowSize.value * maxRows;
      }
    };

    onMounted(async () => {
      await fetchMovies();
      calculateLayout();
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
      if (wishlistTimer) clearTimeout(wishlistTimer);
    });

    return {
      gridContainer,
      movies,
      currentPage,
      rowSize,
      moviesPerPage,
      isMobile,
      currentView,
      totalPages,
      visibleMovieGroups,
      nextPage,
      prevPage,
      toggleWishlist, // toggleWishlist를 반환하여 템플릿에서 사용할 수 있게 함
      isInWishlist,
      getImageUrl,
    };
  },
};
</script>

<style scoped>
/* 기존의 스타일 유지 */
.wishlist-indicator {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 20px;
  background-color: rgba(229, 9, 20, 0.5);
  box-shadow: 0 0 5px rgba(229, 9, 20, 0.7);
}

.movie-grid {
  width: 100%;
  height: calc(100vh - 200px);
  margin-bottom: 40px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: visible;
}

.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
}

.movie-row {
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
  width: 100%;
}

.grid-container.list .movie-row {
  flex-direction: column;
}

.movie-card {
  width: 200px;
  margin: 0 10px;
  transition: transform 0.3s;
  position: relative;
}

.grid-container.list .movie-card {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-card img {
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 4px;
  object-fit: cover;
}

.grid-container.list .movie-card img {
  width: 100px;
  margin-right: 20px;
}

.movie-title {
  margin-top: 5px;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.grid-container.list .movie-title {
  text-align: left;
  white-space: normal;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 4px;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
/* 반응형 설정 */
@media (max-width: 768px) {
  .movie-card {
    width: 100px; /* 모바일에서 카드 크기 조정 */
  }

  .movie-card img {
    width: 70%;
  }

  .pagination {
    margin-top: 20px; /* 모바일에서 페이지네이션 간격 조정 */
  }
}
</style>
