<!--@/components/sign-in/Sign-In.vue-->
<template>
    <div>
      <div class="bg-image"></div>
      <div class="container">
        <div id="phone">
          <div id="content-wrapper">
            <div :class="['card', { hidden: !isLoginVisible }]" id="login">
              <form @submit.prevent="handleLogin">
                <h1>Sign in</h1>
                <div class="input" :class="{ active: isEmailFocused || email }">
                  <input id="email" type="email" v-model="email" @focus="focusInput('email')" @blur="blurInput('email')" />
                  <label for="email">Username or Email</label>
                </div>
                <div class="input" :class="{ active: isPasswordFocused || password }">
                  <input id="password" type="password" v-model="password" @focus="focusInput('password')" @blur="blurInput('password')" />
                  <label for="password">Password</label>
                </div>
                <span class="checkbox remember">
                  <input type="checkbox" id="remember" v-model="rememberMe" />
                  <label for="remember" class="read-text">Remember me</label>
                </span>
                <span class="checkbox forgot">
                  <a href="#">Forgot Password?</a>
                </span>
                <button :disabled="!isLoginFormValid">Login</button>
              </form>
              <a href="javascript:void(0)" class="account-check" @click="toggleCard">Already have an account? <b>Sign in</b></a>
            </div>
  
            <div :class="['card', { hidden: isLoginVisible }]" id="register">
              <form @submit.prevent="handleRegister">
                <h1>Sign up</h1>
                <div class="input" :class="{ active: isRegisterEmailFocused || registerEmail }">
                  <input id="register-email" type="email" v-model="registerEmail" @focus="focusInput('registerEmail')" @blur="blurInput('registerEmail')" />
                  <label for="register-email">Email</label>
                </div>
                <div class="input" :class="{ active: isRegisterPasswordFocused || registerPassword }">
                  <input id="register-password" type="password" v-model="registerPassword" @focus="focusInput('registerPassword')" @blur="blurInput('registerPassword')" />
                  <label for="register-password">Password</label>
                </div>
                <div class="input" :class="{ active: isConfirmPasswordFocused || confirmPassword }">
                  <input id="confirm-password" type="password" v-model="confirmPassword" @focus="focusInput('confirmPassword')" @blur="blurInput('confirmPassword')" />
                  <label for="confirm-password">Confirm Password</label>
                </div>
                <span class="checkbox remember">
                  <input type="checkbox" id="terms" v-model="acceptTerms" />
                  <label for="terms" class="read-text">I have read <b>Terms and Conditions</b></label>
                </span>
                <button :disabled="!isRegisterFormValid">Register</button>
              </form>
              
                <!-- 카카오 로그인 버튼 이미지 삽입 -->
              <div class="kakao-btn-wrapper">
                <img
                  :src="kakaoBtnSrc"
                  alt="카카오 로그인"
                  style="cursor: pointer;"
                  @click="handleKakaoLogin"
               />
              </div>
              <a href="javascript:void(0)" class="account-check" @click="toggleCard">Don't have an account? <b>Sign up</b></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template> 
  
  <script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '@/util/auth/authService';
import { useToast } from "vue-toastification";
import kakaoBtnPng from '@/assets/kakao_login.png';
export default {
  setup() {
    const router = useRouter();
    const isLoginVisible = ref(true);
    const email = ref('');
    const password = ref('');
    const registerEmail = ref('');
    const registerPassword = ref('');
    const confirmPassword = ref('');
    const rememberMe = ref(false);
    const acceptTerms = ref(false);
    const isEmailFocused = ref(false);
    const isPasswordFocused = ref(false);
    const isRegisterEmailFocused = ref(false);
    const isRegisterPasswordFocused = ref(false);
    const isConfirmPasswordFocused = ref(false);
    const toast = useToast(); // Custom Toast 라이브러리 사용 
    const kakaoBtnSrc = kakaoBtnPng;
    const isLoginFormValid = computed(() => !!email.value && !!password.value);
    const isRegisterFormValid = computed(() => {
      return !!registerEmail.value &&
        !!registerPassword.value &&
        !!confirmPassword.value &&
        registerPassword.value === confirmPassword.value &&
        acceptTerms.value;
    });

    const toggleCard = () => {
      isLoginVisible.value = !isLoginVisible.value;
    };

    // 실제 카카오 로그인을 위한 메서드 (예시)
const handleKakaoLogin = () => {
  console.log('카카오 로그인 버튼 클릭!');

   //(옵션) 만약 어디에서도 init하지 않았다면, 아래 로직을 남겨주세요.
   if (!window.Kakao?.isInitialized()) {
     window.Kakao.init(process.env.VUE_APP_KAKAO_JS_KEY);
     console.log('Kakao SDK re-initialized');
   }

  // 로그인 요청
  window.Kakao.Auth.login({
    // 이메일도 함께 요청
    scope: 'profile_nickname',
    success: (authObj) => {
      console.log('카카오 로그인 성공:', authObj);

      // 카카오 SDK에서 기본적으로 accessToken을 관리하지만,
      // 필요하다면 수동으로 setAccessToken() 호출, localStorage에도 저장 가능
      window.Kakao.Auth.setAccessToken(authObj.access_token);
      localStorage.setItem('kakaoAccessToken', authObj.access_token);
      localStorage.setItem('TMDb-Key', process.env.VUE_APP_TMDB_API_KEY);
      // 사용자 정보 요청 (이메일/프로필)
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          console.log('카카오 사용자 정보:', res);
          // 예: 닉네임/이메일 획득
          const nickname = res.kakao_account?.profile?.nickname;
          const email = res.kakao_account?.email; // account_email 동의 필수

           // localStorage에 저장 (키 이름은 예시 "kakaoProfile" 등으로)
          const kakaoProfile = {
            nickname,
          };
        localStorage.setItem('kakaoProfile', JSON.stringify(kakaoProfile));

          toast.success(`카카오 로그인 성공! 닉네임: ${nickname}`, { timeout: 2000 });
          
          // 추가로 회원 DB 가입/로그인 로직 등 필요하다면 이곳에서 처리

          // 최종적으로 메인 페이지로 이동
          router.push('/');
        },
        fail: (error) => {
          console.error('카카오 사용자 정보 요청 실패:', error);
          toast.error('사용자 정보 요청 실패!', { timeout: 2000 });
        },
      });
    },
    fail: (err) => {
      console.error('카카오 로그인 실패:', err);
      toast.error(`카카오 로그인 실패: ${err.message}`, { timeout: 2000 });
    },
  });
};

    const focusInput = (inputName) => {
      if (inputName === 'email') isEmailFocused.value = true;
      if (inputName === 'password') isPasswordFocused.value = true;
      if (inputName === 'registerEmail') isRegisterEmailFocused.value = true;
      if (inputName === 'registerPassword') isRegisterPasswordFocused.value = true;
      if (inputName === 'confirmPassword') isConfirmPasswordFocused.value = true;
    };

    const blurInput = (inputName) => {
      if (inputName === 'email') isEmailFocused.value = false;
      if (inputName === 'password') isPasswordFocused.value = false;
      if (inputName === 'registerEmail') isRegisterEmailFocused.value = false;
      if (inputName === 'registerPassword') isRegisterPasswordFocused.value = false;
      if (inputName === 'confirmPassword') isConfirmPasswordFocused.value = false;
    };

    const handleLogin = async () => {
    try {
      await authService.tryLogin(email.value, password.value);
      toast.success("로그인 성공! 🎉", { timeout: 2000 });
      router.push('/');
    } catch (error) {
      toast.error(`로그인 실패: ${error.message}`, { timeout: 2000 });
    }
};

    const handleRegister = async () => {
      try {
        await authService.tryRegister(registerEmail.value, registerPassword.value);
        toast.success("회원가입 성공! 🎉", { timeout: 2000 });
        toggleCard();
      } catch (error) {
        toast.error(`회원가입 실패: ${error.message}`, { timeout: 2000 });
      }
    };

    return {
      isLoginVisible,
      email,
      password,
      registerEmail,
      registerPassword,
      confirmPassword,
      rememberMe,
      acceptTerms,
      isEmailFocused,
      isPasswordFocused,
      isRegisterEmailFocused,
      isRegisterPasswordFocused,
      isConfirmPasswordFocused,
      isLoginFormValid,
      isRegisterFormValid,
      toggleCard,
      focusInput,
      blurInput,
      handleLogin,
      handleRegister,
      kakaoBtnSrc,
      handleKakaoLogin,
    };
  },
};
</script>

  
  <style scoped>
  
:root {
  --container-start-x: -50%;
  --container-end-x: -90%;
  --container-start-y: -58%;
  --container-end-y: -42%;
  --container-start-color: #ECECEC;
  --container-end-color: #100f0f;
}

 .bg-image {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-image: url('@/assets/cinema.jpg');
   background-size: cover;
   background-position: center; 
 }

.bg-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(27, 27, 27, 0.90);
}

a {
  text-decoration:none;
  margin:0;
  padding: 0;
}

.container {
  height: 100svh;
  width: 100svw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#phone {
  width: 50svw;
  max-width: 80dvh;
  max-height: 50dvh;
  aspect-ratio: 3.35 / 4;
  border-radius: min(2.5cqw, 2.0cqh);
  text-align: center;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}


@media (max-height: 600px) {
  #phone {
    transform: translate(-50%, -50%) scale(0.5); /* Scale down on small screens */
  }
}

@media (max-height: 400px) {
  #phone {
    transform: translate(-50%, -50%) scale(0.3); /* Further scale down */
  }
}

#content-wrapper {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position:relative;
}

input {
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 2.5rem;
  padding: 0;
  margin: 0;
}


.read-text {
  display: flex;
  align-items: center;
  justify-content: center;
  text-indent: 10px; /* 원하는 들여쓰기 크기로 조정하세요 */
  color: #2b2b2b !important;
  font-weight: 900;
}

h1 {
  font-size:24px;
  font-weight:800;
  text-align:center;
  margin-top:0;

  color:#272727;
}

button {
  display:block;
  border-radius:50px;
  border:none;
  width:100%;
  background-color: #2069ff;
  color:#fff;
  padding:17px;
  text-transform:uppercase;
  letter-spacing:2px;
  box-shadow: 0px 10px 30px rgba(23,83,209,0.3);
  transition: all 0.2s ease;
}

button:hover {
  box-shadow: 0px 2px 10px rgba(23,83,209,0.4)
}

.input {
  position: relative;
  margin-top: 1.5rem;
}

.line-active {
  border-bottom:1px solid #2069ff !important;
  box-shadow: 0px 1px 0px #2069ff !important;
}

.input input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 2.5rem;
  width: 100%;
  font-size: 1rem;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  box-sizing: content-box;
  transition: all 0.3s ease;
}

.input label {
  color: #9e9e9e;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  font-size: 1rem;
  cursor: text;
  transition: transform .2s ease-out;
  transform-origin: 0% 100%;
  text-align: initial;
  transform: translateY(12px);
  pointer-events: none;
}

.label-active {
  transform: translateY(-14px) scale(0.8) !important;
  transform-origin: 0 0 !important;
}

.label-blue {
  color: #2069ff !important;
}

[type="checkbox"]:not(:checked), [type="checkbox"]:checked {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

[type="checkbox"]+label {
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  display: inline-block;
  height: 25px;
  line-height: 22px;
  font-size: 1rem;
  user-select: none;
}

[type="checkbox"]+label:before, [type="checkbox"]:not(.filled-in)+label:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  z-index: 0;
  border: 2px solid #5a5a5a;
  border-radius: 3px;
  margin-top: 2px;
  transition: .2s;
}

[type="checkbox"]:not(.filled-in)+label:after {
  border: 0;
  transform: scale(0);
}

[type="checkbox"]:checked+label:before {
  top: -4px;
  left: -5px;
  width: 12px;
  height: 22px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid #2069ff;
  border-bottom: 2px solid #2069ff;
  transform: rotate(40deg);
  backface-visibility: hidden;
  transform-origin: 100% 100%;
  border-radius: 1px;
}

.checkbox {
  margin-top:2rem;
  display:block;
  margin-bottom:2rem;
}

.remember {
  float:left;
}

.forgot {
  float:right;
}

.forgot a {
  text-decoration:none;
  color:#000;
  font-weight:900;
  line-height: 22px;
}

.card {
  border-radius:10px;
  width:100%;
  max-width: 800px;
  position:absolute;
  background-color:white;
  padding:27px 30px 46px 30px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.16);
  transition: all 0.4s 0.1s ease;

  top: 50%;

  left: 50%;
  transform: translateX(-50%);
}

.kakao-btn-wrapper {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.kakao-login-btn {
  width: 180px;
  cursor: pointer;
}
.card form {
  transform:translateX(0px);
  transition: all 0.3s 0.4s ease;
}

#login {
  z-index:2;
  top: 5svh;
}

#register {
  z-index:2;
  top: 5svh;
}

.account-check {
  display: block;
  margin-top: 1rem;  /* 버튼이랑 간격 */
  text-align: center;
  color: #000;       /* 배경이 흰색이면 #000, 어두우면 #fff */
  font-weight: bold;
  /* position, bottom, visibility, opacity 등 제거 */
}

.account-check:active {
  color:#000;
  transform: translateY(2px);
}

#register.hidden {
  top:calc(5svh + 90px) !important;
  z-index:1;
}

#login.hidden {
  top:calc(5svh + 220px) !important;
  z-index:1;
}

.card.hidden {
  background-color:#2069ff;
  box-shadow: 0px 20px 40px rgba(23,83,209,0.8);
  padding:0px 30px 0px 30px;

}

#register.hidden form {
  transform:translateX(20px);
}

#login.hidden form {
  transform:translateX(-20px);
}

.hidden form {
  opacity:0;
  transition: all 0.3s ease;
}

.hidden .account-check {
  opacity:1;
  visibility:visible;
  z-index:2;
  transition: all 0.2s ease;
}

.register-swap {
  animation: register-swap 0.5s ease forwards;
}

.login-swap {
  animation: login-swap 0.5s ease forwards;
}

.active > label {
  color: rgba(0, 0, 0, 0);
}

@keyframes register-swap {
  0% {transform: translate(0%, 0%)}
  50% {transform: translate(30%, 0%);}
  0% {transform: translate(0%, 0%)}
}

@keyframes login-swap {
  0% {transform: translate(0%, 0%)}
  50% {transform: translate(-70%, 0%);}
  0% {transform: translate(0%, 0%)}
}

@media (max-width: 768px) {

  #phone {
    width: 70%;
    transform: translate(-50%, -70%) scale(1); /* Scale down on small screens */
  }

  #login {
    top: -2svh !important;
  }

  #register {
    top: -2svh !important;
  }

  #register.hidden {
    top:calc(5svh + 90px) !important;
    z-index:1;
  }

  #login.hidden {
    top:calc(5svh + 90px) !important;
    z-index:1;
  }
}

  </style>
  