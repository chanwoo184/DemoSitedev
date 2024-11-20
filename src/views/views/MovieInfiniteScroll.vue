<!-- @/views/views/MovieInfiniteScroll.vue -->
<template>
  <div class="movie-grid" ref="gridContainer">
    <div :class="['grid-container', currentView]">
      <div v-for="(movieGroup, index) in visibleMovieGroups" :key="index" class="movie-row">
        <div
          v-for="movie in movieGroup"
          :key="movie.id"
          class="movie-card"
          @mouseup="toggleWishlist(movie)"
        >
          <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" loading="lazy" />
          <div class="movie-title">{{ movie.title }}</div>
          <div v-if="isInWishlist(movie.id)" class="wishlist-indicator">👍</div>
        </div>
      </div>
    </div>
    <div ref="loadingTrigger" class="loading-trigger">
      <div v-if="isLoading" class="loading-indicator">
        <div class="spinner"></div>
        <span>Loading...</span>
      </div>
    </div>
    <button v-if="showTopButton" @click="scrollToTopAndReset" class="top-button" aria-label="맨 위로 이동">
      Top
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import axios from "axios";
import { useWishlist } from "@/util/movie/wishlist";
import { watch } from "vue"

export default {
  name: "MovieInfiniteScroll",
  props: {
    genreCode: { type: String, required: true },
    apiKey: { type: String, required: true },
    sortingOrder: { type: String, default: "all" },
    voteAverage: { type: Number, default: 100 },
  },
  setup(props) {
    const movies = ref([]);
    const currentPage = ref(1);
    const rowSize = ref(4);
    const isLoading = ref(false);
    const isMobile = ref(window.innerWidth <= 768);
    const currentView = ref("grid"); // 현재 사용하고 있는 뷰 grid or list
    const hasMore = ref(true);
    const showTopButton = ref(false);

    const { toggleWishlist, isInWishlist } = useWishlist();

    const gridContainer = ref(null);
    const loadingTrigger = ref(null);
    let observer = null;

  const fetchMovies = async () => {
    if (isLoading.value || !hasMore.value) return;
    isLoading.value = true;

  try {
    const url =
      props.genreCode === "0"
        ? "https://api.themoviedb.org/3/movie/popular"
        : "https://api.themoviedb.org/3/discover/movie";

    const params = {
      api_key: props.apiKey,
      language: "ko-KR",
      page: currentPage.value,
      with_genres: props.genreCode !== "0" ? props.genreCode : undefined,
    };

    const response = await axios.get(url, { params });
    const newMovies = response.data.results;

    if (newMovies.length > 0) {
      let movieArray = [...movies.value, ...newMovies];

      // 필터링: 언어 및 평점 기준
      if (props.sortingOrder !== "all") {
        movieArray = movieArray.filter(
          (movie) => movie.original_language === props.sortingOrder
        );
      }
      movieArray = movieArray.filter((movie) => {
        if (props.voteAverage === -1) return true;
        if (props.voteAverage === -2) return movie.vote_average <= 4;
        return (
          movie.vote_average >= props.voteAverage &&
          movie.vote_average < props.voteAverage + 1
        );
      });

      // 정렬: 제목 기준 (알파벳 또는 가나다순)
      if (props.sortingOrder === "en") {
        movieArray.sort((a, b) => a.title.localeCompare(b.title));
      } else if (props.sortingOrder === "ko") {
        movieArray.sort((a, b) => a.title.localeCompare(b.title, "ko"));
      }

      movies.value = movieArray;
      currentPage.value++;
    } else {
      hasMore.value = false;
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  } finally {
    isLoading.value = false;
  }
};

  // 필터링 관련 props 변경 감지 및 새로 로드
  watch(
    [() => props.genreCode, () => props.sortingOrder, () => props.voteAverage],
    () => {
      movies.value = [];
      currentPage.value = 1;
      hasMore.value = true;
      fetchMovies();
    }
  );
    const getImageUrl = (path) => {
      return path ? `https://image.tmdb.org/t/p/w300${path}` : "/placeholder-image.jpg";
    };

    const visibleMovieGroups = computed(() => {
      return movies.value.reduce((resultArray, item, index) => {
        const groupIndex = Math.floor(index / rowSize.value);
        if (!resultArray[groupIndex]) {
          resultArray[groupIndex] = [];
        }
        resultArray[groupIndex].push(item);
        return resultArray;
      }, []);
    });

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
      if (gridContainer.value) {
        const containerWidth = gridContainer.value.offsetWidth;
        const movieCardWidth = isMobile.value ? 100 : 300;
        const horizontalGap = isMobile.value ? 10 : 15;
        rowSize.value = Math.floor(containerWidth / (movieCardWidth + horizontalGap));
      }
    };

    const handleScroll = () => {
      showTopButton.value = window.scrollY > 300; // 300 -> 0으로 수정 
    };

    const scrollToTopAndReset = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      movies.value = [];
      currentPage.value = 1;
      hasMore.value = true;
      fetchMovies();
    };

    const setupIntersectionObserver = () => {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading.value && hasMore.value) {
          fetchMovies();
        }
      });
      if (loadingTrigger.value) observer.observe(loadingTrigger.value);
    };

    onMounted(() => {
      setupIntersectionObserver();
      fetchMovies();
      handleResize();
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    });

    return {
      movies,
      isLoading,
      showTopButton,
      currentView,
      visibleMovieGroups,
      getImageUrl,
      scrollToTopAndReset,
      toggleWishlist,
      isInWishlist,
      loadingTrigger,
      gridContainer,
    };
  },
};
</script>

  
  <style scoped>
  /* CSS 스타일을 그대로 사용하세요 */
  .movie-grid {
  width: 100%;
  margin-bottom: 40px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 300px;
  margin: 0 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  cursor: pointer;
  user-select: none;
  border-radius: 8px;
  overflow: hidden;
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.movie-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  display: block;
}

.movie-title {
  margin-top: 8px;
  padding: 0 5px;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff;
}

.wishlist-indicator {
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 30px;
  background-color: rgba(229, 9, 20, 0.5);
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  animation: popIn 0.3s ease-out;
}

.loading-trigger {
  height: 20px;
  margin-top: 20px;
  text-align: center;
}

.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  font-size: 16px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #E50914;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, transform 0.3s;
  z-index: 1000;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.top-button:hover {
  background-color: #9b0f16;
  transform: scale(1.1);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes popIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .movie-card {
    width: 120px;
    margin: 0 5px;
  }

  .movie-title {
    font-size: 12px;
  }

  .wishlist-indicator {
    font-size: 20px;
    top: -5px;
    right: -5px;
  }

  .top-button {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }

  .loading-indicator {
    font-size: 14px;
  }
}

  </style>
  