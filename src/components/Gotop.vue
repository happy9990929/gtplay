<template>
  <div v-show="gotopIcon">
    <div class="gotop" @click="scrollTop">
      <span>
        <i class="fas fa-arrow-up"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gotopIcon: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.gotop);
  },
  methods: {
    gotop() {
      let scrollTop =
        document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (scrollTop > 100) {
        this.gotopIcon = true;
      } else {
        this.gotopIcon = false;
      }
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.gotop);
  }
};
</script>

<style lang="scss" scoped>
.gotop {
  right: 1rem;
  bottom: 1rem;
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: #e7a01e;
  color: #fff;
  border-radius: 50%;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
}
</style>