// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router'; // 라우터 가져오기
import '@/style.css' // style.css 파일을 불러옴
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';


const app = createApp(App);

app.use(router); // 라우터 사용
app.use(Toast, { // Toastification 플러그인 추가 (로그인/회원가입 성공 시 메시지를 화면에 보여줌)
  position: 'top-right',
  timeout: 2000,
  closeOnClick: true,
  pauseOnHover: true,
}); 
app.mount('#app');
