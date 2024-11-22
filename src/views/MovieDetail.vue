// src/views/MovieDetail.vue - 영화 상세 정보 조회 컴포넌트

<template>
    <div v-if="movie" class="movie-detail">
      <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" />
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
      <p>Release Date: {{ movie.release_date }}</p>
      <p>Rating: {{ movie.vote_average }}</p>
    </div>
    <div v-else class="loading">
      <p>Loading movie details...</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'MovieDetail',
    props: {
      movieId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const movie = ref(null);
  
      const fetchMovieDetail = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${props.movieId}?api_key=81f42d2de384021ea4f2689001e1860a&language=ko-KR`
          );
          movie.value = response.data;
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      };
  
      const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;
  
      onMounted(() => {
        fetchMovieDetail();
      });
  
      return {
        movie,
        getImageUrl,
      };
    },
  };
  </script>
  
  <style scoped>
  .movie-detail {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .movie-detail img {
    width: 50%;
    border-radius: 8px;
  }
  .loading {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.5rem;
    color: #ccc;
  }
  </style>
  