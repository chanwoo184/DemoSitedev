// src/util/movie/wishlist.js
import { ref, computed } from 'vue';

const wishlist = ref([]);

export function useWishlist() {
  // 위시리스트를 로컬스토리지에서 불러오는 함수
  const loadWishlist = () => {
    try {
      const storedWishlist = localStorage.getItem('movieWishlist');
      if (storedWishlist) {
        wishlist.value = JSON.parse(storedWishlist);
      }
    } catch (error) {
      console.error('Failed to load wishlist from localStorage:', error);
    }
  };

  // 위시리스트를 로컬스토리지에 저장하는 함수
  const saveWishlist = () => {
    try {
      localStorage.setItem('movieWishlist', JSON.stringify(wishlist.value));
    } catch (error) {
      console.error('Failed to save wishlist to localStorage:', error);
    }
  };

  // 위시리스트에 영화 추가/제거
  const toggleWishlist = (movie) => {
    const index = wishlist.value.findIndex(item => item.id === movie.id);
    if (index === -1) {
      wishlist.value.push(movie);
    } else {
      wishlist.value.splice(index, 1);
    }
    saveWishlist();
  };

  // 영화가 위시리스트에 있는지 확인
  const isInWishlist = (movieId) => {
    return wishlist.value.some(item => item.id === movieId);
  };

  return {
    wishlist,
    toggleWishlist,
    isInWishlist,
    loadWishlist
  };
}