export function useAuthGuard(router) {
  router.beforeEach((to, from, next) => {
    // 각각의 토큰 보유 여부 확인
    const hasKakao = localStorage.getItem('kakaoAccessToken') !== null;
    const hasTMDb  = localStorage.getItem('TMDb-Key') !== null;

    // 하나도 없으면 미인증
    const isAuthenticated = hasKakao && hasTMDb;

    if (to.meta.requiresAuth && !isAuthenticated) {
      return next('/signin');
    }
    next();
  });
}
