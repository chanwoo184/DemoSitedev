<template>
  <div class="movie-grid" ref="gridContainer">
    <!-- 왼쪽 상단 문구 추가 -->
    <div class="wishlist-header">
      <h2>❤️ Add to Wishlist</h2>
    </div>
    <div :class="['grid-container', currentView]">
      <div v-for="(movieGroup, i) in visibleWishlistMovies" :key="i" 
           :class="['movie-row', { full: movieGroup.length === rowSize }]">
        <div v-for="movie in movieGroup" :key="movie.id" 
             class="movie-card" @click="toggleWishlist(movie)">
          <img :src="getImageUrl(movie.poster_path)" :alt="movie.title">
          <div class="movie-title">{{ movie.title }}</div>
          <div class="wishlist-indicator">👍</div>
        </div>
      </div> 
    </div>
    <div v-if="!wishlist.length" class="empty-wishlist">
      Wishlist is empty.
    </div>
    <div class="pagination" v-if="totalPages > 1">
      <button @click="prevPage" :disabled="currentPage === 1">&lt; 이전</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">다음 &gt;</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useWishlist } from '@/util/movie/wishlist';

export default {
  name: 'MovieWishlist',
  setup() {
    const gridContainer = ref(null);
    const rowSize = ref(4);
    const moviesPerPage = ref(20);
    const currentPage = ref(1);
    const isMobile = ref(window.innerWidth <= 768);
    const currentView = ref('grid');
    const visibleWishlistMovies = ref([]);

    const { wishlist, toggleWishlist, loadWishlist } = useWishlist();

    const getImageUrl = (path) => {
      return path ? `https://image.tmdb.org/t/p/w300${path}` : '/placeholder-image.jpg';
    };

    const calculateLayout = () => {
      if (gridContainer.value) {
        const containerWidth = gridContainer.value.offsetWidth;
        const containerHeight = window.innerHeight - gridContainer.value.offsetTop;
        const movieCardWidth = isMobile.value ? 90 : 220;
        const movieCardHeight = isMobile.value ? 150 : 330;
        const horizontalGap = isMobile.value ? 10 : 15;
        const verticalGap = -10;

        rowSize.value = Math.floor(containerWidth / (movieCardWidth + horizontalGap));
        const maxRows = Math.floor(containerHeight / (movieCardHeight + verticalGap));
        moviesPerPage.value = rowSize.value * maxRows;

        updateVisibleMovies();
      }
    };

    const updateVisibleMovies = () => {
      const startIndex = (currentPage.value - 1) * moviesPerPage.value;
      const endIndex = startIndex + moviesPerPage.value;
      const paginatedMovies = wishlist.value.slice(startIndex, endIndex);

      visibleWishlistMovies.value = paginatedMovies.reduce((resultArray, item, index) => {
        const groupIndex = Math.floor(index / rowSize.value);
        if (!resultArray[groupIndex]) {
          resultArray[groupIndex] = [];
        }
        resultArray[groupIndex].push(item);
        return resultArray;
      }, []);
    };

    const totalPages = computed(() => {
      return Math.ceil(wishlist.value.length / moviesPerPage.value);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
      calculateLayout();
    };

    // 위시리스트나 페이지가 변경될 때마다 화면 업데이트
    watch([wishlist, currentPage], () => {
      updateVisibleMovies();
    });

    onMounted(() => {
      loadWishlist();
      handleResize();
      window.addEventListener('resize', handleResize);

      if (gridContainer.value) {
        const resizeObserver = new ResizeObserver(calculateLayout);
        resizeObserver.observe(gridContainer.value);
      }
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      gridContainer,
      rowSize,
      currentPage,
      isMobile,
      currentView,
      wishlist,
      visibleWishlistMovies,
      totalPages,
      getImageUrl,
      nextPage,
      prevPage,
      toggleWishlist,
    };
  }
};
</script>
  
  <style scoped>
  /* 동일한 스타일 코드 */
  .wishlist-indicator {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 20px;
    background-color: rgba(229, 9, 20, 0.5);
    box-shadow: 0 0 5px rgba(229, 9, 20, 0.7);
  }
    /* 상단 헤더 스타일 */
.wishlist-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #4b4747;
  color: #e5e5e5;
  border-bottom: 1px solid #333;
  margin-bottom: 20px;
}

.wishlist-header h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}
  .movie-grid {
    width: 100%;
    height: calc(100vh - 200px);
    margin-bottom: 40px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  .grid-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* 상단부터 정렬 */
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
    width: 160px;
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
    width: 100%;
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
  
  .empty-wishlist {
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
    color: #a95757;
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
  
  @media (max-width: 768px) {
    .movie-grid {
      width: 100%;
      height: calc(110svh - 150px);
      margin-bottom: 40px;
      margin-top: 30px;
    }
  
    .movie-card {
      width: 90px;
      margin: 0 5px;
    }
  
    .movie-title {
      font-size: 12px;
    }
  
    .pagination button {
      padding: 8px 12px;
      font-size: 14px;
    }
  
    .grid-container.list .movie-card img {
      width: 60px;
    }
  }
  </style>
  