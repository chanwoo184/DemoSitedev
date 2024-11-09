<template>
    <div class="popular-container">
      <div class="view-toggle">
        <button @click="setView('grid')" :class="{ active: currentView === 'grid' }">
          <font-awesome-icon :icon="faTh" />
        </button>
        <button @click="setView('list')" :class="{ active: currentView === 'list' }">
          <font-awesome-icon :icon="faBars" />
        </button>
      </div>
  
      <MovieGrid v-if="currentView === 'grid'" title="인기 영화" :fetchUrl="fetchURL" />
  
      <MovieInfiniteScroll
        v-if="currentView === 'list'"
        :apiKey="apiKey"
        genreCode="28"
        sortingOrder="all"
        voteEverage="-1"
      />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { faTh, faBars } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import MovieGrid from '@/components/MovieGrid.vue';
  import MovieInfiniteScroll from '@/components/MovieInfiniteScroll.vue';
  import URLService from '@/util/movie/URL';
  
  export default {
    name: 'HomePopular',
    components: {
      FontAwesomeIcon,
      MovieGrid,
      MovieInfiniteScroll
    },
    setup() {
      const faTh = faTh;
      const faBars = faBars;
      const apiKey = localStorage.getItem('TMDb-Key') || '';
      const currentView = ref('grid');
      const urlService = new URLService();
  
      const setView = (view) => {
        currentView.value = view;
        if (view === 'grid') {
          disableScroll();
        } else {
          enableScroll();
        }
      };
  
      const disableScroll = () => {
        document.body.style.overflow = 'hidden';
      };
  
      const enableScroll = () => {
        document.body.style.overflow = 'auto';
      };
  
      const fetchURL = urlService.getURL4PopularMovies(apiKey);
  
      onMounted(() => {
        disableScroll();
      });
  
      return {
        faTh,
        faBars,
        apiKey,
        currentView,
        setView,
        fetchURL
      };
    }
  };
  </script>
  
  <style scoped>
  .view-toggle {
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
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
      margin-top: 80px;
    }
  }
  </style>
  