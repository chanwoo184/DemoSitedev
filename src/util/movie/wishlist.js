import { ref, computed } from 'vue';

const wishlist = ref([]); // Vue의 반응성을 유지하기 위한 ref 선언

export function useWishlist() {
  // 로컬스토리지에서 위시리스트 불러오기
  const loadWishlist = () => {
    try {
      const storedWishlist = localStorage.getItem('movieWishlist');
      if (storedWishlist) {
        wishlist.value = JSON.parse(storedWishlist);
      } else {
        wishlist.value = []; // 로컬스토리지에 없으면 빈 배열로 초기화
      }
    } catch (error) {
      console.error('Failed to load wishlist from localStorage:', error);
      wishlist.value = []; // 오류 발생 시 빈 배열로 초기화
    }
  };

  // 로컬스토리지에 위시리스트 저장
  const saveWishlist = () => {
    try {
      localStorage.setItem('movieWishlist', JSON.stringify(wishlist.value));
    } catch (error) {
      console.error('Failed to save wishlist to localStorage:', error);
    }
  };

  // 위시리스트에 영화 추가/제거
  const toggleWishlist = (movie) => {
    const index = wishlist.value.findIndex((item) => item.id === movie.id);
    if (index === -1) {
      wishlist.value = [...wishlist.value, movie]; // 새로운 배열로 재할당 (반응성 보장)
    } else {
      wishlist.value = wishlist.value.filter((item) => item.id !== movie.id); // 새로운 배열로 재할당
    }
    saveWishlist();
  };

  // 영화가 위시리스트에 있는지 확인
  const isInWishlist = (movieId) => {
    return wishlist.value.some((item) => item.id === movieId);
  };

  return {
    wishlist,
    toggleWishlist,
    isInWishlist,
    loadWishlist,
  };
}
