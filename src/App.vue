<template>
  <div id="app">
    <!-- 항상 상단에 표시되는 Header 컴포넌트 -->
    <Header />
    <transition name="fade" mode="out-in"> <!-- 페이지 이동 시 transition 효과 구현-->
      <router-view :key="$route.fullPath" /> <!-- 메인 콘텐츠 영역: 현재 라우트에 따른 페이지 표시 -->
    </transition>
  </div>
</template>

<script>
// 필요한 컴포넌트 import
import Header from '@/components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header, // Header 컴포넌트를 등록합니다.
  },
};
</script>

<style>
/* 기본 페이드 인/아웃 효과 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>