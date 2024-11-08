// src/util/movie/URL.js
import axios from "axios";

class URLService {
  async fetchFeaturedMovie(apiKey) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`
      );
      console.log(response.data.results[0]);
      return response.data.results[0];
    } catch (error) {
      console.error('Error fetching featured movie:', error);
      return null;
    }
  }

  getURL4PopularMovies(apiKey, page = 1) {
    return `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page}`;
  }

  getURL4ReleaseMovies(apiKey, page = 2) {
    return `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=${page}`;
  }

  getURL4GenreMovies(apiKey, genre, page = 1) {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&language=ko-KR&page=${page}`;
  }

  // Composition API를 위한 메서드
  useURLService() {
    return {
      fetchFeaturedMovie: this.fetchFeaturedMovie.bind(this),
      getURL4PopularMovies: this.getURL4PopularMovies.bind(this),
      getURL4ReleaseMovies: this.getURL4ReleaseMovies.bind(this),
      getURL4GenreMovies: this.getURL4GenreMovies.bind(this)
    };
  }
}

// 싱글톤 인스턴스 생성 및 내보내기
export default new URLService();