export default {
  data(){
    return {
      guitarAni: {
        position: -40,
        second: .4
      },
      windowW : window.innerWidth,
      ele: {
        scale: 1,
        showOtherImg: false, // 其他圖片顯示
        introText: false,
        index: 0,
        translate1: 0,
        translate2: 0
      },
      classical: {
        scale: 1,
        showOtherImg: false, // 其他圖片顯示
        introText: false,
        index: 0,
        translate1: 0,
        translate2: 0
      },
      ukulele: {
        scale: 1,
        showOtherImg: false, // 其他圖片顯示
        introText: false,
        index: 0,
        translate1: 0,
        translate2: 0
      },
      textPosition: -100
    }
  },
  mounted(){
    this.getWindowH();
    this.scrollDom();
    
  },
  computed:{
    eleFade() {
      return this.ele.introText ? 'textFadeIn' : 'textFadeOut';
    },
    classicalFade() {
      return this.classical.introText ? 'textFadeIn' : 'textFadeOut';
    },
    ukuleleFade() {
      return this.ukulele.introText ? 'textFadeIn' : 'textFadeOut';
    },
  },
  methods:{
    // 吉他上一張
    prevGt(){
      if(this.windowW >= 1200) {
        this.guitarAni.second = .4;
        this.guitarAni.position += 989;
        if(this.guitarAni.position >= -40) {
          setTimeout(()=>{
            this.guitarAni.second = 0;
            this.guitarAni.position = -3007
          }, 500)
        }
      }
      if(this.windowW >= 992 && this.windowW < 1200) {
        this.guitarAni.second = .3;
        this.guitarAni.position += 740;
        if(this.guitarAni.position >= -40) {
          setTimeout(()=>{
            this.guitarAni.second = 0;
            this.guitarAni.position = -2264
          }, 300)
        }
      }
    },
    // 吉他下一張
    nextGt(){
      if(this.windowW >= 1200) {
        this.guitarAni.second = .4;
        this.guitarAni.position -= 989;
        if(this.guitarAni.position <= -3007) {
          setTimeout(()=>{
            this.guitarAni.second = 0;
            this.guitarAni.position = -40
          }, 400)
        }
      }
      if(this.windowW >= 992 && this.windowW < 1200) {
        this.guitarAni.second = .3;
        this.guitarAni.position -= 740;
        if(this.guitarAni.position <= -2264) {
          setTimeout(()=>{
            this.guitarAni.second = 0;
            this.guitarAni.position = -40
          }, 300)
        }
      }
    },
    getWindowH(){
      window.addEventListener('resize', () => {
        this.windowW = window.innerWidth;
        window.location.reload(); 
      })
    },
    scrollDom() {
      let beforeScrollY = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      const scrollFun = () => {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        const eleHeight = this.$refs.intro_ele.offsetHeight; // 電吉他 高度
        const eleOffsetTop = this.$refs.intro_ele.offsetTop; // 電吉他 offsetTop
        const classicalHeight = this.$refs.intro_classical.offsetHeight; // 古典吉他 高度
        const classicalOffsetTop = this.$refs.intro_classical.offsetTop; // 古典吉他 offsetTop
        const ukuleleHeight = this.$refs.intro_ukulele.offsetHeight; // 古典吉他 高度
        const ukuleleOffsetTop = this.$refs.intro_ukulele.offsetTop; // 古典吉他 offsetTop
        let isScrollDown = scrollTop >= beforeScrollY ? true : false; // 判斷 scroll 上下
        
        // intro 文字顯示
        if(scrollTop < eleHeight + eleOffsetTop && scrollTop > eleOffsetTop) {
          this.ele.introText = true;
          this.ele.index = 1;
        } else {
          this.ele.introText = false;
          this.ele.index = 0;
        }

        if(scrollTop < classicalHeight + classicalOffsetTop && scrollTop > classicalOffsetTop) {
          this.classical.introText = true;
          this.classical.index = 1;
        } else {
          this.classical.introText = false;
          this.classical.index = 0;
        }

        if(scrollTop < ukuleleHeight + ukuleleOffsetTop && scrollTop > ukuleleOffsetTop) {
          this.ukulele.introText = true;
          this.ukulele.index = 1;
        } else {
          this.ukulele.introText = false;
          this.ukulele.index = 0;
        }
        
        this.textPosition = scrollTop > eleOffsetTop ? 0 : -100;

        // Electric guitar
        if(scrollTop < eleHeight + eleOffsetTop && scrollTop > eleOffsetTop && isScrollDown === true){
          // 往下滾縮小圖片
          this.ele.scale -= 0.005;
          
          // 縮放最小到 0.7
          if(this.ele.scale <= 0.7){
            this.ele.scale = 0.7;
            this.ele.showOtherImg = true;
            this.ele.translate1 += 10;
            this.ele.translate2 += 5;
          } 
          beforeScrollY =  scrollTop;
        } 
        if(scrollTop < eleHeight + eleOffsetTop && scrollTop > eleOffsetTop && isScrollDown === false){
          this.ele.translate1 -= 15;
          this.ele.translate2 -= 10;
          beforeScrollY =  scrollTop;
        } 
      
        // Classical guitar
        if(scrollTop < classicalHeight + classicalOffsetTop && scrollTop > classicalOffsetTop && isScrollDown === true){
          // 往下滾縮小圖片
          this.classical.scale -= 0.005;
          if(this.classical.scale <= 0.7){
            this.classical.scale = 0.7;
            this.classical.showOtherImg = true;
            this.classical.translate1 += 10;
            this.classical.translate2 += 5;
          } 
          beforeScrollY =  scrollTop;
        } 
        if(scrollTop < classicalHeight + classicalOffsetTop && scrollTop > classicalOffsetTop && isScrollDown === false){
          this.classical.translate1 -= 15;
          this.classical.translate2 -= 10;
          beforeScrollY =  scrollTop;
        } 

        // Ukulele guitar
        if(scrollTop < ukuleleHeight + ukuleleOffsetTop && scrollTop > ukuleleOffsetTop && isScrollDown === true){
          // 往下滾縮小圖片
          this.ukulele.scale -= 0.005;
          if(this.ukulele.scale <= 0.7){
            this.ukulele.scale = 0.7;
            this.ukulele.showOtherImg = true;
            this.ukulele.translate1 += 10;
            this.ukulele.translate2 += 5;
          } 
          beforeScrollY =  scrollTop;
        } 
        if(scrollTop < ukuleleHeight + ukuleleOffsetTop && scrollTop > ukuleleOffsetTop && isScrollDown === false){
          this.ukulele.translate1 -= 15;
          this.ukulele.translate2 -= 10;
          beforeScrollY =  scrollTop;
        } 
      }
      window.addEventListener('mousewheel', scrollFun);
    }
  },
};