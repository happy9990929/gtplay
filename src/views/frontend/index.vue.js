export default {
  data() {
    return {
      guitarPosition: -40, // 吉他選單
      windowW: window.innerWidth, // 螢幕寬度
      ele: {
        scale: 1,
        title: false, // 文字
        imgs: false, // 圖片顯示
        imgLeft: 0, // 左圖
        imgRight: 0 // 右圖
      },
      classical: {
        banner: false,
        scale: 1,
        imgs: false,
        title: false,
        imgLeft: 0,
        imgRight: 0
      },
      ukulele: {
        banner: false,
        scale: 1,
        imgs: false,
        title: false,
        imgLeft: 0,
        imgRight: 0
      },
      titlePosition: -100,
      beforeScrollY:
        document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
      eleStyle: "",
      ukuleleStyle: "",
      classicalStyle: ""
    };
  },
  mounted() {
    window.addEventListener("resize", this.getWindowH);
    window.addEventListener("scroll", this.scrollDom);
  },
  computed: {
    // 吉他選單左右按鈕
    prevStyle() {
      return this.guitarPosition >= -40 ? "filter: brightness(0.5)" : "";
    },
    nextStyle() {
      if (this.windowW >= 1200) {
        if (this.guitarPosition <= -2018) {
          return "filter: brightness(0.5)";
        } else {
          return "";
        }
      }
      if (this.windowW >= 992 && this.windowW < 1200) {
        if (this.guitarPosition <= -1520) {
          return "filter: brightness(0.5)";
        } else {
          return "";
        }
      }
    },
    // title 樣式
    eleFade() {
      return this.ele.title ? "textFadeIn" : "textFadeOut";
    },
    classicalFade() {
      return this.classical.title ? "textFadeIn" : "textFadeOut";
    },
    ukuleleFade() {
      return this.ukulele.title ? "textFadeIn" : "textFadeOut";
    },
    // title index
    eleTextIndex() {
      return this.ele.title ? 1 : 0;
    },
    classicalTextIndex() {
      return this.classical.title ? 1 : 0;
    },
    ukuleleTextIndex() {
      return this.ukulele.title ? 1 : 0;
    }
  },
  methods: {
    // 吉他上一張
    prevGt() {
      if (this.windowW >= 1200) {
        this.guitarPosition += 989;
        if (this.guitarPosition >= -40) {
          this.guitarPosition = -40;
        }
      }
      if (this.windowW >= 992 && this.windowW < 1200) {
        this.guitarPosition += 740;
        if (this.guitarPosition >= -40) {
          this.guitarPosition = -40;
        }
      }
    },
    // 吉他下一張
    nextGt() {
      if (this.windowW >= 1200) {
        this.guitarPosition -= 989;
        if (this.guitarPosition <= -2018) {
          this.guitarPosition = -2018;
        }
      }
      if (this.windowW >= 992 && this.windowW < 1200) {
        this.guitarPosition -= 740;
        if (this.guitarPosition <= -1520) {
          this.guitarPosition = -1520;
        }
      }
    },
    getWindowH() {
      this.windowW = window.innerWidth;
      window.location.reload();
    },
    scrollDom() {
      const scrollFun = () => {
        let scrollTop =
          document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        let isScrollDown = scrollTop >= this.beforeScrollY ? true : false; // 判斷 scroll 上下
        const bannerH = this.$refs.banner.offsetHeight;
        const windowH = window.innerHeight;
        // 縮放、imgs動畫
        let eleScale = false;
        let classicalScale = false;
        let ukuleleScale = false;

        // 高度
        const eleTop = bannerH;
        const classcilTop = bannerH + windowH * 2;
        const ukuleleTop = bannerH + windowH * 6;

        // 超過banner
        if (scrollTop > bannerH) {
          this.eleStyle = "position: fixed; top: 0;";
        }

        if (scrollTop > bannerH && scrollTop < bannerH + windowH * 2) {
          this.titlePosition = 0;
          this.ele.title = true;
          this.classical.title = false;
          eleScale = true;
        }
        if (eleScale) {
          // 往下滾
          if (isScrollDown) {
            this.ele.scale -= 0.01;
            this.ele.imgLeft += 1;
            this.ele.imgRight += 1;
            if (this.ele.scale <= 0.7) {
              this.ele.scale = 0.7;
            }
            this.beforeScrollY = scrollTop;
          } else {
            // 往上滾
            this.ele.scale += 0.01;
            this.ele.imgLeft -= 1;
            this.ele.imgRight -= 1;

            if (this.ele.scale >= 1) {
              this.ele.scale = 1;
            }
            this.beforeScrollY = scrollTop;
          }
        }
        if (scrollTop < bannerH) {
          this.eleStyle = "";
          this.titlePosition = -100;
        }
        if (scrollTop > bannerH + windowH) {
          this.eleStyle = `transform: translateY(${windowH}px);`;
          this.ele.imgs = true; // 大於圖片時show小圖
        }
        if (scrollTop < bannerH) {
          this.ele.imgs = false;
        }

        // 木吉他
        if (scrollTop > bannerH + windowH * 2) {
          this.classical.banner = true;
        }

        if (this.$refs.intro_classical.offsetTop > 0) {
          if (scrollTop >= this.$refs.intro_classical.offsetTop) {
            this.classicalStyle = "position: fixed; top: 0;";
          }
        }

        if (scrollTop > bannerH + windowH * 3 && scrollTop < bannerH + windowH * 6) {
          this.classical.title = true;
          this.ele.title = false;
          classicalScale = true;
        }

        if (classicalScale) {
          // 往下滾
          if (isScrollDown) {
            this.classical.scale -= 0.01;
            this.classical.imgLeft += 1;
            this.classical.imgRight += 1;
            if (this.classical.scale <= 0.7) {
              this.classical.scale = 0.7;
            }
            this.beforeScrollY = scrollTop;
          } else {
            // 往上滾
            this.classical.scale += 0.01;
            this.classical.imgLeft -= 1;
            this.classical.imgRight -= 1;

            if (this.classical.scale >= 1) {
              this.classical.scale = 1;
            }
            this.beforeScrollY = scrollTop;
          }
        }

        if (scrollTop < bannerH + windowH) {
          this.classical.banner = false;
          this.classical.imgs = false;
          this.classicalStyle = "";
        }

        if (scrollTop < bannerH + windowH * 3) {
          this.classicalStyle = "";
          this.classical.imgs = false;
        }

        if (scrollTop > bannerH + windowH * 4) {
          this.classical.imgs = true;
        }

        if (scrollTop > bannerH + windowH * 5) {
          this.classicalStyle = `transform: translateY(${windowH * 2}px);`;
        }

        // ukulele
        if (scrollTop > bannerH + windowH * 6) {
          this.ukulele.banner = true;
        }

        if (scrollTop < bannerH + windowH * 5) {
          this.ukulele.banner = false;
          this.ukulele.imgs = false;
          this.ukuleleStyle = "";
        }

        if (scrollTop < bannerH + windowH * 6 && scrollTop > bannerH + windowH * 5) {
          this.ukulele.title = false;
          this.classical.title = true;
        }

        if (this.$refs.intro_ukulele.offsetTop > 0) {
          if (scrollTop >= this.$refs.intro_ukulele.offsetTop) {
            this.ukuleleStyle = "position: fixed; top: 0;";
          }
        }

        if (scrollTop > bannerH + windowH * 7) {
          this.ukulele.title = true;
          this.classical.title = false;
          ukuleleScale = true;
        }

        if (ukuleleScale) {
          // 往下滾
          if (isScrollDown) {
            this.ukulele.scale -= 0.01;
            this.ukulele.imgLeft += 1;
            this.ukulele.imgRight += 1;
            if (this.ukulele.scale <= 0.7) {
              this.ukulele.scale = 0.7;
            }
            this.beforeScrollY = scrollTop;
          } else {
            // 往上滾
            this.ukulele.scale += 0.01;
            this.ukulele.imgLeft -= 1;
            this.ukulele.imgRight -= 1;

            if (this.ukulele.scale >= 1) {
              this.ukulele.scale = 1;
            }
            this.beforeScrollY = scrollTop;
          }
        }

        if (scrollTop < bannerH + windowH * 7) {
          this.ukuleleStyle = "";
          this.ukulele.imgs = false;
        }

        if (scrollTop > bannerH + windowH * 8) {
          this.ukulele.imgs = true;
        }

        if (scrollTop > bannerH + windowH * 9) {
          this.ukuleleStyle = `transform: translateY(${windowH * 2}px);`;
        }
      };
      scrollFun();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowH);
    window.removeEventListener("scroll", this.scrollDom);
  }
};
