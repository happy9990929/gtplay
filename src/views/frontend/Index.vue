<template>
  <main ref="mainH">
    <section class="banner text-white">
      <div class="bannerContain mx-auto">
        <div class="d-flex align-items-center justify-content-around">
          <div>
            <div class="titleName mb-3 animate__animated animate__fadeInUp">
              頂級工藝．先進技術
            </div>
            <div class="animate__animated animate__fadeInUp animate__delay-1s">
              <div class="bannerText mb-3">
                來自台灣的專業技師製作，難以抗拒的共鳴音色
                <br />多種入門至進階款式，找到練琴的最佳手感
              </div>
              <router-link
                to="/products"
                class="outlineBtn animate__animated animate__swing animate__delay-2s"
              >
                <span>挑選你的吉他</span>
                <span class="angleLineLeft ml-2"></span>
              </router-link>
            </div>
          </div>
          <div>
            <div
              class="guitarBox mx-auto position-relative"
              :style="
                `background-position-y: ${guitarAni.position}px;`
              "
            >
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
    <section class="mt-5 d-none d-lg-block" ref="intro">
      <div class="position-relative" ref="intro_ele">
        <div :style="`transform: scale(${ele.scale})`">
          <img src="@/assets/images/frontend/index/intro_ele.jpg" class="img-fluid" />
        </div>
        <transition name="fade">
          <div
            class="introBox intro_ele1"
            v-show="ele.showOtherImg === true"
            :style="`transform: translateY(${ele.translate1}px)`"
          >
            <img src="@/assets/images/frontend/index/intro_ele1.jpg" class="img-fluid" />
          </div>
        </transition>
        <transition name="fade">
          <div
            class="introBox intro_ele2"
            v-show="ele.showOtherImg === true"
            :style="`transform: translateY(${ele.translate2}px)`"
          >
            <img src="@/assets/images/frontend/index/intro_ele2.png" class="img-fluid" />
          </div>
        </transition>
      </div>
      <div v-show="ele.showOtherImg === true" style="margin-top: 1000px;">
        <div class="position-relative" ref="intro_classical">
          <div :style="`transform: scale(${classical.scale})`">
            <img src="@/assets/images/frontend/index/intro_classical.jpg" class="img-fluid" />
          </div>
          <transition name="fade">
            <div
              class="introBox intro_classical1"
              v-show="classical.showOtherImg === true"
              :style="`transform: translateY(${classical.translate1}px)`"
            >
              <img src="@/assets/images/frontend/index/intro_classical1.jpg" class="img-fluid" />
            </div>
          </transition>
          <transition name="fade">
            <div
              class="introBox intro_classical2"
              v-show="classical.showOtherImg === true"
              :style="`transform: translateY(${classical.translate2}px)`"
            >
              <img src="@/assets/images/frontend/index/intro_classical2.png" class="img-fluid" />
            </div>
          </transition>
        </div>
      </div>
      <div v-show="classical.showOtherImg === true" style="margin-top: 1000px;">
        <div class="position-relative" ref="intro_ukulele">
          <div :style="`transform: scale(${ukulele.scale})`" class="ukulele mx-auto">
            <img src="@/assets/images/frontend/index/intro_ukulele.jpg" class="img-fluid" />
          </div>
          <transition name="fade">
            <div
              class="introBox intro_ukulele1"
              v-show="ukulele.showOtherImg === true"
              :style="`transform: translateY(${ukulele.translate1}px)`"
            >
              <img src="@/assets/images/frontend/index/intro_ukulele1.jpg" class="img-fluid" />
            </div>
          </transition>
          <transition name="fade">
            <div
              class="introBox intro_ukulele2"
              v-show="ukulele.showOtherImg === true"
              :style="`transform: translateY(${ukulele.translate2}px)`"
            >
              <img src="@/assets/images/frontend/index/intro_ukulele2.png" class="img-fluid" />
            </div>
          </transition>
        </div>
      </div>
      <div>
        <router-link
          to="/products"
          class="introText"
          :style="`bottom: ${textPosition}%; z-index: ${ele.index}`"
        >
          <span :class="[eleFade, 'textStroke']" style="animation-delay:.2s;">E</span>
          <span :class="eleFade" style="animation-delay:.3s;">l</span>
          <span :class="eleFade" style="animation-delay:.4s;">e</span>
          <span :class="eleFade" style="animation-delay:.5s;">c</span>
          <span :class="eleFade" style="animation-delay:.6s;">t</span>
          <span :class="eleFade" style="animation-delay:.7s;">r</span>
          <span :class="eleFade" style="animation-delay:.8s;">i</span>
          <span :class="eleFade" style="animation-delay:.9s;">c</span>
          <span :class="eleFade" style="width: 2rem; display: inline-block"> </span>
          <span :class="[eleFade, 'textStroke']" style="animation-delay:1.1s;">g</span>
          <span :class="eleFade" style="animation-delay:1.2s;">u</span>
          <span :class="eleFade" style="animation-delay:1.3s;">i</span>
          <span :class="eleFade" style="animation-delay:1.4s;">t</span>
          <span :class="eleFade" style="animation-delay:1.5s;">a</span>
          <span :class="eleFade" style="animation-delay:1.6s;">r</span>
        </router-link>
        <router-link
          to="/products"
          class="introText"
          :style="`bottom: ${textPosition}%; z-index: ${classical.index}`"
        >
          <span :class="[classicalFade, 'textStroke']" style="animation-delay:.2s;">C</span>
          <span :class="classicalFade" style="animation-delay:.3s;">l</span>
          <span :class="classicalFade" style="animation-delay:.4s;">a</span>
          <span :class="classicalFade" style="animation-delay:.5s;">s</span>
          <span :class="classicalFade" style="animation-delay:.6s;">s</span>
          <span :class="classicalFade" style="animation-delay:.7s;">i</span>
          <span :class="classicalFade" style="animation-delay:.8s;">c</span>
          <span :class="classicalFade" style="animation-delay:.9s;">a</span>
          <span :class="classicalFade" style="animation-delay: 1s;">l</span>
          <span :class="classicalFade" style="width: 2rem; display: inline-block"> </span>
          <span :class="[classicalFade, 'textStroke']" style="animation-delay:1.1s;">g</span>
          <span :class="classicalFade" style="animation-delay:1.2s;">u</span>
          <span :class="classicalFade" style="animation-delay:1.3s;">i</span>
          <span :class="classicalFade" style="animation-delay:1.4s;">t</span>
          <span :class="classicalFade" style="animation-delay:1.5s;">a</span>
          <span :class="classicalFade" style="animation-delay:1.6s;">r</span>
        </router-link>
        <router-link
          to="/products"
          class="introText"
          :style="`bottom: ${textPosition}%; z-index: ${ukulele.index}`"
        >
          <span :class="[ukuleleFade, 'textStroke']" style="animation-delay:.2s;">U</span>
          <span :class="ukuleleFade" style="animation-delay:.3s;">k</span>
          <span :class="ukuleleFade" style="animation-delay:.4s;">u</span>
          <span :class="ukuleleFade" style="animation-delay:.5s;">l</span>
          <span :class="ukuleleFade" style="animation-delay:.6s;">e</span>
          <span :class="ukuleleFade" style="animation-delay:.7s;">l</span>
          <span :class="ukuleleFade" style="animation-delay:.8s;">e</span>
        </router-link>
      </div>
    </section>
    <section class="d-block d-lg-none">
      <div class="my-5">
        <div>
          <img src="@/assets/images/frontend/index/intro_ele.jpg" class="imgBg" />
        </div>
        <router-link to="/products" class="mIntro h2 d-block text-center">
          Electric Guitar
        </router-link>
      </div>
      <div class="my-5">
        <div>
          <img src="@/assets/images/frontend/index/intro_classical.jpg" class="imgBg" />
        </div>
        <router-link to="/products" class="mIntro h2 d-block text-center">
          Classical Guitar
        </router-link>
      </div>
      <div class="my-5">
        <div>
          <img src="@/assets/images/frontend/index/intro_ukulele.jpg" class="imgBg" />
        </div>
        <router-link to="/products" class="mIntro h2 d-block text-center">Ukulele</router-link>
      </div>
    </section>
    <footer
      class="text-center pt-5 pb-1"
      style="margin-top: 500px;"
      v-show="ukulele.showOtherImg === true"
    >
      <div class="mt-5 d-block d-lg-flex justify-content-center">
        <div>
          © 2021. All Rights Reserved.
        </div>
        <div>
          For learning use only, no commercial use
        </div>
      </div>
    </footer>
  </main>
</template>
<script>
import index from "./index.vue.js";
export default index;
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
  transition: background-position-y .4s ease-in-out;
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
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateX(-5px) scale(-1);
  }
}
.pickRight {
  right: -7vw;
  transition: transform 0.2s ease-in-out;
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

.titleName {
  font-size: 3vw;
  color: #feecba;
  @media screen and (min-width: 992px) {
    font-size: 2rem;
  }
}

/*BANNER END*/
/*INTRO*/
.introBox {
  position: absolute;
  transition: all 0.4s ease;
}
.intro_ele1 {
  width: 25vw;
  left: 10%;
  bottom: 0;
}
.intro_ele2 {
  width: 30vw;
  right: 15%;
  bottom: -25vw;
}
.intro_classical1 {
  width: 15vw;
  left: 10%;
  bottom: -10vw;
}
.intro_classical2 {
  width: 25vw;
  right: 15%;
  bottom: -25vw;
}
.ukulele {
  width: 55vw;
}
.intro_ukulele1 {
  width: 18vw;
  left: 20%;
  bottom: 5%;
}
.intro_ukulele2 {
  width: 25vw;
  right: 15%;
  bottom: -20vw;
}
.introText {
  position: fixed;
  bottom: 0;
  left: 3%;
  font-size: 4rem;
  opacity: 0.8;
  color: #fff;
  @media screen and (min-width: 1200px) {
    font-size: 6rem;
  }
  &:hover {
    opacity: 1;
    color: #feecba;
  }
}
.mIntro {
  color: #fff;
  opacity: 0.7;
}
.textStroke {
  -webkit-text-stroke: 2px #fff;
  color: transparent;
}
.textFadeIn {
  animation-name: textFadeIn;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  display: inline-block;
  opacity: 0;
}
.textFadeOut {
  animation-name: textFadeOut;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  display: inline-block;
  opacity: 1;
}
@keyframes textFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes textFadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
/*INTRO END*/

.imgBg {
  height: 300px;
  width: 100%;
  object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.footer {
  font-size: 0.75rem;
}
</style>
