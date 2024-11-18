// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';

// 컴포넌트 불러오기
import SignIn from '@/components/sign-in/Sign-In.vue';
import Home from '@/components/home/Home.vue';
import HomeMain from '@/components/home/main/HomeMain.vue';
import HomeWishlist from '@/components/home/wishlist/HomeWishlist.vue';
import HomeSearch from '@/components/search/HomeSearch.vue';
import HomePopular from '@/components/home/popular/HomePopular.vue';
import MovieDetail from '@/views/MovieDetail.vue';

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: HomeMain
      },
      {
        path: 'popular',
        component: HomePopular
      },
      {
        path: 'wishlist',
        component: HomeWishlist
      },
      {
        path: 'search',
        component: HomeSearch
      }
    ]
  },
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '/movie/:movieId',
    name: 'MovieDetail',
    component: MovieDetail,
    props: true
  }
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
