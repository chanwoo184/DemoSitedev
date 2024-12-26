export function useAuthGuard(router) {
  if (!router || typeof router.beforeEach !== 'function') {
    console.error("Router instance is undefined or invalid.");
    return;
  }

  router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('TMDb-Key') !== null;

    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/signin'); // 로그인 페이지로 리디렉션
    } else {
      next(); // 해당 라우트로
    }
  });
}
