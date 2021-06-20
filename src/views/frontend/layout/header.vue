<template>
  <nav class="navbar navbar-expand-lg navbar-dark pt-lg-3">
    <router-link to="/" class="navbar-brand mx-auto mx-lg-5">
      <img src="@/assets/images/logo.png" class="navLogo" />
    </router-link>
    <button
      class="navbar-toggler border-0 position-absolute"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <div class="navbar-nav text-center">
        <div class="d-lg-flex">
          <router-link class="nav-link text-primary mx-md-3" to="/about">關於我們</router-link>
          <router-link class="nav-link text-primary mx-md-3" to="/products">產品列表</router-link>
          <router-link class="nav-link text-primary mx-md-3 d-lg-none" to="/cart">
            購物車<span class="cartNum text-white ml-1 ml-lg-0">{{ getCartAmount }}</span>
          </router-link>
        </div>
        <router-link to="/cart" class="d-none d-lg-block">
          <div
            class="cartBox text-gold d-flex justify-content-center align-items-center"
            :style="`transform: rotate3d(0, 0, 1, ${cartRotate}deg);`"
          >
            <span class="cartIcon">
              <i class="fas fa-shopping-cart"></i>
              <span class="cartNum text-white">{{ getCartAmount }}</span>
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      cartRotate: 0 // 右上購物車按鈕旋轉角度
    };
  },
  computed: {
    ...mapGetters(["getCartAmount", "getCartTotal"])
  },
  created() {
    this.$store.dispatch("handCart");
    this.scrollCart();
  },
  methods: {
    ...mapActions(["handCart"]),
    scrollCart() {
      let beforeScrollY =
        document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      const setRotate = () => {
        const currentScrollY =
          document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        let isScrollDown = currentScrollY >= beforeScrollY ? true : false;
        if (isScrollDown) {
          // 向下滾動
          this.cartRotate += 0.5;
          beforeScrollY = currentScrollY;
        }
        if (!isScrollDown) {
          this.cartRotate -= 0.8;
          beforeScrollY = currentScrollY;
        }
      };
      window.addEventListener("mousewheel", setRotate);
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  width: 100%;
  font-size: 0.8rem;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0;
  @media screen and (min-width: 992px) {
    position: absolute;
    font-size: 1rem;
    background-color: transparent;
  }
}
.navbar-nav {
  .nav-link {
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
      color: #feecba;
      @media screen and (min-width: 992px) {
        background-color: transparent;
      }
    }
  }
}
.navbar-toggler-icon {
  width: 1rem;
  height: 1rem;
}
.navLogo {
  width: 100px;
  @media screen and (min-width: 992px) {
    width: 200px;
  }
}
.navbar-toggler {
  position: absolute;
  outline: 0;
  top: 4px;
  left: 0;
}
.cartBox {
  background-color: #531000;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  position: fixed;
  right: 2%;
  top: 2%;
  cursor: pointer;
}
.cartNum {
  width: 25px;
  height: 25px;
  line-height: 25px;
  border-radius: 100%;
  font-size: 0.8rem;
  background-color: #000;
  display: inline-block;
  @media screen and (min-width: 992px) {
    position: absolute;
    top: 3px;
    right: -20px;
  }
}
.cartIcon {
  font-size: 30px;
  position: relative;
  padding-top: 12px;
}
</style>
