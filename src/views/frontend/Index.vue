<template>
  <main>
    <section class="banner text-white">
      <div class="bannerContain mx-auto">
        <div class="d-flex align-items-center justify-content-around">
          <div>
            <div class="titleName mb-3 text-gold">頂級工藝．先進技術</div>
            <div class="bannerText mb-3">
              來自台灣的專業技師製作，難以抗拒的共鳴音色
              <br />多種入門至進階款式，找到練琴的最佳手感
            </div>
            <router-link to="/products" class="bannerBtn">
              <span>挑選你的吉他</span>
              <span class="angleLine ml-2"></span>
            </router-link>
          </div>
          <div>
            <div class="guitarBox mx-auto position-relative" 
            :style="`background-position-y: ${guitarAni.position}px; transition: background-position-y ${guitarAni.second}s ease-in-out`">
              <div class="pick pickLeft d-none d-lg-block" @click="prevGt">
                <img src="@/assets/images/frontend/index/pick.png" class="img-fluid" />
              </div>
              <div class="pick pickRight d-none d-lg-block" @click="nextGt">
                <img src="@/assets/images/frontend/index/pick.png" class="img-fluid" />
              </div>
            </div>
            <div class="guitarShadow">
              <img src="@/assets/images/frontend/index/shadow.png" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      
    </section>
  </main>
</template>
<script>
export default {
  data(){
    return {
      guitarAni: {
        position: -40,
        second: .4
      },
      windowW : window.innerWidth,
    }
  },
  mounted(){
    this.getWindowH();
  },
  methods:{
    prevGt(){
      if(this.windowW >= 1200) {
        this.guitarAni.second = .4;
        this.guitarAni.position += 989;
        console.log(this.guitarAni.position);
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
        console.log(this.guitarAni.position);
        if(this.guitarAni.position >= -40) {
          setTimeout(()=>{
            this.guitarAni.second = 0;
            this.guitarAni.position = -2264
          }, 300)
        }
      }
    },
    nextGt(){
      if(this.windowW >= 1200) {
        this.guitarAni.second = .4;
        this.guitarAni.position -= 989;
        console.log(this.guitarAni.position);
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
        console.log(this.guitarAni.position);
        if(this.guitarAni.position <= -2264) {
          setTimeout(()=>{
            this.guitarAni.second = 0;
            this.guitarAni.position = -40
          }, 300)
        }
      }
    },
    getWindowH(){
      window.addEventListener('resize', ()=>{
        this.windowW = window.innerWidth;
        window.location.reload();
      })
    }
  },
};
</script>
<style lang="scss" scoped>
/*BANNER*/
.banner {
  background-image: url("~@/assets/images/frontend/index/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vw;
  max-height: 1500px;
}
.bannerContain {
  width: 90%;
  max-width: 1300px;
}
.guitarBox {
  background-image: url("~@/assets/images/frontend/index/guitar.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 65vw;
  @media screen and (min-width: 992px) {
    width: 300px;
    height: 700px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 900px;
  }
}
.pick {
  width: 6vw;
  position: absolute;
  bottom: 30%;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
  @media screen and (min-width: 992px) {
    width: auto;
  }
}
.pickLeft {
  left: -7vw;
  transform: translateX(0) scale(-1);
  transition: transform .2s ease-in-out;
  &:hover {
    transform: translateX(-5px) scale(-1);
  }
}
.pickRight {
  right: -7vw;
  transition: transform .2s ease-in-out;
  &:hover {
    transform: translateX(5px);
  }
}
.guitarShadow {
  width: 30vw;
  max-width: 450px;
}
.bannerText {
  font-size: 2vw;
  line-height: 4vw;
  @media screen and (min-width: 992px) {
    font-size: 1rem;
    line-height: 2.5rem;
  }
}
.bannerBtn {
  border: 1px solid #FFF;
  color: #FFF;
  padding: 10px 15px;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  transition: all .4s ease;
  &:hover {
    color: #FEECBA;
    border-color: #FEECBA;
  }
  &:hover .angleLine{
    width: 80px;
    background-color: #FEECBA;
  }
  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
}
@mixin angleArrow {
  content: '';
  position: absolute;
  right: 0;
  width: 10px;
  height: 1px;
  background-color: #FFF;
}
.angleLine {
  width: 50px;
  height: 1px;
  display: inline-block;
  position: relative;
  transition: all .4s ease;
  background-color: #FFF;
  &::before {
    @include angleArrow;
    top: -4px;
    transform: rotate(45deg);
  }
  &::after {
    @include angleArrow;
    top: 4px;
    transform: rotate(-45deg);
  }
}
/*BANNER END*/
</style>
