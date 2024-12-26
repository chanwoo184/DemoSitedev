<!-- @/components/home/popular/HomePopular.vue -->
<template>
  <div class="popular-container">
    <!-- 뷰 전환 버튼 -->
    <div class="view-toggle">
      <button @click="setView('grid')" :class="{ active: currentView === 'grid' }">
        <font-awesome-icon :icon="faTh" class="icon" />
        <span>Table View</span>
      </button>
      <button @click="setView('list')" :class="{ active: currentView === 'list' }">
        <font-awesome-icon :icon="faBars" class="icon" />
        <span>Infinite Scroll View</span>
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
  gap: 15px;
}

.view-toggle button {
  display: flex;
  align-items: center;
  gap: 10px; /* 아이콘과 텍스트 간격 */
  background: linear-gradient(45deg, #6b5b95, #feb236);
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 25px;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.view-toggle button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.view-toggle button.active {
  background: linear-gradient(45deg, #feb236, #d64161);
}

.view-toggle button .icon {
  font-size: 16px;
}

@media (max-width: 768px) {
  .view-toggle {
    flex-direction: column;
    gap: 10px; /* 모바일에서 버튼 간격 */
  }

  .view-toggle button {
    width: 100%; /* 버튼이 화면 전체 너비를 차지 */
    justify-content: center;
    font-size: 13px;
  }

  .view-toggle button .icon {
    font-size: 14px;
  }
}
</style>
