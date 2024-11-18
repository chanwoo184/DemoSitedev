// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router'; // 라우터 가져오기
import '@/style.css' // style.css 파일을 불러옴

const app = createApp(App);

app.use(router); // 라우터 사용
app.mount('#app');
