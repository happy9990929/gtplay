<template>
  <div>
    <div class="bannerBox position-relative animate__animated animate__fadeIn">
      <div class="scrollBox" :style="`${scrollBoxStyle}`">
        <div class="mask d-flex justify-content-center align-items-center" :style="
            `background-color: rgba(0,0,0,${mask.opacity}); transform: translateY(${mask.translate}%);`
          ">
          <img src="@/assets/images/frontend/about/GTlogo.png" class="img-fluid px-5 px-md-0" />
        </div>
      </div>
    </div>
    <div class="textBox mx-auto mt-5">
      GTPLAY 創立於 1990 年，是台灣早期少數有提供吉他製作、改裝調整維修的店家，
      擁有多年且豐富的工藝技術，對音色的標準更是嚴格把關，眾人一致叫好的好聲音，
      這裡有多種各式桶身的吉他、電吉他、烏克麗麗挑選，並提供客製需求，打造獨一無二屬於您的吉他。
      <div class="d-flex justify-content-center mx-auto mt-5">
        <img src="@/assets/images/frontend/about/fb.png" class="icon img-fluid" />
        <img src="@/assets/images/frontend/about/ig.png" class="icon img-fluid" />
        <a href="https://github.com/happy9990929" target="_blank">
          <img src="@/assets/images/frontend/about/github.png" class="icon img-fluid" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mask: {
        opacity: 0,
        translate: 100,
      },
      scrollBoxStyle: "position: fixed",
      beforeScroll:
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop,
      windowH: window.innerHeight,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.setMask);
  },
  methods: {
    setMask() {
      const aboutMask = () => {
        // current scrollTop
        let scrollTop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop;

        let isScrollDown = scrollTop >= this.beforeScroll ? true : false; // 判斷 scroll 上下

        // 往下滾
        if (isScrollDown) {
          this.mask.translate = 0;
          // 大於30時出現遮罩，開始加透明度
          if (scrollTop > 100) {
            this.mask.opacity += 0.02;
          }

          // 透明度最高到 0.8
          if (this.mask.opacity >= 0.8) this.mask.opacity = 0.8;

          // 大於螢幕高度，移動到100%
          if (scrollTop > this.windowH)
            this.scrollBoxStyle = "transform: translateY(100%);";

          this.beforeScroll = scrollTop;
        } else {
          // 往上滾
          // 減少透明度
          this.mask.opacity -= 0.01;

          // 大於螢幕高度，固定畫面
          if (scrollTop < this.windowH) this.scrollBoxStyle = "position: fixed";

          // 透明度最低到 0
          if (this.mask.opacity <= 0) this.mask.opacity = 0;

          this.beforeScroll = scrollTop;
        }
      };
      aboutMask();
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.setMask);
  },
};
</script>
<style lang="scss" scoped>
.bannerBox {
  height: 200vh;
}
.scrollBox {
  background-image: url("~@/assets/images/frontend/about/about.jpg");
  background-position-x: center;
  background-size: cover;
  width: 100%;
}
.mask {
  width: 100%;
  height: 100vh;
  transition: all 0.4s ease;
}
.textBox {
  width: 70%;
  line-height: 2rem;
}
.icon {
  margin: 0 10px;
  cursor: pointer;
  transform: rotateY(0deg);
  transition: all 1.2s ease;
  &:hover {
    transform: rotateY(360deg);
  }
}
</style>
