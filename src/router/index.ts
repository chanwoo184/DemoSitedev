import { createRouter, createWebHashHistory } from 'vue-router';
import { useAuthGuard } from '@/guards/authGuard'; // 인증 가드 추가

// 컴포넌트 불러오기
import SignIn from '@/components/sign-in/Sign-In.vue';
import HomeMain from '@/components/home/main/HomeMain.vue';
import HomeWishlist from '@/components/home/wishlist/HomeWishlist.vue';
import HomeSearch from '@/components/search/HomeSearch.vue';
import HomePopular from '@/components/home/popular/HomePopular.vue';
import MovieDetail from '@/views/MovieDetail.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/App.vue'),
    children: [
      {
        path: '',
        component: HomeMain,
        meta: { requiresAuth: true }, // 인증이 필요한 라우트
      },
      {
        path: 'popular',
        component: HomePopular,
        meta: { requiresAuth: true },
      },
      {
        path: 'wishlist',
        component: HomeWishlist,
        meta: { requiresAuth: true },
      },
      {
        path: 'search',
        component: HomeSearch,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/signin',
    component: SignIn,
  },
  {
    path: '/movie/:movieId',
    name: 'MovieDetail',
    component: MovieDetail,
    props: true,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 인증 가드 적용
useAuthGuard(router);

export default router;
