// src/util/tmdb.js
import axios from 'axios';

// 환경 변수에서 API 키 가져오기
const apiKey = process.env.VUE_APP_TMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

// 기본 axios 인스턴스 생성
const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
    language: 'ko-KR' // 기본 언어 설정
  }
});

// 예: 인기 영화 목록을 가져오는 함수
export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await tmdb.get('/movie/popular', {
      params: { page }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};
