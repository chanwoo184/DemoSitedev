<template>
    <div class="movie-row">
      <h2>{{ title }}</h2>
      <div
        class="slider-container"
        @wheel.prevent="handleWheel"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @mousemove="showButtons = true"
        @mouseleave="showButtons = false"
      >
        <button
          class="slider-button left"
          @click="slide('left')"
          :style="{ opacity: showButtons && !atLeftEdge ? 1 : 0 }"
          :disabled="atLeftEdge"
        >
          &lt;
        </button>
  
        <div class="slider-window" ref="sliderWindow">
          <div class="movie-slider" ref="slider" :style="{ transform: `translateX(-${scrollAmount}px)` }">
            <div
              v-for="movie in movies"
              :key="movie.id"
              class="movie-card"
              @click="toggleWishlist(movie)"
            >
              <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" />
              <div v-if="isInWishlist(movie.id)" class="wishlist-indicator">👍</div>
            </div>
          </div>
        </div>
  
        <button
          class="slider-button right"
          @click="slide('right')"
          :style="{ opacity: showButtons && !atRightEdge ? 1 : 0 }"
          :disabled="atRightEdge"
        >
          &gt;
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { useWishlist } from '@/util/movie/wishlist'; // useWishlist 훅을 import
  
  export default {
    name: "MovieRow",
    props: {
      title: {
        type: String,
        required: true,
      },
      fetchUrl: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        movies: [],
        scrollAmount: 0,
        showButtons: false,
        touchStartX: 0,
        touchEndX: 0,
        maxScroll: 0,
        isScrolling: false,
      };
    },
    computed: {
      atLeftEdge() {
        return this.scrollAmount <= 0;
      },
      atRightEdge() {
        return this.scrollAmount >= this.maxScroll;
      },
      wishlist() {
        return this.useWishlist.wishlist;
      }
    },
    methods: {
      async fetchMovies() {
        try {
          const response = await axios.get(this.fetchUrl);
          this.movies = response.data.results;
          this.$nextTick(this.calculateMaxScroll);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      },
      getImageUrl(path) {
        return `https://image.tmdb.org/t/p/w300${path}`;
      },
      slide(direction, amount = null) {
        const slideAmount = amount || this.$refs.sliderWindow.clientWidth * 0.8;
        if (direction === "left") {
          this.scrollAmount = Math.max(0, this.scrollAmount - slideAmount);
        } else {
          this.scrollAmount = Math.min(this.maxScroll, this.scrollAmount + slideAmount);
        }
      },
      handleWheel(event) {
        if (this.isScrolling) return;
  
        this.isScrolling = true;
        const direction = event.deltaY > 0 ? "right" : "left";
        this.slide(direction);
  
        setTimeout(() => {
          this.isScrolling = false;
        }, 500);
      },
      handleTouchStart(event) {
        this.touchStartX = event.touches[0].clientX;
        this.touchEndX = this.touchStartX;
      },
      handleTouchMove(event) {
        this.touchEndX = event.touches[0].clientX;
      },
      handleTouchEnd() {
        const touchDiff = this.touchStartX - this.touchEndX;
        const minSwipeDistance = 50;
  
        if (Math.abs(touchDiff) > minSwipeDistance) {
          const direction = touchDiff > 0 ? "right" : "left";
          this.slide(direction, Math.abs(touchDiff));
        }
      },
      calculateMaxScroll() {
        if (this.$refs.slider && this.$refs.sliderWindow) {
          this.maxScroll = Math.max(
            0,
            this.$refs.slider.scrollWidth - this.$refs.sliderWindow.clientWidth
          );
        }
      },
      toggleWishlist(movie) {
        this.useWishlist.toggleWishlist(movie); // useWishlist의 toggleWishlist 메서드 사용
      },
      isInWishlist(movieId) {
        return this.useWishlist.isInWishlist(movieId); // useWishlist의 isInWishlist 메서드 사용
      },
    },
    async mounted() {
      this.useWishlist = useWishlist(); // useWishlist 훅 호출
      await this.fetchMovies();
      window.addEventListener("resize", this.calculateMaxScroll);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.calculateMaxScroll);
    },
  };
  </script>
  
  <style scoped>
  /* 스타일 동일하게 복사 */
  .wishlist-indicator {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px;
    border-radius: 50%;
    font-size: 12px;
  }
  
  .movie-row {
    margin-bottom: 40px;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  .movie-row h2 {
    text-align: left;
    margin-left: 30px;
  }
  
  .slider-container {
    position: relative;
    touch-action: pan-y;
  }
  
  .slider-window {
    overflow: hidden;
    margin: 0 40px;
  }
  
  .movie-slider {
    display: flex;
    transition: transform 0.3s ease;
    padding: 20px 0;
  }
  
  .movie-card {
    flex: 0 0 auto;
    width: 200px;
    margin-right: 10px;
    transition: transform 0.3s;
    position: relative;
    cursor: pointer;
  }
  
  .movie-card:hover {
    transform: scale(1.05);
  }
  
  .movie-card img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  .slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 20px 10px;
    cursor: pointer;
    z-index: 10;
    transition: opacity 0.3s, background-color 0.3s;
  }
  
  .slider-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .slider-button.left {
    left: 0;
  }
  
  .slider-button.right {
    right: 0;
  }
  
  .slider-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    .movie-row {
      margin-bottom: 20px;
    }
  
    .movie-card {
      width: 120px;
      margin-right: 5px;
    }
  
    .movie-slider {
      padding: 0;
    }
  
    .slider-window {
      margin: 0 10px;
    }
  }
  </style>
  