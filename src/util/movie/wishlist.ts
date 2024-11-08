// src/util/movie/wishlist.ts
import { ref, Ref } from 'vue';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  // 필요한 다른 속성들 추가
}

class WishlistService {
  private wishlist: Ref<Movie[]>;

  constructor() {
    this.wishlist = ref<Movie[]>([]);
    this.loadWishlist();
  }

  private loadWishlist(): void {
    const storedWishlist = localStorage.getItem('movieWishlist');
    if (storedWishlist) {
      this.wishlist.value = JSON.parse(storedWishlist);
    }
  }

  private saveWishlist(): void {
    localStorage.setItem('movieWishlist', JSON.stringify(this.wishlist.value));
  }

  toggleWishlist(movie: Movie): void {
    const index = this.wishlist.value.findIndex(item => item.id === movie.id);

    if (index === -1) {
      // 영화가 위시리스트에 없으면 추가
      this.wishlist.value = [...this.wishlist.value, movie];
    } else {
      // 영화가 이미 위시리스트에 있으면 제거
      this.wishlist.value = this.wishlist.value.filter(item => item.id !== movie.id);
    }

    this.saveWishlist();
  }

  isInWishlist(movieId: number): boolean {
    return this.wishlist.value.some(item => item.id === movieId);
  }

  getWishlist(): Movie[] {
    return this.wishlist.value;
  }

  // Composition API를 위한 메서드
  useWishlist() {
    return {
      wishlist: this.wishlist,
      toggleWishlist: this.toggleWishlist.bind(this),
      isInWishlist: this.isInWishlist.bind(this),
      getWishlist: this.getWishlist.bind(this)
    };
  }
}

// 싱글톤 인스턴스 생성 및 내보내기
export default new WishlistService();
