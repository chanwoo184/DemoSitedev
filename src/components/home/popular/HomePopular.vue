<!-- @/components/home/popular/HomePopular.vue -->
<template>
  <div class="popular-container">
    <!-- 뷰 전환 버튼 -->
    <div class="view-toggle">
      <button @click="setView('grid')" :class="{ active: currentView === 'grid' }">
        <font-awesome-icon :icon="faTh" />
      </button>
      <button @click="setView('list')" :class="{ active: currentView === 'list' }">
        <font-awesome-icon :icon="faBars" />
      </button>
    </div>

    <!-- 그리드 뷰 -->
    <MovieGrid v-if="currentView === 'grid'" title="인기 영화" :fetchUrl="fetchURL" />

    <!-- 리스트 뷰: 무한 스크롤 -->
    <MovieInfiniteScroll
      v-if="currentView === 'list'"
      :apiKey="apiKey"
      :genreCode="genreCode"
      :sortingOrder="sortingOrder"
      :voteAverage="voteAverage"
    />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { faTh, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import MovieGrid from '@/views/views/MovieGrid.vue';
import MovieInfiniteScroll from '@/views/views/MovieInfiniteScroll.vue';
import urlService from '@/util/movie/URL'; // 싱글톤 인스턴스를 바로 사용

export default {
  name: 'HomePopular',
  components: {
    FontAwesomeIcon,
    MovieGrid,
    MovieInfiniteScroll,
  },
  setup() {
    const apiKey = localStorage.getItem('TMDb-Key') || '';
    const currentView = ref('grid');
    const originalOverflow = ref(document.body.style.overflow);

    // 무한 스크롤 필터링 데이터
    const genreCode = ref('28'); // 기본 장르: 액션
    const sortingOrder = ref('all'); // 기본 언어: 전체
    const voteAverage = ref(-1); // 기본 평점: 전체

    // 뷰 전환 함수
    const setView = (view) => {
      currentView.value = view;
      if (view === 'grid') {
        disableScroll();
      } else {
        enableScroll();
      }
    };

    // 스크롤 제어
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
      document.body.style.overflow = originalOverflow.value || 'auto';
    };

    const fetchURL = urlService.getURL4PopularMovies(apiKey);

    onMounted(() => {
      if (currentView.value === 'grid') disableScroll();
    });

    onUnmounted(() => {
      enableScroll(); // 컴포넌트 언마운트 시 스크롤 복구
    });

    return {
      faTh,
      faBars,
      apiKey,
      currentView,
      setView,
      fetchURL,
      genreCode,
      sortingOrder,
      voteAverage,
    };
  },
};
</script>

<style scoped>
.popular-container {
  padding: 20px;
}

.view-toggle {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.view-toggle button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.view-toggle button.active {
  background-color: #535bf2;
}

@media (max-width: 768px) {
  .view-toggle {
    margin-bottom: 30px;
  }
}
</style>
