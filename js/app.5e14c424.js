(function(){"use strict";var e={7551:function(e,t,o){var i=o(3751),l=o(9631),r=o(5220);function s(e){e&&"function"===typeof e.beforeEach?e.beforeEach(((e,t,o)=>{const i=null!==localStorage.getItem("TMDb-Key");e.meta.requiresAuth&&!i?o("/signin"):o()})):console.error("Router instance is undefined or invalid.")}var a=o(641),n=o(33);const u={class:"container"},c={id:"phone"},d={id:"content-wrapper"},v={class:"checkbox remember"},g=["disabled"],h={class:"checkbox remember"},p=["disabled"];function m(e,t,o,l,r,s){return(0,a.uX)(),(0,a.CE)("div",null,[t[33]||(t[33]=(0,a.Lk)("div",{class:"bg-image"},null,-1)),(0,a.Lk)("div",u,[(0,a.Lk)("div",c,[(0,a.Lk)("div",d,[(0,a.Lk)("div",{class:(0,n.C4)(["card",{hidden:!l.isLoginVisible}]),id:"login"},[(0,a.Lk)("form",{onSubmit:t[7]||(t[7]=(0,i.D$)(((...e)=>l.handleLogin&&l.handleLogin(...e)),["prevent"]))},[t[24]||(t[24]=(0,a.Lk)("h1",null,"Sign in",-1)),(0,a.Lk)("div",{class:(0,n.C4)(["input",{active:l.isEmailFocused||l.email}])},[(0,a.bo)((0,a.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>l.email=e),onFocus:t[1]||(t[1]=e=>l.focusInput("email")),onBlur:t[2]||(t[2]=e=>l.blurInput("email"))},null,544),[[i.Jo,l.email]]),t[21]||(t[21]=(0,a.Lk)("label",{for:"email"},"Username or Email",-1))],2),(0,a.Lk)("div",{class:(0,n.C4)(["input",{active:l.isPasswordFocused||l.password}])},[(0,a.bo)((0,a.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>l.password=e),onFocus:t[4]||(t[4]=e=>l.focusInput("password")),onBlur:t[5]||(t[5]=e=>l.blurInput("password"))},null,544),[[i.Jo,l.password]]),t[22]||(t[22]=(0,a.Lk)("label",{for:"password"},"Password",-1))],2),(0,a.Lk)("span",v,[(0,a.bo)((0,a.Lk)("input",{type:"checkbox",id:"remember","onUpdate:modelValue":t[6]||(t[6]=e=>l.rememberMe=e)},null,512),[[i.lH,l.rememberMe]]),t[23]||(t[23]=(0,a.Lk)("label",{for:"remember",class:"read-text"},"Remember me",-1))]),t[25]||(t[25]=(0,a.Lk)("span",{class:"checkbox forgot"},[(0,a.Lk)("a",{href:"#"},"Forgot Password?")],-1)),(0,a.Lk)("button",{disabled:!l.isLoginFormValid},"Login",8,g)],32),(0,a.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:t[8]||(t[8]=(...e)=>l.toggleCard&&l.toggleCard(...e))},t[26]||(t[26]=[(0,a.eW)("Already have an account? "),(0,a.Lk)("b",null,"Sign in",-1)]))],2),(0,a.Lk)("div",{class:(0,n.C4)(["card",{hidden:l.isLoginVisible}]),id:"register"},[(0,a.Lk)("form",{onSubmit:t[19]||(t[19]=(0,i.D$)(((...e)=>l.handleRegister&&l.handleRegister(...e)),["prevent"]))},[t[31]||(t[31]=(0,a.Lk)("h1",null,"Sign up",-1)),(0,a.Lk)("div",{class:(0,n.C4)(["input",{active:l.isRegisterEmailFocused||l.registerEmail}])},[(0,a.bo)((0,a.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":t[9]||(t[9]=e=>l.registerEmail=e),onFocus:t[10]||(t[10]=e=>l.focusInput("registerEmail")),onBlur:t[11]||(t[11]=e=>l.blurInput("registerEmail"))},null,544),[[i.Jo,l.registerEmail]]),t[27]||(t[27]=(0,a.Lk)("label",{for:"register-email"},"Email",-1))],2),(0,a.Lk)("div",{class:(0,n.C4)(["input",{active:l.isRegisterPasswordFocused||l.registerPassword}])},[(0,a.bo)((0,a.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":t[12]||(t[12]=e=>l.registerPassword=e),onFocus:t[13]||(t[13]=e=>l.focusInput("registerPassword")),onBlur:t[14]||(t[14]=e=>l.blurInput("registerPassword"))},null,544),[[i.Jo,l.registerPassword]]),t[28]||(t[28]=(0,a.Lk)("label",{for:"register-password"},"Password",-1))],2),(0,a.Lk)("div",{class:(0,n.C4)(["input",{active:l.isConfirmPasswordFocused||l.confirmPassword}])},[(0,a.bo)((0,a.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":t[15]||(t[15]=e=>l.confirmPassword=e),onFocus:t[16]||(t[16]=e=>l.focusInput("confirmPassword")),onBlur:t[17]||(t[17]=e=>l.blurInput("confirmPassword"))},null,544),[[i.Jo,l.confirmPassword]]),t[29]||(t[29]=(0,a.Lk)("label",{for:"confirm-password"},"Confirm Password",-1))],2),(0,a.Lk)("span",h,[(0,a.bo)((0,a.Lk)("input",{type:"checkbox",id:"terms","onUpdate:modelValue":t[18]||(t[18]=e=>l.acceptTerms=e)},null,512),[[i.lH,l.acceptTerms]]),t[30]||(t[30]=(0,a.Lk)("label",{for:"terms",class:"read-text"},[(0,a.eW)("I have read "),(0,a.Lk)("b",null,"Terms and Conditions")],-1))]),(0,a.Lk)("button",{disabled:!l.isRegisterFormValid},"Register",8,p)],32),(0,a.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:t[20]||(t[20]=(...e)=>l.toggleCard&&l.toggleCard(...e))},t[32]||(t[32]=[(0,a.eW)("Don't have an account? "),(0,a.Lk)("b",null,"Sign up",-1)]))],2)])])])])}o(4114);var f=o(953);o(8992),o(2577),o(7550);const k={tryLogin(e,t,o=!0){return new Promise(((i,l)=>{const r=JSON.parse(localStorage.getItem("users")||"[]"),s=r.find((o=>o.id===e&&o.password===t));s?(o&&(localStorage.setItem("TMDb-Key",s.password),localStorage.setItem("currentUserEmail",e)),i(s)):l(new Error("Login failed"))}))},tryRegister(e,t){return new Promise(((o,i)=>{try{const i=JSON.parse(localStorage.getItem("users")||"[]"),l=i.some((t=>t.id===e));if(l)throw new Error("User already exists");const r={id:e,password:t};i.push(r),localStorage.setItem("users",JSON.stringify(i)),o()}catch(l){i(l)}}))}};var w=o(5246),b={setup(){const e=(0,r.rd)(),t=(0,f.KR)(!0),o=(0,f.KR)(""),i=(0,f.KR)(""),l=(0,f.KR)(""),s=(0,f.KR)(""),n=(0,f.KR)(""),u=(0,f.KR)(!1),c=(0,f.KR)(!1),d=(0,f.KR)(!1),v=(0,f.KR)(!1),g=(0,f.KR)(!1),h=(0,f.KR)(!1),p=(0,f.KR)(!1),m=(0,w.dj)(),b=(0,a.EW)((()=>!!o.value&&!!i.value)),L=(0,a.EW)((()=>!!l.value&&!!s.value&&!!n.value&&s.value===n.value&&c.value)),y=()=>{t.value=!t.value},C=e=>{"email"===e&&(d.value=!0),"password"===e&&(v.value=!0),"registerEmail"===e&&(g.value=!0),"registerPassword"===e&&(h.value=!0),"confirmPassword"===e&&(p.value=!0)},M=e=>{"email"===e&&(d.value=!1),"password"===e&&(v.value=!1),"registerEmail"===e&&(g.value=!1),"registerPassword"===e&&(h.value=!1),"confirmPassword"===e&&(p.value=!1)},R=async()=>{try{await k.tryLogin(o.value,i.value),m.success("로그인 성공! 🎉",{timeout:2e3}),e.push("/")}catch(t){m.error(`로그인 실패: ${t.message}`,{timeout:2e3})}},E=async()=>{try{await k.tryRegister(l.value,s.value),m.success("회원가입 성공! 🎉",{timeout:2e3}),y()}catch(e){m.error(`회원가입 실패: ${e.message}`,{timeout:2e3})}};return{isLoginVisible:t,email:o,password:i,registerEmail:l,registerPassword:s,confirmPassword:n,rememberMe:u,acceptTerms:c,isEmailFocused:d,isPasswordFocused:v,isRegisterEmailFocused:g,isRegisterPasswordFocused:h,isConfirmPasswordFocused:p,isLoginFormValid:b,isRegisterFormValid:L,toggleCard:y,focusInput:C,blurInput:M,handleLogin:R,handleRegister:E}}},L=o(6262);const y=(0,L.A)(b,[["render",m],["__scopeId","data-v-2206418e"]]);var C=y;const M={class:"home"};function R(e,t,o,i,l,r){const s=(0,a.g2)("Banner"),n=(0,a.g2)("MovieRow");return(0,a.uX)(),(0,a.CE)("div",M,[(0,a.bF)(s,{movie:i.featuredMovie},null,8,["movie"]),(0,a.bF)(n,{title:"Popular Movie",fetchUrl:i.popularMoviesUrl},null,8,["fetchUrl"]),(0,a.bF)(n,{title:"Latest Movie",fetchUrl:i.newReleasesUrl},null,8,["fetchUrl"]),(0,a.bF)(n,{title:"Action Movie",fetchUrl:i.actionMoviesUrl},null,8,["fetchUrl"])])}const E={class:"banner-content"};function S(e,t,o,i,l,r){return o.movie?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"banner",style:(0,n.Tr)({backgroundImage:`url(${r.backdropUrl})`})},[(0,a.Lk)("div",E,[(0,a.Lk)("h1",null,(0,n.v_)(o.movie.title),1),(0,a.Lk)("p",null,(0,n.v_)(o.movie.overview),1)])],4)):(0,a.Q3)("",!0)}var I={name:"Banner",props:{movie:{type:Object,required:!0}},computed:{backdropUrl(){return this.movie?`https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`:""}}};const K=(0,L.A)(I,[["render",S],["__scopeId","data-v-193e229a"]]);var W=K;const _={class:"movie-row"},P=["disabled"],F={class:"slider-window",ref:"sliderWindow"},X=["onClick"],U=["src","alt"],A={key:0,class:"wishlist-indicator"},O=["disabled"];function T(e,t,o,l,r,s){return(0,a.uX)(),(0,a.CE)("div",_,[(0,a.Lk)("h2",null,(0,n.v_)(o.title),1),(0,a.Lk)("div",{class:"slider-container",onWheel:t[2]||(t[2]=(0,i.D$)(((...e)=>s.handleWheel&&s.handleWheel(...e)),["prevent"])),onTouchstart:t[3]||(t[3]=(...e)=>s.handleTouchStart&&s.handleTouchStart(...e)),onTouchmove:t[4]||(t[4]=(...e)=>s.handleTouchMove&&s.handleTouchMove(...e)),onTouchend:t[5]||(t[5]=(...e)=>s.handleTouchEnd&&s.handleTouchEnd(...e)),onMousemove:t[6]||(t[6]=e=>r.showButtons=!0),onMouseleave:t[7]||(t[7]=e=>r.showButtons=!1)},[(0,a.Lk)("button",{class:"slider-button left",onClick:t[0]||(t[0]=e=>s.slide("left")),style:(0,n.Tr)({opacity:r.showButtons&&!s.atLeftEdge?1:0}),disabled:s.atLeftEdge}," < ",12,P),(0,a.Lk)("div",F,[(0,a.Lk)("div",{class:"movie-slider",ref:"slider",style:(0,n.Tr)({transform:`translateX(-${r.scrollAmount}px)`})},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card",onClick:t=>s.toggleWishlist(e)},[(0,a.Lk)("img",{src:s.getImageUrl(e.poster_path),alt:e.title},null,8,U),s.isInWishlist(e.id)?((0,a.uX)(),(0,a.CE)("div",A,"👍")):(0,a.Q3)("",!0)],8,X)))),128))],4)],512),(0,a.Lk)("button",{class:"slider-button right",onClick:t[1]||(t[1]=e=>s.slide("right")),style:(0,n.Tr)({opacity:r.showButtons&&!s.atRightEdge?1:0}),disabled:s.atRightEdge}," > ",12,O)],32)])}var x=o(4335);o(4520);const V=(0,f.KR)([]);function $(){const e=()=>{try{const e=localStorage.getItem("movieWishlist");V.value=e?JSON.parse(e):[]}catch(e){console.error("Failed to load wishlist from localStorage:",e),V.value=[]}},t=()=>{try{localStorage.setItem("movieWishlist",JSON.stringify(V.value))}catch(e){console.error("Failed to save wishlist to localStorage:",e)}},o=e=>{const o=V.value.findIndex((t=>t.id===e.id));V.value=-1===o?[...V.value,e]:V.value.filter((t=>t.id!==e.id)),t()},i=e=>V.value.some((t=>t.id===e));return{wishlist:V,toggleWishlist:o,isInWishlist:i,loadWishlist:e}}var B={name:"MovieRow",props:{title:{type:String,required:!0},fetchUrl:{type:String,required:!0}},data(){return{movies:[],scrollAmount:0,showButtons:!1,touchStartX:0,touchEndX:0,maxScroll:0,isScrolling:!1}},computed:{atLeftEdge(){return this.scrollAmount<=0},atRightEdge(){return this.scrollAmount>=this.maxScroll},wishlist(){return this.useWishlist.wishlist}},methods:{async fetchMovies(){try{const e=await x.A.get(this.fetchUrl);this.movies=e.data.results,this.$nextTick(this.calculateMaxScroll)}catch(e){console.error("Error fetching movies:",e)}},getImageUrl(e){return`https://image.tmdb.org/t/p/w300${e}`},slide(e,t=null){const o=t||.8*this.$refs.sliderWindow.clientWidth;this.scrollAmount="left"===e?Math.max(0,this.scrollAmount-o):Math.min(this.maxScroll,this.scrollAmount+o)},handleWheel(e){if(this.isScrolling)return;this.isScrolling=!0;const t=e.deltaY>0?"right":"left";this.slide(t),setTimeout((()=>{this.isScrolling=!1}),500)},handleTouchStart(e){this.touchStartX=e.touches[0].clientX,this.touchEndX=this.touchStartX},handleTouchMove(e){this.touchEndX=e.touches[0].clientX},handleTouchEnd(){const e=this.touchStartX-this.touchEndX,t=50;if(Math.abs(e)>t){const t=e>0?"right":"left";this.slide(t,Math.abs(e))}},calculateMaxScroll(){this.$refs.slider&&this.$refs.sliderWindow&&(this.maxScroll=Math.max(0,this.$refs.slider.scrollWidth-this.$refs.sliderWindow.clientWidth))},toggleWishlist(e){this.useWishlist.toggleWishlist(e)},isInWishlist(e){return this.useWishlist.isInWishlist(e)}},async mounted(){this.useWishlist=$(),await this.fetchMovies(),window.addEventListener("resize",this.calculateMaxScroll)},beforeUnmount(){window.removeEventListener("resize",this.calculateMaxScroll)}};const D=(0,L.A)(B,[["render",T],["__scopeId","data-v-922635d2"]]);var q=D;class j{async fetchFeaturedMovie(e){try{const t=await x.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR`);return console.log(t.data.results[0]),t.data.results[0]}catch(t){return console.error("Error fetching featured movie:",t),null}}getURL4PopularMovies(e,t=1){return`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${t}`}getURL4ReleaseMovies(e,t=2){return`https://api.themoviedb.org/3/movie/now_playing?api_key=${e}&language=ko-KR&page=${t}`}getURL4GenreMovies(e,t,o=1){return`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=${t}&language=ko-KR&page=${o}`}useURLService(){return{fetchFeaturedMovie:this.fetchFeaturedMovie.bind(this),getURL4PopularMovies:this.getURL4PopularMovies.bind(this),getURL4ReleaseMovies:this.getURL4ReleaseMovies.bind(this),getURL4GenreMovies:this.getURL4GenreMovies.bind(this)}}}var J=new j,Q={name:"HomeMain",components:{Banner:W,MovieRow:q},setup(){const e=localStorage.getItem("TMDb-Key")||"",t=(0,f.KR)(null),o=(0,f.KR)(J.getURL4PopularMovies(e)),i=(0,f.KR)(J.getURL4ReleaseMovies(e)),l=(0,f.KR)(J.getURL4GenreMovies(e,"28")),r=async()=>{try{t.value=await J.fetchFeaturedMovie(e)}catch(o){console.error("Error fetching featured movie:",o)}},s=()=>{const e=document.querySelector(".app-header");window.scrollY>50?e?.classList.add("scrolled"):e?.classList.remove("scrolled")};return(0,a.sV)((()=>{r(),window.addEventListener("scroll",s)})),(0,a.xo)((()=>{window.removeEventListener("scroll",s)})),{featuredMovie:t,popularMoviesUrl:o,newReleasesUrl:i,actionMoviesUrl:l}}};const z=(0,L.A)(Q,[["render",R],["__scopeId","data-v-5db5a2a0"]]);var H=z;function G(e,t,o,i,l,r){const s=(0,a.g2)("MovieWishlist");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(s)])}const N={class:"movie-grid",ref:"gridContainer"},Y=["onClick"],Z=["src","alt"],ee={class:"movie-title"},te={key:0,class:"empty-wishlist"},oe={key:1,class:"pagination"},ie=["disabled"],le=["disabled"];function re(e,t,o,i,l,r){return(0,a.uX)(),(0,a.CE)("div",N,[t[3]||(t[3]=(0,a.Lk)("div",{class:"wishlist-header"},[(0,a.Lk)("h2",null,"❤️ Add to Wishlist")],-1)),(0,a.Lk)("div",{class:(0,n.C4)(["grid-container",i.currentView])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.visibleWishlistMovies,((e,o)=>((0,a.uX)(),(0,a.CE)("div",{key:o,class:(0,n.C4)(["movie-row",{full:e.length===i.rowSize}])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card",onClick:t=>i.toggleWishlist(e)},[(0,a.Lk)("img",{src:i.getImageUrl(e.poster_path),alt:e.title},null,8,Z),(0,a.Lk)("div",ee,(0,n.v_)(e.title),1),t[2]||(t[2]=(0,a.Lk)("div",{class:"wishlist-indicator"},"👍",-1))],8,Y)))),128))],2)))),128))],2),i.wishlist.length?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",te," Wishlist is empty. ")),i.totalPages>1?((0,a.uX)(),(0,a.CE)("div",oe,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.prevPage&&i.prevPage(...e)),disabled:1===i.currentPage},"< 이전",8,ie),(0,a.Lk)("span",null,(0,n.v_)(i.currentPage)+" / "+(0,n.v_)(i.totalPages),1),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.nextPage&&i.nextPage(...e)),disabled:i.currentPage===i.totalPages},"다음 >",8,le)])):(0,a.Q3)("",!0)],512)}o(8872);var se={name:"MovieWishlist",setup(){const e=(0,f.KR)(null),t=(0,f.KR)(4),o=(0,f.KR)(20),i=(0,f.KR)(1),l=(0,f.KR)(window.innerWidth<=768),r=(0,f.KR)("grid"),s=(0,f.KR)([]),{wishlist:n,toggleWishlist:u,loadWishlist:c}=$(),d=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",v=()=>{if(e.value){const i=e.value.offsetWidth,r=window.innerHeight-e.value.offsetTop,s=l.value?90:220,a=l.value?150:330,n=l.value?10:15,u=-10;t.value=Math.floor(i/(s+n));const c=Math.floor(r/(a+u));o.value=t.value*c,g()}},g=()=>{const e=(i.value-1)*o.value,l=e+o.value,r=n.value.slice(e,l);s.value=r.reduce(((e,o,i)=>{const l=Math.floor(i/t.value);return e[l]||(e[l]=[]),e[l].push(o),e}),[])},h=(0,a.EW)((()=>Math.ceil(n.value.length/o.value))),p=()=>{i.value<h.value&&i.value++},m=()=>{i.value>1&&i.value--},k=()=>{l.value=window.innerWidth<=768,v()};return(0,a.wB)([n,i],(()=>{g()})),(0,a.sV)((()=>{if(c(),k(),window.addEventListener("resize",k),e.value){const t=new ResizeObserver(v);t.observe(e.value)}})),(0,a.hi)((()=>{window.removeEventListener("resize",k)})),{gridContainer:e,rowSize:t,currentPage:i,isMobile:l,currentView:r,wishlist:n,visibleWishlistMovies:s,totalPages:h,getImageUrl:d,nextPage:p,prevPage:m,toggleWishlist:u}}};const ae=(0,L.A)(se,[["render",re],["__scopeId","data-v-7d045357"]]);var ne=ae,ue={name:"HomeWishlist",components:{MovieWishlist:ne}};const ce=(0,L.A)(ue,[["render",G],["__scopeId","data-v-052c169e"]]);var de=ce;const ve={class:"container-search"},ge={class:"container-search-bar"},he={class:"content-search"};function pe(e,t,o,i,l,r){const s=(0,a.g2)("MovieSearch"),n=(0,a.g2)("MovieInfiniteScroll");return(0,a.uX)(),(0,a.CE)("div",ve,[(0,a.Lk)("div",ge,[(0,a.bF)(s,{onChangeOptions:i.changeOptions},null,8,["onChangeOptions"])]),(0,a.Lk)("div",he,[(0,a.bF)(n,{apiKey:i.apiKey,genreCode:i.genreId,sortingOrder:i.sortId,voteAverage:i.ageId},null,8,["apiKey","genreCode","sortingOrder","voteAverage"])])])}const me={class:"dropdown-container"},fe=["onClick"],ke={key:0,class:"select-items"},we=["onClick"];function be(e,t,o,i,l,r){return(0,a.uX)(),(0,a.CE)("div",me,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.dropdownEntries,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.key,class:"custom-select"},[(0,a.Lk)("div",{class:"select-selected",onClick:o=>e.toggleDropdown(t.key)},(0,n.v_)(e.selectedOptions[t.key]),9,fe),e.activeDropdown===t.key?((0,a.uX)(),(0,a.CE)("div",ke,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.options,(o=>((0,a.uX)(),(0,a.CE)("div",{key:o,onClick:i=>e.selectOption(t.key,o)},(0,n.v_)(o),9,we)))),128))])):(0,a.Q3)("",!0)])))),128)),(0,a.Lk)("button",{class:"clear-options",onClick:t[0]||(t[0]=(...t)=>e.clearOptions&&e.clearOptions(...t))},"초기화")])}o(1454);var Le=(0,a.pM)({name:"MovieSearch",emits:["changeOptions"],setup(e,{emit:t}){const o={originalLanguage:["장르 (전체)","Action","Adventure","Comedy","Crime","Family"],translationLanguage:["평점 (전체)","9~10","8~9","7~8","6~7","5~6","4~5","4점 이하"],sorting:["언어 (전체)","영어","한국어"]},i={originalLanguage:"장르 (전체)",translationLanguage:"평점 (전체)",sorting:"언어 (전체)"},l=(0,f.KR)({...i}),r=(0,f.KR)(null),s=(0,a.EW)((()=>Object.entries(o).map((([e,t])=>({key:e,options:t}))))),n=e=>{r.value=r.value===e?null:e},u=(e,o)=>{l.value={...l.value,[e]:o},r.value=null,t("changeOptions",l.value)},c=()=>{l.value={...i},t("changeOptions",l.value)};return{dropdownEntries:s,selectedOptions:l,activeDropdown:r,toggleDropdown:n,selectOption:u,clearOptions:c}}});const ye=(0,L.A)(Le,[["render",be]]);var Ce=ye;const Me={class:"movie-grid",ref:"gridContainer"},Re=["onMouseup"],Ee=["src","alt"],Se={class:"movie-title"},Ie={key:0,class:"wishlist-indicator"},Ke={ref:"loadingTrigger",class:"loading-trigger"},We={key:0,class:"loading-indicator"};function _e(e,t,o,i,l,r){return(0,a.uX)(),(0,a.CE)("div",Me,[(0,a.Lk)("div",{class:(0,n.C4)(["grid-container",i.currentView])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.visibleMovieGroups,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:"movie-row"},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card",onMouseup:t=>i.toggleWishlist(e)},[(0,a.Lk)("img",{src:i.getImageUrl(e.poster_path),alt:e.title,loading:"lazy"},null,8,Ee),(0,a.Lk)("div",Se,(0,n.v_)(e.title),1),i.isInWishlist(e.id)?((0,a.uX)(),(0,a.CE)("div",Ie,"👍")):(0,a.Q3)("",!0)],40,Re)))),128))])))),128))],2),(0,a.Lk)("div",Ke,[i.isLoading?((0,a.uX)(),(0,a.CE)("div",We,t[1]||(t[1]=[(0,a.Lk)("div",{class:"spinner"},null,-1),(0,a.Lk)("span",null,"Loading...",-1)]))):(0,a.Q3)("",!0)],512),i.showTopButton?((0,a.uX)(),(0,a.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>i.scrollToTopAndReset&&i.scrollToTopAndReset(...e)),class:"top-button","aria-label":"맨 위로 이동"}," Top ")):(0,a.Q3)("",!0)],512)}var Pe={name:"MovieInfiniteScroll",props:{genreCode:{type:String,required:!0},apiKey:{type:String,required:!0},sortingOrder:{type:String,default:"all"},voteAverage:{type:Number,default:100}},setup(e){const t=(0,f.KR)([]),o=(0,f.KR)(1),i=(0,f.KR)(4),l=(0,f.KR)(!1),r=(0,f.KR)(window.innerWidth<=768),s=(0,f.KR)("grid"),n=(0,f.KR)(!0),u=(0,f.KR)(!1),{toggleWishlist:c,isInWishlist:d}=$(),v=(0,f.KR)(null),g=(0,f.KR)(null);let h=null;const p=async()=>{if(!l.value&&n.value){l.value=!0;try{const i="0"===e.genreCode?"https://api.themoviedb.org/3/movie/popular":"https://api.themoviedb.org/3/discover/movie",l={api_key:e.apiKey,language:"ko-KR",page:o.value,with_genres:"0"!==e.genreCode?e.genreCode:void 0},r=await x.A.get(i,{params:l}),s=r.data.results;if(s.length>0){let i=[...t.value,...s];"all"!==e.sortingOrder&&(i=i.filter((t=>t.original_language===e.sortingOrder))),i=i.filter((t=>-1===e.voteAverage||(-2===e.voteAverage?t.vote_average<=4:t.vote_average>=e.voteAverage&&t.vote_average<e.voteAverage+1))),"en"===e.sortingOrder?i.sort(((e,t)=>e.title.localeCompare(t.title))):"ko"===e.sortingOrder&&i.sort(((e,t)=>e.title.localeCompare(t.title,"ko"))),t.value=i,o.value++}else n.value=!1}catch(i){console.error("Error fetching movies:",i)}finally{l.value=!1}}};(0,a.wB)([()=>e.genreCode,()=>e.sortingOrder,()=>e.voteAverage],(()=>{t.value=[],o.value=1,n.value=!0,p()}));const m=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",k=(0,a.EW)((()=>t.value.reduce(((e,t,o)=>{const l=Math.floor(o/i.value);return e[l]||(e[l]=[]),e[l].push(t),e}),[]))),w=()=>{if(r.value=window.innerWidth<=768,v.value){const e=v.value.offsetWidth,t=r.value?100:300,o=r.value?10:15;i.value=Math.floor(e/(t+o))}},b=()=>{u.value=window.scrollY>300},L=()=>{window.scrollTo({top:0,behavior:"smooth"}),t.value=[],o.value=1,n.value=!0,p()},y=()=>{h=new IntersectionObserver((e=>{e[0].isIntersecting&&!l.value&&n.value&&p()})),g.value&&h.observe(g.value)};return(0,a.sV)((()=>{y(),p(),w(),window.addEventListener("resize",w),window.addEventListener("scroll",b)})),(0,a.xo)((()=>{window.removeEventListener("resize",w),window.removeEventListener("scroll",b),h&&h.disconnect()})),{movies:t,isLoading:l,showTopButton:u,currentView:s,visibleMovieGroups:k,getImageUrl:m,scrollToTopAndReset:L,toggleWishlist:c,isInWishlist:d,loadingTrigger:g,gridContainer:v}}};const Fe=(0,L.A)(Pe,[["render",_e],["__scopeId","data-v-6f3fd3ea"]]);var Xe=Fe,Ue={name:"HomeSearch",components:{MovieSearch:Ce,MovieInfiniteScroll:Xe},setup(){const e=(0,f.KR)(localStorage.getItem("TMDb-Key")||""),t=(0,f.KR)("28"),o=(0,f.KR)(-1),i=(0,f.KR)("all"),l={"장르 (전체)":0,Action:28,Adventure:12,Comedy:35,Crime:80,Family:10751},r={"언어 (전체)":"all","영어":"en","한국어":"ko"},s={"평점 (전체)":-1,"9~10":9,"8~9":8,"7~8":7,"6~7":6,"5~6":5,"4~5":4,"4점 이하":-2},a=e=>{t.value=l[e.originalLanguage]||"0",i.value=r[e.sorting]||"all",o.value=s[e.translationLanguage]||-1};return{apiKey:e,genreId:t,ageId:o,sortId:i,changeOptions:a}}};const Ae=(0,L.A)(Ue,[["render",pe]]);var Oe=Ae;const Te={class:"popular-container"},xe={class:"view-toggle"};function Ve(e,t,o,i,l,r){const s=(0,a.g2)("font-awesome-icon"),u=(0,a.g2)("MovieGrid"),c=(0,a.g2)("MovieInfiniteScroll");return(0,a.uX)(),(0,a.CE)("div",Te,[(0,a.Lk)("div",xe,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=e=>i.setView("grid")),class:(0,n.C4)({active:"grid"===i.currentView})},[(0,a.bF)(s,{icon:i.faTh},null,8,["icon"])],2),(0,a.Lk)("button",{onClick:t[1]||(t[1]=e=>i.setView("list")),class:(0,n.C4)({active:"list"===i.currentView})},[(0,a.bF)(s,{icon:i.faBars},null,8,["icon"])],2)]),"grid"===i.currentView?((0,a.uX)(),(0,a.Wv)(u,{key:0,title:"인기 영화",fetchUrl:i.fetchURL},null,8,["fetchUrl"])):(0,a.Q3)("",!0),"list"===i.currentView?((0,a.uX)(),(0,a.Wv)(c,{key:1,apiKey:i.apiKey,genreCode:i.genreCode,sortingOrder:i.sortingOrder,voteAverage:i.voteAverage},null,8,["apiKey","genreCode","sortingOrder","voteAverage"])):(0,a.Q3)("",!0)])}var $e=o(6188),Be=o(5597);const De={class:"movie-grid",ref:"gridContainer"},qe=["onMouseup"],je=["src","alt"],Je={class:"movie-title"},Qe={key:0,class:"wishlist-indicator"},ze={key:0,class:"pagination"},He=["disabled"],Ge=["disabled"];function Ne(e,t,o,i,l,r){return(0,a.uX)(),(0,a.CE)("div",De,[(0,a.Lk)("div",{class:(0,n.C4)(["grid-container",i.currentView])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.visibleMovieGroups,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:(0,n.C4)(["movie-row",{full:e.length===i.rowSize}])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card",onMouseup:t=>i.toggleWishlist(e)},[(0,a.Lk)("img",{src:i.getImageUrl(e.poster_path),alt:e.title},null,8,je),(0,a.Lk)("div",Je,(0,n.v_)(e.title),1),i.isInWishlist(e.id)?((0,a.uX)(),(0,a.CE)("div",Qe,"👍")):(0,a.Q3)("",!0)],40,qe)))),128))],2)))),128))],2),i.totalPages>1?((0,a.uX)(),(0,a.CE)("div",ze,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.prevPage&&i.prevPage(...e)),disabled:1===i.currentPage},"< 이전",8,He),(0,a.Lk)("span",null,(0,n.v_)(i.currentPage)+" / "+(0,n.v_)(i.totalPages),1),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.nextPage&&i.nextPage(...e)),disabled:i.currentPage===i.totalPages},"다음 >",8,Ge)])):(0,a.Q3)("",!0)],512)}var Ye={name:"MovieGrid",props:{fetchUrl:{type:String,required:!0}},setup(e){const{toggleWishlist:t,isInWishlist:o}=$(),i=(0,f.KR)(null),l=(0,f.KR)([]),r=(0,f.KR)(1),s=(0,f.KR)(4),n=(0,f.KR)(20),u=(0,f.KR)(window.innerWidth<=768),c=(0,f.KR)("grid");let d=null;const v=async()=>{try{const t=120,o=Math.ceil(t/20);let i=[];for(let l=1;l<=o;l++){const t=await x.A.get(e.fetchUrl,{params:{page:l,per_page:n.value}});i=[...i,...t.data.results]}l.value=i.slice(0,t)}catch(t){console.error("Error fetching movies:",t)}},g=e=>`https://image.tmdb.org/t/p/w300${e}`,h=(0,a.EW)((()=>{const e=(r.value-1)*n.value,t=e+n.value,o=l.value.slice(e,t);return o.reduce(((e,t,o)=>{const i=Math.floor(o/s.value);return e[i]||(e[i]=[]),e[i].push(t),e}),[])})),p=(0,a.EW)((()=>Math.ceil(l.value.length/n.value))),m=()=>{r.value<p.value&&r.value++},k=()=>{r.value>1&&r.value--},w=()=>{u.value=window.innerWidth<=768,b()},b=()=>{if(i.value){const e=i.value,t=e.offsetWidth,o=window.innerHeight-e.offsetTop,l=u.value?90:200,r=u.value?150:220,a=u.value?10:15,c=-10;s.value=Math.floor(t/(l+a));const d=Math.floor(o/(r+c));n.value=s.value*d}};return(0,a.sV)((async()=>{await v(),b(),window.addEventListener("resize",w)})),(0,a.hi)((()=>{window.removeEventListener("resize",w),d&&clearTimeout(d)})),{gridContainer:i,movies:l,currentPage:r,rowSize:s,moviesPerPage:n,isMobile:u,currentView:c,totalPages:p,visibleMovieGroups:h,nextPage:m,prevPage:k,toggleWishlist:t,isInWishlist:o,getImageUrl:g}}};const Ze=(0,L.A)(Ye,[["render",Ne],["__scopeId","data-v-18ad2adb"]]);var et=Ze,tt={name:"HomePopular",components:{FontAwesomeIcon:Be.gc,MovieGrid:et,MovieInfiniteScroll:Xe},setup(){const e=localStorage.getItem("TMDb-Key")||"",t=(0,f.KR)("grid"),o=(0,f.KR)(document.body.style.overflow),i=(0,f.KR)("28"),l=(0,f.KR)("all"),r=(0,f.KR)(-1),s=e=>{t.value=e,"grid"===e?n():u()},n=()=>{document.body.style.overflow="hidden"},u=()=>{document.body.style.overflow=o.value||"auto"},c=J.getURL4PopularMovies(e);return(0,a.sV)((()=>{"grid"===t.value&&n()})),(0,a.hi)((()=>{u()})),{faTh:$e.UTC,faBars:$e.ckx,apiKey:e,currentView:t,setView:s,fetchURL:c,genreCode:i,sortingOrder:l,voteAverage:r}}};const ot=(0,L.A)(tt,[["render",Ve],["__scopeId","data-v-4fe03df0"]]);var it=ot;const lt={key:0,class:"movie-detail"},rt=["src"],st={key:1,class:"loading"};function at(e,t,o,i,l,r){return i.movie?((0,a.uX)(),(0,a.CE)("div",lt,[(0,a.Lk)("img",{src:i.getImageUrl(i.movie.poster_path),alt:"Movie Poster"},null,8,rt),(0,a.Lk)("h2",null,(0,n.v_)(i.movie.title),1),(0,a.Lk)("p",null,(0,n.v_)(i.movie.overview),1),(0,a.Lk)("p",null,"Release Date: "+(0,n.v_)(i.movie.release_date),1),(0,a.Lk)("p",null,"Rating: "+(0,n.v_)(i.movie.vote_average),1)])):((0,a.uX)(),(0,a.CE)("div",st,t[0]||(t[0]=[(0,a.Lk)("p",null,"Loading movie details...",-1)])))}var nt={name:"MovieDetail",props:{movieId:{type:Number,required:!0}},setup(e){const t=(0,f.KR)(null),o=async()=>{try{const o=await x.A.get(`https://api.themoviedb.org/3/movie/${e.movieId}?api_key=81f42d2de384021ea4f2689001e1860a&language=ko-KR`);t.value=o.data}catch(o){console.error("Error fetching movie details:",o)}},i=e=>`https://image.tmdb.org/t/p/w500${e}`;return(0,a.sV)((()=>{o()})),{movie:t,getImageUrl:i}}};const ut=(0,L.A)(nt,[["render",at],["__scopeId","data-v-a5ce11a6"]]);var ct=ut;const dt=[{path:"/",component:()=>Promise.resolve().then(o.bind(o,9631)),children:[{path:"",component:H,meta:{requiresAuth:!0}},{path:"popular",component:it,meta:{requiresAuth:!0}},{path:"wishlist",component:de,meta:{requiresAuth:!0}},{path:"search",component:Oe,meta:{requiresAuth:!0}}]},{path:"/signin",component:C},{path:"/movie/:movieId",name:"MovieDetail",component:ct,props:!0,meta:{requiresAuth:!0}}],vt=(0,r.aE)({history:(0,r.Bt)(),routes:dt,linkExactActiveClass:"exact-active-link"});s(vt);var gt=vt;o(7917);const ht=(0,i.Ef)(l["default"]);ht.use(gt),ht.use(w.Ay,{position:"top-right",timeout:2e3,closeOnClick:!0,pauseOnHover:!0}),ht.mount("#app")},9631:function(e,t,o){o.r(t),o.d(t,{default:function(){return P}});var i=o(641),l=o(3751);const r={id:"app"};function s(e,t,o,s,a,n){const u=(0,i.g2)("Header"),c=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(u),(0,i.bF)(l.eB,{name:"fade",mode:"out-in"},{default:(0,i.k6)((()=>[((0,i.uX)(),(0,i.Wv)(c,{key:e.$route.fullPath}))])),_:1})])}var a=o(33);const n={id:"container"},u={class:"header-left"},c={class:"logo"},d={class:"nav-links desktop-nav"},v={class:"header-right"},g={key:0,class:"user-id"},h={key:0,class:"header-search"},p={key:0,class:"recent-searches"},m=["onClick"],f=["onClick"],k={class:"search-results"},w=["src"];function b(e,t,o,r,s,b){const L=(0,i.g2)("font-awesome-icon"),y=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",n,[(0,i.Lk)("header",{class:(0,a.C4)(["app-header",{scrolled:r.isScrolled}])},[(0,i.Lk)("div",u,[(0,i.Lk)("div",c,[(0,i.bF)(y,{to:"/"},{default:(0,i.k6)((()=>[(0,i.bF)(L,{icon:r.faFilm,style:{height:"100%",color:"#E50914"}},null,8,["icon"])])),_:1})]),(0,i.Lk)("nav",d,[(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.bF)(y,{to:"/",exact:""},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("Home")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(y,{to:"/popular"},{default:(0,i.k6)((()=>t[8]||(t[8]=[(0,i.eW)("Popular")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(y,{to:"/wishlist"},{default:(0,i.k6)((()=>t[9]||(t[9]=[(0,i.eW)("Wislist")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(y,{to:"/search"},{default:(0,i.k6)((()=>t[10]||(t[10]=[(0,i.eW)("Search")]))),_:1})])])])]),(0,i.Lk)("div",v,[r.user?((0,i.uX)(),(0,i.CE)("div",g,"환영합니다🎉 "+(0,a.v_)(r.user.id)+"님",1)):(0,i.Q3)("",!0),(0,i.Lk)("button",{class:"icon-button",onClick:t[0]||(t[0]=(...e)=>r.toggleSearch&&r.toggleSearch(...e))},[(0,i.bF)(L,{icon:r.faSearch},null,8,["icon"])]),(0,i.Lk)("button",{class:"icon-button",onClick:t[1]||(t[1]=(...e)=>r.removeKey&&r.removeKey(...e))},[(0,i.bF)(L,{icon:r.faRightFromBracket},null,8,["icon"])]),(0,i.Lk)("button",{class:"icon-button mobile-menu-button",onClick:t[2]||(t[2]=(...e)=>r.toggleMobileMenu&&r.toggleMobileMenu(...e))},[(0,i.bF)(L,{icon:r.faBars},null,8,["icon"])])])],2),(0,i.Lk)("div",{class:(0,a.C4)(["mobile-nav",{open:r.isMobileMenuOpen}])},[(0,i.Lk)("button",{class:"close-button",onClick:t[3]||(t[3]=(...e)=>r.toggleMobileMenu&&r.toggleMobileMenu(...e))},[(0,i.bF)(L,{icon:r.faTimes},null,8,["icon"])]),(0,i.Lk)("nav",null,[(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.bF)(y,{to:"/",onClick:r.toggleMobileMenu},{default:(0,i.k6)((()=>t[11]||(t[11]=[(0,i.eW)("Home")]))),_:1},8,["onClick"])]),(0,i.Lk)("li",null,[(0,i.bF)(y,{to:"/popular",onClick:r.toggleMobileMenu},{default:(0,i.k6)((()=>t[12]||(t[12]=[(0,i.eW)("Popular")]))),_:1},8,["onClick"])]),(0,i.Lk)("li",null,[(0,i.bF)(y,{to:"/wishlist",onClick:r.toggleMobileMenu},{default:(0,i.k6)((()=>t[13]||(t[13]=[(0,i.eW)("Wishlist")]))),_:1},8,["onClick"])]),(0,i.Lk)("li",null,[(0,i.bF)(y,{to:"/search",onClick:r.toggleMobileMenu},{default:(0,i.k6)((()=>t[14]||(t[14]=[(0,i.eW)("Search")]))),_:1},8,["onClick"])])])])],2),r.isSearchOpen?((0,i.uX)(),(0,i.CE)("div",h,[(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>r.query=e),onInput:t[5]||(t[5]=(...e)=>r.searchMovies&&r.searchMovies(...e)),placeholder:"영화 제목을 입력하세요"},null,544),[[l.Jo,r.query]]),r.recentSearches.length>0?((0,i.uX)(),(0,i.CE)("div",p,[(0,i.Lk)("p",null,[t[15]||(t[15]=(0,i.eW)(" 최근 검색어 ")),(0,i.Lk)("button",{class:"clear-button",onClick:t[6]||(t[6]=(...e)=>r.clearRecentSearches&&r.clearRecentSearches(...e))},"모두 삭제")]),(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.recentSearches,((e,t)=>((0,i.uX)(),(0,i.CE)("li",{key:t,onClick:t=>{r.query=e,r.searchMovies()}},[(0,i.eW)((0,a.v_)(e)+" ",1),(0,i.Lk)("button",{class:"delete-button",onClick:(0,l.D$)((e=>r.deleteSearch(t)),["stop"])},"X",8,f)],8,m)))),128))])])):(0,i.Q3)("",!0),(0,i.Lk)("div",k,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.movies,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"search-result"},[(0,i.bF)(y,{to:{name:"MovieDetail",params:{movieId:e.id}}},{default:(0,i.k6)((()=>[(0,i.Lk)("img",{src:r.getImageUrl(e.poster_path),alt:"Movie Poster"},null,8,w),(0,i.Lk)("h3",null,(0,a.v_)(e.title),1)])),_:2},1032,["to"])])))),128))])])):(0,i.Q3)("",!0)])}o(4114),o(8992),o(2577);var L=o(953),y=o(5220),C=o(5597),M=o(6188),R=o(4335),E={components:{FontAwesomeIcon:C.gc},setup(){const e=(0,y.rd)(),t=(0,L.KR)(!1),o=(0,L.KR)(!1),l=(0,L.KR)(!1),r=(0,L.KR)(""),s=(0,L.KR)([]),a=(0,L.KR)(JSON.parse(localStorage.getItem("recentSearches"))||[]),n=(0,L.KR)(null),u=()=>{const e=localStorage.getItem("currentUserEmail"),t=JSON.parse(localStorage.getItem("users"))||[],o=t.find((t=>t.id===e));n.value=o||null},c=()=>{r.value.trim()&&!a.value.includes(r.value)&&(a.value.unshift(r.value),a.value.length>10&&a.value.pop(),localStorage.setItem("recentSearches",JSON.stringify(a.value)))},d=e=>{a.value.splice(e,1),localStorage.setItem("recentSearches",JSON.stringify(a.value))},v=()=>{a.value=[],localStorage.removeItem("recentSearches")},g=()=>{t.value=window.scrollY>50},h=()=>{o.value=!o.value},p=()=>{l.value=!l.value},m=()=>{localStorage.removeItem("TMDb-Key"),localStorage.removeItem("currentUserEmail"),n.value=null,e.push("/signin")},f=async()=>{if(!(r.value.length<2))try{const e=await R.A.get(`https://api.themoviedb.org/3/search/movie?api_key=81f42d2de384021ea4f2689001e1860a&language=ko-KR&query=${r.value}`);s.value=e.data.results,c()}catch(e){console.error("Error searching movies:",e)}},k=e=>`https://image.tmdb.org/t/p/w300${e}`;return(0,i.sV)((()=>{window.addEventListener("scroll",g),u()})),(0,i.hi)((()=>{window.removeEventListener("scroll",g)})),{faUser:M.X46,faFilm:M.OxR,faBars:M.ckx,faTimes:M.GRI,faSearch:M.MjD,faRightFromBracket:M.yBu,isScrolled:t,isMobileMenuOpen:o,isSearchOpen:l,query:r,movies:s,recentSearches:a,toggleMobileMenu:h,toggleSearch:p,removeKey:m,searchMovies:f,getImageUrl:k,deleteSearch:d,clearRecentSearches:v,user:n}}},S=o(6262);const I=(0,S.A)(E,[["render",b],["__scopeId","data-v-da8cc0aa"]]);var K=I,W={name:"App",components:{Header:K}};const _=(0,S.A)(W,[["render",s]]);var P=_}},t={};function o(i){var l=t[i];if(void 0!==l)return l.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,i,l,r){if(!i){var s=1/0;for(c=0;c<e.length;c++){i=e[c][0],l=e[c][1],r=e[c][2];for(var a=!0,n=0;n<i.length;n++)(!1&r||s>=r)&&Object.keys(o.O).every((function(e){return o.O[e](i[n])}))?i.splice(n--,1):(a=!1,r<s&&(s=r));if(a){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,l,r]}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var l,r,s=i[0],a=i[1],n=i[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(l in a)o.o(a,l)&&(o.m[l]=a[l]);if(n)var c=n(o)}for(t&&t(i);u<s.length;u++)r=s[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},i=self["webpackChunkvue_demosite"]=self["webpackChunkvue_demosite"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[504],(function(){return o(7551)}));i=o.O(i)})();
//# sourceMappingURL=app.5e14c424.js.map