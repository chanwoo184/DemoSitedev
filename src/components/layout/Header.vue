<template>
  <div id="container">
    <header :class="['app-header', { scrolled: isScrolled }]">
      <div class="header-left">
        <div class="logo">
          <router-link to="/">
            <font-awesome-icon :icon="faFilm" style="height: 100%; color: #E50914;" />
          </router-link>
        </div>
        <nav class="nav-links desktop-nav">
          <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/popular">Popular</router-link></li>
            <li><router-link to="/wishlist">Wislist</router-link></li>
            <li><router-link to="/search">Search</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="header-right">
        <button class="icon-button" @click="toggleSearch">
          <font-awesome-icon :icon="faSearch" />
        </button>
        <button class="icon-button" @click="removeKey">
          <font-awesome-icon :icon="faRightFromBracket" />
        </button>
        <button class="icon-button mobile-menu-button" @click="toggleMobileMenu">
          <font-awesome-icon :icon="faBars" />
        </button>
      </div>
    </header>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ open: isMobileMenuOpen }">
      <button class="close-button" @click="toggleMobileMenu">
        <font-awesome-icon :icon="faTimes" />
      </button>
      <nav>
        <ul>
          <li><router-link to="/" @click="toggleMobileMenu">Home</router-link></li>
          <li><router-link to="/popular" @click="toggleMobileMenu">Popular</router-link></li>
          <li><router-link to="/wishlist" @click="toggleMobileMenu">Wishlist</router-link></li>
          <li><router-link to="/search" @click="toggleMobileMenu">Search</router-link></li>
        </ul>
      </nav>
    </div>

    <!-- Search Bar -->
    <div v-if="isSearchOpen" class="header-search">
      <input type="text" v-model="query" @input="searchMovies" placeholder="영화 제목을 입력하세요" />
      <div class="recent-searches" v-if="recentSearches.length > 0">
        <p>
          최근 검색어
          <button class="clear-button" @click="clearRecentSearches">모두 삭제</button>
        </p>
        <ul>
          <li v-for="(search, index) in recentSearches" :key="index" @click="query = search; searchMovies()">
            {{ search }}
            <button class="delete-button" @click.stop="deleteSearch(index)">X</button>
          </li>
        </ul>
      </div>
      <div class="search-results">
        <div v-for="movie in movies" :key="movie.id" class="search-result">
          <router-link :to="{ name: 'MovieDetail', params: { movieId: movie.id } }">
            <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" />
            <h3>{{ movie.title }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faBars, faTimes, faFilm, faSearch, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const router = useRouter();
    const isScrolled = ref(false);
    const isMobileMenuOpen = ref(false);
    const isSearchOpen = ref(false);
    const query = ref('');
    const movies = ref([]);
    const recentSearches = ref(
      JSON.parse(localStorage.getItem('recentSearches')) || []
    );

    // 검색 기록 저장
    const saveRecentSearch = () => {
      if (!query.value.trim() || recentSearches.value.includes(query.value)) return;
      recentSearches.value.unshift(query.value);
      if (recentSearches.value.length > 10) recentSearches.value.pop(); // 최대 10개
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches.value));
    };

    // 최근 검색어 삭제
    const deleteSearch = (index) => {
      recentSearches.value.splice(index, 1);
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches.value));
    };

    // 최근 검색어 전체 삭제
    const clearRecentSearches = () => {
      recentSearches.value = [];
      localStorage.removeItem('recentSearches');
    };

    // 스크롤에 따라 헤더 배경 변경
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    // 모바일 메뉴 열기/닫기
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    // 검색 열기/닫기
    const toggleSearch = () => {
      isSearchOpen.value = !isSearchOpen.value;
    };

    // 로그아웃 처리
    const removeKey = () => {
      localStorage.removeItem('TMDb-Key');
      router.push('/signin');
    };

    // 영화 검색
    const searchMovies = async () => {
      if (query.value.length < 2) return;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=81f42d2de384021ea4f2689001e1860a&language=ko-KR&query=${query.value}`
        );
        movies.value = response.data.results;
        saveRecentSearch();
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    const getImageUrl = (path) => `https://image.tmdb.org/t/p/w300${path}`;

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      faUser,
      faFilm,
      faBars,
      faTimes,
      faSearch,
      faRightFromBracket,
      isScrolled,
      isMobileMenuOpen,
      isSearchOpen,
      query,
      movies,
      recentSearches,
      toggleMobileMenu,
      toggleSearch,
      removeKey,
      searchMovies,
      getImageUrl,
      deleteSearch,
      clearRecentSearches,
    };
  },
};
</script>

  <style scoped>
  /* 기존 스타일 그대로 유지 */
  .app-header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 4%;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
  }
  
  .app-header:hover,
  .app-header.scrolled {
    background-color: #a92d33;
  }
  
  .header-left,
  .header-right {
    display: flex;
    align-items: center;
  }
  
  .logo {
    height: 30px;
    margin-right: 25px;
    justify-items: center;
    align-items: center;
  }
  
  .nav-links ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    margin-right: 20px;
  }
  
  .nav-links a {
    color: #e5e5e5;
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover,
  .nav-links a.exact-active-link {
    color: #21e077;
  }

  
  .icon-button {
    background: none;
    border: none;
    color: black;
    font-size: 1.2rem;
    margin-left: 20px;
    cursor: pointer;
  }
  
  .icon-button:hover {
    opacity: 0.5;
  }
  
  .mobile-menu-button {
    display: none;
  }
  
  .mobile-nav {
    display: none;
    position: fixed;
    top: 0;
    right: -100%;
    width: 50%;
    height: 100%;
    background-color: #141414;
    z-index: 1001;
    transition: right 0.3s ease;
  }
  
  .mobile-nav.open {
    right: 0;
  }
  
  .mobile-nav ul {
    list-style-type: none;
    padding: 0;
    margin-top: 60px;
  }
  
  .mobile-nav li {
    margin: 20px 0;
  }
  
  .mobile-nav a {
    color: #e5e5e5;
    text-decoration: none;
    font-size: 1.2rem;
    display: block;
    padding: 10px 20px;
  }
  
  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .header-search {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #222;
    padding: 20px;
    z-index: 100;
  }
  
  .header-search input {
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
    gap: 10px;
    justify-content: center;
  }
  
  .search-result {
    width: calc(15% - 15px);
    text-align: center;
    object-fit: cover;
  }
  
  .search-result img {
    width: 30%;
    border-radius: 4px;
    object-fit: cover;
  }

  /* 모바일 화면에서 포스터 크기 조정 */
  @media (max-width: 768px) {
    .search-result {
      width: calc(30% - 10px); /* 모바일에서는 한 줄에 3개씩 */
    }

    .search-result img {
      width: 100%;
    }
  }

  /* 태블릿 크기에서 포스터 크기 조정 */
  @media (min-width: 768px) and (max-width: 1024px) {
    .search-result {
      width: calc(20% - 10px); /* 태블릿에서는 한 줄에 5개씩 */
    }

    .search-result img {
      width: 100%;
    }
  }

  .recent-searches {
  margin-top: 10px;
  background: #272626;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 10px;
}
.recent-searches p {
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
}
.recent-searches ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.recent-searches li {
  cursor: pointer;
  padding: 5px 10px;
  transition: background-color 0.3s;
}
.recent-searches li:hover {
  background-color: #938989;
}

.clear-button {
  background: none;
  border: none;
  color: #e50914;
  cursor: pointer;
  font-size: 0.85rem;
}

.delete-button {
  background: none;
  border: none;
  color: #e50914;
  cursor: pointer;
  font-size: 0.75rem;
  margin-left: 10px;
}

  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }
  
    .mobile-menu-button {
      display: block;
    }
  
    .mobile-nav {
      display: block;
    }
  
    .icon-button {
      font-size: 0.75rem;
      margin-left: 10px;
    }
  
    a {
      text-align: left;
      font-size: 1.15rem !important;
    }
  }
  </style>
